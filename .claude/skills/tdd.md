---
name: test-driven-development
description: Use when implementing any feature or bugfix, before writing implementation code
triggers:
  - "write a test"
  - "tdd"
  - "test first"
  - "test driven"
  - "failing test"
---

# Test-Driven Development (TDD)

## Overview

Write the test first. Watch it fail. Write minimal code to pass.

**Core principle:** If you didn't watch the test fail, you don't know if it tests the right thing.

**Violating the letter of the rules is violating the spirit of the rules.**

## Project Note (All Star Cleaning)

This project has **no test runner**. The verification gates are:
- `npm run typecheck` — TypeScript correctness
- `npm run build` — static generation succeeds

Adapt TDD principles: write the "spec" as TypeScript types/interfaces first, verify `typecheck` fails, then implement. For UI behavior, document the expected outcome before implementing.

## When to Use

**Always:**
- New features
- Bug fixes
- Refactoring
- Behavior changes

**Exceptions (ask your human partner):**
- Throwaway prototypes
- Configuration files

## The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Write code before the test? Delete it. Start over.

## Red-Green-Refactor

### RED — Write Failing Spec

Write one minimal TypeScript interface or type showing what should exist.

For this project:
```typescript
// Write the interface/type first — verify typecheck fails
interface NewServiceField {
  frFieldName: string; // bilingual pair required
  fieldName: string;
}
```

**Requirements:**
- One behavior
- Real code (no workarounds)
- `npm run typecheck` must fail before implementation

### Verify RED

```bash
npm run typecheck
# Must show an error before you write implementation
```

### GREEN — Minimal Code

Write simplest code to pass typecheck. Don't add features beyond what the spec requires.

### Verify GREEN

```bash
npm run typecheck
npm run build  # for getStaticPaths changes
```

### REFACTOR — Clean Up

After green only. Keep typecheck passing. Don't add behavior.

## Good Specs

| Quality | Good | Bad |
|---------|------|-----|
| **Minimal** | Tests one thing | Tests multiple unrelated behaviors |
| **Clear** | Describes intended behavior | Vague or implementation-dependent |
| **Shows intent** | Demonstrates desired API | Obscures what code should do |

## Red Flags — STOP and Start Over

- Code written before type/interface
- Typecheck passes before implementation exists
- Can't explain why typecheck fails
- "I'll check types after"
- Rationalizing "just this once"

## Verification Checklist

Before marking work complete:

- [ ] Every new function/component has matching TypeScript types
- [ ] Watched `npm run typecheck` fail before implementing
- [ ] Wrote minimal code to pass typecheck
- [ ] All typecheck passes
- [ ] `npm run build` succeeds (for getStaticPaths/CMS changes)
- [ ] New user-facing strings have both EN and FR versions
- [ ] New CMS fields have both `fieldName` and `frFieldName`
