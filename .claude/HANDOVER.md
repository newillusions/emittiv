# Project Handover - Emittiv Website

## Current Status

emittiv.com fully deployed on Cloudflare Pages v3 / Node 22. Codebase clean (Svelte 5 $props(), design tokens, reactive Menu). Company profile R06 copy and PPTX draft produced. All 6 service discipline pages submitted for Google indexing via GSC + IndexNow.

## Last Session

**Date**: 2026-03-27
**Summary**: Checked Google indexing status for the full site. Found 6/8 indexable pages indexed, but all 6 service discipline pages (`/services/lighting`, `/services/control`, `/services/content`, `/services/sound`, `/services/scent`, `/services/video`) still completely unknown to Google — never crawled despite being in sitemap and linked from homepage. Submitted all 6 via GSC "Request Indexing" UI (Playwright automation) and IndexNow API. Verified internal linking is correct (all 6 linked from both `/` and `/services`, all in `sitemap.xml`). User also asked about the PPTX location (`docs/profile-build/emittiv-company-profile-r06.pptx`).

## Key Context

| Resource | Value |
|----------|-------|
| Forgejo repo | forge.mms.name/emittiv/emittiv-website (private) |
| GitHub repo | github.com/newillusions/emittiv (production) |
| Production URL | www.emittiv.com (Cloudflare Pages v3, Node 22) |
| GSC property | sc-domain:emittiv.com |
| IndexNow key | a4bd0f7dc314443d9624867deaf91084 |
| R06 copy doc | docs/company-profile-r06-copy.md |
| R06 PPTX draft | docs/profile-build/emittiv-company-profile-r06.pptx |
| R05 source PDF | ~/Desktop/emittiv Company Profile/emittiv company profile r05.pdf |

## Next Steps

### SEO & Indexing (Priority)
1. **Re-check GSC in ~1 week** (by Apr 3) — verify the 6 service pages have been crawled and indexed after the Mar 27 submission
2. **Structured data enrichment** — JSON-LD relatedLink between services

### Company Profile
3. **Add project photography** to PPTX — cannibalise NI diagonal collage imagery for 2-3 showcase pages
4. **Swap placeholder logo** on cover and back cover with actual emittiv logo asset
5. **Add team headshots** to Core Team slide
6. **Refine header bars** — add subtle warm gradient (currently solid #1A1A1A)
7. **Review discipline icons** — swap with r05 originals if preferred

### Code Quality
8. **transitions.svelte** — migrate plain variables to $state()
9. **HeroCanvas.svelte** — 303 lines, extract helper functions
10. **sitemap.xml/+server.ts** — generate XML from route list instead of hardcoded string

### Infrastructure
11. **Vite 8 + vite-plugin-svelte v7 upgrade** — major bump, deferred
12. **More project pages** — Seaworld, Wild Wadi, Dubai Opera

## Recent Decisions

- **Sensory Design as category**: Emittiv owns sensory.design domain, actively building the concept as a USP — deserves dedicated page (Mar 26)
- **wedontdesignforfree.com**: Added to Independent page as concrete evidence of the independence stance (Mar 26)
- **Content discipline reframed**: Emittiv connects clients with creators and manages integration — not an in-house content team (Mar 26)
- **Sustainability folded into Design Approach**: "Considered by Design" section replaces standalone Sustainable page — modular systems, screen-first docs, minimal components (Mar 26)
- **Private AI mentioned**: On-prem AI systems added to Current page with explicit privacy framing — no client data shared externally (Mar 26)

## Notes

- Profile is 12 slides (cover + 10 content + back cover) plus 2-3 project showcase pages to be added with photography
- 6 service sub-pages indexing requested via GSC UI + IndexNow on 2026-03-27 — first time using GSC UI "Request Indexing" button (API doesn't trigger actual indexing)
- GSC overview shows 15 indexed pages, 11 not indexed (includes the 6 service pages + privacy/terms noindex + others)

---

*Updated: 2026-03-27*
