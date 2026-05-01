# Copilot Instructions — minecraft-roguelike

## Commands

```bash
npm run build        # compile src/**/*.ts → kubejs/*_scripts/*.js
npm run dev          # watch mode (recompiles on save)
npm test             # run all tests (no Minecraft needed)
```

Run a single test file:
```bash
npx vitest run tests/server/recipes.test.ts
```

Run tests matching a name pattern:
```bash
npx vitest run -t "removes the vanilla string recipe"
```

> TypeScript is type-check only — `tsc` does not emit. esbuild (`build.mjs`) is the compiler.

## Architecture

```
src/
├── server/     → kubejs/server_scripts/   (recipes, events, gates)
├── client/     → kubejs/client_scripts/   (HUD, cosmetics)
└── startup/    → kubejs/startup_scripts/  (registries, item defs)
```

**Build pipeline:** esbuild bundles each `.ts` file in `src/server|client|startup/` into a
separate self-contained IIFE `.js` file. KubeJS runs these on GraalJS and cannot resolve
ESM imports at runtime, so bundling per-file is required. Do not add dynamic imports.

**Type stubs:** `types/kubejs/` contains hand-written `.d.ts` stubs for the KubeJS API.
When a ProbeJS dump (`kubejs/probe/`) is present it provides full Java-side completions;
`skipLibCheck: true` suppresses conflicts between the two sets of declarations.

**Test isolation:** `tests/setup.ts` injects mock `ServerEvents`, `ClientEvents`,
`StartupEvents`, `Item`, `Block`, `Fluid`, etc. as `globalThis` properties before each
test file, so scripts can be imported and exercised without Minecraft.

## Key Conventions

### Script file pattern

Every script exports its handler and then registers it at the bottom:

```typescript
// src/server/example.ts
export function registerExampleRecipes(e: RecipesKubeEvent): void {
  e.shaped('roguelike:my_item', ['ABA', 'BCB', 'ABA'], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:diamond',
  });
}

ServerEvents.recipes(registerExampleRecipes);
```

Exporting the function is what makes it testable. The `ServerEvents.recipes(...)` call at
the bottom is what KubeJS actually runs.

### Progression gates

All dimension gate logic lives **exclusively** in `src/server/gates.ts`. Never add gate
checks or portal key recipes to dimension-specific scripts (`overworld.ts`, `nether.ts`,
etc.). The gate system works by requiring a custom crafting ingredient that is only
obtainable as an FTB Quests reward after the previous boss quest is completed.

### Naming

| Thing | Convention |
|---|---|
| Script files | `kebab-case.ts` |
| Exported functions | `camelCase` prefixed with action — `registerXxx`, `onXxx` |
| Custom item IDs | `roguelike:snake_case` |
| Quest IDs in SNBT | Sequential hex strings — `"1A2B3C4D"` |

### SNBT quest files

`kubejs/data/ftbquests/quests/chapters/*.snbt` — **edit in-game only** using the FTB
Quests editor (`B` key), then commit the resulting file changes. Hand-editing SNBT is
error-prone.

### TypeScript version

Keep TypeScript on `^5.x`. ProbeJS-generated types target TS 5.x; TS 6.x treats certain
generated patterns as hard parse errors that `skipLibCheck` cannot suppress.

### Test pattern

Each test file creates a mock event object with `vi.fn()` methods, calls the exported
handler, and asserts on the mock calls:

```typescript
import { describe, it, expect, vi } from 'vitest';
import { registerExampleRecipes } from '../../src/server/example';

it('adds the example recipe', () => {
  const event = { shaped: vi.fn(), remove: vi.fn(), /* ... */ } as any;
  registerExampleRecipes(event);
  expect(event.shaped).toHaveBeenCalledWith('roguelike:my_item', expect.any(Array), expect.any(Object));
});
```

## Commit Convention

```
feat: add overworld Catalyst recipe
fix: correct Ars Nouveau gate condition
chore: update FTB Quests chapter 2 structure
```
