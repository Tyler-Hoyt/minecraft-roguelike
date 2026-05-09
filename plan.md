# Roguelike Dimensions — Modpack Plan

> **Platform:** NeoForge 1.21.1  
> **Quest Book:** FTB Quests  
> **Scripting:** KubeJS 7 (TypeScript via this repo)
> **Active Focus:** Stages 1–2 (Overworld → Undergarden)

## Progress

| Stage | Status | Focus |
|-------|--------|-------|
| 0 | ✅ Done | Foundation — project structure, stubs, FTB Quests shells |
| 1 | 🔧 In Progress | Overworld — starter kit, Apotheosis gate, quest text |
| 2 | 🔧 In Progress | Undergarden — Ars Nouveau gates, Cloggrum bridge, quest text |
| 3 | ⬜ Pending | Nether — gating, Forbidden Arcanus |
| 4 | ⬜ Pending | Aether — AE2, Malum |
| 5 | ⬜ Pending | Twilight Forest |
| 6 | ⬜ Pending | Deep Dark — Warden gear, sculk tools |
| 7 | ⬜ Pending | The End — Dragon egg, final crafting |

## Dimensional Progression

```
[Overworld]
    │  Complete Apotheosis Frontier Gateway boss → receive Catalyst via FTB Quest reward
    ▼
[Undergarden]  ←── Ars Nouveau unlocked here via Cloggrum
    │  defeat Rotspawn boss → advance to Nether quest
    ▼
[Nether]  ←── Forbidden Arcanus
    │  kill Wither → craft Gilded Stone
    ▼
[Aether]  ←── Malum, AE2 comes online
    │  defeat Slider → craft Dimensional Lens
    ▼
[Twilight Forest]  ←── AE2 endgame, Ars Nouveau T3
    │  complete boss chain → craft Echo Key
    ▼
[Deep Dark]  ←── Warden gear, stealth
    │  kill Warden → unlock End Portal quest
    ▼
[The End]  ←── Dragon, End Cities, final craft
```

## Installed Mods (confirmed from CurseForge instance)

> **Source of truth:** `~\curseforge\minecraft\Instances\minecraft-roguelike\minecraftinstance.json`

### Core Framework
| Mod | Purpose |
|-----|---------|
| KubeJS + KubeJS Tweaks | Custom scripting, recipe tweaks, progression gates |
| KubeJS Ars Nouveau / Curios | KubeJS integration addons |
| LootJS | Loot table modifiers (KubeJS addon) |
| FTB Quests + Teams + Library | Quest book and team support |
| Patchouli | In-world lore books |
| ProbeJS | In-game type completions |
| Paxi | Loads datapacks from `config/paxi/datapacks/` |

### Dimensions
| Mod | Dimension | Gate Tier | Installed |
|-----|-----------|-----------|-----------|
| The Undergarden | Undergarden | 1 — early | ✅ |
| The Aether | Aether | 3 — mid-late | ❌ not yet |
| Twilight Forest | Twilight Forest | 4 — late | ❌ not yet |
| Deeper and Darker | Deep Dark | 5 — end game | ❌ not yet |
| Vanilla | The End | 6 — final | ✅ |

### Exploration & Dungeons (all installed ✅)
- YUNG's Better Dungeons / Mineshafts / Strongholds
- Dungeon Crawl
- Dungeons and Taverns
- Repurposed Structures (+ Better Dungeons / Strongholds compat datapacks)
- When Dungeons Arise + WDA Loot Tweaks
- Mowzie's Mobs
- Regions Unexplored
- Sparse Structures
- Spelunkery *(manually installed — not tracked in minecraftinstance.json)*
- Tectonic (terrain)
- Geophilic (biome overhauls)

### Storage (Progressive)
| Mod | Unlocked | Installed |
|-----|----------|-----------|
| Sophisticated Backpacks | Start | ✅ |
| Sophisticated Storage + Sorter | Overworld | ✅ |
| Storage Drawers | Nether | ❌ not yet |
| Applied Energistics 2 | Aether | ❌ not yet |

### Magic & Enchanting (Progressive)
| Mod | Unlocked | Installed |
|-----|----------|-----------|
| Apotheosis + Apothic suite (Enchanting, Attributes, Spawners) | Overworld | ✅ |
| Ars Nouveau | Undergarden | ✅ |
| Forbidden and Arcanus | Nether | ❌ not yet |
| Malum | Aether | ❌ not yet |

### Difficulty Scaling (all installed ✅)
- L2 Hostility — dynamic mob difficulty scaling
- L2 Complements — L2 integration extras
- L2 Library — shared library
- Boss Refreshed — enhanced boss encounters
- Pufferfish's Skills + Skills Mastery Reimagined — player skill trees
- Enhanced AI — smarter mob behaviors

### Combat (all installed ✅)
- Better Combat (animations, dual wield)
- Simply Swords (halberds, rapiers, katanas, etc.)
- Paragliders (stamina + gliding)
- GraveStone (death system)

### UI / QoL (all installed ✅)
- EMI (recipe viewer), Jade (item tooltips), AppleSkin, Better Tooltips
- Xaero's Minimap + World Map
- FancyMenu, Lootr (per-player loot), Quark
- Colorful Hearts, XP Hearts, Max Health Fix

### Performance (all installed ✅)
- Sodium, BadOptimizations, FerriteCore, ModernFix, Entity Culling, ImmediatelyFast, FastSuite, Chloride
- ✅ **Noisium** installed (`noisium-neoforge-2.7.0`) — faster worldgen noise
- ✅ **Dynamic FPS** installed (`dynamic-fps-3.11.4`) — reduces GPU load when unfocused
- ⚠️ **Embeddium is removed** — it conflicted with Sodium (crash 2026-05-07). Still listed in CurseForge install log — risk of re-install on next CurseForge pack sync. Remove via CurseForge UI.

### KubeJS Scripts

```
src/server/
├── starter-kit.ts      ← First-spawn kit ✅
├── stages.ts           ← Progression stage flags + commands ✅ (⚠️ portal block bug)
├── gates.ts            ← Dimension gate recipe enforcement (⚠️ Eye of Ender issue)
├── overworld.ts        ← Apotheosis tweaks, Ars Nouveau pre-gate ✅
├── undergarden.ts      ← Ars Nouveau unlock, Cloggrum bridge ✅
├── recipes.ts          ← Armor progression recipes, jukebox upgrade removals ✅
└── loot-tables.ts      ← Spelunkery replacements, Dungeon Crawl rolls + Ars loot, limiter ⚠️ (rolls commented out)
```

> `nether.ts`, `aether.ts`, `twilight.ts`, `deepdark.ts`, `end.ts`, `ae2.ts` — not yet added.

