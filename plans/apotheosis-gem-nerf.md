# Apotheosis Gem & Affix Nerf — Paxi Datapack

The goal here is to reduce all Apotheosis gem bonuses and affix stat ranges to **35% of their original values** (a 65% cut). There is no published 1.21.1 version of any nerf datapack, so we build it ourselves as a Paxi datapack that overrides Apotheosis's own data files using the `apotheosis` namespace.

All dimension-specific gems are kept — just nerfed. The original Modrinth pack (1.20.1 only, 80% cut) removes dimension gems; we don't want that.

---

## How Paxi Overrides Work

Paxi loads datapacks from `config/paxi/datapacks/`. Any file at `data/apotheosis/gems/core/ballast.json` in your datapack completely replaces the vanilla Apotheosis copy of that file. You **must** use the `apotheosis` namespace — using `roguelike` would add a second gem entry instead of replacing it.

File layout:

```
config/paxi/datapacks/
  apotheosis-compat/
    pack.mcmeta
    data/
      apotheosis/
        gems/
          core/         ← 13 files
          overworld/    ← 3 files
          the_nether/   ← 3 files
          the_end/      ← 2 files
        affixes/        ← ~40+ files (separate phase, see below)
```

Register the pack in `config/paxi/datapack_load_order.json`:

```json
{ "loadOrder": ["apotheosis-compat"] }
```

---

## Special Case Decisions

Before the tables, a few situations that can't be "× 0.35" mechanically:

| Case | What it is | Recommendation |
|---|---|---|
| `earth.json` enchant levels | +1/+2/+3/+4 sharpness/protection/fortune | Halve and round: keep **+1/+1/+2/+2** |
| `inferno.json` efficiency | +1/+2/+3/+4 breaker enchant | Keep **+1/+1/+2/+2** |
| `inferno.json` berserkers_fury | +1/+1/+2/+2 (already tiered) | Drop by one: keep **+1/+1/+1/+1** |
| `endersurge.json` global sharpness | flawless +1, perfect +2 | Keep both at **+1** (cap perfect) |
| `verdant_ruin.json` radial mining | 3×2/3×3/5×3/5×5 mine shapes | Keep as-is — no numeric scaling possible |
| `molten_breach.json` omnetic | diamond→netherite tool morphing | Keep as-is — structural, not a number |
| `tyrannical.json` bleeding | 160t amp0/amp1 cooldown 40t | Scale duration: **56t** both, cd **14t** |
| `warlord.json` strength | 200t amp0/amp1 cooldown 40t | Scale duration: **70t** both, cd **14t** |
| `inferno.json` detonation | 80t amp0/amp1 cooldown 1200t | Scale duration: **28t** both, cd **420t** |
| `mageslayer.json` resistance | 200t/300t amp0/1 cd 400t | Scale: **70t/105t**, amp stays same, cd **140t** |
| `blood_lord.json` bloody_arrow | damage_mult 1.6/1.9/2.2/2.5 | Scale the **bonus portion**: `1 + (orig-1)×0.35` |
| `blood_lord.json` leech_block | heal_factor 0.25/0.40/0.55/0.65 | Raw × 0.35 makes sense here |
| Twilight Forest gems | `twilight/forest.json`, `queen.json` | Skip — mod-conditional, leave unchanged unless TF is in the pack |

For bloody_arrow specifically: the original multiplier of `1.6` means "deals 160% damage to bleeding targets." The *bonus* is 0.6 above baseline. At 35%, `1 + 0.6×0.35 = 1.21`. That way it still does bonus damage rather than becoming a penalty.

---

## Core Gems — Calculated Values

All purities: cracked / chipped / flawed / normal / flawless / perfect

---

### `ballast.json`

**Original → 35% (rounded to 3 sig figs)**

| Slot | Attribute | Orig values (cracked→perfect) | Nerfed |
|---|---|---|---|
| melee / trident | `generic.attack_damage` add_value | 1.0 / 2.0 / 3.5 / 5.0 / 7.0 / 10.0 | **0.35 / 0.70 / 1.23 / 1.75 / 2.45 / 3.50** |
| breaker / shears | durability bonus | 0.10 / 0.15 / 0.25 / 0.35 / 0.45 / 0.60 | **0.035 / 0.053 / 0.088 / 0.123 / 0.158 / 0.21** |
| chestplate / leggings | `generic.knockback_resistance` add_value | 0.1 / 0.2 / 0.3 / 0.4 / 0.5 / 0.7 | **0.035 / 0.07 / 0.105 / 0.14 / 0.175 / 0.245** |

