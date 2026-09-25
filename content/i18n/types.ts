import type { ImgKey } from '../images'
import type { Mahlgrad } from '../shop'

/**
 * Die Form eines Woerterbuchs.
 *
 * Jede Sprachdatei muss diesen Typ vollstaendig erfuellen. Fehlt ein Satz,
 * ist es ein Build-Fehler und keine leere Stelle auf der Website. Das ist
 * der eigentliche Grund, warum die Texte ueberhaupt typisiert sind.
 *
 * Keine Platzhalter-Interpolation, keine Bibliothek: vier Objekte, die
 * TypeScript gegeneinander prueft.
 */

/** Ein Text, der um einen Link herum gebaut wird: davor und danach. */
export type Zwei = readonly [string, string]

export type Dictionary = {
  /** Was im <html lang> steht und was der Umschalter anzeigt, kommt aus config.ts */

  meta: {
    /** Titelzusatz hinter jedem Seitentitel */
    siteTitle: string
    homeTitle: string
    homeDescription: string
    kaffeeTitle: string
    kaffeeDescription: string
    roestereiTitle: string
    roestereiDescription: string
    ueberUnsTitle: string
    ueberUnsDescription: string
    kontaktTitle: string
    kontaktDescription: string
    dankeTitle: string
    dankeDescription: string
    impressumTitle: string
    impressumDescription: string
    datenschutzTitle: string
    datenschutzDescription: string
    versandTitle: string
    versandDescription: string
  }

  /**
   * Farbschema-Wahl. „system" heisst: dem Betriebssystem folgen — das
   * ist die Voreinstellung und fuer die meisten die richtige, weil ihr
   * Telefon abends von selbst umschaltet.
   */
  thema: {
    /** aria-label der Wahl, z. B. „Farbschema wählen" */
    aria: string
    /** Ueberschrift ueber der Liste im schmalen Menue */
    titel: string
    system: string
    hell: string
    dunkel: string
  }
  nav: {
    kaffee: string
    roesterei: string
    ueberUns: string
    kontakt: string
    /** Beschriftung des Warenkorb-Knopfs in der Kopfzeile */
    bestellung: string
    /** aria-label der Hauptnavigation */
    ariaHaupt: string
    ariaSeiten: string
    ariaRecht: string
    ariaSprache: string
    /** aria-label des Burger-Knopfs */
    ariaMenue: string
    /**
     * Nur das Wort „Sprache". Der Knopf setzt daraus zusammen mit dem
     * eigenen Namen der Sprache seinen zugaenglichen Namen: „Sprache:
     * Deutsch". Deshalb hier kein fertiger Satz — die Namen der Sprachen
     * stehen in localeNames und werden nie uebersetzt.
     */
    sprache: string
    zumInhalt: string
  }

  footer: {
    beschreibung: string
    spalteSeiten: string
    spalteRecht: string
    spalteKontakt: string
    impressum: string
    datenschutz: string
    versand: string
    cookieZeile: string
  }

  hero: {
    kicker: string
    headline: string
    sub: string
    cta: string
  }

  home: {
    dreiSaetze: readonly [
      { readonly title: string; readonly text: string },
      { readonly title: string; readonly text: string },
      { readonly title: string; readonly text: string },
    ]
    story: readonly [
      { readonly title: string; readonly paragraphs: readonly string[] },
      { readonly title: string; readonly paragraphs: readonly string[] },
    ]
    prozessKicker: string
    prozessTitel: string
    prozess: readonly [
      { readonly title: string; readonly text: string },
      { readonly title: string; readonly text: string },
      { readonly title: string; readonly text: string },
      { readonly title: string; readonly text: string },
    ]
    sortimentKicker: string
    sortimentTitel: string
    sortimentText: string
    sortimentCta: string
  }

  kaffee: {
    kicker: string
    h1: string
    intro: readonly string[]
    srUeberschrift: string
    blockA: { titel: string; text: string }
    blockB: { titel: string; text: string }
  }

  /** Beschriftungen der Datenzeilen an jedem Kaffee */
  kaffeeFelder: {
    herkunft: string
    aufbereitung: string
    hoehe: string
    roestgrad: string
    noten: string
    zubereitung: string
    /** LMIV: Bezeichnung, Ursprung, Lebensmittelunternehmer */
    pflicht: string
  }

  kaffees: readonly [KaffeeText, KaffeeText]

  roesterei: {
    kicker: string
    h1: string
    intro: string
    schritte: readonly [Schritt, Schritt, Schritt, Schritt, Schritt]
    blockA: { titel: string; absaetze: readonly string[] }
    blockB: { titel: string; absaetze: readonly string[] }
  }

  ueberUns: {
    kicker: string
    h1: string
    intro: string
    abschnitte: readonly [
      { readonly titel: string; readonly absaetze: readonly string[] },
      { readonly titel: string; readonly absaetze: readonly string[] },
      { readonly titel: string; readonly absaetze: readonly string[] },
    ]
    fakten: readonly { readonly label: string; readonly wert: string }[]
  }

  /**
   * Die zwei Gruender.
   *
   * Namen stehen absichtlich NICHT im Woerterbuch — ein Name wird nicht
   * uebersetzt. Er steht einmal in components/Team.tsx. Uebersetzt
   * werden nur Rolle und Beschreibung.
   */
  team: {
    kicker: string
    titel: string
    leute: readonly [Person, Person]
  }

  kontakt: {
    kicker: string
    h1: string
    intro: readonly string[]
    labelEmail: string
    labelTelefon: string
    labelOrt: string
    feldName: string
    feldEmail: string
    feldNachricht: string
    einwilligung: Zwei
    datenschutzLink: string
    absenden: string
  }

  /**
   * Alles rund ums Bestellen. Keine Funktionen, nur Text: die Kaufknoepfe
   * sind Client-Komponenten und bekommen dieses Objekt als Prop — und
   * was vom Server zum Client geht, muss serialisierbar sein.
   * `{n}` und `{betrag}` werden im Code ersetzt.
   */
  shop: Shop

  versandSeite: {
    kicker: string
    h1: string
    intro: string
    schritteTitel: string
    schritte: readonly [Absatz, Absatz, Absatz]
    preiseTitel: string
    spalteGroesse: string
    spaltePreis: string
    spalteGrundpreis: string
    versandTitel: string
    /** {kosten} und {frei} werden ersetzt */
    versandText: string
    lieferzeitTitel: string
    lieferzeitText: string
    zahlungTitel: string
    zahlungText: string
    todoTitel: string
    todoPunkte: readonly string[]
  }

  newsletter: {
    titel: string
    text: string
    labelEmail: string
    platzhalter: string
    absenden: string
    /** Der Einwilligungstext, aufgeteilt am Link zur Datenschutzerklaerung */
    einwilligung: Zwei
    datenschutzLink: string
    honeypot: string
  }

  danke: {
    h1: string
    absaetze: readonly string[]
    zurueck: string
  }

  nichtGefunden: {
    h1: string
    text: string
    zurueck: string
  }

  impressum: {
    kicker: string
    h1: string
    warnung: string
    zeilen: readonly { readonly label: string; readonly hinweis: string }[]
    todoLabel: string
    todoEintragen: string
    vsbgTitel: string
    vsbgText: string
    bildnachweisTitel: string
    bildnachweisKi: string
    bildnachweisRest: string
  }

  datenschutz: {
    kicker: string
    h1: string
    warnung: string
    abschnitte: readonly { readonly titel: string; readonly absaetze: readonly DsAbsatz[] }[]
    todoLabel: string
    vorLivegangTitel: string
    vorLivegangAbsaetze: readonly string[]
  }

  /**
   * Hinweis, dass die deutsche Fassung der Rechtstexte massgeblich ist.
   * In der deutschen Fassung leer — dort gibt es nichts zu relativieren.
   */
  rechtsvorrang: string | null

  /** alt-Texte. Record ueber die Bildschluessel: fehlt eins, bricht der Build. */
  alt: Record<ImgKey, string>
  videoAlt: string
}

