---
name: games catalog
description: Wine-black sanctum storefront for Kevin Logan’s featured game landing
colors:
  sanctum: "#09060a"
  sanctum-raised: "#120d14"
  sanctum-panel: "#110c14"
  sanctum-deep: "#060407"
  amber-proof: "#fbbf24"
  amber-hover: "#fcd34d"
  amber-ember: "#f59e0b"
  emerald-spore: "#34d399"
  ink: "#ffffff"
  stone: "#e7e5e4"
  stone-mute: "#d6d3d1"
  stone-dim: "#a8a29e"
  cta-ink: "#0c0a09"
  stone-well: "#1c1917"
typography:
  display:
    fontFamily: "Cinzel Decorative, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: "1"
    letterSpacing: "0.05em"
  headline:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "normal"
  title:
    fontFamily: "Cormorant Garamond, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0.2em"
rounded:
  pill: "999px"
  card: "16px"
  panel: "24px"
  hint: "12px"
spacing:
  gutter: "24px"
  section: "112px"
  cluster: "24px"
components:
  button-play:
    backgroundColor: "{colors.amber-proof}"
    textColor: "{colors.cta-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  button-play-hover:
    backgroundColor: "{colors.amber-hover}"
    textColor: "{colors.cta-ink}"
    rounded: "{rounded.pill}"
  button-enter:
    backgroundColor: "{colors.amber-proof}"
    textColor: "{colors.cta-ink}"
    rounded: "{rounded.pill}"
    padding: "16px 36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-soundtrack:
    backgroundColor: "{colors.stone-well}"
    textColor: "{colors.stone}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  chip-proof:
    backgroundColor: "rgba(245, 158, 11, 0.1)"
    textColor: "#fde68a"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  nav-pill:
    backgroundColor: "rgba(18, 13, 20, 0.85)"
    textColor: "{colors.stone-dim}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card-review:
    backgroundColor: "{colors.sanctum-panel}"
    textColor: "{colors.stone-mute}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: games catalog

## Overview

**Creative North Star: "Sanctum chronicle"**

The catalog landing is a wine-black rite, not a title screen. A floating pill hangs over a breathing eclipse; Cinzel names the realm; Cormorant tells the story; Inter carries the pitch; JetBrains marks the rite. Amber and emerald are the two living lights. The visitor is persuaded, then handed to the Phaser remake in the same tab.

Personality is ceremonial and close: dense type, soft blooms, tarot arch, chronicle rail, review marquee, soundtrack card with equalizer bars. It refuses the BAM forest title-screen, Nunito-on-moss, and square pixel-border catalog. It also refuses the retired meadow marketing site and any Intrigue studio dress.

**Key Characteristics:**
- Wine-black ground with amber and emerald spores
- Cinzel Decorative wordmark, Cormorant Garamond headlines, Inter body, JetBrains Mono labels
- Full-pill nav and rounded amber Play controls
- Tarot idle frame, left-rail chronicle, review marquee, soundtrack closing card

**The Sanctum Rule.** If the idle gif were removed, the page should still read as Xal’s Path: wine-black, amber, emerald, Cinzel.

## Colors

Wine-black fields, stone type, and two committed lights: amber for proof and Play, emerald for life and the live-dot.

### Primary
- **Proof Amber** (`amber-proof`): Play pills, wordmark, stars, focus ring, amber borders. Hover lightens to `amber-hover`. Active chronicle rail uses `amber-ember`.

### Secondary
- **Spore Emerald** (`emerald-spore`): Nav live-dot, version pill, tarot caption, quote rule, alternating chronicle codes. Shares the hero CTA gradient with amber; it is not a leftover accent.

