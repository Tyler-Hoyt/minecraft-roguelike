declare module "appeng.hooks.AEToolItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AEToolItem$$Interface {
}

export class $AEToolItem implements $AEToolItem$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEToolItem$$Type = ($AEToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEToolItem$$Original = $AEToolItem;}
declare module "appeng.hooks.IntrinsicEnchantItem" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IntrinsicEnchantItem$$Interface {

(arg0: $ItemStack, arg1: $Holder<($Enchantment)>): integer
}

export class $IntrinsicEnchantItem implements $IntrinsicEnchantItem$$Interface {
 "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntrinsicEnchantItem$$Type = ((arg0: $ItemStack, arg1: $Holder<($Enchantment)>) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntrinsicEnchantItem$$Original = $IntrinsicEnchantItem;}
declare module "appeng.hooks.IBlockTool" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $IBlockTool$$Interface {

(arg0: $UseOnContext): $InteractionResult$$Type
}

export class $IBlockTool implements $IBlockTool$$Interface {
 "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockTool$$Type = ((arg0: $UseOnContext) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockTool$$Original = $IBlockTool;}
