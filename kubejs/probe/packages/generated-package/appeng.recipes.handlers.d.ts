declare module "appeng.recipes.handlers.ChargerRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ChargerRecipe} from "appeng.recipes.handlers.ChargerRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ChargerRecipeSerializer implements $RecipeSerializer$$Interface<($ChargerRecipe)> {
static readonly "INSTANCE": $ChargerRecipeSerializer

constructor()

public "codec"(): $MapCodec<($ChargerRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ChargerRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerRecipeSerializer$$Type = ($ChargerRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargerRecipeSerializer$$Original = $ChargerRecipeSerializer;}
declare module "appeng.recipes.handlers.InscriberRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$InscriberRecipe} from "appeng.recipes.handlers.InscriberRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $InscriberRecipeSerializer implements $RecipeSerializer$$Interface<($InscriberRecipe)> {
static readonly "INSTANCE": $InscriberRecipeSerializer

public "codec"(): $MapCodec<($InscriberRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($InscriberRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberRecipeSerializer$$Type = ($InscriberRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscriberRecipeSerializer$$Original = $InscriberRecipeSerializer;}
declare module "appeng.recipes.handlers.InscriberRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InscriberProcessType, $InscriberProcessType$$Type} from "appeng.recipes.handlers.InscriberProcessType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $InscriberRecipe implements $Recipe$$Interface<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($InscriberRecipe)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($InscriberRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($InscriberRecipe)>

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $Ingredient$$Type, arg3: $Ingredient$$Type, arg4: $InscriberProcessType$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getProcessType"(): $InscriberProcessType
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getMiddleInput"(): $Ingredient
public "getTopOptional"(): $Ingredient
public "getBottomOptional"(): $Ingredient
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "processType"(): $InscriberProcessType
get "middleInput"(): $Ingredient
get "topOptional"(): $Ingredient
get "bottomOptional"(): $Ingredient
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberRecipe$$Type = ($InscriberRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscriberRecipe$$Original = $InscriberRecipe;}
declare module "appeng.recipes.handlers.ChargerRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ChargerRecipe implements $Recipe$$Interface<($RecipeInput)> {
readonly "result": $ItemStack
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
readonly "ingredient": $Ingredient
static readonly "CODEC": $MapCodec<($ChargerRecipe)>
readonly "ingredients": $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($ChargerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargerRecipe)>

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getIngredient"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerRecipe$$Type = ($ChargerRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargerRecipe$$Original = $ChargerRecipe;}
declare module "appeng.recipes.handlers.InscriberProcessType" {
import {$Enum} from "java.lang.Enum"

export class $InscriberProcessType extends $Enum<($InscriberProcessType)> {
static readonly "INSCRIBE": $InscriberProcessType
static readonly "PRESS": $InscriberProcessType

public static "values"(): ($InscriberProcessType)[]
public static "valueOf"(arg0: StringJS): $InscriberProcessType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberProcessType$$Type = (("inscribe") | ("press"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscriberProcessType$$Original = $InscriberProcessType;}
