declare module "io.redspace.ironsspellbooks.recipe_types.NoAdditionSmithingTransformRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$NoAdditionSmithingTransformRecipe} from "io.redspace.ironsspellbooks.recipe_types.NoAdditionSmithingTransformRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NoAdditionSmithingTransformRecipe$Serializer implements $RecipeSerializer$$Interface<($NoAdditionSmithingTransformRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NoAdditionSmithingTransformRecipe)>

constructor()

public "codec"(): $MapCodec<($NoAdditionSmithingTransformRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NoAdditionSmithingTransformRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoAdditionSmithingTransformRecipe$Serializer$$Type = ($NoAdditionSmithingTransformRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoAdditionSmithingTransformRecipe$Serializer$$Original = $NoAdditionSmithingTransformRecipe$Serializer;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.EmptyAlchemistCauldronRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EmptyAlchemistCauldronRecipe} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.EmptyAlchemistCauldronRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EmptyAlchemistCauldronRecipe$Serializer implements $RecipeSerializer$$Interface<($EmptyAlchemistCauldronRecipe)> {
static readonly "CODEC": $MapCodec<($EmptyAlchemistCauldronRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EmptyAlchemistCauldronRecipe)>

constructor()

public "codec"(): $MapCodec<($EmptyAlchemistCauldronRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EmptyAlchemistCauldronRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyAlchemistCauldronRecipe$Serializer$$Type = ($EmptyAlchemistCauldronRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyAlchemistCauldronRecipe$Serializer$$Original = $EmptyAlchemistCauldronRecipe$Serializer;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.EmptyAlchemistCauldronRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$EmptyAlchemistCauldronRecipe$Input, $EmptyAlchemistCauldronRecipe$Input$$Type} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.EmptyAlchemistCauldronRecipe$Input"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $EmptyAlchemistCauldronRecipe extends $Record implements $Recipe$$Interface<($EmptyAlchemistCauldronRecipe$Input)> {
constructor(input: $Ingredient$$Type, result: $ItemStack$$Type, fluid: $FluidStack$$Type, emptySound: $Holder$$Type<($SoundEvent)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EmptyAlchemistCauldronRecipe$Input$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $EmptyAlchemistCauldronRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "fluid"(): $FluidStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "emptySound"(): $Holder<($SoundEvent)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $EmptyAlchemistCauldronRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyAlchemistCauldronRecipe$$Type = ({"result"?: $ItemStack$$Type, "fluid"?: $FluidStack$$Type, "emptySound"?: $Holder$$Type<($SoundEvent)>, "input"?: $Ingredient$$Type}) | ([result?: $ItemStack$$Type, fluid?: $FluidStack$$Type, emptySound?: $Holder$$Type<($SoundEvent)>, input?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyAlchemistCauldronRecipe$$Original = $EmptyAlchemistCauldronRecipe;}
declare module "io.redspace.ironsspellbooks.recipe_types.NoAdditionSmithingTransformRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $NoAdditionSmithingTransformRecipe implements $SmithingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getBase"(): $Ingredient
public "getResult"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getTemplate"(): $Ingredient
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
get "result"(): $Ingredient
get "incomplete"(): boolean
get "template"(): $Ingredient
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
export type $NoAdditionSmithingTransformRecipe$$Type = ($NoAdditionSmithingTransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoAdditionSmithingTransformRecipe$$Original = $NoAdditionSmithingTransformRecipe;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BrewAlchemistCauldronRecipe} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BrewAlchemistCauldronRecipe$Serializer implements $RecipeSerializer$$Interface<($BrewAlchemistCauldronRecipe)> {
static readonly "CODEC": $MapCodec<($BrewAlchemistCauldronRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BrewAlchemistCauldronRecipe)>

constructor()

public "codec"(): $MapCodec<($BrewAlchemistCauldronRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BrewAlchemistCauldronRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewAlchemistCauldronRecipe$Serializer$$Type = ($BrewAlchemistCauldronRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewAlchemistCauldronRecipe$Serializer$$Original = $BrewAlchemistCauldronRecipe$Serializer;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.EmptyAlchemistCauldronRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $EmptyAlchemistCauldronRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(item: $ItemStack$$Type, fluid: $FluidStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "fluid"(): $FluidStack
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
export type $EmptyAlchemistCauldronRecipe$Input$$Type = ({"fluid"?: $FluidStack$$Type, "item"?: $ItemStack$$Type}) | ([fluid?: $FluidStack$$Type, item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyAlchemistCauldronRecipe$Input$$Original = $EmptyAlchemistCauldronRecipe$Input;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe" {
import {$BrewAlchemistCauldronRecipe$Builder} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$BrewAlchemistCauldronRecipe$Input, $BrewAlchemistCauldronRecipe$Input$$Type} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe$Input"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $BrewAlchemistCauldronRecipe extends $Record implements $Recipe$$Interface<($BrewAlchemistCauldronRecipe$Input)> {
constructor(fluidIn: $FluidStack$$Type, reagent: $Ingredient$$Type, results: $List$$Type<($FluidStack$$Type)>, byproduct: ($ItemStack$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $BrewAlchemistCauldronRecipe$Input$$Type, arg1: $Level$$Type): boolean
public static "builder"(): $BrewAlchemistCauldronRecipe$Builder
public "getType"(): $RecipeType<(never)>
public "results"(): $List<($FluidStack)>
public "assemble"(arg0: $BrewAlchemistCauldronRecipe$Input$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "reagent"(): $Ingredient
public "fluidIn"(): $FluidStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "byproduct"(): $Optional<($ItemStack)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $BrewAlchemistCauldronRecipe$Input$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
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
export type $BrewAlchemistCauldronRecipe$$Type = ({"results"?: $List$$Type<($FluidStack$$Type)>, "reagent"?: $Ingredient$$Type, "byproduct"?: ($ItemStack$$Type)?, "fluidIn"?: $FluidStack$$Type}) | ([results?: $List$$Type<($FluidStack$$Type)>, reagent?: $Ingredient$$Type, byproduct?: ($ItemStack$$Type)?, fluidIn?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewAlchemistCauldronRecipe$$Original = $BrewAlchemistCauldronRecipe;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe$Input" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $BrewAlchemistCauldronRecipe$Input extends $Record implements $RecipeInput$$Interface {
constructor(fluidIn: $FluidStack$$Type, reagent: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "reagent"(): $ItemStack
public "fluidIn"(): $FluidStack
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
export type $BrewAlchemistCauldronRecipe$Input$$Type = ({"reagent"?: $ItemStack$$Type, "fluidIn"?: $FluidStack$$Type}) | ([reagent?: $ItemStack$$Type, fluidIn?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewAlchemistCauldronRecipe$Input$$Original = $BrewAlchemistCauldronRecipe$Input;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.BrewAlchemistCauldronRecipe$Builder" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeBuilder, $RecipeBuilder$$Interface} from "net.minecraft.data.recipes.RecipeBuilder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BrewAlchemistCauldronRecipe$Builder implements $RecipeBuilder$$Interface {
constructor()

public "group"(arg0: StringJS): $RecipeBuilder
public "save"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type): void
public "save"(arg0: $RecipeOutput$$Type): void
public "withResult"(arg0: $Holder$$Type<($Fluid)>, arg1: integer): $BrewAlchemistCauldronRecipe$Builder
public "withResult"(arg0: $FluidStack$$Type): $BrewAlchemistCauldronRecipe$Builder
public "getResult"(): $Item
public "withReagent"(arg0: $Item$$Type): $BrewAlchemistCauldronRecipe$Builder
public "withReagent"(arg0: $ItemStack$$Type): $BrewAlchemistCauldronRecipe$Builder
public "withReagent"(arg0: $TagKey$$Type<($Item)>): $BrewAlchemistCauldronRecipe$Builder
public "unlockedBy"(arg0: StringJS, arg1: $Criterion$$Type<(never)>): $RecipeBuilder
public "saveSoak"(arg0: $RecipeOutput$$Type): void
public "withInput"(arg0: $Holder$$Type<($Fluid)>, arg1: integer): $BrewAlchemistCauldronRecipe$Builder
public "withInput"(arg0: $FluidStack$$Type): $BrewAlchemistCauldronRecipe$Builder
public "withByproduct"(arg0: $ItemStack$$Type): $BrewAlchemistCauldronRecipe$Builder
public "withByproduct"(arg0: $Item$$Type): $BrewAlchemistCauldronRecipe$Builder
public "withByproduct"(arg0: $Holder$$Type<($Item)>): $BrewAlchemistCauldronRecipe$Builder
public "save"(arg0: $RecipeOutput$$Type, arg1: StringJS): void
public static "getDefaultRecipeId"(arg0: $ItemLike$$Type): $ResourceLocation
public static "determineBookCategory"(arg0: $RecipeCategory$$Type): $CraftingBookCategory
get "result"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewAlchemistCauldronRecipe$Builder$$Type = ($BrewAlchemistCauldronRecipe$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewAlchemistCauldronRecipe$Builder$$Original = $BrewAlchemistCauldronRecipe$Builder;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.FillAlchemistCauldronRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FillAlchemistCauldronRecipe} from "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.FillAlchemistCauldronRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FillAlchemistCauldronRecipe$Serializer implements $RecipeSerializer$$Interface<($FillAlchemistCauldronRecipe)> {
static readonly "CODEC": $MapCodec<($FillAlchemistCauldronRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FillAlchemistCauldronRecipe)>

constructor()

public "codec"(): $MapCodec<($FillAlchemistCauldronRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FillAlchemistCauldronRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FillAlchemistCauldronRecipe$Serializer$$Type = ($FillAlchemistCauldronRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FillAlchemistCauldronRecipe$Serializer$$Original = $FillAlchemistCauldronRecipe$Serializer;}
declare module "io.redspace.ironsspellbooks.recipe_types.alchemist_cauldron.FillAlchemistCauldronRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $FillAlchemistCauldronRecipe extends $Record implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(input: $Ingredient$$Type, returned: $ItemStack$$Type, result: $FluidStack$$Type, mustFitAll: boolean, fillSound: $Holder$$Type<($SoundEvent)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $FluidStack
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "returned"(): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "fillSound"(): $Holder<($SoundEvent)>
public "mustFitAll"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FillAlchemistCauldronRecipe$$Type = ({"mustFitAll"?: boolean, "result"?: $FluidStack$$Type, "returned"?: $ItemStack$$Type, "input"?: $Ingredient$$Type, "fillSound"?: $Holder$$Type<($SoundEvent)>}) | ([mustFitAll?: boolean, result?: $FluidStack$$Type, returned?: $ItemStack$$Type, input?: $Ingredient$$Type, fillSound?: $Holder$$Type<($SoundEvent)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FillAlchemistCauldronRecipe$$Original = $FillAlchemistCauldronRecipe;}