## Paxi Datapacks (`config/paxi/datapacks/`)

Paxi loads JSON datapacks before world creation, making it the right place for **worldgen config** that KubeJS cannot touch.

> ⚠️ **The `datapacks/` directory is currently EMPTY.** The status entries below are **planned, not done.**
> Structure spacing is currently handled only by `sparsestructures.json5` (global factor 1), which means WDA, YUNG's, DC, and village spacing customization via Paxi has never been applied.

| Datapack | Status | Purpose |
|----------|--------|---------|
| `structures` | ❌ Not created | Structure spacing — Dungeon Crawl, When Dungeons Arise, Villages, Ancient City, Woodland Mansions |
| `hostility` | ❌ Not created | L2Hostility dimension/zone-specific difficulty overrides |
| `compat` | ❌ Not created | Apotheosis enchanting_stats for modded shelves |

### KubeJS vs Datapack — what goes where

| Config Type | Tool | Notes |
|-------------|------|-------|
| Recipe add/remove | KubeJS `ServerEvents.recipes` | ✅ already used |
| Loot table modifiers | KubeJS + LootJS | ✅ already used |
| Item/block/entity tags | KubeJS `ServerEvents.tags` | ✅ already used |
| Worldgen structure spacing | **Paxi datapack** | KubeJS cannot touch worldgen |
| Apotheosis enchanting_stats (modded shelves) | **Paxi datapack JSON** | `data/apotheosis/enchanting_stats/` |
| Curios slot definitions | **Paxi datapack JSON** | `data/curios/curios/slots/` |
| Mod-specific JSON configs (L2Hostility, etc.) | **Paxi datapack** | Mod must be installed |

### Apotheosis Enchanting Stats (TODO)
RAD3 ships patches to register modded blocks as Apotheosis enchanting shelves. The following blocks from our installed mods should get patches in a new `compat` paxi datapack:
- Amethyst cluster variants (`minecraft:amethyst_cluster`) — RAD3 has this
- Soul-touched sculk shelf (if Deeper and Darker adds one)

Create `config/paxi/datapacks/compat/data/apotheosis/enchanting_stats/` and port the relevant JSONs from RAD3's `rad3-compat` datapack, filtering to only mods we have installed.

## FTB Quests Chapters

```
config/ftbquests/quests/chapters/
├── 01_overworld.snbt   ← 14 quests, missing all titles + descriptions
├── 02_undergarden.snbt ← 5 quests, missing all titles, descriptions, deps
├── 03_nether.snbt
├── 04_aether.snbt
├── 05_twilight.snbt    ← broken TF item refs (TF installed but icons may break)
├── 06_deepdark.snbt
└── 07_end.snbt
```

## Gate Items (KubeJS enforced)

| Gate | Mechanism | Requires |
|------|-----------|---------|
| → Undergarden | `undergarden:catalyst` is quest-only (vanilla recipe removed in `gates.ts`) | FTB Quest reward after Apotheosis Frontier Gateway boss |
| → Nether | Quest flag + `/roguelike stage grant` command reward | Rotspawn kill + Ars Nouveau T1 quest chain |
| → Aether | `roguelike:gilded_stone` (recipe TBD, requires Runes) | Wither kill |
| → Twilight Forest | `roguelike:dimensional_lens` (recipe TBD, requires Runes) | Aether Slider kill |
| → Deep Dark | `roguelike:echo_key` (recipe TBD, requires Runes) | Late dim boss chain complete |
| → The End | Quest flag unlock | Warden kill |

## Open Decisions

- [X] **Pack name and icon** — no decision yet
- [ ] **Tune recipe costs** for gate items (Gilded Stone, Dimensional Lens, Echo Key)
- [ ] **Chapter background art** — 1920×1080 PNG per dimension
- [ ] **Quest lore text** — final wording per chapter (drafts below)
- [ ] **Rune economy** — confirm 4 fragments per tier vs different count
- [X] **Waystones** — add mod or use FTB Teams home point system
- [X] **Farmer's Delight** — add food progression or keep vanilla food
- [ ] **Boss content** — Cataclysm vs Bosses of Mass Destruction vs both

---

## 🔥 DIMENSIONAL SCALING SYSTEM — Apotheosis × L2 Hostility Sync

> **Context:** Apotheotic Hostility (the bridge mod that links L2H mob level to Apotheosis affix rarity) has no 1.21.1 NeoForge release. This section documents a manual sync approach using the tools available: L2H datapacks, Apotheosis datapacks, LootJS, and KubeJS.

### The Core Problem

Without Apotheotic Hostility:
- **L2 Hostility** scales mob health/damage/traits based on player kill-count + distance from spawn + `dimensionFactor`
- **Apotheosis** independently randomizes affix rarity and gem quality from its own weighted tables
- Result: a level 200 Undergarden mob drops the same quality affix gear as a level 2 overworld zombie

The goal is to re-create the quality escalation manually, per dimension, so loot quality tracks dimensional danger.

---

### Architecture — 5 Layers

#### Layer 1: L2 Hostility — Dimension Floors (Paxi Datapack)

**Why:** The `dimensionFactor = 2` in `l2hostility-server.toml` multiplies existing player-level-based mob levels, but it does NOT set a minimum. A new player jumping through a gate with player level 5 still meets Undergarden mobs at ~level 10, which is trivially easy. We need a floor.

**How (verified schema):** L2H reads two datapack config types:
- `data/{ns}/l2hostility_config/entity/{name}.json` — global per-entity configs (`enableEntitySpecificDatapack`)
- `data/{ns}/l2hostility_config/difficulty/{name}.json` — per-dimension configs with `levelMap` (difficulty formula per dim) and `levelDefaultTraits` (entity overrides scoped to a dimension)

For setting a dimension-wide mob level floor, the correct approach is a **difficulty config** with `levelDefaultTraits` entries for each entity type, using the `minSpawnLevel` field (NOT `minimumLevel` — that name does not exist).

**Implementation:**
- Create `config/paxi/datapacks/hostility/data/roguelike/l2hostility_config/difficulty/undergarden.json`
- Use `levelMap` to set a stronger base difficulty formula for `undergarden:undergarden`
- Use `levelDefaultTraits` to pin `minSpawnLevel: 80` for hostile mobs in the Undergarden
- Specific boss mobs (rotspawn) get their own `entity/` config with a higher `minSpawnLevel`

**Verified field names (from L2H 1.21 source):**
- Minimum level field: `minSpawnLevel` (int, default 0)
- `entities` accepts a single string or array of entity type IDs
- Entity config list entries merge with `COLLECT` — multiple files append, they don't overwrite

