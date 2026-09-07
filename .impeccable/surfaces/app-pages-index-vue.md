---
version: 1
slug: "app-pages-index-vue"
primary_target: "app/pages/index.vue"
related_targets: []
---

# Surface: featured catalog landing (`/`)

Visitor mode: **Persuade**. Target: `app/pages/index.vue`. Driven by `content/games/xals-path.yml`.

## Job and audience

Players (primary) and portfolio visitors (secondary) land here to understand Xal’s Path and Play. Success is reaching `https://xals-path.kevinmlogan.com` in the same tab without store/download confusion.

## Outcome and proof

Section order is locked: Nav, Hero, Story, Gameplay, Music, Play, Footer. Proof is vendored remake art, GDD story, gameplay slides (Cast, Buffs, Tomes, Rewards), soundtrack YouTube button (`hDrSy_biKRo`). Trailer is a still + “Trailer coming soon.” Do not invent testimonials or store history.

## Selected direction

The Phaser remake *is* the world. Not a studio grid, not the portfolio résumé, not the Intrigue meadow site.

Memorable moment: full-bleed remake hero, title, “A story-driven clicker,” Play.

## Scope and boundaries

v1 production landing only. No `/games` index, no Phaser embed, no forms, no analytics, no Intrigue, no App Store/Play. Code-first (no comps).

## States and ranges

Typical: one featured game, all sections filled. Trailer: `placeholder`. Play copy: `desktopHint` ≥768px, `mobileHint` below. Empty/error: missing media uses a dark BAM field, never a broken image icon as the story.

## Interaction and layout

Sticky nav: game wordmark, anchors Story/Gameplay/Music/Play, primary Play, quiet Kevin Logan → `https://kevinmlogan.com`. Full-bleed stacked sections; gameplay is a carousel. Music is a button, not an embed. Signature interaction: scroll-snap (or equivalent section-scroll) through themed art, Play always one URL.

## Constraints

Chrome URLs only in `app.config.ts`: email `kevinmlogan7@gmail.com`, GitHub `https://github.com/kevinlogan94`, portfolio `https://kevinmlogan.com`. No X until a handle exists. Type: Press Start 2P for wordmark, titles, Play; readable UI type for nav/body/captions. Palette sampled from live remake: ground `#0d1a0d`, panel `#1a2e1a`, line `#3d5c3d`, text `#fff`; primary/accent from vendored BAM art at build, not a second catalog skin. WCAG AA on body/controls; pixel titles at display size only.

## Direction contract

THESIS: Featured-game themed storefront; refuse a one-card studio index and résumé chrome.
OWN-WORLD: Dark BAM (`#0d1a0d` / `#1a2e1a` / `#3d5c3d` / `#fff`); cropped remake region art as section fields; Press Start 2P titles + readable body; pixel-border Play; no meadow/dirt/purple.
STORY: Believe this is the web remake of Xal’s Path; Play in the browser.
FIRST VIEWPORT: Sticky nav (wordmark left, anchors, Play right). Full-bleed hero art. Title + subtitle + pitch over the field. Play on the art; trailer placeholder beside or under, not a fake video. Mobile: one `play.mobileHint` line under Play.
FORM: Architecture-pinned remake landing (CATALOG-PAGE.md). concept-seed skipped — user/brief pin beats the roll. seed: architecture-games-2026-09-07.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
