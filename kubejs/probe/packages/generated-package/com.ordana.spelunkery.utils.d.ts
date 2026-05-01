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
get "parachute"(): $ItemStack
set "parachute"(value: $ItemStack$$Type)
get "parachuteTicks"(): integer
}

export class $IParachuteEntity implements $IParachuteEntity$$Interface {
 "getParachute"(): $ItemStack
 "hasParachute"(): boolean
 "setParachute"(arg0: $ItemStack$$Type): void
 "getParachuteTicks"(): integer
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
