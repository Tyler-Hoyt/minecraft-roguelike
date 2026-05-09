# Dimensional Scaling System — Implementation Plans

Five layers that together replace what Apotheotic Hostility would have done automatically. Each document is a standalone reference — read them in order for context, but implement them in whatever order makes sense for where you are in development.

---

## The layers

**[Layer 1 — L2H Dimension Floors](./layer-1-l2h-dimension-floors.md)**  
Paxi datapacks that set minimum mob level floors per dimension. This is what prevents a fresh player from walking into the Undergarden and finding trivially easy mobs. Uses `l2hostility_config/difficulty/` and `entity/` JSON files.

**[Layer 2 — Gem Drops via LootJS](./layer-2-gem-lootjs.md)**  
Runtime loot injection using LootJS. Adds bonus gem drops from mobs in each dimension. Works alongside Layer 3 — the datapack controls *what* gems can roll, this layer controls *how often* they drop.

**[Layer 3 — Apotheosis Datapacks](./layer-3-apotheosis-datapacks.md)**  
The main quality-scaling layer. Custom affix loot entries and gems with `constraints.dimensions` to gate higher rarities and purities behind dimensional progression. Lives entirely in Paxi JSON files, no KubeJS needed.

**[Layer 4 — Undergarden Gear Tuning](./layer-4-undergarden-gear.md)**  
KubeJS `ItemEvents.modification` to tune Cloggrum/Froststeel/Utherium stats so each tier feels meaningfully different. Mostly durability and attribute modifiers, with an optional Utherium set bonus.

**[Layer 5 — Optional Difficulty](./layer-5-optional-difficulty.md)**  
Two systems: the L2H Hostility Orb (already in game, just needs documenting in quests) and a KubeJS hardcore mode flag that applies persistent debuffs for players who want a harder run. Plus the Conqueror's Path FTB Quests chapter.

**[Apotheosis Gem & Affix Nerf](./apotheosis-gem-nerf.md)**  
Paxi datapack that overrides all Apotheosis gem and affix values to 35% of vanilla. Covers all 23 gems across core/overworld/nether/end directories, handles special cases (integer enchant levels, mob effect durations, structural bonuses), and outlines the affix phase as follow-up work.

---

## Implementation order

Layer 1 and Layer 3 are the highest impact and should go in together — L2H floors make the danger real, Apotheosis datapacks make the loot feel earned. Layer 2 is a quick add-on once Layer 3 is working. Layer 4 is something to tackle once you're in the game checking how Undergarden gear actually feels. Layer 5 can wait until the main chapters are solid.

---

## Shared infrastructure

Both Layer 1 and Layer 3 require Paxi to be configured. Add entries to `config/paxi/datapack_load_order.json`:

```json
{
  "loadOrder": ["hostility", "apotheosis-compat"]
}
```

The directory structure under `config/paxi/datapacks/` doesn't exist yet — you'll create it as you go.
