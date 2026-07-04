---
name: ui-ux-pro-max
description: Comprehensive UI/UX design intelligence — 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines across 10 stacks. Use when designing new components, choosing styles, or auditing UI quality.
triggers:
  - "design system"
  - "color palette"
  - "font pairing"
  - "ui design"
  - "ux pattern"
  - "component design"
  - "design style"
  - "pro max"
---

# UI/UX Pro Max Design Intelligence

Source: nextlevelbuilder/ui-ux-pro-max-skill v1.0.0

## Overview

Systematic design decision-making across 10 stacks:
React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, **Tailwind CSS**, shadcn/ui, HTML/CSS

This project uses **Tailwind CSS v4** — apply Tailwind-stack guidelines throughout.

## 10 Priority Rule Categories

### 1. CRITICAL — Accessibility
- Contrast ratio minimum: **4.5:1** for body text, **3:1** for large text
- All interactive elements: keyboard-navigable with visible focus states
- ARIA labels on icons, star ratings, mobile menus
- `role="dialog"` with focus trap for mobile nav (already in project)
- Error messages linked via `aria-describedby`

### 2. CRITICAL — Touch & Interaction
- Minimum touch target: **44×44px** — use `touch-target` class (already in project)
- Minimum spacing between adjacent targets: **8px**
- Loading feedback within 100ms of user action
- Form inputs with `autocomplete` and `inputmode` attributes
- For the actual class-level hover/focus/active/keyboard patterns already proven in this codebase, see the `interaction-states` skill — this section is the rule, that skill is the reusable implementation.

### 3. HIGH — Performance
- Images: use `loading="lazy"` below the fold
- Layout stability: reserve space for async content (no CLS)
- Font loading: `font-display: swap`
- Critical CSS inlined (Astro handles this)

### 4. HIGH — Style Selection
**For All Star Cleaning** (trust-first exterior cleaning brand):
- Style: **Clean Professional** — minimal noise, strong hierarchy, trust signals
- Avoid: flashy gradients, heavy animations, dark/moody palettes
- Icons: consistent SVG set, never mix icon styles
- Photography: real Ottawa properties, not stock illustrations

### 5. HIGH — Layout & Responsive
- Mobile-first breakpoints
- Max content width: `65ch` for body copy (already in project)
- Hero sections: image-first on mobile, text overlay optional
- Cards: equal-height in grid, no nested cards (already in project) — see the `card-patterns` skill for the 3 card species this codebase actually uses and their individual anatomy rules.

### 6. MEDIUM — Typography & Color
**Project tokens** (from `src/styles/global.css`):
- Use `--color-*` CSS vars — never hardcode hex
- Colors declared as hex fallback + oklch override
- No pure `#000` / `#fff` on large areas (already in project)
- Line-height body: 1.5–1.7
- Heading scale: 1.25 ratio minimum

### 7. MEDIUM — Animation
- Duration range: **150–300ms**
- Use `transform` and `opacity` only (GPU-composited)
- `transition-colors duration-200` or `transition-transform` (never `transition-all`)
- Always include `prefers-reduced-motion` override (already global — see `global.css:207-214`)
- `will-change-transform` only on actively animating elements
- For scroll-triggered reveal motion specifically, see the `scroll-motion` skill — it documents a confirmed gap (entrance classes firing on page-load paint instead of scroll-into-view for below-the-fold sections) and the fix pattern.

### 8. MEDIUM — Forms & Feedback
- Visible labels always (not just placeholders)
- Error placement: below the field, linked via `aria-describedby`
- Validation: on blur, not on keypress
- Success states: explicit confirmation message
- Web3Forms failure: must show error to user (not silent)

### 9. HIGH — Navigation Patterns
- Mobile nav: hamburger + full-screen drawer with `role="dialog"` and Escape-to-close
- Breadcrumbs on all content pages
- Bottom-of-page CTA on service/location pages
- `StickyBottomCTA` for mobile (backdrop-blur exception allowed)

### 10. LOW — Data Visualization
Not applicable to this project (no charts).

## Design System Workflow

```
1. Identify: product type → exterior cleaning / home services
2. Style: clean professional, trust-forward
3. Palette: blues/greens evoking cleanliness; warm neutrals for trust
4. Typography: readable sans-serif, strong weight contrast for hierarchy
5. Apply: Tailwind v4 tokens from src/styles/global.css
6. Verify: run /impeccable audit for final QA
```

## Pre-Delivery Checklist

- [ ] All interactive elements keyboard-navigable
- [ ] Contrast ratios checked (4.5:1 minimum)
- [ ] Touch targets ≥44×44px (touch-target class)
- [ ] No layout shift on image load
- [ ] Mobile tested at 375px width
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Form errors visible and linked
- [ ] EN and FR strings both present
- [ ] No hardcoded hex colors (use CSS vars)
- [ ] No hardcoded CTA text (use `src/data/cta.ts`)

## Design Dials

Tune output intensity (1–10 scale):
- `DESIGN_VARIANCE` = 6 (some creative latitude, mostly consistent)
- `MOTION_INTENSITY` = 4 (subtle, purposeful motion only)
- `VISUAL_DENSITY` = 5 (balanced — not sparse, not cluttered)
