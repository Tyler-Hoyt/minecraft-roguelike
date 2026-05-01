declare module "io.redspace.ironsspellbooks.mixin.ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor$$Interface {
}

export class $ParticleAccessor implements $ParticleAccessor$$Interface {
 "irons_spellbooks$zo"(arg0: double): void
 "irons_spellbooks$gravity"(arg0: float): void
 "irons_spellbooks$xo"(arg0: double): void
 "irons_spellbooks$yo"(arg0: double): void
 "irons_spellbooks$stoppedByCollision"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleAccessor$$Type = ($ParticleAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleAccessor$$Original = $ParticleAccessor;}
declare module "io.redspace.ironsspellbooks.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor$$Interface {

(arg0: integer, arg1: boolean): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "setLivingEntityFlagInvoker"(arg0: integer, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ((arg0: integer, arg1: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "io.redspace.ironsspellbooks.mixin.EntityAccessor" {
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"

export interface $EntityAccessor$$Interface {

(arg0: $Entity$RemovalReason): void
set "removalReason"(value: $Entity$RemovalReason$$Type)
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "setRemovalReason"(arg0: $Entity$RemovalReason$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ((arg0: $Entity$RemovalReason) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
