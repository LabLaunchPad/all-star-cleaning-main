# Design System — All Star Cleaning Ottawa

## Color Strategy: Midnight Indigo Anchor + Vivid Per-Service Accents
Midnight Indigo (`oklch(28% 0.08 265)`) carries the authoritative brand voice across headings, primary CTAs, navigation, and active states — the anchor that never changes. A clean off-white background (tinted toward indigo) anchors the experience, with Gold reserved strictly for ratings and specialized emphasis.

Layered on top: a **vivid 5-color accent system** (2026-07), one confident hue per service, replacing what used to be flat navy everywhere plus 3 divergent, partly-broken ad-hoc badge-color maps duplicated across pages. See "Vivid Accent Palette" below. v1 — pending further tuning against reference screenshots.

## Palette

### Primary: Midnight Indigo
- `--color-midnight-indigo`: `oklch(28% 0.08 265)` — Primary brand color, headings, CTAs
- `--color-midnight-indigo-light`: `oklch(38% 0.07 265)` — Hover states, accents
- `--color-midnight-indigo-dark`: `oklch(20% 0.06 265)` — Deep emphasis, button hovers

### Anchor: Navy
- `--color-navy`: `oklch(17.5% 0.030 265)` — Hero backgrounds, authoritative elements
- `--color-navy-light`: `oklch(25.5% 0.035 265)` — Gradient endpoints
- `--color-navy-dark`: `oklch(12.0% 0.025 265)` — Hover states on navy surfaces

### Accent: Gold
- `--color-gold`: `oklch(75% 0.15 85)` — Rare emphasis, ratings, highlights
- `--color-gold-light`: `oklch(80% 0.14 85)` — Hover gold
- `--color-gold-dark`: `oklch(65% 0.16 85)` — Deep gold emphasis

### Neutrals (indigo-tinted)
- `--color-off-white`: `oklch(98.0% 0.005 265)` — Page background
- `--color-off-white-dark`: `oklch(93.5% 0.006 265)` — Subtle dividers, secondary backgrounds
- `--color-muted`: `oklch(42.0% 0.025 265)` — Secondary text
- `--color-border`: `oklch(92.0% 0.008 265)` — Hairline borders
- `--color-card`: `#ffffff` — Card surfaces

### Vivid Accent Palette (per-service color language)
One hue per service — carries identity through `ServiceCard.astro`'s badge/CTA-pill/checkmark accents and `SectionMotif`'s background tints. Defined in `global.css` as `--color-vivid-*`; also duplicated as literal oklch strings in `src/data/services.ts`'s `serviceAccents` map (see note below on why).

| Service | Token | Value | Role |
|---------|-------|-------|------|
| Window cleaning | `--color-vivid-blue` | `oklch(62% 0.20 235)` | Streak-Free badge |
| Gutter cleaning | `--color-vivid-amber` | `oklch(78% 0.18 70)` | Clog Prevention badge |
| Pressure washing | `--color-vivid-green` | `oklch(65% 0.20 150)` | Deep Clean badge |
| Siding cleaning | `--color-vivid-violet` | `oklch(58% 0.22 300)` | Curb Appeal badge |
| Snow removal | `--color-vivid-coral` | `oklch(63% 0.21 25)` | Winter Ready badge, urgent-CTA territory |

Each has a `-dark` (badge text on light surface) and `-surface` (tinted background chip) variant following the project's existing hex-fallback + oklch-override convention.

**Known quirk:** `ServiceCard.astro` sets its `--accent`/`--accent-surface`/`--accent-dark` inline-style variables from literal oklch strings in `services.ts`, not from `var(--color-vivid-X)` lookups. This is deliberate — 2 of the 5 `--color-vivid-*` tokens were being silently dropped by the CSS build pipeline when referenced only dynamically (root cause not conclusively identified after exhaustive isolation testing: value, hue, chroma, name, and position were all ruled out). The `global.css` tokens still exist and are used directly (as literal `var()` calls) by `SectionMotif`'s `tint` prop — that usage pattern is confirmed reliable.

## Typography

### Fonts
- **Headings**: Outfit (ExtraBold/800–Black/900) — heavy, tightly-tracked geometric sans; single-family system, weight carries the hierarchy instead of a serif/sans pairing
- **Body**: Outfit (Regular/300–700 range) — same family at lighter weights, so heading and body always render from one loaded font, no pairing mismatch risk
- Letter-spacing floor for display headings: `-0.04em` (tightened from the previous serif pairing's `-0.02em` to match the chunkier, tighter-set look)
- Rationale: replaced the DM Serif Display + Outfit pairing with a single heavy-weight Outfit system, matching a bolder, more modern geometric-sans display treatment (2026-07 rebrand)

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
- Rounded corners (`rounded-xl`/`rounded-2xl`), hairline border, flat at rest
- Hover: subtle lift (`-translate-y-0.5`/`-translate-y-1`) + shadow increase
- No side-stripe borders (impeccable ban)
- No nested cards
- **Service cards specifically** (`ServiceCard.astro`, canonical implementation, 2026-07 redesign): editorial anatomy, not the old photo-with-dark-gradient-scrim-and-white-text-overlay pattern. Image sits inset in its own rounded frame with padding around it; title/description/CTA render below on the card's actual background at full contrast — no `text-shadow`-over-photo reliance. Per-service vivid color carries identity via a tinted badge chip + accent-colored CTA pill, never a border stripe. See `card-patterns` skill for the 3 card species and when uniform grids are correct vs. a smell.

### Background Motifs
`SectionMotif.astro` (2026-07) layers restrained, domain-specific SVG line-art behind section content — water droplets, spray arcs, a window-pane grid, a gutter/downspout silhouette — tinted with a vivid accent color at low opacity (0.04–0.06). Used to relieve flat off-white/navy section fills without competing with foreground text. Pair with the `divider-angle-up` CSS utility for bolder (non-flat) section transitions.

### Mobile Card Carousel
`ServiceCardMarquee.astro` (2026-07): below `md`, the 5 service cards render as two rows auto-scrolling in opposite directions instead of a static grid (which doesn't fit 5 cards well on a narrow screen). Pauses on hover/touch-hold; always ships a persistent, focusable pause/play button (WCAG 2.2.2 — hover-only pause isn't sufficient for keyboard/touch users). `prefers-reduced-motion` is handled by the existing global override (`global.css` forces `animation-duration: 0.01ms`), not a separate JS branch.

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
