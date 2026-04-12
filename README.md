# Dr. Mario Ruvalcaba — Bariatric Surgeon in Mérida

Professional website for Dr. Mario Ruvalcaba, specialist in bariatric and metabolic surgery in Mérida, Yucatán.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Typography | Instrument Serif (display) + Plus Jakarta Sans (body) |
| Deployment | Vercel (recommended) |

## Quick Start

```bash
# Install dependencies
bun install

# Development server
bun dev

# Production build
bun run build && bun start

# Lint
bun run lint

# Regression tests
bun test
```

The server starts at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx                      # Root layout (html/body, fonts, globals)
├── globals.css                     # Tailwind v4 theme, brand tokens, utility classes
├── sitemap.ts                      # Dynamic sitemap
├── robots.ts                       # robots.txt
├── [locale]/
│   ├── layout.tsx                  # Localized shell, providers, metadata, JSON-LD
│   ├── page.tsx                    # Homepage
│   ├── contacto/
│   ├── preguntas-frecuentes/
│   └── blog/
└── favicon.ico

components/
├── layout/                         # Navbar, Footer, WhatsAppButton
├── sections/                       # Hero, ServiceCards, StatsCounter, BMICalculator,
│                                   # TestimonialCarousel, TrustBadges, CTASection,
│                                   # ProcedureDetail, DoctorBio, BlogCard,
│                                   # MedicalTourismSection, ContactForm, FAQAccordion
└── ui/                             # Button, Card, Container, Badge, SectionWrapper, Accordion

lib/
├── constants.ts                    # Doctor info, nav links, stats, trust badges
├── procedures.ts                   # 4 procedures with full medical content
├── testimonials.ts                 # Patient testimonials
├── faq.ts                          # 15 FAQs (5 categories)
├── blog.ts                         # Blog posts (placeholder)
├── animations.ts                   # Framer Motion variants
├── metadata.ts                     # Per-page metadata factory
└── seo.ts                          # JSON-LD generators (Physician, LocalBusiness, etc.)

types/
└── index.ts                        # Shared TypeScript interfaces

public/fonts/                       # Instrument Serif (Regular + Italic)
```

## Architecture

**Server Components by default.** Only components requiring interactivity use `"use client"`: Navbar, WhatsAppButton, Hero, ServiceCards, StatsCounter, BMICalculator, TestimonialCarousel, TrustBadges, CTASection, ContactForm, FAQAccordion, SectionWrapper.

**Template pattern for procedures.** All 4 procedure pages share the `ProcedureDetail` component. Each page file is ~30 lines: data lookup + metadata export + render + JSON-LD.

**Data-driven content.** All text lives in `lib/*.ts`. Components receive typed data via props. Zero hardcoded strings in components.

## Design System

**Color palette:**
- Teal (`#019E8F` → `#0D524D`) — primary color, CTAs, accents
- Navy (`#0C1426` → `#F6F8FB`) — text, dark backgrounds, neutrals
- Gold (`#D4A853`) — secondary accent, certifications, elegance

**Custom CSS classes (defined in `globals.css`):**

| Class | Usage |
|-------|-------|
| `.gradient-mesh-hero` | Hero section background (dark, with radial gradients) |
| `.gradient-mesh-light` | Subtle background for light sections |
| `.gradient-mesh-cta` | Background for conversion banners |
| `.glass` / `.glass-dark` | Glassmorphism (blur + transparency) |
| `.card-premium` | Card with subtle borders, hover lift, and transition |
| `.card-glow` | Gradient border (teal→gold) that appears on hover |
| `.noise-overlay` | Subtle SVG noise texture (::before) |
| `.section-divider` | Gradient line teal→gold (60px × 3px) |
| `.heading-gradient` | Text with navy→teal gradient |
| `.skip-to-content` | Accessibility link (skip nav) |
| `.sr-only` | Screen reader only content |

## Accessibility

- Skip-to-content link for keyboard navigation
- `prefers-reduced-motion`: all animations are disabled (duration: 0, no transforms)
- `useReducedMotion()` from Framer Motion in every animated component
- `:focus-visible` with teal outline on all interactive elements
- `aria-labelledby` on every `<section>`
- Carousel: `aria-roledescription="carousel"`, `aria-live="polite"`, pauses on hover and focus
- BMI Calculator: `aria-live="polite"` on results area, `aria-required` on inputs
- Minimum 44px touch targets on inputs and buttons
- Semantic HTML: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`

## SEO

Each page exports metadata via `createPageMetadata()`. Injected JSON-LD:

| Schema | Scope |
|--------|-------|
| `Physician` | Global localized layout |
| `LocalBusiness` | Global localized layout |
| `MedicalProcedure` | Procedure pages |
| `FAQPage` | FAQ page |
| `BreadcrumbList` | Available via helper |

Dynamic sitemap with weighted priorities. `robots.txt` allows full indexing.

## Pending Placeholders

These values must be replaced with real data before going to production:

- `lib/constants.ts` — WhatsApp number (`+52XXXXXXXXXX`), professional license number, social media URLs
- `lib/constants.ts` — `siteUrl` (`https://drmarioruvalcaba.com`)
- Doctor and procedure photos (currently showing gradient placeholders)
- Hospital and certification logos in `TrustBadges`
- Google Maps embed on the contact page
- Blog post images
- Connect contact form to a backend (currently client-side only)

## Scripts

```bash
bun dev           # Development server (Turbopack)
bun run build     # Production build
bun start         # Serve the production build
bun run lint      # ESLint
bun test          # Regression tests
```

## License

Private. All rights reserved.
