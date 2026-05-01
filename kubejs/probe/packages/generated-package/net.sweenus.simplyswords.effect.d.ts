declare module "net.sweenus.simplyswords.effect.OnslaughtEffect" {
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

export class $OnslaughtEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnslaughtEffect$$Type = ($OnslaughtEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OnslaughtEffect$$Original = $OnslaughtEffect;}
declare module "net.sweenus.simplyswords.effect.WildfireEffect" {
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

export class $WildfireEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfireEffect$$Type = ($WildfireEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WildfireEffect$$Original = $WildfireEffect;}
declare module "net.sweenus.simplyswords.effect.SoulTetherEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SoulTetherEffect extends $MobEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
 "detonateDamage": float
 "detonateRadius": double
 "heal": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributeContainer: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulTetherEffect$$Type = ($SoulTetherEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulTetherEffect$$Original = $SoulTetherEffect;}
declare module "net.sweenus.simplyswords.effect.FireVortexEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FireVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireVortexEffect$$Type = ($FireVortexEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireVortexEffect$$Original = $FireVortexEffect;}
declare module "net.sweenus.simplyswords.effect.MagislamEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagislamEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagislamEffect$$Type = ($MagislamEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagislamEffect$$Original = $MagislamEffect;}
declare module "net.sweenus.simplyswords.effect.VoidAssaultEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VoidAssaultEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidAssaultEffect$$Type = ($VoidAssaultEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidAssaultEffect$$Original = $VoidAssaultEffect;}
declare module "net.sweenus.simplyswords.effect.FlameSeedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlameSeedEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlameSeedEffect$$Type = ($FlameSeedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlameSeedEffect$$Original = $FlameSeedEffect;}
declare module "net.sweenus.simplyswords.effect.AstralShiftEffect" {
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

export class $AstralShiftEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(entity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralShiftEffect$$Type = ($AstralShiftEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AstralShiftEffect$$Original = $AstralShiftEffect;}
declare module "net.sweenus.simplyswords.effect.PainEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $PainEffect extends $MobEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PainEffect$$Type = ($PainEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PainEffect$$Original = $PainEffect;}
declare module "net.sweenus.simplyswords.effect.FatalFlickerEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FatalFlickerEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(user: $LivingEntity$$Type, amplifier: integer): boolean
public static "performDash"(user: $LivingEntity$$Type, world: $Level$$Type, radius: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FatalFlickerEffect$$Type = ($FatalFlickerEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FatalFlickerEffect$$Original = $FatalFlickerEffect;}
declare module "net.sweenus.simplyswords.effect.StormEffect" {
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

export class $StormEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormEffect$$Type = ($StormEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StormEffect$$Original = $StormEffect;}
declare module "net.sweenus.simplyswords.effect.FrenzyEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrenzyEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrenzyEffect$$Type = ($FrenzyEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrenzyEffect$$Original = $FrenzyEffect;}
declare module "net.sweenus.simplyswords.effect.ResilienceEffect" {
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

export class $ResilienceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResilienceEffect$$Type = ($ResilienceEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResilienceEffect$$Original = $ResilienceEffect;}
declare module "net.sweenus.simplyswords.effect.BattleFatigueEffect" {
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

export class $BattleFatigueEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleFatigueEffect$$Type = ($BattleFatigueEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BattleFatigueEffect$$Original = $BattleFatigueEffect;}
declare module "net.sweenus.simplyswords.effect.MagistormEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$HighOrbitingEffect} from "net.sweenus.simplyswords.effect.HighOrbitingEffect"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagistormEffect extends $HighOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagistormEffect$$Type = ($MagistormEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagistormEffect$$Original = $MagistormEffect;}
declare module "net.sweenus.simplyswords.effect.SmoulderingEffect" {
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

export class $SmoulderingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoulderingEffect$$Type = ($SmoulderingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmoulderingEffect$$Original = $SmoulderingEffect;}
declare module "net.sweenus.simplyswords.effect.FreezeEffect" {
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

export class $FreezeEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEffect$$Type = ($FreezeEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezeEffect$$Original = $FreezeEffect;}
declare module "net.sweenus.simplyswords.effect.WideOrbitingEffect" {
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

export class $WideOrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideOrbitingEffect$$Type = ($WideOrbitingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WideOrbitingEffect$$Original = $WideOrbitingEffect;}
declare module "net.sweenus.simplyswords.effect.RibboncleaveEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RibboncleaveEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaveEffect$$Type = ($RibboncleaveEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RibboncleaveEffect$$Original = $RibboncleaveEffect;}
declare module "net.sweenus.simplyswords.effect.ElementalVortexEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ElementalVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalVortexEffect$$Type = ($ElementalVortexEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElementalVortexEffect$$Original = $ElementalVortexEffect;}
declare module "net.sweenus.simplyswords.effect.VoidcloakEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VoidcloakEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidcloakEffect$$Type = ($VoidcloakEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidcloakEffect$$Original = $VoidcloakEffect;}
declare module "net.sweenus.simplyswords.effect.EchoEffect" {
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

export class $EchoEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoEffect$$Type = ($EchoEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoEffect$$Original = $EchoEffect;}
declare module "net.sweenus.simplyswords.effect.WardEffect" {
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

export class $WardEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WardEffect$$Type = ($WardEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WardEffect$$Original = $WardEffect;}
declare module "net.sweenus.simplyswords.effect.OrbitingEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "onEffectStarted"(entity: $LivingEntity$$Type, amplifier: integer): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrbitingEffect$$Type = ($OrbitingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OrbitingEffect$$Original = $OrbitingEffect;}
declare module "net.sweenus.simplyswords.effect.ImmolationEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$WideOrbitingEffect} from "net.sweenus.simplyswords.effect.WideOrbitingEffect"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ImmolationEffect extends $WideOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolationEffect$$Type = ($ImmolationEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmolationEffect$$Original = $ImmolationEffect;}
declare module "net.sweenus.simplyswords.effect.SporeSwarmEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$WideOrbitingEffect} from "net.sweenus.simplyswords.effect.WideOrbitingEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SporeSwarmEffect extends $WideOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeSwarmEffect$$Type = ($SporeSwarmEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SporeSwarmEffect$$Original = $SporeSwarmEffect;}
declare module "net.sweenus.simplyswords.effect.HighOrbitingEffect" {
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

export class $HighOrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighOrbitingEffect$$Type = ($HighOrbitingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HighOrbitingEffect$$Original = $HighOrbitingEffect;}
declare module "net.sweenus.simplyswords.effect.RibbonwrathEffect" {
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

export class $RibbonwrathEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbonwrathEffect$$Type = ($RibbonwrathEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RibbonwrathEffect$$Original = $RibbonwrathEffect;}
declare module "net.sweenus.simplyswords.effect.FrostVortexEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OrbitingEffect} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrostVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostVortexEffect$$Type = ($FrostVortexEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostVortexEffect$$Original = $FrostVortexEffect;}
