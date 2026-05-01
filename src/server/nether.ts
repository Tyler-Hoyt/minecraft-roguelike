// src/server/nether.ts
// Nether chapter — introduces Blood Magic and Forbidden Arcanus.
//
// STUB SECTIONS (marked TODO):
//   - Blood Altar activation gate ingredient recipe
//   - Forbidden Arcanus Stellarite Piece recipe
//   - Storage Drawers unlock (gated behind Nether Gold)
//   - Wither Boss gate recipe (Gilded Stone is in gates.ts)

export function registerNetherRecipes(e: RecipesKubeEvent): void {
  // ── Forbidden Arcanus — Stellarite Piece Bridge ───────────────────────────
  // Stellarite is the core Forbidden Arcanus crafting material.
  // Gate it behind Nether-specific materials so players must be in the Nether.
  //
  // TODO (you): Adjust cost after testing. Blaze Rod + Soul Sand is a placeholder.
  // e.remove({ output: 'forbidden_arcanus:stellarite_piece' });
  // e.shaped('forbidden_arcanus:stellarite_piece', [
  //   'ABA',
  //   'BCB',
  //   'ABA',
  // ], {
  //   A: 'minecraft:soul_sand',
  //   B: 'minecraft:blaze_rod',
  //   C: 'minecraft:ancient_debris', // TODO: adjust gate ingredient
  // });

  // ── Blood Magic — Altar Activation Item ──────────────────────────────────
  // The Blood Altar needs an activation item gated behind Nether progress.
  // TODO (you): Blood Magic's altar crafting — decide what activates it.
  // Option: require a Nether Wart block + Zombie Piglin trophy (custom FTB Quests reward)
  // e.shaped('bloodmagic:activation_crystal', [...], { ... });

  // ── Storage Drawers — Controller Unlock ───────────────────────────────────
  // Storage Drawers Controller is a powerful item — gate it to Nether progression.
  // TODO (you): Adjust if you want Drawers available earlier.
  // e.remove({ output: 'storagedrawers:controller' });
  // e.shaped('storagedrawers:controller', [
  //   'ABA',
  //   'BCB',
  //   'ABA',
  // ], {
  //   A: 'minecraft:nether_brick',
  //   B: 'minecraft:gold_ingot',
  //   C: 'minecraft:chest',
  // });
}

export function registerNetherTags(e: TagKubeEvent): void {
  // TODO (you): Tag bridges for Nether mod compatibility
}

ServerEvents.recipes(registerNetherRecipes);
ServerEvents.tags('minecraft:item', registerNetherTags);
