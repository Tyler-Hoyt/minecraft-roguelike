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

  // ── Sophisticated Backpacks — gate power upgrades ─────────────────────────
  // Iron backpack and basic upgrades are fine early.
  // Magnet and void upgrades are re-added in nether.ts.
  e.remove({ output: 'sophisticatedbackpacks:magnet_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:advanced_magnet_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:void_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:advanced_void_upgrade' });

  e.remove({ output: 'minecraft:eye_of_ender' });
}

export function registerOverworldTags(e: TagKubeEvent): void {
  // TODO (you): Add items to tags for cross-mod compatibility.
  // Example: add Undergarden stone variants to the #forge:stone tag
  // e.add('forge:stone', 'undergarden:umberstone');
}

ServerEvents.recipes(registerOverworldRecipes);
ServerEvents.tags('minecraft:item', registerOverworldTags);
