---
name: card-patterns
description: "Canonical card UI anatomy, elevation, and hover rules for this codebase — the constructive counterpart to impeccable/taste-skill's 'generic 3-card grid' ban. Auto-triggers on: 'card', 'card grid', 'service card', 'review card', 'feature card', building any bordered content block with an image/icon + text + CTA."
---

# Card Patterns

`impeccable` and `taste-skill` both ban "identical card grids" and "generic 3-card feature rows" as slop patterns — this skill is the constructive other half: what a *good* card looks like in this codebase, and when uniformity is actually correct vs. lazy.

## The Three Card Species Already in This Codebase

Don't invent a fourth without checking these first — they cover nearly every case:

**1. Image-led card** (`ServiceCard.astro`, canonical implementation as of the 2026-07 redesign) — image sits **inset in its own rounded frame** (padding around it, not full-bleed), with a per-service tinted badge chip in its top-left corner. Title → description (`line-clamp-2`) → feature checklist (max 2–3 items) → CTA pill render **below the image on the card's normal background**, not overlaid on top of it. This deliberately replaced an earlier full-bleed-photo + dark-gradient-scrim + white-text-overlay pattern (the "generic AI/agency template" look impeccable/taste-skill ban) — full-contrast dark text on a light card background, no `text-shadow`-over-photo hack needed. The featured/first card gets a wider `col-span` and a shorter, wider image aspect ratio — **intentional asymmetry, not a bug**; don't "fix" it into a uniform grid.

**2. Icon-led card** (`index.astro:170–204`, USP/"Why Choose" cards) — small icon-in-circle (h-10 w-10, tinted background matching the icon's semantic color), heading, body copy. No image, no CTA — these are trust-building, not conversion-driving, so they stay quieter (`border p-5`, no hover-lift, no shadow).

**3. Testimonial/content card** (`reviews.astro:78`, review cards) — `hover-lift` class, `border border-border bg-card p-6`, no image. Star rating as `role="img"` with `aria-label`. These *are* meant to be uniform — a wall of consistent review cards is correct here, not a violation of "identical card grid"; the ban is about marketing/feature cards, not testimonial walls.

## Anatomy Rules

- **Image aspect ratio**: `aspect-[4/3]` default, featured cards get `aspect-[16/9]` (mobile) up to `aspect-[21/9]` (desktop). Don't introduce a new ratio without a reason tied to the image content.
- **Image framing**: inset with `p-3 pb-0` padding around a `rounded-xl overflow-hidden` wrapper — never full-bleed to the card edge. This is what makes the card read as a component/tile rather than a hero banner.
- **Legibility**: since text no longer overlays the photo, there's no gradient-scrim/text-shadow to maintain — description/title use normal full-contrast dark-on-light text. If a future card variant DOES overlay text on an image, then (and only then) apply the old gradient-scrim rule: `bg-gradient-to-t from-{brand}-dark/70 via-{brand}-dark/50 to-transparent`, never `text-shadow` alone.
- **Line-clamp everything variable-length**: descriptions from Keystatic CMS are unbounded text — always `line-clamp-2` or `line-clamp-3` on card body copy, never let CMS content silently break card height in a grid.
- **Badge placement**: absolute top-left corner of the image frame (not the card as a whole) — a small tinted chip using the per-service accent color, matching the CTA pill and checkmark icons below for a cohesive color story per card.
- **Per-service color**: set via inline-style CSS custom properties (`--accent`/`--accent-surface`/`--accent-dark`) from literal oklch values in `src/data/services.ts`, referenced by Tailwind arbitrary-value utilities (`bg-[var(--accent)]`) — not `var(--color-vivid-X)` lookups (see DESIGN.md's "known quirk" note on why literal values were needed instead).

## Elevation & Hover

- `hover-lift` utility (`global.css:296`) — `translateY(-2px)` + soft shadow via `::after`, GPU-composited. Available but `ServiceCard` uses its own `hover:-translate-y-1 hover:shadow-xl` directly rather than the utility class — both are acceptable, don't introduce a third distinct lift value.
- Image-led cards use `hover:scale-105` on the `<img>` itself (`group-hover:scale-105`) with `overflow-hidden` on its frame, not on the whole card — scaling the photo inside a fixed frame reads as premium; scaling the whole card reads as a button, which these aren't.
- Icon-led cards (USP) get neither — no hover on non-clickable info cards. If a card isn't a link, it shouldn't look interactive.

## No Nested Cards (DESIGN.md)

A "nested card" is any bordered/shadowed/background-tinted box placed *inside* another bordered/shadowed/background-tinted box. Concretely: don't put a `border rounded-xl bg-card` div inside a card's content area to "group" a sub-section — use spacing (`gap`, `mt-`) and a heading instead. The FAQ accordion's `<details>` summary is not a nested card (no border/shadow of its own inside the parent) — that's the correct pattern to imitate.

## When Uniform Grids Are Correct vs. a Smell

| Content type | Uniform grid | Why |
|---|---|---|
| Reviews/testimonials | ✅ Correct | Reader compares many data points of the same shape — consistency *is* the feature |
| Service/feature marketing cards | ❌ Vary the first/featured one | All-equal reads as a template; the eye needs an entry point |
| FAQ items | ✅ Correct (they're not cards, they're an accordion) | N/A — see FAQAccordion, not this skill |
| Location listings | Depends — check `card-patterns` before adding a new location grid | Not yet built; if you build one, treat it like reviews (uniform), not services (varied) — locations aren't ranked by importance |

## Before Building a New Card

1. Does it match one of the 3 species above? Reuse that anatomy, don't invent a 4th.
2. Is the content CMS-sourced (unbounded length)? → `line-clamp` is mandatory, not optional.
3. Is this a marketing/conversion card (vary the grid) or a data/testimonial card (uniform is fine)?
4. See `component-architecture` skill before extracting — 2+ page types using the same card anatomy means it should already be a shared `.astro` component, not a 3rd copy-paste. (`ServiceCard.astro` is the reference example of doing this correctly.)
5. For mobile/narrow viewports showing many cards of this species, check `ServiceCardMarquee.astro` before building a new carousel — the dual-row auto-scroll pattern (with pause-on-hover/touch-hold + persistent pause button for WCAG 2.2.2) is already built and reusable.
