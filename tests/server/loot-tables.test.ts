// tests/server/loot-tables.test.ts
// Tests loot table roll reduction and modded item injection for Dungeon Crawl.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { reduceDungeonCrawlRolls, addDungeonCrawlModdedLoot } from '../../src/server/loot-tables';

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeMockPool() {
  return {
    rolls: vi.fn().mockReturnThis(),
    bonusRolls: vi.fn().mockReturnThis(),
    addEntry: vi.fn().mockReturnThis(),
  };
}

function makeMockTable() {
  const pool = makeMockPool();
  const table: any = {
    _pool: pool,
    firstPool: vi.fn((cb?: (p: any) => void) => {
      if (cb) cb(pool);
      return table;
    }),
    modifyPool: vi.fn((_idx: number, cb: (p: any) => void) => {
      cb(pool);
      return table;
    }),
  };
  return table;
}

function makeLootTablesEvent(tables: Record<string, any> = {}) {
  return {
    getLootTable: vi.fn((id: string) => tables[id] ?? makeMockTable()),
  };
}

function makeLootModifierBuilder() {
  const builder: any = {
    addLoot: vi.fn().mockReturnThis(),
    pool: vi.fn().mockReturnThis(),
  };
  return builder;
}

function makeLootModifiersEvent() {
  return {
    addTableModifier: vi.fn(() => makeLootModifierBuilder()),
  };
}

// ── Roll Reduction Tests ──────────────────────────────────────────────────────

describe('reduceDungeonCrawlRolls', () => {
  const ALL_TABLES = [
    'dungeoncrawl:chests/stage_1',
    'dungeoncrawl:chests/stage_2',
    'dungeoncrawl:chests/stage_3',
    'dungeoncrawl:chests/stage_4',
    'dungeoncrawl:chests/stage_5',
    'dungeoncrawl:chests/treasure',
    'dungeoncrawl:chests/secret_room',
    'dungeoncrawl:chests/food',
    'dungeoncrawl:chests/supply',
  ];

  it('fetches all nine Dungeon Crawl loot tables', () => {
    const event = makeLootTablesEvent();
    reduceDungeonCrawlRolls(event);
    for (const id of ALL_TABLES) {
      expect(event.getLootTable).toHaveBeenCalledWith(id);
    }
  });

  it('reduces stage_1 rolls to [2, 4]', () => {
    const table = makeMockTable();
    const event = makeLootTablesEvent({ 'dungeoncrawl:chests/stage_1': table });
    reduceDungeonCrawlRolls(event);
    expect(table.firstPool).toHaveBeenCalled();
    expect(table._pool.rolls).toHaveBeenCalledWith([2, 4]);
  });

  it('reduces stage_2 rolls to [2, 4]', () => {
    const table = makeMockTable();
    const event = makeLootTablesEvent({ 'dungeoncrawl:chests/stage_2': table });
    reduceDungeonCrawlRolls(event);
    expect(table._pool.rolls).toHaveBeenCalledWith([2, 4]);
  });

  it('reduces stage_3/4/5 rolls to [3, 5]', () => {
    for (const id of ['dungeoncrawl:chests/stage_3', 'dungeoncrawl:chests/stage_4', 'dungeoncrawl:chests/stage_5']) {
      const table = makeMockTable();
      const event = makeLootTablesEvent({ [id]: table });
      reduceDungeonCrawlRolls(event);
      expect(table._pool.rolls).toHaveBeenCalledWith([3, 5]);
    }
  });

  it('reduces treasure and secret_room rolls to [3, 5]', () => {
    for (const id of ['dungeoncrawl:chests/treasure', 'dungeoncrawl:chests/secret_room']) {
      const table = makeMockTable();
      const event = makeLootTablesEvent({ [id]: table });
      reduceDungeonCrawlRolls(event);
      expect(table._pool.rolls).toHaveBeenCalledWith([3, 5]);
    }
  });

  it('reduces food rolls to [4, 6]', () => {
    const table = makeMockTable();
    const event = makeLootTablesEvent({ 'dungeoncrawl:chests/food': table });
    reduceDungeonCrawlRolls(event);
    expect(table._pool.rolls).toHaveBeenCalledWith([4, 6]);
  });

  it('reduces supply pool 0 to [2, 4] and pool 3 to [3, 5]', () => {
    const table = makeMockTable();
    const event = makeLootTablesEvent({ 'dungeoncrawl:chests/supply': table });
    reduceDungeonCrawlRolls(event);
    expect(table.firstPool).toHaveBeenCalled();
    expect(table.modifyPool).toHaveBeenCalledWith(3, expect.any(Function));
    // Pool rolls called with both targets
    expect(table._pool.rolls).toHaveBeenCalledWith([2, 4]);
    expect(table._pool.rolls).toHaveBeenCalledWith([3, 5]);
  });
});

