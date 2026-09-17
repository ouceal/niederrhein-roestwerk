import { img, type Img, type ImgKey } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from './Figure'
import { Prose } from './Shell'

/**
 * Welcher Schritt welches Bild hat, ist keine Frage der Sprache — die
 * Zuordnung steht hier. Ein `null` heisst: fuer diesen Schritt gibt es
 * kein Foto, und das ist die ganze Mechanik.
 *
 *   Bild vorhanden -> zwei Spalten, Seite wechselnd
 *   Bild fehlt     -> eine Spalte, zentriert, mit Trennlinie darueber
 *
 * Wenn das Foto von Verpackung und Etikett fertig ist, wird hier EIN
 * Eintrag von null auf einen Bildschluessel gesetzt, der alt-Text kommt
 * automatisch aus allen vier Woerterbuechern, und der Schritt springt von
 * selbst ins zweispaltige Layout zurueck. Kein Umbau in der Seite noetig.
 */
export const schrittBilder: readonly (ImgKey | null)[] = [
  'rohkaffee',
  'trommelroester',
  'kuehlsieb',
  'cupping',
  null, // Verpackung — Foto gibt es noch nicht
]

export function ProzessSchritt({
  lang,
  position,
}: {
  lang: Locale
  position: number
}) {
  const d = getDictionary(lang)
  const schritt = d.roesterei.schritte[position]
  const bildKey = schrittBilder[position]
  const index = String(position + 1).padStart(2, '0')

  const kopf = (
    <>
      <p className="font-sans text-xs tracking-[0.18em] text-accent">{index}</p>
      <h2 className="mt-3 text-h2">{schritt.title}</h2>
    </>
  )

  if (!bildKey) {
    return (
      <article className="border-t border-line pt-20 lg:pt-28">
        {/* Der Container bekommt eine rem-Breite, KEIN ch.
            1 ch rechnet in der Schrift, die das Element selbst erbt — das
            waere hier der Fliesstext, obwohl die Ueberschrift in Fraunces
            und in dreifacher Groesse darin steht. Das Zeichenmass gehoert
            auf das Textelement, und genau dort sitzt es: Prose traegt sein
            eigenes max-w-prose. 43rem entspricht diesem Mass in Pixeln. */}
        <div className="mx-auto w-full max-w-[43rem] text-center">
          {kopf}
          <Prose className="mx-auto mt-6 text-balance">
            {schritt.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </div>
      </article>
    )
  }

  const bild: Img = img[bildKey]
  const bildRechts = position % 2 === 1

  return (
    <article className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
      <Figure
        image={bild}
        alt={d.alt[bildKey]}
        sizes="(min-width: 1024px) 45vw, 100vw"
        /* Feste 4:3-Buehne fuer jeden Schritt: sonst reisst das Hochformat
           des Trommelroesters den Rhythmus auseinander. */
        className={bildRechts ? 'lg:order-last' : undefined}
        imgClassName="aspect-[4/3] w-full object-cover"
      />
      {/* min-w-0: ein Grid-Kind darf sonst nicht unter seine
          Mindest-Inhaltsbreite schrumpfen und schiebt die Spalte auf. */}
      <div className="min-w-0">
        {kopf}
        <Prose className="mt-6">
          {schritt.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Prose>
      </div>
    </article>
  )
}
