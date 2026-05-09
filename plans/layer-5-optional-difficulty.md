# Layer 5 — Optional Harder Mode

The design goal here is letting players who want a harder experience find that harder experience without forcing it on everyone. There are two distinct mechanisms: the L2 Hostility orb system (already in the game, zero code needed) and a KubeJS hardcore flag that toggles a persistent debuff.

These are separate systems with different scopes:
- **L2H orbs** — local, zone-based difficulty. The player makes their area harder.
- **Hardcore flag** — character-level commitment. Applies globally and modifies how damage and healing work.

Neither should gate power. The rewards for running either mode should be extra rune drops and cosmetic recognition — not gear that's inaccessible to normal-mode players.

---

## L2H Hostility Orbs — no code needed

L2 Hostility already ships a Hostility Orb item. Players collect it from bosses and use it to permanently raise the difficulty level in their local zone. This is confirmed enabled in `l2hostility-server.toml`:

```toml
allowHostilityOrb = true
enableHostilityOrbDrop = true
orbRadius = 2        # affects a 5×5×5 section radius
```

The orb drop rate from bosses and the zone size are configurable but the system is already live. All you need to do is make sure players know it exists — add a quest to the Overworld chapter that introduces the orb system. Something like:

> "The Hostility Orb is a fragment of concentrated difficulty. Use it and mobs in your area will be permanently more dangerous — but they'll also drop better loot. Use it if you want a bigger challenge. Don't use it if you'd rather not."

That's the full documentation for this part. The mod handles everything else.

---

## Hardcore flag — KubeJS

This is a character-level toggle. Once enabled, the player takes increased mob damage and their passive regeneration is reduced. It can be toggled off again (it's not a permanent character choice like Minecraft Hardcore mode), but the intent is that it's a long-term commitment for a playthrough.

### Stages.ts changes

Add the new stage constant to the existing STAGES object:

```typescript
// src/server/stages.ts

export const STAGES = {
  OVERWORLD_COMPLETE: "roguelike:stage_overworld_complete",
  UNDERGARDEN_ENTERED: "roguelike:stage_undergarden_entered",
  ARS_NOUVEAU_T1: "roguelike:stage_ars_nouveau_t1",
  HARDCORE_MODE: "roguelike:stage_hardcore_mode",   // add this
} as const;
```

### New command

Add the toggle command alongside the existing stage commands:

```typescript
ServerEvents.basicCommand("roguelike difficulty hardcore", (event) => {
  const player = event.player;
  const isActive = hasStage(player, STAGES.HARDCORE_MODE);

  if (isActive) {
    revokeStage(player, STAGES.HARDCORE_MODE);
    player.tell("§7[Roguelike] Hardcore mode disabled.");
  } else {
    grantStage(player, STAGES.HARDCORE_MODE);
    player.tell("§c[Roguelike] Hardcore mode enabled. You take 20% more damage and regenerate 30% slower. Rune drop rates are increased.");
  }
});
```

### Applying the debuffs

Use `PlayerEvents.tick` to continuously apply the debuffs while the flag is active. Checking every 2 seconds (40 ticks) is enough — you don't need it every tick.

The damage increase is the trickier part. You can't directly modify incoming damage in a tick event — you need a damage event listener. For the regen penalty, you can remove the natural regen effect or apply Hunger to reduce passive regen.

```typescript
// In stages.ts or a separate hardcore-mode.ts

// Damage amplification — runs on every incoming damage event
EntityEvents.hurt((event) => {
  const entity = event.entity;
  if (!entity.isPlayer()) return;

  const player = entity as Player;
  if (!hasStage(player, STAGES.HARDCORE_MODE)) return;

  // 20% damage increase
  event.damage *= 1.2;
});
```

For the regeneration penalty, apply a persistent Hunger effect (level 0) to slow natural regen without completely stopping it:

```typescript
PlayerEvents.tick((event) => {
  if (event.server.tickCount % 100 !== 0) return; // every 5 seconds

  const player = event.player;
  if (!hasStage(player, STAGES.HARDCORE_MODE)) return;

  // Mining fatigue effect is visible, which might be confusing.
  // Instead, apply a very weak hunger to keep food level from fully restoring regen.
  // Hunger level 19 (out of 20) prevents passive regen in vanilla.
  // This approach is rough — tune or replace based on playtesting.
  if (player.foodLevel > 18) {
    player.foodLevel = 18;
  }
});
```

> **Note**: The food level manipulation is blunt. A cleaner approach would be a persistent weak debuff from a custom effect, but that requires a startup-registered potion effect — more complexity for now. Test this approach first and see if it feels right.

### Bonus rune drops

Wire into the existing entity loot modifier to give hardcore players extra rune fragments:

```typescript
// In entity-tables.ts or dimension-scaling.ts

event
  .addEntityLootModifier('#minecraft:is_hostile')
  .when((condition) => {
    // LootJS may support checking player stages — verify the API
    // If not available, use a simpler approach: always add, let the stage system control the rate
    return condition.playerPredicate({
      // stage check here if LootJS supports it
    });
  })
  .addLoot(
    LootEntry.of('roguelike:overworld_rune_fragment')
      .when(c => c.randomChance(0.05))
      .limitCount(1, 1)
  );
```

If LootJS doesn't support player stage predicates in its condition system, the alternative is to check the stage in a `PlayerEvents.tick` handler and give fragments directly on a kill event instead of through the loot system.

---

## Conqueror's Path — FTB Quests chapter

This is a standalone optional chapter with high-difficulty challenges. Build it in-game using the FTB Quests editor (`B` key). Don't try to write the SNBT by hand — the format is fragile.

### Chapter settings

- Group: Misc (or its own group if you want it to stand out)
- Icon: `l2hostility:hostility_orb` or similar
- Description: "Optional challenges for players who want a harder time. Rewards are extra runes and titles — nothing you can't get elsewhere, just faster."
- Background: same as Overworld or a darker variant

### Quest list

| Title | Task type | Unlock requirement |
|-------|-----------|-------------------|
| Iron Will | Kill the Apotheosis Frontier Gateway boss wearing only iron armor or below (no diamond, no affix items) | Overworld chapter started |
| No Second Chances | Enter the Undergarden without dying once after creating a new character | OVERWORLD_COMPLETE stage |
| Speed Demon | Enter the Undergarden within 2 in-game days of starting | OVERWORLD_COMPLETE stage |
| Level 100 | Reach L2H player level 100 | UNDERGARDEN_ENTERED stage |
| Max Hostility | Use 5 Hostility Orbs | Any time |
| The Path Less Taken | Enable hardcore mode and stay in it for 30 minutes of game time | Any time |

For quests that require specific gear worn or specific conditions, use FTB Quests' "checkmark" task type and rely on honor system — or use KubeJS command rewards that trigger a check before granting. Most of these are either too complex to track mechanically or not worth the code complexity for optional content.

### Rewards

Keep rewards non-power:
- Extra rune fragments (3-5 per challenge)
- `apotheosis:ancient_tome` — lets players push enchants past max level
- FTB Quests title (if you set up a title system)
- Heart Container (1 extra max health) for the hardest challenges

---

## What to build first

The L2H orb system is already live — just document it in a quest. That's five minutes of work and it gives dedicated players an outlet immediately.

The hardcore flag is medium effort but mostly self-contained (stages.ts + an event handler). Build that second.

The Conqueror's Path quests are the lowest priority — build them when the main dimensional chapters are solid, since the challenges reference content from those chapters.