**L2H Config Tuning** (`l2hostility-server.toml`):
- Current `dimensionFactor = 2` — consider raising to `3` once the floor is set, so the **ceiling** also grows
- `defaultLevelBase = 2`, `defaultLevelVar = 4.0` — this means overworld mobs spawn level 2–6, which is correct for the start
- `killsPerLevel = 50` — player levels up every 50 kills; by the time they reach the Undergarden gate (Apotheosis boss + quests), they should be level 30–60, meaning Undergarden floor of 80 is a meaningful threat

**Dimension floor targets** (full chain, using `levelMap.base` + `minSpawnLevel` in `levelDefaultTraits`):
| Dimension | Gate Boss | Est. Player Level | `levelMap.base` | `minSpawnLevel` | Boss `minSpawnLevel` |
|-----------|-----------|-------------------|-----------------|-----------------|----------------------|
| Overworld | — (start) | 0–60 | 20 (default) | 1 | varies |
| Undergarden | Apotheosis Frontier Gateway | ~50–80 | 60 | 80 | 100 (rotspawn) |
| Nether | Rotspawn | ~150–200 | 160 | 200 | 250 (Wither) |
| Aether | Wither | ~300–400 | 350 | 400 | 450 (Slider) |
| Twilight Forest | Aether Slider | ~500–600 | 550 | 600 | 700 (TF boss chain) |
| Deep Dark | TF boss chain | ~700–800 | 750 | 800 | 900 (Warden) |
| The End | Warden | ~900+ | 900 | 1000 | 1100 (Dragon) |

L2H's `maxMobLevel = 5000` and `maxPlayerLevel = 999` both accommodate this range. The `dimensionFactor` multiplies ON TOP of the floor for returning high-level players.

---

#### Layer 2: Apotheosis Gem Tier Gating (LootJS)

**Why:** Apotheosis gems range from Burned (worst) to Pristine (best). Currently, any tier can drop anywhere. Gating gem tiers per dimension is the primary "loot sync" lever.

**How (verified schema):** LootJS `addEntityLootModifier` can check `context.level.dimension`. The `apotheosis:gem` item is a **single item ID** — purity and type are stored as NeoForge data components. This means we cannot filter by item ID substring; we need to check if the item is `apotheosis:gem` and then examine its components.

Alternatively (cleaner): rather than stripping gems, we **add** dimension-appropriate gem drops on top of the existing system — ensuring better gems are more plentiful in later dimensions. The base loot tables already give some gems; we augment them.

**Verified Gem Purity Tiers** (from Apotheosis 1.21 source — `Purity.java`):
| Serialized Name | Color | Our Use |
|---|---|---|
| `cracked` | Gray | Overworld tier 1 |
| `chipped` | Green | Overworld tier 2 |
| `flawed` | Blue | Undergarden tier 1 |
| `normal` | Purple | Undergarden tier 2 |
| `flawless` | Orange | Nether–Aether |
| `perfect` | Rainbow | Deep Dark–End |

Note: Gems use a single item `apotheosis:gem` with data components — there is no per-purity item ID.

**Gem tier targets** (full chain — using verified purity names from `Purity.java`):
| Dimension | Purity Floor | Purity Ceiling | Notes |
|-----------|-------------|----------------|-------|
| Overworld | cracked | chipped | Low-quality gems from mob drops |
| Undergarden | flawed | normal | Mid-quality unlocked |
| Nether | normal | flawless | Better quality starts dropping |
| Aether | flawless | flawless | Consistent high-quality |
| Twilight Forest | flawless | perfect | Boss drops can yield perfect |
| Deep Dark | perfect | perfect | End-tier exclusively |
| The End | perfect | perfect | Dragon/End City drops |

**Implementation detail:** All gems share the single item ID `apotheosis:gem` — purity is a NeoForge data component, not an item ID suffix. LootJS filtering must check the data component value, or use Apotheosis's own `min_purity` field in gem datapacks to control what drops where (cleaner approach). The gem datapack approach (Layer 3 Apotheosis datapacks) handles this more cleanly than LootJS filtering.

---

#### Layer 3: Affix Rarity + Gem Scaling (Apotheosis Datapacks via Paxi)

**Why:** Apotheosis affix loot entries and gem definitions both support dimension constraints natively via `"constraints": { "dimensions": [...] }`. This is the cleanest way to sync loot quality to dimension — no LootJS needed for this layer.

**Verified schema (from Apotheosis 1.21 source — `AffixLootEntry.java`, `Gem.java`, `Constraints.java`):**

```json
// affix_loot_entry example for Undergarden
{
    "type": "apotheosis:affix_loot_entry",
    "stack": { "id": "minecraft:iron_sword", "count": 1 },
    "weights": {
        "ascent":   { "quality": 2.0, "weight": 30 },
        "summit":   { "quality": 2.0, "weight": 20 },
        "pinnacle": { "quality": 2.0, "weight": 10 }
    },
    "constraints": {
        "dimensions": ["undergarden:undergarden"]
    },
    "rarities": ["apotheosis:rare", "apotheosis:epic"]
}
```

**World tier names** (used as `weights` keys — NOT the same as affix rarities):
`haven` | `frontier` | `ascent` | `summit` | `pinnacle`

**Affix rarity IDs:** `apotheosis:common` | `apotheosis:uncommon` | `apotheosis:rare` | `apotheosis:epic` | `apotheosis:mythic`

**How:** Add to `config/paxi/datapacks/apotheosis-compat/`:
- `data/roguelike/affix_loot_entries/undergarden_weapons.json` — dimension-constrained entries with `rarities: ["apotheosis:rare", "apotheosis:epic"]`
- `data/roguelike/affix_loot_entries/undergarden_armor.json` — same for armor
- `data/roguelike/gems/undergarden/` — custom gems with `constraints.dimensions: ["undergarden:undergarden"]` and `min_purity: "flawed"`
- Same pattern for each future dimension

**Affix rarity targets by dimension** (controlled via `rarities` array in affix_loot_entry and `min_purity` in gems):
| Dimension | Allowed Rarities | Gem `min_purity` |
|-----------|-----------------|-----------------|
| Overworld | common, uncommon, rare | cracked |
| Undergarden | rare, epic | flawed |
| Nether | rare, epic, mythic | normal |
| Aether | epic, mythic | flawless |
| Twilight Forest | epic, mythic | flawless |
| Deep Dark | mythic | perfect |
| The End | mythic | perfect |

> The vanilla Apotheosis entries (no constraints) already provide common/uncommon drops everywhere. Our dimension-constrained entries **add** higher-rarity options on top — they don't replace the base system.

---

#### Layer 4: Undergarden Gear Attribute Tuning (KubeJS)

**Why:** The armor-recipes.ts already defines the Undergarden tier path (Cloggrum → Froststeel → Utherium). However, the vanilla Undergarden mod stats may not feel like a clear upgrade over iron. We need the stats to justify the dimension transition.

