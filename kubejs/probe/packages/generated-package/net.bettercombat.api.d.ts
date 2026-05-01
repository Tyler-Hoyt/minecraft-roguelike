declare module "net.bettercombat.api.EntityPlayer_BetterCombat" {
import {$AttackHand} from "net.bettercombat.api.AttackHand"

export interface $EntityPlayer_BetterCombat$$Interface {
get "currentAttack"(): $AttackHand
get "offHandIdleAnimation"(): StringJS
get "mainHandIdleAnimation"(): StringJS
}

export class $EntityPlayer_BetterCombat implements $EntityPlayer_BetterCombat$$Interface {
 "getCurrentAttack"(): $AttackHand
 "getOffHandIdleAnimation"(): StringJS
 "getMainHandIdleAnimation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayer_BetterCombat$$Type = ($EntityPlayer_BetterCombat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPlayer_BetterCombat$$Original = $EntityPlayer_BetterCombat;}
declare module "net.bettercombat.api.MinecraftClient_BetterCombat" {
import {$AttackHand} from "net.bettercombat.api.AttackHand"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$WeaponAttributes$Attack} from "net.bettercombat.api.WeaponAttributes$Attack"

export interface $MinecraftClient_BetterCombat$$Interface {
get "currentAttackHand"(): $AttackHand
get "weaponSwingInProgress"(): boolean
get "comboCount"(): integer
get "currentAttack"(): $WeaponAttributes$Attack
get "cursorTarget"(): $Entity
get "swingProgress"(): float
get "upswingTicks"(): integer
}

export class $MinecraftClient_BetterCombat implements $MinecraftClient_BetterCombat$$Interface {
 "getCurrentAttackHand"(): $AttackHand
 "isWeaponSwingInProgress"(): boolean
 "hasTargetsInReach"(): boolean
 "getComboCount"(): integer
 "getCurrentAttack"(): $WeaponAttributes$Attack
 "getCursorTarget"(): $Entity
 "getSwingProgress"(): float
 "cancelUpswing"(): void
 "getUpswingTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClient_BetterCombat$$Type = ($MinecraftClient_BetterCombat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftClient_BetterCombat$$Original = $MinecraftClient_BetterCombat;}
declare module "net.bettercombat.api.WeaponAttributes$Condition" {
import {$Enum} from "java.lang.Enum"

export class $WeaponAttributes$Condition extends $Enum<($WeaponAttributes$Condition)> {
static readonly "NO_OFFHAND_ITEM": $WeaponAttributes$Condition
static readonly "NOT_MOUNTED": $WeaponAttributes$Condition
static readonly "NOT_DUAL_WIELDING": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_ANY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME_CATEGORY": $WeaponAttributes$Condition
static readonly "MOUNTED": $WeaponAttributes$Condition
static readonly "MAIN_HAND_ONLY": $WeaponAttributes$Condition
static readonly "OFF_HAND_ONLY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME": $WeaponAttributes$Condition
static readonly "OFF_HAND_SHIELD": $WeaponAttributes$Condition

public static "values"(): ($WeaponAttributes$Condition)[]
public static "valueOf"(name: StringJS): $WeaponAttributes$Condition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Condition$$Type = (("not_dual_wielding") | ("dual_wielding_any") | ("dual_wielding_same") | ("dual_wielding_same_category") | ("no_offhand_item") | ("off_hand_shield") | ("main_hand_only") | ("off_hand_only") | ("mounted") | ("not_mounted"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponAttributes$Condition$$Original = $WeaponAttributes$Condition;}
declare module "net.bettercombat.api.WeaponAttributes$HitBoxShape" {
import {$Enum} from "java.lang.Enum"

export class $WeaponAttributes$HitBoxShape extends $Enum<($WeaponAttributes$HitBoxShape)> {
static readonly "FORWARD_BOX": $WeaponAttributes$HitBoxShape
static readonly "VERTICAL_PLANE": $WeaponAttributes$HitBoxShape
static readonly "HORIZONTAL_PLANE": $WeaponAttributes$HitBoxShape

public static "values"(): ($WeaponAttributes$HitBoxShape)[]
public static "valueOf"(name: StringJS): $WeaponAttributes$HitBoxShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$HitBoxShape$$Type = (("forward_box") | ("vertical_plane") | ("horizontal_plane"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponAttributes$HitBoxShape$$Original = $WeaponAttributes$HitBoxShape;}
declare module "net.bettercombat.api.WeaponAttributes$Attack" {
import {$List, $List$$Type} from "java.util.List"
import {$WeaponAttributes$Sound, $WeaponAttributes$Sound$$Type} from "net.bettercombat.api.WeaponAttributes$Sound"
import {$WeaponAttributes$Condition, $WeaponAttributes$Condition$$Type} from "net.bettercombat.api.WeaponAttributes$Condition"
import {$ParticlePlacement, $ParticlePlacement$$Type} from "net.bettercombat.api.fx.ParticlePlacement"
import {$WeaponAttributes$HitBoxShape, $WeaponAttributes$HitBoxShape$$Type} from "net.bettercombat.api.WeaponAttributes$HitBoxShape"

export class $WeaponAttributes$Attack {
constructor()
constructor(conditions: ($WeaponAttributes$Condition$$Type)[], hitbox: $WeaponAttributes$HitBoxShape$$Type, damage_multiplier: double, movement_speed_multiplier: float, range_multiplier: float, angle: double, upswing: double, animation: StringJS, swing_sound: $WeaponAttributes$Sound$$Type, impact_sound: $WeaponAttributes$Sound$$Type, trail_particles: $List$$Type<($ParticlePlacement$$Type)>)

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "empty"(): $WeaponAttributes$Attack
public "animation"(): StringJS
public "rangeMultiplier"(): float
public "movementSpeedMultiplier"(): float
public "upswing"(): double
public "trailParticles"(): $List<($ParticlePlacement)>
public "conditions"(): ($WeaponAttributes$Condition)[]
public "hitbox"(): $WeaponAttributes$HitBoxShape
public "damageMultiplier"(): double
public "angle"(): double
public "swingSound"(): $WeaponAttributes$Sound
public "impactSound"(): $WeaponAttributes$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Attack$$Type = ($WeaponAttributes$Attack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponAttributes$Attack$$Original = $WeaponAttributes$Attack;}
declare module "net.bettercombat.api.AttackHand" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComboState, $ComboState$$Type} from "net.bettercombat.api.ComboState"
import {$WeaponAttributes, $WeaponAttributes$$Type} from "net.bettercombat.api.WeaponAttributes"
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type} from "net.bettercombat.api.WeaponAttributes$Attack"
import {$Record} from "java.lang.Record"

export class $AttackHand extends $Record {
constructor(attack: $WeaponAttributes$Attack$$Type, combo: $ComboState$$Type, isOffHand: boolean, attributes: $WeaponAttributes$$Type, itemStack: $ItemStack$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "attributes"(): $WeaponAttributes
public "attack"(): $WeaponAttributes$Attack
public "itemStack"(): $ItemStack
public "isOffHand"(): boolean
public "upswingRate"(): double
public "combo"(): $ComboState
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackHand$$Type = ({"attack"?: $WeaponAttributes$Attack$$Type, "attributes"?: $WeaponAttributes$$Type, "itemStack"?: $ItemStack$$Type, "isOffHand"?: boolean, "combo"?: $ComboState$$Type}) | ([attack?: $WeaponAttributes$Attack$$Type, attributes?: $WeaponAttributes$$Type, itemStack?: $ItemStack$$Type, isOffHand?: boolean, combo?: $ComboState$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttackHand$$Original = $AttackHand;}
declare module "net.bettercombat.api.WeaponAttributes" {
import {$ConditionalTrailAppearance, $ConditionalTrailAppearance$$Type} from "net.bettercombat.api.fx.ConditionalTrailAppearance"
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type} from "net.bettercombat.api.WeaponAttributes$Attack"

export class $WeaponAttributes {
constructor(attack_range: double, range_bonus: double, pose: StringJS, off_hand_pose: StringJS, isTwoHanded: boolean, category: StringJS, attacks: ($WeaponAttributes$Attack$$Type)[], trail_appearance: $ConditionalTrailAppearance$$Type)

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "empty"(): $WeaponAttributes
public "category"(): StringJS
public "offHandPose"(): StringJS
public "attacks"(): ($WeaponAttributes$Attack)[]
public "isTwoHanded"(): boolean
public "trailAppearance"(): $ConditionalTrailAppearance
public "pose"(): StringJS
public "attackRange"(): double
public "two_handed"(): boolean
public "rangeBonus"(): double
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$$Type = ($WeaponAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponAttributes$$Original = $WeaponAttributes;}
declare module "net.bettercombat.api.ComboState" {
import {$Record} from "java.lang.Record"

export class $ComboState extends $Record {
constructor(current: integer, total: integer)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "current"(): integer
public "total"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboState$$Type = ({"current"?: integer, "total"?: integer}) | ([current?: integer, total?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComboState$$Original = $ComboState;}
declare module "net.bettercombat.api.WeaponAttributes$Sound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $WeaponAttributes$Sound {
constructor()
constructor(id: StringJS)

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "randomness"(): float
public "pitch"(): float
public "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Sound$$Type = ($WeaponAttributes$Sound);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaponAttributes$Sound$$Original = $WeaponAttributes$Sound;}
