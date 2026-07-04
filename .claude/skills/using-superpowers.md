---
name: using-superpowers
description: "Meta-skill: governs skill invocation order and priority. Always active. Ensures skills are invoked BEFORE responding, planning, or exploring. Source: obra/superpowers."
---

# Using Superpowers

## The Prime Directive

**Invoke relevant skills BEFORE responding** — including before asking clarifying questions or exploring code.

If there is even a 1% chance a skill might apply to what you are doing, you MUST invoke it first.

## Skill Priority Order

1. **Process skills first** (establish approach): systematic-debugging, writing-plans, verification-before-completion
2. **Domain skills second** (execute): impeccable, taste-skill, ui-ux-pro-max, tdd
3. **Implementation-pattern skills third** (the actual how, once the design direction is set): component-architecture, card-patterns, interaction-states, scroll-motion
4. **Style skills last** (presentation): caveman

## Common Rationalization Traps (Avoid These)

- "This is just a simple question" — check skills anyway
- "Let me explore the codebase first" — check skills anyway  
- "I already know how to do this" — check skills anyway
- "The skill doesn't quite apply here" — if 1% chance it does, invoke it

## Hierarchy of Authority

1. User's explicit instructions (highest priority)
2. Active skills
3. Default Claude behavior (lowest priority)

Only bypass a skill workflow when the user explicitly directs you to.

## Available Skills in This Project

| Skill | Trigger |
|-------|---------|
| `impeccable` | UI/design work, component editing |
| `taste-skill` | Landing pages, design briefs, aesthetic decisions |
| `ui-ux-pro-max` | Design system decisions, color/font/component choices |
| `component-architecture` | New component, extracting duplicated markup, deciding where something lives |
| `card-patterns` | Any card/tile/feature-block UI — service cards, review cards, USP cards |
| `interaction-states` | Hover/focus/active states, keyboard interaction, building a new interactive element |
| `scroll-motion` | Scroll-triggered reveals, entrance animation on below-the-fold content |
| `caveman` | User asks for brevity |
| `systematic-debugging` | Bug reports, errors, unexpected behavior |
| `verification-before-completion` | Before any "done" claim |
| `writing-plans` | Feature planning, implementation specs |
| `tdd` | New functionality, typecheck-driven development |
| `claude-mem` | Cross-session memory, recall past decisions |

## Available Agents

| Agent | Invoke When |
|-------|-------------|
| `code-reviewer` | Pre-PR code quality check |
| `comment-analyzer` | Documentation review |
| `pr-test-analyzer` | Test coverage assessment |
| `silent-failure-hunter` | Error handling gaps |
| `type-design-analyzer` | TypeScript type design |
| `code-simplifier` | Complexity reduction |
