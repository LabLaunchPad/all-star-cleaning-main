# Design System — All Star Cleaning Ottawa

## Single Source of Truth Architecture

All design tokens, utilities, reset layers, and theme configurations are declared in a single entry point:
- **`src/styles/global.css`**: Tailwind CSS v4 `@theme` block + `@layer utilities`

---

## Color Strategy: Midnight Indigo & Tinted White

Vibrant Midnight Indigo (`oklch(63.2% 0.149 243.5)` / `#2e82f7`) carries the authoritative brand voice across headings, primary CTAs, and active states. A clean off-white background (tinted toward indigo, hue 243.5) anchors the experience, with Gold reserved strictly for ratings and specialized emphasis.

## Palette

### Primary: Midnight Indigo (Refined Royal Blue)
- `--color-midnight-indigo`: `oklch(63.2% 0.149 243.5)` / `#2e82f7` — Primary brand color, headings, CTAs
- `--color-midnight-indigo-light`: `oklch(73.2% 0.13 243.5)` / `#61a1fb` — Hover states, accents
- `--color-midnight-indigo-dark`: `oklch(32% 0.13 243.5)` / `#1c3f7b` — Deep emphasis, button hovers
- `--color-midnight-indigo-surface`: `oklch(97.5% 0.015 243.5)` / `#f4f8fc` — Light accent surfaces

### Anchor: Navy (Warm Indigo-Tinted Dark)
- `--color-navy`: `oklch(17.5% 0.045 243.5)` / `#131824` — Hero backgrounds, authoritative elements
- `--color-navy-light`: `oklch(25.5% 0.050 243.5)` / `#222838` — Gradient endpoints
- `--color-navy-dark`: `oklch(12.0% 0.035 243.5)` / `#0a0d16` — Deep dark surfaces

### Accent: Gold
- `--color-gold`: `oklch(75% 0.15 85)` / `#c9a84c` — Rating stars, highlights
- `--color-gold-light`: `oklch(80% 0.14 85)` / `#d4b96e` — Hover gold
- `--color-gold-dark`: `oklch(65% 0.16 85)` / `#a88a2e` — Deep gold emphasis

### Neutrals (Indigo-Tinted, Hue 243.5)
- `--color-off-white`: `oklch(98.0% 0.005 243.5)` / `#f9fafc` — Page background
- `--color-off-white-dark`: `oklch(93.5% 0.006 243.5)` / `#e5e8f0` — Subtle dividers, secondary backgrounds
- `--color-muted-foreground`: `oklch(42.0% 0.025 243.5)` / `#545a70` — Secondary text (WCAG AA 5.22:1 contrast)
- `--color-border`: `oklch(92.0% 0.008 243.5)` / `#e5e8f0` — Hairline borders
- `--color-card`: `oklch(99.2% 0.004 243.5)` — Card surfaces (tinted white, not pure `#fff`)
- `--color-text-on-dark`: `oklch(94.5% 0.025 243.5)` / `#e9ecf5` — Text on navy surfaces (Indigo-Wash)
- `--color-text-on-dark-muted`: `oklch(88.0% 0.03 243.5)` / `#cbd2e5` — Secondary text on navy surfaces

---

## Typography

### Fonts & Fallbacks
- **Headings**: `DM Serif Display`, Georgia, serif — editorial authority, local trust
- **Body**: `Outfit`, system-ui, sans-serif — clean geometric sans, high readability
- **Fallback Overrides**: `@font-face` size-adjust metrics configured in `global.css` (`DM Serif Display Fallback`, `Outfit Fallback`) to prevent Cumulative Layout Shift (CLS) on web font load.

### Fluid Scale
Fluid `clamp()` for headings, fixed `rem` for body. Ratio 1.25 between steps.

| Role | Token | Value |
|------|-------|-------|
| Display | `--text-display` | `clamp(2.5rem, 5vw, 4.5rem)` |
| Headline | `--text-headline` | `clamp(1.75rem, 4vw, 3rem)` |
| Subheading | `--text-subheading` | `clamp(1.125rem, 2.5vw, 1.5rem)` |
| Lead | `--text-lead` | `1.25rem` (20px) |
| Body | `--text-base` | `1rem` (16px) |
| Small | `--text-sm` | `0.875rem` (14px) |
| Caption | `--text-xs` | `0.75rem` (12px) |

### Line Heights & Measure
- Headings: 1.15
- Body: 1.6 (readability sweet spot)
- Readability Measure: `.measure` caps line length at `65ch`

---

## Elevation & Shadows

Tinted brand shadows using OKLCH indigo hue (`oklch(15% 0.05 243.5)`):

| Level | Token | Purpose |
|-------|-------|---------|
| Rest | `shadow-sm` | Hairline cards at rest |
| Hover | `shadow-md` | Card hover state |
| Elevated | `shadow-lg` | Sticky CTAs, dropdowns |
| Prominent | `shadow-xl` | Hero elements, modals |
| Hover Lift | `.hover-lift` | GPU-accelerated translate-y with soft shadow fade |

---

## Motion & Transitions

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart)
- **Fast**: 150ms — color, opacity transitions (`--transition-fast`)
- **Base**: 250ms — transforms, non-color changes (`--transition-base`)
- **Slow**: 350ms — orchestrated entrances (`--transition-slow`)
- **Accessibility**: `@media (prefers-reduced-motion: reduce)` disables non-essential animations.

---

## Utility Classes (`src/styles/global.css`)

- `.touch-target`: Minimum 44×44px touch targets (48px on coarse pointer devices)
- `.measure`: Caps text container width to `65ch`
- `.hover-lift`: GPU-composited lift on hover using pseudo-element opacity shift
- `.section-asymmetric`: 7:5 asymmetric grid column layout for editorial balance
- `.brand-gradient` / `.cta-gradient`: Smooth brand blue to dark navy linear gradients
- `.safe-area-bottom`: Mobile viewport notch padding (`env(safe-area-inset-bottom)`)

---

## Rules

1. **Single Source of Truth**: All colors and values must reference `@theme` CSS variables in `global.css`.
2. **No Pure Black/White**: Use tinted neutrals (`--color-navy` / `--color-off-white`).
3. **No Gradient Text**: Never use `background-clip: text` with gradients.
4. **No Side-Stripe Borders**: Never use accent `border-left` or `border-right` on cards.
5. **No Decorative Glassmorphism**: Cards and content sections must use solid tinted surfaces (`--color-card`).
6. **Touch Targets**: Every interactive link or button must maintain a minimum 44×44px touch target.
7. **Accessibility**: All text colors must meet WCAG AA contrast guidelines (4.5:1 minimum).
