declare module "dev.shadowsoffire.apotheosis.recipe.CharmInfusionRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CharmInfusionRecipe} from "dev.shadowsoffire.apotheosis.recipe.CharmInfusionRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CharmInfusionRecipe$Serializer implements $RecipeSerializer$$Interface<($CharmInfusionRecipe)> {
static readonly "CODEC": $MapCodec<($CharmInfusionRecipe)>
static readonly "INSTANCE": $CharmInfusionRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CharmInfusionRecipe)>

constructor()

public "codec"(): $MapCodec<($CharmInfusionRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CharmInfusionRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharmInfusionRecipe$Serializer$$Type = ($CharmInfusionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharmInfusionRecipe$Serializer$$Original = $CharmInfusionRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.recipe.PotionCharmRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PotionCharmRecipe} from "dev.shadowsoffire.apotheosis.recipe.PotionCharmRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PotionCharmRecipe$Serializer implements $RecipeSerializer$$Interface<($PotionCharmRecipe)> {
static readonly "CODEC": $MapCodec<($PotionCharmRecipe)>
static readonly "INSTANCE": $PotionCharmRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PotionCharmRecipe)>

constructor()

public "codec"(): $MapCodec<($PotionCharmRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PotionCharmRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmRecipe$Serializer$$Type = ($PotionCharmRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionCharmRecipe$Serializer$$Original = $PotionCharmRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.recipe.CharmInfusionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantingStatRegistry$Stats, $EnchantingStatRegistry$Stats$$Type} from "dev.shadowsoffire.apothic_enchanting.table.EnchantingStatRegistry$Stats"
import {$InfusionRecipe$Serializer} from "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe$Serializer"
import {$InfusionRecipe} from "dev.shadowsoffire.apothic_enchanting.table.infusion.InfusionRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CharmInfusionRecipe extends $InfusionRecipe {
static readonly "SERIALIZER": $InfusionRecipe$Serializer
static readonly "NO_MAX": $EnchantingStatRegistry$Stats

constructor(arg0: $EnchantingStatRegistry$Stats$$Type, arg1: $EnchantingStatRegistry$Stats$$Type)

public "matches"(arg0: $ItemStack$$Type, arg1: float, arg2: float, arg3: float): boolean
public "assemble"(arg0: $ItemStack$$Type, arg1: float, arg2: float, arg3: float): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharmInfusionRecipe$$Type = ($CharmInfusionRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CharmInfusionRecipe$$Original = $CharmInfusionRecipe;}
declare module "dev.shadowsoffire.apotheosis.recipe.PotionCharmRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$PotionContents} from "net.minecraft.world.item.alchemy.PotionContents"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PotionCharmRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public static "findPotion"(arg0: $CraftingInput$$Type): $PotionContents
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCharmRecipe$$Type = ($PotionCharmRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionCharmRecipe$$Original = $PotionCharmRecipe;}
