# Recipe Gates & Stage Flag System — Implementation Guide

This guide covers two complementary systems:
1. **Stage flags** — KubeJS NBT booleans on each player, granted by FTB Quests Command Rewards
2. **Recipe gates** — which mod recipes to block and what to replace them with, per dimension

---

## System 1: Stage Flags

### How it works

Stages are boolean flags stored in `player.persistentData` (persists through death and relog).
Each flag is a namespaced string key like `roguelike:stage_nether_complete`.

FTB Quests grants stages by running a KubeJS-registered command as a **Command Reward**.

### Create `src/server/stages.ts`

```typescript
// src/server/stages.ts
// Central definition of all progression stage flags.
// Grant stages from FTB Quests Command Rewards using /roguelike stage grant <stage>

export const STAGES = {
  OVERWORLD_COMPLETE:  'roguelike:stage_overworld_complete',
  UNDERGARDEN_ENTERED: 'roguelike:stage_undergarden_entered',
  ARS_NOUVEAU_T1:      'roguelike:stage_ars_nouveau_t1',
  ARS_NOUVEAU_T2:      'roguelike:stage_ars_nouveau_t2',
  NETHER_COMPLETE:     'roguelike:stage_nether_complete',
  AETHER_COMPLETE:     'roguelike:stage_aether_complete',
  AE2_ONLINE:          'roguelike:stage_ae2_online',
  TWILIGHT_COMPLETE:   'roguelike:stage_twilight_complete',
  DEEP_DARK_COMPLETE:  'roguelike:stage_deep_dark_complete',
} as const;

export type Stage = typeof STAGES[keyof typeof STAGES];

export function hasStage(player: $ServerPlayerKJS$$Interface, stage: Stage): boolean {
  return player.persistentData.getBoolean(stage);
}

export function grantStage(player: $ServerPlayerKJS$$Interface, stage: Stage): void {
  player.persistentData.putBoolean(stage, true);
}

export function revokeStage(player: $ServerPlayerKJS$$Interface, stage: Stage): void {
  player.persistentData.putBoolean(stage, false);
}

// ── Command registration (for FTB Quests Command Rewards) ───────────────────
// In FTB Quests, set the reward command to:
//   /roguelike stage grant roguelike:stage_nether_complete

ServerEvents.basicCommand('roguelike stage grant', (event) => {
  const stage = event.input.trim() as Stage;
  grantStage(event.player, stage);
  event.player.tell(`§a[Roguelike] Stage unlocked: ${stage}`);
});

ServerEvents.basicCommand('roguelike stage revoke', (event) => {
  const stage = event.input.trim() as Stage;
  revokeStage(event.player, stage);
  event.player.tell(`§c[Roguelike] Stage revoked: ${stage}`);
});

ServerEvents.basicCommand('roguelike stage check', (event) => {
  const stage = event.input.trim() as Stage;
  const value = hasStage(event.player, stage);
  event.player.tell(`§e[Roguelike] ${stage} = ${value}`);
});

// ── Auto-detect Undergarden entry ────────────────────────────────────────────
// Grants UNDERGARDEN_ENTERED the first time a player visits the dimension.
PlayerEvents.tick((event) => {
  const player = event.player;
  if (
    player.level.dimension === 'undergarden:undergarden' &&
    !hasStage(player, STAGES.UNDERGARDEN_ENTERED)
  ) {
    grantStage(player, STAGES.UNDERGARDEN_ENTERED);
    player.tell('§d[Roguelike] You have entered the Undergarden. New recipes are available.');
  }
});
```

### FTB Quests wiring

In each chapter, add a **Command Reward** to the milestone quest. The command runs as the player:

| Stage to grant | Quest to put it on | Chapter |
|---|---|---|
| `roguelike:stage_overworld_complete` | Defeat the overworld dungeon boss | 01_overworld |
| `roguelike:stage_ars_nouveau_t1` | Craft the Worn Notebook | 02_undergarden |
| `roguelike:stage_ars_nouveau_t2` | Craft the Apprentice Spellbook | 02_undergarden |
| `roguelike:stage_nether_complete` | Kill the Wither | 03_nether |
| `roguelike:stage_aether_complete` | Defeat the Slider | 04_aether |
| `roguelike:stage_ae2_online` | Build the ME Controller | 04_aether |
| `roguelike:stage_twilight_complete` | Complete the Twilight boss chain | 05_twilight |
| `roguelike:stage_deep_dark_complete` | Kill the Warden | 06_deepdark |

> `UNDERGARDEN_ENTERED` is auto-granted by the `PlayerEvents.tick` hook above — no FTB Quests reward needed.

### Using stages in event hooks

Stages are most useful for **events** (not recipes — those load at startup, before any player has a stage):

