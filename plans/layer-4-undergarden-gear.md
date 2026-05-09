# Layer 4 — Undergarden Gear Attribute Tuning

The armor progression in `armor-recipes.ts` already forces players through Cloggrum → Froststeel → Utherium. The recipes require the previous tier as a crafting ingredient, so there's already mechanical gating. This layer is about making sure those tiers actually *feel* different to wear, not just look different.

The vanilla Undergarden mod ships gear that's roughly:
- **Cloggrum** — iron tier (maybe slightly better, not noticeably so)
- **Froststeel** — somewhere between iron and diamond
- **Utherium** — approaching diamond, with a minor bonus effect

That's fine as a baseline, but "between iron and diamond" is vague. We want each tier to have a clear identity so players know when it's worth upgrading. The ideal scenario is that you can feel the difference when you put on a new set.

---

## KubeJS ItemEvents.modification

KubeJS 1.21.1 supports modifying item properties via `ItemEvents.modification`. This runs at startup and changes item definitions before the game starts, so it affects everything — crafting, drops, and display.

```typescript
// src/server/dimensions/undergarden-attributes.ts
StartupEvents.modifyCreativeModeTab('combat', event => {
  // not needed — just showing the pattern
});

ItemEvents.modification('undergarden:cloggrum_chestplate', event => {
  event.maxDamage = 600; // vanilla iron chestplate is 240
});
```

The question is whether you can modify *armor defense values* (the actual protection stat) this way, or only things like `maxDamage`, `attackSpeed`, `attackDamage`. In 1.21.1, armor defense is often baked into the material definition in Java code, not a runtime attribute. KubeJS may not expose a setter for it.

**Test this first.** Open a test world, apply the modification, equip the item, and check the F3 attributes screen or a mod like Jade/BetterTooltips. If the armor value changed, great. If not, fall back to the approach in the section below.

---

## File location

```
src/server/dimensions/undergarden-attributes.ts
```

This runs at `StartupEvents.modifyItem` time. Register it there, not under `ServerEvents`.

```typescript
// undergarden-attributes.ts

ItemEvents.modification('undergarden:cloggrum_helmet',     event => { event.maxDamage = 180;  });
ItemEvents.modification('undergarden:cloggrum_chestplate', event => { event.maxDamage = 600;  });
ItemEvents.modification('undergarden:cloggrum_leggings',   event => { event.maxDamage = 450;  });
ItemEvents.modification('undergarden:cloggrum_boots',      event => { event.maxDamage = 300;  });

ItemEvents.modification('undergarden:froststeel_helmet',     event => { event.maxDamage = 270; });
ItemEvents.modification('undergarden:froststeel_chestplate', event => { event.maxDamage = 900; });
ItemEvents.modification('undergarden:froststeel_leggings',   event => { event.maxDamage = 675; });
ItemEvents.modification('undergarden:froststeel_boots',      event => { event.maxDamage = 450; });

ItemEvents.modification('undergarden:utherium_helmet',     event => { event.maxDamage = 364; });
ItemEvents.modification('undergarden:utherium_chestplate', event => { event.maxDamage = 1200; });
ItemEvents.modification('undergarden:utherium_leggings',   event => { event.maxDamage = 900;  });
ItemEvents.modification('undergarden:utherium_boots',      event => { event.maxDamage = 600;  });
```

Those durability numbers use vanilla as reference: iron is ~240/165/240/195, diamond is ~363/528/495/429. The targets above give Cloggrum noticeably better durability than iron, Froststeel in diamond territory, and Utherium well above diamond.

---

## If armor defense values can't be set via KubeJS

This is likely. The armor defense stat in NeoForge 1.21 comes from the item's `ArmorMaterial` definition which is registered in Java. KubeJS can probably override `maxDamage` and add attribute modifiers, but not the base armor defense directly.

In that case, use `event.getMainHandStack()... addItemAttribute(...)` — no, that's not right either.

