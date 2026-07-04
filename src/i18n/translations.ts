const en = {
  site: { name: 'All Star Cleaning', tagline: "Ottawa's Trusted Exterior Cleaning" },
  nav: { home: 'Home', services: 'Services', about: 'About', reviews: 'Reviews', contact: 'Contact', getQuote: 'Get a Free Quote', phone: 'Call Now', area: 'Areas', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  services: { windowCleaning: 'Window Cleaning', gutterCleaning: 'Gutter Cleaning', pressureWashing: 'Pressure Washing', sidingCleaning: 'Siding Cleaning', snowRemoval: 'Snow Removal' },
  footer: { serviceArea: 'Service Area', contactUs: 'Contact Us', followUs: 'Follow Us', hours: 'Hours', weekdayHours: 'Mon–Sun: 9am–7pm', weekendHours: 'Open 7 Days a Week', closed: '', copyright: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service', sitemap: 'Sitemap' },
  cta: { freeQuote: 'Get a Free Quote', callNow: 'Call Now', bookOnline: 'Book Online' },
  trust: { insured: 'Insured & Bonded' },
  ui: { learnMore: 'Learn more', followUs: 'Follow Us' },
  locations: { servingArea: 'Serving the Ottawa Region', findService: 'Find services near you' },
  area: {
    zones: {
      central: 'Central Ottawa',
      east: 'East Ottawa',
      west: 'West Ottawa',
      south: 'South Ottawa',
      southWest: 'South-West Ottawa',
      eastCentral: 'East-Central Ottawa',
      southEast: 'South-East Ottawa',
    },
  },
  terms: { services: 'Services', guarantee: 'Guarantee', contact: 'Contact' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Exterior Cleaning Services', defaultDescription: "Ottawa's trusted exterior cleaning service. Window, gutter, pressure washing, siding & snow removal. Free quotes." },
  servicesPage: {
    heroTitle: 'Our Services',
    heroSubtitle: "From sparkling windows to snow-free driveways, we've got Ottawa covered.",
    trustGuarantee: '100% Satisfaction Guaranteed',
    sectionIncluded: "What's Included",
    sectionWhyChoose: 'Why Choose All Star Cleaning?',
    sectionOther: 'Our other services',
    uspGuaranteedResults: 'Guaranteed Results',
    uspGuaranteedResultsDesc: '100% satisfaction guaranteed on every job.',
    uspProfessionalEquipment: 'Professional Equipment',
    uspProfessionalEquipmentDesc: 'Proven technology for consistent results.',
    uspExperiencedTeam: 'Experienced Team',
    uspExperiencedTeamDesc: 'Trained and insured technicians.',
    uspFreeQuotes: 'Free Quotes',
    uspFreeQuotesDesc: 'Transparent estimates with no obligation.',
    ctaReady: 'Ready to Get Started?',
    ctaDescription: "Contact us for a free quote. We're open 7 days a week!",
    noObligation24h: 'No obligation · 24hr response',
    noObligation4h: 'No obligation · Response within 4 hours during storms',
  },
  usps: {
    expertise: { title: 'Ottawa Winters, Handled', description: 'Freeze-thaw cycles cause ice dams, salt stains, and clogged eavestroughs — we see it every season and know how to fix it right, not just patch it over.' },
    equipment: { title: 'Damage-Free, Not Just Powerful', description: 'Gutter cameras catch hidden clogs before they cause water damage. Soft-wash pressure control means no cracked siding, no stripped paint, no harsh chemicals near your garden.' },
    guarantee: { title: 'Not Happy? We Come Back — Free', description: '100% satisfaction, no fine print. Flexible scheduling around your week, eco-friendly products safe for kids and pets, and spotless results or we fix it at no charge.' },
  },
  contact: {
    phone: '(613) 314-3300',
    phoneLink: '+16133143300',
    email: 'hello@allstarcleaning.ca',
    address: '800 Hunt Club Rd, Ottawa, ON K1V 1C3',
    hours: 'Monday to Sunday: 9AM – 7PM',
  },
  chat: {
    launcherLabel: 'Chat with us',
    panelTitle: 'All Star Cleaning Assistant',
    emptyState: 'Ask us anything about our Ottawa exterior cleaning services.',
    inputPlaceholder: 'Type your message…',
    send: 'Send',
    close: 'Close',
    errorMessage: 'Something went wrong. Please try again or call us directly.',
    rateLimited: 'Too many messages — please wait a moment.',
  },
} as const;

const fr = {
  site: { name: 'All Star Cleaning', tagline: 'Nettoyage Extérieur de Confiance à Ottawa' },
  nav: { home: 'Accueil', services: 'Services', about: 'À Propos', reviews: 'Témoignages', contact: 'Contact', getQuote: 'Obtenez un Devis Gratuit', phone: 'Appelez', area: 'Régions', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation" },
  services: { windowCleaning: 'Nettoyage de Vitres', gutterCleaning: 'Nettoyage de Gouttières', pressureWashing: 'Lavage sous Pression', sidingCleaning: 'Nettoyage de Revêtement', snowRemoval: 'Déneigement' },
  footer: { serviceArea: 'Zone de Service', contactUs: 'Contactez-Nous', followUs: 'Suivez-Nous', hours: 'Heures', weekdayHours: 'Lun–Dim : 9h–19h', weekendHours: 'Ouvert 7 Jours par Semaine', closed: '', copyright: 'Tous droits réservés.', privacy: 'Politique de Confidentialité', terms: "Conditions d'Utilisation", sitemap: 'Plan du Site' },
  cta: { freeQuote: 'Obtenez un Devis Gratuit', callNow: 'Appelez', bookOnline: 'Réservez en Ligne' },
  trust: { insured: 'Assuré & Cautionné' },
  ui: { learnMore: 'En savoir plus', followUs: 'Suivez-nous' },
  locations: { servingArea: "Desservant la Région d'Ottawa", findService: 'Trouvez des services près de chez vous' },
  area: {
    zones: {
      central: 'Ottawa Centre',
      east: 'Ottawa Est',
      west: 'Ottawa Ouest',
      south: 'Ottawa Sud',
      southWest: 'Ottawa Sud-Ouest',
      eastCentral: 'Ottawa Est-Centre',
      southEast: 'Ottawa Sud-Est',
    },
  },
  terms: { services: 'Services', guarantee: 'Garantie', contact: 'Contact' },
  meta: { defaultTitle: 'All Star Cleaning Ottawa | Services de Nettoyage Extérieur', defaultDescription: 'Service de nettoyage extérieur de confiance à Ottawa. Vitres, gouttières, lavage sous pression, revêtement et déneigement. Devis gratuits.' },
  servicesPage: {
    heroTitle: 'Nos Services',
    heroSubtitle: "Des fenêtres étincelantes aux allées déneigées, nous couvrons tout Ottawa.",
    trustGuarantee: 'Satisfaction garantie à 100%',
    sectionIncluded: 'Ce qui est inclus',
    sectionWhyChoose: 'Pourquoi choisir All Star Cleaning?',
    sectionOther: 'Nos autres services',
    uspGuaranteedResults: 'Résultats Garantis',
    uspGuaranteedResultsDesc: 'Satisfaction garantie à 100% sur chaque travail.',
    uspProfessionalEquipment: 'Équipement Professionnel',
    uspProfessionalEquipmentDesc: 'Technologie éprouvée pour des résultats constants.',
    uspExperiencedTeam: 'Équipe Expérimentée',
    uspExperiencedTeamDesc: 'Techniciens formés et assurés.',
    uspFreeQuotes: 'Devis Gratuit',
    uspFreeQuotesDesc: 'Estimations transparentes sans obligation.',
    ctaReady: 'Prêt à commencer?',
    ctaDescription: 'Contactez-nous pour un devis gratuit. Nous sommes ouverts 7 jours par semaine!',
    noObligation24h: 'Sans engagement · Réponse sous 24h',
    noObligation4h: 'Sans engagement · Réponse sous 4h lors des tempêtes',
  },
  usps: {
    expertise: { title: "Les Hivers d'Ottawa, Maîtrisés", description: "Les cycles de gel-dégel causent des barrages de glace, des taches de sel et des gouttières bloquées — nous voyons ça chaque saison et savons régler le problème à la source, pas juste le camoufler." },
    equipment: { title: 'Sans Dommage, Pas Juste Puissant', description: 'Nos caméras de gouttière détectent les blocages cachés avant qu\'ils causent des dégâts d\'eau. Un contrôle de pression en douceur évite les fissures au revêtement, la peinture arrachée, et les produits chimiques agressifs près de votre jardin.' },
    guarantee: { title: 'Pas Satisfait? On Revient — Gratuitement', description: "Satisfaction à 100%, sans petits caractères. Horaires flexibles selon votre semaine, produits écologiques sécuritaires pour enfants et animaux, et des résultats impeccables ou nous corrigeons le tout sans frais." },
  },
  contact: {
    phone: '(613) 314-3300',
    phoneLink: '+16133143300',
    email: 'hello@allstarcleaning.ca',
    address: '800, chemin Hunt Club, Ottawa, ON K1V 1C3',
    hours: 'Lundi au dimanche : 9h – 19h',
  },
  chat: {
    launcherLabel: 'Discuter avec nous',
    panelTitle: 'Assistant All Star Cleaning',
    emptyState: 'Posez-nous une question sur nos services de nettoyage extérieur à Ottawa.',
    inputPlaceholder: 'Écrivez votre message…',
    send: 'Envoyer',
    close: 'Fermer',
    errorMessage: "Une erreur s'est produite. Veuillez réessayer ou appelez-nous directement.",
    rateLimited: 'Trop de messages — veuillez patienter un instant.',
  },
} as const;

export interface Translation {
  site: { name: string; tagline: string };
  nav: { home: string; services: string; about: string; reviews: string; contact: string; getQuote: string; phone: string; area: string; privacy: string; terms: string };
  services: { windowCleaning: string; gutterCleaning: string; pressureWashing: string; sidingCleaning: string; snowRemoval: string };
  footer: { serviceArea: string; contactUs: string; followUs: string; hours: string; weekdayHours: string; weekendHours: string; closed: string; copyright: string; privacy: string; terms: string; sitemap: string };
  cta: { freeQuote: string; callNow: string; bookOnline: string };
  trust: { insured: string };
  ui: { learnMore: string; followUs: string };
  locations: { servingArea: string; findService: string };
  area: { zones: { central: string; east: string; west: string; south: string; southWest: string; eastCentral: string; southEast: string } };
  terms: { services: string; guarantee: string; contact: string };
  meta: { defaultTitle: string; defaultDescription: string };
  servicesPage: {
    heroTitle: string; heroSubtitle: string; trustGuarantee: string;
    sectionIncluded: string; sectionWhyChoose: string; sectionOther: string;
    uspGuaranteedResults: string; uspGuaranteedResultsDesc: string;
    uspProfessionalEquipment: string; uspProfessionalEquipmentDesc: string;
    uspExperiencedTeam: string; uspExperiencedTeamDesc: string;
    uspFreeQuotes: string; uspFreeQuotesDesc: string;
    ctaReady: string; ctaDescription: string;
    noObligation24h: string; noObligation4h: string;
  };
  usps: {
    expertise: { title: string; description: string };
    equipment: { title: string; description: string };
    guarantee: { title: string; description: string };
  };
  contact: {
    phone: string;
    phoneLink: string;
    email: string;
    address: string;
    hours: string;
  };
  chat: {
    launcherLabel: string;
    panelTitle: string;
    emptyState: string;
    inputPlaceholder: string;
    send: string;
    close: string;
    errorMessage: string;
    rateLimited: string;
  };
}

export const translations: Record<'en' | 'fr', Translation> = { en, fr };

export function useTranslations(locale: 'en' | 'fr'): Translation {
  return translations[locale];
}
