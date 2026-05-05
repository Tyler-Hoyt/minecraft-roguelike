// src/server/nether.ts
// Nether chapter — introduces Blood Magic, Forbidden Arcanus,
// and unlocks Sophisticated Backpacks power upgrades.
//
// STUB SECTIONS (marked TODO):
//   - Blood Altar activation gate ingredient recipe
//   - Forbidden Arcanus Stellarite Piece recipe
//   - Storage Drawers unlock (gated behind Nether Gold)
//   - Wither Boss gate recipe (Gilded Stone is in gates.ts)

export function registerNetherRecipes(e: RecipesKubeEvent): void {
  // ── Sophisticated Backpacks — power upgrades unlock in Nether ─────────────
  // Magnet and void upgrades are removed in overworld.ts.
  // Re-adding them here makes them available once the player has Nether materials.
  // Using nether-specific ingredients ensures the player has entered the Nether.
  e.shaped('sophisticatedbackpacks:magnet_upgrade', [
    'EIE',
    'IPI',
    'R L',
  ], {
    E: '#c:ender_pearls',
    I: '#c:ingots/iron',
    P: 'sophisticatedbackpacks:pickup_upgrade',
    R: '#c:dusts/redstone',
    L: '#c:gems/lapis',
  });

  e.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
    ' D ',
    'GMG',
    'RRR',
  ], {
    D: '#c:gems/diamond',
    G: 'minecraft:gold_ingot',
    M: 'sophisticatedbackpacks:magnet_upgrade',
    R: '#c:dusts/redstone',
  });

  e.shaped('sophisticatedbackpacks:void_upgrade', [
    ' E ',
    'OBO',
    'RON',
  ], {
    E: '#c:ender_pearls',
    O: '#c:obsidians',
    B: 'sophisticatedbackpacks:upgrade_base',
    R: '#c:dusts/redstone',
    N: 'minecraft:nether_brick',
  });

  e.shaped('sophisticatedbackpacks:advanced_void_upgrade', [
    ' D ',
    'GVG',
    'RRR',
  ], {
    D: '#c:gems/diamond',
    G: 'minecraft:gold_ingot',
    V: 'sophisticatedbackpacks:void_upgrade',
    R: '#c:dusts/redstone',
  });

  // ── Forbidden Arcanus — Stellarite Piece Bridge ───────────────────────────
  // TODO (you): Adjust cost after testing.
  // e.remove({ output: 'forbidden_arcanus:stellarite_piece' });
  // e.shaped('forbidden_arcanus:stellarite_piece', [
  //   'ABA',
  //   'BCB',
  //   'ABA',
  // ], {
  //   A: 'minecraft:soul_sand',
  //   B: 'minecraft:blaze_rod',
  //   C: 'minecraft:ancient_debris',
  // });

  // ── Blood Magic — Altar Activation Item ──────────────────────────────────
  // TODO (you): Blood Magic's altar crafting — decide what activates it.
  // e.shaped('bloodmagic:activation_crystal', [...], { ... });

  // ── Storage Drawers — Controller Unlock ───────────────────────────────────
  // TODO (you): Adjust if you want Drawers available earlier.
  // e.remove({ output: 'storagedrawers:controller' });
  // e.shaped('storagedrawers:controller', [...], { ... });
}

export function registerNetherTags(e: TagKubeEvent): void {
  // TODO (you): Tag bridges for Nether mod compatibility
}

ServerEvents.recipes(registerNetherRecipes);
ServerEvents.tags('minecraft:item', registerNetherTags);
