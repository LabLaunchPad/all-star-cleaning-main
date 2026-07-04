---
name: claude-mem
description: Persistent memory system for Claude Code — compress and persist context across sessions. Use when asked to remember something, recall past decisions, or start a new session with prior context.
triggers:
  - "remember"
  - "recall"
  - "what did we decide"
  - "from last session"
  - "persist"
  - "memory"
  - "claude-mem"
  - "/mem"
---

# Claude-Mem: Persistent Memory

## Overview

claude-mem (v13.10.1) maintains persistent memory across Claude Code sessions. It captures tool usage and compresses observations so subsequent sessions start with relevant context from prior work.

**Data storage:** `~/.claude-mem/` — local only, never leaves your machine.

**Activation:** Memory injection begins on the second session in a project.

## Core Commands

| Command | What it does |
|---------|-------------|
| `/learn-codebase` | Scans entire repo into memory (~5 min). Run once at project start. |
| `/mem-search <query>` | Search past observations for a topic |
| `/standup` | Summarize what was worked on recently |
| `/timeline-report` | Show chronological history of changes |
| `/how-it-works` | Explain the memory system |
| `/make-plan` | Create a structured plan persisted to memory |
| `/smart-explore` | Explore codebase and store structural knowledge |
| `/weekly-digests` | Weekly summary of activity |

## How Memory Works

1. **Capture** — tool usage is automatically logged during sessions
2. **Compress** — at session end, observations are summarized via Claude
3. **Inject** — relevant memories auto-inject into future session prompts
4. **Search** — you can query past decisions with `/mem-search`

## Project-Specific Memory Notes (All Star Cleaning)

Key facts to persist:
- Branch: `claude/init-eha2ln` — never push to main
- 440 programmatic pages (44 locations × 5 services × 2 locales)
- All user-facing strings need EN/FR ternary: `isFr ? frText : enText`
- Every interactive element needs `touch-target` class
- CTA strings come from `src/data/cta.ts` — never hardcode
- Site settings (phone, address, review count) from `settings.json`
- No test runner — use `npm run typecheck` + `npm run build` as gates
- Touch targets: 44×44px min on all `<a>` and `<button>` elements

## When Claude-Mem Fires

This skill activates when you:
- Ask "what did we decide about X?"
- Say "remember this for next session"
- Ask "from our last session..."
- Start a new session and need context restored

## Installation Check

To verify claude-mem is installed:
```bash
ls ~/.claude/plugins/marketplaces/thedotmack/
```

If missing, install with:
```bash
npx claude-mem install
```
