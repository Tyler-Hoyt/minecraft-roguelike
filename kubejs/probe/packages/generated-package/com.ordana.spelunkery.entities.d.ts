declare module "com.ordana.spelunkery.entities.PickOnAStickEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ImprovedProjectileEntity} from "net.mehvahdjukaar.moonlight.api.entity.ImprovedProjectileEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $PickOnAStickEntity extends $ImprovedProjectileEntity {
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

constructor(worldIn: $Level$$Type, x: double, y: double, z: double)
constructor(level: $Level$$Type, thrower: $LivingEntity$$Type)
constructor(type: $EntityType$$Type<($PickOnAStickEntity$$Type)>, level: $Level$$Type)

public "tick"(): void
public "setHitBlock"(pos: $BlockPos$$Type): void
public "readAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "setPos"(pos: $BlockPos$$Type): void
public "getPos"(): $BlockPos
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "hitBlock"(value: $BlockPos$$Type)
set "pos"(value: $BlockPos$$Type)
get "pos"(): $BlockPos
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
