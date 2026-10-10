import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

const read = (rel: string) => readFileSync(join(process.cwd(), rel), 'utf8');

interface LdNode {
	'@type': string;
	telephone?: string;
	sameAs?: string[];
	contactPoint?: { telephone?: string };
	address?: Record<string, string>;
}

/** The homepage @graph, parsed out of the inline JSON-LD string in +page.svelte. */
function homeGraph(): LdNode[] {
	const src = read('src/routes/+page.svelte');
	const m = src.match(/type="application\/ld\+json">(\{.*?\})<\/scr/s);
	if (!m) throw new Error('JSON-LD block not found in +page.svelte');
	return JSON.parse(m[1])['@graph'];
}

const byType = (type: string) => homeGraph().find((n) => n['@type'] === type)!;

describe('homepage JSON-LD', () => {
	test('LocalBusiness and ContactPoint carry the site phone number', () => {
		const phone = byType('LocalBusiness').telephone;
		expect(phone).toBe('+971585855569');
		expect(byType('Organization').contactPoint?.telephone).toBe(phone);
		// same number the footer WhatsApp link uses
		expect(read('src/lib/components/Footer.svelte')).toContain('wa.me/971585855569');
	});

	test('Organization sameAs matches every social profile linked in the footer', () => {
		const footer = read('src/lib/components/Footer.svelte')
			.replace(/<!--[\s\S]*?-->/g, '')
			.replace(/\n\s+/g, ' ');
		const social = Array.from(footer.matchAll(/href="(https:\/\/[^"]+)"/g))
			.map((m) => m[1])
			.filter((u) => /facebook|linkedin|instagram|twitter|x\.com/.test(u));
		expect(social.length).toBeGreaterThanOrEqual(4);
		expect([...(byType('Organization').sameAs ?? [])].sort()).toEqual([...social].sort());
	});

	test('address is consistent with the footer (Dubai South, Dubai, UAE)', () => {
		const addr = byType('LocalBusiness').address;
		expect(addr).toMatchObject({
			streetAddress: 'Dubai South',
			addressLocality: 'Dubai',
			addressRegion: 'Dubai',
			addressCountry: 'AE'
		});
		expect(read('src/lib/components/Footer.svelte')).toContain('dubai south, dubai, uae');
	});
});
