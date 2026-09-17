import type { Config } from 'tailwindcss'

/**
 * Alle Farben kommen aus CSS-Variablen (app/globals.css).
 * Dark Mode laeuft ueber prefers-color-scheme, nicht ueber eine Klasse —
 * deshalb braucht es dafuer kein JavaScript.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        fg: 'var(--fg)',
        muted: 'var(--fg-muted)',
        line: 'var(--border)',
        accent: 'var(--accent)',
        'accent-fg': 'var(--accent-fg)',
        deep: 'var(--deep)',
        'deep-fg': 'var(--deep-fg)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
        shell: '78rem',
      },
      fontSize: {
        display: ['clamp(2.75rem, 1.6rem + 4.6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        h1: ['clamp(2.25rem, 1.5rem + 3vw, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 1.3rem + 1.8vw, 2.625rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        lead: ['clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 7vw, 9rem)',
      },
    },
  },
  plugins: [],
}

export default config
