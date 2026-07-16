/**
 * Screenshot Capture for Visual Review
 * 
 * Captures screenshots of key pages for founder review
 * Run with: npx playwright test e2e/capture-screenshots.spec.ts
 */

import { test, expect } from '@playwright/test';

// Configuration for high-quality screenshots
const screenshotConfig = {
  type: 'png' as const,
  quality: 100,
  animations: 'disabled' as const,
};

test.describe('Visual Review Screenshots', () => {
  test.use({ 
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  test.beforeEach(async ({ page }) => {
    // Wait for server to be ready
    await page.waitForTimeout(2000);
  });

  // ============================================================
  // HOMEPAGE SCREENSHOTS
  // ============================================================
  
  test('Homepage - Full Page (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000); // Wait for animations
    
    await expect(page).toHaveScreenshot('screenshots/homepage-en-full.png', {
      ...screenshotConfig,
      fullPage: true,
      mask: [page.locator('.animate-bounce'), page.locator('.fade-in')],
    });
  });

  test('Homepage - Hero Section (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const hero = page.locator('section').filter({ hasText: /Ottawa's Premier/ });
    await expect(hero).toHaveScreenshot('screenshots/homepage-en-hero.png', {
      ...screenshotConfig,
      mask: [page.locator('.animate-bounce')],
    });
  });

  test('Homepage - Navigation (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    
    const nav = page.locator('header');
    await expect(nav).toHaveScreenshot('screenshots/homepage-en-nav.png', {
      ...screenshotConfig,
    });
  });

  test('Homepage - Services Grid (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const services = page.locator('section').filter({ hasText: /Our Services/ });
    await expect(services).toHaveScreenshot('screenshots/homepage-en-services.png', {
      ...screenshotConfig,
    });
  });

  test('Homepage - Trust Badges (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const badges = page.locator('.fade-in.delay-5');
    await expect(badges).toHaveScreenshot('screenshots/homepage-en-badges.png', {
      ...screenshotConfig,
    });
  });

  test('Homepage - Footer (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/');
    await page.waitForLoadState('networkidle');
    
    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('screenshots/homepage-en-footer.png', {
      ...screenshotConfig,
    });
  });

  // French Homepage
  test('Homepage - Full Page (FR)', async ({ page }) => {
    await page.goto('http://localhost:3000/fr/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('screenshots/homepage-fr-full.png', {
      ...screenshotConfig,
      fullPage: true,
      mask: [page.locator('.animate-bounce'), page.locator('.fade-in')],
    });
  });

  // ============================================================
  // SERVICES PAGE SCREENSHOTS
  // ============================================================
  
  test('Services - Full Page (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/services/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('screenshots/services-en-full.png', {
      ...screenshotConfig,
      fullPage: true,
      mask: [page.locator('.fade-in'), page.locator('.slide-up')],
    });
  });

  test('Services - Hero Section (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/services/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const hero = page.locator('section').filter({ hasText: /Professional Exterior/ });
    await expect(hero).toHaveScreenshot('screenshots/services-en-hero.png', {
      ...screenshotConfig,
    });
  });

  test('Services - Service Cards Grid (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/services/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const grid = page.locator('.grid.gap-6');
    await expect(grid).toHaveScreenshot('screenshots/services-en-grid.png', {
      ...screenshotConfig,
    });
  });

  test('Services - Individual Card (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/services/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const firstCard = page.locator('a[href*="/services/"]').first();
    await expect(firstCard).toHaveScreenshot('screenshots/services-en-card.png', {
      ...screenshotConfig,
    });
  });

  // ============================================================
  // ABOUT PAGE SCREENSHOTS
  // ============================================================
  
  test('About - Full Page (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/about/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('screenshots/about-en-full.png', {
      ...screenshotConfig,
      fullPage: true,
      mask: [page.locator('.fade-in'), page.locator('.slide-up')],
    });
  });

  test('About - Hero Section (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/about/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const hero = page.locator('section').filter({ hasText: /About All Star/ });
    await expect(hero).toHaveScreenshot('screenshots/about-en-hero.png', {
      ...screenshotConfig,
    });
  });

  test('About - Content Section (EN)', async ({ page }) => {
    await page.goto('http://localhost:3000/en/about/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const content = page.locator('.section-asymmetric');
    await expect(content).toHaveScreenshot('screenshots/about-en-content.png', {
      ...screenshotConfig,
    });
  });

  // ============================================================
  // RESPONSIVE SCREENSHOTS
  // ============================================================
  
  test.describe('Responsive Screenshots', () => {
    const viewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1440, height: 900 },
    ];

    viewports.forEach((viewport) => {
      test(`Homepage - ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto('http://localhost:3000/en/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        
        await expect(page).toHaveScreenshot(`screenshots/homepage-${viewport.width}px.png`, {
          ...screenshotConfig,
          fullPage: true,
          mask: [page.locator('.animate-bounce'), page.locator('.fade-in')],
        });
      });
    });
  });
});
