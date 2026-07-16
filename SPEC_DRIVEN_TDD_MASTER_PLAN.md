# 🎯 Spec-Driven TDD Master Plan
# All-Star Cleaning - Enterprise Grade Development

> **Complete Test-Driven Development Roadmap with MVP Phases**
> *Systematic, Spec-Driven, Zero-Regression Approach*

---

## 📋 Executive Summary

This document provides a **comprehensive Spec-Driven TDD (Test-Driven Development) Master Plan** with **3 MVP phases** for systematic execution. The plan ensures:

✅ **100% Spec Coverage** - Every feature has a specification
✅ **100% Test Coverage** - Every spec has automated tests
✅ **Zero Regressions** - Automated quality gates prevent breaks
✅ **AI-Agent Friendly** - Clear specs for AI to follow
✅ **Founder-Friendly** - Non-technical can understand and approve

---

## 🎯 TDD Methodology

### The TDD Cycle (Red-Green-Refactor)

```
┌─────────────────────────────────────────────────────────────────┐
│                    SPEC-DRIVEN TDD CYCLE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. SPECIFICATION (Red)                                          │
│     ┌─────────────────┐                                         │
│     │  ✍️ Write Spec  │  ← Gherkin/BDD format                    │
│     │  (Given/When/Then)│                                         │
│     └────────┬────────┘                                         │
│              │                                                    │
│              ▼                                                    │
│  2. IMPLEMENTATION (Red → Green)                                  │
│     ┌─────────────────┐                                         │
│     │  🔴 Write Test  │  ← Fails (Red)                           │
│     │  (Test First)   │                                         │
│     └────────┬────────┘                                         │
│              │                                                    │
│              ▼                                                    │
│     ┌─────────────────┐                                         │
│     │  🟢 Write Code  │  ← Passes (Green)                       │
│     │  (Minimal)      │                                         │
│     └────────┬────────┘                                         │
│              │                                                    │
│              ▼                                                    │
│  3. REFACTOR (Green)                                             │
│     ┌─────────────────┐                                         │
│     │  🔄 Improve     │  ← Tests still pass                     │
│     │  (Optimize)     │                                         │
│     └─────────────────┘                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Quality Gates (Must Pass All)

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALITY GATES PIPELINE                         │
├─────────────────────────────────────────────────────────────────┤
│  Stage 1: Pre-Commit (Local)                                     │
│  ├── ✅ TypeScript Check (astro check)                            │
│  ├── ✅ Linting (ESLint)                                          │
│  ├── ✅ Formatting (Prettier)                                     │
│  └── ✅ Unit Tests (Vitest)                                      │
├─────────────────────────────────────────────────────────────────┤
│  Stage 2: CI/CD (GitHub Actions)                                 │
│  ├── ✅ Type Checking                                             │
│  ├── ✅ Linting                                                   │
│  ├── ✅ Unit Tests (with coverage)                                │
│  ├── ✅ E2E Tests (Playwright)                                   │
│  ├── ✅ Visual Regression Tests                                  │
│  └── ✅ Accessibility Tests (WCAG 2.1 AA)                        │
├─────────────────────────────────────────────────────────────────┤
│  Stage 3: Production (Deploy)                                     │
│  ├── ✅ Bundle Analysis                                           │
│  ├── ✅ Performance Budget                                        │
│  └── ✅ Security Scan                                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 MVP Phases Overview

### MVP 1: Foundation (Week 1-2)
**Goal**: Establish Spec-Driven TDD infrastructure

| Priority | Task | Status | Owner |
|----------|------|--------|-------|
| P0 | Set up complete test infrastructure | ✅ Done | AI |
| P0 | Create spec templates | ⏳ | AI |
| P0 | Migrate legacy components to Atomic Design | ⏳ | AI |
| P1 | Add missing unit tests | ⏳ | AI |
| P1 | Set up quality gates | ⏳ | AI |

**Success Metrics**:
- 100% of new components have specs
- 90% test coverage
- All quality gates passing

---

### MVP 2: Component Library (Week 3-4)
**Goal**: Complete design system with full TDD coverage

| Priority | Task | Status | Owner |
|----------|------|--------|-------|
| P0 | Complete all design system components | ⏳ | AI |
| P0 | Add Storybook for all components | ⏳ | AI |
| P1 | Add visual regression tests | ⏳ | AI |
| P1 | Add accessibility tests | ⏳ | AI |
| P2 | Optimize bundle size | ⏳ | AI |

**Success Metrics**:
- 100% component spec coverage
- 95% test coverage
- Storybook deployed

---

### MVP 3: Application Features (Week 5-6)
**Goal**: Full application with Spec-Driven TDD

| Priority | Task | Status | Owner |
|----------|------|--------|-------|
| P0 | All pages have specs | ⏳ | AI |
| P0 | All pages have tests | ⏳ | AI |
| P1 | Performance optimization | ⏳ | AI |
| P1 | SEO validation | ⏳ | AI |
| P2 | Error tracking | ⏳ | AI |

**Success Metrics**:
- 100% page spec coverage
- 98% test coverage
- Lighthouse score > 90

---

## 📁 Directory Structure for Specs

```
all-star-cleaning-main/
├── 📁 specs/                          # All specifications
│   ├── 📁 features/                   # Feature specifications
│   │   ├── homepage/                 # Homepage features
│   │   │   ├── hero.feature          # Hero section spec
│   │   │   ├── services-grid.feature # Services grid spec
│   │   │   └── navigation.feature    # Navigation spec
│   │   ├── services/                 # Services page features
│   │   ├── about/                    # About page features
│   │   └── shared/                   # Shared features
│   │       ├── dark-mode.feature     # Dark mode spec
│   │       ├── language-toggle.feature # Language spec
│   │       └── accessibility.feature # a11y spec
│   │
│   ├── 📁 components/                # Component specifications
│   │   ├── atoms/                    # Atomic specs
│   │   │   ├── button.spec           # Button component spec
│   │   │   ├── badge.spec            # Badge component spec
│   │   │   └── ...
│   │   ├── molecules/                # Molecular specs
│   │   └── organisms/               # Organism specs
│   │
│   ├── 📁 api/                       # API specifications
│   │   └── endpoints.spec            # API endpoint specs
│   │
│   └── 📁 e2e/                       # E2E specifications
│       ├── homepage.spec             # Homepage E2E spec
│       ├── services.spec             # Services E2E spec
│       └── about.spec                # About E2E spec
│
├── 📁 tests/                         # All tests
│   ├── 📁 unit/                      # Unit tests (Vitest)
│   ├── 📁 e2e/                       # E2E tests (Playwright)
│   ├── 📁 visual/                    # Visual regression tests
│   └── 📁 a11y/                      # Accessibility tests
│
└── 📁 .github/workflows/            # CI/CD workflows
    └── spec-driven-tdd.yml           # TDD pipeline
