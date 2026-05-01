declare module "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$DynamicTexture} from "net.minecraft.client.renderer.texture.DynamicTexture"

export class $MapAtlasTexture implements $AutoCloseable$$Interface {
static readonly "MAP_SIZE": integer
static readonly "ATLAS_SIZE": integer
static readonly "MAPS_PER_ATLAS": integer

constructor(id: integer)

public "getId"(): integer
public "close"(): void
public "getTexture"(): $DynamicTexture
public "getIdentifier"(): $ResourceLocation
public "getNextMapLocation"(): integer
get "id"(): integer
get "texture"(): $DynamicTexture
get "identifier"(): $ResourceLocation
get "nextMapLocation"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapAtlasTexture$$Type = ($MapAtlasTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapAtlasTexture$$Original = $MapAtlasTexture;}
