# Component Specification Template
# All-Star Cleaning Design System

> **Spec-Driven TDD Template for UI Components**
> *Use this template for all new components*

---

## 📋 Component Spec: [ComponentName]

**Category**: [Atom | Molecule | Organism | Template]
**Status**: [Draft | In Review | Approved | Deprecated]
**Priority**: [P0 | P1 | P2 | P3]
**Owner**: [Team Member | AI Agent]
**Last Updated**: [Date]

---

## 🎯 Purpose

### User Story
As a [user type], I want to [user goal] so that [benefit].

### Problem Statement
[Describe the problem this component solves]

### Solution
[Describe how this component solves the problem]

---

## 📐 Requirements

### Functional Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

### Non-Functional Requirements
- [ ] Accessibility: WCAG 2.1 AA compliant
- [ ] Performance: Renders in < 100ms
- [ ] Responsive: Works on all screen sizes
- [ ] Theme: Supports light/dark mode
- [ ] i18n: Supports EN/FR locales

---

## 🎨 Design

### Props Interface
```typescript
interface [ComponentName]Props {
  // Required props
  prop1: Type1;
  prop2: Type2;
  
  // Optional props
  prop3?: Type3;
  prop4?: Type4;
  
  // Event handlers
  onEvent1?: (args: EventArgs) => void;
  onEvent2?: (args: EventArgs) => void;
  
  // Style props
  className?: string;
  style?: React.CSSProperties;
}
```

### Variants
| Variant | Description | Default |
|---------|-------------|---------|
| default | Default style | ✅ |
| primary | Primary style | ❌ |
| secondary | Secondary style | ❌ |
| subtle | Subtle style | ❌ |

### Sizes
| Size | Description | Default |
|------|-------------|---------|
| sm | Small | ❌ |
| md | Medium | ✅ |
| lg | Large | ❌ |

### States
| State | Description | Trigger |
|-------|-------------|---------|
| default | Normal state | - |
| hover | Hover state | Mouse over |
| active | Active state | Mouse down |
| focus | Focus state | Tab key |
| disabled | Disabled state | disabled prop |
| loading | Loading state | loading prop |

---

## 🧪 Behavior

### User Interactions
1. **Interaction 1**
   - Trigger: [User action]
   - Expected: [Expected behavior]
   - Result: [Final state]

2. **Interaction 2**
   - Trigger: [User action]
   - Expected: [Expected behavior]
   - Result: [Final state]

### Edge Cases
- [ ] Edge case 1: [Description]
- [ ] Edge case 2: [Description]
- [ ] Edge case 3: [Description]

---

## ✅ Acceptance Criteria

### Scenario: Default Rendering
```gherkin
Given I am on a page with [ComponentName]
When the component is rendered with default props
Then I should see the component with default styles
And the component should be visible
And the component should be accessible
```

### Scenario: Variant Rendering
```gherkin
Given I am on a page with [ComponentName]
When the component is rendered with variant "[variant]"
Then I should see the component with "[variant]" styles
And the component should maintain all functionality
```

### Scenario: Size Rendering
```gherkin
Given I am on a page with [ComponentName]
When the component is rendered with size "[size]"
Then I should see the component with "[size]" dimensions
And the component should maintain all functionality
```

### Scenario: Interaction
```gherkin
Given I am on a page with [ComponentName]
When I [interaction]
Then [expected result]
And [final state]
```

### Scenario: Accessibility
```gherkin
Given I am on a page with [ComponentName]
When the component is rendered
Then it should meet WCAG 2.1 AA standards
And it should be keyboard navigable
And it should have proper ARIA labels
And it should have sufficient color contrast
```

---

## 📁 Files

### Implementation Files
- `src/components/ui/[category]/[component-name].tsx` - Component
- `src/components/ui/[category]/[component-name].test.tsx` - Unit tests
- `src/components/ui/[category]/[component-name].stories.tsx` - Storybook

### Spec Files
- `specs/components/[category]/[component-name].spec` - This file

---

## 🔗 Dependencies

### Component Dependencies
- [ ] Dependency 1
- [ ] Dependency 2
- [ ] Dependency 3

### External Dependencies
- [ ] Package 1
- [ ] Package 2

---

## 📊 Test Coverage

| Test Type | Coverage | Status |
|-----------|----------|--------|
| Unit Tests | [X]% | [✅ | ⚠️ | ❌] |
| Visual Tests | [X]% | [✅ | ⚠️ | ❌] |
| Accessibility Tests | [X]% | [✅ | ⚠️ | ❌] |
| E2E Tests | [X]% | [✅ | ⚠️ | ❌] |

---

## 🎯 Checklist

### Before Implementation
- [ ] Spec reviewed and approved
- [ ] Design reviewed and approved
- [ ] Props interface defined
- [ ] Test plan created

### During Implementation
- [ ] Component created
- [ ] Unit tests created
- [ ] Unit tests passing
- [ ] Storybook story created
- [ ] Accessibility checked
- [ ] Responsive checked
- [ ] Theme support checked

### Before Merge
- [ ] All tests passing
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Quality gates passing

---

## 📝 Notes

[Any additional notes, considerations, or context]

---

## 📚 Examples

### Example: Button Component
```markdown
# Component Spec: Button

**Category**: Atom
**Status**: Approved
**Priority**: P0

## Purpose
As a user, I want to click buttons to perform actions so that I can interact with the application.

## Requirements
- Must support multiple variants (primary, secondary, ghost, etc.)
- Must support multiple sizes (sm, md, lg)
- Must support loading state
- Must support icons (left, right)
- Must be accessible
- Must be responsive

## Props Interface
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
```
```

---

*Template Version: 1.0*
*Last Updated: 2024*
