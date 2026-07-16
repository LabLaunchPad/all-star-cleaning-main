import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', width, height, ...props }, ref) => {
    const baseStyles =
      'animate-pulse bg-muted rounded-md';

    const variants = {
      text: 'h-4 rounded-full',
      circular: 'rounded-full',
      rectangular: 'rounded-md',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        style={{ width, height }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
