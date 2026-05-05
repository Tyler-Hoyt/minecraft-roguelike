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
  // The catalyst is NOT craftable — it is quest-only.
  e.remove({ output: 'undergarden:catalyst' });

  // ── Gilded Stone (Aether Portal Key) ─────────────────────────────────────
  // Unlocks: The Aether dimension
  // Requires: Nether materials + Wither Star (dropped after Wither quest)
  // TODO (you): Adjust recipe cost after playtesting the Nether chapter
  e.shaped('roguelike:gilded_stone', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'minecraft:nether_brick',   // TODO: balance material
    B: 'minecraft:blaze_rod',      // TODO: balance material
    C: 'minecraft:nether_star',    // Wither drop — the real gate ingredient
  });

  // ── Dimensional Lens (Twilight/Blue Skies Key) ────────────────────────────
  // Unlocks: Twilight Forest or Blue Skies
  // Requires: Aether materials + Slider Trophy (FTB Quests reward from Slider kill)
  // TODO (you): Adjust once Aether boss drops are confirmed
  e.shaped('roguelike:dimensional_lens', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'aether:skyroot_planks',    // TODO: replace with Aether-tier material
    B: 'aether:zanite_gemstone',   // TODO: balance material
    C: 'roguelike:slider_trophy',  // Custom item — rewarded by FTB Quests on Slider kill
  });

  // ── Echo Key (Deep Dark Key) ──────────────────────────────────────────────
  // Unlocks: The Deep Dark chapter
  // Requires: Late-dim boss trophy + End materials
  // TODO (you): Adjust once Twilight/Blue Skies chapter is complete
  e.shaped('roguelike:echo_key', [
    ' A ',
    'ABA',
    ' A ',
  ], {
    A: 'minecraft:echo_shard',             // Found in Ancient Cities
    B: 'roguelike:twilight_trophy',        // Custom item — rewarded on late-dim boss kill
  });
}

ServerEvents.recipes(registerGateRecipes);
