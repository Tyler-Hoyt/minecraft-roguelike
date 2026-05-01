declare module "quek.undergarden.block.portal.UndergardenPortalBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Portal$Transition} from "net.minecraft.world.level.block.Portal$Transition"
import {$Portal$$Interface} from "net.minecraft.world.level.block.Portal"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$DimensionTransition} from "net.minecraft.world.level.portal.DimensionTransition"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UndergardenPortalBlock extends $Block implements $Portal$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getPortalDestination"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: $BlockPos$$Type): $DimensionTransition
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getPortalTransitionTime"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type): integer
public "getTransitionTime"(arg0: $Level$$Type, arg1: $Entity$$Type): integer
public "getLocalTransition"(): $Portal$Transition
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "localTransition"(): $Portal$Transition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndergardenPortalBlock$$Type = ($UndergardenPortalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UndergardenPortalBlock$$Original = $UndergardenPortalBlock;}
declare module "quek.undergarden.block.portal.UndergardenPortalShape" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $UndergardenPortalShape {
static readonly "MAX_WIDTH": integer
static readonly "MAX_HEIGHT": integer

constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$Axis$$Type)

public "isValid"(): boolean
public "createPortalBlocks"(): void
public "isComplete"(): boolean
public "getPortalBlocks"(): integer
get "valid"(): boolean
get "complete"(): boolean
get "portalBlocks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndergardenPortalShape$$Type = ($UndergardenPortalShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UndergardenPortalShape$$Original = $UndergardenPortalShape;}
