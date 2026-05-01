declare module "net.neoforged.neoforge.items.ComponentItemHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$MutableDataComponentHolder$$Type} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export class $ComponentItemHandler implements $IItemHandlerModifiable$$Interface {
constructor(arg0: $MutableDataComponentHolder$$Type, arg1: $DataComponentType$$Type<($ItemContainerContents$$Type)>, arg2: integer)

public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getSlots"(): integer
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
export type $ComponentItemHandler$$Type = ($ComponentItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComponentItemHandler$$Original = $ComponentItemHandler;}
declare module "net.neoforged.neoforge.items.IItemHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryKJS$$Interface} from "dev.latvian.mods.kubejs.core.InventoryKJS"

export interface $IItemHandler$$Interface extends $InventoryKJS$$Interface {
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "changed"(): void
}

export class $IItemHandler implements $IItemHandler$$Interface {
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getSlots"(): integer
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "setChanged"(): void
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$$Type = ($IItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandler$$Original = $IItemHandler;}
declare module "net.neoforged.neoforge.items.ItemStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemStackListGetter$$Interface} from "net.valhelsia.valhelsia_core.api.common.util.ItemStackListGetter"

export class $ItemStackHandler implements $IItemHandler$$Interface, $IItemHandlerModifiable$$Interface, $INBTSerializable$$Interface<($CompoundTag)>, $ItemStackListGetter$$Interface {
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)
constructor(arg0: integer)
constructor()

public "getStacks"(): $NonNullList
public "setSize"(arg0: integer): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getSlots"(): integer
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
get "stacks"(): $NonNullList
set "size"(value: integer)
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
export type $ItemStackHandler$$Type = ($ItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackHandler$$Original = $ItemStackHandler;}
declare module "net.neoforged.neoforge.items.IItemHandlerModifiable" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerModifiable$$Interface extends $IItemHandler$$Interface {
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "changed"(): void
}

export class $IItemHandlerModifiable implements $IItemHandlerModifiable$$Interface {
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getSlots"(): integer
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "setChanged"(): void
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$$Type = ($IItemHandlerModifiable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerModifiable$$Original = $IItemHandlerModifiable;}
declare module "net.neoforged.neoforge.items.wrapper.RecipeWrapper" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $RecipeWrapper implements $RecipeInput$$Interface {
constructor(arg0: $IItemHandler$$Type)

public "size"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapper$$Type = ($RecipeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeWrapper$$Original = $RecipeWrapper;}
