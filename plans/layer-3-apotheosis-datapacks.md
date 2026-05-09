# Layer 3 — Apotheosis Datapacks (Affix Loot + Gems)

This is the most impactful layer in the whole scaling system. Apotheosis's affix and gem systems natively support dimension constraints — meaning you can define exactly what quality of gear rolls in each dimension without any runtime interception or LootJS tricks. Just JSON files in the right place.

Two systems to configure: **affix loot entries** (the prefixed gear items with random modifiers) and **gems** (the socket gems you slot into gear). Both use the same `constraints` object to scope themselves to a dimension.

---

## File locations

Everything goes through Paxi. Create the directory structure below. If `config/paxi/datapacks/` doesn't exist yet, create it.

```
config/paxi/datapacks/
└── apotheosis-compat/
    └── data/
        └── roguelike/
            ├── affix_loot_entries/
            │   ├── undergarden_weapons.json
            │   ├── undergarden_armor.json
            │   ├── nether_weapons.json      (add when you get to Nether chapter)
            │   ├── nether_armor.json
            │   └── ...
            └── gems/
                ├── undergarden/
                │   ├── your_gem_name.json
                │   └── ...
                ├── nether/
                └── ...
```

Add `"apotheosis-compat"` to `config/paxi/datapack_load_order.json`:

```json
{
  "loadOrder": ["hostility", "apotheosis-compat"]
}
```

Order matters if packs conflict — later entries win for `MAP_OVERWRITE` merges. For Apotheosis entries specifically, they use `COLLECT` behavior (additive), so order doesn't matter much here.

---

## Affix loot entries

An affix loot entry tells Apotheosis: "this item type can appear as an affix drop in these conditions." When the system rolls for a piece of gear, it picks from all available entries that match the current context (dimension, world tier, luck) and then rolls a rarity from the allowed rarities.

The vanilla Apotheosis entries (iron sword, bow, chainmail chestplate, etc.) have no dimension constraints, meaning they can appear anywhere. Your dimension-specific entries **add** to that pool — you're not replacing the base entries.

### Basic weapon entry for Undergarden

