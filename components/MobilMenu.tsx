'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Das Menue fuer schmale Schirme.
 *
 * Wieder <details>, aus demselben Grund wie bei Sprache und Farbschema:
 * auf- und zuklappen kann der Browser allein, und was der Browser allein
 * kann, geht auch dann noch, wenn das Skript nicht ankommt. Der Knopf
 * meldet „aufgeklappt/zugeklappt" von sich aus an den Screenreader.
 *
 * Das Panel steht IM FLUSS, nicht darueber. Es schiebt die Seite nach
 * unten, statt sie zu verdecken. Das klingt nach dem einfacheren Weg,
 * und das ist es auch — aber es ist zugleich der bessere: ein Panel,
 * das ueber dem Inhalt liegt, braucht eine Fokusfalle, eine Sperre fuer
 * das Scrollen dahinter und eine Entscheidung darueber, was passiert,
 * wenn es laenger ist als der Schirm. Drei Probleme, die hier gar nicht
 * erst entstehen.
 *
 * Das Skript fuegt hinzu, was <details> fehlt: Escape, Klick daneben,
 * Fokus verlassen, und Schliessen nach einem Klick auf einen Link.
 * Der letzte Punkt ist hier wichtiger als anderswo — Next wechselt die
 * Seite ohne Neuladen, das Menue bliebe sonst offen stehen.
 */

export function MobilMenu({ label, children }: { label: string; children: ReactNode }) {
  const box = useRef<HTMLDetailsElement>(null)

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

    // `relatedTarget === null` heisst NICHT „der Fokus ist draussen".
    // Es heisst „der Fokus ist nirgends", und das ist auf dem iPhone der
    // Normalfall: Safari gibt einem Link oder Knopf beim Antippen keinen
    // Fokus, nur Formularfeldern. Der Fokus verliess also das <summary>
    // und landete ins Leere — woraufhin dieses Menue sich schloss, noch
    // bevor der Tipp beim Link ankam. Auf dem iPhone sah das so aus, als
    // sei die Seite tot: Menue auf, Link antippen, nichts passiert.
    // Chrome setzt den Fokus auf den Link und hat den Fehler nie gezeigt.
    //
    // Geschlossen wird deshalb nur, wenn der Fokus nachweislich woanders
    // gelandet ist. Das ist genau der Fall, fuer den die Zeile gedacht
    // war: mit Tab aus dem Menue heraus.
    const beiFokusweg = (e: FocusEvent) => {
      const ziel = e.relatedTarget as Node | null
      if (!ziel) return
      if (el.open && !el.contains(ziel)) zu()
    }

    // Wird der Schirm breit genug fuer die normale Kopfzeile, verschwindet
    // der Knopf per CSS. Bliebe das Panel dabei offen, waere es beim
    // naechsten Verschmaelern ploetzlich wieder da, ohne dass jemand es
    // geoeffnet haette.
    const breit = window.matchMedia('(min-width: 768px)')
    const beiBreite = () => {
      if (breit.matches) zu()
    }

    document.addEventListener('keydown', beiTaste)
    document.addEventListener('pointerdown', beiZeiger)
    el.addEventListener('focusout', beiFokusweg)
    breit.addEventListener('change', beiBreite)
    return () => {
      document.removeEventListener('keydown', beiTaste)
      document.removeEventListener('pointerdown', beiZeiger)
      el.removeEventListener('focusout', beiFokusweg)
      breit.removeEventListener('change', beiBreite)
    }
  }, [])

  return (
    <details ref={box} className="mobilmenu md:hidden">
      <summary aria-label={label}>
        <span className="burger-striche" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </summary>

      <div
        className="absolute inset-x-0 z-50 border-b border-line bg-bg"
        // Ein Klick auf irgendetwas im Panel beendet die Sache: entweder
        // war es ein Link, dann ist die Seite gewechselt, oder es war eine
        // Wahl, dann ist sie getroffen. In beiden Faellen hat das Menue
        // seine Aufgabe erfuellt.
        //
        // Das Zuklappen wartet aber einen Durchlauf ab. Hier stand
        // vorher `open = false` mitten im Klick — also noch bevor der
        // Browser die eigentliche Sache des Links erledigt hatte. WebKit
        // laesst eine Navigation fallen, wenn der Link im Moment der
        // Ausfuehrung nicht mehr dargestellt wird, und genau das
        // passierte: das Panel klappte zu, der Link war weg, die Seite
        // blieb stehen. Chrome fuehrt die Navigation trotzdem aus und
        // hat davon nie etwas gezeigt.
        onClick={() => {
          const el = box.current
          if (el) setTimeout(() => { el.open = false }, 0)
        }}
      >
        {children}
      </div>
    </details>
  )
}
