declare module "net.minecraft.world.effect.WeavingMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WeavingMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeavingMobEffect$$Type = ($WeavingMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeavingMobEffect$$Original = $WeavingMobEffect;}
declare module "net.minecraft.world.effect.RaidOmenMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RaidOmenMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaidOmenMobEffect$$Type = ($RaidOmenMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaidOmenMobEffect$$Original = $RaidOmenMobEffect;}
declare module "net.minecraft.world.effect.RegenerationMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RegenerationMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegenerationMobEffect$$Type = ($RegenerationMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegenerationMobEffect$$Original = $RegenerationMobEffect;}
declare module "net.minecraft.world.effect.SaturationMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$InstantenousMobEffect} from "net.minecraft.world.effect.InstantenousMobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SaturationMobEffect extends $InstantenousMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaturationMobEffect$$Type = ($SaturationMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SaturationMobEffect$$Original = $SaturationMobEffect;}
declare module "net.minecraft.world.effect.PoisonMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $PoisonMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonMobEffect$$Type = ($PoisonMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoisonMobEffect$$Original = $PoisonMobEffect;}
declare module "net.minecraft.world.effect.HungerMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HungerMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HungerMobEffect$$Type = ($HungerMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HungerMobEffect$$Original = $HungerMobEffect;}
declare module "net.minecraft.world.effect.BadOmenMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BadOmenMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BadOmenMobEffect$$Type = ($BadOmenMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BadOmenMobEffect$$Original = $BadOmenMobEffect;}
declare module "net.minecraft.world.effect.AbsorptionMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AbsorptionMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbsorptionMobEffect$$Type = ($AbsorptionMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbsorptionMobEffect$$Original = $AbsorptionMobEffect;}
declare module "net.minecraft.world.effect.OozingMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OozingMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OozingMobEffect$$Type = ($OozingMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OozingMobEffect$$Original = $OozingMobEffect;}
declare module "net.minecraft.world.effect.WindChargedMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WindChargedMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindChargedMobEffect$$Type = ($WindChargedMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindChargedMobEffect$$Original = $WindChargedMobEffect;}
declare module "net.minecraft.world.effect.InfestedMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $InfestedMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfestedMobEffect$$Type = ($InfestedMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfestedMobEffect$$Original = $InfestedMobEffect;}
declare module "net.minecraft.world.effect.MobEffect$AttributeTemplate" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Int2DoubleFunction, $Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$Record} from "java.lang.Record"

