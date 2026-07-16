/**
 * @vitest-environment happy-dom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './badge';

describe('Badge Component', () => {
  // ============================================================
  // BASIC RENDERING TESTS
  // ============================================================

  it('renders with default props', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  // ============================================================
  // PROPS TESTS
  // ============================================================

  describe('Props', () => {
    it('applies variant classes correctly', () => {
      const { rerender } = render(<Badge variant="default">Default</Badge>);
      expect(screen.getByText('Default')).toHaveClass(
        'bg-midnight-indigo/10',
        'text-midnight-indigo'
      );

      rerender(<Badge variant="primary">Primary</Badge>);
      expect(screen.getByText('Primary')).toHaveClass('bg-primary/10', 'text-primary');

      rerender(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-secondary/10', 'text-secondary');

      rerender(<Badge variant="success">Success</Badge>);
      expect(screen.getByText('Success')).toHaveClass('bg-green-surface', 'text-green-dark');

      rerender(<Badge variant="info">Info</Badge>);
      expect(screen.getByText('Info')).toHaveClass('bg-sky-surface', 'text-sky-dark');

      rerender(<Badge variant="warning">Warning</Badge>);
      expect(screen.getByText('Warning')).toHaveClass('bg-amber-surface', 'text-amber-dark');

      rerender(<Badge variant="destructive">Error</Badge>);
      expect(screen.getByText('Error')).toHaveClass('bg-red-50', 'text-red-600');

      rerender(<Badge variant="gold">Gold</Badge>);
      expect(screen.getByText('Gold')).toHaveClass('bg-gold/10', 'text-gold-dark');
    });

    it('applies size classes correctly', () => {
      const { rerender } = render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText('Small')).toHaveClass('px-2', 'py-0.5', 'text-[10px]');

      rerender(<Badge size="md">Medium</Badge>);
      expect(screen.getByText('Medium')).toHaveClass('px-2.5', 'py-0.5', 'text-xs');

      rerender(<Badge size="lg">Large</Badge>);
      expect(screen.getByText('Large')).toHaveClass('px-3', 'py-1', 'text-sm');
    });

    it('applies custom className', () => {
      render(<Badge className="custom-badge">Custom</Badge>);
      expect(screen.getByText('Custom')).toHaveClass('custom-badge');
    });

    it('renders left icon', () => {
      render(
        <Badge leftIcon={<span data-testid="left-icon">✓</span>}>
          With Icon
        </Badge>
      );
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(
        <Badge rightIcon={<span data-testid="right-icon">✓</span>}>
          With Icon
        </Badge>
      );
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('renders both left and right icons', () => {
      render(
        <Badge
          leftIcon={<span data-testid="left">←</span>}
          rightIcon={<span data-testid="right">→</span>}
        >
          Both Icons
        </Badge>
      );
      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
    });
  });

  // ============================================================
  // STYLES TESTS
  // ============================================================

  describe('Styles', () => {
    it('has rounded-full by default', () => {
      render(<Badge>Rounded</Badge>);
      expect(screen.getByText('Rounded')).toHaveClass('rounded-full');
    });

    it('has inline-flex display', () => {
      render(<Badge>Flex</Badge>);
      expect(screen.getByText('Flex')).toHaveClass('inline-flex');
    });

    it('has items-center for vertical alignment', () => {
      render(<Badge>Centered</Badge>);
      expect(screen.getByText('Centered')).toHaveClass('items-center');
    });

    it('has gap-1.5 for spacing between icon and text', () => {
      render(<Badge>Spaced</Badge>);
      expect(screen.getByText('Spaced')).toHaveClass('gap-1.5');
    });

    it('has uppercase text', () => {
      render(<Badge>uppercase</Badge>);
      expect(screen.getByText('uppercase')).toHaveClass('uppercase');
    });

    it('has tracking-wider for letter spacing', () => {
      render(<Badge>Wide</Badge>);
      expect(screen.getByText('Wide')).toHaveClass('tracking-wider');
    });

    it('has font-semibold weight', () => {
      render(<Badge>Bold</Badge>);
      expect(screen.getByText('Bold')).toHaveClass('font-semibold');
    });
  });

  // ============================================================
  // ACCESSIBILITY TESTS
  // ============================================================

  describe('Accessibility', () => {
    it('renders as span by default', () => {
      render(<Badge>Span Badge</Badge>);
      expect(screen.getByText('Span Badge')).toHaveProperty('tagName', 'SPAN');
    });

    it('supports aria-label', () => {
      render(<Badge aria-label="Notification count">5</Badge>);
      expect(screen.getByLabelText('Notification count')).toBeInTheDocument();
    });

    it('supports aria-hidden', () => {
      render(<Badge aria-hidden="true">Hidden</Badge>);
      expect(screen.getByText('Hidden')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // ============================================================
  // COMBINED PROPS TESTS
  // ============================================================

  describe('Combined Props', () => {
    it('combines variant, size, and icons', () => {
      render(
        <Badge
          variant="success"
          size="lg"
          leftIcon={<span data-testid="icon">✓</span>}
        >
          Success Badge
        </Badge>
      );
      const badge = screen.getByText('Success Badge');
      expect(badge).toHaveClass('bg-green-surface', 'text-green-dark', 'px-3', 'py-1');
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('combines all props', () => {
      render(
        <Badge
          variant="info"
          size="md"
          className="extra-class"
          leftIcon={<span data-testid="left">i</span>}
          rightIcon={<span data-testid="right">!</span>}
          aria-label="Info badge"
        >
          Info
        </Badge>
      );
      const badge = screen.getByText('Info');
      expect(badge).toHaveClass(
        'bg-sky-surface',
        'text-sky-dark',
        'px-2.5',
        'py-0.5',
        'extra-class'
      );
      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
      expect(badge).toHaveAttribute('aria-label', 'Info badge');
    });
  });
});
