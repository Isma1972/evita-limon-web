/* ════════════════════════════════════════════════════════════════
   DATOS DE LA WEB — este es el ÚNICO archivo que hay que editar
   para cambiar contenido: música, fotos, vídeos, textos, vínculos.
   ════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════
   1 · CONFIG — lo único que necesitas tocar para editar el contenido
   ═══════════════════════════════════════════════════════════════════ */
const CONFIG = {
  email: "contacto@evita-limon.es",      // correo oficial del proyecto
  imgBase  : "img/",                     // todo local: nada depende ya de Google
  audioBase: "audio/"
};

/* Para AÑADIR FOTOS a un músico: mete otra entrada en su lista "fotos".
   - n   = nombre base del archivo, sin el ancho ni la extensión
   - w   = anchos disponibles en img/  (los genera la tubería)
   - ar  = proporción de la foto (ancho/alto). El marco se adapta a ella,
           así que la foto NUNCA se recorta en la imagen principal.
   - pos = encuadre, solo para las miniaturas, que sí recortan
   - pie = texto opcional que sale en el visor
   La tira de contactos aparece sola en cuanto un músico tiene 2 fotos o más.

   CLIPS DE VÍDEO por músico (formato vertical 9:16, ~10 segundos):
   el .mp4 va en video/, el cartel (primer fotograma) en img/, y aquí:
     clips:[ { file:"nemo-clip01.mp4", poster:"img/nemo-clip01.webp", pie:"" } ]
   El botón-fotograma de 35 mm aparece solo en cuanto el músico tiene un clip.
   El script herramientas/procesar-clips.py genera el cartel automáticamente. */

