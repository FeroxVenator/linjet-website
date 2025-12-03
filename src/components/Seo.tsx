// src/components/Seo.tsx
import { useEffect } from 'react'
import { seoConfig, SeoPage, Lang } from '../seoConfig'

interface SeoProps {
  lang: Lang
  page: SeoPage
}

export function Seo({ lang, page }: SeoProps) {
  useEffect(() => {
    const pageConfig = seoConfig[page][lang]
    if (!pageConfig) return

    const { title, description } = pageConfig

    // <title>
    document.title = title

    // <meta name="description">
    let descMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.name = 'description'
      document.head.appendChild(descMeta)
    }
    descMeta.content = description

    // OpenGraph title/description (opsiyonel ama güzel)
    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]'
    )
    if (ogTitle) ogTitle.content = title

    const ogDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]'
    )
    if (ogDesc) ogDesc.content = description

    const twitterTitle = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:title"]'
    )
    if (twitterTitle) twitterTitle.content = title

    const twitterDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]'
    )
    if (twitterDesc) twitterDesc.content = description
  }, [lang, page])

  return null
}
