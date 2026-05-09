# Layer 1 — L2 Hostility Dimension Floors

The goal here is simple: make sure every dimension has a mob level floor so that players who somehow rush into the Undergarden with minimal kill count still meet dangerous enemies. Without this, the `dimensionFactor` multiplier in `l2hostility-server.toml` only amplifies what already exists — and if a player level is 5, that's still a level 10 mob in the Undergarden, which is nothing.

L2 Hostility supports datapack-driven entity and difficulty configs out of the box. Both `enableEntitySpecificDatapack` and `enableStructureSpecificDatapack` are already set to `true` in `config/l2configs/l2hostility-server.toml`, so the mod is already watching for these files.

---

## How L2H reads datapack configs

There are two config types relevant here:

**Entity configs** (`l2hostility_config/entity/`) — global per-entity-type settings. These apply to that entity type no matter what dimension they're in. Good for boss-specific floors.

**Difficulty configs** (`l2hostility_config/difficulty/`) — dimension/biome/structure overrides. The `levelMap` key controls the base difficulty formula per dimension, and `levelDefaultTraits` lets you set entity-specific floors *within* a dimension. This is what you want for dimension-wide mob floors.

Both types live under `data/{namespace}/` in a datapack. Namespace can be anything — we're using `roguelike` throughout this project.

---

## File locations

Everything goes inside a Paxi datapack folder. Paxi loads from `config/paxi/datapacks/`. Create that directory structure if it doesn't exist yet.

```
config/paxi/datapacks/
└── hostility/
    └── data/
        └── roguelike/
            └── l2hostility_config/
                ├── difficulty/
                │   ├── undergarden.json
                │   ├── nether.json        (when you get to Nether chapter)
                │   ├── aether.json        (when you get to Aether chapter)
                │   ├── twilight.json
                │   ├── deep_dark.json
                │   └── end.json
                └── entity/
                    ├── rotspawn.json      (Undergarden boss)
                    └── wither.json        (Nether boss, etc.)
```

Paxi needs to know the datapack exists. Add `"hostility"` to the `loadOrder` array in `config/paxi/datapack_load_order.json`:

```json
{
  "loadOrder": ["hostility"]
}
```

If you later add the `apotheosis-compat` pack from Layer 3, add that here too: `["hostility", "apotheosis-compat"]`.

---

## The difficulty config — Undergarden

This is the main floor-setting file. The `levelMap` block sets the base difficulty formula for the whole dimension, and `levelDefaultTraits` sets entity-specific overrides within that dimension.

```json
{
  "levelMap": {
    "undergarden:undergarden": {
      "min": 0,
      "base": 60,
      "variation": 15.0,
      "scale": 1.2,
      "apply_chance": 1.0,
      "trait_chance": 1.0,
      "suppression": 0.0
    }
  },
  "levelDefaultTraits": {
    "undergarden:undergarden": [
      {
        "entities": [
          "undergarden:gwibling",
          "undergarden:grobling",
          "undergarden:stomper",
          "undergarden:quarray_eel",
          "undergarden:voppan",
          "undergarden:scabber"
        ],
        "minSpawnLevel": 80,
        "maxLevel": 0,
        "maxTraitCount": -1,
        "healthScale": 1.0,
        "attackScale": 1.0,
        "presetTraitsOnly": false,
        "blacklist": [],
        "difficulty": {
          "min": 0,
          "base": 20,
          "variation": 10.0,
          "scale": 0.0,
          "apply_chance": 1.0,
          "trait_chance": 1.0,
          "suppression": 0.0
        },
        "traits": [],
        "items": [],
        "specialConditions": []
      }
    ]
  }
}
```

The key field is `minSpawnLevel`. It sets the minimum level a mob can spawn at — regardless of player level. So even a brand new player who somehow gets through the gate meets mobs at level 80+. That's your floor.

The `base` in `levelMap` (set to 60 here) raises the baseline for *all* mobs in the dimension, not just the listed ones. Think of it as the ambient difficulty. The `levelDefaultTraits` block lets you set per-entity floors on top of that.

