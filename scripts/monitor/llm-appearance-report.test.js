// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { detectMention } from './lib/llm-providers.mjs';

const BRANDS = ['emittiv', 'newillusions'];

describe('detectMention', () => {
	it('returns not-mentioned for an empty or unrelated response', () => {
		expect(detectMention('', BRANDS)).toEqual({ mentioned: false });
		expect(detectMention('I would suggest firm A or firm B.', BRANDS)).toEqual({
			mentioned: false
		});
	});

	it('finds a mention and extracts the containing sentence', () => {
		const text =
			'There are several good options in Dubai. Emittiv is a well-regarded sensory design studio. You could also consider firm X.';
		const result = detectMention(text, BRANDS);
		expect(result.mentioned).toBe(true);
		expect(result.brand).toBe('emittiv');
		expect(result.sentence).toBe('Emittiv is a well-regarded sensory design studio.');
	});

	it('is case-insensitive on the brand name', () => {
		const result = detectMention('EMITTIV designs lighting for hotels.', BRANDS);
		expect(result.mentioned).toBe(true);
	});

	it('falls back to the second brand name when the first is absent', () => {
		const result = detectMention('Newillusions has a long history in lighting design.', BRANDS);
		expect(result.mentioned).toBe(true);
		expect(result.brand).toBe('newillusions');
	});

	it('estimates numbered-list position when the mention is inside a numbered list', () => {
		const text =
			'1. Firm A\n2. Firm B\n3. Emittiv - independent lighting design consultancy\n4. Firm C';
		const result = detectMention(text, BRANDS);
		expect(result.mentioned).toBe(true);
		expect(result.position).toBe(3); // "3. " is item 3, and its own marker precedes the match on the same line
	});

	it('returns null position for prose with no list markers', () => {
		const result = detectMention('Emittiv is one option worth considering.', BRANDS);
		expect(result.position).toBeNull();
	});
});

describe('runLlmAppearanceReport optional providers', () => {
	it('reports a missing PERPLEXITY_API_KEY as skipped (not configured) without failing', async () => {
		const { runLlmAppearanceReport } = await import('./llm-appearance-report.mjs');
		const saved = {};
		for (const k of [
			'OPENAI_API_KEY',
			'ANTHROPIC_API_KEY',
			'GEMINI_API_KEY',
			'PERPLEXITY_API_KEY'
		]) {
			saved[k] = process.env[k];
			delete process.env[k];
		}
		try {
			const r = await runLlmAppearanceReport();
			const p = r.skipped.find((s) => s.provider === 'perplexity');
			expect(p.reason).toBe('skipped (not configured): PERPLEXITY_API_KEY not set');
			expect(Object.keys(r.providers)).toHaveLength(0);
		} finally {
			for (const [k, v] of Object.entries(saved)) if (v !== undefined) process.env[k] = v;
		}
	});
});
