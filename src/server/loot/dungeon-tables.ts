const MAX_UNIQUE_ITEMS = 6;
const MAX_UNIQUE_ITEMS_LATE = 8;
const MAX_UNIQUE_ITEMS_TREASURE = 9;

// Change loot tables for the dungeon crawl mod as they are majorly bloated
function reduceDungeonCrawlRolls(event: LootTableEventJS): void {
  const earlyCrawlStages = ["dungeoncrawl:chests/stage_1", "dungeoncrawl:chests/stage_2"];
  const midToLateCrawlStages = ["dungeoncrawl:chests/stage_3", "dungeoncrawl:chests/stage_4", "dungeoncrawl:chests/stage_5"];
  const treasures = ["dungeoncrawl:chests/treasure", "dungeoncrawl:chests/secret_room"];

  for (const id of earlyCrawlStages) {
    event.getLootTable(id).firstPool().rolls([2, 4]);
  }

  for (const id of [...midToLateCrawlStages, ...treasures]) {
    event.getLootTable(id).firstPool().rolls([3, 5]);
  }


  event.getLootTable('dungeoncrawl:chests/food').firstPool().rolls([4, 6]);

  // Supply chest: main pool capped at [2,4], 4th pool (index 3) capped at [3,5]
  const supply = event.getLootTable('dungeoncrawl:chests/supply');
  supply.firstPool().rolls([2, 4]);
  supply.modifyPool(3, (pool: any) => pool.rolls([3, 5]));
}

LootJS.lootTables(reduceDungeonCrawlRolls);
