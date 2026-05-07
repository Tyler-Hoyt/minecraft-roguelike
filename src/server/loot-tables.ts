// src/server/loot-tables.ts
// Dungeon Crawl chest loot reduction and modded item integration via LootJS.
//
// Dungeon Crawl (dungeoncrawl:) loot tables confirmed from JAR inspection:
//   stage_1/2: 6-9 rolls  → reduced to 2-4
//   stage_3/4: 6-9/7-10   → reduced to 3-5
//   stage_5:   6-9        → reduced to 3-5
//   treasure:  7-8        → reduced to 3-5
//   secret_room: 8        → reduced to 3-5
//   food:      9-11       → reduced to 4-6
//   supply:    4 pools (3-6, 1, 1, 8-10) → pool 0: 2-4, pool 3: 3-5
//
// Modded items integrated (mods confirmed installed):
//   - Ars Nouveau (ars_nouveau:) — essences, glyphs, spell books
//   - Simply Swords (simplyswords:) — iron/diamond weapons by tier

// ── Roll Reduction ────────────────────────────────────────────────────────────

export function reduceDungeonCrawlRolls(event: any): void {
  // Early stages: cut to 2-4 items per chest
  event.getLootTable('dungeoncrawl:chests/stage_1').firstPool((pool: any) => pool.rolls([2, 4]));
  event.getLootTable('dungeoncrawl:chests/stage_2').firstPool((pool: any) => pool.rolls([2, 4]));

  // Mid + late stages: cut to 3-5 items per chest
  event.getLootTable('dungeoncrawl:chests/stage_3').firstPool((pool: any) => pool.rolls([3, 5]));
  event.getLootTable('dungeoncrawl:chests/stage_4').firstPool((pool: any) => pool.rolls([3, 5]));
  event.getLootTable('dungeoncrawl:chests/stage_5').firstPool((pool: any) => pool.rolls([3, 5]));

  // Treasure / secret rooms: cut to 3-5
  event.getLootTable('dungeoncrawl:chests/treasure').firstPool((pool: any) => pool.rolls([3, 5]));
  event.getLootTable('dungeoncrawl:chests/secret_room').firstPool((pool: any) => pool.rolls([3, 5]));

  // Food chest: cut to 4-6
  event.getLootTable('dungeoncrawl:chests/food').firstPool((pool: any) => pool.rolls([4, 6]));

  // Supply chest has 4 pools; shrink pool 0 (3-6 → 2-4) and pool 3 (8-10 → 3-5)
  event
    .getLootTable('dungeoncrawl:chests/supply')
    .firstPool((pool: any) => pool.rolls([2, 4]))
    .modifyPool(3, (pool: any) => pool.rolls([3, 5]));
}

// ── Modded Item Integration ───────────────────────────────────────────────────

export function addDungeonCrawlModdedLoot(event: any): void {
  // ── Stages 1-2: Early game — Ars Nouveau T1 essences + iron Simply Swords ──
  event
    .addTableModifier('dungeoncrawl:chests/stage_1', 'dungeoncrawl:chests/stage_2')
    .addLoot(
      LootEntry.of('ars_nouveau:fire_essence', [1, 3]).randomChance(0.15),
      LootEntry.of('ars_nouveau:earth_essence', [1, 3]).randomChance(0.15),
      LootEntry.of('ars_nouveau:air_essence', [1, 3]).randomChance(0.12),
      LootEntry.of('ars_nouveau:water_essence', [1, 3]).randomChance(0.12),
      LootEntry.of('ars_nouveau:source_gem', [1, 2]).randomChance(0.10),
      LootEntry.of('ars_nouveau:blank_glyph').randomChance(0.08),
      LootEntry.of('simplyswords:iron_rapier').randomChance(0.06),
      LootEntry.of('simplyswords:iron_longsword').randomChance(0.06),
      LootEntry.of('simplyswords:iron_katana').randomChance(0.05),
    );

  // ── Stages 3-4: Mid game — Ars Nouveau T2 + glyphs + iron Simply Swords ───
  event
    .addTableModifier('dungeoncrawl:chests/stage_3', 'dungeoncrawl:chests/stage_4')
    .addLoot(
      LootEntry.of('ars_nouveau:abjuration_essence', [1, 2]).randomChance(0.12),
      LootEntry.of('ars_nouveau:conjuration_essence', [1, 2]).randomChance(0.12),
      LootEntry.of('ars_nouveau:source_gem', [1, 3]).randomChance(0.15),
      LootEntry.of('ars_nouveau:novice_spell_book').randomChance(0.06),
      LootEntry.of('ars_nouveau:glyph_harm').randomChance(0.08),
      LootEntry.of('ars_nouveau:glyph_heal').randomChance(0.08),
      LootEntry.of('ars_nouveau:glyph_touch').randomChance(0.08),
      LootEntry.of('simplyswords:iron_halberd').randomChance(0.06),
      LootEntry.of('simplyswords:iron_claymore').randomChance(0.06),
      LootEntry.of('simplyswords:iron_glaive').randomChance(0.05),
    );

  // ── Stage 5: Late game — Ars Nouveau T2/T3 + diamond Simply Swords ─────────
  event
    .addTableModifier('dungeoncrawl:chests/stage_5')
    .addLoot(
      LootEntry.of('ars_nouveau:manipulation_essence', [1, 2]).randomChance(0.10),
      LootEntry.of('ars_nouveau:source_gem', [2, 4]).randomChance(0.15),
      LootEntry.of('ars_nouveau:apprentice_spell_book').randomChance(0.06),
      LootEntry.of('ars_nouveau:glyph_amplify').randomChance(0.08),
      LootEntry.of('ars_nouveau:glyph_aoe').randomChance(0.08),
      LootEntry.of('simplyswords:diamond_rapier').randomChance(0.05),
      LootEntry.of('simplyswords:diamond_longsword').randomChance(0.05),
      LootEntry.of('simplyswords:diamond_katana').randomChance(0.04),
    );

  // ── Treasure + Secret Room: high-tier rewards ─────────────────────────────
  event
    .addTableModifier('dungeoncrawl:chests/treasure', 'dungeoncrawl:chests/secret_room')
    .addLoot(
      LootEntry.of('ars_nouveau:manipulation_essence', [2, 4]).randomChance(0.15),
      LootEntry.of('ars_nouveau:archmage_spell_book').randomChance(0.04),
      LootEntry.of('ars_nouveau:glyph_explosion').randomChance(0.10),
      LootEntry.of('ars_nouveau:glyph_amplify').randomChance(0.10),
      LootEntry.of('simplyswords:diamond_halberd').randomChance(0.06),
      LootEntry.of('simplyswords:diamond_claymore').randomChance(0.06),
      LootEntry.of('simplyswords:diamond_warglaive').randomChance(0.04),
    );
}

LootJS.lootTables(reduceDungeonCrawlRolls);
LootJS.modifiers(addDungeonCrawlModdedLoot);

