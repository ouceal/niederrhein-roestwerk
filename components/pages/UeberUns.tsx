import { img } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { Figure } from '@/components/Figure'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { Newsletter } from '@/components/Newsletter'
import { Team } from '@/components/Team'

/*
 * HINWEIS ZUR GRÜNDERGESCHICHTE
 * Die Absätze in `ueberUns.abschnitte` sind noch allgemein gehalten und
 * enthalten keine erfundenen Biografie-Details. Vor Launch durch die
 * echte Geschichte ersetzen — in allen vier Sprachen.
 *
 * Der Abschnitt <Team> darunter ist dagegen ECHT: zwei reale Personen,
 * zwei eigene Fotos, und die Rollen stehen so da, wie sie genannt
 * wurden. Nichts davon ist ausgeschmückt — keine Jahreszahlen, keine
 * „Experten", keine Stationen, die niemand belegen kann. Wer dort etwas
 * ergänzt, ergänzt bitte nur Nachprüfbares: es stehen echte Namen
 * darunter.
 *
 * Die Bilder in kaffee/portraits/ gehören weiterhin NICHT auf diese Seite.
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

      {/* Das Bandbild wird auf dem Telefon hoeher.
          21:9 ist ein Kinoformat und braucht Breite. Im Shell eines
          Telefons bleiben davon 380 px, und 380 : 21/9 sind 163 px —
          gemessen. Das ist kein Bild mehr, das ist ein Streifen, und
          von einer Aufnahme mit Sonne, Huegeln, Nebel und einem
          Menschen darin blieb genau der mittlere Waagerechte uebrig.
          Auf dem Rechner stimmt dasselbe Format, dort ist die Spalte
          1152 px breit.

          3:2 auf dem Telefon sind 253 px. Beschnitten wird dabei die
          Breite, nicht die Hoehe — die Vorlage ist 2400x1018 —, und
          nachgesehen: Sonne, Huegelkamm und der Pflücker bleiben alle
          im Bild. Ab 640 px 16:9, ab 1024 px wieder 21:9.

          Dasselbe auf den Seiten Kaffee und Roesterei. heroes.tsx
          macht es bei den grossen Heroes laengst so; diese drei
          Bandbilder waren die Stellen, die es nicht mitbekommen
          haben. */}
      <Section tone="surface" className="!pt-0 !pb-0">
        <Shell>
          <Figure
            image={img.heroPlantage}
            alt={d.alt.heroPlantage}
            sizes="100vw"
            className="aspect-[3/2] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]"
          />
        </Shell>
      </Section>

      {/* Zwischen Bild und Text lagen vorher 142 px: der untere Abstand
          dieser Sektion plus der obere der naechsten. Auf dem Telefon
          war das mehr Schwarz als Bild. Der untere faellt weg, der
          obere bleibt und traegt den Abstand allein. */}
      <Section tone="surface" className="!pt-12 sm:!pt-16">
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

      <Team lang={lang} />

      <Newsletter lang={lang} />
    </>
  )
}
