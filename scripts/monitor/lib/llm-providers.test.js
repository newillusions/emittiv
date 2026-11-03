// @vitest-environment node
import { describe, it, expect, vi, afterEach } from 'vitest';
import { askPerplexity, MissingCredentialError } from './llm-providers.mjs';

// Trimmed from a real Agent API response (2026-11-03, effort "fast").
const COMPLETED = {
	status: 'completed',
	model: 'openai/gpt-6-luna',
	error: null,
	output: [
		{
			type: 'search_results',
			queries: ['best lighting design consultants Dubai'],
			results: [{ id: 1, url: 'https://example.com/a', title: 'A', snippet: 's' }]
		},
		{
			type: 'message',
			role: 'assistant',
			status: 'completed',
			id: 'msg_1',
			content: [
				{
					type: 'output_text',
					text: 'Top picks: **DPA Lighting Consultants**.[1] ',
					annotations: []
				},
				{ type: 'output_text', text: 'Emittiv is also active in Dubai.', annotations: [] }
			]
		}
	],
	usage: { cost: { total_cost: 0.0017 } }
};

function mockFetch(body, init = {}) {
	const fn = vi.fn(async () => ({
		ok: init.ok ?? true,
		status: init.status ?? 200,
		json: async () => body,
		text: async () => JSON.stringify(body)
	}));
	vi.stubGlobal('fetch', fn);
	return fn;
}

afterEach(() => {
	vi.unstubAllGlobals();
	vi.unstubAllEnvs();
});

describe('askPerplexity (Agent API)', () => {
	it('throws MissingCredentialError when the key is unset', async () => {
		vi.stubEnv('PERPLEXITY_API_KEY', '');
		await expect(askPerplexity('q')).rejects.toBeInstanceOf(MissingCredentialError);
	});

	it('posts to /v1/agent with effort fast and returns the joined message text', async () => {
		vi.stubEnv('PERPLEXITY_API_KEY', 'test-key');
		const fn = mockFetch(COMPLETED);
		const text = await askPerplexity('Who is the best?');
		const [url, opts] = fn.mock.calls[0];
		expect(url).toBe('https://api.perplexity.ai/v1/agent');
		expect(JSON.parse(opts.body)).toEqual({ effort: 'fast', input: 'Who is the best?' });
		expect(opts.headers.Authorization).toBe('Bearer test-key');
		expect(text).toBe(
			'Top picks: **DPA Lighting Consultants**.[1] Emittiv is also active in Dubai.'
		);
	});

	it('throws on a non-2xx HTTP status', async () => {
		vi.stubEnv('PERPLEXITY_API_KEY', 'test-key');
		mockFetch({ error: { type: 'chat_completions_not_available' } }, { ok: false, status: 403 });
		await expect(askPerplexity('q')).rejects.toThrow(/Perplexity HTTP 403/);
	});

	it('throws when status is not completed', async () => {
		vi.stubEnv('PERPLEXITY_API_KEY', 'test-key');
		mockFetch({ ...COMPLETED, status: 'failed', error: { message: 'boom' } });
		await expect(askPerplexity('q')).rejects.toThrow(/status failed.*boom/);
	});

	it('throws when completed but no message text', async () => {
		vi.stubEnv('PERPLEXITY_API_KEY', 'test-key');
		mockFetch({ ...COMPLETED, output: [COMPLETED.output[0]] });
		await expect(askPerplexity('q')).rejects.toThrow(/no message text/);
	});
});
