# Project Handover - Emittiv Website

## Current Status
13 case studies live + standardised onto 6 shared composable components (commit 4e9abd4, deployed via Cloudflare Pages 2026-05-02). Listing page now shows real names (Burj Al Arab, Sheikh Zayed Grand Mosque, Expo 2020 Dubai, House of Hype, etc.) plus a new "Feasibility Studies" category. /services/lighting SEO depth landed 41dbded last session, pushed at start of this one. e-marketing sibling instance bootstrapped 2026-04-30, R07 handoff pack delivered. GBP suspension still active, Path B reinstatement queued for next session.

## Last Session
**Date**: 2026-05-02
**Summary**: Two workstreams.

1. **Pushed 41dbded** to both remotes - Forgejo origin (SSH) and GitHub (HTTPS via gh-token credential helper workaround). Cloudflare Pages picked up the lighting SEO commit.

2. **Case study standardisation** (large refactor, 21 commits, +1,541 / -3,468 lines). Spec at `docs/superpowers/specs/2026-04-11-case-study-standardisation-design.md` was revised mid-session from 4 components to 6 composable building blocks after surfacing that Backdrop's gallery, Backdrop's extra text section, Observatory's three text-only sections, and varied ProjectDetails fields weren't covered. Plan at `docs/superpowers/plans/2026-05-02-case-study-standardisation.md`. Executed in worktree `feat/case-study-standard`, merged with `--no-ff`. Components shipped:
   - `CaseStudyHead` - SEO meta block (replaces 34-line `<svelte:head>` per page)
   - `CaseStudyHero` - image + text variants, parallax, configurable `heroSizes` and `heroHeight`
   - `TextSection` - 1+ per page narrative blocks (the brief, the idea, our approach, one system, etc.)
   - `SplitImageSection` - image + text with scroll-reveal, configurable `hoverEffect`
   - `CaseStudyGallery` - horizontal scroll image strip (Backdrop, future use)
   - `ProjectDetails` - flexible `fields` array + optional `status`
   - Shared `src/lib/styles/case-study.scss` imported by 3 of 6 components
   Per-page sizes dropped from 250-280 to 70-100 (Backdrop 416 to 135 with gallery, Observatory 205 to 83 with text hero). All 13 pages retain identical content verbatim. Listing page (`SectionProjectList.svelte`) updated with real names + Feasibility Studies category.

3. **GSC + IndexNow follow-up**:
   - `/services/sound` already indexed (PASS verdict, last crawled 2026-04-27). Spec was based on stale data, no action needed.
   - `/services/video` still unknown to Google. IndexNow pinged (Bing/Yandex). Google requires manual "Request indexing" via web UI - no API endpoint.
   - IndexNow submitted 16 URLs (all 13 case studies + listing + sound + video), HTTP 200.
   - Sitemap resubmitted to GSC.

## Key Context
| Resource | Value |
|---|---|
| Case study spec | `docs/superpowers/specs/2026-04-11-case-study-standardisation-design.md` (revised 2026-05-02) |
| Case study plan | `docs/superpowers/plans/2026-05-02-case-study-standardisation.md` |
| Component library | `src/lib/components/projects/` (6 components) |
| Shared stylesheet | `src/lib/styles/case-study.scss` |
| Listing page | `src/routes/projects/SectionProjectList.svelte` |
| Production deploy | `4e9abd4` on main, both remotes |
| GitHub push workaround | HTTPS remote needs gh-token credential helper: `git -c "credential.helper=" -c "credential.helper=!f() { echo username=newillusions; echo password=\$(gh auth token); }; f" push github main` |
| GSC property | sc-domain:emittiv.com |
| IndexNow key | a4bd0f7dc314443d9624867deaf91084 |
| GBP profile ID | 10077542066426418255 (owner: newillusions@gmail.com / authuser=0, NOT martin@emittiv.com) |
| GBP additional-review form | https://support.google.com/business/contact/local_appeals?authuser=0 |
| e-marketing handoff pack | `/Volumes/base/dev/e-marketing/sources/2026-04-30-emittiv-website-handoff/HANDOFF-COMPANY-PROFILE-R07.md` |
| Hub topics subscribed | emittiv-ecosystem, workspace-coordination, emittiv-coordination |

