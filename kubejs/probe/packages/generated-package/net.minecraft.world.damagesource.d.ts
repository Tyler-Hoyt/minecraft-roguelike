declare module "net.minecraft.world.damagesource.DamageScaling" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IScalingFunction} from "net.neoforged.neoforge.common.damagesource.IScalingFunction"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DamageScaling extends $Enum<($DamageScaling)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "CODEC": $Codec<($DamageScaling)>
static readonly "WHEN_CAUSED_BY_LIVING_NON_PLAYER": $DamageScaling
static readonly "NEVER": $DamageScaling
static readonly "ALWAYS": $DamageScaling

public static "values"(): ($DamageScaling)[]
public static "valueOf"(arg0: StringJS): $DamageScaling
public "getScalingFunction"(): $IScalingFunction
public "getSerializedName"(): StringJS
public static "getExtensionInfo"(): $ExtensionInfo
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "scalingFunction"(): $IScalingFunction
get "serializedName"(): StringJS
public static get "extensionInfo"(): $ExtensionInfo
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageScaling$$Type = (("never") | ("when_caused_by_living_non_player") | ("always"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageScaling$$Original = $DamageScaling;}
declare module "net.minecraft.world.damagesource.DeathMessageType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IDeathMessageProvider} from "net.neoforged.neoforge.common.damagesource.IDeathMessageProvider"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DeathMessageType extends $Enum<($DeathMessageType)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "INTENTIONAL_GAME_DESIGN": $DeathMessageType
static readonly "FALL_VARIANTS": $DeathMessageType
static readonly "CODEC": $Codec<($DeathMessageType)>
static readonly "DEFAULT": $DeathMessageType

public static "values"(): ($DeathMessageType)[]
public static "valueOf"(arg0: StringJS): $DeathMessageType
public "getSerializedName"(): StringJS
public "getMessageFunction"(): $IDeathMessageProvider
public static "getExtensionInfo"(): $ExtensionInfo
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "messageFunction"(): $IDeathMessageProvider
public static get "extensionInfo"(): $ExtensionInfo
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeathMessageType$$Type = (("default") | ("fall_variants") | ("intentional_game_design"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeathMessageType$$Original = $DeathMessageType;}
declare module "net.minecraft.world.damagesource.CombatTracker" {
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CombatEntry, $CombatEntry$$Type} from "net.minecraft.world.damagesource.CombatEntry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CombatTracker {
static readonly "INTENTIONAL_GAME_DESIGN_STYLE": $Style
readonly "entries": $List<($CombatEntry)>
 "inCombat": boolean
static readonly "RESET_COMBAT_STATUS_TIME": integer
static readonly "RESET_DAMAGE_STATUS_TIME": integer

constructor(arg0: $LivingEntity$$Type)

public "getMostSignificantFall"(): $CombatEntry
public "getDeathMessage"(): $Component
public "recheckStatus"(): void
public "recordDamage"(arg0: $DamageSource$$Type, arg1: float): void
public "getCombatDuration"(): integer
public "getFallMessage"(arg0: $CombatEntry$$Type, arg1: $Entity$$Type): $Component
get "mostSignificantFall"(): $CombatEntry
get "deathMessage"(): $Component
get "combatDuration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatTracker$$Type = ($CombatTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombatTracker$$Original = $CombatTracker;}
declare module "net.minecraft.world.damagesource.CombatEntry" {
import {$FallLocation, $FallLocation$$Type} from "net.minecraft.world.damagesource.FallLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Record} from "java.lang.Record"

export class $CombatEntry extends $Record {
constructor(arg0: $DamageSource$$Type, arg1: float, arg2: $FallLocation$$Type, arg3: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): $DamageSource
public "fallDistance"(): float
public "damage"(): float
public "fallLocation"(): $FallLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombatEntry$$Type = ({"source"?: $DamageSource$$Type, "fallDistance"?: float, "fallLocation"?: $FallLocation$$Type, "damage"?: float}) | ([source?: $DamageSource$$Type, fallDistance?: float, fallLocation?: $FallLocation$$Type, damage?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombatEntry$$Original = $CombatEntry;}
declare module "net.minecraft.world.damagesource.FallLocation" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FallLocation extends $Record {
static readonly "GENERIC": $FallLocation
static readonly "LADDER": $FallLocation
static readonly "VINES": $FallLocation
static readonly "WEEPING_VINES": $FallLocation
static readonly "OTHER_CLIMBABLE": $FallLocation
static readonly "TWISTING_VINES": $FallLocation
static readonly "SCAFFOLDING": $FallLocation
static readonly "WATER": $FallLocation

constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "languageKey"(): StringJS
public static "getCurrentFallLocation"(arg0: $LivingEntity$$Type): $FallLocation
public static "blockToFallLocation"(arg0: $BlockState$$Type): $FallLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallLocation$$Type = ({"id"?: StringJS}) | ([id?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallLocation$$Original = $FallLocation;}
declare module "net.minecraft.world.damagesource.DamageSource" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DamageSourceExtension$$Interface} from "dev.shadowsoffire.apotheosis.util.DamageSourceExtension"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $DamageSource implements $DamageSourceExtension$$Interface {
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Vec3$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type, arg3: $Vec3$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type)
constructor(arg0: $Holder$$Type<($DamageType)>)
constructor(arg0: $Holder$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type)

public "type"(): $DamageType
public "toString"(): StringJS
public "isDirect"(): boolean
public "is"(arg0: $ResourceKey$$Type<($DamageType)>): boolean
public "is"(arg0: $TagKey$$Type<($DamageType)>): boolean
public "getType"(): StringJS
public "getSourcePosition"(): $Vec3
public "getImmediate"(): $Entity
public "getWeaponItem"(): $ItemStack
public "getActual"(): $Entity
public "removeTag"(arg0: $TagKey$$Type): void
public "typeHolder"(): $Holder<($DamageType)>
public "isCreativePlayer"(): boolean
public "addTag"(arg0: $TagKey$$Type): void
public "getFoodExhaustion"(): float
public "sourcePositionRaw"(): $Vec3
public "getPlayer"(): $Player
public "getLocalizedDeathMessage"(arg0: $LivingEntity$$Type): $Component
/**
 * 
 * @deprecated
 */
public "scalesWithDifficulty"(): boolean
public "handler$cid000$apotheosis$apoth_isSourceInExtraTags"(arg0: $TagKey$$Type, arg1: $CallbackInfoReturnable$$Type): void
get "direct"(): boolean
get "sourcePosition"(): $Vec3
get "immediate"(): $Entity
get "weaponItem"(): $ItemStack
get "actual"(): $Entity
get "creativePlayer"(): boolean
get "foodExhaustion"(): float
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSource$$Type = ($DamageSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSource$$Original = $DamageSource;}
declare module "net.minecraft.world.damagesource.DamageEffects" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $DamageEffects extends $Enum<($DamageEffects)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "FREEZING": $DamageEffects
static readonly "CODEC": $Codec<($DamageEffects)>
static readonly "TWILIGHTFOREST_PINCH": $DamageEffects
static readonly "DROWNING": $DamageEffects
static readonly "POKING": $DamageEffects
static readonly "BURNING": $DamageEffects
static readonly "HURT": $DamageEffects
static readonly "THORNS": $DamageEffects

public static "values"(): ($DamageEffects)[]
public static "valueOf"(arg0: StringJS): $DamageEffects
public "sound"(): $SoundEvent
public "getSerializedName"(): StringJS
public static "getExtensionInfo"(): $ExtensionInfo
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
public static get "extensionInfo"(): $ExtensionInfo
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageEffects$$Type = (("hurt") | ("thorns") | ("drowning") | ("burning") | ("poking") | ("freezing") | ("twilightforest:pinch"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageEffects$$Original = $DamageEffects;}
declare module "net.minecraft.world.damagesource.DamageSources" {
import {$FireworkRocketEntity$$Type} from "net.minecraft.world.entity.projectile.FireworkRocketEntity"
import {$Fireball$$Type} from "net.minecraft.world.entity.projectile.Fireball"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$Registry} from "net.minecraft.core.Registry"
import {$WitherSkull$$Type} from "net.minecraft.world.entity.projectile.WitherSkull"
import {$AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $DamageSources {
readonly "damageTypes": $Registry<($DamageType)>

constructor(arg0: $RegistryAccess$$Type)

public "source"(arg0: $ResourceKey$$Type<($DamageType)>, arg1: $Entity$$Type, arg2: $Entity$$Type): $DamageSource
public "source"(arg0: $ResourceKey$$Type<($DamageType)>, arg1: $Entity$$Type): $DamageSource
public "source"(arg0: $ResourceKey$$Type<($DamageType)>): $DamageSource
public "generic"(): $DamageSource
public "freeze"(): $DamageSource
public "thrown"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "magic"(): $DamageSource
public "stalagmite"(): $DamageSource
public "spit"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "badRespawnPointExplosion"(arg0: $Vec3$$Type): $DamageSource
public "genericKill"(): $DamageSource
public "outOfBorder"(): $DamageSource
public "fellOutOfWorld"(): $DamageSource
public "flyIntoWall"(): $DamageSource
public "inFire"(): $DamageSource
public "fall"(): $DamageSource
public "lightningBolt"(): $DamageSource
public "sonicBoom"(arg0: $Entity$$Type): $DamageSource
public "cramming"(): $DamageSource
public "drown"(): $DamageSource
public "onFire"(): $DamageSource
public "lava"(): $DamageSource
public "explosion"(arg0: $Explosion$$Type): $DamageSource
public "explosion"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "playerAttack"(arg0: $Player$$Type): $DamageSource
public "arrow"(arg0: $AbstractArrow$$Type, arg1: $Entity$$Type): $DamageSource
public "trident"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "fireball"(arg0: $Fireball$$Type, arg1: $Entity$$Type): $DamageSource
public "hotFloor"(): $DamageSource
public "fireworks"(arg0: $FireworkRocketEntity$$Type, arg1: $Entity$$Type): $DamageSource
public "noAggroMobAttack"(arg0: $LivingEntity$$Type): $DamageSource
public "dragonBreath"(): $DamageSource
public "sweetBerryBush"(): $DamageSource
public "fallingStalactite"(arg0: $Entity$$Type): $DamageSource
public "campfire"(): $DamageSource
public "anvil"(arg0: $Entity$$Type): $DamageSource
public "cactus"(): $DamageSource
public "wither"(): $DamageSource
public "indirectMagic"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "fallingBlock"(arg0: $Entity$$Type): $DamageSource
public "dryOut"(): $DamageSource
public "sting"(arg0: $LivingEntity$$Type): $DamageSource
public "starve"(): $DamageSource
public "inWall"(): $DamageSource
public "windCharge"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "mobProjectile"(arg0: $Entity$$Type, arg1: $LivingEntity$$Type): $DamageSource
public "witherSkull"(arg0: $WitherSkull$$Type, arg1: $Entity$$Type): $DamageSource
public "thorns"(arg0: $Entity$$Type): $DamageSource
public "mobAttack"(arg0: $LivingEntity$$Type): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSources$$Type = ($DamageSources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSources$$Original = $DamageSources;}
declare module "net.minecraft.world.damagesource.DamageType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DamageScaling, $DamageScaling$$Type} from "net.minecraft.world.damagesource.DamageScaling"
import {$DamageEffects, $DamageEffects$$Type} from "net.minecraft.world.damagesource.DamageEffects"
import {$DeathMessageType, $DeathMessageType$$Type} from "net.minecraft.world.damagesource.DeathMessageType"
import {$Holder} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $DamageType extends $Record {
static readonly "CODEC": $Codec<($Holder<($DamageType)>)>
static readonly "DIRECT_CODEC": $Codec<($DamageType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($DamageType)>)>

constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float, arg3: $DamageEffects$$Type, arg4: $DeathMessageType$$Type)
constructor(arg0: StringJS, arg1: float)
constructor(arg0: StringJS, arg1: float, arg2: $DamageEffects$$Type)
constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float, arg3: $DamageEffects$$Type)
constructor(arg0: StringJS, arg1: $DamageScaling$$Type, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "effects"(): $DamageEffects
public "msgId"(): StringJS
public "exhaustion"(): float
public "deathMessageType"(): $DeathMessageType
public "scaling"(): $DamageScaling
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.DamageType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.DamageTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageType$$Type = (Special.DamageType) | ({"effects"?: $DamageEffects$$Type, "scaling"?: $DamageScaling$$Type, "msgId"?: StringJS, "deathMessageType"?: $DeathMessageType$$Type, "exhaustion"?: float}) | ([effects?: $DamageEffects$$Type, scaling?: $DamageScaling$$Type, msgId?: StringJS, deathMessageType?: $DeathMessageType$$Type, exhaustion?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageType$$Original = $DamageType;}
