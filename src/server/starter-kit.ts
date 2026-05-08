// src/server/starter-kit.ts
// Gives new players a starter kit on first join.
//
// This uses PlayerEvents.loggedIn — it fires on every login, so we use a
// persistent flag (KubeJS globalThis.global) to ensure one-time delivery.
// For a proper one-time trigger, use FTB Quests reward delivery instead and
// leave this file as a reference only.

export function onPlayerFirstJoin(event: PlayerKubeEvent): void {
  const player = event.player;
  const nbt = player.persistentData;

  // Starter kit already given
  if (nbt.getBoolean("roguelike:kit_given")) {
    return;
  }

  // Give player starter kit
  player.inventory.setStackInSlot(0, Item.of("simplyswords:gold_sai"));
  player.inventory.setStackInSlot(1, Item.of("sophisticatedbackpacks:backpack"));
  player.inventory.setStackInSlot(2, Item.of("minecraft:cooked_chicken", 16));
  player.inventory.setStackInSlot(3, Item.of("ftbquests:book"));
  player.inventory.setStackInSlot(8, Item.of("paraglider:paraglider"));

  nbt.putBoolean("roguelike:kit_given", true);

  // Hint about quest book
  player.tell("§6Welcome to Roguelike Dimensions!");
}

// Script based delivery checked with nbt
PlayerEvents.loggedIn(onPlayerFirstJoin);