---

## The entity config — Boss floors

For the Rotspawn boss specifically, use an entity config instead. Entity configs are global (not dimension-scoped) but that's fine for a boss that only exists in the Undergarden anyway.

```json
{
  "list": [
    {
      "entities": "undergarden:rotspawn",
      "minSpawnLevel": 100,
      "maxLevel": 0,
      "maxTraitCount": 3,
      "healthScale": 1.5,
      "attackScale": 1.2,
      "presetTraitsOnly": false,
      "blacklist": [],
      "difficulty": {
        "min": 100,
        "base": 50,
        "variation": 10.0,
        "scale": 0.5,
        "apply_chance": 1.0,
        "trait_chance": 1.0,
        "suppression": 0.0
      },
      "traits": [],
      "items": [],
      "specialConditions": []
    }
  ]
}
```

The `healthScale` and `attackScale` on top of the level scaling make the Rotspawn feel meaningfully more dangerous than the regular Undergarden mobs even at the same level. Tune these after playtesting.

---

## Dimension targets across the full chain

As you build out each chapter, create the corresponding difficulty file. These are the targets based on the progression plan:

| Dimension | Dimension ID | `levelMap.base` | `minSpawnLevel` | Boss `minSpawnLevel` |
|-----------|-------------|----------------|-----------------|----------------------|
| Undergarden | `undergarden:undergarden` | 60 | 80 | 100 (rotspawn) |
| Nether | `minecraft:the_nether` | 160 | 200 | 250 (Wither) |
| Aether | `aether:the_aether` | 350 | 400 | 450 (Slider) |
| Twilight Forest | `twilightforest:twilightforest` | 550 | 600 | 700 |
| Deep Dark | `minecraft:overworld` + biome | 750 | 800 | 900 (Warden) |
| The End | `minecraft:the_end` | 900 | 1000 | 1100 (Dragon) |

Deep Dark is tricky because it's in the overworld dimension — it's the `minecraft:deep_dark` biome. Use `biomeMap` instead of `levelMap` for that one, keyed by `"minecraft:deep_dark"`. The schema is identical, just swap the key.

---

## Merge behavior

Multiple `difficulty/` files from different datapacks are merged using `MAP_COLLECT`, meaning entries append rather than overwrite. So if vanilla L2H ships a `nether.json`, your `nether.json` will add to it rather than replace it. This is the safe behavior you want — you're not fighting the base mod config, just extending it.

Entity configs (`entity/`) also use `COLLECT`, so each file in the list appends its entries.

---

## Gotchas

**Entity IDs** — You need the exact registry name of the mob. For Undergarden mobs, open the game with F3 and hover over the mob with Jade enabled. It'll show the entity ID. Don't guess.

**The `difficulty.min` field** — This is separate from `minSpawnLevel`. `difficulty.min` is the minimum level contribution from the difficulty formula itself. Setting it to 0 is fine; the `minSpawnLevel` field is what actually enforces the floor.

**`maxLevel: 0` means no cap** — Leave it at 0. If you set a cap, high-level players will trivialize the dimension quickly.

**Testing the floor** — Start a creative world, use `/l2h level set <player> 0` (or however L2H exposes its commands) to reset your player level, then enter the Undergarden. Check mob level with Jade. It should show level 80+.

---

## l2hostility-server.toml tuning

While you're here, consider adjusting these values in `config/l2configs/l2hostility-server.toml`:

- `dimensionFactor = 2` → consider raising to `3`. This multiplies the player's level contribution when they're in a non-overworld dimension. With floors set, this mainly affects how fast mobs scale for experienced players returning to earlier content.
- `killsPerLevel = 50` — currently 50 kills per player level. This feels about right for the Overworld chapter. If the Undergarden boss requires ~100 kills to feel manageable, players will be around level 2 when they enter, making the floor of 80 a real wall. That's intentional.
- `playerDeathDecay = 0.0` — already set to 0, which means no difficulty loss on death. Good for a roguelike — don't change this.
