import { getDictionary, type Locale } from '@/content/i18n'
import { Shell, Section, Kicker } from '@/components/Shell'
import { Todo, TodoBlock, Rechtsvorrang } from '@/components/Todo'

/*
 * IMPRESSUM — PFLICHTANGABEN NACH § 5 DDG (seit 2024, löst § 5 TMG ab)
 *
 * Ein Impressum ist für jede geschäftsmäßige Website Pflicht, auch vor
 * dem ersten Verkauf. Fehlt es oder ist es unvollständig, ist das
 * abmahnfähig.
 *
 * Nichts davon darf geraten werden. Die Felder bleiben sichtbar als TODO
 * stehen, bis die echten Daten vorliegen — in jeder Sprachfassung.
 *
 * Die Pflicht gilt für den deutschen Anbieter. Die übersetzten Fassungen
 * sind eine Lesehilfe; maßgeblich ist die deutsche (siehe Rechtsvorrang).
 */

export function Impressum({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <Section>
      <Shell>
        <Kicker>{d.impressum.kicker}</Kicker>
        <h1 className="text-h1">{d.impressum.h1}</h1>

        <Rechtsvorrang text={d.rechtsvorrang} />

        <div className="mt-12 max-w-prose border-l-2 border-accent pl-6 text-sm leading-relaxed text-muted">
          {d.impressum.warnung}
        </div>

        <dl className="mt-12 max-w-3xl divide-y divide-line border-t border-line">
          {d.impressum.zeilen.map((z) => (
            <div key={z.label} className="grid gap-2 py-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8">
              <dt className="text-sm text-muted">{z.label}</dt>
              <dd className="space-y-2">
                <Todo label={d.impressum.todoLabel}>{d.impressum.todoEintragen}</Todo>
                <p className="max-w-prose text-sm leading-relaxed text-muted">{z.hinweis}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid max-w-3xl gap-6">
          <TodoBlock label={d.impressum.todoLabel} title={d.impressum.vsbgTitel}>
            <p>{d.impressum.vsbgText}</p>
          </TodoBlock>

          {/*
            Der Bildnachweis ist KEIN Platzhalter, sondern die Stelle, an der
            die KI-Herkunft offengelegt wird. Auf den Seiten selbst steht
            dafuer kein Hinweis unter den Bildern. Begruendung und die beiden
            Voraussetzungen stehen oben in content/images.ts. Diesen Absatz
            in KEINER Sprache entfernen, solange die Bilder stehen.
          */}
          <section className="border-l-2 border-line pl-6">
            <h2 className="font-serif text-h3">{d.impressum.bildnachweisTitel}</h2>
            <div className="mt-4 max-w-prose space-y-3 text-sm leading-relaxed text-muted">
              <p>{d.impressum.bildnachweisKi}</p>
              <p>{d.impressum.bildnachweisRest}</p>
            </div>
          </section>
        </div>
      </Shell>
    </Section>
  )
}
