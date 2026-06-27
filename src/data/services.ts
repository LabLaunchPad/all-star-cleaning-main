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
