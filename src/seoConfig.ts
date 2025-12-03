// src/seoConfig.ts
export type Lang = 'tr' | 'en' | 'de' | 'pl' | 'fr'
export type SeoPage = 'home' // ileride 'about' | 'services' vs. ekleyebilirsin

type SeoEntry = {
  title: string
  description: string
}

type SeoConfig = {
  [P in SeoPage]: Record<Lang, SeoEntry>
}

export const seoConfig: SeoConfig = {
  home: {
    tr: {
      title: 'LinJet Havacılık | Business Jet Operasyonu ve Uçak Yönetimi',
      description:
        'LinJet Havacılık, business jet operasyonları ve uçak yönetimi hizmetleri sunar. AOC altında uçuş desteği ve uçak sahipleri için şeffaf işletme çözümleri.'
    },
    en: {
      title: 'LinJet Aviation | Business Jet Operations and Aircraft Management',
      description:
        'LinJet Aviation provides business jet operations and aircraft management under AOC authority. Transparent services and tailored solutions for aircraft owners.'
    },
    de: {
      title:
        'LinJet Aviation | Geschäftsjet-Operationen und Flugzeugverwaltung',
      description:
        'LinJet Aviation bietet Geschäftsjet-Operationen und Flugzeugverwaltung unter AOC. Transparente Services und individuelle Lösungen für Flugzeugeigentümer.'
    },
    pl: {
      title:
        'LinJet Aviation | Operacje Business Jet i Zarządzanie Samolotami',
      description:
        'LinJet Aviation oferuje operacje business jet i zarządzanie samolotami w ramach AOC. Przejrzyste usługi i rozwiązania dla właścicieli samolotów.'
    },
    fr: {
      title:
        'LinJet Aviation | Opérations Jet d’Affaires et Gestion d’Avions',
      description:
        'LinJet Aviation propose des opérations jet d’affaires et gestion d’avions sous AOC. Services transparents et solutions dédiées aux propriétaires.'
    }
  }
}
