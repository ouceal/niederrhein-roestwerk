import { img } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from '@/components/Figure'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { CoffeeCard } from '@/components/CoffeeCard'
import { Newsletter } from '@/components/Newsletter'

export function Kaffee({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <>
      <Section>
        <Shell>
          <Kicker>{d.kaffee.kicker}</Kicker>
          <h1 className="max-w-prose text-h1">{d.kaffee.h1}</h1>
          <Prose className="mt-8">
            {d.kaffee.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </Shell>
      </Section>

      {/* Hoeher auf dem Telefon, Begruendung in
          components/pages/UeberUns.tsx. Hier ist die Vorlage quadratisch
          (2048x2048): im 21:9-Kasten blieb von der Bohnenschuettung ein
          waagerechter Ausschnitt uebrig, der oben und unten mitten durch
          die Bohnen ging. Bei 3:2 liegt die Schuettung ganz im Bild. */}
      <Section tone="surface" className="!pt-0 !pb-0">
        <Shell>
          <Figure
            image={img.bohnenMakro}
            alt={d.alt.bohnenMakro}
            sizes="100vw"
            className="aspect-[3/2] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]"
          />
        </Shell>
      </Section>

      <Section tone="surface" className="!pt-12 sm:!pt-16">
        <Shell>
          {/* Sichtbar ist die Ueberschrift nicht noetig, fuer die
              Gliederung schon: sonst springt die Struktur von h1 auf h3. */}
          <h2 className="sr-only">{d.kaffee.srUeberschrift}</h2>
          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
            <CoffeeCard lang={lang} index={0} />
            <CoffeeCard lang={lang} index={1} />
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="min-w-0">
              <h2 className="text-h2">{d.kaffee.blockA.titel}</h2>
              <Prose className="mt-6">
                <p>{d.kaffee.blockA.text}</p>
              </Prose>
            </div>
            <div className="min-w-0">
              <h2 className="text-h2">{d.kaffee.blockB.titel}</h2>
              <Prose className="mt-6">
                <p>{d.kaffee.blockB.text}</p>
              </Prose>
            </div>
          </div>
        </Shell>
      </Section>

      <Newsletter lang={lang} />
    </>
  )
}
