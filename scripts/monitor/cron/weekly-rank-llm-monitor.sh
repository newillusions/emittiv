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
#   # export OPENAI_API_KEY="..."      # not yet in the credential store - add when created
#   # export PERPLEXITY_API_KEY="..."  # not yet in the credential store - add when created
#   EOF
#   chmod 600 ~/.e-website-monitor.env
#
# Install (Monday 05:00 - this is LOCAL system time; if the Mac's clock is
# already Asia/Dubai this is correct as-is, otherwise adjust the hour):
#   crontab -e
#   0 5 * * 1  /Volumes/base/dev/claude/e-website/scripts/monitor/cron/weekly-rank-llm-monitor.sh >> /Volumes/base/dev/claude/e-website/data/monitor/cron.log 2>&1
#
# macOS cron does not fire while the Mac is asleep - if the Mac is regularly
# asleep at 05:00, switch to launchd with StartCalendarInterval, or nudge the
# schedule to a time the Mac is reliably awake.

set -euo pipefail

PROJECT="/Volumes/base/dev/claude/e-website"
SECRETS_ENV="$HOME/.e-website-monitor.env"

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

cd "$PROJECT"
node scripts/monitor/run-weekly.mjs
