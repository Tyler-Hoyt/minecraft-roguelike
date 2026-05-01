declare module "appeng.api.upgrades.IUpgradeInventory" {
import {$Iterator} from "java.util.Iterator"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemTransfer} from "appeng.api.inventories.ItemTransfer"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Interface} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Container} from "net.minecraft.world.Container"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IUpgradeInventory$$Interface extends $InternalInventory$$Interface {
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "upgradableItem"(): $ItemLike
get "redstoneSignal"(): integer
}

export class $IUpgradeInventory implements $IUpgradeInventory$$Interface {
 "getMaxInstalled"(arg0: $ItemLike$$Type): integer
 "isInstalled"(arg0: $ItemLike$$Type): boolean
 "getUpgradableItem"(): $ItemLike
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: $HolderLookup$Provider$$Type): void
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
export type $IUpgradeInventory$$Type = ($IUpgradeInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeInventory$$Original = $IUpgradeInventory;}
declare module "appeng.api.upgrades.IUpgradeableItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"

export interface $IUpgradeableItem$$Interface extends $ItemLike$$Interface {

(): $Item$$Type
}

export class $IUpgradeableItem implements $IUpgradeableItem$$Interface {
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableItem$$Type = (() => $Item$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeableItem$$Original = $IUpgradeableItem;}
declare module "appeng.api.upgrades.IUpgradeableObject" {
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"

export interface $IUpgradeableObject$$Interface {
get "upgrades"(): $IUpgradeInventory
}

export class $IUpgradeableObject implements $IUpgradeableObject$$Interface {
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableObject$$Type = ($IUpgradeableObject);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeableObject$$Original = $IUpgradeableObject;}
