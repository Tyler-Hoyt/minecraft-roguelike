declare module "appeng.util.inv.filter.IAEItemFilter" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export interface $IAEItemFilter$$Interface {
}

export class $IAEItemFilter implements $IAEItemFilter$$Interface {
 "allowInsert"(arg0: $InternalInventory$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "allowExtract"(arg0: $InternalInventory$$Type, arg1: integer, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemFilter$$Type = ($IAEItemFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEItemFilter$$Original = $IAEItemFilter;}
