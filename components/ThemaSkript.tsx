/**
 * Das Skript, das vor dem ersten Bild laeuft.
 *
 * Es steht ganz oben in <body> — bewusst nicht in einem selbst
 * gerenderten <head>, siehe die Begruendung in app/[lang]/layout.tsx.
 * Entscheidend ist nicht, ob es in <head> oder <body> steht, sondern
 * dass es blockierend ist und vor dem Inhalt kommt; beides trifft hier
 * zu. Nachgeladen aus einer Datei darf es nicht werden.
 *
 * Der Grund ist eine Zehntelsekunde: der Browser
 * zeichnet die Seite, sobald er kann. Kommt die Entscheidung ueber das
 * Farbschema auch nur einen Frame spaeter, sieht der Besucher erst das
 * helle Bild und dann den Umschlag ins Dunkle. Dieses Aufblitzen ist
 * das Einzige, was an einem Farbschema-Umschalter wirklich stoert, und
 * es ist auch das Einzige, das man nicht nachtraeglich reparieren kann.
 *
 * Es setzt drei Attribute auf <html>:
 *   data-theme  light | dark   — was gilt, daran haengen die Farben
 *   data-wahl   system | hell | dunkel — was gewaehlt wurde, daran
 *               haengt das Haekchen im Menue
 *   data-js     nur vorhanden  — daran haengt, dass der Knopf ueberhaupt
 *               sichtbar wird; ohne Skript bleibt er verborgen
 *
 * Alles in try/catch: in einem privaten Fenster kann schon das Lesen
 * von localStorage eine Ausnahme werfen. Passiert das, bleibt die Seite
 * einfach bei dem, was das Betriebssystem sagt — der Zustand, den sie
 * vor diesem Umschalter ohnehin hatte.
 */

const SPEICHER = 'farbschema'

// Als eine Zeile ohne Zeilenumbrueche, damit im HTML kein unnoetiger
// Ballast steht. Keine Vorlagenzeichenfolgen, keine Pfeilfunktionen:
// das hier laeuft vor allem anderen und soll in jedem Browser starten.
const skript = `(function(){try{var r=document.documentElement;var g=localStorage.getItem('${SPEICHER}');var w=(g==='hell'||g==='dunkel')?g:'system';var d=w==='dunkel'||(w==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);r.dataset.theme=d?'dark':'light';r.dataset.wahl=w;r.dataset.js='1';}catch(e){}})()`

export function ThemaSkript() {
  return <script dangerouslySetInnerHTML={{ __html: skript }} />
}

export { SPEICHER }