---

### `brawlers.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / trident | `generic.attack_speed` add_mult_base | 0.10 / 0.15 / 0.20 / 0.30 / 0.35 / 0.50 | **0.035 / 0.053 / 0.07 / 0.105 / 0.123 / 0.175** |
| chestplate / leggings | `generic.max_health` add_value | 1.0 / 2.0 / 4.0 / 6.0 / 8.0 / 12.0 | **0.35 / 0.70 / 1.40 / 2.10 / 2.80 / 4.20** |
| shield | `generic.max_health` add_mult_total | 0.05 / 0.10 / 0.15 / 0.20 / 0.25 / 0.30 | **0.018 / 0.035 / 0.053 / 0.07 / 0.088 / 0.105** |

---

### `breach.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:armor_pierce` add_value | 2.0 / 3.0 / 5.0 / 7.0 / 9.0 / 12.0 | **0.70 / 1.05 / 1.75 / 2.45 / 3.15 / 4.20** |
| breaker / shears | `player.block_interaction_range` add_value | 0.5 / 1.0 / 1.5 / 2.0 / 2.5 / 3.0 | **0.175 / 0.35 / 0.525 / 0.70 / 0.875 / 1.05** |
| bow | `apothic_attributes:prot_pierce` add_value | 4.0 / 5.0 / 7.0 / 8.0 / 10.0 / 15.0 | **1.40 / 1.75 / 2.45 / 2.80 / 3.50 / 5.25** |

---

### `combatant.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| bow / trident | `apothic_attributes:arrow_damage` add_mult_base | 0.05 / 0.15 / 0.20 / 0.30 / 0.40 / 0.55 | **0.018 / 0.053 / 0.07 / 0.105 / 0.14 / 0.193** |
| chestplate / leggings | physical damage_reduction | 0.050 / 0.075 / 0.125 / 0.175 / 0.225 / 0.275 | **0.018 / 0.026 / 0.044 / 0.061 / 0.079 / 0.096** |
| melee_weapon | durability bonus | 0.05 / 0.10 / 0.15 / 0.225 / 0.30 / 0.40 | **0.018 / 0.035 / 0.053 / 0.079 / 0.105 / 0.14** |

---

### `guardian.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| chestplate / leggings | `generic.armor` add_value | 0.5 / 1.0 / 2.5 / 4.0 / 6.0 / 8.0 | **0.175 / 0.35 / 0.875 / 1.40 / 2.10 / 2.80** |
| melee / trident | `apothic_attributes:life_steal` add_value | 0.05 / 0.10 / 0.15 / 0.20 / 0.25 / 0.30 | **0.018 / 0.035 / 0.053 / 0.07 / 0.088 / 0.105** |
| shield | `generic.armor` add_mult_total | 0.05 / 0.10 / 0.20 / 0.25 / 0.30 / 0.45 | **0.018 / 0.035 / 0.07 / 0.088 / 0.105 / 0.158** |

---

### `lightning.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| bow | `apothic_attributes:arrow_velocity` add_mult_base | 0.05 / 0.15 / 0.25 / 0.35 / 0.425 / 0.55 | **0.018 / 0.053 / 0.088 / 0.123 / 0.149 / 0.193** |
| breaker / shears | `apothic_attributes:mining_speed` add_value | 0.05 / 0.15 / 0.25 / 0.35 / 0.425 / 0.50 | **0.018 / 0.053 / 0.088 / 0.123 / 0.149 / 0.175** |
| leggings / boots | `generic.movement_speed` add_mult_total | 0.10 / 0.225 / 0.375 / 0.45 / 0.55 / 0.70 | **0.035 / 0.079 / 0.131 / 0.158 / 0.193 / 0.245** |

---

### `lunar.json`

