declare module "appeng.block.paint.PaintSplotchesBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$PaintSplotchesBlockEntity} from "appeng.blockentity.misc.PaintSplotchesBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IOrientationStrategy} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Biome$Precipitation$$Type} from "net.minecraft.world.level.biome.Biome$Precipitation"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintSplotchesBlock extends $AEBaseEntityBlock<($PaintSplotchesBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "handlePrecipitation"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Biome$Precipitation$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotchesBlock$$Type = ($PaintSplotchesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintSplotchesBlock$$Original = $PaintSplotchesBlock;}
declare module "appeng.block.paint.PaintSplotches" {
import {$Collection$$Type} from "java.util.Collection"
import {$Splotch$$Type} from "appeng.helpers.Splotch"

export class $PaintSplotches {
constructor(arg0: $Collection$$Type<($Splotch$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotches$$Type = ($PaintSplotches);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintSplotches$$Original = $PaintSplotches;}
