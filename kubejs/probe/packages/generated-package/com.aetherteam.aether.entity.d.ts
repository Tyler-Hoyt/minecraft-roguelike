declare module "com.aetherteam.aether.entity.passive.MountableAnimal" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level} from "net.minecraft.world.level.Level"
import {$MountableMob$$Interface} from "com.aetherteam.aether.entity.MountableMob"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MoveControl} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AetherAnimal} from "com.aetherteam.aether.entity.passive.AetherAnimal"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Saddleable$$Interface} from "net.minecraft.world.entity.Saddleable"
import {$NotGrounded$$Interface} from "com.aetherteam.aether.entity.NotGrounded"

export class $MountableAnimal extends $AetherAnimal implements $MountableMob$$Interface, $Saddleable$$Interface, $NotGrounded$$Interface {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "drinkTime": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
readonly "spells": $HashMap
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

public "tick"(): void
public "getControllingPassenger"(): $LivingEntity
public "isSaddleable"(): boolean
public "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "getFlyingSpeed"(): float
public "canJump"(): boolean
public "jumpFactor"(): double
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "hasPassenger"(): boolean
public "travel"(arg0: $Vec3$$Type): void
public "jumpFromGround"(): void
public "isSaddled"(): boolean
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setEntityOnGround"(arg0: boolean): void
public "setPlayerJumped"(arg0: boolean): void
public "setMountJumping"(arg0: boolean): void
public "isEntityOnGround"(): boolean
public "setHasPassenger"(arg0: boolean): void
public "getPlayerJumped"(): boolean
public "travelWithInput"(arg0: $Vec3$$Type): void
public "getSteeringSpeed"(): float
public "isMountJumping"(): boolean
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "setPlayerTriedToCrouch"(arg0: boolean): void
public "setSaddled"(arg0: boolean): void
public "riderTick"(): void
public "getMountJumpStrength"(): double
public "playerTriedToCrouch"(): boolean
public "tick"<T extends $Mob>(arg0: T): void
public "travel"<T extends $Mob>(arg0: T, arg1: $Vec3$$Type): void
public "getDefaultStepHeightModifier"(): $AttributeModifier
public "riderTick"(arg0: $Mob$$Type): void
public "onJump"(arg0: $Mob$$Type): void
public "getMountStepHeightModifier"(): $AttributeModifier
public "getSaddleSoundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public static "tickLeash"<E extends $Entity>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "controllingPassenger"(): $LivingEntity
get "saddleable"(): boolean
get "flyingSpeed"(): float
get "saddled"(): boolean
set "entityOnGround"(value: boolean)
set "playerJumped"(value: boolean)
set "mountJumping"(value: boolean)
get "entityOnGround"(): boolean
get "playerJumped"(): boolean
get "steeringSpeed"(): float
get "mountJumping"(): boolean
set "saddled"(value: boolean)
get "mountJumpStrength"(): double
get "defaultStepHeightModifier"(): $AttributeModifier
get "mountStepHeightModifier"(): $AttributeModifier
get "saddleSoundEvent"(): $SoundEvent
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountableAnimal$$Type = ($MountableAnimal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountableAnimal$$Original = $MountableAnimal;}
declare module "com.aetherteam.aether.entity.passive.AetherAnimal" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level} from "net.minecraft.world.level.Level"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Animal} from "net.minecraft.world.entity.animal.Animal"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $AetherAnimal extends $Animal {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "drinkTime": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
readonly "spells": $HashMap
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

public static "checkAetherAnimalSpawnRules"(arg0: $EntityType$$Type<($AetherAnimal$$Type)>, arg1: $LevelAccessor$$Type, arg2: $MobSpawnType$$Type, arg3: $BlockPos$$Type, arg4: $RandomSource$$Type): boolean
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public static "tickLeash"<E extends $Entity>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AetherAnimal$$Type = ($AetherAnimal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AetherAnimal$$Original = $AetherAnimal;}
declare module "com.aetherteam.aether.entity.projectile.dart.AbstractDart" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$IntOpenHashSet} from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractArrow$Pickup} from "net.minecraft.world.entity.projectile.AbstractArrow$Pickup"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Stack} from "java.util.Stack"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $AbstractDart extends $AbstractArrow {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "shakeTime": integer
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "piercingIgnoreEntityIds": $IntOpenHashSet
 "invulnerableTime": integer
 "piercedAndKilledEntities": $List<($Entity)>
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "pickup": $AbstractArrow$Pickup
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($AbstractDart$$Type)>, arg1: double, arg2: double, arg3: double, arg4: $Level$$Type, arg5: $ItemStack$$Type, arg6: $ItemStack$$Type)
constructor(arg0: $EntityType$$Type<($AbstractDart$$Type)>, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $Supplier$$Type<($Item$$Type)>, arg4: $ItemStack$$Type)
constructor(arg0: $EntityType$$Type<($AbstractDart$$Type)>, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "tick"(): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDart$$Type = ($AbstractDart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractDart$$Original = $AbstractDart;}
declare module "com.aetherteam.aether.entity.block.FloatingBlockEntity" {
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FloatingBlockEntity extends $Entity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
 "forceTickAfterTeleportToDuplicate": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($FloatingBlockEntity$$Type)>, arg1: $Level$$Type)
constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$$Type)

