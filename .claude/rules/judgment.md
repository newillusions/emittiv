# Emittiv Website - Judgment Rules

Tacit know-how not captured elsewhere in CLAUDE.md or HANDOVER.md. Format: when X, do Y, because Z.

## CI / Git

- When a workspace CI audit reports "chronic red, probably a stale lockfile" for this repo, reproduce locally first (`npm ci --legacy-peer-deps` then `npm run lint`) before acting on the inferred cause — the 2026-06-22 incident showed the real cause was 34 unformatted files failing `prettier --check` inside `npm run lint`'s `&&` chain, which short-circuited before eslint even ran. The audit's "lockfile" theory was wrong (obs:5fygpcfl6q8o7iq3adjb).
- A green `build` step with a red `lint` step in the same `&&` chain means the site keeps deploying fine (Cloudflare Pages builds via its own git integration, not this CI) while the CI signal quietly rots for months. Don't infer site health from CI status alone — check `npm run build` and the live URL directly.
- Before trusting `git log` locally for a freshness check (e.g. "what's changed since the handover"), run `git fetch origin && git log origin/main` first. This session found local `main` was 2 commits behind origin (the CI concurrency-group commit and the prettier fix) — the local checkout had silently drifted.
- Pushing to `github` remote needs the gh-token credential helper one-liner in HANDOVER.md's Key Context table (HTTPS remote, no stored credential). Don't attempt a bare `git push github main` expecting a stored PAT.

## SEO

- When adding SEO depth to a service page, mirror your highest-impression GSC queries into an FAQ section plus FAQPage JSON-LD in the same `@graph` as Service + BreadcrumbList, using the `{@html '&lt;scr' + 'ipt...'}` split-string trick in `svelte:head` so SvelteKit doesn't inject unwanted attributes into the raw `<script>` tag. Pair with `areaServed` City entries (Dubai, Abu Dhabi) for local-pack signals. Pattern validated on `/services/lighting` (obs:p1tog0lx5fuhi7p5fhcl).
- GSC has no API for "Request indexing" on a URL — it's web-UI-only. Budget 7-14 days before re-checking indexing status; don't treat "still unknown to Google" after a few days as a failure signal.
- GSC sitemap submit via MCP returns 403 (OAuth scope issue, unresolved) — always fall back to the GSC web UI for sitemap resubmission, don't retry the API call repeatedly.

## Content Conventions

- Case study pages compose from 6 shared building blocks (`CaseStudyHead`, `CaseStudyHero`, `TextSection`, `SplitImageSection`, `CaseStudyGallery`, `ProjectDetails`) rather than forcing new content into a rigid 4-component schema. When a new case study doesn't fit the existing shape (extra gallery, multiple text-only sections, non-standard detail fields), extend a component's configurability first — don't retrofit the copy. This is why the spec grew from 4 to 6 components mid-implementation on 2026-05-02 (HANDOVER.md Recent Decisions).
- The listing page may show a project's real client name (e.g. "House of Hype") and link to an anonymized case-study slug (`/projects/the-backdrop`); the case-study page itself stays fully anonymized (NDA compliance). Don't de-anonymize case-study page content just because the listing links to it by real name.

## Stale-Claim Traps (found this session, now fixed)

- HANDOVER.md's "awaiting e-marketing R07 outcomes before next content sweep" (Next Step #7) was stale — R07 (brand-voice.md, positioning.md) landed 2026-05-03, two months before this pass, and e-marketing has since moved on to its Mission 2 lead-finding work. The website-side adoption sweep (rewrite `/about`, fix brand casing, retire `gtm/` + `market-*` skills) was never actually done. This is owner-gated scope (content rewrite), not something this distillation pass executes — flagged for the orchestrator/owner to schedule explicitly rather than left as a silent "waiting" item.
- The untracked `gtm/` directory, `.claude/skills/market-*`, and `.claude/agents/market-strategy.md` are leftovers from that same gtm/e-marketing dispatch (2026-04-30). They predate R07 landing and are safe to sweep once the owner confirms — do not delete unprompted.