```

---

## 🎯 MVP 1: Foundation - Detailed Plan

### Phase 1.1: Spec Infrastructure (Day 1-2)

#### Task 1.1.1: Create Spec Templates
**Spec**: `specs/templates/`

```gherkin
# specs/templates/component.spec
# Template for all component specifications

Feature: [Component Name]
  As a [user type]
  I want to [user goal]
  So that [benefit]

  Background:
    Given the application is running

  Scenario: Default rendering
    Given I am on a page with [Component Name]
    When the component is rendered
    Then I should see the component with default styles

  Scenario: Variant rendering
    Given I am on a page with [Component Name]
    When the component is rendered with variant "[variant]"
    Then I should see the component with "[variant]" styles

  Scenario: Interaction
    Given I am on a page with [Component Name]
    When I [interaction]
    Then [expected result]

  Scenario: Accessibility
    Given I am on a page with [Component Name]
    When the component is rendered
    Then it should meet WCAG 2.1 AA standards
    And it should be keyboard navigable
    And it should have proper ARIA labels
```

**Files to Create**:
- `specs/templates/component.spec`
- `specs/templates/page.spec`
- `specs/templates/api.spec`
- `specs/templates/e2e.spec`

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 2 hours

---

#### Task 1.1.2: Create Spec Directory Structure
**Spec**: `specs/` directory

```bash
mkdir -p specs/{features/{homepage,services,about,shared},components/{atoms,molecules,organisms},api,e2e}
```

**Files to Create**:
- All directory structures
- README.md in each directory

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 1 hour

---

### Phase 1.2: Migrate Legacy Components (Day 3-5)

#### Task 1.2.1: Move Components to Atomic Design
**Spec**: Move 11 legacy components

| Component | Current Location | New Location | Type |
|-----------|-----------------|--------------|------|
| Header | `src/components/Header.astro` | `src/components/ui/organisms/header.tsx` | Organism |
| Footer | `src/components/Footer.astro` | `src/components/ui/organisms/footer.tsx` | Organism |
| TopBar | `src/components/TopBar.astro` | `src/components/ui/organisms/top-bar.tsx` | Organism |
| FloatingGoogleBadge | `src/components/FloatingGoogleBadge.astro` | `src/components/ui/molecules/floating-google-badge.tsx` | Molecule |
| GoogleReviewBadge | `src/components/GoogleReviewBadge.astro` | `src/components/ui/molecules/google-review-badge.tsx` | Molecule |
| SidebarCTA | `src/components/SidebarCTA.astro` | `src/components/ui/molecules/sidebar-cta.tsx` | Molecule |
| ServiceBadge | `src/components/ServiceBadge.astro` | `src/components/ui/atoms/service-badge.tsx` | Atom |
| SocialLinks | `src/components/SocialLinks.astro` | `src/components/ui/molecules/social-links.tsx` | Molecule |
| BaseHead | `src/components/BaseHead.astro` | `src/layouts/base-head.astro` | Layout |
| JsonLd | `src/components/JsonLd.astro` | `src/seo/json-ld.astro` | SEO |

**Spec Files to Create**:
- `specs/components/organisms/header.spec`
- `specs/components/organisms/footer.spec`
- `specs/components/organisms/top-bar.spec`
- `specs/components/molecules/floating-google-badge.spec`
- `specs/components/molecules/google-review-badge.spec`
- `specs/components/molecules/sidebar-cta.spec`
- `specs/components/atoms/service-badge.spec`
- `specs/components/molecules/social-links.spec`

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 4 hours

---

#### Task 1.2.2: Update All Imports
**Spec**: Search and replace all import paths

```bash
# Find all imports
grep -r "from '@/components/" src/ --include="*.astro" --include="*.tsx" --include="*.ts"

