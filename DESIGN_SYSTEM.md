# All-Star Cleaning Design System

> **Enterprise-Grade UI Component Library for Astro + React + Tailwind CSS**

This document outlines the **design system** for All-Star Cleaning, including:
- **Design Tokens** (Colors, Typography, Spacing, etc.)
- **Component Library** (Atoms, Molecules, Organisms)
- **Usage Guidelines**
- **Accessibility Standards**
- **Testing & Validation**

---

## 📚 Table of Contents

1. [Design Tokens](#-design-tokens)
2. [Component Library](#-component-library)
3. [Usage Guidelines](#-usage-guidelines)
4. [Accessibility](#-accessibility)
5. [Testing](#-testing)
6. [Contributing](#-contributing)
7. [Changelog](#-changelog)

---

## 🎨 Design Tokens

The design system uses **CSS custom properties (variables)** defined in [`src/styles/tokens.css`](src/styles/tokens.css).
These tokens are organized by category and follow the **OKLCH color model** for better perceptual uniformity.

### Color Tokens

#### Brand Colors
| Token | Value (OKLCH) | Value (Hex) | Usage |
|-------|----------------|-------------|-------|
| `--color-midnight-indigo` | `oklch(63.2% 0.149 243.5)` | `#2e82f7` | Primary brand color |
| `--color-midnight-indigo-light` | `oklch(73.2% 0.13 243.5)` | `#61a1fb` | Light variant |
| `--color-midnight-indigo-dark` | `oklch(32% 0.13 243.5)` | `#1c3f7b` | Dark variant |
| `--color-midnight-indigo-surface` | `oklch(97.5% 0.015 243.5)` | `#f4f8fc` | Surface/background |

#### Neutral Colors
| Token | Value (OKLCH) | Value (Hex) | Usage |
|-------|----------------|-------------|-------|
| `--color-navy` | `oklch(17.5% 0.045 243.5)` | `#131824` | Primary text |
| `--color-navy-light` | `oklch(25.5% 0.050 243.5)` | `#222838` | Secondary text |
| `--color-navy-dark` | `oklch(12.0% 0.035 243.5)` | `#0a0d16` | Dark backgrounds |
| `--color-off-white` | `oklch(98.0% 0.005 243.5)` | `#f9fafc` | Page background |
| `--color-background` | `var(--color-off-white)` | - | Default background |
| `--color-foreground` | `var(--color-navy)` | - | Default text |

#### Accent Colors
| Token | Value (OKLCH) | Value (Hex) | Usage |
|-------|----------------|-------------|-------|
| `--color-gold` | `oklch(75% 0.15 85)` | `#c9a84c` | Ratings, emphasis |
| `--color-gold-light` | `oklch(80% 0.14 85)` | `#d4b96e` | Light gold |
| `--color-gold-dark` | `oklch(65% 0.16 85)` | `#a88a2e` | Dark gold |

#### Semantic Colors
| Token | Value (OKLCH) | Value (Hex) | Usage |
|-------|----------------|-------------|-------|
| `--color-green` | `oklch(63.0% 0.190 145)` | `#1a9a4a` | Success states |
| `--color-green-light` | `oklch(78.0% 0.180 150)` | `#3dba6a` | Light green |
| `--color-green-dark` | `oklch(52.0% 0.175 140)` | `#157a3a` | Dark green |
| `--color-green-surface` | `oklch(98% 0.015 145)` | `#f0fdf4` | Green background |
| `--color-sky` | `oklch(70% 0.16 235)` | `#0ea5e9` | Info states |
| `--color-sky-light` | `oklch(78% 0.14 235)` | `#38bdf8` | Light sky |
| `--color-sky-dark` | `oklch(60% 0.18 235)` | `#0284c7` | Dark sky |
| `--color-sky-surface` | `oklch(98% 0.015 235)` | `#f0f9ff` | Sky background |
| `--color-amber` | `oklch(78% 0.17 75)` | `#f59e0b` | Warning states |
| `--color-amber-light` | `oklch(84% 0.16 75)` | `#fbbf24` | Light amber |
| `--color-amber-dark` | `oklch(68% 0.18 75)` | `#d97706` | Dark amber |
| `--color-amber-surface` | `oklch(98.5% 0.015 75)` | `#fffbeb` | Amber background |
| `--color-destructive` | `oklch(55.0% 0.200 25)` | `#b91c1c` | Error states |

#### Text on Dark Background
| Token | Value (OKLCH) | Value (Hex) | Usage |
|-------|----------------|-------------|-------|
| `--color-text-on-dark` | `oklch(94.5% 0.025 243.5)` | `#e9ecf5` | Primary text on dark |
| `--color-text-on-dark-muted` | `oklch(88.0% 0.03 243.5)` | `#cbd2e5` | Muted text on dark |

### Typography Tokens

#### Font Families
```css
--font-heading: 'DM Serif Display', Georgia, serif;
--font-body: 'Outfit', system-ui, sans-serif;
```

#### Font Sizes (1.25 Ratio Scale)
| Token | Value | Usage |
|-------|-------|-------|
| `--text-xs` | `0.75rem` | Extra small text |
| `--text-sm` | `0.875rem` | Small text |
| `--text-base` | `1rem` | Base text |
| `--text-lg` | `1.125rem` | Large text |
| `--text-xl` | `1.25rem` | Extra large text |
| `--text-2xl` | `1.5rem` | 2XL text |
| `--text-3xl` | `1.875rem` | 3XL text |
| `--text-4xl` | `2.25rem` | 4XL text |
| `--text-5xl` | `3rem` | 5XL text |
| `--text-6xl` | `3.75rem` | 6XL text |

#### Fluid Typography
| Token | Value | Usage |
|-------|-------|-------|
| `--text-display` | `clamp(2.5rem, 5vw, 4.5rem)` | Display headings |
| `--text-headline` | `clamp(1.75rem, 4vw, 3rem)` | Section headings |
| `--text-subheading` | `clamp(1.125rem, 2.5vw, 1.5rem)` | Subheadings |
| `--text-lead` | `1.25rem` | Lead paragraphs |

### Spacing Tokens (8/16/24/32/48/80/120 Scale)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-section-sm` | `4rem` | Small section spacing |
| `--space-section-md` | `5rem` | Medium section spacing |
| `--space-section-lg` | `6rem` | Large section spacing |
| `--space-gap-tight` | `0.5rem` | Tight gap (8px) |
| `--space-gap-normal` | `1rem` | Normal gap (16px) |
| `--space-gap-relaxed` | `1.5rem` | Relaxed gap (24px) |
| `--space-gap-loose` | `2rem` | Loose gap (32px) |
| `--space-gap-section` | `3rem` | Section gap (48px) |
| `--space-gap-spread` | `5rem` | Spread gap (80px) |

### Layout Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--header-height` | `6rem` | Header height |
| `--width-content` | `65ch` | Optimal content width |
| `--width-max` | `80rem` | Maximum width |

### Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `0.25rem` | Small radius |
| `--radius-md` | `0.375rem` | Medium radius |
| `--radius-lg` | `0.5rem` | Large radius |
| `--radius-xl` | `0.75rem` | Extra large radius |
| `--radius-2xl` | `1rem` | 2XL radius |
| `--radius-full` | `9999px` | Full radius (pill) |

### Shadow Tokens (Branded Indigo)
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px 0 oklch(15% 0.05 243.5 / 0.07), 0 1px 2px -1px oklch(15% 0.05 243.5 / 0.04)` | Small shadow |
| `--shadow-md` | `0 4px 6px -1px oklch(15% 0.05 243.5 / 0.08), 0 2px 4px -2px oklch(15% 0.05 243.5 / 0.08)` | Medium shadow |
| `--shadow-lg` | `0 10px 15px -3px oklch(15% 0.05 243.5 / 0.08), 0 4px 6px -4px oklch(15% 0.05 243.5 / 0.08)` | Large shadow |
| `--shadow-xl` | `0 20px 25px -5px oklch(15% 0.05 243.5 / 0.08), 0 8px 10px -6px oklch(15% 0.05 243.5 / 0.08)` | Extra large shadow |
| `--shadow-hover` | `0 4px 24px -4px oklch(15% 0.05 243.5 / 0.12), 0 1px 3px oklch(15% 0.05 243.5 / 0.06)` | Hover shadow |
| `--shadow-blue-glow` | `0 8px 32px -8px oklch(63.2% 0.149 243.5 / 0.25)` | Blue glow effect |

### Z-Index Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `0` | Base layer |
| `--z-dropdown` | `10` | Dropdown menus |
| `--z-sticky` | `20` | Sticky elements |
| `--z-overlay` | `30` | Overlays |
| `--z-modal` | `40` | Modals |
| `--z-toast` | `50` | Toast notifications |

### Motion Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms cubic-bezier(0.16, 1, 0.3, 1)` | Fast transitions |
| `--transition-base` | `250ms cubic-bezier(0.16, 1, 0.3, 1)` | Base transitions |
| `--transition-slow` | `350ms cubic-bezier(0.16, 1, 0.3, 1)` | Slow transitions |
| `--transition-entrance` | `500ms cubic-bezier(0.16, 1, 0.3, 1)` | Entrance animations |

### Dark Mode Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--color-background-dark` | `oklch(12% 0.035 243.5)` | Dark mode background |
| `--color-foreground-dark` | `oklch(98.0% 0.003 243.5)` | Dark mode text |
| `--color-card-dark` | `oklch(15% 0.04 243.5)` | Dark mode card background |
| `--color-border-dark` | `oklch(20% 0.03 243.5)` | Dark mode border |

---

## 🧩 Component Library

The design system follows **Atomic Design** principles:
- **Atoms**: Smallest UI elements (Button, Badge, Input, etc.)
- **Molecules**: Combinations of atoms (Card, FormField, Toast, etc.)
- **Organisms**: Complex UI sections (Header, Hero, ServiceCard, etc.)
- **Templates**: Page layouts (BaseLayout, PageLayout, etc.)

### Directory Structure
```
src/components/ui/
├── atoms/          # Atomic components
│   ├── button.tsx
│   ├── badge.tsx
│   ├── skeleton.tsx
│   ├── theme-toggle.tsx
│   └── dark-mode-provider.tsx
├── molecules/      # Molecular components
│   ├── card.tsx
│   ├── form-field.tsx
│   ├── toast.tsx
│   └── ...
├── organisms/      # Organism components
│   ├── hero.tsx
│   ├── service-card.tsx
│   ├── review-card.tsx
│   └── ...
└── templates/      # Template components
    └── ...
```

### Atoms

#### Button
**File:** [`src/components/ui/atoms/button.tsx`](src/components/ui/atoms/button.tsx)

A reusable, accessible button component with multiple variants and sizes.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'destructive'` \| `'outline'` \| `'secondary'` \| `'ghost'` \| `'link'` \| `'subtle'` | `'default'` | Visual style |
| `size` | `'default'` \| `'sm'` \| `'lg'` \| `'xl'` \| `'icon'` | `'default'` | Size |
| `loading` | `boolean` | `false` | Loading state |
| `disabled` | `boolean` | `false` | Disabled state |
| `leftIcon` | `React.ReactNode` | - | Left icon |
| `rightIcon` | `React.ReactNode` | - | Right icon |
| `asChild` | `boolean` | `false` | Render as child component |
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { Button } from '@/components/ui/atoms/button';

// Default button
<Button>Click Me</Button>

// Loading button
<Button loading>Loading...</Button>

// Button with icon
<Button leftIcon={<Icon />}>Next</Button>

// Button as link
<Button asChild>
  <a href="/contact">Contact Us</a>
</Button>
```

**Stories:** [`src/components/ui/atoms/button.stories.tsx`](src/components/ui/atoms/button.stories.tsx)

---

#### Badge
**File:** [`src/components/ui/atoms/badge.tsx`](src/components/ui/atoms/badge.tsx)

A small, styled badge for labels, tags, and status indicators.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'primary'` \| `'secondary'` \| `'success'` \| `'info'` \| `'warning'` \| `'destructive'` \| `'gold'` | `'default'` | Visual style |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Size |
| `leftIcon` | `React.ReactNode` | - | Left icon |
| `rightIcon` | `React.ReactNode` | - | Right icon |
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { Badge } from '@/components/ui/atoms/badge';

// Default badge
<Badge>New</Badge>

// Success badge
<Badge variant="success">Verified</Badge>

// Badge with icon
<Badge variant="info" leftIcon={<Icon />}>Info</Badge>
```

**Stories:** [`src/components/ui/atoms/badge.stories.tsx`](src/components/ui/atoms/badge.stories.tsx)

---

#### Skeleton
**File:** [`src/components/ui/atoms/skeleton.tsx`](src/components/ui/atoms/skeleton.tsx)

A placeholder component for loading states.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text'` \| `'circular'` \| `'rectangular'` | `'text'` | Shape |
| `width` | `string \| number` | - | Width |
| `height` | `string \| number` | - | Height |
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { Skeleton } from '@/components/ui/atoms/skeleton';

// Text skeleton
<Skeleton variant="text" width="100%" />

// Circular skeleton (avatar)
<Skeleton variant="circular" width={40} height={40} />

// Rectangular skeleton (image)
<Skeleton variant="rectangular" width="100%" height={200} />
```

---

#### ThemeToggle
**File:** [`src/components/ui/atoms/theme-toggle.tsx`](src/components/ui/atoms/theme-toggle.tsx)

A button to toggle between light and dark mode.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { ThemeToggle } from '@/components/ui/atoms/theme-toggle';

<ThemeToggle />
```

---

### Molecules

#### Card
**File:** [`src/components/ui/molecules/card.tsx`](src/components/ui/molecules/card.tsx)

A reusable card container with multiple variants and padding options.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default'` \| `'featured'` \| `'subtle'` \| `'bordered'` | `'default'` | Visual style |
| `padding` | `'none'` \| `'sm'` \| `'md'` \| `'lg'` | `'md'` | Internal padding |
| `hoverable` | `boolean` | `false` | Hover effects |
| `clickable` | `boolean` | `false` | Clickable styles |
| `asChild` | `boolean` | `false` | Render as child component |
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { Card } from '@/components/ui/molecules/card';

// Default card
<Card>Content</Card>

// Featured card with hover
<Card variant="featured" hoverable clickable>
  <h3>Featured</h3>
  <p>Description</p>
</Card>

// Card as link
<Card asChild hoverable clickable>
  <a href="/services">View Services</a>
</Card>
```

**Stories:** [`src/components/ui/molecules/card.stories.tsx`](src/components/ui/molecules/card.stories.tsx)

---

#### FormField
**File:** [`src/components/ui/molecules/form-field.tsx`](src/components/ui/molecules/form-field.tsx)

A form field wrapper with label, error, and hint support.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label |
| `htmlFor` | `string` | - | HTML `for` attribute |
| `error` | `string` | - | Error message |
| `hint` | `string` | - | Hint text |
| `required` | `boolean` | `false` | Required field |
| `disabled` | `boolean` | `false` | Disabled field |
| `className` | `string` | - | Additional classes |

**Usage:**
```tsx
import { FormField } from '@/components/ui/molecules/form-field';

<FormField label="Name" htmlFor="name" required>
  <input type="text" id="name" name="name" />
</FormField>

<FormField label="Email" htmlFor="email" error="Invalid email">
  <input type="email" id="email" name="email" />
</FormField>
```

---

#### Toast
**File:** [`src/components/ui/molecules/toast.tsx`](src/components/ui/molecules/toast.tsx)

A non-blocking notification component.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | - | Toast message |
| `type` | `'success'` \| `'error'` \| `'info'` \| `'warning'` | `'info'` | Toast type |
| `onDismiss` | `() => void` | - | Dismiss callback |
| `duration` | `number` | `5000` | Auto-dismiss duration (ms) |
| `id` | `string` | - | Unique identifier |

**Usage:**
```tsx
import { Toast } from '@/components/ui/molecules/toast';

// Success toast
<Toast message="Success!" type="success" />

// Error toast
<Toast message="Error occurred" type="error" />

// Auto-dismiss after 3 seconds
<Toast message="Saved!" type="success" duration={3000} />
```

---

### Organisms

#### Hero
**File:** [`src/components/ui/organisms/hero.tsx`](src/components/ui/organisms/hero.tsx)

A hero section component with background image, title, subtitle, and CTAs.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Hero title |
| `subtitle` | `string` | - | Hero subtitle |
| `ctaText` | `string` | `'Get a Quote'` | Primary CTA text |
| `ctaHref` | `string` | `'/contact'` | Primary CTA href |
| `secondaryCtaText` | `string` | - | Secondary CTA text |
| `secondaryCtaHref` | `string` | - | Secondary CTA href |
| `badges` | `{ label: string; icon?: React.ReactNode; color?: string }[]` | - | Trust badges |
| `backgroundImage` | `string` | - | Background image URL |
| `backgroundOverlay` | `string` | `'bg-gradient-to-b from-black/80 via-black/45 to-black/85'` | Background overlay |
| `locale` | `'en'` \| `'fr'` | `'en'` | Locale for accessibility |

**Usage:**
```tsx
import { Hero } from '@/components/ui/organisms/hero';

<Hero
  title="Ottawa's Premier Exterior Cleaning"
  subtitle="Professional services for your home or business"
  ctaText="Get a Free Quote"
  ctaHref="/contact"
  secondaryCtaText="Call Now"
  secondaryCtaHref="tel:+16135550123"
  backgroundImage="/images/hero-bg.jpg"
  badges={[
    { label: '5.0 Rating', icon: <StarIcon /> },
    { label: 'Insured & Bonded', icon: <ShieldIcon /> },
  ]}
/>
```

---

#### ServiceCard
**File:** [`src/components/ui/organisms/service-card.tsx`](src/components/ui/organisms/service-card.tsx)

A card component for displaying services.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Service title |
| `description` | `string` | - | Service description |
| `badge` | `string` | - | Service badge text |
| `badgeColor` | `'default'` \| `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'gold'` | `'default'` | Badge color |
| `imageSrc` | `string` | - | Service image URL |
| `imageAlt` | `string` | - | Service image alt text |
| `features` | `string[]` | - | Service features |
| `ctaText` | `string` | `'Learn More'` | CTA text |
| `ctaHref` | `string` | - | CTA href |
| `locale` | `'en'` \| `'fr'` | `'en'` | Locale |

**Usage:**
```tsx
import { ServiceCard } from '@/components/ui/organisms/service-card';

<ServiceCard
  title="Window Cleaning"
  description="Professional window cleaning for residential and commercial properties"
  badge="Streak-Free"
  badgeColor="info"
  imageSrc="/images/window-cleaning.jpg"
  imageAlt="Window Cleaning"
  features={['Interior & Exterior', 'Residential & Commercial', 'Satisfaction Guaranteed']}
  ctaText="Learn More"
  ctaHref="/services/window-cleaning"
/>
```

---

#### ReviewCard
**File:** [`src/components/ui/organisms/review-card.tsx`](src/components/ui/organisms/review-card.tsx)

A card component for displaying customer reviews.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rating` | `number` | - | Review rating (1-5) |
| `text` | `string` | - | Review text |
| `author` | `string` | - | Review author |
| `service` | `string` | - | Service name |
| `date` | `string` | - | Review date |

**Usage:**
```tsx
import { ReviewCard } from '@/components/ui/organisms/review-card';

<ReviewCard
  rating={5}
  text="Excellent service! Very professional and thorough."
  author="John Smith"
  service="Window Cleaning"
  date="June 15, 2024"
/>
```

---

## 📖 Usage Guidelines

### General Principles

1. **Use Design Tokens**: Always use the design tokens defined in [`tokens.css`](src/styles/tokens.css) instead of hardcoding values.
   ```css
   /* ✅ Good */
   .my-component {
     background-color: var(--color-background);
     color: var(--color-foreground);
     padding: var(--space-gap-normal);
   }
   
   /* ❌ Bad */
   .my-component {
     background-color: #ffffff;
     color: #333333;
     padding: 16px;
   }
   ```

2. **Component Composition**: Prefer composing existing components over creating new ones.
   ```tsx
   /* ✅ Good */
   <Card variant="featured" padding="lg" hoverable>
     <Badge variant="success">New</Badge>
     <h3>Title</h3>
     <Button>Action</Button>
   </Card>
   
   /* ❌ Bad */
   <div className="custom-card">...</div>
   ```

3. **Accessibility First**: Always consider accessibility when creating components.
   - Use semantic HTML
   - Provide alt text for images
   - Use proper ARIA attributes
   - Ensure keyboard navigation

4. **Responsive Design**: All components should work well on mobile, tablet, and desktop.
   - Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
   - Test on multiple viewports

5. **Performance**: Optimize components for performance.
   - Use lazy loading for images
   - Minimize re-renders
   - Use efficient data fetching

### Component Usage Examples

#### Creating a New Page

When creating a new page, use the existing component library:

```astro
---
import { Button, Card, Badge } from '@/components/ui';
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="My Page" description="Page description">
  <section class="py-12">
    <div class="mx-auto max-w-7xl px-4">
      <h1 class="heading-display font-bold text-midnight-indigo">Page Title</h1>
      
      <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card variant="default" padding="lg" hoverable>
          <Badge variant="success">New</Badge>
          <h2 class="heading-card mt-4 font-bold">Card Title</h2>
          <p class="mt-2 text-muted-foreground">Card description</p>
          <Button className="mt-4">Action</Button>
        </Card>
        {/* More cards... */}
      </div>
    </div>
  </section>
</BaseLayout>
```

#### Creating a New Component

When creating a new component:

1. **Place it in the correct directory** based on Atomic Design principles
2. **Use TypeScript** for type safety
3. **Add Storybook stories** for documentation
4. **Add unit tests** for verification
5. **Follow the existing patterns** in the codebase

Example:

```tsx
// src/components/ui/atoms/my-component.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'featured';
  size?: 'sm' | 'md' | 'lg';
}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border bg-card p-4',
          variant === 'featured' && 'border-midnight-indigo/20 bg-midnight-indigo/5',
          size === 'sm' && 'p-2',
          size === 'lg' && 'p-6',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
MyComponent.displayName = 'MyComponent';

export { MyComponent };
```

---

## ♿ Accessibility

The All-Star Cleaning design system follows **WCAG 2.1 AA** standards.

### Accessibility Checklist

- [ ] **Semantic HTML**: Use proper HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- [ ] **Alt Text**: All images have descriptive `alt` attributes or `aria-hidden="true"` for decorative images
- [ ] **ARIA Attributes**: Use ARIA attributes when necessary (`aria-label`, `aria-describedby`, etc.)
- [ ] **Keyboard Navigation**: All interactive elements are keyboard accessible
- [ ] **Focus Management**: Focus indicators are visible and clear
- [ ] **Color Contrast**: Text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] **Form Labels**: All form inputs have associated labels
- [ ] **Error Messages**: Form errors are announced to screen readers
- [ ] **Skip Links**: Page has a "skip to main content" link
- [ ] **Language Attribute**: HTML has `lang` attribute

### Accessibility Testing

Run accessibility tests with:

```bash
# Run all accessibility tests
npm run test:a11y

# Run accessibility tests with UI
npm run test:ui -- --project=accessibility
```

### Common Accessibility Issues

1. **Missing Alt Text**:
   ```html
   <!-- ❌ Bad -->
   <img src="image.jpg" />
   
   <!-- ✅ Good -->
   <img src="image.jpg" alt="Description of image" />
   
   <!-- ✅ Good (decorative) -->
   <img src="image.jpg" alt="" aria-hidden="true" />
   ```

2. **Missing Form Labels**:
   ```html
   <!-- ❌ Bad -->
   <input type="text" placeholder="Name" />
   
   <!-- ✅ Good -->
   <label for="name">Name</label>
   <input type="text" id="name" />
   ```

3. **Poor Color Contrast**:
   ```css
   /* ❌ Bad (low contrast) */
   .text {
     color: #cccccc;
     background: #ffffff;
   }
   
   /* ✅ Good (high contrast) */
   .text {
     color: var(--color-foreground);
     background: var(--color-background);
   }
   ```

4. **Missing Focus Indicators**:
   ```css
   /* ❌ Bad */
   button:focus {
     outline: none;
   }
   
   /* ✅ Good */
   button:focus-visible {
     outline: 2px solid var(--color-ring);
     outline-offset: 2px;
   }
   ```

---

## 🧪 Testing

The design system includes comprehensive testing at multiple levels:

### 1. Unit Tests (Vitest)

Unit tests verify individual components in isolation.

**Run unit tests:**
```bash
npm run test:unit
```

**Run unit tests with watch mode:**
```bash
npm run test:unit:watch
```

**Run unit tests with coverage:**
```bash
npm run test:unit:coverage
```

**Test Files:**
- [`src/components/ui/atoms/button.test.tsx`](src/components/ui/atoms/button.test.tsx)
- [`src/components/ui/atoms/badge.test.tsx`](src/components/ui/atoms/badge.test.tsx)
- [`src/components/ui/molecules/card.test.tsx`](src/components/ui/molecules/card.test.tsx)

### 2. E2E Tests (Playwright)

End-to-end tests verify user flows and page interactions.

**Run E2E tests:**
```bash
npm run test
```

**Run E2E tests with UI:**
```bash
npm run test:ui
```

**Run E2E tests with coverage:**
```bash
npm run test:coverage
```

**Test Files:**
- [`e2e/homepage.spec.ts`](e2e/homepage.spec.ts)

### 3. Visual Regression Tests (Playwright)

Visual regression tests detect unintended visual changes.

**Run visual regression tests:**
```bash
npm run test:visual
```

**Update baseline screenshots:**
```bash
npx playwright test --update-snapshots
```

**Test Files:**
- [`e2e/homepage.visual.spec.ts`](e2e/homepage.visual.spec.ts)

**Screenshots Directory:**
- `e2e/snapshots/`

### 4. Accessibility Tests (Playwright + Axe)

Accessibility tests verify WCAG 2.1 AA compliance.

**Run accessibility tests:**
```bash
npm run test:a11y
```

**Test Files:**
- [`e2e/homepage.a11y.spec.ts`](e2e/homepage.a11y.spec.ts)

### 5. Storybook Visual Tests

Storybook provides a visual documentation of all components.

**Run Storybook:**
```bash
npm run storybook
```

**Build Storybook:**
```bash
npm run storybook:build
```

**Serve Storybook:**
```bash
npm run storybook:serve
```

**Story Files:**
- [`src/components/ui/atoms/button.stories.tsx`](src/components/ui/atoms/button.stories.tsx)
- [`src/components/ui/molecules/card.stories.tsx`](src/components/ui/molecules/card.stories.tsx)

---

## 🤝 Contributing

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Run tests:**
   ```bash
   npm run validate
   ```

### Adding a New Component

1. **Create the component file** in the appropriate directory (`atoms/`, `molecules/`, `organisms/`)
2. **Add TypeScript types** for props
3. **Add Storybook stories** for documentation
4. **Add unit tests** for verification
5. **Add E2E tests** if needed
6. **Update this documentation**

### Pull Request Checklist

- [ ] Code follows the design system guidelines
- [ ] All tests pass (`npm run validate`)
- [ ] Component has Storybook stories
- [ ] Component has unit tests
- [ ] Component has proper TypeScript types
- [ ] Component is accessible (WCAG 2.1 AA)
- [ ] Component is responsive
- [ ] Documentation is updated

### Git Hooks

The project uses **Husky** for Git hooks:

- **Pre-commit**: Runs linting, formatting, and type checking
- **Pre-push**: Runs E2E tests and build validation

To manually run hooks:
```bash
npm run hooks:install
npm run hooks:add
```

---

## 📜 Changelog

### v1.0.0 (Initial Design System)

**Added:**
- Design tokens in [`src/styles/tokens.css`](src/styles/tokens.css)
- Atomic Design component structure
- Button component with variants and sizes
- Badge component for labels and tags
- Card component for containers
- Skeleton component for loading states
- ThemeToggle component for dark mode
- FormField component for forms
- Toast component for notifications
- Hero organism for hero sections
- ServiceCard organism for services
- ReviewCard organism for reviews
- Vitest for unit testing
- Playwright for E2E testing
- Visual regression testing
- Accessibility testing with axe-core
- Storybook for component documentation
- Git hooks for pre-commit and pre-push
- Comprehensive documentation

**Breaking Changes:**
- None (initial release)

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Storybook Documentation](https://storybook.js.org/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Vitest Documentation](https://vitest.dev/)

---

## 💬 Support

For questions or issues related to the design system:

1. **Check the documentation** in this file
2. **Look at existing components** for patterns
3. **Run tests** to verify your changes
4. **Ask in the team channel** for help

---

*Last updated: [Current Date]*
*Maintainer: [Your Name]*
