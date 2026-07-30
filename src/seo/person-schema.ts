// Schema.org Person JSON-LD — All Star Cleaning — Astro v6
export function getFounderSchema(locale: 'en' | 'fr') {
  return {
    '@type': 'Person',
    name: 'All Star Cleaning',
    jobTitle: locale === 'fr' ? 'Fondateur et Propriétaire' : 'Founder & Owner',
    description: locale === 'fr'
      ? "Fondateur d'All Star Cleaning, offrant des services de nettoyage extérieur de confiance à Ottawa. Expert en nettoyage de vitres, gouttières, lavage sous pression et revêtement."
      : 'Founder of All Star Cleaning, providing trusted exterior cleaning services in Ottawa. Expert in window cleaning, gutter cleaning, pressure washing, and siding cleaning.',
    knowsAbout: locale === 'fr'
      ? ['Nettoyage de vitres', 'Nettoyage de gouttières', 'Lavage sous pression', 'Nettoyage de revêtement', 'Services résidentiels Ottawa']
      : ['Window Cleaning', 'Gutter Cleaning', 'Pressure Washing', 'Siding Cleaning', 'Residential Services Ottawa'],
    worksFor: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'All Star Cleaning',
      url: 'https://allstarcleaning.ca',
    },
  };
}
