---
name: taste-skill
description: "Anti-slop frontend design skill for landing pages, portfolios, and redesigns. Auto-triggers when building/designing: landing pages, marketing pages, hero sections, homepage redesigns, service pages, or any public-facing UI. Also triggers on: 'make it look better', 'improve the design', 'it looks generic', 'design this page', 'new component'. Source: leonxlnx/taste-skill v1.0.0."
---

# tasteskill: Anti-Slop Frontend Skill

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

---

## 0. BRIEF INFERENCE (Read the Room Before Anything Else)

Before touching code, **infer what the user actually wants**. Most LLM design output is bad because the model jumps to a default aesthetic instead of reading the room.

### 0.A Read these signals first
1. **Page kind** — landing (SaaS / consumer / agency / event), portfolio, redesign, editorial/blog.
2. **Vibe words** — "minimalist", "calm", "Linear-style", "Awwwards", "brutalist", "premium consumer", "Apple-y", "playful", "serious B2B", "editorial", "agency-y".
3. **Reference signals** — URLs, screenshots, products named, brands competing with.
4. **Audience** — B2B procurement panel vs. design-conscious consumer vs. recruiter.
5. **Brand assets** — logo, color, type, photography. For redesigns: starting material, not optional.
6. **Quiet constraints** — accessibility-first, public-sector, regulated, trust-first commerce. These OVERRIDE aesthetic preference.

### 0.B Output a one-line "Design Read" before generating

Before any code: **"Reading this as: \<page kind> for \<audience>, with a \<vibe> language, leaning toward \<design system or aesthetic family>."**

### 0.C If brief is ambiguous, ask ONE question only

Ask exactly one clarifying question when the design read genuinely diverges. If you can infer confidently, skip the question and proceed.

### 0.D Anti-Default Discipline

Do NOT default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism, infinite-loop micro-animations, Inter + slate-900.

---

## 1. THE THREE DIALS

After the design read, set three dials. Every layout, motion, and density decision is gated by these.

- **`DESIGN_VARIANCE: 8`** — 1 = Perfect Symmetry, 10 = Artsy Chaos
- **`MOTION_INTENSITY: 6`** — 1 = Static, 10 = Cinematic/Physics
- **`VISUAL_DENSITY: 4`** — 1 = Art Gallery/Airy, 10 = Cockpit/Packed Data

**Baseline:** `8 / 6 / 4`. Override conversationally, never by asking users to edit the file.

### Dial Inference Table

| Signal | VARIANCE | MOTION | DENSITY |
|---|---|---|---|
| "minimalist / clean / calm / Linear-style" | 5-6 | 3-4 | 2-3 |
| "premium consumer / Apple-y / luxury" | 7-8 | 5-7 | 3-4 |
| "playful / Awwwards / experimental / agency" | 9-10 | 8-10 | 3-4 |
| "landing page / portfolio / marketing (default)" | 7-9 | 6-8 | 3-5 |
| "trust-first / public-sector / accessibility-critical" | 3-4 | 2-3 | 4-5 |

---

## 2. PROJECT CONTEXT: All Star Cleaning

This is a high-trust local service business (exterior cleaning, Ottawa area).

**Aesthetic target:** Confident trades brand — professional, trustworthy, not corporate SaaS.

**Design read (default for this project):** "Reading this as: local service landing page for Ottawa homeowners, with a trust-first professional language, leaning toward Tailwind v4 + DM Serif Display + restrained motion."

**Dial defaults for this project:** `DESIGN_VARIANCE: 6 / MOTION_INTENSITY: 4 / VISUAL_DENSITY: 5`

**Stack constraints:**
- Tailwind v4 with `@theme` tokens from `src/styles/global.css` — no raw hex, no new CSS frameworks
- DM Serif Display (headings) + Outfit (body) — these are the only fonts
- Astro components (server-rendered, no JS unless needed) + React (only for interactive state)
- Brand colors: Midnight Indigo `oklch(28% 0.08 265)` / `#1e2a4a`, Gold `oklch(75% 0.15 85)` / `#d4a843`
- CTA text from `src/data/cta.ts` — never hardcoded
- Bilingual: every user-facing string needs `isFr ? frText : enText` ternary
- Touch targets: `touch-target` class on every `<a>` and `<button>`

---

## 3. TYPOGRAPHY RULES

