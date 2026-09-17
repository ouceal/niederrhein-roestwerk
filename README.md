# Niederrhein Röstwerk — Website

Statische Marketing- und Pre-Launch-Seite für eine kleine Kaffeerösterei in Willich, NRW.
Ziel der Seite: Geschichte erzählen und E-Mail-Adressen für die Warteliste sammeln.
**Kein Shop, kein Warenkorb, keine Preise.**

Next.js 14 (App Router) · TypeScript · Tailwind CSS · statischer Export · Netlify

---

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
```

> **Nicht in OneDrive ablegen.** Dort bricht `npm install` zuverlässig ab: die
> Echtzeit-Synchronisation greift auf `node_modules` zu, während npm noch
> schreibt (`ENOTEMPTY`). Gemessen: dieselben 109 Pakete laufen außerhalb von
> OneDrive in 16 Sekunden durch, innerhalb hängen sie unbegrenzt. Das Projekt
> liegt deshalb unter `C:\dev\niederrhein-roestwerk`.

```bash
npm run build    # baut nach ./out
npm run typecheck
```

`npm run build` erzeugt reines HTML in `out/`. Es gibt keinen Server, keine Functions
und keine Runtime — `next.config.mjs` steht auf `output: 'export'`.

## Deploy auf Netlify

Repo verbinden, fertig. `netlify.toml` setzt bereits:

| | |
|---|---|
| Build command | `npm run build` |
| Publish directory | `out` |
| Node | 20 |

Zusätzlich stehen dort Cache-Header für `/_next/static`, `/fonts` und `/video`
sowie eine Content-Security-Policy, die ausschließlich eigene Ressourcen erlaubt.

---

## Vier Sprachen

Die Seite gibt es auf Deutsch, Englisch, Italienisch und Spanisch. Unter `/`
liegt keine Seite: dort steht eine Weiche, die auf `/de/`, `/en/`, `/it/`
oder `/es/` schickt.

**Die Slugs sind übersetzt.** Jede Seite hat in jeder Sprache ihren eigenen Pfad:

| Seite | de | en | it | es |
|---|---|---|---|---|
| Kaffee | `/de/kaffee/` | `/en/coffee/` | `/it/caffe/` | `/es/cafe/` |
| Rösterei | `/de/roesterei/` | `/en/roastery/` | `/it/torrefazione/` | `/es/tostaduria/` |
| Über uns | `/de/ueber-uns/` | `/en/about/` | `/it/chi-siamo/` | `/es/sobre-nosotros/` |
| Kontakt | `/de/kontakt/` | `/en/contact/` | `/it/contatti/` | `/es/contacto/` |

Der Preis dieser Entscheidung: eine neue Seite braucht vier Slugs. Fehlt einer,
**bricht der Build** — dafür sorgt der Typ in `content/i18n/config.ts`, nicht
die Disziplin.

### Wie die Weiche auf `/` funktioniert

Zwei Wege, und beide müssen funktionieren:

1. Auf Netlify greift eine serverseitige Weiterleitung (`netlify.toml`), die
   den `Accept-Language`-Header auswertet. `force = true` ist dort nötig, weil
   unter `/` eine echte Datei liegt — ohne das gewinnt die Datei.
2. Überall sonst (lokale Vorschau, anderer Host) springt `public/index.html`
   ein: erst ein Skript, das die Browsersprache liest, und darunter vier
   sichtbare Links für den Fall, dass JavaScript aus ist.

### Rechtstexte

Impressum und Datenschutz sind übersetzt, **die deutsche Fassung ist die
maßgebliche**. Dieser Hinweis steht in `en`, `it` und `es` über dem Text und
in `de` bewusst nicht (`rechtsvorrang` im Wörterbuch ist dort `null`).

### Formulare

Acht Netlify-Formulare: pro Sprache eines für Kontakt und eines für die
Warteliste. Alle mit Honeypot (`bot-field`) und Weiterleitung auf die
Danke-Seite derselben Sprache.

| Name | Wo | Felder |
|---|---|---|
| `kontakt-de` … `kontakt-es` | Kontaktseite je Sprache | name, email, nachricht, einwilligung |
| `warteliste-de` … `warteliste-es` | Auf jeder Seite unten | email, einwilligung |

Netlify erkennt sie beim Deploy direkt im exportierten HTML (`data-netlify="true"`
plus verstecktes `form-name`-Feld). Es braucht dafür keine zusätzliche
`__forms.html` und kein Build-Plugin.

Die Einwilligungs-Checkbox ist `required` und **nicht** vorausgewählt — in allen
vier Sprachen.

### Icons

`favicon.ico`, `icon.svg` und `apple-touch-icon.png` liegen in `public/`,
nicht als `app/icon.svg`. Der Grund ist die Sprachstruktur: unter `app/` ist
die erste Ebene `[lang]`, und ein Pfad, den der Browser von sich aus anfragt,
landete sonst in dieser dynamischen Route — mit `output: 'export'` gibt das
einen 500er statt eines Icons. Ausführlich in **`docs/icons.md`**.

---

## Rechtliches

### Cookies

Die Seite setzt **keine Cookies**. Kein Analytics, kein Tracking, kein Chat-Widget,
keine externen Schriften, keine eingebetteten Karten oder Videoplattformen.
Deshalb gibt es **bewusst kein Cookie-Banner** — ein Banner ohne einwilligungs&shy;pflichtige
Technologie ist nur Reibung.

Sobald ein Dienst dazukommt, der Cookies setzt oder auf Endgeräte-Informationen
zugreift (Zahlungsanbieter, Analytics, eingebettete Videos), ist vorher eine
Einwilligung nach § 25 TDDDG nötig — und dann braucht es das Banner.

### Bildrechte — wichtig

Die Farm-, Ernte- und Trocknungsbilder sind **KI-generiert**. Unter den Bildern
steht dazu bewusst **kein** Hinweis: die Offenlegung sitzt im **Bildnachweis im
Impressum**. Eine Fußnote unter jedem Bild bricht den Lesefluss und lässt die
Seite unfertig wirken, ohne rechtlich mehr abzudecken.

Diese Entscheidung steht und fällt mit zwei Bedingungen. Beide sind aktuell
erfüllt und müssen es bleiben:

**1. Kein Text gibt die Bilder als eigene Lieferkette aus.** Nicht schreiben:
„unsere Farm", „unsere Partner", „unsere Erntehelfer", „wir arbeiten direkt mit
diesen Bauern". Keine Bildunterschrift, die ein konkretes Gegenüber behauptet,
und keine Direct-Trade-Aussage, die sich auf ein solches Bild stützt. Zulässig
bleibt die sachliche Herkunftsangabe „Kaffee aus Sidamo, Äthiopien", solange sie
stimmt, und die allgemeine, passive Beschreibung des Verfahrens („die Kirschen
werden gewaschen"). Sobald eine Besitzbehauptung dazukommt, ist das eine
irreführende Angabe nach **§ 5 UWG** — völlig unabhängig von jeder
KI-Kennzeichnung.

**2. Die KI-Herkunft steht im Bildnachweis.** `content/images.ts` pflegt dafür
zwei Exporte: `kiGeneriert` (die Liste der betroffenen Dateien) und
`bildnachweis` (der Text, den `/impressum` ausgibt). Kommt ein KI-Bild dazu,
gehört es in die Liste.

Zum Hintergrund: **Art. 50 KI-VO** gilt seit dem 02.08.2026 und verlangt
Kennzeichnung für Inhalte, die realen Personen, Orten oder Ereignissen merklich
ähneln und fälschlich echt wirken können. Ein generisches Stimmungsbild einer
Anbauregion ist ein Grenzfall, der eher als symbolische Darstellung gilt — kein
konkreter Kaufgegenstand, keine bestimmte Farm, keine reale Person. Der
Bildnachweis deckt diesen Graubereich ab. Kennzeichnung und Irreführung sind
zwei getrennte Pflichten: eine Kennzeichnung heilt keine falsche Aussage, und
eine wahre Aussage macht die Kennzeichnung nicht überflüssig.

Das ist keine Rechtsberatung. Vor dem Livegang mitprüfen lassen.

Produktfotos (Verpackung, Etikett) und ein Porträt müssen **selbst fotografiert**
werden. Die Bilder in `kaffee/portraits/` gehören nicht auf diese Seite.

---

## Noch offen — vor dem Livegang

- [ ] **Impressum** ausfüllen. Steht aktuell komplett auf TODO und ist auf `noindex`, in allen vier Sprachen. Ein fehlendes Impressum ist abmahnfähig.
- [ ] **Datenschutzerklärung** vervollständigen und prüfen lassen. Das Gerüst beschreibt bereits korrekt, was die Seite technisch tut; es fehlen Verantwortlicher, Speicherfristen und der Newsletter-Dienstleister.
- [ ] `noindex` auf Impressum und Datenschutz entfernen, sobald sie fertig sind (`noindex`-Liste in `app/[lang]/[slug]/page.tsx`).
- [ ] **Double-Opt-In zu Ende bauen, pro Sprache.** Netlify Forms speichert die Adresse nur. Es fehlt: Bestätigungsmail mit Einmal-Link **in der Sprache der Anmeldung**, Versand erst nach Klick, Protokollierung von Anmelde- und Bestätigungszeitpunkt plus IP. Ohne diesen Teil ist der Versand nicht rechtssicher — und alle vier Formularseiten versprechen die Bestätigungsmail bereits.
- [ ] Echte Kontaktdaten in `content/site.ts`.
- [ ] Echte Kaffeedaten in allen vier Wörterbüchern — Namen, Aufbereitung, Anbauhöhe sind Platzhalter.
- [ ] Gründergeschichte durch die echte ersetzen, in allen vier Sprachen, eigenes Porträt einsetzen.
- [ ] Foto für den Schritt „Verpackung": in `components/ProzessSchritt.tsx` steht in `schrittBilder` ein `null`. Dort einen Bildschlüssel eintragen, und der Schritt springt von selbst ins zweispaltige Layout zurück — der alt-Text kommt dann automatisch aus allen vier Wörterbüchern.
- [ ] Domain in `content/site.ts` prüfen — sie steckt in Canonical-Tags, hreflang, OG-Bild-URL und Sitemap.
- [ ] Übersetzungen von einem Muttersprachler gegenlesen lassen. Sie sind sorgfältig gemacht, aber nicht von Muttersprachlern geprüft.

### Bevor irgendetwas verkauft wird

Die vollständige Liste steht als Kommentar oben in **`content/site.ts`**:
Preisangabenverordnung inkl. Grundpreis je 100 g, LMIV-Pflichtangaben vor
Bestellabschluss, Widerrufsbelehrung, AGB, Versandkosten, Button-Beschriftung
„Zahlungspflichtig bestellen" — dazu LUCID-Registrierung, Kaffeesteuer beim
Hauptzollamt und die Frage der Bio-Zertifizierung.

---

## Performance

Der Export enthält keine externen Requests. Gemessen werden sollte trotzdem:

```bash
npx serve out
npx lighthouse http://localhost:3000 --preset=desktop
npx lighthouse http://localhost:3000 --form-factor=mobile
```

Was baulich schon gesetzt ist: `width`/`height` an jedem Bild und feste
Seitenverhältnisse an jedem Bildcontainer (CLS 0), Font-Fallback-Metriken über
`adjustFontFallback` (kein Sprung beim Font-Swap), Preload des Hero-Posters,
Videos erst ab 768 px.

Ein Punkt bewusst so gelassen: Auf `/kaffee`, `/roesterei` und `/ueber-uns` steht
das erste große Bild auf `loading="lazy"`, weil die Vorgabe `eager` ausschließlich
für das Hero erlaubt. Wer dort das letzte bisschen LCP holen will, setzt genau
dieses eine Bild pro Seite auf `priority` — die `Figure`-Komponente kann das schon.
