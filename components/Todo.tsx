import type { ReactNode } from 'react'

/**
 * Sichtbarer Platzhalter.
 *
 * Absichtlich auffällig: diese Seite darf NICHT live gehen, solange hier
 * noch etwas steht. Keine erfundene Adresse, keine erfundene USt-IdNr,
 * kein aus dem Netz kopierter Rechtstext — alles davon ist schlimmer als
 * eine sichtbare Lücke.
 *
 * `label` kommt aus dem Wörterbuch, damit auch die Marke "TODO" in der
 * Sprache der Seite steht.
 */
export function Todo({ label, children }: { label: string; children: ReactNode }) {
  return (
    <mark className="inline-block border border-dashed border-accent bg-transparent px-2 py-0.5 font-sans text-sm text-accent">
      <span className="sr-only">{label}: </span>
      <span aria-hidden="true">TODO: </span>
      {children}
    </mark>
  )
}

export function TodoBlock({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="border border-dashed border-accent p-6">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-3 font-serif text-h3">{title}</p>
      <div className="mt-3 max-w-prose space-y-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}

/**
 * Der Hinweis, dass die deutsche Fassung der Rechtstexte maßgeblich ist.
 *
 * In der deutschen Fassung ist `text` null und hier kommt nichts heraus —
 * dort gibt es nichts zu relativieren. In den anderen drei Sprachen steht
 * der Satz über dem Rechtstext, nicht darunter: wer die Seite abbricht,
 * soll ihn trotzdem gelesen haben.
 */
export function Rechtsvorrang({ text }: { text: string | null }) {
  if (!text) return null
  return (
    <p className="mt-6 max-w-prose border border-line bg-surface px-5 py-3 text-sm leading-relaxed text-muted">
      {text}
    </p>
  )
}
