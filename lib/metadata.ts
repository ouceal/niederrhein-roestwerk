import type { Metadata } from 'next'
import { site } from '@/content/site'
import { img } from '@/content/images'
import { getDictionary, localeNames, path, alternates, type Locale, type PageKey } from '@/content/i18n'

/**
 * Metadaten einer Seite, inklusive hreflang.
 *
 * hreflang ist der Teil, der bei mehrsprachigen Seiten am haeufigsten
 * fehlt: jede Sprachfassung muss ALLE anderen nennen, sich selbst
 * eingeschlossen, sonst behandelt eine Suchmaschine sie als getrennte
 * Seiten statt als Uebersetzungen voneinander. Dazu x-default, das sagt,
 * wohin jemand ohne passende Sprache geschickt wird.
 */
export function pageMeta({
  lang,
  page,
  title,
  description,
}: {
  lang: Locale
  page?: PageKey
  title: string
  description: string
}): Metadata {
  const d = getDictionary(lang)
  const url = `${site.url}${path(lang, page)}`
  const alts = alternates(page)

  const languages: Record<string, string> = {}
  for (const [l, p] of Object.entries(alts)) {
    languages[localeNames[l as Locale].htmlLang] = `${site.url}${p}`
  }
  languages['x-default'] = `${site.url}${alts.de}`

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      locale: localeNames[lang].htmlLang.replace('-', '_'),
      siteName: d.meta.siteTitle,
      title: `${title} — ${d.meta.siteTitle}`,
      description,
      url,
      images: [{ url: `${site.url}${img.og.src}`, width: img.og.w, height: img.og.h, alt: d.alt.og }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${d.meta.siteTitle}`,
      description,
      images: [`${site.url}${img.og.src}`],
    },
  }
}
