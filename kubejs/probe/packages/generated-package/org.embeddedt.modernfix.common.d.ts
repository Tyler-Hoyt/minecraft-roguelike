declare module "org.embeddedt.modernfix.common.mixin.perf.reduce_blockstate_cache_rebuilds.BlockBehaviourInvoker" {
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourInvoker$$Interface {
}

export class $BlockBehaviourInvoker implements $BlockBehaviourInvoker$$Interface {
 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourInvoker$$Type = ($BlockBehaviourInvoker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourInvoker$$Original = $BlockBehaviourInvoker;}
declare module "org.embeddedt.modernfix.common.mixin.perf.optimize_surface_rules.BiomeManagerAccessor" {
import {$BiomeManager$NoiseBiomeSource} from "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource"

export interface $BiomeManagerAccessor$$Interface {
}

export class $BiomeManagerAccessor implements $BiomeManagerAccessor$$Interface {
 "mfix$getBiomeSource"(): $BiomeManager$NoiseBiomeSource
 "mfix$getZoomSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeManagerAccessor$$Type = ($BiomeManagerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeManagerAccessor$$Original = $BiomeManagerAccessor;}
declare module "org.embeddedt.modernfix.common.mixin.bugfix.entity_pose_stack.PoseStackAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export interface $PoseStackAccessor$$Interface {

(): $Deque$$Type<($PoseStack$Pose$$Type)>
get "poseStack"(): $Deque<($PoseStack$Pose)>
}

export class $PoseStackAccessor implements $PoseStackAccessor$$Interface {
 "getPoseStack"(): $Deque<($PoseStack$Pose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$$Type = (() => $Deque$$Type<($PoseStack$Pose$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseStackAccessor$$Original = $PoseStackAccessor;}
