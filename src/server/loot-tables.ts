// Modded items integrated (mods confirmed installed):
//   - Ars Nouveau (ars_nouveau:) — essences, glyphs, spell books (Only should occur in the undergarden or later)
//   - Simply Swords (simplyswords:) — iron/diamond weapons by tier

// Max number of unique items in a chest (stages 1-2)
const MAX_UNIQUE_ITEMS = 6;
// Treasure/secret rooms and late stages get more
const MAX_UNIQUE_ITEMS_TREASURE = 9;
const MAX_UNIQUE_ITEMS_LATE = 8;

// ── Roll Reduction ────────────────────────────────────────────────────────────

export function reduceDungeonCrawlRolls(event: any): void {
  const stage12 = ['dungeoncrawl:chests/stage_1', 'dungeoncrawl:chests/stage_2'];
  const stage345 = ['dungeoncrawl:chests/stage_3', 'dungeoncrawl:chests/stage_4', 'dungeoncrawl:chests/stage_5'];
  const treasures = ['dungeoncrawl:chests/treasure', 'dungeoncrawl:chests/secret_room'];

  for (const id of stage12) {
    event.getLootTable(id).firstPool((pool: any) => pool.rolls([2, 4]));
  }
  for (const id of [...stage345, ...treasures]) {
    event.getLootTable(id).firstPool((pool: any) => pool.rolls([3, 5]));
  }

  event.getLootTable('dungeoncrawl:chests/food').firstPool((pool: any) => pool.rolls([4, 6]));

  // Supply chest: main pool capped at [2,4], 4th pool (index 3) capped at [3,5]
  const supply = event.getLootTable('dungeoncrawl:chests/supply');
  supply.firstPool((pool: any) => pool.rolls([2, 4]));
  supply.modifyPool(3, (pool: any) => pool.rolls([3, 5]));
}

// ── Modded Item Integration ───────────────────────────────────────────────────

const ARS_T1_ESSENCES = [
  'ars_nouveau:fire_essence',
  'ars_nouveau:earth_essence',
  'ars_nouveau:air_essence',
  'ars_nouveau:water_essence',
];

export function addDungeonCrawlModdedLoot(event: any): void {
  // Stages 1-2 are Overworld dungeons — no Ars Nouveau loot here (magic gated to Undergarden).
  // Mid stages (3-4): T1 Ars essences start appearing (player is likely post-Undergarden by now)
  const mid = event.addTableModifier('dungeoncrawl:chests/stage_3', 'dungeoncrawl:chests/stage_4');
  for (const id of ARS_T1_ESSENCES) {
    mid.addLoot(LootEntry.of(id).randomChance(0.3).setCount([1, 3]));
  }

  // Late stage (5): apprentice spell book bonus
  const late = event.addTableModifier('dungeoncrawl:chests/stage_5');
  late.addLoot(LootEntry.of('ars_nouveau:apprentice_spell_book').randomChance(0.1));

  // Treasure / secret rooms: archmage spell book (rare)
  const treasure = event.addTableModifier('dungeoncrawl:chests/treasure', 'dungeoncrawl:chests/secret_room');
  treasure.addLoot(LootEntry.of('ars_nouveau:archmage_spell_book').randomChance(0.05));
}

export function changeLootModifiers(event: any): void {
  // Replace normal chest rolls with spelunkery items
  event.addTableModifier(LootType.CHEST)
    .replaceLoot("minecraft:gold_ingot", LootEntry.of("minecraft:gold_nugget").limitCount(1, 5))
    .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount(1, 5))
    .replaceLoot("minecraft:diamond", "spelunkery:rough_diamond_shard")
    .replaceLoot("minecraft:emerald", "spelunkery:emerald_shard")
    .replaceLoot("minecraft:diamond_pickaxe", "spelunkery:rough_diamond")
    .replaceLoot("minecraft:diamond_axe", "spelunkery:rough_diamond")
    .replaceLoot("minecraft:diamond_sword", "spelunkery:rough_diamond")
    .replaceLoot("minecraft:diamond_chestplate", "spelunkery:rough_diamond")
    .replaceLoot("minecraft:diamond_leggings", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_longsword", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_twinblade", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_rapier", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_katana", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_sai", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_spear", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_glaive", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_warglaive", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_cutlass", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_claymore", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_greathammer", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_greataxe", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_chakram", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_scythe", "spelunkery:rough_diamond")
    .replaceLoot("simplyswords:diamond_halberd", "spelunkery:rough_diamond");

  event.addTableModifier(LootType.CHEST).customAction((_context: any, loot: any) => {
    if (loot.size() <= MAX_UNIQUE_ITEMS) return;

    const lootList: any[] = [];
    loot.forEach((item: any) => lootList.push(item));
    loot.removeAll(ItemFilter.ANY);

    // Fisher-Yates shuffle, then take the first N items
    for (let i = lootList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lootList[i], lootList[j]] = [lootList[j], lootList[i]];
    }

    lootList.slice(0, MAX_UNIQUE_ITEMS).forEach((item: any) => loot.addItem(item));
  });

  // Treasure and secret rooms get a higher item cap
  const TREASURE_TABLES = ['dungeoncrawl:chests/treasure', 'dungeoncrawl:chests/secret_room'];
  event.addTableModifier(...TREASURE_TABLES).customAction((_context: any, loot: any) => {
    if (loot.size() <= MAX_UNIQUE_ITEMS_TREASURE) return;

    const lootList: any[] = [];
    loot.forEach((item: any) => lootList.push(item));
    loot.removeAll(ItemFilter.ANY);

    for (let i = lootList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lootList[i], lootList[j]] = [lootList[j], lootList[i]];
    }

    lootList.slice(0, MAX_UNIQUE_ITEMS_TREASURE).forEach((item: any) => loot.addItem(item));
  });

  // Late DC stages get a mid-tier cap
  const LATE_TABLES = ['dungeoncrawl:chests/stage_3', 'dungeoncrawl:chests/stage_4', 'dungeoncrawl:chests/stage_5'];
  event.addTableModifier(...LATE_TABLES).customAction((_context: any, loot: any) => {
    if (loot.size() <= MAX_UNIQUE_ITEMS_LATE) return;

    const lootList: any[] = [];
    loot.forEach((item: any) => lootList.push(item));
    loot.removeAll(ItemFilter.ANY);

    for (let i = lootList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lootList[i], lootList[j]] = [lootList[j], lootList[i]];
    }

    lootList.slice(0, MAX_UNIQUE_ITEMS_LATE).forEach((item: any) => loot.addItem(item));
  });

}

LootJS.lootTables(reduceDungeonCrawlRolls);
LootJS.modifiers(changeLootModifiers);
LootJS.modifiers(addDungeonCrawlModdedLoot);

