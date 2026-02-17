# Fase 3: Home Page

## Objetivo
Crear una landing page impactante que comunique la esencia del Almanaque Gastronomico con animaciones fluidas y elementos decorativos.

## Estructura de la Pagina

```
[HEADER - transparente, se solidifica al hacer scroll]
   Logo | Inicio | Catalogo | Sobre Nosotros

[HERO - 100vh]
   - Fondo navy oscuro (#212934)
   - Formas organicas flotantes (SVG animado)
   - Texto animado: "ALMANAQUE GASTRONOMICO"
   - Subtitulo: "18 anos descubriendo la gastronomia valenciana"
   - CTA: "Explorar Catalogo" (boton naranja)
   - Indicador de scroll (chevron animado)

[BRAND INTRO - fondo beige calido]
   - Patron tribal/geometrico a baja opacidad
   - Izquierda: Texto sobre la mision
   - Derecha: Contadores animados:
     * 18+ anos de historia
     * 300+ restaurantes evaluados
     * 500+ paginas por edicion
     * 1600+ imagenes

[RESTAURANTES DESTACADOS - fondo blanco]
   - Titulo: "Seleccion Destacada"
   - 3 tarjetas con efecto 3D tilt
   - Cada tarjeta: imagen hero, nombre, categoria, rating, precio
   - Entrada escalonada al hacer scroll
   - Click navega con View Transition

[WAVE DIVIDER]

[FOOTER]
```

## Componentes

### Astro (estaticos)
- `src/components/home/HeroSection.astro`
- `src/components/home/BrandIntro.astro`
- `src/components/home/FeaturedRestaurants.astro`
- `src/components/home/StatsSection.astro`

### Decorativos (SVG inline)
- `src/components/decorative/OrganicShape.astro` — Blobs flotantes
- `src/components/decorative/TribalPattern.astro` — Patron geometrico mediterraneo
- `src/components/decorative/FloralMotif.astro` — Motivos de hojas/naranjas
- `src/components/decorative/WaveDivider.astro` — Separador ondulado entre secciones

### React Islands (interactivos)
- `src/components/animated/ScrollReveal.tsx` — Fade+slide al entrar en viewport
- `src/components/animated/AnimatedCard.tsx` — Tarjeta con perspective 3D en hover
- `src/components/animated/CounterAnimation.tsx` — Contadores numericos animados

## Animaciones

### Hero
- Texto aparece palabra por palabra (CSS @keyframes stagger)
- Formas organicas flotan suavemente (CSS animation: float 8s)
- CTA aparece con delay despues del texto

### Stats
- Numeros cuentan desde 0 hasta el valor final
- Se activan cuando la seccion entra en viewport (IntersectionObserver via Motion)

### Tarjetas
- Entrada escalonada (staggered, 100ms delay entre cada una)
- Hover: perspective 3D (rotateX/Y segun posicion del mouse)
- Hover: sombra aumenta + escala 1.03

## Verificacion
- Hero se ve a pantalla completa con animaciones
- Contadores se animan al hacer scroll
- Tarjetas tienen efecto 3D al pasar el mouse
- Responsive: todo funciona en movil (1 columna, sin 3D en touch)
