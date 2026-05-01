declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmeltingUpgradeWrapper" {
import {$SmeltingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmeltingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$CookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$SmeltingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmeltingUpgradeWrapper), ($SmeltingUpgradeItem), ($SmeltingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$SmeltingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$$Original = $CookingUpgradeWrapper$SmeltingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$HungerLevel, $HungerLevel$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.HungerLevel"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$FeedingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeItem"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $FeedingUpgradeWrapper extends $UpgradeWrapperBase<($FeedingUpgradeWrapper), ($FeedingUpgradeItem)> implements $ITickableUpgrade$$Interface, $IFilteredUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getFilterLogic"(): $FilterLogic
public "setFeedAtHungerLevel"(arg0: $HungerLevel$$Type): void
public "getFeedAtHungerLevel"(): $HungerLevel
public "setFeedImmediatelyWhenHurt"(arg0: boolean): void
public "shouldFeedImmediatelyWhenHurt"(): boolean
get "filterLogic"(): $FilterLogic
set "feedAtHungerLevel"(value: $HungerLevel$$Type)
get "feedAtHungerLevel"(): $HungerLevel
set "feedImmediatelyWhenHurt"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeWrapper$$Type = ($FeedingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeedingUpgradeWrapper$$Original = $FeedingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"

export interface $ICookingUpgradeItem$$Interface {

(): $CookingUpgradeConfig$$Type
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
}

export class $ICookingUpgradeItem implements $ICookingUpgradeItem$$Interface {
 "getCookingUpgradeConfig"(): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgradeItem$$Type = (() => $CookingUpgradeConfig$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICookingUpgradeItem$$Original = $ICookingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IInsertResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IExtractResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IExtractResponseUpgrade"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ISlotChangeResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$CompactingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeItem"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $CompactingUpgradeWrapper extends $UpgradeWrapperBase<($CompactingUpgradeWrapper), ($CompactingUpgradeItem)> implements $IInsertResponseUpgrade$$Interface, $IFilteredUpgrade$$Interface, $ISlotChangeResponseUpgrade$$Interface, $ITickableUpgrade$$Interface, $IExtractResponseUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "setCompactNonUncraftable"(arg0: boolean): void
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
public "onAfterExtract"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type): void
public "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
public "shouldWorkInGUI"(): boolean
public "resetFullSlotInfo"(): void
public "getFilterLogic"(): $FilterLogic
public "shouldCompactNonUncraftable"(): boolean
public "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
set "shouldWorkdInGUI"(value: boolean)
set "compactNonUncraftable"(value: boolean)
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeWrapper$$Type = ($CompactingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingUpgradeWrapper$$Original = $CompactingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic" {
import {$MemorySettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$ContentsFilterType, $ContentsFilterType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterType"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ContentsFilterLogic extends $FilterLogic {
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $Supplier$$Type<($InventoryHandler$$Type)>, arg4: $MemorySettingsCategory$$Type, arg5: $DeferredHolder$$Type<($DataComponentType$$Type<(never)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "getFilterType"(): $ContentsFilterType
public "setDepositFilterType"(arg0: $ContentsFilterType$$Type): void
get "filterType"(): $ContentsFilterType
set "depositFilterType"(value: $ContentsFilterType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterLogic$$Type = ($ContentsFilterLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContentsFilterLogic$$Original = $ContentsFilterLogic;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$CraftingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeWrapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$Holder} from "net.minecraft.core.Holder"

export class $CraftingUpgradeItem extends $UpgradeItemBase<($CraftingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CraftingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CraftingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeItem$$Type = ($CraftingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingUpgradeItem$$Original = $CraftingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $IRenderedBatteryUpgrade$BatteryRenderInfo {
constructor(arg0: float)

public "serialize"(): $CompoundTag
public "setChargeRatio"(arg0: float): void
public "getChargeRatio"(): float
public static "deserialize"(arg0: $CompoundTag$$Type): $IRenderedBatteryUpgrade$BatteryRenderInfo
set "chargeRatio"(value: float)
get "chargeRatio"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type = ($IRenderedBatteryUpgrade$BatteryRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$$Original = $IRenderedBatteryUpgrade$BatteryRenderInfo;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.HungerLevel" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HungerLevel extends $Enum<($HungerLevel)> implements $StringRepresentable$$Interface {
static readonly "HALF": $HungerLevel
static readonly "CODEC": $Codec<($HungerLevel)>
static readonly "ANY": $HungerLevel
static readonly "FULL": $HungerLevel
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($HungerLevel)>

public static "values"(): ($HungerLevel)[]
public static "valueOf"(arg0: StringJS): $HungerLevel
public "next"(): $HungerLevel
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $HungerLevel
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
export type $HungerLevel$$Type = (("any") | ("half") | ("full"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HungerLevel$$Original = $HungerLevel;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmeltingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$CookingUpgradeWrapper$SmeltingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmeltingUpgradeWrapper"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$ICookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmeltingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)> implements $ICookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingUpgradeItem$$Type = ($SmeltingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmeltingUpgradeItem$$Original = $SmeltingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UpgradeGroup {
static readonly "NONE": $UpgradeGroup

constructor(arg0: StringJS, arg1: StringJS)

public "name"(): StringJS
public "isSolo"(): boolean
public "translName"(): StringJS
get "solo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeGroup$$Type = ($UpgradeGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeGroup$$Original = $UpgradeGroup;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem" {
import {$BlockConverterUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StonecutterUpgradeItem$Wrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem$Wrapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$Holder} from "net.minecraft.core.Holder"

export class $StonecutterUpgradeItem extends $BlockConverterUpgradeItem<($StonecutterUpgradeItem), ($StonecutterUpgradeItem$Wrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($StonecutterUpgradeItem$Wrapper)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($StonecutterUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$$Type = ($StonecutterUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterUpgradeItem$$Original = $StonecutterUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TankUpgradeWrapper$TankComponentItemHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper$TankComponentItemHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IStackableContentsUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade"
import {$IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$TankUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeItem"
import {$SimpleFluidContent} from "net.neoforged.neoforge.fluids.SimpleFluidContent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IRenderedTankUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TankUpgradeWrapper extends $UpgradeWrapperBase<($TankUpgradeWrapper), ($TankUpgradeItem)> implements $IRenderedTankUpgrade$$Interface, $ITickableUpgrade$$Interface, $IStackableContentsUpgrade$$Interface {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_RESULT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "INPUT_RESULT_SLOT": integer

public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): integer
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getContents"(): $FluidStack
public static "getContents"(arg0: $ItemStack$$Type): $SimpleFluidContent
public "getInventory"(): $TankUpgradeWrapper$TankComponentItemHandler
public "setTankRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>): void
public "interactWithCursorStack"(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "forceUpdateTankRenderInfo"(): void
public "getTankCapacity"(): integer
public "getMinimumMultiplierRequired"(): integer
public "drainHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: boolean, arg3: boolean): boolean
public "drainHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "fillHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: boolean, arg3: boolean): boolean
public "canBeDisabled"(): boolean
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
get "contents"(): $FluidStack
get "inventory"(): $TankUpgradeWrapper$TankComponentItemHandler
set "tankRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>)
get "tankCapacity"(): integer
get "minimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$$Type = ($TankUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankUpgradeWrapper$$Original = $TankUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmokingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$CookingUpgradeWrapper$SmokingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmokingUpgradeWrapper"
import {$Holder} from "net.minecraft.core.Holder"
import {$ICookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmokingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmokingUpgradeWrapper)> implements $ICookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingUpgradeItem$$Type = ($SmokingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokingUpgradeItem$$Original = $SmokingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $AlchemyFilterAttribute extends $Record {
static readonly "CODEC": $Codec<($AlchemyFilterAttribute)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlchemyFilterAttribute)>

constructor(arg0: $ItemStack$$Type, arg1: $AlchemyCondition$$Type)
constructor(filter: $ItemStack$$Type, condition: $AlchemyCondition$$Type, value: float)

public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $ItemStack
public "setValue"(arg0: float): $AlchemyFilterAttribute
public "condition"(): $AlchemyCondition
public "setFilter"(arg0: $ItemStack$$Type): $AlchemyFilterAttribute
public "setConditionAndValue"(arg0: $AlchemyCondition$$Type, arg1: float): $AlchemyFilterAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyFilterAttribute$$Type = ({"value"?: float, "condition"?: $AlchemyCondition$$Type, "filter"?: $ItemStack$$Type}) | ([value?: float, condition?: $AlchemyCondition$$Type, filter?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyFilterAttribute$$Original = $AlchemyFilterAttribute;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$AutomationDirection, $AutomationDirection$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.AutomationDirection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$XpPumpUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"

export class $XpPumpUpgradeWrapper extends $UpgradeWrapperBase<($XpPumpUpgradeWrapper), ($XpPumpUpgradeItem)> implements $ITickableUpgrade$$Interface {
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getLevel"(): integer
public "setLevel"(arg0: integer): void
public "takeLevelsFromPlayer"(arg0: $Player$$Type): void
public "giveAllExperienceToPlayer"(arg0: $Player$$Type): void
public "setLevelsToStore"(arg0: integer): void
public "setLevelsToTake"(arg0: integer): void
public "getLevelsToTake"(): integer
public "giveLevelsToPlayer"(arg0: $Player$$Type): void
public "getLevelsToStore"(): integer
public "setMendItems"(arg0: boolean): void
public "shouldMendItems"(): boolean
public "takeAllExperienceFromPlayer"(arg0: $Player$$Type): void
public "getDirection"(): $AutomationDirection
public "setDirection"(arg0: $AutomationDirection$$Type): void
get "level"(): integer
set "level"(value: integer)
set "levelsToStore"(value: integer)
set "levelsToTake"(value: integer)
get "levelsToTake"(): integer
get "levelsToStore"(): integer
set "mendItems"(value: boolean)
get "direction"(): $AutomationDirection
set "direction"(value: $AutomationDirection$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeWrapper$$Type = ($XpPumpUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpPumpUpgradeWrapper$$Original = $XpPumpUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic$CookingComponentItemHandler" {
import {$CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComponentItemHandler} from "net.neoforged.neoforge.items.ComponentItemHandler"

export class $CookingLogic$CookingComponentItemHandler extends $ComponentItemHandler {
constructor(arg0: $CookingLogic$$Type)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlotWithoutValidation"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$CookingComponentItemHandler$$Type = ($CookingLogic$CookingComponentItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingLogic$CookingComponentItemHandler$$Original = $CookingLogic$CookingComponentItemHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$InfinityUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem"

export class $InfinityUpgradeItem$Wrapper extends $UpgradeWrapperBase<($InfinityUpgradeItem$Wrapper), ($InfinityUpgradeItem)> {
public "getPermissionLevel"(): integer
public "canBeDisabled"(): boolean
public "onBeforeRemoved"(): void
public "onAdded"(): void
get "permissionLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$Wrapper$$Type = ($InfinityUpgradeItem$Wrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityUpgradeItem$Wrapper$$Original = $InfinityUpgradeItem$Wrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.EntityMatch" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EntityMatch extends $Enum<($EntityMatch)> implements $StringRepresentable$$Interface {
static readonly "PLAYERS": $EntityMatch
static readonly "CODEC": $Codec<($EntityMatch)>
static readonly "PLAYERS_AND_ENTITIES": $EntityMatch
static readonly "ENTITIES": $EntityMatch
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EntityMatch)>

public static "values"(): ($EntityMatch)[]
public static "valueOf"(arg0: StringJS): $EntityMatch
public "next"(): $EntityMatch
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $EntityMatch
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
export type $EntityMatch$$Type = (("players") | ("players_and_entities") | ("entities"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityMatch$$Original = $EntityMatch;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"

export interface $IUpgradeItem$$Interface<T extends $IUpgradeWrapper> {
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "inventoryColumnsTaken"(): integer
get "upgradeGroup"(): $UpgradeGroup
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}

export class $IUpgradeItem<T extends $IUpgradeWrapper> implements $IUpgradeItem$$Interface {
 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
 "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
 "getInventoryColumnsTaken"(): integer
 "getUpgradesPerStorage"(arg0: StringJS): integer
 "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
 "getUpgradeGroup"(): $UpgradeGroup
 "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "getUpgradesInGroupPerStorage"(arg0: StringJS): integer
 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
 "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: integer): $UpgradeSlotChangeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$$Type<T> = ($IUpgradeItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeItem$$Original<T> = $IUpgradeItem<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemDefinition" {
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$AlchemyUpgradeWrapper$FinishUsing, $AlchemyUpgradeWrapper$FinishUsing$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$FinishUsing"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlchemyUpgradeWrapper$AlchemyItemEntityMatcher, $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemEntityMatcher"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AlchemyUpgradeWrapper$StartUsing, $AlchemyUpgradeWrapper$StartUsing$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$StartUsing"
import {$AlchemyUpgradeWrapper$AlchemyItemStackMatcher, $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemStackMatcher"
import {$Record} from "java.lang.Record"

export class $AlchemyUpgradeWrapper$AlchemyItemDefinition extends $Record {
constructor(arg0: $Predicate$$Type<($ItemStack)>, arg1: $Function$$Type<($ItemStack), ($AlchemyCondition$$Type)>, arg2: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, arg3: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, arg4: $AlchemyUpgradeWrapper$StartUsing$$Type, arg5: $AlchemyUpgradeWrapper$FinishUsing$$Type)
constructor(filter: $Predicate$$Type<($ItemStack)>, getDefaultCondition: $Function$$Type<($ItemStack), ($AlchemyCondition$$Type)>, canApply: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, stackMatches: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, startUsing: $AlchemyUpgradeWrapper$StartUsing$$Type, finishUsing: $AlchemyUpgradeWrapper$FinishUsing$$Type, hasItemUseEffects: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $Predicate<($ItemStack)>
public "finishUsing"(): $AlchemyUpgradeWrapper$FinishUsing
public "getDefaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
public "startUsing"(): $AlchemyUpgradeWrapper$StartUsing
public "canApply"(): $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher
public "stackMatches"(): $AlchemyUpgradeWrapper$AlchemyItemStackMatcher
public "hasItemUseEffects"(): boolean
get "defaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type = ({"stackMatches"?: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, "startUsing"?: $AlchemyUpgradeWrapper$StartUsing$$Type, "finishUsing"?: $AlchemyUpgradeWrapper$FinishUsing$$Type, "getDefaultCondition"?: $Function$$Type<($ItemStack$$Type), ($AlchemyCondition$$Type)>, "filter"?: $Predicate$$Type<($ItemStack$$Type)>, "canApply"?: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, "hasItemUseEffects"?: boolean}) | ([stackMatches?: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, startUsing?: $AlchemyUpgradeWrapper$StartUsing$$Type, finishUsing?: $AlchemyUpgradeWrapper$FinishUsing$$Type, getDefaultCondition?: $Function$$Type<($ItemStack$$Type), ($AlchemyCondition$$Type)>, filter?: $Predicate$$Type<($ItemStack$$Type)>, canApply?: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, hasItemUseEffects?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Original = $AlchemyUpgradeWrapper$AlchemyItemDefinition;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic$ObservableFilterItemStackHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$List$$Type} from "java.util.List"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$FilterItemStackHandler} from "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler"

export class $FilterLogic$ObservableFilterItemStackHandler extends $FilterItemStackHandler {
constructor(arg0: $FilterLogic$$Type, arg1: integer)

public "setOnSlotChange"(arg0: $IntConsumer$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "initFilters"(arg0: $List$$Type<($ItemStack$$Type)>): void
set "onSlotChange"(value: $IntConsumer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$$Type = ($FilterLogic$ObservableFilterItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$$Original = $FilterLogic$ObservableFilterItemStackHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade" {
import {$CookingLogic, $CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $ICookingUpgrade$$Interface<T extends $AbstractCookingRecipe> {

(): $CookingLogic$$Type<(T)>
get "cookingLogic"(): $CookingLogic<(T)>
}

export class $ICookingUpgrade<T extends $AbstractCookingRecipe> implements $ICookingUpgrade$$Interface {
static readonly "UPGRADE_GROUP": $UpgradeGroup

 "getCookingLogic"(): $CookingLogic<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgrade$$Type<T> = (() => $CookingLogic$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICookingUpgrade$$Original<T> = $ICookingUpgrade<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$MagnetUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeItem"
import {$IPickupResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LevelTickEvent$Pre$$Type} from "net.neoforged.neoforge.event.tick.LevelTickEvent$Pre"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IMagnetPreventionChecker$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.IMagnetPreventionChecker"
import {$ContentsFilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IContentsFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"

export class $MagnetUpgradeWrapper extends $UpgradeWrapperBase<($MagnetUpgradeWrapper), ($MagnetUpgradeItem)> implements $IContentsFilteredUpgrade$$Interface, $ITickableUpgrade$$Interface, $IPickupResponseUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "shouldPickupItems"(): boolean
public "shouldPickupXp"(): boolean
public "getFilterLogic"(): $ContentsFilterLogic
public "setPickupXp"(arg0: boolean): void
public "setPickupItems"(arg0: boolean): void
public static "globalPostTick"(arg0: $LevelTickEvent$Pre$$Type): void
public static "onWorldUnload"(arg0: $LevelEvent$Unload$$Type): void
public "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public static "addMagnetPreventionChecker"(arg0: $IMagnetPreventionChecker$$Type): void
get "filterLogic"(): $ContentsFilterLogic
set "pickupXp"(value: boolean)
set "pickupItems"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeWrapper$$Type = ($MagnetUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagnetUpgradeWrapper$$Original = $MagnetUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ITickableUpgrade$$Interface {

(arg0: $Entity, arg1: $Level, arg2: $BlockPos): void
}

export class $ITickableUpgrade implements $ITickableUpgrade$$Interface {
 "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUpgrade$$Type = ((arg0: $Entity, arg1: $Level, arg2: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITickableUpgrade$$Original = $ITickableUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeAccessModifier" {
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor"

export interface $IUpgradeAccessModifier$$Interface {

(arg0: $IUpgradeWrapperAccessor): $IUpgradeWrapperAccessor$$Type
}

export class $IUpgradeAccessModifier implements $IUpgradeAccessModifier$$Interface {
 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$$Type): $IUpgradeWrapperAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeAccessModifier$$Type = ((arg0: $IUpgradeWrapperAccessor) => $IUpgradeWrapperAccessor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeAccessModifier$$Original = $IUpgradeAccessModifier;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper$TankComponentItemHandler" {
import {$TankUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComponentItemHandler} from "net.neoforged.neoforge.items.ComponentItemHandler"

export class $TankUpgradeWrapper$TankComponentItemHandler extends $ComponentItemHandler {
constructor(arg0: $TankUpgradeWrapper$$Type, arg1: $ItemStack$$Type)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$TankComponentItemHandler$$Type = ($TankUpgradeWrapper$TankComponentItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankUpgradeWrapper$TankComponentItemHandler$$Original = $TankUpgradeWrapper$TankComponentItemHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade" {
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"

export interface $IFilteredUpgrade$$Interface {

(): $FilterLogic$$Type
get "filterLogic"(): $FilterLogic
}

export class $IFilteredUpgrade implements $IFilteredUpgrade$$Interface {
 "getFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteredUpgrade$$Type = (() => $FilterLogic$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFilteredUpgrade$$Original = $IFilteredUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$BlockConverterUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $BlockConverterUpgradeWrapper<U extends $BlockConverterUpgradeItem<(object), (object)>, W extends $BlockConverterUpgradeWrapper<(object), (object)>> extends $UpgradeWrapperBase<(W), (U)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "shouldShiftClickIntoStorage"(): boolean
public "getInputInventory"(): $IItemHandlerModifiable
public "setRecipeId"(arg0: $ResourceLocation$$Type): void
public "setShiftClickIntoStorage"(arg0: boolean): void
public "canBeDisabled"(): boolean
public "getRecipeId"(): $Optional<($ResourceLocation)>
get "inputInventory"(): $IItemHandlerModifiable
set "recipeId"(value: $ResourceLocation$$Type)
set "shiftClickIntoStorage"(value: boolean)
get "recipeId"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConverterUpgradeWrapper$$Type<U, W> = ($BlockConverterUpgradeWrapper<(U), (W)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockConverterUpgradeWrapper$$Original<U, W> = $BlockConverterUpgradeWrapper<(U), (W)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.IMagnetPreventionChecker" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IMagnetPreventionChecker$$Interface {

(arg0: $Entity): boolean
}

export class $IMagnetPreventionChecker implements $IMagnetPreventionChecker$$Interface {
 "isBlocked"(arg0: $Entity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagnetPreventionChecker$$Type = ((arg0: $Entity) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMagnetPreventionChecker$$Original = $IMagnetPreventionChecker;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$ObservableFilterItemStackHandler" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlchemyFilterAttribute$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute"
import {$List$$Type} from "java.util.List"
import {$AlchemyUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper"
import {$FilterItemStackHandler} from "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler"

export class $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler extends $FilterItemStackHandler {
constructor(arg0: $AlchemyUpgradeWrapper$$Type, arg1: integer)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "initFilters"(arg0: $List$$Type<($AlchemyFilterAttribute$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$$Type = ($AlchemyUpgradeWrapper$ObservableFilterItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$$Original = $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade" {
import {$ContentsFilterLogic, $ContentsFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"

export interface $IContentsFilteredUpgrade$$Interface extends $IFilteredUpgrade$$Interface {

(): $ContentsFilterLogic$$Type
get "filterLogic"(): $ContentsFilterLogic
}

export class $IContentsFilteredUpgrade implements $IContentsFilteredUpgrade$$Interface {
 "getFilterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsFilteredUpgrade$$Type = (() => $ContentsFilterLogic$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContentsFilteredUpgrade$$Original = $IContentsFilteredUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PumpUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$PumpUpgradeConfig, $PumpUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeConfig"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $PumpUpgradeItem extends $UpgradeItemBase<($PumpUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $PumpUpgradeConfig$$Type, arg4: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($PumpUpgradeWrapper)>
public "getInteractWithWorldDefault"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getInteractWithHandDefault"(): boolean
public "getPumpUpgradeConfig"(): $PumpUpgradeConfig
public "getInteractWithFluidHandlersDefault"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($PumpUpgradeWrapper)>
get "interactWithWorldDefault"(): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "interactWithHandDefault"(): boolean
get "pumpUpgradeConfig"(): $PumpUpgradeConfig
get "interactWithFluidHandlersDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeItem$$Type = ($PumpUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PumpUpgradeItem$$Original = $PumpUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ContentsFilterType extends $Enum<($ContentsFilterType)> implements $StringRepresentable$$Interface {
static readonly "STORAGE": $ContentsFilterType
static readonly "BLOCK": $ContentsFilterType
static readonly "ALLOW": $ContentsFilterType

public static "values"(): ($ContentsFilterType)[]
public static "valueOf"(arg0: StringJS): $ContentsFilterType
public "next"(): $ContentsFilterType
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $ContentsFilterType
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
export type $ContentsFilterType$$Type = (("allow") | ("block") | ("storage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContentsFilterType$$Original = $ContentsFilterType;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"

export interface $IInsertResponseUpgrade$$Interface {
}

export class $IInsertResponseUpgrade implements $IInsertResponseUpgrade$$Interface {
 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
 "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertResponseUpgrade$$Type = ($IInsertResponseUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInsertResponseUpgrade$$Original = $IInsertResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper" {
import {$CookingLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ICookingUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoCookingUpgradeWrapper<W extends $AutoCookingUpgradeWrapper<(object), (object), (object)>, U extends $UpgradeItemBase<(object)>, R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade$$Interface, $ICookingUpgrade$$Interface<(R)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>, arg3: $RecipeType$$Type<(R)>, arg4: float)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getCookingLogic"(): $CookingLogic<(R)>
public "setEnabled"(arg0: boolean): void
public "getFuelFilterLogic"(): $FilterLogic
public "getInputFilterLogic"(): $FilterLogic
public "onBeforeRemoved"(): void
get "cookingLogic"(): $CookingLogic<(R)>
set "enabled"(value: boolean)
get "fuelFilterLogic"(): $FilterLogic
get "inputFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$$Type<W, U, R> = ($AutoCookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCookingUpgradeWrapper$$Original<W, U, R> = $AutoCookingUpgradeWrapper<(W), (U), (R)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemStackMatcher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Interface {

(arg0: $ItemStack, arg1: $ItemStack, arg2: boolean, arg3: boolean, arg4: boolean): boolean
}

export class $AlchemyUpgradeWrapper$AlchemyItemStackMatcher implements $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Interface {
 "test"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type = ((arg0: $ItemStack, arg1: $ItemStack, arg2: boolean, arg3: boolean, arg4: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Original = $AlchemyUpgradeWrapper$AlchemyItemStackMatcher;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $IRenderedTankUpgrade$TankRenderInfo {
constructor()
constructor(arg0: $FluidStack$$Type, arg1: float)

public "getFluid"(): $Optional<($FluidStack)>
public "serialize"(): $CompoundTag
public "setFillRatio"(arg0: float): void
public "getFillRatio"(): float
public static "deserialize"(arg0: $CompoundTag$$Type): $IRenderedTankUpgrade$TankRenderInfo
public "setFluid"(arg0: $FluidStack$$Type): void
get "fluid"(): $Optional<($FluidStack)>
set "fillRatio"(value: float)
get "fillRatio"(): float
set "fluid"(value: $FluidStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$$Type = ($IRenderedTankUpgrade$TankRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$$Original = $IRenderedTankUpgrade$TankRenderInfo;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemEntityMatcher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Interface {

(arg0: $LivingEntity, arg1: $ItemStack, arg2: boolean, arg3: boolean): boolean
}

export class $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher implements $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Interface {
 "test"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type = ((arg0: $LivingEntity, arg1: $ItemStack, arg2: boolean, arg3: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Original = $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem" {
import {$BlockConverterUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$Holder} from "net.minecraft.core.Holder"

export class $BlockConverterUpgradeItem<U extends $BlockConverterUpgradeItem<(object), (object)>, W extends $BlockConverterUpgradeWrapper<(object), (object)>> extends $UpgradeItemBase<(W)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConverterUpgradeItem$$Type<U, W> = ($BlockConverterUpgradeItem<(U), (W)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockConverterUpgradeItem$$Original<U, W> = $BlockConverterUpgradeItem<(U), (W)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IPickupResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IContentsFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$PickupUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeItem"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $PickupUpgradeWrapper extends $UpgradeWrapperBase<($PickupUpgradeWrapper), ($PickupUpgradeItem)> implements $IPickupResponseUpgrade$$Interface, $IContentsFilteredUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $FilterLogic
public "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeWrapper$$Type = ($PickupUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickupUpgradeWrapper$$Original = $PickupUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$VoidUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeWrapper"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$VoidUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $VoidUpgradeItem extends $UpgradeItemBase<($VoidUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($VoidUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $VoidUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($VoidUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "isVoidAlwaysEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($VoidUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "voidAlwaysEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeItem$$Type = ($VoidUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidUpgradeItem$$Original = $VoidUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IIOFilterUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.api.IIOFilterUpgrade"
import {$FilterUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IContentsFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Direction, $Direction$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.Direction"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FilterUpgradeWrapper extends $UpgradeWrapperBase<($FilterUpgradeWrapper), ($FilterUpgradeItem)> implements $IContentsFilteredUpgrade$$Interface, $IIOFilterUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $FilterLogic
public "setEnabled"(arg0: boolean): void
public "getInputFilter"(): $Optional<($FilterLogic)>
public "getOutputFilter"(): $Optional<($FilterLogic)>
public "getDirection"(): $Direction
public "setDirection"(arg0: $Direction$$Type): void
get "filterLogic"(): $FilterLogic
set "enabled"(value: boolean)
get "inputFilter"(): $Optional<($FilterLogic)>
get "outputFilter"(): $Optional<($FilterLogic)>
get "direction"(): $Direction
set "direction"(value: $Direction$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeWrapper$$Type = ($FilterUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterUpgradeWrapper$$Original = $FilterUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IOverflowResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"

export interface $IOverflowResponseUpgrade$$Interface {
get "filterLogic"(): $FilterLogic
}

export class $IOverflowResponseUpgrade implements $IOverflowResponseUpgrade$$Interface {
 "onStorageOverflow"(arg0: $ItemStack$$Type): $ItemStack
 "onSlotOverflow"(arg0: $ItemStack$$Type): $ItemStack
 "getFilterLogic"(): $FilterLogic
 "hasSlotOverflowMatch"(arg0: $InventoryHandler$$Type, arg1: $ItemStack$$Type): boolean
 "worksInGui"(): boolean
 "stackMatchesFilter"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverflowResponseUpgrade$$Type = ($IOverflowResponseUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOverflowResponseUpgrade$$Original = $IOverflowResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $UpgradeHandler extends $ItemStackHandler {
static readonly "UPGRADE_INVENTORY_TAG": StringJS

constructor(arg0: integer, arg1: $IStorageWrapper$$Type, arg2: $CompoundTag$$Type, arg3: $Runnable$$Type, arg4: $Runnable$$Type)

public "setSize"(arg0: integer): void
public "refreshUpgradeWrappers"(): void
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "getListOfWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "setRenderUpgradeItems"(): void
public "removeRefreshCallback"(): void
public "getSlotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
public "refreshWrappersThatImplementAndTypeWrappers"(): void
public "getTypeWrappers"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$$Type<(T)>): $List<(T)>
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "increaseSize"(arg0: integer): void
public "setRefreshCallBack"(arg0: $Runnable$$Type): void
public "getWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "saveInventory"(): void
public "hasUpgrade"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$$Type<(T)>): boolean
public "setPersistent"(arg0: boolean): void
public "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "copyTo"(arg0: $UpgradeHandler$$Type): void
set "size"(value: integer)
get "renderUpgradeItems"(): void
get "slotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
set "refreshCallBack"(value: $Runnable$$Type)
set "persistent"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeHandler$$Type = ($UpgradeHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeHandler$$Original = $UpgradeHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeItem" {
import {$FeedingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $FeedingUpgradeItem extends $UpgradeItemBase<($FeedingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($FeedingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($FeedingUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($FeedingUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeItem$$Type = ($FeedingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeedingUpgradeItem$$Original = $FeedingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$TankUpgradeConfig, $TankUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeConfig"
import {$Holder} from "net.minecraft.core.Holder"
import {$IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TankUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $TankUpgradeItem extends $UpgradeItemBase<($TankUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($TankUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TankUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($TankUpgradeWrapper)>
public "getInventoryColumnsTaken"(): integer
public "getBaseCapacity"(arg0: $IStorageWrapper$$Type): integer
public "getTankCapacity"(arg0: $IStorageWrapper$$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "getTankUpgradeConfig"(): $TankUpgradeConfig
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): double
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($TankUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "tankUpgradeConfig"(): $TankUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeItem$$Type = ($TankUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankUpgradeItem$$Original = $TankUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig" {
import {$UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IUpgradeCountLimitConfig$$Interface {
}

export class $IUpgradeCountLimitConfig implements $IUpgradeCountLimitConfig$$Interface {
 "getMaxUpgradesInGroupPerStorage"(arg0: StringJS, arg1: $UpgradeGroup$$Type): integer
 "getMaxUpgradesPerStorage"(arg0: StringJS, arg1: $ResourceLocation$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeCountLimitConfig$$Type = ($IUpgradeCountLimitConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeCountLimitConfig$$Original = $IUpgradeCountLimitConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeItem" {
import {$Map} from "java.util.Map"
import {$FilterUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeWrapper"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $FilterUpgradeItem extends $UpgradeItemBase<($FilterUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($FilterUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($FilterUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($FilterUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeItem$$Type = ($FilterUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterUpgradeItem$$Original = $FilterUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper" {
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$AutoSmokingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmokingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AutoCookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper), ($AutoSmokingUpgradeItem), ($SmokingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$$Original = $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmokingUpgradeWrapper" {
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SmokingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmokingUpgradeItem"
import {$CookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$SmokingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmokingUpgradeWrapper), ($SmokingUpgradeItem), ($SmokingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$SmokingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$$Original = $CookingUpgradeWrapper$SmokingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.BlastingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CookingUpgradeWrapper$BlastingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$BlastingUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$ICookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $BlastingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$BlastingUpgradeWrapper)> implements $ICookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingUpgradeItem$$Type = ($BlastingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastingUpgradeItem$$Original = $BlastingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.FluidFilterLogic" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FluidFilterLogic {
constructor(arg0: integer, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFluid"(arg0: integer): $FluidStack
public "getNumberOfFluidFilters"(): integer
public "fluidMatches"(arg0: $FluidStack$$Type): boolean
public "setFluid"(arg0: integer, arg1: $FluidStack$$Type): void
get "numberOfFluidFilters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterLogic$$Type = ($FluidFilterLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidFilterLogic$$Original = $FluidFilterLogic;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeConfig" {
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $XpPumpUpgradeConfig {
readonly "mendingOn": $ModConfigSpec$BooleanValue
readonly "maxXpPointsPerMending": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeConfig$$Type = ($XpPumpUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpPumpUpgradeConfig$$Original = $XpPumpUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$JukeboxUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeItem"
import {$RepeatMode, $RepeatMode$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.RepeatMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export class $JukeboxUpgradeWrapper extends $UpgradeWrapperBase<($JukeboxUpgradeWrapper), ($JukeboxUpgradeItem)> implements $ITickableUpgrade$$Interface {
public "next"(): void
public "stop"(arg0: $LivingEntity$$Type): void
public "previous"(): void
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getDisc"(): $ItemStack
public "playNext"(arg0: boolean): void
public "playNext"(): void
public "getRepeatMode"(): $RepeatMode
public "playPrevious"(): void
public "getDiscSlotActive"(): integer
public "isShuffleEnabled"(): boolean
public "isPlaying"(): boolean
public "play"(arg0: $Entity$$Type): void
public "play"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onBeforeRemoved"(): void
public "setShuffleEnabled"(arg0: boolean): void
public "setRepeatMode"(arg0: $RepeatMode$$Type): void
public "getDiscFinishTime"(): long
public "getDiscInventory"(): $IItemHandler
get "disc"(): $ItemStack
get "repeatMode"(): $RepeatMode
get "discSlotActive"(): integer
get "shuffleEnabled"(): boolean
get "playing"(): boolean
set "shuffleEnabled"(value: boolean)
set "repeatMode"(value: $RepeatMode$$Type)
get "discFinishTime"(): long
get "discInventory"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeWrapper$$Type = ($JukeboxUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxUpgradeWrapper$$Original = $JukeboxUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade" {
import {$IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IRenderedTankUpgrade$$Interface {
set "tankRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>)
}

export class $IRenderedTankUpgrade implements $IRenderedTankUpgrade$$Interface {
 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>): void
 "forceUpdateTankRenderInfo"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$$Type = ($IRenderedTankUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRenderedTankUpgrade$$Original = $IRenderedTankUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem" {
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"

export interface $IAutoCookingUpgradeItem$$Interface {

(): $AutoCookingUpgradeConfig$$Type
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}

export class $IAutoCookingUpgradeItem implements $IAutoCookingUpgradeItem$$Interface {
 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoCookingUpgradeItem$$Type = (() => $AutoCookingUpgradeConfig$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAutoCookingUpgradeItem$$Original = $IAutoCookingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.AutomationDirection" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AutomationDirection extends $Enum<($AutomationDirection)> implements $StringRepresentable$$Interface {
static readonly "INPUT": $AutomationDirection
static readonly "CODEC": $Codec<($AutomationDirection)>
static readonly "OUTPUT": $AutomationDirection
static readonly "KEEP": $AutomationDirection
static readonly "OFF": $AutomationDirection
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AutomationDirection)>

public static "values"(): ($AutomationDirection)[]
public static "valueOf"(arg0: StringJS): $AutomationDirection
public "next"(): $AutomationDirection
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $AutomationDirection
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
export type $AutomationDirection$$Type = (("input") | ("output") | ("keep") | ("off"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutomationDirection$$Original = $AutomationDirection;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$VoidUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IInsertResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IOverflowResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IOverflowResponseUpgrade"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ISlotChangeResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade"
import {$VoidType, $VoidType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidType"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $VoidUpgradeWrapper extends $UpgradeWrapperBase<($VoidUpgradeWrapper), ($VoidUpgradeItem)> implements $IInsertResponseUpgrade$$Interface, $IFilteredUpgrade$$Interface, $ISlotChangeResponseUpgrade$$Interface, $ITickableUpgrade$$Interface, $IOverflowResponseUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "onStorageOverflow"(arg0: $ItemStack$$Type): $ItemStack
public "shouldVoidOverflow"(): boolean
public "onSlotOverflow"(arg0: $ItemStack$$Type): $ItemStack
public "getVoidType"(): $VoidType
public "setVoidType"(arg0: $VoidType$$Type): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
public "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "onBeforeInsert"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
public "shouldWorkInGUI"(): boolean
public "getFilterLogic"(): $FilterLogic
public "hasSlotOverflowMatch"(arg0: $InventoryHandler$$Type, arg1: $ItemStack$$Type): boolean
public "isVoidAlwaysEnabled"(): boolean
public "worksInGui"(): boolean
public "setVoidOverflowDefaultOrLoadFromNbt"(arg0: $VoidType$$Type): void
public "stackMatchesFilter"(arg0: $ItemStack$$Type): boolean
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
get "voidType"(): $VoidType
set "voidType"(value: $VoidType$$Type)
set "shouldWorkdInGUI"(value: boolean)
get "filterLogic"(): $FilterLogic
get "voidAlwaysEnabled"(): boolean
set "voidOverflowDefaultOrLoadFromNbt"(value: $VoidType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeWrapper$$Type = ($VoidUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidUpgradeWrapper$$Original = $VoidUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor" {
import {$List} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"

export interface $IUpgradeWrapperAccessor$$Interface {
}

export class $IUpgradeWrapperAccessor implements $IUpgradeWrapperAccessor$$Interface {
 "clearCache"(): void
 "onBeforeDeconstruct"(): void
 "getWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapperAccessor$$Type = ($IUpgradeWrapperAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeWrapperAccessor$$Original = $IUpgradeWrapperAccessor;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig" {
import {$CookingUpgradeConfig} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $AutoCookingUpgradeConfig extends $CookingUpgradeConfig {
readonly "fuelFilterSlotsInRow": $ModConfigSpec$IntValue
readonly "inputFilterSlots": $ModConfigSpec$IntValue
readonly "fuelFilterSlots": $ModConfigSpec$IntValue
readonly "fuelEfficiencyMultiplier": $ModConfigSpec$DoubleValue
readonly "inputFilterSlotsInRow": $ModConfigSpec$IntValue
readonly "cookingSpeedMultiplier": $ModConfigSpec$DoubleValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeConfig$$Type = ($AutoCookingUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCookingUpgradeConfig$$Original = $AutoCookingUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType$IFactory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $UpgradeType$IFactory$$Interface<T extends $IUpgradeWrapper> {

(arg0: $IStorageWrapper, arg1: $ItemStack, arg2: $Consumer<($ItemStack)>): T
}

export class $UpgradeType$IFactory<T extends $IUpgradeWrapper> implements $UpgradeType$IFactory$$Interface {
 "create"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$IFactory$$Type<T> = ((arg0: $IStorageWrapper, arg1: $ItemStack, arg2: $Consumer<($ItemStack)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeType$IFactory$$Original<T> = $UpgradeType$IFactory<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeConfig" {
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $PumpUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "filterSlots": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeConfig$$Type = ($PumpUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PumpUpgradeConfig$$Original = $PumpUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig" {
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $CookingUpgradeConfig {
readonly "fuelEfficiencyMultiplier": $ModConfigSpec$DoubleValue
readonly "cookingSpeedMultiplier": $ModConfigSpec$DoubleValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS)

public static "getInstance"(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeConfig$$Type = ($CookingUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingUpgradeConfig$$Original = $CookingUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper" {
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$AutoBlastingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoBlastingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AutoCookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper), ($AutoBlastingUpgradeItem), ($BlastingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$$Original = $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PrimaryMatch extends $Enum<($PrimaryMatch)> implements $StringRepresentable$$Interface {
static readonly "ITEM": $PrimaryMatch
static readonly "MOD": $PrimaryMatch
static readonly "CODEC": $Codec<($PrimaryMatch)>
static readonly "TAGS": $PrimaryMatch
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PrimaryMatch)>

public static "values"(): ($PrimaryMatch)[]
public static "valueOf"(arg0: StringJS): $PrimaryMatch
public "next"(): $PrimaryMatch
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $PrimaryMatch
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
export type $PrimaryMatch$$Type = (("item") | ("mod") | ("tags"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimaryMatch$$Original = $PrimaryMatch;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemBase} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IUpgradeItem$$Type, $IUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"

export class $UpgradeItemBase<T extends $IUpgradeWrapper> extends $ItemBase implements $IUpgradeItem$$Interface<(T)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public "getName"(): $Component
public "getUpgradesPerStorage"(arg0: StringJS): integer
public "getUpgradesInGroupPerStorage"(arg0: StringJS): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getType"(): $UpgradeType<(T)>
public "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
public "getInventoryColumnsTaken"(): integer
public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: integer): $UpgradeSlotChangeResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "inventoryColumnsTaken"(): integer
get "upgradeGroup"(): $UpgradeGroup
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemBase$$Type<T> = ($UpgradeItemBase<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeItemBase$$Original<T> = $UpgradeItemBase<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeConfig" {
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $BatteryUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "energyPerSlotRow": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeConfig$$Type = ($BatteryUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BatteryUpgradeConfig$$Original = $BatteryUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$FinishUsing" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$FinishUsing$$Interface {

(arg0: $ItemStack, arg1: $LivingEntity): $ItemStack$$Type
}

export class $AlchemyUpgradeWrapper$FinishUsing implements $AlchemyUpgradeWrapper$FinishUsing$$Interface {
 "apply"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$FinishUsing$$Type = ((arg0: $ItemStack, arg1: $LivingEntity) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$FinishUsing$$Original = $AlchemyUpgradeWrapper$FinishUsing;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $VoidType extends $Enum<($VoidType)> implements $StringRepresentable$$Interface {
static readonly "SLOT_OVERFLOW": $VoidType
static readonly "CODEC": $Codec<($VoidType)>
static readonly "STORAGE_OVERFLOW": $VoidType
static readonly "ALWAYS": $VoidType
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($VoidType)>

public static "values"(): ($VoidType)[]
public static "valueOf"(arg0: StringJS): $VoidType
public "next"(): $VoidType
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $VoidType
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
export type $VoidType$$Type = (("always") | ("slot_overflow") | ("storage_overflow"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidType$$Original = $VoidType;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.Direction" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable$$Interface {
static readonly "INPUT": $Direction
static readonly "CODEC": $Codec<($Direction)>
static readonly "OUTPUT": $Direction
static readonly "BOTH": $Direction
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Direction)>

public static "values"(): ($Direction)[]
public static "valueOf"(arg0: StringJS): $Direction
public "next"(): $Direction
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $Direction
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
export type $Direction$$Type = (("both") | ("input") | ("output"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction$$Original = $Direction;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $UpgradeWrapperBase<W extends $IUpgradeWrapper, T extends $UpgradeItemBase<(object)>> implements $IUpgradeWrapper$$Interface {
public "isEnabled"(): boolean
public "isInCooldown"(arg0: $Level$$Type): boolean
public "getCooldownTime"(): long
public "setEnabled"(arg0: boolean): void
public "getUpgradeStack"(): $ItemStack
public "canBeDisabled"(): boolean
public "onBeforeRemoved"(): void
public "hideSettingsTab"(): boolean
public "onAdded"(): void
get "enabled"(): boolean
get "cooldownTime"(): long
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWrapperBase$$Type<W, T> = ($UpgradeWrapperBase<(W), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeWrapperBase$$Original<W, T> = $UpgradeWrapperBase<(W), (T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PickupUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $PickupUpgradeItem extends $UpgradeItemBase<($PickupUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($PickupUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($PickupUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($PickupUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeItem$$Type = ($PickupUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickupUpgradeItem$$Original = $PickupUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper" {
import {$CookingLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ICookingUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CookingUpgradeWrapper<W extends $CookingUpgradeWrapper<(object), (object), (object)>, U extends $UpgradeItemBase<(object)>, R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade$$Interface, $ICookingUpgrade$$Interface<(R)> {
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getCookingLogic"(): $CookingLogic<(R)>
public "setEnabled"(arg0: boolean): void
public "onBeforeRemoved"(): void
get "cookingLogic"(): $CookingLogic<(R)>
set "enabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$$Type<W, U, R> = ($CookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingUpgradeWrapper$$Original<W, U, R> = $CookingUpgradeWrapper<(W), (U), (R)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeType$IFactory$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType$IFactory"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $UpgradeType<T extends $IUpgradeWrapper> {
constructor(arg0: $UpgradeType$IFactory$$Type<(T)>)

public "create"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$$Type<T> = ($UpgradeType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeType$$Original<T> = $UpgradeType<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.RepeatMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $RepeatMode extends $Enum<($RepeatMode)> implements $StringRepresentable$$Interface {
static readonly "ALL": $RepeatMode
static readonly "NO": $RepeatMode
static readonly "CODEC": $Codec<($RepeatMode)>
static readonly "ONE": $RepeatMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RepeatMode)>

public static "values"(): ($RepeatMode)[]
public static "valueOf"(arg0: StringJS): $RepeatMode
public "next"(): $RepeatMode
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $RepeatMode
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
export type $RepeatMode$$Type = (("all") | ("one") | ("no"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepeatMode$$Original = $RepeatMode;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStackableContentsUpgrade$$Interface {

(): integer
get "minimumMultiplierRequired"(): integer
}

export class $IStackableContentsUpgrade implements $IStackableContentsUpgrade$$Interface {
 "getMinimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackableContentsUpgrade$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStackableContentsUpgrade$$Original = $IStackableContentsUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$PumpUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$FluidFilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.FluidFilterLogic"

export class $PumpUpgradeWrapper extends $UpgradeWrapperBase<($PumpUpgradeWrapper), ($PumpUpgradeItem)> implements $ITickableUpgrade$$Interface {
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "shouldInteractWithWorld"(): boolean
public "setInteractWithWorld"(arg0: boolean): void
public "setInteractWithHand"(arg0: boolean): void
public "shouldInteractWithHand"(): boolean
public "getFluidFilterLogic"(): $FluidFilterLogic
public "isInput"(): boolean
public "setIsInput"(arg0: boolean): void
public "shouldInteractWithFluidHandlers"(): boolean
public "setInteractWithFluidHandlers"(arg0: boolean): void
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): integer
set "interactWithWorld"(value: boolean)
set "interactWithHand"(value: boolean)
get "fluidFilterLogic"(): $FluidFilterLogic
get "input"(): boolean
set "interactWithFluidHandlers"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeWrapper$$Type = ($PumpUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PumpUpgradeWrapper$$Original = $PumpUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$FilterLogic$ObservableFilterItemStackHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic$ObservableFilterItemStackHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$PrimaryMatch, $PrimaryMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch"
import {$FilterAttributes, $FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FilterLogic {
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $DeferredHolder$$Type<($DataComponentType$$Type<(never)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $Predicate$$Type<($ItemStack)>, arg4: $DeferredHolder$$Type<($DataComponentType$$Type<(never)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "addTag"(arg0: $TagKey$$Type<($Item)>): void
public "setEmptyAllowListMatchesEverything"(): void
public "shouldMatchComponents"(): boolean
public "getAttributesComponent"(): $DeferredHolder<($DataComponentType<(never)>), ($DataComponentType<($FilterAttributes)>)>
public "shouldMatchDurability"(): boolean
public "getTagKeys"(): $Set<($TagKey<($Item)>)>
public "setAllowByDefault"(arg0: boolean): void
public "setMatchComponents"(arg0: boolean): void
public "isAllowList"(): boolean
public "getPrimaryMatch"(): $PrimaryMatch
public "shouldMatchAnyTag"(): boolean
public "getFilterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
public "setMatchAnyTag"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "stackMatchesFilter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "setAllowList"(arg0: boolean): void
public "setPrimaryMatch"(arg0: $PrimaryMatch$$Type): void
public "removeTagName"(arg0: $TagKey$$Type<($Item)>): void
get "emptyAllowListMatchesEverything"(): void
get "attributesComponent"(): $DeferredHolder<($DataComponentType<(never)>), ($DataComponentType<($FilterAttributes)>)>
get "tagKeys"(): $Set<($TagKey<($Item)>)>
set "allowByDefault"(value: boolean)
set "matchComponents"(value: boolean)
get "allowList"(): boolean
get "primaryMatch"(): $PrimaryMatch
get "filterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
set "matchAnyTag"(value: boolean)
set "matchDurability"(value: boolean)
set "allowList"(value: boolean)
set "primaryMatch"(value: $PrimaryMatch$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$$Type = ($FilterLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterLogic$$Original = $FilterLogic;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$StartUsing" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$StartUsing$$Interface {

(arg0: $ItemStack, arg1: $LivingEntity): integer
}

export class $AlchemyUpgradeWrapper$StartUsing implements $AlchemyUpgradeWrapper$StartUsing$$Interface {
 "applyAsInt"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$StartUsing$$Type = ((arg0: $ItemStack, arg1: $LivingEntity) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$StartUsing$$Original = $AlchemyUpgradeWrapper$StartUsing;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CraftingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatefulComponentItemHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CraftingUpgradeWrapper extends $UpgradeWrapperBase<($CraftingUpgradeWrapper), ($CraftingUpgradeItem)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "shouldRefillCraftingGridNBT"(): boolean
public "shouldShiftClickIntoStorage"(): boolean
public "getInventory"(): $StatefulComponentItemHandler
public "setShiftClickIntoStorage"(arg0: boolean): void
public "setRefillCraftingGridNBT"(arg0: boolean): void
public "extractFromStorageOrPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "insertIntoStorageOrPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "canBeDisabled"(): boolean
get "inventory"(): $StatefulComponentItemHandler
set "shiftClickIntoStorage"(value: boolean)
set "refillCraftingGridNBT"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeWrapper$$Type = ($CraftingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingUpgradeWrapper$$Original = $CraftingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmokingUpgradeItem" {
import {$IAutoCookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoSmokingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)> implements $IAutoCookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmokingUpgradeItem$$Type = ($AutoSmokingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoSmokingUpgradeItem$$Original = $AutoSmokingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilteredUpgradeConfigBase" {
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $FilteredUpgradeConfigBase {
readonly "filterSlots": $ModConfigSpec$IntValue
readonly "slotsInRow": $ModConfigSpec$IntValue

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredUpgradeConfigBase$$Type = ($FilteredUpgradeConfigBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilteredUpgradeConfigBase$$Original = $FilteredUpgradeConfigBase;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StackUpgradeItem$Wrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem$Wrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $StackUpgradeItem extends $UpgradeItemBase<($StackUpgradeItem$Wrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($StackUpgradeItem$Wrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: double, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "getUpgradeGroup"(): $UpgradeGroup
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getStackSizeMultiplier"(): double
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public static "getInventorySlotLimit"(arg0: $IStorageWrapper$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$$Type = ($StackUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackUpgradeItem$$Original = $StackUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$CookingLogic$CookingComponentItemHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic$CookingComponentItemHandler"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CookingLogic<T extends $AbstractCookingRecipe> {
static readonly "COOK_INPUT_SLOT": integer
static readonly "COOK_OUTPUT_SLOT": integer
static readonly "RECIPES_USED_CODEC": $Codec<($Map<($ResourceLocation), (integer)>)>
static readonly "RECIPES_USED_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<($ResourceLocation), (integer)>)>
static readonly "FUEL_SLOT": integer

constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: $CookingUpgradeConfig$$Type, arg3: $RecipeType$$Type<(T)>, arg4: float)
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: $Predicate$$Type<($ItemStack)>, arg3: $Predicate$$Type<($ItemStack)>, arg4: $CookingUpgradeConfig$$Type, arg5: $RecipeType$$Type<(T)>, arg6: float)

public "tick"(arg0: $Level$$Type): boolean
public "pause"(): void
public "isBurning"(arg0: $Level$$Type): boolean
public "getFuel"(): $ItemStack
public "getCookOutput"(): $ItemStack
public "awardUsedRecipesAndPopExperience"(arg0: $ServerPlayer$$Type): void
public "getBurnTimeTotal"(): integer
public "getCookTimeTotal"(): integer
public "getBurnTimeFinish"(): long
public "getCookTimeFinish"(): long
public "drainStoredExperience"(arg0: float): void
public "getCookingInventory"(): $CookingLogic$CookingComponentItemHandler
public "getStoredExperience"(): float
public "isCooking"(): boolean
public "setCookInput"(arg0: $ItemStack$$Type): void
public "getCookInput"(): $ItemStack
public "getRecipesToAwardAndPopExperience"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): $List<($RecipeHolder<(never)>)>
public "setFuel"(arg0: $ItemStack$$Type): void
get "fuel"(): $ItemStack
get "cookOutput"(): $ItemStack
get "burnTimeTotal"(): integer
get "cookTimeTotal"(): integer
get "burnTimeFinish"(): long
get "cookTimeFinish"(): long
get "cookingInventory"(): $CookingLogic$CookingComponentItemHandler
get "storedExperience"(): float
get "cooking"(): boolean
set "cookInput"(value: $ItemStack$$Type)
get "cookInput"(): $ItemStack
set "fuel"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$$Type<T> = ($CookingLogic<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingLogic$$Original<T> = $CookingLogic<(T)>;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"

export interface $IUpgradeWrapper$$Interface {
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
}

export class $IUpgradeWrapper implements $IUpgradeWrapper$$Interface {
 "isEnabled"(): boolean
 "setEnabled"(arg0: boolean): void
 "canBeDisabled"(): boolean
 "onBeforeRemoved"(): void
 "getUpgradeStack"(): $ItemStack
 "hideSettingsTab"(): boolean
 "onAdded"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapper$$Type = ($IUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeWrapper$$Original = $IUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$BatteryUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeWrapper"
import {$Holder} from "net.minecraft.core.Holder"
import {$IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$BatteryUpgradeConfig, $BatteryUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeConfig"

export class $BatteryUpgradeItem extends $UpgradeItemBase<($BatteryUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($BatteryUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BatteryUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($BatteryUpgradeWrapper)>
public "getInventoryColumnsTaken"(): integer
public "getMaxEnergyStored"(arg0: $IStorageWrapper$$Type): integer
public "getMaxEnergyBase"(arg0: $IStorageWrapper$$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): double
public "getBatteryUpgradeConfig"(): $BatteryUpgradeConfig
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($BatteryUpgradeWrapper)>
get "inventoryColumnsTaken"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "batteryUpgradeConfig"(): $BatteryUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeItem$$Type = ($BatteryUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BatteryUpgradeItem$$Original = $BatteryUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$XpPumpUpgradeConfig, $XpPumpUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeConfig"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$XpPumpUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeWrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $XpPumpUpgradeItem extends $UpgradeItemBase<($XpPumpUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($XpPumpUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $XpPumpUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($XpPumpUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getXpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($XpPumpUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "xpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeItem$$Type = ($XpPumpUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpPumpUpgradeItem$$Original = $XpPumpUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$BlastingUpgradeWrapper" {
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$BlastingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.BlastingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$BlastingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$BlastingUpgradeWrapper), ($BlastingUpgradeItem), ($BlastingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$BlastingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$$Original = $CookingUpgradeWrapper$BlastingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$MagnetUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeWrapper"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $MagnetUpgradeItem extends $UpgradeItemBase<($MagnetUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($MagnetUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IntSupplier$$Type, arg2: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($MagnetUpgradeWrapper)>
public "getRadius"(): integer
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($MagnetUpgradeWrapper)>
get "radius"(): integer
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$$Type = ($MagnetUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagnetUpgradeItem$$Original = $MagnetUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IExtractResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"

export interface $IExtractResponseUpgrade$$Interface {

(arg0: $IItemHandlerSimpleInserter, arg1: integer, arg2: $ItemStack): void
}

export class $IExtractResponseUpgrade implements $IExtractResponseUpgrade$$Interface {
 "onAfterExtract"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtractResponseUpgrade$$Type = ((arg0: $IItemHandlerSimpleInserter, arg1: integer, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExtractResponseUpgrade$$Original = $IExtractResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmeltingUpgradeItem" {
import {$IAutoCookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoSmeltingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)> implements $IAutoCookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltingUpgradeItem$$Type = ($AutoSmeltingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoSmeltingUpgradeItem$$Original = $AutoSmeltingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $IPickupResponseUpgrade$$Interface {

(arg0: $Level, arg1: $ItemStack, arg2: boolean): $ItemStack$$Type
}

export class $IPickupResponseUpgrade implements $IPickupResponseUpgrade$$Interface {
 "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickupResponseUpgrade$$Type = ((arg0: $Level, arg1: $ItemStack, arg2: boolean) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPickupResponseUpgrade$$Original = $IPickupResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AlchemyCondition extends $Enum<($AlchemyCondition)> implements $StringRepresentable$$Interface {
static readonly "UNDER_WATER": $AlchemyCondition
static readonly "CODEC": $Codec<($AlchemyCondition)>
static readonly "FALLING": $AlchemyCondition
static readonly "NEVER": $AlchemyCondition
static readonly "ON_FIRE": $AlchemyCondition
static readonly "SPRINTING": $AlchemyCondition
static readonly "NEGATIVE_EFFECT": $AlchemyCondition
static readonly "ALWAYS": $AlchemyCondition
static readonly "HURT": $AlchemyCondition
static readonly "MINING": $AlchemyCondition
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AlchemyCondition)>

public static "values"(): ($AlchemyCondition)[]
public "test"(arg0: $LivingEntity$$Type, arg1: float): boolean
public static "valueOf"(arg0: StringJS): $AlchemyCondition
public "next"(): $AlchemyCondition
public "defaultValue"(): float
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $AlchemyCondition
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
export type $AlchemyCondition$$Type = (("never") | ("always") | ("under_water") | ("on_fire") | ("falling") | ("mining") | ("sprinting") | ("hurt") | ("negative_effect"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyCondition$$Original = $AlchemyCondition;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$BatteryUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeItem"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IStackableContentsUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade"
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IRenderedBatteryUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"

export class $BatteryUpgradeWrapper extends $UpgradeWrapperBase<($BatteryUpgradeWrapper), ($BatteryUpgradeItem)> implements $IRenderedBatteryUpgrade$$Interface, $IEnergyStorage$$Interface, $ITickableUpgrade$$Interface, $IStackableContentsUpgrade$$Interface {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getMaxEnergyStored"(): integer
public static "getEnergyStored"(arg0: $ItemStack$$Type): integer
public "getEnergyStored"(): integer
public "getInventory"(): $IItemHandler
public "canReceive"(): boolean
public "canExtract"(): boolean
public "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>): void
public "forceUpdateBatteryRenderInfo"(): void
public "getMinimumMultiplierRequired"(): integer
public "canBeDisabled"(): boolean
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
get "maxEnergyStored"(): integer
get "energyStored"(): integer
get "inventory"(): $IItemHandler
set "batteryRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>)
get "minimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeWrapper$$Type = ($BatteryUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BatteryUpgradeWrapper$$Original = $BatteryUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$EntityMatch, $EntityMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.EntityMatch"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlchemyFilterAttribute} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemDefinition"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$AlchemyUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AlchemyUpgradeWrapper$ObservableFilterItemStackHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$ObservableFilterItemStackHandler"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AlchemyUpgradeWrapper extends $UpgradeWrapperBase<($AlchemyUpgradeWrapper), ($AlchemyUpgradeItem)> implements $ITickableUpgrade$$Interface {
public "getValue"(arg0: integer): float
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "triggerItemUseEffects"(arg0: $Level$$Type): void
public "setMatchEffectDuration"(arg0: boolean): void
public "setMatchEffectAmplifier"(arg0: boolean): void
public "shouldMatchAllEffects"(): boolean
public "shouldMatchEffectDuration"(): boolean
public "shouldMatchEffectAmplifier"(): boolean
public static "getDefaultConditionForPotion"(arg0: $ItemStack$$Type): $AlchemyCondition
public "setConditionValue"(arg0: integer, arg1: $AlchemyCondition$$Type, arg2: float): void
public "setMatchAllEffects"(arg0: boolean): void
public "getEntityMatch"(): $EntityMatch
public "setEntityMatch"(arg0: $EntityMatch$$Type): void
public "getCondition"(arg0: integer): $AlchemyCondition
public static "stackPotionEffectsMatch"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
public "getFilterAttributes"(): $List<($AlchemyFilterAttribute)>
public static "shouldApplyPotionEffectsTo"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): boolean
public static "addItemDefinition"(arg0: $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type): void
public "isValidAlchemyItem"(arg0: $ItemStack$$Type): boolean
public "getFilterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
set "matchEffectDuration"(value: boolean)
set "matchEffectAmplifier"(value: boolean)
set "matchAllEffects"(value: boolean)
get "entityMatch"(): $EntityMatch
set "entityMatch"(value: $EntityMatch$$Type)
get "filterAttributes"(): $List<($AlchemyFilterAttribute)>
get "filterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$$Type = ($AlchemyUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeWrapper$$Original = $AlchemyUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AlchemyUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AlchemyUpgradeItem extends $UpgradeItemBase<($AlchemyUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AlchemyUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($AlchemyUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeItem$$Type = ($AlchemyUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemyUpgradeItem$$Original = $AlchemyUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeConfig" {
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $TankUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "capacityPerSlotRow": $ModConfigSpec$IntValue
readonly "autoFillDrainContainerCooldown": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeConfig$$Type = ($TankUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankUpgradeConfig$$Original = $TankUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$PrimaryMatch, $PrimaryMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$Record} from "java.lang.Record"

export class $FilterAttributes extends $Record {
static readonly "CODEC": $Codec<($FilterAttributes)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FilterAttributes)>

constructor(tagKeys: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, isAllowList: boolean, matchDurability: boolean, matchComponents: boolean, primaryMatch: $PrimaryMatch$$Type, matchAnyTag: boolean, filterItems: $ItemContainerContents$$Type, filterByStorage: boolean, filterByInventory: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setFilterByInventory"(arg0: boolean): $FilterAttributes
public "setFilterItem"(arg0: integer, arg1: $ItemStack$$Type): $FilterAttributes
public "filterByInventory"(): boolean
public "setFilterByStorage"(arg0: boolean): $FilterAttributes
public "filterByStorage"(): boolean
public "setTagKeys"(arg0: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>): $FilterAttributes
public "tagKeys"(): $Set<($TagKey<($Item)>)>
public "matchDurability"(): boolean
public "setMatchComponents"(arg0: boolean): $FilterAttributes
public "filterItems"(): $ItemContainerContents
public "isAllowList"(): boolean
public "matchComponents"(): boolean
public "matchAnyTag"(): boolean
public "primaryMatch"(): $PrimaryMatch
public "setMatchAnyTag"(arg0: boolean): $FilterAttributes
public "setMatchDurability"(arg0: boolean): $FilterAttributes
public "setAllowList"(arg0: boolean): $FilterAttributes
public "setPrimaryMatch"(arg0: $PrimaryMatch$$Type): $FilterAttributes
get "allowList"(): boolean
set "allowList"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAttributes$$Type = ({"filterByStorage"?: boolean, "primaryMatch"?: $PrimaryMatch$$Type, "matchDurability"?: boolean, "matchComponents"?: boolean, "isAllowList"?: boolean, "tagKeys"?: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, "matchAnyTag"?: boolean, "filterItems"?: $ItemContainerContents$$Type, "filterByInventory"?: boolean}) | ([filterByStorage?: boolean, primaryMatch?: $PrimaryMatch$$Type, matchDurability?: boolean, matchComponents?: boolean, isAllowList?: boolean, tagKeys?: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, matchAnyTag?: boolean, filterItems?: $ItemContainerContents$$Type, filterByInventory?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterAttributes$$Original = $FilterAttributes;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeNoteParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"

export class $JukeboxUpgradeNoteParticleData extends $ParticleType<($JukeboxUpgradeNoteParticleData)> implements $ParticleOptions$$Interface {
constructor()

public "getType"(): $ParticleType
public "codec"(): $MapCodec<($JukeboxUpgradeNoteParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxUpgradeNoteParticleData)>
get "type"(): $ParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeNoteParticleData$$Type = ($JukeboxUpgradeNoteParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxUpgradeNoteParticleData$$Original = $JukeboxUpgradeNoteParticleData;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StackUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem"

export class $StackUpgradeItem$Wrapper extends $UpgradeWrapperBase<($StackUpgradeItem$Wrapper), ($StackUpgradeItem)> {
public "getStackSizeMultiplier"(): double
public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Wrapper$$Type = ($StackUpgradeItem$Wrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackUpgradeItem$Wrapper$$Original = $StackUpgradeItem$Wrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$SlotRange$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.SlotRange"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IInventoryPartHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InfinityUpgradeItem$Wrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem$Wrapper"
import {$InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $InfinityUpgradeItem extends $UpgradeItemBase<($InfinityUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($InfinityUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type, arg1: boolean)

public "getType"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
public "getPermissionLevel"(): integer
public "createInventoryPartHandler"(arg0: $InventoryHandler$$Type, arg1: $SlotRange$$Type): $IInventoryPartHandler
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
get "permissionLevel"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$$Type = ($InfinityUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityUpgradeItem$$Original = $InfinityUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper" {
import {$AutoSmeltingUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmeltingUpgradeItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$AutoCookingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper), ($AutoSmeltingUpgradeItem), ($SmeltingRecipe)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$$Original = $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoBlastingUpgradeItem" {
import {$IAutoCookingUpgradeItem$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoBlastingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)> implements $IAutoCookingUpgradeItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoBlastingUpgradeItem$$Type = ($AutoBlastingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutoBlastingUpgradeItem$$Original = $AutoBlastingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $IUpgradeItem$UpgradeConflictDefinition extends $Record {
constructor(arg0: $Predicate$$Type<($Item)>, arg1: integer, arg2: $Component$$Type)
constructor(isConflictingItem: $Predicate$$Type<($Item)>, maxConflictingAllowed: integer, errorMessage: $Component$$Type, otherBeingAddedErrorMessage: $Component$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "maxConflictingAllowed"(): integer
public "errorMessage"(): $Component
public "isConflictingItem"(): $Predicate<($Item)>
public "otherBeingAddedErrorMessage"(): $Component
get "conflictingItem"(): $Predicate<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$$Type = ({"maxConflictingAllowed"?: integer, "isConflictingItem"?: $Predicate$$Type<($Item$$Type)>, "otherBeingAddedErrorMessage"?: $Component$$Type, "errorMessage"?: $Component$$Type}) | ([maxConflictingAllowed?: integer, isConflictingItem?: $Predicate$$Type<($Item$$Type)>, otherBeingAddedErrorMessage?: $Component$$Type, errorMessage?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$$Original = $IUpgradeItem$UpgradeConflictDefinition;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeItem" {
import {$JukeboxUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$UpgradeGroup} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $JukeboxUpgradeItem extends $UpgradeItemBase<($JukeboxUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($JukeboxUpgradeWrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type, arg1: $IntSupplier$$Type, arg2: $IntSupplier$$Type)

public "getType"(): $UpgradeType<($JukeboxUpgradeWrapper)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getNumberOfSlots"(): integer
public "getSlotsInRow"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($JukeboxUpgradeWrapper)>
get "upgradeGroup"(): $UpgradeGroup
get "numberOfSlots"(): integer
get "slotsInRow"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$$Type = ($JukeboxUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxUpgradeItem$$Original = $JukeboxUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeConfig" {
import {$FilteredUpgradeConfigBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilteredUpgradeConfigBase"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $VoidUpgradeConfig extends $FilteredUpgradeConfigBase {
readonly "voidAlwaysEnabled": $ModConfigSpec$BooleanValue
readonly "filterSlots": $ModConfigSpec$IntValue
readonly "slotsInRow": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeConfig$$Type = ($VoidUpgradeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidUpgradeConfig$$Original = $VoidUpgradeConfig;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CompactingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeWrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CompactingUpgradeItem extends $UpgradeItemBase<($CompactingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $IntSupplier$$Type, arg2: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CompactingUpgradeWrapper)>
public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldCompactThreeByThree"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CompactingUpgradeWrapper)>
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$$Type = ($CompactingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingUpgradeItem$$Original = $CompactingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade" {
import {$IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IRenderedBatteryUpgrade$$Interface {
set "batteryRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>)
}

export class $IRenderedBatteryUpgrade implements $IRenderedBatteryUpgrade$$Interface {
 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>): void
 "forceUpdateBatteryRenderInfo"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$$Type = ($IRenderedBatteryUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRenderedBatteryUpgrade$$Original = $IRenderedBatteryUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem$Wrapper" {
import {$BlockConverterUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper"
import {$StonecutterUpgradeItem} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem"

export class $StonecutterUpgradeItem$Wrapper extends $BlockConverterUpgradeWrapper<($StonecutterUpgradeItem), ($StonecutterUpgradeItem$Wrapper)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$Wrapper$$Type = ($StonecutterUpgradeItem$Wrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterUpgradeItem$Wrapper$$Original = $StonecutterUpgradeItem$Wrapper;}
