declare module "com.ordana.spelunkery.neoforge.SpringWaterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LiquidBlock} from "net.minecraft.world.level.block.LiquidBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpringWaterBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer

constructor(flowingFluid: $Supplier$$Type<($FlowingFluid$$Type)>, properties: $BlockBehaviour$Properties$$Type)

public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringWaterBlock$$Type = ($SpringWaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringWaterBlock$$Original = $SpringWaterBlock;}
