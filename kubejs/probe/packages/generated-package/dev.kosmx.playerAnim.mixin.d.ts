declare module "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessor$$Interface {

(arg0: boolean): void
set "detached"(value: boolean)
}

export class $CameraAccessor implements $CameraAccessor$$Interface {
 "setDetached"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraAccessor$$Original = $CameraAccessor;}
declare module "dev.kosmx.playerAnim.mixin.PlayerModelAccessor" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $PlayerModelAccessor$$Interface {

(): $ModelPart$$Type
get "cloak"(): $ModelPart
}

export class $PlayerModelAccessor implements $PlayerModelAccessor$$Interface {
 "getCloak"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$$Type = (() => $ModelPart$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerModelAccessor$$Original = $PlayerModelAccessor;}
