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

> ⚠️ **Eye of Ender issue:** `gates.ts` removes the Eye of Ender recipe. There is no FTB Quest reward distributing Eyes to players. End Portal entry is currently impossible. Fix: add quest reward Eyes to the Nether completion quest, or re-enable vanilla crafting and gate via a different mechanism.

## Open Decisions

- [ ] **Pack name and icon** — no decision yet
- [ ] **Tune recipe costs** for gate items (Gilded Stone, Dimensional Lens, Echo Key)
- [ ] **Chapter background art** — 1920×1080 PNG per dimension
- [ ] **Quest lore text** — final wording per chapter (drafts below)
- [ ] **Rune economy** — confirm 4 fragments per tier vs different count
- [ ] **Waystones** — add mod or use FTB Teams home point system
- [ ] **Farmer's Delight** — add food progression or keep vanilla food
- [ ] **Boss content** — Cataclysm vs Bosses of Mass Destruction vs both

---

## Expert Review — Game Design & Balance Findings

> Full review as of 2026-05-07. All items below are **actionable changes** organized by priority.

### 🔴 CRITICAL BUGS (break existing systems)

#### Bug 1: `reduceDungeonCrawlRolls` is never called
`loot-tables.ts` line 105 has the registration commented out:
```ts
// LootJS.lootTables(reduceDungeonCrawlRolls);  ← THIS IS COMMENTED OUT
```
The function is fully implemented but never registered. Dungeon Crawl chests generate with uncapped roll counts. **Fix:** Uncomment the line.

#### Bug 2: Ars Nouveau essences injected into Overworld dungeons
`addDungeonCrawlModdedLoot` injects T1 Ars Nouveau essences into DC `stage_1` and `stage_2` — which are Overworld dungeons. But `overworld.ts` gates all Ars Nouveau until the Undergarden. Players finding essences can't use them yet (fine), but it breaks the intended design of "Undergarden = magic awakening." Fix: Move essence injection to `stage_3+` only, or gate the injection behind a player-stage check.

#### Bug 3: Nether portal block is too broad
`stages.ts` blocks `rightClicked("minecraft:obsidian")` with flint and steel. This blocks ALL flint-and-steel use on ANY obsidian block — including using F&S for lighting campfires or furnaces adjacent to obsidian, or building with obsidian in general. **Fix:** Use `BlockEvents.portalCreated` to cancel portal creation instead.

#### Bug 4: Eye of Ender removed with no replacement path
`gates.ts` removes the Eye of Ender recipe. No FTB Quest currently rewards Eyes of Ender to players. The End Portal is currently impossible to complete. **Fix:** Add 12× Eye of Ender as an FTB Quest reward upon completing the "Kill the Wither" quest in the Nether chapter.

#### Bug 5: Paxi datapacks directory is empty
The plan says `structures` and `hostility` datapacks are ✅ Done. Neither exists. The `config/paxi/datapacks/` directory is empty. Structure spacing currently relies only on `sparsestructures.json5` (global factor 1) — no fine-grained per-structure control. L2Hostility dimension configs are only in the mod config directory, not as overrideable datapacks. **Fix:** Create both datapacks (see Paxi section above).

---

### 🟠 BALANCE ISSUES

#### Balance 1: Stamina consumption is backwards
`betterparagliders-server.toml` currently:
- `one_handed_stamina_consumption = 2.5` — rapier, sai, katana (fast weapons)
- `two_handed_stamina_consumption = 2.0` — glaive, halberd, greathammer (heavy weapons)

One-handed weapons cost MORE stamina per hit than two-handed weapons. This is backwards — fast weapons should be stamina-efficient, heavy weapons should be heavy. Recommended:
```
melee_stamina_consumption = 1.0     (base, unchanged)
one_handed_stamina_consumption = 1.5  (↓ from 2.5)
two_handed_stamina_consumption = 2.5  (↑ from 2.0)
block_stamina_consumption = 8.0       (↓ from 10.0 — slightly less punishing)
```