```typescript
// Block portal activation until prerequisite stage is met
BlockEvents.rightClicked('minecraft:obsidian', (event) => {
  const player = event.player;
  if (!hasStage(player, STAGES.UNDERGARDEN_ENTERED)) {
    event.cancel();
    player.tell('§c[Roguelike] You must explore the Undergarden before entering the Nether.');
  }
});

// Tooltip hint for locked items
ItemEvents.tooltip((event) => {
  event.addAdvanced('ars_nouveau:worn_notebook', (item, advanced, text) => {
    // Note: tooltip runs client-side, so stage check requires syncing to client
    // Simplest: always show the hint text (players won't have the item if locked)
    text.add(Component.translatable('roguelike.locked_undergarden').withStyle('gray'));
  });
});
```

> **Note on portal blocking:** KubeJS 7 doesn't have a direct "dimension change" cancel event. The most reliable approach is `BlockEvents.rightClicked` on the portal activation block (obsidian for Nether, gilded grass for Aether). Check with `/probejs dump` for the exact activator block IDs for each dimension mod.

---

## System 2: Recipe Gates by Dimension

The pattern for every blocked recipe is the same as `gates.ts`:
1. `e.remove({ output: 'mod:item' })` — remove the existing recipe
2. `e.shaped(...)` or `e.smelting(...)` — add a replacement that requires a dimension-tier material

The materials act as the "proof" that the player has reached that dimension. Recipe gates load at startup — they don't check player stages. Stages are for runtime event hooks only.

---

### Overworld — force progression before leaving

**`src/server/overworld.ts`**

```typescript
// Gate Ars Nouveau entry — player must find Cloggrum in the Undergarden first
e.remove({ output: 'ars_nouveau:worn_notebook' });
e.shaped('ars_nouveau:worn_notebook', [
  'AB',
], {
  A: 'minecraft:book',
  B: 'undergarden:cloggrum_ingot',  // only found in the Undergarden
});

// Gate Sophisticated Storage iron chest behind owning a backpack
// (encourages players to use Sophisticated Backpacks first)
e.remove({ output: 'sophisticatedstorage:iron_chest' });
e.shaped('sophisticatedstorage:iron_chest', [
  'AAA',
  'ABA',
  'AAA',
], {
  A: 'minecraft:iron_ingot',
  B: 'sophisticatedbackpacks:backpack',  // must already have a backpack
});
```

---

### Undergarden — Ars Nouveau gating

**`src/server/undergarden.ts`**

```typescript
// Ars Nouveau Source Gem — must smelt Cloggrum (the Undergarden ore)
e.remove({ output: 'ars_nouveau:source_gem' });
e.smelting('ars_nouveau:source_gem', 'undergarden:cloggrum_ingot', 0.8, 200);

// Tier 2 Spell Book — requires Source Gem + Forgotten Metal (second Undergarden ore)
e.remove({ output: 'ars_nouveau:apprentice_spell_book' });
e.shaped('ars_nouveau:apprentice_spell_book', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'ars_nouveau:source_gem',
  B: 'undergarden:forgotten_metal_ingot',
  C: 'ars_nouveau:worn_notebook',
});

// Tier 3 Spell Book — blocked until Aether chapter (see aether.ts)
e.remove({ output: 'ars_nouveau:archmage_spell_book' });
// The Aether-gated replacement is added in aether.ts
```

---

### Nether — Blood Magic, Forbidden Arcanus, Storage Drawers

**`src/server/nether.ts`**

```typescript
// Forbidden Arcanus — Stellarite Piece requires Ancient Debris (deep Nether mining)
e.remove({ output: 'forbidden_arcanus:stellarite_piece' });
e.shaped('forbidden_arcanus:stellarite_piece', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'minecraft:soul_sand',
  B: 'minecraft:blaze_rod',
  C: 'minecraft:ancient_debris',  // the real gate — only in deep Nether
});

// Blood Magic — first Blood Orb requires Nether Wart + Magma Cream
e.remove({ output: 'bloodmagic:weakbloodorb' });
e.shaped('bloodmagic:weakbloodorb', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'minecraft:nether_wart_block',
  B: 'minecraft:magma_cream',
  C: 'minecraft:gold_ingot',
});

// Storage Drawers Controller — gate behind Nether Gold (Nether-tier resource)
e.remove({ output: 'storagedrawers:controller' });
e.shaped('storagedrawers:controller', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'minecraft:nether_brick',
  B: 'minecraft:gold_ingot',
  C: 'minecraft:chest',  // tune: maybe require nether_star for harder gate
});
// Basic drawers (1x, 2x, 4x) are left ungated — they're fine pre-Nether
```

---

### Aether — AE2 and Malum

**`src/server/aether.ts`**

