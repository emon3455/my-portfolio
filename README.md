## Personal Portfolio — Next.js 14 + Three.js

Dark, cinematic portfolio built with the Next.js App Router, Tailwind CSS v4, Framer Motion, and Three.js. It ships sections for hero, journey timeline, projects, skills, services, about, and contact — all fed by a single data file so updating content stays painless.

### Highlights
- Three.js journey canvas rendered with React Three Fiber and glowing milestones
- Framer Motion reveal choreography across every section
- Tailwind CSS v4 custom theme with layered gradients and noise texture
- Data-driven content via `src/data/portfolio.ts`
- Responsive layout optimized for desktop-first storytelling with graceful mobile states

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
Deploy to Vercel with `vercel` CLI or connect the repository in the Vercel dashboard. The project uses static + server rendering, so no extra configuration is required.
