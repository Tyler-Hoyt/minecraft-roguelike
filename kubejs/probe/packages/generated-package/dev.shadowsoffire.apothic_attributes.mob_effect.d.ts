declare module "dev.shadowsoffire.apothic_attributes.mob_effect.GrievousEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GrievousEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrievousEffect$$Type = ($GrievousEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrievousEffect$$Original = $GrievousEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.SunderingEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SunderingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunderingEffect$$Type = ($SunderingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SunderingEffect$$Original = $SunderingEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.DetonationEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $DetonationEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetonationEffect$$Type = ($DetonationEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DetonationEffect$$Original = $DetonationEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.KnowledgeEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $KnowledgeEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeEffect$$Type = ($KnowledgeEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnowledgeEffect$$Original = $KnowledgeEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.VitalityEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VitalityEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VitalityEffect$$Type = ($VitalityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VitalityEffect$$Original = $VitalityEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.BleedingEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BleedingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BleedingEffect$$Type = ($BleedingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BleedingEffect$$Original = $BleedingEffect;}
declare module "dev.shadowsoffire.apothic_attributes.mob_effect.FlyingEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlyingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "addAttributeModifiers"(arg0: $AttributeMap$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlyingEffect$$Type = ($FlyingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlyingEffect$$Original = $FlyingEffect;}
