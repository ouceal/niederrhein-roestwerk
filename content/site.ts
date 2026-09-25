/* ============================================================================
 *
 *  NIEDERRHEIN ROESTWERK — zentrale Seiten-Konfiguration
 *
 * ----------------------------------------------------------------------------
 *  !! VOR DEM ERSTEN VERKAUF ZWINGEND ERGAENZEN !!
 * ----------------------------------------------------------------------------
 *
 *  Die Seite verkauft: zwei Kaffees in 250 g / 500 g / 1 kg, Preise und
 *  Versand in content/shop.ts. Bestellt wird per vorausgefuellter
 *  WhatsApp- oder E-Mail-Nachricht, der Vertrag kommt erst mit unserer
 *  Bestaetigung zustande. Punkt 1 und 5 sind damit umgesetzt (Grundpreis
 *  je kg, Seite „Bestellung & Versand"). Der Rest ist VOR DEM LIVEGANG
 *  Pflicht — ohne diese Punkte ist der Shop abmahnfaehig:
 *
 *   1. PREISANGABENVERORDNUNG (PAngV)
 *      Gesamtpreis inkl. USt UND Grundpreis je 100 g bei jedem Kaffee,
 *      in unmittelbarer Naehe zum Endpreis, gleiche Schriftgroesse.
 *      Hinweis "inkl. MwSt., zzgl. Versandkosten" mit Link zur Versandseite.
 *
 *   2. LMIV (LebensmittelinformationsVO, VO (EU) 1169/2011)
 *      Vor Abschluss der Bestellung sichtbar, ohne Zusatzkosten:
 *      Bezeichnung des Lebensmittels, Zutatenverzeichnis, Allergene,
 *      Nettofuellmenge, Mindesthaltbarkeitsdatum-Regel,
 *      Name + Anschrift des Lebensmittelunternehmers, Ursprungsland,
 *      Naehrwertdeklaration je 100 g. Roestdatum empfohlen.
 *
 *   3. WIDERRUFSBELEHRUNG + Muster-Widerrufsformular
 *      Eigene Seite, verlinkt in Footer und Checkout. Hinweis zum
 *      Erloeschen des Widerrufsrechts bei geoeffneten Lebensmitteln pruefen.
 *
 *   4. AGB
 *      Eigene Seite, im Bestellprozess aktiv zu bestaetigen (keine Vorauswahl).
 *
 *   5. VERSANDKOSTEN + LIEFERZEITEN
 *      Eigene, aus jeder Produktseite verlinkte Seite. Lieferzeit konkret
 *      ("2-4 Werktage"), nicht "in der Regel schnell".
 *
 *   6. BUTTON-LOESUNG (§ 312j Abs. 3 BGB)
 *      Greift erst bei einer Bestellung, die AUF DER SEITE verbindlich
 *      abgeschlossen wird. Solange die Seite nur eine Nachricht vorbereitet
 *      und wir bestaetigen, ist das eine Anfrage — mit einem echten
 *      Checkout gilt dann: 
 *      Der Bestellbutton muss exakt "Zahlungspflichtig bestellen" heissen
 *      (oder eine ebenso eindeutige Formulierung). Nicht "Absenden",
 *      nicht "Weiter", nicht "Jetzt kaufen" als Alleinbeschriftung.
 *
 *   7. ZUSAETZLICH PRUEFEN
 *      - Verpackungsregister LUCID (VerpackG) vor dem ersten Versand
 *      - Kaffeesteuer (KaffeeStG) bei Eigenroestung: Anmeldung beim Hauptzollamt
 *      - Bio-Auslobung nur mit Zertifizierung + Oeko-Kontrollstellennummer
 *      - OS-Plattform-Hinweis / Verbraucherschlichtung (§ 36 VSBG)
 *      - Cookie-Banner, sobald ein Zahlungs-, Analyse- oder Chat-Dienst
 *        Cookies setzt (aktuell setzt die Seite KEINE Cookies, siehe README)
 *
 * ==========================================================================*/

