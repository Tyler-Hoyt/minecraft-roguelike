// src/server/recipes.ts
// Example server-side recipe modifications.
// Export the handler so it can be tested directly without Minecraft.

export function registerRecipes(e: RecipesKubeEvent): void {
  // Remove the vanilla string crafting recipe
  e.remove({ output: 'minecraft:string' });

  // Add a custom shaped crafting recipe
  e.shaped('minecraft:diamond', [
    'ABA',
    'BCB',
    'ABA',
  ], {
    A: 'minecraft:coal',
    B: 'minecraft:iron_ingot',
    C: 'minecraft:gold_ingot',
  });

  // Add a simple smelting recipe
  e.smelting('minecraft:gold_ingot', 'minecraft:iron_ingot', 0.5, 100);
}

ServerEvents.recipes(registerRecipes);
