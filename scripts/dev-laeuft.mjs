import { existsSync, renameSync } from 'node:fs'

/**
 * Vor dem Build: pruefen, ob noch ein `next dev` laeuft.
 *
 * Warum das noetig ist:
 * `next dev` und `next build` benutzen BEIDE das Verzeichnis .next/ .
 * Wer baut, waehrend der Entwicklungsserver offen ist, loescht dem
 * laufenden Server seine eigenen Chunks unter den Fuessen weg. Der Server
 * merkt davon nichts — er sucht sie beim naechsten Aufruf einfach weiter
 * und faellt auf die Nase:
 *
 *   ⨯ Error: Cannot find module './948.js'
 *     Require stack: .next/server/webpack-runtime.js
 *
 * Danach antwortet JEDE Seite mit 500, bis .next/ geloescht und der Server
 * neu gestartet wird. Dateien aus public/ (favicon.ico, icon.svg,
 * apple-touch-icon.png) bleiben dabei auf 200, weil sie direkt vom
 * Datentraeger kommen und nicht durch webpack laufen. Genau deshalb sieht
 * es so aus, als seien nur die Seiten kaputt — und genau deshalb kam der
 * Fehler nach dem Icon-Umzug immer wieder.
 *
 * Warum nicht einfach zwei getrennte Verzeichnisse?
 * Weil das mit `output: 'export'` nicht geht. Next deutet ein eigenes
 * distDir in diesem Modus als EXPORT-Ziel um und zwingt den Build zurueck
 * nach .next/ (node_modules/next/dist/build/index.js, "hasCustomExportOutput").
 * Ein eigenes distDir haette also nur out/ zerstoert — und damit den
 * 404-Schritt und Netlifys publish = "out".
 *
 * Bleibt: den Zusammenstoss verhindern, statt ihn zu reparieren.
 */

// Auf Netlify und in jeder CI gibt es keinen Entwicklungsserver.
if (process.env.NETLIFY || process.env.CI) {
  process.exit(0)
}

const abbrechen = (grund) => {
  console.error('')
  console.error('  Build abgebrochen: es laeuft noch ein Entwicklungsserver.')
  console.error(`  (${grund})`)
  console.error('')
  console.error('  next dev und next build teilen sich .next/ . Ein Build')
  console.error('  wuerde dem laufenden Server seine Chunks wegloeschen; danach')
  console.error('  antwortet dort jede Seite mit 500.')
  console.error('')
  console.error('  Erst den Entwicklungsserver beenden (Strg+C), dann bauen.')
  console.error('')
  process.exit(1)
}

/**
 * Erkennung 1 — der Netzwerkweg.
 *
 * /_next/static/chunks/webpack.js gibt es nur im Entwicklungsmodus; im
 * Export sind alle Chunks mit einem Hash im Namen. Antwortet dort etwas
 * mit 200, laeuft ein `next dev`. Deckt die ueblichen Ports ab und
 * funktioniert auf jedem Betriebssystem.
 */
async function ueberPort() {
  for (let port = 3000; port <= 3010; port++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/_next/static/chunks/webpack.js`, {
        signal: AbortSignal.timeout(400),
      })
      if (res.ok) return `next dev antwortet auf Port ${port}`
    } catch {
      // Port zu oder nichts dahinter — weiter.
    }
  }
  return null
}

/**
 * Erkennung 2 — der Dateiweg.
 *
 * Windows laesst ein Verzeichnis nicht umbenennen, solange ein anderer
 * Prozess darin Dateien offen haelt; der Watcher von next dev tut genau
 * das. Schlaegt das Umbenennen fehl, ist .next/ in Benutzung — egal auf
 * welchem Port. Unter Linux und macOS gelingt das Umbenennen auch bei
 * offenen Dateien, dort traegt allein Erkennung 1.
 */
function ueberDateisperre() {
  if (!existsSync('.next')) return null
  const test = '.next.build-check'
  try {
    renameSync('.next', test)
  } catch {
    return '.next/ ist von einem anderen Prozess belegt'
  }
  try {
    renameSync(test, '.next')
  } catch (err) {
    console.error(`  Warnung: ${test} konnte nicht zurueckbenannt werden.`)
    throw err
  }
  return null
}

const grund = (await ueberPort()) ?? ueberDateisperre()
if (grund) abbrechen(grund)
