# Heath Automotive website

Contemporary rebuild of [heathautomotive.co.nz](https://heathautomotive.co.nz/) — lean static site on GitHub + Cloudflare Pages.

**Staging:** https://heathautomotive.pages.dev/  
**Repo:** https://github.com/lloydevaroa/heathautomotive

---

## Why we rebuilt

| Goal | Approach |
|------|----------|
| Faster page loads | Static Astro site on Cloudflare Pages (no WordPress hosting) |
| Lower cost | Drop WP hosting spend |
| Contemporary design | Kari Motors–inspired full-bleed hero + Eastern Bays / Dr Diesel UX cues |
| Brand consistency | Original Heath yellow `#f3b93e`, Exo 2 headings (Eurostile Extended wordmark feel), charcoal on white |

---

## What the site is for (marketing)

**Primary job:** help people **call or drop in** — not lead-gen forms.

**Hero services:** WOF and servicing (bulk of the business). Repairs supported but secondary.

**Main CTAs:** Call `(09) 537 5694` · Get directions (address / map). Contact form is a quiet backup only.

**Audience:** local private car owners around Highland Park / Pakuranga / East Auckland.

---

## Brand locks

- **Accent:** `#f3b93e` (from the live WordPress site)
- **Type:** Exo 2 for headings; clean sans for body
- **Logo:** `public/heathautomotive_white.webp` (white wordmark on dark header)
- **CTAs:** matching solid yellow pills, charcoal text, **one corner radius** on every button (header + hero)
- **Voice:** suburb-first, landmark (“behind Denny’s”), proof over hard sell

### Hero trust chips (four only)

1. 4.9★ Google (83+)
2. WOF from $65 with service *(standalone WOF remains $75 on the service card)*
3. Open drop-in behind Denny’s
4. Hours Mon–Fri 8:00am–4:30pm

Intermediate `$295` and Gold `$425` stay on **service cards only** — not in the hero chips.

### Hero subcopy

> Local workshop behind Denny’s on Aviemore Drive. Quick turnaround, fair pricing, real reviews.

(“Fast fittings” and “we’ll fit you in fast” were rejected — the workshop is often busy with tight schedules.)

---

## Page set

| Page | Role |
|------|------|
| Home | Kari-style hero, chips, intro, services & prices, reviews, gallery, FAQ, closing CTAs |
| Services | WOF / Intermediate / Gold / Repairs detail + inspection blocks |
| About | Workshop story + photos (no owner faces) |
| Contact | Phone, address, hours, map / directions first; short backup form |

No blog — lean for speed.

---

## Design references (inspiration, not clones)

- **Elevate Roofing** `.pages.dev` — lean trade UX example only (not a design bible)
- **Eastern Bays Auto / Dr Diesel** — dual CTAs, early reviews, suburb copy, service grid, hours, FAQ
- **Kari Motors** home-2 — full-bleed hero, transparent header, copy in open space for photos
- **Thompson Automotive** — local Pakuranga rival (dated; easy to beat on polish)
- **AA** — steal trust/structure, not look

---

## Images

### Rules

- **Owner (Mark) out of frame** — no face/owner shots anywhere (hard rule)
- Locked IDs were **face-cleared** (no Mark); `3691` is hand + spark plug only
- Prefer warm workshop photos from Google Drive; avoid stock garage clichés
- WebP for Pages (~100–230 KB)

### Locked sets (Drive IDs)

**Hero rotate:** `3819` · `3803` · `3788` · `3787`  
**Around the workshop gallery:** `3819` · `5155` · `5109` · `3768` · `3767` · `3766` · `3696` · `3691`  
**About:** `3819` (hands/engine — no face)

Drive pack: [Heath Automotive folder](https://drive.google.com/drive/folders/151JCut-MG3HV5f8F8JwW58CrjrqMM3er) (~65 JPEGs from ~2012 shoot).

### Reviews (mid-page)

- Michael Wang — 20+ years, transparent pricing  
- Anna Williams — Mark and Boris went above and beyond  
- Nazreen Nisha Hassan — efficient and fast  

Stars + rating also above the fold; no heavy third-party review widgets (speed).

---

## Stack & deploy

- **Framework:** Astro (static)
- **Repo:** `lloydevaroa/heathautomotive` (public for setup)
- **Host:** Cloudflare Pages  
  - Build command: `npm run build`  
  - Output directory: `dist`  
  - Root: `/`
- **Custom domain:** `heathautomotive.co.nz` — DNS held until ready to flip

GitHub write for agents uses a **classic** PAT with `repo` scope (paste only in Moana’s 1:1 secure field — never in group chat).

---

## Process we followed (high level)

1. Clarify goals (speed, cost, contemporary design) and marketing job (call / drop-in)
2. Competitive / reference bar + Elevate as lean-trade example
3. Lock copy, chips, prices, hours, CTAs
4. Scaffold Astro → Cloudflare Pages staging
5. Brand tokens (`#f3b93e`, Exo 2) after feedback on navy/orange
6. Kari-style hero + image rotate; gallery refinements
7. Owner-out-of-frame image lock; WebP assets (markup may land before binaries if PAT/binary push is blocked)
8. Polish: matching CTA radius, chip trim, subcopy honesty

---

## Open / next

- [x] WebP binaries for locked hero/gallery IDs on `main` / staging
- [ ] Final visual once-over on https://heathautomotive.pages.dev/
- [ ] Custom domain DNS for `heathautomotive.co.nz` when Lloyd is ready
- [ ] Optional: remove staging-only notes once live

---

## Team

| Role | Focus |
|------|--------|
| Te Ariki Marketing | Positioning, copy, brand tokens, CTA/chip rules |
| Maeva Researcher | Competitive cues, Drive catalogue, face checks, research |
| Moana The Builder | Astro scaffold, images, Cloudflare Pages, repo |
| Marino the Project Manager | Scope, blockers, handoffs |

---

*Documented for handover — Sep 2026.*
