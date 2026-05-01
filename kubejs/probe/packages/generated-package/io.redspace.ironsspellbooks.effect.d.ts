declare module "io.redspace.ironsspellbooks.effect.OakskinEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CustomDescriptionMobEffect} from "io.redspace.ironsspellbooks.effect.CustomDescriptionMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OakskinEffect extends $CustomDescriptionMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "REDUCTION_PER_LEVEL": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "BASE_REDUCTION": float
static readonly "SLOWNESS_MAGNITUDE": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "getReductionAmount"(arg0: integer): float
public "getDescriptionLine"(arg0: $MobEffectInstance$$Type): $Component
public static "reduceDamage"(arg0: $LivingIncomingDamageEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakskinEffect$$Type = ($OakskinEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OakskinEffect$$Original = $OakskinEffect;}
declare module "io.redspace.ironsspellbooks.effect.RendEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RendEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "ARMOR_PER_LEVEL": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendEffect$$Type = ($RendEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RendEffect$$Original = $RendEffect;}
declare module "io.redspace.ironsspellbooks.effect.EvasionEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CustomDescriptionMobEffect} from "io.redspace.ironsspellbooks.effect.CustomDescriptionMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EvasionEffect extends $CustomDescriptionMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public static "doEffect"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type): boolean
public "getDescriptionLine"(arg0: $MobEffectInstance$$Type): $Component
public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvasionEffect$$Type = ($EvasionEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EvasionEffect$$Original = $EvasionEffect;}
declare module "io.redspace.ironsspellbooks.effect.ThunderstormEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ThunderstormEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "getDamageFromAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): float
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderstormEffect$$Type = ($ThunderstormEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThunderstormEffect$$Original = $ThunderstormEffect;}
declare module "io.redspace.ironsspellbooks.effect.ImmolateEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ImmolateEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "STACKS_REQUIRED_AMPLIFIER": integer
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STACKS_REQUIRED": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
public static "damageFor"(arg0: $Entity$$Type): double
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public static "addImmolateStack"(arg0: $LivingEntity$$Type, arg1: $Entity$$Type): $MobEffectInstance
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolateEffect$$Type = ($ImmolateEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmolateEffect$$Original = $ImmolateEffect;}
declare module "io.redspace.ironsspellbooks.effect.FallDamageImmunityEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FallDamageImmunityEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallDamageImmunityEffect$$Type = ($FallDamageImmunityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallDamageImmunityEffect$$Original = $FallDamageImmunityEffect;}
declare module "io.redspace.ironsspellbooks.effect.ChilledEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ChilledEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChilledEffect$$Type = ($ChilledEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChilledEffect$$Original = $ChilledEffect;}
declare module "io.redspace.ironsspellbooks.effect.BlightEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingHealEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingHealEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BlightEffect extends $MagicMobEffect {
static readonly "HEALING_PER_LEVEL": float
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "DAMAGE_PER_LEVEL": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "reduceHealing"(arg0: $LivingHealEvent$$Type): void
public static "reduceDamageOutput"(arg0: $LivingIncomingDamageEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightEffect$$Type = ($BlightEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightEffect$$Original = $BlightEffect;}
declare module "io.redspace.ironsspellbooks.effect.FrostbiteEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrostbiteEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "getDamageForAmplifier"(arg0: integer, arg1: $LivingEntity$$Type): float
public static "handleFrostbiteDeathEffects"(arg0: $LivingDeathEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostbiteEffect$$Type = ($FrostbiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostbiteEffect$$Original = $FrostbiteEffect;}
declare module "io.redspace.ironsspellbooks.effect.SpiderAspectEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SpiderAspectEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "DAMAGE_PER_LEVEL": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "increaseDamage"(arg0: $LivingIncomingDamageEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderAspectEffect$$Type = ($SpiderAspectEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiderAspectEffect$$Original = $SpiderAspectEffect;}
declare module "io.redspace.ironsspellbooks.effect.SummonTimer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IMobEffectEndCallback$$Interface} from "io.redspace.ironsspellbooks.effect.IMobEffectEndCallback"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

/**
 * 
 * @deprecated
 */
export class $SummonTimer extends $MobEffect implements $IMobEffectEndCallback$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonTimer$$Type = ($SummonTimer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonTimer$$Original = $SummonTimer;}
declare module "io.redspace.ironsspellbooks.effect.IMobEffectEndCallback" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IMobEffectEndCallback$$Interface {

(arg0: $LivingEntity, arg1: integer): void
}

export class $IMobEffectEndCallback implements $IMobEffectEndCallback$$Interface {
 "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEffectEndCallback$$Type = ((arg0: $LivingEntity, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMobEffectEndCallback$$Original = $IMobEffectEndCallback;}
declare module "io.redspace.ironsspellbooks.effect.InstantManaEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$Component} from "net.minecraft.network.chat.Component"
import {$CustomDescriptionMobEffect} from "io.redspace.ironsspellbooks.effect.CustomDescriptionMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $InstantManaEffect extends $CustomDescriptionMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "manaPerAmplifierPercent": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "manaPerAmplifier": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "applyInstantenousEffect"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $LivingEntity$$Type, arg3: integer, arg4: double): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "getDescriptionLine"(arg0: $MobEffectInstance$$Type): $Component
public "isInstantenous"(): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantManaEffect$$Type = ($InstantManaEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstantManaEffect$$Original = $InstantManaEffect;}
declare module "io.redspace.ironsspellbooks.effect.VoltStrikeEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VoltStrikeEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoltStrikeEffect$$Type = ($VoltStrikeEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoltStrikeEffect$$Original = $VoltStrikeEffect;}
declare module "io.redspace.ironsspellbooks.effect.GluttonyEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntityUseItemEvent$Finish$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Finish"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GluttonyEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "ratioForAmplifier"(arg0: integer): float
public static "finishEating"(arg0: $LivingEntityUseItemEvent$Finish$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$$Type = ($GluttonyEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GluttonyEffect$$Original = $GluttonyEffect;}
declare module "io.redspace.ironsspellbooks.effect.AngelWingsEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AngelWingsEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AngelWingsEffect$$Type = ($AngelWingsEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AngelWingsEffect$$Original = $AngelWingsEffect;}
declare module "io.redspace.ironsspellbooks.effect.AscensionEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AscensionEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
public static "ambientParticles"(arg0: $ClientLevel$$Type, arg1: $LivingEntity$$Type): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionEffect$$Type = ($AscensionEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AscensionEffect$$Original = $AscensionEffect;}
declare module "io.redspace.ironsspellbooks.effect.AbyssalShroudEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AbyssalShroudEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
public static "doEffect"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbyssalShroudEffect$$Type = ($AbyssalShroudEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbyssalShroudEffect$$Original = $AbyssalShroudEffect;}
declare module "io.redspace.ironsspellbooks.effect.ISyncedMobEffect" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ISyncedMobEffect$$Interface {
}

export class $ISyncedMobEffect implements $ISyncedMobEffect$$Interface {
 "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedMobEffect$$Type = ($ISyncedMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISyncedMobEffect$$Original = $ISyncedMobEffect;}
declare module "io.redspace.ironsspellbooks.effect.AirborneEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AirborneEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "damage_per_amp": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "getDamageFromLevel"(arg0: integer): float
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirborneEffect$$Type = ($AirborneEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirborneEffect$$Original = $AirborneEffect;}
declare module "io.redspace.ironsspellbooks.effect.PlanarSightEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $PlanarSightEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanarSightEffect$$Type = ($PlanarSightEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlanarSightEffect$$Original = $PlanarSightEffect;}
declare module "io.redspace.ironsspellbooks.effect.HeartstopEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HeartstopEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartstopEffect$$Type = ($HeartstopEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeartstopEffect$$Original = $HeartstopEffect;}
declare module "io.redspace.ironsspellbooks.effect.FortifyEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FortifyEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectStarted"(arg0: $LivingEntity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FortifyEffect$$Type = ($FortifyEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FortifyEffect$$Original = $FortifyEffect;}
declare module "io.redspace.ironsspellbooks.effect.TrueInvisibilityEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $TrueInvisibilityEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public static "onDealDamage"(arg0: $LivingIncomingDamageEvent$$Type): void
public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueInvisibilityEffect$$Type = ($TrueInvisibilityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrueInvisibilityEffect$$Original = $TrueInvisibilityEffect;}
declare module "io.redspace.ironsspellbooks.effect.BurningDashEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BurningDashEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningDashEffect$$Type = ($BurningDashEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BurningDashEffect$$Original = $BurningDashEffect;}
declare module "io.redspace.ironsspellbooks.effect.CustomDescriptionMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $CustomDescriptionMobEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

public static "handleCustomPotionTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: boolean, arg3: $MobEffectInstance$$Type, arg4: $CustomDescriptionMobEffect$$Type): void
public "getDescriptionLine"(arg0: $MobEffectInstance$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDescriptionMobEffect$$Type = ($CustomDescriptionMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomDescriptionMobEffect$$Original = $CustomDescriptionMobEffect;}
declare module "io.redspace.ironsspellbooks.effect.ChargeEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$ISyncedMobEffect$$Interface} from "io.redspace.ironsspellbooks.effect.ISyncedMobEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ChargeEffect extends $MagicMobEffect implements $ISyncedMobEffect$$Interface {
static readonly "SPELL_POWER_PER_LEVEL": float
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "ATTACK_DAMAGE_PER_LEVEL": float
static readonly "SPEED_PER_LEVEL": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "clientTick"(arg0: $LivingEntity$$Type, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeEffect$$Type = ($ChargeEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargeEffect$$Original = $ChargeEffect;}
declare module "io.redspace.ironsspellbooks.effect.guiding_bolt.GuidingBoltEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GuidingBoltEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)
constructor(arg0: $MobEffectCategory$$Type, arg1: integer, arg2: $ParticleOptions$$Type)

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuidingBoltEffect$$Type = ($GuidingBoltEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuidingBoltEffect$$Original = $GuidingBoltEffect;}
declare module "io.redspace.ironsspellbooks.effect.MagicMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IMobEffectEndCallback$$Interface} from "io.redspace.ironsspellbooks.effect.IMobEffectEndCallback"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagicMobEffect extends $MobEffect implements $IMobEffectEndCallback$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)
constructor(arg0: $MobEffectCategory$$Type, arg1: integer, arg2: $ParticleOptions$$Type)

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectStarted"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectRemoved"(arg0: $LivingEntity$$Type, arg1: integer): void
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicMobEffect$$Type = ($MagicMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicMobEffect$$Original = $MagicMobEffect;}
declare module "io.redspace.ironsspellbooks.effect.EchoingStrikesEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MagicMobEffect} from "io.redspace.ironsspellbooks.effect.MagicMobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EchoingStrikesEffect extends $MagicMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public static "getDamageModifier"(arg0: integer, arg1: $LivingEntity$$Type): float
public static "createEcho"(arg0: $LivingDamageEvent$Post$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoingStrikesEffect$$Type = ($EchoingStrikesEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoingStrikesEffect$$Original = $EchoingStrikesEffect;}
