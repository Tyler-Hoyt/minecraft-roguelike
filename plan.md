# Roguelike Dimensions — Modpack Plan

> **Platform:** NeoForge 1.21.1  
> **Quest Book:** FTB Quests  
> **Scripting:** KubeJS 7 (TypeScript via this repo)

## Progress

| Stage | Status | Focus |
|-------|--------|-------|
| 0 | ✅ Done | Foundation — project structure, stubs, FTB Quests shells |
| 1 | 🔧 In Progress | Overworld — starter kit, Apotheosis, Catalyst gate, quest text |
| 2 | ⬜ Pending | Undergarden — Ars Nouveau gates, Cloggrum bridge, quest text |
| 3 | ⬜ Pending | Nether — gating, storage (Storage Drawers/Forbidden Arcanus deferred) |
| 4 | ⬜ Pending | Aether — AE2 deferred, Malum deferred |
| 5 | ⬜ Pending | Twilight Forest — deferred (mod removed for now) |
| 6 | ⬜ Pending | Deep Dark — Warden gear, sculk tools |
| 7 | ⬜ Pending | The End — Dragon egg, final crafting |

## Dimensional Progression

```
[Overworld]
    │  Complete apotheosis wave based fight, get the Catalyst
    ▼
[Undergarden]  ←── Ars Nouveau unlocked here
    │  complete Rotspawn boss quest
    ▼
[Nether]  ←── Blood Magic + Forbidden Arcanus
    │  kill Wither → craft Gilded Stone
    ▼
[Aether]  ←── Malum, AE2 comes online
    │  defeat Slider → craft Dimensional Lens
    ▼
[Twilight Forest / Blue Skies]  ←── AE2 endgame, Ars Nouveau T3
    │  complete boss chain → craft Echo Key
    ▼
[Deep Dark]  ←── Warden gear, stealth
    │  kill Warden → unlock End Portal quest
    ▼
[The End]  ←── Dragon, End Cities, final craft
```

## Mod List

### Core Framework
| Mod | Purpose |
|-----|---------|
| KubeJS 7 | Custom scripting, recipe tweaks, progression gates |
| FTB Quests | Quest book — the narrative backbone |
| Patchouli | In-world lore books (one per dimension) |
| FTB Library | FTB Quests dependency |

### Dimensions
| Mod | Dimension | Gate Tier |
|-----|-----------|-----------|
| The Undergarden | Undergarden | 1 — early game |
| The Aether | Aether | 3 — mid-late |
| Twilight Forest | Twilight Forest | 4 — late |
| Blue Skies | Everbright / Everdawn | 4 — late (alt if TF unavailable) |
| Deeper and Darker | Deep Dark | 5 — end game |
| Vanilla | The End | 6 — final |

### Exploration & Spelunking
- YUNG's Better Dungeons / Mineshafts / Strongholds
- Dungeon Crawl
- Repurposed Structures
- Dungeons and Taverns
- Spelunkery
- Caverns & Chasms X

### Storage (Progressive)
| Mod | Unlocked | Notes |
|-----|----------|-------|
| Sophisticated Backpacks | Start | Portable storage |
| Sophisticated Storage | Overworld | Tiered chests/barrels |
| Storage Drawers | Nether | Bulk storage |
| Applied Energistics 2 | Aether | Digital storage |

### Magic & Enchanting (Progressive)
| Mod | Unlocked | Style |
|-----|----------|-------|
| Apotheosis | Overworld | Enchanting overhaul, gem system |
| Ars Nouveau | Undergarden | Spell crafting, glyphs |
| Forbidden Arcanus | Nether | Dark magic |
| Blood Magic | Nether | Sacrifice-based magic | X
| Malum | Aether | Spirit / shadow magic |

### Combat
- Better Combat (animations, dual wield, combos)
- Simply Swords (halberds, rapiers, katanas)
- Savage & Ravage (tougher mobs) X
- Iron's Spells & Spellbooks (cast-based combat)
- Paragliders (stamina + gliding)
- Gravestone (death system)