- Display: `text-4xl md:text-6xl tracking-tighter leading-none`
- Body: `text-base text-gray-600 leading-relaxed max-w-[65ch]`
- **No Inter** — use Outfit (already in project) for body
- **No Fraunces or Instrument_Serif** — banned LLM defaults
- **Serif discipline:** DM Serif Display is justified for this brand (heritage, trust)
- Italic descender clearance: `leading-[1.1]` min + `pb-1` for words with `y g j p q`

---

## 4. COLOR RULES

- Max 1 accent color; saturation < 80% default
- **No AI-purple glow gradients** — no `purple-blue` gradients without product reason
- One palette per project — no mixing warm/cool grays
- No pure `#000000` or `#ffffff` — off-black and off-white
- **Color Consistency Lock:** accent color chosen for page = used on the WHOLE page
- Premium-consumer palette ban: no `#f5f1ea` beige, `#b08947` brass, `#1a1714` espresso as defaults

---

## 5. LAYOUT RULES

- **Anti-center bias:** Centered hero avoided when `DESIGN_VARIANCE > 4`
- **Hero must fit viewport:** headline ≤ 2 lines, subtext ≤ 20 words, CTA visible without scroll
- **Hero top padding cap:** max `pt-24` at desktop
- **Hero stack max 4 elements:** eyebrow OR brand strip, headline, subtext, CTAs
- **Nav on ONE line** at desktop, height ≤ 80px
- **Viewport stability:** `min-h-[100dvh]`, never `h-screen`
- **Grid over flex-math:** CSS Grid over `w-[calc(33%-1rem)]` tricks
- **Section-Layout-Repetition Ban:** same layout family at most once per page

---

## 6. MOTION RULES (project-specific)

- `transition-colors duration-200` for color changes
- `transition-transform` for hover lifts
- Never `transition-all` (except `button.tsx` shared component)
- `will-change-transform` only on actively animating elements
- `prefers-reduced-motion: reduce` → disable all non-essential animation
- No `backdrop-blur` on cards — `bg-card/95` opacity instead
- `StickyBottomCTA` may use `backdrop-blur-md` (only exception)
- Scroll-triggered reveals (as opposed to on-load entrance) are a separate concern — see `scroll-motion` skill for the pattern and the `MOTION_INTENSITY: 4` dial's concrete duration/translate caps.
- Reusable hover/focus/active class combinations already proven in this codebase — see `interaction-states` skill before inventing a new one.

---

## 7. AI TELLS — BANNED PATTERNS

Remove these on sight:

**Visual:** neon/outer glows, pure `#000`/`#fff`, oversaturated accents, gradient text on large headers, custom cursors

**Typography:** oversized H1s as primary hierarchy tool, serif everywhere

**Layout:** 3-column equal feature cards, cramped section spacing, 2-line nav at desktop

**Content:** "John Doe"/"Sarah Chan" names, generic avatars, fake-precise numbers (`99.99%`), startup-slop brand names ("Nexus", "SmartFlow"), filler verbs ("Elevate", "Seamless", "Revolutionize")

**Em-dash ban:** `—` is **COMPLETELY BANNED** everywhere — headlines, body, quotes, attribution, buttons. Use period, comma, hyphen, or colon.

**Section tells:** meta-labels ("SECTION 01", "FEATURES", "00 / INDEX"), decoration text strips at hero bottom, floating top-right sub-text in section headings, version labels in hero

---

## 8. PRE-FLIGHT CHECK (Run Before Every Delivery)

- [ ] Design Read declared (one line)?
- [ ] Dial values set and reasoned from brief?
- [ ] ZERO em-dashes anywhere on the page?
- [ ] ONE theme (light, dark, or auto) for whole page — no mid-page flips?
- [ ] Color Consistency Lock: one accent used identically across all sections?
- [ ] Shape Consistency Lock: one corner-radius system throughout?
- [ ] Every CTA text readable against its background (WCAG AA 4.5:1)?
- [ ] No CTA label wrapping to 2+ lines at desktop?
- [ ] Hero fits viewport (≤ 2-line headline, CTA visible without scroll)?
- [ ] Eyebrow count ≤ ceil(sectionCount / 3)?
- [ ] No duplicate CTA intent (same action, different label)?
- [ ] Nav on ONE line at desktop, ≤ 80px height?
- [ ] Mobile collapse explicit for every multi-column layout?
- [ ] No div-based fake screenshots?
- [ ] All colors from `@theme` tokens — no raw hex?
- [ ] All user-facing strings bilingual (`isFr ? fr : en`)?
- [ ] All `<a>` and `<button>` have `touch-target` class?
- [ ] Typecheck passes: `npm run typecheck`?
