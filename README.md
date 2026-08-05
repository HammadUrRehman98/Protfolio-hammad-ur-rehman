# Hammad Ur Rehman, portfolio

Static portfolio site. Next.js App Router, exported to plain HTML and served
from Cloudflare Pages at <https://hammadurrehman.site>.

## Commands

```bash
npm install
npm run dev        # local development
npm run typecheck  # tsc --noEmit
npm run build      # static export into ./out
```

Deploy is `npm run build` with output directory `out`. There is no server, no
adapter and no runtime: every route is baked at build time.

## Where things live

```
src/
  config/site.ts       identity, contact details, SEO. The only file you
                       routinely edit: nav, footer, <title>, canonical URLs,
                       Open Graph, JSON-LD, sitemap and robots all read from it
  data/
    projects.ts        the project list, its groups, and the flagship spread
    content.ts         figures, skill groups, timeline, certifications
    faq.ts             questions and answers, used by /faq/ and llms.txt
  app/
    page.tsx           the portfolio: hero, projects, expertise, experience, contact
    faq/page.tsx       /faq/, its own route so the portfolio stays short
    layout.tsx         fonts, metadata defaults
    opengraph-image.tsx  social card, generated at build time
    llms.txt/route.ts  plain-text copy of the site for answer engines
    robots.ts, sitemap.ts
  components/          one component per section, plus JsonLd and Reveal
public/
  _headers             Cloudflare cache and security headers
  _redirects           old résumé URL to the current filename
```

## Things worth knowing before editing

- **Content changes are data changes.** Adding a project means adding an entry
  to `src/data/projects.ts`; nothing in the components needs touching.
- **The FAQ feeds three outputs** from one source: the `/faq/` page, the
  `FAQPage` JSON-LD on that page, and `/llms.txt`. Google requires the marked-up
  answers and the visible answers to match, which is why they share a module.
- **Structured data is per page.** `JsonLd` (Person, WebSite, ProfilePage,
  ItemList) renders on the home page; `FaqJsonLd` renders on `/faq/`. Validate
  at <https://search.google.com/test/rich-results> after deploying.
- **Fonts are self-hosted** by `next/font`: no request to Google, no layout
  shift. The CSP in `public/_headers` blocks external origins, so anything new
  that loads from a CDN will need that policy widened first.
- **The résumé URL is stable.** Replace the PDF in place at
  `public/Hammad-Ur-Rehman-AI-Engineer.pdf` rather than adding a new filename;
  its `Cache-Control` is one hour, so a replacement goes live the same day.
- **`npm audit fix --force` will downgrade Next.** Do not run it.
