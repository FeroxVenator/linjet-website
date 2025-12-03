// src/components/Seo.tsx
import { useEffect } from "react";
import { seoConfig } from "../seoConfig";
import type { SupportedLanguage, PageSlug } from "../routes";

interface SeoProps {
  lang: SupportedLanguage;
  page: PageSlug;
}

export function Seo({ lang, page }: SeoProps) {
  useEffect(() => {
    const pageConfig = seoConfig[page]?.[lang];
    if (!pageConfig) return;

    const { title, description } = pageConfig;

    // <html lang="xx">
    if (document?.documentElement) {
      document.documentElement.lang = lang;
    }

    // <title>
    document.title = title;

    // <meta name="description">
    let descMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.name = "description";
      document.head.appendChild(descMeta);
    }
    descMeta.content = description;

    // Open Graph title & description
    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]'
    );
    if (ogTitle) ogTitle.content = title;

    const ogDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]'
    );
    if (ogDesc) ogDesc.content = description;

    // Twitter title & description
    const twitterTitle = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:title"]'
    );
    if (twitterTitle) twitterTitle.content = title;

    const twitterDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]'
    );
    if (twitterDesc) twitterDesc.content = description;
  }, [lang, page]);

  return null;
}
