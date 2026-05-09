// Register recipes for crafting runes from fragments.
function registerRuneRecipes(event: RecipesKubeEvent): void {
  event.shaped(Item.of("roguelike:overworld_rune"), ["AA ", "AA ", "   "], {
    A: "roguelike:overworld_rune_fragment",
  });
  event.shaped(Item.of("roguelike:undergarden_rune"), ["AA ", "AA ", "   "], {
    A: "roguelike:undergarden_rune_fragment",
  });
}

ServerEvents.recipes(registerRuneRecipes);
