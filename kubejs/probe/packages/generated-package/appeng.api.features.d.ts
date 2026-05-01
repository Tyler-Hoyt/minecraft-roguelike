declare module "appeng.api.features.IGridLinkableHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"

export interface $IGridLinkableHandler$$Interface {
}

export class $IGridLinkableHandler implements $IGridLinkableHandler$$Interface {
 "link"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
 "unlink"(arg0: $ItemStack$$Type): void
 "canLink"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridLinkableHandler$$Type = ($IGridLinkableHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridLinkableHandler$$Original = $IGridLinkableHandler;}
