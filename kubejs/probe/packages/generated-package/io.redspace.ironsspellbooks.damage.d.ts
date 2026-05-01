declare module "io.redspace.ironsspellbooks.damage.SpellDamageSource" {
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellDamageSource extends $DamageSource {
public "get"(): $DamageSource
public static "source"(arg0: $Entity$$Type, arg1: $AbstractSpell$$Type): $SpellDamageSource
public static "source"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $AbstractSpell$$Type): $SpellDamageSource
public "setFireTicks"(arg0: integer): $SpellDamageSource
public "spell"(): $AbstractSpell
public "getFireTime"(): integer
public "setLifestealPercent"(arg0: float): $SpellDamageSource
public "setIFrames"(arg0: integer): $SpellDamageSource
public "hasPostHitEffects"(): boolean
public "getFreezeTicks"(): integer
public "getLifestealPercent"(): float
public "setFreezeTicks"(arg0: integer): $SpellDamageSource
public "getLocalizedDeathMessage"(arg0: $LivingEntity$$Type): $Component
public "getIFrames"(): integer
set "fireTicks"(value: integer)
get "fireTime"(): integer
set "lifestealPercent"(value: float)
set "IFrames"(value: integer)
get "freezeTicks"(): integer
get "lifestealPercent"(): float
set "freezeTicks"(value: integer)
get "IFrames"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellDamageSource$$Type = ($SpellDamageSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellDamageSource$$Original = $SpellDamageSource;}