Lunar and solar are mirrors — lunar has negative gravity (lighter) and cold damage, solar has positive gravity (heavier) and fire damage.

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:cold_damage` add_value | 1.0 / 1.5 / 2.5 / 4.0 / 6.0 / 8.0 | **0.35 / 0.525 / 0.875 / 1.40 / 2.10 / 2.80** |
| chestplate / leggings | `generic.gravity` add_mult_total (neg) | -0.10 / -0.25 / -0.45 / -0.65 / -0.85 / -1.04 | **-0.035 / -0.088 / -0.158 / -0.228 / -0.298 / -0.364** |
| boots | `neoforge:swim_speed` add_mult_base | 0.10 / 0.20 / 0.30 / 0.45 / 0.60 / 0.80 | **0.035 / 0.07 / 0.105 / 0.158 / 0.21 / 0.28** |

---

### `samurai.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| all weapons | `apothic_attributes:crit_chance` add_value | 0.05 / 0.15 / 0.25 / 0.35 / 0.40 / 0.50 | **0.018 / 0.053 / 0.088 / 0.123 / 0.14 / 0.175** |
| leggings / boots | `generic.armor_toughness` add_mult_total | 0.10 / 0.15 / 0.175 / 0.225 / 0.275 / 0.35 | **0.035 / 0.053 / 0.061 / 0.079 / 0.096 / 0.123** |
| leggings / boots | `generic.movement_speed` add_mult_total (neg) | -0.025 / -0.05 / -0.075 / -0.10 / -0.125 / -0.15 | **-0.009 / -0.018 / -0.026 / -0.035 / -0.044 / -0.053** |
| helmet | `apothic_attributes:arrow_velocity` add_mult_total | 0.075 / 0.15 / 0.25 / 0.375 / 0.425 / 0.50 | **0.026 / 0.053 / 0.088 / 0.131 / 0.149 / 0.175** |
| shield | `apothic_attributes:dodge_chance` add_value | 0.01 / 0.02 / 0.04 / 0.06 / 0.08 / 0.10 | **0.004 / 0.007 / 0.014 / 0.021 / 0.028 / 0.035** |

---

### `slipstream.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| bow | `apothic_attributes:draw_speed` add_mult_base | 0.10 / 0.25 / 0.35 / 0.45 / 0.50 / 0.60 | **0.035 / 0.088 / 0.123 / 0.158 / 0.175 / 0.21** |
| breaker / shears | `apothic_attributes:mining_speed` add_mult_base | 0.10 / 0.15 / 0.225 / 0.30 / 0.375 / 0.45 | **0.035 / 0.053 / 0.079 / 0.105 / 0.131 / 0.158** |
| boots | `apothic_attributes:dodge_chance` add_value | 0.025 / 0.05 / 0.075 / 0.10 / 0.125 / 0.15 | **0.009 / 0.018 / 0.026 / 0.035 / 0.044 / 0.053** |

---

### `solar.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:fire_damage` add_value | 1.0 / 1.5 / 2.5 / 4.0 / 6.0 / 8.0 | **0.35 / 0.525 / 0.875 / 1.40 / 2.10 / 2.80** |
| chestplate / leggings | `generic.gravity` add_mult_total (pos) | 0.10 / 0.25 / 0.45 / 0.65 / 0.85 / 1.04 | **0.035 / 0.088 / 0.158 / 0.228 / 0.298 / 0.364** |
| boots | `generic.step_height` add_value | 0.25 / 0.50 / 1.0 / 1.5 / 2.0 / 3.0 | **0.088 / 0.175 / 0.35 / 0.525 / 0.70 / 1.05** |

---

### `splendor.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| all armor | `generic.luck` add_value | 0.5 / 1.25 / 2.0 / 2.25 / 3.5 / 5.0 | **0.175 / 0.438 / 0.70 / 0.788 / 1.225 / 1.75** |
| melee / trident / bow / breaker | `apothic_attributes:experience_gained` add_mult_base | 0.075 / 0.15 / 0.225 / 0.30 / 0.40 / 0.60 | **0.026 / 0.053 / 0.079 / 0.105 / 0.14 / 0.21** |

---

