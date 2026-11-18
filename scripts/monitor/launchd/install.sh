#!/usr/bin/env bash
# Move the weekly rank-LLM monitor from cron to a LaunchAgent. Idempotent.
#   install.sh --dry-run   print every step, change nothing
#   install.sh             lint, remove the crontab job line, bootstrap, verify
# Order: the cron line is removed BEFORE the agent loads so the job cannot double-run.
set -euo pipefail

DRY=0
case "${1:-}" in
  --dry-run) DRY=1 ;;
  "") ;;
  *) echo "usage: $0 [--dry-run]" >&2; exit 2 ;;
esac

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LABEL="com.emittiv.rank-llm-monitor"
PLIST_SRC="$HERE/$LABEL.plist"
AGENTS="$HOME/Library/LaunchAgents"
LOGS="$HOME/Library/Logs/rank-llm-monitor"
UID_N="$(id -u)"
BACKUP_DIR="${RANK_CRON_BACKUP_DIR:-$HOME/.claude/state/crontab-backups}"
JOB_RE='^[^#].*/weekly-rank-llm-monitor\.sh'
TAG=install; [[ "$DRY" == 1 ]] && TAG="install dry-run"
say() { echo "[$TAG] $*"; }

plutil -lint "$PLIST_SRC"
[[ -x "$HERE/../cron/weekly-rank-llm-monitor.sh" ]] || { say "REFUSE: wrapper script missing or not executable"; exit 1; }
[[ -x "$HOME/.claude/scripts/creds-run.sh" ]] || { say "REFUSE: creds-run.sh missing"; exit 1; }

TMP="$(mktemp)"; trap 'rm -f "$TMP" "$TMP.new"' EXIT
crontab -l > "$TMP" 2>/dev/null || true
n_job="$(grep -Ec "$JOB_RE" "$TMP" || true)"
say "crontab: $n_job job line(s) to remove"
grep -E "$JOB_RE" "$TMP" | cut -c1-140 | sed 's/^/    - /' || true
grep -Ev "$JOB_RE" "$TMP" > "$TMP.new" || true

if [[ "$DRY" == 1 ]]; then
  say "would back up crontab to $BACKUP_DIR/crontab.bak-rank-<ts>, then install it without the job line ($(wc -l < "$TMP") -> $(wc -l < "$TMP.new") lines)"
  say "would: cp plist to $AGENTS ; bootout $LABEL if loaded ; bootstrap gui/$UID_N ; launchctl print"
  exit 0
fi

mkdir -p "$BACKUP_DIR" "$AGENTS" "$LOGS"
BK="$BACKUP_DIR/crontab.bak-rank-$(date +%Y%m%d-%H%M%S)"
cp "$TMP" "$BK"; say "backed up crontab to $BK"
if [[ "$n_job" -gt 0 ]]; then crontab "$TMP.new"; say "crontab updated"; else say "crontab already clean"; fi

cp "$PLIST_SRC" "$AGENTS/$LABEL.plist"
plutil -lint "$AGENTS/$LABEL.plist"
launchctl print "gui/$UID_N/$LABEL" >/dev/null 2>&1 && launchctl bootout "gui/$UID_N/$LABEL" || true
launchctl bootstrap "gui/$UID_N" "$AGENTS/$LABEL.plist"

left="$(crontab -l 2>/dev/null | grep -Ec "$JOB_RE" || true)"
[[ "$left" == 0 ]] || { say "VERIFY FAILED: $left cron job line(s) remain"; exit 1; }
say "verify ok: 0 cron job lines"
launchctl print "gui/$UID_N/$LABEL" | grep -E "state =|path =|runs =|last exit code|program =" || true
say "loaded $LABEL (next run: Monday 05:00)"
