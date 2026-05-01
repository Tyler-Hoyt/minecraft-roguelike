declare module "appeng.blockentity.crafting.CraftingMonitorBlockEntity" {
import {$IColorableBlockEntity$$Interface} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$CraftingBlockEntity} from "appeng.blockentity.crafting.CraftingBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingMonitorBlockEntity extends $CraftingBlockEntity implements $IColorableBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getColor"(): $AEColor
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setJob"(arg0: $GenericStack$$Type): void
public "getModelData"(): $ModelData
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getJobProgress"(): $GenericStack
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "color"(): $AEColor
set "job"(value: $GenericStack$$Type)
get "modelData"(): $ModelData
get "jobProgress"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMonitorBlockEntity$$Type = ($CraftingMonitorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMonitorBlockEntity$$Original = $CraftingMonitorBlockEntity;}
declare module "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern$CraftingGridAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Interface {

(arg0: integer, arg1: $ItemStack): void
}

export class $IMolecularAssemblerSupportedPattern$CraftingGridAccessor implements $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Interface {
 "set"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type = ((arg0: integer, arg1: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Original = $IMolecularAssemblerSupportedPattern$CraftingGridAccessor;}
declare module "appeng.blockentity.crafting.CraftingBlockEntity" {
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$AbstractCraftingUnitBlock} from "appeng.block.crafting.AbstractCraftingUnitBlock"
import {$Direction} from "net.minecraft.core.Direction"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAEMultiBlock$$Interface} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CraftingCPUCluster, $CraftingCPUCluster$$Type} from "appeng.me.cluster.implementations.CraftingCPUCluster"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock$$Interface<($CraftingCPUCluster)>, $IPowerChannelState$$Interface, $IConfigurableObject$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setName"(arg0: StringJS): void
public "isActive"(): boolean
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isPowered"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "updateStatus"(arg0: $CraftingCPUCluster$$Type): void
public "getCluster"(): $CraftingCPUCluster
public "getModelData"(): $ModelData
public "setBlockState"(arg0: $BlockState$$Type): void
public "updateMultiBlock"(arg0: $BlockPos$$Type): void
public "breakCluster"(): void
public "getAcceleratorThreads"(): integer
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "isFormed"(): boolean
public "getPreviousState"(): $CompoundTag
public "setCoreBlock"(arg0: boolean): void
public "getUnitBlock"(): $AbstractCraftingUnitBlock<(never)>
public "isCoreBlock"(): boolean
public "updateSubType"(arg0: boolean): void
public "setPreviousState"(arg0: $CompoundTag$$Type): void
public "getStorageBytes"(): long
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: StringJS)
get "active"(): boolean
get "valid"(): boolean
get "powered"(): boolean
get "configManager"(): $IConfigManager
get "cluster"(): $CraftingCPUCluster
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$$Type)
get "acceleratorThreads"(): integer
get "formed"(): boolean
get "previousState"(): $CompoundTag
set "coreBlock"(value: boolean)
get "unitBlock"(): $AbstractCraftingUnitBlock<(never)>
get "coreBlock"(): boolean
set "previousState"(value: $CompoundTag$$Type)
get "storageBytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBlockEntity$$Type = ($CraftingBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingBlockEntity$$Original = $CraftingBlockEntity;}
declare module "appeng.blockentity.crafting.MolecularAssemblerBlockEntity" {
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ICraftingMachine, $ICraftingMachine$$Interface} from "appeng.api.implementations.blockentities.ICraftingMachine"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$$Type} from "appeng.client.render.crafting.AssemblerAnimationStatus"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IMolecularAssemblerSupportedPattern} from "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern"
import {$IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export class $MolecularAssemblerBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject$$Interface, $IGridTickable$$Interface, $ICraftingMachine$$Interface, $IPowerChannelState$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INV_MAIN": $ResourceLocation

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$$Type): void
public "getCurrentPattern"(): $IMolecularAssemblerSupportedPattern
public "isPowered"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getCraftingProgress"(): integer
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
public "clearContent"(): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "acceptsPlans"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
set "animationStatus"(value: $AssemblerAnimationStatus$$Type)
get "currentPattern"(): $IMolecularAssemblerSupportedPattern
get "powered"(): boolean
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
get "craftingMachineInfo"(): $PatternContainerGroup
get "craftingProgress"(): integer
get "animationStatus"(): $AssemblerAnimationStatus
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolecularAssemblerBlockEntity$$Type = ($MolecularAssemblerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MolecularAssemblerBlockEntity$$Original = $MolecularAssemblerBlockEntity;}
declare module "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IPatternDetails$$Interface} from "appeng.api.crafting.IPatternDetails"
import {$IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type} from "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern$CraftingGridAccessor"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$PatternDetailsTooltip} from "appeng.api.crafting.PatternDetailsTooltip"
import {$GenericStack} from "appeng.api.stacks.GenericStack"
import {$IPatternDetails$IInput} from "appeng.api.crafting.IPatternDetails$IInput"
import {$IPatternDetails$PatternInputSink$$Type} from "appeng.api.crafting.IPatternDetails$PatternInputSink"

export interface $IMolecularAssemblerSupportedPattern$$Interface extends $IPatternDetails$$Interface {
get "definition"(): $AEItemKey
get "outputs"(): $List<($GenericStack)>
get "inputs"(): ($IPatternDetails$IInput)[]
get "primaryOutput"(): $GenericStack
}

export class $IMolecularAssemblerSupportedPattern implements $IMolecularAssemblerSupportedPattern$$Interface {
 "assemble"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): $ItemStack
 "fillCraftingGrid"(arg0: ($KeyCounter$$Type)[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type): void
 "isItemValid"(arg0: integer, arg1: $AEItemKey$$Type, arg2: $Level$$Type): boolean
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "supportsPushInputsToExternalInventory"(): boolean
 "isSlotEnabled"(arg0: integer): boolean
 "getDefinition"(): $AEItemKey
 "getOutputs"(): $List<($GenericStack)>
 "getInputs"(): ($IPatternDetails$IInput)[]
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
 "getPrimaryOutput"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$$Type = ($IMolecularAssemblerSupportedPattern);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMolecularAssemblerSupportedPattern$$Original = $IMolecularAssemblerSupportedPattern;}
declare module "appeng.blockentity.crafting.PatternProviderBlockEntity" {
import {$PatternProviderLogicHost$$Interface} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$PatternProviderLogic} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType} from "appeng.api.util.AECableType"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$AEItemKey} from "appeng.api.stacks.AEItemKey"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet} from "java.util.EnumSet"

export class $PatternProviderBlockEntity extends $AENetworkedBlockEntity implements $PatternProviderLogicHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getLogic"(): $PatternProviderLogic
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getTargets"(): $EnumSet<($Direction)>
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "clearContent"(): void
public "getTerminalIcon"(): $AEItemKey
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "saveChanges"(): void
public "getGrid"(): $IGrid
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getBlockEntity"(): $BlockEntity
public "getConfigManager"(): $IConfigManager
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "getTerminalGroup"(): $PatternContainerGroup
public "getTerminalPatternInventory"(): $InternalInventory
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "logic"(): $PatternProviderLogic
get "targets"(): $EnumSet<($Direction)>
set "blockState"(value: $BlockState$$Type)
get "terminalIcon"(): $AEItemKey
set "priority"(value: integer)
get "priority"(): integer
get "grid"(): $IGrid
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "terminalPatternInventory"(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderBlockEntity$$Type = ($PatternProviderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternProviderBlockEntity$$Original = $PatternProviderBlockEntity;}
