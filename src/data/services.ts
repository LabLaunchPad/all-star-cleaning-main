import type { Service } from '@/types';
import windowCleaning from '@/content/services/window-cleaning.json';
import gutterCleaning from '@/content/services/gutter-cleaning.json';
import pressureWashing from '@/content/services/pressure-washing.json';
import sidingCleaning from '@/content/services/siding-cleaning.json';
import snowRemoval from '@/content/services/snow-removal.json';

// Services are now managed via Keystatic CMS at /keystatic
// Edit content in src/content/services/*.json
export const services: Service[] = [
  windowCleaning as unknown as Service,
  gutterCleaning as unknown as Service,
  pressureWashing as unknown as Service,
  sidingCleaning as unknown as Service,
  snowRemoval as unknown as Service,
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug || s.frSlug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

// Single source of truth for per-service color identity (vivid palette).
// Previously duplicated with 3 divergent, partly-broken copies across index.astro and
// services/index.astro (two referenced undefined tokens: bg-mint-fresh, bg-lavender-blend).
//
// Colors are literal values here (matching global.css's --color-vivid-* tokens exactly),
// not CSS custom-property references. ServiceCard injects them directly via inline style
// rather than `var(--color-vivid-X)` — the theme-token indirection was unreliable in
// production builds (2 of 5 tokens were silently dropped by the CSS build pipeline
// despite extensive isolation testing of value/hue/name/position; root cause not
// conclusively identified). Literal values sidestep that dependency entirely.
export interface ServiceAccent {
  badgeEn: string;
  badgeFr: string;
  color: string;
  colorDark: string;
  colorSurface: string;
  objectPosition: string;
}

export const serviceAccents: Record<string, ServiceAccent> = {
  'window-cleaning':  { badgeEn: 'Streak-Free',     badgeFr: 'Sans Traces',        color: 'oklch(62% 0.20 235)', colorDark: 'oklch(50% 0.19 235)', colorSurface: 'oklch(96% 0.025 235)', objectPosition: 'object-center' },
  'gutter-cleaning':  { badgeEn: 'Clog Prevention', badgeFr: 'Anti-Obstruction',   color: 'oklch(78% 0.18 70)',  colorDark: 'oklch(62% 0.17 70)',  colorSurface: 'oklch(96% 0.03 70)',   objectPosition: 'object-[center_30%]' },
  'pressure-washing': { badgeEn: 'Deep Clean',      badgeFr: 'Nettoyage Intensif', color: 'oklch(65% 0.20 150)', colorDark: 'oklch(52% 0.18 150)', colorSurface: 'oklch(96% 0.025 150)', objectPosition: 'object-center' },
  'siding-cleaning':  { badgeEn: 'Curb Appeal',     badgeFr: 'Façade Propre',      color: 'oklch(58% 0.22 300)', colorDark: 'oklch(46% 0.20 300)', colorSurface: 'oklch(96% 0.03 300)',  objectPosition: 'object-center' },
  'snow-removal':     { badgeEn: 'Winter Ready',    badgeFr: 'Prêt Hiver',         color: 'oklch(63% 0.21 25)',  colorDark: 'oklch(50% 0.19 25)',  colorSurface: 'oklch(96% 0.03 25)',  objectPosition: 'object-center' },
};

export function getServiceAccent(slug: string): ServiceAccent {
  return serviceAccents[slug] ?? serviceAccents['window-cleaning'];
}
