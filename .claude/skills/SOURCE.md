# Source: coreyhaines31/marketingskills

- Upstream: https://github.com/coreyhaines31/marketingskills (MIT, Copyright (c) 2025 Corey Haines). Licence text: LICENSE-marketingskills.md in this folder.
- Pinned commit: 5b2b400eec1e7e1cec76245a715d0b0d4fd2a9c1
- Release tag: v2.14.25 (HEAD of the shallow clone, tag points at this commit)
- Copied on: 2026-11-23
- Method: reviewed markdown copied by hand from a shallow clone. No upstream code was executed. Not installed as a plugin, not installed globally, tools/clis not copied.
- Brand voice precedence: see the line at the top of each SKILL.md.

## Skills copied

- copy-editing
- copywriting

## Files dropped and why

- evals/evals.json in every skill: test fixtures for upstream's eval harness, not instructions (not needed).
- Everything outside copywriting and copy-editing (not requested for this repo).

## Adaptations (every other copied file is byte-identical to the upstream file at the pinned sha)

- ADAPTED: copywriting/SKILL.md: project-rules precedence line added after the frontmatter.
- ADAPTED: copy-editing/SKILL.md: project-rules precedence line added after the frontmatter.
- Links inside kept files that point at dropped files or at upstream tools/ pages are left as-is; they are dead links here and are not instructions to fetch anything. Vendor and tool names that remain in kept files are advisory prose only; do not act on them without Martin's approval.

## Reviewed occurrences of curl / npx / http / api key

Remaining http links are citations or upstream pointers only (e.g. ai-tells.md sources, upstream tools/ pages). No kept file instructs running curl, npx, installs or API calls. Exact grep output is in the PR description.

## Monitoring

Monthly upstream diff via wr item haines-skills-monitor. Compare upstream tag against v2.14.25 / 5b2b400 and re-review any changed file before copying.
