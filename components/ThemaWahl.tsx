'use client'

import { useEffect, useRef, useState } from 'react'
import { SPEICHER } from './ThemaSkript'

/**
 * Farbschema: System, Hell, Dunkel.
 *
 * Drei Zustaende, nicht zwei. „System" ist die Voreinstellung und fuer
 * die meisten die richtige — ein Telefon schaltet abends von selbst um,
 * und ein Umschalter mit nur zwei Stellungen nimmt einem genau das weg,
 * ohne Weg zurueck. Deshalb ist „System" kein dritter Sonderfall,
 * sondern der Ausgangspunkt.
 *
 * Was hier NICHT passiert: React entscheidet nicht, welches Symbol im
 * Knopf steht und an welchem Eintrag das Haekchen sitzt. Das macht CSS
 * anhand der Attribute auf <html> (siehe globals.css). Der Grund ist
 * die Hydration: der Server kennt die Wahl des Besuchers nicht und kann
 * sie nicht kennen. Wuerde React sie beim ersten Durchlauf rendern,
 * widerspraeche das Markup dem, was der Browser schon stehen hat.
 * CSS hat dieses Problem nicht — es liest die Attribute beim ersten
 * Bild und ist damit sogar schneller.
 *
 * `aria-checked` geht nicht in CSS. Es kommt deshalb aus dem Zustand,
 * der bewusst mit `null` startet: Server und erster Durchlauf im
 * Browser rendern dasselbe, der Effekt setzt danach den wahren Wert.
 * Sichtbar ist da laengst das Richtige.
 */

type Wahl = 'system' | 'hell' | 'dunkel'

export function ThemaWahl({
  aria,
  system,
  hell,
  dunkel,
}: {
  aria: string
  system: string
  hell: string
  dunkel: string
}) {
  const box = useRef<HTMLDetailsElement>(null)
  const [wahl, setWahl] = useState<Wahl | null>(null)

  // Was das Skript im <head> entschieden hat, hier nachlesen — nicht
  // neu entscheiden. Zwei Stellen, die dasselbe ausrechnen, laufen
  // frueher oder spaeter auseinander.
  useEffect(() => {
    const w = document.documentElement.dataset.wahl
    setWahl(w === 'hell' || w === 'dunkel' ? w : 'system')
  }, [])

  // Solange „System" gewaehlt ist, muss die Seite dem Betriebssystem
  // auch dann folgen, wenn es waehrend des Besuchs umschaltet — beim
  // Sonnenuntergang zum Beispiel. Ohne diesen Horcher bliebe sie auf
  // dem Stand des Seitenaufrufs stehen.
  useEffect(() => {
    if (wahl !== 'system') return
    const mm = window.matchMedia('(prefers-color-scheme: dark)')
    const folgen = () => anwenden('system')
    mm.addEventListener('change', folgen)
    return () => mm.removeEventListener('change', folgen)
  }, [wahl])

  // Escape, Klick daneben, Fokus verlassen — dasselbe wie bei der
  // Sprachwahl, aus demselben Grund: <details> kann das nicht allein.
  useEffect(() => {
    const el = box.current
    if (!el) return
    const zu = () => {
      if (el.open) el.open = false
    }
    const beiTaste = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !el.open) return
      zu()
      el.querySelector('summary')?.focus()
    }
    const beiZeiger = (e: PointerEvent) => {
      if (el.open && !el.contains(e.target as Node)) zu()
    }
    const beiFokusweg = (e: FocusEvent) => {
      if (el.open && !el.contains(e.relatedTarget as Node | null)) zu()
    }
    document.addEventListener('keydown', beiTaste)
    document.addEventListener('pointerdown', beiZeiger)
    el.addEventListener('focusout', beiFokusweg)
    return () => {
      document.removeEventListener('keydown', beiTaste)
      document.removeEventListener('pointerdown', beiZeiger)
      el.removeEventListener('focusout', beiFokusweg)
    }
  }, [])

  function anwenden(w: Wahl) {
    const r = document.documentElement
    const dunkelJetzt =
      w === 'dunkel' ||
      (w === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    r.dataset.theme = dunkelJetzt ? 'dark' : 'light'
    r.dataset.wahl = w

    // Die Farbe der Browserleiste auf dem Telefon mitziehen. Ohne das
    // bleibt oben ein heller Streifen ueber einer dunklen Seite stehen.
    const meta = document.querySelector('meta[name="theme-color"]:not([media])')
    if (meta) meta.setAttribute('content', dunkelJetzt ? '#17110e' : '#fbf7f3')

    try {
      // „System" heisst: kein Eintrag. Ein gespeichertes „system" waere
      // dasselbe, aber so bleibt der Speicher leer, wenn nie etwas
      // gewaehlt wurde oder die Wahl zurueckgenommen wird.
      if (w === 'system') localStorage.removeItem(SPEICHER)
      else localStorage.setItem(SPEICHER, w)
    } catch {
      // Privates Fenster, Speicher gesperrt: die Wahl gilt fuer diesen
      // Besuch und ist beim naechsten wieder weg. Kein Grund, hier
      // etwas abzubrechen.
    }
  }

  function waehlen(w: Wahl) {
    anwenden(w)
    setWahl(w)
    if (box.current) box.current.open = false
  }

  const eintraege: { wert: Wahl; text: string }[] = [
    { wert: 'system', text: system },
    { wert: 'hell', text: hell },
    { wert: 'dunkel', text: dunkel },
  ]

  return (
    <div className="themawahl">
      <details ref={box} className="relative">
        <summary aria-label={aria}>
          {/* Beide Symbole stehen im Markup, CSS zeigt das passende.
              aria-hidden, weil der Knopf seinen Namen aus aria-label hat. */}
          <svg
            className="thema-sonne"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2L3.1 3.1"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="thema-mond"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M13.4 9.6A5.8 5.8 0 0 1 6.4 2.6a5.9 5.9 0 1 0 7 7z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </summary>

        {/* Kein role="menu": das hier ist eine Offenlegung, kein
            Menue-Widget. Drei Schalter mit aria-pressed sagen dasselbe
            und bringen keine Tastaturpflichten mit, die man dann von
            Hand nachbauen und pflegen muesste. */}
        <ul
          className="absolute left-0 z-50 mt-2 min-w-[9.5rem] overflow-hidden rounded-sm border border-line bg-surface py-1 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] sm:left-auto sm:right-0"
        >
          {eintraege.map((e) => (
            <li key={e.wert}>
              <button
                type="button"
                aria-pressed={wahl === null ? undefined : wahl === e.wert}
                onClick={() => waehlen(e.wert)}
                data-fuer={e.wert}
                className="thema-eintrag flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-fg transition-colors hover:bg-bg"
              >
                <svg
                  className="thema-haken"
                  data-fuer={e.wert}
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M1 4.6L4.3 8 11 1"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {e.text}
              </button>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
