function registerDimensionRunes(event: ItemRegistryKubeEvent): void {
  // Fragments
  event
    .create("roguelike:overworld_rune_fragment")
    .displayName("Overworld Rune Fragment")
    .tooltip(
      "A fragment of a rune that can be used to create a dimension rune.",
    )
    .maxStackSize(64)
    .rarity("uncommon");
  event
    .create("roguelike:undergarden_rune_fragment")
    .displayName("Undergarden Rune Fragment")
    .tooltip(
      "A fragment of a rune that can be used to create a dimension rune.",
    )
    .maxStackSize(64)
    .rarity("uncommon");

  // Runes
  event
    .create("roguelike:overworld_rune")
    .displayName("Overworld Rune")
    .tooltip(
      "A dimension rune that radiates with the warm feeling of the Overworld",
    )
    .maxStackSize(16)
    .rarity("rare");
  event
    .create("roguelike:undergarden_rune")
    .displayName("Undergarden Rune")
    .tooltip(
      "A dimension rune that radiates with the fear felt in the Undergarden",
    )
    .maxStackSize(16)
    .rarity("rare");
}

StartupEvents.registry("item", registerDimensionRunes);
