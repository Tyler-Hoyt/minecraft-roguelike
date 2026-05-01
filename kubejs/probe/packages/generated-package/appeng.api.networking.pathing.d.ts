declare module "appeng.api.networking.pathing.ChannelMode" {
import {$Enum} from "java.lang.Enum"

export class $ChannelMode extends $Enum<($ChannelMode)> {
static readonly "X2": $ChannelMode
static readonly "X3": $ChannelMode
static readonly "INFINITE": $ChannelMode
static readonly "X4": $ChannelMode
static readonly "DEFAULT": $ChannelMode

public static "values"(): ($ChannelMode)[]
public static "valueOf"(arg0: StringJS): $ChannelMode
public "getAdHocNetworkChannels"(): integer
public "getCableCapacityFactor"(): integer
get "adHocNetworkChannels"(): integer
get "cableCapacityFactor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMode$$Type = (("infinite") | ("default") | ("x2") | ("x3") | ("x4"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelMode$$Original = $ChannelMode;}
declare module "appeng.api.networking.pathing.IPathingService" {
import {$ChannelMode} from "appeng.api.networking.pathing.ChannelMode"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$ControllerState} from "appeng.api.networking.pathing.ControllerState"

export interface $IPathingService$$Interface extends $IGridService$$Interface {
get "networkBooting"(): boolean
get "controllerState"(): $ControllerState
get "channelMode"(): $ChannelMode
get "usedChannels"(): integer
}

export class $IPathingService implements $IPathingService$$Interface {
 "isNetworkBooting"(): boolean
 "getControllerState"(): $ControllerState
 "getChannelMode"(): $ChannelMode
 "repath"(): void
 "getUsedChannels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathingService$$Type = ($IPathingService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPathingService$$Original = $IPathingService;}
declare module "appeng.api.networking.pathing.ControllerState" {
import {$Enum} from "java.lang.Enum"

export class $ControllerState extends $Enum<($ControllerState)> {
static readonly "CONTROLLER_ONLINE": $ControllerState
static readonly "CONTROLLER_CONFLICT": $ControllerState
static readonly "NO_CONTROLLER": $ControllerState

public static "values"(): ($ControllerState)[]
public static "valueOf"(arg0: StringJS): $ControllerState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerState$$Type = (("no_controller") | ("controller_online") | ("controller_conflict"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerState$$Original = $ControllerState;}
