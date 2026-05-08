// src/server/overworld.ts
// Overworld chapter — recipe modifications and pre-Undergarden progression gating.
//
// GATE PHILOSOPHY:
//   Ars Nouveau locked until post-Undergarden / late-game.
//   Sophisticated Backpacks power upgrades (magnet, void) are gated to Nether.

export function registerOverworldRecipes(e: RecipesKubeEvent): void {
  // ── Vanilla tweaks ────────────────────────────────────────────────────────
  e.remove({ output: 'minecraft:enchanted_golden_apple' });

  // ── Ars Nouveau — block all entry points pre-Undergarden ──────────────────
  // The imbuement chamber is the root of the Ars Nouveau crafting tree.
  // Blocking it (and the worn notebook) prevents all magic before Undergarden.
  // Gated replacements are added in undergarden.ts.
  e.remove({ output: 'ars_nouveau:worn_notebook' });
  e.remove({ output: 'ars_nouveau:imbuement_chamber' });

  // Remove imbuement routes that bypass the source gem crafting block.
  // These convert lapis/amethyst → source gems using only overworld materials.
  e.remove({ type: 'ars_nouveau:imbuement', output: 'ars_nouveau:source_gem' });
  e.remove({ type: 'ars_nouveau:imbuement', output: 'ars_nouveau:source_gem_block' });

  // ── Sophisticated Backpacks — power upgrades available from Overworld ────────
  // Magnet and void upgrades are progression items but do not need dimensional gating
  // until nether.ts is created (Stage 3). Gate will be re-added there when ready.
}

export function registerOverworldTags(e: TagKubeEvent): void {
  // Add Undergarden stone items to stone tag
  e.add('forge:stone', 'undergarden:umberstone');
  e.add('forge:stone', 'undergarden:shiverstone');
}

ServerEvents.recipes(registerOverworldRecipes);
ServerEvents.tags('minecraft:item', registerOverworldTags);
