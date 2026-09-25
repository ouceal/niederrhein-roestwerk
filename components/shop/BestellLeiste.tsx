'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { Locale } from '@/content/i18n/config'
import type { Shop } from '@/content/i18n/types'
import { euro, gewicht, grammFuer, mailLink, maxMenge, preisFuer, versand, whatsappLink } from '@/content/shop'
import { nachricht, stueck, useBestellung } from './Bestellung'
import { IconBrief, IconKreuz, IconMinus, IconPlus, IconTuete, IconWhatsapp } from './Icons'

/**
 * Zwei Dinge in einer Datei, weil sie denselben Zustand zeigen:
 *
 *  1. Die Leiste am unteren Rand. Erscheint, sobald etwas in der
 *     Bestellung liegt, und sagt in einer Zeile: wie viel, wie teuer.
 *  2. Das Panel mit der ganzen Bestellung und den zwei Knoepfen zum
 *     Abschicken.
 *
 * Das Panel ist ein natives <dialog> mit showModal(). Das bringt von
 * selbst mit, was man sonst von Hand baut und dabei meist vergisst:
 * Fokusfalle, Escape, inerten Hintergrund, Rueckgabe des Fokus an den
 * Knopf, der es geoeffnet hat. Auf dem Telefon kommt es von unten, ab
 * 640 px sitzt es als Spalte rechts.
 */
