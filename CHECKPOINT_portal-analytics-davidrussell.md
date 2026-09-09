# Portal analytics — davidrussell.co

## `npm run build`

```text
> davidrussell-co@1.0.0 build
> astro check && astro build

07:31:23 [content] Syncing content
07:31:23 [content] Content config changed
07:31:23 [content] Clearing content store
07:31:23 [content] Synced content
07:31:23 [types] Generated 3.07s
07:31:23 [check] Getting diagnostics for Astro files in D:\LetsChat\repos\davidrussell-co...

src/pages/work-with-me/websites.astro:6:7 - warning ts(6133): 'businessTypes' is declared but its value is never read.

6 const businessTypes = [
        ~~~~~~~~~~~~~

Result (18 files):
- 0 errors
- 0 warnings
- 1 hint

07:31:43 [content] Syncing content
07:31:43 [content] Synced content
07:31:43 [types] Generated 737ms
07:31:43 [build] output: "static"
07:31:43 [build] mode: "static"
07:31:43 [build] directory: D:\LetsChat\repos\davidrussell-co\dist\
07:31:43 [build] Collecting build info...
07:31:43 [build] ✓ Completed in 767ms.
07:31:44 [build] Building static entrypoints...
07:31:46 [vite] ✓ built in 2.61s
07:31:46 [build] ✓ Completed in 2.73s.

building client (vite)
07:31:46 [vite] transforming...
07:31:46 [vite] ✓ 1 modules transformed.
07:31:46 [vite] rendering chunks...
07:31:46 [vite] ✓ built in 21ms

generating static routes
07:31:46 ▶ src/pages/background.astro
07:31:46   └─ /background/index.html (+10ms)
07:31:46 ▶ src/pages/lets-chat.astro
07:31:46   └─ /lets-chat/index.html (+3ms)
07:31:46 ▶ src/pages/performing.astro
07:31:46   └─ /performing/index.html (+2ms)
07:31:46 ▶ src/pages/recommended/index.astro
07:31:46   └─ /recommended/index.html (+3ms)
07:31:49 λ src/pages/rss.xml.js
07:31:49   └─ /rss.xml (+14ms)
07:31:49 ▶ src/pages/work-with-me/investing.astro
07:31:49   └─ /work-with-me/investing/index.html (+22ms)
07:31:49 ▶ src/pages/work-with-me/marketing.astro
07:31:49   └─ /work-with-me/marketing/index.html (+11ms)
07:31:49 ▶ src/pages/work-with-me/recruiting.astro
07:31:49   └─ /work-with-me/recruiting/index.html (+2ms)
07:31:49 ▶ src/pages/work-with-me/websites.astro
07:31:49   └─ /work-with-me/websites/index.html (+4ms)
07:31:49 ▶ src/pages/writing/index.astro
07:31:49   └─ /writing/index.html (+4ms)
07:31:49 ▶ src/pages/writing/[...slug].astro
07:31:49   ├─ /writing/the-zombie-problem/index.html (+3ms)
07:31:49   └─ /writing/marketing-is-splitting-in-half/index.html (+2ms)
07:31:49 ▶ src/pages/index.astro
07:31:49   └─ /index.html (+3ms)
07:31:49 ✓ Completed in 2.88s.

07:31:49 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
07:31:49 [build] 12 page(s) built in 6.61s
07:31:49 [build] Complete!
```

## Occurrences of `lab_click` in `dist/index.html`

```text
2
```

## Occurrences of `work_cta_click` in `dist/index.html`

```text
2
```

## Occurrences of `subscribe_submit` in `dist/index.html`

```text
2
```
