declare module "com.stal111.forbidden_arcanus.client.model.MagicCircleModel" {
import {$BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$ModelLayerLocation} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$LayerDefinition} from "net.minecraft.client.model.geom.builders.LayerDefinition"
import {$Record} from "java.lang.Record"

export class $MagicCircleModel extends $Record {
static readonly "OUTER_RING_LAYER": $ModelLayerLocation
static readonly "INNER_RING_LAYER": $ModelLayerLocation
static readonly "VALID_RITUAL_INDICATOR": $ModelLayerLocation

constructor(arg0: $BlockEntityRendererProvider$Context$$Type)
constructor(outerRing: $ModelPart$$Type, innerRing: $ModelPart$$Type, validRitualIndicator: $ModelPart$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validRitualIndicator"(): $ModelPart
public static "createLayer"(): $LayerDefinition
public "innerRing"(): $ModelPart
public "outerRing"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicCircleModel$$Type = ({"innerRing"?: $ModelPart$$Type, "outerRing"?: $ModelPart$$Type, "validRitualIndicator"?: $ModelPart$$Type}) | ([innerRing?: $ModelPart$$Type, outerRing?: $ModelPart$$Type, validRitualIndicator?: $ModelPart$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicCircleModel$$Original = $MagicCircleModel;}
