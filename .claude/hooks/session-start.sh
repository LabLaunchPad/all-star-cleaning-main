#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"
npm install

# Export local secrets (.env.local is gitignored) so MCP configs like
# .mcp.json's ${PENPOT_TOKEN} can resolve them for this session.
if [ -f .env.local ] && [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  while IFS='=' read -r key value; do
    case "$key" in
      ''|'#'*) continue ;;
    esac
    printf 'export %s=%q\n' "$key" "$value" >> "$CLAUDE_ENV_FILE"
  done < .env.local
fi
