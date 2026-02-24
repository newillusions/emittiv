# Project Handover - Emittiv Website

## Current Status

All 23 pages live on www.emittiv.com. Security headers, SEO meta tags, and mobile optimizations deployed. All audit scores at 90-100. Two project pages (al-imam-university, sheikh-zayed-grand-mosque) still unknown to Google — resubmitted via IndexNow.

## Last Session

**Date**: 2026-02-24
**Summary**: Checked GSC indexing for al-imam-university and sheikh-zayed-grand-mosque — both still "URL is unknown to Google". Resubmitted via IndexNow (HTTP 200). Audited emittiv Unraid Docker template against wiki standards — passed all checks; added missing ReadMe and Support URLs. Audited all ~80 Docker templates on primary for missing fields. Fixed 8 CC-deployed templates (lx-specs-api, 3x surrealdb, forgejo, gitea-runner, 2x n8n). Found lx-specs-api is running on AI server (10.0.20.11), removed stale orphan template from primary. Flagged hardcoded CLAUDE_API_KEY in lx-specs-api template as security issue (not yet resolved).

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

1. **Monitor GSC indexing** — Check al-imam-university + sheikh-zayed-grand-mosque again in 2-4 days (resubmitted 2026-02-24)
2. **Responsive images** — Add srcset/sizes to project page images (currently 0% responsive)
3. **Homepage content** — Thin at 171 words, target keyword "lighting design consultancy dubai" not in body text
4. **More project pages** — Seaworld, Wild Wadi, Dubai Opera, etc.
5. **Google Business Profile** — Set up for local SEO
6. **PWA manifest** — Optional, would bring mobile score to 100
7. **lx-specs-api credential issue** — Hardcoded CLAUDE_API_KEY + AILX_API_KEY in AI server template (flag to AILX instance)

## Recent Decisions

- **Security headers**: Full CSP with self + matomo + emailjs, HSTS preload, X-Frame-Options DENY
- **Title strategy**: "Lighting & Sensory Design Consultancy Dubai | emittiv" (53 chars, includes target keyword)
- **Linkinator false positives**: 563 broken links are crawler artifact — no action needed
- **Template audit**: Only CC-deployed containers need template completeness; CA-installed containers are maintained by Community Applications
- **lx-specs-api on primary**: Stale orphan template removed — container runs on AI server (10.0.20.11) at 10.0.21.52:8080

## Audit Scores (as of 2026-02-23)

| Audit | Score |
|-------|-------|
| Security Headers | 100/100 (7/7 headers) |
| Technical SEO | 100/100 |
| Mobile | 90/100 (A) |
| Sitemap/Robots | Clean |
| On-Page SEO | Needs keyword work |

## Tooling Inventory

| Category | Count | Details |
|----------|-------|---------|
| MCP Servers | 7 | svelte, gsc, matomo, lighthouse, linkinator, accessibility, pagespeed |
| Agents | 10 | seo-auditor, performance-monitor, deployment-validator, content-reviewer, indexnow-notify, image-optimizer, visual-tester, structured-data, security-headers, social-preview |
| Hooks | 1 | pre-deploy-check.sh (build validation on push) |

## Notes

- `static/_headers` controls Cloudflare Pages security headers (deployed via build output)
- `*.png` is in .gitignore — apple-touch-icon.png and favicon.png were force-added with `git add -f`
- HeroCanvas uses simplex noise for blob movement, requestAnimationFrame loop, respects prefers-reduced-motion
- `.mcp.json` is gitignored — local MCP config stays local
- Unraid Docker template changes (Support, ReadMe, etc.) are UI metadata only — no container restart needed

---

*Updated: 2026-02-24*