### Performance
- Embeddium, FerriteCore, ModernFix, Clumps, Entity Culling, ImmediatelyFast

## KubeJS Scripts

```
src/server/
├── starter-kit.ts      ← First-spawn kit
├── stages.ts           ← Progression stage flags + commands
├── gates.ts            ← Dimension gate recipe enforcement
├── overworld.ts        ← Apotheosis tweaks, Ars Nouveau pre-gate
├── undergarden.ts      ← Ars Nouveau unlock, Cloggrum bridge
└── loot-tables.ts      ← Custom loot table tweaks (stub)
```

Note: `nether.ts`, `aether.ts`, `twilight.ts`, `deepdark.ts`, `end.ts`, `ae2.ts` were removed — will be re-added when each dimension is ready.

## FTB Quests Chapters

```
config/ftbquests/quests/chapters/
├── 01_overworld.snbt
├── 02_undergarden.snbt
├── 03_nether.snbt
├── 04_aether.snbt
├── 05_twilight.snbt   ← has broken TF item refs (TF not installed)
├── 06_deepdark.snbt
└── 07_end.snbt
```

## Gate Items (KubeJS enforced)

| Gate | Item | Requires |
|------|------|---------|
| → Undergarden | `roguelike:undergarden_catalyst` | Iron + Deepslate + overworld boss kill |
| → Nether | Quest flag unlock | Undergarden boss + Ars Nouveau T1 |
| → Aether | `roguelike:gilded_stone` | Wither kill |
| → Twilight/Blue Skies | `roguelike:dimensional_lens` | Aether Slider kill |
| → Deep Dark | `roguelike:echo_key` | Late dim boss chain complete |
| → The End | Quest flag unlock | Warden kill |

## Notes & Decisions Needed (TODO for you)

- [X] Confirm Twilight Forest vs Blue Skies (check NeoForge 1.21.1 availability)
- [X] Decide starter kit contents (armor tier, food, tools)
- [ ] Write quest descriptions / lore text per chapter
- [ ] Design chapter background art (1920x1080 PNG per dimension)
- [ ] Tune recipe costs for gate items (balancing)
- [X] Confirm all mods are on NeoForge 1.21.1 before installing
- [ ] Decide on a pack name and icon

---

## Dungeon Crawl Loot Reduction Plan

### Problem
Dungeon Crawl chests contain too many items per chest. The chests feel more like a
Christmas tree than a dungeon reward. We also want modded items from the installed magic
and combat mods to appear as dungeon loot, reinforcing the progression theme.

### Answer: No new mod needed
**LootJS** (already installed) is exactly the right tool. It integrates with KubeJS and
provides a clean API for both reducing rolls on existing pools and injecting new modded
items via global modifiers.

### Dungeon Crawl Loot Table IDs
Verify with `/lootjs tables dungeon_crawl:` in-game. Expected IDs:
- `dungeon_crawl:chests/corridor` — hallway chests (most common, lowest tier)
- `dungeon_crawl:chests/node` — junction chests (mid tier)
- `dungeon_crawl:chests/room/normal` — room chests (mid tier)
- `dungeon_crawl:chests/room/treasure` — treasure rooms (highest tier)
- `dungeon_crawl:chests/room/challenge` — challenge rooms (rare, high tier)

### Roll Reduction Targets (current → target)
| Table | Est. Current Rolls | Target Rolls |
|-------|-------------------|-------------|
| corridor | 3–7 | 1–3 |
| node | 4–8 | 2–4 |
| room/normal | 4–8 | 2–4 |
| room/treasure | 6–12 | 3–5 |
| room/challenge | 5–10 | 2–5 |

> These are estimates. Confirm actual ranges in-game then tune.

### Modded Item Integration (by chest tier)

