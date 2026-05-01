declare module "dev.architectury.mixin.forge.neoforge.LiquidBlockAccessor" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $LiquidBlockAccessor$$Interface {

(): $FlowingFluid$$Type
get "fluid"(): $FlowingFluid
}

export class $LiquidBlockAccessor implements $LiquidBlockAccessor$$Interface {
 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockAccessor$$Type = (() => $FlowingFluid$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockAccessor$$Original = $LiquidBlockAccessor;}
declare module "dev.architectury.mixin.forge.neoforge.BucketItemAccessor" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"

export interface $BucketItemAccessor$$Interface {

(): $Fluid$$Type
get "content"(): $Fluid
}

export class $BucketItemAccessor implements $BucketItemAccessor$$Interface {
 "getContent"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketItemAccessor$$Type = (() => $Fluid$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BucketItemAccessor$$Original = $BucketItemAccessor;}
