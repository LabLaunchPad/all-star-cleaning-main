---
name: component-architecture
description: "Governs when to extract a reusable component vs. inline markup, where new components should live, and prop API conventions for this codebase. Auto-triggers on: 'new component', 'extract this', 'reusable', 'duplicate markup', 'component library', 'refactor into a component'."
---

# Component Architecture

Governs component extraction, categorization, and prop design for this specific codebase — not general React/Astro best practice, but this project's actual conventions.

## Current Inventory (ground truth, re-check before extracting)

```
src/components/
  BaseHead.astro         — <head> composition, SEO meta
  FAQAccordion.astro     — <details>/<summary> accordion
  Footer.astro           — site footer (renders on every page)
  GoogleReviewBadge.astro — rating badge, 2 variants (bar/compact)
  Header.astro           — nav + mobile menu (largest, 250 lines)
  JsonLd.astro           — structured-data injector wrapper
  ServiceBadge.astro     — small colored label pill
  SidebarCTA.astro       — sticky sidebar quote CTA
  SocialLinks.astro      — footer social icon row
  StickyBottomCTA.astro  — mobile-only bottom action bar
  TopBar.astro           — announcement bar (renders on every page)
  ui/
    button.tsx           — the ONLY component in ui/, cva-based, React
```

Everything else is flat at the `src/components/` root. There is no `cards/`, `layout/`, or `primitives/` subfolder — don't invent one speculatively; see the two-bucket rule below before adding structure.

## Two-Bucket Rule

**`src/components/ui/`** — headless/primitive elements with variant logic (cva, class-variance-authority) or that need client-side interactive state. `button.tsx` is the only current resident. A new primitive belongs here if it's variant-driven (size/color/intent props) and has no domain knowledge (doesn't know what a "service" or "location" is).

**`src/components/` (root)** — composed, domain-aware Astro components. Everything else. If a component imports from `src/data/services.ts` or `src/content/`, or takes a `locale` prop, it's domain-aware and belongs at root, not in `ui/`.

Don't create a third bucket (`cards/`, `sections/`) until there are 3+ components that would live there — one new component is never a reason to add a folder.

## Extraction Threshold (different from code-simplifier's)

`code-simplifier` uses a 4+ occurrence threshold for logic duplication — that's the right bar for a helper function nobody will read twice. **Visual components are held to a lower bar: 2+ page types.** The cost of inconsistent card markup drifting across pages (one gets a hover fix, the other doesn't) outweighs the abstraction cost of a props-based `.astro` component.

**Confirmed live violation of this rule:** the service-card markup (image + badge + title + description + feature list + CTA pill) is hand-duplicated in:
- `src/pages/[locale]/index.astro:225–300` (homepage services grid)
- `src/pages/[locale]/services/index.astro:~85–110` (services index page)

Same anatomy, same classes, drifting slightly between the two already (featured-card sizing logic only exists in one). This should be `src/components/ServiceCard.astro` taking `service`, `locale`, `featured` props. See the `card-patterns` skill for the canonical anatomy to extract.

## Prop API Conventions

- `locale` is always typed `'en' | 'fr'`, never `string` (per `type-design-analyzer` / `src/types.ts`) — every domain component takes it as a prop rather than reading `Astro.currentLocale` internally, so it stays testable/reusable.
- Bilingual content props come as pairs matching the CMS convention: `name`/`frName`, not a pre-resolved `displayName` — resolve `isFr ? frX : x` at the call site or just inside the component, but keep both fields passed in so the component doesn't need its own data-fetching.
- Prefer a single `service`/`location` object prop over spreading 6 individual scalar props — matches how `src/data/services.ts` and `src/data/locations.ts` already shape the data.
- Boolean variant props (`featured`, `compact`) over string enums when there are only 2 states — reach for a string union only at 3+.

## Astro vs React

Astro component (server-rendered, zero JS) is the default for anything that doesn't need client-side state — this is already the project's convention (only `button.tsx` is React, and only because `cva` variant composition is easiest there). Don't reach for a `.tsx` component to solve a styling problem; reach for it only when you need `useState`, event handlers beyond a `<script>` tag can express, or genuine client interactivity Astro's islands can't do more simply with a `<script>` block (see `Header.astro`'s mobile menu — vanilla JS in a `<script>` tag, not a React component, for exactly this reason).

## Before Extracting, Check

1. Does it already exist under a different name? (grep the prop shape, not just the component name)
2. Is this the 2nd occurrence of a *visual* pattern, or the 4th occurrence of *logic*? — different thresholds, see above.
3. Will the extracted component need `locale` and bilingual field pairs, or is it locale-agnostic (icons, badges)?
4. Does it belong in `ui/` (variant-driven, domain-blind) or root (domain-aware)?
