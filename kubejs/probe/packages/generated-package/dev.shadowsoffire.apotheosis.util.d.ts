declare module "dev.shadowsoffire.apotheosis.util.ApothSmithingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"

export class $ApothSmithingRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
static readonly "ADDITION": integer
static readonly "TEMPLATE": integer
static readonly "BASE": integer
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type)

public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApothSmithingRecipe$$Type = ($ApothSmithingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApothSmithingRecipe$$Original = $ApothSmithingRecipe;}
declare module "dev.shadowsoffire.apotheosis.util.SingletonRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SingletonRecipeSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $Supplier$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonRecipeSerializer$$Type<T> = ($SingletonRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingletonRecipeSerializer$$Original<T> = $SingletonRecipeSerializer<(T)>;}
declare module "dev.shadowsoffire.apotheosis.util.IFestiveMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFestiveMarker$$Interface {
get "marked"(): boolean
set "marked"(value: boolean)
}

export class $IFestiveMarker implements $IFestiveMarker$$Interface {
 "isMarked"(): boolean
 "setMarked"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFestiveMarker$$Type = ($IFestiveMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFestiveMarker$$Original = $IFestiveMarker;}
declare module "dev.shadowsoffire.apotheosis.util.SizedUpgradeRecipe" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ReactiveSmithingRecipe$$Interface} from "dev.shadowsoffire.apotheosis.socket.ReactiveSmithingRecipe"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $SizedUpgradeRecipe extends $SmithingTransformRecipe implements $ReactiveSmithingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $SizedIngredient$$Type, arg3: $ItemStack$$Type)

public "base"(): $Ingredient
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "template"(): $Ingredient
public "addition"(): $SizedIngredient
public "getSerializer"(): $RecipeSerializer<(never)>
public "onCraft"(arg0: $Container$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedUpgradeRecipe$$Type = ($SizedUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizedUpgradeRecipe$$Original = $SizedUpgradeRecipe;}
declare module "dev.shadowsoffire.apotheosis.util.SizedUpgradeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedUpgradeRecipe} from "dev.shadowsoffire.apotheosis.util.SizedUpgradeRecipe"

export class $SizedUpgradeRecipe$Serializer implements $RecipeSerializer$$Interface<($SizedUpgradeRecipe)> {
static readonly "INSTANCE": $SizedUpgradeRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedUpgradeRecipe)>

constructor()

public "codec"(): $MapCodec<($SizedUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SizedUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedUpgradeRecipe$Serializer$$Type = ($SizedUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizedUpgradeRecipe$Serializer$$Original = $SizedUpgradeRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.util.DamageSourceExtension" {
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"

export interface $DamageSourceExtension$$Interface {
}

export class $DamageSourceExtension implements $DamageSourceExtension$$Interface {
 "removeTag"(arg0: $TagKey$$Type<($DamageType)>): void
 "addTag"(arg0: $TagKey$$Type<($DamageType)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourceExtension$$Type = ($DamageSourceExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSourceExtension$$Original = $DamageSourceExtension;}
