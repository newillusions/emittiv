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
	{ path: '/projects', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.9 },
	{
		path: '/projects/the-mosque',
		lastmod: '2026-02-15',
		changefreq: 'yearly',
		priority: 0.7
	},
	{ path: '/projects/the-sail', lastmod: '2026-02-15', changefreq: 'yearly', priority: 0.7 },
	{ path: '/projects/the-exhibition', lastmod: '2026-02-15', changefreq: 'yearly', priority: 0.7 },
	{ path: '/projects/the-research-centre', lastmod: '2026-03-28', changefreq: 'yearly', priority: 0.7 },
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

	// Other pages
	{ path: '/about', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.8 },
	{ path: '/contact', lastmod: '2026-02-20', changefreq: 'monthly', priority: 0.7 },
	{ path: '/downloads', lastmod: '2026-01-15', changefreq: 'monthly', priority: 0.5 },
	{ path: '/privacy', lastmod: '2025-12-01', changefreq: 'yearly', priority: 0.3 },
	{ path: '/terms', lastmod: '2025-12-01', changefreq: 'yearly', priority: 0.3 }
];

const BASE_URL = 'https://www.emittiv.com';

function buildSitemap(entries: SitemapRoute[]): string {
	const urls = entries
		.map(
			(r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(2)}</priority>
  </url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
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
