# All Star Cleaning — Ottawa Exterior Cleaning Services

Professional cleaning services website for All Star Cleaning, an Ottawa-based exterior cleaning company. Built with Astro, TypeScript, and Tailwind CSS. Deployed on Cloudflare Pages.

**Live site:** https://www.allstarcleaning.ca

---

## Overview

A bilingual (EN/FR) marketing website that converts visitors into phone calls and quote requests for residential and commercial exterior cleaning services across 44 Ottawa-area locations.

- **600+ static pages** — 44 locations x 5 services x 2 locales + static pages
- **5 services** — Window cleaning, gutter cleaning, pressure washing, siding cleaning, snow removal
- **44 Ottawa locations** — From Arnprior toVars, Barrhaven to Rockcliffe Park
- **Bilingual** — Full English and French with proper hreflang tags
- **Mobile-first** — Responsive across all viewports (375px to 1024px+)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 6.4 + React 19 |
| Styling | Tailwind CSS v4 + custom design tokens |
| CMS | Keystatic (headless, cloud-backed JSON) |
| Deployment | Cloudflare Pages |
| Forms | Web3Forms (third-party SaaS) |
| Language | TypeScript (strict) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/rahlplx/all-star-cleaning.git
cd all-star-cleaning
npm install
```

### Environment Variables

Create `.env`:

```env
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=
WEB3FORMS_ACCESS_KEY=
PUBLIC_SITE_URL=https://www.allstarcleaning.ca
```

### Commands

```bash
npm run dev        # Dev server → http://localhost:4321
npm run build      # Production build → ./dist/
npm run preview    # Preview production build locally
npm run typecheck  # Type check via astro check
```

---

## Project Structure

```
src/
├── components/           # Astro + React components
│   ├── ui/               # React components (button.tsx)
│   ├── Header.astro      # Sticky nav, mobile hamburger
│   ├── Footer.astro      # 4-column layout, social icons
│   ├── BaseHead.astro    # Meta, OG tags, hreflang, canonical
│   ├── StickyBottomCTA.astro  # Fixed mobile CTA
│   ├── FAQAccordion.astro     # Accordion FAQ
│   ├── JsonLd.astro      # JSON-LD structured data injection
│   └── ServiceBadge.astro     # Service card with icon
├── content/              # Keystatic CMS content (JSON)
│   ├── services/         # Service data (5 services)
│   ├── reviews/          # Customer reviews (5 reviews)
│   ├── about.json        # About page content
│   ├── homepage.json     # Homepage content
│   └── settings.json     # Site-wide settings (phone, address, etc.)
├── data/                 # Programmatic data
│   ├── locations.ts      # 44 Ottawa locations
│   └── services.ts       # Service data loader
├── layouts/
│   ├── BaseLayout.astro  # Base layout (head + header + footer)
│   └── PageLayout.astro  # Page layout (adds breadcrumbs + hero)
├── pages/
│   └── [locale]/
│       ├── index.astro              # Homepage
│       ├── about.astro              # About page
│       ├── reviews.astro            # Reviews page
│       ├── contact.astro            # Contact page (Web3Forms)
│       ├── services/                # Service pages
│       │   ├── index.astro          # Services index
│       │   └── [serviceSlug].astro  # Individual service
│       └── area/                    # Location pages
│           ├── index.astro          # Areas index
│           └── [locationSlug]/
│               ├── index.astro      # Location hub
│               └── [serviceSlug].astro  # Location + service combo
├── seo/                  # Schema.org generators
│   ├── local-business.ts # HomeAndConstructionBusiness schema
│   ├── service-schema.ts # Service schema
│   ├── faq-schema.ts     # FAQPage schema
│   ├── breadcrumb-schema.ts  # BreadcrumbList schema
│   ├── review-schema.ts  # Review + AggregateRating schema
│   ├── howto-schema.ts   # HowTo schema
│   ├── person-schema.ts  # Person schema (about page)
│   └── index.ts          # Schema exports
├── styles/
│   └── global.css        # Tailwind @theme tokens, utilities
├── lib/
│   └── utils.ts          # cn(), formatPhone(), hreflangUrl()
└── types.ts              # TypeScript interfaces
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/en/` |
| `/[locale]/` | Homepage (EN/FR) |
| `/[locale]/about` | About page |
| `/[locale]/reviews` | Customer reviews |
| `/[locale]/contact` | Contact form + info |
| `/[locale]/services/` | Services index |
| `/[locale]/services/[serviceSlug]` | Individual service (5 x 2 = 10 pages) |
| `/[locale]/area/` | Areas index |
| `/[locale]/area/[locationSlug]/` | Location hub (44 x 2 = 88 pages) |
| `/[locale]/area/[locationSlug]/[serviceSlug]` | Location + service (440 programmatic pages) |
| `/[locale]/privacy` | Privacy policy |
| `/[locale]/terms` | Terms of service |
| `/[locale]/sitemap` | HTML sitemap |
| `/keystatic/*` | CMS admin UI |

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Midnight Indigo | `oklch(28% 0.08 265)` / `#1e2a4a` | Primary brand, headings, CTAs |
| Navy | `oklch(17.5% 0.030 265)` / `#111827` | Hero backgrounds |
| Gold | `oklch(75% 0.15 85)` / `#d4a843` | Ratings, highlights |
| Off-White | `oklch(98.0% 0.005 265)` / `#fafafa` | Page background |
| Card | `#ffffff` | Card surfaces |

All colors use dual-declaration: hex fallback first, oklch override second.

### Typography

| Role | Font | Value |
|------|------|-------|
| Headings | DM Serif Display | `clamp(2.5rem, 5vw, 4.5rem)` (display) |
| Body | Outfit | `1rem` (16px) |

### Components

- **CTA buttons:** `rounded-full`, midnight-indigo bg, white text
- **Cards:** `rounded-xl`, hairline border, flat at rest, hover lift
- **Breadcrumbs:** Hairline border, chevron separators

### Rules

1. Never use pure `#000` or pure `#fff` for large areas
2. Never use gradient text
3. Never use side-stripe borders
4. Never nest cards inside cards
5. Cap body line length at 65ch
6. Tint all neutrals toward brand hue (indigo)

---

## SEO

### Structured Data

| Schema | Pages |
|--------|-------|
| HomeAndConstructionBusiness | All |
| Service | 5 service pages |
| FAQPage | 5 service + location+service pages |
| BreadcrumbList | All |
| HowTo | Homepage |
| Person | About page |
| Review + AggregateRating | Reviews page |

### Meta Tags

- Unique title tags (< 60 chars) per page
- Unique meta descriptions (< 160 chars)
- Canonical URLs
- Open Graph (og:title, og:description, og:image, og:type, og:locale)
- Twitter summary_large_image cards
- Hreflang (en, fr, x-default)

---

## Accessibility

- Skip to content link
- Proper `lang` attribute (`en`/`fr`)
- Semantic HTML with heading hierarchy
- ARIA roles on interactive elements (`role="dialog"` on mobile menu)
- Focus management on mobile menu (trap, restore, Escape)
- `autocomplete` attributes on form fields
- `aria-label` on star ratings (`role="img"`)
- Touch targets minimum 44x44px

---

## i18n

- Full English and French translations
- Manual routing via `[locale]` param
- Hreflang tags for language alternates
- Language toggle in top bar

---

## Performance

- Fully static Astro site (fast by default)
- Image lazy loading on below-fold images
- Eager loading on hero images
- WebP format for key images
- Cloudflare Pages CDN
- Tech-stack obfuscation (Wappalyzer/BuiltWith detect zero technologies)

---

## Harness Checks

6/6 manual checks passed:

| Check | Status |
|-------|--------|
| API Key Leaks | PASS — No hardcoded secrets |
| Admin Route Protection | PASS — Keystatic OAuth |
| CORS | PASS — N/A (static site) |
| Rate Limiting | PASS — N/A (static site) |
| Error Boundaries | PASS — 404.astro exists |
| Database Access Controls | PASS — N/A (no DB) |

---

## Development Sessions

### Session 1: Full Pipeline Audit (2026-06-22)

**Duration:** ~4 hours
**Commits:** 2 (`e41d9e6`, `409b4cc`)

Ran full `/vibe:auto` pipeline:
- Cloned repo, installed deps, built project (600+ pages)
- Full pipeline audit: 14 pages audited (desktop + mobile)
- 7 subagent audits: color palette, typography, layout grid, components, copywriting, mobile usability, accessibility
- Cross-browser stability check (Chrome, Firefox, Safari, Edge)
- 30 visual design system issues found and fixed across 15 source files

**Key fixes:**
- Contact page missing (CRITICAL) — created with Web3Forms integration
- H1 sizing bug — 16px → 72px via `.heading-display` utility
- CTA text standardized to "Get a Free Quote" across all pages
- Mobile menu ARIA: `role="dialog"`, focus trap, Escape key
- Star ratings: `role="img"` + `aria-label`
- oklch color fallbacks: hex first, oklch second
- Border-radius standardized: cards = `rounded-xl`, CTA = `rounded-full`
- Heading hierarchy: design token utilities (`heading-display`, `heading-subsection`, `heading-card`)
- Phone numbers sourced from `siteSettings` (never hardcoded)
- Dark surfaces use `text-text-on-dark` (never raw `text-white`)

### Session 2: Dependency Updates (2026-06-22)

**PR #2 merged:** Dependabot npm_and_yarn group update
- astro 6.3.0 → 6.4.8
- esbuild 0.27.3 → 0.28.1
- js-yaml 4.1.1 → 4.2.0
- tar 7.5.13 → 7.5.16
- undici 7.24.8 → 7.28.0
- vite 7.3.3 → 8.0.16
- ws 8.18.0 → 8.21.0

---

## PR History

| # | Title | Author | State | Merged |
|---|-------|--------|-------|--------|
| 2 | chore(deps): bump npm_and_yarn group with 8 updates | dependabot | MERGED | 2026-06-22 |
| 1 | chore(deps): bump npm_and_yarn group with 2 updates | dependabot | CLOSED | — |

---

## License

Private — All Star Cleaning Ottawa.
