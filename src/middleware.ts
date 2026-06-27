import { defineMiddleware } from 'astro:middleware';
import { middleware } from 'astro:i18n';

// Astro's built-in i18n middleware with prefixDefaultLocale behavior
const astroI18nMiddleware = middleware({
  redirectToDefaultLocale: true,
  prefixDefaultLocale: true,
  fallbackType: 'redirect',
});

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Let Keystatic admin UI and its API routes pass through freely.
  // These must NOT be intercepted by the i18n router.
  if (pathname.startsWith('/keystatic') || pathname.startsWith('/api/keystatic')) {
    const response = await next();
    return response;
  }

  // For everything else, run Astro's standard i18n routing
  const response = await astroI18nMiddleware(context, next);
  if (response) return response;
  
  return next();
});
