declare module "dev.shadowsoffire.apothic_spawners.modifiers.StatModifier" {
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ApothSpawnerTile$$Type} from "dev.shadowsoffire.apothic_spawners.block.ApothSpawnerTile"
import {$StatModifier$Mode, $StatModifier$Mode$$Type} from "dev.shadowsoffire.apothic_spawners.modifiers.StatModifier$Mode"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$SpawnerStat, $SpawnerStat$$Type} from "dev.shadowsoffire.apothic_spawners.stats.SpawnerStat"

export class $StatModifier<T> extends $Record {
static readonly "CODEC": $Codec<($StatModifier<(never)>)>

constructor(arg0: $SpawnerStat$$Type<(T)>, arg1: T)
constructor(stat: $SpawnerStat$$Type<(T)>, value: T, min: (T)?, max: (T)?, mode: $StatModifier$Mode$$Type)

public "mode"(): $StatModifier$Mode
public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(): $Optional<(T)>
public "max"(): $Optional<(T)>
public "apply"(arg0: $ApothSpawnerTile$$Type): boolean
public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $StatModifier<(never)>
public "stat"(): $SpawnerStat<(T)>
public static "modifierCodec"<T>(arg0: $SpawnerStat$$Type<(T)>): $MapCodec<($StatModifier<(T)>)>
public "getFormattedValue"(): StringJS
get "formattedValue"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatModifier$$Type<T> = ({"max"?: (T)?, "min"?: (T)?, "stat"?: $SpawnerStat$$Type<(T)>, "value"?: T, "mode"?: $StatModifier$Mode$$Type}) | ([max?: (T)?, min?: (T)?, stat?: $SpawnerStat$$Type<(T)>, value?: T, mode?: $StatModifier$Mode$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatModifier$$Original<T> = $StatModifier<(T)>;}
declare module "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SpawnerModifier$Serializer} from "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier$Serializer"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StatModifier, $StatModifier$$Type} from "dev.shadowsoffire.apothic_spawners.modifiers.StatModifier"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ApothSpawnerTile$$Type} from "dev.shadowsoffire.apothic_spawners.block.ApothSpawnerTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpawnerModifier implements $Recipe$$Interface<($RecipeInput)> {
static readonly "CODEC": $MapCodec<($SpawnerModifier)>
static readonly "SERIALIZER": $SpawnerModifier$Serializer

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: boolean, arg3: $List$$Type<($StatModifier$$Type<(never)>)>)

public "matches"(arg0: $ApothSpawnerTile$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "apply"(arg0: $ApothSpawnerTile$$Type): boolean
public "getType"(): $RecipeType<(never)>
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "consumesOffhand"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getMainhandInput"(): $Ingredient
public "getOffhandInput"(): $Ingredient
public "getStatModifiers"(): $List<($StatModifier<(never)>)>
public static "findMatch"(arg0: $ApothSpawnerTile$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $SpawnerModifier
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "mainhandInput"(): $Ingredient
get "offhandInput"(): $Ingredient
get "statModifiers"(): $List<($StatModifier<(never)>)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerModifier$$Type = ($SpawnerModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerModifier$$Original = $SpawnerModifier;}
declare module "dev.shadowsoffire.apothic_spawners.modifiers.StatModifier$Mode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $StatModifier$Mode extends $Enum<($StatModifier$Mode)> implements $StringRepresentable$$Interface {
static readonly "ADD": $StatModifier$Mode
static readonly "SET": $StatModifier$Mode
static readonly "CODEC": $Codec<($StatModifier$Mode)>
static readonly "BY_ID": $IntFunction<($StatModifier$Mode)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatModifier$Mode)>

public static "values"(): ($StatModifier$Mode)[]
public static "valueOf"(arg0: StringJS): $StatModifier$Mode
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
export type $StatModifier$Mode$$Type = (("add") | ("set"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatModifier$Mode$$Original = $StatModifier$Mode;}
declare module "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpawnerModifier, $SpawnerModifier$$Type} from "dev.shadowsoffire.apothic_spawners.modifiers.SpawnerModifier"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpawnerModifier$Serializer implements $RecipeSerializer$$Interface<($SpawnerModifier)> {
constructor()

public static "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $SpawnerModifier$$Type): void
public static "read"(arg0: $RegistryFriendlyByteBuf$$Type): $SpawnerModifier
public "codec"(): $MapCodec<($SpawnerModifier)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpawnerModifier)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerModifier$Serializer$$Type = ($SpawnerModifier$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerModifier$Serializer$$Original = $SpawnerModifier$Serializer;}
