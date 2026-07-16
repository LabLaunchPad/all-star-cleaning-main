'use client';

import * as React from 'react';
import { Card } from '@/components/ui/molecules/card';

export interface ReviewCardProps {
  rating: number;
  text: string;
  author: string;
  service?: string;
  date?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  text,
  author,
  service,
  date,
}) => {
  return (
    <Card variant="default" padding="md" hoverable>
      <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${i < rating ? 'text-gold-dark' : 'text-border'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{text}</p>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-navy">{author}</p>
        {service && date && (
          <p className="text-xs text-muted-foreground">
            {service} · {date}
          </p>
        )}
      </div>
    </Card>
  );
};

export { ReviewCard };
