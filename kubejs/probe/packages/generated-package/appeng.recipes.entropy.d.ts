declare module "appeng.recipes.entropy.EntropyRecipe$Output" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$EntropyRecipe$FluidOutput, $EntropyRecipe$FluidOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidOutput"
import {$Record} from "java.lang.Record"
import {$EntropyRecipe$BlockOutput, $EntropyRecipe$BlockOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockOutput"

export class $EntropyRecipe$Output extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Output)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Output)>

constructor(block: ($EntropyRecipe$BlockOutput$$Type)?, fluid: ($EntropyRecipe$FluidOutput$$Type)?, drops: $List$$Type<($ItemStack$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "block"(): $Optional<($EntropyRecipe$BlockOutput)>
public "drops"(): $List<($ItemStack)>
public "fluid"(): $Optional<($EntropyRecipe$FluidOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Output$$Type = ({"fluid"?: ($EntropyRecipe$FluidOutput$$Type)?, "block"?: ($EntropyRecipe$BlockOutput$$Type)?, "drops"?: $List$$Type<($ItemStack$$Type)>}) | ([fluid?: ($EntropyRecipe$FluidOutput$$Type)?, block?: ($EntropyRecipe$BlockOutput$$Type)?, drops?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$Output$$Original = $EntropyRecipe$Output;}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockInput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$BlockInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockInput)>

constructor(block: $Block$$Type, properties: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<(StringJS), ($PropertyValueMatcher)>
public "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockInput$$Type = ({"block"?: $Block$$Type, "properties"?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>}) | ([block?: $Block$$Type, properties?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$BlockInput$$Original = $EntropyRecipe$BlockInput;}
declare module "appeng.recipes.entropy.EntropyMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EntropyMode extends $Enum<($EntropyMode)> implements $StringRepresentable$$Interface {
static readonly "HEAT": $EntropyMode
static readonly "CODEC": $Codec<($EntropyMode)>
static readonly "COOL": $EntropyMode

public static "values"(): ($EntropyMode)[]
public static "valueOf"(arg0: StringJS): $EntropyMode
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
export type $EntropyMode$$Type = (("heat") | ("cool"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyMode$$Original = $EntropyMode;}
declare module "appeng.recipes.entropy.EntropyRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$Input} from "appeng.recipes.entropy.EntropyRecipe$Input"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EntropyMode, $EntropyMode$$Type} from "appeng.recipes.entropy.EntropyMode"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$EntropyRecipe$Output} from "appeng.recipes.entropy.EntropyRecipe$Output"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe implements $Recipe$$Interface<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($EntropyRecipe)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($EntropyRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>

public "matches"(arg0: $EntropyMode$$Type, arg1: $BlockState$$Type, arg2: $FluidState$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getOutputBlockState"(arg0: $BlockState$$Type): $BlockState
public "getOutputFluidState"(arg0: $FluidState$$Type): $FluidState
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getMode"(): $EntropyMode
public "getOutput"(): $EntropyRecipe$Output
public "getDrops"(): $List<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getInput"(): $EntropyRecipe$Input
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "mode"(): $EntropyMode
get "output"(): $EntropyRecipe$Output
get "drops"(): $List<($ItemStack)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "input"(): $EntropyRecipe$Input
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$$Type = ($EntropyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$$Original = $EntropyRecipe;}
declare module "appeng.recipes.entropy.EntropyRecipe$Input" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$FluidInput, $EntropyRecipe$FluidInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidInput"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntropyRecipe$BlockInput, $EntropyRecipe$BlockInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockInput"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe$Input extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Input)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Input)>

constructor(block: ($EntropyRecipe$BlockInput$$Type)?, fluid: ($EntropyRecipe$FluidInput$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type, arg1: $FluidState$$Type): boolean
public "block"(): $Optional<($EntropyRecipe$BlockInput)>
public "fluid"(): $Optional<($EntropyRecipe$FluidInput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Input$$Type = ({"fluid"?: ($EntropyRecipe$FluidInput$$Type)?, "block"?: ($EntropyRecipe$BlockInput$$Type)?}) | ([fluid?: ($EntropyRecipe$FluidInput$$Type)?, block?: ($EntropyRecipe$BlockInput$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$Input$$Original = $EntropyRecipe$Input;}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidOutput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$FluidOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidOutput)>

constructor(fluid: $Fluid$$Type, keepProperties: boolean, properties: $Map$$Type<(StringJS), (StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: $FluidState$$Type): $FluidState
public "properties"(): $Map<(StringJS), (StringJS)>
public "keepProperties"(): boolean
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $EntropyRecipe$FluidOutput
public "fluid"(): $Fluid
public static "toNetwork"(arg0: $FriendlyByteBuf$$Type, arg1: $EntropyRecipe$FluidOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidOutput$$Type = ({"keepProperties"?: boolean, "properties"?: $Map$$Type<(StringJS), (StringJS)>, "fluid"?: $Fluid$$Type}) | ([keepProperties?: boolean, properties?: $Map$$Type<(StringJS), (StringJS)>, fluid?: $Fluid$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$FluidOutput$$Original = $EntropyRecipe$FluidOutput;}
declare module "appeng.recipes.entropy.EntropyRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EntropyRecipe} from "appeng.recipes.entropy.EntropyRecipe"

export class $EntropyRecipeSerializer implements $RecipeSerializer$$Interface<($EntropyRecipe)> {
static readonly "INSTANCE": $EntropyRecipeSerializer

public "codec"(): $MapCodec<($EntropyRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipeSerializer$$Type = ($EntropyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipeSerializer$$Original = $EntropyRecipeSerializer;}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidInput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Map, $Map$$Type} from "java.util.Map"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $EntropyRecipe$FluidInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidInput)>

constructor(fluid: $Fluid$$Type, properties: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<(StringJS), ($PropertyValueMatcher)>
public "fluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidInput$$Type = ({"fluid"?: $Fluid$$Type, "properties"?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>}) | ([fluid?: $Fluid$$Type, properties?: $Map$$Type<(StringJS), ($PropertyValueMatcher$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$FluidInput$$Original = $EntropyRecipe$FluidInput;}
declare module "appeng.recipes.entropy.PropertyValueMatcher" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $PropertyValueMatcher$$Interface {
}

export class $PropertyValueMatcher implements $PropertyValueMatcher$$Interface {
static readonly "CODEC": $Codec<($PropertyValueMatcher)>
static readonly "MAP_CODEC": $Codec<($Map<(StringJS), ($PropertyValueMatcher)>)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PropertyValueMatcher)>

 "matches"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: $StateHolder$$Type<(never), (never)>): boolean
 "validate"(arg0: $Property$$Type<($Comparable$$Type<(never)>)>): void
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyValueMatcher$$Type = ($PropertyValueMatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PropertyValueMatcher$$Original = $PropertyValueMatcher;}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockOutput" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe$BlockOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockOutput)>

constructor(block: $Block$$Type, keepProperties: boolean, properties: $Map$$Type<(StringJS), (StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: $BlockState$$Type): $BlockState
public "properties"(): $Map<(StringJS), (StringJS)>
public "block"(): $Block
public "keepProperties"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockOutput$$Type = ({"keepProperties"?: boolean, "block"?: $Block$$Type, "properties"?: $Map$$Type<(StringJS), (StringJS)>}) | ([keepProperties?: boolean, block?: $Block$$Type, properties?: $Map$$Type<(StringJS), (StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyRecipe$BlockOutput$$Original = $EntropyRecipe$BlockOutput;}
