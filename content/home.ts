import type { ImgKey } from './images'

/**
 * Was auf der Startseite NICHT uebersetzt wird: welcher Hero laeuft und
 * welches Bild zu welchem Block gehoert. Die Texte stehen in den
 * Woerterbuechern unter content/i18n/.
 *
 * Die Trennung ist der Sinn der Sache: eine Bildzuordnung aendert sich
 * einmal und gilt in vier Sprachen, ein Satz aendert sich viermal.
 */

/**
 * Welcher Hero laeuft. Eine Zeile, drei moegliche Werte:
 *   'nebel'        — Video randlos, abgedunkelt, Dunstschleier, Schrift oben
 *   'redaktion'    — Schrift auf ruhigem Grund, Bildband randlos darunter
 *   'asymmetrisch' — zwei Spalten 58/42, Bild rechts
 * Die Varianten stehen in components/heroes.tsx.
 */
export const HERO_VARIANTE = 'nebel' as const

/** Die zwei Herkunftsbloecke: Bild und auf welcher Seite es steht. */
export const storyBilder: readonly { readonly key: ImgKey; readonly imageLeft: boolean }[] = [
  { key: 'ernte', imageLeft: true },
  { key: 'rohkaffee', imageLeft: false },
]

/** Die vier Schritte im Prozess-Streifen der Startseite. */
export const prozessBilder: readonly ImgKey[] = [
  'trocknung',
  'trommelroester',
  'kuehlsieb',
  'cupping',
]
