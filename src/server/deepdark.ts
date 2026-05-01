// src/server/deepdark.ts
// Deep Dark chapter — Warden gear gates and Sculk tool recipes.
//
// STUB SECTIONS (marked TODO):
//   - Heart of the Warden recipe (your decision on stats/use)
//   - Sculk-infused tool recipes
//   - AE2 Pattern Provider gate
//   - Echo Key recipe is in gates.ts

export function registerDeepDarkRecipes(e: RecipesKubeEvent): void {
  // ── Heart of the Warden ───────────────────────────────────────────────────
  // Custom drop from the Warden (via KubeJS loot table tweak in loot-tables.ts).
  // Used to craft Deep Dark tier gear.
  // TODO (you): Decide stats and use. Does it upgrade Netherite? Is it armor?
  // e.shaped('roguelike:warden_heart_chestplate', [
  //   'ABA',
  //   'BCB',
  //   'BAB',
  // ], {
  //   A: 'minecraft:netherite_ingot',
  //   B: 'minecraft:echo_shard',
  //   C: 'roguelike:heart_of_the_warden', // custom drop
  // });

  // ── Sculk-Infused Tools ───────────────────────────────────────────────────
  // TODO (you): Design Sculk tool recipes. They should require Warden drops.
  // e.shaped('roguelike:sculk_pickaxe', [...], {
  //   ...,
  //   C: 'roguelike:heart_of_the_warden',
  // });

  // ── AE2 — Pattern Provider Gate ───────────────────────────────────────────
  // Pattern Provider is core to AE2 autocrafting — gate it here for pacing.
  // TODO (you): Confirm AE2 Pattern Provider item ID.
  // e.remove({ output: 'ae2:pattern_provider' });
  // e.shaped('ae2:pattern_provider', [...], {
  //   ...,
  //   C: 'roguelike:heart_of_the_warden',
  // });
}

export function registerDeepDarkLoot(): void {
  // Warden custom drop is handled in loot-tables.ts
  // See: src/server/loot-tables.ts
}

ServerEvents.recipes(registerDeepDarkRecipes);