## Next Steps
1. **Visual smoke test all 13 case study pages on production** - https://www.emittiv.com/projects/* - confirm parity with pre-refactor live site after Cloudflare deploy completes (~2-3 min). Spot-check: hero parallax on the-sail, scroll-reveal on split images, text-only hero on Observatory, gallery scroll on Backdrop, 130% hero on fish-tank/waterpark.
2. **Design tokens follow-up PR** - extract hardcoded RGBA overlays (`rgba(0,0,0,0.4)`, `rgba(0,0,0,0.85)`, `rgba(40,30,15,1)`, `rgba(10,8,5,1)`) from `src/lib/styles/case-study.scss` into semantic CSS variables in `src/lib/css/main.scss`. Identified by code-reviewer agent during Task 1 review; deferred as out-of-scope for the refactor.
3. **GBP Path B reinstatement** (priority) - user gathers trade license (confirm not expired), DEWA utility bill or office lease in emittiv L.L.C-FZ name, VAT cert if registered, recent UAE client invoice, optional bank statement; emittiv-website instance drafts narrative addressing likely policy triggers (service area inconsistency, lack of customer-facing storefront, business name vs legal entity, "Design agency" category) referencing Dec 2024 prior approval as precedent; user submits via https://support.google.com/business/contact/local_appeals?authuser=0
4. **Manual GSC "Request indexing" for /services/video** via web UI - API doesn't expose this endpoint. Wait ~7-14 days then recheck status.
5. Wait ~7-14 days then recheck position for "hotel facade lighting" / "architectural lighting dubai" / "lighting designer dubai" - see if 41dbded /services/lighting depth moved them
6. Wait ~7-14 days then recheck GSC indexing for the 5 unknown URLs (Backdrop, Observatory, Waterpark, Fish Tank, services/video)
7. Watch for e-marketing R07 outcomes via emittiv-coordination topic - canonical brand-voice.md + positioning.md will trigger website-side adoption sweep (rewrite /about, possibly fix brand casing if it changes, update proof points, retire gtm/ + market-* skills)
8. Consider /about SERP snippet review (37 impressions, 2.7% CTR at position 1.8 - title/meta description optimization opportunity)
9. Optional follow-up: trace what's using `claude-mcp-service` SA (0 traffic 30d but referenced via GOOGLE_APPLICATION_CREDENTIALS) - either retire or put back into use deliberately
10. ENTTEC image permission still pending

## Current Tasks
- [ ] GBP Path B reinstatement (next session) - user gathers docs, instance drafts narrative, submit together
- [x] Implement case study standardisation spec - completed 2026-05-02 (commit 4e9abd4)

## Recent Decisions
- **Case study spec revised mid-implementation** (2026-05-02): expanded from 4 components to 6 after recognising Backdrop's gallery, Backdrop's extra text section, Observatory's three text-only sections, and the rigid ProjectDetails schema (location/type/disciplines/status only) weren't covered. Added `TextSection` (composable per-page narrative blocks), `CaseStudyGallery` (horizontal scroll), and made `ProjectDetails` accept a flexible `fields` array. The pivot let pages compose their content shape rather than retrofit copy into a fixed mould.
- **Backdrop = House of Hype on listing** (2026-05-02): the listing page now surfaces the real client name "House of Hype" linking to `/projects/the-backdrop`. The case study page itself stays anonymised (consistent with the other case studies).
- **Feasibility Studies as a new listing category** (2026-05-02): The Observatory now sits in its own "Feasibility Studies" category on the listing rather than being omitted (cancelled project) or shoehorned into Venues/Destinations. Frames research-only / cancelled work honestly and leaves room for future feasibility projects.
- **Inline execution over subagent-driven for plan execution** (2026-05-02): switched after Task 1 because the 10+ minute code-quality review per task didn't add value when the plan itself contained complete code blocks. KB pattern confirmed (obs:eu98oukhou2mycw7tvaa).
- **GBP Path B over Path A** (2026-04-30): for the suspension reinstatement, gather full document pack first then submit one strong additional-review attempt rather than a thin re-submission.
- **5 dormant GCP projects shut down** (2026-04-30): Photos, Nextcloud, Invoice Ninja, My First Project, CC Access. 30-day grace period.
- **Company profile R07 handoff to e-marketing** (2026-04-30): handoff pack delivered to e-marketing/sources/2026-04-30-emittiv-website-handoff/. emittiv-website now waits on R07 outcomes.

## Notes
- Site is currently doing well: 12 clicks on homepage (26% CTR), 3 clicks on /the-mosque (27% CTR). Rest of clicks scattered single-digit across /about, /contact, /services, /downloads.
- Brand search nearly nonexistent ("emit dubai" pos 1 but only 1 impression in 30d) - brand awareness work is the ceiling for direct traffic and will become e-marketing's job.
- Old anonymized URLs (/projects/burj-al-arab, /projects/sheikh-zayed-grand-mosque) still showing up in GSC impressions but with redirects pointing Google to the new canonicals - confirmed NEUTRAL verdict, will decay over weeks-months.
- HTTPS-credential-hang risk: ailx instance hung at startup on Forgejo HTTPS credential prompt on 2026-04-30. Fix was switching remote to SSH. If `claude` startup ever hangs cold-start, check `git remote -v` first.
- GitHub remote (this repo) uses HTTPS without a stored credential helper. Workaround documented in Key Context. Consider switching to SSH (`git@github.com:newillusions/emittiv.git`) in a future session.
- Pre-existing untouched session artifacts: .claude/agents/market-strategy.md (untracked), .claude/skills/ (untracked), enttec-hoh-snapshot.md (untracked), gtm/ (untracked). Two pre-existing worktrees remain at `.claude/worktrees/epic-torvalds` and `.claude/worktrees/thirsty-volhard` (not from this session). These stay put until e-marketing R07 lands and we sweep.

---
*Updated: 2026-05-02*