The actual approach: use KubeJS `ItemEvents.modification` with `event.addAttributeModifier(...)` if the API supports it. This adds an attribute modifier to the item, which stacks with the base armor value. It won't replace the armor defense, but it will add to it.

```typescript
ItemEvents.modification('undergarden:cloggrum_chestplate', event => {
  // Add +2 armor on top of whatever the mod gives it natively
  event.addAttributeModifier(
    'minecraft:generic.armor',
    'roguelike:cloggrum_armor_boost',
    2,
    'add_value'
  );
});
```

This works but requires knowing what the base value is first. Open the game, equip the item, check F3 or a tooltip mod for the current armor value, then calculate how much to add to hit your target.

---

## Target stat goals

Rather than absolute numbers (which depend on what the Undergarden mod ships), here are targets expressed as ratios relative to vanilla tiers. Check the actual values in-game and work backward.

| Item | Defense Target | Toughness | Durability |
|------|--------------|-----------|-----------|
| Cloggrum (full set) | = Iron (15 armor) | 0 | 1.5× Iron |
| Froststeel (full set) | Between iron+diamond (~18 armor) | 1 | 1.0× Diamond |
| Utherium (full set) | ≈ Diamond (20 armor) | 2 | 1.1× Diamond |

The goal for Cloggrum isn't to blow iron out of the water — it's to have meaningfully better durability so players feel OK spending materials to make a new set. The defense should be roughly equivalent so the upgrade isn't jarring, just more durable.

Froststeel should feel like a real upgrade from iron. The player coming out of the Overworld with iron gear should immediately feel more protected when they switch to Froststeel.

Utherium is the endgame of the Undergarden, and should prepare the player for the Nether. Diamond-equivalent defense with a slight toughness boost is the target.

---

## Fallback: just use quest text

If KubeJS can't modify what you need, or the Undergarden mod's stats are already close enough to the targets, lean on FTB Quests to explain the differences explicitly. A short quest description that says "Froststeel has the durability of diamond armor — it'll last you through the Nether" does a lot of work. Players who read quest text will know why to upgrade; the mechanical difference just needs to be detectable, not dramatic.

Check the actual armor values in-game first. The Undergarden mod might already ship stats that are close enough.

---

## Utherium special effect

Utherium has a built-in minor effect in the vanilla mod (I believe a cold aura or similar — verify in-game). If it doesn't have anything interesting, consider adding a KubeJS persistent effect for full Utherium set:

```typescript
// In a PlayerEvents.tick handler, if the player has all 4 Utherium pieces equipped
// and lacks the "set bonus" effect, apply it.
// Keep the set check lightweight — use a tick interval.
PlayerEvents.tick(event => {
  if (event.server.tickCount % 40 !== 0) return; // check every 2 seconds

  const p = event.player;
  const armor = [
    p.inventory.getArmor(0), // boots
    p.inventory.getArmor(1), // leggings
    p.inventory.getArmor(2), // chestplate
    p.inventory.getArmor(3), // helmet
  ];

  const fullSet = armor.every(item => item.id.startsWith('undergarden:utherium_'));
  if (fullSet) {
    p.potionEffects.add('minecraft:resistance', 40, 0, false, true);
  }
});
```

This is optional — the affix system already provides plenty of ways to differentiate sets. But a visual set bonus (resistance effect icon) gives players clear feedback that their full Utherium set is "active."

---

## Gotchas

**Don't touch weapons via this layer** — weapon damage for Cloggrum/Froststeel/Utherium tools isn't worth tuning here. The affix system (Layer 3) is where weapon power scaling happens. A Rare affix on a Cloggrum sword is going to feel much better than tweaking the base 2 damage points.

**Test after every change** — KubeJS startup modifications can crash the game if you pass an invalid attribute operation or modifier ID. Run the build and launch a test world before committing anything.

**Undergarden item IDs** — verify them in-game. Likely: `undergarden:cloggrum_chestplate`, `undergarden:froststeel_helmet`, `undergarden:utherium_leggings`. Use Jade or F3+H to confirm exact IDs.
