# Heath Automotive website

Static site for [Heath Automotive](https://heathautomotive.co.nz) — Highland Park / Pakuranga workshop (WOF, servicing & repairs).

**Repo:** https://github.com/lloydevaroa/heathautomotive  
**Staging:** https://heathautomotive.pages.dev/  
**Stack:** [Astro](https://astro.build) → [Cloudflare Pages](https://pages.cloudflare.com/) (`npm run build` → `dist/`)

---

## Why we rebuilt

The live site was an aging WordPress install. Goals for the rebuild:

1. **Speed and cost** — lean static hosting on Cloudflare Pages instead of a heavy CMS.
2. **Contemporary look** without feeling like a rebrand (keep Mark’s yellow / charcoal identity).
3. **Call or drop-in first** — primary conversion is phone + directions for **WOF + servicing**. The contact form is backup, not the main funnel.

Pages (no blog): **home · services · about · contact**.

Design cues came from local trade sites (Eastern Bays, Dr Diesel, Thompson Automotive) — clean sans, dual CTAs, reviews early, suburb-first copy, service grid with prices, landmark “easy find” line — not clones of any one site.

---

## Key decisions (locked)

### Brand

| Token | Choice | Why |
| --- | --- | --- |
| Accent | `#f3b93e` yellow | Matches existing brand; navy/orange trial felt like a rebrand |
| Text / ground | Charcoal on white | High contrast, workshop-plain |
| Headings | Exo 2 | Stand-in for Eurostile Extended wordmark style |
| Logo | `public/heathautomotive_white.webp` | Header wordmark (replaces captcha-blocked stub) |

### CTAs and proof

- **Call** `(09) 537 5694` (`tel:+6495375694`)
- **Directions** — 19A Aviemore Drive, Highland Park
- **Hours** — Mon–Fri 8:00am–4:30pm (closed weekends)
- Header + hero use matching solid yellow pills, charcoal text, one border-radius
- Hero subcopy: *“Quick turnaround, fair pricing, real reviews.”* (avoid over-promising wait times)
- Hero chips (four only): Google **4.9★ (83+)** · WOF from **$65** with service · Open drop-in behind Denny’s · Hours Mon–Fri 8:00am–4:30pm
- Intermediate **$295** / Gold **$425** stay on **service cards** only (not hero chips)
- Layout: full-bleed hero + transparent header (solid on scroll); about as two-column; closing CTA centered

### Images (hard rule)

**No photos of Mark / owner faces on the site** (owner request).

| Slot | Locked WebP set (`public/images/`) |
| --- | --- |
| Hero slider | `hero-3766.webp`, `hero-3787.webp`, `hero-3788.webp`, `hero-3803.webp`, `hero-3819.webp` |
| Gallery (“Around the workshop”) | `heath-3691.webp`, `heath-3696.webp`, `heath-3767.webp`, `heath-3768.webp`, `heath-5109.webp`, `heath-5155.webp` |

Source pack: Google Drive workshop JPEGs (~65) — [Drive folder](https://drive.google.com/drive/folders/151JCut-MG3HV5f8F8JwW58CrjrqMM3er). Older `heath-01`…`heath-08` files may still sit in `public/images/` but pages should use the locked sets above.

---

## Process (what we did)

1. **Scope** — WordPress → Astro + GitHub + Pages; CTA = call/drop-in; four pages; hold custom DNS until signed off.
2. **Scaffold** — Astro site in this repo; Cloudflare Pages connected to `main`.
3. **Brand pass** — Dropped navy/orange; locked yellow `#f3b93e`, charcoal, Exo 2 after Lloyd feedback.
4. **Copy / UX locks** — Hero chips trimmed, CTA pills unified, subcopy locked, about split layout.
5. **Photos** — Shortlist from Drive → WebP; face-check; swap to no-face hero/gallery sets.
6. **Staging fill** — Missing WebP binaries pushed to `main` so staging hero/gallery load.
7. **Client loop** — Mark update email drafted (reply in “Website update” thread with staging link); send when Lloyd is ready.
8. **Contact form** — Resend planned for form mail; needs Mark’s domain/account — not finished.

---

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build   # output → dist/
npm run preview
```

---

## Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select `lloydevaroa/heathautomotive`, branch `main`.
3. Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (default) |

4. Deploy. Staging URL: https://heathautomotive.pages.dev/

### Custom domain

**heathautomotive.co.nz** DNS is held until go-live. When ready:

1. Pages project → **Custom domains** → add `heathautomotive.co.nz` (and optionally `www`).
2. Follow Cloudflare’s DNS instructions (do not configure DNS from this repo).

---

## Project structure

```
src/
  components/   Header, Footer
  layouts/      BaseLayout
  pages/        index, services, about, contact
  styles/       global.css
public/
  heathautomotive_white.webp
  images/       hero + gallery WebPs
```

---

## Open / next

- [ ] Mark reviews staging and green-lights go-live
- [ ] Custom domain DNS for heathautomotive.co.nz
- [ ] Resend (with Mark) for the contact form
- [ ] Soft client email with staging link (Gmail thread “Website update”)

---

## Contacts

- Owner: Mark — `mark@heathautomotive.co.nz`
- Build / hosting: Lloyd Evaroa — Really Good Marketing
