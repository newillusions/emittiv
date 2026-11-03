// LLM appearance probes: ask each provider a fixed buyer-style question and
// report whether emittiv (or the legacy newillusions surface) is named.
//
// Credential names looked up in ~/.claude/credential-directory.md:
// OPENAI_API_KEY, ANTHROPIC_API_KEY and GEMINI_API_KEY are present (verified
// 2026-09-08). PERPLEXITY_API_KEY is deliberately absent for now (owner,
// 2026-11-03): that provider is skipped and reported as "skipped (not
// configured)", never an error. Adding the key later needs no code change.

const REQUEST_TIMEOUT_MS = 25_000;

export class MissingCredentialError extends Error {
	constructor(varName, detail) {
		super(`Missing credential: ${varName}${detail ? ` (${detail})` : ''}`);
		this.name = 'MissingCredentialError';
		this.varName = varName;
	}
}

function withTimeout(opts) {
	return { ...opts, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) };
}

async function readErrorBody(res) {
	try {
		return (await res.text()).slice(0, 300);
	} catch {
		return '';
	}
}

export async function askOpenAI(question) {
	const key = process.env.OPENAI_API_KEY;
	if (!key) {
		throw new MissingCredentialError('OPENAI_API_KEY', 'OPENAI_API_KEY not set');
	}
	const res = await fetch(
		'https://api.openai.com/v1/chat/completions',
		withTimeout({
			method: 'POST',
			headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				model: 'gpt-4o-mini',
				messages: [{ role: 'user', content: question }],
				max_tokens: 400
			})
		})
	);
	if (!res.ok) throw new Error(`OpenAI HTTP ${res.status}: ${await readErrorBody(res)}`);
	const data = await res.json();
	return data.choices?.[0]?.message?.content ?? '';
}

export async function askAnthropic(question) {
	const key = process.env.ANTHROPIC_API_KEY;
	if (!key) {
		throw new MissingCredentialError('ANTHROPIC_API_KEY', 'see credential-directory.md line 325');
	}
	const res = await fetch(
		'https://api.anthropic.com/v1/messages',
		withTimeout({
			method: 'POST',
			headers: {
				'x-api-key': key,
				'anthropic-version': '2023-06-01',
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				model: 'claude-haiku-4-5-20251001',
				max_tokens: 400,
				messages: [{ role: 'user', content: question }]
			})
		})
	);
	if (!res.ok) throw new Error(`Anthropic HTTP ${res.status}: ${await readErrorBody(res)}`);
	const data = await res.json();
	return (data.content ?? []).map((block) => block.text ?? '').join('');
}

export async function askGemini(question) {
	const key = process.env.GEMINI_API_KEY;
	if (!key) {
		throw new MissingCredentialError('GEMINI_API_KEY', 'see credential-directory.md line 235');
	}
	const res = await fetch(
		`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
		withTimeout({
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ contents: [{ parts: [{ text: question }] }] })
		})
	);
	if (!res.ok) throw new Error(`Gemini HTTP ${res.status}: ${await readErrorBody(res)}`);
	const data = await res.json();
	return (data.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? '').join('');
}

export async function askPerplexity(question) {
	const key = process.env.PERPLEXITY_API_KEY;
	if (!key) {
		throw new MissingCredentialError('PERPLEXITY_API_KEY', 'optional provider, not configured');
	}
	const res = await fetch(
		'https://api.perplexity.ai/chat/completions',
		withTimeout({
			method: 'POST',
			headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({ model: 'sonar', messages: [{ role: 'user', content: question }] })
		})
	);
	if (!res.ok) throw new Error(`Perplexity HTTP ${res.status}: ${await readErrorBody(res)}`);
	const data = await res.json();
	return data.choices?.[0]?.message?.content ?? '';
}

export const PROVIDERS = [
	{ id: 'openai', label: 'ChatGPT (OpenAI)', ask: askOpenAI, credential: 'OPENAI_API_KEY' },
	{
		id: 'anthropic',
		label: 'Claude (Anthropic)',
		ask: askAnthropic,
		credential: 'ANTHROPIC_API_KEY'
	},
	{ id: 'gemini', label: 'Gemini (Google)', ask: askGemini, credential: 'GEMINI_API_KEY' },
	{ id: 'perplexity', label: 'Perplexity', ask: askPerplexity, credential: 'PERPLEXITY_API_KEY' }
];

/**
 * Does the response text name one of the brand surfaces, and if so in what
 * sentence and at roughly what list position (when the response is a
 * numbered/bulleted recommendation list)?
 */
export function detectMention(responseText, brandNames) {
	if (!responseText) return { mentioned: false };
	const lower = responseText.toLowerCase();
	for (const name of brandNames) {
		const idx = lower.indexOf(name.toLowerCase());
		if (idx === -1) continue;
		const sentence = extractSentence(responseText, idx);
		const position = estimateListPosition(responseText, idx);
		return { mentioned: true, brand: name, sentence, position };
	}
	return { mentioned: false };
}

function extractSentence(text, matchIndex) {
	const start = text.lastIndexOf('.', matchIndex) + 1;
	const enders = ['. ', '.\n', '! ', '? '];
	const ends = enders.map((sep) => text.indexOf(sep, matchIndex)).filter((i) => i !== -1);
	const end = ends.length ? Math.min(...ends) + 1 : text.length;
	return text.slice(start, end).trim();
}

function estimateListPosition(text, matchIndex) {
	const before = text.slice(0, matchIndex);
	const numbered = before.match(/^\s*\d+[.)]\s/gm);
	return numbered ? numbered.length : null;
}
