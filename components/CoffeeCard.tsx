import { img, type Img } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import type { KaffeeText } from '@/content/i18n/types'
import { Figure } from './Figure'

/**
 * Welches Bild zu welchem Kaffee gehoert, haengt nicht an der Sprache —
 * deshalb steht die Zuordnung hier und nicht im Woerterbuch.
 */
const bilder: readonly [Img, Img] = [img.aeropress, img.espressoSiebtraeger]
const bildAlt = ['aeropress', 'espressoSiebtraeger'] as const

/**
 * Kaffee-Darstellung. Bewusst keine Karte mit Schlagschatten —
 * nur Bild, Linie, Text. Und bewusst KEIN Preis: es gibt noch nichts
 * zu kaufen, und ein Preis ohne Grundpreis je 100 g waere ohnehin
 * ein Verstoss gegen die PAngV (siehe content/site.ts).
 */
export function CoffeeCard({
  lang,
  index,
}: {
  lang: Locale
  index: 0 | 1
}) {
  const d = getDictionary(lang)
  const kaffee: KaffeeText = d.kaffees[index]
  const f = d.kaffeeFelder

  return (
    <article>
      <Figure
        image={bilder[index]}
        alt={d.alt[bildAlt[index]]}
        sizes="(min-width: 768px) 45vw, 100vw"
        className="aspect-[4/5] overflow-hidden"
      />

      <p className="mt-7 font-sans text-xs uppercase tracking-[0.18em] text-accent">
        {kaffee.kicker}
      </p>
      <h3 className="mt-2 text-h2">{kaffee.name}</h3>

      <p className="mt-5 max-w-prose leading-relaxed text-muted">{kaffee.text}</p>

      <dl className="mt-8 divide-y divide-line border-t border-line text-sm">
        <Row label={f.herkunft} value={kaffee.herkunft} />
        <Row label={f.aufbereitung} value={kaffee.aufbereitung} />
        <Row label={f.hoehe} value={kaffee.hoehe} />
        <Row label={f.roestgrad} value={kaffee.roestgrad} />
        <Row label={f.noten} value={kaffee.noten.join(' · ')} />
        <Row label={f.zubereitung} value={kaffee.zubereitung.join(' · ')} />
      </dl>
    </article>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 py-3">
      {/* Die Beschriftungsspalte ist in vier Sprachen unterschiedlich lang:
          w-32 fest wuerde im Spanischen umbrechen. min-w statt w. */}
      <dt className="min-w-[8rem] shrink-0 text-muted">{label}</dt>
      <dd className="min-w-0">{value}</dd>
    </div>
  )
}
