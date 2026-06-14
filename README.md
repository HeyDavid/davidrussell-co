# davidrussell.co

The personal site of **David Russell** — solo operator in South Florida — and home of the field notes: short essays on building small, useful companies, with the real builds and honest lessons behind them.

**Live:** [davidrussell.co](https://davidrussell.co)

## Stack

- [Astro 6](https://astro.build) + TypeScript — content-driven, mostly static.
- Writing as a content collection (`src/content/writing/`, Markdown).
- Hand-written CSS with design tokens in `src/styles/globals.css` — no UI framework.
- RSS + sitemap via `@astrojs/rss` and `@astrojs/sitemap`.
- Deployed to **GitHub Pages**; DNS on Cloudflare.

## Structure

```
src/
  pages/        routes (index.astro is the homepage)
  content/
    writing/    the field notes (Markdown)
  layouts/      BaseLayout for the inner pages
  styles/       globals.css — design tokens
public/         static assets (logo, favicons, headshot, OG images)
```

## Develop

```
npm install
npm run dev       # local dev server
npm run build     # astro check && astro build
npm run preview   # preview the production build
```

Requires Node ≥ 22.12.

---

© 2026 David Russell · South Florida
