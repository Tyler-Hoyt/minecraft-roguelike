declare module "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$UpgradeNextTierRecipe} from "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $UpgradeNextTierRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($UpgradeNextTierRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Serializer$$Type = ($UpgradeNextTierRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeNextTierRecipe$Serializer$$Original = $UpgradeNextTierRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RecipeWrapperSerializer<T extends $Recipe<(object)>, R extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(R)> {
constructor(arg0: $Function$$Type<(T), (R)>, arg1: $RecipeSerializer$$Type<(T)>)

public "codec"(): $MapCodec<(R)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapperSerializer$$Type<T, R> = ($RecipeWrapperSerializer<(T), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeWrapperSerializer$$Original<T, R> = $RecipeWrapperSerializer<(T), (R)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $UpgradeNextTierRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
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
export type $UpgradeNextTierRecipe$$Type = ($UpgradeNextTierRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeNextTierRecipe$$Original = $UpgradeNextTierRecipe;}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe" {
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"

export interface $IWrapperRecipe$$Interface<T extends $Recipe<(object)>> {

(): T
get "compose"(): T
}

export class $IWrapperRecipe<T extends $Recipe<(object)>> implements $IWrapperRecipe$$Interface {
 "getCompose"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrapperRecipe$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrapperRecipe$$Original<T> = $IWrapperRecipe<(T)>;}
