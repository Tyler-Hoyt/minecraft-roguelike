declare module "net.neoforged.neoforge.entity.PartEntity" {
import {$Optional} from "java.util.Optional"
import {$Level} from "net.minecraft.world.level.Level"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"

export class $PartEntity<T extends $Entity> extends $Entity {
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

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "parent"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$$Type<T> = ($PartEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartEntity$$Original<T> = $PartEntity<(T)>;}
declare module "net.neoforged.neoforge.entity.XpOrbTargetingEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ExperienceOrb, $ExperienceOrb$$Type} from "net.minecraft.world.entity.ExperienceOrb"
import {$Event} from "net.neoforged.bus.api.Event"

export class $XpOrbTargetingEvent extends $Event {
constructor(arg0: $ExperienceOrb$$Type, arg1: double)

public "getXpOrb"(): $ExperienceOrb
public "getFollowingPlayer"(): $Player
public "setFollowingPlayer"(arg0: $Player$$Type): void
public "getScanDistance"(): double
get "xpOrb"(): $ExperienceOrb
get "followingPlayer"(): $Player
set "followingPlayer"(value: $Player$$Type)
get "scanDistance"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpOrbTargetingEvent$$Type = ($XpOrbTargetingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpOrbTargetingEvent$$Original = $XpOrbTargetingEvent;}
