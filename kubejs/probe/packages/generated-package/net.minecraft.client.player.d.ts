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
public "getMoveVector"(): $Vec2
public "hasForwardImpulse"(): boolean
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
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level} from "net.minecraft.world.level.Level"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PickOnAStickEntity} from "com.ordana.spelunkery.entities.PickOnAStickEntity"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$ClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ClientPlayerKJS"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"

export class $AbstractClientPlayer extends $Player implements $ClientPlayerKJS$$Interface {
 "spelunkery$pickEntity": $PickOnAStickEntity
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
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
 "noCulling": boolean
readonly "walkAnimation": $WalkAnimationState
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
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
 "tickCount": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
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
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
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
 "currentExplosionCause": $Entity

constructor(arg0: $ClientLevel$$Type, arg1: $GameProfile$$Type)

public "tick"(): void
public "isCreative"(): boolean
public "getSkin"(): $PlayerSkin
public "isSpectator"(): boolean
public "getDeltaMovementLerped"(arg0: float): $Vec3
public "getFieldOfViewModifier"(): float
public "getStats"(): $PlayerStatsJS
public "isMiningBlock"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
/**
 * Checks if the entity is a client-side player.
 */
public "isClientPlayer"(): boolean
public "notify"(notification: $NotificationToastData$$Type): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
get "creative"(): boolean
get "skin"(): $PlayerSkin
get "spectator"(): boolean
get "fieldOfViewModifier"(): float
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
get "clientPlayer"(): boolean
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
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$JigsawBlockEntity$$Type} from "net.minecraft.world.level.block.entity.JigsawBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Logger} from "org.slf4j.Logger"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Input} from "net.minecraft.client.player.Input"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$PlayerRideableJumping} from "net.minecraft.world.entity.PlayerRideableJumping"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BaseCommandBlock$$Type} from "net.minecraft.world.level.BaseCommandBlock"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AbstractClientPlayer} from "net.minecraft.client.player.AbstractClientPlayer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PickOnAStickEntity} from "com.ordana.spelunkery.entities.PickOnAStickEntity"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$StatsCounter, $StatsCounter$$Type} from "net.minecraft.stats.StatsCounter"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$IParachuteEntity$$Interface} from "com.ordana.spelunkery.utils.IParachuteEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$LocalClientPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.LocalClientPlayerKJS"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ClientRecipeBook, $ClientRecipeBook$$Type} from "net.minecraft.client.ClientRecipeBook"
import {$StructureBlockEntity$$Type} from "net.minecraft.world.level.block.entity.StructureBlockEntity"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $LocalPlayer extends $AbstractClientPlayer implements $IParachuteEntity$$Interface, $LocalClientPlayerKJS$$Interface {
 "spelunkery$pickEntity": $PickOnAStickEntity
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
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
 "noCulling": boolean
readonly "walkAnimation": $WalkAnimationState
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
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
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
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
 "tickCount": integer
 "yBobO": float
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
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
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
 "currentExplosionCause": $Entity

constructor(arg0: $Minecraft$$Type, arg1: $ClientLevel$$Type, arg2: $ClientPacketListener$$Type, arg3: $StatsCounter$$Type, arg4: $ClientRecipeBook$$Type, arg5: boolean, arg6: boolean)

public "drop"(arg0: boolean): boolean
public "move"(arg0: $MoverType$$Type, arg1: $Vec3$$Type): void
public "tick"(): void
public "startUsingItem"(arg0: $InteractionHand$$Type): void
public "onUpdateAbilities"(): void
public "openMinecartCommandBlock"(arg0: $BaseCommandBlock$$Type): void
public "closeMenu"(): void
public "aiStep"(): void
public "crit"(arg0: $Entity$$Type): void
public "magicCrit"(arg0: $Entity$$Type): void
public "hurtTo"(arg0: float): void
public "getStatsCounter"(): $StatsCounter
public "removeEffectNoUpdate"(arg0: $Holder$$Type<($MobEffect)>): $MobEffectInstance
public "setShowDeathScreen"(arg0: boolean): void
public "getCurrentMood"(): float
public "setPermissionLevel"(arg0: integer): void
public "isAutoJumpEnabled"(): boolean
public "onGameModeChanged"(arg0: $GameType$$Type): void
public "getParachuteTicks"(): integer
public "getMinecraft"(): $Minecraft
public "getJumpRidingScale"(): float
public "jumpableVehicle"(): $PlayerRideableJumping
public "setParachute"(parachute: $ItemStack$$Type): void
public "getWaterVision"(): float
public "isMovingSlowly"(): boolean
public "getParachute"(): $ItemStack
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "shouldShowDeathScreen"(): boolean
public "rideTick"(): void
public "isEffectiveAi"(): boolean
public "getPermissionLevel"(): integer
public "sendSystemMessage"(arg0: $Component$$Type): void
public "handleEntityEvent"(arg0: byte): void
public "heal"(arg0: float): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "getActivePortalLocalTransition"(): $Portal$Transition
public "respawn"(): void
public "getRecipeBook"(): $ClientRecipeBook
public "updateTutorialInventoryAction"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ClickAction$$Type): void
public "isSuppressingSlidingDownLadder"(): boolean
public "serverAiStep"(): void
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "getUsedItemHand"(): $InteractionHand
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "stopUsingItem"(): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "openStructureBlock"(arg0: $StructureBlockEntity$$Type): void
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "openJigsawBlock"(arg0: $JigsawBlockEntity$$Type): void
public "swing"(arg0: $InteractionHand$$Type): void
public "isUnderWater"(): boolean
public "isLocalPlayer"(): boolean
public "resetPos"(): void
public "canSpawnSprintParticle"(): boolean
public "getRopeHoldPosition"(arg0: float): $Vec3
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "sendOpenInventory"(): void
public "isTextFilteringEnabled"(): boolean
public "isUsingItem"(): boolean
public "isHandsBusy"(): boolean
public "getViewYRot"(arg0: float): float
public "isShiftKeyDown"(): boolean
public "removeVehicle"(): void
public "getViewXRot"(arg0: float): float
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "isCrouching"(): boolean
public "getBodyYaw"(): float
public "setExperienceValues"(arg0: float, arg1: integer, arg2: integer): void
public "getDoLimitedCrafting"(): boolean
public "removeRecipeHighlight"(arg0: $RecipeHolder$$Type<(never)>): void
public "setDoLimitedCrafting"(arg0: boolean): void
public "clientSideCloseContainer"(): void
public "hasParachute"(): boolean
public "getStats"(): $PlayerStatsJS
/**
 * Checks, whether the player is currently mining a block.
 */
