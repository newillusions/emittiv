// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { matchTargetTerms } from './gsc-report.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rows = JSON.parse(
	readFileSync(path.join(__dirname, 'fixtures', 'gsc-query-rows.json'), 'utf8')
);

describe('matchTargetTerms', () => {
	it('marks a tracked term as found with its clicks/impressions/position', () => {
		const result = matchTargetTerms(rows, ['lighting design consultant dubai']);
		expect(result).toEqual([
			{
				term: 'lighting design consultant dubai',
				found: true,
				clicks: 4,
				impressions: 62,
				ctr: 0.0645,
				position: 8.3
			}
		]);
	});

	it('matches case-insensitively', () => {
		const result = matchTargetTerms(rows, ['Lighting Design Consultant Dubai']);
		expect(result[0].found).toBe(true);
	});

	it('marks a term with zero GSC impressions in this window as not found', () => {
		const result = matchTargetTerms(rows, ['sensory design studio dubai']);
		expect(result).toEqual([
			{
				term: 'sensory design studio dubai',
				found: false,
				clicks: 0,
				impressions: 0,
				ctr: 0,
				position: null
			}
		]);
	});

	it('does not require an exact match to a different query to succeed (no partial-match false positive)', () => {
		// "hotel facade lighting dubai" exists; "facade lighting design uae" must not match it
		const result = matchTargetTerms(rows, ['facade lighting design uae']);
		expect(result[0].found).toBe(false);
	});

	it('preserves target-term order and handles an empty row set', () => {
		const result = matchTargetTerms([], ['a', 'b']);
		expect(result.map((r) => r.term)).toEqual(['a', 'b']);
		expect(result.every((r) => !r.found)).toBe(true);
	});
});