**Corridor chests** (common drops, ~10–15% chance each):
- `ars_nouveau:fire_essence`, `ars_nouveau:earth_essence`, `ars_nouveau:air_essence` — cheap Ars Nouveau crafting materials
- `irons_spellbooks:scroll` (low-level spell scroll) — early Iron's Spells exposure
- `simplyswords:gem_diamond` or similar material — Simply Swords crafting hint

**Node / Room Normal chests** (uncommon drops, ~8–12% chance each):
- `ars_nouveau:manipulation_essence` — mid-tier Ars Nouveau
- `irons_spellbooks:common_spell_book` — Iron's Spells spellbook
- `simplyswords:rapier` or other Simply Swords weapon at 5–8% chance
- `apotheosis:gem` (random common gem) via tag `apotheosis:gems/common` at 10%

**Treasure / Challenge chests** (rare drops, ~5–10% chance each):
- `ars_nouveau:manipulation_essence` (larger stack) or a glyph
- `irons_spellbooks:uncommon_spell_book` at 5%
- `forbidden_arcanus:dark_matter` or `forbidden_arcanus:stella_arcanum` at 5%
- `malum:sacred_salt` or `malum:spirit_fragment` at 8%
- `simplyswords:greatsword` or another high-tier Simply Swords weapon at 5%
- `apotheosis:gem` (uncommon gem) at 8%

> Exact item IDs must be verified against in-game ProbeJS completions or `/kubejs hand`.

### Implementation Approach
All changes go in `src/server/loot-tables.ts`:

```typescript
// Reduce rolls
LootJS.lootTables(event => {
  for (const tableId of ['dungeon_crawl:chests/corridor', ...]) {
    event.getLootTable(tableId).forEachPool(pool => {
      pool.setRolls(min, max);
    });
  }
});

// Add modded items
LootJS.modifiers(event => {
  event.addTableModifier('dungeon_crawl:chests/corridor')
    .addLoot(LootEntry.of('ars_nouveau:fire_essence').randomChance(0.12));
  ...
});
```

### Tests
Add `tests/server/loot-tables.test.ts` that mocks the LootJS event and asserts:
- Roll reduction is applied to all Dungeon Crawl tables
- Each tier's modded items are registered

---

## Current Issues (from review)

### Bugs to Fix

3. **Broken quest reward** — Quest `719F30116BDC4DAB` in `01_overworld.snbt` rewards `irons_spellbooks:arcane_essence` (mod removed, shows as `ftbquests:missing_item`). Replace with `2× minecraft:golden_apple` + keep the 3 XP reward.
4. **Magnet/void upgrades permanently locked** — `overworld.ts` removes them with comment "re-added in nether.ts" but `nether.ts` was deleted. Remove the 4 `e.remove()` calls for `magnet_upgrade`, `advanced_magnet_upgrade`, `void_upgrade`, `advanced_void_upgrade`.
5. **Deleted src files not committed** — `ae2.ts`, `aether.ts`, `deepdark.ts`, `end.ts`, `nether.ts`, `twilight.ts` are deleted on disk but not staged.

### Quest Content Gaps

#### Ch.1 — `01_overworld.snbt` (all 14 quests missing `title` and `description`)

