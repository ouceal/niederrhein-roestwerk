/**
 * Bild-Manifest — nur das, was in jeder Sprache gleich ist:
 * Dateiname und die native Groesse aus kaffee/README.md.
 *
 * Die alt-Texte liegen NICHT hier, sondern in den Woerterbuechern
 * (content/i18n/*.ts). Ein alt-Text wird vorgelesen, und zwar in der
 * Sprache, in der die Seite geschrieben ist — ein deutscher alt-Text auf
 * der spanischen Seite waere derselbe Fehler wie eine deutsche
 * Ueberschrift dort. Die deutschen Fassungen sind die Originale aus dem
 * README, die anderen drei sind daraus uebersetzt.
 *
 * Nicht enthalten und nicht zu verwenden:
 *   kaffee/portraits/*        — kein Kaffee-Bezug, andere Farbwelt
 *   kaffee/_nicht-verwenden/* — siehe README
 */

export type Img = {
  readonly src: string
  readonly w: number
  readonly h: number
}

export const img = {
  heroPlantage: { src: '/hero/hero-kaffeeplantage-aethiopien-sidamo.webp', w: 2400, h: 1018 },

  espressoSiebtraeger: { src: '/lifestyle/espresso-zubereitung-siebtraeger.webp', w: 1600, h: 2400 },
  aeropress: { src: '/lifestyle/kaffee-zubereitung-aeropress.webp', w: 2400, h: 1602 },

  bohnenMakro: { src: '/produkt/kaffeebohnen-makro-mittlere-roestung.webp', w: 2048, h: 2048 },
  rohkaffee: { src: '/produkt/rohkaffee-gruene-bohnen-jutesack.webp', w: 2000, h: 1117 },

  cupping: { src: '/prozess/cupping-verkostung-qualitaet.webp', w: 2400, h: 1340 },
  kuehlsieb: { src: '/prozess/geroestete-bohnen-kuehlsieb.webp', w: 2400, h: 1610 },
  trommelroester: { src: '/prozess/kaffeeroester-trommel-roesterei.webp', w: 1856, h: 2304 },
  kuehlsiebDetail: { src: '/prozess/kuehlsieb-roestung-detail.webp', w: 1920, h: 1280 },
  trocknung: { src: '/prozess/trocknung-kaffee-hochbeete-aethiopien.webp', w: 2000, h: 1342 },

  ernte: { src: '/story/ernte-kaffeekirschen-aethiopien.webp', w: 2000, h: 1342 },
  ernteBananen: { src: '/story/ernte-kaffeekirschen-bananenstauden.webp', w: 2400, h: 1340 },
  kirschenHaende: { src: '/story/kaffeekirschen-haende-bauer.webp', w: 2048, h: 2048 },

  textur: { src: '/textur/textur-kaffeebohnen-hintergrund.webp', w: 2400, h: 1600 },

  /* Die beiden Portraets sind ECHTE Fotos der beiden Gruender, nicht
     KI-erzeugt. Sie gehoeren deshalb ausdruecklich NICHT in die Liste
     `kiGeneriert` weiter unten. Zugeschnitten auf 4:5 und leicht
     angeglichen, damit sie nebeneinander als Paar lesen — die Aufnahmen
     stammen aus sehr verschiedenem Licht. */
  portraitOussama: { src: '/team/oussama-allali.webp', w: 900, h: 1125 },
  portraitSimo: { src: '/team/simo-kaddouri.webp', w: 900, h: 1125 },

  og: { src: '/og/og-default.webp', w: 1200, h: 630 },
} as const satisfies Record<string, Img>

export type ImgKey = keyof typeof img

/**
 * Video. Masse aus kaffee/README.md, Poster-Masse aus den Dateien selbst.
 * WebM steht immer VOR MP4 — Chrome und Firefox nehmen die kleinere Datei,
 * Safari faellt auf MP4 zurueck.
 */
export const video = {
  heroLoop: {
    webm: '/video/hero-loop-kaffeebohnen.webm',
    mp4: '/video/hero-loop-kaffeebohnen.mp4',
    poster: '/video/hero-loop-kaffeebohnen-poster.webp',
    w: 1920,
    h: 1080,
  },
} as const

/* ---------------------------------------------------------------------------
 * KI-GENERIERTE BILDER UND IHRE OFFENLEGUNG
 *
 * Auf den Seiten selbst steht KEIN Hinweis unter den Bildern.
 * Das ist eine bewusste Entscheidung mit zwei Voraussetzungen, und beide
 * muessen erfuellt bleiben — in ALLEN VIER SPRACHEN:
 *
 *  1. KEIN TEXT DARF DIE BILDER ALS EIGENE LIEFERKETTE AUSGEBEN.
 *     Verboten bleiben: "unsere Farm", "our partners", "i nostri
 *     coltivatori", "nuestros socios" und jede Bildunterschrift, die ein
 *     konkretes Gegenueber behauptet. Erlaubt bleibt die sachliche
 *     Herkunftsangabe "Kaffee aus Sidamo, Aethiopien", solange sie stimmt,
 *     und die allgemeine, passive Beschreibung des Verfahrens. Sobald eine
 *     Besitzbehauptung dazukommt, ist das eine irrefuehrende Angabe nach
 *     § 5 UWG — unabhaengig von jeder KI-Kennzeichnung, und unabhaengig
 *     davon, in welcher Sprache sie dasteht.
 *
 *  2. DIE KI-HERKUNFT WIRD IM BILDNACHWEIS OFFENGELEGT.
 *     Art. 50 KI-VO (seit 02.08.2026) verlangt Kennzeichnung fuer Inhalte,
 *     die realen Personen, Orten oder Ereignissen merklich aehneln und
 *     faelschlich echt wirken koennen. Ein generisches Stimmungsbild einer
 *     Kaffeeregion ist ein Grenzfall, der eher als symbolische Darstellung
 *     gilt. Der Bildnachweis im Impressum deckt diesen Graubereich ab —
 *     und er steht in jeder Sprachfassung.
 *
 * Kennzeichnung heilt keine falsche Aussage, und eine wahre Aussage macht
 * die Kennzeichnung nicht ueberfluessig. Zwei getrennte Pflichten.
 * ------------------------------------------------------------------------- */

/**
 * Welche Dateien KI-generiert sind — Stand laut kaffee/README.md:
 * die Farm-, Ernte- und Trocknungsbilder.
 *
 * TODO vor Launch: die uebrigen Aufnahmen pruefen und die Liste
 * vervollstaendigen. Was hier fehlt, fehlt auch im Bildnachweis.
 */
export const kiGeneriert: readonly ImgKey[] = [
  'heroPlantage',
  'ernte',
  'ernteBananen',
  'kirschenHaende',
  'trocknung',
]
