'use client';

import * as React from 'react';
import { Button } from '@/components/ui/atoms/button';
import { Badge } from '@/components/ui/atoms/badge';

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badges?: { label: string; icon?: React.ReactNode; color?: string }[];
  backgroundImage?: string;
  backgroundOverlay?: string;
  locale?: 'en' | 'fr';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get a Quote',
  secondaryCtaText,
  secondaryCtaHref,
  badges = [],
  backgroundImage,
  backgroundOverlay = 'bg-gradient-to-b from-black/80 via-black/45 to-black/85',
  locale = 'en',
}) => {
  return (
    <section
      aria-label={locale === 'fr' ? 'Accueil' : 'Homepage hero'}
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden md:min-h-screen pt-4 sm:pt-10"
    >
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            role="presentation"
            width="1344"
            height="768"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className={`absolute inset-0 ${backgroundOverlay}`} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-16">
        <h1 className="slide-up font-heading text-3xl font-extrabold uppercase tracking-tight text-text-on-dark sm:text-5xl md:text-6xl lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="fade-in delay-2 mx-auto mt-6 max-w-2xl text-lg font-medium text-text-on-dark-muted sm:text-xl md:text-2xl">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="fade-in delay-4 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="xl"
            className="w-full sm:w-auto"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            }
          >
            {ctaText}
          </Button>
          {secondaryCtaText && secondaryCtaHref && (
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-2 border-text-on-dark/30 text-text-on-dark hover:bg-text-on-dark/10"
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>

        {/* Trust Badges */}
        {badges.length > 0 && (
          <div className="fade-in delay-5 mt-12 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {badges.map((badge, i) => (
                <Badge key={i} variant="default" size="sm">
                  {badge.icon && <span className="mr-1">{badge.icon}</span>}
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-text-on-dark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 13 5 5 5-5" />
          <path d="m7 6 5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export { Hero };
