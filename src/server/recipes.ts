// src/server/recipes.ts
// Example server-side recipe modifications.
// Export the handler so it can be tested directly without Minecraft.

export function registerRecipes(e: RecipesKubeEvent): void {
  /* Sophisticated Storage */
  e.remove({ output: "sophisticatedstorage:jukebox_upgrade" });
  e.remove({ output: "sophisticatedstorage:advanced_jukebox_upgrade" });
  e.remove({ output: "sophisticatedstorage:storage_jukebox_upgrade_from_backpack_jukebox_upgrade" });
  e.remove({ output: "sophisticatedstorage:storage_advanced_jukebox_upgrade_from_backpack_advanced_jukebox_upgrade" });
  e.remove({ output: "sophisticatedstorage:backpack_jukebox_upgrade_from_storage_jukebox_upgrade" });
  e.remove({
    output: "sophisticatedstorage:backpack_advanced_jukebox_upgrade_from_storage_advanced_jukebox_upgrade"
  });

  // Add a custom shaped crafting recipe
  /*
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
  */
}

ServerEvents.recipes(registerRecipes);
