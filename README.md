# Build. Sell. Repeat.

Marketing site for **Build. Sell. Repeat.** — we build small businesses a simple
ordering page for their Instagram bio so customers can browse products and place
orders straight to WhatsApp. One-time payment, no monthly fees.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/styles/globals.css`)
- Server Components by default; Client Components only where interactivity is required

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project

## Project structure

```
src/
  app/            Routes (home, privacy, terms) + SEO files (robots, sitemap, OG image)
  components/     UI, layout, home sections, demo, legal
  config/         Content as data (site, pricing, demo, founder, legal, metadata, …)
  lib/            Utilities and constants
  styles/         Global styles + design tokens
  types/          Shared TypeScript types
```

The site is **config-driven**: copy, pricing, and content live in `src/config/*`
so they can be edited without touching components. The single WhatsApp
destination for every CTA is defined once in `src/config/site.ts`.

## Deployment

Deployed on [Vercel](https://vercel.com). Set the production domain in
`src/config/site.ts` (`url`) so canonical URLs, sitemap, and Open Graph tags
resolve correctly.
