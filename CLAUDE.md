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
- **Canción**: `.m4a` en `audio/` + entrada en TRACKS.
- **Fotos de un músico**: originales en `originals/<slug>/` y ejecutar
  `python3 herramientas/procesar-fotos.py` (genera WebP en 4 anchos en
  `img/` y escupe las líneas para la lista `fotos`). El campo `ar` es la
  proporción real (el marco se adapta: la foto grande nunca se recorta);
  `pos` es el encuadre de las miniaturas y se ajusta A OJO mirando la foto
  (la detección de caras del script falla con luz de escenario).
- **Clip de músico** (vertical 9:16, ~10 s): original en
  `originals-clips/<slug>/` y ejecutar
  `python3 herramientas/procesar-clips.py` (recomprime a H.264+AAC,
  extrae el cartel del primer fotograma y escupe la línea para `clips`).
- **Vídeo general**: `.mp4` en `video/` + cartel en `img/` + entrada en VIDEOS.
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

## Publicación (plan)
- Dominio: `evita-limon.com` (principal) y `evita-limon.es` (redirección
  301), registrados en Arsys, que también lleva el correo.
- Alojamiento previsto: **GitHub Pages** desde este repositorio; cada
  commit publica. DNS de Arsys apuntando a Pages.
- El correo de contacto oficial del proyecto es `contacto@evita-limon.es`
  (definido en `CONFIG.email` de `datos.js`).

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
