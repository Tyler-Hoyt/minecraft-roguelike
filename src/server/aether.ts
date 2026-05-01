// src/server/aether.ts
// Aether chapter — introduces Applied Energistics 2 and Malum magic.
//
// STUB SECTIONS (marked TODO):
//   - AE2 Charger gate recipe (requires Aether Silver)
//   - Malum unlock recipe (requires Slider trophy)
//   - Zanite → AE2 Fluix Crystal bridge
//   - Dimensional Lens recipe is in gates.ts

export function registerAetherRecipes(e: RecipesKubeEvent): void {
  // ── AE2 — Charger Gate ────────────────────────────────────────────────────
  // The AE2 Charger is the first thing you build. Gate it behind Aether Silver.
  // This ensures AE2 cannot be started before the Aether chapter.
  //
  // TODO (you): Confirm AE2 Charger item ID and adjust recipe cost.
  // e.remove({ output: 'ae2:charger' });
  // e.shaped('ae2:charger', [
  //   'ABA',
  //   'BCB',
  //   'ABA',
  // ], {
  //   A: 'aether:zanite_gemstone',
  //   B: 'aether:skyroot_planks',
  //   C: 'minecraft:iron_block',
  // });

  // ── Zanite → AE2 Fluix Crystal Bridge ────────────────────────────────────
  // Zanite Gemstone (Aether) serves as an alternative path to Fluix Crystal.
  // TODO (you): Decide if this bridge is needed or if vanilla AE2 progression is fine.
  // e.smelting('ae2:fluix_crystal', 'aether:zanite_gemstone', 1.0, 400);

  // ── Malum — First Ritual Unlock ───────────────────────────────────────────
  // Malum's tainted enchanting requires the Slider Trophy (custom FTB Quests reward).
  // TODO (you): Check Malum's actual entry item and gate it here.
  // e.remove({ output: 'malum:spirit_altar' });
  // e.shaped('malum:spirit_altar', [...], {
  //   ...,
  //   specialIngredient: 'roguelike:slider_trophy',
  // });
}

export function registerAetherTags(e: TagKubeEvent): void {
  // TODO (you): Tag bridges for Aether mod compatibility
  // e.add('forge:gems/zanite', 'aether:zanite_gemstone');
}

ServerEvents.recipes(registerAetherRecipes);
ServerEvents.tags('minecraft:item', registerAetherTags);
