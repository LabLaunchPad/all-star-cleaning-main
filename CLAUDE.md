# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for All Star Cleaning, an Ottawa exterior cleaning company. Fully static, bilingual (EN/FR), ~600+ pages generated at build time. No backend, no database — the only external integration is Web3Forms for the contact form.

- **Framework**: Astro 7 + React 19 (React used only for `src/components/ui/button.tsx`)
- **Styling**: Tailwind CSS v4 (config lives in `src/styles/global.css` via `@theme`, not `tailwind.config.ts`)
- **CMS**: Keystatic (headless, GitHub-backed JSON) at `/keystatic`
- **Deployment**: Cloudflare Pages (`@astrojs/cloudflare` adapter, `wrangler.toml`)
- **i18n**: English + French, manual routing via `[locale]` route param + `src/middleware.ts` (no astro i18n router)

## Commands

```bash
npm run dev        # Dev server → http://localhost:4321
npm run build      # Production build → ./dist/ (generates all 600+ pages)
npm run preview    # Preview production build locally
npm run typecheck  # Type check via astro check (no separate test suite exists)
```

There is no lint script and no test runner configured — `typecheck` is the only automated check.

## Architecture

### Programmatic page generation

The page count comes from a 3-axis cartesian product, generated via `getStaticPaths()`:

```
44 locations (src/data/locations.ts) × 5 services (src/content/services/*.json) × 2 locales = 440 pages
```

- `src/pages/[locale]/area/[locationSlug]/[serviceSlug].astro` — the combo page (440 total)
- `src/pages/[locale]/area/[locationSlug]/index.astro` — location hub (88 total)
- `src/pages/[locale]/services/[serviceSlug].astro` — service page (10 total)

To add a location: append an entry to `src/data/locations.ts` — new pages generate automatically at build.
To add a service: create a JSON file in `src/content/services/` and register it in the `src/data/services.ts` loader array.

### Content flow

Keystatic (`keystatic.config.ts`) defines collections (`reviews`, `services`) and singletons (`settings`, `about`, `homepage`) that are stored as JSON under `src/content/`. Content can be edited via the `/keystatic` admin UI (needs the dev server + GitHub OAuth env vars) or by hand-editing the JSON directly — both paths are equivalent since there's no real backend.

Service JSON has a fixed bilingual shape (name/frName, description/frDescription, features/frFeatures, cta/frCta, faqs, metaTitle, metaDescription) — see any file in `src/content/services/` before adding fields. Note `frSlug` is unused/orphaned; only the EN `slug` is used in URLs for both locales.

### SEO schema generation

Every page's JSON-LD is built through generators in `src/seo/` (local-business, service, faq, breadcrumb, review, howto, person) and injected via `src/components/JsonLd.astro`. Never hand-write JSON-LD inline — add a generator if a new schema type is needed.

### Layouts

- `BaseLayout.astro` — head + header + footer only
- `PageLayout.astro` — wraps `BaseLayout` and adds breadcrumbs + hero

### Build-time tech-stack obfuscation

`astro.config.mjs` contains custom Vite plugins (`obfuscateTechStack`, `stripHtmlComments`, and asset path rerouting) that run only on production builds to defeat Wappalyzer/BuiltWith fingerprinting:
- `--tw-*` CSS custom properties → `--c-*`
- Tailwind `@layer` names renamed to generic equivalents
- `/_astro/` asset paths rerouted to `/static/`
- HTML comments stripped from output

Because of this, never reference internal Tailwind CSS variables or `@layer` names directly in code that ships to production — use the `@theme` tokens instead.

### Conventions

- Path alias `@/*` → `src/*`
- Always thread the `locale` param through pages/components; use `hreflangUrl()` (`src/lib/utils.ts`) for alternate-language links
- All user-facing text needs an EN/FR ternary (`isFr ? frText : enText`); French typesetting uses a non-breaking space before `:` (` :`)
- CTA copy is centralized in `src/data/cta.ts` — never hardcode CTA strings
- Phone numbers and review counts come from `siteSettings` (Keystatic `settings.json`), never hardcoded

## Design System

Full reference in `DESIGN.md`; product/brand/UX strategy in `PRODUCT.md`. Key rules Claude should follow when touching UI:

- Color: Midnight Indigo (brand/CTA/headings), Navy (hero backgrounds), Gold (ratings/rare emphasis only), indigo-tinted neutrals. Every color has a hex fallback declared before its oklch override.
- Never use pure `#000`/`#fff` for large areas, gradient text, or side-stripe borders. Never nest cards inside cards.
- Cards: `rounded-xl`, hairline border, flat at rest, hover lift + shadow. CTA buttons: `rounded-full`.
- Touch targets: every interactive element (nav links, buttons, badges, FAQ summaries, footer links) needs the `touch-target` class (min 44×44px).
- Transitions: never use `transition-all` (except the shared `button.tsx`); use `transition-colors duration-200` or `transition-transform` explicitly.
- No `backdrop-blur` on cards/content — use `bg-card/95` solid-with-opacity instead. Exception: `StickyBottomCTA`'s persistent mobile bar.
- Accessibility patterns already established: mobile menu uses `role="dialog"`, `aria-modal`, focus trap + Escape-to-close; star ratings use `role="img"` with `aria-label`; form inputs need `<label for>`, `autocomplete`, and `inputmode` per field type.

There is an `impeccable` design-audit skill installed at `.agents/skills/impeccable/SKILL.md`. `DESIGN.md` + `PRODUCT.md` already satisfy its `/teach` step, so go straight to `/audit`, `/polish`, or `/craft` from that skill when doing visual work.

## Environment Variables

`.env` (Keystatic CMS OAuth): `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

`.env.local`: `WEB3FORMS_ACCESS_KEY` (contact form), `PUBLIC_SITE_URL`
