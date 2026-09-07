---
name: xals-path-catalog-page
type: discussion
status: final
created: 2026-09-07
updated: 2026-09-07
spine: ARCHITECTURE-SPINE.md
---

# v1 landing: Xal's Path catalog page

## Does `/` as the Xal's Path page make sense?

**Yes.** With one game, a catalog grid is an empty lobby. Keep Intrigue's *section-scroll flow*. Skin it with the **Phaser remake**, not the 2021 meadow marketing site.

What still makes this a catalog:

- The page is driven by `content/games/xals-path.yml`.
- `/` means "featured game."
- A `/games` index waits until there is a second title.

## What lives on the page

Nav → Hero → Story → Gameplay → Music → Play → Footer. Play replaces Coming Soon. Intrigue branding is gone.

### Nav

Sticky. Xal's Path wordmark. Anchors: Story, Gameplay, Music, Play. Primary **Play** (same tab, `https://xals-path.kevinmlogan.com`). Quiet Kevin Logan link to the portfolio. Contact is in the footer, not a second primary.

### Hero

Full-bleed remake art (vendored/cropped from `xals-path` `develop`). Title, "A story-driven clicker," pitch, **Play**. Trailer slot is a **placeholder** until the remake trailer exists — still + "Trailer coming soon." Do not embed the old mobile YouTube trailer. On small screens, one `play.mobileHint` line under Play.

### Story

Remake idle/character art, GDD copy (relativity, control, intent). Same dark BAM language as the game, not dirt-brown Intrigue panels.

### Gameplay

Carousel from current web systems: Cast, Buffs, Tomes, Rewards. Use remake captures, not App Store screenshots.

### Music

Button to the soundtrack YouTube (`hDrSy_biKRo`). Not an embed.

### Play

One **Play** button, same tab, same URL. Desktop: play in the browser. Phone: short Home Screen hint; the game owns the install gate.

One line that this is the web remake. **Do not mention App Store or Google Play** — they have been gone for years and only raise "can I get it on my phone store?"

Small GitHub text link. No Download label. No store badges.

### Footer

© Kevin Logan. Visible **Contact** `mailto:kevinmlogan7@gmail.com`. GitHub, portfolio, X (Kevin's). No Intrigue.

## What does not live here in v1

- Other games, resume IA, Phaser canvas, forms, Intrigue brand, store history, the old trailer.

## Visual direction

Match the live game: dark (`#0d1a0d` range), Press Start 2P, BAM/region art. Pull frames from `develop` and crop them for sections, the way the old site cropped Unity art — new look, old *method*.

## Engineering shape (see spine)

- Nuxt UI starter + Content. `index.vue` sole Content reader.
- `hero.trailer.status: placeholder` until a remake trailer URL exists.
- Email only in `app.config.ts`. Analytics is a later step (AD-14).