# Replace with new paths
# Example: from '@/components/Header' -> from '@/components/ui/organisms/header'
```

**Files to Update**:
- All files importing legacy components
- `src/layouts/BaseLayout.astro`
- All page files

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 2 hours

---

### Phase 1.3: Complete Test Infrastructure (Day 6-7)

#### Task 1.3.1: Add Missing Unit Tests
**Spec**: 100% unit test coverage for design system

**Components Needing Tests**:
- [ ] hero.tsx
- [ ] service-card.tsx
- [ ] review-card.tsx
- [ ] form-field.tsx
- [ ] toast.tsx
- [ ] dark-mode-provider.tsx
- [ ] skeleton.tsx

**Test Files to Create**:
- `src/components/ui/organisms/hero.test.tsx`
- `src/components/ui/organisms/service-card.test.tsx`
- `src/components/ui/organisms/review-card.test.tsx`
- `src/components/ui/molecules/form-field.test.tsx`
- `src/components/ui/molecules/toast.test.tsx`
- `src/components/ui/atoms/dark-mode-provider.test.tsx`
- `src/components/ui/atoms/skeleton.test.tsx`

**Status**: ⏳ Pending
**Priority**: P1
**Effort**: 4 hours

---

#### Task 1.3.2: Set Up Quality Gates
**Spec**: Automated quality gates in CI/CD

**Quality Gates**:
1. **TypeScript**: Must pass `astro check`
2. **Linting**: Must pass ESLint
3. **Formatting**: Must pass Prettier
4. **Unit Tests**: Must pass with 80%+ coverage
5. **E2E Tests**: Must pass all critical paths
6. **Visual Tests**: Must pass (or update baselines)
7. **Accessibility**: Must pass WCAG 2.1 AA

**File to Create**:
- `.github/workflows/spec-driven-tdd.yml`

**Status**: ⏳ Pending
**Priority**: P1
**Effort**: 2 hours

---

## 🎯 MVP 2: Component Library - Detailed Plan

### Phase 2.1: Complete Design System (Day 8-10)

#### Task 2.1.1: Add Missing Components
**Spec**: Complete the design system

**Components to Add**:
- [ ] Input (text, email, tel, etc.)
- [ ] Textarea
- [ ] Select/Dropdown
- [ ] Checkbox
- [ ] Radio Group
- [ ] Switch
- [ ] Modal/Dialog
- [ ] Accordion
- [ ] Tabs
- [ ] Alert
- [ ] Progress Bar
- [ ] Avatar
- [ ] Dropdown Menu

**Spec Files to Create**:
- `specs/components/atoms/input.spec`
- `specs/components/atoms/textarea.spec`
- `specs/components/atoms/select.spec`
- `specs/components/atoms/checkbox.spec`
- `specs/components/atoms/radio-group.spec`
- `specs/components/atoms/switch.spec`
- `specs/components/molecules/modal.spec`
- `specs/components/molecules/accordion.spec`
- `specs/components/molecules/tabs.spec`
- `specs/components/molecules/alert.spec`

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 8 hours

---

#### Task 2.1.2: Add Storybook for All Components
**Spec**: Interactive documentation

**Components Needing Stories**:
- [ ] hero.tsx
- [ ] service-card.tsx
- [ ] review-card.tsx
- [ ] form-field.tsx
- [ ] toast.tsx
- [ ] dark-mode-provider.tsx
- [ ] skeleton.tsx
- [ ] All new components from 2.1.1

**Story Files to Create**:
- `src/components/ui/organisms/hero.stories.tsx`
- `src/components/ui/organisms/service-card.stories.tsx`
- `src/components/ui/organisms/review-card.stories.tsx`
- `src/components/ui/molecules/form-field.stories.tsx`
- `src/components/ui/molecules/toast.stories.tsx`
- `src/components/ui/atoms/dark-mode-provider.stories.tsx`
- `src/components/ui/atoms/skeleton.stories.tsx`

**Status**: ⏳ Pending
**Priority**: P1
**Effort**: 4 hours

---

### Phase 2.2: Visual & Accessibility Testing (Day 11-12)

#### Task 2.2.1: Add Visual Regression Tests
**Spec**: Prevent UI breaks

**Pages to Test**:
- [ ] Homepage (EN & FR)
- [ ] Services (EN & FR)
- [ ] About (EN & FR)
- [ ] Contact (EN & FR)
- [ ] Reviews (EN & FR)
- [ ] 404
- [ ] 500

**Test Files to Create**:
- `e2e/visual/homepage.visual.spec.ts` (already exists)
- `e2e/visual/services.visual.spec.ts`
- `e2e/visual/about.visual.spec.ts`
- `e2e/visual/contact.visual.spec.ts`
- `e2e/visual/reviews.visual.spec.ts`
- `e2e/visual/error-pages.visual.spec.ts`

**Status**: ⚠️ Partial (homepage exists)
**Priority**: P1
**Effort**: 4 hours

---

#### Task 2.2.2: Add Accessibility Tests
**Spec**: WCAG 2.1 AA compliance

**Tests to Add**:
- [ ] All pages pass axe-core tests
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast >= 4.5:1
- [ ] Focus management
- [ ] ARIA labels present

**Test Files to Update**:
- `e2e/homepage.a11y.spec.ts` (already exists)
- `e2e/services.a11y.spec.ts`
- `e2e/about.a11y.spec.ts`
- `e2e/contact.a11y.spec.ts`
- `e2e/reviews.a11y.spec.ts`

**Status**: ⚠️ Partial (homepage exists)
**Priority**: P1
**Effort**: 4 hours

---

### Phase 2.3: Performance Optimization (Day 13-14)

#### Task 2.3.1: Add Bundle Analysis
**Spec**: Monitor bundle size

```bash
npm install --save-dev @rollup/plugin-visualizer
npm run analyze
```

**File to Update**:
- `package.json` (add analyze script)
- `astro.config.mjs` (add visualizer plugin)

**Status**: ⏳ Pending
**Priority**: P2
**Effort**: 2 hours

---

#### Task 2.3.2: Optimize Images
**Spec**: Faster loading

```bash
npm install --save-dev @astrojs/image
```

**Files to Update**:
- `astro.config.mjs`
- All image components

**Status**: ⏳ Pending
**Priority**: P2
**Effort**: 4 hours

---

## 🎯 MVP 3: Application Features - Detailed Plan

### Phase 3.1: Page Specifications (Day 15-17)

#### Task 3.1.1: Create Page Specs
**Spec**: Gherkin specifications for all pages

**Pages to Spec**:
- [ ] Homepage
- [ ] Services
- [ ] About
- [ ] Contact
- [ ] Reviews
- [ ] 404
- [ ] 500

**Spec Files to Create**:
- `specs/features/homepage/homepage.spec`
- `specs/features/services/services.spec`
- `specs/features/about/about.spec`
- `specs/features/contact/contact.spec`
- `specs/features/reviews/reviews.spec`
- `specs/features/error-pages/error-pages.spec`

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 4 hours

---

#### Task 3.1.2: Add Page Tests
**Spec**: E2E tests for all page features

**Test Files to Create**:
- `e2e/features/homepage.spec.ts`
- `e2e/features/services.spec.ts`
- `e2e/features/about.spec.ts`
- `e2e/features/contact.spec.ts`
- `e2e/features/reviews.spec.ts`

**Status**: ⏳ Pending
**Priority**: P0
**Effort**: 4 hours

---

### Phase 3.2: Performance & SEO (Day 18-19)

#### Task 3.2.1: Performance Optimization
**Spec**: Core Web Vitals > 90

**Optimizations**:
- [ ] Lazy loading for images
- [ ] Code splitting
- [ ] Critical CSS
- [ ] Font optimization
- [ ] Preconnect/preload

**Status**: ⏳ Pending
**Priority**: P1
**Effort**: 4 hours

---

#### Task 3.2.2: SEO Validation
**Spec**: Perfect Lighthouse SEO score

**Validations**:
- [ ] Meta tags present
- [ ] Structured data valid
- [ ] Sitemap generated
- [ ] Robots.txt present
- [ ] Canonical URLs
- [ ] Open Graph tags

**Status**: ⏳ Pending
**Priority**: P1
**Effort**: 2 hours

---

### Phase 3.3: Error Tracking & Monitoring (Day 20)

#### Task 3.3.1: Add Error Boundaries
**Spec**: Catch all React errors

**File to Create**:
- `src/components/ErrorBoundary.tsx`

**Status**: ⏳ Pending
**Priority**: P2
**Effort**: 2 hours

---

#### Task 3.3.2: Add Error Tracking
**Spec**: Monitor production errors

**Options**:
- Sentry
- LogRocket
- Bugsnag

**Status**: ⏳ Pending
**Priority**: P2
**Effort**: 2 hours

---

## 📊 Test Coverage Matrix

### Current Coverage

| Category | Tests | Coverage | Status |
|----------|-------|----------|--------|
| Unit Tests | 50+ | ~80% | ⚠️ |
| E2E Tests | 20+ | ~60% | ⚠️ |
| Visual Tests | 15+ | ~40% | ⚠️ |
| Accessibility Tests | 10+ | ~30% | ⚠️ |

### Target Coverage (MVP 3)

| Category | Tests | Coverage | Status |
|----------|-------|----------|--------|
| Unit Tests | 100+ | 95%+ | 🎯 |
| E2E Tests | 50+ | 90%+ | 🎯 |
| Visual Tests | 30+ | 80%+ | 🎯 |
| Accessibility Tests | 20+ | 100% | 🎯 |

---

## 🎯 Success Criteria

### MVP 1: Foundation
- [ ] All legacy components migrated to Atomic Design
- [ ] Spec templates created
- [ ] Spec directory structure in place
- [ ] All existing tests passing
- [ ] Quality gates configured
- [ ] 80%+ unit test coverage

### MVP 2: Component Library
- [ ] All design system components complete
- [ ] Storybook deployed with all components
- [ ] Visual regression tests for all pages
- [ ] Accessibility tests passing
- [ ] 90%+ test coverage
- [ ] Bundle analysis set up

### MVP 3: Application Features
- [ ] All pages have specs
- [ ] All pages have tests
- [ ] Performance optimized
- [ ] SEO validated
- [ ] Error tracking implemented
- [ ] 95%+ test coverage

---

## 📅 Timeline

### Week 1-2: MVP 1 (Foundation)
- Day 1-2: Spec infrastructure
- Day 3-5: Migrate legacy components
- Day 6-7: Complete test infrastructure

### Week 3-4: MVP 2 (Component Library)
- Day 8-10: Complete design system
- Day 11-12: Visual & accessibility testing
- Day 13-14: Performance optimization

### Week 5-6: MVP 3 (Application Features)
- Day 15-17: Page specifications
- Day 18-19: Performance & SEO
- Day 20: Error tracking & monitoring

---

## 🔧 Tools & Technologies

### Testing Framework
- **Unit Tests**: Vitest + @testing-library/react
- **E2E Tests**: Playwright
- **Visual Tests**: Playwright screenshot comparisons
- **Accessibility Tests**: Playwright + axe-core
- **Performance Tests**: Lighthouse CI

### Spec Format
- **Gherkin**: Feature files with Given/When/Then
- **TypeScript**: Type definitions for all specs
- **Markdown**: Human-readable spec documentation

### CI/CD
- **GitHub Actions**: Automated workflows
- **Quality Gates**: Must pass all checks
- **Artifacts**: Test reports, screenshots, coverage

---

## 📚 Deliverables

### Documentation
- [ ] SPEC_DRIVEN_TDD_MASTER_PLAN.md (this file)
- [ ] specs/README.md
- [ ] specs/templates/README.md
- [ ] TESTING_GUIDE.md
- [ ] CONTRIBUTING.md (updated)

### Code
- [ ] All spec files
- [ ] All test files
- [ ] All component files
- [ ] CI/CD workflows

### Infrastructure
- [ ] Test infrastructure
- [ ] Quality gates
- [ ] Monitoring
- [ ] Documentation

---

## 🚀 Next Steps

### Immediate (Next 24 Hours)
1. [ ] Review and approve this master plan
2. [ ] Prioritize tasks
3. [ ] Assign resources
4. [ ] Set up project tracking

### Short Term (Next Week)
1. [ ] Complete MVP 1: Foundation
2. [ ] Create spec templates
3. [ ] Migrate legacy components
4. [ ] Set up quality gates

### Medium Term (Next Month)
1. [ ] Complete MVP 2: Component Library
2. [ ] Add all missing components
3. [ ] Complete Storybook
4. [ ] Add visual & accessibility tests

### Long Term (Next Quarter)
1. [ ] Complete MVP 3: Application Features
2. [ ] Add all page specs
3. [ ] Optimize performance
4. [ ] Implement monitoring

---

## 📞 Support

For questions or clarifications:
- **Non-Technical Founders**: Use plain English, I'll translate to specs
- **Technical Team**: Follow the spec templates
- **AI Agents**: Follow the TDD cycle and quality gates

---

*Document Created: 2024*
*Version: 1.0*
*Status: Planning Phase*
*Next Review: Weekly*
