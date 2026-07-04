---
name: verification-before-completion
description: "Mandatory verification gate. Fires before any completion claim, success statement, PR creation, commit, or task handoff. Source: obra/superpowers."
---

# Verification Before Completion

**NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.**

## The Gate

Before any of these actions, run verification:
- Saying "done", "fixed", "complete", "working", "passing"
- Expressing confidence about correctness ("should work", "I'm confident", "looks correct")
- Creating commits or pull requests
- Moving to the next task
- Delegating to another agent

## Verification Process

1. **Identify** — What command proves this claim? (`npm run typecheck`, `npm run build`, specific test)
2. **Execute** — Run the command fresh. Not a cached result. Not "it passed earlier."
3. **Read output** — Read the COMPLETE output. Check exit codes.
4. **Verify** — Does the output actually support the claim?
5. **Claim** — Only then make the completion statement, citing the evidence.

## What Counts as Verification

✅ `npm run typecheck` → shows 0 errors  
✅ `npm run build` → exits 0, shows page count  
✅ Specific error message gone from fresh run output  
✅ "34/34 tests pass" (with actual output shown)

## What Does NOT Count

❌ "I changed the code, it should work now"  
❌ "The logic looks correct"  
❌ "I'm confident this is right"  
❌ Partial output ("first few lines look fine")  
❌ Previous run output

## Project Verification Commands

```bash
npm run typecheck   # TypeScript check — primary gate
npm run build       # Full build — catches static generation errors
npm run preview     # Visual check after build
```

No test runner exists in this repo — typecheck + build are the correctness gates.

## For Regression Claims

Must show the full red-green cycle: "error appeared before fix" → "error gone after fix." Both states in evidence.
