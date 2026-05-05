// src/server/stages.ts
// Central definition of all progression stage flags.
// Grant stages from FTB Quests Command Rewards using /roguelike stage grant <stage>
export const STAGES = {
  OVERWORLD_COMPLETE: "roguelike:stage_overworld_complete",
  UNDERGARDEN_ENTERED: "roguelike:stage_undergarden_entered",
  ARS_NOUVEAU_T1: "roguelike:stage_ars_noeuveau_t1",
  ARS_NOUVEAU_T2: "roguelike:stage_ars_nouveau_t2",
  NETHER_COMPLETE: "roguelike:stage_nether_complete",
  AETHER_COMPLETE: "roguelike:stage_aether_complete",
  AE2_ONLINE: "roguelike:stage_ae2_online",
  TWILIGHT_COMPLETE: "roguelike:stage_twilight_complete",
  DEEP_DARK_COMPLETE: "roguelike:stage_deep_dark_complete",
} as const;

export type Stage = typeof STAGES[keyof typeof STAGES];

export function hasStage(player: Player, stage: Stage): boolean {
  return player.persistentData.getBoolean(stage);
}

export function grantStage(player: Player, stage: Stage): void {
  player.persistentData.putBoolean(stage, true);
}

export function revokeStage(player: Player, stage: Stage): void {
  player.persistentData.putBoolean(stage, false);
}

// FTB Quests Reward Commands
ServerEvents.basicCommand("roguelike stage grant", (event) => {
  grantStage(event.player, event.input as Stage);
  event.player.tell(`§a[Roguelike] Stage unlocked: ${event.input}`);
});

ServerEvents.basicCommand("roguelike stage revoke", (event) => {
  revokeStage(event.player, event.input as Stage);
  event.player.tell(`§a[Roguelike] Stage revoked: ${event.input}`);
});

ServerEvents.basicCommand("roguelike stage check", (event) => {
  const value = hasStage(event.player, event.input as Stage);
  event.player.tell(`§a[Roguelike] ${event.input} == ${value}`);
});

PlayerEvents.tick((event) => {
  const player = event.player;

  if (player.level.dimension.toString() === 'undergarden:undergarden' && !hasStage(player, STAGES.UNDERGARDEN_ENTERED)) {
    grantStage(player, STAGES.UNDERGARDEN_ENTERED);
    player.tell("§d[Roguelike] You have entered the Undergarden. New recipes are availables.");
  }
});