### `tyrannical.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / trident | `generic.attack_knockback` add_value | 0.5 / 1.0 / 1.5 / 2.0 / 3.0 / 3.5 | **0.175 / 0.35 / 0.525 / 0.70 / 1.05 / 1.225** |
| chestplate / leggings | `generic.armor_toughness` add_value | 0.5 / 1.0 / 2.0 / 3.0 / 4.0 / 6.0 | **0.175 / 0.35 / 0.70 / 1.05 / 1.40 / 2.10** |
| shield | `generic.armor_toughness` add_mult_base | 0.05 / 0.15 / 0.225 / 0.30 / 0.375 / 0.50 | **0.018 / 0.053 / 0.079 / 0.105 / 0.131 / 0.175** |
| boots | `generic.max_health` add_mult_total | 0.05 / 0.075 / 0.125 / 0.175 / 0.225 / 0.40 | **0.018 / 0.026 / 0.044 / 0.061 / 0.079 / 0.14** |
| boots | `apothic_attributes:life_steal` add_value (neg) | -0.025 / -0.05 / -0.075 / -0.10 / -0.125 / -0.20 | **-0.009 / -0.018 / -0.026 / -0.035 / -0.044 / -0.07** |
| bow | bleeding mob effect on target | flawless: 160t amp0 cd40, perfect: 160t amp1 cd40 | **flawless: 56t amp0 cd14, perfect: 56t amp1 cd14** |

---

### `warlord.json`

| Slot | Attribute | Orig | Nerfed |
|---|---|---|---|
| melee / bow | `apothic_attributes:crit_damage` add_mult_base | 0.10 / 0.20 / 0.35 / 0.45 / 0.55 / 0.70 | **0.035 / 0.07 / 0.123 / 0.158 / 0.193 / 0.245** |
| chestplate | `generic.max_health` add_mult_base | 0.05 / 0.10 / 0.15 / 0.20 / 0.25 / 0.35 | **0.018 / 0.035 / 0.053 / 0.07 / 0.088 / 0.123** |
| helmet | `generic.attack_damage` add_mult_total | 0.05 / 0.10 / 0.125 / 0.15 / 0.175 / 0.225 | **0.018 / 0.035 / 0.044 / 0.053 / 0.061 / 0.079** |
| trident | strength mob effect on self | flawless: 200t amp0 cd40, perfect: 200t amp1 cd40 | **flawless: 70t amp0 cd14, perfect: 70t amp1 cd14** |

---

## Overworld Gems — Calculated Values

These use `"constraints": {"dimensions": ["minecraft:overworld"]}` and `"min_purity": "flawed"`. Keep those constraint fields in your override.

---

### `earth.json`

The enchantment levels are integers. "× 0.35" doesn't produce useful results. Instead, keep the gem but cap the enchantment boost so it's strictly weaker at every purity.

| Slot | Enchantment | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident | sharpness | +1 / +2 / +3 / +4 | **+1 / +1 / +2 / +2** |
| chestplate / leggings | protection | +1 / +2 / +3 / +4 | **+1 / +1 / +2 / +2** |
| breaker / shears | fortune | +1 / +2 / +3 / +4 | **+1 / +1 / +2 / +2** |

---

### `royalty.json`

Drop-transform percentages are treated as numeric and scaled × 0.35.

| Slot | Effect | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| helmet | all_stats add_mult_total | 0.05 / 0.075 / 0.10 / 0.15 | **0.018 / 0.026 / 0.035 / 0.053** |
| breaker | copper→gold drop_transform | 15% / 20% / 25% / 40% | **5% / 7% / 9% / 14%** |
| bow | `apothic_attributes:prot_shred` add_value | 0.25 / 0.30 / 0.35 / 0.40 | **0.088 / 0.105 / 0.123 / 0.14** |
| bow | `apothic_attributes:draw_speed` add_mult_total (neg) | -0.35 / -0.45 / -0.55 / -0.65 | **-0.123 / -0.158 / -0.193 / -0.228** |
| shield | `generic.armor` add_mult_base | 0.15 / 0.25 / 0.35 / 0.50 | **0.053 / 0.088 / 0.123 / 0.175** |
| shield | `generic.armor_toughness` add_mult_base | 0.075 / 0.125 / 0.225 / 0.30 | **0.026 / 0.044 / 0.079 / 0.105** |
| shield | `generic.movement_speed` add_mult_total (neg) | -0.25 / -0.30 / -0.35 / -0.40 | **-0.088 / -0.105 / -0.123 / -0.14** |

---

### `verdant_ruin.json`

