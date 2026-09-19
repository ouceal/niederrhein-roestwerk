import { img, type Img, type ImgKey } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from './Figure'
import { Shell, Section, Kicker } from './Shell'

/**
 * Die zwei Gruender.
 *
 * Der Name steht hier und nicht im Woerterbuch: ein Name wird nicht
 * uebersetzt. „Oussama Allali" heisst auf Spanisch auch Oussama Allali.
 * Uebersetzt werden nur Rolle und Beschreibung, und die stehen dort, wo
 * alle uebersetzten Texte stehen.
 *
 * Reihenfolge: Europa zuerst, dann der Ursprung — dieselbe Richtung, in
 * der die Seite ohnehin erzaehlt, nur rueckwaerts gelesen. Wer hier
 * ankommt, kommt aus Europa.
 *
 * Die Portraets sind bewusst nicht gross. Es sind zwei Menschen, keine
 * zwei Denkmaeler, und die Seite erzaehlt vom Kaffee, nicht von uns.
 * Ausserdem stammen beide Aufnahmen aus dem Alltag und nicht aus einem
 * Studio; in dieser Groesse traegt das, was sie haben — Licht und
 * Haltung —, und was ihnen fehlt, faellt nicht ins Gewicht.
 */

const leute: readonly { name: string; bild: ImgKey }[] = [
  { name: 'Oussama Allali', bild: 'portraitOussama' },
  { name: 'Simo Kaddouri', bild: 'portraitSimo' },
]

export function Team({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <Section>
      <Shell>
        <Kicker>{d.team.kicker}</Kicker>
        <h2 className="max-w-prose text-h2">{d.team.titel}</h2>

        <ul className="mt-14 grid gap-14 sm:grid-cols-2 sm:gap-10 lg:gap-16">
          {leute.map((person, i) => {
            const text = d.team.leute[i]
            return (
              <li key={person.name}>
                <Figure
                  image={img[person.bild] as Img}
                  alt={d.alt[person.bild]}
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="max-w-[20rem] overflow-hidden rounded-sm"
                  imgClassName="aspect-[4/5] w-full object-cover"
                />

                <h3 className="mt-6 font-serif text-h3">{person.name}</h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-accent">
                  {text.rolle}
                </p>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">{text.text}</p>
              </li>
            )
          })}
        </ul>
      </Shell>
    </Section>
  )
}
