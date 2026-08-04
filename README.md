# Hammad Ur Rehman — Portfolio

Next.js 16 (App Router) + TypeScript, exported as a fully static site for Cloudflare Pages.

## Before you deploy

Open [`src/config/site.ts`](src/config/site.ts) and replace the four values marked `REPLACE ME`:

| Field      | What it is                                       |
| ---------- | ------------------------------------------------ |
| `url`      | Production origin, no trailing slash             |
| `email`    | Address the contact button opens                 |
| `linkedin` | Full LinkedIn profile URL                        |
| `github`   | Full GitHub profile URL                          |

That one file drives the nav, contact buttons, footer, `<title>`, canonical URL,
Open Graph and Twitter tags, JSON-LD structured data, `sitemap.xml` and `robots.txt`.
Nothing else needs editing.

Also drop your CV at `public/Hammad_Ur_Rehman_Resume.pdf` — the "Download résumé"
button 404s until that file exists.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # static export -> ./out
npm run typecheck  # tsc --noEmit
```

## Deploying to Cloudflare Pages

Connect the repo and use:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20 or newer

No adapter or `@cloudflare/next-on-pages` needed — `output: 'export'` in
[`next.config.mjs`](next.config.mjs) emits plain HTML/CSS/JS.

Caching and security headers live in [`public/_headers`](public/_headers), which
Next copies verbatim into `out/`.

## Where things live

```
src/
  config/site.ts       identity, contact, SEO — the only file you routinely edit
  data/projects.ts     featured project + the 14 project cards
  data/content.ts      metrics, skills, timeline, certifications, pipeline stages
  app/
    layout.tsx         fonts, metadata, viewport
    page.tsx           section order
    globals.css        all styling
    sitemap.ts         -> /sitemap.xml
    robots.ts          -> /robots.txt
    opengraph-image.tsx  1200x630 social card, rendered to PNG at build time
    icon.svg           favicon
    not-found.tsx      404 page
  components/
    Nav.tsx            client — mobile drawer
    Pipeline.tsx       client — animated hero pipeline
    ProjectGrid.tsx    client — category filters
    Reveal.tsx         client — scroll-in animation
    Hero, Work, TechStack, Path, Contact, Footer, JsonLd   server components
```

## Adding a project

Append an entry to `projects` in [`src/data/projects.ts`](src/data/projects.ts).
The filter chips, the card grid and the JSON-LD `ItemList` all pick it up
automatically. `category` must be `'client'`, `'indie'` or `'academic'`.

## Notes

- Every project card ships in the static HTML regardless of the active filter,
  so crawlers see the full list; filtering only toggles the `hidden` attribute.
- Fonts are self-hosted by `next/font` — no request to Google, no layout shift.
  Only the `wght` axis is requested; adding `opsz` roughly doubles the font payload.
- `npm audit` reports advisories in `postcss` and `sharp`. Both are build-time
  transitive dependencies of Next and neither ships in `out/`. `npm audit fix --force`
  "fixes" them by downgrading to next@9 — don't run it.
