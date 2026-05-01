declare module "net.minecraft.client.player.Input" {
import {$Vec2} from "net.minecraft.world.phys.Vec2"

export class $Input {
 "forwardImpulse": float
 "jumping": boolean
 "left": boolean
 "leftImpulse": float
 "shiftKeyDown": boolean
 "up": boolean
 "right": boolean
 "down": boolean

constructor()

public "tick"(arg0: boolean, arg1: float): void
public "hasForwardImpulse"(): boolean
public "getMoveVector"(): $Vec2
get "moveVector"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Input$$Type = ($Input);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Input$$Original = $Input;}
declare module "net.minecraft.client.player.AbstractClientPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$TrailAppearance$$Type} from "net.bettercombat.api.fx.TrailAppearance"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level} from "net.minecraft.world.level.Level"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$PickOnAStickEntity} from "com.ordana.spelunkery.entities.PickOnAStickEntity"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$AnimatedHand$$Type} from "net.bettercombat.logic.AnimatedHand"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$ClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientPlayerKJS"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$PlayerAttackAnimatable$$Interface} from "net.bettercombat.client.animation.PlayerAttackAnimatable"

export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS$$Interface, $PlayerAttackAnimatable$$Interface {
 "spelunkery$pickEntity": $PickOnAStickEntity
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "ars_Nouveau$motions": $Stack
 "yHeadRot": float
 "yCloakO": double
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "ID_TAG": StringJS
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
 "yRot": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
readonly "inventory": $Inventory
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "clientLevel": $ClientLevel
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean
 "currentExplosionCause": $Entity

constructor(arg0: $ClientLevel$$Type, arg1: $GameProfile$$Type)

public "tick"(): void
public "playAttackAnimation"(name: StringJS, animatedHand: $AnimatedHand$$Type, length: float, upswing: float): void
public "stopAttackAnimation"(length: float): void
public "isCreative"(): boolean
public "isSpectator"(): boolean
public "getDeltaMovementLerped"(arg0: float): $Vec3
public "playAttackParticles"(isOffHand: boolean, weaponRange: float, delay: integer, particles: $List$$Type, appearance: $TrailAppearance$$Type): void
public "getSkin"(): $PlayerSkin
public "getFieldOfViewModifier"(): float
public "updateAnimationsOnTick"(): void
public "isLeftHanded"(): boolean
/**
 * Checks if the entity is a client-side player.
 */
public "isClientPlayer"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "getStats"(): $PlayerStatsJS
public "isMiningBlock"(): boolean
public "notify"(notification: $NotificationToastData$$Type): void
public static "getDataPlayerModeCustomisation"(): $EntityDataAccessor<(byte)>
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "creative"(): boolean
get "spectator"(): boolean
get "skin"(): $PlayerSkin
get "fieldOfViewModifier"(): float
get "leftHanded"(): boolean
get "clientPlayer"(): boolean
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
public static get "dataPlayerModeCustomisation"(): $EntityDataAccessor<(byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayer$$Type = ($AbstractClientPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClientPlayer$$Original = $AbstractClientPlayer;}
declare module "net.minecraft.client.player.LocalPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Portal$Transition} from "net.minecraft.world.level.block.Portal$Transition"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$JigsawBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Inventory} from "net.minecraft.world.entity.player.Inventory"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Logger} from "org.slf4j.Logger"
import {$Input} from "net.minecraft.client.player.Input"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$PlayerRideableJumping} from "net.minecraft.world.entity.PlayerRideableJumping"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BaseCommandBlock$$Type} from "net.minecraft.world.level.BaseCommandBlock"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AbstractClientPlayer} from "net.minecraft.client.player.AbstractClientPlayer"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$PickOnAStickEntity} from "com.ordana.spelunkery.entities.PickOnAStickEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Abilities} from "net.minecraft.world.entity.player.Abilities"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$CloseContainerTransfer$$Interface} from "io.wispforest.accessories.pond.CloseContainerTransfer"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$StatsCounter, $StatsCounter$$Type} from "net.minecraft.stats.StatsCounter"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$IParachuteEntity$$Interface} from "com.ordana.spelunkery.utils.IParachuteEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LocalClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.LocalClientPlayerKJS"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ClientRecipeBook, $ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $LocalPlayer extends $AbstractClientPlayer implements $LocalClientPlayerKJS$$Interface, $IParachuteEntity$$Interface, $CloseContainerTransfer$$Interface {
 "spelunkery$pickEntity": $PickOnAStickEntity
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "ars_Nouveau$motions": $Stack
 "yHeadRot": float
 "yCloakO": double
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
readonly "connection": $ClientPacketListener
 "yBodyRotO": float
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
 "xBob": float
static readonly "ID_TAG": StringJS
 "elytraRotZ": float
 "elytraRotY": float
static readonly "WAKE_UP_DURATION": integer
 "elytraRotX": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "input": $Input
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
 "yBob": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
 "spinningEffectIntensity": float
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "yRotLast": float
 "xRotLast": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "zCloak": double
 "xBobO": float
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "yBobO": float
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
 "oSpinningEffectIntensity": float
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
 "yRot": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
static readonly "LOGGER": $Logger
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
readonly "inventory": $Inventory
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "clientLevel": $ClientLevel
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean
 "currentExplosionCause": $Entity

constructor(arg0: $Minecraft$$Type, arg1: $ClientLevel$$Type, arg2: $ClientPacketListener$$Type, arg3: $StatsCounter$$Type, arg4: $ClientRecipeBook$$Type, arg5: boolean, arg6: boolean)

