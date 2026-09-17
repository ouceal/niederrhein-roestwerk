import localFont from 'next/font/local'

/**
 * Beide Schriften liegen als Variable-Font-woff2 im Repo (public/fonts/).
 * next/font/local baut daraus @font-face mit eigenem Hosting — es gibt
 * zur Laufzeit KEINEN Request an fonts.googleapis.com oder fonts.gstatic.com.
 *
 * Fraunces  — Serif mit warmem, leicht handwerklichem Duktus. Ueberschriften.
 * Inter     — neutrale Grotesk, sehr gute Lesbarkeit in kleinen Graden. Fliesstext.
 * Lizenz beider Schriften: SIL Open Font License 1.1.
 */

export const fraunces = localFont({
  src: '../public/fonts/fraunces-latin-variable.woff2',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-fraunces',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  // Metriken an Georgia angeglichen -> kein Sprung beim Font-Swap (CLS = 0)
  adjustFontFallback: 'Times New Roman',
})

export const inter = localFont({
  src: '../public/fonts/inter-latin-variable.woff2',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
})