The radial mining shapes (3×2, 3×3, 5×3, 5×5) are kept unchanged — they're structural, not a numeric magnitude.

| Slot | Effect | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident / bow | `apothic_attributes:armor_shred` add_value | 0.075 / 0.15 / 0.25 / 0.40 | **0.026 / 0.053 / 0.088 / 0.14** |
| melee / trident / bow | `generic.armor` add_mult_total (neg) | -0.025 / -0.05 / -0.075 / -0.10 | **-0.009 / -0.018 / -0.026 / -0.035** |
| chestplate | magic damage_reduction | 0.125 / 0.15 / 0.175 / 0.20 | **0.044 / 0.053 / 0.061 / 0.07** |
| boots | `generic.knockback_resistance` add_mult_total | 0.05 / 0.10 / 0.15 / 0.20 | **0.018 / 0.035 / 0.053 / 0.07** |
| boots | `generic.attack_knockback` add_mult_total (neg) | -0.075 / -0.10 / -0.125 / -0.15 | **-0.026 / -0.035 / -0.044 / -0.053** |
| breaker | radial mining 3×2/3×3/5×3/5×5 per purity | — | **keep unchanged** |

---

## Nether Gems — Calculated Values

These use `"constraints": {"dimensions": ["minecraft:the_nether"]}` and `"min_purity": "flawed"`.

---

### `blood_lord.json`

For `bloody_arrow`, scale the bonus above 1.0 rather than the raw multiplier:
`nerfed = 1 + (original - 1) × 0.35`

| Slot | Effect | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:life_steal` add_value | 0.10 / 0.125 / 0.15 / 0.15 | **0.035 / 0.044 / 0.053 / 0.053** |
| melee / trident | `apothic_attributes:life_steal` add_mult_total | 0.05 / 0.10 / 0.20 / 0.30 | **0.018 / 0.035 / 0.07 / 0.105** |
| helmet | `generic.attack_damage` add_mult_total | 0.25 / 0.35 / 0.45 / 0.60 | **0.088 / 0.123 / 0.158 / 0.21** |
| helmet | `generic.max_health` add_mult_total (neg) | -0.30 / -0.40 / -0.50 / -0.65 | **-0.105 / -0.14 / -0.175 / -0.228** |
| chestplate | `apothic_attributes:healing_received` add_mult_base | 0.20 / 0.30 / 0.40 / 0.50 | **0.07 / 0.105 / 0.14 / 0.175** |
| bow | bloody_arrow damage multiplier | 1.6 / 1.9 / 2.2 / 2.5 | **1.21 / 1.315 / 1.42 / 1.525** |
| shield | leech_block heal_factor | 0.25 / 0.40 / 0.55 / 0.65 | **0.088 / 0.14 / 0.193 / 0.228** |

---

### `inferno.json`

Enchantment levels use the halved approach. Mob effect duration × 0.35.

| Slot | Effect | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident | detonation mob effect on hit (cd 1200t) | — / — / 80t amp0 / 80t amp1 | **— / — / 28t amp0 / 28t amp0** (amp capped at 0; cd **420t**) |
| chestplate | berserkers_fury enchantment | 1 / 1 / 2 / 2 | **1 / 1 / 1 / 1** |
| breaker | efficiency enchantment | 1 / 2 / 3 / 4 | **1 / 1 / 2 / 2** |
| helmet | `apothic_attributes:fire_damage` add_mult_total | 0.50 / 0.625 / 0.75 / 0.90 | **0.175 / 0.219 / 0.263 / 0.315** |

---

### `molten_breach.json`

`omnetic` (diamond→netherite tool morphing) is kept unchanged — it's a structural ability, not a numeric value.

| Slot | Effect | Orig (flawed/normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:prot_pierce` add_value | 5.5 / 8.0 / 9.5 / 12.0 | **1.925 / 2.80 / 3.325 / 4.20** |
| bow | `apothic_attributes:armor_pierce` add_value | 4.0 / 5.5 / 8.0 / 10.0 | **1.40 / 1.925 / 2.80 / 3.50** |
| shield | `player.entity_interaction_range` add_value | 0.5 / 0.75 / 1.25 / 1.75 | **0.175 / 0.263 / 0.438 / 0.613** |
| chestplate | `generic.attack_damage` add_mult_base | 0.05 / 0.10 / 0.125 / 0.175 | **0.018 / 0.035 / 0.044 / 0.061** |
| chestplate | `apothic_attributes:healing_received` add_mult_total (neg) | -0.05 / -0.15 / -0.25 / -0.35 | **-0.018 / -0.053 / -0.088 / -0.123** |
| leggings | `generic.scale` add_value | 0.075 / 0.125 / 0.15 / 0.25 | **0.026 / 0.044 / 0.053 / 0.088** |
| breaker / shears | omnetic tool morphing | unchanged | **unchanged** |

