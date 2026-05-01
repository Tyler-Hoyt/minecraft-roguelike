declare module "twilightforest.item.recipe.travellers.TravellersGearModifierShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$TravellersGearModifierRecipe} from "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$TravellersModifier$$Type} from "twilightforest.item.travellers_gear.modifiers.TravellersModifier"

export class $TravellersGearModifierShapedRecipe extends $TravellersGearModifierRecipe {
constructor(arg0: $ShapedRecipePattern$$Type, arg1: $ResourceKey$$Type<($TravellersModifier)>, arg2: boolean)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getHeight"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isShapeless"(): boolean
public "getWidth"(): integer
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "height"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "shapeless"(): boolean
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGearModifierShapedRecipe$$Type = ($TravellersGearModifierShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierShapedRecipe$$Original = $TravellersGearModifierShapedRecipe;}
declare module "twilightforest.item.recipe.travellers.TravellersGearModifierShapedRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$TravellersGearModifierRecipe$AbstractModifierRecipeSerializer} from "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe$AbstractModifierRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$TravellersGearModifierShapedRecipe} from "twilightforest.item.recipe.travellers.TravellersGearModifierShapedRecipe"

export class $TravellersGearModifierShapedRecipe$Serializer extends $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer<($TravellersGearModifierShapedRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGearModifierShapedRecipe$Serializer$$Type = ($TravellersGearModifierShapedRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierShapedRecipe$Serializer$$Original = $TravellersGearModifierShapedRecipe$Serializer;}
declare module "twilightforest.item.recipe.travellers.TravellersGearModifierShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$TravellersGearModifierRecipe} from "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TravellersModifier$$Type} from "twilightforest.item.travellers_gear.modifiers.TravellersModifier"

export class $TravellersGearModifierShapelessRecipe extends $TravellersGearModifierRecipe {
constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ResourceKey$$Type<($TravellersModifier)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getHeight"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isShapeless"(): boolean
public "getWidth"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "height"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "shapeless"(): boolean
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGearModifierShapelessRecipe$$Type = ($TravellersGearModifierShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierShapelessRecipe$$Original = $TravellersGearModifierShapelessRecipe;}
declare module "twilightforest.item.recipe.travellers.TravellersGearModifierShapelessRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$TravellersGearModifierRecipe$AbstractModifierRecipeSerializer} from "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe$AbstractModifierRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$TravellersGearModifierShapelessRecipe} from "twilightforest.item.recipe.travellers.TravellersGearModifierShapelessRecipe"

export class $TravellersGearModifierShapelessRecipe$Serializer extends $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer<($TravellersGearModifierShapelessRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGearModifierShapelessRecipe$Serializer$$Type = ($TravellersGearModifierShapelessRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierShapelessRecipe$Serializer$$Original = $TravellersGearModifierShapelessRecipe$Serializer;}
declare module "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe$AbstractModifierRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TravellersGearModifierRecipe, $TravellersGearModifierRecipe$$Type} from "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer<T extends $TravellersGearModifierRecipe> implements $RecipeSerializer$$Interface<(T)> {
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
export type $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer$$Type<T> = ($TravellersGearModifierRecipe$AbstractModifierRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer$$Original<T> = $TravellersGearModifierRecipe$AbstractModifierRecipeSerializer<(T)>;}
declare module "twilightforest.item.recipe.travellers.TravellersGearModifierRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$TravellersModifier, $TravellersModifier$$Type} from "twilightforest.item.travellers_gear.modifiers.TravellersModifier"

export class $TravellersGearModifierRecipe extends $CustomRecipe {
constructor(arg0: $ResourceKey$$Type<($TravellersModifier)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getId"(): $ResourceLocation
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "applyModifier"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Ingredient$$Type)>): $ItemStack
public "getHeight"(): integer
public "getTravellersModifierKey"(): $ResourceKey<($TravellersModifier)>
public "isShapeless"(): boolean
public static "getModifiableArmorFromIngredients"(arg0: $Iterable$$Type<($Ingredient$$Type)>): $ItemStack
public "getWidth"(): integer
get "id"(): $ResourceLocation
get "height"(): integer
get "travellersModifierKey"(): $ResourceKey<($TravellersModifier)>
get "shapeless"(): boolean
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGearModifierRecipe$$Type = ($TravellersGearModifierRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGearModifierRecipe$$Original = $TravellersGearModifierRecipe;}
