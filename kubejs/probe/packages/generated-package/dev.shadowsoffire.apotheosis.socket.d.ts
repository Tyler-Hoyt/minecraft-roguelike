declare module "dev.shadowsoffire.apotheosis.socket.gem.Purity" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$GenContext$$Type} from "dev.shadowsoffire.apotheosis.tiers.GenContext"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TieredWeights$Weighted, $TieredWeights$Weighted$$Type, $TieredWeights$Weighted$$Interface} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TieredWeights} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"

export class $Purity extends $Enum<($Purity)> implements $StringRepresentable$$Interface, $TieredWeights$Weighted$$Interface {
static readonly "FLAWLESS": $Purity
static readonly "CODEC": $Codec<($Purity)>
static readonly "ALL_PURITIES": $Set<($Purity)>
static readonly "PERFECT": $Purity
static readonly "BY_ID": $IntFunction<($Purity)>
static readonly "FLAWED": $Purity
static readonly "CRACKED": $Purity
static readonly "CHIPPED": $Purity
static readonly "NORMAL": $Purity
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Purity)>

public "getName"(): StringJS
public static "values"(): ($Purity)[]
public static "max"(arg0: $Purity$$Type, arg1: $Purity$$Type): $Purity
public static "valueOf"(arg0: StringJS): $Purity
public "next"(): $Purity
public static "random"(arg0: $GenContext$$Type): $Purity
public static "random"(arg0: $GenContext$$Type, arg1: $Set$$Type<($Purity$$Type)>): $Purity
public "getColor"(): $TextColor
public "isAtLeast"(arg0: $Purity$$Type): boolean
public "getSerializedName"(): StringJS
public "toComponent"(): $MutableComponent
public "weights"(): $TieredWeights
public static "mapCodec"<T>(arg0: $Codec$$Type<(T)>): $MapCodec<($Map<($Purity), (T)>)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
get "name"(): StringJS
get "color"(): $TextColor
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Purity$$Type = (("cracked") | ("chipped") | ("flawed") | ("normal") | ("flawless") | ("perfect"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Purity$$Original = $Purity;}
declare module "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ApothSmithingRecipe} from "dev.shadowsoffire.apotheosis.util.ApothSmithingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AddSocketsRecipe extends $ApothSmithingRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
static readonly "CODEC": $MapCodec<($AddSocketsRecipe)>
static readonly "ADDITION": integer
static readonly "TEMPLATE": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AddSocketsRecipe)>
static readonly "BASE": integer
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getMaxSockets"(): integer
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getInput"(): $Ingredient
get "maxSockets"(): integer
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "input"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$$Type = ($AddSocketsRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSocketsRecipe$$Original = $AddSocketsRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AddSocketsRecipe} from "dev.shadowsoffire.apotheosis.socket.AddSocketsRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AddSocketsRecipe$Serializer implements $RecipeSerializer$$Interface<($AddSocketsRecipe)> {
static "INSTANCE": $AddSocketsRecipe$Serializer

constructor()

