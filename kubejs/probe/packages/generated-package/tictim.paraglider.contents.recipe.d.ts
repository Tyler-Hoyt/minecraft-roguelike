declare module "tictim.paraglider.contents.recipe.SimpleBargain" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Bargain$NoInput$$Type} from "tictim.paraglider.api.bargain.Bargain$NoInput"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuantifiedIngredient, $QuantifiedIngredient$$Type} from "tictim.paraglider.contents.recipe.QuantifiedIngredient"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$QuantifiedItem, $QuantifiedItem$$Type} from "tictim.paraglider.contents.recipe.QuantifiedItem"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Bargain, $Bargain$$Interface} from "tictim.paraglider.api.bargain.Bargain"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BargainResult} from "tictim.paraglider.api.bargain.BargainResult"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BargainPreview} from "tictim.paraglider.api.bargain.BargainPreview"

export class $SimpleBargain implements $Bargain$$Interface {
constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($QuantifiedIngredient$$Type)>, arg2: integer, arg3: integer, arg4: integer, arg5: $List$$Type<($QuantifiedItem$$Type)>, arg6: integer, arg7: integer, arg8: integer, arg9: $Set$$Type<(StringJS)>)

public "getType"(): $RecipeType<($Bargain)>
public "getItemOffers"(): $List<($QuantifiedItem)>
public "getEssenceDemands"(): integer
public "getEssenceOffers"(): integer
public "getItemDemands"(): $List<($QuantifiedIngredient)>
public "getBargainType"(): $ResourceLocation
public "getUserTags"(): $Set<(StringJS)>
public "getStaminaVesselOffers"(): integer
public "getHeartContainerDemands"(): integer
public "getHeartContainerOffers"(): integer
public "getStaminaVesselDemands"(): integer
public "getSerializer"(): $RecipeSerializer<($SimpleBargain)>
public "bargain"(arg0: $Player$$Type, arg1: boolean): $BargainResult
public "previewDemands"(): $List<($BargainPreview<(never)>)>
public "getBargainTags"(): $Set<(StringJS)>
public "countDemands"(arg0: $Player$$Type): (integer)[]
public "isAvailableFor"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "previewOffers"(): $List<($BargainPreview<(never)>)>
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Bargain$NoInput$$Type, arg1: $Level$$Type): boolean
/**
 * 
 * @deprecated
 */
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Bargain$NoInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "isSpecial"(): boolean
/**
 * 
 * @deprecated
 */
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "getIngredients"(): $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
public "getRemainingItems"(arg0: $Bargain$NoInput$$Type): $NonNullList<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
/**
 * 
 * @deprecated
 */
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "type"(): $RecipeType<($Bargain)>
get "itemOffers"(): $List<($QuantifiedItem)>
get "essenceDemands"(): integer
get "essenceOffers"(): integer
get "itemDemands"(): $List<($QuantifiedIngredient)>
get "bargainType"(): $ResourceLocation
get "userTags"(): $Set<(StringJS)>
get "staminaVesselOffers"(): integer
get "heartContainerDemands"(): integer
get "heartContainerOffers"(): integer
get "staminaVesselDemands"(): integer
get "serializer"(): $RecipeSerializer<($SimpleBargain)>
get "bargainTags"(): $Set<(StringJS)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBargain$$Type = ($SimpleBargain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleBargain$$Original = $SimpleBargain;}
declare module "tictim.paraglider.contents.recipe.CosmeticRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$CraftingRecipe, $CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CosmeticRecipe implements $CraftingRecipe$$Interface {
constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $List$$Type<($Ingredient$$Type)>, arg4: $Item$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<($CraftingRecipe)>
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<($CraftingRecipe)>
get "group"(): StringJS
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticRecipe$$Type = ($CosmeticRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CosmeticRecipe$$Original = $CosmeticRecipe;}
declare module "tictim.paraglider.contents.recipe.CosmeticRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$CosmeticRecipe} from "tictim.paraglider.contents.recipe.CosmeticRecipe"

export class $CosmeticRecipe$Serializer implements $RecipeSerializer$$Interface<($CosmeticRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CosmeticRecipe)>

constructor()

public "codec"(): $MapCodec<($CosmeticRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CosmeticRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticRecipe$Serializer$$Type = ($CosmeticRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CosmeticRecipe$Serializer$$Original = $CosmeticRecipe$Serializer;}
declare module "tictim.paraglider.contents.recipe.SimpleBargainSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SimpleBargain} from "tictim.paraglider.contents.recipe.SimpleBargain"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SimpleBargainSerializer implements $RecipeSerializer$$Interface<($SimpleBargain)> {
constructor()

public "codec"(): $MapCodec<($SimpleBargain)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleBargain)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBargainSerializer$$Type = ($SimpleBargainSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleBargainSerializer$$Original = $SimpleBargainSerializer;}
declare module "tictim.paraglider.contents.recipe.QuantifiedItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $QuantifiedItem extends $Record {
static readonly "CODEC": $MapCodec<($QuantifiedItem)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($QuantifiedItem)>

constructor(arg0: $Item$$Type, arg1: integer)
constructor(item: $ItemStack$$Type, quantity: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
public "getItem"(): $ItemStack
public "quantity"(): integer
public "getQuantity"(): integer
public "getItemWithQuantity"(): $ItemStack
get "itemWithQuantity"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantifiedItem$$Type = ({"quantity"?: integer, "item"?: $ItemStack$$Type}) | ([quantity?: integer, item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantifiedItem$$Original = $QuantifiedItem;}
declare module "tictim.paraglider.contents.recipe.QuantifiedIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $QuantifiedIngredient extends $Record implements $Predicate$$Interface<($ItemStack)> {
static readonly "CODEC": $MapCodec<($QuantifiedIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($QuantifiedIngredient)>

constructor(ingredient: $Ingredient$$Type, quantity: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "ingredient"(): $Ingredient
public "quantity"(): integer
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantifiedIngredient$$Type = ({"ingredient"?: $Ingredient$$Type, "quantity"?: integer}) | ([ingredient?: $Ingredient$$Type, quantity?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantifiedIngredient$$Original = $QuantifiedIngredient;}
