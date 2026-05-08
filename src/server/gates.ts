// src/server/gates.ts
// Progression gate system — enforces dimensional order via recipe gates.
// All gate logic lives here. Dimension scripts must not add gate logic directly.
//
// GATE MECHANISM:
//   1. Each portal key item has a custom crafting ingredient
//   2. That ingredient is rewarded by FTB Quests after the previous boss quest
//   3. Without the ingredient, the key cannot be crafted → dimension is locked
//
// TODO (you): Tune the material costs for each key recipe below.
// TODO (you): Confirm custom item IDs once your resource pack/KubeJS item registry is set up.

export function registerGateRecipes(e: RecipesKubeEvent): void {
  // ── Undergarden Catalyst ──────────────────────────────────────────────────
  // Unlocks: Undergarden dimension
  // Gate: FTB Quests reward after completing the Apotheosis Frontier Gateway
  // The catalyst is NOT craftable — it is quest-only. Probably going to get end remastered for the eye of ender issue
  e.remove({ output: 'undergarden:catalyst' });
  e.remove({ output: 'minecraft:eye_of_ender' });
}

ServerEvents.recipes(registerGateRecipes);
