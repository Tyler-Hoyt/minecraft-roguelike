declare module "quek.undergarden.recipe.ItemInfusingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemInfusingRecipe} from "quek.undergarden.recipe.ItemInfusingRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ItemInfusingRecipe$Serializer implements $RecipeSerializer$$Interface<($ItemInfusingRecipe)> {
constructor()

public "codec"(): $MapCodec<($ItemInfusingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemInfusingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfusingRecipe$Serializer$$Type = ($ItemInfusingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfusingRecipe$Serializer$$Original = $ItemInfusingRecipe$Serializer;}
declare module "quek.undergarden.recipe.InfusingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$InfusingBookCategory} from "quek.undergarden.recipe.InfusingBookCategory"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InfusingRecipe$SlotType} from "quek.undergarden.recipe.InfusingRecipe$SlotType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $InfusingRecipe$$Interface extends $Recipe$$Interface<($SingleRecipeInput)> {
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "recipeSlotType"(): $InfusingRecipe$SlotType
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $InfusingRecipe implements $InfusingRecipe$$Interface {
 "getType"(): $RecipeType<(never)>
 "category"(): $InfusingBookCategory
 "isSpecial"(): boolean
 "experience"(): float
 "getToastSymbol"(): $ItemStack
 "infusingTime"(): integer
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getRecipeSlotType"(): $InfusingRecipe$SlotType
 "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
 "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusingRecipe$$Type = ($InfusingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfusingRecipe$$Original = $InfusingRecipe;}
declare module "quek.undergarden.recipe.InfusingRecipe$SlotType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $InfusingRecipe$SlotType extends $Enum<($InfusingRecipe$SlotType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($InfusingRecipe$SlotType)>
static readonly "UTHERIUM": $InfusingRecipe$SlotType
static readonly "ROGDORIUM": $InfusingRecipe$SlotType

public static "values"(): ($InfusingRecipe$SlotType)[]
public static "valueOf"(arg0: StringJS): $InfusingRecipe$SlotType
public "getSlotIndex"(): integer
public "getSerializedName"(): StringJS
public "getValidItems"(): $TagKey<($Item)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "slotIndex"(): integer
get "serializedName"(): StringJS
get "validItems"(): $TagKey<($Item)>
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusingRecipe$SlotType$$Type = (("utherium") | ("rogdorium"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfusingRecipe$SlotType$$Original = $InfusingRecipe$SlotType;}
declare module "quek.undergarden.recipe.InfuserConversionRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$InfuserConversionRecipe} from "quek.undergarden.recipe.InfuserConversionRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $InfuserConversionRecipe$Serializer implements $RecipeSerializer$$Interface<($InfuserConversionRecipe)> {
constructor()

public "codec"(): $MapCodec<($InfuserConversionRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($InfuserConversionRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfuserConversionRecipe$Serializer$$Type = ($InfuserConversionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfuserConversionRecipe$Serializer$$Original = $InfuserConversionRecipe$Serializer;}
declare module "quek.undergarden.recipe.ItemInfusingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InfusingRecipe$SlotType} from "quek.undergarden.recipe.InfusingRecipe$SlotType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$InfusingBookCategory, $InfusingBookCategory$$Type} from "quek.undergarden.recipe.InfusingBookCategory"
import {$InfusingRecipe$$Interface} from "quek.undergarden.recipe.InfusingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $ItemInfusingRecipe extends $Record implements $InfusingRecipe$$Interface {
constructor(category: $InfusingBookCategory$$Type, infusableItems: $Ingredient$$Type, infusingTime: integer, experience: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $InfusingBookCategory
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "experience"(): float
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "infusingTime"(): integer
public "infusableItems"(): $Ingredient
public "getRecipeSlotType"(): $InfusingRecipe$SlotType
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "recipeSlotType"(): $InfusingRecipe$SlotType
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfusingRecipe$$Type = ({"category"?: $InfusingBookCategory$$Type, "experience"?: float, "infusingTime"?: integer, "infusableItems"?: $Ingredient$$Type}) | ([category?: $InfusingBookCategory$$Type, experience?: float, infusingTime?: integer, infusableItems?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfusingRecipe$$Original = $ItemInfusingRecipe;}
declare module "quek.undergarden.recipe.InfusingBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $InfusingBookCategory extends $Enum<($InfusingBookCategory)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($InfusingBookCategory)>
static readonly "CORRUPTING": $InfusingBookCategory
static readonly "PURIFYING": $InfusingBookCategory
static readonly "MISC": $InfusingBookCategory

public static "values"(): ($InfusingBookCategory)[]
public static "valueOf"(arg0: StringJS): $InfusingBookCategory
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusingBookCategory$$Type = (("purifying") | ("corrupting") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfusingBookCategory$$Original = $InfusingBookCategory;}
declare module "quek.undergarden.recipe.InfuserConversionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InfusingRecipe$SlotType, $InfusingRecipe$SlotType$$Type} from "quek.undergarden.recipe.InfusingRecipe$SlotType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$InfusingBookCategory, $InfusingBookCategory$$Type} from "quek.undergarden.recipe.InfusingBookCategory"
import {$InfusingRecipe$$Interface} from "quek.undergarden.recipe.InfusingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $InfuserConversionRecipe extends $Record implements $InfusingRecipe$$Interface {
constructor(category: $InfusingBookCategory$$Type, ingredient: $Ingredient$$Type, result: $ItemStack$$Type, infusingTime: integer, experience: float, slotType: $InfusingRecipe$SlotType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "category"(): $InfusingBookCategory
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "ingredient"(): $Ingredient
public "experience"(): float
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "infusingTime"(): integer
public "getRecipeSlotType"(): $InfusingRecipe$SlotType
public "slotType"(): $InfusingRecipe$SlotType
public "getType"(): $RecipeType<(never)>
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "recipeSlotType"(): $InfusingRecipe$SlotType
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfuserConversionRecipe$$Type = ({"category"?: $InfusingBookCategory$$Type, "experience"?: float, "infusingTime"?: integer, "ingredient"?: $Ingredient$$Type, "result"?: $ItemStack$$Type, "slotType"?: $InfusingRecipe$SlotType$$Type}) | ([category?: $InfusingBookCategory$$Type, experience?: float, infusingTime?: integer, ingredient?: $Ingredient$$Type, result?: $ItemStack$$Type, slotType?: $InfusingRecipe$SlotType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfuserConversionRecipe$$Original = $InfuserConversionRecipe;}
