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

  nbt.putBoolean("roguelike:kit_given", true);

  // Give player starter kit
  player.give(Item.of("sophisticatedbackpacks:backpack"));

  // Hint about quest book
  player.tell("§6Welcome to Roguelike Dimensions!");
}

// Script based delivery checked with nbt
PlayerEvents.loggedIn(onPlayerFirstJoin);