---

## End Gems — Calculated Values

These use `"constraints": {"dimensions": ["minecraft:the_end"]}`.

---

### `endersurge.json`

Global enchantment on any item. Integer levels — cap the perfect tier at +1 instead of +2.

| Slot | Enchantment | mode | Orig | Nerfed |
|---|---|---|---|---|
| any | sharpness | global | flawless +1, perfect +2 | **flawless +1, perfect +1** |

---

### `mageslayer.json`

Mob effect duration × 0.35 with cooldown × 0.35.

| Slot | Effect | Orig (normal/flawless/perfect) | Nerfed |
|---|---|---|---|
| melee / trident | `apothic_attributes:prot_shred` add_value | 0.30 / 0.55 / 0.75 | **0.105 / 0.193 / 0.263** |
| melee / trident | `generic.armor` add_mult_base (neg) | -0.20 / -0.35 / -0.55 | **-0.07 / -0.123 / -0.193** |
| helmet | mageslayer ability multiplier | 0.15 / 0.225 / 0.35 | **0.053 / 0.079 / 0.123** |
| shield | resistance mob effect on block | 200t amp0 cd400 / 300t amp0 cd400 / 300t amp1 cd400 | **70t amp0 cd140 / 105t amp0 cd140 / 105t amp1 cd140** |

---

## Affixes — Phase 2

Affixes are a separate set of ~40+ JSON files. The structure is different from gems — each file uses `{min, max, step}` ranges per rarity tier. The nerf is the same: multiply **`min` and `max` × 0.35**. The `step` value stays the same (it controls rounding granularity, not magnitude).

Example of what the nerfed format looks like (from `violent.json`):

```json
"values": {
  "apotheosis:common":   { "min": 0.70, "max": 1.05, "step": 0.25 },
  "apotheosis:uncommon": { "min": 0.70, "max": 1.05, "step": 0.25 },
  "apotheosis:rare":     { "min": 1.05, "max": 1.75, "step": 0.25 },
  "apotheosis:epic":     { "min": 1.40, "max": 2.10, "step": 0.25 },
  "apotheosis:mythic":   { "min": 1.75, "max": 2.80, "step": 0.25 }
}
```

Before implementing affixes, we need to fetch all the actual values from the Apotheosis source. The known subdirectories to pull from:

```
affixes/
  armor/attribute/   ← ~14 files
  armor/dmg_reduction/
  armor/mob_effect/
  melee/attribute/   ← ~12 files
  melee/cleaving.json
  melee/executing.json
  melee/festive.json
  melee/thunderstruck.json
  melee/mob_effect/
  weapon/attribute/shredding.json
  ranged/attribute/  ← 4 files
  ranged/enchantment/
  ranged/magical.json
  ranged/spectral.json
  ranged/mob_effect/
  generic/attribute/lucky.json
  generic/telepathic.json
  breaker/
  shears/
  shield/
```

The affix fetch and implementation is a separate session. Do gems first, then come back for affixes once the gem datapack is verified in-game.

---

## Implementation Steps

1. Create `config/paxi/datapacks/apotheosis-compat/pack.mcmeta`
2. Create each gem JSON file using the nerfed values from the tables above
3. Update `config/paxi/datapack_load_order.json` to include `"apotheosis-compat"`
4. Launch the game and use `/apotheosis gem debug` (or check creative inventory gem slots) to verify values are loading from the datapack
5. Phase 2: fetch affix values, apply × 0.35 to min/max, create affix JSON files

---

## `pack.mcmeta` Template

```json
{
  "pack": {
    "pack_format": 48,
    "description": "Apotheosis gem and affix nerf — all values at 35% of vanilla"
  }
}
```

Pack format 48 is correct for Minecraft 1.21.1.
