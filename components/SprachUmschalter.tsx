'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { locales, localeNames, path, type Locale, type PageKey } from '@/content/i18n'

/**
 * Sprachwahl als aufklappbarer Knopf.
 *
 * Warum <details> und nicht ein selbstgebautes Menue:
 * <details> kann auf- und zuklappen, ohne dass eine einzige Zeile
 * JavaScript laeuft. Der Knopf ist mit der Tastatur bedienbar, der
 * Browser meldet „aufgeklappt/zugeklappt" von sich aus an den
 * Screenreader, und wenn das Skript gar nicht erst ankommt,
 * funktioniert die Sprachwahl trotzdem. Ein Menue aus <div> und
 * onClick kann das alles nicht.
 *
 * Das Skript unten fuegt nur hinzu, was <details> von Haus aus fehlt:
 * Escape, Klick daneben, Fokus verlassen. Es SCHLIESST nur — es baut
 * nichts um und rendert nichts nach. Deshalb kann es die Hydration
 * nicht stoeren, und deshalb ist der Zustand ohne Skript kein
 * Notbehelf, sondern derselbe Zustand mit weniger Komfort.
 *
 * Im Panel steht der Name jeder Sprache in ihrer eigenen Sprache
 * („Español", nicht „Spanisch"). Wer nach seiner Sprache sucht, sucht
 * nach dem Wort, das er kennt — nicht nach der Uebersetzung in eine
 * Sprache, die er gerade nicht liest.
 *
 * Jeder Link zeigt auf DIESELBE Seite in der anderen Sprache, nicht auf
 * deren Startseite: wer auf /de/roesterei/ umschaltet, landet auf
 * /en/roastery/ und nicht wieder ganz vorn.
 */

export function SprachUmschalter({
  aktuell,
  page,
  label,
  wortSprache,
  variante = 'knopf',
}: {
  aktuell: Locale
  page?: PageKey
  /** aria-label der Navigation, z. B. „Sprache wählen" */
  label: string
  /** nur das Wort „Sprache" — ergibt mit dem Namen „Sprache: Deutsch" */
  wortSprache: string
  /**
   * `knopf` klappt auf, `liste` zeigt alles nebeneinander.
   *
   * Im schmalen Menue ist die Liste richtig: dort ist ohnehin schon
   * aufgeklappt, und ein Aufklappen im Aufgeklappten ist eine Tuer
   * hinter einer Tuer. Die vier Sprachen stehen dort als Plaettchen
   * nebeneinander — ein Fingertipp statt zwei.
   */
  variante?: 'knopf' | 'liste'
}) {
  const box = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (variante !== 'knopf') return
    const el = box.current
    if (!el) return

    const zu = () => {
      if (el.open) el.open = false
    }

    const beiTaste = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || !el.open) return
      zu()
      // Der Fokus muss zurueck auf den Knopf. Sonst steht er im Nichts
      // und die naechste Tabulator-Taste springt an den Seitenanfang.
      el.querySelector('summary')?.focus()
    }

    const beiZeiger = (e: PointerEvent) => {
      if (el.open && !el.contains(e.target as Node)) zu()
    }

    // Tab aus dem letzten Eintrag heraus schliesst ebenfalls. `relatedTarget`
    // ist das Element, das den Fokus bekommt — liegt es ausserhalb, ist die
    // Liste durch.
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
  }, [variante])

  if (variante === 'liste') {
    return (
      <nav aria-label={label}>
        <ul className="flex flex-wrap gap-2">
          {locales.map((l) => {
            const ist = l === aktuell
            return (
              <li key={l}>
                <a
                  href={path(l, page)}
                  hrefLang={localeNames[l].htmlLang}
                  lang={localeNames[l].htmlLang}
                  aria-current={ist ? 'true' : undefined}
                  className="plaettchen font-sans tracking-[0.1em]"
                >
                  <span className="sr-only">{localeNames[l].name}</span>
                  <span aria-hidden="true">{localeNames[l].label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label={label}>
      <details ref={box} className="sprachwahl relative">
        <summary className="sprachwahl-knopf">
          {/* Der zugaengliche Name des Knopfs. Sichtbar steht nur das
              Kuerzel; „DE" allein vorgelesen ist nichts wert. */}
          <span className="sr-only">
            {wortSprache}: {localeNames[aktuell].name}
          </span>
          <span aria-hidden="true">{localeNames[aktuell].label}</span>
          <svg
            className="sprachwahl-pfeil"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>

        <ul
          // Verankerung: auf schmalen Schirmen links, ab 640 px rechts.
          // Gemessen bei 320 px: rechts verankert ragte das Panel 115 px
          // aus dem Fenster heraus, weil der Knopf dort nach dem Umbruch
          // ganz links steht und 200 px Panel nach links keinen Platz
          // haben. Die Seite scrollt deswegen nicht (overflow-x: clip) —
          // der Inhalt waere einfach abgeschnitten gewesen.
          className="absolute left-0 z-50 mt-2 min-w-[12.5rem] overflow-hidden rounded-sm border border-line bg-surface py-1 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] sm:left-auto sm:right-0"
          // Nach einem Klick ist die Wahl getroffen. Next wechselt die Seite
          // im Browser, ohne neu zu laden — ohne diese Zeile bliebe das
          // Panel auf der neuen Seite offen stehen.
          onClick={() => {
            if (box.current) box.current.open = false
          }}
        >
          {locales.map((l) => {
            const ist = l === aktuell
            return (
              <li key={l}>
                <Link
                  href={path(l, page)}
                  hrefLang={localeNames[l].htmlLang}
                  lang={localeNames[l].htmlLang}
                  aria-current={ist ? 'true' : undefined}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm no-underline transition-colors hover:bg-bg ${
                    ist ? 'text-accent' : 'text-fg'
                  }`}
                >
                  {/* Das Haekchen traegt die Aussage „das ist die aktuelle",
                      nicht die Farbe. Farbe allein saehe fuer jeden vierten
                      Mann mit Rotsehschwaeche aus wie alle anderen Eintraege. */}
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                    className={ist ? 'opacity-100' : 'opacity-0'}
                  >
                    <path
                      d="M1 4.6L4.3 8 11 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="flex-1">{localeNames[l].name}</span>
                  <span
                    aria-hidden="true"
                    className="font-sans text-xs tracking-[0.1em] text-muted"
                  >
                    {localeNames[l].label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </details>
    </nav>
  )
}
