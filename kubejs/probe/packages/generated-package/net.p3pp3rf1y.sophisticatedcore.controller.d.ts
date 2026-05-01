declare module "net.p3pp3rf1y.sophisticatedcore.controller.IControllerBoundable" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IControllerBoundable$$Interface {
get "storageBlockLevel"(): $Level
get "storageBlockPos"(): $BlockPos
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
}

export class $IControllerBoundable implements $IControllerBoundable$$Interface {
static readonly "CONTROLLER_POS_TAG": StringJS

 "addToAdjacentController"(): void
 "removeControllerPos"(): void
 "unregisterController"(): void
 "getStorageBlockLevel"(): $Level
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "getStorageBlockPos"(): $BlockPos
 "canConnectStorages"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "canBeConnected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllerBoundable$$Type = ($IControllerBoundable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IControllerBoundable$$Original = $IControllerBoundable;}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.ILinkable" {
import {$IControllerBoundable$$Interface} from "net.p3pp3rf1y.sophisticatedcore.controller.IControllerBoundable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ILinkable$$Interface extends $IControllerBoundable$$Interface {
get "connectablePositions"(): $Set<($BlockPos)>
get "linked"(): boolean
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
get "notLinked"(): void
get "storageBlockLevel"(): $Level
get "storageBlockPos"(): $BlockPos
}

export class $ILinkable implements $ILinkable$$Interface {
 "unlinkFromController"(): void
 "getConnectablePositions"(): $Set<($BlockPos)>
 "isLinked"(): boolean
 "connectLinkedSelf"(): boolean
 "canBeLinked"(): boolean
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "setNotLinked"(): void
 "linkToController"(arg0: $BlockPos$$Type): void
 "addToAdjacentController"(): void
 "removeControllerPos"(): void
 "unregisterController"(): void
 "getStorageBlockLevel"(): $Level
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "getStorageBlockPos"(): $BlockPos
 "canConnectStorages"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "canBeConnected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkable$$Type = ($ILinkable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILinkable$$Original = $ILinkable;}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandlerSimpleInserter$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$IInsertBlockOverride$$Interface} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInsertBlockOverride"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ControllerBlockEntityBase extends $BlockEntity implements $IItemHandlerSimpleInserter$$Interface, $IInsertBlockOverride$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public "getUpdatePacket"(): $Packet
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getLinkedBlocks"(): $Set<($BlockPos)>
public "hasMatchingStack"(arg0: $ItemStackKey$$Type): boolean
public "hasMatchingItem"(arg0: $Item$$Type): boolean
public "isInsertBlocked"(): boolean
public "removeBoundable"(arg0: $BlockPos$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "addStorageStacksAndRegisterListeners"(arg0: $BlockPos$$Type): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "extractItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "onLoad"(): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "detachFromStoragesAndUnlinkBlocks"(): void
public "setStorageFilterItems"(arg0: $BlockPos$$Type, arg1: $Set$$Type<($Item$$Type)>): void
public "removeStorageMemorizedItem"(arg0: $BlockPos$$Type, arg1: $Item$$Type): void
public "addStorageWithEmptySlots"(arg0: $BlockPos$$Type): void
public "addStorageMemorizedItem"(arg0: $BlockPos$$Type, arg1: $Item$$Type): void
public "addStorageMemorizedStack"(arg0: $BlockPos$$Type, arg1: integer): void
public "removeStorageStacks"(arg0: $BlockPos$$Type): void
public "removeNonConnectingBlock"(arg0: $BlockPos$$Type): void
public "addStorage"(arg0: $BlockPos$$Type): void
public "isStorageConnected"(arg0: $BlockPos$$Type): boolean
public "removeStorageStack"(arg0: $BlockPos$$Type, arg1: $ItemStackKey$$Type): void
public "addLinkedBlock"(arg0: $BlockPos$$Type): boolean
public "removeStorage"(arg0: $BlockPos$$Type): void
public "removeLinkedBlock"(arg0: $BlockPos$$Type): void
public "addStorageStack"(arg0: $BlockPos$$Type, arg1: $ItemStackKey$$Type): void
public "clearCachedHandler"(arg0: $BlockPos$$Type): void
public "changeSlots"(arg0: $BlockPos$$Type, arg1: integer, arg2: boolean): void
public "updateEmptySlots"(arg0: $BlockPos$$Type, arg1: boolean): void
public "removeStorageWithEmptySlots"(arg0: $BlockPos$$Type): void
public "removeStorageMemorizedStack"(arg0: $BlockPos$$Type, arg1: integer): void
public "searchAndAddBoundables"(): void
public "getStoragePositions"(): $List<($BlockPos)>
public "getSlots"(): integer
public "getSlots"(arg0: integer): integer
public "kjs$self"(): $IItemHandler
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "isMutable"(): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getSlotLimit"(arg0: integer): integer
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "asContainer"(): $Container
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "setChanged"(): void
public "clear"(): void
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "updatePacket"(): $Packet
get "linkedBlocks"(): $Set<($BlockPos)>
get "insertBlocked"(): boolean
get "storagePositions"(): $List<($BlockPos)>
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntityBase$$Type = ($ControllerBlockEntityBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerBlockEntityBase$$Original = $ControllerBlockEntityBase;}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.IControllableStorage" {
import {$IControllerBoundable$$Interface} from "net.p3pp3rf1y.sophisticatedcore.controller.IControllerBoundable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IControllableStorage$$Interface extends $IControllerBoundable$$Interface {
get "storageWrapper"(): $IStorageWrapper
get "storageBlockLevel"(): $Level
get "storageBlockPos"(): $BlockPos
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
}

export class $IControllableStorage implements $IControllableStorage$$Interface {
 "onInventoryInputOutputHandlerRefresh"(): void
 "getStorageWrapper"(): $IStorageWrapper
 "unregisterController"(): void
 "tryToAddToController"(): void
 "removeFromController"(): void
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "canConnectStorages"(): boolean
 "hasStorageData"(): boolean
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "changeSlots"(arg0: integer): void
 "updateEmptySlots"(): void
 "registerWithControllerOnLoad"(): void
 "registerInventoryStackListeners"(): void
 "addToAdjacentController"(): void
 "removeControllerPos"(): void
 "getStorageBlockLevel"(): $Level
 "getStorageBlockPos"(): $BlockPos
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "canBeConnected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllableStorage$$Type = ($IControllableStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IControllableStorage$$Original = $IControllableStorage;}
