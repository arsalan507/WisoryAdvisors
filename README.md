# Wisory Global - Corporate Website

A premium, futuristic corporate website for Wisory Global, a strategic consulting firm specializing in building capability centers in India for global enterprises.

## Brand Identity

**Tagline:** Think Wise. Act Global.

**Mission:** Unlock India's potential to power global enterprise innovation by building capability centers that scale ideas into outcomes.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3.4+
- **Animations:**
  - Framer Motion (primary animation engine)
  - Lenis (smooth scroll)
  - GSAP + ScrollTrigger (complex scroll sequences)
  - React Three Fiber + Drei (3D elements, particles)
- **UI Components:** Custom components + Lucide React icons
- **Fonts:** Poppins (headings) + Inter (body)

## Features

### Sections

1. **Hero Section** - Full-viewport hero with 3D floating shapes and particle effects
2. **Services** - Grid showcasing 6 core services
3. **About** - Company overview with animated statistics
4. **Core Values** - 5 values with alternating layout
5. **Case Studies** - Featured client success stories
6. **Process** - 4-phase methodology timeline
7. **Testimonials** - Client testimonial carousel
8. **CTA** - Pre-footer conversion section
9. **Footer** - Comprehensive footer with links and newsletter

### Animations

- Smooth scroll with Lenis
- Character-by-character text reveals
- Parallax effects
- Magnetic button hover effects
- Scroll-triggered animations
- 3D floating shapes
- Particle backgrounds
- Stagger animations
- Counter animations for statistics

### Design Features

- Glassmorphism effects
- Dark/light section variations
- Grid pattern backgrounds
- Gradient overlays
- Hover lift effects
- Custom scrollbar
- Responsive design (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)

## Color System

- **Primary Red:** #EF3A33
- **Authority Black:** #1A1A1A
- **Vapor White:** #F7FAFC
- **Grey:** #666666
- **Gold:** #C9A96E
- **Charcoal:** #2D2D2D

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with providers
  page.tsx            # Main homepage
/components
  /ui                 # Base UI components (Button, etc.)
  /sections           # Page sections (Hero, Services, etc.)
  /common             # Shared components (Navbar, Footer, etc.)
  /3d                 # Three.js 3D components
/lib
  animations.ts       # Animation variants and utilities
  smooth-scroll.ts    # Lenis smooth scroll setup
  utils.ts            # Utility functions
/styles
  globals.css         # Global styles and Tailwind directives
/hooks
  useScrollProgress.ts
  useInView.ts
  useMagnetic.ts
```

## Performance

- Lazy loading for 3D components
- Image optimization with next/image
- Code splitting
- Reduced motion support
- Target Lighthouse score: 90+

## SEO

- Structured metadata
- Open Graph tags
- Twitter cards
- Semantic HTML
- Sitemap ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js.

```bash
npm run build
```

## License

© 2024 Wisory Global. All rights reserved.

## Contact

For inquiries: contact@wisoryglobal.com
