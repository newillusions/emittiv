# Project Handover - Emittiv Website

## Current Status
All dependencies upgraded to latest (Vite 7, Svelte 5.51, SvelteKit 2.51). Matomo SPA tracking fixed. Three MCP servers configured (Svelte, GSC, Matomo). Ready for service page content work.

## Last Session
**Date**: 2026-02-14
**Summary**: Full project health check and tooling upgrade. Upgraded all deps (Vite 5→7.3, Kit 2.49→2.51, Svelte 5.45→5.51, ESLint 9→10, TS 5→5.9). Fixed Matomo SPA navigation tracking (afterNavigate in transitions.svelte). Set up 3 project-local MCP servers: @sveltejs/mcp (official Svelte docs/autofixer), mcp-server-gsc (Google Search Console), @mj-kiwi/matomo-mcp-server (Matomo analytics). Published KB observation for Svelte MCP with auto-scope tags so e-fees and ailx can discover it.

## Key Context
| Resource | Value |
|----------|-------|
| Forgejo repo | forge.mms.name/emittiv/emittiv-website (private) |
| GitHub repo | github.com/newillusions/emittiv (production → Cloudflare Pages) |
| Docker image | forge.mms.name/emittiv/emittiv-website:latest (0.1.0) |
| Docker container | 10.0.23.134:3000 on br0 (Unraid primary) |
| Production URL | www.emittiv.com (Cloudflare Pages) |
| Matomo | matomo.emittiv.online (Site ID: 1, token in .mcp.json) |
| GSC credentials | /Volumes/base/dev/credentials/emittiv-website-07a4cbcb8991.json |
| MCP config | .mcp.json (svelte, gsc, matomo — gitignored) |

## Next Steps
1. Work on the 6 service discipline pages (content/control/lighting/scent/sound/video — unstaged changes)
2. Test the 3 new MCP servers (restart session to load .mcp.json)
3. Re-register Gitea Runner to Forgejo for CI/CD automated builds
4. Set up Forgejo Actions workflow for auto-build on push
5. Push to GitHub when ready to go live with changes
6. Update privacy policy (dated June 2022, doesn't mention Matomo/cookieless)

## Recent Decisions
- **Forgejo as primary remote**: origin → forge.mms.name, github secondary for production
- **Conditional adapter**: DOCKER_BUILD=true → adapter-node, otherwise adapter-auto
- **Project-local MCPs**: Svelte, GSC, Matomo kept in project .mcp.json (not workspace-level)
- **Svelte MCP shared via KB**: Auto-scoped observation so e-fees/ailx discover it
- **Matomo SPA tracking**: Added to transitions.svelte afterNavigate, production-only

## Notes
- ipvlan L2 on br0 means Unraid host can't curl its own containers — test from Mac
- Container must be managed through Unraid WebUI, not docker CLI
- 3 pre-existing TS errors: EmailForm null check, Playwright test types (not regressions)
- 108 svelte-check warnings: all `element_invalid_self_closing_tag` in service pages (will fix during content work)
- Build uses `--legacy-peer-deps` due to vite-plugin-svelte-inspector peer dep on older vite-plugin-svelte

---
*Updated: 2026-02-14*
