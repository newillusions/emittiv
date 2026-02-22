#!/usr/bin/env bash
# Pre-deploy validation hook for emittiv website
# Triggered on PreToolUse:Bash — checks if command is a git push and validates build first
#
# Exit codes:
#   0 = allow command to proceed
#   2 = block command (validation failed)

set -euo pipefail

TOOL_INPUT="${1:-}"
PROJECT_DIR="/Volumes/base/dev/web/emittiv"

# Only intercept git push commands
if ! echo "$TOOL_INPUT" | grep -qE 'git\s+push'; then
  exit 0
fi

# Run build validation
echo "Pre-deploy hook: Detected git push — running build validation..."

# Step 1: Type checking
echo "  Checking types..."
if ! cd "$PROJECT_DIR" && npm run check 2>&1 | tail -5; then
  echo "BLOCK: Type checking failed. Fix errors before pushing."
  exit 2
fi

# Step 2: Build
echo "  Building..."
if ! cd "$PROJECT_DIR" && npm run build 2>&1 | tail -10; then
  echo "BLOCK: Build failed. Fix errors before pushing."
  exit 2
fi

echo "Pre-deploy hook: All checks passed. Proceeding with push."
exit 0
