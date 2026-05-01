declare module "appeng.blockentity.grid.AENetworkedBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity$$Interface} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedBlockEntity extends $AEBaseBlockEntity implements $IGridConnectedBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "getMainNode"(): $IManagedGridNode
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$$Type): void
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public static "tryClear"(arg0: any): void
get "removed"(): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedBlockEntity$$Type = ($AENetworkedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AENetworkedBlockEntity$$Original = $AENetworkedBlockEntity;}
declare module "appeng.blockentity.grid.AENetworkedPoweredBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AEBasePoweredBlockEntity} from "appeng.blockentity.powersink.AEBasePoweredBlockEntity"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity$$Interface} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedPoweredBlockEntity extends $AEBasePoweredBlockEntity implements $IGridConnectedBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "getMainNode"(): $IManagedGridNode
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$$Type): void
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "removed"(): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedPoweredBlockEntity$$Type = ($AENetworkedPoweredBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AENetworkedPoweredBlockEntity$$Original = $AENetworkedPoweredBlockEntity;}
declare module "appeng.blockentity.grid.AENetworkedInvBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$AEBaseInvBlockEntity} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity$$Interface} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedInvBlockEntity extends $AEBaseInvBlockEntity implements $IGridConnectedBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "setRemoved"(): void
public "getMainNode"(): $IManagedGridNode
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "setOwner"(arg0: $Player$$Type): void
public "saveChanges"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "getActionableNode"(): $IGridNode
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "removed"(): void
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedInvBlockEntity$$Type = ($AENetworkedInvBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AENetworkedInvBlockEntity$$Original = $AENetworkedInvBlockEntity;}
