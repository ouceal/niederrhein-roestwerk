import { getDictionary, type Locale } from '@/content/i18n'
import { mailLink, whatsappLink } from '@/content/shop'
import { Shell, Section } from '@/components/Shell'
import { IconBrief, IconWhatsapp } from './Icons'

/**
 * „Mehr als 1 kg?" — der Weg fuer alle, die ueber die drei Groessen
 * hinaus wollen. Keine Preisliste, sondern ein Gespraech: bei 5 oder
 * 10 kg haengt der Preis an Menge, Rhythmus und Roestplan, und das
 * laesst sich in zwei Nachrichten besser klaeren als in einer Tabelle.
 *
 * Die Flaeche waehlt die Seite, auf der er steht (`tone`): er soll sich
 * vom Abschnitt davor absetzen, und direkt darunter folgt immer die
 * tiefgruene Newsletter-Flaeche — Gruen auf Gruen waere ein Block.
 */
export function Grossmengen({ lang, tone = 'bg' }: { lang: Locale; tone?: 'bg' | 'surface' }) {
  const g = getDictionary(lang).shop.gross

  return (
    <Section tone={tone} id="grossmengen">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div className="min-w-0">
            <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-muted">{g.kicker}</p>
            <h2 className="text-h2">{g.titel}</h2>
            <p className="mt-6 max-w-prose text-lead font-light leading-relaxed text-muted">{g.text}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-6">
              {g.punkte.map((p) => (
                <li key={p} className="border-t border-fg pt-3 text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3">
            <a
              href={whatsappLink(g.nachricht)}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 border border-accent bg-accent px-7 font-sans text-sm tracking-wide text-accent-fg no-underline transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-bg"
            >
              <IconWhatsapp />
              {g.whatsapp}
            </a>
            <a
              href={mailLink(g.betreff, g.nachricht)}
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 border border-line px-7 font-sans text-sm tracking-wide text-fg no-underline transition-colors duration-150 hover:border-fg"
            >
              <IconBrief />
              {g.email}
            </a>
          </div>
        </div>
      </Shell>
    </Section>
  )
}
