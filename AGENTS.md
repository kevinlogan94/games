# Agent guidelines

Rules for work in this repo. Prefer these over default habits unless the user says otherwise.

## Prefer little code

When planning or implementing, meet the acceptance criteria in as little code as possible. Avoid speculative abstractions, extra layers, and “just in case” structure.

## File size

Optimize for Cursor performance by consolidating related code into fewer files of up to about 500 lines each. Prefer one well-sized file over many tiny (~100-line) files for the same concern. Split only when a file would meaningfully exceed ~500 lines or when separation of concerns clearly requires it.

## Keep code simple

Favor straightforward, readable changes. Do not over-engineer. Match existing patterns in the project you are editing.

## No unit tests by default

Do not add unit tests unless the user asks for them.

## No backwards compatibility by default

Do not preserve backwards compatibility unless the user asks for it. Prefer the cleanest current solution over compatibility shims.

## Prefer terminal for file ops

When interacting with files, prefer terminal commands over editing files directly when possible (saves tokens). Example: use `mv` instead of writing the file in the new location and removing the old one.

## Package manager

Use pnpm at the repo root (not npm or yarn).

## Catalog colocation

This repo is presentation only. Do not import from game repos or embed Phaser.

Game copy, media paths, and play/trailer/music URLs live in `content/games/`. Site chrome URLs live in `app.config.ts`. `app/pages/index.vue` is the only Content reader and owns the featured landing markup. Do not split Nav/Hero/Story/Gameplay/Play/Footer into tiny section components.

Vendored art lives under `public/games/<slug>/`.
