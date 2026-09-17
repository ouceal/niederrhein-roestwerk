import { img } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from '@/components/Figure'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { Newsletter } from '@/components/Newsletter'

/*
 * HINWEIS ZUR GRÜNDERGESCHICHTE
 * Die Absätze im Wörterbuch sind bewusst allgemein gehalten und enthalten
 * keine erfundenen Biografie-Details (Namen, Jahreszahlen, Stationen).
 * Vor Launch durch die echte Geschichte ersetzen — in allen vier Sprachen —
 * und ein selbst fotografiertes Porträt einsetzen. Die Bilder in
 * kaffee/portraits/ gehören NICHT auf diese Seite.
 */

export function UeberUns({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <>
      <Section>
        <Shell>
          <Kicker>{d.ueberUns.kicker}</Kicker>
          <h1 className="max-w-prose text-h1">{d.ueberUns.h1}</h1>
          <Prose className="mt-8">
            <p>{d.ueberUns.intro}</p>
          </Prose>
        </Shell>
      </Section>

      <Section tone="surface" className="!pt-0">
        <Shell>
          <Figure
            image={img.heroPlantage}
            alt={d.alt.heroPlantage}
            sizes="100vw"
            className="aspect-[21/9] overflow-hidden"
          />
        </Shell>
      </Section>

      <Section tone="surface" className="!pt-16">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-24">
            <div className="space-y-16">
              {d.ueberUns.abschnitte.map((a) => (
                <div key={a.titel}>
                  <h2 className="text-h2">{a.titel}</h2>
                  <Prose className="mt-6">
                    {a.absaetze.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </Prose>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-12 lg:self-start">
              <Figure
                image={img.kirschenHaende}
                alt={d.alt.kirschenHaende}
                sizes="(min-width: 1024px) 33vw, 100vw"
                imgClassName="aspect-square w-full object-cover"
              />
              <dl className="mt-10 divide-y divide-line border-t border-line text-sm">
                {d.ueberUns.fakten.map((f) => (
                  <div key={f.label} className="flex flex-wrap gap-x-6 gap-y-1 py-3">
                    {/* min-w statt fester Breite: die Beschriftungen sind in
                        vier Sprachen unterschiedlich lang. */}
                    <dt className="min-w-[7rem] shrink-0 text-muted">{f.label}</dt>
                    <dd className="min-w-0">{f.wert}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Shell>
      </Section>

      <Newsletter lang={lang} />
    </>
  )
}
