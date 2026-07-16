import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'featured' | 'subtle' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  clickable?: boolean;
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      hoverable = false,
      clickable = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    const baseStyles =
      'rounded-xl transition-all duration-200';

    const variants = {
      default: 'bg-card border border-border',
      featured: 'bg-midnight-indigo/5 border border-midnight-indigo/20',
      subtle: 'bg-off-white border border-border/50',
      bordered: 'bg-card border-2 border-border',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const interactiveStyles = cn(
      hoverable && 'hover:shadow-lg hover:-translate-y-0.5',
      clickable && 'cursor-pointer active:scale-[0.98]'
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          interactiveStyles,
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Card.displayName = 'Card';

export { Card };
