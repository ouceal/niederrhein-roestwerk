import { getDictionary, path, type Locale } from '@/content/i18n'
import { Shell, Section, Prose } from '@/components/Shell'
import { ButtonLink } from '@/components/Button'

export function Danke({ lang }: { lang: Locale }) {
  const d = getDictionary(lang)
  return (
    <Section>
      <Shell>
        <h1 className="max-w-prose text-h1">{d.danke.h1}</h1>
        <Prose className="mt-8">
          {d.danke.absaetze.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Prose>
        <div className="mt-10">
          <ButtonLink href={path(lang)} variant="ghost">
            {d.danke.zurueck}
          </ButtonLink>
        </div>
      </Shell>
    </Section>
  )
}
