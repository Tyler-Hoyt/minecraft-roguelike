declare module "io.redspace.ironslib.mixin.PlayerAccessor" {
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $PlayerAccessor$$Interface {
}

export class $PlayerAccessor implements $PlayerAccessor$$Interface {
static "getDataPlayerModeCustomisation"(): $EntityDataAccessor<(byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = ($PlayerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAccessor$$Original = $PlayerAccessor;}