**Target stat philosophy:**
- **Cloggrum**: Iron-tier protection, 50% more durability (makes it worth switching from iron as your "safe" set)
- **Froststeel**: ~70% of diamond protection, diamond-tier durability (bridge set, pairs well with early Ars enchants)
- **Utherium**: ~90% of diamond protection + resistance effect (near-endgame, pairs with affix system)

**How:** KubeJS `ItemEvents.modification` can set attribute overrides for any item, including modded ones. Test with:
```typescript
// src/server/dimensions/undergarden-attributes.ts
ItemEvents.modification('undergarden:cloggrum_chestplate', (event) => {
  event.setMaxDamage(600); // iron chestplate is 240
});
```
If `ItemEvents.modification` cannot set armor defense values on modded items (limitation of KubeJS in 1.21.1), the fallback is to rely on the affix + enchant system to compensate for the stat gap, and instead use quest text to explicitly frame what each tier is for.

**Undergarden mod stat baseline (from default Undergarden values):**
- Cloggrum: comparable to iron (defensively), just rare
- Froststeel: between iron and diamond
- Utherium: approaches diamond+
This means the vanilla stats are *roughly* correct — the main gap is clearly communicating to players WHY Cloggrum is better than keeping iron. Quest text + FTB Quests tooltips can handle this.

---

#### Layer 5: Optional Harder Mode (Player Choice)

**Existing systems to leverage:**
1. **L2H Hostility Orbs** — already in game (`allowHostilityOrb = true`). Players collect these from boss kills to voluntarily raise their LOCAL zone difficulty. No code needed.
2. **L2H Adaptive Leveling** — `enableAdaptiveLeveling = true`. Mobs scale up if player level is much higher, preventing over-leveling.

**New: Conqueror's Path FTB Quests Chapter** (optional, unlocked from Overworld)
A chapter with high-difficulty optional challenges. Rewards are cosmetic/quality-of-life, not power:
| Quest | Challenge | Reward |
|-------|-----------|--------|
| Iron Giant | Kill the Apotheosis boss wearing only iron armor | 5 Overworld Rune Fragments |
| No Quarter | Reach Undergarden without dying once | Exclusive "Conqueror" title |
| Speed Run | Enter Undergarden within 2 in-game days | 3 Heart Containers |
| Blind Run | Turn off Xaero's minimap, find a WDA structure | Rare Apotheosis gem |
| Max Hostility | Reach L2H player level 100 | 2 Undergarden Rune Fragments (pre-gate reward) |

**KubeJS opt-in difficulty flag:**
```typescript
// /roguelike difficulty hardcore — toggleable persistent mode
// Applies: +20% mob damage received, -30% passive regen
// Tracked via player.persistentData
// Reward: bonus rune drops for players running this mode
```

---

### Implementation Files Summary

| File | Type | Purpose |
|------|------|---------|
| `config/paxi/datapacks/hostility/data/roguelike/l2hostility_config/difficulty/undergarden.json` | Paxi Datapack | `levelMap` difficulty formula + `levelDefaultTraits` with `minSpawnLevel: 80` for Undergarden mobs |
| `config/paxi/datapacks/hostility/data/roguelike/l2hostility_config/entity/rotspawn.json` | Paxi Datapack | `minSpawnLevel: 100` for the Rotspawn boss specifically |
| `config/l2configs/l2hostility-server.toml` | Config Edit | Tune `dimensionFactor` (currently 2, consider 3), review `killsPerLevel` |
| `config/paxi/datapacks/apotheosis-compat/data/roguelike/affix_loot_entries/undergarden_weapons.json` | Paxi Datapack | Undergarden-only affix entries: `rarities: ["apotheosis:rare","apotheosis:epic"]`, `constraints.dimensions: ["undergarden:undergarden"]` |
| `config/paxi/datapacks/apotheosis-compat/data/roguelike/affix_loot_entries/undergarden_armor.json` | Paxi Datapack | Same for armor slots |
| `config/paxi/datapacks/apotheosis-compat/data/roguelike/gems/undergarden/` | Paxi Datapack | Custom gems constrained to Undergarden with `min_purity: "flawed"` |
| `src/server/loot/dimension-scaling.ts` | KubeJS (new) | LootJS bonus gem injection per dimension (supplements the datapack approach) |
| `src/server/dimensions/undergarden-attributes.ts` | KubeJS (new) | `ItemEvents.modification` for Cloggrum/Froststeel/Utherium stats |
| `src/server/stages.ts` | KubeJS (edit) | Add HARDCORE_MODE stage flag |
| FTB Quests (in-game editor) | SNBT | Conqueror's Path chapter |

### Sync Point — The Key Insight

The manual "Apotheotic Hostility" bridge is:
1. **L2H floors** ensure Undergarden mobs are always dangerous (Layer 1)
2. **LootJS dimension checks** ensure Undergarden mob drops are always quality-appropriate (Layer 2 + 3)
3. **The gate system** (gates.ts + FTB Quests) ensures players only enter the Undergarden with appropriate gear

This creates a **soft sync**: you don't need L2H level to directly control Apotheosis rarity; instead, the dimension itself is the proxy for "how far progressed" the player is, and we control loot quality at the dimension level.

### Verified Schemas (research complete ✅)

**L2 Hostility (from `Minecraft-LightLand/L2Hostility` 1.21 branch):**
- Datapack path: `data/{ns}/l2hostility_config/difficulty/{name}.json`
- Minimum level field: `minSpawnLevel` (int) inside `levelDefaultTraits[].minSpawnLevel`
- Dimension-scoped entity floors go in `levelDefaultTraits` keyed by dimension ID
- Separate boss entity config: `data/{ns}/l2hostility_config/entity/{name}.json` with `list[].minSpawnLevel`
- Multiple files merge with `MAP_COLLECT` (append) for `levelDefaultTraits`

**Apotheosis (from `Shadows-of-Fire/Apotheosis` 1.21 branch):**
- Affix loot entry path: `data/{ns}/affix_loot_entries/{name}.json`, type: `"apotheosis:affix_loot_entry"`
- Dimension constraints **fully supported**: `"constraints": { "dimensions": ["undergarden:undergarden"] }`
- Biome constraints also supported: `"constraints": { "biomes": "#c:is_snowy" }`
- World tiers (weight keys): `haven`, `frontier`, `ascent`, `summit`, `pinnacle`
- Affix rarities: `apotheosis:common`, `apotheosis:uncommon`, `apotheosis:rare`, `apotheosis:epic`, `apotheosis:mythic`
- Gem path: `data/{ns}/gems/{subfolder}/{name}.json`, type: `"apotheosis:gem"`
- Gem purity tiers (lowest→highest): `cracked`, `chipped`, `flawed`, `normal`, `flawless`, `perfect`
- All gems use item ID `apotheosis:gem` — purity is a NeoForge data component (not an item ID suffix)
- Gem dimension constraints: same `constraints` object, confirmed by `inferno.json` (Nether gem) and `earth.json` (Overworld gem) in vanilla Apotheosis data

