declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WispAttackGoal" {
import {$PathfinderMob$$Type} from "net.minecraft.world.entity.PathfinderMob"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"

export class $WispAttackGoal extends $Goal {
constructor(arg0: $PathfinderMob$$Type, arg1: double)

public "stop"(): void
public "canUse"(): boolean
public "tick"(): void
public "canContinueToUse"(): boolean
public "requiresUpdateEveryTick"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WispAttackGoal$$Type = ($WispAttackGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WispAttackGoal$$Original = $WispAttackGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal" {
import {$List$$Type} from "java.util.List"
import {$IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WizardAttackGoal extends $Goal {
constructor(arg0: $IMagicEntity$$Type, arg1: double, arg2: integer)
constructor(arg0: $IMagicEntity$$Type, arg1: double, arg2: integer, arg3: integer)

public "start"(): void
public "stop"(): void
public "canUse"(): boolean
public "tick"(): void
public "canContinueToUse"(): boolean
public "isInterruptable"(): boolean
public "requiresUpdateEveryTick"(): boolean
public "getStrafeMultiplier"(): float
public "setSpellQuality"(arg0: float, arg1: float): $WizardAttackGoal
public "setDrinksPotions"(): $WizardAttackGoal
public "setSingleUseSpell"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $WizardAttackGoal
public "setIsFlying"(): $WizardAttackGoal
public "setAllowFleeing"(arg0: boolean): $WizardAttackGoal
public "isActing"(): boolean
public "setSpells"(arg0: $List$$Type<($AbstractSpell$$Type)>, arg1: $List$$Type<($AbstractSpell$$Type)>, arg2: $List$$Type<($AbstractSpell$$Type)>, arg3: $List$$Type<($AbstractSpell$$Type)>): $WizardAttackGoal
get "interruptable"(): boolean
get "strafeMultiplier"(): float
get "drinksPotions"(): $WizardAttackGoal
get "isFlying"(): boolean
set "allowFleeing"(value: boolean)
get "acting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WizardAttackGoal$$Type = ($WizardAttackGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WizardAttackGoal$$Original = $WizardAttackGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WarlockAttackGoal" {
import {$List$$Type} from "java.util.List"
import {$IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$WizardAttackGoal} from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WarlockAttackGoal extends $WizardAttackGoal {
constructor(arg0: $IMagicEntity$$Type, arg1: double, arg2: integer, arg3: integer)

public "stop"(): void
public "tick"(): void
public "setMeleeAttackInverval"(arg0: integer, arg1: integer): $WarlockAttackGoal
public "setMeleeMovespeedModifier"(arg0: float): $WarlockAttackGoal
public "setMeleeBias"(arg0: float, arg1: float): $WarlockAttackGoal
public "setSpellQuality"(arg0: float, arg1: float): $WizardAttackGoal
public "setSingleUseSpell"(arg0: $AbstractSpell$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $WarlockAttackGoal
public "setIsFlying"(): $WizardAttackGoal
public "meleeRange"(): float
public "setSpells"(arg0: $List$$Type, arg1: $List$$Type, arg2: $List$$Type, arg3: $List$$Type): $WizardAttackGoal
set "meleeMovespeedModifier"(value: float)
get "isFlying"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarlockAttackGoal$$Type = ($WarlockAttackGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarlockAttackGoal$$Original = $WarlockAttackGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardRecoverGoal" {
import {$IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"

export class $WizardRecoverGoal extends $Goal {
constructor(arg0: $IMagicEntity$$Type)
constructor(arg0: $IMagicEntity$$Type, arg1: integer, arg2: integer)

public "start"(): void
public "canUse"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WizardRecoverGoal$$Type = ($WizardRecoverGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WizardRecoverGoal$$Original = $WizardRecoverGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.GustDefenseGoal" {
import {$IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"

export class $GustDefenseGoal extends $Goal {
constructor(arg0: $IMagicEntity$$Type)

public "start"(): void
public "canUse"(): boolean
public "shouldAreaAttack"(arg0: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GustDefenseGoal$$Type = ($GustDefenseGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GustDefenseGoal$$Original = $GustDefenseGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.SpellBarrageGoal" {
import {$IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellBarrageGoal extends $Goal {
constructor(arg0: $IMagicEntity$$Type, arg1: $AbstractSpell$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "stop"(): void
public "canUse"(): boolean
public "tick"(): void
public "canContinueToUse"(): boolean
public "requiresUpdateEveryTick"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBarrageGoal$$Type = ($SpellBarrageGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellBarrageGoal$$Original = $SpellBarrageGoal;}
declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardSupportGoal" {
import {$PathfinderMob, $PathfinderMob$$Type} from "net.minecraft.world.entity.PathfinderMob"
import {$List$$Type} from "java.util.List"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $WizardSupportGoal<T extends $PathfinderMob> extends $Goal {
constructor(arg0: T, arg1: double, arg2: integer)
constructor(arg0: T, arg1: double, arg2: integer, arg3: integer)

public "start"(): void
public "stop"(): void
public "canUse"(): boolean
public "tick"(): void
public "canContinueToUse"(): boolean
public "requiresUpdateEveryTick"(): boolean
public "setSpellQuality"(arg0: float, arg1: float): $WizardSupportGoal<(T)>
public "setIsFlying"(): $WizardSupportGoal<(T)>
public "setSpells"(arg0: $List$$Type<($AbstractSpell$$Type)>, arg1: $List$$Type<($AbstractSpell$$Type)>): $WizardSupportGoal<(T)>
get "isFlying"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WizardSupportGoal$$Type<T> = ($WizardSupportGoal<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WizardSupportGoal$$Original<T> = $WizardSupportGoal<(T)>;}
