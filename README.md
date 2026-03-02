# Dr. Mario Ruvalcaba — Cirujano Bariátrico en Mérida

Sitio web profesional para el Dr. Mario Ruvalcaba, especialista en cirugía bariátrica y metabólica en Mérida, Yucatán.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript 5 |
| Estilos | Tailwind CSS 4 |
| Animaciones | Framer Motion 12 |
| Tipografía | Instrument Serif (display) + Plus Jakarta Sans (body) |
| Despliegue | Vercel (recomendado) |

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build && npm start

# Lint
npm run lint
```

El servidor arranca en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
app/
├── page.tsx                        # Homepage
├── layout.tsx                      # Root layout (lang="es", fonts, Navbar, Footer, JSON-LD)
├── globals.css                     # Tailwind v4 theme, brand tokens, utility classes
├── not-found.tsx                   # 404
├── sitemap.ts                      # Sitemap dinámico
├── robots.ts                       # robots.txt
├── manga-gastrica-merida/          # Página de procedimiento
├── bypass-gastrico-merida/         # Página de procedimiento
├── balon-intragastrico/            # Página de procedimiento
├── cirugia-minima-invasion/        # Página de procedimiento
├── sobre-el-doctor/
├── contacto/
├── testimonios/
├── preguntas-frecuentes/
├── turismo-medico/
└── blog/

components/
├── layout/                         # Navbar, Footer, WhatsAppButton
├── sections/                       # Hero, ServiceCards, StatsCounter, BMICalculator,
│                                   # TestimonialCarousel, TrustBadges, CTASection,
│                                   # ProcedureDetail, DoctorBio, BlogCard,
│                                   # MedicalTourismSection, ContactForm, FAQAccordion
└── ui/                             # Button, Card, Container, Badge, SectionWrapper, Accordion

lib/
├── constants.ts                    # Doctor info, nav links, stats, trust badges
├── procedures.ts                   # 4 procedimientos con contenido médico completo
├── testimonials.ts                 # Testimonios de pacientes
├── faq.ts                          # 15 preguntas frecuentes (5 categorías)
├── blog.ts                         # Posts de blog (placeholder)
├── animations.ts                   # Variantes de Framer Motion
├── metadata.ts                     # Factory de metadata por página
└── seo.ts                          # Generadores JSON-LD (Physician, LocalBusiness, etc.)

types/
└── index.ts                        # Interfaces TypeScript compartidas

public/fonts/                       # Instrument Serif (Regular + Italic)
```

## Arquitectura

**Server Components por defecto.** Solo llevan `"use client"` los componentes que requieren interactividad: Navbar, WhatsAppButton, Hero, ServiceCards, StatsCounter, BMICalculator, TestimonialCarousel, TrustBadges, CTASection, ContactForm, FAQAccordion, SectionWrapper.

**Patrón template para procedimientos.** Las 4 páginas de procedimiento comparten el componente `ProcedureDetail`. Cada archivo de página son ~30 líneas: lookup de datos + export de metadata + render + JSON-LD.

**Contenido data-driven.** Todo el texto vive en `lib/*.ts`. Los componentes reciben datos tipados via props. Cero strings hardcodeados en componentes.

## Sistema de diseño

**Paleta de colores:**
- Teal (`#019E8F` → `#0D524D`) — color primario, CTAs, acentos
- Navy (`#0C1426` → `#F6F8FB`) — texto, fondos oscuros, neutrales
- Gold (`#D4A853`) — acento secundario, certificaciones, elegancia

**Clases CSS propias (definidas en `globals.css`):**

| Clase | Uso |
|-------|-----|
| `.gradient-mesh-hero` | Fondo de secciones hero (dark, con radial gradients) |
| `.gradient-mesh-light` | Fondo sutil para secciones claras |
| `.gradient-mesh-cta` | Fondo para banners de conversión |
| `.glass` / `.glass-dark` | Glassmorphism (blur + transparencia) |
| `.card-premium` | Tarjeta con bordes sutiles, hover lift y transición |
| `.card-glow` | Borde gradient (teal→gold) que aparece en hover |
| `.noise-overlay` | Textura de ruido SVG sutil (::before) |
| `.section-divider` | Línea gradient teal→gold (60px × 3px) |
| `.heading-gradient` | Texto con gradient navy→teal |
| `.skip-to-content` | Link de accesibilidad (skip nav) |
| `.sr-only` | Contenido solo para screen readers |

## Accesibilidad

- Skip-to-content link para navegación por teclado
- `prefers-reduced-motion`: todas las animaciones se desactivan (duration: 0, sin transforms)
- `useReducedMotion()` de Framer Motion en cada componente animado
- `:focus-visible` con outline teal en todos los elementos interactivos
- `aria-labelledby` en cada `<section>`
- Carousel: `aria-roledescription="carousel"`, `aria-live="polite"`, pausa en hover y focus
- BMI Calculator: `aria-live="polite"` en zona de resultados, `aria-required` en inputs
- Touch targets mínimos de 44px en inputs y botones
- HTML semántico: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`

## SEO

Cada página exporta metadata via `createPageMetadata()`. JSON-LD inyectado:

| Schema | Alcance |
|--------|---------|
| `Physician` | Global (root layout) |
| `LocalBusiness` | Global (root layout) |
| `MedicalProcedure` | Páginas de procedimiento |
| `FAQPage` | Página de preguntas frecuentes |
| `BreadcrumbList` | Disponible vía helper |

Sitemap dinámico con prioridades ponderadas. `robots.txt` permite indexación completa.

## Placeholders pendientes

Estos valores deben reemplazarse con datos reales antes de ir a producción:

- `lib/constants.ts` — número de WhatsApp (`+52XXXXXXXXXX`), cédula profesional, URLs de redes sociales
- `lib/constants.ts` — `siteUrl` (`https://drmarioruvalcaba.com`)
- Fotos del doctor y procedimientos (actualmente se muestran gradients placeholder)
- Logos de hospitales y certificaciones en `TrustBadges`
- Google Maps embed en página de contacto
- Imágenes de blog posts
- Conectar formulario de contacto a backend (actualmente es client-side only)

## Scripts

```bash
npm run dev       # Servidor de desarrollo (Turbopack)
npm run build     # Build de producción (genera 16 rutas estáticas)
npm run start     # Sirve el build de producción
npm run lint      # ESLint
```

## Licencia

Privado. Todos los derechos reservados.
