# Design System — All Star Cleaning Ottawa

## Single Source of Truth Architecture

All design tokens, utilities, reset layers, and theme configurations are declared in a single entry point:
- **`src/styles/global.css`**: Tailwind CSS v4 `@theme` block + `@layer utilities`
- **Hybrid Strategy**: **Meta Modern Commerce** (`DESIGNmeta.md`) drives the entire website body & components, combined with **Dell 1996 Retro Catalog** (`DESIGNdell.md`) for the footer.

---

## Visual Aesthetics & Palette

### Website Body: Meta Modern Commerce (`DESIGNmeta.md`)
- **Primary Accent**: Meta Cobalt Blue (`#0064e0`) — CTAs, active links, focus rings
- **Deep Ink**: `#0a1317` — Primary headings, hero dark elements
- **Soft Surface**: `#f1f4f7` — Card backgrounds, secondary containers
- **Hairline Border**: `#ced0d4` — Clean hairline division borders
- **Pill Buttons**: Full pill-shaped rounding (`rounded-full` / `9999px`) on all primary and secondary buttons.
- **Rounded Cards**: Generous `24px` (`1.5rem`) rounding on all cards and bento grid elements.
- **Typography**: Clean geometric sans-serif (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).

### Footer: Dell 1996 Retro Catalog (`DESIGNdell.md`)
- **Top Accent Line**: Bold 4px Red border (`#e91d2a`)
- **Frame Ink**: Pure Black background (`#000000`)
- **Sticker Badges**: High-contrast Yellow badge (`#fcc20f`) with black text and drop shadow
- **Typography**: Uppercase sans-serif column headings (`Arial Black`) + classic serif body text (`Times New Roman`)
- **Corners & Edges**: Flat 0px retro corners (`rounded-none`).


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
8. **Section Heading Canon**: All marketing section `<h2>` headings must use the canonical sizing pattern:
   ```html
   <h2 class="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
   ```
   Subtitle below: `<p class="mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">`
   The `.heading-section` utility is for **document/article pages only** (privacy, terms, sitemap).

