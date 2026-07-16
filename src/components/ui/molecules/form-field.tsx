'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { className, label, htmlFor, error, hint, required, disabled, children, ...props },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('space-y-1.5', className)} {...props}>
        {label && (
          <Label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-navy"
          >
            {label}
            {required && (
              <span className="text-destructive ml-1" aria-hidden="true">
                *
              </span>
            )}
          </Label>
        )}
        {children}
        {error && (
          <p
            className="text-sm text-destructive field-error-message"
            role="alert"
            id={`${htmlFor}-error`}
          >
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-sm text-muted-foreground">{hint}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = 'FormField';

export { FormField };
