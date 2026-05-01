declare module "net.bettercombat.logic.PlayerAttackProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAttackProperties$$Interface {
get "comboCount"(): integer
set "comboCount"(value: integer)
}

export class $PlayerAttackProperties implements $PlayerAttackProperties$$Interface {
 "getComboCount"(): integer
 "setComboCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackProperties$$Type = ($PlayerAttackProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAttackProperties$$Original = $PlayerAttackProperties;}
declare module "net.bettercombat.logic.ItemStackNBTWeaponAttributes" {
import {$WeaponAttributes, $WeaponAttributes$$Type} from "net.bettercombat.api.WeaponAttributes"

export interface $ItemStackNBTWeaponAttributes$$Interface {
set "weaponAttributes"(value: $WeaponAttributes$$Type)
get "weaponAttributes"(): $WeaponAttributes
set "invalidAttributes"(value: boolean)
}

export class $ItemStackNBTWeaponAttributes implements $ItemStackNBTWeaponAttributes$$Interface {
 "hasInvalidAttributes"(): boolean
 "setWeaponAttributes"(arg0: $WeaponAttributes$$Type): void
 "getWeaponAttributes"(): $WeaponAttributes
 "setInvalidAttributes"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackNBTWeaponAttributes$$Type = ($ItemStackNBTWeaponAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackNBTWeaponAttributes$$Original = $ItemStackNBTWeaponAttributes;}
declare module "net.bettercombat.logic.AnimatedHand" {
import {$Enum} from "java.lang.Enum"

export class $AnimatedHand extends $Enum<($AnimatedHand)> {
static readonly "MAIN_HAND": $AnimatedHand
static readonly "TWO_HANDED": $AnimatedHand
static readonly "OFF_HAND": $AnimatedHand

public static "values"(): ($AnimatedHand)[]
public static "valueOf"(name: StringJS): $AnimatedHand
public static "from"(isOffHand: boolean, isTwoHanded: boolean): $AnimatedHand
public "isOffHand"(): boolean
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedHand$$Type = (("main_hand") | ("off_hand") | ("two_handed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatedHand$$Original = $AnimatedHand;}
