/**
 * Vitest Setup File
 * 
 * This file runs before each test file to:
 * 1. Mock browser APIs (localStorage, matchMedia, etc.)
 * 2. Configure @testing-library/react
 * 3. Set up global test utilities
 */

import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, vi } from 'vitest';

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// ============================================================
// BROWSER API MOCKS
// ============================================================

// Mock window.matchMedia for dark mode and responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage for theme persistence tests
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    length: 0,
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock sessionStorage
const sessionStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
});

// Mock IntersectionObserver for scroll/visibility tests
class MockIntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '';
  threshold: number[] = [];

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.root = options?.root as Element | null || null;
    this.rootMargin = options?.rootMargin || '';
    this.threshold = Array.isArray(options?.threshold) ? options.threshold : [options?.threshold ?? 0];
    // Simulate immediate intersection for testing
    setTimeout(() => {
      const mockObserver: IntersectionObserver = this as unknown as IntersectionObserver;
      callback(
        [
          {
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0, toJSON: () => ({}) },
            intersectionRect: { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0, toJSON: () => ({}) },
            rootBounds: null,
            target: document.body,
            time: 0,
          },
        ],
        mockObserver
      );
    }, 0);
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  value: MockIntersectionObserver,
});

Object.defineProperty(window, 'ResizeObserver', {
  value: class MockResizeObserver {
    constructor(_callback: ResizeObserverCallback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  },
});

// Mock scrollTo for smooth scroll tests
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
});

// Mock getComputedStyle for animation tests
Object.defineProperty(window, 'getComputedStyle', {
  value: vi.fn(() => ({
    getPropertyValue: vi.fn((prop: string) => {
      if (prop === 'transition') return 'all 0.3s ease';
      if (prop === 'animation') return 'none';
      return '';
    }),
  })),
});

// ============================================================
// ASTRO/REACT SPECIFIC MOCKS
// ============================================================

// Mock Astro.url for components that use it
vi.stubGlobal('Astro', {
  url: {
    pathname: '/en/',
    href: 'http://localhost:3000/en/',
    origin: 'http://localhost:3000',
    host: 'localhost:3000',
    hostname: 'localhost',
    port: '3000',
    protocol: 'http:',
    search: '',
    hash: '',
  },
  props: {},
  params: { locale: 'en' },
  request: {
    url: new URL('http://localhost:3000/en/'),
    headers: new Headers(),
    method: 'GET',
  },
});

// Mock Astro.components for dynamic imports
vi.stubGlobal('Astro', {
  ...Astro,
  components: {
    import: vi.fn().mockResolvedValue({ default: vi.fn() }),
  },
});

// ============================================================
// GLOBAL TEST UTILITIES
// ============================================================

// Wait for next tick (useful for async components)
export const waitForNextTick = () => new Promise((resolve) => setTimeout(resolve, 0));

// Wait for a specific amount of time
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock console methods to suppress noise in tests
beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

// Restore console methods after all tests
// (Handled automatically by vi.restoreAllMocks())

export { localStorageMock, sessionStorageMock };
