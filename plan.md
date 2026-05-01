# Roguelike Dimensions — Modpack Plan

> **Platform:** NeoForge 1.21.1  
> **Quest Book:** FTB Quests  
> **Scripting:** KubeJS 7 (TypeScript via this repo)

## Progress

| Stage | Status | Focus |
|-------|--------|-------|
| 0 | ✅ Done | Foundation — project structure, stubs, FTB Quests shells |
| 1 | ⬜ Pending | Overworld — starter kit, Apotheosis, Catalyst recipe |
| 2 | ⬜ Pending | Undergarden — Ars Nouveau gates, Cloggrum bridge |
| 3 | ⬜ Pending | Nether — Blood Magic, Forbidden Arcanus |
| 4 | ⬜ Pending | Aether — AE2 unlock, Malum, Zanite bridge |
| 5 | ⬜ Pending | Twilight / Blue Skies — trophy recipes, AE2 endgame |
| 6 | ⬜ Pending | Deep Dark — Warden gear, sculk tools |
| 7 | ⬜ Pending | The End — Dragon egg, final crafting |

## Dimensional Progression

```
[Overworld]
    │  craft Undergarden Catalyst
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
- Caverns & Chasms

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
| Blood Magic | Nether | Sacrifice-based magic |
| Malum | Aether | Spirit / shadow magic |

### Combat
- Better Combat (animations, dual wield, combos)
- Simply Swords (halberds, rapiers, katanas)
- Savage & Ravage (tougher mobs)
- Iron's Spells & Spellbooks (cast-based combat)
- Paragliders (stamina + gliding)

### Performance
- Embeddium, FerriteCore, ModernFix, Clumps, Entity Culling, ImmediatelyFast

## KubeJS Scripts

```
src/server/
├── starter-kit.ts      ← First-spawn kit (STUB — you decide the kit contents)
├── overworld.ts        ← Apotheosis tweaks, Catalyst recipe
├── undergarden.ts      ← Ars Nouveau gates, Cloggrum bridge
├── nether.ts           ← Blood Magic altar, Forbidden Arcanus
├── aether.ts           ← AE2 unlock, Malum, Zanite bridge
├── twilight.ts         ← Trophy recipes, AE2 endgame gate
├── deepdark.ts         ← Warden gear, Sculk tools
├── end.ts              ← Dragon egg, final crafting
└── loot-tables.ts      ← Custom loot table tweaks
```

## FTB Quests Chapters

```
kubejs/data/ftbquests/quests/chapters/
├── 01_overworld.snbt
├── 02_undergarden.snbt
├── 03_nether.snbt
├── 04_aether.snbt
├── 05_twilight.snbt
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

- [ ] Confirm Twilight Forest vs Blue Skies (check NeoForge 1.21.1 availability)
- [ ] Decide starter kit contents (armor tier, food, tools)
- [ ] Write quest descriptions / lore text per chapter
- [ ] Design chapter background art (1920x1080 PNG per dimension)
- [ ] Tune recipe costs for gate items (balancing)
- [ ] Confirm all mods are on NeoForge 1.21.1 before installing
- [ ] Decide on a pack name and icon
