// URL routing configuration for multi-language support

export type PageSlug = 'home' | 'about' | 'services' | 'contact' | 'booking' | 'privacy' | 'terms';

export const routeConfig: Record<string, Record<PageSlug, string>> = {
  tr: {
    home: '',
    about: 'hakkimizda',
    services: 'hizmetlerimiz',
    contact: 'iletisim',
    booking: 'randevu',
    privacy: 'gizlilik',
    terms: 'kosullar',
  },
  en: {
    home: '',
    about: 'about',
    services: 'services',
    contact: 'contact',
    booking: 'booking',
    privacy: 'privacy',
    terms: 'terms',
  },
  de: {
    home: '',
    about: 'uber-uns',
    services: 'dienstleistungen',
    contact: 'kontakt',
    booking: 'buchung',
    privacy: 'datenschutz',
    terms: 'bedingungen',
  },
  pl: {
    home: '',
    about: 'o-nas',
    services: 'uslugi',
    contact: 'kontakt',
    booking: 'rezerwacja',
    privacy: 'prywatnosc',
    terms: 'warunki',
  },
  fr: {
    home: '',
    about: 'a-propos',
    services: 'services',
    contact: 'contact',
    booking: 'reservation',
    privacy: 'confidentialite',
    terms: 'conditions',
  },
};

export const supportedLanguages = ['tr', 'en', 'de', 'pl', 'fr'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

// Generate path for a specific language and page
export function getPath(lang: SupportedLanguage, page: PageSlug): string {
  const slug = routeConfig[lang][page];
  return `/${lang}${slug ? `/${slug}` : ''}`;
}

// Parse URL to get language and page
export function parseUrl(pathname: string): { lang: SupportedLanguage; page: PageSlug } | null {
  const parts = pathname.split('/').filter(Boolean);
  
  if (parts.length === 0) {
    return null; // Will redirect to default language
  }

  const lang = parts[0] as SupportedLanguage;
  if (!supportedLanguages.includes(lang)) {
    return null;
  }

  if (parts.length === 1) {
    return { lang, page: 'home' };
  }

  const slug = parts[1];
  const pageEntry = Object.entries(routeConfig[lang]).find(([_, s]) => s === slug);
  
  if (!pageEntry) {
    return { lang, page: 'home' }; // Fallback to home if page not found
  }

  return { lang, page: pageEntry[0] as PageSlug };
}