```json
{
  "type": "apotheosis:affix_loot_entry",
  "stack": {
    "count": 1,
    "id": "minecraft:iron_sword"
  },
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

Break it down:

- `weights` — controls how often this entry is selected per world tier. Keys are world tier names: `haven`, `frontier`, `ascent`, `summit`, `pinnacle`. Missing tiers get weight 0 and won't roll at all. Here it only rolls in ascent/summit/pinnacle, which maps to mid-to-hard difficulty settings.
- `quality` — a luck multiplier. Effective weight = `weight + (quality × luckLevel)`. If the player has luck (from Apotheosis gear), higher quality entries get boosted.
- `constraints.dimensions` — array of dimension IDs. This entry only rolls while the player is in the Undergarden.
- `rarities` — limits which rarities this entry can roll. Without this field, any rarity is possible. Here we're saying: when this entry is selected, only `rare` or `epic` can come out.

### Rarity IDs

```
apotheosis:common
apotheosis:uncommon
apotheosis:rare
apotheosis:epic
apotheosis:mythic
```

### World tier IDs

```
haven       ← easiest
frontier
ascent
summit
pinnacle    ← hardest
```

The world tier the player is on affects which entries even get considered. Players on `haven` won't see entries that only have weights for `ascent+`. This is Apotheosis's own difficulty system — keep in mind it stacks with L2H's level system. They're separate dials.

### What items to use in `stack.id`

You can use any item that Apotheosis supports affixes for — vanilla weapons/armor, or modded items if Apotheosis has affix support for them. For the Undergarden, using vanilla item types is fine since the affixes are what make the drop valuable, not the base item stats. You might also want to add entries for Undergarden gear specifically:

```json
{
  "type": "apotheosis:affix_loot_entry",
  "stack": {
    "count": 1,
    "id": "undergarden:cloggrum_sword"
  },
  "weights": {
    "ascent": { "quality": 1.0, "weight": 15 }
  },
  "constraints": {
    "dimensions": ["undergarden:undergarden"]
  },
  "rarities": ["apotheosis:rare"]
}
```

This only works if Apotheosis recognizes `undergarden:cloggrum_sword` as an affixable item. Check in-game — if it shows up with affix potential in the reforging station or shows a rarity color, it's supported.

---

## Gems

The gem system works similarly. You're creating new gem definitions that are constrained to specific dimensions. The vanilla Apotheosis gems (earth, water, life, etc.) already have their own dimension constraints — `earth.json` is overworld-only, `inferno.json` is nether-only. You're adding your own custom gems for each dimension you build content for.

### Gem schema

```json
{
  "type": "apotheosis:gem",
  "constraints": {
    "dimensions": ["undergarden:undergarden"]
  },
  "min_purity": "flawed",
  "unique": true,
  "weights": {
    "ascent":   { "quality": 2.0, "weight": 50 },
    "summit":   { "quality": 2.0, "weight": 50 },
    "pinnacle": { "quality": 2.0, "weight": 50 }
  },
  "bonuses": [
    {
      "type": "apotheosis:attribute",
      "attribute": "minecraft:generic.attack_damage",
      "gem_class": "apotheosis:melee_weapon",
      "operation": "add_multiplied_total",
      "values": {
        "flawed":   0.1,
        "normal":   0.15,
        "flawless": 0.2,
        "perfect":  0.25
      }
    }
  ]
}
```

Key fields:

- `min_purity` — the minimum purity tier this gem can roll at. Since it's constrained to the Undergarden, setting this to `"flawed"` means no `cracked` or `chipped` versions will drop here. Purity tiers in order: `cracked` → `chipped` → `flawed` → `normal` → `flawless` → `perfect`.
- `unique: true` — only one instance of this gem can be socketed per item. Good default for most gems.
- `weights` — same as affix loot entries. Controls drop frequency per world tier.
- `bonuses` — array of stat bonuses. Each entry has a type, what slot it applies to, and per-purity values.

### Bonus types

The three most common bonus types:

**Attribute bonus:**
```json
{
  "type": "apotheosis:attribute",
  "attribute": "minecraft:generic.attack_damage",
  "gem_class": "apotheosis:melee_weapon",
  "operation": "add_multiplied_total",
  "values": {
    "flawed": 0.1,
    "normal": 0.15,
    "flawless": 0.2,
    "perfect": 0.25
  }
}
```

Operations: `add_value`, `add_multiplied_base`, `add_multiplied_total`.

**Enchantment bonus:**
```json
{
  "type": "apotheosis:enchantment",
  "enchantment": "minecraft:sharpness",
  "gem_class": "apotheosis:melee_weapon",
  "mode": "existing",
  "values": { "flawed": 1, "normal": 2, "flawless": 3, "perfect": 4 }
}
```

`mode: "existing"` only applies if the item already has that enchantment. `mode: "always"` applies it regardless.

**Mob effect on hit:**
```json
{
  "type": "apotheosis:mob_effect",
  "gem_class": "apotheosis:melee_weapon",
  "mob_effect": "minecraft:slowness",
  "target": "attack_target",
  "values": {
    "flawed":   { "duration": 60,  "amplifier": 0, "cooldown": 100 },
    "normal":   { "duration": 80,  "amplifier": 0, "cooldown": 80  },
    "flawless": { "duration": 100, "amplifier": 1, "cooldown": 60  },
    "perfect":  { "duration": 120, "amplifier": 1, "cooldown": 40  }
  }
}
```

### Gem class values

Common gem classes for `gem_class`:
- `apotheosis:melee_weapon` — swords, axes
- `apotheosis:ranged_weapon` — bows, crossbows
- `apotheosis:trident`
- `apotheosis:helmet`, `apotheosis:chestplate`, `apotheosis:leggings`, `apotheosis:boots`
- `apotheosis:shield`

You can also use an inline object to combine types:
```json
"gem_class": {
  "key": "light_weapon",
  "types": ["apotheosis:melee_weapon", "apotheosis:trident"]
}
```

---

## Purity targets per dimension

Design gems with `min_purity` that matches the dimension's tier in the progression:

| Dimension | `min_purity` | Highest possible |
|-----------|-------------|-----------------|
| Overworld | cracked | chipped |
| Undergarden | flawed | normal |
| Nether | normal | flawless |
| Aether | flawless | flawless |
| Twilight Forest | flawless | perfect |
| Deep Dark | perfect | perfect |
| The End | perfect | perfect |

Note: `min_purity` sets the floor; the actual roll can be any purity above the minimum. The `weights` determine how often a higher purity is selected.

---

## Designing your Undergarden gems

Rather than adapting existing vanilla Apotheosis gems, create 2-3 custom gems that feel thematically tied to the Undergarden. The dimension has a cold, gloom-underground feel (cloggrum is blue-ish, froststeel implies frost). Some ideas:

**Permafrost** — chestplate gem, cold damage resist + attack slow on hit. Fits the froststeel aesthetic.

**Umbra** — melee weapon gem, minor lifesteal + +% damage in darkness. Fits the dark underground theme.

**Umber** — boots gem, movement speed boost + fall damage reduction. Useful for the Undergarden's uneven terrain.

For each gem, create one file in `data/roguelike/gems/undergarden/`. The filename becomes part of the gem's registry name. Keep them lowercase with underscores.

---

## Gotchas

**Namespace matters** — the `type` field must always be `"apotheosis:affix_loot_entry"` or `"apotheosis:gem"` regardless of what namespace your files are in. The namespace in your file path just controls your mod's ownership of the registry entry.

**No rarities field = all rarities** — omitting `rarities` from an affix_loot_entry means any rarity can roll. Be explicit if you want to exclude common drops.

**Weights and world tiers** — if a player is on `haven` difficulty and your entry only has weights for `ascent` and above, that entry never rolls for that player. The world tier and the drop location are separate from L2H player level. Make sure you understand where your players are likely to be tier-wise when they reach each dimension.

**Testing gems** — use the `/apotheosis affix_debug` command if it exists, or open the Reforging Station and put in the base item — you should see options rolling from your dimension's pool. Better yet, go to the dimension in creative, kill mobs, and watch what drops.
