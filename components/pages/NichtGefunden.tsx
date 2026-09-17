import { locales, localeNames, getDictionary, path, type Locale } from '@/content/i18n'
import { Shell, Section, Prose } from '@/components/Shell'
import { ButtonLink } from '@/components/Button'

/**
 * Die 404-Seite — und warum sie eine ganz normale Seite ist.
 *
 * Next.js verlangt fuer `app/not-found.tsx` ein Root-Layout eine Ebene
 * darueber. Unser Root-Layout liegt aber in `app/[lang]/`, weil nur dort
 * die Sprache bekannt ist und `<html lang>` sie tragen muss. Beides geht
 * nicht gleichzeitig.
 *
 * Also: die 404-Seite ist eine echte Seite unter /de/nicht-gefunden/,
 * /en/not-found/ und so weiter — mit Layout, Kopf, Fuss und richtiger
 * Sprache. Welche davon ein Besucher sieht, entscheidet Netlify: fuer
 * jede Sprache gibt es eine eigene Catch-all-Regel in netlify.toml, also
 * bekommt ein Tippfehler unter /es/ die spanische Fassung.
 *
 * Kein JavaScript im Spiel. Ein frueherer Versuch tauschte den Text per
 * Skript nach dem Laden aus und zerlegte damit Reacts Hydration
 * (Fehler 418, 423, 425): wer serverseitig gerendertes Markup nachtraeglich
 * umschreibt, widerspricht genau dem, was React beim Hochfahren erwartet.
 * Die Sprachweiche gehoert auf den Server, nicht in die Seite.
 */

export function NichtGefunden({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <Section>
      <Shell>
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-4 max-w-prose text-h1">
          {d.nichtGefunden.h1}
        </h1>
        <Prose className="mt-8">
          <p>{d.nichtGefunden.text}</p>
        </Prose>

        <div className="mt-10">
          <ButtonLink href={path(lang)} variant="ghost">
            {d.nichtGefunden.zurueck}
          </ButtonLink>
        </div>

        <nav aria-label={d.nav.ariaSprache} className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {locales
              .filter((l) => l !== lang)
              .map((l) => (
                <li key={l}>
                  <a
                    href={path(l)}
                    hrefLang={localeNames[l].htmlLang}
                    lang={localeNames[l].htmlLang}
                    className="text-muted no-underline transition-colors hover:text-accent"
                  >
                    {localeNames[l].name}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

      </Shell>
    </Section>
  )
}
