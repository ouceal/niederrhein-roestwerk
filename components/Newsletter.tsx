import Link from 'next/link'
import { getDictionary, path, type Locale } from '@/content/i18n'
import { Shell, Section } from './Shell'
import { Submit } from './Button'

/**
 * Warteliste — Double-Opt-In.
 *
 * Wichtig und nicht wegzukuerzen:
 *  - die Einwilligungs-Checkbox ist `required` und NICHT vorausgewaehlt
 *  - der Einwilligungstext benennt Zweck, Absender und Widerruf
 *  - die Datenschutzerklaerung ist direkt verlinkt, in der Seitensprache
 *  - `bot-field` ist der Honeypot (Netlify), fuer Menschen unsichtbar
 *
 * Pro Sprache ein EIGENES Netlify-Formular (`warteliste-de` und so weiter).
 * Vier Formulare mit demselben Namen wuerden sonst in einem Topf landen,
 * und man wuesste bei einer Anmeldung nicht mehr, in welcher Sprache
 * bestaetigt und spaeter geschrieben werden muss.
 *
 * ACHTUNG: Netlify Forms speichert die Adresse nur. Die zweite Haelfte des
 * Double-Opt-Ins — Bestaetigungsmail mit Einmal-Link, Versand erst nach
 * Klick, Protokollierung von Zeitpunkt und IP — muss noch angebunden
 * werden, und zwar in jeder Sprache. Siehe README.
 */
export function Newsletter({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)
  const formName = `warteliste-${lang}`

  return (
    <Section id="warteliste" tone="deep">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="text-h2">{d.newsletter.titel}</h2>
            <p className="mt-6 max-w-prose text-lead font-light leading-relaxed opacity-90">
              {d.newsletter.text}
            </p>
          </div>

          <form
            name={formName}
            method="POST"
            action={path(lang, 'danke')}
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="max-w-prose"
          >
            <input type="hidden" name="form-name" value={formName} />

            <p className="hidden" aria-hidden="true">
              <label>
                {d.newsletter.honeypot} <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label htmlFor="nl-email" className="block text-sm">
              {d.newsletter.labelEmail}
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="nl-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={d.newsletter.platzhalter}
                /* Rahmen 3,5:1 und Platzhalter 4,9:1 gegen das Gruen — beides
                   ueber der WCAG-AA-Schwelle. Nicht weiter abdunkeln. */
                className="w-full min-w-0 border border-deep-fg/60 bg-transparent px-4 py-3.5 text-deep-fg placeholder:text-deep-fg/80 focus:border-deep-fg focus:outline-none"
              />
              <Submit variant="onDeep">{d.newsletter.absenden}</Submit>
            </div>

            <div className="mt-6 flex gap-3">
              <input
                id="nl-consent"
                type="checkbox"
                name="einwilligung"
                value="ja"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#a8431e]"
              />
              <label htmlFor="nl-consent" className="text-sm leading-relaxed opacity-90">
                {d.newsletter.einwilligung[0]}
                <Link href={path(lang, 'datenschutz')} className="underline underline-offset-2">
                  {d.newsletter.datenschutzLink}
                </Link>
                {d.newsletter.einwilligung[1]}
              </label>
            </div>
          </form>
        </div>
      </Shell>
    </Section>
  )
}
