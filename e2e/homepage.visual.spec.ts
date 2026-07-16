/**
 * Visual Regression Tests for All-Star Cleaning
 * 
 * These tests compare screenshots of key pages to detect unintended visual changes.
 * Run with: npm run test:visual
 * 
 * Baseline screenshots are stored in: e2e/snapshots/
 * To update baselines: npx playwright test --update-snapshots
 */

import { test, expect } from '@playwright/test';

// ============================================================
// HOMEPAGE VISUAL REGRESSION TESTS
// ============================================================

test.describe('Homepage Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
    // Wait for all animations and lazy-loaded content
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Extra wait for animations
  });

  test('Homepage Hero Section', async ({ page }) => {
    const hero = page.locator('section').filter({ hasText: /Ottawa's Premier/ });
    await expect(hero).toHaveScreenshot('homepage-hero.png', {
      mask: [page.locator('.animate-bounce')], // Mask animated elements
    });
  });

  test('Homepage Navigation', async ({ page }) => {
    const nav = page.locator('header');
    await expect(nav).toHaveScreenshot('homepage-nav.png');
  });

  test('Homepage Services Grid', async ({ page }) => {
    const services = page.locator('section').filter({ hasText: /Our Services/ });
    await expect(services).toHaveScreenshot('homepage-services.png');
  });

  test('Homepage Trust Badges', async ({ page }) => {
    const badges = page.locator('.fade-in.delay-5');
    await expect(badges).toHaveScreenshot('homepage-trust-badges.png');
  });

  test('Homepage Footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('homepage-footer.png');
  });

  test('Homepage Full Page', async ({ page }) => {
    await expect(page).toHaveScreenshot('homepage-full.png', {
      mask: [
        page.locator('.animate-bounce'), // Scroll indicator
        page.locator('.fade-in'), // Animated elements
        page.locator('.slide-up'), // Animated elements
      ],
    });
  });
});

// ============================================================
// SERVICES PAGE VISUAL REGRESSION TESTS
// ============================================================

test.describe('Services Page Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/services/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Services Hero Section', async ({ page }) => {
    const hero = page.locator('section').filter({ hasText: /Professional Exterior/ });
    await expect(hero).toHaveScreenshot('services-hero.png');
  });

  test('Services Grid', async ({ page }) => {
    const grid = page.locator('.grid.gap-6');
    await expect(grid).toHaveScreenshot('services-grid.png');
  });

  test('Services Full Page', async ({ page }) => {
    await expect(page).toHaveScreenshot('services-full.png', {
      mask: [page.locator('.fade-in'), page.locator('.slide-up')],
    });
  });
});

// ============================================================
// ABOUT PAGE VISUAL REGRESSION TESTS
// ============================================================

test.describe('About Page Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/about/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('About Hero Section', async ({ page }) => {
    const hero = page.locator('section').filter({ hasText: /About All Star/ });
    await expect(hero).toHaveScreenshot('about-hero.png');
  });

  test('About Content Section', async ({ page }) => {
    const content = page.locator('.section-asymmetric');
    await expect(content).toHaveScreenshot('about-content.png');
  });

  test('About Full Page', async ({ page }) => {
    await expect(page).toHaveScreenshot('about-full.png', {
      mask: [page.locator('.fade-in'), page.locator('.slide-up')],
    });
  });
});

// ============================================================
// CONTACT PAGE VISUAL REGRESSION TESTS
// ============================================================

test.describe('Contact Page Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/contact/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Contact Hero Section', async ({ page }) => {
    const hero = page.locator('section').filter({ hasText: /Contact Us/ });
    await expect(hero).toHaveScreenshot('contact-hero.png');
  });

  test('Contact Form', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toHaveScreenshot('contact-form.png');
  });

  test('Contact Full Page', async ({ page }) => {
    await expect(page).toHaveScreenshot('contact-full.png', {
      mask: [page.locator('.fade-in'), page.locator('.slide-up')],
    });
  });
});

// ============================================================
// COMPONENT VISUAL REGRESSION TESTS
// ============================================================

test.describe('Component Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');
  });

  test('Button Component', async ({ page }) => {
    const button = page.getByRole('link', { name: /Get a Quote/ });
    await expect(button).toHaveScreenshot('button-primary.png');
  });

  test('Navigation Links', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks.first()).toHaveScreenshot('nav-link.png');
  });

  test('Google Review Badge', async ({ page }) => {
    const badge = page.locator('.flex.items-center.gap-2').filter({ hasText: /Google/ });
    if (await badge.count() > 0) {
      await expect(badge).toHaveScreenshot('google-badge.png');
    }
  });

  test('Service Card', async ({ page }) => {
    await page.goto('/en/services/');
    await page.waitForLoadState('networkidle');
    const card = page.locator('a[href*="/services/"]').first();
    await expect(card).toHaveScreenshot('service-card.png');
  });
});

// ============================================================
// RESPONSIVE VISUAL REGRESSION TESTS
// ============================================================

test.describe('Responsive Visual Regression', () => {
  const viewports = [
    { name: 'Mobile (375px)', width: 375, height: 667 },
    { name: 'Tablet (768px)', width: 768, height: 1024 },
    { name: 'Desktop (1024px)', width: 1024, height: 768 },
    { name: 'Wide (1440px)', width: 1440, height: 900 },
  ];

  viewports.forEach((viewport) => {
    test(`Homepage at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/en/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);
      
      await expect(page).toHaveScreenshot(`homepage-${viewport.width}px.png`, {
        mask: [
          page.locator('.animate-bounce'),
          page.locator('.fade-in'),
          page.locator('.slide-up'),
        ],
      });
    });
  });
});
