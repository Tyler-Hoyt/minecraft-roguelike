declare module "appeng.util.inv.InternalInventoryHost" {
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"

export interface $InternalInventoryHost$$Interface {
get "clientSide"(): boolean
}

export class $InternalInventoryHost implements $InternalInventoryHost$$Interface {
 "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
 "isClientSide"(): boolean
 "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventoryHost$$Type = ($InternalInventoryHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InternalInventoryHost$$Original = $InternalInventoryHost;}
declare module "appeng.util.inv.AppEngInternalInventory" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemTransfer} from "appeng.api.inventories.ItemTransfer"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAEItemFilter$$Type} from "appeng.util.inv.filter.IAEItemFilter"
import {$BaseInternalInventory} from "appeng.api.inventories.BaseInternalInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $AppEngInternalInventory extends $BaseInternalInventory {
constructor(arg0: $InternalInventoryHost$$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: $InternalInventoryHost$$Type, arg1: integer, arg2: integer)
constructor(arg0: $InternalInventoryHost$$Type, arg1: integer, arg2: integer, arg3: $IAEItemFilter$$Type)

public "size"(): integer
public "getHost"(): $InternalInventoryHost
public "setFilter"(arg0: $IAEItemFilter$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "toItemContainerContents"(): $ItemContainerContents
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
public "setMaxStackSize"(arg0: integer, arg1: integer): void
public "fromItemContainerContents"(arg0: $ItemContainerContents$$Type): void
public "setEnableClientEvents"(arg0: boolean): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public static "empty"(): $InternalInventory
public static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
get "host"(): $InternalInventoryHost
set "filter"(value: $IAEItemFilter$$Type)
set "enableClientEvents"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AppEngInternalInventory$$Type = ($AppEngInternalInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AppEngInternalInventory$$Original = $AppEngInternalInventory;}
