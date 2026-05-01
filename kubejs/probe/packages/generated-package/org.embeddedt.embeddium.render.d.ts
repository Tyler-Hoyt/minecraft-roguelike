declare module "org.embeddedt.embeddium.render.entity.ModelPartExtended" {
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartExtended$$Interface {
}

export class $ModelPartExtended implements $ModelPartExtended$$Interface {
static "of"(arg0: $ModelPart$$Type): $ModelPartExtended
 "embeddium$getDescendantsByName"(): $Map<(StringJS), ($ModelPart)>
 "embeddium$getPartsList"(): $List<($ModelPart)>
 "embeddium$asOptional"(): $Optional<($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartExtended$$Type = ($ModelPartExtended);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartExtended$$Original = $ModelPartExtended;}
