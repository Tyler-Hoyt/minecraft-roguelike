declare module "quek.undergarden.entity.monster.stoneborn.Stoneborn" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Npc$$Interface} from "net.minecraft.world.entity.npc.Npc"
import {$MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MoveControl} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$NeutralMob$$Interface} from "net.minecraft.world.entity.NeutralMob"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$Monster, $Monster$$Type} from "net.minecraft.world.entity.monster.Monster"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Merchant$$Interface} from "net.minecraft.world.item.trading.Merchant"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SpellData} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Stack} from "java.util.Stack"
import {$AttributeSupplier$Builder} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $Stoneborn extends $Monster implements $NeutralMob$$Interface, $Npc$$Interface, $Merchant$$Interface {
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

constructor(arg0: $EntityType$$Type<($Monster$$Type)>, arg1: $Level$$Type)

public "tick"(): void
public static "registerAttributes"(): $AttributeSupplier$Builder
public "getOffers"(): $MerchantOffers
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public "getVillagerXp"(): integer
public "isClientSide"(): boolean
public "getRemainingPersistentAngerTime"(): integer
public "setRemainingPersistentAngerTime"(arg0: integer): void
public "hasCustomer"(): boolean
public "inUndergarden"(): boolean
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "startPersistentAngerTimer"(): void
public "setPersistentAngerTarget"(arg0: $UUID$$Type): void
public "getPersistentAngerTarget"(): $UUID
public "getNotifyTradeSound"(): $SoundEvent
public "overrideXp"(arg0: integer): void
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "setTradingPlayer"(arg0: $Player$$Type): void
public "showProgressBar"(): boolean
public "getTradingPlayer"(): $Player
public "notifyTradeUpdated"(arg0: $ItemStack$$Type): void
public "notifyTrade"(arg0: $MerchantOffer$$Type): void
public "overrideOffers"(arg0: $MerchantOffers$$Type): void
public static "canStonebornSpawn"(arg0: $EntityType$$Type<($Monster$$Type)>, arg1: $LevelAccessor$$Type, arg2: $MobSpawnType$$Type, arg3: $BlockPos$$Type, arg4: $RandomSource$$Type): boolean
public "getTarget"(): $LivingEntity
public "setTarget"(arg0: $LivingEntity$$Type): void
public "playerDied"(arg0: $Player$$Type): void
public "setLastHurtByMob"(arg0: $LivingEntity$$Type): void
public "getLastHurtByMob"(): $LivingEntity
public "isAngryAt"(arg0: $LivingEntity$$Type): boolean
public "isAngry"(): boolean
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "readPersistentAngerSaveData"(arg0: $Level$$Type, arg1: $CompoundTag$$Type): void
public "forgetCurrentTargetAndRefreshUniversalAnger"(): void
public "setLastHurtByPlayer"(arg0: $Player$$Type): void
public "addPersistentAngerSaveData"(arg0: $CompoundTag$$Type): void
public "updatePersistentAnger"(arg0: $ServerLevel$$Type, arg1: boolean): void
public "isAngryAtAllPlayers"(arg0: $Level$$Type): boolean
public "stopBeingAngry"(): void
public "canRestock"(): boolean
public "openTradingScreen"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: integer): void
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
get "offers"(): $MerchantOffers
get "villagerXp"(): integer
get "clientSide"(): boolean
get "remainingPersistentAngerTime"(): integer
set "remainingPersistentAngerTime"(value: integer)
set "persistentAngerTarget"(value: $UUID$$Type)
get "persistentAngerTarget"(): $UUID
get "notifyTradeSound"(): $SoundEvent
set "tradingPlayer"(value: $Player$$Type)
get "tradingPlayer"(): $Player
set "lastHurtByMob"(value: $LivingEntity$$Type)
get "lastHurtByMob"(): $LivingEntity
get "angry"(): boolean
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stoneborn$$Type = ($Stoneborn);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stoneborn$$Original = $Stoneborn;}
