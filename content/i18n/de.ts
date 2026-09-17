import type { Dictionary } from './types'

/**
 * Deutsch — die Ausgangsfassung. Alle anderen Sprachen sind hieraus
 * uebersetzt, nicht umgekehrt. Wenn sich ein Satz aendert, aendert er sich
 * zuerst hier.
 */
export const de: Dictionary = {
  meta: {
    siteTitle: 'Niederrhein Röstwerk',
    homeTitle: 'Kaffeerösterei in Willich',
    homeDescription:
      'Kleine Kaffeerösterei in Willich. Ein Ursprung, zwei Kaffees, Röstung in kleinen Chargen. Der Verkauf startet noch nicht — trag dich in die Warteliste ein.',
    kaffeeTitle: 'Kaffee',
    kaffeeDescription:
      'Zwei Kaffees aus Sidamo, Äthiopien: ein helles Filterprofil und ein mittleres Espressoprofil. Noch nicht bestellbar.',
    roestereiTitle: 'Rösterei',
    roestereiDescription:
      'Vom Rohkaffee über die Trommelröstung und das Cupping bis zur Verpackung: wie im Röstwerk gearbeitet wird.',
    ueberUnsTitle: 'Über uns',
    ueberUnsDescription:
      'Warum eine kleine Rösterei in Willich, warum Äthiopien und warum in kleinen Mengen geröstet wird.',
    kontaktTitle: 'Kontakt',
    kontaktDescription:
      'Fragen zum Kaffee, zur Röstung oder zur Zusammenarbeit — Kontaktformular und E-Mail des Niederrhein Röstwerks.',
    dankeTitle: 'Danke',
    dankeDescription: 'Deine Nachricht ist angekommen.',
    impressumTitle: 'Impressum',
    impressumDescription: 'Anbieterkennzeichnung nach § 5 DDG.',
    datenschutzTitle: 'Datenschutz',
    datenschutzDescription:
      'Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.',
  },

  thema: {
    aria: 'Farbschema wählen',
    system: 'System',
    hell: 'Hell',
    dunkel: 'Dunkel',
  },
  nav: {
    kaffee: 'Kaffee',
    roesterei: 'Rösterei',
    ueberUns: 'Über uns',
    kontakt: 'Kontakt',
    ariaHaupt: 'Hauptnavigation',
    ariaSeiten: 'Seiten',
    ariaRecht: 'Rechtliches',
    ariaSprache: 'Sprache wählen',
    sprache: 'Sprache',
    zumInhalt: 'Zum Inhalt springen',
  },

  footer: {
    beschreibung: 'Kaffeerösterei in Willich, Nordrhein-Westfalen.',
    spalteSeiten: 'Seiten',
    spalteRecht: 'Rechtliches',
    spalteKontakt: 'Kontakt',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    cookieZeile: 'Diese Seite setzt keine Cookies und bindet keine externen Dienste ein.',
  },

  hero: {
    kicker: 'Willich, Niederrhein',
    headline: 'Kaffee aus Sidamo, in Willich geröstet.',
    sub: 'Ein Ursprung. Zwei Kaffees. Röstung in kleinen Chargen. Der Verkauf hat noch nicht begonnen.',
    cta: 'Zur Warteliste',
  },

  home: {
    dreiSaetze: [
      {
        title: 'Ein Ursprung',
        text: 'Wir rösten Kaffee aus der Region Sidamo in Äthiopien. Kein Blend aus fünf Ländern, kein Sortiment, das jeden Monat wechselt.',
      },
      {
        title: 'Kleine Chargen',
        text: 'Geröstet wird auf einem Trommelröster, in Mengen, die innerhalb weniger Tage verkauft sind. Kein Lager, kein Vorrat.',
      },
      {
        title: 'Zwei Kaffees',
        text: 'Einer für den Handfilter, einer für die Maschine. Zum Start reicht das. Wächst das Sortiment, steht es hier.',
      },
    ],
    story: [
      {
        title: 'Warum Äthiopien',
        paragraphs: [
          'Äthiopien ist das Herkunftsland des Arabica. Dort wachsen tausende lokale Varietäten, von denen die meisten nie einen Sortennamen bekommen haben. Das ist der Grund für die Bandbreite an Aromen, die andere Anbauländer so nicht liefern.',
          'Sidamo liegt im Süden, zwischen 1.500 und 2.200 Metern. Die Höhe verlangsamt das Wachstum der Kirsche. Die Bohne wird dichter, die Säure klarer.',
        ],
      },
      {
        title: 'Warum kleine Mengen',
        paragraphs: [
          'Kaffee ist ein Lebensmittel mit kurzer bester Zeit. Zwei bis vier Wochen nach der Röstung ist er auf dem Punkt, danach flacht er ab. Wer auf Vorrat röstet, verkauft alten Kaffee.',
          'Deshalb röstet das Röstwerk nach Bedarf. Das begrenzt die Menge, die wir anbieten können — und es ist der Grund, warum es eine Warteliste gibt statt eines offenen Shops.',
        ],
      },
    ],
    prozessKicker: 'Vom Rohkaffee zur Tüte',
    prozessTitel: 'Vier Schritte, die jede Charge durchläuft',
    prozess: [
      {
        title: 'Aufbereitung im Ursprung',
        text: 'Die Kirschen werden gewaschen oder getrocknet, bevor der Rohkaffee das Land verlässt.',
      },
      {
        title: 'Röstung',
        text: 'Trommelröster, 10 bis 14 Minuten, Profil je Kaffee. Protokoll bei jeder Charge.',
      },
      {
        title: 'Kühlung',
        text: 'Direkt ins Kühlsieb. Je schneller die Bohne runterkommt, desto weniger röstet sie nach.',
      },
      {
        title: 'Cupping',
        text: 'Jede Charge wird verkostet. Was nicht dem Profil entspricht, geht nicht raus.',
      },
    ],
    sortimentKicker: 'Das Sortiment',
    sortimentTitel: 'Zwei Kaffees',
    sortimentText: 'Beide aus Sidamo, beide in kleinen Chargen geröstet. Noch nicht bestellbar.',
    sortimentCta: 'Beide Kaffees im Detail',
  },

  kaffee: {
    kicker: 'Sortiment',
    h1: 'Zwei Kaffees, ein Ursprung',
    intro: [
      'Beide Kaffees kommen aus der Region Sidamo im Süden Äthiopiens. Der Unterschied liegt in der Röstung, nicht im Marketing: einmal hell für den Filter, einmal etwas dunkler für die Maschine.',
      'Verkauft wird noch nicht. Sobald es losgeht, stehen hier Preis, Grundpreis je 100 g, Füllmenge und alle Pflichtangaben zum Lebensmittel.',
    ],
    srUeberschrift: 'Die Kaffees im Detail',
    blockA: {
      titel: 'Was auf der Tüte stehen wird',
      text: 'Röstdatum statt nur Mindesthaltbarkeitsdatum. Herkunftsregion, Aufbereitung und Röstgrad. Füllmenge und Grundpreis. Keine Auszeichnungen, die wir nicht haben, keine Bio-Auslobung ohne Zertifizierung.',
    },
    blockB: {
      titel: 'Wie viel es geben wird',
      text: 'Das hängt an der Röstkapazität und daran, wie viel Rohkaffee wir pro Charge einkaufen. Genaue Mengen nennen wir erst, wenn sie feststehen.',
    },
  },

  kaffeeFelder: {
    herkunft: 'Herkunft',
    aufbereitung: 'Aufbereitung',
    hoehe: 'Anbauhöhe',
    roestgrad: 'Röstgrad',
    noten: 'Notizen',
    zubereitung: 'Zubereitung',
  },

  kaffees: [
    {
      name: 'Sidamo Filter',
      kicker: 'Hell geröstet',
      herkunft: 'Sidamo, Äthiopien',
      aufbereitung: 'Gewaschen',
      hoehe: '1.900–2.100 m',
      roestgrad: 'Hell — Filterprofil',
      noten: ['Zitrone', 'Schwarzer Tee', 'Honig'],
      zubereitung: ['Handfilter', 'AeroPress', 'French Press'],
      text: 'Heller geröstet, damit die Säure stehen bleibt. In der Tasse klar und leicht, mit einer Zitrusnote, die nach dem Abkühlen deutlicher wird. Wer Kaffee mit Milch trinkt, nimmt besser den Espresso.',
    },
    {
      name: 'Sidamo Espresso',
      kicker: 'Mittel geröstet',
      herkunft: 'Sidamo, Äthiopien',
      aufbereitung: 'Natural',
      hoehe: '1.800–2.000 m',
      roestgrad: 'Mittel — Espressoprofil',
      noten: ['Dunkle Schokolade', 'Orangenschale', 'Karamell'],
      zubereitung: ['Siebträger', 'Herdkanne', 'Vollautomat'],
      text: 'Zwei Minuten länger in der Trommel, ein paar Grad höher. Das nimmt Schärfe aus der Säure und gibt Körper. Funktioniert pur und mit Milch.',
    },
  ],

  roesterei: {
    kicker: 'Handwerk',
    h1: 'Vom grünen Korn bis in die Tüte',
    intro:
      'Röstung ist kein Geheimnis, sondern Temperatur über Zeit — dokumentiert, wiederholbar und jedes Mal überprüft. Hier steht, was zwischen Jutesack und Beutel passiert.',
    schritte: [
      {
        title: 'Rohkaffee',
        body: [
          'Grüner Kaffee riecht nach Heu, nicht nach Kaffee. Er kommt in Jutesäcken zu 30 oder 60 Kilo und ist bei trockener Lagerung etwa ein Jahr stabil.',
          'Der Einkauf läuft über einen Importeur. Welcher es wird und wie weit sich die Ernte zurückverfolgen lässt, steht hier, sobald der erste Sack bestellt ist.',
        ],
      },
      {
        title: 'Röstung',
        body: [
          'Trommelröster, Chargen von wenigen Kilo. Die Bohne durchläuft Trocknungs-, Bräunungs- und Entwicklungsphase; dazwischen liegt der erste Crack, ein hörbares Aufplatzen der Bohne.',
          'Jede Charge bekommt ein Protokoll: Einfülltemperatur, Kurvenverlauf, Zeitpunkt des Cracks, Auswurftemperatur. Ohne dieses Protokoll ist eine Röstung nicht wiederholbar.',
        ],
      },
      {
        title: 'Kühlung',
        body: [
          'Nach dem Auswurf läuft die Röstung in der heißen Bohne weiter. Das Kühlsieb zieht Luft durch die Schüttung und stoppt den Prozess innerhalb von zwei bis drei Minuten.',
          'Danach ruht der Kaffee. In den ersten Tagen entweicht Kohlendioxid — deshalb schmeckt frisch gerösteter Kaffee erst nach etwa einer Woche rund.',
        ],
      },
      {
        title: 'Cupping',
        body: [
          'Gemahlener Kaffee, heißes Wasser, keine Filter. Nach vier Minuten wird die Kruste gebrochen, dann wird gelöffelt und geschlürft — die Zerstäubung im Mund macht Aromen zugänglich, die man sonst überriecht.',
          'Verkostet wird gegen das Profil der Vorcharge. Weicht eine Röstung ab, wird sie nicht verkauft.',
        ],
      },
      {
        title: 'Verpackung',
        body: [
          'Aromaschutzbeutel mit Ventil: das CO₂ kann raus, Sauerstoff nicht rein. Abgefüllt wird nach der Bestellung, nicht auf Vorrat.',
        ],
      },
    ],
    blockA: {
      titel: 'Aufbereitung im Ursprung',
      absaetze: [
        'Gewaschen heißt: Fruchtfleisch ab, Fermentation, Trocknung des Pergaments. Das Ergebnis ist klarer und säurebetonter. Natural heißt: die ganze Kirsche trocknet auf Hochbeeten, die Frucht gibt Süße und Körper ab.',
        'Beide Verfahren passieren im Anbauland, lange bevor der Kaffee eine Rösterei sieht. Die Entscheidung dort bestimmt mehr am Geschmack als jede Röstkurve.',
      ],
    },
    blockB: {
      titel: 'Wo geröstet wird',
      absaetze: [
        'In Willich, Nordrhein-Westfalen. Eine Ladenfläche gibt es nicht, einen Ausschank auch nicht. Wer den Röster sehen will, schreibt uns.',
      ],
    },
  },

  ueberUns: {
    kicker: 'Willich, Niederrhein',
    h1: 'Eine Rösterei, zwei Kaffees, kein Laden',
    intro:
      'Niederrhein Röstwerk ist ein kleiner Betrieb in Willich. Geröstet wird auf einem Trommelröster, in Mengen, die eine Person an einem Tag schafft. Das ist keine Bescheidenheitsformel, sondern die Obergrenze.',
    abschnitte: [
      {
        titel: 'Wie es angefangen hat',
        absaetze: [
          'Mit der Feststellung, dass der Kaffee aus der eigenen Küche fast immer besser schmeckte als der aus dem Supermarkt — und dass der Unterschied nicht an der Maschine lag, sondern am Röstdatum.',
          'Danach kamen ein gebrauchter Probenröster, ein paar hundert fehlgeröstete Bohnen und irgendwann eine Charge, die sich lohnte, weiterzugeben.',
        ],
      },
      {
        titel: 'Warum Äthiopien',
        absaetze: [
          'Weil dort der Arabica herkommt. In Äthiopien wachsen tausende lokale Varietäten, die meisten ohne Sortennamen, viele als Teil des Waldes statt als Plantage. Das ergibt eine aromatische Bandbreite, die kein anderes Anbauland so liefert.',
          'Für eine Rösterei mit zwei Kaffees ist das die sinnvollste Entscheidung: ein Ursprung, den man wirklich kennenlernen kann, statt zwölf, die man nur streift.',
        ],
      },
      {
        titel: 'Warum kleine Chargen',
        absaetze: [
          'Gerösteter Kaffee hat ein Fenster von etwa zwei bis sechs Wochen. Wer groß röstet, muss lagern, und wer lagert, verkauft Kaffee außerhalb dieses Fensters.',
          'Kleine Chargen lösen das, kosten aber Menge. Deshalb gibt es erst eine Warteliste und dann einen Shop — nicht umgekehrt.',
        ],
      },
    ],
    fakten: [
      { label: 'Ort', wert: 'Willich, Nordrhein-Westfalen' },
      { label: 'Ursprung', wert: 'Sidamo, Äthiopien' },
      { label: 'Röster', wert: 'Trommel' },
      { label: 'Status', wert: 'Vor dem Start' },
    ],
  },

  kontakt: {
    kicker: 'Kontakt',
    h1: 'Schreib uns',
    intro: [
      'Fragen zur Röstung, zur Herkunft oder zur Zusammenarbeit mit Cafés und Büros: Formular oder E-Mail, beides landet an derselben Stelle.',
      'Antwort in der Regel innerhalb von zwei Werktagen.',
    ],
    labelEmail: 'E-Mail',
    labelTelefon: 'Telefon',
    labelOrt: 'Ort',
    feldName: 'Name',
    feldEmail: 'E-Mail-Adresse',
    feldNachricht: 'Nachricht',
    einwilligung: [
      'Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung dieser Anfrage gespeichert werden. Sie werden nicht für Werbung verwendet. Mehr dazu in der ',
      '.',
    ],
    datenschutzLink: 'Datenschutzerklärung',
    absenden: 'Nachricht senden',
  },

  newsletter: {
    titel: 'Warteliste',
    text: 'Eine E-Mail, wenn der Verkauf startet. Danach höchstens eine im Monat: was in der Trommel war, was es gibt. Abmelden mit einem Klick, der Link steht in jeder E-Mail.',
    labelEmail: 'E-Mail-Adresse',
    platzhalter: 'name@beispiel.de',
    absenden: 'Eintragen',
    einwilligung: [
      'Ich möchte die Warteliste per E-Mail erhalten. Zur Bestätigung schickt das Röstwerk eine E-Mail mit einem Link — erst danach ist die Anmeldung aktiv. Ich kann die Einwilligung jederzeit widerrufen. Hinweise zur Verarbeitung: ',
      '.',
    ],
    datenschutzLink: 'Datenschutzerklärung',
    honeypot: 'Bitte nicht ausfüllen:',
  },

  danke: {
    h1: 'Angekommen.',
    absaetze: [
      'Wenn du dich für die Warteliste eingetragen hast: In den nächsten Minuten kommt eine E-Mail mit einem Bestätigungslink. Erst nach dem Klick bist du eingetragen — ohne Klick passiert nichts.',
      'Bei einer Nachricht über das Kontaktformular melden wir uns in der Regel innerhalb von zwei Werktagen.',
    ],
    zurueck: 'Zurück zur Startseite',
  },

  nichtGefunden: {
    h1: 'Diese Seite gibt es nicht.',
    text: 'Vielleicht ist der Link alt, vielleicht ein Tippfehler.',
    zurueck: 'Zur Startseite',
  },

  impressum: {
    kicker: 'Angaben gemäß § 5 DDG',
    h1: 'Impressum',
    warnung:
      'Diese Seite ist noch nicht ausgefüllt. Sie darf in diesem Zustand nicht öffentlich erreichbar sein — ein fehlendes oder unvollständiges Impressum ist abmahnfähig.',
    zeilen: [
      { label: 'Name / Firma', hinweis: 'Vollständiger Name bzw. Firmierung laut Gewerbeanmeldung' },
      {
        label: 'Rechtsform',
        hinweis:
          'z. B. Einzelunternehmen, GbR, GmbH — bei GmbH zusätzlich Geschäftsführer und Handelsregisternummer',
      },
      { label: 'Anschrift', hinweis: 'Ladungsfähige Anschrift: Straße, Hausnummer, PLZ, Ort. Kein Postfach.' },
      { label: 'E-Mail', hinweis: 'Funktionierende Adresse, die tatsächlich gelesen wird' },
      { label: 'Telefon', hinweis: 'Rufnummer oder gleichwertiger schneller Kontaktweg' },
      {
        label: 'USt-IdNr.',
        hinweis:
          'Nach § 27a UStG — oder Hinweis auf Kleinunternehmerregelung § 19 UStG, falls keine vorhanden',
      },
      { label: 'Verantwortlich für den Inhalt', hinweis: 'Name und Anschrift der verantwortlichen Person' },
      {
        label: 'Aufsichtsbehörde',
        hinweis:
          'Nur falls erlaubnispflichtig — bei Kaffeeröstung zusätzlich zuständiges Hauptzollamt (Kaffeesteuer) und Lebensmittelüberwachung prüfen',
      },
    ],
    todoLabel: 'Noch einzutragen',
    todoEintragen: 'eintragen',
    vsbgTitel: 'Verbraucherschlichtung (§ 36 VSBG)',
    vsbgText:
      'Sobald Waren an Verbraucher verkauft werden, muss hier stehen, ob eine Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle erfolgt oder nicht. Beides ist zulässig — das Schweigen nicht.',
    bildnachweisTitel: 'Bildnachweis',
    bildnachweisKi:
      'Die Aufnahmen aus den Anbauländern auf dieser Website sind KI-generiert. Sie illustrieren die Herkunftsregion und zeigen keine bestimmte Farm, keinen bestimmten Betrieb und keine reale Person.',
    bildnachweisRest: 'Alle übrigen Aufnahmen stammen aus lizenzierten Beständen.',
  },

  datenschutz: {
    kicker: 'Informationen nach Art. 13 DSGVO',
    h1: 'Datenschutzerklärung',
    warnung:
      'Dieses Dokument beschreibt bereits korrekt, was die Website technisch tut. Die mit TODO markierten Angaben müssen vor dem Livegang ergänzt und der Text rechtlich geprüft werden.',
    abschnitte: [
      {
        titel: '1. Verantwortlicher',
        absaetze: [
          { text: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist: ', todo: 'Name und ladungsfähige Anschrift wie im Impressum' },
          { text: 'Kontakt in Datenschutzfragen: ', todo: 'E-Mail-Adresse' },
          { text: '', todo: 'prüfen, ob ein Datenschutzbeauftragter benannt werden muss (Art. 37 DSGVO, § 38 BDSG)' },
        ],
      },
      {
        titel: '2. Hosting und Server-Logfiles',
        absaetze: [
          'Die Website wird bei Netlify gehostet. Beim Aufruf einer Seite werden technisch notwendige Daten verarbeitet: IP-Adresse, Zeitpunkt, aufgerufene Datei, übertragene Datenmenge, Referrer und User-Agent. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO — das berechtigte Interesse am sicheren und stabilen Betrieb der Website.',
          { text: 'Ergänzen: Auftragsverarbeitungsvertrag mit Netlify, Speicherdauer der Logfiles und die Grundlage einer möglichen Übermittlung in die USA. ', todo: 'AV-Vertrag und Speicherdauer eintragen' },
        ],
      },
      {
        titel: '3. Kontaktformular',
        absaetze: [
          'Über das Kontaktformular werden Name, E-Mail-Adresse und der Nachrichtentext übermittelt. Die Übertragung und Speicherung erfolgt über Netlify Forms. Die Daten werden ausschließlich zur Bearbeitung der Anfrage verwendet und nicht für Werbung.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen Anfragen, sonst Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über die Checkbox im Formular).',
          { text: 'Üblich ist eine Löschung, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. ', todo: 'Löschfrist eintragen' },
        ],
      },
      {
        titel: '4. Warteliste und Newsletter (Double-Opt-In)',
        absaetze: [
          'Für die Warteliste wird die E-Mail-Adresse erhoben. Die Anmeldung läuft im Double-Opt-In-Verfahren: Nach dem Absenden des Formulars wird eine E-Mail mit einem Bestätigungslink verschickt. Erst mit dem Klick auf diesen Link ist die Anmeldung wirksam. Ohne Bestätigung wird die Adresse nicht in den Verteiler aufgenommen.',
          'Zum Nachweis der Einwilligung werden der Zeitpunkt der Anmeldung, der Zeitpunkt der Bestätigung und die dabei verwendete IP-Adresse gespeichert.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden — über den Abmeldelink in jeder E-Mail oder formlos an die oben genannte Adresse.',
          { text: '', todo: 'Newsletter-Dienstleister benennen und Auftragsverarbeitungsvertrag schließen' },
        ],
      },
      {
        titel: '5. Cookies und Tracking',
        absaetze: [
          'Diese Website setzt keine Cookies. Es findet keine Reichweitenmessung statt, es ist kein Analyse- oder Werbedienst eingebunden, und es werden keine externen Schriftarten, Karten, Videoplattformen oder Chat-Widgets geladen. Die verwendeten Schriften liegen auf demselben Server wie die Website.',
          'Deshalb gibt es auch kein Cookie-Banner. Sobald ein Dienst hinzukommt, der Cookies setzt oder auf Endgeräte-Informationen zugreift, ist vorher eine Einwilligung nach § 25 TDDDG einzuholen.',
        ],
      },
      {
        titel: '6. Ihre Rechte',
        absaetze: [
          'Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Eine erteilte Einwilligung können Sie jederzeit für die Zukunft widerrufen.',
          'Außerdem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständig ist in der Regel die Behörde Ihres Wohnsitzlandes; für Nordrhein-Westfalen die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW.',
        ],
      },
      {
        titel: '7. Stand',
        absaetze: [{ text: '', todo: 'Datum der letzten Aktualisierung eintragen' }],
      },
    ],
    todoLabel: 'Noch einzutragen',
    vorLivegangTitel: 'Vor dem Livegang',
    vorLivegangAbsaetze: [
      'Text juristisch prüfen lassen. Keine Passagen aus anderen Websites übernehmen: Datenschutzerklärungen sind urheberrechtlich geschützt, und ein fremder Text beschreibt nicht die eigene Verarbeitung.',
      'Sobald ein Shop dazukommt, kommen Zahlungsdienstleister, Versanddienstleister und steuerliche Aufbewahrungspflichten hinzu — dieser Text deckt das nicht ab.',
    ],
  },

  /* Die deutsche Fassung ist selbst die massgebliche. Hier gibt es
     nichts zu relativieren, deshalb null. */
  rechtsvorrang: null,

  alt: {
    heroPlantage: 'Kaffeeplantage im aethiopischen Hochland bei Sonnenaufgang im Morgennebel',
    espressoSiebtraeger: 'Espresso laeuft aus einem Siebtraeger mit Holzgriff in eine Tasse',
    aeropress: 'Zubereitung von Kaffee mit AeroPress und Schwanenhalskanne',
    bohnenMakro: 'Frisch geroestete Kaffeebohnen in mittlerer Roestung, Makroaufnahme',
    rohkaffee: 'Roher gruener Kaffee laeuft aus einem Jutesack auf einen Holztisch',
    cupping: 'Cupping-Verkostung mit nummerierten Tassen zur Qualitaetspruefung',
    kuehlsieb: 'Frisch geroestete Kaffeebohnen fallen aus der Trommel ins Kuehlsieb',
    trommelroester: 'Trommelroester in einer minimalistischen Kaffeeroesterei',
    kuehlsiebDetail: 'Ruehrarm bewegt frisch geroestete Kaffeebohnen im Kuehlsieb',
    trocknung: 'Kaffeekirschen trocknen auf Hochbeeten einer Washing Station in Aethiopien',
    ernte: 'Baeuerin erntet reife Kaffeekirschen von Hand auf einer Farm in Aethiopien',
    ernteBananen: 'Handernte von Kaffeekirschen zwischen Bananenstauden im Hochland',
    kirschenHaende: 'Haende eines Kaffeebauern mit frisch geernteten roten Kaffeekirschen',
    textur: 'Formatfuellende Textur aus geroesteten Kaffeebohnen',
    og: 'Vorschaubild fuer Social Media, WhatsApp und LinkedIn',
  },
  videoAlt: 'Geroestete Kaffeebohnen mit aufsteigendem Dampf',
}