public "isMiningBlock"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "notify"(notification: $NotificationToastData$$Type): void
/**
 * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
 */
public "isSelf"(): boolean
/**
 * Runs the specified console command client-side with the player's permission level.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommand"(command: StringJS): void
/**
 * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
get "statsCounter"(): $StatsCounter
set "showDeathScreen"(value: boolean)
get "currentMood"(): float
set "permissionLevel"(value: integer)
get "autoJumpEnabled"(): boolean
get "parachuteTicks"(): integer
get "minecraft"(): $Minecraft
get "jumpRidingScale"(): float
set "parachute"(value: $ItemStack$$Type)
get "waterVision"(): float
get "movingSlowly"(): boolean
get "parachute"(): $ItemStack
get "effectiveAi"(): boolean
get "permissionLevel"(): integer
get "activePortalLocalTransition"(): $Portal$Transition
get "recipeBook"(): $ClientRecipeBook
get "suppressingSlidingDownLadder"(): boolean
get "usedItemHand"(): $InteractionHand
get "underWater"(): boolean
get "localPlayer"(): boolean
get "textFilteringEnabled"(): boolean
get "usingItem"(): boolean
get "handsBusy"(): boolean
get "shiftKeyDown"(): boolean
get "crouching"(): boolean
get "bodyYaw"(): float
get "doLimitedCrafting"(): boolean
set "doLimitedCrafting"(value: boolean)
get "stats"(): $PlayerStatsJS
get "miningBlock"(): boolean
get "self"(): boolean
set "activePostShader"(value: $ResourceLocation$$Type)
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
