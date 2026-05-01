// src/server/end.ts
// The End chapter — final crafting, Dragon Egg recipes, ultimate weapon.
//
// STUB SECTIONS (marked TODO):
//   - The ultimate weapon recipe (YOUR design — make it legendary)
//   - Dragon's Breath potion bridge recipes
//   - End City ship custom loot is in loot-tables.ts

export function registerEndRecipes(e: RecipesKubeEvent): void {
  // ── Dragon Egg → Crafting Material ───────────────────────────────────────
  // TODO (you): The Dragon Egg is the ultimate progression gate.
  // Decide what it crafts into. Suggestions:
  //   - Dragon Egg Shard (compressed, multiple uses)
  //   - Dragon Scale (armor material)
  //   - Dragon Heart (weapon core)
  //
  // e.shaped('roguelike:dragon_scale', [
  //   'ABA',
  //   'BAB',
  //   'ABA',
  // ], {
  //   A: 'minecraft:dragon_breath',
  //   B: 'minecraft:dragon_egg',   // only one exists — make it feel special
  // });

  // ── Ultimate Weapon Recipe ─────────────────────────────────────────────────
  // TODO (you): This is YOUR signature item. Design it to feel legendary.
  // It should require materials from EVERY dimension as a final crafting challenge.
  //
  // e.shaped('roguelike:the_roguelike_blade', [
  //   ' A ',
  //   'ABA',
  //   ' C ',
  // ], {
  //   A: 'roguelike:dragon_scale',          // End
  //   B: 'roguelike:heart_of_the_warden',   // Deep Dark
  //   C: 'roguelike:twilight_boss_material', // Twilight
  //   // TODO: add more dimension materials
  // });

  // ── Dragon's Breath Bridges ───────────────────────────────────────────────
  // TODO (you): Dragon's Breath can be used in custom End recipes.
  // e.shaped('roguelike:ender_essence', ['ABA'], {
  //   A: 'minecraft:ender_pearl',
  //   B: 'minecraft:dragon_breath',
  // });
}

ServerEvents.recipes(registerEndRecipes);
