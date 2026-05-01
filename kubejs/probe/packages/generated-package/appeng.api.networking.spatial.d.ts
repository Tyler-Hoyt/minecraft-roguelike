declare module "appeng.api.networking.spatial.ISpatialService" {
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $ISpatialService$$Interface extends $IGridService$$Interface {
get "level"(): $Level
get "min"(): $BlockPos
get "max"(): $BlockPos
get "validRegion"(): boolean
}

export class $ISpatialService implements $ISpatialService$$Interface {
 "getLevel"(): $Level
 "getMin"(): $BlockPos
 "getMax"(): $BlockPos
 "isValidRegion"(): boolean
 "currentEfficiency"(): float
 "hasRegion"(): boolean
 "requiredPower"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialService$$Type = ($ISpatialService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpatialService$$Original = $ISpatialService;}
