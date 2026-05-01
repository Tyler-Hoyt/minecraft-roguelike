// src/server/twilight.ts
// Twilight Forest / Blue Skies chapter — gear ceiling and AE2 endgame gates.
//
// STUB SECTIONS (marked TODO):
//   - Boss trophy → crafting material recipes (your creative decision)
//   - AE2 Quantum Bridge gate
//   - Ars Nouveau Tier 3 recipe gate
//   - Echo Key recipe is in gates.ts

export function registerTwilightRecipes(e: RecipesKubeEvent): void {
  // ── Boss Trophy → Crafting Material ──────────────────────────────────────
  // TODO (you): Decide what each Twilight Forest boss trophy crafts into.
  // This is the most creative part of this chapter — trophies should feel
  // meaningful and reward exploration of the boss chain.
  //
  // Examples (all commented out — uncomment and modify):
  // Naga Trophy → Naga Scale Ingot
  // e.shaped('roguelike:naga_scale_ingot', ['AAA'], { A: 'twilightforest:naga_trophy' });
  //
  // Lich Trophy → Lich Essence
  // e.smelting('roguelike:lich_essence', 'twilightforest:lich_trophy', 1.5, 300);
  //
  // Hydra Trophy → Hydra Heart
  // e.shaped('roguelike:hydra_heart', ['ABA'], {
  //   A: 'twilightforest:hydra_trophy',
  //   B: 'minecraft:blaze_powder',
  // });

  // ── AE2 — Quantum Bridge Gate ─────────────────────────────────────────────
  // The AE2 Quantum Bridge is powerful — gate it behind the final Twilight boss.
  // TODO (you): Confirm AE2 Quantum Bridge item ID.
  // e.remove({ output: 'ae2:quantum_ring' });
  // e.shaped('ae2:quantum_ring', [...], {
  //   ...,
  //   C: 'roguelike:twilight_boss_material', // trophy-derived item
  // });

  // ── Ars Nouveau — Tier 3 Gate ─────────────────────────────────────────────
  // Ars Nouveau Tier 3 spells require a Twilight-tier material.
  // TODO (you): Check Ars Nouveau Tier 3 upgrade item and gate it here.
  // e.remove({ output: 'ars_nouveau:tier3_spell_book' });
  // e.shaped('ars_nouveau:tier3_spell_book', [...], {
  //   ...,
  //   C: 'roguelike:twilight_boss_material',
  // });
}

ServerEvents.recipes(registerTwilightRecipes);
