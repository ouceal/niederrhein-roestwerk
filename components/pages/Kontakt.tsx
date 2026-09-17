import Link from 'next/link'
import { site } from '@/content/site'
import { getDictionary, path, type Locale } from '@/content/i18n'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { Submit } from '@/components/Button'
import { Newsletter } from '@/components/Newsletter'

const field =
  'w-full border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted focus:border-fg focus:outline-none'

export function Kontakt({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)
  /* Pro Sprache ein eigenes Netlify-Formular: sonst laesst sich einer
     Anfrage spaeter nicht ansehen, in welcher Sprache geantwortet wird. */
  const formName = `kontakt-${lang}`

  return (
    <>
      <Section>
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
            <div className="min-w-0">
              <Kicker>{d.kontakt.kicker}</Kicker>
              <h1 className="text-h1">{d.kontakt.h1}</h1>
              <Prose className="mt-8">
                {d.kontakt.intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </Prose>

              <dl className="mt-10 divide-y divide-line border-t border-line text-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-1 py-4">
                  <dt className="min-w-[6rem] shrink-0 text-muted">{d.kontakt.labelEmail}</dt>
                  <dd className="min-w-0">
                    {/* TODO: echte Adresse, siehe content/site.ts */}
                    <a href={`mailto:${site.contact.email}`} className="hover:text-accent">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 py-4">
                  <dt className="min-w-[6rem] shrink-0 text-muted">{d.kontakt.labelTelefon}</dt>
                  <dd className="min-w-0 text-muted">{site.contact.phone}</dd>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 py-4">
                  <dt className="min-w-[6rem] shrink-0 text-muted">{d.kontakt.labelOrt}</dt>
                  <dd className="min-w-0">{d.footer.beschreibung}</dd>
                </div>
              </dl>
            </div>

            <form
              name={formName}
              method="POST"
              action={path(lang, 'danke')}
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="max-w-prose space-y-6"
            >
              <input type="hidden" name="form-name" value={formName} />

              <p className="hidden" aria-hidden="true">
                <label>
                  {d.newsletter.honeypot}{' '}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label htmlFor="k-name" className="mb-2 block text-sm">
                  {d.kontakt.feldName}
                </label>
                <input id="k-name" name="name" type="text" required autoComplete="name" className={field} />
              </div>

              <div>
                <label htmlFor="k-email" className="mb-2 block text-sm">
                  {d.kontakt.feldEmail}
                </label>
                <input id="k-email" name="email" type="email" required autoComplete="email" className={field} />
              </div>

              <div>
                <label htmlFor="k-nachricht" className="mb-2 block text-sm">
                  {d.kontakt.feldNachricht}
                </label>
                <textarea id="k-nachricht" name="nachricht" rows={7} required className={field} />
              </div>

              <div className="flex gap-3">
                <input
                  id="k-consent"
                  type="checkbox"
                  name="einwilligung"
                  value="ja"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#a8431e]"
                />
                <label htmlFor="k-consent" className="text-sm leading-relaxed text-muted">
                  {d.kontakt.einwilligung[0]}
                  <Link href={path(lang, 'datenschutz')} className="text-fg underline underline-offset-2">
                    {d.kontakt.datenschutzLink}
                  </Link>
                  {d.kontakt.einwilligung[1]}
                </label>
              </div>

              <Submit>{d.kontakt.absenden}</Submit>
            </form>
          </div>
        </Shell>
      </Section>

      <Newsletter lang={lang} />
    </>
  )
}
