import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { locales, localeNames, pageKeys, path, alternates, type PageKey } from '@/content/i18n'

export const dynamic = 'force-static'

/**
 * Nur fuer `next dev`.
 *
 * Mit `output: 'export'` verlangt Next auch von der intern erzeugten Route
 * hinter /sitemap.xml statische Parameter. Beim Build setzt es sie selbst,
 * im Entwicklungsserver nicht — dort endete /sitemap.xml deshalb in einem
 * 500er, obwohl die Datei im Export voellig in Ordnung ist. Diese eine
 * Zeile fuellt die Luecke; am Ergebnis aendert sie nichts.
 */
export function generateStaticParams() {
  return [{ __metadata_id__: [] }]
}

/**
 * Sitemap mit allen vier Sprachen.
 *
 * Jeder Eintrag listet in `alternates.languages` seine Geschwister auf.
 * Das ist dieselbe Aussage wie die hreflang-Tags im <head>, nur an der
 * zweiten Stelle, an der Suchmaschinen sie lesen — beide zu setzen ist
 * die uebliche Praxis, weil nicht jeder Crawler beide Wege geht.
 *
 * Impressum, Datenschutz und die Danke-Seite stehen bewusst NICHT drin:
 * sie sind auf noindex.
 */
const oeffentlich: readonly PageKey[] = ['kaffee', 'roesterei', 'ueberUns', 'kontakt']

export default function sitemap(): MetadataRoute.Sitemap {
  const eintraege: MetadataRoute.Sitemap = []

  const sprachen = (page?: PageKey) => {
    const alts = alternates(page)
    const out: Record<string, string> = {}
    for (const l of locales) out[localeNames[l].htmlLang] = `${site.url}${alts[l]}`
    return out
  }

  for (const lang of locales) {
    eintraege.push({
      url: `${site.url}${path(lang)}`,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: sprachen() },
    })
    for (const key of oeffentlich) {
      eintraege.push({
        url: `${site.url}${path(lang, key)}`,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: sprachen(key) },
      })
    }
  }

  return eintraege
}