#### Balance 2: L2 Hostility is aggressive at spawn
`defaultLevelBase = 5` — mobs start at level 5. Combine with `globalTraitChance = 1.0` and `initialTraitChanceSlope = 0.01` and level-5 mobs have a 5% chance of having traits (fire, speed, etc.). Near spawn, new players face these before getting geared. Reduce `defaultLevelBase = 2` and `globalTraitSuppression = 0.2` (↑ from 0.1) for a more welcoming first session.

#### Balance 3: MAX_UNIQUE_ITEMS = 6 hits treasure rooms too hard
The global loot limiter caps all CHEST loot at 6 items. Dungeon Crawl treasure and secret rooms are supposed to be exciting moments. At 6 items max they often feel underwhelming. Recommended: raise to 8 for treasure/secret rooms. Implement dimension-specific limits (stages 1-2 = 6, treasure = 9, Nether+ = 8).

#### Balance 4: Spirit Orb spawner drop = 1.0 per spawner
`paraglider-server.toml`: `spawnerSpiritOrbDrops = 1.0` — every spawner drop guarantees 1 Spirit Orb. This makes stamina/heart farming trivial: find a spawner farm, collect orbs indefinitely. Recommend: `spawnerSpiritOrbDrops = 0.25` (25% chance) to make orbs feel special.

#### Balance 5: lootintegration_wda creates double injection for WDA structures
`lootintegration_wda` mod + `lootintegrations` mod both inject items into WDA structures. WDA's own built-in loot tables also fire. Result: three item injection layers in WDA chests, causing inflated loot quantities. **Remove `lootintegration_wda`** — `lootintegrations` at weight 1 handles the same purpose.

---

### 🟡 MODS TO REMOVE

| Mod | Reason |
|-----|--------|
| `lootintegration_wda-1.8.jar` | Double-injects into WDA with `lootintegrations` mod. Remove. |
| `armordamagescale-1.21.1-3.2.jar` | Conflicts with L2Hostility damage scaling — both modify damage. Pick one. L2Hostility is more feature-rich; remove `armordamagescale`. |
| `better_tooltips-1.0.3.jar` | Two tooltip enhancement mods installed (`better_tooltips` + `SimplyTooltips`). Verify they don't conflict. If both work, keep both. If conflict, remove `better_tooltips`. |

---

### 🟢 MODS TO ADD (Priority)

| Mod | Why | Priority |
|-----|-----|----------|
| **Waystones** (neoforge 1.21.1) | Multi-dimension pack with no fast travel = brutal. Players lose 10+ minutes backtracking. Waystones at dimension hubs solve this. | 🔴 High |
| **Farmer's Delight** | Gives food a progression arc (knife → cooking pot → advanced meals). Ties in well with Tavern structures. Without it, food is purely vanilla. | 🟠 Medium |
| **Cataclysm** | High-quality boss fights (Netherite Monstrosity, Ender Guardian, Leviathan). Each boss fits a dimension tier. Gives players a satisfying boss kill per dimension beyond vanilla bosses. | 🟠 Medium |
| **Twilight Forest** | Stage 5 in the progression plan — not yet installed. | 🟠 Medium |
| **The Aether** | Stage 4 in the progression plan — not yet installed. | 🟠 Medium |
| **Goblin Traders** | Merchant NPCs in structures that accept custom coins/runes. Ties into RAD3-inspired economy. | 🟡 Low |
| **Towers of the Wild: Reworked** | Generates tall exploration towers with Paraglider rewards at the top — perfect for the stamina/gliding theme. Note: `paraglider-server.toml` already has `paragliderInTowersOfTheWild = "DEFAULT"` configured. | 🟡 Low |
| **BetterDeath** / Corail integration | Improve death experience with better visual graves that preserve XP | 🟡 Low |

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

## Active Issues

### ✅ FIXED: Sparse Structures — `spreadFactor` set to 1
`config/sparsestructures.json5` — changed `spreadFactor: 2` → `1`. Paxi datapacks now have sole control over custom structure spacing.

