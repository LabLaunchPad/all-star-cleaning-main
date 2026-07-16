import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for All-Star Cleaning
 * 
 * Projects:
 * - chromium: Desktop Chrome (default)
 * - firefox: Desktop Firefox
 * - webkit: Desktop Safari
 * - mobile-chrome: Pixel 5 (Mobile)
 * - mobile-safari: iPhone 12 (Mobile)
 * - visual-regression: Visual regression testing
 * - accessibility: Accessibility testing with axe-core
 */

export default defineConfig({
  testDir: './e2e',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results/playwright-results.json' }],
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/playwright-results.xml' }],
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Capture screenshot after each test failure. */
    screenshot: 'only-on-failure',
    
    /* Record video only on retry. */
    video: 'retain-on-failure',
    
    /* Viewport size */
    viewport: { width: 1280, height: 720 },
    
    /* Default browser context options */
    contextOptions: {
      /* Ignore HTTPS errors */
      ignoreHTTPSErrors: true,
      
      /* Geolocation permissions */
      geolocation: { longitude: -75.69, latitude: 45.42 }, // Ottawa coordinates
      
      /* Permissions */
      permissions: ['geolocation', 'notifications'],
    },
  },
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
    /* Test against mobile viewports. */
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
    
    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    
    /* Visual Regression Testing */
    {
      name: 'visual-regression',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        screenshot: 'only-on-failure',
        video: 'off',
      },
      testMatch: '**/*.visual.spec.ts',
    },
  ],
  
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes
  },
  
  /* Global setup and teardown */
  globalSetup: './e2e/global-setup.ts',
  globalTeardown: './e2e/global-teardown.ts',
});
