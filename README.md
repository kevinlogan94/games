# Game Catalog

Public game catalog at [games.kevinmlogan.com](https://games.kevinmlogan.com).

This site lists games by Kevin Logan. The first entry is [Xal's Path](https://github.com/kevinlogan94/xals-path), a story-driven idle/clicker.

## Games

- **Xal's Path**: a mysterious stranger is summoned to a blighted realm to aid Xal, a druid, in cleansing the land. Play at [xals-path.kevinmlogan.com](https://xals-path.kevinmlogan.com).

## Development

This repo is the catalog site only. Individual games live in their own repositories.

```bash
pnpm install
pnpm dev
pnpm generate
```

Stack: Nuxt 4, Nuxt UI, Tailwind, Nuxt Content. Package manager: pnpm. Deploy: Netlify static generate (`pnpm generate`, publish `dist`).

v1: the homepage is the Xal's Path catalog landing, not a multi-game grid. Architecture:

- [_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/ARCHITECTURE-SPINE.md](_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/ARCHITECTURE-SPINE.md)
- [_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/CATALOG-PAGE.md](_bmad-output/planning-artifacts/architecture/architecture-games-2026-09-07/CATALOG-PAGE.md)
