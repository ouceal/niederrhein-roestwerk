# Warum die Icons in `public/` liegen und nicht in `app/`

Kurz: weil der Browser sie anfragt, ohne dass die Seite ihn dazu auffordert —
und weil unter `app/` die erste Ebene `[lang]` ist.

## Der Fehler, der dazu gefuehrt hat

```
⨯ Error: Page "/[lang]/page" is missing param "/favicon.ico"
  in "generateStaticParams()", which is required with "output: export" config.
GET /favicon.ico 500
```

Jeder Browser holt sich `/favicon.ico` von selbst, ohne Link im HTML. Solange
es die Datei gibt, wird sie ausgeliefert und die Sache ist erledigt. Gab es sie
nicht, blieb die Anfrage am Router haengen — und das erste Segment unserer
Route ist `[lang]`. Der Export-Modus verlangt, dass jeder Wert eines
dynamischen Segments in `generateStaticParams()` steht. `favicon.ico` steht da
naturgemaess nicht. Also 500 statt 404.

Dateien in `public/` werden vor dem Router ausgeliefert. Damit kommt die
Anfrage nie am dynamischen Segment an. Das ist die eigentliche Absicherung,
nicht der `<link>` im Kopf.

Dasselbe gilt fuer `/apple-touch-icon.png`: iOS sucht diesen Pfad, wenn im HTML
kein `apple-touch-icon` steht. Beides ist jetzt da — Datei **und** Link.

## Warum nicht `app/icon.svg`

Das hat funktioniert, aber es deckte nur den Fall ab, in dem der Browser dem
`<link>` folgt. `/favicon.ico` fragt er trotzdem. Jetzt liegen alle drei Dateien
am selben Ort, werden gleich behandelt und sind in
`app/[lang]/layout.tsx` unter `icons` ausdruecklich benannt.

## Die Dateien

| Datei | Groessen | Wofuer |
|---|---|---|
| `favicon.ico` | 16, 32, 48, 64 | Tab, Lesezeichen, Windows-Verknuepfung |
| `icon.svg` | beliebig | Moderne Browser, scharf auf jedem Display |
| `apple-touch-icon.png` | 180 × 180 | „Zum Home-Bildschirm" auf iOS |

Alle drei zeigen dieselbe Bohne. Die Rasterfassungen sind aus der SVG-Geometrie
gerechnet, nicht neu gezeichnet — wer das Zeichen aendert, aendert `icon.svg`
und erzeugt die beiden anderen daraus neu.
