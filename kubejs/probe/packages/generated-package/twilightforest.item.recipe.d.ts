declare module "twilightforest.item.recipe.ScepterRepairRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ScepterRepairRecipe extends $CustomRecipe {
constructor(arg0: $Item$$Type, arg1: $List$$Type<($Ingredient$$Type)>, arg2: integer, arg3: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getRepairDurability"(): integer
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRepairItems"(): $List<($Ingredient)>
public "getScepter"(): $Item
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "repairDurability"(): integer
get "repairItems"(): $List<($Ingredient)>
get "scepter"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScepterRepairRecipe$$Type = ($ScepterRepairRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScepterRepairRecipe$$Original = $ScepterRepairRecipe;}
declare module "twilightforest.item.recipe.UncraftingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$UncraftingRecipe, $UncraftingRecipe$$Type} from "twilightforest.item.recipe.UncraftingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $UncraftingRecipe$Serializer implements $RecipeSerializer$$Interface<($UncraftingRecipe)> {
static readonly "CODEC": $MapCodec<($UncraftingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UncraftingRecipe)>

constructor()

public "codec"(): $MapCodec<($UncraftingRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $UncraftingRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($UncraftingRecipe)>
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $UncraftingRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncraftingRecipe$Serializer$$Type = ($UncraftingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UncraftingRecipe$Serializer$$Original = $UncraftingRecipe$Serializer;}
declare module "twilightforest.item.recipe.ScepterRepairRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ScepterRepairRecipe} from "twilightforest.item.recipe.ScepterRepairRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ScepterRepairRecipe$Serializer implements $RecipeSerializer$$Interface<($ScepterRepairRecipe)> {
static readonly "CODEC": $MapCodec<($ScepterRepairRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ScepterRepairRecipe)>

constructor()

public "codec"(): $MapCodec<($ScepterRepairRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ScepterRepairRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScepterRepairRecipe$Serializer$$Type = ($ScepterRepairRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScepterRepairRecipe$Serializer$$Original = $ScepterRepairRecipe$Serializer;}
declare module "twilightforest.item.recipe.DryingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DryingRecipe} from "twilightforest.item.recipe.DryingRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DryingRecipe$Serializer implements $RecipeSerializer$$Interface<($DryingRecipe)> {
static readonly "CODEC": $MapCodec<($DryingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DryingRecipe)>

constructor()

public "codec"(): $MapCodec<($DryingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DryingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRecipe$Serializer$$Type = ($DryingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DryingRecipe$Serializer$$Original = $DryingRecipe$Serializer;}
declare module "twilightforest.item.recipe.NoTemplateSmithingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$TypedDataComponent$$Type} from "net.minecraft.core.component.TypedDataComponent"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NoTemplateSmithingRecipe implements $SmithingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $List$$Type<($TypedDataComponent$$Type<(never)>)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getBase"(): $Ingredient
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getAddition"(): $Ingredient
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "base"(): $Ingredient
get "addition"(): $Ingredient
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoTemplateSmithingRecipe$$Type = ($NoTemplateSmithingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoTemplateSmithingRecipe$$Original = $NoTemplateSmithingRecipe;}
declare module "twilightforest.item.recipe.UncraftingRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $UncraftingRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: integer, arg1: $Ingredient$$Type, arg2: integer, arg3: $ShapedRecipePattern$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getCount"(): integer
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getCost"(): integer
public "isItemStackAnIngredient"(arg0: $ItemStack$$Type): boolean
public "getInput"(): $Ingredient
get "count"(): integer
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "cost"(): integer
get "input"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncraftingRecipe$$Type = ($UncraftingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UncraftingRecipe$$Original = $UncraftingRecipe;}
declare module "twilightforest.item.recipe.NoTemplateSmithingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NoTemplateSmithingRecipe} from "twilightforest.item.recipe.NoTemplateSmithingRecipe"

export class $NoTemplateSmithingRecipe$Serializer implements $RecipeSerializer$$Interface<($NoTemplateSmithingRecipe)> {
constructor()

public "codec"(): $MapCodec<($NoTemplateSmithingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NoTemplateSmithingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoTemplateSmithingRecipe$Serializer$$Type = ($NoTemplateSmithingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoTemplateSmithingRecipe$Serializer$$Original = $NoTemplateSmithingRecipe$Serializer;}
declare module "twilightforest.item.recipe.DryingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleItemRecipe} from "net.minecraft.world.item.crafting.SingleItemRecipe"

export class $DryingRecipe extends $SingleItemRecipe {
constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getResult"(): $ItemStack
public "isSpecial"(): boolean
public "getDryingTime"(): integer
public "getInput"(): $Ingredient
get "result"(): $ItemStack
get "special"(): boolean
get "dryingTime"(): integer
get "input"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRecipe$$Type = ($DryingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DryingRecipe$$Original = $DryingRecipe;}
