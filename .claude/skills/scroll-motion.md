---
name: scroll-motion
description: "Scroll-triggered reveal motion — how to correctly gate entrance animations to viewport visibility instead of page-load paint. Fixes a confirmed gap where .fade-in/.slide-up fire on paint, not on scroll. Auto-triggers on: 'scroll animation', 'scroll reveal', 'animate on scroll', 'parallax', 'entrance animation', 'reveal on scroll', building any below-the-fold section."
---

# Scroll-Driven Motion

## The Gap This Fixes (confirmed, not theoretical)

`.fade-in` / `.slide-up` / `.delay-1`–`.delay-5` (`global.css:302–319`) are pure CSS `animation: ... both` — they play **once, at DOM paint**, regardless of scroll position. That's correct for above-the-fold hero content (`index.astro:85–124` — the hero headline/CTA/badges are already in the viewport at load, so a staggered paint-time entrance is exactly right).

It's **wrong** everywhere these same classes get reused below the fold: `services/index.astro:91`, `reviews.astro:78`, `index.astro:172` (USP cards). By the time a user scrolls to see them, the animation already finished — the "motion" is invisible. This isn't a rendering bug, it's a **motion-architecture gap**: the codebase has zero scroll-triggered reveal, only load-triggered reveal reused in the wrong place.

## The Fix Pattern — Reuse the Existing IntersectionObserver Idiom

`Header.astro:217–229` already has the one IntersectionObserver in this codebase (toggling `.is-sticky` on scroll). That's the idiom to extend, not a new library or a scroll-linked-animation-timeline experiment:

```js
// Shared pattern — add once, e.g. in BaseLayout.astro's script or a small scroll-reveal.ts
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target); // reveal once, don't re-trigger on scroll-back
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
```

```css
/* global.css — gate the existing animation behind the observer's class */
[data-reveal] { opacity: 0; }
[data-reveal].is-visible { animation: fadeIn var(--transition-entrance) cubic-bezier(0.16, 1, 0.3, 1) both; }
[data-reveal].is-visible.slide-up { animation-name: slideUp; }
```

Elements below the fold get `data-reveal` instead of (or alongside) the bare `.fade-in` class; elements already in the initial viewport keep the current paint-time behavior unchanged. Don't retrofit the hero — it isn't broken.

## Restraint Rules (taste-skill's `MOTION_INTENSITY: 4` dial)

This project's motion dial is deliberately low — trust-first trades brand, not a portfolio site:

- **Duration ≤ 300ms**, translateY ≤ 16px — matches the existing `slideUp` keyframe (`global.css:309–312`) exactly; don't increase it for scroll-reveals just because they're "new."
- **Opacity + small-translate only** — never scale or rotate on entrance. A card that scales up as you scroll to it reads as a slideshow transition, not a considered reveal.
- **Stagger cap: 500ms total per section** — the existing `.delay-1`–`.delay-5` (100–500ms) is the full range; don't add `.delay-6`+ for longer lists. A 6-item grid staggering past 500ms starts to feel laggy rather than choreographed — batch reveal instead (all items past the 5th fire at delay-5, not delay-6/7/8).
- **Reveal once, never re-trigger** — `unobserve` after first intersection (shown above). Re-triggering every time an element scrolls in/out reads as gimmicky, not minimal.

## `prefers-reduced-motion` — Already Handled, Don't Duplicate

`global.css:207–214` already forces `animation-duration: 0.01ms !important` globally under `prefers-reduced-motion: reduce`. Any new scroll-reveal CSS automatically inherits this — you do **not** need to add a second reduced-motion check in the JS observer. The only thing to verify: the JS still adds `.is-visible` (so content isn't stuck at `opacity: 0` forever for reduced-motion users) — the override collapses the animation duration, it doesn't skip the class toggle.

## What NOT to Build

- No parallax (background-position scroll-linked to `scrollY`) — doesn't fit a trades/services brand, adds jank risk on mobile Safari.
- No scroll-linked opacity/blur scrubbing (content fading in/out based on exact scroll offset) — that's `MOTION_INTENSITY: 8+` territory; this project is a 4.
- No re-animate-on-every-scroll — see "reveal once" above.
- No JS-driven smooth-scroll library for anchor links — `scroll-behavior: smooth` (CSS, already respects the reduced-motion override at `global.css:212`) is sufficient; don't add a scroll-hijacking dependency for in-page anchors.

## Before Adding Scroll Motion to a New Section

1. Is it above the fold at typical viewport heights? → keep paint-time `.fade-in`/`.slide-up`, no observer needed.
2. Is it below the fold? → `data-reveal` + the shared observer, not a bare `.fade-in` class (which will have already fired).
3. Does the section have 4+ staggered children? → cap at `.delay-5`, batch the rest.
4. Check `interaction-states` skill for hover/focus states on the same elements — motion-on-scroll and hover states are independent concerns, don't conflate the transition properties.
