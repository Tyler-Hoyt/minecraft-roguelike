declare module "net.bettercombat.logic.knockback.ConfigurableKnockback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigurableKnockback$$Interface {

(arg0: float): void
set "knockbackMultiplier_BetterCombat"(value: float)
}

export class $ConfigurableKnockback implements $ConfigurableKnockback$$Interface {
 "setKnockbackMultiplier_BetterCombat"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableKnockback$$Type = ((arg0: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableKnockback$$Original = $ConfigurableKnockback;}
