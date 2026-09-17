import type { Locale } from './config'
import type { Dictionary } from './types'
import { de } from './de'
import { en } from './en'
import { it } from './it'
import { es } from './es'

/**
 * Alle vier Woerterbuecher an einer Stelle.
 *
 * `Record<Locale, Dictionary>` ist die eigentliche Absicherung: fehlt eine
 * Sprache, oder fehlt in einer Sprache ein Satz, bricht der Build. Eine
 * halb uebersetzte Seite kann so nicht online gehen.
 */
export const dictionaries: Record<Locale, Dictionary> = { de, en, it, es }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary } from './types'
export * from './config'
