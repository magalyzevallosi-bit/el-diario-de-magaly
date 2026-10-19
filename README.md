# El Diario de Magaly · Magaly en calma

Web estática de Magaly Zevallos. La portada y las tres lecturas están listas para GitHub Pages.

## Publicar

1. Sube los archivos y carpetas de este paquete a la raíz de `el-diario-de-magaly`.
2. Abre **Settings → Pages** en GitHub.
3. En **Source**, elige **Deploy from a branch**.
4. Elige **main** y **/ (root)**; pulsa **Save**.
5. GitHub mostrará la dirección cuando termine la publicación.

Dirección preparada: `https://magalyzevallosi-bit.github.io/el-diario-de-magaly/`.
GitHub Pages gratuito requiere un repositorio público; la web y sus archivos serán visibles.

## Editar manualmente

En GitHub abre el archivo, pulsa el lápiz y guarda con **Commit changes**. Pages publicará la actualización.

- `index.html`: portada, presentación, tarjetas y secciones.
- `lecturas/ya-lo-decidiste/index.html`: entrada sobre decisiones e incertidumbre.
- `lecturas/cuando-cada-meta-trae-otra-exigencia/index.html`: entrada sobre autoexigencia.
- `lecturas/decir-que-no-y-sentir-culpa/index.html`: entrada sobre límites y culpa.
- `styles.css`: tipografía, distribución y paleta.
- `app.js`: menú, filtros, preguntas y enlaces antiguos.
- `assets/`: imágenes, logo, iconos y fuentes con su licencia.

Las lecturas son HTML completo con firma, fecha y enlaces relacionados. Funcionan sin JavaScript. Si cambias un título o enlace, actualiza también su tarjeta y las recomendaciones de las otras lecturas.

## Marca y movimiento

Colores oficiales: cacao `#573E35`, arena `#E7DFD1`, terracota `#B4472F`, oliva `#657348` y Miel `#D7A04E`.
La franja terracota se desplaza continuamente, estilo noticias, con textos pequeños y separadores de cerebro. El cerebro del encabezado gira una vez. Las animaciones respetan la reducción de movimiento del dispositivo; en ese modo todos los temas se muestran estáticos.
El logo de Mente en Calma se muestra mediante una máscara de CSS que oculta el descriptor inferior y usa el oliva de marca.

## Enlaces y metadatos

Kit gratuito: https://menteencalmape.systeme.io/guia-ansiedad.
Si cambias la dirección del sitio, actualiza las URLs absolutas de los metadatos y datos estructurados en cada HTML, `sitemap.xml` y `robots.txt`.