### Open Questions Before Implementation
- [ ] Confirm exact Rotspawn entity ID from Undergarden mod (`undergarden:rotspawn`?)
- [ ] Decide: raise `dimensionFactor` 2→3? (Makes Undergarden mobs 3× overworld level instead of 2×)
- [ ] Confirm Paxi namespace — can we use any namespace (`roguelike:`) or must it match an existing mod namespace?

---

### 🎮 GAME DESIGN GAPS

#### Gap 1: No narrative thread between dimensions
The pack is mechanically strong but narratively empty. Players jump from dimension to dimension without understanding why. Each dimension chapter needs an opening quest that delivers 2-3 lines of lore establishing WHY this dimension matters. Example: Undergarden = "The roots of the world hold ancient magic..." Nether = "The heat of creation forged the first runes..." The current stub quests have good mechanical descriptions but no story hooks.

#### Gap 2: The Paraglider is underutilized as a star feature
Paragliding + stamina is the most unique feature of this pack. But the current quest flow treats it as one item in the Combat chapter ("Take Flight" = 1 quest). RAD3 inspiration: dedicate a full **Spirit Paths chapter** to the paraglider + stamina system:
- Find a Shrine of Bargain
- Trade 4 Spirit Orbs for a Heart Container  
- Upgrade stamina to 2 vessels
- Unlock the dodge roll
- Complete a paraglider challenge (land at a destination from 200+ blocks up)

#### Gap 3: No economy/social loop
For multiplayer, RAD3's coin system gives players a reason to interact — trade coins for shop items, pool coins for group rewards. Without it, multiplayer is just parallel single-player. Implement **Dimension Runes** (see next section) as the meta-currency.

#### Gap 4: Weapons feel samey without guidance
Simply Swords adds 15+ weapon types, each with unique movesets. But nothing tells players about them. The Combat chapter stubs are good, but players need to be pushed to TRY different weapons. Add a "Weapon Trials" quest chain: equip each weapon type and kill a mob with it.

#### Gap 5: Magic onboarding is overwhelming
When Ars Nouveau unlocks in the Undergarden, 30+ recipes become available instantly. Players who haven't seen the mod before will be lost. The 16-quest Magic chapter is excellent but needs to be locked at the quest level — each quest should unlock the next. The current tree likely isn't linear. Make it a strict linear chain: Source Jar → Source Relay → Imbuement Chamber → first glyph → etc.

#### Gap 6: No food progression
Vanilla food with AppleSkin tooltips is fine for a launch baseline, but by Stage 3 (Nether), players should be eating better food for combat bonuses. Farmer's Delight provides this without being overwhelming.

---

### ✨ DESIGN ADDITIONS (Inspired by RAD3)

#### Addition 1: Dimension Rune Economy (new system)

RAD3's coin system makes quest completion feel economically rewarding beyond just XP. Adapt this for our pack:

**Rune Fragments** — custom KubeJS startup items, one type per dimension tier:
- `roguelike:overworld_rune_fragment` — dropped by Apotheosis gems bosses, DC treasure room quest rewards
- `roguelike:undergarden_rune_fragment` — dropped by Rotspawn, Undergarden dungeon quests
- `roguelike:nether_rune_fragment` — Wither kill, Nether Fortress quests
- etc.

**Runes** — crafting: 4 fragments → 1 Rune (shaped, 2×2)
- `roguelike:overworld_rune`, `roguelike:undergarden_rune`, etc.

**Uses for Runes:**
1. Required components in gate item recipes (Gilded Stone needs 2 Undergarden Runes, etc.)
2. Quest "shop" chapter — submit Runes for powerful rewards (affix items, extra heart containers, special gear)
3. Visual only: Runes are used to display dimension completion in the quest book milestone wall

**Implementation:**
- Register fragment items in `src/startup/runes.ts` (KubeJS `StartupEvents.registry`)
- Add crafting recipes in `src/server/recipes.ts`
- Add fragment drops via LootJS in `src/server/loot-tables.ts`
- Add Rune reward events via FTB Quests command rewards

#### Addition 2: Spirit Paths Quest Chapter (new chapter)

Dedicated to the BetterParagliders stamina/heart system — the star feature of the pack.

| # | Title | Task | Reward |
|---|-------|------|--------|
| 1 | The Wheel of Life | Equip the Paraglider | Stamina Vessel |
| 2 | First Shrine | Find a Shrine of Bargain | 2 Spirit Orbs |
| 3 | The Trade | Trade 4 Spirit Orbs at a Shrine | Heart Container |
| 4 | Second Wind | Reach 2 full stamina wheels | Stamina Vessel |
| 5 | The Leap | Glide 200 blocks in a single flight | 2 XP |
| 6 | Dodge Roll | Dodge 10 attacks | 3 XP |
| 7 | Full Hearts | Consume 5 Heart Containers | 1 Heart Container |
| 8 | Pilgrim | Find 5 Shrines of Bargain | Overworld Rune Fragment |
| 9 | Sky Walker | Glide across a YUNG's ravine | Rune Fragment |
| 10 | The Vessel Within | Reach max stamina (10 vessels) | 1 Heart Container + title |

#### Addition 3: The Market Quest Chapter (Rune shop)

A chapter where players spend Runes for out-of-quest-line rewards:

| Shop Item | Cost | Unlocked After |
|-----------|------|----------------|
| Apotheosis Gem Pouch | 2 Overworld Runes | Overworld complete |
| Ancient Tome | 3 Overworld Runes | Overworld complete |
| Ars Nouveau Apprentice Book | 2 Undergarden Runes | Undergarden complete |
| Affix Loot item (random) | 4 Undergarden Runes | Undergarden complete |
| Heart Container | 6 Undergarden Runes | Undergarden complete |

Implement as FTB Quests with item submission tasks (turn in Runes) and item rewards.

#### Addition 4: Weapon Trials Quest Chain

Add to Combat chapter as quests 15-20:
- "Katana Trial" — kill 5 mobs with a Katana
- "Halberd Trial" — kill 5 mobs with a Halberd  
- "Rapier Trial" — kill 5 mobs with a Rapier
- "Glaive Trial" — kill 5 mobs with a Glaive
- "Arms Master" — complete all weapon trials → reward: Overworld Rune Fragment

