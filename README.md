# zuvar.dev

Personal site and build-in-public home for **Marko Filipović** — a software studio of one.

Plain static HTML + CSS, no build step. Deployed on Cloudflare Pages.

```
index.html        the homepage
styles.css        shared styles (single source of truth)
writing/          blog posts — hand-authored HTML
  index.html      post list
design-assets/    images (portraits, screenshots)
favicon.svg       favicon
sitemap.xml       sitemap
robots.txt        crawl rules
```

## Adding a post
1. Copy `writing/qwen-as-a-junior-dev.html` to `writing/<slug>.html` and rewrite it.
2. Add a list entry to `writing/index.html` (newest first — there's a template comment).
3. Add the URL to `sitemap.xml`.
