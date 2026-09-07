#!/usr/bin/env node
// Orchestrates the weekly emittiv.com rank + LLM-appearance report:
//   1. Run the GSC report (never throws - records a missing_credential/
//      fetch_failed error field instead so this run still produces the LLM
//      half of the report).
//   2. Run the LLM appearance panel (per-provider; skips absent credentials).
//   3. Load the most recent PRIOR gsc-*.json for week-over-week deltas.
//   4. Build the Smart Brevity markdown report.
//   5. Send it via ~/.claude/scripts/send-report-email.py (HTML + .md
//      attachment, per workspace convention - reports never go as raw
//      markdown in the email body).
//
// Usage: node scripts/monitor/run-weekly.mjs [--to EMAIL] [--dry-run]
//   --dry-run writes the report files but skips the email send (used by CI/tests).

import { writeFileSync, mkdirSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { runGscReport, DEFAULT_DATA_DIR } from './gsc-report.mjs';
import { runLlmAppearanceReport } from './llm-appearance-report.mjs';
import { buildMarkdownReport } from './lib/report-format.mjs';

const DATA_DIR = DEFAULT_DATA_DIR;
const SEND_SCRIPT = path.join(process.env.HOME ?? '', '.claude', 'scripts', 'send-report-email.py');
const DEFAULT_TO = 'me@martinrobert.me';
const DEFAULT_SUBJECT = 'emittiv.com weekly: rank + LLM appearances';

/** Find the most recent gsc-*.json strictly before `today` (YYYY-MM-DD), if any. */
export function findPreviousGscReport(dataDir, today) {
	if (!existsSync(dataDir)) return null;
	const files = readdirSync(dataDir)
		.filter((f) => /^gsc-\d{4}-\d{2}-\d{2}\.json$/.test(f))
		.filter((f) => f !== `gsc-${today}.json`)
		.sort();
	if (!files.length) return null;
	const latest = files[files.length - 1];
	try {
		return JSON.parse(readFileSync(path.join(dataDir, latest), 'utf8'));
	} catch {
		return null;
	}
}

export async function runWeekly({ to = DEFAULT_TO, dryRun = false } = {}) {
	mkdirSync(DATA_DIR, { recursive: true });
	const today = new Date().toISOString().slice(0, 10);

	const prevGsc = findPreviousGscReport(DATA_DIR, today);

	const [gsc, llm] = await Promise.all([runGscReport(), runLlmAppearanceReport()]);

	writeFileSync(path.join(DATA_DIR, `gsc-${today}.json`), JSON.stringify(gsc, null, 2));
	writeFileSync(path.join(DATA_DIR, `llm-${today}.json`), JSON.stringify(llm, null, 2));

	const markdown = buildMarkdownReport({ gsc, prevGsc, llm });
	const reportPath = path.join(DATA_DIR, `report-${today}.md`);
	writeFileSync(reportPath, markdown);

	let emailResult = { sent: false, reason: 'dry-run' };
	if (!dryRun) {
		if (!existsSync(SEND_SCRIPT)) {
			emailResult = { sent: false, reason: `send-report-email.py not found at ${SEND_SCRIPT}` };
		} else {
			try {
				const out = execFileSync(
					'python3',
					[SEND_SCRIPT, '--to', to, '--subject', DEFAULT_SUBJECT, '--md', reportPath],
					{ encoding: 'utf8', timeout: 30_000 }
				);
				emailResult = { sent: true, output: out.trim() };
			} catch (err) {
				emailResult = {
					sent: false,
					reason: err.stderr ? err.stderr.toString().trim() : err.message
				};
			}
		}
	}

	return { gsc, llm, reportPath, emailResult };
}

function parseArgs(argv) {
	const to = argv.includes('--to') ? argv[argv.indexOf('--to') + 1] : undefined;
	const dryRun = argv.includes('--dry-run');
	return { to, dryRun };
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
	const opts = parseArgs(process.argv.slice(2));
	runWeekly(opts)
		.then((result) => {
			console.log(`Report written: ${result.reportPath}`);
			console.log(
				result.emailResult.sent
					? `Email sent: ${result.emailResult.output}`
					: `Email NOT sent: ${result.emailResult.reason}`
			);
			if (!result.emailResult.sent && !opts.dryRun) process.exitCode = 1;
		})
		.catch((err) => {
			console.error('run-weekly.mjs failed:', err);
			process.exitCode = 1;
		});
}
