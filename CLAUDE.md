# Evita Limón y Los Exprimidores — web del quinteto

Web estática (un `index.html` + `datos.js` + carpetas de medios) del grupo
de jazz virtual creado por Ismael Rozalén. Sin frameworks, sin build, sin
dependencias externas (tipografías autoalojadas en `fonts/`).

## Regla de oro
**Todo el contenido editable vive en `datos.js`.** No tocar `index.html`
para cambios de contenido: canciones (TRACKS), fotos y clips por músico
(MEMBERS), vídeos (VIDEOS), plataformas y redes (PLATAFORMAS, REDES),
vínculos (LINKS), citas (VOICES), crédito de autoría (CREDITO) y correo
(CONFIG). `index.html` solo se toca para cambios de diseño o funcionalidad.

## Cómo se añade contenido
Vía rápida: el autor deja los archivos en las carpetas de material
(ver sección siguiente) y le dice a Code qué hay nuevo. Code hace el resto.

Vía manual (por referencia):
- **Canción**: `.mp3` en `audio/` + entrada en TRACKS (datos.js).
- **Fotos de un músico**: originales en la carpeta de material del músico →
  ejecutar `python3 herramientas/procesar-fotos.py` (genera WebP en 4
  anchos en `img/` y escupe las líneas para la lista `fotos`). El campo
  `ar` es la proporción real (el marco se adapta: la foto grande nunca se
  recorta); `pos` es el encuadre de las miniaturas y se ajusta A OJO
  mirando la foto (la detección de caras del script falla con luz de
  escenario).
- **Clip de músico** (vertical 9:16, ~10 s): original en la carpeta de
  clips del músico → ejecutar `python3 herramientas/procesar-clips.py`
  (recomprime a H.264+AAC, extrae el cartel del primer fotograma y escupe
  la línea para `clips`).
- **Vídeo general**: `.mp4` en `video/` + cartel en `img/` + entrada en
  VIDEOS (datos.js). Si se aporta cartel con el mismo nombre, se usa; si
  no, se extrae del primer fotograma.
- **Foto del hero**: imagen en la carpeta Hero → se procesa igual que una
  foto de músico pero se asigna a CONFIG en vez de a un miembro.
- Slugs de los músicos: `evita`, `nemo`, `pinzarroja`, `scarface`, `cheguy`.

## Diseño (no romper)
- Estética "archivo sonoro / cinta magnética": negro cálido `--ink`, ámbar
  `--amber`, hueso `--bone`. Tipos: Archivo (títulos black italic),
  EB Garamond (prosa), JetBrains Mono (etiquetas).
- Fotos en B/N (`--duo`) que se revelan a color al pasar el cursor.
- El escenario del retrato adopta la proporción de cada foto (`--ar`).
- El botón de clip es un fotograma de 35 mm dibujado en monolínea.
- Prohibido: logotipos oficiales de marcas (los iconos de plataformas son
  versiones propias de trazo), placas/bloques eliminados por el autor
  (la placa de 1991), duotono ámbar antiguo.

## Publicación
- Dominio: `evita-limon.com` (principal) y `evita-limon.es` (redirección
  301), registrados en Arsys, que también lleva el correo.
- Alojamiento: **GitHub Pages** desde este repositorio; cada commit publica.
  DNS de Arsys apuntando a Pages. HTTPS activado.
- El correo de contacto oficial del proyecto es `contacto@evita-limon.es`
  (definido en `CONFIG.email` de `datos.js`).
- Repositorio: `github.com/Isma1972/evita-limon-web`
- Copia maestra local: `C:\Users\Ismael\Documents\GitHub\evita-limon-web`
- GitHub Desktop instalado; cada Commit + Push publica automáticamente.

## Carpetas de material (fuente de originales)
El material nuevo se deja siempre en estas carpetas del equipo del autor.
**No están dentro del repositorio** — son la fuente desde la que Code coge
los originales, los procesa y los coloca en el repositorio.

```
C:\Users\Ismael\Desktop\ISMA\EVITA LIMON
│
├── Fotos\<músico>\     Fotos de cada músico (JPG, PNG, HEIC, WebP...)
│   (evita, nemo, pinzarroja, scarface, cheguy)
│   Resolución máxima, sin retocar: el B/N lo aplica el CSS.
│
├── Clips\<músico>\     Clips verticales 9:16, ~10 s (.mp4 o cualquiera)
│   (evita, nemo, pinzarroja, scarface, cheguy)
│   Code recomprime y extrae el cartel automáticamente.
│
├── Vídeos\             Vídeos generales del grupo (.mp4)
│   Si se incluye una imagen con el mismo nombre que el vídeo
│   (ej: tierra-adentro.mp4 + tierra-adentro.jpg), se usa como cartel.
│   Si no, Code extrae el primer fotograma.
│
├── Canciones\          Canciones para la playlist (.mp3)
│   Guardar siempre los .wav aparte como archivo de calidad máxima;
│   para la web solo se usan los .mp3.
│
└── Hero\               La foto de portada de la web (una sola imagen)
    Independiente de las fotos de los músicos.
```

Flujo: el autor suelta archivos en estas carpetas y le dice a Code qué hay
nuevo. Code los busca aquí, los procesa con las tuberías, actualiza
`datos.js`, y hace commit + push. El autor no necesita conocer la
estructura interna del repositorio.

## Comprobaciones antes de publicar cambios
1. `node --check` sobre el JS extraído de index.html si se tocó código.
2. Abrir `index.html` en el navegador: reproductor suena, fichas cambian,
   constelación responde, sin errores en consola.
3. Ningún archivo de medios sin su entrada en `datos.js` (y viceversa).

## Datos fijos
- Autor de todo el repertorio (letra, música y arreglos): Ismael Rozalén,
  socio de SEDA. El crédito del pie y el aviso legal ya lo declaran: no
  eliminar ni rebajar esa mención.
- Titular legal en `legal/aviso-legal.html` (datos reales: no inventar).
- La banda es ficción; las biografías son canon del autor. No inventar
  hechos nuevos del universo sin que él los apruebe.
