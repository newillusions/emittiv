#!/usr/bin/env bash
# Unload and remove the rank-LLM monitor LaunchAgent. Does not touch crontab.
set -euo pipefail
LABEL="com.emittiv.rank-llm-monitor"
UID_N="$(id -u)"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
launchctl print "gui/$UID_N/$LABEL" >/dev/null 2>&1 && launchctl bootout "gui/$UID_N/$LABEL" && echo "booted out $LABEL" || echo "$LABEL not loaded"
if [[ -f "$PLIST" ]]; then rm "$PLIST"; echo "removed $PLIST"; fi
echo "Note: re-add the cron line manually if you want cron back (it cannot read the vault)."