#### Addition 5: Lore Codex (Patchouli book)

A Patchouli book given in the starter kit that adds pages as dimensions are entered:
- Given at first join alongside the FTB Quests book
- Page 1-3: World overview, stamina system, paraglider guide
- Page 4-6: Unlocked on Undergarden entry — Ars Nouveau primer
- Page 7-9: Unlocked on Nether entry — Forbidden Arcanus, magic tier 2
- Implement page unlocks via KubeJS `PlayerEvents` + Patchouli advancement system

---
## Quest Chapters — New Systems Chapters

> Use the FTB Quests in-game editor (`B` key) to create these chapters.
> Copy titles and descriptions from the tables below.
> All IDs are auto-generated by FTB Quests when created in-game.

**Suggested chapter group layout:**
```
Group: Dimensions   → Overworld, Undergarden, Nether (future), Aether, End
Group: Systems      → Combat, Magic, Enchanting, Exploration, Storage & Skills, World & Biomes
Group: Misc         → Better Everything (existing YUNG's chapter)
```

### Chapter: Combat
x> Icon: `simplyswords:rapier` | Group: Systems

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
X| 1 | First Blood | Checkmark | 2 XP | You start with a Gold Sai in your kit. Better Combat changes everything — attacks have windup animations and arc hitboxes. Click and hold to feel the difference. |
X| 2 | Know Your Weapon | Checkmark | 2 XP | Simply Swords adds many weapon types. Each has a unique moveset, range, and stamina cost. Try: **Rapier** (fast, precise), **Halberd** (long reach, sweep), **Katana** (quick combos), **Glaive** (wide sweep). |
X| 3 | The Stamina Bar | Checkmark | 1 Stamina Vessel | The green wheel on your screen is your stamina. It drains when you attack, run, glide, or swim. It refills when idle. Don't exhaust it before a fight — you won't be able to attack. |
X| 4 | Spirit Orbs | Collect 4 Spirit Orbs | 1 XP | Spirit Orbs drop from spawners, dungeon chests, and trial completions. Trade 4 orbs at a Shrine of Bargain to increase your max stamina or max hearts. Prioritize stamina — low stamina means slow attacks. |
X| 5 | Stamina Vessel | Use a Stamina Vessel | 2 XP | Each Stamina Vessel adds 200 stamina. One full wheel = 1000 stamina. You can hold up to 10 vessels. |
X| 6 | Heart Container | Use a Heart Container | 2 XP | Heart Containers increase your maximum health by one heart. The Ender Dragon and Wither each drop one when killed. |
X| 7 | Take Flight | Equip and use a Paraglider | Compass | Your starter kit includes a Paraglider. Hold Jump while falling to deploy it. Paragliding drains stamina — manage your wheel carefully in long glides. |
X| 8 | Dual Wielding | Dual wield any two weapons | 2 XP | Better Combat supports dual wielding. Put a weapon in your offhand — both weapons animate together. Dual wielding increases attack speed by 20% but drains stamina faster. |
X| 9 | The Art of the Combo | Land 3 hits in a combo | 3 XP | Every weapon has a combo chain. Time your clicks to keep the combo going for bonus hit patterns. The combo resets if you idle for too long. |
X| 10 | Shield Up | Craft or find a Shield | 1 Shield | Blocking with a shield costs stamina but reduces damage. Block a projectile to intercept it at extra stamina cost. |
| 11 | Enchant Your Blade | Apply any enchantment to a weapon | 3 XP | Use an enchanting table to start enchanting. Apotheosis dramatically expands the enchanting system — see the Enchanting chapter for details. |
| 12 | Gem Socket | Apply an Apotheosis Gem to a weapon | 4 XP | Find a gem (dropped from mobs or dungeon chests) and use an anvil to socket it into your weapon. Gems add passive stats like crit damage, attack speed, or lifesteal. |
| 13 | Dodge Roll | Roll to dodge an attack | 2 XP | Paragliders adds a dodge roll (double-tap a direction). Rolling costs stamina. Use it to sidestep slow boss attacks. |
| 14 | Boss Slayer | Kill any dungeon boss | 5 XP + 1 Heart Container | Dungeon Crawl, WDA, and YUNG's structures all have boss encounters. They hit harder than vanilla — keep your stamina topped up and don't trade hits. |

### Chapter: Magic — Ars Nouveau
x> Icon: `ars_nouveau:worn_notebook` | Group: Systems | Unlocked after: Undergarden chapter complete

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | Into the Garden of Magic | Craft a Worn Notebook | 3 XP | To unlock Ars Nouveau you need a **Cloggrum Ingot** from the Undergarden. Combine it with a Book in the crafting table to get the Worn Notebook — your magic encyclopedia. |
| 2 | Source | Craft a Source Jar | 2 XP | **Source** is the mana of Ars Nouveau. Source Jars store it. Source Relays transfer it. You need Source to craft glyphs and fuel automation. |
| 3 | First Spell | Craft an Apprentice Spell Book | 3 XP | The Spell Book lets you cast spells. Craft an Apprentice Book first — it holds 5 glyph slots. Open it to see your equipped spell. Swap spells with the Ars next-slot key (X). |
| 4 | Glyph Crafting | Craft any Glyph at an Imbuement Chamber | 3 XP | The **Imbuement Chamber** is the core Ars Nouveau block. Place it down, add Source Jars nearby, place items on pedestals around it, and imbue to create glyphs. |
| 5 | Your First Spell | Build and cast a Projectile → Ignite spell | 4 XP | Spells are built from: **Form** (how it travels) + **Effect** (what it does) + optional **Augment** (modifier). A simple Fire Bolt: Projectile Form + Ignite Effect. |
| 6 | Source Relay | Place a Source Relay network | 2 XP | Source Relays transfer Source passively between jars. A well-designed relay network keeps your crafting chambers always topped up without manual refilling. |
| 7 | Harvest Spell | Build a Touch → Harvest spell | 2 XP | **Touch Form** + **Harvest Effect** = a spell that harvests crops when you right-click them. Instantly collect crops without breaking the soil. |
| 8 | Spell Augments | Add an Amplify augment to a spell | 3 XP | Augments like **Amplify**, **Extend Time**, and **Pierce** modify effects. Stack Amplify on a Projectile → Ignite for a bigger explosion. |
| 9 | Budding Amethyst Automation | Build an Amethyst Golem farm | 4 XP | An **Amethyst Golem** harvests Budding Amethyst clusters passively — no Fortune enchant needed. This is your main Source Gem income. |
| 10 | Wixie — The Alchemist | Summon a Wixie | 4 XP | A **Wixie** automates potion brewing. Give it a cauldron and ingredients — it brews endlessly. Great for Regeneration or Strength potions at scale. |
| 11 | Drygmy — The Mob Farm | Summon a Drygmy | 4 XP | A **Drygmy** collects mob drops from nearby mobs without killing them. Pen up some cows or skeletons near a Drygmy and it will farm their drops passively. |
| 12 | Tier 2 Spell Book | Craft an Archmage Spell Book | 5 XP | The **Archmage Book** unlocks Tier 2 glyphs — stronger forms and effects. It also gives you more spell slots. |
| 13 | Blink | Build a Blink spell | 3 XP | **Blink** is the teleportation glyph. Combine with **Projectile Form** to teleport to where the projectile lands. Essential for dungeon traversal and boss phases. |
| 14 | Wall of Fire | Build an Area of Effect fire spell | 3 XP | **AOE Form** hits everything in a radius. Combine with Ignite or Slow for crowd control. Great against dungeon mob spawns. |
| 15 | Ritual of Awakening | Complete any Ars Nouveau Ritual | 5 XP + 1 Source Gem block | Rituals alter the world — summon mobs, change biomes, or purify Source. Place a Ritual Brazier with the right ingredients and cast. |
| 16 | Lightning Rod | Build a Projectile → Lightning spell | 3 XP | Lightning is one of the most powerful Ars Nouveau effects early on. Combine with Pierce augment to chain through mobs. Devastating in dungeons. |

