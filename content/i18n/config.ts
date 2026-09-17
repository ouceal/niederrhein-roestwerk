/**
 * Sprachen und Routen.
 *
 * Die Slugs sind pro Sprache uebersetzt: /de/kaffee, /en/coffee,
 * /it/caffe, /es/cafe. Das ist aufwaendiger als ein fester Slug fuer alle
 * Sprachen, liest sich aber in jeder Sprache wie eine eigene Seite und
 * nicht wie eine uebersetzte deutsche.
 *
 * Preis dieser Entscheidung, damit er niemanden ueberrascht: eine neue
 * Seite braucht vier Slugs. Fehlt einer, bricht der Build — dafuer sorgt
 * der Typ unten, nicht die Disziplin.
 */

export const locales = ['de', 'en', 'it', 'es'] as const
export type Locale = (typeof locales)[number]

/** Die Sprache, auf die "/" zeigt. Das Geschaeft sitzt in Deutschland. */
export const defaultLocale: Locale = 'de'

/** Was im Umschalter steht. `label` ist der sichtbare Kurzname,
 *  `name` der ausgeschriebene fuer Screenreader und title. */
export const localeNames: Record<Locale, { label: string; name: string; htmlLang: string }> = {
  de: { label: 'DE', name: 'Deutsch', htmlLang: 'de-DE' },
  en: { label: 'EN', name: 'English', htmlLang: 'en' },
  it: { label: 'IT', name: 'Italiano', htmlLang: 'it-IT' },
  es: { label: 'ES', name: 'Español', htmlLang: 'es-ES' },
}

/** Jede Unterseite der Website. Die Startseite hat keinen Slug. */
export const pageKeys = [
  'kaffee',
  'roesterei',
  'ueberUns',
  'kontakt',
  'danke',
  'impressum',
  'datenschutz',
  'nichtGefunden',
] as const
export type PageKey = (typeof pageKeys)[number]

/**
 * Der Slug jeder Seite in jeder Sprache.
 * `Record<PageKey, Record<Locale, string>>` heisst: fehlt eine Sprache
 * oder eine Seite, meldet TypeScript das beim Build.
 */
export const slugs: Record<PageKey, Record<Locale, string>> = {
  kaffee: { de: 'kaffee', en: 'coffee', it: 'caffe', es: 'cafe' },
  roesterei: { de: 'roesterei', en: 'roastery', it: 'torrefazione', es: 'tostaduria' },
  ueberUns: { de: 'ueber-uns', en: 'about', it: 'chi-siamo', es: 'sobre-nosotros' },
  kontakt: { de: 'kontakt', en: 'contact', it: 'contatti', es: 'contacto' },
  danke: { de: 'danke', en: 'thank-you', it: 'grazie', es: 'gracias' },
  impressum: { de: 'impressum', en: 'legal-notice', it: 'note-legali', es: 'aviso-legal' },
  datenschutz: { de: 'datenschutz', en: 'privacy', it: 'privacy', es: 'privacidad' },
  /* Die 404-Seite ist eine echte Seite mit echtem Pfad. Warum, steht in
     components/pages/NichtGefunden.tsx. */
  nichtGefunden: { de: 'nicht-gefunden', en: 'not-found', it: 'non-trovato', es: 'no-encontrado' },
}

/** Umgekehrtes Nachschlagen: aus (Sprache, Slug) die Seite finden. */
export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | null {
  for (const key of pageKeys) if (slugs[key][locale] === slug) return key
  return null
}

/** Der Pfad einer Seite, immer mit Schraegstrich am Ende (trailingSlash). */
export function path(locale: Locale, page?: PageKey): string {
  return page ? `/${locale}/${slugs[page][locale]}/` : `/${locale}/`
}

/** Alle Sprachfassungen einer Seite — fuer hreflang und den Umschalter. */
export function alternates(page?: PageKey): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, path(l, page)])) as Record<Locale, string>
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
