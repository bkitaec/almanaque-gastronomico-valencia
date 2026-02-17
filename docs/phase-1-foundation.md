# Fase 1: Foundation

## Objetivo
Inicializar el proyecto Astro con todas las dependencias, configurar el sistema de diseno y crear los layouts base.

## Stack Tecnologico

| Capa | Tecnologia | Version |
|------|-----------|---------|
| Framework | Astro | 5.x |
| UI Islands | React | 19.x |
| Animaciones | Motion (Framer Motion) | 12.x |
| Estilos | Tailwind CSS | 4.x |
| Tipado | TypeScript | 5.x |
| Package Manager | pnpm | latest |

## Estructura de Directorios

```
almanaque-gastronomico-valencia/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── fonts/
│   │   ├── Poppins-Bold.woff2
│   │   ├── Heebo-Regular.woff2
│   │   └── Inter-Medium.woff2
│   ├── images/
│   │   ├── restaurants/
│   │   ├── brand/
│   │   └── decorative/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── components/
│   │   └── common/
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       └── Navigation.astro
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.astro
└── docs/
```

## Sistema de Diseno

### Paleta de Colores
- **Primario:** `#ec8d24` (naranja vibrante)
- **Secundario:** `#212934` (navy oscuro)
- **Calido:** `#f2ede7` (beige claro)
- **Dorado:** `#d4a843` (acento para ratings)

### Tipografia
- **Titulos:** Poppins Bold (700)
- **Cuerpo:** Heebo Regular (400)
- **Navegacion:** Inter Medium (500)

### Breakpoints (Mobile-first)
- Base: 0-639px (movil)
- sm: 640px+
- md: 768px+ (tablet)
- lg: 1024px+ (laptop)
- xl: 1280px+ (desktop)

## Archivos a Crear

1. `astro.config.mjs` — Config con React, Tailwind, View Transitions
2. `tailwind.config.mjs` — Tokens de diseno completos
3. `tsconfig.json` — TypeScript config
4. `src/styles/global.css` — @font-face, variables CSS, resets
5. `src/layouts/BaseLayout.astro` — HTML base con ClientRouter
6. `src/layouts/PageLayout.astro` — Header + main + Footer
7. `src/components/common/Header.astro` — Logo + navegacion
8. `src/components/common/Footer.astro` — Brand + social links
9. `src/components/common/Navigation.astro` — Links de navegacion
10. `src/pages/index.astro` — Pagina inicial minima para verificar build

## Verificacion
- `pnpm dev` arranca sin errores
- La pagina muestra el layout con colores y fuentes de marca
- View Transitions configurado (ClientRouter importado)
