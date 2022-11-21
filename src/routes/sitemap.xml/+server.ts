export async function GET() {
	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <!-- <url> elements go here -->
      <url>
  <loc>https://www.emittiv.com/</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.emittiv.com/about</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/services</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/projects</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/contact</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/downloads</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/privacy</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.emittiv.com/terms</loc>
  <lastmod>2022-11-16T07:11:04+00:00</lastmod>
  <priority>0.80</priority>
</url>
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
