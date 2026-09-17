import Link from 'next/link'
import { getDictionary, path, type Locale, type PageKey } from '@/content/i18n'
import { Shell } from './Shell'
import { SprachUmschalter } from './SprachUmschalter'
import { ThemaWahl } from './ThemaWahl'
import { MobilMenu } from './MobilMenu'

/**
 * Zwei Kopfzeilen, eine Wahrheit.
 *
 * Ab 768 px steht alles nebeneinander: Wortmarke, Navigation, dann
 * Sprache und Farbschema als aufklappbare Knoepfe. Darunter bleibt nur
 * die Wortmarke links und der Burger rechts, und alles andere zieht in
 * das Panel.
 *
 * Vorher brachen die Links auf schmalen Schirmen einfach um. Das
 * funktionierte, aber es sah nach Zufall aus: drei Zeilen, jede anders
 * ausgerichtet, und der Sprachknopf landete unter den Links statt neben
 * ihnen. Ein Kopfbereich ist das Erste, was man sieht; er darf nicht
 * aussehen, als sei er gerade erst umgefallen.
 *
 * Die Eintraege stehen EINMAL in `eintraege` und werden von beiden
 * Fassungen benutzt. Eine neue Seite kommt an einer Stelle dazu, nicht
 * an zweien — sonst fehlt sie garantiert irgendwann in einer davon.
 */
export function Header({ lang, page }: { lang: Locale; page?: PageKey }) {
  const d = getDictionary(lang)
  const eintraege: { key: PageKey; label: string }[] = [
    { key: 'kaffee', label: d.nav.kaffee },
    { key: 'roesterei', label: d.nav.roesterei },
    { key: 'ueberUns', label: d.nav.ueberUns },
    { key: 'kontakt', label: d.nav.kontakt },
  ]

  return (
    // `relative`, damit das Panel des Burgers sich an der Kopfzeile
    // ausrichtet und nicht am Fenster — und `z-40`, damit es darueber
    // liegt. Gemessen: ohne das fing das Hero (`relative z-10`) die
    // Fingertipps ab, die fuer die Menuelinks gedacht waren. Das Panel
    // war sichtbar und trotzdem nicht bedienbar, was der unangenehmste
    // Fall ist: es sieht aus, als waere der Tipp danebengegangen.
    <header className="relative z-40 border-b border-line bg-bg">
      <Shell>
        <div className="flex items-center justify-between gap-6 py-4 md:py-5">
          <Link
            href={path(lang)}
            // -my-2/py-2 vergroessert die Trefferflaeche auf 44 px, ohne die
            // Kopfzeile hoeher zu machen: die Zugabe wird aussen wieder abgezogen.
            className="-my-2 inline-flex min-h-[2.75rem] items-center py-2 font-serif text-lg tracking-tight text-fg no-underline hover:text-accent"
          >
            {d.meta.siteTitle}
          </Link>

          {/* ── ab 768 px ─────────────────────────────────────────── */}
          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label={d.nav.ariaHaupt}>
              <ul className="flex items-center gap-x-6 text-sm">
                {eintraege.map((e) => (
                  <li key={e.key}>
                    <Link
                      href={path(lang, e.key)}
                      aria-current={page === e.key ? 'page' : undefined}
                      className={`no-underline underline-offset-4 hover:text-fg hover:underline ${
                        page === e.key ? 'text-fg' : 'text-muted'
                      }`}
                    >
                      {e.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sprache und Farbschema stehen zusammen: beides betrifft,
                wie die Seite dargestellt wird, nicht wohin sie fuehrt.
                Der Trennstrich sagt, dass hier etwas anderes anfaengt
                als die Seitennavigation. */}
            <div className="flex items-center gap-2 border-l border-line pl-6">
              <SprachUmschalter
                aktuell={lang}
                page={page}
                label={d.nav.ariaSprache}
                wortSprache={d.nav.sprache}
              />
              <ThemaWahl
                aria={d.thema.aria}
                system={d.thema.system}
                hell={d.thema.hell}
                dunkel={d.thema.dunkel}
              />
            </div>
          </div>

          {/* ── darunter ─────────────────────────────────────────── */}
          <MobilMenu label={d.nav.ariaMenue}>
            <Shell className="py-6">
              <nav aria-label={d.nav.ariaHaupt}>
                <ul className="flex flex-col">
                  {eintraege.map((e) => (
                    <li key={e.key}>
                      <Link
                        href={path(lang, e.key)}
                        aria-current={page === e.key ? 'page' : undefined}
                        // py-3 statt eines Rahmens: 48 px hoch, und zwischen
                        // zwei Eintraegen liegen damit mehr als die 8 px
                        // Abstand, die ein Daumen braucht, um nicht den
                        // falschen zu treffen.
                        className={`block py-3 text-lg no-underline ${
                          page === e.key ? 'text-accent' : 'text-fg'
                        }`}
                      >
                        {e.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-line pt-6">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-muted">
                  {d.nav.sprache}
                </p>
                <SprachUmschalter
                  aktuell={lang}
                  page={page}
                  label={d.nav.ariaSprache}
                  wortSprache={d.nav.sprache}
                  variante="liste"
                />
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <ThemaWahl
                  aria={d.thema.aria}
                  system={d.thema.system}
                  hell={d.thema.hell}
                  dunkel={d.thema.dunkel}
                  variante="liste"
                  titel={d.thema.titel}
                />
              </div>
            </Shell>
          </MobilMenu>
        </div>
      </Shell>
    </header>
  )
}
