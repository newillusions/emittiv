#!/usr/bin/env bash
# Pre-deploy validation hook for emittiv website
# Triggered on PreToolUse:Bash — checks if command is a git push and validates build first
#
# Exit codes:
#   0 = allow command to proceed
#   2 = block command (validation failed)

set -euo pipefail

TOOL_INPUT="${1:-}"
PROJECT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"

# Only intercept git push commands
if ! echo "$TOOL_INPUT" | grep -qE 'git\s+push'; then
  exit 0
fi

# Run build validation
echo "Pre-deploy hook: Detected git push — running build validation..."

# Step 1: Type checking
echo "  Checking types..."
cd "$PROJECT_DIR" || { echo "BLOCK: Cannot access project directory: $PROJECT_DIR"; exit 2; }
npm run check 2>&1 | tail -5 || { echo "BLOCK: Type checking failed. Fix errors before pushing."; exit 2; }

# Step 2: Build
echo "  Building..."
cd "$PROJECT_DIR" || { echo "BLOCK: Cannot access project directory: $PROJECT_DIR"; exit 2; }
npm run build 2>&1 | tail -10 || { echo "BLOCK: Build failed. Fix errors before pushing."; exit 2; }

echo "Pre-deploy hook: All checks passed. Proceeding with push."
exit 0
