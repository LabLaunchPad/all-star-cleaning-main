---
name: writing-plans
description: "Implementation planning skill. Triggers when the user asks to plan a feature, create a roadmap, design an implementation, write a spec, or says 'how should we approach', 'plan this out', 'create a plan'. Source: obra/superpowers."
---

# Writing Plans

Create comprehensive implementation plans for engineers who may be unfamiliar with the codebase.

## Plan Scope

- Break multi-subsystem specs into separate plans beforehand
- Each plan must produce independently testable software
- Never write a plan that depends on another unwritten plan

## File Design

- Map file structure upfront — each file owns one clear responsibility
- Prefer focused files; split by responsibility, not technical layers
- Name the exact file paths, not "somewhere in src/"

## Task Granularity

Each task = smallest unit worthy of independent review. Tasks end with independently testable deliverables. Split only where a reviewer might approve one task while rejecting a neighbor.

## Steps Must Be Bite-Sized

Break each task into 2–5 minute actions:
1. Write test → verify it fails
2. Implement → verify it passes
3. Commit

## Zero Placeholders Rule

Every step needs actual content:
- Exact file paths (not "create a new file")
- Complete code snippets (not "add the validation logic")
- Exact commands with expected output (not "run the tests")

Never write "TBD", "add validation", or "similar to Task N" — repeat the actual code.

## Plan Document Structure

```
# Plan: [Feature Name]

## Goal
[One sentence: what problem does this solve?]

## Architecture
[How it fits into the existing system]

## Files
[Exact list of files to create/modify]

## Tasks

### Task 1: [Name]
Files: [exact paths]
Steps:
1. [exact command or code]
2. [exact command or code]
Verify: [exact command + expected output]

### Task 2: ...

## Self-Review
- [ ] Every step has exact code/commands
- [ ] No placeholders remain
- [ ] Types consistent across tasks
- [ ] Build will pass after each task
```

## Save Location

`docs/plans/YYYY-MM-DD-<feature-name>.md` unless user specifies otherwise.

## Project Context (All Star Cleaning)

- Correctness gates: `npm run typecheck` + `npm run build`
- No test runner — plan for manual verification steps
- Location pages auto-generate from `src/data/locations.ts` + `src/data/services.ts`
- Bilingual: every new user-facing field needs EN + FR version
- CMS fields: add to both `keystatic.config.ts` schema and JSON files
