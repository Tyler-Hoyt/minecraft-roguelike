declare module "appeng.client.render.overlay.IOverlayDataSource" {
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$Set} from "java.util.Set"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IOverlayDataSource$$Interface {
get "overlayBlockEntity"(): $BlockEntity
get "overlaySourceLocation"(): $DimensionalBlockPos
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayColor"(): integer
}

export class $IOverlayDataSource implements $IOverlayDataSource$$Interface {
 "getOverlayBlockEntity"(): $BlockEntity
 "getOverlaySourceLocation"(): $DimensionalBlockPos
 "getOverlayChunks"(): $Set<($ChunkPos)>
 "getOverlayColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverlayDataSource$$Type = ($IOverlayDataSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOverlayDataSource$$Original = $IOverlayDataSource;}
