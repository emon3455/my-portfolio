# Emon's Personal Portfolio

> My personal portfolio showcasing my work as a Lead Software Engineer specializing in web, mobile application development and AI solutions.

**🌐 Live Site:** [https://iamemon.vercel.app](https://iamemon.vercel.app)

---

## Overview

This is my professional portfolio built with Next.js 15, featuring interactive 3D animations, smooth transitions, and a comprehensive showcase of my projects, skills, and services. The site is designed to highlight my expertise in full-stack development, mobile applications, AI/ML solutions, and DevOps.

### Key Features
- **3D Journey Timeline** - Interactive Three.js visualization of my professional journey
- **Bidirectional Project Marquee** - Smooth infinite scroll showcasing project screenshots
- **Comprehensive Services Section** - Detailed breakdown of my technical capabilities
- **Technical Skills Display** - Categorized expertise in frontend, backend, DevOps, and more
- **SEO Optimized** - Fully optimized for search engines with structured data and sitemap
- **Responsive Design** - Seamless experience across all devices

### Tech Stack
- Next.js 16 / React 19 (App Router, Server Components)
- TypeScript + strict config
- Tailwind CSS v4 + custom theme tokens
- Framer Motion 11 for micro-interactions
- Three.js + @react-three/fiber + @react-three/drei for the journey animation

### Getting Started
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Scripts
- `npm run dev` – start the dev server with hot reload
- `npm run lint` – run ESLint across the project
- `npm run build` – production build (Next.js)
- `npm run start` – serve the production build locally

### Customize Quickly
1. **Edit content** in `src/data/portfolio.ts` (name, bio, stats, journey items, projects, services, contact links). Replace any `TODO` placeholders with your real details.
2. **Update metadata/domain** inside `src/app/layout.tsx` to match your site URL and title.
3. **Adjust theme** in `src/app/globals.css` if you want different gradients, fonts, or colors.
4. **Swap assets** (logos, favicons, etc.) in `public/` as needed.
5. **Add resume or external links** by editing the CTA targets in `src/components/sections/hero.tsx` or elsewhere.

### Deployment
This portfolio is deployed on Vercel and accessible at **[https://iamemon.vercel.app](https://iamemon.vercel.app)**

To deploy your own version:
- Connect your repository to Vercel dashboard
- Or use the Vercel CLI: `vercel`
- The project uses static + server rendering with automatic optimization
