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
- ⚠️ **Embeddium is removed** — it conflicted with Sodium (crash 2026-05-07). Still listed in CurseForge install log — risk of re-install on next CurseForge sync. Remove via CurseForge UI.
- ⬜ **TODO: Add Noisium** (faster worldgen noise, NeoForge 1.21.1 port available on Modrinth)
- ⬜ **TODO: Add Dynamic FPS** (reduces GPU load when window unfocused)

### KubeJS Scripts

```
src/server/
├── starter-kit.ts      ← First-spawn kit ✅
├── stages.ts           ← Progression stage flags + commands ✅
├── gates.ts            ← Dimension gate recipe enforcement (partial)
├── overworld.ts        ← Apotheosis tweaks, Ars Nouveau pre-gate ✅
├── undergarden.ts      ← Ars Nouveau unlock, Cloggrum bridge ✅
├── recipes.ts          ← Armor progression recipes, jukebox upgrade removals ✅
└── loot-tables.ts      ← Spelunkery replacements, Dungeon Crawl rolls + Ars loot, limiter ✅
```

> `nether.ts`, `aether.ts`, `twilight.ts`, `deepdark.ts`, `end.ts`, `ae2.ts` — not yet added.

## Paxi Datapacks (`config/paxi/datapacks/`)

Paxi loads JSON datapacks before world creation, making it the right place for **worldgen config** that KubeJS cannot touch.

| Datapack | Status | Purpose |
|----------|--------|---------|
| `structures` | ✅ Done | Structure spacing — Dungeon Crawl, When Dungeons Arise, Villages, Ancient City, Woodland Mansions |
| `hostility` | ✅ Done | L2Hostility difficulty configs — L2 Hostility confirmed installed |

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
| → Aether | `roguelike:gilded_stone` (recipe TBD) | Wither kill |
| → Twilight Forest | `roguelike:dimensional_lens` (recipe TBD) | Aether Slider kill |
| → Deep Dark | `roguelike:echo_key` (recipe TBD) | Late dim boss chain complete |
| → The End | Quest flag unlock | Warden kill |

## Open Decisions

- [ ] **Pack name and icon** — no decision yet
- [ ] **Tune recipe costs** for gate items (Gilded Stone, Dimensional Lens, Echo Key)
- [ ] **Chapter background art** — 1920×1080 PNG per dimension
- [ ] **Quest lore text** — final wording per chapter (drafts below)

---

## Active Issues (Stages 1–2)

### ✅ FIXED: Sparse Structures — `spreadFactor` set to 1
`config/sparsestructures.json5` — changed `spreadFactor: 2` → `1`. Paxi datapacks now have sole control over custom structure spacing.

### ✅ FIXED: Magnet/Void upgrades
`overworld.ts` no longer blocks magnet/void upgrade recipes. Will be re-gated when `nether.ts` is created in Stage 3.

### ✅ FIXED: Duplicate loot table entries
Duplicate `diamond_longsword` and `diamond_cutlass` entries removed from `loot-tables.ts`.

### 🟡 WARNING: Sodium + Embeddium conflict risk

The last crash (2026-05-07 14:56) was a Sodium vs. Embeddium conflict. Embeddium jar was manually removed but is still tracked in CurseForge — may be re-installed on next CurseForge pack sync.

**Fix:** Remove Embeddium from the CurseForge mod list via the CurseForge UI ("Mods" tab → remove Embeddium). Keep only Sodium.

### 🟡 WARNING: Stamina system — verify in-game

BetterParagliders is confirmed loaded. The system IS working. However:
- One-handed weapon stamina cost multiplier is 2.5× base — may feel too punishing early game
- Ensure the Combat quest chapter guides players to find Spirit Orbs early

**Config to tune if needed:** `~\curseforge\minecraft\Instances\minecraft-roguelike\config\betterparagliders-server.toml`

### 🟡 Bug: Verify quest reward `719F30116BDC4DAB`

May reward `irons_spellbooks:arcane_essence` (removed mod). If it shows as `ftbquests:missing_item`, replace with `2× minecraft:golden_apple` + keep 3 XP reward.

### 🟡 Bug: Loot limiter API needs in-game verification

`loot-tables.ts` uses `loot.removeAll()`, `loot.size()`, and `loot.forEach()` inside `.customAction()`. Verify with ProbeJS or in-game testing — if wrong the loot limiter silently fails.

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