public "move"(arg0: $MoverType$$Type, arg1: $Vec3$$Type): void
public "tick"(): void
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "isTextFilteringEnabled"(): boolean
public "respawn"(): void
public "swing"(arg0: $InteractionHand$$Type): void
public "openMinecartCommandBlock"(arg0: $BaseCommandBlock$$Type): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "canSpawnSprintParticle"(): boolean
public "getRopeHoldPosition"(arg0: float): $Vec3
public "setDoLimitedCrafting"(arg0: boolean): void
public "clientSideCloseContainer"(): void
public "removeRecipeHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "setExperienceValues"(arg0: float, arg1: integer, arg2: integer): void
public "getDoLimitedCrafting"(): boolean
public "isUsingItem"(): boolean
public "isHandsBusy"(): boolean
public "sendOpenInventory"(): void
public "isUnderWater"(): boolean
public "isLocalPlayer"(): boolean
public "isShiftKeyDown"(): boolean
public "getUsedItemHand"(): $InteractionHand
public "getViewYRot"(arg0: float): float
public "startUsingItem"(arg0: $InteractionHand$$Type): void
public "stopUsingItem"(): void
public "handleEntityEvent"(arg0: byte): void
public "setSprinting"(arg0: boolean): void
public "isEffectiveAi"(): boolean
public "serverAiStep"(): void
public "getActivePortalLocalTransition"(): $Portal$Transition
public "resetPos"(): void
public "jumpableVehicle"(): $PlayerRideableJumping
public "getCurrentMood"(): float
public "setShowDeathScreen"(arg0: boolean): void
public "isMovingSlowly"(): boolean
public "getRecipeBook"(): $ClientRecipeBook
public "setPermissionLevel"(arg0: integer): void
public "getJumpRidingScale"(): float
public "isSuppressingSlidingDownLadder"(): boolean
public "getBodyYaw"(): float
public "sendSystemMessage"(arg0: $Component$$Type): void
public "getViewXRot"(arg0: float): float
public "isCrouching"(): boolean
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "removeVehicle"(): void
public "getPermissionLevel"(): integer
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "closeMenu"(): void
public "openJigsawBlock"(arg0: $JigsawBlockEntity$$Type): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "openStructureBlock"(arg0: $StructureBlockEntity$$Type): void
public "onUpdateAbilities"(): void
public "heal"(arg0: float): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "rideTick"(): void
public "crit"(arg0: $Entity$$Type): void
public "magicCrit"(arg0: $Entity$$Type): void
public "getStatsCounter"(): $StatsCounter
public "hurtTo"(arg0: float): void
public "updateTutorialInventoryAction"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ClickAction$$Type): void
public "shouldShowDeathScreen"(): boolean
public "removeEffectNoUpdate"(arg0: $Holder$$Type<($MobEffect)>): $MobEffectInstance
public "accessories$setScreenTransfer"(screen: $Screen$$Type): void
public "drop"(arg0: boolean): boolean
public "getParachute"(): $ItemStack
public "isAutoJumpEnabled"(): boolean
public "onGameModeChanged"(arg0: $GameType$$Type): void
public "setParachute"(parachute: $ItemStack$$Type): void
public "getParachuteTicks"(): integer
public "getMinecraft"(): $Minecraft
public "getWaterVision"(): float
public "modifyExpressionValue$bmn002$ars_nouveau$elytraOverride"(arg0: boolean): boolean
public "aiStep"(): void
/**
 * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
/**
 * Runs the specified console command client-side with the player's permission level.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommand"(command: StringJS): void
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "getStats"(): $PlayerStatsJS
/**
 * Checks, whether the player is currently mining a block.
 */
public "isMiningBlock"(): boolean
/**
 * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
 */
public "isSelf"(): boolean
public "notify"(notification: $NotificationToastData$$Type): void
public "hasParachute"(): boolean
public static "getDataPlayerModeCustomisation"(): $EntityDataAccessor<(byte)>
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "textFilteringEnabled"(): boolean
set "doLimitedCrafting"(value: boolean)
get "doLimitedCrafting"(): boolean
get "usingItem"(): boolean
get "handsBusy"(): boolean
get "underWater"(): boolean
get "localPlayer"(): boolean
get "shiftKeyDown"(): boolean
get "usedItemHand"(): $InteractionHand
set "sprinting"(value: boolean)
get "effectiveAi"(): boolean
get "activePortalLocalTransition"(): $Portal$Transition
get "currentMood"(): float
set "showDeathScreen"(value: boolean)
get "movingSlowly"(): boolean
get "recipeBook"(): $ClientRecipeBook
set "permissionLevel"(value: integer)
get "jumpRidingScale"(): float
get "suppressingSlidingDownLadder"(): boolean
get "bodyYaw"(): float
get "crouching"(): boolean
get "permissionLevel"(): integer
get "statsCounter"(): $StatsCounter
get "parachute"(): $ItemStack
get "autoJumpEnabled"(): boolean
set "parachute"(value: $ItemStack$$Type)
get "parachuteTicks"(): integer
get "minecraft"(): $Minecraft
get "waterVision"(): float
set "activePostShader"(value: $ResourceLocation$$Type)
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
get "self"(): boolean
public static get "dataPlayerModeCustomisation"(): $EntityDataAccessor<(byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayer$$Type = ($LocalPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalPlayer$$Original = $LocalPlayer;}
declare module "net.minecraft.client.player.inventory.Hotbar" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $Hotbar {
static readonly "CODEC": $Codec<($Hotbar)>

constructor()

public "load"(arg0: $HolderLookup$Provider$$Type): $List<($ItemStack)>
public "isEmpty"(): boolean
public "storeFrom"(arg0: $Inventory$$Type, arg1: $RegistryAccess$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hotbar$$Type = ($Hotbar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Hotbar$$Original = $Hotbar;}
