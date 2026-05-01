declare module "dev.shadowsoffire.placebo.menu.BlockEntityMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlaceboContainerMenu} from "dev.shadowsoffire.placebo.menu.PlaceboContainerMenu"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BlockEntityMenu<T extends $BlockEntity> extends $PlaceboContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "stillValid"(arg0: $Player$$Type): boolean
public "getSlot"(arg0: integer): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityMenu$$Type<T> = ($BlockEntityMenu<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityMenu$$Original<T> = $BlockEntityMenu<(T)>;}
declare module "dev.shadowsoffire.placebo.menu.QuickMoveHandler$QuickMoveMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $QuickMoveHandler$QuickMoveMenu$$Interface {
}

export class $QuickMoveHandler$QuickMoveMenu implements $QuickMoveHandler$QuickMoveMenu$$Interface {
 "getSlot"(arg0: integer): $Slot
 "onQuickMove"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type): void
 "moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuickMoveHandler$QuickMoveMenu$$Type = ($QuickMoveHandler$QuickMoveMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuickMoveHandler$QuickMoveMenu$$Original = $QuickMoveHandler$QuickMoveMenu;}
declare module "dev.shadowsoffire.placebo.menu.IDataUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDataUpdateListener$$Interface {

(arg0: integer, arg1: integer): void
}

export class $IDataUpdateListener implements $IDataUpdateListener$$Interface {
 "dataUpdated"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataUpdateListener$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDataUpdateListener$$Original = $IDataUpdateListener;}
declare module "dev.shadowsoffire.placebo.menu.SlotUpdateListener" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $SlotUpdateListener$$Interface {

(arg0: integer, arg1: $ItemStack): void
}

export class $SlotUpdateListener implements $SlotUpdateListener$$Interface {
 "slotUpdated"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotUpdateListener$$Type = ((arg0: integer, arg1: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotUpdateListener$$Original = $SlotUpdateListener;}
declare module "dev.shadowsoffire.placebo.menu.PlaceboContainerMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDataUpdateListener$$Type} from "dev.shadowsoffire.placebo.menu.IDataUpdateListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$QuickMoveHandler$QuickMoveMenu$$Interface} from "dev.shadowsoffire.placebo.menu.QuickMoveHandler$QuickMoveMenu"
import {$SlotUpdateListener$$Type} from "dev.shadowsoffire.placebo.menu.SlotUpdateListener"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $PlaceboContainerMenu extends $AbstractContainerMenu implements $QuickMoveHandler$QuickMoveMenu$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "addDataListener"(arg0: $IDataUpdateListener$$Type): void
public "setData"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "addSlotListener"(arg0: $SlotUpdateListener$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
public "getSlot"(arg0: integer): $Slot
public "onQuickMove"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceboContainerMenu$$Type = ($PlaceboContainerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaceboContainerMenu$$Original = $PlaceboContainerMenu;}
