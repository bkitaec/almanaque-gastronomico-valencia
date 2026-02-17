# Fase 2: Content Architecture

## Objetivo
Definir el modelo de datos para restaurantes usando Astro Content Collections con validacion Zod, y crear los 5 restaurantes del MVP.

## Schema del Restaurante

```typescript
{
  name: string,              // "Nostre"
  slug: string,              // "nostre"
  category: string,          // "Cocina de mercado"
  subcategory?: string,      // Clasificacion adicional
  address: string,           // Direccion completa
  neighborhood?: string,     // "Ruzafa", "Centro"
  phone: string,
  website?: string,
  instagram?: string,
  priceRange: {
    cartaAvg: number,        // Media a la carta en EUR
    menuDegustacion?: {
      min: number,
      max: number,
    }
  },
  chef: {
    name: string,
    role?: string,           // "Chef ejecutivo"
  },
  frontOfHouse?: string,     // Responsable de sala
  rating: number,            // Puntuacion (0-10)
  ratingScale: number,       // Escala (default: 8)
  yearEstablished?: number,
  cuisine: string[],         // ["Mercado", "Mediterranea"]
  highlights?: string[],     // Platos destacados
  images: {
    hero: string,
    gallery?: string[],
  },
  featured: boolean,         // Mostrar en home
  order: number,             // Orden de clasificacion
}
```

## Restaurantes del MVP

### 1. Nostre
- **Categoria:** Cocina de mercado / Laureado
- **Chef:** Andres Rengel
- **Sala:** Sara Forner
- **Precio:** ~40 EUR carta, 47-75 EUR menus
- **Direccion:** Doctor Ferran 6, Valencia
- **Rating:** 8/8
- **Cocina:** Mercado, Mediterranea, Producto local

### 2. Eladio
- **Categoria:** Cocina gallega
- **Chef:** Eladio Rodriguez (fundador)
- **Precio:** ~45 EUR carta
- **Rating:** 7/8
- **Cocina:** Gallega, Producto de mercado
- **Nota:** 40+ anos de historia

### 3. La Sucursal
- **Categoria:** Alta cocina / Laureado
- **Chefs:** Jorge de Andres, Fran Espi
- **Precio:** ~60 EUR carta, 70-95 EUR menus
- **Rating:** 8/8
- **Cocina:** Mediterranea contemporanea, Alta cocina
- **Nota:** 30 anos de historia en gastronomia valenciana

### 4. Kibo
- **Categoria:** Cocina fusion
- **Precio:** ~50 EUR carta
- **Rating:** 7/8
- **Cocina:** Japonesa, Mediterranea, Fusion
- **Nota:** Fusion japonesa-mediterranea con producto de temporada

### 5. 2 Estaciones
- **Categoria:** Cocina de temporada
- **Barrio:** Ruzafa
- **Precio:** ~35 EUR carta
- **Rating:** 7/8
- **Cocina:** De temporada, Mediterranea, Producto local
- **Nota:** Uno de los restaurantes mas equilibrados de Ruzafa

## Archivos a Crear

1. `src/content.config.ts` — Definicion de Content Collection con Zod
2. `src/data/restaurants/nostre.md`
3. `src/data/restaurants/eladio.md`
4. `src/data/restaurants/la-sucursal.md`
5. `src/data/restaurants/kibo.md`
6. `src/data/restaurants/2-estaciones.md`
7. `src/lib/types.ts` — Interfaces TypeScript compartidas
8. `src/lib/utils.ts` — Helpers de formateo

## Imagenes
- Hero image por restaurante (1920x1080 aprox)
- 2-3 imagenes de galeria por restaurante
- Fuentes: Unsplash/Pexels (food photography) + fotos reales del sitio web

## Verificacion
- `getCollection('restaurants')` devuelve 5 restaurantes
- Zod valida correctamente todos los campos
- Los slugs generan URLs validas
