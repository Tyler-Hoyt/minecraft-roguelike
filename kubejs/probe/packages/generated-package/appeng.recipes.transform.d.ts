declare module "appeng.recipes.transform.TransformCircumstance" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List} from "java.util.List"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TransformCircumstance {
static readonly "CODEC": $Codec<($TransformCircumstance)>
static readonly "EXPLOSION": $TransformCircumstance
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TransformCircumstance)>

constructor(arg0: StringJS)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isExplosion"(): boolean
public static "explosion"(): $TransformCircumstance
public "getFluidsForRendering"(): $List<($Fluid)>
public "toJson"(): $JsonObject
public "isFluid"(): boolean
public "isFluid"(arg0: $Fluid$$Type): boolean
public "isFluid"(arg0: $FluidState$$Type): boolean
public static "fluid"(arg0: $TagKey$$Type<($Fluid)>): $TransformCircumstance
public "isFluidTag"(arg0: $TagKey$$Type<($Fluid)>): boolean
get "fluidsForRendering"(): $List<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformCircumstance$$Type = ($TransformCircumstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformCircumstance$$Original = $TransformCircumstance;}
declare module "appeng.recipes.transform.TransformRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TransformRecipeInput, $TransformRecipeInput$$Type} from "appeng.recipes.transform.TransformRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TransformCircumstance, $TransformCircumstance$$Type} from "appeng.recipes.transform.TransformCircumstance"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TransformRecipe implements $Recipe$$Interface<($TransformRecipeInput)> {
readonly "output": $ItemStack
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($TransformRecipe)>
readonly "circumstance": $TransformCircumstance
readonly "ingredients": $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($TransformRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TransformRecipe)>

constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ItemStack$$Type, arg2: $TransformCircumstance$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $TransformRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $TransformRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCircumstance"(): $TransformCircumstance
public "isSpecial"(): boolean
public "getResultItem"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $TransformRecipeInput$$Type): $NonNullList<($ItemStack)>
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
export type $TransformRecipe$$Type = ($TransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformRecipe$$Original = $TransformRecipe;}
declare module "appeng.recipes.transform.TransformRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TransformRecipe} from "appeng.recipes.transform.TransformRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $TransformRecipeSerializer implements $RecipeSerializer$$Interface<($TransformRecipe)> {
static readonly "INSTANCE": $TransformRecipeSerializer

public "codec"(): $MapCodec<($TransformRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TransformRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformRecipeSerializer$$Type = ($TransformRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformRecipeSerializer$$Original = $TransformRecipeSerializer;}
declare module "appeng.recipes.transform.TransformRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $TransformRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(items: $List$$Type<($ItemStack$$Type)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "items"(): $List<($ItemStack)>
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
export type $TransformRecipeInput$$Type = ({"items"?: $List$$Type<($ItemStack$$Type)>}) | ([items?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformRecipeInput$$Original = $TransformRecipeInput;}
