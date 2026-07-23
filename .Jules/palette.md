# 🎨 Palette's UX & Accessibility Journal

Only critical, reusable UI/UX and accessibility design learnings are recorded here.

## 2026-06-22 - [Atomic Foundations & Progressive Form Enhancement]

**Learning:**
In hybrid multi-language static site architectures (like Astro with localized routes `/en` and `/fr`), traditional forms that submit as standard POST requests can break the user journey by redirecting visitors out of the application context to external generic thank-you pages, losing their language state.

Furthermore, hardcoding decorative styling metrics (such as paddings, focus rings, transitions) on every individual input or button across template page variants leads to design system "slop" and discrepancies (e.g. out-of-sync colors or focus state inconsistencies).

Applying Brad Frost's **Atomic Design System** hierarchy solved this:
1. **Atoms Stage:** Global foundational styles (`.btn`, `.form-input`, `.card`) defined as a single source of truth in `src/styles/global.css` ensure absolute structural coherence.
2. **Molecules/Organisms Stage:** Component elements (Astro or React `button.tsx`) become "dry" by extending atomic utility patterns directly, preventing markup bloating.
3. **Pages Stage (Interactivity):** Progressive AJAX form handling (`fetch` with query parameter pre-selection and smooth focus scrolling) creates a highly delightful, fluid user experience. This keeps visitors inside our locale framework while utilizing existing status containers (`div#form-status`) marked as `aria-live="polite"` to communicate submission progress seamlessly to screen readers.

**Action:**
- Always define foundational building blocks (Atoms) globally in CSS before visual execution to eliminate visual and semantic duplication.
- For all forms across static sites, intercept standard POST actions with fetch-based asynchronous submission to preserve user context and locales, showing explicit localized loading indicators during asynchronous network states.
