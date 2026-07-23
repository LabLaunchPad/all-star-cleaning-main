# Design System — All Star Cleaning Ottawa

## Color Strategy: Midnight Indigo & Tinted White
Midnight Indigo (`oklch(28% 0.08 265)`) carries the authoritative brand voice across headings, primary CTAs, and active states. It replaces the legacy Royal Blue to provide a more premium, established feel. A clean off-white background (tinted toward indigo) anchors the experience, with Gold reserved strictly for ratings and specialized emphasis.

## Palette

### Primary: Midnight Indigo
- `--color-midnight-indigo`: `oklch(63.2% 0.149 243.5)` — Primary brand color, headings, CTAs
- `--color-midnight-indigo-light`: `oklch(73.2% 0.13 243.5)` — Hover states, accents
- `--color-midnight-indigo-dark`: `oklch(32% 0.13 243.5)` — Deep emphasis, button hovers

### Anchor: Navy
- `--color-navy`: `oklch(17.5% 0.045 243.5)` — Hero backgrounds, authoritative elements
- `--color-navy-light`: `oklch(25.5% 0.050 243.5)` — Gradient endpoints
- `--color-navy-dark`: `oklch(12.0% 0.035 243.5)` — Hover states on navy surfaces

### Accent: Gold
- `--color-gold`: `oklch(75% 0.15 85)` — Rare emphasis, ratings, highlights
- `--color-gold-light`: `oklch(80% 0.14 85)` — Hover gold
- `--color-gold-dark`: `oklch(65% 0.16 85)` — Deep gold emphasis

### Neutrals (indigo-tinted)
- `--color-off-white`: `oklch(98.0% 0.005 243.5)` — Page background
- `--color-off-white-dark`: `oklch(93.5% 0.006 243.5)` — Subtle dividers, secondary backgrounds
- `--color-muted`: `oklch(35.0% 0.03 243.5)` — Deeper secondary text
- `--color-muted-foreground`: `oklch(42.0% 0.025 243.5)` — Secondary text foreground (WCAG AA)
- `--color-border`: `oklch(92.0% 0.008 243.5)` — Hairline borders
- `--color-card`: `oklch(99.2% 0.004 243.5)` — Card surfaces

## Typography

### Fonts
- **Headings**: DM Serif Display — editorial authority, local trust, distinctive without being ornate
- **Body**: Outfit — clean geometric sans, excellent readability at body sizes, pairs well with serif headings

### Scale
Fluid `clamp()` for headings, fixed `rem` for body. Ratio 1.25 between steps.

| Role | Token | Value |
|------|-------|-------|
| Display | `--text-display` | `clamp(2.5rem, 5vw, 4.5rem)` |
| Headline | `--text-headline` | `clamp(1.75rem, 4vw, 3rem)` |
| Subheading | `--text-subheading` | `clamp(1.125rem, 2.5vw, 1.5rem)` |
| Body | `--text-base` | `1rem` (16px) |
| Small | `--text-sm` | `0.875rem` |
| Caption | `--text-xs` | `0.75rem` |

### Line Heights
- Headings: 1.1-1.2
- Body: 1.6 (the readability sweet spot)
- Light text on dark: +0.05-0.1

## Elevation
Flat by default. Shadows only on state change (hover, sticky).

| Level | Token | Purpose |
|-------|-------|---------|
| Rest | none | Cards and surfaces at rest are flat |
| Subtle | `--shadow-sm` | Resting cards |
| Hover | `--shadow-md` | Hover lift on cards |
| Elevated | `--shadow-lg` | Sticky CTAs, dropdowns |
| Prominent | `--shadow-xl` | Hero elements, modals |

## Motion
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quart)
- **Fast**: 150ms — color, opacity transitions
- **Base**: 250ms — transforms, non-color changes
- **Slow**: 350ms — orchestrated entrances
- Never animate layout properties (width, height, padding, margin)
- Always respect `prefers-reduced-motion`

## Spacing Scale
8 / 16 / 24 / 32 / 48 / 64 / 80 / 120px — magazine-scale breathing room. Generous separations between sections (48-80px), tight groupings for related elements (8-16px).

## Components

### CTA Buttons
- Primary: `rounded-full bg-midnight-indigo text-white shadow-lg hover:bg-midnight-indigo-dark`
- Secondary: `rounded-full border-2 border-white/30 text-white hover:border-white/60`
- Touch targets: minimum 44x44px (48px on coarse pointers)

### Cards
- Rounded corners (`rounded-xl`), hairline border, flat at rest
- Hover: subtle lift (`-translate-y-0.5`) + shadow increase
- No side-stripe borders (impeccable ban)
- No nested cards

### Breadcrumbs
- Hairline bottom border, compact padding
- Chevron separators, last item bold with `aria-current`

## Rules
1. Never use pure `#000` or pure `#fff` for large areas
2. Never use gradient text (`background-clip: text` + gradient)
3. Never use side-stripe borders (border-left/right > 1px as accent)
4. Never nest cards inside cards
5. Cap body line length at 65ch
6. Tint all neutrals toward brand hue (indigo)
7. Gray text on colored backgrounds: use a shade of the background color instead
8. Every interactive element needs hover, focus, active, and disabled states
