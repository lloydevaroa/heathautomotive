# Heath Automotive

Static website for [Heath Automotive](https://heathautomotive.co.nz) — Highland Park / Pakuranga workshop (WOF, servicing & repairs).

Built with [Astro](https://astro.build) for [Cloudflare Pages](https://pages.cloudflare.com/).

Repository: https://github.com/lloydevaroa/heathautomotive

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build   # output → dist/
npm run preview
```

## Cloudflare Pages setup

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the `lloydevaroa/heathautomotive` repository and the `main` branch.
3. Configure the build:

| Setting | Value |
| --- | --- |
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (default) |

4. Deploy. Cloudflare will install dependencies and publish `dist/`.

### Custom domain

The domain **heathautomotive.co.nz** is held until DNS is ready. When you are ready to go live:

1. In the Pages project → **Custom domains** → add `heathautomotive.co.nz` (and optionally `www`).
2. Follow Cloudflare’s DNS instructions for the domain (do not configure DNS from this repo).

## Project structure

```
src/
  components/   Header, Footer
  layouts/      BaseLayout
  pages/        index, services, about, contact
  styles/       global.css
public/         static assets (WebP gallery images TBD)
```

## Notes

- Gallery slots are placeholders — WebP workshop assets coming later.
- No logo or photo binaries are committed yet.