### Chapter: Enchanting — Apotheosis
x> Icon: `apotheosis:gem_shard` | Group: Systems | Available from: Overworld start

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | The Art of Enchantment | Place an Enchanting Table | 3 XP | Apotheosis enhances the vanilla enchanting table. Higher enchant levels require more bookshelves — but also specific shelf types. Start with regular bookshelves then upgrade. |
| 2 | Bookshelves Matter | Place 15 bookshelves around your table | 2 XP | Stack bookshelves to raise the max enchant level above 30. Apotheosis supports up to level 150+ with the right shelves. |
| 3 | Hellshelf | Place a Hellshelf | 2 XP | The **Hellshelf** (Nether Bricks) is the first Apotheosis-specific shelf. It boosts max enchant level significantly. |
| 4 | Your First Socket | Find an item with a gem socket | 3 XP | Apotheosis adds **gem sockets** to item drops. Items with sockets show a gem icon in the tooltip. Use an anvil to insert a gem. |
| 5 | Common Gem | Find a Common Gem | 2 XP | Common Gems drop from mobs and dungeon chests. They add small bonuses like attack speed, crit chance, or armor. |
| 6 | Gem Cutting | Combine two gems of the same rarity | 3 XP | Two gems of the same type and tier combine into a higher-purity gem with better stats. Keep upgrading to max the benefit from your sockets. |
| 7 | Affix Loot | Find a piece of Apotheosis Affix Loot | 4 XP | Dungeon chests drop **Affix Loot** — items with extra modifiers like "Berserker's" or "Guardian's". These replace vanilla gear as endgame items. |
| 8 | Ancient Tome | Use an Ancient Tome on an enchanted book | 3 XP | Ancient Tomes upgrade an enchanted book's level past the normal max (e.g., Sharpness V → Sharpness VI). Essential for endgame gear. |
| 9 | Infusion Anvil | Use the Apotheosis Infusion Anvil | 4 XP | The **Infusion Anvil** applies enchantments at lower XP cost and lets you combine conflicting enchants. |
| 10 | Max Enchant | Enchant an item to level 30+ | 5 XP | With enough Apotheosis bookshelves, you can reach level 100+ enchanting power. At this level, multiple high-level enchants in a single roll are possible. |
| 11 | Reforging | Reforge an item at a Reforging Station | 4 XP | The **Reforging Station** lets you roll new affixes on gear. Each reroll costs materials. Keep rolling until you get the stat combination you want. |
| 12 | Gem Pouch | Craft a Gem Pouch | 2 XP | Gem Pouches store gems without taking up inventory space. Essential for any gem collector. |

### Chapter: Exploration
x> Icon: `dungeoncrawl:dungeon_key` | Group: Systems | Available from: Overworld start

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
x| 1 | Into the Wild | Checkmark | Compass | The surface is dotted with structures from multiple mods. Xaero's Minimap will mark dungeons as you discover them. Explore actively — structures are spaced out for a reason. |
x| 2 | Better Dungeons | Discover a YUNG's Better Dungeon | 3 XP | YUNG's Better Dungeons replaces vanilla dungeons with multi-room themed structures: Spider Cave, Undead Crypt, Spider Dungeon. Expect spawners and a treasure chest. |
x| 3 | Dungeon Crawl | Discover a Dungeon Crawl dungeon | 4 XP | Dungeon Crawl generates massive multi-level vertical dungeons descending deep underground with corridors, node rooms, treasure rooms, and challenge rooms. Bring food and torches. |
| 4 | Corridor Chest | Loot a Dungeon Crawl corridor chest | 2 XP | Corridor chests are the most common. They contain basic loot — iron gear, food, and early-game resources. Chests are **per-player** (Lootr) so no fighting over loot. |
| 5 | Treasure Room | Find a Dungeon Crawl treasure room | 5 XP + 2 XP Bottles | Treasure rooms are rare rooms with better loot — Apotheosis gems, Affix Loot, and Ars Nouveau materials. |
| 6 | WDA Structure | Discover a When Dungeons Arise structure | 4 XP | When Dungeons Arise adds enormous hand-crafted structures: Illager Forts, Plague Asylums, Foundries, and more. Each is guarded by powerful custom mobs. |
| 7 | Illager Fort | Clear an Illager Fort | 5 XP | The Illager Fort is a large fortified base with multiple floors, patrols, and a captain. Clear every room for full loot. The upper floors have better chests. |
| 8 | Spelunkery Gems | Collect your first rough gem | 2 XP | Spelunkery replaces raw diamond/emerald drops with **rough gems** and **shards** that must be cut and polished. Better than finding a full diamond in a chest. |
| 9 | Cut and Polish | Polish a rough diamond into a diamond | 2 XP | Use the Spelunkery Gem Cutting Table to process rough gems. Higher quality rough gems give more final material. Invest in Fortune III first. |
| 10 | Mowzie's Mobs | Encounter a Mowzie's Mobs creature | 3 XP | Mowzie's Mobs adds custom boss creatures: Ferrous Wroughtnaut in caves, Frostmaw in cold biomes, Barako in jungles. Each has a unique attack pattern and special drop. |
x| 11 | Tavern | Find a Dungeons and Taverns tavern | 2 XP | Taverns spawn in the world and serve as waypoints. Great places to restock mid-exploration. |
x| 12 | Stronghold | Discover a YUNG's Better Stronghold | 4 XP | YUNG's Better Strongholds replaces vanilla strongholds with larger structures with more loot. The Ender Portal is still inside — find it to progress to The End. |
x| 13 | Mineshaft | Discover a YUNG's Better Mineshaft | 2 XP | YUNG's Better Mineshafts replaces vanilla mineshafts with larger branching networks with richer ore veins and more chests. |
x| 14 | Loot Per Player | Checkmark | 2 XP | All dungeon chests are **Lootr** chests — each player gets their own loot roll. No fighting over who gets the good item. Chests glow to show they haven't been opened by you yet. |

