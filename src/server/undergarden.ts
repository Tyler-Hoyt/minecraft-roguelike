// src/server/undergarden.ts
// Undergarden chapter — unlocks Ars Nouveau magic system.
//
// On entry, players gain the UNDERGARDEN_ENTERED stage (see stages.ts).
// The recipes here activate once the player has cloggrum ingots, which
// requires entering the dimension and mining its ore.

export function registerUndergarden(e: RecipesKubeEvent): void {
  // ── Source Gem — gated to Undergarden ────────────────────────────────────
  // The direct crafting recipe is removed. Source gems are obtained by smelting
  // cloggrum ore/ingot, forcing entry into the Undergarden first.
  // TODO (you): tune XP and cook time after playtesting
  e.smelting('ars_nouveau:source_gem', 'undergarden:cloggrum_ingot', 0.8, 200);
  e.blasting('ars_nouveau:source_gem', 'undergarden:cloggrum_ingot', 0.8, 100);

  // ── Worn Notebook — entry point for Ars Nouveau ───────────────────────────
  // Requires 1 cloggrum ingot to signal the player has been to the Undergarden.
  // Shapeless so the crafting grid order doesn't matter.
  e.shapeless('ars_nouveau:worn_notebook', [
    'minecraft:book',
    'undergarden:cloggrum_ingot',
  ]);

  // ── Imbuement Chamber — the root of Ars Nouveau crafting ─────────────────
  // Gate it behind cloggrum so players cannot set up the imbuement system
  // before entering the Undergarden.
  // TODO (you): adjust pattern/materials after playtesting
  e.shaped('ars_nouveau:imbuement_chamber', [
    'XGX',
    'G G',
    'XGX',
  ], {
    X: 'ars_nouveau:archwood_planks',
    G: 'undergarden:cloggrum_ingot',
  });

  // TODO (you): Forgotten Metal bridges — decide if it gates anything
  // e.shaped('ars_nouveau:item_xyz', [...], { A: 'undergarden:forgotten_metal_ingot' });
}

export function registerUndergardenTags(e: TagKubeEvent): void {
  e.add('forge:ingots/cloggrum', 'undergarden:cloggrum_ingot');
  e.add('forge:ingots/forgotten_metal', 'undergarden:forgotten_metal_ingot');
}

ServerEvents.recipes(registerUndergarden);
ServerEvents.tags('minecraft:item', registerUndergardenTags);
