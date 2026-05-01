declare module "appeng.blockentity.spatial.SpatialAnchorBlockEntity" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$GridChunkEvent$GridChunkRemoved$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkRemoved"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$GridChunkEvent$GridChunkAdded$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkAdded"
import {$IOverlayDataSource$$Interface} from "appeng.client.render.overlay.IOverlayDataSource"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpatialAnchorBlockEntity extends $AENetworkedBlockEntity implements $IGridTickable$$Interface, $IConfigurableObject$$Interface, $IOverlayDataSource$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "getOverlayBlockEntity"(): $BlockEntity
public "getOverlaySourceLocation"(): $DimensionalBlockPos
public "countLoadedChunks"(): integer
public "registerChunk"(arg0: $ChunkPos$$Type): void
public "getLoadedChunks"(): $Set<($ChunkPos)>
public "getOverlayChunks"(): $Set<($ChunkPos)>
public "getOverlayColor"(): integer
public "chunkRemoved"(arg0: $GridChunkEvent$GridChunkRemoved$$Type): void
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "chunkAdded"(arg0: $GridChunkEvent$GridChunkAdded$$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "removed"(): void
get "overlayBlockEntity"(): $BlockEntity
get "overlaySourceLocation"(): $DimensionalBlockPos
get "loadedChunks"(): $Set<($ChunkPos)>
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayColor"(): integer
get "configManager"(): $IConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialAnchorBlockEntity$$Type = ($SpatialAnchorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialAnchorBlockEntity$$Original = $SpatialAnchorBlockEntity;}
declare module "appeng.blockentity.spatial.SpatialIOPortBlockEntity" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpatialIOPortBlockEntity extends $AENetworkedInvBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "updateRedstoneState"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getRedstoneState"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "redstoneState"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialIOPortBlockEntity$$Type = ($SpatialIOPortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialIOPortBlockEntity$$Original = $SpatialIOPortBlockEntity;}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition" {
import {$Enum} from "java.lang.Enum"

export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<($SpatialPylonBlockEntity$AxisPosition)> {
static readonly "START": $SpatialPylonBlockEntity$AxisPosition
static readonly "END": $SpatialPylonBlockEntity$AxisPosition
static readonly "NONE": $SpatialPylonBlockEntity$AxisPosition
static readonly "MIDDLE": $SpatialPylonBlockEntity$AxisPosition

public static "values"(): ($SpatialPylonBlockEntity$AxisPosition)[]
public static "valueOf"(arg0: StringJS): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$AxisPosition$$Type = (("none") | ("start") | ("middle") | ("end"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$AxisPosition$$Original = $SpatialPylonBlockEntity$AxisPosition;}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$SpatialPylonBlockEntity$AxisPosition, $SpatialPylonBlockEntity$AxisPosition$$Type} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition"
import {$Record} from "java.lang.Record"

export class $SpatialPylonBlockEntity$ClientState extends $Record {
static readonly "DEFAULT": $SpatialPylonBlockEntity$ClientState

constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition$$Type, axis: $Direction$Axis$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "readFromNbt"(arg0: $CompoundTag$$Type): $SpatialPylonBlockEntity$ClientState
public "powered"(): boolean
public static "readFromStream"(arg0: $FriendlyByteBuf$$Type): $SpatialPylonBlockEntity$ClientState
public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
public "axisPosition"(): $SpatialPylonBlockEntity$AxisPosition
public "axis"(): $Direction$Axis
public "writeToNbt"(arg0: $CompoundTag$$Type): void
public "online"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$ClientState$$Type = ({"powered"?: boolean, "online"?: boolean, "axisPosition"?: $SpatialPylonBlockEntity$AxisPosition$$Type, "axis"?: $Direction$Axis$$Type}) | ([powered?: boolean, online?: boolean, axisPosition?: $SpatialPylonBlockEntity$AxisPosition$$Type, axis?: $Direction$Axis$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$ClientState$$Original = $SpatialPylonBlockEntity$ClientState;}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity" {
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction} from "net.minecraft.core.Direction"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$IAEMultiBlock$$Interface} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$SpatialPylonBlockEntity$ClientState} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpatialPylonCluster, $SpatialPylonCluster$$Type} from "appeng.me.cluster.implementations.SpatialPylonCluster"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpatialPylonBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock$$Interface<($SpatialPylonCluster)> {
static readonly "STATE": $ModelProperty<($SpatialPylonBlockEntity$ClientState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "onChunkUnloaded"(): void
public "recalculateDisplay"(): void
public "setRemoved"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "updateStatus"(arg0: $SpatialPylonCluster$$Type): void
public "getCluster"(): $SpatialPylonCluster
public "getModelData"(): $ModelData
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "onReady"(): void
public "getClientState"(): $SpatialPylonBlockEntity$ClientState
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "valid"(): boolean
get "removed"(): void
get "cluster"(): $SpatialPylonCluster
get "modelData"(): $ModelData
get "clientState"(): $SpatialPylonBlockEntity$ClientState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$$Type = ($SpatialPylonBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialPylonBlockEntity$$Original = $SpatialPylonBlockEntity;}
