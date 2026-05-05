// src/server/overworld.ts
// Overworld chapter — recipe modifications and pre-Undergarden progression gating.
//
// GATE PHILOSOPHY:
//   Ars Nouveau and AE2 are locked until post-Undergarden / late-game.
//   Iron's Spellbooks is a dungeon-reward system — arcane_anvil is craftable early,
//   but high-tier items drop from dungeons rather than being craftable from scratch.
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

  // ── Applied Energistics 2 — block entry chain pre-AE2_ONLINE ─────────────
  // AE2 is end-game automation. Certus Quartz spawns in the overworld but
  // the crafting chain should not unlock until the AE2_ONLINE quest stage.
  // Gated re-adds live in src/server/ae2.ts.
  e.remove({ output: 'appliedenergistics2:inscriber' });
  e.remove({ output: 'appliedenergistics2:controller' });
  e.remove({ output: 'appliedenergistics2:drive' });
  e.remove({ output: 'appliedenergistics2:fluix_crystal' });

  // ── Sophisticated Backpacks — gate power upgrades ─────────────────────────
  // Iron backpack and basic upgrades are fine early.
  // Magnet and void upgrades are re-added in nether.ts.
  // Auto-crafting upgrade is re-added in aether.ts.
  e.remove({ output: 'sophisticatedbackpacks:magnet_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:advanced_magnet_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:void_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:advanced_void_upgrade' });
  e.remove({ output: 'sophisticatedbackpacks:crafting_upgrade' });
}

export function registerOverworldTags(e: TagKubeEvent): void {
  // TODO (you): Add items to tags for cross-mod compatibility.
  // Example: add Undergarden stone variants to the #forge:stone tag
  // e.add('forge:stone', 'undergarden:umberstone');
}

ServerEvents.recipes(registerOverworldRecipes);
ServerEvents.tags('minecraft:item', registerOverworldTags);