// ── Modded Item Tests ─────────────────────────────────────────────────────────

describe('addDungeonCrawlModdedLoot', () => {
  it('adds modifiers for all seven table groups', () => {
    const event = makeLootModifiersEvent();
    addDungeonCrawlModdedLoot(event);
    // Four calls: stages 1-2, stages 3-4, stage 5, treasure+secret_room
    expect(event.addTableModifier).toHaveBeenCalledTimes(4);
  });

  it('targets stages 1 and 2 in the first modifier call', () => {
    const event = makeLootModifiersEvent();
    addDungeonCrawlModdedLoot(event);
    expect(event.addTableModifier).toHaveBeenCalledWith(
      'dungeoncrawl:chests/stage_1',
      'dungeoncrawl:chests/stage_2',
    );
  });

  it('targets stages 3 and 4 in the second modifier call', () => {
    const event = makeLootModifiersEvent();
    addDungeonCrawlModdedLoot(event);
    expect(event.addTableModifier).toHaveBeenCalledWith(
      'dungeoncrawl:chests/stage_3',
      'dungeoncrawl:chests/stage_4',
    );
  });

  it('targets stage 5 alone in the third modifier call', () => {
    const event = makeLootModifiersEvent();
    addDungeonCrawlModdedLoot(event);
    expect(event.addTableModifier).toHaveBeenCalledWith('dungeoncrawl:chests/stage_5');
  });

  it('targets treasure and secret_room in the fourth modifier call', () => {
    const event = makeLootModifiersEvent();
    addDungeonCrawlModdedLoot(event);
    expect(event.addTableModifier).toHaveBeenCalledWith(
      'dungeoncrawl:chests/treasure',
      'dungeoncrawl:chests/secret_room',
    );
  });

  it('injects Ars Nouveau T1 essences into early stages', () => {
    const builder = makeLootModifierBuilder();
    const event = { addTableModifier: vi.fn().mockReturnValue(builder) };
    addDungeonCrawlModdedLoot(event);

    // First call is stages 1-2; verify addLoot contains ars_nouveau essences
    const calls = builder.addLoot.mock.calls;
    expect(calls.length).toBeGreaterThan(0);
    // LootEntry.of is called for fire/earth/air/water essences — check via global mock
    const ofCalls = (globalThis as any).LootEntry.of.mock.calls.map((c: any[]) => c[0]);
    expect(ofCalls).toContain('ars_nouveau:fire_essence');
    expect(ofCalls).toContain('ars_nouveau:earth_essence');
    expect(ofCalls).toContain('ars_nouveau:air_essence');
    expect(ofCalls).toContain('ars_nouveau:water_essence');
  });

  it('does not include irons_spellbooks items (mod removed)', () => {
    addDungeonCrawlModdedLoot(makeLootModifiersEvent());
    const ofCalls = (globalThis as any).LootEntry.of.mock.calls.map((c: any[]) => c[0]) as string[];
    expect(ofCalls.some((id) => id.startsWith('irons_spellbooks:'))).toBe(false);
  });

  it('includes Simply Swords iron weapons in early stages', () => {
    addDungeonCrawlModdedLoot(makeLootModifiersEvent());
    const ofCalls = (globalThis as any).LootEntry.of.mock.calls.map((c: any[]) => c[0]) as string[];
    expect(ofCalls).toContain('simplyswords:iron_rapier');
    expect(ofCalls).toContain('simplyswords:iron_longsword');
  });

  it('includes Simply Swords diamond weapons in late stages', () => {
    addDungeonCrawlModdedLoot(makeLootModifiersEvent());
    const ofCalls = (globalThis as any).LootEntry.of.mock.calls.map((c: any[]) => c[0]) as string[];
    expect(ofCalls).toContain('simplyswords:diamond_rapier');
    expect(ofCalls).toContain('simplyswords:diamond_halberd');
  });

  it('includes Ars Nouveau archmage spell book in treasure tables', () => {
    addDungeonCrawlModdedLoot(makeLootModifiersEvent());
    const ofCalls = (globalThis as any).LootEntry.of.mock.calls.map((c: any[]) => c[0]) as string[];
    expect(ofCalls).toContain('ars_nouveau:archmage_spell_book');
  });
});

// ── Registration Tests ────────────────────────────────────────────────────────

describe('LootJS event registration (smoke test)', () => {
  it('module registers lootTables handler without throwing', () => {
    const event = makeLootTablesEvent();
    expect(() => reduceDungeonCrawlRolls(event)).not.toThrow();
  });

  it('module registers modifiers handler without throwing', () => {
    const event = makeLootModifiersEvent();
    expect(() => addDungeonCrawlModdedLoot(event)).not.toThrow();
  });
});
