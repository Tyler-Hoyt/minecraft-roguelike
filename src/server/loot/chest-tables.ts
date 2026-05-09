function modifyChestTable(event: LootModificationEventJS) {
  event
    .addTableModifier(LootType.CHEST)
    // Replace all vanilla ores with their rough shard equivalents, and ingots with nuggets
    .replaceLoot(
      "minecraft:iron_ingot",
      LootEntry.of("minecraft:iron_nugget").limitCount(1, 5),
    )
    .replaceLoot(
      "minecraft:gold_ingot",
      LootEntry.of("minecraft:gold_nugget").limitCount(1, 5),
    )
    .replaceLoot(
      "minecraft:diamond",
      LootEntry.of("spelunkery:rough_diamond_shard"),
    )
    .replaceLoot(
      "minecraft:emerald",
      LootEntry.of("spelunkery:rough_emerald_shard"),
    )
    // Replace all vanilla/simplyswords diamond tools and armor with rough diamonds
    .replaceLoot(
      "minecraft:diamond_pickaxe",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "minecraft:diamond_axe",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "minecraft:diamond_shovel",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "minecraft:diamond_hoe",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_longsword",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_glaive",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_rapier",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_greataxe",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_greathammer",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_katana",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_chakran",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_halberd",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_sai",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_cutlass",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_scythe",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_claymore",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_twinblade",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_spear",
      LootEntry.of("spelunkery:rough_diamond"),
    )
    .replaceLoot(
      "simplyswords:diamond_warglaive",
      LootEntry.of("spelunkery:rough_diamond"),
    );

  // Overworld chests get a small chance to drop rune fragments
  event
    .addTableModifier(LootType.CHEST)
    .matchDimension("minecraft:overworld")
    .addLoot(
      LootEntry.of("roguelike:overworld_rune_fragment")
        .when((condition) => condition.randomChance(0.1))
        .limitCount(1, 1),
    );

  // Undergarden chests get a small chance to drop undergarden rune fragments
  event
    .addTableModifier(LootType.CHEST)
    .matchDimension("undergarden:undergarden")
    .addLoot(
      LootEntry.of("roguelike:undergarden_rune_fragment")
        .when((condition) => condition.randomChance(0.1))
        .limitCount(1, 1),
    );
}

LootJS.modifiers(modifyChestTable);
