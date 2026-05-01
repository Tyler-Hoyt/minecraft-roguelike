declare module "com.aetherteam.aether.recipe.recipes.ban.ItemBanRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractPlacementBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PlacementBanRecipeSerializer} from "com.aetherteam.aether.recipe.serializer.PlacementBanRecipeSerializer"
import {$ItemBanRecipe, $ItemBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.ItemBanRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ItemBanRecipe$Serializer extends $PlacementBanRecipeSerializer<($ItemStack), ($Ingredient), ($SingleRecipeInput), ($ItemBanRecipe)> {
constructor()

public "codec"(): $MapCodec<($ItemBanRecipe)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $ItemBanRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemBanRecipe)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AbstractPlacementBanRecipe$$Type): void
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $ItemBanRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBanRecipe$Serializer$$Type = ($ItemBanRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBanRecipe$Serializer$$Original = $ItemBanRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.serializer.BiomeParameterRecipeSerializer$Factory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$BlockPropertyPair, $BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBiomeParameterRecipe, $AbstractBiomeParameterRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.block.AbstractBiomeParameterRecipe"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export interface $BiomeParameterRecipeSerializer$Factory$$Interface<T extends $AbstractBiomeParameterRecipe> {

(arg0: $Optional<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>)>, arg1: $BlockStateIngredient, arg2: $BlockPropertyPair, arg3: $Optional<($ResourceLocation)>): T
}

export class $BiomeParameterRecipeSerializer$Factory<T extends $AbstractBiomeParameterRecipe> implements $BiomeParameterRecipeSerializer$Factory$$Interface {
 "create"(arg0: ($Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>)?, arg1: $BlockStateIngredient$$Type, arg2: $BlockPropertyPair$$Type, arg3: ($ResourceLocation$$Type)?): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeParameterRecipeSerializer$Factory$$Type<T> = ((arg0: $Optional<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>)>, arg1: $BlockStateIngredient, arg2: $BlockPropertyPair, arg3: $Optional<($ResourceLocation)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeParameterRecipeSerializer$Factory$$Original<T> = $BiomeParameterRecipeSerializer$Factory<(T)>;}
declare module "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MatchEventRecipe$$Interface {
}

export class $MatchEventRecipe implements $MatchEventRecipe$$Interface {
 "convert"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: ($CacheableFunction$$Type)?): boolean
 "matches"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $RecipeType$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchEventRecipe$$Type = ($MatchEventRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatchEventRecipe$$Original = $MatchEventRecipe;}
declare module "com.aetherteam.aether.recipe.serializer.PlacementBanRecipeSerializer$CookieBaker" {
import {$AbstractPlacementBanRecipe, $AbstractPlacementBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Function3$$Interface} from "com.mojang.datafixers.util.Function3"
import {$BiFunction} from "java.util.function.BiFunction"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export interface $PlacementBanRecipeSerializer$CookieBaker$$Interface<T, S extends $Predicate<(object)>, R extends $RecipeInput, F extends $AbstractPlacementBanRecipe<(object), (object), (object)>> extends $Function3$$Interface<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>), ($Optional<($BlockStateIngredient)>), (S), (F)> {

(arg0: $Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>, arg1: $Optional<($BlockStateIngredient)>, arg2: S): F
}

export class $PlacementBanRecipeSerializer$CookieBaker<T, S extends $Predicate<(object)>, R extends $RecipeInput, F extends $AbstractPlacementBanRecipe<(object), (object), (object)>> implements $PlacementBanRecipeSerializer$CookieBaker$$Interface {
 "apply"(arg0: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg1: ($BlockStateIngredient$$Type)?, arg2: S): F
 "apply"(arg0: any, arg1: any, arg2: any): any
 "curry"(): $Function<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>), ($BiFunction<($Optional<($BlockStateIngredient)>), (S), (F)>)>
 "curry2"(): $BiFunction<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>), ($Optional<($BlockStateIngredient)>), ($Function<(S), (F)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanRecipeSerializer$CookieBaker$$Type<T, S, R, F> = ((arg0: $Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>, arg1: $Optional<($BlockStateIngredient)>, arg2: S) => F);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanRecipeSerializer$CookieBaker$$Original<T, S, R, F> = $PlacementBanRecipeSerializer$CookieBaker<(T), (S), (R), (F)>;}
