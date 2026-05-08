// tests/server/recipes.test.ts
// Tests the recipe handler directly — no Minecraft required.

import { describe, it, expect, vi } from 'vitest';
import { registerRecipes } from '../../src/server/recipes';

function makeMockRecipesEvent(): RecipesKubeEvent {
  const shaped = vi.fn().mockReturnValue({ modifyResult: vi.fn() });
  return {
    remove: vi.fn(),
    replaceInput: vi.fn(),
    replaceOutput: vi.fn(),
    shaped,
    shapeless: vi.fn(),
    smelting: vi.fn(),
    blasting: vi.fn(),
    smoking: vi.fn(),
    campfireCooking: vi.fn(),
    stonecutting: vi.fn(),
    smithing: vi.fn(),
    custom: vi.fn(),
  };
}

describe('registerRecipes', () => {
  it('removes all jukebox upgrade recipes', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.remove).toHaveBeenCalledWith({ output: 'sophisticatedstorage:jukebox_upgrade' });
    expect(event.remove).toHaveBeenCalledWith({ output: 'sophisticatedstorage:advanced_jukebox_upgrade' });
    expect(event.remove).toHaveBeenCalledWith({
      output: 'sophisticatedstorage:storage_jukebox_upgrade_from_backpack_jukebox_upgrade'
    });
    expect(event.remove).toHaveBeenCalledWith({
      output: 'sophisticatedstorage:backpack_advanced_jukebox_upgrade_from_storage_advanced_jukebox_upgrade'
    });
  });

  it('adds shaped armor progression recipes for all tiers and pieces', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    // Iron tier chestplate as a representative sample
    expect(event.shaped).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'minecraft:iron_chestplate' }),
      ['A A', 'ABA', 'AAA'],
      { A: 'minecraft:iron_ingot', B: 'minecraft:leather_chestplate' }
    );
  });

  it('removes existing armor recipes before adding progressive ones', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.remove).toHaveBeenCalledWith({ output: 'minecraft:iron_helmet' });
    expect(event.remove).toHaveBeenCalledWith({ output: 'minecraft:diamond_chestplate' });
  });

  it('does not call shapeless or smelting', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.shapeless).not.toHaveBeenCalled();
    expect(event.smelting).not.toHaveBeenCalled();
  });
});
