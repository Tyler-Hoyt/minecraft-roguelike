function modifyEntityTables(event: LootModificationEventJS) {
  event
    .addTableModifier(LootType.ENTITY)
    .replaceLoot(
      "paraglider:stamina_vessel",
      LootEntry.of("paraglider:spirit_orb").limitCount(1, 4),
    );

  // Each dimension boss should drop a rune for that dimension, with a 100% chance to drop at least 1 and up to 4
  // There is currently no undergarden boss however and the overworld boss is currently the apotheosis wave game so need to look into that
}

LootJS.modifiers(modifyEntityTables);
