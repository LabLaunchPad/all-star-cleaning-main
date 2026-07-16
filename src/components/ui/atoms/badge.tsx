import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider',
  {
    variants: {
      variant: {
        default: 'bg-midnight-indigo/10 text-midnight-indigo border border-midnight-indigo/20',
        primary: 'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
        success: 'bg-green-surface text-green-dark border border-green-light/20',
        info: 'bg-sky-surface text-sky-dark border border-sky-light/20',
        warning: 'bg-amber-surface text-amber-dark border border-amber-light/20',
        destructive: 'bg-red-50 text-red-600 border border-red-200',
        gold: 'bg-gold/10 text-gold-dark border border-gold/20',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-1">{rightIcon}</span>}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
