// tests/server/recipes.test.ts
// Tests the recipe handler directly — no Minecraft required.

import { describe, it, expect, vi } from 'vitest';
import { registerRecipes } from '../../src/server/recipes';

function makeMockRecipesEvent(): RecipesKubeEvent {
  return {
    remove: vi.fn(),
    replaceInput: vi.fn(),
    replaceOutput: vi.fn(),
    shaped: vi.fn(),
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
  it('removes the vanilla string recipe', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.remove).toHaveBeenCalledWith({ output: 'minecraft:string' });
  });

  it('adds a shaped diamond recipe', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.shaped).toHaveBeenCalledWith(
      'minecraft:diamond',
      ['ABA', 'BCB', 'ABA'],
      { A: 'minecraft:coal', B: 'minecraft:iron_ingot', C: 'minecraft:gold_ingot' }
    );
  });

  it('adds a smelting recipe for gold ingot', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.smelting).toHaveBeenCalledWith(
      'minecraft:gold_ingot',
      'minecraft:iron_ingot',
      0.5,
      100
    );
  });

  it('does not call any other recipe methods', () => {
    const event = makeMockRecipesEvent();
    registerRecipes(event);
    expect(event.shapeless).not.toHaveBeenCalled();
    expect(event.blasting).not.toHaveBeenCalled();
  });
});
