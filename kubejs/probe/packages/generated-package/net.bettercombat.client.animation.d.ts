declare module "net.bettercombat.client.animation.PlayerAttackAnimatable" {
import {$TrailAppearance$$Type} from "net.bettercombat.api.fx.TrailAppearance"
import {$AnimatedHand$$Type} from "net.bettercombat.logic.AnimatedHand"
import {$List$$Type} from "java.util.List"
import {$ParticlePlacement$$Type} from "net.bettercombat.api.fx.ParticlePlacement"

export interface $PlayerAttackAnimatable$$Interface {
}

export class $PlayerAttackAnimatable implements $PlayerAttackAnimatable$$Interface {
 "playAttackAnimation"(arg0: StringJS, arg1: $AnimatedHand$$Type, arg2: float, arg3: float): void
 "stopAttackAnimation"(arg0: float): void
 "playAttackParticles"(arg0: boolean, arg1: float, arg2: integer, arg3: $List$$Type<($ParticlePlacement$$Type)>, arg4: $TrailAppearance$$Type): void
 "updateAnimationsOnTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackAnimatable$$Type = ($PlayerAttackAnimatable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAttackAnimatable$$Original = $PlayerAttackAnimatable;}
