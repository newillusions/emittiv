# Project Handover - Emittiv Website

## Current Status
Deployment pipeline fully established. Docker staging container running on Unraid primary at 10.0.23.134:3000, pulling from Forgejo container registry. Ready for development work on service pages.

## Last Session
**Date**: 2026-02-13
**Summary**: Set up the full staging deployment pipeline — reconfigured git remotes to use Forgejo as primary, created Dockerfile with SvelteKit node adapter, built and pushed image to Forgejo container registry, updated Unraid Docker template with proper icon from new public docker-icons repo. Verified container serving correctly.

## Key Context
| Resource | Value |
|----------|-------|
| Forgejo repo | forge.mms.name/emittiv/emittiv-website (private) |
| GitHub repo | github.com/newillusions/emittiv (production → Cloudflare Pages) |
| Legacy Gitea | git.mms.name/martin/emittiv (read-only archive) |
| Docker image | forge.mms.name/emittiv/emittiv-website:latest (0.1.0) |
| Docker container | 10.0.23.134:3000 on br0 (Unraid primary) |
| Unraid template | /boot/config/plugins/dockerMan/templates-user/my-emittiv.xml |
| Icon repo | forge.mms.name/emittiv/docker-icons (public) |
| Build dir on server | /mnt/user/appdata/emittiv-build |
| Production URL | www.emittiv.com (Cloudflare Pages) |

## Next Steps
1. Work on the service discipline pages (6 modified files in src/routes/services/)
2. Re-register Gitea Runner to Forgejo for CI/CD automated builds
3. Set up Forgejo Actions workflow for auto-build on push
4. Push to GitHub when ready to go live with changes

## Recent Decisions
- **Forgejo as primary remote**: origin points to forge.mms.name, github is secondary for production
- **Conditional adapter**: DOCKER_BUILD=true → adapter-node, otherwise adapter-auto (for Cloudflare Pages)
- **Public docker-icons repo**: Shared icon hosting for all Unraid container templates
- **Version bump to 0.1.0**: Marks the SvelteKit rebuild as a fresh start

## Notes
- ipvlan L2 on br0 means Unraid host can't curl its own containers — test from Mac or other LAN device
- Container must be managed through Unraid WebUI, not docker CLI (template won't sync otherwise)
- Build process: clone repo on Unraid server → docker build → docker push to Forgejo registry
- 6 service page files have unstaged changes from previous work (content/control/lighting/scent/sound/video)

---
*Updated: 2026-02-13*