```typescript
// AE2 Charger — the first thing you build; gate behind Zanite (Aether gem)
e.remove({ output: 'ae2:charger' });
e.shaped('ae2:charger', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'aether:zanite_gemstone',
  B: 'aether:skyroot_planks',
  C: 'minecraft:iron_block',
});

// AE2 ME Controller — gate behind Gravitite (late Aether ore)
e.remove({ output: 'ae2:controller' });
e.shaped('ae2:controller', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'ae2:fluix_crystal',
  B: 'aether:gravitite_ingot',  // only from Aether — confirms late Aether progression
  C: 'minecraft:iron_block',
});

// Zanite → Fluix Crystal shortcut (so AE2 doesn't require overworld quartz hunting)
e.smelting('ae2:fluix_crystal', 'aether:zanite_gemstone', 1.0, 400);

// Malum Spirit Altar — requires Slider Trophy (FTB Quests reward on Slider kill)
e.remove({ output: 'malum:spirit_altar' });
e.shaped('malum:spirit_altar', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'aether:skyroot_planks',
  B: 'aether:zanite_gemstone',
  C: 'roguelike:slider_trophy',  // hard gate — must kill Slider
});

// Ars Nouveau Tier 3 — was removed in undergarden.ts, add the Aether-gated version
e.shaped('ars_nouveau:archmage_spell_book', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'aether:zanite_gemstone',
  B: 'ars_nouveau:source_gem',
  C: 'roguelike:slider_trophy',  // Slider kill confirms Aether chapter complete
});
```

---

### Twilight Forest — AE2 endgame + Ars T3 ceiling

**`src/server/twilight.ts`**

The custom `roguelike:twilight_boss_material` item needs to be registered in `src/startup/index.ts`
and rewarded by FTB Quests on completion of the Twilight boss chain.

```typescript
// AE2 Quantum Ring — powerful; gate behind Twilight boss chain
e.remove({ output: 'ae2:quantum_ring' });
e.shaped('ae2:quantum_ring', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'ae2:fluix_crystal',
  B: 'ae2:singularity',
  C: 'roguelike:twilight_boss_material',  // only from FTB Quests reward
});

// AE2 Pattern Provider — gate here; unlocks autocrafting
e.remove({ output: 'ae2:pattern_provider' });
e.shaped('ae2:pattern_provider', [
  'ABA',
  'BCB',
  'ABA',
], {
  A: 'ae2:fluix_crystal',
  B: 'ae2:printed_engineering_processor',
  C: 'roguelike:twilight_boss_material',
});
```

---

### Deep Dark — Warden gear

**`src/server/deepdark.ts`**

`roguelike:heart_of_the_warden` is a custom drop added via `loot-tables.ts`.

```typescript
// Warden Heart Chestplate — capstone Deep Dark armor piece
e.shaped('roguelike:warden_heart_chestplate', [
  'ABA',
  'BCB',
  'BAB',
], {
  A: 'minecraft:netherite_ingot',
  B: 'minecraft:echo_shard',
  C: 'roguelike:heart_of_the_warden',  // custom Warden drop
});

// Sculk Pickaxe — end-tier tool
e.shaped('roguelike:sculk_pickaxe', [
  'AAA',
  ' B ',
  ' B ',
], {
  A: 'minecraft:echo_shard',
  B: 'roguelike:heart_of_the_warden',
});

// AE2 Pattern Provider (if not already blocked in twilight.ts — pick one chapter)
// If blocked here instead: requires heart_of_the_warden as center piece
```

---

## Custom Item Registration

Any `roguelike:` custom item used as a recipe ingredient must be registered in `src/startup/index.ts`:

```typescript
// src/startup/index.ts
StartupEvents.registry('item', (event) => {
  event.create('roguelike:heart_of_the_warden')
    .displayName('Heart of the Warden')
    .maxStackSize(1);

  event.create('roguelike:twilight_boss_material')
    .displayName('Twilight Essence')
    .maxStackSize(16);

  // ... other custom items
});
```

---

## Test Coverage

Add `tests/server/stages.test.ts`:

```typescript
import { describe, it, expect, vi } from 'vitest';
import { hasStage, grantStage, revokeStage, STAGES } from '../../src/server/stages';

function makeMockPlayer() {
  const data: Record<string, boolean> = {};
  return {
    persistentData: {
      getBoolean: (key: string) => data[key] ?? false,
      putBoolean: (key: string, value: boolean) => { data[key] = value; },
    },
    tell: vi.fn(),
    level: { dimension: 'minecraft:overworld' },
  };
}

describe('stage helpers', () => {
  it('returns false for a stage that has not been granted', () => {
    const player = makeMockPlayer();
    expect(hasStage(player, STAGES.NETHER_COMPLETE)).toBe(false);
  });

  it('grantStage sets the flag to true', () => {
    const player = makeMockPlayer();
    grantStage(player, STAGES.NETHER_COMPLETE);
    expect(hasStage(player, STAGES.NETHER_COMPLETE)).toBe(true);
  });

  it('revokeStage sets the flag to false', () => {
    const player = makeMockPlayer();
    grantStage(player, STAGES.NETHER_COMPLETE);
    revokeStage(player, STAGES.NETHER_COMPLETE);
    expect(hasStage(player, STAGES.NETHER_COMPLETE)).toBe(false);
  });

  it('stages are independent — granting one does not affect another', () => {
    const player = makeMockPlayer();
    grantStage(player, STAGES.NETHER_COMPLETE);
    expect(hasStage(player, STAGES.AETHER_COMPLETE)).toBe(false);
  });
});
```
