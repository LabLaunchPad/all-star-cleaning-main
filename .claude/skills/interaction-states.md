---
name: interaction-states
description: "Micro-interaction conventions — hover, focus, active, and keyboard states — as a reusable pattern library grounded in this codebase's actual implementations. Auto-triggers on: 'hover state', 'focus state', 'keyboard interaction', 'micro-interaction', 'tap feedback', 'active state', 'build an interactive component'."
---

# Interaction States

`taste-skill` and `ui-ux-pro-max` state the *rules* (no `transition-all`, touch targets ≥44px, reduced-motion). This skill is the *pattern library* — the actual class combinations already proven in this codebase, so new interactive elements match instead of reinventing.

## Focus State — Non-Negotiable Pattern

Every interactive element in this codebase uses one of these two combos. Don't invent a third:

```
focus-visible:ring-2 focus-visible:ring-{color} focus-visible:ring-offset-2
focus-visible:ring-2 focus-visible:ring-{color}          (no offset, on dark/tight backgrounds)
```

Use `focus-visible:` (not bare `:focus`) everywhere — it suppresses the ring for mouse clicks and shows it only for keyboard nav, which is what `Header.astro`, `Footer.astro`, and every `<a>`/`<button>` in this codebase already does. Skip the offset variant when the element sits on a dark/tight background where the offset would clip (see `TopBar.astro`'s links — no offset — vs `Header.astro`'s CTA button on white — has offset).

## Hover Choreography — the `group` Pattern

The codebase's one hover idiom for icon-plus-text elements:

```html
<a class="group ...">
  <svg class="transition-transform group-hover:translate-x-1" .../>
  text
</a>
```

Icon moves (translate/rotate), text/background changes color — never both animate the *same* property redundantly. Reference implementations: the phone icon rotates 12° on hover (`TopBar.astro:34`), the arrow icon translates on every "Learn more"/CTA link (`index.astro:88`, `:294`).

**Don't** put the hover effect on a wrapping `<div>` around a `<button>` — put `group` directly on the interactive element itself so keyboard focus (`group-focus`) can trigger the same effect on tab-navigation, not just mouse hover.

## Active/Press State

`active:scale-95` (buttons, pills) or `active:scale-[0.98]` (the shared `button.tsx` — slightly more subtle because it's used at more sizes, including small inline buttons where 5% feels large). Pick one based on element size, not arbitrarily — bigger tap targets can take the more pronounced 95% without looking broken; small pills (badges, tags) should never scale on press, only larger primary/secondary CTAs.

## Transition Property Discipline

Decision table — this is what the `transition-all` ban (CLAUDE.md, enforced repo-wide as of commit a0d2a74) resolves to in practice:

| What's changing on hover | Use |
|---|---|
| Only color/background/border | `transition-colors duration-200` |
| Only transform (scale/translate) | `transition-transform` (duration optional, often instant feels better for scale) |
| Color AND transform together | Pick the one that dominates the perceived effect — usually `transition-colors`, letting scale/shadow snap (see `Header.astro:97`'s CTA button: color transitions, `active:scale-95` snaps) |
| Genuinely 3+ unrelated properties | `transition-[color,background-color,transform]` explicit list — never `transition-all` |

## Keyboard Interaction — Reference Implementation

`Header.astro`'s mobile menu (lines ~180–230) is the canonical pattern for any future modal/dialog/dropdown:
- `role="dialog"` on the panel
- Focus trap: Tab/Shift+Tab cycle within the open panel, don't leak focus to the page behind it
- `Escape` closes and returns focus to the trigger button (`trigger.focus()` after closing — don't just hide the panel and strand focus)
- `aria-expanded` toggled on the trigger, `aria-controls` pointing at the panel id

Reuse this exact structure for any new disclosure widget (a filter panel, a share menu) rather than a lighter-weight pattern — this project has exactly one correct implementation, don't introduce a second, less-complete one.

## Touch Feedback Timing

`ui-ux-pro-max`'s rule: loading feedback within 100ms of user action. Concrete application — the contact form's submit button (Web3Forms) must flip to a pending/disabled state immediately on click, before the network request resolves, not after. If you're building a new form or async action, check `src/pages/[locale]/contact.astro` for the existing pending-state pattern before writing a new one.

## Before Adding a New Interactive Element

1. Focus ring: `focus-visible:ring-2 focus-visible:ring-{color}` (+ `-offset-2` if on a light/loose background) — every time, no exceptions.
2. Hover: `group`/`group-hover` if icon+text, plain `hover:` if single element. Never both color and transform transitioning via `transition-all`.
3. Active: scale-95 for primary-sized elements, no scale for small badges/pills.
4. Touch target: `touch-target` class — see the dedicated a11y convention in CLAUDE.md, not repeated here.
5. Keyboard: if it's a disclosure (opens/closes content), match `Header.astro`'s mobile-menu pattern exactly.
