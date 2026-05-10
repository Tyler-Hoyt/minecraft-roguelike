declare module "com.ordana.spelunkery.utils.IPickHelper" {
import {$PickOnAStickEntity, $PickOnAStickEntity$$Type} from "com.ordana.spelunkery.entities.PickOnAStickEntity"

export interface $IPickHelper$$Interface {
}

export class $IPickHelper implements $IPickHelper$$Interface {
 "spelunkery$setEntity"(arg0: $PickOnAStickEntity$$Type): void
 "spelunkery$getEntity"(): $PickOnAStickEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickHelper$$Type = ($IPickHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPickHelper$$Original = $IPickHelper;}
declare module "com.ordana.spelunkery.utils.IParachuteEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IParachuteEntity$$Interface {
get "parachuteTicks"(): integer
set "parachute"(value: $ItemStack$$Type)
get "parachute"(): $ItemStack
}

export class $IParachuteEntity implements $IParachuteEntity$$Interface {
 "hasParachute"(): boolean
 "getParachuteTicks"(): integer
 "setParachute"(arg0: $ItemStack$$Type): void
 "getParachute"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParachuteEntity$$Type = ($IParachuteEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IParachuteEntity$$Original = $IParachuteEntity;}
