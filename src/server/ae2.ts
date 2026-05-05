// src/server/ae2.ts
// Applied Energistics 2 — late-game automation chapter.
//
// GATE MECHANISM:
//   The Inscriber is the root of all AE2 crafting. Its recipe is removed in
//   overworld.ts. It is re-added here requiring a custom FTB Quests reward item
//   so the player must complete the prerequisite chapter quest before building AE2.
//
//   All other AE2 items (Controller, Drive, etc.) require the Inscriber to craft,
//   so gating the Inscriber gates the entire tree.
//
// TODO (you): Decide which chapter milestone rewards 'roguelike:ae2_activation_core'.
//   Suggested: Deep Dark chapter completion (after Echo Key + Warden kill quest).
// TODO (you): Register 'roguelike:ae2_activation_core' as a custom item in src/startup/.

export function registerAe2Recipes(e: RecipesKubeEvent): void {
  // ── Inscriber — re-add with FTB Quests gate ingredient ───────────────────
  // roguelike:ae2_activation_core is rewarded by FTB Quests on chapter completion.
  // Without it, the inscriber cannot be crafted, locking the entire AE2 tree.
  e.shaped('appliedenergistics2:inscriber', [
    'ICI',
    'IBI',
    'ICI',
  ], {
    I: 'minecraft:iron_ingot',
    C: 'appliedenergistics2:certus_quartz_crystal',
    B: 'roguelike:ae2_activation_core',
  });

  // ── Fluix Crystal — re-add (still requires water transform in-world) ──────
  // The water-transform recipe is a world interaction, not a crafting recipe.
  // Only the crafting fallback needs re-adding if AE2 adds one.
  // TODO (you): Verify if AE2 has a standalone crafting recipe for fluix_crystal
  // or if it only uses the in-world water transform (which is unaffected by e.remove).
}

ServerEvents.recipes(registerAe2Recipes);
