// src/seoConfig.ts
import type { SupportedLanguage, PageSlug } from "./routes";

type SeoEntry = {
  title: string;
  description: string;
};

type SeoConfig = {
  [page in PageSlug]: {
    [lang in SupportedLanguage]: SeoEntry;
  };
};

// Burada 5 dil (tr, en, de, pl, fr) için her sayfaya title + description veriyoruz.
export const seoConfig: SeoConfig = {
  home: {
    tr: {
      title: "LinJet Havacılık | Business Jet Operasyonu ve Uçak Yönetimi",
      description:
        "LinJet Havacılık, business jet operasyonları ve uçak yönetimi hizmetleri sunar. AOC altında uçuş desteği ve uçak sahipleri için şeffaf işletme çözümleri."
    },
    en: {
      title: "LinJet Aviation | Business Jet Operations and Aircraft Management",
      description:
        "LinJet Aviation provides business jet operations and aircraft management under AOC authority. Transparent services and tailored solutions for aircraft owners."
    },
    de: {
      title: "LinJet Aviation | Geschäftsjet-Operationen und Flugzeugverwaltung",
      description:
        "LinJet Aviation bietet Geschäftsjet-Operationen und Flugzeugverwaltung unter AOC. Transparente Services und individuelle Lösungen für Flugzeugeigentümer."
    },
    pl: {
      title: "LinJet Aviation | Operacje Business Jet i Zarządzanie Samolotami",
      description:
        "LinJet Aviation oferuje operacje business jet i zarządzanie samolotami w ramach AOC. Przejrzyste usługi i rozwiązania dla właścicieli samolotów."
    },
    fr: {
      title: "LinJet Aviation | Opérations Jet d’Affaires et Gestion d’Avions",
      description:
        "LinJet Aviation propose des opérations de jets d’affaires et la gestion d’avions sous AOC. Services transparents et solutions dédiées aux propriétaires."
    }
  },

  about: {
    tr: {
      title: "LinJet Havacılık | Hakkımızda",
      description:
        "LinJet Havacılık, AOC yetkisi ile iş jetleri için uçuş operasyonu ve uçak yönetimi sunan, güven ve şeffaflık odaklı bir business aviation operatörüdür."
    },
    en: {
      title: "LinJet Aviation | About Us",
      description:
        "LinJet Aviation is a business jet operator providing AOC-based flight operations and aircraft management with a focus on safety, transparency and owner support."
    },
    de: {
      title: "LinJet Aviation | Über Uns",
      description:
        "LinJet Aviation ist ein Geschäftsjet-Betreiber mit AOC, der sichere Flugoperationen und transparente Flugzeugverwaltung für Eigentümer anbietet."
    },
    pl: {
      title: "LinJet Aviation | O nas",
      description:
        "LinJet Aviation to operator business jet z AOC, oferujący bezpieczne operacje lotnicze i przejrzyste zarządzanie samolotami dla właścicieli."
    },
    fr: {
      title: "LinJet Aviation | À propos",
      description:
        "LinJet Aviation est un opérateur de jets d’affaires doté d’un AOC, offrant des opérations fiables et une gestion transparente des avions pour les propriétaires."
    }
  },

  services: {
    tr: {
      title: "LinJet Havacılık | Hizmetlerimiz",
      description:
        "Business jet operasyonu, uçak yönetimi, uçak sahibi danışmanlığı, uçuş desteği ve CAMO koordinasyonu ile uçak işletmenizi uçtan uca yönetiyoruz."
    },
    en: {
      title: "LinJet Aviation | Our Services",
      description:
        "We deliver business jet operations, aircraft management, owner advisory, flight support and CAMO coordination for fully managed private aviation."
    },
    de: {
      title: "LinJet Aviation | Unsere Leistungen",
      description:
        "Geschäftsjet-Operationen, Flugzeugverwaltung, Eigentümerberatung, Flight Support und CAMO-Koordination aus einer Hand."
    },
    pl: {
      title: "LinJet Aviation | Usługi",
      description:
        "Oferujemy operacje business jet, zarządzanie samolotami, doradztwo dla właścicieli, wsparcie operacji lotniczych oraz koordynację CAMO."
    },
    fr: {
      title: "LinJet Aviation | Nos Services",
      description:
        "Opérations de jets d’affaires, gestion d’avions, conseil aux propriétaires, support de vol et coordination CAMO pour une aviation privée gérée."
    }
  },

  contact: {
    tr: {
      title: "LinJet Havacılık | İletişim",
      description:
        "Business jet operasyonu ve uçak yönetimi ihtiyaçlarınız için LinJet Havacılık ile iletişime geçin. Uçak sahipleri ve kurumsal müşteriler için özel çözümler sunuyoruz."
    },
    en: {
      title: "LinJet Aviation | Contact",
      description:
        "Contact LinJet Aviation for business jet operations and aircraft management services. Tailored solutions for aircraft owners and corporate clients."
    },
    de: {
      title: "LinJet Aviation | Kontakt",
      description:
        "Kontaktieren Sie LinJet Aviation für Geschäftsjet-Operationen und Flugzeugverwaltung. Individuelle Lösungen für Eigentümer und Unternehmen."
    },
    pl: {
      title: "LinJet Aviation | Kontakt",
      description:
        "Skontaktuj się z LinJet Aviation w sprawie operacji business jet i zarządzania samolotami. Rozwiązania dopasowane do właścicieli i firm."
    },
    fr: {
      title: "LinJet Aviation | Contact",
      description:
        "Contactez LinJet Aviation pour les opérations de jets d’affaires et la gestion d’avions. Solutions sur mesure pour propriétaires et clients corporate."
    }
  },

  booking: {
    tr: {
      title: "LinJet Havacılık | Uçuş Talebi",
      description:
        "Business jet uçuş talebinizi LinJet Havacılık üzerinden iletin. AOC altında güvenli ve planlı iş jeti operasyonları sunuyoruz."
    },
    en: {
      title: "LinJet Aviation | Flight Request",
      description:
        "Submit your business jet flight request with LinJet Aviation. Safe and professionally managed AOC-based jet operations."
    },
    de: {
      title: "LinJet Aviation | Fluganfrage",
      description:
        "Stellen Sie Ihre Geschäftsjet-Fluganfrage bei LinJet Aviation. Sicher geplante und professionell geführte AOC-Operationen."
    },
    pl: {
      title: "LinJet Aviation | Zapytanie o lot",
      description:
        "Wyślij zapytanie o lot business jet z LinJet Aviation. Bezpieczne operacje w oparciu o AOC i profesjonalne planowanie lotów."
    },
    fr: {
      title: "LinJet Aviation | Demande de Vol",
      description:
        "Envoyez votre demande de vol en jet d’affaires avec LinJet Aviation. Opérations sous AOC gérées de manière sûre et professionnelle."
    }
  },

  privacy: {
    tr: {
      title: "LinJet Havacılık | Gizlilik Politikası",
      description:
        "LinJet Havacılık, kişisel verilerinizi gizlilik politikası kapsamında güvenle işler ve yalnızca gerekli operasyonel amaçlar için kullanır."
    },
    en: {
      title: "LinJet Aviation | Privacy Policy",
      description:
        "LinJet Aviation protects your personal data under its privacy policy and uses it only for essential operational purposes."
    },
    de: {
      title: "LinJet Aviation | Datenschutzerklärung",
      description:
        "LinJet Aviation verarbeitet Ihre personenbezogenen Daten gemäß der Datenschutzerklärung und nutzt sie nur für betriebliche Zwecke."
    },
    pl: {
      title: "LinJet Aviation | Polityka prywatności",
      description:
        "LinJet Aviation chroni Twoje dane osobowe zgodnie z polityką prywatności i wykorzystuje je wyłącznie do celów operacyjnych."
    },
    fr: {
      title: "LinJet Aviation | Politique de Confidentialité",
      description:
        "LinJet Aviation protège vos données personnelles conformément à sa politique de confidentialité et les utilise uniquement à des fins opérationnelles."
    }
  },

  terms: {
    tr: {
      title: "LinJet Havacılık | Kullanım Şartları",
      description:
        "LinJet Havacılık web sitesi ve hizmetlerinin kullanımına ilişkin şartlar ve koşullar. Lütfen dikkatlice okuyunuz."
    },
    en: {
      title: "LinJet Aviation | Terms of Use",
      description:
        "Terms and conditions for the use of LinJet Aviation’s website and services. Please read carefully before using our platform."
    },
    de: {
      title: "LinJet Aviation | Nutzungsbedingungen",
      description:
        "Nutzungsbedingungen für die Website und Dienste von LinJet Aviation. Bitte lesen Sie diese Bedingungen sorgfältig."
    },
    pl: {
      title: "LinJet Aviation | Warunki korzystania",
      description:
        "Warunki korzystania z serwisu i usług LinJet Aviation. Prosimy o uważne zapoznanie się z treścią."
    },
    fr: {
      title: "LinJet Aviation | Conditions d’Utilisation",
      description:
        "Conditions d’utilisation du site et des services de LinJet Aviation. Veuillez les lire attentivement avant toute utilisation."
    }
  }
};
