// src/server/starter-kit.ts
// Gives new players a starter kit on first join.
//
// TODO (you): Decide what the starter kit contains. Current stubs are placeholders.
// Consider: basic food, a Sophisticated Backpack, the first Patchouli lore book,
//           a compass, and a note explaining the quest book (press B).
//
// This uses PlayerEvents.loggedIn — it fires on every login, so we use a
// persistent flag (KubeJS globalThis.global) to ensure one-time delivery.
// For a proper one-time trigger, use FTB Quests reward delivery instead and
// leave this file as a reference only.

export function onPlayerFirstJoin(e: PlayerKubeEvent): void {
  const player = e.player;

  // TODO (you): Replace placeholder items with your chosen starter kit
  // Example kit — adjust to your balance decisions:

  // player.give(Item.of('sophisticatedbackpacks:backpack'));
  // player.give(Item.of('minecraft:cooked_beef', 16));
  // player.give(Item.of('minecraft:compass'));
  // player.give(Item.of('patchouli:guide_book').withNbt({ 'patchouli:book': 'roguelike:guide' }));

  // Hint about quest book
  player.tell('§6Welcome to Roguelike Dimensions! §rPress §eB§r to open your Quest Book.');
}

// NOTE: For a true one-time kit, use FTB Quests "login" detection quest with
// item rewards. Uncomment the handler below only if you want script-based delivery.
// PlayerEvents.loggedIn(onPlayerFirstJoin);
