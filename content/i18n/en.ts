import type { Dictionary } from './types'

/**
 * English.
 *
 * Translated from the German, not rewritten: same claims, same restraint,
 * same short sentences. German statute names are kept and explained in
 * brackets rather than swapped for an English near-equivalent — a reader
 * who wants to look one up needs the name that actually exists.
 */
export const en: Dictionary = {
  meta: {
    siteTitle: 'Niederrhein Röstwerk',
    homeTitle: 'Coffee roastery in Willich',
    homeDescription:
      'A small coffee roastery in Willich, Germany. One origin, two coffees, freshly roasted in small batches. Order now: 250 g, 500 g or 1 kg.',
    kaffeeTitle: 'Coffee',
    kaffeeDescription:
      'Two coffees from Sidamo, Ethiopia: light for filter, medium for the machine. In 250 g, 500 g and 1 kg — ordered via WhatsApp or email.',
    roestereiTitle: 'Roastery',
    roestereiDescription:
      'From green coffee through drum roasting and cupping to packaging: how the work is done at the Röstwerk.',
    ueberUnsTitle: 'About',
    ueberUnsDescription:
      'Why a small roastery in Willich, why Ethiopia, and why we roast in small amounts.',
    kontaktTitle: 'Contact',
    kontaktDescription:
      'Questions about the coffee, the roast or working together — contact form and email for Niederrhein Röstwerk.',
    dankeTitle: 'Thank you',
    dankeDescription: 'Your message has arrived.',
    impressumTitle: 'Legal notice',
    impressumDescription: 'Provider identification under § 5 DDG (German Digital Services Act).',
    datenschutzTitle: 'Privacy',
    datenschutzDescription:
      'Information on the processing of personal data under Article 13 GDPR.',
    versandTitle: 'Ordering & shipping',
    versandDescription:
      'How to order from Niederrhein Röstwerk: prices, unit prices, shipping costs, delivery time and payment.',
  },

  thema: {
    aria: 'Choose colour scheme',
    titel: 'Colour scheme',
    system: 'System',
    hell: 'Light',
    dunkel: 'Dark',
  },
  nav: {
    kaffee: 'Coffee',
    roesterei: 'Roastery',
    ueberUns: 'About',
    kontakt: 'Contact',
    bestellung: 'Order',
    ariaHaupt: 'Main navigation',
    ariaSeiten: 'Pages',
    ariaRecht: 'Legal',
    ariaSprache: 'Choose language',
    ariaMenue: 'Menu',
    sprache: 'Language',
    zumInhalt: 'Skip to content',
  },

  footer: {
    beschreibung: 'Coffee roastery in Willich, North Rhine-Westphalia.',
    spalteSeiten: 'Pages',
    spalteRecht: 'Legal',
    spalteKontakt: 'Contact',
    impressum: 'Legal notice',
    datenschutz: 'Privacy',
    versand: 'Ordering & shipping',
    cookieZeile: 'This site sets no cookies and loads nothing from third parties.',
  },

  hero: {
    kicker: 'Willich, Lower Rhine',
    headline: 'Coffee from Sidamo, roasted in Willich.',
    sub: 'One origin. Two coffees. Freshly roasted in small batches — in 250 g, 500 g and 1 kg.',
    cta: 'Order coffee',
  },

  home: {
    dreiSaetze: [
      {
        title: 'One origin',
        text: 'We roast coffee from the Sidamo region in Ethiopia. Not a blend of five countries, not a range that changes every month.',
      },
      {
        title: 'Small batches',
        text: 'Roasted on a drum roaster, in amounts that sell within a few days. No warehouse, no stock.',
      },
      {
        title: 'Two coffees',
        text: 'One for the pour-over, one for the machine. That is enough to start. If the range grows, it will say so here.',
      },
    ],
    story: [
      {
        title: 'Why Ethiopia',
        paragraphs: [
          'Ethiopia is where Arabica comes from. Thousands of local varieties grow there, most of which were never given a variety name. That is the reason for a range of flavours no other growing country delivers in the same way.',
          'Sidamo lies in the south, between 1,500 and 2,200 metres. Altitude slows the cherry down. The bean gets denser, the acidity clearer.',
        ],
      },
      {
        title: 'Why small amounts',
        paragraphs: [
          'Coffee is a food with a short best window. Two to four weeks after roasting it is at its peak, then it flattens out. Roast for stock and you sell old coffee.',
          'So the Röstwerk roasts to demand, in small batches. Every bag carries its roast date — so you can see for yourself how fresh your coffee is.',
        ],
      },
    ],
    prozessKicker: 'From green coffee to the bag',
    prozessTitel: 'Four steps every batch goes through',
    prozess: [
      {
        title: 'Processing at origin',
        text: 'The cherries are washed or dried before the green coffee leaves the country.',
      },
      {
        title: 'Roasting',
        text: 'Drum roaster, 10 to 14 minutes, a profile per coffee. A log for every batch.',
      },
      {
        title: 'Cooling',
        text: 'Straight into the cooling tray. The faster the bean comes down, the less it carries on roasting.',
      },
      {
        title: 'Cupping',
        text: 'Every batch is tasted. What does not match the profile does not go out.',
      },
    ],
    sortimentKicker: 'The range',
    sortimentTitel: 'Two coffees',
    sortimentText: 'Both from Sidamo, both roasted in small batches. Pick a size and grind, add it to your order, send it via WhatsApp or email.',
    sortimentCta: 'Everything about both coffees',
  },

  kaffee: {
    kicker: 'Shop',
    h1: 'Two coffees, one origin',
    intro: [
      'Both coffees come from the Sidamo region in southern Ethiopia. The difference is in the roast, not the marketing: one light for filter, one a little darker for the machine.',
      'Pick a size and grind, add it to your order and send it via WhatsApp or email. We confirm the roast date, the total and payment — then the bag goes out.',
    ],
    srUeberschrift: 'The coffees in detail',
    blockA: {
      titel: 'What the bag says',
      text: 'Roast date, not just a best-before date. Region, processing method and roast level. Fill weight and unit price. No awards we do not hold, no organic claim without certification.',
    },
    blockB: {
      titel: 'Fresh, not from stock',
      text: 'We roast in small batches. If one has just sold out, we tell you in our confirmation when the next one comes out of the drum — rather than sending you old coffee.',
    },
  },

  kaffeeFelder: {
    herkunft: 'Origin',
    aufbereitung: 'Processing',
    hoehe: 'Altitude',
    roestgrad: 'Roast level',
    noten: 'Notes',
    zubereitung: 'Brewing',
    pflicht: 'Details',
  },

  kaffees: [
    {
      name: 'Sidamo Filter',
      kicker: 'Light roast',
      herkunft: 'Sidamo, Ethiopia',
      aufbereitung: 'Washed',
      hoehe: '1,900–2,100 m',
      roestgrad: 'Light — filter profile',
      noten: ['Lemon', 'Black tea', 'Honey'],
      zubereitung: ['Pour-over', 'AeroPress', 'French press'],
      text: 'Roasted lighter so the acidity stays. Clear and light in the cup, with a citrus note that comes forward as it cools. If you drink coffee with milk, take the espresso instead.',
    },
    {
      name: 'Sidamo Espresso',
      kicker: 'Medium roast',
      herkunft: 'Sidamo, Ethiopia',
      aufbereitung: 'Natural',
      hoehe: '1,800–2,000 m',
      roestgrad: 'Medium — espresso profile',
      noten: ['Dark chocolate', 'Orange peel', 'Caramel'],
      zubereitung: ['Portafilter', 'Moka pot', 'Bean-to-cup machine'],
      text: 'Two minutes longer in the drum, a few degrees hotter. That takes the edge off the acidity and gives it body. Works on its own and with milk.',
    },
  ],

  roesterei: {
    kicker: 'Craft',
    h1: 'From the green seed to the bag',
    intro:
      'Roasting is no secret. It is temperature over time — logged, repeatable and checked every time. Here is what happens between the jute sack and the bag.',
    schritte: [
      {
        title: 'Green coffee',
        body: [
          'Green coffee smells of hay, not of coffee. It arrives in jute sacks of 30 or 60 kilos and keeps for about a year in dry storage.',
          'Buying runs through an importer. Which one, and how far a harvest can be traced back, will be stated here once the first sack is ordered.',
        ],
      },
      {
        title: 'Roasting',
        body: [
          'Drum roaster, batches of a few kilos. The bean goes through a drying, browning and development phase; between them sits first crack, an audible splitting of the bean.',
          'Every batch gets a log: charge temperature, curve, the moment of first crack, drop temperature. Without that log a roast cannot be repeated.',
        ],
      },
      {
        title: 'Cooling',
        body: [
          'After the drop, roasting carries on inside the hot bean. The cooling tray pulls air through the bed and stops the process within two to three minutes.',
          'Then the coffee rests. Carbon dioxide escapes over the first few days — which is why freshly roasted coffee only tastes round after about a week.',
        ],
      },
      {
        title: 'Cupping',
        body: [
          'Ground coffee, hot water, no filter. After four minutes the crust is broken, then it is spooned and slurped — atomising it in the mouth opens up aromas you would otherwise miss.',
          'Each batch is tasted against the profile of the previous one. If a roast drifts, it is not sold.',
        ],
      },
      {
        title: 'Packaging',
        body: [
          'Aroma bags with a one-way valve: CO₂ gets out, oxygen does not get in. Filled after the order, not for stock.',
        ],
      },
    ],
    blockA: {
      titel: 'Processing at origin',
      absaetze: [
        'Washed means: pulp off, fermentation, then the parchment dries. The result is cleaner and more acid-forward. Natural means the whole cherry dries on raised beds, and the fruit gives sweetness and body.',
        'Both happen in the growing country, long before the coffee sees a roastery. The decision made there shapes the taste more than any roast curve.',
      ],
    },
    blockB: {
      titel: 'Where the roasting happens',
      absaetze: [
        'In Willich, North Rhine-Westphalia. There is no shop floor and no bar. If you want to see the roaster, write to us.',
      ],
    },
  },

  ueberUns: {
    kicker: 'Willich, Lower Rhine',
    h1: 'One roastery, two coffees, no shop',
    intro:
      'Niederrhein Röstwerk is a small operation in Willich. Roasting happens on a drum roaster, in amounts one person can manage in a day. That is not modesty, it is the ceiling.',
    abschnitte: [
      {
        titel: 'How it started',
        absaetze: [
          'With noticing that coffee from our own kitchen almost always tasted better than coffee from the supermarket — and that the difference was not the machine, it was the roast date.',
          'After that came a used sample roaster, a few hundred badly roasted beans, and eventually a batch worth passing on.',
        ],
      },
      {
        titel: 'Why Ethiopia',
        absaetze: [
          'Because that is where Arabica comes from. Thousands of local varieties grow in Ethiopia, most without a variety name, many as part of the forest rather than a plantation. That gives a range of flavour no other growing country delivers in the same way.',
          'For a roastery with two coffees that is the sensible call: one origin you can actually get to know, instead of twelve you only brush past.',
        ],
      },
      {
        titel: 'Why small batches',
        absaetze: [
          'Roasted coffee has a window of about two to six weeks. Roast big and you have to store it, and storing means selling coffee outside that window.',
          'Small batches solve that, but they cost volume. So we would rather roast more often and less each time — and print the roast date on every bag.',
        ],
      },
    ],
    fakten: [
      { label: 'Location', wert: 'Willich, North Rhine-Westphalia' },
      { label: 'Origin', wert: 'Sidamo, Ethiopia' },
      { label: 'Roaster', wert: 'Drum' },
      { label: 'Ordering', wert: 'Via WhatsApp or email' },
    ],
  },

  team: {
    kicker: 'Who is behind it',
    titel: 'Two people, one route between them',
    leute: [
      {
        rolle: 'Sales and customers in Europe',
        text: 'Oussama comes from sales. Everything to do with selling in Europe sits with him: who gets the coffee, on what terms — and making sure we only promise what we can keep.',
      },
      {
        rolle: 'Buying and transport from Ethiopia',
        text: 'Before this roastery, Simo imported coffee into China. He knows the way from origin to port and handles buying, paperwork and transport — from Ethiopia to Europe.',
      },
    ],
  },

  kontakt: {
    kicker: 'Contact',
    h1: 'Write to us',
    intro: [
      'Questions about the roast, the origin, or working with cafés and offices: form or email, both land in the same place.',
      'Usually answered within two working days.',
    ],
    labelEmail: 'Email',
    labelTelefon: 'Phone',
    labelOrt: 'Location',
    feldName: 'Name',
    feldEmail: 'Email address',
    feldNachricht: 'Message',
    einwilligung: [
      'I agree that my details may be stored in order to handle this enquiry. They will not be used for advertising. More on this in the ',
      '.',
    ],
    datenschutzLink: 'privacy policy',
    absenden: 'Send message',
  },

  shop: {
    abschnittKicker: 'Order',
    groesse: 'Size',
    mahlgrad: 'Grind',
    mahlgrade: {
      bohne: 'Whole bean',
      filter: 'Ground for filter',
      siebtraeger: 'Ground for espresso machine',
    },
    menge: 'Quantity',
    weniger: 'One bag less',
    mehr: 'One bag more',
    jeKg: '{betrag} / kg',
    preisHinweis: ['Final price, plus ', ''],
    versandLink: 'shipping',
    hinzufuegen: 'Add to order',
    hinzugefuegt: 'Added to your order',
    direkt: 'Order just this one via WhatsApp',
    pflichtWert: 'Roasted coffee, 100% Arabica. Country of origin: Ethiopia. Producer and address: see legal notice.',

    bestellung: 'Your order',
    oeffnen: 'View order',
    schliessen: 'Close',
    leer: 'Nothing selected yet. Pick a coffee in the shop.',
    artikelEins: '1 bag',
    artikelViele: '{n} bags',
    entfernen: 'Remove',
    zwischensumme: 'Subtotal',
    versandkosten: 'Shipping',
    kostenlos: 'free',
    gesamt: 'Total',
    freiNoch: '{betrag} more for free shipping.',
    freiErreicht: 'Shipping is free.',
    sendenWhatsapp: 'Send via WhatsApp',
    sendenEmail: 'Send by email',
    ablauf:
      'Your order reaches us as a message. We confirm the roast date, the total and payment — it only becomes binding with our confirmation.',

    nachrichtGruss: 'Hello Niederrhein Röstwerk, I would like to order:',
    nachrichtFelder: 'Name:\nDelivery address:',
    nachrichtBetreff: 'Order',

    gross: {
      kicker: 'Larger amounts',
      titel: 'More than 1 kg? Gladly.',
      text: 'For 5 kg, 10 kg or regular deliveries to a café or office, send us a short note on what you need. You get an offer with a price per kilo and a roasting plan.',
      punkte: ['5 kg, 10 kg and more', 'For cafés, offices and restaurants', 'One-off or regular'],
      whatsapp: 'Ask via WhatsApp',
      email: 'Ask by email',
      nachricht:
        'Hello Niederrhein Röstwerk, I am interested in a larger amount of coffee.\n\nCoffee (filter / espresso):\nAmount:\nOne-off or regular:\nName / company:\nCity:',
      betreff: 'Enquiry: larger amount',
    },
  },

  versandSeite: {
    kicker: 'Ordering',
    h1: 'How to order',
    intro:
      'No account, no checkout, no cookies. You put your order together, send it to us as a message — and we get back to you in person.',
    schritteTitel: 'In three steps',
    schritte: [
      {
        title: 'Choose',
        text: 'Pick a coffee, size and grind and add it to your order: 250 g, 500 g or 1 kg.',
      },
      {
        title: 'Send',
        text: 'Your order reaches us as a ready-made message, via WhatsApp or email. You add your name and delivery address there.',
      },
      {
        title: 'Confirm',
        text: 'We reply with the total, the roast date and payment details. Then it is roasted, packed and shipped.',
      },
    ],
    preiseTitel: 'Prices',
    spalteGroesse: 'Size',
    spaltePreis: 'Price',
    spalteGrundpreis: 'Unit price',
    versandTitel: 'Shipping',
    versandText:
      'Shipping within Germany: {kosten}. Free shipping from an order value of {frei}. All prices are final prices.',
    lieferzeitTitel: 'Delivery time',
    lieferzeitText:
      'Usually 2–4 working days after payment. If a batch has just sold out, we tell you beforehand when the next one is ready.',
    zahlungTitel: 'Payment',
    zahlungText:
      'You only pay once we have confirmed your order. The payment details are in our reply.',
    todoTitel: 'Before going live',
    todoPunkte: [
      'Have terms and conditions and a cancellation policy with a model withdrawal form drawn up, and link them here and in the footer.',
      'Decide on payment methods and name them here.',
      'Confirm the delivery time.',
      'Have the mandatory food information checked for each coffee: name, net quantity, name and address of the food business operator.',
      'Register for coffee tax with the main customs office, register packaging with LUCID.',
      'Shipping abroad: set costs or explicitly exclude it.',
    ],
  },

  newsletter: {
    titel: 'Roast post',
    text: 'One email a month at most: what was in the drum, what is new, when a batch is running low. Unsubscribe in one click, the link is in every email.',
    labelEmail: 'Email address',
    platzhalter: 'name@example.com',
    absenden: 'Sign up',
    einwilligung: [
      'I would like to receive the roast post by email. The Röstwerk will send a confirmation email with a link — the sign-up is only active after that. I can withdraw this consent at any time. How the data is processed: ',
      '.',
    ],
    datenschutzLink: 'privacy policy',
    honeypot: 'Please leave this empty:',
  },

  danke: {
    h1: 'It arrived.',
    absaetze: [
      'If you signed up for the roast post: an email with a confirmation link is on its way. You are only signed up after you click it — without the click, nothing happens.',
      'If you wrote through the contact form, we usually reply within two working days.',
    ],
    zurueck: 'Back to the home page',
  },

  nichtGefunden: {
    h1: 'This page does not exist.',
    text: 'The link may be old, or it may be a typo.',
    zurueck: 'To the home page',
  },

  impressum: {
    kicker: 'Details under § 5 DDG',
    h1: 'Legal notice',
    warnung:
      'This page has not been filled in yet. It must not be publicly reachable in this state — a missing or incomplete legal notice is grounds for a formal warning under German law.',
    zeilen: [
      { label: 'Name / company', hinweis: 'Full name or company name as registered' },
      {
        label: 'Legal form',
        hinweis:
          'e.g. sole trader, GbR, GmbH — for a GmbH also the managing director and commercial register number',
      },
      { label: 'Address', hinweis: 'An address that can receive legal service: street, number, postcode, town. No PO box.' },
      { label: 'Email', hinweis: 'A working address that is actually read' },
      { label: 'Phone', hinweis: 'A phone number or an equally fast means of contact' },
      {
        label: 'VAT ID',
        hinweis:
          'Under § 27a UStG — or a note on the small business rule (§ 19 UStG) if there is none',
      },
      { label: 'Responsible for content', hinweis: 'Name and address of the responsible person' },
      {
        label: 'Supervisory authority',
        hinweis:
          'Only if the activity requires a licence — for coffee roasting also check the responsible customs office (coffee duty) and food safety authority',
      },
    ],
    todoLabel: 'Still to be filled in',
    todoEintragen: 'fill in',
    vsbgTitel: 'Consumer dispute resolution (§ 36 VSBG)',
    vsbgText:
      'As soon as goods are sold to consumers, this must state whether the business takes part in dispute resolution before a consumer arbitration board or not. Either answer is allowed — saying nothing is not.',
    bildnachweisTitel: 'Image credits',
    bildnachweisKi:
      'The images from the growing regions on this website are AI-generated. They illustrate the region of origin and show no particular farm, no particular business and no real person.',
    bildnachweisRest:
      'The portraits on the “About” page are our own photographs. All other images come from licensed stock.',
  },

  datenschutz: {
    kicker: 'Information under Article 13 GDPR',
    h1: 'Privacy policy',
    warnung:
      'This document already describes correctly what the website does technically. The items marked TODO must be completed and the text reviewed by a lawyer before going live.',
    abschnitte: [
      {
        titel: '1. Controller',
        absaetze: [
          { text: 'The controller for data processing on this website is: ', todo: 'name and legal address as in the legal notice' },
          { text: 'Contact for data protection questions: ', todo: 'email address' },
          { text: '', todo: 'check whether a data protection officer must be appointed (Art. 37 GDPR, § 38 BDSG)' },
        ],
      },
      {
        titel: '2. Hosting and server log files',
        absaetze: [
          'The website is hosted at Netlify. When a page is requested, technically necessary data is processed: IP address, time, file requested, volume transferred, referrer and user agent. The legal basis is Art. 6(1)(f) GDPR — the legitimate interest in running the site securely and reliably.',
          { text: 'Still to add: the data processing agreement with Netlify, how long log files are kept, and the basis for any transfer to the USA. ', todo: 'add the agreement and the retention period' },
        ],
      },
      {
        titel: '3. Contact form',
        absaetze: [
          'The contact form transmits a name, an email address and the message text. Transmission and storage run through Netlify Forms. The data is used solely to handle the enquiry and never for advertising.',
          'The legal basis is Art. 6(1)(b) GDPR for pre-contractual enquiries, otherwise Art. 6(1)(a) GDPR (consent via the checkbox in the form).',
          { text: 'Deletion usually happens once the enquiry is settled and no statutory retention period applies. ', todo: 'add the deletion period' },
        ],
      },
      {
        titel: '4. “Roast post” newsletter (double opt-in)',
        absaetze: [
          'The roast post collects an email address. Sign-up runs as a double opt-in: after the form is submitted, an email with a confirmation link is sent. The sign-up only takes effect when that link is clicked. Without confirmation, the address is not added to the list.',
          'To document the consent, the time of sign-up, the time of confirmation and the IP address used are stored.',
          'The legal basis is Art. 6(1)(a) GDPR. Consent can be withdrawn at any time with effect for the future — via the unsubscribe link in every email or informally to the address above.',
          { text: '', todo: 'name the newsletter provider and conclude a data processing agreement' },
        ],
      },
      {
        titel: '5. Orders via WhatsApp and email',
        absaetze: [
          'Orders do not go through a form on this website. The order button opens WhatsApp or your email program with a pre-filled message. Nothing is sent until you tap send yourself.',
          'Until then your order list lives only in your own browser’s storage (localStorage), so it is not lost when you change pages. It is not transmitted to us and disappears as soon as you empty it. This is not a cookie and serves only the function you are using yourself (Section 25(2) no. 2 TDDDG).',
          'We process your name, delivery address, contact details and the order contents to fulfil the order. The legal basis is Article 6(1)(b) GDPR. Invoice data is kept for the periods required by tax law.',
          { text: 'WhatsApp involves WhatsApp Ireland Ltd.; metadata may also be transferred to the USA. If you do not want that, order by email. ', todo: 'have the use of WhatsApp Business, storage periods and retention periods reviewed' },
        ],
      },
      {
        titel: '6. Cookies and tracking',
        absaetze: [
          'This website sets no cookies. There is no audience measurement, no analytics or advertising service is embedded, and no external fonts, maps, video platforms or chat widgets are loaded. The fonts in use sit on the same server as the website.',
          'That is why there is no cookie banner either. As soon as a service is added that sets cookies or accesses information on the device, consent must be obtained first under § 25 TDDDG.',
        ],
      },
      {
        titel: '7. Your rights',
        absaetze: [
          'You have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21 GDPR). Consent once given can be withdrawn at any time with effect for the future.',
          'You also have the right to lodge a complaint with a supervisory authority. Normally this is the authority of the country you live in; for North Rhine-Westphalia it is the State Commissioner for Data Protection and Freedom of Information NRW.',
        ],
      },
      {
        titel: '8. Version',
        absaetze: [{ text: '', todo: 'add the date of the last update' }],
      },
    ],
    todoLabel: 'Still to be filled in',
    vorLivegangTitel: 'Before going live',
    vorLivegangAbsaetze: [
      'Have the text reviewed by a lawyer. Do not take passages from other websites: privacy policies are protected by copyright, and someone else’s text does not describe your own processing.',
      'As soon as a shop is added, payment providers, shipping providers and tax retention duties come with it — this text does not cover any of that.',
    ],
  },

  rechtsvorrang:
    'This is a translation for convenience. The German version of this page is the legally binding one.',

  alt: {
    heroPlantage: 'Coffee plantation in the Ethiopian highlands at sunrise, in morning mist',
    espressoSiebtraeger: 'Espresso running from a wooden-handled portafilter into a cup',
    aeropress: 'Brewing coffee with an AeroPress and a gooseneck kettle',
    bohnenMakro: 'Freshly roasted coffee beans at a medium roast, close up',
    rohkaffee: 'Green coffee running from a jute sack onto a wooden table',
    cupping: 'A cupping table with numbered cups for quality control',
    kuehlsieb: 'Freshly roasted coffee beans dropping from the drum into the cooling tray',
    trommelroester: 'A drum roaster in a plain coffee roastery',
    kuehlsiebDetail: 'A stirring arm moving freshly roasted beans in the cooling tray',
    trocknung: 'Coffee cherries drying on raised beds at a washing station in Ethiopia',
    ernte: 'A farmer picking ripe coffee cherries by hand on a farm in Ethiopia',
    ernteBananen: 'Hand picking of coffee cherries between banana plants in the highlands',
    kirschenHaende: 'The hands of a coffee farmer holding freshly picked red cherries',
    textur: 'A full-frame texture of roasted coffee beans',
    portraitOussama: 'Portrait of Oussama Allali',
    portraitSimo: 'Portrait of Simo Kaddouri',
    og: 'Preview image for social media, WhatsApp and LinkedIn',
  },
  videoAlt: 'Roasted coffee beans with steam rising',
}
