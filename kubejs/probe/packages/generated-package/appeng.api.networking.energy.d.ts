declare module "appeng.api.networking.energy.IEnergySource" {
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergySource$$Interface {

(arg0: double, arg1: $Actionable, arg2: $PowerMultiplier): double
}

export class $IEnergySource implements $IEnergySource$$Interface {
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergySource$$Type = ((arg0: double, arg1: $Actionable, arg2: $PowerMultiplier) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergySource$$Original = $IEnergySource;}
declare module "appeng.api.networking.energy.IEnergyService" {
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergyService$$Interface extends $IGridService$$Interface, $IEnergySource$$Interface {
get "idlePowerUsage"(): double
get "avgPowerInjection"(): double
get "channelPowerUsage"(): double
get "avgPowerUsage"(): double
get "networkPowered"(): boolean
get "storedPower"(): double
get "maxStoredPower"(): double
}

export class $IEnergyService implements $IEnergyService$$Interface {
 "getIdlePowerUsage"(): double
 "getAvgPowerInjection"(): double
 "getChannelPowerUsage"(): double
 "getAvgPowerUsage"(): double
 "isNetworkPowered"(): boolean
 "getStoredPower"(): double
 "getMaxStoredPower"(): double
 "injectPower"(arg0: double, arg1: $Actionable$$Type): double
 "getEnergyDemand"(arg0: double): double
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyService$$Type = ($IEnergyService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyService$$Original = $IEnergyService;}
declare module "appeng.api.networking.energy.IAEPowerStorage" {
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export interface $IAEPowerStorage$$Interface extends $IEnergySource$$Interface, $IGridNodeService$$Interface {
get "priority"(): integer
get "AECurrentPower"(): double
get "AEPublicPowerStorage"(): boolean
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
}

export class $IAEPowerStorage implements $IAEPowerStorage$$Interface {
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
export type $IAEPowerStorage$$Type = ($IAEPowerStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEPowerStorage$$Original = $IAEPowerStorage;}
