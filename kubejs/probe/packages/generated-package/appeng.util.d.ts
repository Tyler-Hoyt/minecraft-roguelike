declare module "appeng.util.ConfigInventory$Builder" {
import {$Collection$$Type} from "java.util.Collection"
import {$AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$AEKeySlotFilter$$Type} from "appeng.api.storage.AEKeySlotFilter"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Predicate$$Type} from "com.google.common.base.Predicate"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $ConfigInventory$Builder {
public "build"(): $ConfigInventory
public "supportedTypes"(arg0: $Collection$$Type<($AEKeyType$$Type)>): $ConfigInventory$Builder
public "supportedTypes"(arg0: $AEKeyType$$Type, ...arg1: ($AEKeyType$$Type)[]): $ConfigInventory$Builder
public "allowOverstacking"(arg0: boolean): $ConfigInventory$Builder
public "slotFilter"(arg0: $Predicate$$Type<($AEKey)>): $ConfigInventory$Builder
public "slotFilter"(arg0: $AEKeySlotFilter$$Type): $ConfigInventory$Builder
public "changeListener"(arg0: $Runnable$$Type): $ConfigInventory$Builder
public "supportedType"(arg0: $AEKeyType$$Type): $ConfigInventory$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigInventory$Builder$$Type = ($ConfigInventory$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigInventory$Builder$$Original = $ConfigInventory$Builder;}
declare module "appeng.util.IDebugExportable" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDebugExportable$$Interface {

(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<(any)>, arg3: $Reference2IntMap<($IGridNode)>): void
}

export class $IDebugExportable implements $IDebugExportable$$Interface {
 "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebugExportable$$Type = ((arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<(any)>, arg3: $Reference2IntMap<($IGridNode)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDebugExportable$$Original = $IDebugExportable;}
declare module "appeng.util.LookDirection" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export class $LookDirection {
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)

public "getA"(): $Vec3
public "getB"(): $Vec3
get "a"(): $Vec3
get "b"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LookDirection$$Type = ($LookDirection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LookDirection$$Original = $LookDirection;}
declare module "appeng.util.ConfigMenuInventory" {
import {$Iterator} from "java.util.Iterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemTransfer} from "appeng.api.inventories.ItemTransfer"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Interface} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Container} from "net.minecraft.world.Container"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack} from "appeng.api.stacks.GenericStack"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $ConfigMenuInventory implements $InternalInventory$$Interface {
constructor(arg0: $GenericStackInv$$Type)

public "size"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "convertToSuitableStack"(arg0: $ItemStack$$Type): $GenericStack
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public "getDelegate"(): $GenericStackInv
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$$Type): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getRedstoneSignal"(): integer
public "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
public "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "sendChangeNotification"(arg0: integer): void
public "getSlotInv"(arg0: integer): $InternalInventory
public static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
public "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
public "toContainer"(): $Container
public "toItemHandler"(): $IItemHandler
public "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "delegate"(): $GenericStackInv
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMenuInventory$$Type = ($ConfigMenuInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigMenuInventory$$Original = $ConfigMenuInventory;}
declare module "appeng.util.ConfigInventory" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ConfigInventory$Builder} from "appeng.util.ConfigInventory$Builder"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Set} from "java.util.Set"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ConfigMenuInventory} from "appeng.util.ConfigMenuInventory"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export class $ConfigInventory extends $GenericStackInv {
public "getKey"(arg0: integer): $AEKey
public "keySet"(): $Set<($AEKey)>
public "getStack"(arg0: integer): $GenericStack
public static "configStacks"(arg0: integer): $ConfigInventory$Builder
public static "configTypes"(arg0: integer): $ConfigInventory$Builder
public static "emptyTypes"(): $ConfigInventory
public "addFilter"(arg0: $AEKey$$Type): $ConfigInventory
public "addFilter"(arg0: $Fluid$$Type): $ConfigInventory
public "addFilter"(arg0: $ItemLike$$Type): $ConfigInventory
public static "storage"(arg0: integer): $ConfigInventory$Builder
public "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
public "createMenuWrapper"(): $ConfigMenuInventory
public "getMaxAmount"(arg0: $AEKey$$Type): long
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigInventory$$Type = ($ConfigInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigInventory$$Original = $ConfigInventory;}
declare module "appeng.util.SettingsFrom" {
import {$Enum} from "java.lang.Enum"

export class $SettingsFrom extends $Enum<($SettingsFrom)> {
static readonly "DISMANTLE_ITEM": $SettingsFrom
static readonly "MEMORY_CARD": $SettingsFrom

public static "values"(): ($SettingsFrom)[]
public static "valueOf"(arg0: StringJS): $SettingsFrom
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsFrom$$Type = (("dismantle_item") | ("memory_card"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SettingsFrom$$Original = $SettingsFrom;}
declare module "appeng.util.SearchInventoryEvent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $SearchInventoryEvent extends $PlayerEvent {
constructor(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "getStacks"(): $List<($ItemStack)>
public static "getItems"(arg0: $Player$$Type): $List<($ItemStack)>
public "getEntity"(): $Entity
get "stacks"(): $List<($ItemStack)>
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SearchInventoryEvent$$Type = ($SearchInventoryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SearchInventoryEvent$$Original = $SearchInventoryEvent;}
