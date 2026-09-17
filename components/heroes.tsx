import { video } from '@/content/images'
import { getDictionary, type Locale } from '@/content/i18n'
import { HeroVideo } from './HeroVideo'
import { Shell, Kicker } from './Shell'
import { ButtonLink } from './Button'

/**
 * Hero-Varianten. Gewechselt wird an EINER Stelle: HERO_VARIANTE in
 * content/home.ts.
 *
 * Alle benutzen dieselbe HeroVideo-Komponente, also gilt ueberall:
 * Poster zuerst, Video erst ab 768 px, ohne JS bleibt das Poster stehen.
 */

type HeroProps = { lang: Locale }

/* ── Nebel (aktiv) ─────────────────────────────────────────────────────────
   Video randlos, abgedunkelt, darueber ein Dunstschleier in den Farben der
   Seite, und die Schrift liegt oben drauf.

   Der Aufbau von unten nach oben, jede Ebene mit einem Grund:

     1. Video, per CSS-Filter abgedunkelt und leicht entsaettigt. Abgedunkelt
        wird das Material selbst, nicht mit einer schwarzen Platte darueber —
        so bleiben die Lichter in den Bohnen weich statt matschig.
     2. Espresso-Waesche, flaechig. Bindet das Bild an die Seitenfarbe.
     3. Zwei Nebelwolken in Terracotta, Creme und Tiefgruen, die gegenlaeufig
        treiben (Keyframes in globals.css). Das ist der Dunst.
     4. Ein Verlauf von oben nach unten, damit die Schrift oben sicher steht.

   Die Werte in Ebene 1, 2 und 4 sind gemessen, nicht geschaetzt. Gemessen
   wird in ALLEN VIER SPRACHEN, weil die Ueberschrift unterschiedlich lang
   ist und damit unterschiedlich weit ins Bild reicht. Wer sie aendert,
   misst neu. */
export function HeroNebel({ lang }: HeroProps) {
  const d = getDictionary(lang)
  return (
    <section className="relative isolate flex min-h-[min(94vh,54rem)] items-start overflow-hidden border-b border-line bg-[#120e0c]">
      <HeroVideo
        objectPosition="center 70%"
        alt={d.videoAlt}
        className="[filter:brightness(.66)_saturate(.92)_contrast(1.03)]"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#1c1512]/28" />

      <div aria-hidden="true" className="nebel nebel-a" />
      <div aria-hidden="true" className="nebel nebel-b" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,7,6,.74) 0%, rgba(10,7,6,.56) 30%, rgba(10,7,6,.34) 46%, rgba(10,7,6,.06) 70%, rgba(10,7,6,0) 86%)',
        }}
      />

      <Shell className="relative z-10 pb-28 pt-24 lg:pt-32">
        <div className="max-w-[46rem] [text-shadow:0_1px_2px_rgba(5,5,10,.95),0_3px_14px_rgba(5,5,10,.8),0_10px_44px_rgba(5,5,10,.75)]">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-[#e6d8cc]">
            {d.hero.kicker}
          </p>
          <h1 className="text-display text-[#fbf7f3]">{d.hero.headline}</h1>
          <p className="mt-7 max-w-prose text-lead font-light leading-relaxed text-[#f2e9e0]">
            {d.hero.sub}
          </p>
          <div className="mt-10 [text-shadow:none]">
            <ButtonLink href="#warteliste">{d.hero.cta}</ButtonLink>
          </div>
        </div>
      </Shell>
    </section>
  )
}

/* ── Redaktion ─────────────────────────────────────────────────────────────
   Schrift auf ruhigem Grund, darunter ein randloses Bildband.
   Kein Text auf dem Video, also kein Kontrastproblem. */
export function HeroRedaktion({ lang }: HeroProps) {
  const d = getDictionary(lang)
  return (
    <section className="border-b border-line bg-bg">
      <Shell className="pb-12 pt-16 lg:pb-16 lg:pt-20">
        <Kicker>{d.hero.kicker}</Kicker>
        <h1 className="max-w-[17ch] text-display">{d.hero.headline}</h1>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-16">
          <p className="max-w-prose text-lead font-light leading-relaxed text-muted">{d.hero.sub}</p>
          <ButtonLink href="#warteliste">{d.hero.cta}</ButtonLink>
        </div>
      </Shell>
      <div className="relative aspect-[3/2] w-full sm:aspect-[5/2] lg:aspect-[3/1]">
        <HeroVideo objectPosition="center 100%" alt={d.videoAlt} />
      </div>
    </section>
  )
}

/* ── Asymmetrisch ──────────────────────────────────────────────────────────
   Zwei Spalten 58/42, Bild rechts, Bildausschnitt tief gesetzt. */
export function HeroAsymmetrisch({ lang }: HeroProps) {
  const d = getDictionary(lang)
  return (
    <section className="border-b border-line">
      <div className="grid lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]">
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-14 lg:py-24 xl:px-20">
          <div className="max-w-xl">
            <Kicker>{d.hero.kicker}</Kicker>
            <h1 className="text-display">{d.hero.headline}</h1>
            <p className="mt-7 max-w-prose text-lead font-light leading-relaxed text-muted">
              {d.hero.sub}
            </p>
            <div className="mt-9">
              <ButtonLink href="#warteliste">{d.hero.cta}</ButtonLink>
            </div>
          </div>
        </div>
        <div className="relative order-first aspect-[4/3] lg:order-last lg:aspect-auto lg:min-h-[42rem]">
          <HeroVideo objectPosition="center 76%" alt={d.videoAlt} />
        </div>
      </div>
    </section>
  )
}

export const heroes = {
  nebel: HeroNebel,
  redaktion: HeroRedaktion,
  asymmetrisch: HeroAsymmetrisch,
} as const

export type HeroVariante = keyof typeof heroes
export const media = video.heroLoop
