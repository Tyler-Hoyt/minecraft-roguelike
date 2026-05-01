// src/server/undergarden.ts
// Undergarden chapter — introduces Ars Nouveau magic.
//
// STUB SECTIONS (marked TODO):
//   - The exact Cloggrum → Source Gem bridge recipe (costs TBD after playtesting)
//   - The Ars Nouveau Awakening altar recipe gate
//   - Any Undergarden-specific item bridges

export function registerUndergarden(e: RecipesKubeEvent): void {
  // ── Cloggrum → Ars Nouveau Source Gem Bridge ──────────────────────────────
  // Cloggrum is the primary Undergarden ore. Bridge it to Ars Nouveau's source gem
  // so players must enter the Undergarden before unlocking magic.
  //
  // TODO (you): Decide the cost. Tune after playtesting the Undergarden chapter.
  // Remove the default Ars Nouveau source gem recipe and replace with this gated one:
  // e.remove({ output: 'ars_nouveau:source_gem' });
  // e.smelting('ars_nouveau:source_gem', 'undergarden:cloggrum_ingot', 0.8, 200);

  // ── Forgotten Metal Bridge ────────────────────────────────────────────────
  // TODO (you): Forgotten Metal is the other Undergarden ore.
  // Decide if it bridges to anything (armor, Ars tools, etc.)
  // e.shaped('ars_nouveau:item_xyz', [...], { A: 'undergarden:forgotten_metal_ingot' });

  // ── Ars Nouveau Worn Notebook ─────────────────────────────────────────────
  // The entry point for Ars Nouveau — keep its recipe vanilla OR gate it here.
  // TODO (you): Gate or keep open? Gating forces Undergarden visit first.
  // e.remove({ output: 'ars_nouveau:worn_notebook' });
  // e.shaped('ars_nouveau:worn_notebook', ['AB'], { A: 'minecraft:book', B: 'undergarden:cloggrum_ingot' });
}

export function registerUndergardenTags(e: TagKubeEvent): void {
  // TODO (you): Cross-mod tag bridges for Undergarden materials
  // e.add('forge:ingots/cloggrum', 'undergarden:cloggrum_ingot');
  // e.add('forge:ingots/forgotten_metal', 'undergarden:forgotten_metal_ingot');
}

ServerEvents.recipes(registerUndergarden);
ServerEvents.tags('minecraft:item', registerUndergardenTags);
