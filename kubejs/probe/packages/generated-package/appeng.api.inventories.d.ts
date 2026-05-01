declare module "appeng.api.inventories.ISegmentedInventory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export interface $ISegmentedInventory$$Interface {

(arg0: $ResourceLocation): $InternalInventory$$Type
}

export class $ISegmentedInventory implements $ISegmentedInventory$$Interface {
static readonly "CONFIG": $ResourceLocation
static readonly "STORAGE": $ResourceLocation
static readonly "CELLS": $ResourceLocation
static readonly "UPGRADES": $ResourceLocation

 "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISegmentedInventory$$Type = ((arg0: $ResourceLocation) => $InternalInventory$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISegmentedInventory$$Original = $ISegmentedInventory;}
declare module "appeng.api.inventories.InternalInventory" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemTransfer, $ItemTransfer$$Interface} from "appeng.api.inventories.ItemTransfer"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Container} from "net.minecraft.world.Container"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $InternalInventory$$Interface extends $Iterable$$Interface<($ItemStack)>, $ItemTransfer$$Interface {
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "redstoneSignal"(): integer
}

export class $InternalInventory implements $InternalInventory$$Interface {
 "size"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($ItemStack)>
static "empty"(): $InternalInventory
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getRedstoneSignal"(): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "getSlotInv"(arg0: integer): $InternalInventory
static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "toContainer"(): $Container
 "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
 "toItemHandler"(): $IItemHandler
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventory$$Type = ($InternalInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InternalInventory$$Original = $InternalInventory;}
declare module "appeng.api.inventories.BaseInternalInventory" {
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

export class $BaseInternalInventory implements $InternalInventory$$Interface {
constructor()

public "toItemHandler"(): $IItemHandler
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
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
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseInternalInventory$$Type = ($BaseInternalInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseInternalInventory$$Original = $BaseInternalInventory;}
declare module "appeng.api.inventories.ItemTransfer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"

export interface $ItemTransfer$$Interface {
}

export class $ItemTransfer implements $ItemTransfer$$Interface {
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransfer$$Type = ($ItemTransfer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransfer$$Original = $ItemTransfer;}
