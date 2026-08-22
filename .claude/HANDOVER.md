# Project Handover - Emittiv Website

## Current Status

Live, stable, maintenance mode. PR#4 (EmailForm silent-loss fix), PR#5 (CI build-image job), PR#6 (docker npm-ci fix) all merged as of 2026-07-17 - deploys are now merge -> CI -> update_container, no more hand-built images. 13 case studies live on 6 shared composable components since 2026-05-02. PR#7 (AEO/FAQPage schema extension + llms.txt) open as of 2026-08-22, not yet merged/deployed. GBP suspension still active, Path B reinstatement pending (owner-gated, docs not yet gathered).

**DOC-ROT FOUND AND PARTIALLY FIXED (2026-08-22):** this file was found committed on `main` at its 2026-05-02 state - every session summary from 2026-07-17 onward existed only as UNCOMMITTED changes sitting on a stale, abandoned `docs/audit-2026-07` branch checkout (which also carried unrelated, never-finished JSDoc/README edits). That stale work was stashed rather than discarded (`git stash push -u -m "stashed pre-existing docs/audit-2026-07 uncommitted work..."`, still recoverable via `git stash list` if anyone wants to resume the JSDoc pass) before branching cleanly from `origin/main` for this session's work. This rewrite reconstructs accurate history from git log + the KB mission record and gets it committed - if this file goes stale again, check `git log -- .claude/HANDOVER.md` against `git log main` for the same drift.

