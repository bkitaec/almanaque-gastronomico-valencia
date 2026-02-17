# Fase 5: Catalog Page

## Objetivo
Crear la pagina de catalogo con grid de restaurantes, filtrado interactivo por categorias y animaciones de entrada escalonada.

## Estructura de la Pagina

```
[HEADER - solido]

[PAGE HERO - corto, gradiente naranja sobre patron]
   - Titulo: "Nuestro Catalogo"
   - Subtitulo: "Los mejores restaurantes de Valencia"

[FILTROS]
   - Chips horizontales scrollables:
     Todos | Cocina de mercado | Alta cocina | Fusion | Temporada | Gallega
   - React island para filtrado interactivo

[GRID DE RESTAURANTES]
   - 3 columnas desktop, 2 tablet, 1 movil
   - Cada tarjeta (AnimatedCard):
     * Imagen hero con gradiente oscuro
     * Nombre (texto blanco sobre imagen)
     * Badge de categoria (pill naranja)
     * Rating (pequeno)
     * Indicador de precio
     * Hover: 3D tilt + sombra + zoom imagen
   - Animacion de entrada escalonada

[FOOTER]
```

## Componentes

### Astro
- `src/pages/catalogo.astro` — Pagina principal del catalogo
- `src/components/catalog/RestaurantGrid.astro` — Contenedor grid responsive
- `src/components/catalog/CategoryBadge.astro` — Pill de categoria estilizada

### React Islands
- `src/components/catalog/FilterChips.tsx` — Filtrado interactivo con animaciones
- `src/components/animated/StaggeredList.tsx` — Entrada escalonada de children

## FilterChips Behavior

1. Extraer categorias unicas de los datos de restaurantes
2. Chip "Todos" activo por defecto
3. Click en chip filtra la grid con transicion animada (Motion layout)
4. Solo un chip activo a la vez
5. Chip activo: fondo naranja, texto blanco
6. Chip inactivo: fondo gris claro, texto oscuro

## Mobile
- Chips: scroll horizontal con fade en los bordes (CSS mask-image)
- Grid: 1 columna con tarjetas a ancho completo
- Tarjetas mas altas para mejor impacto visual en movil

## View Transitions
- Imagenes de tarjetas tienen transition:name para morphing al detalle
- Transicion por defecto: fade (300ms)

## Verificacion
- Grid muestra las 5 tarjetas con datos correctos
- Filtros funcionan: seleccionar categoria muestra solo restaurantes de esa categoria
- "Todos" muestra todos los restaurantes
- Click en tarjeta navega al detalle con view transition
- Boton atras vuelve al catalogo con estado del filtro mantenido
- Responsive correcto en los 3 breakpoints
