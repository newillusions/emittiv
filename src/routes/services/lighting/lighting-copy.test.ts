import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

const root = process.cwd();
const src = readFileSync(join(root, 'src/routes/services/lighting/+page.svelte'), 'utf8');

const norm = (t: string) =>
	t
		.replace(/<[^>]+>/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();

interface Faq {
	name: string;
	acceptedAnswer: { text: string };
}

/** FAQPage entries from the inline JSON-LD string in the page source. */
function jsonLdFaq(): Faq[] {
	// the source holds the JSON inside a JS string literal, so unescape \' first
	const m = src.match(/type="application\/ld\+json">(\{.*?\})<\/scr/s);
	if (!m) throw new Error('JSON-LD block not found');
	const graph = JSON.parse(m[1].replace(/\\'/g, "'"))['@graph'];
	return graph.find((n: { '@type': string }) => n['@type'] === 'FAQPage').mainEntity;
}

/** Visible FAQ question/answer pairs: each .headline followed by its answer span. */
function visibleFaq(): { q: string; a: string }[] {
	const faq = src.slice(src.indexOf('data-label="FAQ"'));
	const re =
		/<span class="headline">([\s\S]*?)<\/span>\s*<div class="spacer-reg"><\/div>\s*<span\s*>([\s\S]*?)<\/span\s*>/g;
	return Array.from(faq.matchAll(re), (m) => ({ q: norm(m[1]), a: norm(m[2]) }));
}

describe('/services/lighting copy', () => {
	test('no "programm" anywhere in the page source', () => {
		expect(src.toLowerCase()).not.toContain('programm');
	});

	test('built page has no "programm" (when a build exists)', () => {
		const built = join(root, '.svelte-kit/cloudflare/services/lighting.html');
		if (!existsSync(built)) return;
		expect(readFileSync(built, 'utf8').toLowerCase()).not.toContain('programm');
	});

	test('FAQ JSON-LD has 13 questions', () => {
		expect(jsonLdFaq()).toHaveLength(13);
	});

	test('visible FAQ has 13 questions matching the JSON-LD names', () => {
		const vis = visibleFaq();
		expect(vis).toHaveLength(13);
		// existing questions are sentence-case in JSON-LD, lowercase on the page
		vis.forEach((v, i) => expect(v.q.toLowerCase()).toBe(jsonLdFaq()[i].name.toLowerCase()));
	});

	test('new FAQ answers (Q7-Q13) are identical in markup and JSON-LD', () => {
		const vis = visibleFaq();
		const ld = jsonLdFaq();
		for (let i = 6; i < 13; i++) {
			expect(vis[i].a).toBe(ld[i].acceptedAnswer.text);
		}
	});

	test('the six new section headings are present', () => {
		const h2s = Array.from(src.matchAll(/<h2>([\s\S]*?)<\/h2>/g), (m) => norm(m[1]));
		for (const h of [
			'design and engineering, in the same head',
			'architecture, facades and everything in between',
			'control is where good lighting lives',
			"runs itself, until you'd rather it didn't",
			'peace of mind, mostly',
			'a second pair of eyes'
		]) {
			expect(h2s).toContain(h);
		}
	});
});