### ✅ FIXED: Magnet/Void upgrades
`overworld.ts` no longer blocks magnet/void upgrade recipes. Will be re-gated when `nether.ts` is created in Stage 3.

### ✅ FIXED: Duplicate loot table entries
Duplicate `diamond_longsword` and `diamond_cutlass` entries removed from `loot-tables.ts`.

### 🔴 Bug: reduceDungeonCrawlRolls never registered
`loot-tables.ts` line 105: `// LootJS.lootTables(reduceDungeonCrawlRolls);` is commented out. Uncomment to apply roll caps.

### 🔴 Bug: Eye of Ender removed with no quest distribution
`gates.ts` removes Eye of Ender recipe. No quest currently distributes Eyes. End Portal is unreachable. Add 12× Eyes as Nether completion quest reward.

### 🔴 Bug: Nether portal block too broad
`stages.ts` blocks `rightClicked("minecraft:obsidian")` + flint and steel. Blocks ALL F&S on obsidian, not just portal creation. Use `BlockEvents.portalCreated` cancel instead.

### 🟡 WARNING: Sodium + Embeddium conflict risk
Embeddium jar manually removed but still tracked in CurseForge — may reinstall on sync. Remove via CurseForge UI.

### 🟡 WARNING: Stamina consumption is backwards
`betterparagliders-server.toml`: `one_handed = 2.5` costs MORE than `two_handed = 2.0`. Fix: one-handed → 1.5, two-handed → 2.5, block → 8.0.

### 🟡 WARNING: Paxi datapacks directory is empty
`config/paxi/datapacks/` has no datapacks. Create `structures`, `hostility`, and `compat` datapacks.

### 🟡 Bug: Ars Nouveau essences injected into Overworld DC stages
Move essence injection from stages 1-2 to stages 3+ in `loot-tables.ts` — contradicts Undergarden gate.

### 🟡 Bug: Verify quest reward `719F30116BDC4DAB`
May reward `irons_spellbooks:arcane_essence` (removed mod). Replace with `2× minecraft:golden_apple` if broken.

### 🟡 Bug: Loot limiter API needs in-game verification
`loot.removeAll()`, `loot.size()`, `loot.forEach()` inside `.customAction()` — verify with ProbeJS.

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
> Icon: `simplyswords:rapier` | Group: Systems

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | First Blood | Checkmark | 2 XP | You start with a Gold Sai in your kit. Better Combat changes everything — attacks have windup animations and arc hitboxes. Click and hold to feel the difference. |
| 2 | Know Your Weapon | Checkmark | 2 XP | Simply Swords adds many weapon types. Each has a unique moveset, range, and stamina cost. Try: **Rapier** (fast, precise), **Halberd** (long reach, sweep), **Katana** (quick combos), **Glaive** (wide sweep). |
| 3 | The Stamina Bar | Checkmark | 1 Stamina Vessel | The green wheel on your screen is your stamina. It drains when you attack, run, glide, or swim. It refills when idle. Don't exhaust it before a fight — you won't be able to attack. |
| 4 | Spirit Orbs | Collect 4 Spirit Orbs | 1 XP | Spirit Orbs drop from spawners, dungeon chests, and trial completions. Trade 4 orbs at a Shrine of Bargain to increase your max stamina or max hearts. Prioritize stamina — low stamina means slow attacks. |
| 5 | Stamina Vessel | Use a Stamina Vessel | 2 XP | Each Stamina Vessel adds 200 stamina. One full wheel = 1000 stamina. You can hold up to 10 vessels. |
| 6 | Heart Container | Use a Heart Container | 2 XP | Heart Containers increase your maximum health by one heart. The Ender Dragon and Wither each drop one when killed. |
| 7 | Take Flight | Equip and use a Paraglider | Compass | Your starter kit includes a Paraglider. Hold Jump while falling to deploy it. Paragliding drains stamina — manage your wheel carefully in long glides. |
| 8 | Dual Wielding | Dual wield any two weapons | 2 XP | Better Combat supports dual wielding. Put a weapon in your offhand — both weapons animate together. Dual wielding increases attack speed by 20% but drains stamina faster. |
| 9 | The Art of the Combo | Land 3 hits in a combo | 3 XP | Every weapon has a combo chain. Time your clicks to keep the combo going for bonus hit patterns. The combo resets if you idle for too long. |
| 10 | Shield Up | Craft or find a Shield | 1 Shield | Blocking with a shield costs stamina but reduces damage. Block a projectile to intercept it at extra stamina cost. |
| 11 | Enchant Your Blade | Apply any enchantment to a weapon | 3 XP | Use an enchanting table to start enchanting. Apotheosis dramatically expands the enchanting system — see the Enchanting chapter for details. |
| 12 | Gem Socket | Apply an Apotheosis Gem to a weapon | 4 XP | Find a gem (dropped from mobs or dungeon chests) and use an anvil to socket it into your weapon. Gems add passive stats like crit damage, attack speed, or lifesteal. |
| 13 | Dodge Roll | Roll to dodge an attack | 2 XP | Paragliders adds a dodge roll (double-tap a direction). Rolling costs stamina. Use it to sidestep slow boss attacks. |
| 14 | Boss Slayer | Kill any dungeon boss | 5 XP + 1 Heart Container | Dungeon Crawl, WDA, and YUNG's structures all have boss encounters. They hit harder than vanilla — keep your stamina topped up and don't trade hits. |

