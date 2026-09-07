---
name: games catalog
description: Dark BAM remake storefront for Kevin Logan’s featured game landing
colors:
  bam-ground: "#0d1a0d"
  bam-panel: "#1a2e1a"
  bam-line: "#3d5c3d"
  bam-gold: "#97752d"
  bam-mist: "#c5d4c5"
  bam-ink: "#ffffff"
typography:
  display:
    fontFamily: "Press Start 2P, cursive"
    fontSize: "clamp(1.35rem, 3vw, 2rem)"
    fontWeight: 400
    lineHeight: "1.85"
    letterSpacing: "normal"
  subtitle:
    fontFamily: "Press Start 2P, cursive"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  compact:
    fontFamily: "Press Start 2P, cursive"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  body:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: "normal"
  caption:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  gutter: "16px"
  section: "80px"
  cluster: "20px"
components:
  button-play:
    backgroundColor: "{colors.bam-panel}"
    textColor: "{colors.bam-ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-play-hover:
    backgroundColor: "{colors.bam-line}"
    textColor: "{colors.bam-ink}"
    rounded: "{rounded.none}"
  button-soundtrack:
    backgroundColor: "{colors.bam-ground}"
    textColor: "{colors.bam-ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
---

# Design System: games catalog

## Overview

**Creative North Star: "Title screen for the blighted realm."** The catalog landing is the Phaser remake’s frontispiece: dark BAM ground, cropped region art, pixel wordmark, one Play handoff. It is not a studio grid, not a résumé, and not the retired meadow marketing site.

**Key Characteristics:**
- Full-bleed remake art with a left/bottom shade so type sits on the realm, not on a card
- Press Start 2P for wordmark, titles, and Play; Public Sans for everything people read
- Square pixel borders, no radius, gold only as accent (subtitle, Play hover, active carousel)
- Soundtrack lives on Play as a quiet outbound button, never its own section

**The Realm Rule.** If the art were removed, the page should still read as Xal’s Path: forest-black, moss line, gold, pixel type.

## Colors

Ground `#0d1a0d`, panel `#1a2e1a`, line `#3d5c3d`, ink `#fff`, mist `#c5d4c5`, gold `#97752d`. Mist is a green-tinted secondary, not gray. Gold is accent only — never a fill for Play. Nuxt starter green (`#00DC82`) is not part of this system; the green scale is remapped to BAM so leftover UI primitives cannot resurrect it.

**The No Gray Rule.** Secondary text on BAM fields uses mist, not `white/50`.

## Typography

Display is Press Start 2P at small sizes with generous leading (pixel fonts clip). Body stays in Public Sans, roughly 38rem measure. Do not use PixelOperator unless a license is confirmed.

**The Pixel Title Rule.** Wordmark, section titles, and Play use the display face. Nav anchors, body, hints, and footer use the readable face.

## Layout

Sticky nav. Sections in order: Hero, Story, Gameplay, Play, Footer. Normal document scroll, no scroll-snap. Phone/desktop copy split at **768px**. Story is portrait plus prose, not an 80% overlay. Gameplay is a carousel that contains pixel art (`object-contain`), never crops it into a 16:9 video well.

**The Close Rule.** Play is a handoff, not a restatement of Hero: same `playUrl`, hints, soundtrack, GitHub.

## Elevation & Depth

No drop shadows. Depth comes from 2px BAM lines, stacked fields, and the hero shade/veil. The title-screen veil lifts once on load; it does not run when `prefers-reduced-motion: reduce`.

## Shapes

Radius is 0. Controls are rectangles with 2px borders. Carousel chevrons are drawn strokes, not emoji.

## Components

**Play** — primary CTA. Label is always `Play`. Same tab, `playUrl` from the game record. Pixel border; hover fills the line and gilds the border.

**Soundtrack** — secondary outline control on Play only. Opens YouTube in a new tab.

**Carousel** — prev/next 44px targets, dots, keyboard arrows, `aria-live` caption.

**Trailer** — still plus “Trailer coming soon.” Never a fake video player or the retired mobile trailer.

## Do's and Don'ts

### Do:
- **Do** vendor remake art under `public/games/<slug>/` and let missing media fall back to a BAM field.
- **Do** keep copy and URLs in Content; `index.vue` is the only Content reader.
- **Do** show `mobileHint` below 768px and `desktopHint` at 768px and up.

### Don't:
- **Don't** mention App Store, Google Play, Download, Intrigue, or X/Twitter.
- **Don't** embed Phaser, iframe the game, or invent testimonials/store history.
- **Don't** add a Music section or scroll-snap.