public "tick"(): void
public "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type): void
public "displayFireAnimation"(): boolean
public "setHurtsEntities"(arg0: float, arg1: integer): void
public "callOnBrokenAfterFall"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "getBlockState"(): $BlockState
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$$Type): void
public "isAttackable"(): boolean
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "onlyOpCanSetNbt"(): boolean
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public "isPickable"(): boolean
public "setStartPos"(arg0: $BlockPos$$Type): void
public "getStartPos"(): $BlockPos
public "disableDrop"(): void
public "setNatural"(arg0: boolean): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "blockState"(): $BlockState
get "attackable"(): boolean
get "pickable"(): boolean
set "startPos"(value: $BlockPos$$Type)
get "startPos"(): $BlockPos
set "natural"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingBlockEntity$$Type = ($FloatingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatingBlockEntity$$Original = $FloatingBlockEntity;}
declare module "com.aetherteam.aether.entity.WingedBird" {
import {$NotGrounded$$Interface} from "com.aetherteam.aether.entity.NotGrounded"

export interface $WingedBird$$Interface extends $NotGrounded$$Interface {
get "wingDestPos"(): float
get "prevWingDestPos"(): float
set "wingDestPos"(value: float)
set "prevWingDestPos"(value: float)
set "wingRotation"(value: float)
get "wingRotation"(): float
get "prevWingRotation"(): float
set "prevWingRotation"(value: float)
set "entityOnGround"(value: boolean)
get "entityOnGround"(): boolean
}

export class $WingedBird implements $WingedBird$$Interface {
 "getWingDestPos"(): float
 "getPrevWingDestPos"(): float
 "setWingDestPos"(arg0: float): void
 "setPrevWingDestPos"(arg0: float): void
 "animateWings"(): void
 "setWingRotation"(arg0: float): void
 "getWingRotation"(): float
 "getPrevWingRotation"(): float
 "setPrevWingRotation"(arg0: float): void
 "setEntityOnGround"(arg0: boolean): void
 "isEntityOnGround"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WingedBird$$Type = ($WingedBird);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WingedBird$$Original = $WingedBird;}
declare module "com.aetherteam.aether.entity.miscellaneous.Parachute" {
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $Parachute extends $Entity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($Parachute$$Type)>, arg1: $Level$$Type)

public "tick"(): void
public "getPassengerRidingPosition"(arg0: $Entity$$Type): $Vec3
public "getControllingPassenger"(): $LivingEntity
public "displayFireAnimation"(): boolean
public "handleEntityEvent"(arg0: byte): void
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "canRiderInteract"(): boolean
public "shouldRiderSit"(): boolean
public "isAttackable"(): boolean
public "die"(): void
public "isPickable"(): boolean
public "spawnExplosionParticle"(): void
public "calculateMovement"(arg0: $Vec3$$Type): $Vec3
public "moveParachute"(arg0: $LivingEntity$$Type): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "controllingPassenger"(): $LivingEntity
get "attackable"(): boolean
get "pickable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parachute$$Type = ($Parachute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Parachute$$Original = $Parachute;}
declare module "com.aetherteam.aether.entity.passive.Moa" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MoveControl} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$MoaType, $MoaType$$Type} from "com.aetherteam.aether.api.registers.MoaType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SpawnGroupData, $SpawnGroupData$$Type} from "net.minecraft.world.entity.SpawnGroupData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$MountableAnimal} from "com.aetherteam.aether.entity.passive.MountableAnimal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Stack} from "java.util.Stack"
import {$AttributeSupplier$Builder} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$WingedBird$$Interface} from "com.aetherteam.aether.entity.WingedBird"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $Moa extends $MountableAnimal implements $WingedBird$$Interface {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "zza": float
readonly "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "lastHurt": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
 "lastHurtByPlayer": $Player
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
readonly "targetSelector": $GoalSelector
 "drinkTime": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
readonly "spells": $HashMap
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(arg0: $EntityType$$Type<($Moa$$Type)>, arg1: $Level$$Type)

public "tick"(): void
public "getPassengerRidingPosition"(arg0: $Entity$$Type): $Vec3
public "getDefaultDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "getOverlayTexture"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "isSaddleable"(): boolean
public "canBeAffected"(arg0: $MobEffectInstance$$Type): boolean
public "getMaxFallDistance"(): integer
public "getFlyingSpeed"(): float
public "canJump"(): boolean
public "setSitting"(arg0: boolean): void
public "getScale"(): float
public "getPickResult"(): $ItemStack
public "travel"(arg0: $Vec3$$Type): void
public "getSpeed"(): float
public "getRemainingJumps"(): integer
public "getMaxJumps"(): integer
public "finalizeSpawn"(arg0: $ServerLevelAccessor$$Type, arg1: $DifficultyInstance$$Type, arg2: $MobSpawnType$$Type, arg3: $SpawnGroupData$$Type): $SpawnGroupData
public "setAge"(arg0: integer): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "spawnExplosionParticle"(): void
public static "createMobAttributes"(): $AttributeSupplier$Builder
public "setHungry"(arg0: boolean): void
public "getMoaType"(): $MoaType
public "isHungry"(): boolean
public "isFood"(arg0: $ItemStack$$Type): boolean
public "canBreed"(): boolean
public "setFlapCooldown"(arg0: integer): void
public "getAmountFed"(): integer
public "getWingDestPos"(): float
public "getPrevWingDestPos"(): float
public "getFollowing"(): $UUID
public "getLastRider"(): $UUID
public "setFollowing"(arg0: $UUID$$Type): void
public "getFlapCooldown"(): integer
public "generateMoaUUID"(): void
public "setLastRider"(arg0: $UUID$$Type): void
public "setWingDestPos"(arg0: float): void
public "setPrevWingDestPos"(arg0: float): void
public "getSteeringSpeed"(): float
public "setRemainingJumps"(arg0: integer): void
public "setJumpCooldown"(arg0: integer): void
public "setAmountFed"(arg0: integer): void
public "getMoaTypeKey"(): $ResourceKey<($MoaType)>
public "setWingRotation"(arg0: float): void
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "getWingRotation"(): float
public "isPlayerGrown"(): boolean
public "setPlayerGrown"(arg0: boolean): void
public "setMoaTypeByKey"(arg0: $ResourceKey$$Type<($MoaType)>): void
public "isSitting"(): boolean
public static "registerJumpOverlayTextureOverride"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
public static "registerJumpOverlayTextureOverride"(arg0: $AttributeModifier$$Type, arg1: $ResourceLocation$$Type): void
public "getEggTime"(): integer
public "getRider"(): $UUID
public "getMoaUUID"(): $UUID
public "setRider"(arg0: $UUID$$Type): void
public "onJump"(arg0: $Mob$$Type): void
public "getPrevWingRotation"(): float
public "setPrevWingRotation"(arg0: float): void
public "getMountJumpStrength"(): double
public "getJumpCooldown"(): integer
public "aiStep"(): void
public "animateWings"(): void
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public static "tickLeash"<E extends $Entity>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "saddleable"(): boolean
get "maxFallDistance"(): integer
get "flyingSpeed"(): float
set "sitting"(value: boolean)
get "scale"(): float
get "pickResult"(): $ItemStack
get "speed"(): float
get "remainingJumps"(): integer
get "maxJumps"(): integer
set "age"(value: integer)
set "hungry"(value: boolean)
get "moaType"(): $MoaType
get "hungry"(): boolean
set "flapCooldown"(value: integer)
get "amountFed"(): integer
get "wingDestPos"(): float
get "prevWingDestPos"(): float
get "following"(): $UUID
get "lastRider"(): $UUID
set "following"(value: $UUID$$Type)
get "flapCooldown"(): integer
set "lastRider"(value: $UUID$$Type)
set "wingDestPos"(value: float)
set "prevWingDestPos"(value: float)
get "steeringSpeed"(): float
set "remainingJumps"(value: integer)
set "jumpCooldown"(value: integer)
set "amountFed"(value: integer)
get "moaTypeKey"(): $ResourceKey<($MoaType)>
set "wingRotation"(value: float)
get "wingRotation"(): float
get "playerGrown"(): boolean
set "playerGrown"(value: boolean)
set "moaTypeByKey"(value: $ResourceKey$$Type<($MoaType)>)
get "sitting"(): boolean
get "eggTime"(): integer
get "rider"(): $UUID
get "moaUUID"(): $UUID
set "rider"(value: $UUID$$Type)
get "prevWingRotation"(): float
set "prevWingRotation"(value: float)
get "mountJumpStrength"(): double
get "jumpCooldown"(): integer
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Moa$$Type = ($Moa);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Moa$$Original = $Moa;}
declare module "com.aetherteam.aether.entity.MountableMob" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"

