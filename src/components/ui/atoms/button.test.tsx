/**
 * @vitest-environment happy-dom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button Component', () => {
  // ============================================================
  // BASIC RENDERING TESTS
  // ============================================================

  it('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /Click Me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders with children', () => {
    render(<Button>Submit Form</Button>);
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  // ============================================================
  // PROPS TESTS
  // ============================================================

  describe('Props', () => {
    it('applies variant classes correctly', () => {
      const { rerender } = render(<Button variant="default">Default</Button>);
      expect(screen.getByText('Default')).toHaveClass('bg-primary');

      rerender(<Button variant="destructive">Destructive</Button>);
      expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');

      rerender(<Button variant="outline">Outline</Button>);
      expect(screen.getByText('Outline')).toHaveClass('border');

      rerender(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');

      rerender(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByText('Ghost')).not.toHaveClass('bg-');

      rerender(<Button variant="link">Link</Button>);
      expect(screen.getByText('Link')).toHaveClass('underline-offset-4');

      rerender(<Button variant="subtle">Subtle</Button>);
      expect(screen.getByText('Subtle')).toHaveClass('bg-midnight-indigo/10');
    });

    it('applies size classes correctly', () => {
      const { rerender } = render(<Button size="default">Default</Button>);
      expect(screen.getByText('Default')).toHaveClass('h-9');

      rerender(<Button size="sm">Small</Button>);
      expect(screen.getByText('Small')).toHaveClass('h-8');

      rerender(<Button size="lg">Large</Button>);
      expect(screen.getByText('Large')).toHaveClass('h-10');

      rerender(<Button size="xl">Extra Large</Button>);
      expect(screen.getByText('Extra Large')).toHaveClass('h-12');

      rerender(<Button size="icon">Icon</Button>);
      expect(screen.getByText('Icon')).toHaveClass('h-9', 'w-9');
    });

    it('applies custom className', () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByText('Custom')).toHaveClass('custom-class');
    });

    it('supports disabled prop', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByText('Disabled')).toBeDisabled();
    });

    it('supports type prop', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
    });

    it('supports aria-label', () => {
      render(<Button aria-label="Close dialog">X</Button>);
      expect(screen.getByLabelText('Close dialog')).toBeInTheDocument();
    });
  });

  // ============================================================
  // LOADING STATE TESTS
  // ============================================================

  describe('Loading State', () => {
    it('renders loading spinner when loading=true', () => {
      render(<Button loading>Loading...</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-70', 'cursor-not-allowed');
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // SVG spinner
    });

    it('does not render spinner when loading=false', () => {
      render(<Button loading={false}>Not Loading</Button>);
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('disables button when loading', () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  // ============================================================
  // ICON TESTS
  // ============================================================

  describe('Icons', () => {
    it('renders left icon', () => {
      render(
        <Button leftIcon={<span data-testid="left-icon">←</span>}>
          Back
        </Button>
      );
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renders right icon', () => {
      render(
        <Button rightIcon={<span data-testid="right-icon">→</span>}>
          Next
        </Button>
      );
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('renders both left and right icons', () => {
      render(
        <Button
          leftIcon={<span data-testid="left">←</span>}
          rightIcon={<span data-testid="right">→</span>}
        >
          Both
        </Button>
      );
      expect(screen.getByTestId('left')).toBeInTheDocument();
      expect(screen.getByTestId('right')).toBeInTheDocument();
    });
  });

  // ============================================================
  // ASCHILD TESTS
  // ============================================================

  describe('asChild Prop', () => {
    it('renders as child component (a tag)', () => {
      render(
        <Button asChild>
          <a href="/test" data-testid="link-button">
            Link Button
          </a>
        </Button>
      );
      const link = screen.getByTestId('link-button');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/test');
      expect(link).toHaveClass('bg-primary');
    });

    it('preserves child props', () => {
      render(
        <Button asChild>
          <a href="/test" target="_blank" rel="noopener noreferrer">
            External Link
          </a>
        </Button>
      );
      const link = screen.getByRole('link', { name: /External Link/i });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // ============================================================
  // EVENT HANDLERS TESTS
  // ============================================================

  describe('Event Handlers', () => {
    it('calls onClick when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      fireEvent.click(screen.getByText('Click Me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );
      fireEvent.click(screen.getByText('Disabled'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // ============================================================
  // ACCESSIBILITY TESTS
  // ============================================================

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('supports aria-disabled', () => {
      render(<Button disabled aria-disabled="true">Disabled</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('has touch-target class for mobile', () => {
      render(<Button>Touch Me</Button>);
      expect(screen.getByRole('button')).toHaveClass('touch-target');
    });
  });

  // ============================================================
  // STYLES TESTS
  // ============================================================

  describe('Styles', () => {
    it('has rounded-full class by default', () => {
      render(<Button>Rounded</Button>);
      expect(screen.getByText('Rounded')).toHaveClass('rounded-full');
    });

    it('has transition-all for smooth animations', () => {
      render(<Button>Animated</Button>);
      expect(screen.getByText('Animated')).toHaveClass('transition-all');
    });

    it('has focus-visible styles', () => {
      render(<Button>Focusable</Button>);
      expect(screen.getByText('Focusable')).toHaveClass('focus-visible:outline-none');
    });

    it('has active:scale for press effect', () => {
      render(<Button>Press Me</Button>);
      expect(screen.getByText('Press Me')).toHaveClass('active:scale-[0.98]');
    });
  });
});
