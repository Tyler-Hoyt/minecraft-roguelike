declare module "appeng.api.networking.ticking.IGridTickable" {
import {$TickRateModulation} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$TickingRequest} from "appeng.api.networking.ticking.TickingRequest"

export interface $IGridTickable$$Interface extends $IGridNodeService$$Interface {
}

export class $IGridTickable implements $IGridTickable$$Interface {
 "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
 "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridTickable$$Type = ($IGridTickable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridTickable$$Original = $IGridTickable;}
declare module "appeng.api.networking.ticking.TickRateModulation" {
import {$Enum} from "java.lang.Enum"

export class $TickRateModulation extends $Enum<($TickRateModulation)> {
static readonly "SAME": $TickRateModulation
static readonly "URGENT": $TickRateModulation
static readonly "SLEEP": $TickRateModulation
static readonly "IDLE": $TickRateModulation
static readonly "FASTER": $TickRateModulation
static readonly "SLOWER": $TickRateModulation

public static "values"(): ($TickRateModulation)[]
public static "valueOf"(arg0: StringJS): $TickRateModulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRateModulation$$Type = (("sleep") | ("idle") | ("slower") | ("same") | ("faster") | ("urgent"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickRateModulation$$Original = $TickRateModulation;}
declare module "appeng.api.networking.ticking.TickingRequest" {
import {$TickRates$$Type} from "appeng.core.settings.TickRates"
import {$Record} from "java.lang.Record"

export class $TickingRequest extends $Record {
constructor(minTickRate: integer, maxTickRate: integer, isSleeping: boolean, initialTickRate: integer)
constructor(arg0: $TickRates$$Type, arg1: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "initialTickRate"(): integer
public "isSleeping"(): boolean
public "minTickRate"(): integer
public "maxTickRate"(): integer
get "sleeping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingRequest$$Type = ({"isSleeping"?: boolean, "initialTickRate"?: integer, "maxTickRate"?: integer, "minTickRate"?: integer}) | ([isSleeping?: boolean, initialTickRate?: integer, maxTickRate?: integer, minTickRate?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickingRequest$$Original = $TickingRequest;}
declare module "appeng.api.networking.ticking.ITickManager" {
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"

export interface $ITickManager$$Interface extends $IGridService$$Interface {
}

export class $ITickManager implements $ITickManager$$Interface {
 "wakeDevice"(arg0: $IGridNode$$Type): boolean
 "sleepDevice"(arg0: $IGridNode$$Type): boolean
 "alertDevice"(arg0: $IGridNode$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickManager$$Type = ($ITickManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITickManager$$Original = $ITickManager;}
