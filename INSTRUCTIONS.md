# Roguelike Dimensions — Developer Instructions

This file explains how to work on the modpack scripts in this repository.

## Quick Start

```bash
npm install          # install TypeScript + build tools
npm run build        # compile src/**/*.ts → kubejs/*_scripts/*.js
npm run dev          # watch mode (recompiles on save)
npm test             # run all tests in Node.js (no Minecraft needed)
```

## Project Structure

```
minecraft-roguelike/
├── src/
│   ├── server/       # Server-side scripts (recipes, events, gates)
│   ├── client/       # Client-side scripts (HUD, cosmetics)
│   └── startup/      # Startup scripts (registries, item defs)
├── types/kubejs/      # TypeScript type stubs for KubeJS 7 API
├── tests/             # Vitest tests — run without Minecraft
├── kubejs/            # Build output — copy this folder to .minecraft/kubejs/
│   ├── server_scripts/
│   ├── client_scripts/
│   ├── startup_scripts/
│   └── data/ftbquests/  # Quest book chapter data (SNBT files)
├── plan.md            # Living document — current progress and decisions
├── build.mjs          # esbuild pipeline
├── tsconfig.json      # TypeScript config (no DOM, KubeJS types only)
└── vitest.config.ts   # Test runner config
```

## Writing KubeJS Scripts

Each script in `src/server/` should:
1. Export its handler function for testability
2. Register the handler at the bottom of the file

```typescript
// src/server/overworld.ts

export function registerOverworldRecipes(e: RecipesKubeEvent): void {
  // your recipe logic here
}

ServerEvents.recipes(registerOverworldRecipes);
```

## Testing Without Minecraft

Tests live in `tests/`. The `tests/setup.ts` file injects mock KubeJS globals
(ServerEvents, Item, Block, etc.) so tests run in Node.js.

```typescript
// tests/server/overworld.test.ts
import { describe, it, expect, vi } from 'vitest';
import { registerOverworldRecipes } from '../../src/server/overworld';

it('adds the Undergarden Catalyst recipe', () => {
  const event = { shaped: vi.fn(), remove: vi.fn(), ... };
  registerOverworldRecipes(event as any);
  expect(event.shaped).toHaveBeenCalledWith('roguelike:undergarden_catalyst', ...);
});
```

## FTB Quests

Quest data is in `kubejs/data/ftbquests/quests/chapters/*.snbt`.

**DO NOT edit SNBT files by hand unless you know the format.** Prefer using the in-game
FTB Quests editor (open with `B` key), then commit the resulting SNBT changes.

The chapter shell files are pre-created. Open the game and use the quest editor to:
1. Add quest nodes to each chapter
2. Set icons, descriptions, and dependencies
3. Set rewards (items, XP, custom)
4. Save — FTB Quests writes to the SNBT files automatically

## ProbeJS Type Generation (One-Time, Requires Minecraft)

When you can run Minecraft with the full modpack on another machine:
1. Install KubeJS 7 + ProbeJS 7
2. Run `/probejs dump` in-game
3. Copy `kubejs/probe/` from `.minecraft` to this repo
4. Apply the ProbeJS patch script (see below) to fix known ProbeJS bugs
5. Commit — all developers get full Java-side type completions

### ProbeJS Patches (must re-apply after each new dump)

After copying `kubejs/probe/`, run these two fixes:

**Fix 1 — broken template literal in `registry_type.d.ts`** (affects server, client, startup):

In each of the three files:
- `kubejs/probe/server/generated-server/registry_type.d.ts`
- `kubejs/probe/client/generated-client/registry_type.d.ts`
- `kubejs/probe/startup/generated-startup/registry_type.d.ts`

Find line 361 and change:
```
T extends `probejs$$object$$${infer Suffix} ? `probejs$$tag$$${Suffix}` : never
```
to (add the missing closing backtick after `${infer Suffix}`):
```
T extends `probejs$$object$$${infer Suffix}` ? `probejs$$tag$$${Suffix}` : never
```

**Fix 2 — `public static get` inside interfaces in package files**:

Remove `public static get` / `public static set` lines from `interface` bodies in these files under `kubejs/probe/packages/generated-package/`:
- `appeng.thirdparty.fabric.d.ts` (line ~84)
- `com.electronwill.nightconfig.core.d.ts` (lines ~65–66, ~542–543)
- `com.telepathicgrunt.repurposedstructures.mixins.d.ts` (lines ~202, ~225)
- `dev.latvian.mods.kubejs.d.ts` (lines ~2096–2097, ~7492–7493, ~12318–12321)
- `io.redspace.ironslib.mixin.d.ts` (line ~5)
- `java.time.chrono.d.ts` (line ~61)
- `java.util.random.d.ts` (line ~9)
- `net.mehvahdjukaar.moonlight.core.d.ts` (line ~136)
- `net.minecraft.world.level.d.ts` (line ~40592)
- `vazkii.patchouli.mixin.client.d.ts` (line ~6)

These are ProbeJS bugs — `static` members are not valid inside TypeScript interface bodies. The class declarations below each interface already have the correct static methods, so removing them from the interface loses no meaningful type information.

### TypeScript Version Requirement

**Keep TypeScript on 5.x** (`^5.8.3`). ProbeJS generates types targeting TypeScript 5.x. TypeScript 6.x treats certain ProbeJS-generated patterns as hard parse errors that cannot be suppressed by `skipLibCheck`.

### How the Types Coexist

- `types/kubejs/**/*.d.ts` — hand-written stubs with simple types for the KubeJS API (used by source files for type-checking)
- `kubejs/probe/**/*.d.ts` — ProbeJS-generated full Java class types (provides completions for the entire mod API)
- `skipLibCheck: true` in tsconfig.json suppresses type-level declaration conflicts between the two sets of `.d.ts` files

## Neovim LSP Setup

`typescript-language-server` is already installed. Add to your nvim config:

```lua
require('lspconfig').ts_ls.setup({})
```

`tsconfig.json` is at the project root — `ts_ls` finds it automatically.
Completions on `ServerEvents`, `Item`, `Block` etc. work immediately from the type stubs.

## Naming Conventions

- Script files: `kebab-case.ts`
- Exported functions: `camelCase` prefixed with action — `registerXxx`, `onXxx`
- Custom item IDs: `roguelike:snake_case`
- Quest IDs in SNBT: sequential hex like `"1A2B3C4D"`

## Progression Gates

All dimension gates are enforced in `src/server/gates.ts`. Do NOT add gate logic
directly to dimension scripts — always go through the gates module.

The gate system works by:
1. Making the portal key item recipe require a custom crafting ingredient
2. That ingredient is only obtainable after the previous boss quest is completed
3. FTB Quests rewards the ingredient as a quest reward (or unlocks the recipe via stage)

## What You Will Write By Hand

The following are intentionally stubbed — these are your creative decisions:

| File / Area | What to fill in |
|-------------|----------------|
| `src/server/starter-kit.ts` | What items the player starts with |
| Each `*Events.recipes()` call | Specific item costs and recipe shapes |
| `kubejs/data/ftbquests/` | Quest descriptions, lore text, icons |
| `kubejs/assets/*/textures/gui/quests/` | Chapter background art |
| Gate item recipes | Balancing — what the keys cost to craft |
| Loot table additions | What custom items appear in chests |

## Commit Convention

```
feat: add overworld Catalyst recipe
fix: correct Ars Nouveau gate condition
chore: update FTB Quests chapter 2 structure
```

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
