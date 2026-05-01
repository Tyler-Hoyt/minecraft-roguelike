// src/server/overworld.ts
// Overworld chapter — recipe modifications, Apotheosis gem system tweaks,
// and early-game progression balancing.
//
// STUB SECTIONS (marked TODO — fill in with your balance decisions):
//   - Which vanilla recipes to remove or make harder
//   - Apotheosis gem crafting adjustments
//   - Any early-game custom items

export function registerOverworldRecipes(e: RecipesKubeEvent): void {
  // ── Remove / Nerf vanilla shortcuts ──────────────────────────────────────
  // TODO (you): Decide which vanilla recipes to restrict for roguelike feel.
  // Examples below are commented out — uncomment and adjust as needed.

  // Remove crafting diamond tools directly (force smelting first)
  // e.remove({ output: 'minecraft:diamond_pickaxe' });
  // e.remove({ output: 'minecraft:diamond_sword' });

  // Remove easy enchanting shortcuts
  // e.remove({ output: 'minecraft:enchanted_golden_apple' });

  // ── Apotheosis Integration ────────────────────────────────────────────────
  // TODO (you): Add Apotheosis gem crafting tweaks here.
  // Apotheosis generates its own recipes, but you can add bridges.
  // Example: make a specific gem require an Undergarden material (post-gate):
  // e.shaped('apotheosis:gem_X', [...], { ... });

  // ── Sophisticated Storage Bridge ──────────────────────────────────────────
  // Make the iron backpack available early — it's the tutorial storage item
  // TODO (you): Adjust if you want storage to feel more earned
  // e.shaped('sophisticatedbackpacks:backpack', [...], { ... });
}

export function registerOverworldTags(e: TagKubeEvent): void {
  // TODO (you): Add items to tags for cross-mod compatibility.
  // Example: add Undergarden stone variants to the #forge:stone tag
  // e.add('forge:stone', 'undergarden:umberstone');
}

ServerEvents.recipes(registerOverworldRecipes);
ServerEvents.tags('minecraft:item', registerOverworldTags);
