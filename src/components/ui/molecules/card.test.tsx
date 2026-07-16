/**
 * @vitest-environment happy-dom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './card';

describe('Card Component', () => {
  // ============================================================
  // BASIC RENDERING TESTS
  // ============================================================

  it('renders with default props', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Description</p>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  // ============================================================
  // PROPS TESTS
  // ============================================================

  describe('Props', () => {
    it('applies variant classes correctly', () => {
      const { rerender } = render(
        <Card variant="default">Default</Card>
      );
      expect(screen.getByText('Default')).toHaveClass('bg-card', 'border-border');

      rerender(<Card variant="featured">Featured</Card>);
      expect(screen.getByText('Featured')).toHaveClass('bg-midnight-indigo/5');

      rerender(<Card variant="subtle">Subtle</Card>);
      expect(screen.getByText('Subtle')).toHaveClass('bg-off-white');

      rerender(<Card variant="bordered">Bordered</Card>);
      expect(screen.getByText('Bordered')).toHaveClass('border-2');
    });

    it('applies padding classes correctly', () => {
      const { rerender } = render(
        <Card padding="none">No Padding</Card>
      );
      expect(screen.getByText('No Padding')).not.toHaveClass('p-');

      rerender(<Card padding="sm">Small Padding</Card>);
      expect(screen.getByText('Small Padding')).toHaveClass('p-4');

      rerender(<Card padding="md">Medium Padding</Card>);
      expect(screen.getByText('Medium Padding')).toHaveClass('p-6');

      rerender(<Card padding="lg">Large Padding</Card>);
      expect(screen.getByText('Large Padding')).toHaveClass('p-8');
    });

    it('applies custom className', () => {
      render(<Card className="custom-card">Custom</Card>);
      expect(screen.getByText('Custom')).toHaveClass('custom-card');
    });

    it('applies hoverable styles', () => {
      render(<Card hoverable>Hoverable</Card>);
      expect(screen.getByText('Hoverable')).toHaveClass(
        'hover:shadow-lg',
        'hover:-translate-y-0.5'
      );
    });

    it('applies clickable styles', () => {
      render(<Card clickable>Clickable</Card>);
      expect(screen.getByText('Clickable')).toHaveClass(
        'cursor-pointer',
        'active:scale-[0.98]'
      );
    });

    it('supports asChild prop', () => {
      render(
        <Card asChild>
          <div data-testid="child-div">Child Div</div>
        </Card>
      );
      expect(screen.getByTestId('child-div')).toBeInTheDocument();
      expect(screen.getByTestId('child-div')).toHaveClass('rounded-xl');
    });
  });

  // ============================================================
  // STYLES TESTS
  // ============================================================

  describe('Styles', () => {
    it('has rounded-xl by default', () => {
      render(<Card>Rounded</Card>);
      expect(screen.getByText('Rounded')).toHaveClass('rounded-xl');
    });

    it('has transition-all for animations', () => {
      render(<Card>Animated</Card>);
      expect(screen.getByText('Animated')).toHaveClass('transition-all');
    });

    it('has duration-200 for transition speed', () => {
      render(<Card>Fast Transition</Card>);
      expect(screen.getByText('Fast Transition')).toHaveClass('duration-200');
    });
  });

  // ============================================================
  // ACCESSIBILITY TESTS
  // ============================================================

  describe('Accessibility', () => {
    it('renders as div by default', () => {
      render(<Card>Div Card</Card>);
      expect(screen.getByText('Div Card')).toHaveProperty('tagName', 'DIV');
    });

    it('supports custom element via asChild', () => {
      render(
        <Card asChild>
          <section data-testid="section-card">Section Card</section>
        </Card>
      );
      expect(screen.getByTestId('section-card')).toHaveProperty('tagName', 'SECTION');
    });

    it('supports aria attributes', () => {
      render(
        <Card aria-labelledby="card-title" aria-describedby="card-desc">
          <h2 id="card-title">Title</h2>
          <p id="card-desc">Description</p>
        </Card>
      );
      const card = screen.getByText('Title').parentElement;
      expect(card).toHaveAttribute('aria-labelledby', 'card-title');
      expect(card).toHaveAttribute('aria-describedby', 'card-desc');
    });
  });

  // ============================================================
  // COMBINED PROPS TESTS
  // ============================================================

  describe('Combined Props', () => {
    it('combines variant, padding, and custom className', () => {
      render(
        <Card
          variant="featured"
          padding="lg"
          className="extra-class"
        >
          Combined
        </Card>
      );
      const card = screen.getByText('Combined');
      expect(card).toHaveClass(
        'bg-midnight-indigo/5',
        'p-8',
        'extra-class'
      );
    });

    it('combines hoverable and clickable', () => {
      render(
        <Card hoverable clickable>
          Interactive
        </Card>
      );
      const card = screen.getByText('Interactive');
      expect(card).toHaveClass(
        'hover:shadow-lg',
        'hover:-translate-y-0.5',
        'cursor-pointer',
        'active:scale-[0.98]'
      );
    });
  });
});