/**
 * Der Schalter fuer den Livegang. EIN Wert, an einer Stelle.
 *
 * Solange er `true` ist, sagt die Seite jeder Suchmaschine, dass sie
 * nichts aufnehmen soll — im <head> jeder einzelnen Seite UND in
 * robots.txt. Beides, weil beides fuer sich allein umgangen werden kann:
 * robots.txt ist eine Bitte, das noindex im Kopf eine Anweisung, und
 * eine Seite, die in robots.txt gesperrt ist, kann trotzdem als nackter
 * Link im Suchergebnis auftauchen.
 *
 * Warum ueberhaupt: das Impressum steht noch komplett auf TODO. Eine
 * Firmenseite ohne Impressum ist in Deutschland abmahnfaehig, und
 * genau solche Seiten findet man ueber die Suche. Die Seite darf
 * erreichbar sein — ansehen, herzeigen, testen —, sie soll nur nicht
 * gefunden werden.
 *
 * VOR DEM LIVEGANG: hier auf `false` stellen. Das ist die einzige
 * Aenderung, die dafuer noetig ist. Vorher abarbeiten:
 *   - Impressum ausfuellen (alle vier Sprachen)
 *   - Datenschutzerklaerung vervollstaendigen und pruefen lassen
 *   - Double-Opt-In fertig bauen, sonst darf der Newsletter nicht raus
 *   - noindex-Liste in app/[lang]/[slug]/page.tsx: Impressum und
 *     Datenschutz herausnehmen, sobald sie fertig sind
 * Die vollstaendige Liste steht im README unter „Noch offen".
 */
export const vorLivegang = true

export const site = {
  name: 'Niederrhein Röstwerk',
  shortName: 'Röstwerk',
  domain: 'niederrhein-roestwerk.de',
  url: 'https://niederrhein-roestwerk.de',
  locale: 'de_DE',
  city: 'Willich',
  region: 'Nordrhein-Westfalen',
  description:
    'Kleine Kaffeerösterei in Willich. Ein Ursprung, zwei Kaffees, frisch geröstet in kleinen Chargen. Jetzt bestellen: 250 g, 500 g oder 1 kg.',

  /* TODO vor Launch: echte Kontaktdaten eintragen. Nichts hier erfinden. */
  contact: {
    email: 'TODO@niederrhein-roestwerk.de',
    /* Dieselbe Nummer nimmt die Bestellungen per WhatsApp an,
       siehe content/shop.ts → bestellKanal. */
    phone: '+49 1521 6629522',
  },

  /* TODO vor Launch: Startdatum eintragen, sobald es feststeht.
     Solange es leer ist, zeigt die Seite bewusst kein Datum an. */
  launchDate: '' as string,
} as const

/**
 * Die Studio-Zeile im Footer.
 *
 * Bewusst in der Schrift und den Farben DIESER Seite gesetzt, nicht in
 * Ouceals eigenem Purple und nicht in Syne. Eine Kundenseite traegt die
 * Handschrift des Kunden; ein fremdes Violett waere hier eine zweite
 * Akzentfarbe und eine dritte Schriftfamilie — beides bricht das System.
 * Die Zeile wirkt als Signatur, gerade weil sie leise ist.
 *
 * Der Link ist absichtlich ein normaler, folgbarer Link: genau darin liegt
 * der Wert einer Credit-Zeile.
 */
export const studio = {
  /* Englisch, obwohl die Seite deutsch ist: das ist die Signatur des
     Studios, kein Seiteninhalt. Steht so auf allen Ouceal-Projekten. */
  text: 'Design by Ouceal',
  url: 'https://ouceal.de',
} as const

export const nav = [
  { href: '/kaffee/', label: 'Kaffee' },
  { href: '/roesterei/', label: 'Rösterei' },
  { href: '/ueber-uns/', label: 'Über uns' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const

export const legalNav = [
  { href: '/impressum/', label: 'Impressum' },
  { href: '/datenschutz/', label: 'Datenschutz' },
] as const
