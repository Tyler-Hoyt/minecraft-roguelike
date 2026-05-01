declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $StorageTierUpgradeShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe$$Interface<($ShapelessRecipe)> {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: $ShapelessRecipe$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $ShapelessRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $ShapelessRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$$Type = ($StorageTierUpgradeShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeShapelessRecipe$$Original = $StorageTierUpgradeShapelessRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromChestRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShulkerBoxFromChestRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
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
export type $ShulkerBoxFromChestRecipe$$Type = ($ShulkerBoxFromChestRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxFromChestRecipe$$Original = $ShulkerBoxFromChestRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DoubleChestTierUpgradeShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe$$Interface<($ShapelessRecipe)> {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: $ShapelessRecipe$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $ShapelessRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $ShapelessRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$$Type = ($DoubleChestTierUpgradeShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$$Original = $DoubleChestTierUpgradeShapelessRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$DoubleChestTierUpgradeRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DoubleChestTierUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($DoubleChestTierUpgradeRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeRecipe$Serializer$$Type = ($DoubleChestTierUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleChestTierUpgradeRecipe$Serializer$$Original = $DoubleChestTierUpgradeRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromVanillaShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShulkerBoxFromVanillaShapelessRecipe extends $ShapelessRecipe implements $IWrapperRecipe$$Interface<($ShapelessRecipe)> {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: $ShapelessRecipe$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $ShapelessRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $ShapelessRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$$Type = ($ShulkerBoxFromVanillaShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$$Original = $ShulkerBoxFromVanillaShapelessRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromChestRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$ShulkerBoxFromChestRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromChestRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShulkerBoxFromChestRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($ShulkerBoxFromChestRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromChestRecipe$Serializer$$Type = ($ShulkerBoxFromChestRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxFromChestRecipe$Serializer$$Original = $ShulkerBoxFromChestRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DoubleChestTierUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $ShapedRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $ShapedRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeRecipe$$Type = ($DoubleChestTierUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleChestTierUpgradeRecipe$$Original = $DoubleChestTierUpgradeRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeShapelessRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$DoubleChestTierUpgradeShapelessRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.DoubleChestTierUpgradeShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DoubleChestTierUpgradeShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($DoubleChestTierUpgradeShapelessRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$Serializer$$Type = ($DoubleChestTierUpgradeShapelessRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleChestTierUpgradeShapelessRecipe$Serializer$$Original = $DoubleChestTierUpgradeShapelessRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.GenericWoodStorageRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$GenericWoodStorageRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.GenericWoodStorageRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $GenericWoodStorageRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($GenericWoodStorageRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericWoodStorageRecipe$Serializer$$Type = ($GenericWoodStorageRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericWoodStorageRecipe$Serializer$$Original = $GenericWoodStorageRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $StorageTierUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getCompose"(): $ShapedRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $ShapedRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$$Type = ($StorageTierUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeRecipe$$Original = $StorageTierUpgradeRecipe;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeShapelessRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$StorageTierUpgradeShapelessRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeShapelessRecipe"

export class $StorageTierUpgradeShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($StorageTierUpgradeShapelessRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeShapelessRecipe$Serializer$$Type = ($StorageTierUpgradeShapelessRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeShapelessRecipe$Serializer$$Original = $StorageTierUpgradeShapelessRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromVanillaShapelessRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShulkerBoxFromVanillaShapelessRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.ShulkerBoxFromVanillaShapelessRecipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShulkerBoxFromVanillaShapelessRecipe$Serializer extends $RecipeWrapperSerializer<($ShapelessRecipe), ($ShulkerBoxFromVanillaShapelessRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$Serializer$$Type = ($ShulkerBoxFromVanillaShapelessRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxFromVanillaShapelessRecipe$Serializer$$Original = $ShulkerBoxFromVanillaShapelessRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$StorageTierUpgradeRecipe} from "net.p3pp3rf1y.sophisticatedstorage.crafting.StorageTierUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $StorageTierUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($StorageTierUpgradeRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeRecipe$Serializer$$Type = ($StorageTierUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeRecipe$Serializer$$Original = $StorageTierUpgradeRecipe$Serializer;}
declare module "net.p3pp3rf1y.sophisticatedstorage.crafting.GenericWoodStorageRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IWrapperRecipe$$Interface} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $GenericWoodStorageRecipe extends $ShapedRecipe implements $IWrapperRecipe$$Interface<($ShapedRecipe)> {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getCompose"(): $Recipe
public "getSerializer"(): $RecipeSerializer<(never)>
get "compose"(): $Recipe
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericWoodStorageRecipe$$Type = ($GenericWoodStorageRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericWoodStorageRecipe$$Original = $GenericWoodStorageRecipe;}
