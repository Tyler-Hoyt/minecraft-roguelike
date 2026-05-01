declare module "net.bettercombat.mixin.player.PlayerEntityAccessor" {
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $PlayerEntityAccessor$$Interface {

(): $Inventory$$Type
get "inventory"(): $Inventory
}

export class $PlayerEntityAccessor implements $PlayerEntityAccessor$$Interface {
 "getInventory"(): $Inventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityAccessor$$Type = (() => $Inventory$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEntityAccessor$$Original = $PlayerEntityAccessor;}
declare module "net.bettercombat.mixin.player.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor$$Interface {
get "attackStrengthTicker"(): integer
set "lastAttackedTicks"(value: integer)
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "getAttackStrengthTicker"(): integer
 "setLastAttackedTicks"(arg0: integer): void
 "invokeTurnHead"(arg0: float, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
