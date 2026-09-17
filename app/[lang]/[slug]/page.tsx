import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/metadata'
import {
  getDictionary,
  locales,
  pageKeys,
  slugs,
  pageKeyFromSlug,
  isLocale,
  type Locale,
  type PageKey,
} from '@/content/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Kaffee } from '@/components/pages/Kaffee'
import { Roesterei } from '@/components/pages/Roesterei'
import { UeberUns } from '@/components/pages/UeberUns'
import { Kontakt } from '@/components/pages/Kontakt'
import { Danke } from '@/components/pages/Danke'
import { Impressum } from '@/components/pages/Impressum'
import { Datenschutz } from '@/components/pages/Datenschutz'
import { NichtGefunden } from '@/components/pages/NichtGefunden'

/**
 * Alle Unterseiten in EINER Route.
 *
 * Der Grund: die Slugs sind uebersetzt (/de/kaffee, /en/coffee,
 * /it/caffe, /es/cafe). Ein Ordnername im Dateisystem kann nicht in vier
 * Sprachen gleichzeitig heissen, also wird der Slug zum Parameter und
 * generateStaticParams zaehlt jedes Sprache-Seite-Paar auf. Beim Export
 * entsteht daraus fuer jede Kombination eine fertige HTML-Datei — es ist
 * also nichts dynamisch, es sieht nur im Quelltext so aus.
 *
 * 4 Sprachen x 7 Unterseiten = 28 Seiten, plus 4 Startseiten.
 */

export function generateStaticParams() {
  const params: { lang: Locale; slug: string }[] = []
  for (const lang of locales) for (const key of pageKeys) params.push({ lang, slug: slugs[key][lang] })
  return params
}

/** Die Seiten, die nicht in Suchmaschinen gehoeren. */
const noindex: readonly PageKey[] = ['impressum', 'datenschutz', 'danke', 'nichtGefunden']

function auflösen(params: { lang: string; slug: string }): { lang: Locale; key: PageKey } {
  if (!isLocale(params.lang)) notFound()
  const key = pageKeyFromSlug(params.lang, params.slug)
  if (!key) notFound()
  return { lang: params.lang, key }
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string }
}): Promise<Metadata> {
  if (!isLocale(params.lang)) return {}
  const key = pageKeyFromSlug(params.lang, params.slug)
  if (!key) return {}
  const d = getDictionary(params.lang)

  const titel: Record<PageKey, string> = {
    kaffee: d.meta.kaffeeTitle,
    roesterei: d.meta.roestereiTitle,
    ueberUns: d.meta.ueberUnsTitle,
    kontakt: d.meta.kontaktTitle,
    danke: d.meta.dankeTitle,
    impressum: d.meta.impressumTitle,
    datenschutz: d.meta.datenschutzTitle,
    nichtGefunden: d.nichtGefunden.h1,
  }
  const beschreibung: Record<PageKey, string> = {
    kaffee: d.meta.kaffeeDescription,
    roesterei: d.meta.roestereiDescription,
    ueberUns: d.meta.ueberUnsDescription,
    kontakt: d.meta.kontaktDescription,
    danke: d.meta.dankeDescription,
    impressum: d.meta.impressumDescription,
    datenschutz: d.meta.datenschutzDescription,
    nichtGefunden: d.nichtGefunden.text,
  }

  const meta = pageMeta({
    lang: params.lang,
    page: key,
    title: titel[key],
    description: beschreibung[key],
  })
  return noindex.includes(key) ? { ...meta, robots: { index: false, follow: true } } : meta
}

export default function SlugPage({ params }: { params: { lang: string; slug: string } }) {
  const { lang, key } = auflösen(params)

  const inhalt = {
    kaffee: <Kaffee lang={lang} />,
    roesterei: <Roesterei lang={lang} />,
    ueberUns: <UeberUns lang={lang} />,
    kontakt: <Kontakt lang={lang} />,
    danke: <Danke lang={lang} />,
    impressum: <Impressum lang={lang} />,
    datenschutz: <Datenschutz lang={lang} />,
    nichtGefunden: <NichtGefunden lang={lang} />,
  }[key]

  return (
    <>
      <Header lang={lang} page={key} />
      <main id="inhalt">{inhalt}</main>
      <Footer lang={lang} />
    </>
  )
}
