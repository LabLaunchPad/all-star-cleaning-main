import { test, expect } from '@playwright/test';

test.describe('All-Star Cleaning Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/All Star Cleaning Ottawa/);
  });

  test('has logo', async ({ page }) => {
    const logo = page.getByRole('img', { name: 'All Star Cleaning' });
    await expect(logo).toBeVisible();
  });

  test('has navigation links', async ({ page }) => {
    const navLinks = page.getByRole('navigation').getByRole('link');
    await expect(navLinks).toHaveCount(5); // Home, Services, About, Reviews, Contact
  });

  test('has hero section', async ({ page }) => {
    const hero = page.getByRole('heading', { name: /Ottawa's Premier Exterior Cleaning/ });
    await expect(hero).toBeVisible();
  });

  test('has CTA button', async ({ page }) => {
    const cta = page.getByRole('link', { name: /Get a Quote/ });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', '/en/contact');
  });

  test('has Google Reviews badge', async ({ page }) => {
    const badge = page.getByRole('link', { name: /Google Reviews/ });
    await expect(badge).toBeVisible();
  });

  test('has services section', async ({ page }) => {
    const services = page.getByRole('heading', { name: /Our Services/ });
    await expect(services).toBeVisible();
  });

  test('has footer', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
  });

  test('has language switcher', async ({ page }) => {
    const langSwitcher = page.getByRole('link', { name: 'FR' });
    await expect(langSwitcher).toBeVisible();
  });

  test('has skip to main content link', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: /Skip to main content/ });
    await expect(skipLink).toBeVisible();
  });
});

test.describe('French Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/fr/');
  });

  test('has French title', async ({ page }) => {
    await expect(page).toHaveTitle(/Nettoyage de Vitres/);
  });

  test('has French hero', async ({ page }) => {
    const hero = page.getByRole('heading', { name: /Nettoyage Extérieur/ });
    await expect(hero).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
  });

  test('has semantic HTML', async ({ page }) => {
    const main = page.getByRole('main');
    await expect(main).toBeVisible();
  });

  test('has aria labels', async ({ page }) => {
    const images = page.getByRole('img');
    const firstImage = images.first();
    await expect(firstImage).toHaveAttribute('alt');
  });

  test('has focus styles', async ({ page }) => {
    const cta = page.getByRole('link', { name: /Get a Quote/ });
    await cta.focus();
    await expect(cta).toHaveCSS('outline', /2px/);
  });
});

test.describe('Performance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
  });

  test('lazy loads non-critical images', async ({ page }) => {
    const images = page.getByRole('img');
    const nonCriticalImages = images.filter({ hasNot: page.getByAltText('All Star Cleaning') });
    for (const img of await nonCriticalImages.all()) {
      await expect(img).toHaveAttribute('loading', 'lazy');
    }
  });
});
