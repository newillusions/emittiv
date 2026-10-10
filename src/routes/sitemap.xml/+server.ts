import { execFileSync } from 'node:child_process';

export const prerender = true;

interface SitemapRoute {
	path: string;
	lastmod: string;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority: number;
}

const routes: SitemapRoute[] = [
	{ path: '/', lastmod: '2026-02-22', changefreq: 'weekly', priority: 1.0 },

	// Services
	{ path: '/services', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.9 },
	{ path: '/services/lighting', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },
	{ path: '/services/control', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },
	{ path: '/services/sound', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },
	{ path: '/services/video', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },
	{ path: '/services/content', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },
	{ path: '/services/scent', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.85 },

	// Projects
	{ path: '/projects', lastmod: '2026-03-31', changefreq: 'monthly', priority: 0.9 },
	{
		path: '/projects/the-mosque',
		lastmod: '2026-02-15',
		changefreq: 'yearly',
		priority: 0.7
	},
	{ path: '/projects/the-sail', lastmod: '2026-02-15', changefreq: 'yearly', priority: 0.7 },
	{ path: '/projects/the-exhibition', lastmod: '2026-02-15', changefreq: 'yearly', priority: 0.7 },
	{
		path: '/projects/the-research-centre',
		lastmod: '2026-03-28',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		path: '/projects/the-theme-parks',
		lastmod: '2026-03-28',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		path: '/projects/the-wave',
		lastmod: '2026-03-28',
		changefreq: 'yearly',
		priority: 0.7
	},
	{ path: '/projects/the-hub', lastmod: '2026-03-28', changefreq: 'yearly', priority: 0.7 },
	{
		path: '/projects/the-penguins',
		lastmod: '2026-03-28',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		path: '/projects/the-university',
		lastmod: '2026-03-28',
		changefreq: 'yearly',
		priority: 0.7
	},
	{ path: '/projects/the-waterpark', lastmod: '2026-03-31', changefreq: 'yearly', priority: 0.7 },
	{
		path: '/projects/the-fish-tank',
		lastmod: '2026-03-31',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		path: '/projects/the-observatory',
		lastmod: '2026-04-10',
		changefreq: 'yearly',
		priority: 0.7
	},
	{
		path: '/projects/the-backdrop',
		lastmod: '2026-04-11',
		changefreq: 'yearly',
		priority: 0.7
	},

	// Other pages
	{ path: '/about', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.8 },
	{ path: '/contact', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.7 },
	{ path: '/downloads', lastmod: '2026-01-15', changefreq: 'monthly', priority: 0.5 }
	// /privacy and /terms are noindex,follow, so they are deliberately not listed.
];

const BASE_URL = 'https://www.emittiv.com';

/**
 * Last commit date (YYYY-MM-DD) touching the route's source, so lastmod moves only when
 * the page does and is identical across rebuilds of the same commit. Falls back to the
 * static date above when git history is unavailable (shallow clone, no .git).
 */
function lastmodFor(route: SitemapRoute): string {
	const source = route.path === '/' ? 'src/routes/+page.svelte' : `src/routes${route.path}`;
	try {
		const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', source], {
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore'],
			timeout: 10000
		}).trim();
		return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : route.lastmod;
	} catch {
		return route.lastmod;
	}
}

function buildSitemap(entries: SitemapRoute[]): string {
	const urls = entries
		.map(
			(r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${lastmodFor(r)}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(2)}</priority>
  </url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;
}

export async function GET() {
	return new Response(buildSitemap(routes), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