| ID | Task / Reward | Title | Description |
|----|--------------|-------|-------------|
| `11A973B524829B5F` | Checkmark → Compass | Welcome, Rogue | You have arrived in a world where every dimension hides a greater challenge. Press B to open this quest book. Start here. |
| `27451C740469E15E` | Checkmark → 2 XP | Gather Supplies | Chop wood, mine stone, and gather the basics before night falls. |
| `4099F6410D87D1F4` | Checkmark → 2 XP | Into the Unknown | Explore the surface and underground. This world has enhanced dungeons and deadlier mobs. |
| `73F8DF2A4110C850` | Checkmark → no reward | Prepare to Fight | Stock up on food, armor, and weapons. The final Overworld challenge is no ordinary fight. |
| `4E3E4D4FC594DB08` | Checkmark → Pickup Upgrade | Stay Organized | Upgrade your backpack with a Pickup Upgrade to auto-collect loot while you fight. |
| `32BF460B3FFD6232` | Submit Copper Backpack → Iron Block | Carry More | Craft a Copper Backpack. Keep extra slots free for dungeon loot. |
| `51442107E7ADB0C9` | Submit Enchanting Table → 3 XP | The Art of Enchantment | Build an Enchanting Table. Apotheosis adds gem sockets and higher max enchant levels. |
| `6B6748DCD7D2DDFD` | Checkmark → Bow + 32 Arrows | Dead-Eye | Ranged weapons are critical against the Gateway boss. Have a bow and plenty of arrows ready. |
| `719F2E80A0281358` | Checkmark → 5 XP bottles + 3 XP | Bottled Wisdom | Gather XP to fuel Apotheosis enchanting. Dungeons and Taverns are excellent XP sources. |
| `68BAC0432D500A9A` | Checkmark → 2× Golden Apple | Golden Resilience | Stock up on Golden Apples before dangerous territory. They are a lifesaver in tough fights. |
| `0B8685D0D5712DD0` | Checkmark → 2× Golden Apple + 2 XP | Survive the Night | The mobs here hit harder than vanilla. Keep your health and food topped up. |
| `719F30116BDC4DAB` | Checkmark → (see bug #3) + 3 XP | War Chest | Fill your inventory with consumables and backup gear. The Frontier Guardian punishes the unprepared. |
| `5E5DEFB174138B9C` | Advancement `apotheosis:gateways/frontier` → Catalyst + 5 XP | Slay the Frontier Guardian | Find an Apotheosis Frontier Gateway (green beacon) and defeat the boss inside to unlock the path below. |
| `03131E68FD2B0D53` | Submit Catalyst → Patchouli book | The Gateway Below | Place the Undergarden Catalyst in a 3×3 ring of Cobblestone and right-click the center to open the portal. |

**Dependencies to add:**
- `5E5DEFB174138B9C` (Gateway boss) should depend on `73F8DF2A4110C850` (Prepare to Fight)
- `03131E68FD2B0D53` (Submit Catalyst) should depend on `5E5DEFB174138B9C` (Gateway boss)

#### Ch.2 — `02_undergarden.snbt` (all 5 quests missing `title`, `description`, and `dependencies`)

| ID | Task / Reward | Title | Description |
|----|--------------|-------|-------------|
| `578089BF83172D19` | Checkmark → 2 XP | Into the Garden of Decay | Step through the Undergarden portal into the world below. |
| `0F00D150DB439316` | Checkmark → 3 XP | Explore the Deep | Find a Sunken Keep — the Undergarden dungeon. It holds Cloggrum-tier loot. |
| `238C74462BD4C631` | Submit 16× Cloggrum → 8× Cloggrum | Mine Cloggrum | Cloggrum Ore resonates with magical energy and is the key to unlocking Ars Nouveau. |
| `26D5313F86429851` | Submit Worn Notebook → 5 XP | First Steps in Magic | Craft the Worn Notebook using a Book and a Cloggrum Ingot to unlock Ars Nouveau. |
| `5DCD61CDFB3A419C` | Checkmark → 4× Blaze Rod + 10 XP | Defeat the Rotspawn | The Rotspawn is the Undergarden final boss. Defeat it to earn the Nether key and advance your progression. |

**Dependencies to add (linear chain):**
- `0F00D150DB439316` depends on `578089BF83172D19`
- `238C74462BD4C631` depends on `0F00D150DB439316`
- `26D5313F86429851` depends on `238C74462BD4C631`
- `5DCD61CDFB3A419C` depends on `26D5313F86429851`

#### Other notes
- `05_twilight.snbt` references `twilightforest:magic_log` and `twilightforest:portal` — TF not installed, icons will appear broken. Not urgent.