export function BestellLeiste({
  lang,
  t,
  namen,
  shopHref,
  versandHref,
}: {
  lang: Locale
  t: Shop
  namen: readonly [string, string]
  shopHref: string
  versandHref: string
}) {
  const b = useBestellung()
  const dlg = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = dlg.current
    if (!el) return
    if (b.offen && !el.open) el.showModal()
    if (!b.offen && el.open) el.close()
  }, [b.offen])

  useEffect(() => {
    const el = dlg.current
    if (!el) return
    const zu = () => b.schliessen()
    el.addEventListener('close', zu)
    return () => el.removeEventListener('close', zu)
  }, [b])

  const text = nachricht({ zeilen: b.zeilen, namen, t, lang })
  const fehlt = versand.freiAb - b.zwischensumme
  const fortschritt = Math.min(1, b.zwischensumme / versand.freiAb)

  return (
    <>
      {/* ── Die Leiste ───────────────────────────────────────────── */}
      {b.anzahl > 0 && !b.offen ? (
        <>
          {/* Platzhalter in der Hoehe der Leiste: sonst verdeckt sie
              am Seitenende die letzte Zeile der Fusszeile. */}
          <div aria-hidden className="h-[4.5rem] print:hidden" />
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgba(10,7,6,0.10)] print:hidden">
            <div className="mx-auto flex w-full max-w-shell items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12">
              {/* Nicht abschneiden: die Summe ist der Grund, warum die
                  Leiste da ist. Lieber wird der Knopf schmaler. */}
              <p className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm">
                <IconTuete className="shrink-0 text-accent" />
                <span>
                  {stueck(b.anzahl, t)} · <span className="tabular-nums">{euro(b.zwischensumme, lang)}</span>
                </span>
              </p>
              <button
                type="button"
                onClick={b.oeffnen}
                className="inline-flex min-h-[2.75rem] min-w-0 cursor-pointer items-center justify-center border border-accent bg-accent px-4 font-sans sm:px-5 text-sm tracking-wide text-accent-fg transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-bg"
              >
                {t.oeffnen}
              </button>
            </div>
          </div>
        </>
      ) : null}

      {/* ── Das Panel ────────────────────────────────────────────── */}
      <dialog
        ref={dlg}
        aria-labelledby="bestellung-titel"
        onClick={(e) => {
          // Ein Klick auf den abgedunkelten Rand trifft das <dialog>
          // selbst, nicht seinen Inhalt — dann schliessen.
          if (e.target === e.currentTarget) b.schliessen()
        }}
        className="bestellpanel m-0 mt-auto max-h-[92dvh] w-full max-w-none bg-bg p-0 text-fg sm:ml-auto sm:mt-0 sm:h-dvh sm:max-h-dvh sm:max-w-md sm:border-l sm:border-line"
      >
        <div className="flex max-h-[92dvh] flex-col sm:h-dvh sm:max-h-dvh">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
            <h2 id="bestellung-titel" className="font-serif text-h3">
              {t.bestellung}
            </h2>
            <button
              type="button"
              onClick={b.schliessen}
              aria-label={t.schliessen}
              className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center text-fg transition-colors hover:text-accent"
            >
              <IconKreuz />
            </button>
          </div>

          {b.zeilen.length === 0 ? (
            <div className="px-6 py-10">
              <p className="leading-relaxed text-muted">{t.leer}</p>
              <Link
                href={shopHref}
                onClick={b.schliessen}
                className="mt-6 inline-flex min-h-[2.75rem] items-center border border-line px-5 text-sm transition-colors hover:border-fg"
              >
                {namen[0]} · {namen[1]}
              </Link>
            </div>
          ) : (
            <>
              <ul className="min-h-0 flex-1 divide-y divide-line overflow-y-auto overscroll-contain px-6">
                {b.zeilen.map((z, i) => {
                  const preis = preisFuer(z.kaffee, z.groesse)
                  return (
                    <li key={`${z.kaffee}-${z.groesse}-${z.mahl}`} className="py-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-serif text-lg leading-tight">{namen[z.kaffee]}</p>
                          <p className="mt-1 text-sm text-muted">
                            {gewicht(grammFuer(z.groesse))} · {t.mahlgrade[z.mahl]}
                          </p>
                        </div>
                        <p className="shrink-0 tabular-nums">{euro(preis * z.menge, lang)}</p>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-4">
                        <div className="flex h-10 items-stretch border border-line" role="group" aria-label={t.menge}>
                          <button
                            type="button"
                            onClick={() => b.setzeMenge(i, z.menge - 1)}
                            aria-label={t.weniger}
                            className="flex w-10 cursor-pointer items-center justify-center transition-colors hover:text-accent"
                          >
                            <IconMinus className="h-4 w-4" />
                          </button>
                          <output className="flex w-9 items-center justify-center border-x border-line text-sm tabular-nums">
                            {z.menge}
                          </output>
                          <button
                            type="button"
                            onClick={() => b.setzeMenge(i, z.menge + 1)}
                            disabled={z.menge >= maxMenge}
                            aria-label={t.mehr}
                            className="flex w-10 cursor-pointer items-center justify-center transition-colors hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <IconPlus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => b.entfernen(i)}
                          className="min-h-[2.5rem] cursor-pointer text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                        >
                          {t.entfernen}
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="border-t border-line bg-surface px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5">
                {/* Wie weit noch bis zum kostenlosen Versand. Die Zahl
                    steht als Text daneben — der Balken allein waere fuer
                    niemanden eine Information. */}
                <p className="text-sm text-muted">
                  {fehlt > 0 ? t.freiNoch.replace('{betrag}', euro(fehlt, lang)) : t.freiErreicht}
                </p>
                <div aria-hidden className="mt-2 h-[3px] w-full bg-line">
                  <div
                    className="h-full origin-left bg-accent transition-transform duration-300"
                    style={{ transform: `scaleX(${fortschritt})` }}
                  />
                </div>

                <dl className="mt-5 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{t.zwischensumme}</dt>
                    <dd className="tabular-nums">{euro(b.zwischensumme, lang)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">
                      <Link href={versandHref} onClick={b.schliessen} className="underline underline-offset-2 hover:text-accent">
                        {t.versandkosten}
                      </Link>
                    </dt>
                    <dd className="tabular-nums">{b.versand === 0 ? t.kostenlos : euro(b.versand, lang)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-line pt-2.5 text-base">
                    <dt>{t.gesamt}</dt>
                    <dd className="font-serif text-xl tabular-nums">{euro(b.gesamt, lang)}</dd>
                  </div>
                </dl>

                <div className="mt-5 grid gap-2.5">
                  <a
                    href={whatsappLink(text)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 border border-accent bg-accent px-6 font-sans text-sm tracking-wide text-accent-fg no-underline transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-bg"
                  >
                    <IconWhatsapp />
                    {t.sendenWhatsapp}
                  </a>
                  <a
                    href={mailLink(t.nachrichtBetreff, text)}
                    className="inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 border border-line bg-transparent px-6 font-sans text-sm tracking-wide text-fg no-underline transition-colors duration-150 hover:border-fg"
                  >
                    <IconBrief />
                    {t.sendenEmail}
                  </a>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">{t.ablauf}</p>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  )
}

/**
 * Der Knopf in der Kopfzeile. Zeigt die Anzahl, oeffnet das Panel.
 * Die Zahl steht im zugaenglichen Namen mit drin — ein Punkt am Symbol
 * allein sagt einem Screenreader nichts.
 */
export function BestellKnopf({ t, label }: { t: Shop; label: string }) {
  const b = useBestellung()
  return (
    <button
      type="button"
      onClick={b.oeffnen}
      aria-label={b.anzahl > 0 ? `${label}: ${stueck(b.anzahl, t)}` : label}
      className="relative inline-flex h-11 min-w-[2.75rem] cursor-pointer items-center justify-center gap-2 px-1.5 text-sm text-fg transition-colors hover:text-accent"
    >
      <IconTuete />
      <span className="hidden lg:inline">{label}</span>
      {b.anzahl > 0 ? (
        <span
          aria-hidden
          className="absolute right-0 top-1 flex h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-accent px-1 text-[0.6875rem] font-medium leading-none text-accent-fg lg:static lg:ml-0.5"
        >
          {b.anzahl}
        </span>
      ) : null}
    </button>
  )
}
