import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { fraunces, inter } from '@/lib/fonts'
import { site, vorLivegang } from '@/content/site'
import { img } from '@/content/images'
import { getDictionary, locales, localeNames, isLocale, type Locale } from '@/content/i18n'
import { ThemaSkript } from '@/components/ThemaSkript'
import '../globals.css'

/**
 * Das ist das Root-Layout: es gibt kein app/layout.tsx darueber.
 *
 * Genau deshalb steht es hier und nicht eine Ebene hoeher — nur an dieser
 * Stelle kennt die Anwendung die Sprache, und `<html lang>` muss die
 * richtige tragen. Ein festes lang="de" auf einer spanischen Seite laesst
 * jeden Screenreader die Seite deutsch aussprechen.
 */

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  if (!isLocale(params.lang)) return {}
  const d = getDictionary(params.lang)
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${d.meta.siteTitle} — ${d.meta.homeTitle}`,
      template: `%s — ${d.meta.siteTitle}`,
    },
    description: d.meta.homeDescription,
    applicationName: d.meta.siteTitle,
    // Vor dem Livegang steht hier noindex — der Schalter dafuer ist
    // `vorLivegang` in content/site.ts. `follow: false` dazu, damit
    // nicht ueber die internen Links doch etwas eingesammelt wird.
    robots: vorLivegang ? { index: false, follow: false } : { index: true, follow: true },
    // Die drei Icon-Dateien liegen in public/, nicht als app/icon.svg.
    // Grund: unter app/ ist die erste Ebene [lang]. Ein Pfad, den der
    // Browser von sich aus anfragt (/favicon.ico), landet sonst in dieser
    // dynamischen Route und der Export-Modus wirft 500, weil "favicon.ico"
    // nicht in generateStaticParams() steht. Dateien in public/ werden vor
    // dem Router ausgeliefert. Ausfuehrlich: docs/icons.md.
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    },
    openGraph: {
      type: 'website',
      locale: localeNames[params.lang].htmlLang.replace('-', '_'),
      siteName: d.meta.siteTitle,
      images: [{ url: img.og.src, width: img.og.w, height: img.og.h, alt: d.alt.og }],
    },
  }
}

export const viewport: Viewport = {
  // Die erste Angabe traegt kein `media` und ist deshalb die, die die
  // Farbschema-Wahl im Browser umschreiben kann. Die beiden darunter
  // greifen, solange niemand etwas gewaehlt hat.
  themeColor: [
    { color: '#fbf7f3' },
    { media: '(prefers-color-scheme: light)', color: '#fbf7f3' },
    { media: '(prefers-color-scheme: dark)', color: '#17110e' },
  ],
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isLocale(params.lang)) notFound()
  const lang: Locale = params.lang
  const d = getDictionary(lang)

  return (
    /* suppressHydrationWarning gilt nur fuer dieses eine Element und nur
       fuer seine Attribute: das Skript unten schreibt data-theme,
       data-wahl und data-js auf <html>, bevor React hydriert. Ohne den
       Hinweis meldet React den Unterschied als Fehler — obwohl er hier
       gewollt ist und das Kind darunter weiterhin normal geprueft wird. */
    <html
      lang={localeNames[lang].htmlLang}
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemaSkript />
      </head>
      <body className="min-h-dvh bg-bg text-fg antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          {d.nav.zumInhalt}
        </a>
        {children}
      </body>
    </html>
  )
}
