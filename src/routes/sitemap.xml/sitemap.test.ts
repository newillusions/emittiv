import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import { GET } from './+server';

const ROUTES_DIR = join(process.cwd(), 'src/routes');

/** Every directory under src/routes holding a +page.svelte, as a URL path. */
function discoverPages(dir = ROUTES_DIR, prefix = ''): { path: string; noindex: boolean }[] {
	const found: { path: string; noindex: boolean }[] = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) {
			found.push(...discoverPages(full, `${prefix}/${name}`));
		} else if (name === '+page.svelte') {
			const src = readFileSync(full, 'utf8');
			found.push({ path: prefix || '/', noindex: /name="robots"\s+content="noindex/.test(src) });
		}
	}
	return found;
}

async function sitemapXml(): Promise<string> {
	return (await GET()).text();
}

describe('sitemap.xml', () => {
	test('uses the http:// sitemap and xhtml namespaces from the spec', async () => {
		const xml = await sitemapXml();
		expect(xml).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
		expect(xml).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
		expect(xml).not.toContain('https://www.sitemaps.org');
	});

	test('is well-formed: parses with no errors and every url has loc and a YYYY-MM-DD lastmod', async () => {
		const doc = new DOMParser().parseFromString(await sitemapXml(), 'application/xml');
		expect(doc.getElementsByTagName('parsererror').length).toBe(0);
		const urls = Array.from(doc.getElementsByTagName('url'));
		expect(urls.length).toBeGreaterThan(0);
		for (const u of urls) {
			expect(u.getElementsByTagName('loc')[0].textContent).toMatch(/^https:\/\/www\.emittiv\.com/);
			expect(u.getElementsByTagName('lastmod')[0].textContent).toMatch(/^\d{4}-\d{2}-\d{2}$/);
		}
	});

	test('lists exactly the indexable routes: none noindex, none missing', async () => {
		const xml = await sitemapXml();
		const locs = Array.from(xml.matchAll(/<loc>https:\/\/www\.emittiv\.com([^<]*)<\/loc>/g)).map(
			(m) => m[1] || '/'
		);
		const pages = discoverPages();
		const indexable = pages.filter((p) => !p.noindex).map((p) => p.path);
		const noindex = pages.filter((p) => p.noindex).map((p) => p.path);

		expect(noindex).toEqual(expect.arrayContaining(['/privacy', '/terms']));
		for (const p of noindex) expect(locs).not.toContain(p);
		expect([...locs].sort()).toEqual([...indexable].sort());
		for (const p of ['/services/video', '/projects/the-waterpark', '/projects/the-backdrop']) {
			expect(locs).toContain(p);
		}
	});
});
