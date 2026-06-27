# Changelog

All notable changes to All Star Cleaning website.

---

## [2026-06-22] — Full Pipeline Audit + 30 Design System Fixes

### Fixed
- **CRITICAL:** Contact page was missing (404). Created `src/pages/[locale]/contact.astro` with Web3Forms integration, Google Maps embed, business info
- **CRITICAL:** H1 sizing bug — was 16px on service pages, now 72px via `.heading-display` utility class
- **CRITICAL:** Footer `<a>` tag unclosed on reviews page (was breaking layout)
- Hero h1 now uses `heading-display` design token instead of hardcoded `text-3xl sm:text-5xl md:text-6xl lg:text-8xl`
- All CTA buttons standardized to `rounded-full` (contact, about, services, area pages)
- Card border-radius standardized to `rounded-xl` (was mix of rounded-lg and rounded-xl)
- Star ratings changed from `text-yellow-400` to `text-gold`
- All `text-white` on dark surfaces changed to `text-text-on-dark`
- Contact form spacing: `space-y-5` → `space-y-6`, `gap-5` → `gap-6`
- Hardcoded phone numbers replaced with `siteSettings.phone` / `siteSettings.phoneLink` in service and area pages
- Homepage services section `bg-white` → `bg-card`
- FAQAccordion heading uses `heading-card` utility instead of raw `text-2xl`
- StickyBottomCTA buttons `rounded-xl` → `rounded-full`
- All service/area page headings use `heading-card` utility
- CTA headings: removed redundant `text-3xl md:text-4xl` on top of `heading-subsection`
- Area pages: all `text-2xl` headings → `heading-card`

### Added
- Contact page with Web3Forms integration, form validation, success state
- `siteSettings` import in area pages for phone number references
- Trust section spacing: `py-10/py-14` → `py-12/py-16`

### Changed
- BaseLayout theme-color: `#0047AB` → `#1e2a4a` (matches design token)
- button.tsx default size now includes `rounded-full`
- Services index: grid wrapped in `max-w-7xl mx-auto` for alignment consistency
- Services index: trust badges wrapped in `max-w-7xl mx-auto`

---

## [2026-06-22] — 7-Subagent Audit + Accessibility Fixes

### Fixed
- Footer logo link inaccessible (no accessible name) — added `aria-label`
- Contact form missing accessibility attributes — added `autocomplete`, `inputmode`, `aria-required`
- Mobile menu missing `role="dialog"` and focus trap — added ARIA dialog semantics
- Star ratings missing `role="img"` — added semantic ARIA
- CTA text inconsistency (4+ variants) — standardized to "Get a Free Quote"
- Heading subsection not fluid — uses `--text-subheading` clamp()
- section-full-bleed overflow — added `overflow-x: clip`
- Missing `<label>` associations on form inputs
- Footer logo alt text empty — added descriptive alt

### Added
- Centralized CTA copy in `src/data/cta.ts`
- Focus management on mobile menu (trap, restore, Escape)
- Star rating accessibility pattern: `role="img"` + `aria-label`
- Form accessibility: `autocomplete`, `inputmode`, `aria-required`, `<label>` associations
- Mobile menu ARIA: `role="dialog"`, `aria-modal`, focus trap

---

## [2026-06-22] — Contact Page + H1 Fix

### Fixed
- Contact page was returning 404 (all CTAs broken)
- H1 was 16px on service pages instead of 72px

### Added
- `src/pages/[locale]/contact.astro` with contact form, Google Maps, business info
- `.heading-display` utility class for H1 sizing

---

## [2026-05-17] — Sticky Footer + Contact Info

### Fixed
- Top overlap of sticky footer components
- Added contact info

---

## [2026-05-13] — UI Fixes

### Fixed
- Review and homepage CTA
- Old variable names cleanup
- UI color fixes
- Various UI fixes

---

## [2026-05-11] — About Page + Copyright

### Fixed
- About page content updates
- Copyright notice added

---

## [2026-05-10] — Services Page + GBP

### Fixed
- Services page UI
- Google Business Profile updated
- Services section card and bento UI updated
- Sitemap settings done
- Sitemap and header footer logo responsiveness
- Sticky header scroll issue

---

## [2026-05-09] — UI Bug Fixes

### Fixed
- UI fix v2
- UI bug fix
- Badge updated

---

## [2026-05-08] — Initial Build

### Added
- Initial site build with all pages
- Hero section
- Sticky bottom responsiveness
- Header footer
- Top bar
- Website theme color
- About page

---

## PR History

| # | Title | Author | State | Date |
|---|-------|--------|-------|------|
| 2 | chore(deps): bump npm_and_yarn group with 8 updates | dependabot | MERGED | 2026-06-22 |
| 1 | chore(deps): bump npm_and_yarn group with 2 updates | dependabot | CLOSED | 2026-06-13 |
