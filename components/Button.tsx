import Link from 'next/link'
import type { ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center rounded-none border px-7 py-3.5 font-sans text-sm tracking-wide no-underline transition-colors duration-150'

const variants = {
  /* Terracotta — die eine Akzentfarbe. Kontrast auf Creme: 5,6:1 */
  accent: 'border-accent bg-accent text-accent-fg hover:bg-fg hover:border-fg hover:text-bg',
  /* Fuer die gruene Flaeche: dort haette Terracotta zu wenig Kontrast. */
  onDeep: 'border-deep-fg bg-deep-fg text-deep hover:bg-transparent hover:text-deep-fg',
  ghost: 'border-line bg-transparent text-fg hover:border-fg',
} as const

export function ButtonLink({
  href,
  children,
  variant = 'accent',
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
}) {
  const cls = `${base} ${variants[variant]}`
  if (href.startsWith('#') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function Submit({
  children,
  variant = 'accent',
}: {
  children: ReactNode
  variant?: keyof typeof variants
}) {
  return (
    <button type="submit" className={`${base} ${variants[variant]} cursor-pointer`}>
      {children}
    </button>
  )
}
