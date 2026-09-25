'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import type { Locale } from '@/content/i18n/config'
import type { Shop } from '@/content/i18n/types'
import {
  euro,
  gewicht,
  groessen,
  grundpreisJeKg,
  mahlgrade,
  maxMenge,
  preisFuer,
  whatsappLink,
  type GroesseId,
  type Mahlgrad,
} from '@/content/shop'
import { nachricht, useBestellung } from './Bestellung'
import { IconHaken, IconMinus, IconPlus, IconWhatsapp } from './Icons'

/**
 * Der Kaufbereich unter jedem Kaffee.
 *
 * Reihenfolge wie auf einem Etikett gelesen: Groesse, Mahlgrad, Menge,
 * dann der Preis — und der Grundpreis direkt darunter, in derselben
 * Blickachse. Die PAngV verlangt ihn „in unmittelbarer Naehe"; wer ihn
 * in eine Fussnote schiebt, ist abmahnbar.
 *
 * Die Groessen sind echte Radio-Knoepfe (visuell als Kacheln). Damit
 * funktionieren Pfeiltasten, Screenreader sagen „1 von 3", und ohne
 * JavaScript laesst sich trotzdem waehlen.
 */
export function Kaufbox({
  lang,
  kaffee,
  namen,
  t,
  versandHref,
}: {
  lang: Locale
  kaffee: 0 | 1
  namen: readonly [string, string]
  t: Shop
  versandHref: string
}) {
  const id = useId()
  const { hinzufuegen } = useBestellung()
  const [groesse, setGroesse] = useState<GroesseId>('250')
  const [mahl, setMahl] = useState<Mahlgrad>('bohne')
  const [menge, setMenge] = useState(1)
  const [bestaetigt, setBestaetigt] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const gramm = groessen.find((g) => g.id === groesse)!.gramm
  const preis = preisFuer(kaffee, groesse)
  const zeile = { kaffee, groesse, mahl, menge }

  const legeRein = () => {
    hinzufuegen(zeile)
    setBestaetigt(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setBestaetigt(false), 2400)
  }

  return (
    <div className="border-t border-fg pt-8">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">{t.abschnittKicker}</p>

      {/* ── Groesse ─────────────────────────────────────────────── */}
      <fieldset className="mt-5">
        <legend className="text-sm text-muted">{t.groesse}</legend>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {groessen.map((g) => {
            const p = preisFuer(kaffee, g.id)
            return (
              <label key={g.id} className="relative block cursor-pointer">
                <input
                  type="radio"
                  name={`${id}-groesse`}
                  value={g.id}
                  checked={groesse === g.id}
                  onChange={() => setGroesse(g.id)}
                  className="peer sr-only"
                />
                <span className="flex min-h-[4.25rem] flex-col items-center justify-center gap-0.5 border border-line px-2 py-2.5 text-center transition-colors duration-150 hover:border-fg peer-checked:border-fg peer-checked:bg-fg peer-checked:text-bg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  <span className="font-serif text-lg leading-none">{gewicht(g.gramm)}</span>
                  <span className="text-xs tabular-nums opacity-80">{euro(p, lang)}</span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* ── Mahlgrad + Menge ────────────────────────────────────── */}
      <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <label htmlFor={`${id}-mahl`} className="text-sm text-muted">
            {t.mahlgrad}
          </label>
          <div className="relative mt-2.5">
            <select
              id={`${id}-mahl`}
              value={mahl}
              onChange={(e) => setMahl(e.target.value as Mahlgrad)}
              className="h-12 w-full cursor-pointer appearance-none rounded-none border border-line bg-bg pl-4 pr-10 text-[1rem] text-fg transition-colors hover:border-fg focus:border-fg focus:outline-none"
            >
              {mahlgrade.map((m) => (
                <option key={m} value={m}>
                  {t.mahlgrade[m]}
                </option>
              ))}
            </select>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <div>
          <p id={`${id}-menge`} className="text-sm text-muted">
            {t.menge}
          </p>
          <div role="group" aria-labelledby={`${id}-menge`} className="mt-2.5 flex h-12 items-stretch border border-line">
            <button
              type="button"
              onClick={() => setMenge((m) => Math.max(1, m - 1))}
              disabled={menge <= 1}
              aria-label={t.weniger}
              className="flex w-12 cursor-pointer items-center justify-center text-fg transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <IconMinus />
            </button>
            <output aria-live="polite" className="flex w-10 items-center justify-center border-x border-line tabular-nums">
              {menge}
            </output>
            <button
              type="button"
              onClick={() => setMenge((m) => Math.min(maxMenge, m + 1))}
              disabled={menge >= maxMenge}
              aria-label={t.mehr}
              className="flex w-12 cursor-pointer items-center justify-center text-fg transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <IconPlus />
            </button>
          </div>
        </div>
      </div>

      {/* ── Preis + Grundpreis, eine Blickachse ─────────────────── */}
      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="font-serif text-[2rem] leading-none tabular-nums" aria-live="polite">
          {euro(preis * menge, lang)}
        </p>
        <p className="text-sm tabular-nums text-muted">
          {gewicht(gramm)} · {t.jeKg.replace('{betrag}', euro(grundpreisJeKg(preis, gramm), lang))}
        </p>
      </div>
      <p className="mt-2 text-xs text-muted">
        {t.preisHinweis[0]}
        <Link href={versandHref} className="underline underline-offset-2 hover:text-accent">
          {t.versandLink}
        </Link>
        {t.preisHinweis[1]}
      </p>

      {/* ── Handlung ───────────────────────────────────────────── */}
      <button
        type="button"
        onClick={legeRein}
        className={`mt-6 inline-flex min-h-[3.25rem] w-full cursor-pointer items-center justify-center gap-2.5 border px-7 py-3.5 font-sans text-sm tracking-wide transition-colors duration-150 ${
          bestaetigt
            ? 'border-fg bg-fg text-bg'
            : 'border-accent bg-accent text-accent-fg hover:border-fg hover:bg-fg hover:text-bg'
        }`}
      >
        {bestaetigt ? <IconHaken /> : null}
        <span>{bestaetigt ? t.hinzugefuegt : t.hinzufuegen}</span>
      </button>
      {/* Fuer Screenreader: die Bestaetigung wird angesagt, ohne dass
          der Fokus springt. */}
      <p className="sr-only" role="status">
        {bestaetigt ? t.hinzugefuegt : ''}
      </p>

      <a
        href={whatsappLink(nachricht({ zeilen: [zeile], namen, t, lang }))}
        target="_blank"
        rel="noopener"
        className="mt-3 inline-flex min-h-[2.75rem] items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
      >
        <IconWhatsapp className="h-4 w-4" />
        {t.direkt}
      </a>
    </div>
  )
}
