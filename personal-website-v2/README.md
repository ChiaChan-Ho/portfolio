<div align="center">

# Personal Portfolio — Henry (ChiaChan) Ho

A personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**, with an embedded Spotify playlist.

</div>

---

## Features

- **Next.js 15 App Router** with React 19 and TypeScript
- **Animated UI** using Framer Motion and custom Tailwind keyframes
- **Embedded Spotify playlist** in the dashboard
- **Dark mode** by default via `next-themes`
- An interactive 3D globe tracing San Diego, CA → Philadelphia, PA
- Command palette (⌘K) for quick navigation

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animation** | Framer Motion, custom keyframes |
| **Integrations** | Spotify (embedded playlist, no API keys) |
| **Hosting** | Vercel |

## Getting Started

```bash
# install dependencies
npm install

# run the development server (http://localhost:3000)
npm run dev

# build for production
npm run build

# run the production build
npm start

# lint
npm run lint
```

## Content

All content lives in `src/data/data.tsx` (experience, education, projects,
contact links, nav, teaching, tools). A few pieces are hardcoded directly in
their components because they need custom logic:

- The hero tagline and availability hours: `src/components/home/hero.tsx`
- The animated name swap (Henry ↔ Chia-Chan): `src/components/ui/animated-name.tsx`
- The Spotify playlist embed: `SPOTIFY_PLAYLIST_EMBED_SRC` in
  `src/components/home/dashboard.tsx` — swap the playlist ID to change it
  (Spotify app → playlist → ⋯ → Share → Embed playlist, copy the `src` URL)
- Site metadata: `src/app/layout.tsx` (update `SITE_URL` there, in
  `sitemap.ts`, and in `robots.ts` once a custom domain is connected on Vercel)

---

## License and Usage

This project started as a fork of [shivy02/portfolio-website](https://github.com/shivy02/portfolio-website)
by [Shivam Patel](https://github.com/shivy02), used under the terms of its
dual license (see [`LICENSE`](./LICENSE) and [`NOTICE`](./NOTICE)):

- **The original source code is [Apache 2.0](./LICENSE)-licensed.**
- **The original personal content (name, bio, photos, logo, project write-ups)
  was All Rights Reserved and has been fully replaced** with my own content,
  photos, and branding in this fork, per the license's terms for building a
  personal portfolio from it.

The `LICENSE` and `NOTICE` files are kept as Apache 2.0 requires, preserving
the attribution to the original author.
