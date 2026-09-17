import type { ImgKey } from '../images'

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
  }

  /**
   * Farbschema-Wahl. „system" heisst: dem Betriebssystem folgen — das
   * ist die Voreinstellung und fuer die meisten die richtige, weil ihr
   * Telefon abends von selbst umschaltet.
   */
  thema: {
    /** aria-label der Wahl, z. B. „Farbschema wählen" */
    aria: string
    system: string
    hell: string
    dunkel: string
  }
  nav: {
    kaffee: string
    roesterei: string
    ueberUns: string
    kontakt: string
    /** aria-label der Hauptnavigation */
    ariaHaupt: string
    ariaSeiten: string
    ariaRecht: string
    ariaSprache: string
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

export type Schritt = {
  readonly title: string
  readonly body: readonly string[]
}

/** Ein Absatz der Datenschutzerklaerung: Text mit optionalen TODO-Einschueben. */
export type DsAbsatz = string | { readonly text: string; readonly todo: string }
