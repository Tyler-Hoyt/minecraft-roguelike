declare module "appeng.blockentity.misc.ChargerBlockEntity" {
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ICrankable} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChargerBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable$$Interface {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "isWorking"(): boolean
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "working"(): boolean
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerBlockEntity$$Type = ($ChargerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargerBlockEntity$$Original = $ChargerBlockEntity;}
declare module "appeng.blockentity.misc.CondenserBlockEntity" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$AEBaseInvBlockEntity} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CondenserBlockEntity extends $AEBaseInvBlockEntity implements $IConfigurableObject$$Interface {
static readonly "BYTE_MULTIPLIER": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getFluidHandler"(): $IFluidHandler
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addPower"(arg0: double): void
public "getInternalInventory"(): $InternalInventory
public "getConfigManager"(): $IConfigManager
public "getStorage"(): double
public "getMEStorage"(): $MEStorage
public "getRequiredPower"(): double
public "getExternalInv"(): $InternalInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getStoredPower"(): double
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "fluidHandler"(): $IFluidHandler
get "internalInventory"(): $InternalInventory
get "configManager"(): $IConfigManager
get "storage"(): double
get "MEStorage"(): $MEStorage
get "requiredPower"(): double
get "externalInv"(): $InternalInventory
get "storedPower"(): double
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserBlockEntity$$Type = ($CondenserBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CondenserBlockEntity$$Original = $CondenserBlockEntity;}
declare module "appeng.blockentity.misc.PaintSplotchesBlockEntity" {
import {$PaintSplotches} from "appeng.block.paint.PaintSplotches"
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Splotch} from "appeng.helpers.Splotch"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintSplotchesBlockEntity extends $AEBaseBlockEntity {
static readonly "SPLOTCHES": $ModelProperty<($PaintSplotches)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBlot"(arg0: $ItemStack$$Type, arg1: $Direction$$Type, arg2: $Vec3$$Type): void
public "addBlot"(arg0: $AEColor$$Type, arg1: boolean, arg2: $Direction$$Type, arg3: $Vec3$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isSideValid"(arg0: $Direction$$Type): boolean
public "cleanSide"(arg0: $Direction$$Type): void
public "getModelData"(): $ModelData
public "neighborChanged"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getDots"(): $Collection<($Splotch)>
public static "tryClear"(arg0: any): void
get "modelData"(): $ModelData
get "dots"(): $Collection<($Splotch)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotchesBlockEntity$$Type = ($PaintSplotchesBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintSplotchesBlockEntity$$Original = $PaintSplotchesBlockEntity;}
declare module "appeng.blockentity.misc.MysteriousCubeBlockEntity" {
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MysteriousCubeBlockEntity extends $AEBaseBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysteriousCubeBlockEntity$$Type = ($MysteriousCubeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MysteriousCubeBlockEntity$$Original = $MysteriousCubeBlockEntity;}
declare module "appeng.blockentity.misc.CrankBlockEntity" {
import {$ClientTickingBlockEntity$$Interface} from "appeng.blockentity.ClientTickingBlockEntity"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrankBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity$$Interface, $ClientTickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "POWER_PER_CRANK_TURN": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "clientTick"(): void
public "getVisibleRotation"(): float
public "serverTick"(): void
public "power"(): boolean
public static "tryClear"(arg0: any): void
get "visibleRotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlockEntity$$Type = ($CrankBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankBlockEntity$$Original = $CrankBlockEntity;}
declare module "appeng.blockentity.misc.VibrationChamberBlockEntity" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VibrationChamberBlockEntity extends $AENetworkedInvBlockEntity implements $IGridTickable$$Interface, $IUpgradeableObject$$Interface {
 "isOn": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public static "hasBurnTime"(arg0: $ItemStack$$Type): boolean
public "getMaxEnergyRate"(): double
public "getMaxFuelTicksPerTick"(): double
public "getRemainingFuelTicks"(): double
public "getCurrentFuelTicksPerTick"(): double
public "getEnergyPerFuelTick"(): double
public "getFuelItemFuelTicks"(): double
public "getMinFuelTicksPerTick"(): double
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public static "getBurnTime"(arg0: $ItemStack$$Type): integer
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
get "maxEnergyRate"(): double
get "maxFuelTicksPerTick"(): double
get "remainingFuelTicks"(): double
get "currentFuelTicksPerTick"(): double
get "energyPerFuelTick"(): double
get "fuelItemFuelTicks"(): double
get "minFuelTicksPerTick"(): double
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VibrationChamberBlockEntity$$Type = ($VibrationChamberBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VibrationChamberBlockEntity$$Original = $VibrationChamberBlockEntity;}
declare module "appeng.blockentity.misc.InscriberBlockEntity" {
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable$$Interface} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ICrankable} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InscriberRecipe} from "appeng.recipes.handlers.InscriberRecipe"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export class $InscriberBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable$$Interface, $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "setSmash"(arg0: boolean): void
public "isSmash"(): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getTask"(): $InscriberRecipe
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "getConfigManager"(): $IConfigManager
public "getUpgrades"(): $IUpgradeInventory
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public "setRepeatSmash"(arg0: boolean): void
public "isRepeatSmash"(): boolean
public "getProcessingTime"(): integer
public "getClientStart"(): long
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMaxProcessingTime"(): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "smash"(value: boolean)
get "smash"(): boolean
get "internalInventory"(): $InternalInventory
get "task"(): $InscriberRecipe
get "configManager"(): $IConfigManager
get "upgrades"(): $IUpgradeInventory
set "repeatSmash"(value: boolean)
get "repeatSmash"(): boolean
get "processingTime"(): integer
get "clientStart"(): long
get "maxProcessingTime"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberBlockEntity$$Type = ($InscriberBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InscriberBlockEntity$$Original = $InscriberBlockEntity;}
declare module "appeng.blockentity.misc.LightDetectorBlockEntity" {
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CommonTickingBlockEntity$$Interface} from "appeng.blockentity.CommonTickingBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightDetectorBlockEntity extends $AEBaseBlockEntity implements $CommonTickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "commonTick"(): void
public "updateLight"(): void
public "isExposedToLight"(): boolean
public "clientTick"(): void
public "serverTick"(): void
public static "tryClear"(arg0: any): void
get "exposedToLight"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightDetectorBlockEntity$$Type = ($LightDetectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightDetectorBlockEntity$$Original = $LightDetectorBlockEntity;}
declare module "appeng.blockentity.misc.CellWorkbenchBlockEntity" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$IConfigInvHost$$Interface} from "appeng.helpers.IConfigInvHost"
import {$InternalInventoryHost$$Interface} from "appeng.util.inv.InternalInventoryHost"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ICellWorkbenchItem} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $CellWorkbenchBlockEntity extends $AEBaseBlockEntity implements $IConfigurableObject$$Interface, $IUpgradeableObject$$Interface, $InternalInventoryHost$$Interface, $IConfigInvHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "copy"(arg0: $GenericStackInv$$Type, arg1: $GenericStackInv$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCell"(): $ICellWorkbenchItem
public "getConfigManager"(): $IConfigManager
public "getUpgrades"(): $IUpgradeInventory
public "getConfig"(): $GenericStackInv
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "cell"(): $ICellWorkbenchItem
get "configManager"(): $IConfigManager
get "upgrades"(): $IUpgradeInventory
get "config"(): $GenericStackInv
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellWorkbenchBlockEntity$$Type = ($CellWorkbenchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CellWorkbenchBlockEntity$$Original = $CellWorkbenchBlockEntity;}
declare module "appeng.blockentity.misc.GrowthAcceleratorBlockEntity" {
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$AENetworkedPoweredBlockEntity} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ICrankable} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType} from "appeng.api.util.AECableType"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GrowthAcceleratorBlockEntity extends $AENetworkedPoweredBlockEntity implements $IPowerChannelState$$Interface {
static readonly "MAX_STORED_POWER": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "isPowered"(): boolean
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "powered"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthAcceleratorBlockEntity$$Type = ($GrowthAcceleratorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrowthAcceleratorBlockEntity$$Original = $GrowthAcceleratorBlockEntity;}
declare module "appeng.blockentity.misc.InterfaceBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InterfaceLogicHost$$Interface} from "appeng.helpers.InterfaceLogicHost"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType} from "appeng.api.util.AECableType"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$InterfaceLogic} from "appeng.helpers.InterfaceLogic"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export class $InterfaceBlockEntity extends $AENetworkedBlockEntity implements $IPriorityHost$$Interface, $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface, $InterfaceLogicHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getInterfaceLogic"(): $InterfaceLogic
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "getConfigManager"(): $IConfigManager
public "saveChanges"(): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getBlockEntity"(): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getStorage"(): $GenericStackInv
public "getConfig"(): $GenericStackInv
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "interfaceLogic"(): $InterfaceLogic
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
get "storage"(): $GenericStackInv
get "config"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceBlockEntity$$Type = ($InterfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceBlockEntity$$Original = $InterfaceBlockEntity;}
