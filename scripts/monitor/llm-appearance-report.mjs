#!/usr/bin/env node
// Weekly LLM-appearance report: asks each of ChatGPT, Claude, Gemini and
// Perplexity a fixed panel of 10 buyer-style questions and records whether
// emittiv (or the legacy newillusions surface) is named, in what sentence,
// and at roughly what list position. Skips a provider whose credential is
// absent and records the gap rather than guessing a variable name.
//
// One short completion per question per provider, no retries beyond the
// implicit single attempt - cost stays small (10 questions x up to 4
// providers = 40 short completions/week).
//
// Usage: node scripts/monitor/llm-appearance-report.mjs [--out-dir DIR]

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROVIDERS, detectMention, MissingCredentialError } from './lib/llm-providers.mjs';
import { BUYER_QUESTIONS, BRAND_NAMES } from './lib/target-terms.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..');
export const DEFAULT_DATA_DIR = path.join(REPO_ROOT, 'data', 'monitor');

async function runProvider(provider) {
	const perQuestion = [];
	for (const q of BUYER_QUESTIONS) {
		try {
			const text = await provider.ask(q.question);
			perQuestion.push({ id: q.id, question: q.question, ...detectMention(text, BRAND_NAMES) });
		} catch (err) {
			perQuestion.push({ id: q.id, question: q.question, error: err.message });
		}
	}
	const mentioned = perQuestion.filter((r) => r.mentioned).length;
	return {
		provider: provider.id,
		label: provider.label,
		mentioned_count: mentioned,
		total_questions: BUYER_QUESTIONS.length,
		results: perQuestion
	};
}

/** Run the full panel across every provider with a credential present. */
export async function runLlmAppearanceReport() {
	const result = {
		generated_at: new Date().toISOString(),
		brands: BRAND_NAMES,
		providers: {},
		skipped: []
	};
	for (const provider of PROVIDERS) {
		if (!process.env[provider.credential]) {
			result.skipped.push({
				provider: provider.id,
				label: provider.label,
				reason: `missing credential ${provider.credential}`
			});
			continue;
		}
		try {
			result.providers[provider.id] = await runProvider(provider);
		} catch (err) {
			result.skipped.push({
				provider: provider.id,
				label: provider.label,
				reason:
					err instanceof MissingCredentialError
						? err.message
						: `provider call failed: ${err.message}`
			});
		}
	}
	return result;
}

async function main() {
	const outDirIdx = process.argv.indexOf('--out-dir');
	const outDir = outDirIdx !== -1 ? process.argv[outDirIdx + 1] : DEFAULT_DATA_DIR;
	mkdirSync(outDir, { recursive: true });
	const result = await runLlmAppearanceReport();
	const today = new Date().toISOString().slice(0, 10);
	const outFile = path.join(outDir, `llm-${today}.json`);
	writeFileSync(outFile, JSON.stringify(result, null, 2));
	console.log(`LLM appearance report written: ${outFile}`);
	if (result.skipped.length) {
		console.error(
			`Skipped providers: ${result.skipped.map((s) => `${s.label} (${s.reason})`).join('; ')}`
		);
	}
	return result;
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
	main().catch((err) => {
		console.error('llm-appearance-report.mjs failed:', err);
		process.exitCode = 1;
	});
}
