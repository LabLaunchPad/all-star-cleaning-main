---
name: systematic-debugging
description: "Rigorous debugging methodology. Auto-triggers when the user reports a bug, error, unexpected behavior, something broken, or asks to debug/fix/investigate an issue. Source: obra/superpowers."
---

# Systematic Debugging

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST.**

Quick fixes mask underlying problems. Follow all four phases before touching code.

## Phase 1: Root Cause Investigation

1. Read the error message carefully — the actual text, not a paraphrase
2. Reproduce the issue consistently — if you can't reproduce it, you don't understand it
3. Check recent changes — what changed immediately before this broke?
4. Gather diagnostic evidence across components
5. Trace data flow backward through call stacks

## Phase 2: Pattern Analysis

1. Find working comparable code in the codebase
2. Review reference implementations thoroughly
3. Identify ALL differences between working and broken versions
4. Understand dependencies and their versions

## Phase 3: Hypothesis and Testing

1. Form one specific, falsifiable hypothesis
2. Make ONE minimal test change
3. If it fails, form a new hypothesis — do not stack changes
4. Document what you tried and why it didn't work

## Phase 4: Implementation

1. Write a failing test case FIRST (when applicable)
2. Implement a single fix addressing the root cause
3. Verify the fix actually resolves the root cause, not just the symptom

## Stop Rule

**After 3 failed fix attempts: STOP.** This signals a possible architectural flaw. Surface the problem rather than continuing to patch symptoms. Discuss with the user.

## Red Flags (Abandon These Immediately)

- "Let me just try one more thing..."
- Multiple simultaneous changes
- Skipping reproduction steps
- "This should fix it" without verification evidence

## For This Project (All Star Cleaning)

- Validate changes: `npm run typecheck` (no test runner exists)
- Build check: `npm run build` (catches static generation errors)
- Route issues: check `src/pages/[locale]/` — locale param is mandatory
- Data issues: check `src/data/locations.ts` and `src/data/services.ts`
- CMS issues: check `src/content/` JSON files for schema violations
- Style issues: verify obfuscation — `--tw-*` → `--c-*` in production builds