export type KaffeeText = {
  readonly name: string
  readonly kicker: string
  readonly herkunft: string
  readonly aufbereitung: string
  readonly hoehe: string
  readonly roestgrad: string
  readonly noten: readonly string[]
  readonly zubereitung: readonly string[]
  readonly text: string
}

export type Absatz = { readonly title: string; readonly text: string }

export type Shop = {
  readonly abschnittKicker: string
  readonly groesse: string
  readonly mahlgrad: string
  readonly mahlgrade: Readonly<Record<Mahlgrad, string>>
  readonly menge: string
  readonly weniger: string
  readonly mehr: string
  readonly jeKg: string
  /** „Endpreis, zzgl. " + Link „Versand" + "" */
  readonly preisHinweis: Zwei
  readonly versandLink: string
  readonly hinzufuegen: string
  readonly hinzugefuegt: string
  readonly direkt: string
  /** LMIV-Kurzangabe unter jedem Kaffee */
  readonly pflichtWert: string

  readonly bestellung: string
  readonly oeffnen: string
  readonly schliessen: string
  readonly leer: string
  readonly artikelEins: string
  readonly artikelViele: string
  readonly entfernen: string
  readonly zwischensumme: string
  readonly versandkosten: string
  readonly kostenlos: string
  readonly gesamt: string
  readonly freiNoch: string
  readonly freiErreicht: string
  readonly sendenWhatsapp: string
  readonly sendenEmail: string
  readonly ablauf: string

  readonly nachrichtGruss: string
  readonly nachrichtFelder: string
  readonly nachrichtBetreff: string

  readonly gross: {
    readonly kicker: string
    readonly titel: string
    readonly text: string
    readonly punkte: readonly [string, string, string]
    readonly whatsapp: string
    readonly email: string
    readonly nachricht: string
    readonly betreff: string
  }
}

export type Person = {
  readonly rolle: string
  readonly text: string
}

export type Schritt = {
  readonly title: string
  readonly body: readonly string[]
}

/** Ein Absatz der Datenschutzerklaerung: Text mit optionalen TODO-Einschueben. */
export type DsAbsatz = string | { readonly text: string; readonly todo: string }
