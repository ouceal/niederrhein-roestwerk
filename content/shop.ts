import { site } from './site'
import { localeNames, type Locale } from './i18n/config'

/* ============================================================================
 *  SHOP — Preise, Groessen, Versand, Bestellweg.
 *
 *  Alles, was eine Zahl ist, steht HIER und nur hier. Die Texte drumherum
 *  stehen in den vier Woerterbuechern unter `shop`.
 *
 *  Der Bestellweg ist bewusst kein Checkout: Wer bestellt, schickt uns
 *  seine Bestellung als vorausgefuellte Nachricht per WhatsApp oder
 *  E-Mail. Wir bestaetigen Verfuegbarkeit, Roestdatum und Zahlung — erst
 *  mit dieser Bestaetigung kommt der Vertrag zustande. Die Seite selbst
 *  nimmt also keine Zahlung an und setzt keinen Cookie.
 *
 *  Preise in CENT, damit nie mit Kommazahlen gerechnet wird.
 * ==========================================================================*/

export type GroesseId = '250' | '500' | '1000'

export const groessen: readonly { readonly id: GroesseId; readonly gramm: number; readonly preis: number }[] = [
  { id: '250', gramm: 250, preis: 1290 },
  { id: '500', gramm: 500, preis: 2390 },
  { id: '1000', gramm: 1000, preis: 4490 },
]

/** Beide Kaffees kosten dasselbe. Wird das anders, bekommt jeder Kaffee
 *  hier seine eigene Liste — die Komponenten fragen ohnehin `preisFuer()`. */
export function preisFuer(_kaffee: 0 | 1, groesse: GroesseId): number {
  return groessen.find((g) => g.id === groesse)!.preis
}

export function grammFuer(groesse: GroesseId): number {
  return groessen.find((g) => g.id === groesse)!.gramm
}

/** Grundpreis je 1 kg nach § 4 PAngV — in Cent. */
export function grundpreisJeKg(preis: number, gramm: number): number {
  return Math.round((preis * 1000) / gramm)
}

export const mahlgrade = ['bohne', 'filter', 'siebtraeger'] as const
export type Mahlgrad = (typeof mahlgrade)[number]

/** Hoechstmenge pro Zeile. Wer mehr will, landet bei den Grossmengen. */
export const maxMenge = 10

export const versand = {
  /** Versandkosten innerhalb Deutschlands, in Cent. */
  kosten: 490,
  /** Ab diesem Warenwert versandkostenfrei, in Cent. */
  freiAb: 4000,
} as const

export function versandFuer(zwischensumme: number): number {
  if (zwischensumme === 0) return 0
  return zwischensumme >= versand.freiAb ? 0 : versand.kosten
}

/**
 * Wohin die Bestellung geht.
 *
 * WhatsApp: Nummer im internationalen Format OHNE +, ohne Leerzeichen —
 * so will es wa.me. 01521 6629522 → 4915216629522.
 *
 * TODO vor Launch: E-Mail-Adresse in content/site.ts eintragen.
 */
export const bestellKanal = {
  whatsapp: '4915216629522',
  whatsappAnzeige: '+49 1521 6629522',
  email: site.contact.email,
} as const

export function whatsappLink(text: string): string {
  return `https://wa.me/${bestellKanal.whatsapp}?text=${encodeURIComponent(text)}`
}

export function mailLink(betreff: string, text: string): string {
  return `mailto:${bestellKanal.email}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(text)}`
}

/** 12,90 € in der Schreibweise der Seitensprache. */
export function euro(cent: number, lang: Locale): string {
  return new Intl.NumberFormat(localeNames[lang].htmlLang, {
    style: 'currency',
    currency: 'EUR',
  }).format(cent / 100)
}

/** 250 g / 1 kg */
export function gewicht(gramm: number): string {
  return gramm >= 1000 ? `${gramm / 1000} kg` : `${gramm} g`
}
