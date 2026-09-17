import { copyFileSync, existsSync } from 'node:fs'

/**
 * Nach dem Build: die deutsche 404-Seite zusaetzlich als /404.html ablegen.
 *
 * Warum ueberhaupt:
 * Next.js schreibt beim Export eine eigene 404.html — schwarz auf weiss,
 * englisch, ohne die Schriften und Farben der Seite. Auf Netlify sieht das
 * niemand, weil dort die Catch-all-Regel aus netlify.toml die richtige
 * Seite ausliefert. Ueberall sonst aber schon: in der lokalen Vorschau,
 * auf einem anderen Host, in einer Offline-Kopie. Diese zwei Zeilen
 * sorgen dafuer, dass auch dort etwas Anstaendiges steht.
 *
 * Die kopierte Seite bringt ihr eigenes kleines Skript mit, das die
 * Sprache aus dem Pfad liest. Wer also unter /es/tippfehler landet und
 * diese Datei bekommt, sieht den Fehler auf Spanisch.
 *
 * Alle Verweise in der Seite sind absolut (/_next/..., /de/...), sie
 * funktioniert deshalb aus jedem Verzeichnis.
 */

const quelle = 'out/de/nicht-gefunden/index.html'
const ziel = 'out/404.html'

if (!existsSync(quelle)) {
  console.error(`404-Schritt: ${quelle} fehlt. Wurde der Slug umbenannt?`)
  process.exit(1)
}

copyFileSync(quelle, ziel)
console.log(`404-Schritt: ${quelle} -> ${ziel}`)
