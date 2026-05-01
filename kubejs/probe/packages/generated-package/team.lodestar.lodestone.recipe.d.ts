declare module "team.lodestar.lodestone.recipe.NBTCarryRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $NBTCarryRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern
readonly "copyFrom": $Ingredient
static readonly "NAME": StringJS

constructor(arg0: $ShapedRecipe$$Type, arg1: $Ingredient$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$$Type = ($NBTCarryRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NBTCarryRecipe$$Original = $NBTCarryRecipe;}
declare module "team.lodestar.lodestone.recipe.NBTCarryRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NBTCarryRecipe, $NBTCarryRecipe$$Type} from "team.lodestar.lodestone.recipe.NBTCarryRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NBTCarryRecipe$Serializer implements $RecipeSerializer$$Interface<($NBTCarryRecipe)> {
static readonly "CODEC": $MapCodec<($NBTCarryRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NBTCarryRecipe)>

constructor()

public "codec"(): $MapCodec<($NBTCarryRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $NBTCarryRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NBTCarryRecipe)>
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $NBTCarryRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$Serializer$$Type = ($NBTCarryRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NBTCarryRecipe$Serializer$$Original = $NBTCarryRecipe$Serializer;}
