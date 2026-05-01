declare module "appeng.blockentity.powersink.AEBasePoweredBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage$$Interface} from "appeng.api.networking.energy.IAEPowerStorage"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AEBaseInvBlockEntity} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IExternalPowerSink$$Interface} from "appeng.blockentity.powersink.IExternalPowerSink"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$PowerUnit$$Type} from "appeng.api.config.PowerUnit"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AEBasePoweredBlockEntity extends $AEBaseInvBlockEntity implements $IAEPowerStorage$$Interface, $IExternalPowerSink$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setInternalMaxPower"(arg0: double): void
public "getInternalCurrentPower"(): double
public "setInternalCurrentPower"(arg0: double): void
public "getInternalMaxPower"(): double
public "setInternalPowerFlow"(arg0: $AccessRestriction$$Type): void
public "setInternalPublicPowerStorage"(arg0: boolean): void
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getAECurrentPower"(): double
public "isAEPublicPowerStorage"(): boolean
public "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "getAEMaxPower"(): double
public "getPowerFlow"(): $AccessRestriction
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getPriority"(): integer
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "internalMaxPower"(value: double)
get "internalCurrentPower"(): double
set "internalCurrentPower"(value: double)
get "internalMaxPower"(): double
set "internalPowerFlow"(value: $AccessRestriction$$Type)
set "internalPublicPowerStorage"(value: boolean)
get "AECurrentPower"(): double
get "AEPublicPowerStorage"(): boolean
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "priority"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredBlockEntity$$Type = ($AEBasePoweredBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBasePoweredBlockEntity$$Original = $AEBasePoweredBlockEntity;}
declare module "appeng.blockentity.powersink.IExternalPowerSink" {
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage$$Interface} from "appeng.api.networking.energy.IAEPowerStorage"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$PowerUnit$$Type} from "appeng.api.config.PowerUnit"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export interface $IExternalPowerSink$$Interface extends $IAEPowerStorage$$Interface {
get "priority"(): integer
get "AECurrentPower"(): double
get "AEPublicPowerStorage"(): boolean
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
}

export class $IExternalPowerSink implements $IExternalPowerSink$$Interface {
 "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
 "getPriority"(): integer
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
 "getAECurrentPower"(): double
 "isAEPublicPowerStorage"(): boolean
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalPowerSink$$Type = ($IExternalPowerSink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExternalPowerSink$$Original = $IExternalPowerSink;}
