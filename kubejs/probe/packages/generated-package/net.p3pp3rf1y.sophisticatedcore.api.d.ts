declare module "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper" {
import {$ITrackedContentsItemHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$UpgradeHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ITintable$$Interface} from "net.p3pp3rf1y.sophisticatedcore.util.ITintable"
import {$SettingsHandler} from "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler"
import {$InventoryHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$IStorageFluidHandler} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$RenderInfo} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$SortBy, $SortBy$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy"

export interface $IStorageWrapper$$Interface extends $ITintable$$Interface {
get "displayName"(): $Component
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "upgradeHandler"(): $UpgradeHandler
get "wrappedStorageStack"(): $ItemStack
set "contentsChangeHandler"(value: $Runnable$$Type)
get "numberOfSlotRows"(): integer
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
get "baseStackSizeMultiplier"(): integer
get "contentsUuid"(): $Optional<($UUID)>
get "storageType"(): StringJS
get "renderInfo"(): $RenderInfo
get "settingsHandler"(): $SettingsHandler
get "sortBy"(): $SortBy
set "sortBy"(value: $SortBy$$Type)
get "energyStorage"(): $Optional<($IEnergyStorage)>
set "openTabId"(value: integer)
get "openTabId"(): $Optional<(integer)>
get "columnsTaken"(): integer
set "persistent"(value: boolean)
set "upgradeCachesInvalidatedHandler"(value: $Runnable$$Type)
get "inventoryHandler"(): $InventoryHandler
set "inventorySlotChangeHandler"(value: $Runnable$$Type)
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
get "mainColor"(): integer
get "accentColor"(): integer
}

export class $IStorageWrapper implements $IStorageWrapper$$Interface {
static readonly "SETTINGS_TAG": StringJS

 "sort"(): void
 "getDisplayName"(): $Component
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "getUpgradeHandler"(): $UpgradeHandler
 "getWrappedStorageStack"(): $ItemStack
 "setContentsChangeHandler"(arg0: $Runnable$$Type): void
 "getNumberOfSlotRows"(): integer
 "onContentsNbtUpdated"(): void
 "onInit"(arg0: $Level$$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "getBaseStackSizeMultiplier"(): integer
 "getContentsUuid"(): $Optional<($UUID)>
 "getStorageType"(): StringJS
 "getRenderInfo"(): $RenderInfo
 "getSettingsHandler"(): $SettingsHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "getSortBy"(): $SortBy
 "setSortBy"(arg0: $SortBy$$Type): void
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "removeOpenTabId"(): void
 "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
 "setOpenTabId"(arg0: integer): void
 "fillWithLoot"(arg0: $Player$$Type): void
 "getOpenTabId"(): $Optional<(integer)>
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "setPersistent"(arg0: boolean): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
 "getInventoryHandler"(): $InventoryHandler
 "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForInputOutput"(): void
 "setColors"(arg0: integer, arg1: integer): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageWrapper$$Type = ($IStorageWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageWrapper$$Original = $IStorageWrapper;}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem" {
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IStashStorageItem$StashResult} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IStashStorageItem$$Interface {
}

export class $IStashStorageItem implements $IStashStorageItem$$Interface {
 "getItemStashable"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $IStashStorageItem$StashResult
 "getInventoryTooltip"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$$Type = ($IStashStorageItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStashStorageItem$$Original = $IStashStorageItem;}
declare module "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade" {
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ISlotChangeResponseUpgrade$$Interface {

(arg0: $IItemHandler, arg1: integer): void
}

export class $ISlotChangeResponseUpgrade implements $ISlotChangeResponseUpgrade$$Interface {
 "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeResponseUpgrade$$Type = ((arg0: $IItemHandler, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotChangeResponseUpgrade$$Original = $ISlotChangeResponseUpgrade;}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$IFluidHandlerItem$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IStorageFluidHandler$$Interface extends $IFluidHandlerItem$$Interface {
get "container"(): $ItemStack
get "tanks"(): integer
}

export class $IStorageFluidHandler implements $IStorageFluidHandler$$Interface {
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type, arg4: boolean): integer
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type, arg3: boolean): $FluidStack
 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getTanks"(): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageFluidHandler$$Type = ($IStorageFluidHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageFluidHandler$$Original = $IStorageFluidHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult" {
import {$Enum} from "java.lang.Enum"

export class $IStashStorageItem$StashResult extends $Enum<($IStashStorageItem$StashResult)> {
static readonly "SPACE": $IStashStorageItem$StashResult
static readonly "MATCH_AND_SPACE": $IStashStorageItem$StashResult
static readonly "NO_SPACE": $IStashStorageItem$StashResult

public static "values"(): ($IStashStorageItem$StashResult)[]
public static "valueOf"(arg0: StringJS): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$StashResult$$Type = (("match_and_space") | ("space") | ("no_space"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStashStorageItem$StashResult$$Original = $IStashStorageItem$StashResult;}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IIOFilterUpgrade" {
import {$Optional} from "java.util.Optional"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"

export interface $IIOFilterUpgrade$$Interface {
get "inputFilter"(): $Optional<($FilterLogic)>
get "outputFilter"(): $Optional<($FilterLogic)>
}

export class $IIOFilterUpgrade implements $IIOFilterUpgrade$$Interface {
 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOFilterUpgrade$$Type = ($IIOFilterUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIOFilterUpgrade$$Original = $IIOFilterUpgrade;}