### Chapter: Magic — Ars Nouveau
> Icon: `ars_nouveau:worn_notebook` | Group: Systems | Unlocked after: Undergarden chapter complete

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
> Icon: `apotheosis:gem_shard` | Group: Systems | Available from: Overworld start

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
> Icon: `dungeoncrawl:dungeon_key` | Group: Systems | Available from: Overworld start

| # | Title | Task | Reward | Description |
|---|-------|------|--------|-------------|
| 1 | Into the Wild | Checkmark | Compass | The surface is dotted with structures from multiple mods. Xaero's Minimap will mark dungeons as you discover them. Explore actively — structures are spaced out for a reason. |
| 2 | Better Dungeons | Discover a YUNG's Better Dungeon | 3 XP | YUNG's Better Dungeons replaces vanilla dungeons with multi-room themed structures: Spider Cave, Undead Crypt, Spider Dungeon. Expect spawners and a treasure chest. |
| 3 | Dungeon Crawl | Discover a Dungeon Crawl dungeon | 4 XP | Dungeon Crawl generates massive multi-level vertical dungeons descending deep underground with corridors, node rooms, treasure rooms, and challenge rooms. Bring food and torches. |
| 4 | Corridor Chest | Loot a Dungeon Crawl corridor chest | 2 XP | Corridor chests are the most common. They contain basic loot — iron gear, food, and early-game resources. Chests are **per-player** (Lootr) so no fighting over loot. |
| 5 | Treasure Room | Find a Dungeon Crawl treasure room | 5 XP + 2 XP Bottles | Treasure rooms are rare rooms with better loot — Apotheosis gems, Affix Loot, and Ars Nouveau materials. |
| 6 | WDA Structure | Discover a When Dungeons Arise structure | 4 XP | When Dungeons Arise adds enormous hand-crafted structures: Illager Forts, Plague Asylums, Foundries, and more. Each is guarded by powerful custom mobs. |
| 7 | Illager Fort | Clear an Illager Fort | 5 XP | The Illager Fort is a large fortified base with multiple floors, patrols, and a captain. Clear every room for full loot. The upper floors have better chests. |
| 8 | Spelunkery Gems | Collect your first rough gem | 2 XP | Spelunkery replaces raw diamond/emerald drops with **rough gems** and **shards** that must be cut and polished. Better than finding a full diamond in a chest. |
| 9 | Cut and Polish | Polish a rough diamond into a diamond | 2 XP | Use the Spelunkery Gem Cutting Table to process rough gems. Higher quality rough gems give more final material. Invest in Fortune III first. |
| 10 | Mowzie's Mobs | Encounter a Mowzie's Mobs creature | 3 XP | Mowzie's Mobs adds custom boss creatures: Ferrous Wroughtnaut in caves, Frostmaw in cold biomes, Barako in jungles. Each has a unique attack pattern and special drop. |
| 11 | Tavern | Find a Dungeons and Taverns tavern | 2 XP | Taverns spawn in the world and serve as waypoints. Great places to restock mid-exploration. |
| 12 | Stronghold | Discover a YUNG's Better Stronghold | 4 XP | YUNG's Better Strongholds replaces vanilla strongholds with larger structures with more loot. The Ender Portal is still inside — find it to progress to The End. |
| 13 | Mineshaft | Discover a YUNG's Better Mineshaft | 2 XP | YUNG's Better Mineshafts replaces vanilla mineshafts with larger branching networks with richer ore veins and more chests. |
| 14 | Loot Per Player | Checkmark | 2 XP | All dungeon chests are **Lootr** chests — each player gets their own loot roll. No fighting over who gets the good item. Chests glow to show they haven't been opened by you yet. |

