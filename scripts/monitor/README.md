# Weekly rank + LLM-appearance monitor

Measures the outcome of the AEO work shipped in PR #7 (FAQPage JSON-LD + `static/llms.txt`,
merged 2026-08-22, commit `0bccc9f`, confirmed live 2026-09-04): does the site rank for its
target terms, and does emittiv get named when an LLM answers a buyer-style question.

## What it does

1. **`gsc-report.mjs`** - pulls Google Search Console data for `sc-domain:emittiv.com`
   (trailing 7 and 28 days: totals, by-query, by-page, and explicit coverage of the tracked
   target terms in `lib/target-terms.mjs`).
2. **`llm-appearance-report.mjs`** - asks ChatGPT, Claude, Gemini and Perplexity a fixed
   panel of 10 buyer-style questions (`lib/target-terms.mjs` `BUYER_QUESTIONS`, each cited
   back to the FAQ question or positioning-doc line it was derived from) and records whether
   emittiv or newillusions is named, in what sentence, and at roughly what list position.
3. **`run-weekly.mjs`** - runs both, loads the most recent prior `gsc-*.json` for
   week-over-week deltas, builds a Smart Brevity markdown report
   (`lib/report-format.mjs`), and emails it via `~/.claude/scripts/send-report-email.py`
   (HTML body + the `.md` attached, per workspace convention - reports never go out as raw
   markdown).

Raw JSON snapshots land in `data/monitor/` (gitignored - not committed; this repo mirrors to
a public GitHub remote and the raw data includes keyword strategy and LLM completion text).

## Credentials

Looked up in `~/.claude/credential-directory.md` (checked 2026-09-07), never guessed:

| Provider                  | Variable                         | Status                                                                                                                                                                                                                              |
| ------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Search Console     | `GOOGLE_APPLICATION_CREDENTIALS` | **present, verified working this session** - path to a service-account key JSON (`/Volumes/base/dev/credentials/emittiv-website-07a4cbcb8991.json`), same credential the `.claude/mcp-local/mcp-server-gsc` MCP server already uses |
| Anthropic (Claude)        | `ANTHROPIC_API_KEY`              | **present, verified this session** (`GET /v1/models` -> 200)                                                                                                                                                                        |
| Google AI Studio (Gemini) | `GEMINI_API_KEY`                 | **present, verified this session** (`GET /v1beta/models` -> 200)                                                                                                                                                                    |
| OpenAI (ChatGPT)          | `OPENAI_API_KEY`                 | **absent** - no entry anywhere in the credential directory. Create at platform.openai.com/api-keys, then add `OPENAI_API_KEY` to the credential store and directory.                                                                |
| Perplexity                | `PERPLEXITY_API_KEY`             | **absent** - no entry anywhere in the credential directory. Create at perplexity.ai/settings/api, then add `PERPLEXITY_API_KEY`.                                                                                                    |

`llm-appearance-report.mjs` skips a provider whose variable is unset and records the gap in
its `skipped` array and in the emailed report - it never fails the whole run. Once
OPENAI_API_KEY / PERPLEXITY_API_KEY exist in the credential store, no code change is needed;
the cron secrets file (below) just needs the two extra lines uncommented.

## Running it once, interactively

```bash
cd /Volumes/base/dev/claude/e-website
npm install --legacy-peer-deps   # first time only, or after package.json changes
~/.claude/scripts/creds-run.sh GOOGLE_APPLICATION_CREDENTIALS ANTHROPIC_API_KEY GEMINI_API_KEY CLAUDE_INBOX_PASSWORD -- \
  bash -c 'export CLAUDE_INBOX_EMAIL=claude@mjr.email; npm run monitor:weekly'
```

`--dry-run` (via `node scripts/monitor/run-weekly.mjs --dry-run`) writes the report files but
skips the email send - used by the test suite and for local iteration.

## Scheduling

No n8n-ai or Unraid-cron workflow already exists for this class of script. The closest
workspace precedent is `claude/e-marketing/scripts/cron/surface-industry-press.sh`, which
runs daily via the Mac's own `crontab` (not n8n, not a container). This monitor mirrors that:
`cron/weekly-rank-llm-monitor.sh` is the wrapper, with full setup + crontab install
instructions in its header comment. It follows `tools/studio-digest`'s cron-secrets
convention (a dedicated 0600 `~/.e-website-monitor.env`) rather than the interactive
`creds-run.sh`/vault wrappers, because those may depend on session/Keychain context a
non-interactive cron job does not have.

## Target terms and buyer questions

Both lists are sourced, not invented - see the header comment in `lib/target-terms.mjs`:
target search terms come from `claude/e-marketing/strategy/positioning.md` (services +
audiences); the 10 buyer questions are recast from the FAQPage JSON-LD already shipped on
the 5 service pages in PR #7. Case studies are anonymised (`static/llms.txt` "Notes"), so no
buyer question references a real project or client name.

## Tests

`npm test` (vitest) covers: target-term matching against fixture GSC rows, brand-mention
detection (sentence extraction, case-insensitivity, list-position estimation), the
Smart-Brevity report builder (including graceful degradation when GSC has no data), and the
previous-report lookup used for week-over-week deltas.
