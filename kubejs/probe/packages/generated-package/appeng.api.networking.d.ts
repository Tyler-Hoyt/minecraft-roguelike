declare module "appeng.api.networking.IGridNodeListener$State" {
import {$Enum} from "java.lang.Enum"

export class $IGridNodeListener$State extends $Enum<($IGridNodeListener$State)> {
static readonly "CHANNEL": $IGridNodeListener$State
static readonly "POWER": $IGridNodeListener$State
static readonly "GRID_BOOT": $IGridNodeListener$State

public static "values"(): ($IGridNodeListener$State)[]
public static "valueOf"(arg0: StringJS): $IGridNodeListener$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeListener$State$$Type = (("power") | ("channel") | ("grid_boot"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridNodeListener$State$$Original = $IGridNodeListener$State;}
declare module "appeng.api.networking.IManagedGridNode" {
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GridFlags$$Type} from "appeng.api.networking.GridFlags"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set$$Type} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IManagedGridNode$$Interface {
get "active"(): boolean
get "node"(): $IGridNode
get "ready"(): boolean
get "grid"(): $IGrid
get "online"(): boolean
get "powered"(): boolean
set "visualRepresentation"(value: $ItemLike$$Type)
set "visualRepresentation"(value: $ItemStack$$Type)
set "visualRepresentation"(value: $AEItemKey$$Type)
set "idlePowerUsage"(value: double)
set "inWorldNode"(value: boolean)
set "gridColor"(value: $AEColor$$Type)
set "owningPlayer"(value: $Player$$Type)
set "exposedOnSides"(value: $Set$$Type<($Direction$$Type)>)
set "tagName"(value: StringJS)
set "flags"(value: ($GridFlags$$Type)[])
set "owningPlayerId"(value: integer)
}

export class $IManagedGridNode implements $IManagedGridNode$$Interface {
 "destroy"(): void
 "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "isActive"(): boolean
 "getNode"(): $IGridNode
 "ifPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "ifPresent"(arg0: $BiConsumer$$Type<($IGrid), ($IGridNode)>): boolean
 "isReady"(): boolean
 "getGrid"(): $IGrid
 "isOnline"(): boolean
 "addService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>, arg1: T): $IManagedGridNode
 "isPowered"(): boolean
 "setVisualRepresentation"(arg0: $ItemLike$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $ItemStack$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $AEItemKey$$Type): $IManagedGridNode
 "setIdlePowerUsage"(arg0: double): $IManagedGridNode
 "hasGridBooted"(): boolean
 "setInWorldNode"(arg0: boolean): $IManagedGridNode
 "setGridColor"(arg0: $AEColor$$Type): $IManagedGridNode
 "loadFromNBT"(arg0: $CompoundTag$$Type): void
 "setOwningPlayer"(arg0: $Player$$Type): void
 "setExposedOnSides"(arg0: $Set$$Type<($Direction$$Type)>): $IManagedGridNode
 "setTagName"(arg0: StringJS): $IManagedGridNode
 "saveToNBT"(arg0: $CompoundTag$$Type): void
 "setFlags"(...arg0: ($GridFlags$$Type)[]): $IManagedGridNode
 "setOwningPlayerId"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedGridNode$$Type = ($IManagedGridNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IManagedGridNode$$Original = $IManagedGridNode;}
declare module "appeng.api.networking.IGrid" {
import {$Iterable} from "java.lang.Iterable"
import {$ITickManager} from "appeng.api.networking.ticking.ITickManager"
import {$IPathingService} from "appeng.api.networking.pathing.IPathingService"
import {$IStorageService} from "appeng.api.networking.storage.IStorageService"
import {$GridEvent, $GridEvent$$Type} from "appeng.api.networking.events.GridEvent"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$IGridService} from "appeng.api.networking.IGridService"
import {$ISpatialService} from "appeng.api.networking.spatial.ISpatialService"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IEnergyService} from "appeng.api.networking.energy.IEnergyService"
import {$ICraftingService} from "appeng.api.networking.crafting.ICraftingService"

export interface $IGrid$$Interface {
get "empty"(): boolean
get "nodes"(): $Iterable<($IGridNode)>
get "pivot"(): $IGridNode
get "pathingService"(): $IPathingService
get "tickManager"(): $ITickManager
get "storageService"(): $IStorageService
get "machineClasses"(): $Iterable<($Class<(never)>)>
get "spatialService"(): $ISpatialService
get "craftingService"(): $ICraftingService
get "energyService"(): $IEnergyService
}

export class $IGrid implements $IGrid$$Interface {
 "size"(): integer
 "isEmpty"(): boolean
 "export"(arg0: $JsonWriter$$Type): void
 "getService"<C extends $IGridService>(arg0: $Class$$Type<(C)>): C
 "getNodes"(): $Iterable<($IGridNode)>
 "postEvent"<T extends $GridEvent>(arg0: T): T
 "getPivot"(): $IGridNode
 "getActiveMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getPathingService"(): $IPathingService
 "getTickManager"(): $ITickManager
 "getStorageService"(): $IStorageService
 "getMachineNodes"(arg0: $Class$$Type<(never)>): $Iterable<($IGridNode)>
 "getMachineClasses"(): $Iterable<($Class<(never)>)>
 "getSpatialService"(): $ISpatialService
 "getCraftingService"(): $ICraftingService
 "getEnergyService"(): $IEnergyService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGrid$$Type = ($IGrid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGrid$$Original = $IGrid;}
declare module "appeng.api.networking.IGridVisitor" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"

export interface $IGridVisitor$$Interface {

(arg0: $IGridNode): boolean
}

export class $IGridVisitor implements $IGridVisitor$$Interface {
 "visitNode"(arg0: $IGridNode$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridVisitor$$Type = ((arg0: $IGridNode) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridVisitor$$Original = $IGridVisitor;}
declare module "appeng.api.networking.IGridConnection" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Direction} from "net.minecraft.core.Direction"

export interface $IGridConnection$$Interface {
get "inWorld"(): boolean
get "usedChannels"(): integer
}

export class $IGridConnection implements $IGridConnection$$Interface {
 "b"(): $IGridNode
 "a"(): $IGridNode
 "destroy"(): void
 "isInWorld"(): boolean
 "getUsedChannels"(): integer
 "getDirection"(arg0: $IGridNode$$Type): $Direction
 "getOtherSide"(arg0: $IGridNode$$Type): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnection$$Type = ($IGridConnection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridConnection$$Original = $IGridConnection;}
declare module "appeng.api.networking.GridFlags" {
import {$Enum} from "java.lang.Enum"

export class $GridFlags extends $Enum<($GridFlags)> {
static readonly "COMPRESSED_CHANNEL": $GridFlags
static readonly "CANNOT_CARRY_COMPRESSED": $GridFlags
static readonly "CANNOT_CARRY": $GridFlags
static readonly "DENSE_CAPACITY": $GridFlags
static readonly "PREFERRED": $GridFlags
static readonly "MULTIBLOCK": $GridFlags
static readonly "REQUIRE_CHANNEL": $GridFlags

public static "values"(): ($GridFlags)[]
public static "valueOf"(arg0: StringJS): $GridFlags
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridFlags$$Type = (("require_channel") | ("compressed_channel") | ("cannot_carry") | ("cannot_carry_compressed") | ("dense_capacity") | ("multiblock") | ("preferred"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridFlags$$Original = $GridFlags;}
declare module "appeng.api.networking.IGridServiceProvider" {
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IGridServiceProvider$$Interface {
}

export class $IGridServiceProvider implements $IGridServiceProvider$$Interface {
 "removeNode"(arg0: $IGridNode$$Type): void
 "onServerEndTick"(): void
 "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "onServerStartTick"(): void
 "onLevelEndTick"(arg0: $Level$$Type): void
 "onLevelStartTick"(arg0: $Level$$Type): void
 "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridServiceProvider$$Type = ($IGridServiceProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridServiceProvider$$Original = $IGridServiceProvider;}
declare module "appeng.api.networking.IGridNodeService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridNodeService$$Interface {
}

export class $IGridNodeService implements $IGridNodeService$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeService$$Type = ($IGridNodeService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridNodeService$$Original = $IGridNodeService;}
declare module "appeng.api.networking.IGridNode" {
import {$AEColor} from "appeng.api.util.AEColor"
import {$Map} from "java.util.Map"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$IGridNodeService} from "appeng.api.networking.IGridNodeService"
import {$GridFlags$$Type} from "appeng.api.networking.GridFlags"
import {$AEItemKey} from "appeng.api.stacks.AEItemKey"
import {$IGridConnection} from "appeng.api.networking.IGridConnection"
import {$Set} from "java.util.Set"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$Class$$Type} from "java.lang.Class"
import {$ServerLevel} from "net.minecraft.server.level.ServerLevel"
import {$IGridVisitor$$Type} from "appeng.api.networking.IGridVisitor"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IGridNode$$Interface {
get "active"(): boolean
get "owner"(): any
get "level"(): $ServerLevel
get "grid"(): $IGrid
get "online"(): boolean
get "powered"(): boolean
get "inWorldConnections"(): $Map<($Direction), ($IGridConnection)>
get "owningPlayerProfileId"(): $UUID
get "visualRepresentation"(): $AEItemKey
get "maxChannels"(): integer
get "connectedSides"(): $Set<($Direction)>
get "gridColor"(): $AEColor
get "owningPlayerId"(): integer
get "idlePowerUsage"(): double
get "usedChannels"(): integer
get "connections"(): $List<($IGridConnection)>
}

export class $IGridNode implements $IGridNode$$Interface {
 "isActive"(): boolean
 "getOwner"(): any
 "getLevel"(): $ServerLevel
 "getService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>): T
 "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type): void
 "beginVisit"(arg0: $IGridVisitor$$Type): void
 "getGrid"(): $IGrid
 "isOnline"(): boolean
 "isPowered"(): boolean
 "hasFlag"(arg0: $GridFlags$$Type): boolean
 "meetsChannelRequirements"(): boolean
 "getInWorldConnections"(): $Map<($Direction), ($IGridConnection)>
 "getOwningPlayerProfileId"(): $UUID
 "getVisualRepresentation"(): $AEItemKey
 "getMaxChannels"(): integer
 "getConnectedSides"(): $Set<($Direction)>
 "hasGridBooted"(): boolean
 "getGridColor"(): $AEColor
 "getOwningPlayerId"(): integer
 "getIdlePowerUsage"(): double
 "getUsedChannels"(): integer
 "getConnections"(): $List<($IGridConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNode$$Type = ($IGridNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridNode$$Original = $IGridNode;}
declare module "appeng.api.networking.IInWorldGridNodeHost" {
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IInWorldGridNodeHost$$Interface {

(arg0: $Direction): $IGridNode$$Type
}

export class $IInWorldGridNodeHost implements $IInWorldGridNodeHost$$Interface {
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInWorldGridNodeHost$$Type = ((arg0: $Direction) => $IGridNode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInWorldGridNodeHost$$Original = $IInWorldGridNodeHost;}
declare module "appeng.api.networking.IGridService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridService$$Interface {
}

export class $IGridService implements $IGridService$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridService$$Type = ($IGridService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridService$$Original = $IGridService;}
