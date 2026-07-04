# PR Review — Full Quality Pass

Runs all review agents in sequence against the current branch diff.

## Usage

```
/review-pr [base-branch]
```

Default base: `main`

## What It Does

Orchestrates 6 specialized review agents in order:

1. **comment-analyzer** — flags inaccurate, redundant, or missing comments
2. **pr-test-analyzer** — assesses typecheck/build coverage for changed files
3. **silent-failure-hunter** — finds swallowed errors, missing null guards, unhandled promises
4. **type-design-analyzer** — checks TypeScript type invariants and locale typing
5. **code-reviewer** — bugs, logic errors, security issues (≥80% confidence only)
6. **code-simplifier** — dead code, over-engineering, redundant patterns

## Process

```bash
# Step 1: Get the diff
git diff main...HEAD --stat
git diff main...HEAD

# Step 2: Spawn agents sequentially (each gets the full diff as context)
# Agent: comment-analyzer
# Agent: pr-test-analyzer  
# Agent: silent-failure-hunter
# Agent: type-design-analyzer
# Agent: code-reviewer
# Agent: code-simplifier

# Step 3: Compile findings by severity
# Critical → must fix before merge
# Important → fix before proceeding
# Minor → nice to have
```

## Severity Response

| Level | Action |
|-------|--------|
| **Critical** | Fix immediately — blocks merge |
| **Important** | Fix before moving to next task |
| **Minor** | Optional — address if time allows |

## Project-Specific Checks

- All new user-facing strings have EN/FR pairs
- New CMS fields have `fieldName` + `frFieldName` counterparts
- `getStaticPaths()` changes verified with `npm run build`
- New interactive elements have `touch-target` class
- No hardcoded CTAs (use `src/data/cta.ts`)
- No hardcoded phone/address (use `siteSettings`)

## Verification Gates

After fixes:
```bash
npm run typecheck
npm run build
```
