import type { ReactNode } from 'react'
import { getDictionary, type Locale } from '@/content/i18n'
import type { DsAbsatz } from '@/content/i18n/types'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { Todo, TodoBlock, Rechtsvorrang } from '@/components/Todo'

/*
 * DATENSCHUTZERKLÄRUNG — GERÜST, KEIN FERTIGER RECHTSTEXT
 *
 * Was in den Wörterbüchern steht, beschreibt wahrheitsgemäß, was diese
 * Website technisch tut:
 *   - Kontaktformular (Netlify Forms), ein Formular je Sprache
 *   - Warteliste mit Double-Opt-In, ein Formular je Sprache
 *   - Hosting bei Netlify (Server-Logs, Auftragsverarbeitung, evtl. US-Transfer)
 *   - KEINE Cookies, KEIN Analytics, KEIN Chat-Widget, KEINE externen Schriften
 *
 * Was fehlt und NICHT geraten werden darf: Verantwortlicher, Kontaktdaten,
 * Speicherfristen, ggf. Datenschutzbeauftragter, Auftragsverarbeiter des
 * Newsletter-Tools. Vor Launch anwaltlich oder mit einem gepflegten
 * Generator finalisieren — Textbausteine aus fremden Websites zu kopieren
 * ist eine Urheberrechtsverletzung und passt inhaltlich ohnehin nicht.
 */

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-16 text-h2 first:mt-0">{children}</h2>
}

function Absatz({ a, todoLabel }: { a: DsAbsatz; todoLabel: string }) {
  if (typeof a === 'string') return <p>{a}</p>
  return (
    <p>
      {a.text}
      <Todo label={todoLabel}>{a.todo}</Todo>
    </p>
  )
}

export function Datenschutz({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <Section>
      <Shell>
        <Kicker>{d.datenschutz.kicker}</Kicker>
        <h1 className="text-h1">{d.datenschutz.h1}</h1>

        <Rechtsvorrang text={d.rechtsvorrang} />

        <div className="mt-12 max-w-prose border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
          {d.datenschutz.warnung}
        </div>

        <div className="mt-16 max-w-prose">
          {d.datenschutz.abschnitte.map((abschnitt) => (
            <section key={abschnitt.titel}>
              <H2>{abschnitt.titel}</H2>
              <Prose className="mt-6">
                {abschnitt.absaetze.map((a, i) => (
                  <Absatz key={i} a={a} todoLabel={d.datenschutz.todoLabel} />
                ))}
              </Prose>
            </section>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <TodoBlock label={d.datenschutz.todoLabel} title={d.datenschutz.vorLivegangTitel}>
            {d.datenschutz.vorLivegangAbsaetze.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </TodoBlock>
        </div>
      </Shell>
    </Section>
  )
}
