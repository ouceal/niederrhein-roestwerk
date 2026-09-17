import Link from 'next/link'
import { getDictionary, path, type Locale, type PageKey } from '@/content/i18n'
import { Shell } from './Shell'
import { SprachUmschalter } from './SprachUmschalter'
import { ThemaWahl } from './ThemaWahl'

/**
 * Kein Burger-Menue, kein Overlay, kein JavaScript.
 * Die Links brechen auf schmalen Schirmen einfach um.
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
    <header className="border-b border-line bg-bg">
      <Shell>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 py-5">
          <Link
            href={path(lang)}
            className="font-serif text-lg tracking-tight text-fg no-underline hover:text-accent"
          >
            {d.meta.siteTitle}
          </Link>

          <nav aria-label={d.nav.ariaHaupt} className="ml-auto">
            <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
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

          {/* Sprache und Farbschema stehen zusammen: beides betrifft, wie
              die Seite dargestellt wird, nicht wohin sie fuehrt. Der
              Trennstrich sagt, dass hier etwas anderes anfaengt als die
              Seitennavigation. `self-center`, weil die Zeile an der
              Schriftlinie ausgerichtet ist — Knoepfe mit Rahmen haengen
              daran sonst schief. */}
          <div className="flex items-center gap-2 self-center border-line sm:border-l sm:pl-6">
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
      </Shell>
    </header>
  )
}
