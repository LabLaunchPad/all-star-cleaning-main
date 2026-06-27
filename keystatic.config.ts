import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'team-red/all-star-cleaning',
  },

  collections: {
    reviews: collection({
      label: 'Customer Reviews',
      path: 'src/content/reviews/*',
      format: { data: 'json' },
      slugField: 'author',
      schema: {
        author: fields.slug({
          name: { label: 'Customer Name', description: 'e.g. Sarah Mitchell' },
        }),
        rating: fields.integer({
          label: 'Star Rating (1–5)',
          validation: { min: 1, max: 5 },
          defaultValue: 5,
        }),
        service: fields.text({
          label: 'Service (English)',
          description: 'e.g. Gutter Cleaning',
        }),
        frService: fields.text({
          label: 'Service (French)',
          description: 'e.g. Nettoyage de Gouttières',
        }),
        date: fields.text({
          label: 'Review Date',
          description: 'Format: YYYY-MM-DD, e.g. 2026-02-15',
        }),
        textEn: fields.text({
          label: 'Review Text (English)',
          multiline: true,
        }),
        textFr: fields.text({
          label: 'Review Text (French)',
          multiline: true,
        }),
      },
    }),

    services: collection({
      label: 'Services',
      path: 'src/content/services/*',
      format: { data: 'json' },
      slugField: 'slug',
      schema: {

        // ──────────────────────────────────────────
        // SERVICE IMAGE (shown first for easy editing)
        // ──────────────────────────────────────────
        image: fields.image({
          label: 'Service Photo',
          description: 'Photo shown on the homepage cards and services listing page. Upload a new photo to replace it.',
          directory: 'public/images',
          publicPath: '/images/',
        }),

        // ──────────────────────────────────────────
        // IDENTIFIERS
        // ──────────────────────────────────────────
        slug: fields.slug({
          name: { label: 'Slug (URL)', description: 'e.g. window-cleaning — do not change after publishing' },
        }),
        frSlug: fields.text({
          label: 'French Slug (URL)',
          description: 'e.g. nettoyage-vitres',
        }),
        icon: fields.text({
          label: 'Icon',
          description: 'Lucide icon name, e.g. lucide:sparkles',
          defaultValue: 'lucide:sparkles',
        }),

        // ──────────────────────────────────────────
        // NAMES
        // ──────────────────────────────────────────
        name: fields.text({ label: 'Service Name (English)' }),
        frName: fields.text({ label: 'Service Name (French)' }),

        // ──────────────────────────────────────────
        // DESCRIPTIONS
        // ──────────────────────────────────────────
        description: fields.text({
          label: 'Description (English)',
          multiline: true,
        }),
        frDescription: fields.text({
          label: 'Description (French)',
          multiline: true,
        }),

        // ──────────────────────────────────────────
        // FEATURES LIST
        // ──────────────────────────────────────────
        features: fields.array(
          fields.text({ label: 'Feature' }),
          {
            label: 'Features (English)',
            itemLabel: (props) => props.value || 'Feature',
          }
        ),
        frFeatures: fields.array(
          fields.text({ label: 'Feature' }),
          {
            label: 'Features (French)',
            itemLabel: (props) => props.value || 'Feature',
          }
        ),

        // ──────────────────────────────────────────
        // SEO META
        // ──────────────────────────────────────────
        metaTitle: fields.text({ label: 'Meta Title (English)' }),
        metaDescription: fields.text({ label: 'Meta Description (English)', multiline: true }),
        frMetaTitle: fields.text({ label: 'Meta Title (French)' }),
        frMetaDescription: fields.text({ label: 'Meta Description (French)', multiline: true }),

        // ──────────────────────────────────────────
        // CTA BUTTON TEXT
        // ──────────────────────────────────────────
        cta: fields.text({ label: 'CTA Button Text (English)', defaultValue: 'Get a Free Quote' }),
        frCta: fields.text({ label: 'CTA Button Text (French)', defaultValue: 'Obtenez un Devis Gratuit' }),

        // ──────────────────────────────────────────
        // FAQS
        // ──────────────────────────────────────────
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question (English)' }),
            frQuestion: fields.text({ label: 'Question (French)' }),
            answer: fields.text({ label: 'Answer (English)', multiline: true }),
            frAnswer: fields.text({ label: 'Answer (French)', multiline: true }),
          }),
          {
            label: 'FAQs',
            itemLabel: (props) => props.fields.question.value || 'FAQ',
          }
        ),

      },
    }),
  },

  singletons: {
    about: singleton({
      label: 'About Page',
      path: 'src/content/about',
      format: { data: 'json' },
      schema: {

        // ──────────────────────────────────────────
        // TEAM PHOTO (shown first)
        // ──────────────────────────────────────────
        teamImage: fields.image({
          label: 'Team Photo',
          description: 'Photo of the team shown on the About page',
          directory: 'public/images',
          publicPath: '/images/',
        }),

        // ──────────────────────────────────────────
        // STORY PARAGRAPHS
        // ──────────────────────────────────────────
        storyParagraph1En: fields.text({
          label: 'Story Paragraph 1 (English)',
          multiline: true,
        }),
        storyParagraph1Fr: fields.text({
          label: 'Story Paragraph 1 (French)',
          multiline: true,
        }),
        blockquoteEn: fields.text({
          label: 'Guarantee Blockquote (English)',
          multiline: true,
        }),
        blockquoteFr: fields.text({
          label: 'Guarantee Blockquote (French)',
          multiline: true,
        }),
        storyParagraph2En: fields.text({
          label: 'Story Paragraph 2 (English)',
          multiline: true,
        }),
        storyParagraph2Fr: fields.text({
          label: 'Story Paragraph 2 (French)',
          multiline: true,
        }),
        storyParagraph3En: fields.text({
          label: 'Story Paragraph 3 (English)',
          multiline: true,
        }),
        storyParagraph3Fr: fields.text({
          label: 'Story Paragraph 3 (French)',
          multiline: true,
        }),

        // ──────────────────────────────────────────
        // VALUES LIST
        // ──────────────────────────────────────────
        values: fields.array(
          fields.object({
            en: fields.text({ label: 'Value (English)' }),
            fr: fields.text({ label: 'Value (French)' }),
          }),
          {
            label: 'Our Values',
            itemLabel: (props) => props.fields.en.value || 'Value',
          }
        ),

      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      format: { data: 'json' },
      schema: {

        // ──────────────────────────────────────────
        // HERO SECTION
        // ──────────────────────────────────────────
        heroImage: fields.image({
          label: 'Hero Background Photo',
          description: 'The large background photo at the top of the page',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        heroHeadlineEn: fields.text({
          label: 'Hero Headline (English)',
          defaultValue: "Ottawa's Trusted Exterior Cleaning Services",
        }),
        heroHeadlineFr: fields.text({
          label: 'Hero Headline (French)',
          defaultValue: 'Services de Nettoyage Extérieur de Confiance à Ottawa',
        }),
        heroSubtitleEn: fields.text({
          label: 'Hero Subtitle (English)',
          multiline: true,
          defaultValue: "From window cleaning to gutters and pressure washing, we've got you covered.",
        }),
        heroSubtitleFr: fields.text({
          label: 'Hero Subtitle (French)',
          multiline: true,
          defaultValue: 'Du nettoyage de vitres aux gouttières et au lavage sous pression, nous nous occupons de tout.',
        }),

        // ──────────────────────────────────────────
        // TRUST BADGES (Phone & Google Reviews)
        // ──────────────────────────────────────────
        phone: fields.text({
          label: 'Phone Number (displayed on site)',
          defaultValue: '(613) 314-3300',
        }),
        phoneLink: fields.text({
          label: 'Phone Number (for calling, no spaces)',
          defaultValue: '+16133143300',
        }),
        googleReviewCount: fields.integer({
          label: 'Google Review Count',
          defaultValue: 16,
        }),
        googleRating: fields.text({
          label: 'Google Rating (e.g. 5/5)',
          defaultValue: '5/5',
        }),

        // ──────────────────────────────────────────
        // STATS BAR
        // ──────────────────────────────────────────
        statsRatingEn: fields.text({ label: 'Stats: Rating label (English)', defaultValue: 'verified Google reviews' }),
        statsRatingFr: fields.text({ label: 'Stats: Rating label (French)', defaultValue: 'avis Google vérifiés' }),
        statsEstimatesEn: fields.text({ label: 'Stats: Estimates label (English)', defaultValue: 'Free Estimates' }),
        statsEstimatesFr: fields.text({ label: 'Stats: Estimates label (French)', defaultValue: 'Estimations Gratuites' }),
        statsDaysEn: fields.text({ label: 'Stats: Days label (English)', defaultValue: 'Open every day of the week' }),
        statsDaysFr: fields.text({ label: 'Stats: Days label (French)', defaultValue: 'Ouvert chaque semaine' }),

        // ──────────────────────────────────────────
        // "WHY CHOOSE ALL STAR?" SECTION
        // ──────────────────────────────────────────
        teamImage: fields.image({
          label: '"Why Choose All Star?" — Team Photo',
          description: 'Photo displayed beside the "Why Choose All Star?" section',
          directory: 'public/images',
          publicPath: '/images/',
        }),

        // ──────────────────────────────────────────
        // "HOW IT WORKS" SECTION
        // ──────────────────────────────────────────
        beforeAfterImage: fields.image({
          label: '"How It Works" — Before & After Photo',
          description: 'Photo shown at the bottom of the "How It Works" section',
          directory: 'public/images',
          publicPath: '/images/',
        }),

        // ──────────────────────────────────────────
        // CTA SECTION (Bottom of page)
        // ──────────────────────────────────────────
        ctaImage: fields.image({
          label: 'CTA Background Photo',
          description: 'Background photo for the "Ready to Get Started?" section',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        ctaHeadlineEn: fields.text({ label: 'CTA Headline (English)', defaultValue: 'Ready to Get Started?' }),
        ctaHeadlineFr: fields.text({ label: 'CTA Headline (French)', defaultValue: 'Prêt à Commencer?' }),
        ctaSubtitleEn: fields.text({
          label: 'CTA Subtitle (English)',
          multiline: true,
          defaultValue: "Contact us today for a free quote. We're open 7 days a week!",
        }),
        ctaSubtitleFr: fields.text({
          label: 'CTA Subtitle (French)',
          multiline: true,
          defaultValue: "Contactez-nous dès aujourd'hui pour un devis gratuit. Nous sommes ouverts 7 jours par semaine!",
        }),

      },
    }),

    siteSettings: singleton({
      label: 'Site Settings (Header & Footer)',
      path: 'src/content/settings',
      format: { data: 'json' },
      schema: {

        // ──────────────────────────────────────────
        // LOGOS
        // ──────────────────────────────────────────
        headerLogo: fields.image({
          label: 'Header Logo',
          description: 'Logo shown in the top navigation bar (dark background-compatible)',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        footerLogo: fields.image({
          label: 'Footer Logo',
          description: 'Logo shown in the footer (light/white version for dark background)',
          directory: 'public/images',
          publicPath: '/images/',
        }),

        // ──────────────────────────────────────────
        // BRAND
        // ──────────────────────────────────────────
        businessName: fields.text({
          label: 'Business Name',
          defaultValue: 'All Star Cleaning',
        }),
        taglineEn: fields.text({
          label: 'Tagline (English)',
          defaultValue: "Ottawa's Trusted Exterior Cleaning",
        }),
        taglineFr: fields.text({
          label: 'Tagline (French)',
          defaultValue: 'Nettoyage Extérieur de Confiance à Ottawa',
        }),

        // ──────────────────────────────────────────
        // CONTACT INFO
        // ──────────────────────────────────────────
        phone: fields.text({
          label: 'Phone Number (displayed)',
          description: 'e.g. (613) 314-3300',
          defaultValue: '(613) 314-3300',
        }),
        phoneLink: fields.text({
          label: 'Phone Number (for tel: link, no spaces)',
          description: 'e.g. +16133143300',
          defaultValue: '+16133143300',
        }),
        email: fields.text({
          label: 'Email Address',
          defaultValue: 'hello@allstarcleaning.ca',
        }),
        addressEn: fields.text({
          label: 'Address (English)',
          defaultValue: '800 Hunt Club Rd, Ottawa, ON K1V 1C3',
        }),
        addressFr: fields.text({
          label: 'Address (French)',
          defaultValue: '800, chemin Hunt Club, Ottawa, ON K1V 1C3',
        }),

        // ──────────────────────────────────────────
        // BUSINESS HOURS
        // ──────────────────────────────────────────
        hoursEn: fields.text({
          label: 'Business Hours (English)',
          defaultValue: 'Monday to Sunday: 9AM – 7PM',
        }),
        hoursFr: fields.text({
          label: 'Business Hours (French)',
          defaultValue: 'Lundi au dimanche : 9h – 19h',
        }),

        // ──────────────────────────────────────────
        // SOCIAL MEDIA LINKS
        // ──────────────────────────────────────────
        facebookUrl: fields.text({
          label: 'Facebook URL',
          defaultValue: 'https://facebook.com/allstarcleaningottawa',
        }),
        instagramUrl: fields.text({
          label: 'Instagram URL',
          defaultValue: 'https://www.instagram.com/allstarcleaning.ca',
        }),
        tiktokUrl: fields.text({
          label: 'TikTok URL',
          defaultValue: 'https://www.tiktok.com/@allstarcleaning.ca',
        }),
        googleUrl: fields.text({
          label: 'Google Business URL',
          defaultValue: 'https://g.page/allstarcleaningottawa',
        }),

      },
    }),
  },
});