**DOC-ROT (2026-07-17, still unresolved):** CLAUDE.md/this file describe production as Cloudflare Pages only. Ground truth: the live site is ALSO the `emittiv` container on Primary Unraid running `forge.mms.name/emittiv/emittiv-website:latest` (PR#5/#6 made CI actually publish that image). Needs an owner-directed reconciliation of which deploy path(s) are real/current.

## Last Session

**Date**: 2026-08-22 (dispatched by team-lead, `ns-aeo-schema-extension`)
**Summary**: Implemented the AEO/schema extension proposed by the same-day recon (`/Users/martin/dev-reports/2026-08-22-recon-emittiv-web.md`). Extended `CaseStudyHead.svelte` with an optional `faqs` prop (adds a `FAQPage` entry to its existing JSON-LD graph); all 13 case studies now pass 2 FAQ pairs each, derived from existing page copy only (no invented claims, NDA anonymisation preserved). The other 5 service pages (sound/scent/video/content/control) already had `Service`+`BreadcrumbList` schema - added `FAQPage` JSON-LD plus a matching visible "questions, answered" section mirroring `/services/lighting`'s exact structure, and added `areaServed` city entries (Dubai, Abu Dhabi) to match. Added `static/llms.txt`. Fixed a Svelte compile error on the content page (apostrophe inside the `{@html '<scr'+'ipt>'}` single-quoted JS string trick - reworded rather than requoted, since requoting would clash with the embedded JSON's own double-quoted keys). Reinstalled stale `node_modules` (missing `@testing-library/*`/vitest despite being in `package.json` since PR#4). All local gates green: lint (prettier clean, pre-existing eslint errors are all in untouched `.claude/worktrees/`/`.claude/mcp-local/`), `npm run check` (425 files, 0 errors), `npm test` (4/4), `npm run build` (succeeds). Validated all 18 changed pages' JSON-LD parses and contains `FAQPage` by parsing the actual built HTML output. PR #7 opened (branch `feat/aeo-schema-extension`, head `6a5e6b6`, mergeable:true) - PR-only per dispatch contract, no merge/deploy.

### Earlier session (2026-07-17, second dispatch that date)

Dispatched as emittiv-web instance to add the missing CI container-image build/push job. `.forgejo/workflows/ci.yml` previously only ran `npm build` - no image was ever built or pushed by CI, so the live Primary-Unraid container's `:latest` image had drifted 6 days stale and every deploy was manual.

Added a `build-image` job (needs: build, gated `if: github.ref == 'refs/heads/main'`) copying the `watchdog` repo's `ci.yml` pattern - mTLS dind against Primary, registry login via `secrets.REGISTRY_TOKEN`, pushes `sha-<short>` + `:latest` tags. Also wired `npm test` (vitest, the 4 tests from PR#4) into the existing `build`/check job.

PR emittiv/emittiv-website#5 opened (branch `ci/build-image`, head `0f0a833`), both commits verified green in Forgejo Actions.

### Earlier session (2026-07-17, first dispatch)

Fixed the EmailForm silent-loss defect in `src/routes/contact/EmailForm.svelte`: `formData` wasn't `$state()` so Svelte 5 never propagated `resetForm()`'s clears; `resetForm()` ran on both success and failure branches, so a failed send wiped the prospect's typed message. Fixed both, added a production-only Matomo `trackEvent` on failure. Added the repo's first test infrastructure (vitest + `@testing-library/svelte`), 4 tests in `EmailForm.test.ts`.

PR emittiv/emittiv-website#4 opened (branch `fix/emailform-silent-loss`, head `a0b2d32`).

### Earlier session (2026-05-02)

Case study standardisation (21 commits, +1,541/-3,468 lines): 13 case study pages consolidated onto 6 shared composable components (`CaseStudyHead`, `CaseStudyHero`, `TextSection`, `SplitImageSection`, `CaseStudyGallery`, `ProjectDetails`) in `src/lib/components/projects/`, spec revised mid-implementation from 4 to 6 components. Listing page updated with real client names + a new "Feasibility Studies" category. GSC/IndexNow follow-up: 16 URLs submitted, sitemap resubmitted.

## Key Context

| Resource                 | Value                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component library        | `src/lib/components/projects/` (6 components, `CaseStudyHead` now also carries optional FAQ schema)                                                                                     |
| PR #7 (AEO extension)     | https://forge.mms.name/emittiv/emittiv-website/pulls/7 - open, mergeable, gates green, not deployed                                                                                     |
| Recon report              | `/Users/martin/dev-reports/2026-08-22-recon-emittiv-web.md`                                                                                                                              |
| GitHub push workaround    | HTTPS remote needs gh-token credential helper: `git -c "credential.helper=" -c "credential.helper=!f() { echo username=newillusions; echo password=\$(gh auth token); }; f" push github main` |
| GSC property              | sc-domain:emittiv.com                                                                                                                                                                    |
| IndexNow key               | a4bd0f7dc314443d9624867deaf91084                                                                                                                                                          |
| GBP profile ID             | 10077542066426418255 (owner: newillusions@gmail.com / authuser=0, NOT martin@emittiv.com)                                                                                               |
| GBP additional-review form | https://support.google.com/business/contact/local_appeals?authuser=0                                                                                                                    |
| Production container       | `emittiv` on Primary Unraid, `forge.mms.name/emittiv/emittiv-website:latest`, CI-published since PR#5/#6 (2026-07-17)                                                                    |
| Hub topics subscribed      | emittiv-ecosystem, workspace-coordination, emittiv-coordination                                                                                                                          |
| Stashed stale work         | `git stash list` on this checkout - abandoned JSDoc/README edits from `docs/audit-2026-07`, preserved not discarded                                                                     |

## Next Steps

1. **Merge + deploy PR #7** (orchestrator-owned) - AEO/FAQPage schema extension, mergeable, all gates green. (as of 2026-08-22)
2. **GBP Path B reinstatement** (owner-gated, priority) - user gathers trade license, DEWA utility bill/office lease, VAT cert if registered, recent UAE client invoice; emittiv-website instance drafts narrative referencing Dec 2024 prior approval; user submits via https://support.google.com/business/contact/local_appeals?authuser=0 (as of 2026-08-22)
3. **R07 brand-adoption sweep** (owner-gated, stale since 2026-07-02) - rewrite `/about`, fix brand casing, retire `gtm/` + `market-*` skill/agent cruft. R07 landed 2026-05-03; sweep never scheduled. (as of 2026-08-22)
4. **DOC-ROT reconciliation** (owner-gated) - decide/document which deploy path(s) are authoritative now that CI publishes the container image too (Cloudflare Pages vs Primary Unraid container vs both). (as of 2026-08-22)
5. Fix the pre-existing `EmailForm.svelte` label/input id mismatch (`<label for="form_name">` but the input only has `name="from_name"`, no `id`) - real accessibility bug, found while writing tests for PR#4, still open. (as of 2026-08-22)
6. Consider /about SERP snippet review (37 impressions, 2.7% CTR at position 1.8). (as of 2026-08-22)
7. ENTTEC image permission still pending. (as of 2026-08-22)

## Current Tasks

- [ ] Merge + deploy PR #7 (as of 2026-08-22)
- [ ] GBP Path B reinstatement (next session) - user gathers docs, instance drafts narrative, submit together (as of 2026-08-22)
- [x] Ship PR#4/#5/#6/#7 - #4-6 merged/live 2026-07-17; #7 open 2026-08-22

## Recent Decisions

- **No AEO parity chase, extend the proven pattern instead** (2026-08-22): comparables (dpa lighting, Isometrix, L'Observatoire) have no schema/FAQ at all, so this isn't catch-up - it's finishing a pattern already built and validated on one page.
- **Reword rather than requote to fix a broken JS string literal** (2026-08-22): the content service page's JSON-LD used the `{@html '<scr'+'ipt>...'+'ipt>'}` single-quoted-string trick to avoid SvelteKit injecting attributes into a raw `<script>` tag. An apostrophe in the FAQ text broke the string. Fixed by removing the apostrophe from the text rather than switching to double quotes, since the outer wrapper's quote choice exists specifically to avoid colliding with the embedded JSON's own double-quoted keys.
- **Preserve prospect input on failed submit; only clear on success** (2026-07-17).
- **Case study spec revised mid-implementation** (2026-05-02): expanded from 4 to 6 components.
- **Backdrop = House of Hype on listing** (2026-05-02).
- **Feasibility Studies as a new listing category** (2026-05-02).

## Notes

- **SEO pattern**: when adding schema/FAQ depth to a page, mirror the `/services/lighting` shape (Service/CreativeWork + BreadcrumbList + FAQPage in one `@graph`, `{@html '<scr'+'ipt>'}` split-string trick, `areaServed` City entries for Dubai/Abu Dhabi). Full convention notes in `.claude/rules/judgment.md`.
- **JSON-LD string-literal gotcha**: any FAQ/schema text placed inside the `{@html '<scr'+'ipt>...JSON...'+'ipt>'}` trick must avoid apostrophes/contractions - the wrapper is single-quoted JS and can't switch to double quotes without colliding with the JSON's own double-quoted keys. Case-study `faqs={[...]}` props are ordinary Svelte prop expressions and can safely use double quotes for any entry containing an apostrophe.
- Old anonymized URLs (/projects/burj-al-arab, /projects/sheikh-zayed-grand-mosque) still showing up in GSC impressions but redirects point Google to the new canonicals - NEUTRAL verdict, will decay over weeks-months.
- GitHub remote (this repo) uses HTTPS without a stored credential helper. Workaround documented in Key Context.
- Pre-existing untouched session artifacts: `.claude/agents/market-strategy.md`, `.claude/skills/`, `enttec-hoh-snapshot.md`, `gtm/` (all untracked). Two pre-existing worktrees at `.claude/worktrees/epic-torvalds` and `.claude/worktrees/thirsty-volhard`. These stay put until the R07 adoption sweep lands.

---

_Updated: 2026-08-22_
