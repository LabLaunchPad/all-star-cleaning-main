# Impeccable Design Review

Invoke the impeccable design skill for visual quality audits and polish.

## Usage

```
/impeccable [command] [target]
```

## Available Commands

| Command | What it does |
|---------|-------------|
| `/impeccable audit` | Full design audit — score every component against the system |
| `/impeccable polish [component]` | Elevate a specific component's visual quality |
| `/impeccable animate [element]` | Add purposeful motion to an element |
| `/impeccable harden` | Accessibility + robustness pass |
| `/impeccable critique` | Honest critique of current implementation |
| `/impeccable craft [feature]` | Build a new UI element from scratch at high quality |
| `/impeccable contrast` | Check all text/background contrast ratios |
| `/impeccable spacing` | Audit spacing consistency |
| `/impeccable mobile` | Mobile-first responsive review |
| `/impeccable touch` | Verify all touch targets meet 44×44px minimum |

## Auto-Trigger

This command also fires automatically when you ask about:
- "fix the design"
- "it looks bad"
- "improve the UI"
- "visual audit"
- "design polish"

## Project Design Rules (All Star Cleaning)

- Colors: use `--color-*` CSS vars from `src/styles/global.css`, never hardcode hex
- Touch targets: all `<a>`/`<button>` need `touch-target` class
- No `backdrop-blur` on cards (exception: `StickyBottomCTA`)
- No `transition-all` (exception: `button.tsx`)
- No pure `#000`/`#fff` on large areas
- No gradient text
- Body copy capped at 65ch
- Bilingual: every visible string needs EN/FR ternary
- CTA strings from `src/data/cta.ts` only

## Dials (from taste-skill)

Default for this project: `DESIGN_VARIANCE=6 / MOTION_INTENSITY=4 / VISUAL_DENSITY=5`

Trust-first trades brand — clean, professional, never flashy.
