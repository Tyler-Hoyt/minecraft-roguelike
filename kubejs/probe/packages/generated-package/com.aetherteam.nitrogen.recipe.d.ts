declare module "com.aetherteam.nitrogen.recipe.recipes.BlockStateRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$BlockStateIngredient} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction} from "net.minecraft.commands.CacheableFunction"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$BlockStateRecipeInput, $BlockStateRecipeInput$$Type} from "com.aetherteam.nitrogen.recipe.input.BlockStateRecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockStateRecipe$$Interface extends $Recipe$$Interface<($BlockStateRecipeInput)> {
get "function"(): $Optional<($CacheableFunction)>
get "result"(): $BlockPropertyPair
get "special"(): boolean
get "ingredient"(): $BlockStateIngredient
get "functionId"(): $Optional<($ResourceLocation)>
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $BlockStateRecipe implements $BlockStateRecipe$$Interface {
 "matches"(arg0: $BlockStateRecipeInput$$Type, arg1: $Level$$Type): boolean
 "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
 "getFunction"(): $Optional<($CacheableFunction)>
 "getResult"(): $BlockPropertyPair
 "assemble"(arg0: $BlockStateRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "getIngredient"(): $BlockStateIngredient
 "getFunctionId"(): $Optional<($ResourceLocation)>
 "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
 "getRemainingItems"(arg0: $BlockStateRecipeInput$$Type): $NonNullList<($ItemStack)>
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getResultState"(arg0: $BlockState$$Type): $BlockState
 "getType"(): $RecipeType<(never)>
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRecipe$$Type = ($BlockStateRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateRecipe$$Original = $BlockStateRecipe;}
declare module "com.aetherteam.nitrogen.recipe.BlockPropertyPair" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Reference2ObjectArrayMap, $Reference2ObjectArrayMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectArrayMap"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockPropertyPair extends $Record {
static readonly "CODEC": $MapCodec<($BlockPropertyPair)>

constructor(block: $Block$$Type, properties: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "matches"(arg0: $BlockState$$Type, arg1: $Block$$Type, arg2: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?): boolean
public "matches"(arg0: $BlockState$$Type): boolean
public static "of"(arg0: $Block$$Type, arg1: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?): $BlockPropertyPair
public "properties"(): $Optional<($Reference2ObjectArrayMap<($Property<(never)>), ($Comparable<(never)>)>)>
public "block"(): $Block
public static "propertiesMatch"(arg0: $BlockState$$Type, arg1: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPropertyPair$$Type = ({"block"?: $Block$$Type, "properties"?: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?}) | ([block?: $Block$$Type, properties?: ($Reference2ObjectArrayMap$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPropertyPair$$Original = $BlockPropertyPair;}
declare module "com.aetherteam.nitrogen.recipe.input.BlockStateRecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $BlockStateRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor()

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRecipeInput$$Type = ({}) | ([]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateRecipeInput$$Original = $BlockStateRecipeInput;}
declare module "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe" {
import {$BlockStateRecipe$$Interface} from "com.aetherteam.nitrogen.recipe.recipes.BlockStateRecipe"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair, $BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction} from "net.minecraft.commands.CacheableFunction"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$BlockStateRecipeInput$$Type} from "com.aetherteam.nitrogen.recipe.input.BlockStateRecipeInput"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockStateRecipe implements $BlockStateRecipe$$Interface {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: $BlockStateIngredient$$Type, arg2: $BlockPropertyPair$$Type, arg3: ($ResourceLocation$$Type)?)

public "matches"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "set"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getFunction"(): $Optional<($CacheableFunction)>
public "getResult"(): $BlockPropertyPair
public "getIngredient"(): $BlockStateIngredient
public "getFunctionId"(): $Optional<($ResourceLocation)>
public "getResultState"(arg0: $BlockState$$Type): $BlockState
public "matches"(arg0: $BlockStateRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $BlockStateRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $BlockStateRecipeInput$$Type): $NonNullList<($ItemStack)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "function"(): $Optional<($CacheableFunction)>
get "result"(): $BlockPropertyPair
get "ingredient"(): $BlockStateIngredient
get "functionId"(): $Optional<($ResourceLocation)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockStateRecipe$$Type = ($AbstractBlockStateRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockStateRecipe$$Original = $AbstractBlockStateRecipe;}
declare module "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe$Factory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$BlockPropertyPair, $BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBlockStateRecipe, $AbstractBlockStateRecipe$$Type} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"

export interface $AbstractBlockStateRecipe$Factory$$Interface<T extends $AbstractBlockStateRecipe> {

(arg0: $BlockStateIngredient, arg1: $BlockPropertyPair, arg2: $Optional<($ResourceLocation)>): T
}

export class $AbstractBlockStateRecipe$Factory<T extends $AbstractBlockStateRecipe> implements $AbstractBlockStateRecipe$Factory$$Interface {
 "create"(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockStateRecipe$Factory$$Type<T> = ((arg0: $BlockStateIngredient, arg1: $BlockPropertyPair, arg2: $Optional<($ResourceLocation)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlockStateRecipe$Factory$$Original<T> = $AbstractBlockStateRecipe$Factory<(T)>;}
declare module "com.aetherteam.nitrogen.recipe.BlockStateIngredient$Value" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPropertyPair, $BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $BlockStateIngredient$Value$$Interface {

(): $Collection$$Type<($BlockPropertyPair$$Type)>
get "pairs"(): $Collection<($BlockPropertyPair)>
}

export class $BlockStateIngredient$Value implements $BlockStateIngredient$Value$$Interface {
static readonly "CODEC": $Codec<($BlockStateIngredient$Value)>
static readonly "MAP_CODEC": $MapCodec<($BlockStateIngredient$Value)>

 "getPairs"(): $Collection<($BlockPropertyPair)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateIngredient$Value$$Type = (() => $Collection$$Type<($BlockPropertyPair$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateIngredient$Value$$Original = $BlockStateIngredient$Value;}
declare module "com.aetherteam.nitrogen.recipe.BlockStateIngredient" {
import {$BlockStateIngredient$Value$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient$Value"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPropertyPair, $BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateIngredient implements $Predicate$$Interface<($BlockState)> {
static readonly "CODEC": $Codec<($BlockStateIngredient)>
static readonly "CODEC_NONEMPTY": $Codec<($BlockStateIngredient)>
static readonly "CONTENTS_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BlockStateIngredient)>
static readonly "EMPTY": $BlockStateIngredient

constructor(arg0: $Stream$$Type<($BlockStateIngredient$Value$$Type)>)
constructor(arg0: ($BlockStateIngredient$Value$$Type)[])

public "test"(arg0: any): boolean
public "test"(arg0: $BlockState$$Type): boolean
public "isEmpty"(): boolean
public static "of"(...arg0: ($Block$$Type)[]): $BlockStateIngredient
public static "of"(arg0: $TagKey$$Type<($Block)>): $BlockStateIngredient
public static "of"(): $BlockStateIngredient
public static "of"(...arg0: ($BlockPropertyPair$$Type)[]): $BlockStateIngredient
public static "ofBlock"(arg0: $Stream$$Type<($Block$$Type)>): $BlockStateIngredient
public static "ofBlockPropertyPair"(arg0: $Stream$$Type<($BlockPropertyPair$$Type)>): $BlockStateIngredient
public static "fromValues"(arg0: $Stream$$Type<($BlockStateIngredient$Value$$Type)>): $BlockStateIngredient
public "getPairs"(): ($BlockPropertyPair)[]
public "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
get "empty"(): boolean
get "pairs"(): ($BlockPropertyPair)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateIngredient$$Type = ($BlockStateIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateIngredient$$Original = $BlockStateIngredient;}
declare module "com.aetherteam.nitrogen.recipe.serializer.BlockStateRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractBlockStateRecipe$Factory$$Type} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe$Factory"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AbstractBlockStateRecipe, $AbstractBlockStateRecipe$$Type} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"

export class $BlockStateRecipeSerializer<T extends $AbstractBlockStateRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $AbstractBlockStateRecipe$Factory$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): T
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRecipeSerializer$$Type<T> = ($BlockStateRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateRecipeSerializer$$Original<T> = $BlockStateRecipeSerializer<(T)>;}
