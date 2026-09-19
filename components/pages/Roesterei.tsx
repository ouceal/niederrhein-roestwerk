import { img } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from '@/components/Figure'
import { ProzessSchritt } from '@/components/ProzessSchritt'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { Newsletter } from '@/components/Newsletter'

export function Roesterei({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <>
      <Section>
        <Shell>
          <Kicker>{d.roesterei.kicker}</Kicker>
          <h1 className="max-w-prose text-h1">{d.roesterei.h1}</h1>
          <Prose className="mt-8">
            <p>{d.roesterei.intro}</p>
          </Prose>
        </Shell>
      </Section>

      <Section tone="surface" className="!pt-0">
        <Shell>
          <div className="space-y-24 lg:space-y-32">
            {d.roesterei.schritte.map((s, i) => (
              <ProzessSchritt key={s.title} lang={lang} position={i} />
            ))}
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <Figure
            image={img.trocknung}
            alt={d.alt.trocknung}
            sizes="100vw"
            /* Hoeher auf dem Telefon, Begruendung in
               components/pages/UeberUns.tsx. Die Vorlage ist 2000x1342,
               also selbst 3:2 — auf dem Telefon ist damit die ganze
               Aufnahme zu sehen, statt nur des Streifens, der im
               21:9-Kasten von ihr uebrig blieb. Weg waren dort der
               Himmel, die Sonne und der Horizont; geblieben waren die
               Trockenbetten. */
            className="aspect-[3/2] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]"
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="min-w-0">
              <h2 className="text-h2">{d.roesterei.blockA.titel}</h2>
              <Prose className="mt-6">
                {d.roesterei.blockA.absaetze.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </Prose>
            </div>
            <div className="min-w-0">
              <h2 className="text-h2">{d.roesterei.blockB.titel}</h2>
              <Prose className="mt-6">
                {d.roesterei.blockB.absaetze.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </Prose>
            </div>
          </div>
        </Shell>
      </Section>

      <Newsletter lang={lang} />
    </>
  )
}
