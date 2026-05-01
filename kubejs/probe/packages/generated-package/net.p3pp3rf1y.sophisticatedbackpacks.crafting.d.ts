declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SmithingBackpackUpgradeRecipe extends $SmithingTransformRecipe implements $IWrapperRecipe$$Interface<($SmithingTransformRecipe)> {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $SmithingTransformRecipe$$Type)

public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $SmithingTransformRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $SmithingTransformRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$$Type = ($SmithingBackpackUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingBackpackUpgradeRecipe$$Original = $SmithingBackpackUpgradeRecipe;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$SmithingBackpackUpgradeRecipe} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmithingBackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($SmithingTransformRecipe), ($SmithingBackpackUpgradeRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$$Type = ($SmithingBackpackUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$$Original = $SmithingBackpackUpgradeRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BackpackUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $Recipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $Recipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$$Type = ($BackpackUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BackpackUpgradeRecipe$$Original = $BackpackUpgradeRecipe;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicBackpackRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $Recipe
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $Recipe
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$$Type = ($BasicBackpackRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicBackpackRecipe$$Original = $BasicBackpackRecipe;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$BasicBackpackRecipe} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicBackpackRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BasicBackpackRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Serializer$$Type = ($BasicBackpackRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicBackpackRecipe$Serializer$$Original = $BasicBackpackRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$BackpackUpgradeRecipe} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BackpackUpgradeRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BackpackUpgradeRecipe$Serializer$$Original = $BackpackUpgradeRecipe$Serializer;}
