declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder" {
import {$CustomStaff$Builder$StaffTierEnum$$Type} from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomStaff$Builder$StaffTierBuilder {
constructor()

public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): $CustomStaff$Builder$StaffTierBuilder
public "setDamage"(arg0: float): $CustomStaff$Builder$StaffTierBuilder
public "setSpeed"(arg0: float): $CustomStaff$Builder$StaffTierBuilder
public "useBaseTier"(arg0: $CustomStaff$Builder$StaffTierEnum$$Type, arg1: boolean): $CustomStaff$Builder$StaffTierBuilder
set "damage"(value: float)
set "speed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$StaffTierBuilder$$Type = ($CustomStaff$Builder$StaffTierBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomStaff$Builder$StaffTierBuilder$$Original = $CustomStaff$Builder$StaffTierBuilder;}
declare module "com.squoshi.irons_spells_js.item.CustomSpellBook$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Registry} from "net.minecraft.core.Registry"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ItemBuilder} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomSpellBook$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * Adds a default attribute to the item. Can be used multiple times.
 * The modifier operation can be either `ADD_MULTIPLIED_BASE`, `ADD_MULTIPLIED_TOTAL` or `ADD_VALUE`.
 */
public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): this
/**
 * Sets the maximum amount of spell slots the spell book can have.
 */
public "setMaxSpellSlots"(arg0: integer): this
/**
 * Sets an affinity that will make this spell a +1 level boost.
 */
public "setAffinitySpell"(arg0: $Holder$$Type<($AbstractSpell)>): this
/**
 * Adds a default spell to the item. Can be used multiple times. It takes a spell ID (or a spell object) and the spell level.
 * This will turn into Unique Spellbook.
 */
public "addSpell"(arg0: $Holder$$Type<($AbstractSpell)>, arg1: integer): this
set "maxSpellSlots"(value: integer)
set "affinitySpell"(value: $Holder$$Type<($AbstractSpell)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpellBook$Builder$$Type = ($CustomSpellBook$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpellBook$Builder$$Original = $CustomSpellBook$Builder;}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder" {
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type} from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomMagicSwordItem$TierBuilder {
constructor()

public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): $CustomMagicSwordItem$TierBuilder
public "setEnchantmentValue"(arg0: integer): $CustomMagicSwordItem$TierBuilder
public "setDamage"(arg0: float): $CustomMagicSwordItem$TierBuilder
public "setSpeed"(arg0: float): $CustomMagicSwordItem$TierBuilder
public "setRepairIngredient"(arg0: $Supplier$$Type<($Ingredient$$Type)>): $CustomMagicSwordItem$TierBuilder
public "useBaseTier"(arg0: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type, arg1: boolean): $CustomMagicSwordItem$TierBuilder
public "setUses"(arg0: integer): $CustomMagicSwordItem$TierBuilder
public "setIncorrectBlocksForDrops"(arg0: $TagKey$$Type<($Block)>): $CustomMagicSwordItem$TierBuilder
set "enchantmentValue"(value: integer)
set "damage"(value: float)
set "speed"(value: float)
set "repairIngredient"(value: $Supplier$$Type<($Ingredient$$Type)>)
set "uses"(value: integer)
set "incorrectBlocksForDrops"(value: $TagKey$$Type<($Block)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$TierBuilder$$Type = ($CustomMagicSwordItem$TierBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMagicSwordItem$TierBuilder$$Original = $CustomMagicSwordItem$TierBuilder;}
declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum" {
import {$Enum} from "java.lang.Enum"
import {$StaffTier} from "io.redspace.ironsspellbooks.item.weapons.StaffTier"

export class $CustomStaff$Builder$StaffTierEnum extends $Enum<($CustomStaff$Builder$StaffTierEnum)> {
static readonly "BLOOD_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "ICE_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "LIGHTNING_ROD": $CustomStaff$Builder$StaffTierEnum
static readonly "GRAYBEARD": $CustomStaff$Builder$StaffTierEnum
static readonly "ARTIFICER": $CustomStaff$Builder$StaffTierEnum

public static "values"(): ($CustomStaff$Builder$StaffTierEnum)[]
public static "valueOf"(arg0: StringJS): $CustomStaff$Builder$StaffTierEnum
public "getTier"(): $StaffTier
get "tier"(): $StaffTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$StaffTierEnum$$Type = (("graybeard") | ("artificer") | ("ice_staff") | ("lightning_rod") | ("blood_staff"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomStaff$Builder$StaffTierEnum$$Original = $CustomStaff$Builder$StaffTierEnum;}
declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder" {
import {$ItemBuilder$UseCallback$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder$UseCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ItemBuilder} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$CustomStaff$Builder$StaffTierBuilder$$Type} from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CustomStaff$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * **NOT SUPPORTED**
 */
public "use"(arg0: $ItemBuilder$UseCallback$$Type): $ItemBuilder
public "setEnchantmentValue"(arg0: integer): this
public "setTier"(arg0: $Consumer$$Type<($CustomStaff$Builder$StaffTierBuilder)>): this
set "enchantmentValue"(value: integer)
set "tier"(value: $Consumer$$Type<($CustomStaff$Builder$StaffTierBuilder)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$$Type = ($CustomStaff$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomStaff$Builder$$Original = $CustomStaff$Builder;}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum" {
import {$Enum} from "java.lang.Enum"

export class $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum extends $Enum<($CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum)> {
static readonly "LEGIONNAIRE_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DREADSWORD": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CRYSTAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "MISERY": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_SCYTHE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "METAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CLAYMORE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "TRUTHSEEKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "HELLRAZOR": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "SPELLBREAKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "AMETHYST_RAPIER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum

public static "values"(): ($CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum)[]
public static "valueOf"(arg0: StringJS): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type = (("hellrazor") | ("legionnaire_flamberge") | ("decrepit_flamberge") | ("decrepit_scythe") | ("dreadsword") | ("misery") | ("metal_magehunter") | ("crystal_magehunter") | ("spellbreaker") | ("truthseeker") | ("claymore") | ("amethyst_rapier"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Original = $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum;}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$Builder" {
import {$CustomMagicSwordItem$TierBuilder$$Type} from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$ItemBuilder} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CustomMagicSwordItem$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

public "setTier"(arg0: $Consumer$$Type<($CustomMagicSwordItem$TierBuilder)>): $CustomMagicSwordItem$Builder
public "addSpell"(arg0: $Holder$$Type<($AbstractSpell)>, arg1: integer): $CustomMagicSwordItem$Builder
set "tier"(value: $Consumer$$Type<($CustomMagicSwordItem$TierBuilder)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$Builder$$Type = ($CustomMagicSwordItem$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMagicSwordItem$Builder$$Original = $CustomMagicSwordItem$Builder;}
