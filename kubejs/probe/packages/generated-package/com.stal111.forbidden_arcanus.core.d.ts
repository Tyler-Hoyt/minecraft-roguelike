declare module "com.stal111.forbidden_arcanus.core.mixin.LevelRendererAccessor" {
import {$Particle, $Particle$$Type} from "net.minecraft.client.particle.Particle"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $LevelRendererAccessor$$Interface {

(arg0: $ParticleOptions, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle$$Type
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ((arg0: $ParticleOptions, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $Particle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "com.stal111.forbidden_arcanus.core.mixin.AccessorFireBlock" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $AccessorFireBlock$$Interface {

(arg0: $Block, arg1: integer, arg2: integer): void
}

export class $AccessorFireBlock implements $AccessorFireBlock$$Interface {
 "forbiddenArcanus_setFireInfo"(arg0: $Block$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFireBlock$$Type = ((arg0: $Block, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessorFireBlock$$Original = $AccessorFireBlock;}