### Chapter: Storage & Skills
x> Icon: `sophisticatedbackpacks:backpack` | Group: Systems | Available from: Overworld start

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | Your Pack | Equip a Backpack (given in starter kit) | Pickup Upgrade | Your starter kit includes a basic Backpack. Right-click it to open extra inventory. Upgrade it with **Upgrade Smithing Table** slots. |
| 2 | Copper Backpack | Craft a Copper Backpack | Iron Block | The Copper Backpack is your first crafted tier. It has more slots and can hold one upgrade. Useful for mid-game dungeon runs. |
| 3 | Iron Backpack | Craft an Iron Backpack | 3 XP | The Iron Backpack has significantly more slots and more upgrade capacity. Your primary carry pack for dungeon exploration. |
| 4 | Pickup Upgrade | Install a Pickup Upgrade in your backpack | 2 XP | The **Pickup Upgrade** automatically collects items from the ground into your backpack. Configure which items to pick up via a filter. |
| 5 | Filter Upgrade | Install a Filter Upgrade | 2 XP | The **Filter Upgrade** keeps junk out of your backpack by whitelisting or blacklisting item types. Combine with Pickup to avoid collecting useless drops. |
| 6 | Tank Upgrade | Install a Tank Upgrade | 2 XP | The **Tank Upgrade** adds a fluid tank to your backpack. Useful for carrying water, lava, or potions during exploration. |
| 7 | Gold Backpack | Craft a Gold Backpack | 4 XP | The Gold Backpack unlocks the **Magnet Upgrade** and **Void Upgrade** slots. |
| 8 | Diamond Storage | Place a Diamond Storage Unit | 3 XP | Sophisticated Storage creates tiered storage blocks. Diamond storage holds 2000+ items in a single block. Chain them with a **Storage Controller**. |
| 9 | Storage Controller | Craft a Storage Controller | 4 XP | The **Storage Controller** links multiple Sophisticated Storage units into one network. Access everything from one terminal. |
| 10 | Skills Unlocked | Open the Pufferfish Skills menu | 2 XP | Pufferfish Skills adds a skill tree system. Open it with `K`. You earn skill points by leveling up. Invest in combat, crafting, or utility branches. |
| 11 | First Skill | Unlock your first skill node | 3 XP | Choose a starting path: **Warrior** (combat bonuses), **Rogue** (speed/crit), **Crafter** (resource bonuses). Each has unique nodes and a mastery reward at the end. |
| 12 | Class Mastery | Reach a class mastery node | 5 XP + 1 Heart Container | Mastery nodes are the capstone of each class path. They grant powerful passive effects that define your playstyle. |

### Chapter: World & Biomes
x> Icon: `minecraft:grass_block` | Group: Systems | Available from: Start

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | Strange New World | Discover a Regions Unexplored biome | 2 XP | Regions Unexplored adds 70+ new biomes. Open your map (`M`) to see biome boundaries. |
| 2 | Tectonic Terrain | Discover an extreme terrain feature | 2 XP | Tectonic reshapes world generation with dramatic elevation, deeper valleys, and taller mountains. Paragliders shine in this terrain. |
| 3 | Geophilic | Discover a Geophilic biome variant | 2 XP | Geophilic overhauls vanilla biomes with new surface decoration and subtle terrain changes. |
| 4 | Map It | Open Xaero's World Map | 1 XP | Xaero's World Map (`M`) shows a full explored map with structure markers, death points, and waypoints. Set a home waypoint near your base immediately. |
| 5 | Waypoint | Set a waypoint | 1 XP | Waypoints (`U`) let you navigate back to important locations. Mark your base, dungeon entrances, and the Undergarden portal. |

### Additional quests for existing Undergarden chapter (`02_undergarden.snbt`)
> Append after the current 5 quests

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 6 | Forbidden Metal | Collect 4 Forgotten Metal Ingots | 4 XP | Forgotten Metal is the second Undergarden metal tier. Stronger than Cloggrum, requires deeper Undergarden exploration. |
| 7 | Ars Nouveau Unlocked | Craft an Imbuement Chamber | 5 XP | With Cloggrum Ingots you can now craft the Imbuement Chamber — the heart of Ars Nouveau. See the Magic chapter to continue the progression. |
| 8 | Sunken Keep | Discover a Sunken Keep | 3 XP | The Sunken Keep is the Undergarden dungeon structure. It holds Cloggrum-tier loot, Forgotten Metal, and unique Undergarden mob drops. |

---
## Loot System (loot-tables.ts)

### What's implemented
- All diamond gear (vanilla + Simply Swords) replaced with `spelunkery:rough_diamond` globally
- Gold/iron ingots replaced with nugget stacks
- Diamonds replaced with `spelunkery:rough_diamond_shard`
- Loot limiter: caps chest contents at `MAX_UNIQUE_ITEMS = 6` via Fisher-Yates shuffle

### What still needs doing
- Verify loot bucket API in-game (`loot.removeAll`, `loot.size`, `loot.forEach`)
- Roll reduction for Dungeon Crawl tables (lower pool rolls so fewer items spawn to begin with, reducing reliance on the limiter)
- Add modded items to Dungeon Crawl chests by tier (Ars Nouveau essences, Iron's Spells scrolls, Apotheosis gems)

### Dungeon Crawl Table IDs (verify with `/lootjs tables dungeon_crawl:` in-game)
- `dungeon_crawl:chests/corridor` — hallway chests
- `dungeon_crawl:chests/node` — junction chests
- `dungeon_crawl:chests/room/normal` — room chests
- `dungeon_crawl:chests/room/treasure` — treasure rooms
- `dungeon_crawl:chests/room/challenge` — challenge rooms

### Modded item drops (by tier, all probability-gated)
**Corridor** (~10–15%): `ars_nouveau:fire_essence`, `ars_nouveau:earth_essence`, Simply Swords low-tier weapon  
**Node / Room Normal** (~8–12%): `ars_nouveau:manipulation_essence`, Simply Swords mid-tier weapon, Apotheosis common gem  
**Treasure / Challenge** (~5–10%): `malum:sacred_salt` *(when Malum installed)*, `simplyswords:greatsword`, Apotheosis uncommon gem

