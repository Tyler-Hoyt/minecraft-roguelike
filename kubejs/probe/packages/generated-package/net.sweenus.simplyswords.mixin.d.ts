declare module "net.sweenus.simplyswords.mixin.client.LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererAccessor$$Interface {

(arg0: $RenderLayer<(T), (M)>): boolean
}

export class $LivingEntityRendererAccessor implements $LivingEntityRendererAccessor$$Interface {
 "invokeAddFeature"<T extends $LivingEntity, M extends $EntityModel<(object)>>(arg0: $RenderLayer$$Type<(T), (M)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type = ((arg0: $RenderLayer<(T), (M)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererAccessor$$Original = $LivingEntityRendererAccessor;}
