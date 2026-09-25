import { getDictionary, path, type Locale } from '@/content/i18n'
import { euro, gewicht, groessen, grundpreisJeKg, versand } from '@/content/shop'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { ButtonLink } from '@/components/Button'
import { TodoBlock } from '@/components/Todo'
import { Grossmengen } from '@/components/shop/Grossmengen'

/**
 * Bestellung & Versand.
 *
 * Die Seite, auf die jeder „zzgl. Versand"-Hinweis zeigt. Die PAngV will
 * die Versandkosten VOR der Bestellung auffindbar haben — nicht erst in
 * der Bestaetigung. Alle Zahlen kommen aus content/shop.ts, hier steht
 * keine einzige von Hand.
 */
export function Versand({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)
  const v = d.versandSeite
  const t = d.shop

  return (
    <>
      <Section>
        <Shell>
          <Kicker>{v.kicker}</Kicker>
          <h1 className="max-w-prose text-h1">{v.h1}</h1>
          <Prose className="mt-8">
            <p>{v.intro}</p>
          </Prose>

          <h2 className="mt-20 text-h2">{v.schritteTitel}</h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {v.schritte.map((s, i) => (
              <li key={s.title} className="border-t border-fg pt-6">
                <p className="font-sans text-xs tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-h3">{s.title}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <ButtonLink href={`${path(lang, 'kaffee')}#shop`}>{d.hero.cta}</ButtonLink>
          </div>
        </Shell>
      </Section>

      <Section tone="surface">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="min-w-0">
              <h2 className="text-h2">{v.preiseTitel}</h2>
              <table className="mt-8 w-full border-t border-line text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-muted">
                    <th scope="col" className="py-3 pr-4 font-normal">{v.spalteGroesse}</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">{v.spaltePreis}</th>
                    <th scope="col" className="py-3 text-right font-normal">{v.spalteGrundpreis}</th>
                  </tr>
                </thead>
                <tbody>
                  {groessen.map((g) => (
                    <tr key={g.id} className="border-b border-line">
                      <th scope="row" className="py-4 pr-4 font-serif text-lg font-normal">{gewicht(g.gramm)}</th>
                      <td className="py-4 pr-4 text-right tabular-nums">{euro(g.preis, lang)}</td>
                      <td className="py-4 text-right tabular-nums text-muted">
                        {t.jeKg.replace('{betrag}', euro(grundpreisJeKg(g.preis, g.gramm), lang))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-muted">
                {d.kaffees[0].name} · {d.kaffees[1].name}
              </p>
            </div>

            <div className="min-w-0 space-y-12">
              <div>
                <h2 className="text-h3">{v.versandTitel}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">
                  {v.versandText
                    .replace('{kosten}', euro(versand.kosten, lang))
                    .replace('{frei}', euro(versand.freiAb, lang))}
                </p>
              </div>
              <div>
                <h2 className="text-h3">{v.lieferzeitTitel}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">{v.lieferzeitText}</p>
              </div>
              <div>
                <h2 className="text-h3">{v.zahlungTitel}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">{v.zahlungText}</p>
              </div>
            </div>
          </div>
        </Shell>
      </Section>

      <Grossmengen lang={lang} />

      {/* Sichtbar, bis es erledigt ist. Die Seite steht bis dahin ohnehin
          auf noindex (vorLivegang in content/site.ts). */}
      <Section className="!pt-0">
        <Shell>
          <TodoBlock label={d.impressum.todoLabel} title={v.todoTitel}>
            <ul className="list-disc space-y-1.5 pl-5">
              {v.todoPunkte.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </TodoBlock>
        </Shell>
      </Section>
    </>
  )
}
