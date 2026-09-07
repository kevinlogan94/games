---
name: xals-path-catalog-page
type: discussion
status: draft
created: 2026-09-07
updated: 2026-09-07
spine: ARCHITECTURE-SPINE.md
---

# v1 landing: Xal's Path catalog page

## Does `/` as the Xal's Path page make sense?

**Yes.** With one game, a catalog grid is an empty lobby. The Intrigue site worked because it *was* Xal's Path: meadow art, pixel type, section scroll, trailer in the hero. v1 should do that again under Kevin Logan's name.

What still makes this a catalog (not a one-off marketing site):

- The page is driven by a game record (`content/games/xals-path.yml`), not a frozen `App.vue`.
- `/` means "featured game," not "this domain is only Xal's Path forever."
- A `/games` index waits until there is a second title.

What we are **not** doing: cloning the portfolio homepage (photo marquee, jobs, testimonials, engineer FAQ). Steal its Nuxt/Content/Netlify craft. Steal Intrigue's *on-theme flow*.

## What lives on the page

Same bones as the old Intrigue landing (`NavBar` → `Banner` → `Story` → `Gameplay` → `Music` → `ComingSoon` → `Footer`). Two substitutions: **Play replaces Coming Soon**, and **Intrigue branding is gone**.

### Nav

Sticky. Wordmark is Xal's Path (not an Intrigue logo). Anchors: Story, Gameplay, Music, Play. Primary control: **Play**. Optional quiet "Kevin Logan" link to the portfolio. No Intrigue Twitter/YouTube.

### Hero (was Banner)

Full-bleed region art. Title lockup, subtitle "A story-driven clicker," short pitch (stranger + Xal + blight). Trailer (existing YouTube `r0CQO2x3VGY` unless replaced). **Play on the web** next to the trailer — the old page could not do this.

### Story

Idle/desk animation from the *xals-path* `develop` assets (the README already leads with `xal_idle.gif`). Copy stays on relativity, control, and uncovering intent — aligned with the GDD, not studio promo. Dirt/meadow panel treatment.

### Gameplay

Carousel of systems, copy updated to the Phaser hub (not only the 2021 screenshots):

| Slide | Player-facing system |
| --- | --- |
| Cast | Tap/cast to spend mana and gain Influence |
| Buffs | Burst of infinite mana after a cast threshold |
| Tomes | Helpers: passive Influence + creature spawns |
| Rewards | Local goals / achievements, no ads |

Art should be current web captures when they exist; do not treat App Store screenshots as the live product.

### Music

Same job as Intrigue: one loud "Listen to the soundtrack" action to the existing YouTube album (`hDrSy_biKRo`). Dirt-transition background energy, not a Spotify embed unless we choose that later.

### Play (replaces Coming Soon)

This is the section that must change. Mobile stores are **historical**, not shipping. The section should:

- Send people to `playUrl` (web remake).
- Say plainly the iOS/Android listings are retired.
- Optionally link GitHub `kevinlogan94/xals-path` for the curious.

No Android/Apple badge pair implying a launch.

### Footer

© year Kevin Logan. Trademarks line without Intrigue Games, LLC. Links: GitHub, portfolio, X if desired (Kevin's, not `@intrigue_games`).

## What does not live here in v1

- A list of other games.
- Kevin's employment story, testimonials, or FAQ.
- Live Phaser canvas / save data.
- Email capture, accounts, or a CMS beyond git Content.
- Intrigue logos, LLC copyright, or that studio's socials.

## Visual direction

On-theme means the **game world** sets the page: meadow green `#84b342`, dirt brown `#a6843c`, purple chrome `#694b6f`, pixel display font, full-bleed section backgrounds (meadow / story desk / river / dirt). Nuxt UI supplies structure (`UPage`, buttons, carousel primitives); Tailwind + game tokens supply the skin.

Assets: take from `kevinlogan94/xals-path` `develop` (or new art). Do not copy files out of `intrigue-games.github.io` — the flow is the reference, not the binary rights.

## Engineering shape (see spine)

- Starter: Nuxt UI (`npm create nuxt@latest -- -t ui`) + `@nuxt/content`.
- `index.vue` is the only Content reader; `Game*` sections get props.
- Theme tokens and `playUrl` live on `content/games/xals-path.yml`. Featured slug lives in `app.config.ts`.
- Art is vendored into `public/games/xals-path/`.
- Netlify: `pnpm generate`, publish `.output/public`, Node 24. Catalog and game ship as two sites.

## Open on purpose

- Stable public `playUrl` for the remake.
- Trailer vs a silent in-page capture in the hero.
- PixelOperator license vs a substitute pixel font.
