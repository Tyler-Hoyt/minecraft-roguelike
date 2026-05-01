declare module "twilightforest.entity.MagicPaintingVariant$Layer$Parallax$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $MagicPaintingVariant$Layer$Parallax$Type extends $Enum<($MagicPaintingVariant$Layer$Parallax$Type)> implements $StringRepresentable$$Interface {
static readonly "LINEAR_TIME": $MagicPaintingVariant$Layer$Parallax$Type
static readonly "SINE_TIME": $MagicPaintingVariant$Layer$Parallax$Type
static readonly "VIEW_ANGLE": $MagicPaintingVariant$Layer$Parallax$Type

public static "values"(): ($MagicPaintingVariant$Layer$Parallax$Type)[]
public static "valueOf"(arg0: StringJS): $MagicPaintingVariant$Layer$Parallax$Type
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$Layer$Parallax$Type$$Type = (("view_angle") | ("linear_time") | ("sine_time"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$Layer$Parallax$Type$$Original = $MagicPaintingVariant$Layer$Parallax$Type;}
declare module "twilightforest.entity.MagicPaintingVariant$Layer" {
import {$MagicPaintingVariant$Layer$OpacityModifier, $MagicPaintingVariant$Layer$OpacityModifier$$Type} from "twilightforest.entity.MagicPaintingVariant$Layer$OpacityModifier"
import {$MagicPaintingVariant$Layer$Parallax, $MagicPaintingVariant$Layer$Parallax$$Type} from "twilightforest.entity.MagicPaintingVariant$Layer$Parallax"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $MagicPaintingVariant$Layer extends $Record {
static readonly "CODEC": $Codec<($MagicPaintingVariant$Layer)>

constructor(path: StringJS, parallax: $MagicPaintingVariant$Layer$Parallax$$Type, opacityModifier: $MagicPaintingVariant$Layer$OpacityModifier$$Type, fullbright: boolean, localLighting: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "path"(): StringJS
public "fullbright"(): boolean
public "localLighting"(): boolean
public "opacityModifier"(): $MagicPaintingVariant$Layer$OpacityModifier
public "parallax"(): $MagicPaintingVariant$Layer$Parallax
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$Layer$$Type = ({"parallax"?: $MagicPaintingVariant$Layer$Parallax$$Type, "opacityModifier"?: $MagicPaintingVariant$Layer$OpacityModifier$$Type, "localLighting"?: boolean, "fullbright"?: boolean, "path"?: StringJS}) | ([parallax?: $MagicPaintingVariant$Layer$Parallax$$Type, opacityModifier?: $MagicPaintingVariant$Layer$OpacityModifier$$Type, localLighting?: boolean, fullbright?: boolean, path?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$Layer$$Original = $MagicPaintingVariant$Layer;}
declare module "twilightforest.entity.MagicPaintingVariant" {
import {$MagicPaintingVariant$Layer, $MagicPaintingVariant$Layer$$Type} from "twilightforest.entity.MagicPaintingVariant$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Record} from "java.lang.Record"

export class $MagicPaintingVariant extends $Record {
static readonly "CODEC": $Codec<($MagicPaintingVariant)>

constructor(width: integer, height: integer, layers: $List$$Type<($MagicPaintingVariant$Layer$$Type)>, author: $Component$$Type, backTexture: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "layers"(): $List<($MagicPaintingVariant$Layer)>
public "width"(): integer
public static "getVariant"(arg0: $HolderLookup$Provider$$Type, arg1: $ResourceLocation$$Type): $Optional<($MagicPaintingVariant)>
public static "getVariant"(arg0: $HolderLookup$Provider$$Type, arg1: StringJS): $Optional<($MagicPaintingVariant)>
public static "getVariant"(arg0: $HolderLookup$Provider$$Type, arg1: $ResourceKey$$Type<($MagicPaintingVariant)>): $Optional<($MagicPaintingVariant)>
public "author"(): $Component
public "height"(): integer
public static "getVariantId"(arg0: $RegistryAccess$$Type, arg1: $MagicPaintingVariant$$Type): StringJS
public "backTexture"(): $ResourceLocation
public static "getVariantResourceLocation"(arg0: $RegistryAccess$$Type, arg1: $MagicPaintingVariant$$Type): $ResourceLocation
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TwilightMagicPaintings
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TwilightMagicPaintingsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$$Type = (Special.TwilightMagicPaintings) | ({"height"?: integer, "width"?: integer, "author"?: $Component$$Type, "backTexture"?: $ResourceLocation$$Type, "layers"?: $List$$Type<($MagicPaintingVariant$Layer$$Type)>}) | ([height?: integer, width?: integer, author?: $Component$$Type, backTexture?: $ResourceLocation$$Type, layers?: $List$$Type<($MagicPaintingVariant$Layer$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$$Original = $MagicPaintingVariant;}
declare module "twilightforest.entity.MagicPaintingVariant$Layer$OpacityModifier$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $MagicPaintingVariant$Layer$OpacityModifier$Type extends $Enum<($MagicPaintingVariant$Layer$OpacityModifier$Type)> implements $StringRepresentable$$Interface {
static readonly "STORM": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "DISTANCE": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "WEATHER": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "SINE_TIME": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "DAY_TIME": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "LIGHTNING": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "HOLDING_ITEM": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "HEALTH": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "HUNGER": $MagicPaintingVariant$Layer$OpacityModifier$Type
static readonly "MOB_EFFECT_CATEGORY": $MagicPaintingVariant$Layer$OpacityModifier$Type

public static "values"(): ($MagicPaintingVariant$Layer$OpacityModifier$Type)[]
public static "valueOf"(arg0: StringJS): $MagicPaintingVariant$Layer$OpacityModifier$Type
public "getSerializedName"(): StringJS
public "powerOfMultiplier"(): boolean
public "usesRange"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type = (("distance") | ("weather") | ("storm") | ("lightning") | ("day_time") | ("sine_time") | ("health") | ("hunger") | ("holding_item") | ("mob_effect_category"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$Layer$OpacityModifier$Type$$Original = $MagicPaintingVariant$Layer$OpacityModifier$Type;}
declare module "twilightforest.entity.MagicPaintingVariant$Layer$Parallax" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MagicPaintingVariant$Layer$Parallax$Type, $MagicPaintingVariant$Layer$Parallax$Type$$Type} from "twilightforest.entity.MagicPaintingVariant$Layer$Parallax$Type"
import {$Record} from "java.lang.Record"

export class $MagicPaintingVariant$Layer$Parallax extends $Record {
static readonly "CODEC": $Codec<($MagicPaintingVariant$Layer$Parallax)>

constructor(type: $MagicPaintingVariant$Layer$Parallax$Type$$Type, multiplier: float, width: integer, height: integer)

public "type"(): $MagicPaintingVariant$Layer$Parallax$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "multiplier"(): float
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$Layer$Parallax$$Type = ({"width"?: integer, "type"?: $MagicPaintingVariant$Layer$Parallax$Type$$Type, "multiplier"?: float, "height"?: integer}) | ([width?: integer, type?: $MagicPaintingVariant$Layer$Parallax$Type$$Type, multiplier?: float, height?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$Layer$Parallax$$Original = $MagicPaintingVariant$Layer$Parallax;}
declare module "twilightforest.entity.MagicPaintingVariant$Layer$OpacityModifier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Record} from "java.lang.Record"
import {$MagicPaintingVariant$Layer$OpacityModifier$Type, $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type} from "twilightforest.entity.MagicPaintingVariant$Layer$OpacityModifier$Type"

export class $MagicPaintingVariant$Layer$OpacityModifier extends $Record {
static readonly "MOB_EFFECT_CATEGORY_CODEC": $Codec<($MobEffectCategory)>
static readonly "CODEC": $Codec<($MagicPaintingVariant$Layer$OpacityModifier)>

constructor(type: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, multiplier: float, invert: boolean, min: float, max: float, from: float, to: float, item: $ItemStack$$Type, effectCategory: ($MobEffectCategory$$Type)?)
constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, arg1: float, arg2: boolean, arg3: float, arg4: float, arg5: $MobEffectCategory$$Type)
constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, arg1: float, arg2: boolean, arg3: float, arg4: float, arg5: $ItemStack$$Type)
constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, arg1: float, arg2: boolean, arg3: float, arg4: float, arg5: float, arg6: float)
constructor(arg0: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, arg1: float, arg2: boolean, arg3: float, arg4: float)

public "type"(): $MagicPaintingVariant$Layer$OpacityModifier$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(): float
public "max"(): float
public "from"(): float
public "to"(): float
public "multiplier"(): float
public "item"(): $ItemStack
public "invert"(): boolean
public "effectCategory"(): $Optional<($MobEffectCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPaintingVariant$Layer$OpacityModifier$$Type = ({"multiplier"?: float, "invert"?: boolean, "min"?: float, "from"?: float, "type"?: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, "max"?: float, "to"?: float, "effectCategory"?: ($MobEffectCategory$$Type)?, "item"?: $ItemStack$$Type}) | ([multiplier?: float, invert?: boolean, min?: float, from?: float, type?: $MagicPaintingVariant$Layer$OpacityModifier$Type$$Type, max?: float, to?: float, effectCategory?: ($MobEffectCategory$$Type)?, item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPaintingVariant$Layer$OpacityModifier$$Original = $MagicPaintingVariant$Layer$OpacityModifier;}
