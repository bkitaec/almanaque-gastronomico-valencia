# Fase 4: Restaurant Detail Pages

## Objetivo
Crear paginas de detalle de restaurante con calidad editorial/magazine, transiciones suaves desde el catalogo y layout responsive.

## Estructura de la Pagina

```
[HEADER - transparente sobre hero, solido al scroll]

[HERO IMAGE - 60vh con parallax]
   - Imagen a ancho completo
   - Gradiente oscuro en la parte inferior
   - Nombre del restaurante + categoria superpuestos
   - transition:name="restaurant-{slug}" para morphing

[CONTENIDO - dos columnas en desktop]

   IZQUIERDA (~65%):
   - Rating display (gauge circular o barra)
   - Seccion: "La Experiencia" (texto narrativo)
     * Tipografia editorial, drop caps, pull quotes
     * Imagenes intercaladas
   - Seccion: "Platos Destacados"
     * Galeria de imagenes con lightbox

   DERECHA (~35%):
   - Info card (sticky al scroll):
     * Chef + rol
     * Personal de sala
     * Direccion (enlace a maps)
     * Telefono (clickable en movil)
     * Web
     * Instagram
     * Precio: "Carta media: ~40EUR"
     * Rango menu degustacion
     * Tags de cocina

[NAVEGACION RESTAURANTE]
   - Links anterior / siguiente
   - Tarjetas con restaurantes adyacentes
   - View transition al click (slide)

[FOOTER]
```

## Componentes

### Astro
- `src/pages/restaurante/[slug].astro` — Pagina dinamica con getStaticPaths
- `src/components/restaurant/HeroImage.astro` — Hero con parallax y transition:name
- `src/components/restaurant/InfoSidebar.astro` — Sidebar sticky con metadatos
- `src/components/restaurant/RatingDisplay.astro` — Visualizacion de puntuacion
- `src/components/restaurant/ChefProfile.astro` — Nombre y rol del chef
- `src/components/restaurant/ReviewContent.astro` — Texto del review con tipografia editorial
- `src/components/restaurant/RestaurantNav.astro` — Navegacion prev/next

### React Islands
- `src/components/restaurant/ImageGallery.tsx` — Grid de imagenes con lightbox
- `src/components/animated/ParallaxImage.tsx` — Efecto parallax con useScroll

## View Transitions

```astro
<!-- En tarjeta del catalogo -->
<img transition:name={`restaurant-${slug}`} src={hero} />

<!-- En pagina de detalle -->
<img transition:name={`restaurant-${slug}`} src={hero} />
```

La imagen se transforma suavemente (morphing) de la miniatura al hero a pantalla completa.

## Rating Display
- Gauge circular SVG con fill proporcional (rating/ratingScale)
- Color dorado (#d4a843) para la parte rellena
- Animado al entrar en viewport

## Mobile
- Layout de una columna: hero -> info (accordion) -> review -> galeria
- Sidebar se convierte en seccion colapsable
- Telefono como enlace `tel:`
- Direccion abre app de mapas

## Verificacion
- Las 5 paginas se generan correctamente via getStaticPaths
- View Transitions funcionan desde catalogo y desde home
- Sidebar sticky en desktop, accordion en movil
- Galeria de imagenes abre lightbox
- Navegacion prev/next funciona ciclicamente
