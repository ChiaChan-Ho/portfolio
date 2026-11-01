# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio for Henry (ChiaChan) Ho, built with React 19,
TypeScript, and Tailwind CSS. It was forked from an open-source template
(shivy02/portfolio-website, Apache 2.0 code license — see README/LICENSE/NOTICE)
and had all personal content, branding, and several account-gated widgets
(WakaTime, GitHub heatmap, scratch-to-reveal GIFs, Markdown blog, sunset photo
marquee) removed or replaced.

## Development Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

## Architecture Overview

### App Structure
- Next.js App Router under `src/app/`
- Root layout (`src/app/layout.tsx`): `ThemeProvider` (dark by default), `Navbar`,
  `Footer`, `CommandPalette`, background SVG overlay
- Single home page (`src/app/page.tsx`) composes: Hero → Dashboard → Projects →
  Experience (+ Education) → Teaching, each as an `id`-anchored `<section>` that
  the navbar/command palette scroll to.

### Component Organization
- `src/components/ui/` — reusable primitives and animated components (globe,
  marquee, tooltip, blur-fade, animated-name, logo-animation, etc.)
- `src/components/home/` — page sections: `hero.tsx`, `dashboard.tsx`,
  `projects.tsx`, `experience.tsx`, `teaching.tsx`
- `src/components/layout/` — `navbar.tsx`, `footer.tsx`, `section-heading.tsx`
- `src/components/command-palette/` — ⌘K command palette
- `src/components/magicui/` — third-party MagicUI components

### Data Management
- **Central data source**: `src/data/data.tsx` — experience, education,
  projects, contact links, nav items, teaching courses, favorite tool, tools
  marquee. Components import and render from this object.

### Spotify
- No API routes or hooks — the "Playlist" dashboard card is a plain
  `<iframe>` pointed at `SPOTIFY_PLAYLIST_EMBED_SRC` in
  `src/components/home/dashboard.tsx`. No env vars or OAuth needed.

### Styling System
- Tailwind CSS v4, `darkMode: "class"`, custom keyframes in `tailwind.config.js`
- CSS Modules for the dashboard bento grid (`dashboard.module.css`)
- `cn()` in `src/lib/utils.ts` combines clsx + tailwind-merge

### Globe / "Journey" Map
- `src/components/ui/globe.tsx` draws an interactive cobe globe with a
  great-circle arc between two hardcoded coordinates (currently San Diego, CA
  and Philadelphia, PA) — update the `SAN_DIEGO`/`PHILADELPHIA` consts there to
  change the route.

### Asset Organization (`public/`)
- `/experience/` — company/school logos (currently initials-based placeholders;
  swap in real logos)
- `/projects/` — project thumbnails
- `/tools/` — tool/tech icons (SVG, `-dark` suffix for theme-dependent ones)
- `/layout/` — background SVG elements
- `/logo/` — favicon/logo SVG (a simple "H" monogram)

## Development Notes

- Use the `@/` import alias (maps to `src/*`)
- Update content in `src/data/data.tsx` first; only touch component files for
  hardcoded pieces called out in the README (hero tagline, animated name,
  site metadata in `layout.tsx`/`sitemap.ts`/`robots.ts`)
- No blog, WakaTime, or GitHub-heatmap code remains — don't reintroduce those
  API routes/hooks unless explicitly asked
