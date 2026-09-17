import type { MetadataRoute } from 'next'
import { site, vorLivegang } from '@/content/site'
import { locales, slugs } from '@/content/i18n'

export const dynamic = 'force-static'

/**
 * Die Danke-Seite wird in jeder Sprache ausgeschlossen. Sie ist nur das
 * Ziel eines abgeschickten Formulars und hat in einem Suchergebnis
 * nichts verloren.
 */
export default function robots(): MetadataRoute.Robots {
  // Vor dem Livegang: alles dicht, und keine Sitemap. Eine Sitemap
  // einzureichen und gleichzeitig um Nichtbeachtung zu bitten, waere
  // ein Widerspruch — Suchmaschinen folgen dann gern der Sitemap.
  if (vorLivegang) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  const disallow = locales.map((l) => `/${l}/${slugs.danke[l]}/`)
  return {
    rules: { userAgent: '*', allow: '/', disallow },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
