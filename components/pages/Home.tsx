import { img } from '@/content/images'
import { HERO_VARIANTE, storyBilder, prozessBilder } from '@/content/home'
import { getDictionary, path, type Locale } from '@/content/i18n'
import { heroes } from '@/components/heroes'
import { Figure } from '@/components/Figure'
import { Shell, Section, Kicker, Prose } from '@/components/Shell'
import { ButtonLink } from '@/components/Button'
import { Newsletter } from '@/components/Newsletter'
import { CoffeeCard } from '@/components/CoffeeCard'

const Hero = heroes[HERO_VARIANTE]

export function Home({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)

  return (
    <>
      {/* 1 — Hero. Welche Variante laeuft, steht in content/home.ts. */}
      <Hero lang={lang} />

      {/* 2 — Drei Saetze. Keine Icons, nur Text und Linien. */}
      <Section>
        <Shell>
          <div className="grid gap-px border-t border-line sm:grid-cols-3 sm:gap-12 sm:border-t-0">
            {d.home.dreiSaetze.map((s) => (
              <div
                key={s.title}
                className="border-b border-line py-10 sm:border-b-0 sm:border-t sm:pb-0 sm:pt-10"
              >
                <h2 className="text-h3">{s.title}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Shell>
      </Section>

      {/* 3 — Herkunft. Das Bild laeuft bis an den Bildschirmrand, der Text
             steht daneben. Bild und Textseite wechseln von Block zu Block. */}
      <Section tone="surface">
        <div className="space-y-20 lg:space-y-28">
          {d.home.story.map((block, i) => {
            const bild = storyBilder[i]
            return (
              <div key={block.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Figure
                  image={img[bild.key]}
                  alt={d.alt[bild.key]}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={bild.imageLeft ? undefined : 'lg:order-last'}
                  imgClassName="aspect-[4/3] w-full object-cover"
                />
                <div
                  className={`px-6 sm:px-8 ${
                    bild.imageLeft ? 'lg:pr-12 xl:pr-24' : 'lg:pl-12 xl:pl-24'
                  }`}
                >
                  <h2 className="text-h2">{block.title}</h2>
                  <Prose className="mt-6">
                    {block.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </Prose>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 4 — Vier Schritte. */}
      <Section>
        <Shell>
          <Kicker>{d.home.prozessKicker}</Kicker>
          <h2 className="max-w-prose text-h2">{d.home.prozessTitel}</h2>

          <ol className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {d.home.prozess.map((s, i) => (
              <li key={s.title}>
                <Figure
                  image={img[prozessBilder[i]]}
                  alt={d.alt[prozessBilder[i]]}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="aspect-[4/5] overflow-hidden"
                />
                <p className="mt-6 font-sans text-xs tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-h3">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Shell>
      </Section>

      {/* 5 — Die zwei Kaffees. Ohne Preis: es gibt noch nichts zu kaufen. */}
      <Section tone="surface">
        <Shell>
          <Kicker>{d.home.sortimentKicker}</Kicker>
          <h2 className="max-w-prose text-h2">{d.home.sortimentTitel}</h2>
          <p className="mt-6 max-w-prose leading-relaxed text-muted">{d.home.sortimentText}</p>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
            <CoffeeCard lang={lang} index={0} />
            <CoffeeCard lang={lang} index={1} />
          </div>

          <div className="mt-14">
            <ButtonLink href={path(lang, 'kaffee')} variant="ghost">
              {d.home.sortimentCta}
            </ButtonLink>
          </div>
        </Shell>
      </Section>

      {/* 6 — Warteliste */}
      <Newsletter lang={lang} />
    </>
  )
}