/* ═══ MIEMBROS ═══ (abreviaturas al modo de los créditos de un LP de jazz) */
const MEMBERS = [
  {
    id:"evita", nombre:"Evita Limón", abbr:"voz", alias:["Evita Limón","Evita"],
    rol:"Voz y alma", instrumento:"Voz de lija y seda", origen:"Nicaragua / España", nacimiento:"—",
    fotos:[
      { n:"evita-01", w:[320, 800, 1400, 2000], ar:1.79, pos:"34% 22%", pie:"" }
    ],
    clips:[],
    chips:["Oído absoluto","Memento mori","Sin tacones"],
    bio:[
      "Evita Limón tiene unos cuarenta y un años. Su pelo recuerda al de Esperanza Spalding. Tiene una piel increíblemente sedosa y más que negra es mulata. Es una mujer con formas, que suele vestir con vestidos largos de una sola pieza que, en muchas ocasiones, llevan la espalda al aire. Su rostro es bello, de una belleza un tanto exótica, entre otras cosas porque sus ojos son un tanto orientales y sus labios carnosos, aunque sin exageración. Nunca lleva tacones: dice que no sabe andar con ellos. Una de sus señas de identidad es llevar un pañuelo colorido atado al pelo, a modo de diadema. Le gustan los collares, las pulseras y los pendientes de aro. En uno de sus brazos lleva tatuado un *memento mori*.",
      "Cierra mucho los ojos al cantar. En las entrevistas suele apuntar que los cierra porque, cuando canta, se desplaza a otro mundo. Han sido muchos los profesores de música que han asegurado que tiene oído absoluto.",
      "Cuentan que Nemo y ella tuvieron una historia de amor que duró años, mucho antes de la creación del grupo. Ambos vivían entonces en Nicaragua. Tuvieron un hijo que, con dos años de edad, secuestró la Contra nicaragüense. Lo buscaron con desesperación, día y noche, durante meses. Con el tiempo, aquello supuso algo insuperable para ellos. La relación se rompió. Una noche Nemo le dijo: «la pena ha roto nuestro amor». Fue lo último que le dijo.",
      "Muchos años después se reencontraron en España. Poco a poco se fueron acercando, pero nunca, que se sepa, se recuperaron como pareja. Muchos son los que aseguran que siguen locamente enamorados y son incapaces de demostrárselo el uno al otro. Hay algo especial que se palpa en el escenario cuando tocan."
    ]
  },
  {
    id:"nemo", nombre:"Nemo", abbr:"tp", alias:["Nemo"],
    rol:"Trompeta", instrumento:"Trompeta de plata", origen:"Xuño (A Coruña)", nacimiento:"—",
    fotos:[
      { n:"nemo-01", w:[320, 800, 1024], ar:1.0, pos:"48% 20%", pie:"" },
      { n:"nemo-02", w:[320, 800, 1024], ar:1.0, pos:"26% 27%", pie:"" },
      { n:"nemo-03", w:[320, 800, 1024], ar:1.0, pos:"50% 14%", pie:"" },
      { n:"nemo-04", w:[320, 800, 1400, 1536], ar:0.56, pos:"47% 43%", pie:"" },
      { n:"nemo-05", w:[320, 800, 1400, 1536], ar:0.56, pos:"39% 40%", pie:"" }
    ],
    clips:[],
    chips:["Autodidacta","Nº 1 en 1991","Baker · Davis · Morgan"],
    bio:[
      "Técnica impecable, tono hermoso y melódico, pero con un ataque tremendo; fraseo sofisticado y enormemente rápido.",
      "Nació en la aldea coruñesa de Xuño, en la Serra do Barbanza, aunque solo estuvo allí hasta los seis años, cuando sus padres se instalaron en Extremadura. Todos le conocen por Nemo. Es completamente autodidacta: jamás pisó un conservatorio ni una escuela de música, así que su aprendizaje, sobre todo en los primeros tiempos, fue más lento de lo debido. Eso llegó hasta tal punto que la familia le dio la espalda porque le consideraban un vago.",
      "Hoy está considerado un trompetista excepcional, con un estilo en el que mezcla la dulzura de Baker, el ataque potente de Miles y el genio de Lee Morgan. No está casado ni tiene hijos. Hay una frase que pronuncia con frecuencia: «la elegancia es lo último que se pierde».",
      "En 1991, un tema suyo llamado *Makú-yerí* saltó a la lista de éxitos de Estados Unidos y se mantuvo como número uno cuatro semanas seguidas. Aquello le dio fama pero, sobre todo, una buena cantidad de dinero que no esperaba. No necesita tocar para vivir: toca porque sin tocar no podría vivir.",
      "Su historia con Evita en Nicaragua, marcada por la tragedia del hijo secuestrado, es la herida que todavía marca su música y su relación con ella."
    ]
  },
  {
    id:"pinzarroja", nombre:"Pinzarroja Roncero", abbr:"cb", alias:["Pinzarroja Roncero","Pinzarroja","Juan Roncero","el Pinzas","Pinza Roja"],
    rol:"Contrabajo", instrumento:"Contrabajo del desván", origen:"Mieres (Asturias)", nacimiento:"1972",
    fotos:[
      { n:"pinzarroja-01", w:[320, 800, 1024], ar:1.0, pos:"52% 10%", pie:"" },
      { n:"pinzarroja-02", w:[320, 800, 1024], ar:1.0, pos:"43% 21%", pie:"" },
      { n:"pinzarroja-03", w:[320, 800, 1024], ar:1.0, pos:"47% 7%", pie:"" },
      { n:"pinzarroja-04", w:[320, 800, 1024], ar:1.0, pos:"63% 19%", pie:"" },
      { n:"pinzarroja-05", w:[320, 800, 1024, 1068], ar:0.74, pos:"64% 22%", pie:"" }
    ],
    clips:[],
    chips:["Bebop","Pajarita","El Pinzas"],
    bio:[
      "Contrabajista de técnica y expresividad extraordinarias, con un sonido muy personal y agresivo. Sonido sólido, gran versatilidad entre el swing y el bebop.",
      "Nació en Mieres en 1972, de padre marinero y madre ama de casa. Su madre no paraba de cantar mientras hacía las tareas de la casa. Tenían un ático donde colgaba la ropa de la familia: eran siete hermanos. Su nombre es Juan Roncero, pero todos le conocen como «el Pinzas» desde niño, porque cada dos por tres estaba con su madre tendiendo la ropa en el ático y era el encargado de llevar una bolsa llena de pinzas que le iba dando a su madre.",
      "Llegó un momento en su infancia en el que le hicieron decidir entre apuntarse al fútbol o al conservatorio. Decidió conservatorio. Lo del contrabajo es porque en el desván de su casa encontraron uno que, al parecer, era de un primo lejano que lo dejó allí antes de irse a Madrid. Sigue tocando con ese mismo contrabajo. Resultó ser un contrabajo excepcional.",
      "Entrado en carnes, muy alto, muy grande: tiene el físico exacto para mimetizarse con su instrumento. Es pelirrojo —parece que buena parte de su familia procede de Irlanda—, de ahí que también le llamen «Pinza Roja». En los conciertos lo presentan como Pinzarroja Roncero. Toca siempre, sin excepción, con una pajarita que va cambiando de modelo. Completamente vintage en el vestir: su atuendo es de los cincuenta americanos. Se considera a sí mismo un *bebopper*."
    ]
  },
  {
    id:"scarface", nombre:"Scarface", abbr:"org", alias:["Scarface","Joao Costa"],
    rol:"Hammond B3", instrumento:"Hammond B3 y Leslie", origen:"Oporto (Portugal)", nacimiento:"1967",
    fotos:[
      { n:"scarface-01", w:[320, 800, 1400, 2000], ar:1.79, pos:"58% 30%", pie:"" }
    ],
    clips:[],
    chips:["Soul jazz","Barron · Tyner · Powell","La cicatriz"],
    bio:[
      "Se llama Joao Costa. Es el único miembro de la banda que no es español, aunque lleva aquí más de veinte años.",
      "Nacido en Oporto en 1967, se pasó gran parte de su vida tocando en garitos de mala muerte de Oporto, Lisboa y, en verano, en la zona del Algarve, donde solía interpretar música que detestaba para turistas jubilados. Durante cinco años fue pianista en cruceros. Allí terminó mal: una noche, con más alcohol en el cuerpo de la cuenta, tuvo una reyerta con un polaco que le acabó rajando la cara de parte a parte con una botella rota. Por eso le llaman Scarface. Afortunadamente no perdió la vista ni sufrió ninguna consecuencia importante, además de esa cicatriz que aún conserva y que ahí estará hasta el final de sus días.",
      "Fue entonces cuando recaló en España, donde conoció a Pinzarroja en el Festival de Jazz de Vitoria. Se hicieron inseparables y él se pasó del piano al Hammond.",
      "Sus pianistas de referencia son Kenny Barron, McCoy Tyner y Bud Powell. También enamorado del bebop, tiene un estilo que puede llegar a ser muy percusivo y, a veces, muy impresionista. En el Hammond destacan su tono sólido y bluesero, su groove denso, un dominio técnico notable y un swing arrollador al más puro estilo *soul jazz*."
    ]
  },
  {
    id:"cheguy", nombre:"Chegüy", abbr:"bat", alias:["Chegüy","José Carlos Hernández"],
    rol:"Batería", instrumento:"Percusión de Max Roach", origen:"Salamanca", nacimiento:"1978",
    fotos:[
      { n:"cheguy-01", w:[320, 800, 1400, 2000], ar:1.79, pos:"58% 26%", pie:"" }
    ],
    clips:[],
    chips:["Escobillas","Max Roach","Blakey · Jones · Haynes"],
    bio:[
      "El nombre de pila del baterista es José Carlos Hernández, pero él mismo dice que no recuerda la última vez que se dirigieron a él por ese nombre.",
      "De Salamanca, nacido en 1978, aprendió a tocar percusión de muy niño, con unos cubos de plástico y un par de cubos de zinc. Fue su tío Chegüy, el hermano menor de su padre, quien se los consiguió por primera vez y el encargado de reponérselos según se iban rompiendo.",
      "Un día de la lotería de Navidad, a su tío le cayó el gordo en todo lo alto. Lo primero que hizo fue irse a la mejor tienda de música y comprarle a su sobrino la batería más cara del establecimiento. Cuando se la dio, solo le puso una condición: «me vas a jurar que tu nombre artístico será Chegüy, en honor del tío que más te quiere». Al año siguiente su tío murió al caer su coche por un puente de madrugada; el dinero de la lotería lo había llevado a la mala vida. Lo que nunca ha olvidado nuestro baterista es que su nombre es, y será hasta que se muera, Chegüy.",
      "Su ídolo total es Max Roach, y se nota su influencia al tocar. Tiene un toque elegante e imaginativo. Le gusta mucho tocar con escobillas. Otras referencias para él son Art Blakey, Elvin Jones o Roy Haynes. Admira mucho a Nemo, a quien considera su hermano mayor: lo que diga Nemo va a misa."
    ]
  }
];

