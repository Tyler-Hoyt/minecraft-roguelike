# Layer 2 — Gem Drops via LootJS

This layer is a supplement to Layer 3 (the Apotheosis datapacks). The datapack approach handles *which gems exist and where they can spawn* — this layer handles *injecting bonus gem drops* into mob kill and chest loot at runtime, based on what dimension the player is in.

The distinction matters: Apotheosis datapacks control the gem pool (what gems can roll and at what purity). LootJS lets you add raw drops — "this mob in this dimension has a 15% chance to also drop a gem of this type." They work together.

---

## Important: how Apotheosis gems actually work in 1.21

Before writing any LootJS code here, understand this:

All Apotheosis gems use a **single item ID: `apotheosis:gem`**. The gem type and purity are stored as NeoForge data components, not in the item ID. There are no separate `apotheosis:flawed_gem` or `apotheosis:cracked_topaz` IDs — it's always `apotheosis:gem` with component data attached.

This has two practical consequences:
1. You can't filter "remove gems above a certain purity" easily via item ID matching — you'd need to inspect the component data, and LootJS may or may not expose that in 1.21.1.
2. You *can* give a specific gem by specifying it with NBT/components in your `LootEntry.of()` call, but that requires knowing the component format.

The safest approach for this layer: **only add gem drops, don't try to remove them**. The Apotheosis datapack layer controls what can roll in each dimension's pool naturally. Trust that system and use LootJS here purely for bonus injection.

---

## File location

```
src/server/loot/dimension-scaling.ts
```

Register it at the bottom with `LootJS.modifiers(...)`. Keep it separate from the other loot files — dimension scaling is its own concern and will grow as you add dimensions.

---

## Basic structure

```typescript
// src/server/loot/dimension-scaling.ts

function addDimensionGemDrops(event: LootModificationEventJS): void {
  // Undergarden — flawed/normal purity gems start dropping from mobs
  event
    .addEntityLootModifier('#minecraft:is_hostile')
    .matchDimension('undergarden:undergarden')
    .addLoot(
      LootEntry.of('apotheosis:gem')
        .when(condition => condition.randomChance(0.08))
        .limitCount(1, 1)
    );
}

LootJS.modifiers(addDimensionGemDrops);
```

That example is intentionally simple. The gem that drops will be rolled from whatever Apotheosis determines for the current dimension's pool — if your Layer 3 datapacks are set up correctly, that means it'll be a flawed/normal purity gem in the Undergarden. LootJS is just adding the drop trigger; Apotheosis handles the gem selection.

---

## Dimension matching

LootJS has `.matchDimension()` on loot modifiers. Pass the full dimension registry key:

```typescript
.matchDimension('undergarden:undergarden')
.matchDimension('minecraft:the_nether')
.matchDimension('minecraft:the_end')
```

For the Deep Dark specifically — it's a biome inside the overworld, not a separate dimension. You can't use `.matchDimension()` for it. Use a biome check instead:

```typescript
event
  .addEntityLootModifier('#minecraft:is_hostile')
  .matchBiome('minecraft:deep_dark')
  .addLoot(...)
```

---

## Drop rates per dimension

These are starting points. Tune after playtesting — if gems feel too common, the affix system stops feeling special.

| Dimension | Drop Chance | Notes |
|-----------|------------|-------|
| Overworld | No injection needed | Apotheosis base tables handle it |
| Undergarden | 8% per hostile mob | Low enough to stay exciting |
| Nether | 10% | Slightly more plentiful |
| Aether | 12% | Mid-game, should feel rewarding |
| Twilight Forest | 12% | Boss drops are the main source here |
| Deep Dark | 15% (biome match) | Dangerous enough to justify better rates |
| The End | 5% regular mobs, 100% Dragon | Dragon should always drop something |

---

## Boss-specific drops

For named bosses you want to guarantee a drop, target them specifically rather than via the hostile mob tag. This prevents the "I killed 100 regular mobs and got nothing good" feeling at boss-tier encounters.

```typescript
// Rotspawn always drops a gem
event
  .addEntityLootModifier('undergarden:rotspawn')
  .addLoot(
    LootEntry.of('apotheosis:gem').limitCount(1, 2)
  );
```

Stack this with the dimension filter if you want — though if Rotspawn only exists in the Undergarden, it's redundant.

---

## Rune drops

The entity-tables.ts already has a note that each dimension boss should drop rune fragments. Wire that up here too, since you're already adding boss-specific drops:

```typescript
event
  .addEntityLootModifier('undergarden:rotspawn')
  .addLoot(
    LootEntry.of('roguelike:undergarden_rune_fragment')
      .limitCount(1, 4)
  );
```

Keep boss rune drops separate from the ambient mob gem drops. The rune economy depends on bosses being the main source.

---

## What NOT to do here

Don't try to use LootJS to remove high-purity gems from the overworld. You'd need to read the data component off each `apotheosis:gem` item, which isn't straightforward in LootJS's current API. More importantly, vanilla Apotheosis already controls what purity rolls in what context via its own system. If the datapack layer (Layer 3) is set up right, you don't need to strip anything.

Don't add too many drop sources. If every mob in every dimension drops gems regularly, the gem cutting/upgrading system loses meaning. The goal is that gems feel like a meaningful find, not vendor trash.

---

## Testing

The simplest way to test: go to the dimension, kill 20-30 mobs, check what dropped. Make sure gems are appearing at the expected rate and that their purity matches what your Layer 3 datapacks specify. If gems are dropping but always at `cracked` purity in the Undergarden, your Layer 3 dimension constraints aren't working yet.

You can also use `/loot give @s loot <entity_id>` to trigger loot table rolls in creative mode without killing anything.