public "codec"(): $MapCodec<($AddSocketsRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddSocketsRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSocketsRecipe$Serializer$$Type = ($AddSocketsRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddSocketsRecipe$Serializer$$Original = $AddSocketsRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickingEntityBlock$$Interface} from "dev.shadowsoffire.placebo.block_entity.TickingEntityBlock"
import {$GemCaseTile$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseTile"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $GemCaseBlock extends $HorizontalDirectionalBlock implements $TickingEntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NAME": $Component
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<($GemCaseTile$$Type)>, arg1: $BlockBehaviour$Properties$$Type, arg2: integer)

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCaseBlock$$Type = ($GemCaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCaseBlock$$Original = $GemCaseBlock;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$GemCuttingRecipe$CuttingRecipeInput, $GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $GemCuttingRecipe$$Interface extends $Recipe$$Interface<($GemCuttingRecipe$CuttingRecipeInput)> {
get "type"(): $RecipeType<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $GemCuttingRecipe implements $GemCuttingRecipe$$Interface {
static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
 "getType"(): $RecipeType<(never)>
static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
 "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
 "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
 "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingRecipe$$Type = ($GemCuttingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingRecipe$$Original = $GemCuttingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseMenu" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$ButtonClickPayload$IButtonContainer$$Interface} from "dev.shadowsoffire.placebo.payloads.ButtonClickPayload$IButtonContainer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$GemCaseTile} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseTile"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GemUpgradeMatch} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemUpgradeMatch"
import {$DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$BlockEntityMenu} from "dev.shadowsoffire.placebo.menu.BlockEntityMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GemCaseMenu extends $BlockEntityMenu<($GemCaseTile)> implements $ButtonClickPayload$IButtonContainer$$Interface {
static readonly "INPUT_SLOT": integer
 "stateId": integer
static readonly "FIRST_GEM_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "FILTER_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "FIRST_UPGRADE_MAT_SLOT": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $BlockPos$$Type)

public "removed"(arg0: $Player$$Type): void
public "onButtonClick"(arg0: integer): void
public "onQuickMove"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type): void
public "setNotifier"(arg0: $Runnable$$Type): void
public "onChanged"(): void
public "isValidUpgradeMaterial"(arg0: $ItemStack$$Type): boolean
public "stillValid"(arg0: $Player$$Type): boolean
public "setSelectedGem"(arg0: $DynamicHolder$$Type<($Gem$$Type)>): void
public "getUpgradeMatch"(arg0: $Purity$$Type): $GemUpgradeMatch
public "getGemCount"(arg0: $Gem$$Type, arg1: $Purity$$Type): integer
public "getGemCount"(arg0: $Gem$$Type): integer
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "extractGem"(arg0: $Purity$$Type, arg1: integer): $ItemStack
public "getSlot"(arg0: integer): $Slot
set "notifier"(value: $Runnable$$Type)
set "selectedGem"(value: $DynamicHolder$$Type<($Gem$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCaseMenu$$Type = ($GemCaseMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCaseMenu$$Original = $GemCaseMenu;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BasicGemCuttingRecipe} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicGemCuttingRecipe$Serializer implements $RecipeSerializer$$Interface<($BasicGemCuttingRecipe)> {
static readonly "INSTANCE": $BasicGemCuttingRecipe$Serializer

constructor()

public "codec"(): $MapCodec<($BasicGemCuttingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BasicGemCuttingRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicGemCuttingRecipe$Serializer$$Type = ($BasicGemCuttingRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicGemCuttingRecipe$Serializer$$Original = $BasicGemCuttingRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GemCuttingBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NAME": $Component
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingBlock$$Type = ($GemCuttingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingBlock$$Original = $GemCuttingBlock;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.UnsocketedGem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$GemView$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"
import {$Record} from "java.lang.Record"

export class $UnsocketedGem extends $Record implements $GemView$$Interface {
constructor(gem: $DynamicHolder$$Type<($Gem$$Type)>, purity: $Purity$$Type, gemStack: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ItemStack$$Type): $UnsocketedGem
public "isValid"(): boolean
public "purity"(): $Purity
public "addInformation"(arg0: $Consumer$$Type<($Component)>, arg1: $AttributeTooltipContext$$Type): void
public "gem"(): $DynamicHolder<($Gem)>
/**
 * 
 * @deprecated
 */
public "gemStack"(): $ItemStack
public "isPerfect"(): boolean
public "canApplyTo"(arg0: $ItemStack$$Type): boolean
get "valid"(): boolean
get "perfect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnsocketedGem$$Type = ({"purity"?: $Purity$$Type, "gem"?: $DynamicHolder$$Type<($Gem$$Type)>, "gemStack"?: $ItemStack$$Type}) | ([purity?: $Purity$$Type, gem?: $DynamicHolder$$Type<($Gem$$Type)>, gemStack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnsocketedGem$$Original = $UnsocketedGem;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.Gem" {
import {$Constraints, $Constraints$$Type} from "dev.shadowsoffire.apotheosis.tiers.Constraints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WorldTier$$Type} from "dev.shadowsoffire.apotheosis.tiers.WorldTier"
import {$Optional} from "java.util.Optional"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$List, $List$$Type} from "java.util.List"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemView$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GemBonus, $GemBonus$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus"
import {$TieredWeights$Weighted, $TieredWeights$Weighted$$Type, $TieredWeights$Weighted$$Interface} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights$Weighted"
import {$Constraints$Constrained$$Interface} from "dev.shadowsoffire.apotheosis.tiers.Constraints$Constrained"
import {$TieredWeights, $TieredWeights$$Type} from "dev.shadowsoffire.apotheosis.tiers.TieredWeights"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"
import {$LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"

export class $Gem implements $CodecProvider$$Interface<($Gem)>, $TieredWeights$Weighted$$Interface, $Constraints$Constrained$$Interface {
static readonly "CODEC": $Codec<($Gem)>

constructor(arg0: $TieredWeights$$Type, arg1: $Constraints$$Type, arg2: $Purity$$Type, arg3: $List$$Type<($GemBonus$$Type)>, arg4: boolean)

public "toString"(): StringJS
public "getId"(): $ResourceLocation
public static "fmt"(arg0: float): StringJS
public static "addTypeInfo"(arg0: $Consumer$$Type<($Component)>, ...arg1: (any)[]): void
public "constraints"(): $Constraints
public "toStack"(arg0: $Purity$$Type): $ItemStack
public "getCodec"(): $Codec<($Gem)>
public "addInformation"(arg0: $GemView$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $AttributeTooltipContext$$Type): void
public "isUnique"(): boolean
public "getBonus"(arg0: $LootCategory$$Type, arg1: $Purity$$Type): $Optional<($GemBonus)>
public "getBonus"(arg0: $LootCategory$$Type): $GemBonus
public "isValidIn"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Purity$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getBonuses"(): $List<($GemBonus)>
public "getMinPurity"(): $Purity
public "weights"(): $TieredWeights
public "canApplyTo"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Purity$$Type): boolean
public static "wrap"<T extends $TieredWeights$Weighted>(arg0: T, arg1: $WorldTier$$Type, arg2: float): $WeightedEntry$Wrapper<(T)>
public "wrap"<T extends $TieredWeights$Weighted>(arg0: $WorldTier$$Type, arg1: float): $WeightedEntry$Wrapper<(T)>
get "id"(): $ResourceLocation
get "codec"(): $Codec<($Gem)>
get "unique"(): boolean
get "bonuses"(): $List<($GemBonus)>
get "minPurity"(): $Purity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gem$$Type = ($Gem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gem$$Original = $Gem;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickingBlockEntity$$Interface} from "dev.shadowsoffire.placebo.block_entity.TickingBlockEntity"
import {$Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$GemUpgradeMatch} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemUpgradeMatch"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$GemCaseAnimationState} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseAnimationState"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$GemCaseMenu$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GemCaseTile extends $BlockEntity implements $TickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer)

public "getCount"(arg0: $Gem$$Type, arg1: $Purity$$Type): integer
public "getCount"(arg0: $DynamicHolder$$Type<($Gem$$Type)>, arg1: $Purity$$Type): integer
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "removeListener"(arg0: $GemCaseMenu$$Type): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "addListener"(arg0: $GemCaseMenu$$Type): void
public "getAnimationState"(): $GemCaseAnimationState
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "saveGemData"(arg0: $CompoundTag$$Type): void
public "getUpgradeMatch"(arg0: $DynamicHolder$$Type<($Gem$$Type)>, arg1: $Purity$$Type, arg2: $Container$$Type): $GemUpgradeMatch
public "loadGemData"(arg0: $CompoundTag$$Type): void
public "depositGem"(arg0: $ItemStack$$Type): void
public "upgradeGem"(arg0: $DynamicHolder$$Type<($Gem$$Type)>, arg1: $Purity$$Type, arg2: $Container$$Type): boolean
public "extractGem"(arg0: $DynamicHolder$$Type<($Gem$$Type)>, arg1: $Purity$$Type, arg2: integer): $ItemStack
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "animationState"(): $GemCaseAnimationState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCaseTile$$Type = ($GemCaseTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCaseTile$$Original = $GemCaseTile;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GemCuttingRecipe$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe"
import {$GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $PurityUpgradeRecipe extends $Record implements $GemCuttingRecipe$$Interface {
static "CODEC": $MapCodec<($PurityUpgradeRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PurityUpgradeRecipe)>

constructor(purity: $Purity$$Type, left: $List$$Type<($SizedIngredient$$Type)>, right: $List$$Type<($SizedIngredient$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "left"(): $List<($SizedIngredient)>
public "right"(): $List<($SizedIngredient)>
public "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "purity"(): $Purity
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
public "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
public "getType"(): $RecipeType<(never)>
public static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
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
export type $PurityUpgradeRecipe$$Type = ({"purity"?: $Purity$$Type, "right"?: $List$$Type<($SizedIngredient$$Type)>, "left"?: $List$$Type<($SizedIngredient$$Type)>}) | ([purity?: $Purity$$Type, right?: $List$$Type<($SizedIngredient$$Type)>, left?: $List$$Type<($SizedIngredient$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PurityUpgradeRecipe$$Original = $PurityUpgradeRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.ReactiveSmithingRecipe" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $ReactiveSmithingRecipe$$Interface {

(arg0: $Container, arg1: $Player, arg2: $ItemStack): void
}

export class $ReactiveSmithingRecipe implements $ReactiveSmithingRecipe$$Interface {
 "onCraft"(arg0: $Container$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveSmithingRecipe$$Type = ((arg0: $Container, arg1: $Player, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactiveSmithingRecipe$$Original = $ReactiveSmithingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CodecProvider$$Interface} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Component} from "net.minecraft.network.chat.Component"
import {$GemView$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$GemClass, $GemClass$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemClass"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GemInstance$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.GemInstance"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GetEnchantmentLevelEvent$$Type} from "net.neoforged.neoforge.event.enchanting.GetEnchantmentLevelEvent"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StackAttributeModifiersEvent$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiersEvent"
import {$CodecMap} from "dev.shadowsoffire.placebo.codec.CodecMap"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $GemBonus implements $CodecProvider$$Interface<($GemBonus)> {
static readonly "CODEC": $CodecMap<($GemBonus)>

constructor(arg0: $GemClass$$Type)

public "onBlockBreak"(arg0: $GemInstance$$Type, arg1: $Player$$Type, arg2: $LevelAccessor$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): void
public "onShieldBlock"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $DamageSource$$Type, arg3: float): float
public "getDamageProtection"(arg0: $GemInstance$$Type, arg1: $DamageSource$$Type): float
public "getDurabilityBonusPercentage"(arg0: $GemInstance$$Type): float
public static "initCodecs"(): void
public "onItemUse"(arg0: $GemInstance$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getDamageBonus"(arg0: $GemInstance$$Type, arg1: $Entity$$Type): float
public "supports"(arg0: $Purity$$Type): boolean
public "getSocketBonusTooltip"(arg0: $GemView$$Type, arg1: $AttributeTooltipContext$$Type): $Component
public "onProjectileFired"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $Projectile$$Type): void
public "addModifiers"(arg0: $GemInstance$$Type, arg1: $StackAttributeModifiersEvent$$Type): void
public "skipModifierIds"(arg0: $GemInstance$$Type, arg1: $Consumer$$Type<($ResourceLocation)>): void
public "getGemClass"(): $GemClass
public "getTypeKey"(): $ResourceLocation
public "doPostAttack"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $Entity$$Type): void
public "onProjectileImpact"(arg0: $GemInstance$$Type, arg1: $Projectile$$Type, arg2: $HitResult$$Type): void
public "getEnchantmentLevels"(arg0: $GemInstance$$Type, arg1: $GetEnchantmentLevelEvent$$Type): void
public "onHurt"(arg0: $GemInstance$$Type, arg1: $DamageSource$$Type, arg2: $LivingEntity$$Type, arg3: float): float
public "doPostHurt"(arg0: $GemInstance$$Type, arg1: $LivingEntity$$Type, arg2: $DamageSource$$Type): void
public "modifyLoot"(arg0: $GemInstance$$Type, arg1: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg2: $LootContext$$Type): void
public "getCodec"(): $Codec<($GemBonus)>
get "gemClass"(): $GemClass
get "typeKey"(): $ResourceLocation
get "codec"(): $Codec<($GemBonus)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemBonus$$Type = ($GemBonus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemBonus$$Original = $GemBonus;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseAnimationState$PositionInfo" {
import {$Record} from "java.lang.Record"

export class $GemCaseAnimationState$PositionInfo extends $Record {
constructor(baseSlot: integer, offsetX: float, offsetZ: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "offsetZ"(): float
public "offsetX"(): float
public "baseSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCaseAnimationState$PositionInfo$$Type = ({"baseSlot"?: integer, "offsetX"?: float, "offsetZ"?: float}) | ([baseSlot?: integer, offsetX?: float, offsetZ?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCaseAnimationState$PositionInfo$$Original = $GemCaseAnimationState$PositionInfo;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemClass" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"
import {$LootCategory, $LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"

export class $GemClass extends $Record {
static "CODEC": $Codec<($GemClass)>
static "EXPLICIT_CODEC": $Codec<($GemClass)>

constructor(key: StringJS, types: $HolderSet$$Type<($LootCategory)>)
constructor(arg0: StringJS, ...arg1: ($LootCategory$$Type)[])
constructor(arg0: $LootCategory$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): StringJS
public "types"(): $HolderSet<($LootCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemClass$$Type = ({"types"?: $HolderSet$$Type<($LootCategory)>, "key"?: StringJS}) | ([types?: $HolderSet$$Type<($LootCategory)>, key?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemClass$$Original = $GemClass;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PurityUpgradeRecipe} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PurityUpgradeRecipe$Serializer implements $RecipeSerializer$$Interface<($PurityUpgradeRecipe)> {
static readonly "INSTANCE": $PurityUpgradeRecipe$Serializer

constructor()

public "codec"(): $MapCodec<($PurityUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PurityUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PurityUpgradeRecipe$Serializer$$Type = ($PurityUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PurityUpgradeRecipe$Serializer$$Original = $PurityUpgradeRecipe$Serializer;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemInstance" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemView$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.GemView"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GetEnchantmentLevelEvent$$Type} from "net.neoforged.neoforge.event.enchanting.GetEnchantmentLevelEvent"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LootCategory, $LootCategory$$Type} from "dev.shadowsoffire.apotheosis.loot.LootCategory"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StackAttributeModifiersEvent$$Type} from "dev.shadowsoffire.apothic_attributes.modifiers.StackAttributeModifiersEvent"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$GemBonus} from "dev.shadowsoffire.apotheosis.socket.gem.bonus.GemBonus"
import {$DynamicHolder, $DynamicHolder$$Type} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Record} from "java.lang.Record"
import {$AttributeTooltipContext$$Type} from "net.neoforged.neoforge.common.util.AttributeTooltipContext"

export class $GemInstance extends $Record implements $GemView$$Interface {
static "EMPTY": $GemInstance

constructor(gem: $DynamicHolder$$Type<($Gem$$Type)>, category: $LootCategory$$Type, purity: $Purity$$Type, gemStack: $ItemStack$$Type, slot: integer)

public "slot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isValid"(): boolean
public "category"(): $LootCategory
public "onBlockBreak"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "onShieldBlock"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float): float
public "getDamageProtection"(arg0: $DamageSource$$Type): float
public "getDurabilityBonusPercentage"(): float
public "onItemUse"(arg0: $UseOnContext$$Type): $InteractionResult
public "getDamageBonus"(arg0: $Entity$$Type): float
public "purity"(): $Purity
public "getSocketBonusTooltip"(arg0: $AttributeTooltipContext$$Type): $Component
public "onProjectileFired"(arg0: $LivingEntity$$Type, arg1: $Projectile$$Type): void
public "addModifiers"(arg0: $StackAttributeModifiersEvent$$Type): void
public "skipModifierIds"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "addInformation"(arg0: $Consumer$$Type<($Component)>, arg1: $AttributeTooltipContext$$Type): void
public "gem"(): $DynamicHolder<($Gem)>
public "getBonus"(): $Optional<($GemBonus)>
public static "socketed"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): $GemInstance
public static "socketed"(arg0: $LootCategory$$Type, arg1: $ItemStack$$Type, arg2: integer): $GemInstance
/**
 * 
 * @deprecated
 */
public "equalsUnsocketed"(arg0: $GemInstance$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isValidUnsocketed"(): boolean
public "doPostAttack"(arg0: $LivingEntity$$Type, arg1: $Entity$$Type): void
public "onProjectileImpact"(arg0: $Projectile$$Type, arg1: $HitResult$$Type): void
public "getEnchantmentLevels"(arg0: $GetEnchantmentLevelEvent$$Type): void
public "onHurt"(arg0: $DamageSource$$Type, arg1: $LivingEntity$$Type, arg2: float): float
public "getGem"(): $Gem
public "gemStack"(): $ItemStack
public "isPerfect"(): boolean
/**
 * 
 * @deprecated
 */
public static "unsocketed"(arg0: $ItemStack$$Type): $GemInstance
public "doPostHurt"(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type): void
public "canApplyTo"(arg0: $ItemStack$$Type): boolean
public "modifyLoot"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: $LootContext$$Type): void
get "valid"(): boolean
get "durabilityBonusPercentage"(): float
get "bonus"(): $Optional<($GemBonus)>
get "validUnsocketed"(): boolean
get "perfect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemInstance$$Type = ({"gem"?: $DynamicHolder$$Type<($Gem$$Type)>, "category"?: $LootCategory$$Type, "gemStack"?: $ItemStack$$Type, "slot"?: integer, "purity"?: $Purity$$Type}) | ([gem?: $DynamicHolder$$Type<($Gem$$Type)>, category?: $LootCategory$$Type, gemStack?: $ItemStack$$Type, slot?: integer, purity?: $Purity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemInstance$$Original = $GemInstance;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITabFiller, $ITabFiller$$Interface} from "dev.shadowsoffire.placebo.tabs.ITabFiller"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Gem, $Gem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DynamicHolder} from "dev.shadowsoffire.placebo.reload.DynamicHolder"

export class $GemItem extends $Item implements $ITabFiller$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "HAS_REFRESHED": StringJS
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "UUID_ARRAY": StringJS
static readonly "GEM": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "createStack"(arg0: $Gem$$Type, arg1: $Purity$$Type, arg2: integer): $ItemStack
public static "createStack"(arg0: $Gem$$Type, arg1: $Purity$$Type): $ItemStack
public "fillItemCategory"(arg0: $CreativeModeTab$$Type, arg1: $BuildCreativeModeTabContentsEvent$$Type): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "setGem"(arg0: $ItemStack$$Type, arg1: $Gem$$Type): void
public static "setPurity"(arg0: $ItemStack$$Type, arg1: $Purity$$Type): void
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public static "getGem"(arg0: $ItemStack$$Type): $DynamicHolder<($Gem)>
public static "getPurity"(arg0: $ItemStack$$Type): $Purity
public static "simple"(arg0: $ItemLike$$Type): $ITabFiller
public static "delegating"(arg0: $Supplier$$Type<($ItemLike$$Type)>): $ITabFiller
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemItem$$Type = ($GemItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemItem$$Original = $GemItem;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.BasicGemCuttingRecipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$GemCuttingRecipe$$Interface} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe"
import {$GemCuttingRecipe$CuttingRecipeInput$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $BasicGemCuttingRecipe extends $Record implements $GemCuttingRecipe$$Interface {
static "CODEC": $MapCodec<($BasicGemCuttingRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BasicGemCuttingRecipe)>

constructor(base: $Ingredient$$Type, top: $List$$Type<($SizedIngredient$$Type)>, left: $List$$Type<($SizedIngredient$$Type)>, right: $List$$Type<($SizedIngredient$$Type)>, output: $ItemStack$$Type)

public "base"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "top"(): $List<($SizedIngredient)>
public "left"(): $List<($SizedIngredient)>
public "right"(): $List<($SizedIngredient)>
public "output"(): $ItemStack
public "assemble"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "decrementInputs"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $Level$$Type): void
public "isValidTopItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidLeftItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidBaseItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "isValidRightItem"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public static "anyMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): boolean
public "getType"(): $RecipeType<(never)>
public static "getMatch"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public static "getMatchOrThrow"(arg0: $ItemStack$$Type, arg1: $List$$Type<($SizedIngredient$$Type)>): $SizedIngredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $GemCuttingRecipe$CuttingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
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
export type $BasicGemCuttingRecipe$$Type = ({"left"?: $List$$Type<($SizedIngredient$$Type)>, "output"?: $ItemStack$$Type, "right"?: $List$$Type<($SizedIngredient$$Type)>, "base"?: $Ingredient$$Type, "top"?: $List$$Type<($SizedIngredient$$Type)>}) | ([left?: $List$$Type<($SizedIngredient$$Type)>, output?: $ItemStack$$Type, right?: $List$$Type<($SizedIngredient$$Type)>, base?: $Ingredient$$Type, top?: $List$$Type<($SizedIngredient$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicGemCuttingRecipe$$Original = $BasicGemCuttingRecipe;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.GemView" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Purity} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$DynamicHolder} from "dev.shadowsoffire.placebo.reload.DynamicHolder"
import {$Gem} from "dev.shadowsoffire.apotheosis.socket.gem.Gem"

export interface $GemView$$Interface {
}

export class $GemView implements $GemView$$Interface {
 "purity"(): $Purity
 "gem"(): $DynamicHolder<($Gem)>
 "gemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemView$$Type = ($GemView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemView$$Original = $GemView;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseAnimationState" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GemCaseAnimationState$PositionInfo} from "dev.shadowsoffire.apotheosis.socket.gem.storage.GemCaseAnimationState$PositionInfo"

export class $GemCaseAnimationState {
constructor(arg0: $RandomSource$$Type)

public "tick"(arg0: integer, arg1: boolean): void
public "getPosition"(arg0: integer, arg1: float): $GemCaseAnimationState$PositionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCaseAnimationState$$Type = ($GemCaseAnimationState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCaseAnimationState$$Original = $GemCaseAnimationState;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.storage.GemUpgradeMatch" {
import {$PurityUpgradeRecipe$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.cutting.PurityUpgradeRecipe"
import {$SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$Record} from "java.lang.Record"

export class $GemUpgradeMatch extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemUpgradeMatch$$Type = ({"leftSlot"?: integer, "recipe"?: $PurityUpgradeRecipe$$Type, "leftIng"?: $SizedIngredient$$Type, "rightSlot"?: integer, "rightIng"?: $SizedIngredient$$Type}) | ([leftSlot?: integer, recipe?: $PurityUpgradeRecipe$$Type, leftIng?: $SizedIngredient$$Type, rightSlot?: integer, rightIng?: $SizedIngredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemUpgradeMatch$$Original = $GemUpgradeMatch;}
declare module "dev.shadowsoffire.apotheosis.socket.gem.cutting.GemCuttingRecipe$CuttingRecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeWrapper} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $GemCuttingRecipe$CuttingRecipeInput extends $RecipeWrapper {
constructor(arg0: $IItemHandler$$Type)

public "getBase"(): $ItemStack
public "getLeft"(): $ItemStack
public "getRight"(): $ItemStack
public "getTop"(): $ItemStack
get "base"(): $ItemStack
get "left"(): $ItemStack
get "right"(): $ItemStack
get "top"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCuttingRecipe$CuttingRecipeInput$$Type = ($GemCuttingRecipe$CuttingRecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCuttingRecipe$CuttingRecipeInput$$Original = $GemCuttingRecipe$CuttingRecipeInput;}
