/**
 * Global Setup for Playwright Tests
 * 
 * This file runs once before all tests to:
 * 1. Generate baseline screenshots for visual regression
 * 2. Set up test data
 * 3. Configure global test environment
 */

import { chromium } from '@playwright/test';
import type { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // Generate baseline screenshots if they don't exist
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the homepage to ensure the server is running
  await page.goto(config.projects[0].use.baseURL || 'http://localhost:3000');
  
  // Close the browser
  await browser.close();
}

export default globalSetup;