declare module "com.aetherteam.aether.recipe.recipes.ban.BlockBanRecipe" {
import {$AbstractPlacementBanRecipe} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$Optional$$Type} from "java.util.Optional"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockStateRecipeInput} from "com.aetherteam.nitrogen.recipe.input.BlockStateRecipeInput"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBanRecipe extends $AbstractPlacementBanRecipe<($BlockState), ($BlockStateIngredient), ($BlockStateRecipeInput)> {
constructor(arg0: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg1: ($BlockStateIngredient$$Type)?, arg2: $BlockStateIngredient$$Type)
constructor(arg0: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg1: ($BlockStateIngredient$$Type)?)

public "getSerializer"(): $RecipeSerializer<(never)>
public "banBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBanRecipe$$Type = ($BlockBanRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBanRecipe$$Original = $BlockBanRecipe;}
declare module "com.aetherteam.aether.recipe.serializer.BiomeParameterRecipeSerializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BiomeParameterRecipeSerializer$Factory$$Type} from "com.aetherteam.aether.recipe.serializer.BiomeParameterRecipeSerializer$Factory"
import {$AbstractBlockStateRecipe$Factory$$Type} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe$Factory"
import {$AbstractBiomeParameterRecipe, $AbstractBiomeParameterRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.block.AbstractBiomeParameterRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AbstractBlockStateRecipe, $AbstractBlockStateRecipe$$Type} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$BlockStateRecipeSerializer} from "com.aetherteam.nitrogen.recipe.serializer.BlockStateRecipeSerializer"

export class $BiomeParameterRecipeSerializer<T extends $AbstractBiomeParameterRecipe> extends $BlockStateRecipeSerializer<(T)> {
constructor(arg0: $BiomeParameterRecipeSerializer$Factory$$Type<(T)>, arg1: $AbstractBlockStateRecipe$Factory$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $AbstractBlockStateRecipe
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AbstractBlockStateRecipe$$Type): void
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeParameterRecipeSerializer$$Type<T> = ($BiomeParameterRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeParameterRecipeSerializer$$Original<T> = $BiomeParameterRecipeSerializer<(T)>;}
declare module "com.aetherteam.aether.recipe.AetherBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AetherBookCategory extends $Enum<($AetherBookCategory)> implements $StringRepresentable$$Interface {
static readonly "FREEZABLE_BLOCKS": $AetherBookCategory
static readonly "ENCHANTING_MISC": $AetherBookCategory
static readonly "CODEC": $StringRepresentable$EnumCodec<($AetherBookCategory)>
static readonly "ENCHANTING_BLOCKS": $AetherBookCategory
static readonly "ENCHANTING_REPAIR": $AetherBookCategory
static readonly "ENCHANTING_FOOD": $AetherBookCategory
static readonly "FREEZABLE_MISC": $AetherBookCategory
static readonly "UNKNOWN": $AetherBookCategory

public static "values"(): ($AetherBookCategory)[]
public static "valueOf"(arg0: StringJS): $AetherBookCategory
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
export type $AetherBookCategory$$Type = (("enchanting_food") | ("enchanting_blocks") | ("enchanting_misc") | ("enchanting_repair") | ("freezable_blocks") | ("freezable_misc") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AetherBookCategory$$Original = $AetherBookCategory;}
declare module "com.aetherteam.aether.recipe.recipes.item.EnchantingRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$EnchantingRecipe} from "com.aetherteam.aether.recipe.recipes.item.EnchantingRecipe"
import {$AetherCookingSerializer} from "com.aetherteam.aether.recipe.serializer.AetherCookingSerializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchantingRecipe$Serializer extends $AetherCookingSerializer<($EnchantingRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingRecipe$Serializer$$Type = ($EnchantingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingRecipe$Serializer$$Original = $EnchantingRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.AmbrosiumRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$AmbrosiumRecipe} from "com.aetherteam.aether.recipe.recipes.block.AmbrosiumRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockStateRecipeSerializer} from "com.aetherteam.nitrogen.recipe.serializer.BlockStateRecipeSerializer"

