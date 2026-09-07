// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { buildMarkdownReport } from './lib/report-format.mjs';

function gscFixture(overrides = {}) {
	return {
		generated_at: '2026-09-07T05:00:00.000Z',
		site: 'sc-domain:emittiv.com',
		windows: {
			'7d': {
				startDate: '2026-08-28',
				endDate: '2026-09-04',
				totals: { clicks: 15, impressions: 200 },
				by_query: [],
				by_page: [],
				target_terms: [
					{
						term: 'lighting design consultant dubai',
						found: true,
						clicks: 4,
						impressions: 62,
						ctr: 0.0645,
						position: 8.3
					},
					{
						term: 'sensory design studio dubai',
						found: false,
						clicks: 0,
						impressions: 0,
						ctr: 0,
						position: null
					}
				]
			},
			'28d': {
				startDate: '2026-08-10',
				endDate: '2026-09-04',
				totals: { clicks: 60, impressions: 900 },
				by_query: [],
				by_page: [],
				target_terms: []
			}
		},
		...overrides
	};
}

function llmFixture(overrides = {}) {
	return {
		generated_at: '2026-09-07T05:00:00.000Z',
		brands: ['emittiv', 'newillusions'],
		providers: {
			anthropic: {
				provider: 'anthropic',
				label: 'Claude (Anthropic)',
				mentioned_count: 1,
				total_questions: 2,
				results: [
					{
						id: 'q1',
						question: 'Who are the best architectural lighting design consultants in Dubai?',
						mentioned: true,
						brand: 'emittiv',
						sentence: 'Emittiv is a well-regarded sensory design studio in Dubai.',
						position: 1
					},
					{ id: 'q2', question: 'Who provides show control in the GCC?', mentioned: false }
				]
			}
		},
		skipped: [
			{ provider: 'openai', label: 'ChatGPT (OpenAI)', reason: 'missing credential OPENAI_API_KEY' }
		],
		...overrides
	};
}

describe('buildMarkdownReport', () => {
	it('includes a headline, why-it-matters line, and both tables', () => {
		const md = buildMarkdownReport({ gsc: gscFixture(), prevGsc: null, llm: llmFixture() });
		expect(md).toContain('**Headline:**');
		expect(md).toContain('**Why it matters:**');
		expect(md).toContain('## Search positions');
		expect(md).toContain('## LLM appearance panel');
	});

	it('caps bullets at 5', () => {
		const md = buildMarkdownReport({ gsc: gscFixture(), prevGsc: null, llm: llmFixture() });
		const bulletLines = md.split('\n').filter((l) => l.startsWith('- '));
		expect(bulletLines.length).toBeLessThanOrEqual(5);
	});

	it('lists every tracked target term in the positions table, found or not', () => {
		const md = buildMarkdownReport({ gsc: gscFixture(), prevGsc: null, llm: llmFixture() });
		expect(md).toContain('lighting design consultant dubai');
		expect(md).toContain('sensory design studio dubai');
	});

	it('reports skipped providers by name', () => {
		const md = buildMarkdownReport({ gsc: gscFixture(), prevGsc: null, llm: llmFixture() });
		expect(md).toContain('ChatGPT (OpenAI)');
	});

	it('degrades gracefully when GSC failed entirely', () => {
		const gsc = {
			generated_at: 'x',
			site: 'sc-domain:emittiv.com',
			error: {
				type: 'missing_credential',
				message: 'Missing credential: GOOGLE_APPLICATION_CREDENTIALS'
			}
		};
		const md = buildMarkdownReport({ gsc, prevGsc: null, llm: llmFixture() });
		expect(md).toContain('Search Console data unavailable');
		expect(md).not.toMatch(/undefined/);
	});

	it('shows a week-over-week delta arrow when a previous report improved position', () => {
		const prevGsc = gscFixture({
			windows: {
				'7d': {
					...gscFixture().windows['7d'],
					target_terms: [
						{
							term: 'lighting design consultant dubai',
							found: true,
							clicks: 2,
							impressions: 40,
							ctr: 0.05,
							position: 12.0
						}
					]
				}
			}
		});
		const md = buildMarkdownReport({ gsc: gscFixture(), prevGsc, llm: llmFixture() });
		// current position 8.3 vs previous 12.0 -> improved (lower is better) -> up arrow
		expect(md).toContain('▲');
	});
});
