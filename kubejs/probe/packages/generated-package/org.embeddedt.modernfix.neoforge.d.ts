declare module "org.embeddedt.modernfix.neoforge.recipe.ExtendedIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedIngredient$$Interface {

(): void
}

export class $ExtendedIngredient implements $ExtendedIngredient$$Interface {
 "mfix$clearReference"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedIngredient$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedIngredient$$Original = $ExtendedIngredient;}
declare module "org.embeddedt.modernfix.neoforge.caps.ITrackingCapEvent" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export interface $ITrackingCapEvent$$Interface {

(): $Set$$Type<($BaseCapability$$Type<(never), (never)>)>
}

export class $ITrackingCapEvent implements $ITrackingCapEvent$$Interface {
 "mfix$getTrackedCaps"(): $Set<($BaseCapability<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackingCapEvent$$Type = (() => $Set$$Type<($BaseCapability$$Type<(never), (never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITrackingCapEvent$$Original = $ITrackingCapEvent;}