export class $AmbrosiumRecipe$Serializer extends $BlockStateRecipeSerializer<($AmbrosiumRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbrosiumRecipe$Serializer$$Type = ($AmbrosiumRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmbrosiumRecipe$Serializer$$Original = $AmbrosiumRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.SwetBallRecipe$Serializer" {
import {$BiomeParameterRecipeSerializer} from "com.aetherteam.aether.recipe.serializer.BiomeParameterRecipeSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SwetBallRecipe} from "com.aetherteam.aether.recipe.recipes.block.SwetBallRecipe"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SwetBallRecipe$Serializer extends $BiomeParameterRecipeSerializer<($SwetBallRecipe)> {
constructor()

public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $AbstractBlockStateRecipe
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwetBallRecipe$Serializer$$Type = ($SwetBallRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwetBallRecipe$Serializer$$Original = $SwetBallRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.item.AltarRepairRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$AbstractAetherCookingRecipe} from "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AltarRepairRecipe extends $AbstractAetherCookingRecipe {
readonly "ingredient": $Ingredient

constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: integer)

public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRepairRecipe$$Type = ($AltarRepairRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AltarRepairRecipe$$Original = $AltarRepairRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.item.IncubationRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IncubationRecipe, $IncubationRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.item.IncubationRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $IncubationRecipe$Serializer implements $RecipeSerializer$$Interface<($IncubationRecipe)> {
constructor()

public "codec"(): $MapCodec<($IncubationRecipe)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $IncubationRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IncubationRecipe)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $IncubationRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncubationRecipe$Serializer$$Type = ($IncubationRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncubationRecipe$Serializer$$Original = $IncubationRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.ban.BlockBanRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractPlacementBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockStateRecipeInput} from "com.aetherteam.nitrogen.recipe.input.BlockStateRecipeInput"
import {$PlacementBanRecipeSerializer} from "com.aetherteam.aether.recipe.serializer.PlacementBanRecipeSerializer"
import {$BlockStateIngredient} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$BlockBanRecipe, $BlockBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.BlockBanRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBanRecipe$Serializer extends $PlacementBanRecipeSerializer<($BlockState), ($BlockStateIngredient), ($BlockStateRecipeInput), ($BlockBanRecipe)> {
constructor()

public "codec"(): $MapCodec<($BlockBanRecipe)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BlockBanRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BlockBanRecipe)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AbstractPlacementBanRecipe$$Type): void
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $BlockBanRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBanRecipe$Serializer$$Type = ($BlockBanRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBanRecipe$Serializer$$Original = $BlockBanRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.IcestoneFreezableRecipe" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional$$Type} from "java.util.Optional"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $IcestoneFreezableRecipe extends $AbstractBlockStateRecipe {
constructor(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?)

public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcestoneFreezableRecipe$$Type = ($IcestoneFreezableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IcestoneFreezableRecipe$$Original = $IcestoneFreezableRecipe;}
declare module "com.aetherteam.aether.recipe.serializer.PlacementBanRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractPlacementBanRecipe, $AbstractPlacementBanRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$PlacementBanRecipeSerializer$CookieBaker, $PlacementBanRecipeSerializer$CookieBaker$$Type} from "com.aetherteam.aether.recipe.serializer.PlacementBanRecipeSerializer$CookieBaker"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate} from "java.util.function.Predicate"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PlacementBanRecipeSerializer<T, S extends $Predicate<(object)>, R extends $RecipeInput, F extends $AbstractPlacementBanRecipe<(object), (object), (object)>> implements $RecipeSerializer$$Interface<(F)> {
constructor(arg0: $PlacementBanRecipeSerializer$CookieBaker$$Type<(T), (S), (R), (F)>)

public "getFactory"(): $PlacementBanRecipeSerializer$CookieBaker<(T), (S), (R), (F)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: F): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
public "codec"(): $MapCodec<(F)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (F)>
get "factory"(): $PlacementBanRecipeSerializer$CookieBaker<(T), (S), (R), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementBanRecipeSerializer$$Type<T, S, R, F> = ($PlacementBanRecipeSerializer<(T), (S), (R), (F)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementBanRecipeSerializer$$Original<T, S, R, F> = $PlacementBanRecipeSerializer<(T), (S), (R), (F)>;}
declare module "com.aetherteam.aether.recipe.recipes.item.FreezingRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$FreezingRecipe} from "com.aetherteam.aether.recipe.recipes.item.FreezingRecipe"
import {$AetherCookingSerializer} from "com.aetherteam.aether.recipe.serializer.AetherCookingSerializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FreezingRecipe$Serializer extends $AetherCookingSerializer<($FreezingRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingRecipe$Serializer$$Type = ($FreezingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezingRecipe$Serializer$$Original = $FreezingRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.PlacementConversionRecipe" {
import {$Optional$$Type} from "java.util.Optional"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$AbstractBiomeParameterRecipe} from "com.aetherteam.aether.recipe.recipes.block.AbstractBiomeParameterRecipe"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlacementConversionRecipe extends $AbstractBiomeParameterRecipe {
constructor(arg0: ($Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>)?, arg1: $BlockStateIngredient$$Type, arg2: $BlockPropertyPair$$Type, arg3: ($ResourceLocation$$Type)?)
constructor(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?)

public "convert"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementConversionRecipe$$Type = ($PlacementConversionRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementConversionRecipe$$Original = $PlacementConversionRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.block.AmbrosiumRecipe" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MatchEventRecipe$$Interface} from "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AmbrosiumRecipe extends $AbstractBlockStateRecipe implements $MatchEventRecipe$$Interface {
constructor(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?)

public "matches"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $RecipeType$$Type<(never)>): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "convert"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: ($CacheableFunction$$Type)?): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbrosiumRecipe$$Type = ($AmbrosiumRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmbrosiumRecipe$$Original = $AmbrosiumRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.item.EnchantingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AetherBookCategory$$Type} from "com.aetherteam.aether.recipe.AetherBookCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractAetherCookingRecipe} from "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchantingRecipe extends $AbstractAetherCookingRecipe {
constructor(arg0: StringJS, arg1: $AetherBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingRecipe$$Type = ($EnchantingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingRecipe$$Original = $EnchantingRecipe;}
declare module "com.aetherteam.aether.recipe.serializer.AetherCookingSerializer$CookieBaker" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AetherBookCategory, $AetherBookCategory$$Type} from "com.aetherteam.aether.recipe.AetherBookCategory"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractAetherCookingRecipe, $AbstractAetherCookingRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe"

export interface $AetherCookingSerializer$CookieBaker$$Interface<T extends $AbstractAetherCookingRecipe> {

(arg0: StringJS, arg1: $AetherBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: float, arg5: integer): T
}

export class $AetherCookingSerializer$CookieBaker<T extends $AbstractAetherCookingRecipe> implements $AetherCookingSerializer$CookieBaker$$Interface {
 "create"(arg0: StringJS, arg1: $AetherBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AetherCookingSerializer$CookieBaker$$Type<T> = ((arg0: StringJS, arg1: $AetherBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: float, arg5: integer) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AetherCookingSerializer$CookieBaker$$Original<T> = $AetherCookingSerializer$CookieBaker<(T)>;}
declare module "com.aetherteam.aether.recipe.serializer.AetherCookingSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractAetherCookingRecipe, $AbstractAetherCookingRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe"
import {$AetherCookingSerializer$CookieBaker$$Type} from "com.aetherteam.aether.recipe.serializer.AetherCookingSerializer$CookieBaker"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AetherCookingSerializer<T extends $AbstractAetherCookingRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $AetherCookingSerializer$CookieBaker$$Type<(T)>, arg1: integer)

public "codec"(): $MapCodec<(T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): T
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AetherCookingSerializer$$Type<T> = ($AetherCookingSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AetherCookingSerializer$$Original<T> = $AetherCookingSerializer<(T)>;}
declare module "com.aetherteam.aether.recipe.recipes.item.IncubationRecipe" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $IncubationRecipe implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: $EntityType$$Type<(never)>, arg3: ($CompoundTag$$Type)?, arg4: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getTag"(): $Optional<($CompoundTag)>
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getEntity"(): $EntityType<(never)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "getIncubationTime"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(never)>
get "tag"(): $Optional<($CompoundTag)>
get "entity"(): $EntityType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incubationTime"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncubationRecipe$$Type = ($IncubationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncubationRecipe$$Original = $IncubationRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.item.AltarRepairRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AltarRepairRecipe, $AltarRepairRecipe$$Type} from "com.aetherteam.aether.recipe.recipes.item.AltarRepairRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AltarRepairRecipe$Serializer implements $RecipeSerializer$$Interface<($AltarRepairRecipe)> {
constructor()

public "codec"(): $MapCodec<($AltarRepairRecipe)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $AltarRepairRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AltarRepairRecipe)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AltarRepairRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarRepairRecipe$Serializer$$Type = ($AltarRepairRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AltarRepairRecipe$Serializer$$Original = $AltarRepairRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AetherBookCategory, $AetherBookCategory$$Type} from "com.aetherteam.aether.recipe.AetherBookCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export class $AbstractAetherCookingRecipe extends $AbstractCookingRecipe {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: StringJS, arg2: $AetherBookCategory$$Type, arg3: $Ingredient$$Type, arg4: $ItemStack$$Type, arg5: float, arg6: integer)

public "getResult"(): $ItemStack
public "aetherCategory"(): $AetherBookCategory
get "result"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAetherCookingRecipe$$Type = ($AbstractAetherCookingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractAetherCookingRecipe$$Original = $AbstractAetherCookingRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.block.AccessoryFreezableRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$AccessoryFreezableRecipe} from "com.aetherteam.aether.recipe.recipes.block.AccessoryFreezableRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockStateRecipeSerializer} from "com.aetherteam.nitrogen.recipe.serializer.BlockStateRecipeSerializer"

export class $AccessoryFreezableRecipe$Serializer extends $BlockStateRecipeSerializer<($AccessoryFreezableRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryFreezableRecipe$Serializer$$Type = ($AccessoryFreezableRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryFreezableRecipe$Serializer$$Original = $AccessoryFreezableRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.PlacementConversionRecipe$Serializer" {
import {$PlacementConversionRecipe} from "com.aetherteam.aether.recipe.recipes.block.PlacementConversionRecipe"
import {$BiomeParameterRecipeSerializer} from "com.aetherteam.aether.recipe.serializer.BiomeParameterRecipeSerializer"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PlacementConversionRecipe$Serializer extends $BiomeParameterRecipeSerializer<($PlacementConversionRecipe)> {
constructor()

public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $AbstractBlockStateRecipe
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementConversionRecipe$Serializer$$Type = ($PlacementConversionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementConversionRecipe$Serializer$$Original = $PlacementConversionRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.AccessoryFreezableRecipe" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional$$Type} from "java.util.Optional"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AccessoryFreezableRecipe extends $AbstractBlockStateRecipe {
constructor(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?)

public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryFreezableRecipe$$Type = ($AccessoryFreezableRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryFreezableRecipe$$Original = $AccessoryFreezableRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockStateIngredient, $BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AbstractPlacementBanRecipe<T, S extends $Predicate<(object)>, R extends $RecipeInput> implements $Recipe$$Interface<(R)> {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg2: ($BlockStateIngredient$$Type)?, arg3: S)

public "matches"(arg0: R, arg1: $Level$$Type): boolean
public "matches"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: T): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: R, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getBiome"(): $Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getBypassBlock"(): $Optional<($BlockStateIngredient)>
public "getIngredient"(): S
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: R): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "biome"(): $Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>
get "bypassBlock"(): $Optional<($BlockStateIngredient)>
get "ingredient"(): S
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPlacementBanRecipe$$Type<T, S, R> = ($AbstractPlacementBanRecipe<(T), (S), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPlacementBanRecipe$$Original<T, S, R> = $AbstractPlacementBanRecipe<(T), (S), (R)>;}
declare module "com.aetherteam.aether.recipe.recipes.block.SwetBallRecipe" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$AbstractBiomeParameterRecipe} from "com.aetherteam.aether.recipe.recipes.block.AbstractBiomeParameterRecipe"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MatchEventRecipe$$Interface} from "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SwetBallRecipe extends $AbstractBiomeParameterRecipe implements $MatchEventRecipe$$Interface {
constructor(arg0: ($Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>)?, arg1: $BlockStateIngredient$$Type, arg2: $BlockPropertyPair$$Type, arg3: ($ResourceLocation$$Type)?)
constructor(arg0: $BlockStateIngredient$$Type, arg1: $BlockPropertyPair$$Type, arg2: ($ResourceLocation$$Type)?)

public "matches"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $RecipeType$$Type<(never)>): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "convert"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: ($CacheableFunction$$Type)?): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwetBallRecipe$$Type = ($SwetBallRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwetBallRecipe$$Original = $SwetBallRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.ban.ItemBanRecipe" {
import {$AbstractPlacementBanRecipe} from "com.aetherteam.aether.recipe.recipes.ban.AbstractPlacementBanRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ItemBanRecipe extends $AbstractPlacementBanRecipe<($ItemStack), ($Ingredient), ($SingleRecipeInput)> {
constructor(arg0: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg1: ($BlockStateIngredient$$Type)?, arg2: $Ingredient$$Type)
constructor(arg0: $Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>, arg1: ($BlockStateIngredient$$Type)?)

public "getSerializer"(): $RecipeSerializer<(never)>
public "banItem"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $ItemStack$$Type, arg4: boolean): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBanRecipe$$Type = ($ItemBanRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBanRecipe$$Original = $ItemBanRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.block.IcestoneFreezableRecipe$Serializer" {
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$IcestoneFreezableRecipe} from "com.aetherteam.aether.recipe.recipes.block.IcestoneFreezableRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$BlockStateRecipeSerializer} from "com.aetherteam.nitrogen.recipe.serializer.BlockStateRecipeSerializer"

export class $IcestoneFreezableRecipe$Serializer extends $BlockStateRecipeSerializer<($IcestoneFreezableRecipe)> {
constructor()

public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcestoneFreezableRecipe$Serializer$$Type = ($IcestoneFreezableRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IcestoneFreezableRecipe$Serializer$$Original = $IcestoneFreezableRecipe$Serializer;}
declare module "com.aetherteam.aether.recipe.recipes.block.AbstractBiomeParameterRecipe" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$BlockStateIngredient$$Type} from "com.aetherteam.nitrogen.recipe.BlockStateIngredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPropertyPair$$Type} from "com.aetherteam.nitrogen.recipe.BlockPropertyPair"
import {$AbstractBlockStateRecipe} from "com.aetherteam.nitrogen.recipe.recipes.AbstractBlockStateRecipe"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBiomeParameterRecipe extends $AbstractBlockStateRecipe {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: ($Either$$Type<($ResourceKey$$Type<($Biome$$Type)>), ($TagKey$$Type<($Biome$$Type)>)>)?, arg2: $BlockStateIngredient$$Type, arg3: $BlockPropertyPair$$Type, arg4: ($ResourceLocation$$Type)?)

public "matches"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getBiome"(): $Optional<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>)>
get "biome"(): $Optional<($Either<($ResourceKey<($Biome)>), ($TagKey<($Biome)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBiomeParameterRecipe$$Type = ($AbstractBiomeParameterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBiomeParameterRecipe$$Original = $AbstractBiomeParameterRecipe;}
declare module "com.aetherteam.aether.recipe.recipes.item.FreezingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AetherBookCategory$$Type} from "com.aetherteam.aether.recipe.AetherBookCategory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractAetherCookingRecipe} from "com.aetherteam.aether.recipe.recipes.item.AbstractAetherCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FreezingRecipe extends $AbstractAetherCookingRecipe {
constructor(arg0: StringJS, arg1: $AetherBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingRecipe$$Type = ($FreezingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezingRecipe$$Original = $FreezingRecipe;}
