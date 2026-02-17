# Fase 6: Polish & Deploy

## Objetivo
Pulir la experiencia movil, crear la pagina About, optimizar SEO/rendimiento y desplegar en GitLab Pages.

## Mobile Menu

### MobileMenu.tsx (React Island)
- Drawer deslizante desde la derecha
- Fondo overlay oscuro con blur
- Links de navegacion con animacion escalonada
- Boton hamburguesa en Header (visible < 768px)
- Cierre al click en overlay o en link
- Animacion con Motion (slide + fade)

## Pagina Sobre Nosotros

```
[HEADER]

[HERO - fondo beige con motivos florales]
   - Titulo: "Sobre el Almanaque"
   - Subtitulo: "La referencia gastronomica de Valencia"

[HISTORIA]
   - Narrativa: 18 anos de publicacion (desde 2008)
   - Publicacion bianual
   - 500+ paginas, 1600+ imagenes, 300+ resenas
   - Editorial: Libros De Seda

[EQUIPO EDITORIAL]
   - Criticos: Alfredo Argiles, Lluis Ruiz Soler, Santos Ruiz
   - Duo: Domingo Casany / Lourdes Rubio
   - Experto en aceites: Manuel Peris

[CTA]
   - Enlace a la publicacion fisica
   - Enlace al sitio web principal

[FOOTER]
```

## SEO & Meta

Para cada pagina:
- `<title>` descriptivo en espanol
- `<meta name="description">` unico
- Open Graph tags (og:title, og:description, og:image)
- `<html lang="es">`
- Canonical URL
- favicon.svg en naranja de marca

## Performance

- Preload de fuentes criticas en `<head>`
- `loading="lazy"` en imagenes below-the-fold
- Hero image preloaded
- Formato WebP para imagenes
- `prefers-reduced-motion` media query para accesibilidad
- Fonts: solo caracteres Latin (subconjunto)

## GitLab Pages Deploy

### `.gitlab-ci.yml`
```yaml
image: node:22-alpine

pages:
  stage: deploy
  before_script:
    - corepack enable
    - corepack prepare pnpm@latest --activate
    - pnpm install
  script:
    - pnpm build
    - mv dist public
  artifacts:
    paths:
      - public
  only:
    - main
```

## Checklist Final

### Visual
- [ ] Espaciado consistente entre secciones
- [ ] Sombras y border-radius uniformes
- [ ] Hover states en todos los interactivos
- [ ] Timing de animaciones revisado (300-600ms)
- [ ] Decorativos se escalan/ocultan en movil

### Mobile (testar en 375px, 390px, 768px)
- [ ] Header hamburger funciona
- [ ] Hero legible y sin overflow
- [ ] Grid 1 columna en movil
- [ ] Sidebar -> accordion en detalle
- [ ] Tap targets minimo 44px
- [ ] tel: links en telefonos
- [ ] Direcciones abren Maps

### Tecnico
- [ ] `pnpm build` sin errores
- [ ] Todas las paginas renderizadas
- [ ] View Transitions funcionando
- [ ] Lighthouse 90+ performance
- [ ] Sin errores en consola

### Deploy
- [ ] `.gitlab-ci.yml` configurado
- [ ] Build exitoso en GitLab CI
- [ ] Sitio accesible en URL de GitLab Pages
