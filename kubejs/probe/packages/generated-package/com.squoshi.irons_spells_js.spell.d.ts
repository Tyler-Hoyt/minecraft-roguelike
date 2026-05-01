declare module "com.squoshi.irons_spells_js.spell.school.SchoolTypeJSBuilder" {
import {$SchoolType} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BuilderBase} from "dev.latvian.mods.kubejs.registry.BuilderBase"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $SchoolTypeJSBuilder extends $BuilderBase<($SchoolType)> {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

/**
 *         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
 */
public "setName"(arg0: $Component$$Type): $SchoolTypeJSBuilder
/**
 *         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setResistanceAttribute"(arg0: $Holder$$Type<($Attribute)>): $SchoolTypeJSBuilder
/**
 *         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
 */
public "setDefaultCastSound"(arg0: $Holder$$Type<($SoundEvent)>): $SchoolTypeJSBuilder
/**
 *         Sets require learning to true.
 */
public "requiresLearning"(): $SchoolTypeJSBuilder
/**
 *         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setPowerAttribute"(arg0: $Holder$$Type<($Attribute)>): $SchoolTypeJSBuilder
public "addFocusItemTags"(...arg0: ($TagKey$$Type<($Item$$Type)>)[]): $SchoolTypeJSBuilder
/**
 *         Disables looting.
 */
public "disableLooting"(): $SchoolTypeJSBuilder
/**
 *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
 *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
 */
public "setDamageType"(arg0: $ResourceKey$$Type<($DamageType)>): $SchoolTypeJSBuilder
/**
 *         Sets the ID of the item tag used for the focus item.
 *         ⚠️ Default tag is `${mod_id}:${school_name}_focus` ⚠️️
 */
public "setDefaultFocusTag"(arg0: $TagKey$$Type<($Item)>): $SchoolTypeJSBuilder
public "addFocusItems"(...arg0: ($Item$$Type)[]): $SchoolTypeJSBuilder
set "name"(value: $Component$$Type)
set "resistanceAttribute"(value: $Holder$$Type<($Attribute)>)
set "defaultCastSound"(value: $Holder$$Type<($SoundEvent)>)
set "powerAttribute"(value: $Holder$$Type<($Attribute)>)
set "damageType"(value: $ResourceKey$$Type<($DamageType)>)
set "defaultFocusTag"(value: $TagKey$$Type<($Item)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolTypeJSBuilder$$Type = ($SchoolTypeJSBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SchoolTypeJSBuilder$$Original = $SchoolTypeJSBuilder;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$Record} from "java.lang.Record"

export class $CustomSpell$CastContext extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastSource: $CastSource$$Type, getPlayerMagicData: $MagicData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getCastSource"(): $CastSource
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "castSource"(): $CastSource
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastContext$$Type = ({"getEntity"?: $LivingEntity$$Type, "getCastSource"?: $CastSource$$Type, "getSpellLevel"?: integer, "getPlayerMagicData"?: $MagicData$$Type, "getLevel"?: $Level$$Type}) | ([getEntity?: $LivingEntity$$Type, getCastSource?: $CastSource$$Type, getSpellLevel?: integer, getPlayerMagicData?: $MagicData$$Type, getLevel?: $Level$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$CastContext$$Original = $CustomSpell$CastContext;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$Builder" {
import {$List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastType$$Type} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CustomSpell$PreCastContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext"
import {$BuilderBase} from "dev.latvian.mods.kubejs.registry.BuilderBase"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$CustomSpell$CastContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$CustomSpell$CastClientContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$CustomSpell$PreCastClientContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$CustomSpell$PreCastTargetingContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastTargetingContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$SourceLine} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$CustomSpell} from "com.squoshi.irons_spells_js.spell.CustomSpell"

export class $CustomSpell$Builder extends $BuilderBase<($CustomSpell)> {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

/**
 *     Sets the cast finish animation for the spell.
 */
public "setCastFinishAnimation"(arg0: StringJS, arg1: boolean, arg2: boolean): $CustomSpell$Builder
/**
 *     Sets the spell power per level.
 */
public "setSpellPowerPerLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
 */
public "setManaCostPerLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the cast start animation for the spell.
 */
public "setCastStartAnimation"(arg0: StringJS, arg1: boolean, arg2: boolean): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
 */
public "onCast"(arg0: $Consumer$$Type<($CustomSpell$CastContext)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
 */
public "onClientCast"(arg0: $Consumer$$Type<($CustomSpell$CastClientContext)>): $CustomSpell$Builder
/**
 *     Sets the max level of the spell. Goes up to `10` from `1`.
 */
public "setMaxLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
 */
public "setCooldownSeconds"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
 */
public "setMinRarity"(arg0: $SpellRarity$$Type): $CustomSpell$Builder
/**
 *     Sets the predicate for whether or not the spell can be crafted by a player.
 */
public "canBeCraftedBy"(arg0: $Predicate$$Type<($Player)>): $CustomSpell$Builder
/**
 *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
 */
public "setCastTime"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
 */
public "setCastType"(arg0: $CastType$$Type): $CustomSpell$Builder
/**
 *     Sets the base mana cost. The mana cost per level adds on to this.
 */
public "setBaseManaCost"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
 */
public "onPreClientCast"(arg0: $Consumer$$Type<($CustomSpell$PreCastClientContext)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell needs to be learned before it can be casted.
 */
public "needsLearning"(arg0: boolean): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play when it starts casting.
 */
public "setStartSound"(arg0: $Holder$$Type<($SoundEvent)>): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play after it is done casting.
 */
public "setFinishSound"(arg0: $Holder$$Type<($SoundEvent)>): $CustomSpell$Builder
/**
 *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
 */
public "setBaseSpellPower"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets whether or not the spell can be looted from a loot table.
 */
public "setAllowLooting"(arg0: boolean): $CustomSpell$Builder
/**
 *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
 */
public "setUniqueInfo"(arg0: $BiFunction$$Type<(integer), ($LivingEntity), ($List$$Type<($MutableComponent$$Type)>)>): $CustomSpell$Builder
/**
 *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
 * 
 *     Example: ```js
 *     .checkPreCastConditions(ctx => {
 *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
 *     })
 *     ```
 */
public "checkPreCastConditions"(arg0: $Predicate$$Type<($CustomSpell$PreCastTargetingContext)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
 */
public "onPreCast"(arg0: $Consumer$$Type<($CustomSpell$PreCastContext)>): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(arg0: $Holder$$Type<($SchoolType)>): $CustomSpell$Builder
set "spellPowerPerLevel"(value: integer)
set "manaCostPerLevel"(value: integer)
set "maxLevel"(value: integer)
set "cooldownSeconds"(value: integer)
set "minRarity"(value: $SpellRarity$$Type)
set "castTime"(value: integer)
set "castType"(value: $CastType$$Type)
set "baseManaCost"(value: integer)
set "startSound"(value: $Holder$$Type<($SoundEvent)>)
set "finishSound"(value: $Holder$$Type<($SoundEvent)>)
set "baseSpellPower"(value: integer)
set "allowLooting"(value: boolean)
set "uniqueInfo"(value: $BiFunction$$Type<(integer), ($LivingEntity), ($List$$Type<($MutableComponent$$Type)>)>)
set "school"(value: $Holder$$Type<($SchoolType)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Builder$$Type = ($CustomSpell$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$Builder$$Original = $CustomSpell$Builder;}
declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus" {
import {$Enum} from "java.lang.Enum"

export class $AbstractSpellWrapper$SpellStatus extends $Enum<($AbstractSpellWrapper$SpellStatus)> {
static readonly "DISABLED": $AbstractSpellWrapper$SpellStatus
static readonly "UNREGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "REGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "ENABLED": $AbstractSpellWrapper$SpellStatus

public static "values"(): ($AbstractSpellWrapper$SpellStatus)[]
public static "valueOf"(arg0: StringJS): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$SpellStatus$$Type = (("registered") | ("unregistered") | ("enabled") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSpellWrapper$SpellStatus$$Original = $AbstractSpellWrapper$SpellStatus;}
declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper" {
import {$AbstractSpellWrapper$SpellStatus} from "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $AbstractSpellWrapper$$Interface {
}

export class $AbstractSpellWrapper implements $AbstractSpellWrapper$$Interface {
/**
 *     Returns a spell registry object.
 */
static "of"(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpell
/**
 *     Returns whether a spell is enabled in the config or not.
 */
static "isEnabled"(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
/**
 *     Returns whether a spell is registered or not.
 */
static "exists"(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
/**
 *     Returns whether an object is a spell or not.
 */
static "isSpell"(arg0: any): boolean
/**
 *     Returns either `ENABLED`, `DISABLED`, or `UNREGISTERED`, based on the spell inputted.
 */
static "checkStatus"(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpellWrapper$SpellStatus
static "ofHolder"(arg0: $Holder$$Type<($AbstractSpell)>): $Holder<($AbstractSpell)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$$Type = ($AbstractSpellWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSpellWrapper$$Original = $AbstractSpellWrapper;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $CustomSpell$PreCastContext extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastContext$$Type = ({"getLevel"?: $Level$$Type, "getSpellLevel"?: integer, "getEntity"?: $LivingEntity$$Type, "getPlayerMagicData"?: $MagicData$$Type}) | ([getLevel?: $Level$$Type, getSpellLevel?: integer, getEntity?: $LivingEntity$$Type, getPlayerMagicData?: $MagicData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$PreCastContext$$Original = $CustomSpell$PreCastContext;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastTargetingContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Record} from "java.lang.Record"

export class $CustomSpell$PreCastTargetingContext extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type, getSpell: $AbstractSpell$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "getSpell"(): $AbstractSpell
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "spell"(): $AbstractSpell
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastTargetingContext$$Type = ({"getEntity"?: $LivingEntity$$Type, "getSpell"?: $AbstractSpell$$Type, "getSpellLevel"?: integer, "getPlayerMagicData"?: $MagicData$$Type, "getLevel"?: $Level$$Type}) | ([getEntity?: $LivingEntity$$Type, getSpell?: $AbstractSpell$$Type, getSpellLevel?: integer, getPlayerMagicData?: $MagicData$$Type, getLevel?: $Level$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$PreCastTargetingContext$$Original = $CustomSpell$PreCastTargetingContext;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData, $ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$Record} from "java.lang.Record"

export class $CustomSpell$CastClientContext extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastData: $ICastData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastData"(): $ICastData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castData"(): $ICastData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastClientContext$$Type = ({"getLevel"?: $Level$$Type, "getSpellLevel"?: integer, "getEntity"?: $LivingEntity$$Type, "getCastData"?: $ICastData$$Type}) | ([getLevel?: $Level$$Type, getSpellLevel?: integer, getEntity?: $LivingEntity$$Type, getCastData?: $ICastData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$CastClientContext$$Original = $CustomSpell$CastClientContext;}
declare module "com.squoshi.irons_spells_js.spell.MagicEntityKJS" {
import {$MagicData} from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $MagicEntityKJS$$Interface {
get "magicData"(): $MagicData
}

export class $MagicEntityKJS implements $MagicEntityKJS$$Interface {
 "getMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicEntityKJS$$Type = ($MagicEntityKJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicEntityKJS$$Original = $MagicEntityKJS;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell" {
import {$AnimationHolder} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional} from "java.util.Optional"
import {$Style} from "net.minecraft.network.chat.Style"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$CastType} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CustomSpell$Builder$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$Builder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$AbstractSpell} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CustomSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor(arg0: $CustomSpell$Builder$$Type)

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getSpellResource"(): $ResourceLocation
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getDefaultConfig"(): $DefaultConfig
public "requiresLearning"(): boolean
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastStartAnimation"(): $AnimationHolder
public "canBeCraftedBy"(arg0: $Player$$Type): boolean
public "allowLooting"(): boolean
public "getCastType"(): $CastType
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "onClientPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $MagicData$$Type): void
public "onServerPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
get "castFinishSound"(): $Optional<($SoundEvent)>
get "spellResource"(): $ResourceLocation
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castFinishAnimation"(): $AnimationHolder
get "castStartAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$$Type = ($CustomSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$$Original = $CustomSpell;}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $CustomSpell$PreCastClientContext extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getHand: $InteractionHand$$Type, getPlayerMagicData: $MagicData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
public "getHand"(): $InteractionHand
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastClientContext$$Type = ({"getHand"?: $InteractionHand$$Type, "getSpellLevel"?: integer, "getEntity"?: $LivingEntity$$Type, "getPlayerMagicData"?: $MagicData$$Type, "getLevel"?: $Level$$Type}) | ([getHand?: $InteractionHand$$Type, getSpellLevel?: integer, getEntity?: $LivingEntity$$Type, getPlayerMagicData?: $MagicData$$Type, getLevel?: $Level$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSpell$PreCastClientContext$$Original = $CustomSpell$PreCastClientContext;}
