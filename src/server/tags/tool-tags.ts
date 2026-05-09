function registerToolTags(event: TagKubeEvent) {
  // Add current tools to the appropriate tags for compatibility with mods that use those tags for their recipes. This is necessary because some mods (like Farmer's Delight) use these tags in their recipes, and if the tools aren't included, players won't be able to use them in those recipes.
  event
    .get("farmersdelight:tools/pickaxes")
    .add("minecraft:iron_pickaxe")
    .add("minecraft:golden_pickaxe")
    .add("minecraft:diamond_pickaxe")
    .add("minecraft:netherite_pickaxe");

  // Add dimension runes and fragments to the appropriate tags for compatibility with mods that use those tags for their recipes. This is necessary because some mods (like Astral Sorcery) use these tags in their recipes, and if the dimension runes aren't included, players won't be able to use them in those recipes.
  event
    .get("roguelike:dimension_rune_fragment")
    .add("roguelike:overworld_rune_fragment")
    .add("roguelike:undergarden_rune_fragment");
  event
    .get("roguelike:dimension_rune")
    .add("roguelike:overworld_rune")
    .add("roguelike:undergarden_rune");
}

ServerEvents.tags("item", registerToolTags);