/* ═══ TOMAS ═══ ("Lodo y Sal" son dos tomas distintas del mismo tema) */
const TRACKS = [
  { file:"insultame-hasta-que-te-canses.mp3", titulo:"Insúltame Hasta Que Te Canses", toma:"",
    desc:"Versión Jazz Cool-Bossa" },
  { file:"deja-que-te-diga.mp3", titulo:"Deja Que Te Diga", toma:"",
    desc:"" },
  { file:"lo-tengo-claro.mp3", titulo:"Lo Tengo Claro", toma:"",
    desc:"" },
  { file:"sintiendolo-mucho.mp3", titulo:"Sintiéndolo Mucho", toma:"",
    desc:"" },
  { file:"todo-esta-bien.mp3", titulo:"Todo Está Bien", toma:"",
    desc:"" }
];

/* ═══ VÍNCULOS ═══ */
const LINKS = [
  { a:"evita", b:"nemo", key:"Nicaragua", tipo:"roto",
    titulo:"La pena que rompió el amor",
    texto:"Tuvieron una historia de amor que duró años, mucho antes del grupo. Vivían en Nicaragua. Tuvieron un hijo que, con dos años, secuestró la Contra. Lo buscaron día y noche durante meses. Una noche Nemo le dijo: <em>«la pena ha roto nuestro amor»</em>. Fue lo último que le dijo. Muchos años después se reencontraron en España; nunca, que se sepa, volvieron a ser pareja. Hay algo que se palpa en el escenario cuando tocan." },
  { a:"pinzarroja", b:"scarface", key:"Vitoria",
    titulo:"Del piano al Hammond",
    texto:"Se conocieron en el Festival de Jazz de Vitoria, poco después de que Scarface recalara en España. Se hicieron inseparables. Fue entonces cuando dejó el piano y se pasó al Hammond. Comparten además la misma devoción: el <em>bebop</em>." },
  { a:"cheguy", b:"nemo", key:"Discipulado", dirigido:true,
    titulo:"Lo que diga Nemo va a misa",
    texto:"Chegüy admira a Nemo hasta el punto de considerarlo su hermano mayor. Es la única jerarquía que el grupo reconoce sin discutirla." },
  { a:"pinzarroja", b:"cheguy", key:"Sección rítmica", tipo:"tenue",
    titulo:"El motor",
    texto:"Contrabajo y batería. Un bebopper vintage de pajarita y un discípulo de Max Roach enamorado de las escobillas: el pulso sobre el que se sostiene todo lo demás." }
];

