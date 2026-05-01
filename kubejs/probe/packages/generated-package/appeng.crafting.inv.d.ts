declare module "appeng.crafting.inv.ListCraftingInventory$ChangeListener" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $ListCraftingInventory$ChangeListener$$Interface {

(arg0: $AEKey): void
}

export class $ListCraftingInventory$ChangeListener implements $ListCraftingInventory$ChangeListener$$Interface {
 "onChange"(arg0: $AEKey$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$ChangeListener$$Type = ((arg0: $AEKey) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListCraftingInventory$ChangeListener$$Original = $ListCraftingInventory$ChangeListener;}
declare module "appeng.crafting.inv.ListCraftingInventory" {
import {$Iterable} from "java.lang.Iterable"
import {$KeyCounter} from "appeng.api.stacks.KeyCounter"
import {$ListCraftingInventory$ChangeListener$$Type} from "appeng.crafting.inv.ListCraftingInventory$ChangeListener"
import {$ICraftingInventory$$Interface} from "appeng.crafting.inv.ICraftingInventory"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ListCraftingInventory implements $ICraftingInventory$$Interface {
readonly "list": $KeyCounter

constructor(arg0: $ListCraftingInventory$ChangeListener$$Type)

public "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): void
public "clear"(): void
public "readFromNBT"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "findFuzzyTemplates"(arg0: $AEKey$$Type): $Iterable<($AEKey)>
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type): $ListTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$$Type = ($ListCraftingInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListCraftingInventory$$Original = $ListCraftingInventory;}
declare module "appeng.crafting.inv.ICraftingInventory" {
import {$Iterable} from "java.lang.Iterable"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $ICraftingInventory$$Interface {
}

export class $ICraftingInventory implements $ICraftingInventory$$Interface {
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): void
 "findFuzzyTemplates"(arg0: $AEKey$$Type): $Iterable<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingInventory$$Type = ($ICraftingInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingInventory$$Original = $ICraftingInventory;}
