declare module "dev.shadowsoffire.apotheosis.loot.RarityRenderData" {
import {$RarityRenderData$ParticleData, $RarityRenderData$ParticleData$$Type} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ParticleData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RarityRenderData$ShadowData, $RarityRenderData$ShadowData$$Type} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ShadowData"
import {$Record} from "java.lang.Record"

export class $RarityRenderData extends $Record {
static readonly "CODEC": $Codec<($RarityRenderData)>
static readonly "DEFAULT": $RarityRenderData

constructor(beamHeight: float, beamRadius: float, beamTexture: $ResourceLocation$$Type, glowRadius: float, glowTexture: $ResourceLocation$$Type, shadow: $RarityRenderData$ShadowData$$Type, particle: $RarityRenderData$ParticleData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "particle"(): $RarityRenderData$ParticleData
public "beamTexture"(): $ResourceLocation
public "glowTexture"(): $ResourceLocation
public "shadow"(): $RarityRenderData$ShadowData
public "beamRadius"(): float
public "beamHeight"(): float
public "glowRadius"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityRenderData$$Type = ({"beamTexture"?: $ResourceLocation$$Type, "beamHeight"?: float, "glowRadius"?: float, "beamRadius"?: float, "particle"?: $RarityRenderData$ParticleData$$Type, "shadow"?: $RarityRenderData$ShadowData$$Type, "glowTexture"?: $ResourceLocation$$Type}) | ([beamTexture?: $ResourceLocation$$Type, beamHeight?: float, glowRadius?: float, beamRadius?: float, particle?: $RarityRenderData$ParticleData$$Type, shadow?: $RarityRenderData$ShadowData$$Type, glowTexture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RarityRenderData$$Original = $RarityRenderData;}
declare module "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ShadowData" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $RarityRenderData$ShadowData extends $Record {
static readonly "CODEC": $Codec<($RarityRenderData$ShadowData)>
static readonly "DEFAULT": $RarityRenderData$ShadowData

constructor(size: float, alpha: integer, texture: $ResourceLocation$$Type, frames: integer, frameTime: float)

public "size"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "frames"(): integer
public "texture"(): $ResourceLocation
public "alpha"(): integer
public "frameTime"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityRenderData$ShadowData$$Type = ({"frameTime"?: float, "texture"?: $ResourceLocation$$Type, "size"?: float, "frames"?: integer, "alpha"?: integer}) | ([frameTime?: float, texture?: $ResourceLocation$$Type, size?: float, frames?: integer, alpha?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RarityRenderData$ShadowData$$Original = $RarityRenderData$ShadowData;}
declare module "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ShadowData$Builder" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RarityRenderData$ShadowData} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ShadowData"

export class $RarityRenderData$ShadowData$Builder {
constructor()

public "size"(arg0: float): $RarityRenderData$ShadowData$Builder
public "frames"(arg0: integer): $RarityRenderData$ShadowData$Builder
public "build"(): $RarityRenderData$ShadowData
public "texture"(arg0: $ResourceLocation$$Type): $RarityRenderData$ShadowData$Builder
public "alpha"(arg0: integer): $RarityRenderData$ShadowData$Builder
public "frameTime"(arg0: float): $RarityRenderData$ShadowData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityRenderData$ShadowData$Builder$$Type = ($RarityRenderData$ShadowData$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RarityRenderData$ShadowData$Builder$$Original = $RarityRenderData$ShadowData$Builder;}
declare module "dev.shadowsoffire.apotheosis.loot.LootRule" {
import {$GenContext$$Type} from "dev.shadowsoffire.apotheosis.tiers.GenContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CodecMap} from "dev.shadowsoffire.placebo.codec.CodecMap"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$LootRarity$$Type} from "dev.shadowsoffire.apotheosis.loot.LootRarity"

export interface $LootRule$$Interface extends $CodecProvider$$Interface<($LootRule)> {
get "codec"(): $Codec<($LootRule)>
}

export class $LootRule implements $LootRule$$Interface {
static readonly "CODEC": $CodecMap<($LootRule)>

 "execute"(arg0: $ItemStack$$Type, arg1: $LootRarity$$Type, arg2: $GenContext$$Type): void
static "initCodecs"(): void
 "getCodec"(): $Codec<($LootRule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootRule$$Type = ($LootRule);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootRule$$Original = $LootRule;}
declare module "dev.shadowsoffire.apotheosis.loot.LootRarity" {
import {$Map} from "java.util.Map"
import {$GenContext$$Type} from "dev.shadowsoffire.apotheosis.tiers.GenContext"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$LootRarity$Builder} from "dev.shadowsoffire.apotheosis.loot.LootRarity$Builder"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$List, $List$$Type} from "java.util.List"
import {$RarityRenderData, $RarityRenderData$$Type} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TieredWeights$Weighted, $TieredWeights$Weighted$$Type, $TieredWeights$Weighted$$Interface} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted"
import {$DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$TieredWeights, $TieredWeights$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"
import {$Record} from "java.lang.Record"
import {$LootRule, $LootRule$$Type} from "dev.shadowsoffire.apotheosis.loot.LootRule"
import {$LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"

export class $LootRarity extends $Record implements $CodecProvider$$Interface<($LootRarity)>, $TieredWeights$Weighted$$Interface {
static readonly "CODEC": $Codec<($LootRarity)>
static readonly "LOAD_CODEC": $Codec<($LootRarity)>

constructor(color: $TextColor$$Type, material: $Holder$$Type<($Item)>, weights: $TieredWeights$$Type, rules: $List$$Type<($LootRule$$Type)>, sortIndex: integer, renderData: $RarityRenderData$$Type, invaderSound: $SoundEvent$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(arg0: $TextColor$$Type, arg1: $Holder$$Type<($Item)>): $LootRarity$Builder
public "color"(): $TextColor
public static "random"(arg0: $GenContext$$Type): $LootRarity
public static "random"(arg0: $GenContext$$Type, arg1: $Set$$Type<($LootRarity$$Type)>): $LootRarity
public "getRules"(arg0: $LootCategory$$Type): $List<($LootRule)>
public "rules"(): $List<($LootRule)>
public "sortIndex"(): integer
public "renderData"(): $RarityRenderData
public "getCodec"(): $Codec<($LootRarity)>
public "material"(): $Holder<($Item)>
public "invaderSound"(): $SoundEvent
public static "randomFromHolders"(arg0: $GenContext$$Type, arg1: $Set$$Type<($DynamicHolder$$Type<($LootRarity$$Type)>)>): $LootRarity
public "toComponent"(): $MutableComponent
public "getMaterial"(): $Item
public "weights"(): $TieredWeights
public static "mapCodec"<T>(arg0: $Codec$$Type<(T)>): $Codec<($Map<($LootRarity), (T)>)>
public static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
get "codec"(): $Codec<($LootRarity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootRarity$$Type = ({"weights"?: $TieredWeights$$Type, "rules"?: $List$$Type<($LootRule$$Type)>, "sortIndex"?: integer, "material"?: $Holder$$Type<($Item)>, "renderData"?: $RarityRenderData$$Type, "color"?: $TextColor$$Type, "invaderSound"?: $SoundEvent$$Type}) | ([weights?: $TieredWeights$$Type, rules?: $List$$Type<($LootRule$$Type)>, sortIndex?: integer, material?: $Holder$$Type<($Item)>, renderData?: $RarityRenderData$$Type, color?: $TextColor$$Type, invaderSound?: $SoundEvent$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootRarity$$Original = $LootRarity;}
declare module "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ParticleData" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $RarityRenderData$ParticleData extends $Record {
static readonly "CODEC": $Codec<($RarityRenderData$ParticleData)>
static readonly "DEFAULT": $RarityRenderData$ParticleData

constructor(enabled: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityRenderData$ParticleData$$Type = ({"enabled"?: boolean}) | ([enabled?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RarityRenderData$ParticleData$$Original = $RarityRenderData$ParticleData;}
declare module "dev.shadowsoffire.apotheosis.loot.LootCategory" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set} from "java.util.Set"
import {$EntitySlotGroup, $EntitySlotGroup$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.EntitySlotGroup"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LootCategory {
static readonly "CODEC": $Codec<($LootCategory)>
static readonly "SET_CODEC": $Codec<($Set<($LootCategory)>)>
static readonly "OPTIONAL_CODEC": $Codec<($LootCategory)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($LootCategory)>

constructor(arg0: $Predicate$$Type<($ItemStack)>, arg1: $EntitySlotGroup$$Type, arg2: integer)
constructor(arg0: $Predicate$$Type<($ItemStack)>, arg1: $EntitySlotGroup$$Type)

public "priority"(): integer
public "toString"(): StringJS
public "getKey"(): $ResourceLocation
public "isValid"(arg0: $ItemStack$$Type): boolean
public "isNone"(): boolean
public "getDescIdPlural"(): StringJS
/**
 * 
 * @deprecated
 */
public "isMeleeOrShield"(): boolean
/**
 * 
 * @deprecated
 */
public "isRanged"(): boolean
/**
 * 
 * @deprecated
 */
public "isBreaker"(): boolean
/**
 * 
 * @deprecated
 */
public "isMelee"(): boolean
public "getDescId"(): StringJS
/**
 * 
 * @deprecated
 */
public "isArmor"(): boolean
public static "forItem"(arg0: $ItemStack$$Type): $LootCategory
public static "mapCodec"<T>(arg0: $Codec$$Type<(T)>): $MapCodec<($Map<($LootCategory), (T)>)>
/**
 * 
 * @deprecated
 */
public "isDefensive"(): boolean
public "getSlots"(): $EntitySlotGroup
get "key"(): $ResourceLocation
get "none"(): boolean
get "descIdPlural"(): StringJS
get "meleeOrShield"(): boolean
get "ranged"(): boolean
get "breaker"(): boolean
get "melee"(): boolean
get "descId"(): StringJS
get "armor"(): boolean
get "defensive"(): boolean
get "slots"(): $EntitySlotGroup
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ApotheosisLootCategory
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ApotheosisLootCategoryTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCategory$$Type = (Special.ApotheosisLootCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCategory$$Original = $LootCategory;}
declare module "dev.shadowsoffire.apotheosis.loot.RarityRenderData$Builder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RarityRenderData$ShadowData$Builder$$Type} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData$ShadowData$Builder"
import {$RarityRenderData} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData"

export class $RarityRenderData$Builder {
constructor()

public "build"(): $RarityRenderData
public "particle"(arg0: boolean): $RarityRenderData$Builder
public "beamTexture"(arg0: $ResourceLocation$$Type): $RarityRenderData$Builder
public "glowTexture"(arg0: $ResourceLocation$$Type): $RarityRenderData$Builder
public "shadow"(arg0: $UnaryOperator$$Type<($RarityRenderData$ShadowData$Builder)>): $RarityRenderData$Builder
public "beamRadius"(arg0: float): $RarityRenderData$Builder
public "beamHeight"(arg0: float): $RarityRenderData$Builder
public "glowRadius"(arg0: float): $RarityRenderData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RarityRenderData$Builder$$Type = ($RarityRenderData$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RarityRenderData$Builder$$Original = $RarityRenderData$Builder;}
declare module "dev.shadowsoffire.apotheosis.loot.LootRarity$Builder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$TieredWeights$Builder$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Builder"
import {$LootRarity} from "dev.shadowsoffire.apotheosis.loot.LootRarity"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$RarityRenderData$Builder$$Type} from "dev.shadowsoffire.apotheosis.loot.RarityRenderData$Builder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$LootRule$$Type} from "dev.shadowsoffire.apotheosis.loot.LootRule"

export class $LootRarity$Builder {
constructor(arg0: $TextColor$$Type, arg1: $Holder$$Type<($Item)>)

public "build"(): $LootRarity
public "rule"(arg0: $LootRule$$Type): $LootRarity$Builder
public "sortIndex"(arg0: integer): $LootRarity$Builder
public "renderData"(arg0: $UnaryOperator$$Type<($RarityRenderData$Builder)>): $LootRarity$Builder
public "invaderSound"(arg0: $SoundEvent$$Type): $LootRarity$Builder
public "weights"(arg0: $TieredWeights$Builder$$Type): $LootRarity$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootRarity$Builder$$Type = ($LootRarity$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootRarity$Builder$$Original = $LootRarity$Builder;}
