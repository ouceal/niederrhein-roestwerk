import { img, type Img } from '@/content/images'
import { getDictionary, path, type Locale } from '@/content/i18n'
import type { KaffeeText } from '@/content/i18n/types'
import { Figure } from './Figure'
import { Kaufbox } from './shop/Kaufbox'

/**
 * Welches Bild zu welchem Kaffee gehoert, haengt nicht an der Sprache —
 * deshalb steht die Zuordnung hier und nicht im Woerterbuch.
 */
const bilder: readonly [Img, Img] = [img.aeropress, img.espressoSiebtraeger]
const bildAlt = ['aeropress', 'espressoSiebtraeger'] as const

/**
 * Kaffee-Darstellung. Bewusst keine Karte mit Schlagschatten —
 * nur Bild, Linie, Text. Darunter der Kaufbereich: Groesse, Mahlgrad,
 * Menge, Preis mit Grundpreis je kg (PAngV) und der Knopf in die
 * Bestellung. Die Zahlen dazu stehen in content/shop.ts.
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
    // Spalte ueber die volle Hoehe der Grid-Zelle, der Kaufbereich sitzt
    // mit mt-auto unten. So stehen „Bestellen" in beiden Karten auf
    // derselben Linie, auch wenn Text und Datenzeilen ueber ihnen
    // verschieden lang sind — in jeder der vier Sprachen anders.
    <article className="flex h-full flex-col">
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
        <Row label={f.pflicht} value={d.shop.pflichtWert} />
      </dl>

      <div className="mt-auto pt-10">
      <Kaufbox
        lang={lang}
        kaffee={index}
        namen={[d.kaffees[0].name, d.kaffees[1].name]}
        t={d.shop}
        versandHref={path(lang, 'versand')}
      />
      </div>
    </article>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    // Auf dem Telefon untereinander, ab 640 px nebeneinander.
    //
    // Vorher standen sie immer nebeneinander. Bei 390 px blieben nach
    // Rand und Beschriftungsspalte 190 px fuer den Wert — „Schokolade ·
    // Orangenschale · Karamell" quetschte sich dort in drei Zeilen an
    // den rechten Rand, waehrend links die halbe Zeile leer blieb. Zwei
    // Spalten sind eine Entscheidung fuer breite Schirme, nicht fuer
    // alle.
    <div className="py-3 sm:flex sm:flex-wrap sm:gap-x-6">
      {/* Die Beschriftungsspalte ist in vier Sprachen unterschiedlich lang:
          w-32 fest wuerde im Spanischen umbrechen. min-w statt w. */}
      <dt className="text-muted sm:min-w-[8rem] sm:shrink-0">{label}</dt>
      <dd className="mt-0.5 min-w-0 sm:mt-0">{value}</dd>
    </div>
  )
}
