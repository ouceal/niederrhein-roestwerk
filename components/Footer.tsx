import Link from 'next/link'
import { site, studio } from '@/content/site'
import { getDictionary, path, type Locale, type PageKey } from '@/content/i18n'
import { Shell } from './Shell'

export function Footer({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)
  const year = 2026 // statischer Export: fest, damit HTML und Client identisch bleiben

  const seiten: { key: PageKey; label: string }[] = [
    { key: 'kaffee', label: d.nav.kaffee },
    { key: 'roesterei', label: d.nav.roesterei },
    { key: 'ueberUns', label: d.nav.ueberUns },
    { key: 'kontakt', label: d.nav.kontakt },
  ]
  const recht: { key: PageKey; label: string }[] = [
    { key: 'impressum', label: d.footer.impressum },
    { key: 'datenschutz', label: d.footer.datenschutz },
  ]

  return (
    <footer className="border-t border-line bg-bg pb-14 pt-16">
      <Shell>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg tracking-tight">{d.meta.siteTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{d.footer.beschreibung}</p>
          </div>

          <nav aria-label={d.nav.ariaSeiten}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{d.footer.spalteSeiten}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {seiten.map((e) => (
                <li key={e.key}>
                  <Link href={path(lang, e.key)} className="text-fg no-underline hover:text-accent">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={d.nav.ariaRecht}>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{d.footer.spalteRecht}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {recht.map((e) => (
                <li key={e.key}>
                  <Link href={path(lang, e.key)} className="text-fg no-underline hover:text-accent">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{d.footer.spalteKontakt}</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                {/* TODO: echte Adresse eintragen, siehe Impressum */}
                <a href={`mailto:${site.contact.email}`} className="text-fg no-underline hover:text-accent">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-muted">{site.contact.phone}</li>
            </ul>
          </div>
        </div>

        {/* Unterste Zeile: links was die Seite ueber sich selbst sagt,
            rechts wer sie gebaut hat. Vorher haing die Werkstattzeile mit
            einem Trennpunkt am Cookie-Satz und las sich wie dessen
            Fortsetzung. Zwei Aussagen, zwei Plaetze — der Abstand sagt
            das, wofuer vorher ein Satzzeichen herhalten musste.

            Unter 640 px stapeln beide untereinander, die Werkstattzeile
            zuerst nach unten: auf einem schmalen Schirm gehoert der
            Rechtshinweis nach oben. */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs leading-relaxed text-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="max-w-[60ch]">
            © {year} {d.meta.siteTitle}. {d.footer.cookieZeile}
          </p>
          <p className="shrink-0">
            <a
              href={studio.url}
              target="_blank"
              rel="noopener"
              className="text-muted no-underline underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {studio.text}
            </a>
          </p>
        </div>
      </Shell>
    </footer>
  )
}
