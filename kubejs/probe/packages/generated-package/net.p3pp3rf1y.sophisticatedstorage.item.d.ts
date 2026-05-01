declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$StorageTierUpgradeItem$TierUpgrade, $StorageTierUpgradeItem$TierUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$TierUpgrade"
import {$ItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageTierUpgradeItem extends $ItemBase {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$$Type)
constructor(arg0: $StorageTierUpgradeItem$TierUpgrade$$Type, arg1: boolean)

public "tryUpgradeStorage"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Player$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTier"(): $StorageTierUpgradeItem$TierUpgrade
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tier"(): $StorageTierUpgradeItem$TierUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$$Type = ($StorageTierUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeItem$$Original = $StorageTierUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageConnectorBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockItemBase"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $StorageConnectorBlockItem extends $BlockItemBase {
static readonly "REGISTRY_NAME_WITHOUT_WOOD_TYPE": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BLOCK_TRANSLATION_KEY": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageConnectorBlockItem$$Type = ($StorageConnectorBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageConnectorBlockItem$$Original = $StorageConnectorBlockItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.ChestBlockItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WoodStorageBlockItem} from "net.p3pp3rf1y.sophisticatedstorage.item.WoodStorageBlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ChestBlockItem extends $WoodStorageBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "WOOD_TYPE_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($WoodType)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)
constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public static "setDoubleChest"(arg0: $ItemStack$$Type, arg1: boolean): void
public static "isDoubleChest"(arg0: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlockItem$$Type = ($ChestBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestBlockItem$$Original = $ChestBlockItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageToolItem$Mode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $StorageToolItem$Mode extends $Enum<($StorageToolItem$Mode)> implements $StringRepresentable$$Interface {
static readonly "FILL_LEVEL_DISPLAY": $StorageToolItem$Mode
static readonly "COUNT_DISPLAY": $StorageToolItem$Mode
static readonly "CODEC": $StringRepresentable$EnumCodec<($StorageToolItem$Mode)>
static readonly "LOCK": $StorageToolItem$Mode
static readonly "LINK": $StorageToolItem$Mode
static readonly "LOCK_DISPLAY": $StorageToolItem$Mode
static readonly "UPGRADES_DISPLAY": $StorageToolItem$Mode
static readonly "TIER_DISPLAY": $StorageToolItem$Mode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($StorageToolItem$Mode)>

public static "values"(): ($StorageToolItem$Mode)[]
public static "valueOf"(arg0: StringJS): $StorageToolItem$Mode
public "next"(): $StorageToolItem$Mode
public "previous"(): $StorageToolItem$Mode
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
export type $StorageToolItem$Mode$$Type = (("link") | ("lock") | ("count_display") | ("lock_display") | ("tier_display") | ("upgrades_display") | ("fill_level_display"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageToolItem$Mode$$Original = $StorageToolItem$Mode;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageToolItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$StorageToolItem$Mode} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageToolItem$Mode"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $StorageToolItem extends $ItemBase {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getMode"(arg0: $ItemStack$$Type): $StorageToolItem$Mode
public static "useOffHandOnPlaced"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getOverlayMessage"(arg0: $ItemStack$$Type): $Component
public static "getControllerLink"(arg0: $ItemStack$$Type): $Optional<($BlockPos)>
public static "cycleMode"(arg0: $ItemStack$$Type, arg1: boolean): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageToolItem$$Type = ($StorageToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageToolItem$$Original = $StorageToolItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$TierUpgradeDefinition" {
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $StorageTierUpgradeItem$TierUpgradeDefinition<B extends $BlockEntity> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgradeDefinition$$Type<B> = ($StorageTierUpgradeItem$TierUpgradeDefinition<(B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeItem$TierUpgradeDefinition$$Original<B> = $StorageTierUpgradeItem$TierUpgradeDefinition<(B)>;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$TierUpgrade" {
import {$StorageTierUpgradeItem$VanillaTierUpgradeDefinition$$Type} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$VanillaTierUpgradeDefinition"
import {$Enum} from "java.lang.Enum"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"

export class $StorageTierUpgradeItem$TierUpgrade extends $Enum<($StorageTierUpgradeItem$TierUpgrade)> {
static readonly "IRON_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "DIAMOND_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_IRON": $StorageTierUpgradeItem$TierUpgrade
static readonly "GOLD_TO_DIAMOND": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_COPPER": $StorageTierUpgradeItem$TierUpgrade
static readonly "BASIC_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade
static readonly "COPPER_TO_NETHERITE": $StorageTierUpgradeItem$TierUpgrade
static readonly "IRON_TO_GOLD": $StorageTierUpgradeItem$TierUpgrade

public static "values"(): ($StorageTierUpgradeItem$TierUpgrade)[]
public static "valueOf"(arg0: StringJS): $StorageTierUpgradeItem$TierUpgrade
public "addTierUpgradeDefinition"(arg0: $Block$$Type, arg1: $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$TierUpgrade$$Type = (("basic") | ("basic_to_copper") | ("basic_to_iron") | ("basic_to_gold") | ("basic_to_diamond") | ("basic_to_netherite") | ("copper_to_iron") | ("copper_to_gold") | ("copper_to_diamond") | ("copper_to_netherite") | ("iron_to_gold") | ("iron_to_diamond") | ("iron_to_netherite") | ("gold_to_diamond") | ("gold_to_netherite") | ("diamond_to_netherite"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeItem$TierUpgrade$$Original = $StorageTierUpgradeItem$TierUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.BarrelBlockItem" {
import {$IDataComponentHolderExtension$$Type} from "net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$WoodStorageBlockItem} from "net.p3pp3rf1y.sophisticatedstorage.item.WoodStorageBlockItem"
import {$BarrelMaterial, $BarrelMaterial$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BarrelBlockItem extends $WoodStorageBlockItem {
static readonly "MATERIALS_CODEC": $Codec<($Map<($BarrelMaterial), ($ResourceLocation)>)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MATERIALS_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<($BarrelMaterial), ($ResourceLocation)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "WOOD_TYPE_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($WoodType)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)
constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "isFlatTop"(arg0: $IDataComponentHolderExtension$$Type): boolean
public static "setFlatTop"(arg0: $ItemStack$$Type, arg1: boolean): void
public static "toggleFlatTop"(arg0: $ItemStack$$Type): void
public static "getMaterials"(arg0: $ItemStack$$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public static "setMaterials"(arg0: $ItemStack$$Type, arg1: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
public static "removeMaterials"(arg0: $ItemStack$$Type): void
public static "compactMaterials"(arg0: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
public static "uncompactMaterials"(arg0: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
public static "removeCoveredTints"(arg0: $ItemStack$$Type, arg1: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
public static "getUncompactedMaterials"(arg0: $ItemStack$$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public "isTintable"(arg0: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlockItem$$Type = ($BarrelBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarrelBlockItem$$Original = $BarrelBlockItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageBlockItem" {
import {$IDataComponentHolderExtension$$Type} from "net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockItemBase"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ITintableBlockItem$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.ITintableBlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $StorageBlockItem extends $BlockItemBase implements $ITintableBlockItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public static "isLocked"(arg0: $ItemStack$$Type): boolean
public static "setShowsTier"(arg0: $ItemStack$$Type, arg1: boolean): void
public "setMainColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "setAccentColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "removeMainColor"(arg0: $ItemStack$$Type): void
public "removeAccentColor"(arg0: $ItemStack$$Type): void
public static "getEntityWrapperTagFromStack"(arg0: $IDataComponentHolderExtension$$Type): $Optional<($CompoundTag)>
public static "getNumberOfUpgradeSlots"(arg0: $ItemStack$$Type): integer
public static "setNumberOfInventorySlots"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setNumberOfUpgradeSlots"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getMainColorFromComponentHolder"(arg0: $IDataComponentHolderExtension$$Type): $Optional<(integer)>
public static "getAccentColorFromComponentHolder"(arg0: $IDataComponentHolderExtension$$Type): $Optional<(integer)>
public "getMainColor"(arg0: $ItemStack$$Type): $Optional<(integer)>
public "getAccentColor"(arg0: $ItemStack$$Type): $Optional<(integer)>
public static "getNumberOfInventorySlots"(arg0: $ItemStack$$Type): integer
public static "showsTier"(arg0: $ItemStack$$Type): boolean
public static "setLocked"(arg0: $ItemStack$$Type, arg1: boolean): void
public "isTintable"(arg0: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockItem$$Type = ($StorageBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageBlockItem$$Original = $StorageBlockItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.PaintbrushItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ITintable$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.ITintable"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PaintbrushItem$ItemRequirements} from "net.p3pp3rf1y.sophisticatedstorage.item.PaintbrushItem$ItemRequirements"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BarrelMaterial, $BarrelMaterial$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial"
import {$ItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$IMaterialHolder$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.IMaterialHolder"

export class $PaintbrushItem extends $ItemBase {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "REMAINING_PARTS_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<($ResourceLocation), (integer)>)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "REMAINING_PARTS_CODEC": $Codec<($Map<($ResourceLocation), (integer)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "setMainColor"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setAccentColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getDyeItemRequirements"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (integer)>): $Optional<($PaintbrushItem$ItemRequirements)>
public static "getStorageDyePartsNeeded"(arg0: integer, arg1: integer, arg2: $ITintable$$Type): $Map<($TagKey<($Item)>), (integer)>
public static "getItemRequirements"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $Optional<($PaintbrushItem$ItemRequirements)>
public static "getItemRequirements"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Map$$Type<($ResourceLocation$$Type), (integer)>): $Optional<($PaintbrushItem$ItemRequirements)>
public static "getRemainingParts"(arg0: $ItemStack$$Type): $Map<($ResourceLocation), (integer)>
public static "resetMainColor"(arg0: $ItemStack$$Type): void
public static "getBarrelMaterials"(arg0: $ItemStack$$Type): $Map<($BarrelMaterial), ($ResourceLocation)>
public static "setBarrelMaterials"(arg0: $ItemStack$$Type, arg1: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
public static "setRemainingParts"(arg0: $ItemStack$$Type, arg1: $Map$$Type<($ResourceLocation$$Type), (integer)>): void
public static "resetAccentColor"(arg0: $ItemStack$$Type): void
public static "setColors"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ITintable$$Type, arg3: $IMaterialHolder$$Type): boolean
public static "getMainColor"(arg0: $ItemStack$$Type): integer
public static "getAccentColor"(arg0: $ItemStack$$Type): integer
public static "paint"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: float, arg3: $IMaterialHolder$$Type, arg4: $ITintable$$Type, arg5: $Vec3$$Type, arg6: $Direction$$Type, arg7: $SoundEvent$$Type): boolean
public static "paint"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $IMaterialHolder$$Type, arg3: $ITintable$$Type, arg4: $Vec3$$Type, arg5: $Direction$$Type, arg6: $SoundEvent$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "getMaterialHolderPartsNeeded"(arg0: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>, arg1: $IMaterialHolder$$Type): $Map<($ResourceLocation), (integer)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintbrushItem$$Type = ($PaintbrushItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintbrushItem$$Original = $PaintbrushItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.ShulkerBoxItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$IStashStorageItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IStashStorageItem$StashResult} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Map} from "java.util.Map"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StorageBlockItem} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageBlockItem"

export class $ShulkerBoxItem extends $StorageBlockItem implements $IStashStorageItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)
constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getItemStashable"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $IStashStorageItem$StashResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "getInventoryTooltip"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getNumberOfUpgradeSlots"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): integer
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "stash"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "getNumberOfInventorySlots"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxItem$$Type = ($ShulkerBoxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxItem$$Original = $ShulkerBoxItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.PackingTapeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export class $PackingTapeItem extends $ItemBase {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: boolean)

public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackingTapeItem$$Type = ($PackingTapeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PackingTapeItem$$Original = $PackingTapeItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.PaintbrushItem$ItemRequirements" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $PaintbrushItem$ItemRequirements extends $Record {
constructor(itemsPresent: $List$$Type<($ItemStack$$Type)>, itemsMissing: $List$$Type<($ItemStack$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "itemsMissing"(): $List<($ItemStack)>
public "itemsPresent"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintbrushItem$ItemRequirements$$Type = ({"itemsMissing"?: $List$$Type<($ItemStack$$Type)>, "itemsPresent"?: $List$$Type<($ItemStack$$Type)>}) | ([itemsMissing?: $List$$Type<($ItemStack$$Type)>, itemsPresent?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintbrushItem$ItemRequirements$$Original = $PaintbrushItem$ItemRequirements;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$VanillaTierUpgradeDefinition" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$RandomizableContainerBlockEntity} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$StorageBlockBase, $StorageBlockBase$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockBase"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StorageTierUpgradeItem$TierUpgradeDefinition} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageTierUpgradeItem$TierUpgradeDefinition"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageTierUpgradeItem$VanillaTierUpgradeDefinition<B extends $RandomizableContainerBlockEntity> extends $StorageTierUpgradeItem$TierUpgradeDefinition<(B)> {
constructor(arg0: $Class$$Type<(B)>, arg1: $Predicate$$Type<(B)>, arg2: $StorageBlockBase$$Type, arg3: $WoodType$$Type, ...arg4: ($Property$$Type<(never)>)[])

public "getCountRequired"(arg0: $BlockState$$Type): integer
public "isUpgradingBlocked"(): $Predicate
public "blockEntityClass"(): $Class
public "woodType"(): $WoodType
public "newBlock"(): $StorageBlockBase
public "getPropertiesToCopy"(): $List
get "upgradingBlocked"(): $Predicate
get "propertiesToCopy"(): $List
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$$Type<B> = ($StorageTierUpgradeItem$VanillaTierUpgradeDefinition<(B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTierUpgradeItem$VanillaTierUpgradeDefinition$$Original<B> = $StorageTierUpgradeItem$VanillaTierUpgradeDefinition<(B)>;}
declare module "net.p3pp3rf1y.sophisticatedstorage.item.WoodStorageBlockItem" {
import {$IDataComponentHolderExtension$$Type} from "net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$StorageBlockItem} from "net.p3pp3rf1y.sophisticatedstorage.item.StorageBlockItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $WoodStorageBlockItem extends $StorageBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "WOOD_TYPE_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($WoodType)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "getDisplayName"(arg0: StringJS, arg1: $WoodType$$Type): $Component
public "setMainColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "setAccentColor"(arg0: $ItemStack$$Type, arg1: integer): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "setPacked"(arg0: $ItemStack$$Type, arg1: boolean): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "isPacked"(arg0: $ItemStack$$Type): boolean
public static "getWoodType"(arg0: $IDataComponentHolderExtension$$Type): $Optional<($WoodType)>
public static "setWoodType"(arg0: $ItemStack$$Type, arg1: $WoodType$$Type): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockItem$$Type = ($WoodStorageBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodStorageBlockItem$$Original = $WoodStorageBlockItem;}
