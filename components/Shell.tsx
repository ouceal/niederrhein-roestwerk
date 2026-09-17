import type { ReactNode } from 'react'

/** Zentrierter Inhaltsrahmen. Ein Wert, eine Stelle. */
export function Shell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-shell px-6 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

/** Vertikaler Abstand zwischen Sektionen. Bewusst grosszuegig. */
export function Section({
  children,
  className = '',
  id,
  tone = 'bg',
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: 'bg' | 'surface' | 'deep'
}) {
  const tones = {
    bg: 'bg-bg text-fg',
    surface: 'bg-surface text-fg',
    deep: 'bg-deep text-deep-fg',
  } as const
  return (
    <section id={id} className={`${tones[tone]} py-section ${className}`}>
      {children}
    </section>
  )
}

/** Kleine Grossbuchstaben-Zeile ueber einer Ueberschrift. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-muted">{children}</p>
  )
}

/** Fliesstext, hart begrenzt auf 68 Zeichen Zeilenlaenge. */
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`max-w-prose space-y-5 text-lead font-light leading-relaxed text-muted ${className}`}
    >
      {children}
    </div>
  )
}
