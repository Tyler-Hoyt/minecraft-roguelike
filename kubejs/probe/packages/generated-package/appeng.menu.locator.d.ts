declare module "appeng.menu.locator.ItemMenuHostLocator" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MenuHostLocator$$Interface} from "appeng.menu.locator.MenuHostLocator"
import {$Class$$Type} from "java.lang.Class"
import {$Logger} from "org.slf4j.Logger"

export interface $ItemMenuHostLocator$$Interface extends $MenuHostLocator$$Interface {
get "playerInventorySlot"(): integer
}

export class $ItemMenuHostLocator implements $ItemMenuHostLocator$$Interface {
static readonly "LOG": $Logger

 "hitResult"(): $BlockHitResult
 "locateItem"(arg0: $Player$$Type): $ItemStack
 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T
 "getPlayerInventorySlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMenuHostLocator$$Type = ($ItemMenuHostLocator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemMenuHostLocator$$Original = $ItemMenuHostLocator;}
declare module "appeng.menu.locator.MenuHostLocator" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $MenuHostLocator$$Interface {

(arg0: $Player, arg1: $Class<(T)>): T
}

export class $MenuHostLocator implements $MenuHostLocator$$Interface {
 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuHostLocator$$Type = ((arg0: $Player, arg1: $Class<(T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuHostLocator$$Original = $MenuHostLocator;}