export interface $MountableMob$$Interface {
set "playerJumped"(value: boolean)
set "mountJumping"(value: boolean)
get "playerJumped"(): boolean
get "steeringSpeed"(): float
get "mountJumping"(): boolean
get "defaultStepHeightModifier"(): $AttributeModifier
get "mountJumpStrength"(): double
get "mountStepHeightModifier"(): $AttributeModifier
}

export class $MountableMob implements $MountableMob$$Interface {
static readonly "STEP_HEIGHT_MODIFIER": $AttributeModifier
static readonly "DEFAULT_HEIGHT_LOCATION": $ResourceLocation
static readonly "DEFAULT_STEP_HEIGHT_MODIFIER": $AttributeModifier
static readonly "MOUNT_HEIGHT_LOCATION": $ResourceLocation

 "tick"<T extends $Mob>(arg0: T): void
 "canJump"(): boolean
 "jumpFactor"(): double
 "travel"<T extends $Mob>(arg0: T, arg1: $Vec3$$Type): void
 "setPlayerJumped"(arg0: boolean): void
 "setMountJumping"(arg0: boolean): void
 "getPlayerJumped"(): boolean
 "travelWithInput"(arg0: $Vec3$$Type): void
 "getSteeringSpeed"(): float
 "isMountJumping"(): boolean
 "getDefaultStepHeightModifier"(): $AttributeModifier
 "riderTick"(arg0: $Mob$$Type): void
 "onJump"(arg0: $Mob$$Type): void
 "getMountJumpStrength"(): double
 "getMountStepHeightModifier"(): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountableMob$$Type = ($MountableMob);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MountableMob$$Original = $MountableMob;}
declare module "com.aetherteam.aether.entity.NotGrounded" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NotGrounded$$Interface {
set "entityOnGround"(value: boolean)
get "entityOnGround"(): boolean
}

export class $NotGrounded implements $NotGrounded$$Interface {
 "setEntityOnGround"(arg0: boolean): void
 "isEntityOnGround"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotGrounded$$Type = ($NotGrounded);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NotGrounded$$Original = $NotGrounded;}
