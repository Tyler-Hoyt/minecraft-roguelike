declare module "appeng.recipes.game.AddItemUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AddItemUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($AddItemUpgradeRecipe)>
static readonly "INSTANCE": $AddItemUpgradeRecipe
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AddItemUpgradeRecipe)>

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddItemUpgradeRecipe$$Type = ($AddItemUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddItemUpgradeRecipe$$Original = $AddItemUpgradeRecipe;}
declare module "appeng.recipes.game.AddItemUpgradeRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AddItemUpgradeRecipe} from "appeng.recipes.game.AddItemUpgradeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AddItemUpgradeRecipeSerializer implements $RecipeSerializer$$Interface<($AddItemUpgradeRecipe)> {
static readonly "INSTANCE": $AddItemUpgradeRecipeSerializer

constructor()

public "codec"(): $MapCodec<($AddItemUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddItemUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddItemUpgradeRecipeSerializer$$Type = ($AddItemUpgradeRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddItemUpgradeRecipeSerializer$$Original = $AddItemUpgradeRecipeSerializer;}
declare module "appeng.recipes.game.CraftingUnitTransformRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$CraftingUnitTransformRecipe} from "appeng.recipes.game.CraftingUnitTransformRecipe"

export class $CraftingUnitTransformRecipeSerializer implements $RecipeSerializer$$Interface<($CraftingUnitTransformRecipe)> {
static readonly "INSTANCE": $CraftingUnitTransformRecipeSerializer

public "codec"(): $MapCodec<($CraftingUnitTransformRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CraftingUnitTransformRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUnitTransformRecipeSerializer$$Type = ($CraftingUnitTransformRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingUnitTransformRecipeSerializer$$Original = $CraftingUnitTransformRecipeSerializer;}
declare module "appeng.recipes.game.RemoveItemUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RemoveItemUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($RemoveItemUpgradeRecipe)>
static readonly "INSTANCE": $RemoveItemUpgradeRecipe
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RemoveItemUpgradeRecipe)>

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveItemUpgradeRecipe$$Type = ($RemoveItemUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoveItemUpgradeRecipe$$Original = $RemoveItemUpgradeRecipe;}
declare module "appeng.recipes.game.StorageCellDisassemblyRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StorageCellDisassemblyRecipe} from "appeng.recipes.game.StorageCellDisassemblyRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $StorageCellDisassemblyRecipeSerializer implements $RecipeSerializer$$Interface<($StorageCellDisassemblyRecipe)> {
static readonly "INSTANCE": $StorageCellDisassemblyRecipeSerializer

public "codec"(): $MapCodec<($StorageCellDisassemblyRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellDisassemblyRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellDisassemblyRecipeSerializer$$Type = ($StorageCellDisassemblyRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCellDisassemblyRecipeSerializer$$Original = $StorageCellDisassemblyRecipeSerializer;}
declare module "appeng.recipes.game.StorageCellDisassemblyRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $StorageCellDisassemblyRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($StorageCellDisassemblyRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellDisassemblyRecipe)>

constructor(arg0: $Item$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getStorageCell"(): $Item
public "canDisassemble"(): boolean
public "getCellDisassemblyItems"(): $List<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public static "getDisassemblyResult"(arg0: $Level$$Type, arg1: $Item$$Type): $List<($ItemStack)>
get "type"(): $RecipeType<(never)>
get "storageCell"(): $Item
get "cellDisassemblyItems"(): $List<($ItemStack)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellDisassemblyRecipe$$Type = ($StorageCellDisassemblyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCellDisassemblyRecipe$$Original = $StorageCellDisassemblyRecipe;}
declare module "appeng.recipes.game.StorageCellUpgradeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $StorageCellUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($StorageCellUpgradeRecipe)>
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellUpgradeRecipe)>

constructor(arg0: $Item$$Type, arg1: $Item$$Type, arg2: $Item$$Type, arg3: $Item$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultCell"(): $Item
public "getInputComponent"(): $Item
public "getResultComponent"(): $Item
public "getInputCell"(): $Item
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "resultCell"(): $Item
get "inputComponent"(): $Item
get "resultComponent"(): $Item
get "inputCell"(): $Item
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellUpgradeRecipe$$Type = ($StorageCellUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCellUpgradeRecipe$$Original = $StorageCellUpgradeRecipe;}
declare module "appeng.recipes.game.CraftingUnitTransformRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CraftingUnitTransformRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($CraftingUnitTransformRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CraftingUnitTransformRecipe)>

constructor(arg0: $Block$$Type, arg1: $Item$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getUpgradeItem"(): $Item
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public static "getUpgradedBlock"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $Block
public "getUpgradedBlock"(): $Block
public static "getRemovedUpgrade"(arg0: $Level$$Type, arg1: $Block$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "type"(): $RecipeType<(never)>
get "upgradeItem"(): $Item
get "serializer"(): $RecipeSerializer<(never)>
get "upgradedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUnitTransformRecipe$$Type = ($CraftingUnitTransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingUnitTransformRecipe$$Original = $CraftingUnitTransformRecipe;}
declare module "appeng.recipes.game.RemoveItemUpgradeRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RemoveItemUpgradeRecipe} from "appeng.recipes.game.RemoveItemUpgradeRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RemoveItemUpgradeRecipeSerializer implements $RecipeSerializer$$Interface<($RemoveItemUpgradeRecipe)> {
static readonly "INSTANCE": $RemoveItemUpgradeRecipeSerializer

constructor()

public "codec"(): $MapCodec<($RemoveItemUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RemoveItemUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveItemUpgradeRecipeSerializer$$Type = ($RemoveItemUpgradeRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoveItemUpgradeRecipeSerializer$$Original = $RemoveItemUpgradeRecipeSerializer;}
declare module "appeng.recipes.game.StorageCellUpgradeRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StorageCellUpgradeRecipe} from "appeng.recipes.game.StorageCellUpgradeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $StorageCellUpgradeRecipeSerializer implements $RecipeSerializer$$Interface<($StorageCellUpgradeRecipe)> {
static readonly "INSTANCE": $StorageCellUpgradeRecipeSerializer

constructor()

public "codec"(): $MapCodec<($StorageCellUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellUpgradeRecipeSerializer$$Type = ($StorageCellUpgradeRecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageCellUpgradeRecipeSerializer$$Original = $StorageCellUpgradeRecipeSerializer;}
