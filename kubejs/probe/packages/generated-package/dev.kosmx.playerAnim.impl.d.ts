declare module "dev.kosmx.playerAnim.impl.IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpperPartHelper$$Interface {
get "upperPart"(): boolean
set "upperPart"(value: boolean)
}

export class $IUpperPartHelper implements $IUpperPartHelper$$Interface {
 "isUpperPart"(): boolean
 "setUpperPart"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpperPartHelper$$Type = ($IUpperPartHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpperPartHelper$$Original = $IUpperPartHelper;}
declare module "dev.kosmx.playerAnim.impl.IMutableModel" {
import {$AnimationProcessor, $AnimationProcessor$$Type} from "dev.kosmx.playerAnim.core.impl.AnimationProcessor"
import {$SetableSupplier, $SetableSupplier$$Type} from "dev.kosmx.playerAnim.core.util.SetableSupplier"

export interface $IMutableModel$$Interface {
set "emoteSupplier"(value: $SetableSupplier$$Type<($AnimationProcessor$$Type)>)
get "emoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
}

export class $IMutableModel implements $IMutableModel$$Interface {
 "setEmoteSupplier"(arg0: $SetableSupplier$$Type<($AnimationProcessor$$Type)>): void
 "getEmoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableModel$$Type = ($IMutableModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMutableModel$$Original = $IMutableModel;}
declare module "dev.kosmx.playerAnim.impl.animation.AnimationApplier" {
import {$AnimationProcessor} from "dev.kosmx.playerAnim.core.impl.AnimationProcessor"
import {$IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $AnimationApplier extends $AnimationProcessor {
constructor(animation: $IAnimation$$Type)

public "updatePart"(partName: StringJS, part: $ModelPart$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationApplier$$Type = ($AnimationApplier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimationApplier$$Original = $AnimationApplier;}
declare module "dev.kosmx.playerAnim.impl.IAnimatedPlayer" {
import {$AnimationApplier} from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IAnimation, $IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$IPlayer$$Interface} from "dev.kosmx.playerAnim.api.IPlayer"
import {$AnimationStack} from "dev.kosmx.playerAnim.api.layered.AnimationStack"

export interface $IAnimatedPlayer$$Interface extends $IPlayer$$Interface {
get "animation"(): $AnimationApplier
get "animationStack"(): $AnimationStack
}

export class $IAnimatedPlayer implements $IAnimatedPlayer$$Interface {
/**
 * 
 * @deprecated
 */
 "getAnimation"(): $AnimationApplier
 "playerAnimator_setAnimation"(arg0: $ResourceLocation$$Type, arg1: $IAnimation$$Type): $IAnimation
 "playerAnimator_getAnimation"(): $AnimationApplier
 "playerAnimator_getAnimation"(arg0: $ResourceLocation$$Type): $IAnimation
 "getAnimationStack"(): $AnimationStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimatedPlayer$$Type = ($IAnimatedPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAnimatedPlayer$$Original = $IAnimatedPlayer;}
declare module "dev.kosmx.playerAnim.impl.IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPlayerModel$$Interface {

(): void
}

export class $IPlayerModel implements $IPlayerModel$$Interface {
 "playerAnimator_prepForFirstPersonRender"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerModel$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerModel$$Original = $IPlayerModel;}