### Neutral
- **Sanctum** (`sanctum`): Page ground and spore canvas.
- **Raised** (`sanctum-raised`): Pill nav glass and Pro Tip well.
- **Panel** (`sanctum-panel`): Review cards.
- **Deep** (`sanctum-deep`): Footer.
- **Ink** (`ink`): Hero title and section heads.
- **Stone** (`stone`): Default body on sanctum (`body` color). Muted copy uses `stone-mute` and `stone-dim`.
- **CTA ink** (`cta-ink`): Text on amber pills.
- **Stone well** (`stone-well`): Ghost and soundtrack button fills.

**The Two Lights Rule.** Amber and emerald both appear on every viewport of `/`. Do not collapse the system to gold-on-forest or to a single accent.

## Typography

**Display Font:** Cinzel Decorative (serif fallback)
**Headline Font:** Cormorant Garamond (Georgia, serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** JetBrains Mono (monospace)

**Character:** Four voices with fixed jobs. Cinzel is the name of the rite. Cormorant is the chronicle. Inter is the spoken pitch. JetBrains is the stamped label.

### Hierarchy
- **Display** (900, `clamp(3rem, 8vw, 6rem)`, tracking `0.05em`): Hero title only. White, heavy drop shadow.
- **Wordmark** (Cinzel 700, `0.875rem`, tracking widest): Nav “XAL'S PATH” in amber.
- **Headline** (Cormorant 700, `clamp(2.25rem, 5vw, 3.75rem)`): Section titles. White.
- **Subtitle** (Cormorant italic, `1.875rem` / `2.25rem`): Hero line in amber-200.
- **Title** (Cormorant 700, `1.5rem`–`1.875rem`): Chronicle titles, review titles, slide heading.
- **Body** (Inter 400, `1rem` / `1.125rem`, line-height ~1.7): Pitch, story, play copy. Max width about `42rem` on the hero.
- **Label** (JetBrains, `0.75rem`, tracking `0.2em`, uppercase): Version pill, Pro Tip stamp, chronicle codes, review tags, footer meta.

**The Four Voices Rule.** Do not put headlines in Cinzel, body in Cormorant, or Play in Inter. Nunito is not in this system.

## Layout

Centered column on wine-black. Hero content maxes at `56rem`; story and chronicle at `72rem`; soundtrack card at `64rem`. Horizontal gutter is `24px`. Section padding is `112px` (`py-28`); soundtrack is slightly tighter (`96px`).

A fixed pill sits `20px` from the top, centered. In-page anchors use `scroll-margin` of `7rem` so heads clear the pill. Hero is a centered column, `min-height` about `92vh`, with a breathing eclipse behind the type.

Below the hero: Story is a 12-column split (tarot 5, copy 7 from `md`). Gameplay is tabs plus panel from `lg`. Reviews are a full-bleed marquee. Soundtrack is a single centered card. Footer is a `72rem` row.

Nav links hide below `md`. Hero CTAs stack full-width below `sm`, then sit in a row. Normal document scroll; smooth scrolling only when motion is allowed.

**The Close Rule.** Play is a handoff, not a restatement of the hero story. Same `playUrl`, same tab, three labels (Play Now, Enter the Realm, Launch Game) that share the amber pill.

## Elevation & Depth

Hybrid: dark ambient shadows under glass, plus authored glow. The page is not flat. Mana spores are a fixed canvas of amber and emerald dots. The eclipse is a blurred tricolor halo that scales and breathes. Pixel art stays crisp (`image-rendering: pixelated`) inside rounded frames; the frame is round, the sprite is not a pixel border.

### Shadow Vocabulary
- **Pill sit** (`box-shadow: 0 10px 40px rgba(0,0,0,0.85)`): Floating nav.
- **Amber bloom** (`0 0 15px`–`35px` `rgba(251,191,36,0.35–0.4)`): Play controls.
- **Live dot** (`0 0 10px #34d399`): Nav emerald bead.
- **Tarot mist** (`0 0 50px rgba(16,185,129,0.15)`): Idle frame.
- **Title well** (`drop-shadow: 0 10px 30px rgba(0,0,0,0.9)`): Hero Cinzel.
- **Card rest** (Tailwind `shadow-xl` / `shadow-2xl`): Review cards, chronicle panel, soundtrack card.

### Named Rules
**The Halo Rule.** Depth comes from bloom and glass (`backdrop-blur` on the nav), not from a hard 4px offset stamp. Focus is a 2px amber ring with 3px offset.

## Shapes

Pills for nav, CTAs, version, and proof chip (`999px`). Cards are `16px`. The soundtrack panel is `24px`. The tarot is a rounded arch: full round on top, `16px` on the bottom, one-pixel amber-to-emerald gradient rim. Chronicle items are a 4px left rail with a rounded-right body. Review tags are small square-radius stamps, not pills.

Hairline borders are stone-800 or amber/emerald at 20–30% alpha. No square 2px pixel-border rectangles.

**The Pill Rule.** Primary actions are full capsules. Do not square them off to look like a cartridge UI.

## Components

### Buttons
- **Shape:** Full pill (`999px`).
- **Play Now (nav):** Compact amber fill, `cta-ink` uppercase, amber bloom, hover `amber-hover`.
- **Enter the Realm:** Larger pill, amber-to-emerald horizontal gradient, extra-bold uppercase, hover scale `1.05` when motion is allowed.
- **Launch Game:** Solid amber pill, same hover as nav Play.
- **Explore Mechanics (ghost):** Stone well fill, stone-700 border, uppercase tracking; hover border goes amber.
- **Soundtrack:** Stone well, stone-700 border; hover border and type go emerald. Opens YouTube in a new tab.
- **Focus:** 2px `amber-proof` outline, 3px offset, on links and buttons.

### Chips
- **Version pill:** Emerald border and fill wash, JetBrains uppercase, pulsing emerald bead.
- **Proof chip:** Amber wash pill with five stars, rating, and a short italic quote; links to reviews.
- **Pro Tip:** Raised well, `12px` corners, mono stamp plus Inter hint.

### Cards / Containers
- **Review card:** `360px` wide, `16px` corners, panel fill, accent border (emerald, amber, stone, or a purple wash used only as a review variant). Internal padding `24px`.
- **Chronicle panel:** `16px` card, amber-25 border, sanctum fill, deep well for the slide image.
- **Soundtrack card:** `24px` corners, amber-30 border, gradient from `#16101b` to sanctum, equalizer bars (4×14px pills, emerald-to-amber).

### Navigation
Floating glass pill: raised fill at 85%, `backdrop-blur`, amber-25 hairline. Emerald live-dot, Cinzel wordmark, uppercase Inter links (hover amber), compact Play. Links from `md` up; Creator is the portfolio, new tab.

### Tarot frame
Arch window for the idle gif. Inner fill `#0e0a10`. Cinzel frame title, JetBrains live caption.

### Chronicle
Vertical tabs. Idle rail is stone-800; active rail is `amber-ember` with a left amber wash. Titles in Cormorant. Codes alternate amber and emerald.

### Reviews marquee
Duplicated track, `40s` linear scroll, pauses on hover. Motion off: static row, no animation.

## Do's and Don'ts

### Do:
- **Do** keep wine-black, amber, and emerald as the committed triad; use both lights on `/`.
- **Do** assign Cinzel to names, Cormorant to headlines, Inter to body, JetBrains to stamps.
- **Do** use full-pill Play controls and hand off `playUrl` in the same tab.
- **Do** keep the six real quotes as the only acclaim; the 4.8 line is their average.
- **Do** honor `prefers-reduced-motion`: no eclipse pulse, marquee, equalizer, spores, or CTA scale.

### Don't:
- **Don't** revive BAM greens, Nunito, or square pixel-border chrome as current identity.
- **Don't** use PixelOperator, meadow pastels, or Intrigue marks.
- **Don't** label the primary control Download, or dress the catalog as an app store.
- **Don't** iframe the game or embed Phaser on this origin.
