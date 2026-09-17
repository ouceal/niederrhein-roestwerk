import type { Dictionary } from './types'

/**
 * Español.
 *
 * Traducido del alemán, no reescrito: las mismas afirmaciones, la misma
 * sobriedad, las mismas frases cortas. Las normas alemanas conservan su
 * nombre original — quien quiera consultarlas necesita el nombre que
 * existe de verdad.
 */
export const es: Dictionary = {
  meta: {
    siteTitle: 'Niederrhein Röstwerk',
    homeTitle: 'Tostadero de café en Willich',
    homeDescription:
      'Pequeño tostadero de café en Willich, Alemania. Un solo origen, dos cafés, tueste en lotes pequeños. La venta aún no ha empezado — apúntate a la lista de espera.',
    kaffeeTitle: 'Café',
    kaffeeDescription:
      'Dos cafés de Sidamo, Etiopía: un perfil claro para filtro y un perfil medio para espresso. Todavía no se pueden pedir.',
    roestereiTitle: 'Tostadero',
    roestereiDescription:
      'Del café verde al tueste en tambor, de la cata al envasado: cómo se trabaja en el Röstwerk.',
    ueberUnsTitle: 'Sobre nosotros',
    ueberUnsDescription:
      'Por qué un pequeño tostadero en Willich, por qué Etiopía y por qué se tuesta en cantidades pequeñas.',
    kontaktTitle: 'Contacto',
    kontaktDescription:
      'Preguntas sobre el café, el tueste o una colaboración — formulario de contacto y correo del Niederrhein Röstwerk.',
    dankeTitle: 'Gracias',
    dankeDescription: 'Tu mensaje ha llegado.',
    impressumTitle: 'Aviso legal',
    impressumDescription: 'Datos del prestador según el § 5 DDG (ley alemana de servicios digitales).',
    datenschutzTitle: 'Privacidad',
    datenschutzDescription:
      'Información sobre el tratamiento de datos personales según el art. 13 del RGPD.',
  },

  thema: {
    aria: 'Elegir tema',
    system: 'Sistema',
    hell: 'Claro',
    dunkel: 'Oscuro',
  },
  nav: {
    kaffee: 'Café',
    roesterei: 'Tostadero',
    ueberUns: 'Sobre nosotros',
    kontakt: 'Contacto',
    ariaHaupt: 'Navegación principal',
    ariaSeiten: 'Páginas',
    ariaRecht: 'Información legal',
    ariaSprache: 'Elegir idioma',
    sprache: 'Idioma',
    zumInhalt: 'Saltar al contenido',
  },

  footer: {
    beschreibung: 'Tostadero de café en Willich, Renania del Norte-Westfalia.',
    spalteSeiten: 'Páginas',
    spalteRecht: 'Legal',
    spalteKontakt: 'Contacto',
    impressum: 'Aviso legal',
    datenschutz: 'Privacidad',
    cookieZeile: 'Esta página no usa cookies ni carga servicios de terceros.',
  },

  hero: {
    kicker: 'Willich, Bajo Rin',
    headline: 'Café de Sidamo, tostado en Willich.',
    sub: 'Un solo origen. Dos cafés. Tueste en lotes pequeños. La venta todavía no ha empezado.',
    cta: 'Ir a la lista de espera',
  },

  home: {
    dreiSaetze: [
      {
        title: 'Un solo origen',
        text: 'Tostamos café de la región de Sidamo, en Etiopía. No es una mezcla de cinco países ni un surtido que cambia cada mes.',
      },
      {
        title: 'Lotes pequeños',
        text: 'Se tuesta en un tambor, en cantidades que se venden en pocos días. Sin almacén y sin existencias.',
      },
      {
        title: 'Dos cafés',
        text: 'Uno para filtro, otro para la máquina. Para empezar es suficiente. Si el surtido crece, aquí se dirá.',
      },
    ],
    story: [
      {
        title: 'Por qué Etiopía',
        paragraphs: [
          'Etiopía es el país de origen del arábica. Allí crecen miles de variedades locales, la mayoría de las cuales nunca recibió un nombre. De ahí viene una gama de aromas que ningún otro país productor ofrece igual.',
          'Sidamo está en el sur, entre los 1.500 y los 2.200 metros. La altitud frena la maduración de la cereza. El grano se vuelve más denso y la acidez más nítida.',
        ],
      },
      {
        title: 'Por qué cantidades pequeñas',
        paragraphs: [
          'El café es un alimento con una ventana corta. De dos a cuatro semanas después del tueste está en su punto; luego se apaga. Quien tuesta para almacenar vende café viejo.',
          'Por eso el Röstwerk tuesta según la demanda. Eso limita la cantidad que podemos ofrecer — y es la razón de que haya una lista de espera en lugar de una tienda abierta.',
        ],
      },
    ],
    prozessKicker: 'Del café verde a la bolsa',
    prozessTitel: 'Cuatro pasos por los que pasa cada lote',
    prozess: [
      {
        title: 'Beneficio en origen',
        text: 'Las cerezas se lavan o se secan antes de que el café verde salga del país.',
      },
      {
        title: 'Tueste',
        text: 'Tambor, de 10 a 14 minutos, un perfil por cada café. Un registro en cada lote.',
      },
      {
        title: 'Enfriado',
        text: 'Directo a la bandeja de enfriado. Cuanto antes baja el grano, menos sigue tostándose.',
      },
      {
        title: 'Cata',
        text: 'Cada lote se cata. Lo que no coincide con el perfil no sale.',
      },
    ],
    sortimentKicker: 'El surtido',
    sortimentTitel: 'Dos cafés',
    sortimentText: 'Los dos de Sidamo, los dos tostados en lotes pequeños. Todavía no se pueden pedir.',
    sortimentCta: 'Los dos cafés en detalle',
  },

  kaffee: {
    kicker: 'Surtido',
    h1: 'Dos cafés, un solo origen',
    intro: [
      'Los dos cafés vienen de la región de Sidamo, en el sur de Etiopía. La diferencia está en el tueste, no en el marketing: uno claro para filtro y otro algo más oscuro para la máquina.',
      'Todavía no se vende nada. Cuando empiece, aquí estarán el precio, el precio por 100 g, el peso neto y toda la información obligatoria del alimento.',
    ],
    srUeberschrift: 'Los cafés en detalle',
    blockA: {
      titel: 'Lo que pondrá en la bolsa',
      text: 'La fecha de tueste, no solo la de consumo preferente. Región de origen, método de beneficio y grado de tueste. Peso neto y precio por 100 g. Ningún premio que no tengamos y ninguna mención ecológica sin certificación.',
    },
    blockB: {
      titel: 'Cuánto habrá',
      text: 'Depende de la capacidad de tueste y de cuánto café verde compremos por lote. Daremos cantidades exactas cuando estén cerradas.',
    },
  },

  kaffeeFelder: {
    herkunft: 'Origen',
    aufbereitung: 'Beneficio',
    hoehe: 'Altitud',
    roestgrad: 'Tueste',
    noten: 'Notas',
    zubereitung: 'Preparación',
  },

  kaffees: [
    {
      name: 'Sidamo Filtro',
      kicker: 'Tueste claro',
      herkunft: 'Sidamo, Etiopía',
      aufbereitung: 'Lavado',
      hoehe: '1.900–2.100 m',
      roestgrad: 'Claro — perfil de filtro',
      noten: ['Limón', 'Té negro', 'Miel'],
      zubereitung: ['Filtro manual', 'AeroPress', 'Prensa francesa'],
      text: 'Tostado más claro para que la acidez se mantenga. En taza resulta limpio y ligero, con una nota cítrica que se nota más al enfriarse. Quien toma el café con leche hará mejor en llevarse el espresso.',
    },
    {
      name: 'Sidamo Espresso',
      kicker: 'Tueste medio',
      herkunft: 'Sidamo, Etiopía',
      aufbereitung: 'Natural',
      hoehe: '1.800–2.000 m',
      roestgrad: 'Medio — perfil de espresso',
      noten: ['Chocolate negro', 'Piel de naranja', 'Caramelo'],
      zubereitung: ['Portafiltros', 'Cafetera italiana', 'Máquina automática'],
      text: 'Dos minutos más en el tambor y unos grados más de temperatura. Eso le quita filo a la acidez y le da cuerpo. Funciona solo y con leche.',
    },
  ],

  roesterei: {
    kicker: 'Oficio',
    h1: 'Del grano verde a la bolsa',
    intro:
      'Tostar no tiene secreto: es temperatura a lo largo del tiempo, documentada, repetible y comprobada cada vez. Aquí está lo que pasa entre el saco de yute y la bolsa.',
    schritte: [
      {
        title: 'Café verde',
        body: [
          'El café verde huele a heno, no a café. Llega en sacos de yute de 30 o 60 kilos y, bien guardado en seco, aguanta alrededor de un año.',
          'La compra pasa por un importador. Cuál será y hasta dónde podrá rastrearse la cosecha se dirá aquí en cuanto se pida el primer saco.',
        ],
      },
      {
        title: 'Tueste',
        body: [
          'Tambor, lotes de pocos kilos. El grano pasa por una fase de secado, una de dorado y una de desarrollo; entre ellas está el primer crack, un chasquido audible del grano.',
          'Cada lote lleva su registro: temperatura de carga, curva, momento del crack y temperatura de descarga. Sin ese registro un tueste no se puede repetir.',
        ],
      },
      {
        title: 'Enfriado',
        body: [
          'Tras la descarga, el tueste sigue dentro del grano caliente. La bandeja hace pasar aire por la capa y detiene el proceso en dos o tres minutos.',
          'Después el café reposa. Durante los primeros días sale dióxido de carbono — por eso el café recién tostado solo sabe redondo al cabo de una semana.',
        ],
      },
      {
        title: 'Cata',
        body: [
          'Café molido, agua caliente y ningún filtro. A los cuatro minutos se rompe la costra, y luego se prueba con cuchara sorbiendo — pulverizarlo en la boca abre aromas que si no se escapan.',
          'Se cata contra el perfil del lote anterior. Si un tueste se desvía, no se vende.',
        ],
      },
      {
        title: 'Envasado',
        body: [
          'Bolsas con válvula: el CO₂ puede salir y el oxígeno no entra. Se envasa después del pedido, no para almacenar.',
        ],
      },
    ],
    blockA: {
      titel: 'Beneficio en origen',
      absaetze: [
        'Lavado significa: quitar la pulpa, fermentar y secar el pergamino. El resultado es más limpio y con más acidez. Natural significa que la cereza entera se seca en camas elevadas y la fruta aporta dulzor y cuerpo.',
        'Los dos procesos ocurren en el país de cultivo, mucho antes de que el café vea un tostadero. Lo que se decide allí marca el sabor más que cualquier curva de tueste.',
      ],
    },
    blockB: {
      titel: 'Dónde se tuesta',
      absaetze: [
        'En Willich, Renania del Norte-Westfalia. No hay tienda ni barra. Quien quiera ver la tostadora, que nos escriba.',
      ],
    },
  },

  ueberUns: {
    kicker: 'Willich, Bajo Rin',
    h1: 'Un tostadero, dos cafés, ninguna tienda',
    intro:
      'Niederrhein Röstwerk es un negocio pequeño en Willich. Se tuesta en un tambor, en cantidades que una persona saca adelante en un día. No es modestia: es el techo.',
    abschnitte: [
      {
        titel: 'Cómo empezó',
        absaetze: [
          'Al darnos cuenta de que el café hecho en casa casi siempre sabía mejor que el del supermercado — y de que la diferencia no estaba en la máquina, sino en la fecha de tueste.',
          'Después vinieron una tostadora de muestras de segunda mano, unos cuantos cientos de granos mal tostados y, en algún momento, un lote que merecía la pena compartir.',
        ],
      },
      {
        titel: 'Por qué Etiopía',
        absaetze: [
          'Porque de allí viene el arábica. En Etiopía crecen miles de variedades locales, casi todas sin nombre, muchas como parte del bosque y no como plantación. De ahí sale una gama aromática que ningún otro país productor ofrece igual.',
          'Para un tostadero con dos cafés es la decisión más sensata: un origen que se puede conocer de verdad, en lugar de doce que apenas se rozan.',
        ],
      },
      {
        titel: 'Por qué lotes pequeños',
        absaetze: [
          'El café tostado tiene una ventana de unas dos a seis semanas. Quien tuesta en grande tiene que almacenar, y quien almacena vende café fuera de esa ventana.',
          'Los lotes pequeños lo resuelven, pero cuestan volumen. Por eso primero hay una lista de espera y después una tienda, y no al revés.',
        ],
      },
    ],
    fakten: [
      { label: 'Lugar', wert: 'Willich, Renania del Norte-Westfalia' },
      { label: 'Origen', wert: 'Sidamo, Etiopía' },
      { label: 'Tostadora', wert: 'De tambor' },
      { label: 'Estado', wert: 'Antes del lanzamiento' },
    ],
  },

  kontakt: {
    kicker: 'Contacto',
    h1: 'Escríbenos',
    intro: [
      'Preguntas sobre el tueste, el origen o una colaboración con cafeterías y oficinas: formulario o correo, los dos llegan al mismo sitio.',
      'Normalmente respondemos en dos días laborables.',
    ],
    labelEmail: 'Correo',
    labelTelefon: 'Teléfono',
    labelOrt: 'Lugar',
    feldName: 'Nombre',
    feldEmail: 'Dirección de correo',
    feldNachricht: 'Mensaje',
    einwilligung: [
      'Acepto que mis datos se guarden para gestionar esta consulta. No se usarán con fines publicitarios. Más información en la ',
      '.',
    ],
    datenschutzLink: 'política de privacidad',
    absenden: 'Enviar mensaje',
  },

  newsletter: {
    titel: 'Lista de espera',
    text: 'Un correo cuando empiece la venta. Después, como mucho uno al mes: qué ha pasado por el tambor y qué hay. Baja con un clic, el enlace va en cada correo.',
    labelEmail: 'Dirección de correo',
    platzhalter: 'nombre@ejemplo.es',
    absenden: 'Apuntarme',
    einwilligung: [
      'Quiero recibir la lista de espera por correo. Para confirmarlo, el Röstwerk envía un correo con un enlace — el alta solo se activa después. Puedo retirar el consentimiento en cualquier momento. Información sobre el tratamiento: ',
      '.',
    ],
    datenschutzLink: 'política de privacidad',
    honeypot: 'No rellenar:',
  },

  danke: {
    h1: 'Ha llegado.',
    absaetze: [
      'Si te has apuntado a la lista de espera: en unos minutos recibirás un correo con un enlace de confirmación. Solo estás en la lista después de hacer clic — sin clic no pasa nada.',
      'Si has escrito por el formulario de contacto, normalmente respondemos en dos días laborables.',
    ],
    zurueck: 'Volver a la página de inicio',
  },

  nichtGefunden: {
    h1: 'Esta página no existe.',
    text: 'Puede que el enlace sea antiguo o que haya una errata.',
    zurueck: 'A la página de inicio',
  },

  impressum: {
    kicker: 'Datos según el § 5 DDG',
    h1: 'Aviso legal',
    warnung:
      'Esta página todavía no está rellenada. En este estado no puede ser accesible al público — en Alemania un aviso legal ausente o incompleto es motivo de requerimiento.',
    zeilen: [
      { label: 'Nombre / empresa', hinweis: 'Nombre completo o razón social según el alta de actividad' },
      {
        label: 'Forma jurídica',
        hinweis:
          'p. ej. empresario individual, GbR, GmbH — en una GmbH también el administrador y el número del registro mercantil',
      },
      { label: 'Dirección', hinweis: 'Dirección válida para notificaciones: calle, número, código postal y localidad. Sin apartado de correos.' },
      { label: 'Correo', hinweis: 'Una dirección que funcione y que se lea de verdad' },
      { label: 'Teléfono', hinweis: 'Un número o una vía de contacto igual de rápida' },
      {
        label: 'NIF-IVA',
        hinweis:
          'Según el § 27a UStG — o la indicación del régimen de pequeñas empresas (§ 19 UStG) si no se tiene',
      },
      { label: 'Responsable del contenido', hinweis: 'Nombre y dirección de la persona responsable' },
      {
        label: 'Autoridad de supervisión',
        hinweis:
          'Solo si la actividad requiere autorización — para el tueste de café comprobar además la aduana competente (impuesto sobre el café) y el control alimentario',
      },
    ],
    todoLabel: 'Pendiente de rellenar',
    todoEintragen: 'rellenar',
    vsbgTitel: 'Resolución de litigios con consumidores (§ 36 VSBG)',
    vsbgText:
      'En cuanto se vendan productos a consumidores, aquí debe indicarse si la empresa participa o no en un procedimiento de resolución ante un organismo de consumo. Las dos respuestas son válidas — el silencio no.',
    bildnachweisTitel: 'Créditos de las imágenes',
    bildnachweisKi:
      'Las imágenes de las regiones de cultivo que aparecen en esta web están generadas con inteligencia artificial. Ilustran la región de origen y no muestran ninguna finca concreta, ninguna empresa determinada ni ninguna persona real.',
    bildnachweisRest: 'El resto de las imágenes proceden de bancos con licencia.',
  },

  datenschutz: {
    kicker: 'Información según el art. 13 del RGPD',
    h1: 'Política de privacidad',
    warnung:
      'Este documento ya describe correctamente lo que la web hace a nivel técnico. Los puntos marcados con TODO deben completarse y el texto debe revisarse jurídicamente antes de publicarlo.',
    abschnitte: [
      {
        titel: '1. Responsable del tratamiento',
        absaetze: [
          { text: 'El responsable del tratamiento de datos en esta web es: ', todo: 'nombre y dirección como en el aviso legal' },
          { text: 'Contacto para cuestiones de privacidad: ', todo: 'dirección de correo' },
          { text: '', todo: 'comprobar si hay que nombrar un delegado de protección de datos (art. 37 RGPD, § 38 BDSG)' },
        ],
      },
      {
        titel: '2. Alojamiento y archivos de registro',
        absaetze: [
          'La web está alojada en Netlify. Al abrir una página se tratan datos técnicamente necesarios: dirección IP, hora, archivo solicitado, volumen transmitido, referente y agente de usuario. La base jurídica es el art. 6.1.f del RGPD — el interés legítimo en un funcionamiento seguro y estable de la web.',
          { text: 'Falta añadir: el contrato de encargado del tratamiento con Netlify, el plazo de conservación de los registros y la base de una posible transferencia a EE. UU. ', todo: 'añadir contrato y plazo de conservación' },
        ],
      },
      {
        titel: '3. Formulario de contacto',
        absaetze: [
          'Por el formulario de contacto se transmiten nombre, dirección de correo y texto del mensaje. La transmisión y el almacenamiento se hacen a través de Netlify Forms. Los datos se usan solo para gestionar la consulta y nunca con fines publicitarios.',
          'La base jurídica es el art. 6.1.b del RGPD en consultas precontractuales y, si no, el art. 6.1.a del RGPD (consentimiento mediante la casilla del formulario).',
          { text: 'Lo habitual es borrarlos cuando la consulta queda cerrada y ningún plazo legal de conservación lo impide. ', todo: 'añadir el plazo de borrado' },
        ],
      },
      {
        titel: '4. Lista de espera y boletín (doble opt-in)',
        absaetze: [
          'Para la lista de espera se recoge la dirección de correo. El alta funciona con doble opt-in: tras enviar el formulario se manda un correo con un enlace de confirmación. El alta solo es efectiva al hacer clic en ese enlace. Sin confirmación, la dirección no entra en la lista.',
          'Como prueba del consentimiento se guardan el momento del alta, el momento de la confirmación y la dirección IP utilizada.',
          'La base jurídica es el art. 6.1.a del RGPD. El consentimiento puede retirarse en cualquier momento con efecto para el futuro — por el enlace de baja de cada correo o de forma libre a la dirección indicada arriba.',
          { text: '', todo: 'indicar el proveedor del boletín y firmar el contrato de encargado del tratamiento' },
        ],
      },
      {
        titel: '5. Cookies y seguimiento',
        absaetze: [
          'Esta web no usa cookies. No hay medición de audiencia, no hay ningún servicio de análisis ni de publicidad integrado y no se cargan fuentes externas, mapas, plataformas de vídeo ni widgets de chat. Las tipografías que se usan están en el mismo servidor que la web.',
          'Por eso tampoco hay banner de cookies. En cuanto se añada un servicio que use cookies o acceda a información del dispositivo, habrá que pedir consentimiento antes según el § 25 TDDDG.',
        ],
      },
      {
        titel: '6. Tus derechos',
        absaetze: [
          'Tienes derecho de acceso (art. 15), rectificación (art. 16), supresión (art. 17), limitación del tratamiento (art. 18), portabilidad (art. 20) y oposición (art. 21 del RGPD). Un consentimiento dado puede retirarse en cualquier momento con efecto para el futuro.',
          'Además tienes derecho a reclamar ante una autoridad de control. Normalmente es la del país donde resides; para Renania del Norte-Westfalia es la Comisionada estatal de protección de datos y libertad de información de NRW.',
        ],
      },
      {
        titel: '7. Versión',
        absaetze: [{ text: '', todo: 'añadir la fecha de la última actualización' }],
      },
    ],
    todoLabel: 'Pendiente de rellenar',
    vorLivegangTitel: 'Antes de publicar',
    vorLivegangAbsaetze: [
      'Que un abogado revise el texto. No copiar pasajes de otras webs: las políticas de privacidad están protegidas por derechos de autor y un texto ajeno no describe el tratamiento propio.',
      'En cuanto se añada una tienda llegan los proveedores de pago, los de envío y las obligaciones fiscales de conservación — este texto no cubre nada de eso.',
    ],
  },

  rechtsvorrang:
    'Esta es una traducción de cortesía. La versión alemana de esta página es la jurídicamente vinculante.',

  alt: {
    heroPlantage: 'Plantación de café en el altiplano etíope al amanecer, entre la niebla de la mañana',
    espressoSiebtraeger: 'Espresso cayendo en una taza desde un portafiltros con mango de madera',
    aeropress: 'Preparación de café con AeroPress y hervidor de cuello de cisne',
    bohnenMakro: 'Granos de café recién tostados con tueste medio, en primer plano',
    rohkaffee: 'Café verde saliendo de un saco de yute sobre una mesa de madera',
    cupping: 'Mesa de cata con tazas numeradas para el control de calidad',
    kuehlsieb: 'Granos recién tostados cayendo del tambor a la bandeja de enfriado',
    trommelroester: 'Tostadora de tambor en un tostadero sobrio',
    kuehlsiebDetail: 'Brazo giratorio moviendo los granos recién tostados en la bandeja de enfriado',
    trocknung: 'Cerezas de café secándose en camas elevadas de una estación de beneficio en Etiopía',
    ernte: 'Una caficultora recoge a mano cerezas de café maduras en una finca de Etiopía',
    ernteBananen: 'Recolección manual de cerezas de café entre plataneras en el altiplano',
    kirschenHaende: 'Las manos de un caficultor con cerezas de café rojas recién recogidas',
    textur: 'Textura a pantalla completa de granos de café tostados',
    og: 'Imagen de vista previa para redes sociales, WhatsApp y LinkedIn',
  },
  videoAlt: 'Granos de café tostados con vapor subiendo',
}
