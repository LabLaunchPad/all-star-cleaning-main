'use client';

import * as React from 'react';
import { Card } from '@/components/ui/molecules/card';
import { Badge } from '@/components/ui/atoms/badge';
import { Button } from '@/components/ui/atoms/button';

export interface ServiceCardProps {
  title: string;
  description: string;
  badge?: string;
  badgeColor?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'gold';
  imageSrc?: string;
  imageAlt?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  locale?: 'en' | 'fr';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  badge,
  badgeColor = 'default',
  imageSrc,
  imageAlt,
  features = [],
  ctaText = 'Learn More',
  ctaHref,
}) => {
  return (
    <a href={ctaHref} className="block">
      <Card variant="default" padding="none" hoverable clickable asChild>
      {imageSrc && (
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-indigo-dark/90 via-midnight-indigo-dark/70 to-transparent" />
        </div>
      )}
      <div className="p-6">
        {badge && (
          <Badge variant={badgeColor} className="mb-3">
            {badge}
          </Badge>
        )}
        <h3 className="font-heading text-xl font-bold text-midnight-indigo">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        {features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0 text-midnight-indigo/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {ctaHref && (
          <Button variant="subtle" size="sm" className="mt-4" rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          }>
            {ctaText}
          </Button>
        )}
      </div>
      </Card>
    </a>
  );
};

export { ServiceCard };
