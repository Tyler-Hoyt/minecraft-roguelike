declare module "net.raphimc.immediatelyfast.injection.interfaces.IMapRenderer" {
import {$MapAtlasTexture} from "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture"

export interface $IMapRenderer$$Interface {
}

export class $IMapRenderer implements $IMapRenderer$$Interface {
 "immediatelyFast$getAtlasMapping"(arg0: integer): integer
 "immediatelyFast$getMapAtlasTexture"(arg0: integer): $MapAtlasTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapRenderer$$Type = ($IMapRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMapRenderer$$Original = $IMapRenderer;}