### Chapter: Storage & Skills
> Icon: `sophisticatedbackpacks:backpack` | Group: Systems | Available from: Overworld start

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
> Icon: `minecraft:grass_block` | Group: Systems | Available from: Start

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

## Quest Content — Stage 1 (Overworld)

All 14 quests in `01_overworld.snbt` are missing `title` and `description`. Edit in-game with the FTB Quests editor (B key), then commit.

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
| `719F30116BDC4DAB` | Checkmark → (verify reward) + 3 XP | War Chest | Fill your inventory with consumables and backup gear. The Frontier Guardian punishes the unprepared. |
| `5E5DEFB174138B9C` | Advancement `apotheosis:gateways/frontier` → Catalyst + 5 XP | Slay the Frontier Guardian | Find an Apotheosis Frontier Gateway (green beacon) and defeat the boss inside to unlock the path below. |
| `03131E68FD2B0D53` | Submit Catalyst → Patchouli book | The Gateway Below | Place the Undergarden Catalyst in a 3×3 ring of Cobblestone and right-click the center to open the portal. |

**Dependencies to add:**
- `5E5DEFB174138B9C` depends on `73F8DF2A4110C850`
- `03131E68FD2B0D53` depends on `5E5DEFB174138B9C`

---

## Quest Content — Stage 2 (Undergarden)

All 5 quests in `02_undergarden.snbt` are missing `title`, `description`, and `dependencies`.

| ID | Task / Reward | Title | Description |
|----|--------------|-------|-------------|
| `578089BF83172D19` | Checkmark → 2 XP | Into the Garden of Decay | Step through the Undergarden portal into the world below. |
| `0F00D150DB439316` | Checkmark → 3 XP | Explore the Deep | Find a Sunken Keep — the Undergarden dungeon. It holds Cloggrum-tier loot. |
| `238C74462BD4C631` | Submit 16× Cloggrum → 8× Cloggrum | Mine Cloggrum | Cloggrum Ore resonates with magical energy and is the key to unlocking Ars Nouveau. |
| `26D5313F86429851` | Submit Worn Notebook → 5 XP | First Steps in Magic | Craft the Worn Notebook using a Book and a Cloggrum Ingot to unlock Ars Nouveau. |
| `5DCD61CDFB3A419C` | Checkmark → 4× Blaze Rod + 10 XP | Defeat the Rotspawn | The Rotspawn is the Undergarden final boss. Defeat it to earn the Nether key and advance your progression. |

**Dependencies (linear chain):**
- `0F00D150DB439316` depends on `578089BF83172D19`
- `238C74462BD4C631` depends on `0F00D150DB439316`
- `26D5313F86429851` depends on `238C74462BD4C631`
- `5DCD61CDFB3A419C` depends on `26D5313F86429851`

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