/* ═══ VOCES ═══ */
const VOICES = [
  { q:"La elegancia es lo último que se pierde.", c:"Nemo — frase que repite" },
  { q:"La pena ha roto nuestro amor.", c:"Nemo a Evita — lo último que le dijo" },
  { q:"Cierro los ojos porque, cuando canto, me voy a otro mundo.", c:"Evita Limón — en una entrevista" }
];

/* ═══ PLATAFORMAS Y REDES ═══
   Pega cada enlace entre las comillas de "url" cuando lo tengas.
   Un botón sin enlace se muestra apagado con la etiqueta "próximamente";
   en cuanto pegues la url, se activa solo. Para quitar una plataforma,
   borra su línea; para añadir otra, copia una línea y cambia los datos. */
const PLATAFORMAS = [
  { id:"spotify",    nombre:"Spotify",       url:"" },
  { id:"apple",      nombre:"Apple Music",   url:"" },
  { id:"youtube",    nombre:"YouTube Music", url:"" },
  { id:"soundcloud", nombre:"SoundCloud",    url:"" }
];
const REDES = [
  { id:"instagram", nombre:"Instagram", url:"" },
  { id:"tiktok",    nombre:"TikTok",    url:"" }
];

/* ═══ CRÉDITO DE AUTORÍA ═══  (aparece en el pie de la web) */
const CREDITO = "Todas las canciones de Evita Limón y Los Exprimidores —letra, música y arreglos— están compuestas íntegramente por Ismael Rozalén y registradas en SEDA, la Sociedad Española de Derechos de Autor. La inteligencia artificial llega después: con ella ha dado cuerpo, rostro y voz a este quinteto virtual que las interpreta.";

/* ═══ VÍDEOS ═══  Deja la lista vacía y la sección muestra "bobina en tránsito".
   Para añadir uno: mete el .mp4 en video/, su cartel (imagen) en img/, y una entrada aquí:
   { file:"tierra-adentro.mp4", titulo:"Tierra adentro", nota:"Videoclip", poster:"img/evita-01-800.webp" } */
const VIDEOS = [
];