export class $MobEffect$AttributeTemplate extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: double, arg2: $AttributeModifier$Operation$$Type)
constructor(id: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type, curve: $Int2DoubleFunction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "create"(arg0: integer): $AttributeModifier
public "amount"(): double
public "curve"(): $Int2DoubleFunction
public "operation"(): $AttributeModifier$Operation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffect$AttributeTemplate$$Type = ({"id"?: $ResourceLocation$$Type, "operation"?: $AttributeModifier$Operation$$Type, "amount"?: double, "curve"?: $Int2DoubleFunction$$Type}) | ([id?: $ResourceLocation$$Type, operation?: $AttributeModifier$Operation$$Type, amount?: double, curve?: $Int2DoubleFunction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffect$AttributeTemplate$$Original = $MobEffect$AttributeTemplate;}
declare module "net.minecraft.world.effect.WitherMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WitherMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherMobEffect$$Type = ($WitherMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitherMobEffect$$Original = $WitherMobEffect;}
declare module "net.minecraft.world.effect.MobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$Component} from "net.minecraft.network.chat.Component"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$Set$$Type} from "java.util.Set"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Int2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$IMobEffectExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMobEffectExtension"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IClientMobEffectExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory} from "net.minecraft.world.effect.MobEffectCategory"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MobEffect implements $FeatureElement$$Interface, $IMobEffectExtension$$Interface {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

public "getDisplayName"(): $Component
public "getColor"(): integer
public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onEffectStarted"(arg0: $LivingEntity$$Type, arg1: integer): void
public "onMobRemoved"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $Entity$RemovalReason$$Type): void
public "onMobHurt"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $DamageSource$$Type, arg3: float): void
public "getCategory"(): $MobEffectCategory
public "getDescriptionId"(): StringJS
public "getBlendDurationTicks"(): integer
public "addAttributeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: $AttributeModifier$Operation$$Type, arg3: $Int2DoubleFunction$$Type): $MobEffect
public "addAttributeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $MobEffect
public "createParticleOptions"(arg0: $MobEffectInstance$$Type): $ParticleOptions
public "applyInstantenousEffect"(arg0: $Entity$$Type, arg1: $Entity$$Type, arg2: $LivingEntity$$Type, arg3: integer, arg4: double): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "withSoundOnAdded"(arg0: $SoundEvent$$Type): $MobEffect
public "setBlendDuration"(arg0: integer): $MobEffect
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientMobEffectExtensions)>): void
public "isInstantenous"(): boolean
public "createModifiers"(arg0: integer, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "isBeneficial"(): boolean
public "requiredFeatures"(): $FeatureFlagSet
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $MobEffect
public "addAttributeModifiers"(arg0: $AttributeMap$$Type, arg1: integer): void
public "removeAttributeModifiers"(arg0: $AttributeMap$$Type): void
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
public "getSortOrder"(arg0: $MobEffectInstance$$Type): integer
get "displayName"(): $Component
get "color"(): integer
get "category"(): $MobEffectCategory
get "descriptionId"(): StringJS
get "blendDurationTicks"(): integer
set "blendDuration"(value: integer)
get "instantenous"(): boolean
get "beneficial"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MobEffect
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MobEffectTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffect$$Type = (Special.MobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffect$$Original = $MobEffect;}
declare module "net.minecraft.world.effect.HealOrHarmMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$InstantenousMobEffect} from "net.minecraft.world.effect.InstantenousMobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HealOrHarmMobEffect extends $InstantenousMobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealOrHarmMobEffect$$Type = ($HealOrHarmMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HealOrHarmMobEffect$$Original = $HealOrHarmMobEffect;}
declare module "net.minecraft.world.effect.InstantenousMobEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $InstantenousMobEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantenousMobEffect$$Type = ($InstantenousMobEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstantenousMobEffect$$Original = $InstantenousMobEffect;}
declare module "net.minecraft.world.effect.MobEffectCategory" {
import {$Enum} from "java.lang.Enum"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $MobEffectCategory extends $Enum<($MobEffectCategory)> {
static readonly "HARMFUL": $MobEffectCategory
static readonly "BENEFICIAL": $MobEffectCategory
static readonly "NEUTRAL": $MobEffectCategory

public static "values"(): ($MobEffectCategory)[]
public static "valueOf"(arg0: StringJS): $MobEffectCategory
public "getTooltipFormatting"(): $ChatFormatting
get "tooltipFormatting"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectCategory$$Type = (("beneficial") | ("harmful") | ("neutral"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectCategory$$Original = $MobEffectCategory;}
declare module "net.minecraft.world.effect.MobEffectInstance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$EffectCure} from "net.neoforged.neoforge.common.EffectCure"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Int2IntFunction$$Type} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Set} from "java.util.Set"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"

export class $MobEffectInstance implements $Comparable$$Interface<($MobEffectInstance)> {
 "duration": integer
static readonly "MAX_AMPLIFIER": integer
static readonly "CODEC": $Codec<($MobEffectInstance)>
static readonly "INFINITE_DURATION": integer
static readonly "MIN_AMPLIFIER": integer
 "amplifier": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MobEffectInstance)>

constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean, arg5: boolean)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $MobEffectInstance$$Type)
constructor(arg0: $MobEffectInstance$$Type)
constructor(arg0: $Holder$$Type<($MobEffect)>)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer)
constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $MobEffectInstance$$Type): integer
public "compareTo"(arg0: any): integer
public "update"(arg0: $MobEffectInstance$$Type): boolean
public static "load"(arg0: $CompoundTag$$Type): $MobEffectInstance
public "save"(): $Tag
public "is"(arg0: $Holder$$Type<($MobEffect)>): boolean
public "tick"(arg0: $LivingEntity$$Type, arg1: $Runnable$$Type): boolean
public "getDuration"(): integer
public "showIcon"(): boolean
public "getParticleOptions"(): $ParticleOptions
public "copyBlendState"(arg0: $MobEffectInstance$$Type): void
public "onEffectAdded"(arg0: $LivingEntity$$Type): void
public "onEffectStarted"(arg0: $LivingEntity$$Type): void
public "onMobRemoved"(arg0: $LivingEntity$$Type, arg1: $Entity$RemovalReason$$Type): void
public "getAmplifier"(): integer
public "endsWithin"(arg0: integer): boolean
public "onMobHurt"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float): void
public "isVisible"(): boolean
public "isAmbient"(): boolean
public "getCures"(): $Set<($EffectCure)>
public "getDescriptionId"(): StringJS
public "getBlendFactor"(arg0: $LivingEntity$$Type, arg1: float): float
public "isInfiniteDuration"(): boolean
public "mapDuration"(arg0: $Int2IntFunction$$Type): integer
public "skipBlending"(): void
public "getEffect"(): $Holder<($MobEffect)>
get "particleOptions"(): $ParticleOptions
get "visible"(): boolean
get "ambient"(): boolean
get "cures"(): $Set<($EffectCure)>
get "descriptionId"(): StringJS
get "infiniteDuration"(): boolean
get "effect"(): $Holder<($MobEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstance$$Type = ($MobEffectInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectInstance$$Original = $MobEffectInstance;}
