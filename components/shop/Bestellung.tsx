'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '@/content/i18n/config'
import type { Shop } from '@/content/i18n/types'
import {
  euro,
  gewicht,
  grammFuer,
  maxMenge,
  preisFuer,
  versandFuer,
  type GroesseId,
  type Mahlgrad,
} from '@/content/shop'

/**
 * Die Bestellliste.
 *
 * Ein Kontext, der ueber allen Seiten einer Sprache haengt (im Layout).
 * Weil Next zwischen den Seiten ohne Neuladen wechselt, bleibt die Liste
 * dabei einfach im Speicher. localStorage kommt nur dazu, damit sie auch
 * ein Neuladen uebersteht — und jeder Zugriff darauf steht in try/catch:
 * im privaten Fenster oder bei gesperrtem Speicher wirft der Browser, und
 * dann soll die Seite trotzdem funktionieren, nur eben ohne Gedaechtnis.
 *
 * Kein Cookie, nichts wird uebertragen. Die Liste verlaesst den Browser
 * erst, wenn jemand selbst in WhatsApp oder im Mailprogramm auf Senden
 * tippt. Das steht so auch in der Datenschutzerklaerung, Abschnitt 5.
 */

export type Zeile = {
  readonly kaffee: 0 | 1
  readonly groesse: GroesseId
  readonly mahl: Mahlgrad
  readonly menge: number
}

type Kontext = {
  zeilen: readonly Zeile[]
  anzahl: number
  zwischensumme: number
  versand: number
  gesamt: number
  hinzufuegen: (z: Zeile) => void
  setzeMenge: (index: number, menge: number) => void
  entfernen: (index: number) => void
  leeren: () => void
  offen: boolean
  oeffnen: () => void
  schliessen: () => void
}

const Ctx = createContext<Kontext | null>(null)

const SPEICHER = 'roestwerk-bestellung-v1'

function lesen(): Zeile[] {
  try {
    const roh = window.localStorage.getItem(SPEICHER)
    if (!roh) return []
    const daten = JSON.parse(roh)
    if (!Array.isArray(daten)) return []
    // Nur uebernehmen, was heute noch gueltig ist — eine alte Liste mit
    // einer Groesse, die es nicht mehr gibt, darf die Seite nicht kippen.
    return daten.filter(
      (z): z is Zeile =>
        (z?.kaffee === 0 || z?.kaffee === 1) &&
        ['250', '500', '1000'].includes(z?.groesse) &&
        ['bohne', 'filter', 'siebtraeger'].includes(z?.mahl) &&
        Number.isInteger(z?.menge) &&
        z.menge > 0 &&
        z.menge <= maxMenge,
    )
  } catch {
    return []
  }
}

function schreiben(zeilen: readonly Zeile[]) {
  try {
    if (zeilen.length === 0) window.localStorage.removeItem(SPEICHER)
    else window.localStorage.setItem(SPEICHER, JSON.stringify(zeilen))
  } catch {
    /* Speicher gesperrt — dann eben ohne. */
  }
}

export function BestellungProvider({ children }: { children: ReactNode }) {
  const [zeilen, setZeilen] = useState<Zeile[]>([])
  const [geladen, setGeladen] = useState(false)
  const [offen, setOffen] = useState(false)

  useEffect(() => {
    setZeilen(lesen())
    setGeladen(true)
  }, [])

  useEffect(() => {
    if (geladen) schreiben(zeilen)
  }, [zeilen, geladen])

  const hinzufuegen = useCallback((neu: Zeile) => {
    setZeilen((alt) => {
      const i = alt.findIndex((z) => z.kaffee === neu.kaffee && z.groesse === neu.groesse && z.mahl === neu.mahl)
      if (i === -1) return [...alt, neu]
      const kopie = [...alt]
      kopie[i] = { ...kopie[i], menge: Math.min(maxMenge, kopie[i].menge + neu.menge) }
      return kopie
    })
  }, [])

  const setzeMenge = useCallback((index: number, menge: number) => {
    setZeilen((alt) =>
      menge <= 0
        ? alt.filter((_, i) => i !== index)
        : alt.map((z, i) => (i === index ? { ...z, menge: Math.min(maxMenge, menge) } : z)),
    )
  }, [])

  const entfernen = useCallback((index: number) => {
    setZeilen((alt) => alt.filter((_, i) => i !== index))
  }, [])

  const wert = useMemo<Kontext>(() => {
    const zwischensumme = zeilen.reduce((s, z) => s + preisFuer(z.kaffee, z.groesse) * z.menge, 0)
    const versand = versandFuer(zwischensumme)
    return {
      zeilen,
      anzahl: zeilen.reduce((s, z) => s + z.menge, 0),
      zwischensumme,
      versand,
      gesamt: zwischensumme + versand,
      hinzufuegen,
      setzeMenge,
      entfernen,
      leeren: () => setZeilen([]),
      offen,
      oeffnen: () => setOffen(true),
      schliessen: () => setOffen(false),
    }
  }, [zeilen, offen, hinzufuegen, setzeMenge, entfernen])

  return <Ctx.Provider value={wert}>{children}</Ctx.Provider>
}

export function useBestellung(): Kontext {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useBestellung ausserhalb von <BestellungProvider>')
  return ctx
}

/* ---------------------------------------------------------------------------
 * Die Nachricht.
 *
 * So, wie sie in WhatsApp oder im Mailprogramm ankommt — lesbar fuer
 * einen Menschen, nicht fuer eine Maschine. Eine Zeile pro Posten, darunter
 * die Summen, darunter die zwei Felder, die der Kunde selbst ausfuellt.
 * ------------------------------------------------------------------------- */

export function zeilenText(z: Zeile, namen: readonly [string, string], t: Shop, lang: Locale): string {
  const preis = preisFuer(z.kaffee, z.groesse)
  return `${z.menge} × ${namen[z.kaffee]} · ${gewicht(grammFuer(z.groesse))} · ${t.mahlgrade[z.mahl]} — ${euro(preis * z.menge, lang)}`
}

export function nachricht({
  zeilen,
  namen,
  t,
  lang,
}: {
  zeilen: readonly Zeile[]
  namen: readonly [string, string]
  t: Shop
  lang: Locale
}): string {
  const zwischensumme = zeilen.reduce((s, z) => s + preisFuer(z.kaffee, z.groesse) * z.menge, 0)
  const versand = versandFuer(zwischensumme)
  return [
    t.nachrichtGruss,
    '',
    ...zeilen.map((z) => `• ${zeilenText(z, namen, t, lang)}`),
    '',
    `${t.zwischensumme}: ${euro(zwischensumme, lang)}`,
    `${t.versandkosten}: ${versand === 0 ? t.kostenlos : euro(versand, lang)}`,
    `${t.gesamt}: ${euro(zwischensumme + versand, lang)}`,
    '',
    t.nachrichtFelder,
  ].join('\n')
}

/** „1 Tüte" / „3 Tüten" */
export function stueck(n: number, t: Shop): string {
  return n === 1 ? t.artikelEins : t.artikelViele.replace('{n}', String(n))
}
