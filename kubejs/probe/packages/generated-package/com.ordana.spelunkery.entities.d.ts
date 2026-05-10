declare module "com.ordana.spelunkery.entities.PickOnAStickEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ImprovedProjectileEntity} from "net.mehvahdjukaar.moonlight.api.entity.ImprovedProjectileEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $PickOnAStickEntity extends $ImprovedProjectileEntity {
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "hasImpulse": boolean
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "tickCount": integer
 "noPhysics": boolean
 "yo": double
 "yOld": double
 "leftOwner": boolean
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "BOARDING_COOLDOWN": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "walkDistO": float
 "moveDist": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "ID_TAG": StringJS
 "hasBeenShot": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "PASSENGERS_TAG": StringJS
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "blocksBuilding": boolean
 "xRotO": float
 "wasOnFire": boolean
 "zo": double
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "hurtMarked": boolean
 "horizontalCollision": boolean

constructor(worldIn: $Level$$Type, x: double, y: double, z: double)
constructor(level: $Level$$Type, thrower: $LivingEntity$$Type)
constructor(type: $EntityType$$Type<($PickOnAStickEntity$$Type)>, level: $Level$$Type)

public "tick"(): void
public "getPos"(): $BlockPos
public "setHitBlock"(pos: $BlockPos$$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "readAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "setPos"(pos: $BlockPos$$Type): void
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "pos"(): $BlockPos
set "hitBlock"(value: $BlockPos$$Type)
set "pos"(value: $BlockPos$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickOnAStickEntity$$Type = ($PickOnAStickEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickOnAStickEntity$$Original = $PickOnAStickEntity;}
