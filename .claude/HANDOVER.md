# Project Handover - Emittiv Website

## Current Status

All 23 pages live on www.emittiv.com. Major SEO overhaul deployed + animated hero canvas on homepage. Cloudflare Pages deploy confirmed live.

## Last Session

**Date**: 2026-02-23
**Summary**: Implemented comprehensive SEO fixes across 29 files (h1 tags, aria-labels, semantic nav, twitter meta, JSON-LD, sitemap dates, cross-linking) and created an animated Canvas 2D hero background (HeroCanvas.svelte) with simplex noise blobs and a connected particle network that transitions grey-to-orange on connection. Iteratively tuned animation with user feedback. Committed, pushed to both remotes, and confirmed live on Cloudflare Pages.

## Key Context

| Resource         | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| Forgejo repo     | forge.mms.name/emittiv/emittiv-website (private)                |
| GitHub repo      | github.com/newillusions/emittiv (production → Cloudflare Pages) |
| Docker container | 10.0.23.134:3000 on br0 (Unraid primary)                       |
| Production URL   | www.emittiv.com (Cloudflare Pages)                              |
| Matomo           | matomo.emittiv.online (Site ID: 1)                              |
| GSC property     | sc-domain:emittiv.com                                           |
| IndexNow key     | a4bd0f7dc314443d9624867deaf91084                                |

## Next Steps

1. **RETRY GSC INDEXING** — Submit `/projects/al-imam-university` via GSC (quota exceeded last session)
2. **Resubmit sitemap** — Sitemap lastmod dates were updated; resubmit to GSC
3. **Monitor indexing** — Check GSC in 3-5 days for newly submitted URLs
4. **Security headers** — Use security-headers agent to audit and create `static/_headers`
5. **Google Business Profile** — Set up for local SEO
6. **More project pages** — Seaworld, Wild Wadi, Dubai Opera, etc.
7. **Run new tools** — Test lighthouse, pagespeed, linkinator, accessibility MCPs on live site

## Recent Decisions

- **Hero animation style**: Grey particles that glow orange when connected to other particles; grey blob glows (not coloured); 55 particles desktop / 30 mobile
- **SEO h1 strategy**: Service pages use `<h1 class="tagline">`, project pages use `<h1 class="tagline">` in hero overlay, Head* components use `<h1 class="page-header">`
- **Sitemap dates**: Static lastmod dates instead of dynamic `new Date()` — homepage 2026-02-22, services 2026-02-20, projects 2026-02-15
- **Cross-linking**: Service pages link to related projects, project pages link to related services

## Tooling Inventory

| Category | Count | Details |
|----------|-------|---------|
| MCP Servers | 7 | svelte, gsc, matomo, lighthouse, linkinator, accessibility, pagespeed |
| Agents | 10 | seo-auditor, performance-monitor, deployment-validator, content-reviewer, indexnow-notify, image-optimizer, visual-tester, structured-data, security-headers, social-preview |
| Hooks | 1 | pre-deploy-check.sh (build validation on push) |

## Notes

- HeroCanvas uses simplex noise for blob movement, requestAnimationFrame loop, respects prefers-reduced-motion
- All pages now have exactly one `<h1>` — CSS fixes in main.scss prevent bold/margin defaults
- `.mcp.json` is gitignored — local MCP fork is also gitignored (in `.claude/`)

---

*Updated: 2026-02-23*
