# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Nuxt 4, Nuxt UI, Tailwind, Nuxt Content. Package manager pnpm. Deploy: Netlify static generate (`pnpm generate`, publish `.output/public`). Confirmed by the user from existing architecture planning; the app scaffold is not in the repo yet.

## Users

Primary: people who want to understand and play Kevin Logan’s games. In v1 that means Xal’s Path — get the story and feel of the remake, then Play in the browser.

Secondary: people arriving from the portfolio who want proof that Kevin ships games. They are not hiring-page or résumé visitors; a quiet Kevin Logan link is enough.

## Product Purpose

Public game catalog at [games.kevinmlogan.com](https://games.kevinmlogan.com). It presents Kevin’s games and hands the visitor off to play. Success is: the visitor understands the featured game and reaches the live play URL without confusion about stores, downloads, or a missing studio.

v1: the homepage is the Xal’s Path catalog landing, not a multi-game grid.

## Positioning

A content-driven catalog: each game is a record (copy, media, play URL). `/` is the featured game, not an empty studio lobby. Play lives on the game’s own origin. This site does not run Phaser/Unity and does not sell through app stores.

## Operating Context

- Catalog host: `games.kevinmlogan.com`. Play host: `https://xals-path.kevinmlogan.com`.
- Individual games live in other repos; this repo is presentation only.
- Planning record: `_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/`.
- Contact is email, not a form. Portfolio and socials are site chrome, not game records.
- Trailer slot stays a placeholder until a remake trailer URL exists. Soundtrack is an outbound YouTube link (`hDrSy_biKRo`), not an embed.

## Capabilities and Constraints

- Featured slug for v1 is `xals-path`. A `/games` index is additive and waits until a second title exists.
- This repo never hosts the play loop. Every Play control opens the same `playUrl` in the same tab.
- Primary control label is **Play**, never **Download**. Do not mention App Store or Google Play.
- Identity is Kevin Logan / games.kevinmlogan.com. No Intrigue Games logos, LLC copyright, or Intrigue socials.
- Site email: `kevinmlogan7@gmail.com`, footer `mailto:` only. No contact form in v1.
- No catalog analytics in the first build. Later: a new GA4 stream for this domain, never the game’s measurement ID.
- v1 uses no Netlify Database, Blobs, Identity, or functions required to render `/`.
- Game copy and URLs belong in Content documents; site chrome URLs belong in site config. Components are props-only.
- Mobile Play copy may hint Add to Home Screen; the game origin owns install. Catalog must not iframe the game or ship a second manifest for it.

Undecided: second-game IA, in-catalog play, catalog `?from=` on playUrl, remake trailer URL.

## Brand Commitments

- Name: Kevin Logan. Site: games.kevinmlogan.com.
- First listed game: Xal’s Path — story-driven idle/clicker; a stranger is summoned to a blighted realm to aid Xal, a druid, in cleansing the land.
- Do not revive Intrigue Games branding or the retired meadow marketing site as current identity.
- Catalog look follows the live remake: dark BAM ground (`#0d1a0d`), not the portfolio and not Intrigue meadow.
- Type: Press Start 2P for wordmark, section titles, and Play. Readable UI type for nav, body, and captions. Do not use PixelOperator unless a license is confirmed.
- Site chrome: GitHub `https://github.com/kevinlogan94`, portfolio `https://kevinmlogan.com`, Contact mailto. No X until a handle is provided.

## Evidence on Hand

- README and architecture spine / catalog-page notes in `_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/`.
- Live play: [xals-path.kevinmlogan.com](https://xals-path.kevinmlogan.com). Game source: `kevinlogan94/xals-path` (`develop`).
- Construction reference (engineering patterns only): Kevin’s Nuxt portfolio. Do not copy résumé IA.
- No testimonials, press quotes, store rankings, or download counts. Do not invent them. Do not use old App Store screenshots or the old mobile YouTube trailer as current proof.

## Product Principles

1. Featured game first — one real landing beats an empty catalog grid.
2. Play is a handoff — this site sells the visit; the game site is the product.
3. One record per game — copy, media, and URLs live in the game document, not in page chrome.
4. Honest availability — web Play only; no store or download theater.
5. Kevin’s name, Kevin’s games — no retired studio identity.
