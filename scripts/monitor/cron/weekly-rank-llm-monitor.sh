#!/usr/bin/env bash
# Weekly emittiv.com rank + LLM-appearance monitor (Monday 05:00 Asia/Dubai).
#
# Mirrors two existing workspace conventions rather than inventing a new one:
#   - scheduling via the Mac's own crontab, same as
#     claude/e-marketing/scripts/cron/surface-industry-press.sh
#   - credentials for a non-interactive cron run come from a dedicated 0600
#     env file, same as tools/studio-digest/run.sh's
#     ~/.studio-digest-mail.env pattern (cron-secrets rule) - NOT the
#     interactive-session-only creds-lib.sh/mcp-with-creds.sh vault wrappers,
#     which may depend on Keychain/session context unavailable to cron.
#
# One-time setup (run once, interactively, to populate the secrets file -
# values are written directly into the file by the shell, never echoed to a
# terminal or transcript):
#
#   umask 077
#   cat > ~/.e-website-monitor.env <<'EOF'
#   export GOOGLE_APPLICATION_CREDENTIALS="/Volumes/base/dev/credentials/emittiv-website-07a4cbcb8991.json"
#   export ANTHROPIC_API_KEY="<value from the credential store: ANTHROPIC_API_KEY>"
#   export GEMINI_API_KEY="<value from the credential store: GEMINI_API_KEY>"
#   export CLAUDE_INBOX_EMAIL="claude@mjr.email"
#   export CLAUDE_INBOX_PASSWORD="<value from the credential store: CLAUDE_INBOX_PASSWORD>"
#   export OPENAI_API_KEY="<value from the credential store: OPENAI_API_KEY>"
#   export PERPLEXITY_API_KEY="<value from the credential store: PERPLEXITY_API_KEY>"  # added 2026-11-03, Agent API; unset = skipped in report
#   EOF
#   chmod 600 ~/.e-website-monitor.env
#
# Scheduling: LaunchAgent com.emittiv.rank-llm-monitor (Monday 05:00), NOT cron.
# Cron has no login-keychain session, so creds-run.sh could not read the vault
# ("credential PERPLEXITY_API_KEY not found", every run since 2026-11-16). The
# plist runs this script via `creds-run.sh PERPLEXITY_API_KEY --` inside the
# gui/<uid> domain. Install/uninstall: scripts/monitor/launchd/install.sh and
# uninstall.sh. PERPLEXITY_API_KEY is injected by creds-run.sh; the other keys
# still come from ~/.e-website-monitor.env.
#
# Usage:
#   weekly-rank-llm-monitor.sh            full run (REAL paid LLM API calls + email)
#   weekly-rank-llm-monitor.sh --check    verify env + credentials only: no API
#                                         call, no node, no cost; prints names and
#                                         presence, never values

set -euo pipefail

PROJECT="/Volumes/base/dev/claude/e-website"
SECRETS_ENV="$HOME/.e-website-monitor.env"
MODE="run"
case "${1:-}" in
  --check) MODE="check" ;;
  "") ;;
  *) echo "usage: $0 [--check]" >&2; exit 2 ;;
esac

if [ ! -d "$PROJECT" ]; then
  echo "$(date -Iseconds) ERROR: project root not accessible - skipping run" >&2
  exit 1
fi

if [ -f "$SECRETS_ENV" ]; then
  # shellcheck disable=SC1090
  source "$SECRETS_ENV"
else
  echo "$(date -Iseconds) ERROR: $SECRETS_ENV not found - cannot run (see setup comment in this script)" >&2
  exit 1
fi

# Injected by creds-run.sh (LaunchAgent). Refuse to run without it so a missing
# key is a loud failure, not a silently "skipped (not configured)" provider.
if [ -z "${PERPLEXITY_API_KEY:-}" ]; then
  echo "$(date -Iseconds) ERROR: PERPLEXITY_API_KEY not in environment - run via creds-run.sh PERPLEXITY_API_KEY --" >&2
  exit 3
fi

if [ "$MODE" = "check" ]; then
  echo "$(date -Iseconds) check ok: PERPLEXITY_API_KEY FOUND (${#PERPLEXITY_API_KEY} chars); secrets env present; no API call made"
  exit 0
fi

cd "$PROJECT"
node scripts/monitor/run-weekly.mjs
