declare module "appeng.blockentity.storage.SkyChestBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseInvBlockEntity} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ClientTickingBlockEntity$$Interface} from "appeng.blockentity.ClientTickingBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LidBlockEntity$$Interface} from "net.minecraft.world.level.block.entity.LidBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity$$Interface, $LidBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($SkyChestBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "clientTick"(): void
public "getInternalInventory"(): $InternalInventory
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "recheckOpen"(): void
public "getOpenNess"(arg0: float): float
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyChestBlockEntity$$Type = ($SkyChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyChestBlockEntity$$Original = $SkyChestBlockEntity;}
declare module "appeng.blockentity.storage.MEChestBlockEntity" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$KeyTypeSelectionHost$$Interface} from "appeng.api.util.KeyTypeSelectionHost"
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$IStorageProvider$$Interface} from "appeng.api.storage.IStorageProvider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IMEChest$$Interface} from "appeng.api.implementations.blockentities.IMEChest"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ITerminalHost$$Interface} from "appeng.api.storage.ITerminalHost"
import {$IColorableBlockEntity$$Interface} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CellState} from "appeng.api.storage.cells.CellState"

export class $MEChestBlockEntity extends $AENetworkedPoweredBlockEntity implements $IMEChest$$Interface, $ITerminalHost$$Interface, $IPriorityHost$$Interface, $IColorableBlockEntity$$Interface, $ServerTickingBlockEntity$$Interface, $IStorageProvider$$Interface, $KeyTypeSelectionHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getLinkStatus"(): $ILinkStatus
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getColor"(): $AEColor
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCell"(): $ItemStack
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getInventory"(): $MEStorage
public "isPowered"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "serverTick"(): void
public "isCellBlinking"(arg0: integer): boolean
public "getCellItem"(arg0: integer): $Item
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getCellInventory"(arg0: integer): $MEStorage
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "openGui"(arg0: $Player$$Type): boolean
public "getCellStatus"(arg0: integer): $CellState
public "getCellCount"(): integer
public "getKeyTypeSelection"(): $KeyTypeSelection
public "getMEStorage"(arg0: $Direction$$Type): $MEStorage
public "openCellInventoryMenu"(arg0: $Player$$Type): void
public "setCell"(arg0: $ItemStack$$Type): void
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCloseHotkey"(): StringJS
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public static "empty"(): $IEnergySource
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "linkStatus"(): $ILinkStatus
get "color"(): $AEColor
get "cell"(): $ItemStack
get "mainMenuIcon"(): $ItemStack
get "inventory"(): $MEStorage
get "powered"(): boolean
get "internalInventory"(): $InternalInventory
get "configManager"(): $IConfigManager
get "cellCount"(): integer
get "keyTypeSelection"(): $KeyTypeSelection
set "cell"(value: $ItemStack$$Type)
get "closeHotkey"(): StringJS
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEChestBlockEntity$$Type = ($MEChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEChestBlockEntity$$Original = $MEChestBlockEntity;}
declare module "appeng.blockentity.storage.SkyStoneTankBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IFluidTank} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
static readonly "BUCKET_CAPACITY": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getFluidHandler"(): $IFluidHandler
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onPlayerUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getTank"(): $IFluidTank
public static "tryClear"(arg0: any): void
get "fluidHandler"(): $IFluidHandler
get "tank"(): $IFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyStoneTankBlockEntity$$Type = ($SkyStoneTankBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyStoneTankBlockEntity$$Original = $SkyStoneTankBlockEntity;}
declare module "appeng.blockentity.storage.IOPortBlockEntity" {
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export class $IOPortBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface, $IGridTickable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "updateRedstoneState"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "getConfigManager"(): $IConfigManager
public "getUpgrades"(): $IUpgradeInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public "matchesFullnessMode"(arg0: $StorageCell$$Type): boolean
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "internalInventory"(): $InternalInventory
get "configManager"(): $IConfigManager
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlockEntity$$Type = ($IOPortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOPortBlockEntity$$Original = $IOPortBlockEntity;}
declare module "appeng.blockentity.storage.DriveBlockEntity" {
import {$IChestOrDrive$$Interface} from "appeng.api.implementations.blockentities.IChestOrDrive"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$IStorageProvider$$Interface} from "appeng.api.storage.IStorageProvider"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$StorageCell} from "appeng.api.storage.cells.StorageCell"
import {$CellState} from "appeng.api.storage.cells.CellState"

export class $DriveBlockEntity extends $AENetworkedInvBlockEntity implements $IChestOrDrive$$Interface, $IPriorityHost$$Interface, $IStorageProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "isPowered"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "openMenu"(arg0: $Player$$Type): void
public "isCellBlinking"(arg0: integer): boolean
public "getCellItem"(arg0: integer): $Item
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getModelData"(): $ModelData
public "getCellInventory"(arg0: integer): $MEStorage
public "getCellStatus"(arg0: integer): $CellState
public "getCellCount"(): integer
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "priority"(value: integer)
get "priority"(): integer
get "mainMenuIcon"(): $ItemStack
get "powered"(): boolean
get "internalInventory"(): $InternalInventory
get "modelData"(): $ModelData
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriveBlockEntity$$Type = ($DriveBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DriveBlockEntity$$Original = $DriveBlockEntity;}
