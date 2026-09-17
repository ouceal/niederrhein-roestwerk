import type { Dictionary } from './types'

/**
 * Italiano.
 *
 * Tradotto dal tedesco, non riscritto: stesse affermazioni, stessa
 * sobrietà, stesse frasi brevi. I riferimenti alle norme tedesche
 * restano con il loro nome originale — chi volesse cercarli ha bisogno
 * del nome che esiste davvero.
 */
export const it: Dictionary = {
  meta: {
    siteTitle: 'Niederrhein Röstwerk',
    homeTitle: 'Torrefazione a Willich',
    homeDescription:
      'Piccola torrefazione a Willich, in Germania. Una sola origine, due caffè, tostatura in piccole partite. La vendita non è ancora aperta — iscriviti alla lista d’attesa.',
    kaffeeTitle: 'Caffè',
    kaffeeDescription:
      'Due caffè da Sidamo, Etiopia: un profilo chiaro per il filtro e un profilo medio per l’espresso. Non ancora ordinabili.',
    roestereiTitle: 'Torrefazione',
    roestereiDescription:
      'Dal caffè verde alla tostatura al tamburo, dalla degustazione al confezionamento: come si lavora al Röstwerk.',
    ueberUnsTitle: 'Chi siamo',
    ueberUnsDescription:
      'Perché una piccola torrefazione a Willich, perché l’Etiopia e perché si tosta in piccole quantità.',
    kontaktTitle: 'Contatti',
    kontaktDescription:
      'Domande sul caffè, sulla tostatura o su una collaborazione — modulo di contatto ed e-mail del Niederrhein Röstwerk.',
    dankeTitle: 'Grazie',
    dankeDescription: 'Il tuo messaggio è arrivato.',
    impressumTitle: 'Note legali',
    impressumDescription: 'Dati del fornitore ai sensi del § 5 DDG (legge tedesca sui servizi digitali).',
    datenschutzTitle: 'Privacy',
    datenschutzDescription:
      'Informazioni sul trattamento dei dati personali ai sensi dell’art. 13 GDPR.',
  },

  thema: {
    aria: 'Scegli il tema',
    system: 'Sistema',
    hell: 'Chiaro',
    dunkel: 'Scuro',
  },
  nav: {
    kaffee: 'Caffè',
    roesterei: 'Torrefazione',
    ueberUns: 'Chi siamo',
    kontakt: 'Contatti',
    ariaHaupt: 'Navigazione principale',
    ariaSeiten: 'Pagine',
    ariaRecht: 'Informazioni legali',
    ariaSprache: 'Scegli la lingua',
    sprache: 'Lingua',
    zumInhalt: 'Vai al contenuto',
  },

  footer: {
    beschreibung: 'Torrefazione a Willich, Renania Settentrionale-Vestfalia.',
    spalteSeiten: 'Pagine',
    spalteRecht: 'Legale',
    spalteKontakt: 'Contatti',
    impressum: 'Note legali',
    datenschutz: 'Privacy',
    cookieZeile: 'Questo sito non usa cookie e non carica servizi di terze parti.',
  },

  hero: {
    kicker: 'Willich, Basso Reno',
    headline: 'Caffè da Sidamo, tostato a Willich.',
    sub: 'Una sola origine. Due caffè. Tostatura in piccole partite. La vendita non è ancora iniziata.',
    cta: 'Vai alla lista d’attesa',
  },

  home: {
    dreiSaetze: [
      {
        title: 'Una sola origine',
        text: 'Tostiamo caffè della regione di Sidamo, in Etiopia. Non una miscela di cinque paesi, non un assortimento che cambia ogni mese.',
      },
      {
        title: 'Piccole partite',
        text: 'Si tosta su un tamburo, in quantità che si esauriscono in pochi giorni. Nessun magazzino, nessuna scorta.',
      },
      {
        title: 'Due caffè',
        text: 'Uno per il filtro, uno per la macchina. Per iniziare basta. Se l’assortimento cresce, lo trovi scritto qui.',
      },
    ],
    story: [
      {
        title: 'Perché l’Etiopia',
        paragraphs: [
          'L’Etiopia è il paese d’origine dell’Arabica. Vi crescono migliaia di varietà locali, la maggior parte delle quali non ha mai ricevuto un nome. È da lì che viene una gamma di aromi che nessun altro paese produttore offre allo stesso modo.',
          'Sidamo si trova a sud, tra i 1.500 e i 2.200 metri. L’altitudine rallenta la maturazione della ciliegia. Il chicco diventa più denso, l’acidità più nitida.',
        ],
      },
      {
        title: 'Perché piccole quantità',
        paragraphs: [
          'Il caffè è un alimento con una finestra breve. Due o quattro settimane dopo la tostatura è al suo punto migliore, poi si appiattisce. Chi tosta per fare scorta vende caffè vecchio.',
          'Per questo il Röstwerk tosta su richiesta. Questo limita la quantità che possiamo offrire — ed è il motivo per cui c’è una lista d’attesa invece di un negozio aperto.',
        ],
      },
    ],
    prozessKicker: 'Dal caffè verde al sacchetto',
    prozessTitel: 'Quattro passaggi che ogni partita attraversa',
    prozess: [
      {
        title: 'Lavorazione all’origine',
        text: 'Le ciliegie vengono lavate o essiccate prima che il caffè verde lasci il paese.',
      },
      {
        title: 'Tostatura',
        text: 'Tamburo, da 10 a 14 minuti, un profilo per ogni caffè. Un registro per ogni partita.',
      },
      {
        title: 'Raffreddamento',
        text: 'Subito nella vasca di raffreddamento. Più in fretta scende il chicco, meno continua a tostare.',
      },
      {
        title: 'Degustazione',
        text: 'Ogni partita viene assaggiata. Ciò che non corrisponde al profilo non esce.',
      },
    ],
    sortimentKicker: 'L’assortimento',
    sortimentTitel: 'Due caffè',
    sortimentText: 'Entrambi da Sidamo, entrambi tostati in piccole partite. Non ancora ordinabili.',
    sortimentCta: 'Entrambi i caffè in dettaglio',
  },

  kaffee: {
    kicker: 'Assortimento',
    h1: 'Due caffè, una sola origine',
    intro: [
      'Entrambi i caffè vengono dalla regione di Sidamo, nel sud dell’Etiopia. La differenza sta nella tostatura, non nel marketing: uno chiaro per il filtro, uno un po’ più scuro per la macchina.',
      'Non si vende ancora. Quando si comincerà, qui compariranno il prezzo, il prezzo al 100 g, il peso netto e tutte le indicazioni obbligatorie sull’alimento.',
    ],
    srUeberschrift: 'I caffè in dettaglio',
    blockA: {
      titel: 'Cosa ci sarà scritto sul sacchetto',
      text: 'La data di tostatura, non solo il termine minimo di conservazione. Regione d’origine, metodo di lavorazione e grado di tostatura. Peso netto e prezzo al 100 g. Nessun riconoscimento che non abbiamo, nessuna dicitura biologica senza certificazione.',
    },
    blockB: {
      titel: 'Quanto ce ne sarà',
      text: 'Dipende dalla capacità di tostatura e da quanto caffè verde compriamo per ogni partita. Indicheremo le quantità esatte solo quando saranno certe.',
    },
  },

  kaffeeFelder: {
    herkunft: 'Origine',
    aufbereitung: 'Lavorazione',
    hoehe: 'Altitudine',
    roestgrad: 'Tostatura',
    noten: 'Note',
    zubereitung: 'Preparazione',
  },

  kaffees: [
    {
      name: 'Sidamo Filtro',
      kicker: 'Tostatura chiara',
      herkunft: 'Sidamo, Etiopia',
      aufbereitung: 'Lavato',
      hoehe: '1.900–2.100 m',
      roestgrad: 'Chiara — profilo filtro',
      noten: ['Limone', 'Tè nero', 'Miele'],
      zubereitung: ['Filtro a mano', 'AeroPress', 'French press'],
      text: 'Tostato più chiaro perché l’acidità resti. In tazza è limpido e leggero, con una nota agrumata che si fa più chiara raffreddandosi. Chi beve il caffè con il latte faccia meglio a prendere l’espresso.',
    },
    {
      name: 'Sidamo Espresso',
      kicker: 'Tostatura media',
      herkunft: 'Sidamo, Etiopia',
      aufbereitung: 'Natural',
      hoehe: '1.800–2.000 m',
      roestgrad: 'Media — profilo espresso',
      noten: ['Cioccolato fondente', 'Scorza d’arancia', 'Caramello'],
      zubereitung: ['Macchina a leva', 'Moka', 'Macchina automatica'],
      text: 'Due minuti in più nel tamburo, qualche grado in più. Questo toglie spigolo all’acidità e dà corpo. Funziona liscio e con il latte.',
    },
  ],

  roesterei: {
    kicker: 'Mestiere',
    h1: 'Dal seme verde al sacchetto',
    intro:
      'La tostatura non è un segreto: è temperatura nel tempo, documentata, ripetibile e verificata ogni volta. Qui c’è cosa succede tra il sacco di juta e il sacchetto.',
    schritte: [
      {
        title: 'Caffè verde',
        body: [
          'Il caffè verde profuma di fieno, non di caffè. Arriva in sacchi di juta da 30 o 60 chili e, conservato all’asciutto, resta stabile per circa un anno.',
          'L’acquisto passa da un importatore. Quale sarà e fin dove si potrà risalire al raccolto verrà scritto qui, appena ordinato il primo sacco.',
        ],
      },
      {
        title: 'Tostatura',
        body: [
          'Tamburo, partite di pochi chili. Il chicco attraversa una fase di essiccazione, una di imbrunimento e una di sviluppo; in mezzo c’è il primo crack, uno schiocco udibile del chicco.',
          'Ogni partita ha il suo registro: temperatura di carico, andamento della curva, momento del crack, temperatura di scarico. Senza quel registro una tostatura non è ripetibile.',
        ],
      },
      {
        title: 'Raffreddamento',
        body: [
          'Dopo lo scarico la tostatura prosegue dentro il chicco caldo. La vasca tira aria attraverso lo strato e ferma il processo in due o tre minuti.',
          'Poi il caffè riposa. Nei primi giorni esce anidride carbonica — per questo il caffè appena tostato diventa rotondo solo dopo circa una settimana.',
        ],
      },
      {
        title: 'Degustazione',
        body: [
          'Caffè macinato, acqua calda, nessun filtro. Dopo quattro minuti si rompe la crosta, poi si assaggia col cucchiaio aspirando — la nebulizzazione in bocca apre aromi che altrimenti sfuggono.',
          'Si assaggia confrontando con il profilo della partita precedente. Se una tostatura si discosta, non viene venduta.',
        ],
      },
      {
        title: 'Confezionamento',
        body: [
          'Sacchetti con valvola: la CO₂ può uscire, l’ossigeno non entra. Si confeziona dopo l’ordine, non per fare scorta.',
        ],
      },
    ],
    blockA: {
      titel: 'Lavorazione all’origine',
      absaetze: [
        'Lavato significa: polpa via, fermentazione, essiccazione del pergamino. Il risultato è più nitido e più acido. Natural significa che l’intera ciliegia essicca su letti rialzati e il frutto cede dolcezza e corpo.',
        'Entrambi i procedimenti avvengono nel paese di coltivazione, molto prima che il caffè veda una torrefazione. La scelta fatta lì incide sul gusto più di qualsiasi curva di tostatura.',
      ],
    },
    blockB: {
      titel: 'Dove si tosta',
      absaetze: [
        'A Willich, in Renania Settentrionale-Vestfalia. Non c’è un negozio e non c’è un banco. Chi vuole vedere la tostatrice ci scriva.',
      ],
    },
  },

  ueberUns: {
    kicker: 'Willich, Basso Reno',
    h1: 'Una torrefazione, due caffè, nessun negozio',
    intro:
      'Niederrhein Röstwerk è una piccola attività a Willich. Si tosta su un tamburo, in quantità che una persona riesce a gestire in una giornata. Non è modestia, è il limite.',
    abschnitte: [
      {
        titel: 'Come è cominciata',
        absaetze: [
          'Con la constatazione che il caffè fatto in casa era quasi sempre migliore di quello del supermercato — e che la differenza non stava nella macchina, ma nella data di tostatura.',
          'Poi sono arrivati una tostatrice da campionatura usata, qualche centinaio di chicchi tostati male e, a un certo punto, una partita che valeva la pena passare ad altri.',
        ],
      },
      {
        titel: 'Perché l’Etiopia',
        absaetze: [
          'Perché è da lì che viene l’Arabica. In Etiopia crescono migliaia di varietà locali, quasi tutte senza nome, molte come parte della foresta e non come piantagione. Ne esce una gamma aromatica che nessun altro paese produttore offre allo stesso modo.',
          'Per una torrefazione con due caffè è la scelta più sensata: un’origine che si può davvero conoscere, invece di dodici che si sfiorano appena.',
        ],
      },
      {
        titel: 'Perché piccole partite',
        absaetze: [
          'Il caffè tostato ha una finestra di circa due-sei settimane. Chi tosta in grande deve immagazzinare, e chi immagazzina vende caffè fuori da quella finestra.',
          'Le piccole partite risolvono il problema, ma costano in volume. Per questo prima c’è una lista d’attesa e poi un negozio, non il contrario.',
        ],
      },
    ],
    fakten: [
      { label: 'Luogo', wert: 'Willich, Renania Settentrionale-Vestfalia' },
      { label: 'Origine', wert: 'Sidamo, Etiopia' },
      { label: 'Tostatrice', wert: 'A tamburo' },
      { label: 'Stato', wert: 'Prima dell’avvio' },
    ],
  },

  kontakt: {
    kicker: 'Contatti',
    h1: 'Scrivici',
    intro: [
      'Domande sulla tostatura, sull’origine o su una collaborazione con bar e uffici: modulo o e-mail, arrivano entrambi allo stesso posto.',
      'Di norma rispondiamo entro due giorni lavorativi.',
    ],
    labelEmail: 'E-mail',
    labelTelefon: 'Telefono',
    labelOrt: 'Luogo',
    feldName: 'Nome',
    feldEmail: 'Indirizzo e-mail',
    feldNachricht: 'Messaggio',
    einwilligung: [
      'Acconsento alla conservazione dei miei dati per la gestione di questa richiesta. Non verranno usati per pubblicità. Maggiori informazioni nell’',
      '.',
    ],
    datenschutzLink: 'informativa sulla privacy',
    absenden: 'Invia il messaggio',
  },

  newsletter: {
    titel: 'Lista d’attesa',
    text: 'Una e-mail quando comincia la vendita. Poi al massimo una al mese: cosa è passato nel tamburo, cosa c’è. Disiscrizione con un clic, il link è in ogni e-mail.',
    labelEmail: 'Indirizzo e-mail',
    platzhalter: 'nome@esempio.it',
    absenden: 'Iscriviti',
    einwilligung: [
      'Desidero ricevere la lista d’attesa per e-mail. Per conferma il Röstwerk invia un’e-mail con un link — solo dopo l’iscrizione è attiva. Posso revocare il consenso in qualsiasi momento. Informazioni sul trattamento: ',
      '.',
    ],
    datenschutzLink: 'informativa sulla privacy',
    honeypot: 'Non compilare:',
  },

  danke: {
    h1: 'Arrivato.',
    absaetze: [
      'Se ti sei iscritto alla lista d’attesa: tra pochi minuti arriva un’e-mail con un link di conferma. Sei iscritto solo dopo il clic — senza clic non succede nulla.',
      'Se hai scritto tramite il modulo di contatto, di norma rispondiamo entro due giorni lavorativi.',
    ],
    zurueck: 'Torna alla pagina iniziale',
  },

  nichtGefunden: {
    h1: 'Questa pagina non esiste.',
    text: 'Forse il link è vecchio, forse è un errore di battitura.',
    zurueck: 'Alla pagina iniziale',
  },

  impressum: {
    kicker: 'Dati ai sensi del § 5 DDG',
    h1: 'Note legali',
    warnung:
      'Questa pagina non è ancora compilata. In questo stato non può essere pubblicamente raggiungibile — in Germania note legali mancanti o incomplete sono contestabili.',
    zeilen: [
      { label: 'Nome / ragione sociale', hinweis: 'Nome completo o ragione sociale come da registrazione dell’attività' },
      {
        label: 'Forma giuridica',
        hinweis:
          'p. es. ditta individuale, GbR, GmbH — per una GmbH anche l’amministratore e il numero di registro delle imprese',
      },
      { label: 'Indirizzo', hinweis: 'Indirizzo valido per le notifiche: via, numero, CAP, città. Nessuna casella postale.' },
      { label: 'E-mail', hinweis: 'Un indirizzo funzionante e letto davvero' },
      { label: 'Telefono', hinweis: 'Un numero o un canale di contatto altrettanto rapido' },
      {
        label: 'Partita IVA',
        hinweis:
          'Ai sensi del § 27a UStG — oppure l’indicazione del regime per le piccole imprese (§ 19 UStG), se non presente',
      },
      { label: 'Responsabile dei contenuti', hinweis: 'Nome e indirizzo della persona responsabile' },
      {
        label: 'Autorità di vigilanza',
        hinweis:
          'Solo se l’attività è soggetta ad autorizzazione — per la torrefazione verificare anche l’ufficio doganale competente (imposta sul caffè) e il controllo alimentare',
      },
    ],
    todoLabel: 'Ancora da inserire',
    todoEintragen: 'inserire',
    vsbgTitel: 'Risoluzione delle controversie con i consumatori (§ 36 VSBG)',
    vsbgText:
      'Non appena si vendono merci a consumatori, qui deve essere indicato se l’azienda partecipa o meno a una procedura di conciliazione davanti a un organismo per i consumatori. Entrambe le risposte sono ammesse — il silenzio no.',
    bildnachweisTitel: 'Crediti fotografici',
    bildnachweisKi:
      'Le immagini delle regioni di coltivazione presenti su questo sito sono generate con intelligenza artificiale. Illustrano la regione d’origine e non mostrano nessuna azienda agricola particolare, nessuna impresa specifica e nessuna persona reale.',
    bildnachweisRest: 'Tutte le altre immagini provengono da archivi su licenza.',
  },

  datenschutz: {
    kicker: 'Informazioni ai sensi dell’art. 13 GDPR',
    h1: 'Informativa sulla privacy',
    warnung:
      'Questo documento descrive già correttamente ciò che il sito fa dal punto di vista tecnico. Le voci contrassegnate con TODO vanno completate e il testo va verificato legalmente prima della pubblicazione.',
    abschnitte: [
      {
        titel: '1. Titolare del trattamento',
        absaetze: [
          { text: 'Il titolare del trattamento dei dati su questo sito è: ', todo: 'nome e indirizzo come nelle note legali' },
          { text: 'Contatto per questioni sulla privacy: ', todo: 'indirizzo e-mail' },
          { text: '', todo: 'verificare se è necessario nominare un responsabile della protezione dei dati (art. 37 GDPR, § 38 BDSG)' },
        ],
      },
      {
        titel: '2. Hosting e file di log',
        absaetze: [
          'Il sito è ospitato presso Netlify. All’apertura di una pagina vengono trattati dati tecnicamente necessari: indirizzo IP, orario, file richiesto, volume trasmesso, referrer e user agent. La base giuridica è l’art. 6, par. 1, lett. f GDPR — il legittimo interesse a un funzionamento sicuro e stabile del sito.',
          { text: 'Da aggiungere: il contratto di responsabile del trattamento con Netlify, la durata di conservazione dei log e la base di un eventuale trasferimento negli USA. ', todo: 'inserire contratto e durata di conservazione' },
        ],
      },
      {
        titel: '3. Modulo di contatto',
        absaetze: [
          'Tramite il modulo di contatto vengono trasmessi nome, indirizzo e-mail e testo del messaggio. Trasmissione e conservazione avvengono tramite Netlify Forms. I dati sono usati esclusivamente per gestire la richiesta e mai per pubblicità.',
          'La base giuridica è l’art. 6, par. 1, lett. b GDPR per richieste precontrattuali, altrimenti l’art. 6, par. 1, lett. a GDPR (consenso tramite la casella nel modulo).',
          { text: 'Di norma la cancellazione avviene quando la richiesta è conclusa e nessun obbligo di conservazione lo impedisce. ', todo: 'inserire il termine di cancellazione' },
        ],
      },
      {
        titel: '4. Lista d’attesa e newsletter (doppio opt-in)',
        absaetze: [
          'Per la lista d’attesa viene raccolto l’indirizzo e-mail. L’iscrizione avviene con doppio opt-in: dopo l’invio del modulo viene spedita un’e-mail con un link di conferma. L’iscrizione è valida solo dopo il clic su quel link. Senza conferma l’indirizzo non entra nella lista.',
          'Come prova del consenso vengono conservati il momento dell’iscrizione, il momento della conferma e l’indirizzo IP utilizzato.',
          'La base giuridica è l’art. 6, par. 1, lett. a GDPR. Il consenso può essere revocato in qualsiasi momento con effetto per il futuro — tramite il link di disiscrizione in ogni e-mail o in forma libera all’indirizzo sopra indicato.',
          { text: '', todo: 'indicare il fornitore della newsletter e stipulare il contratto di responsabile del trattamento' },
        ],
      },
      {
        titel: '5. Cookie e tracciamento',
        absaetze: [
          'Questo sito non usa cookie. Non c’è misurazione del traffico, non è integrato alcun servizio di analisi o pubblicità e non vengono caricati font esterni, mappe, piattaforme video o widget di chat. I caratteri usati risiedono sullo stesso server del sito.',
          'Per questo non c’è nemmeno un banner cookie. Non appena si aggiunge un servizio che usa cookie o accede a informazioni sul dispositivo, occorre prima raccogliere il consenso ai sensi del § 25 TDDDG.',
        ],
      },
      {
        titel: '6. I tuoi diritti',
        absaetze: [
          'Hai diritto di accesso (art. 15), rettifica (art. 16), cancellazione (art. 17), limitazione del trattamento (art. 18), portabilità dei dati (art. 20) e opposizione (art. 21 GDPR). Un consenso dato può essere revocato in qualsiasi momento con effetto per il futuro.',
          'Hai inoltre diritto di proporre reclamo a un’autorità di controllo. Di norma è quella del paese in cui risiedi; per la Renania Settentrionale-Vestfalia è l’Autorità statale per la protezione dei dati e la libertà d’informazione NRW.',
        ],
      },
      {
        titel: '7. Versione',
        absaetze: [{ text: '', todo: 'inserire la data dell’ultimo aggiornamento' }],
      },
    ],
    todoLabel: 'Ancora da inserire',
    vorLivegangTitel: 'Prima della pubblicazione',
    vorLivegangAbsaetze: [
      'Far verificare il testo da un legale. Non copiare passaggi da altri siti: le informative sulla privacy sono protette dal diritto d’autore e un testo altrui non descrive il proprio trattamento.',
      'Non appena si aggiunge un negozio arrivano fornitori di pagamento, corrieri e obblighi fiscali di conservazione — questo testo non li copre.',
    ],
  },

  rechtsvorrang:
    'Questa è una traduzione di cortesia. La versione tedesca di questa pagina è quella giuridicamente vincolante.',

  alt: {
    heroPlantage: 'Piantagione di caffè sugli altipiani etiopi all’alba, nella nebbia del mattino',
    espressoSiebtraeger: 'Espresso che scende in tazza da un portafiltro con manico di legno',
    aeropress: 'Preparazione del caffè con AeroPress e bollitore a collo di cigno',
    bohnenMakro: 'Chicchi di caffè appena tostati a tostatura media, in primo piano',
    rohkaffee: 'Caffè verde che esce da un sacco di juta su un tavolo di legno',
    cupping: 'Tavolo di degustazione con tazze numerate per il controllo qualità',
    kuehlsieb: 'Chicchi appena tostati che cadono dal tamburo nella vasca di raffreddamento',
    trommelroester: 'Tostatrice a tamburo in una torrefazione essenziale',
    kuehlsiebDetail: 'Braccio rotante che muove i chicchi appena tostati nella vasca di raffreddamento',
    trocknung: 'Ciliegie di caffè che essiccano su letti rialzati in una washing station in Etiopia',
    ernte: 'Una coltivatrice raccoglie a mano ciliegie di caffè mature in una fattoria in Etiopia',
    ernteBananen: 'Raccolta a mano di ciliegie di caffè tra piante di banano sugli altipiani',
    kirschenHaende: 'Le mani di un coltivatore con ciliegie di caffè rosse appena raccolte',
    textur: 'Texture a tutto campo di chicchi di caffè tostati',
    og: 'Immagine di anteprima per social media, WhatsApp e LinkedIn',
  },
  videoAlt: 'Chicchi di caffè tostati con vapore che sale',
}
