declare module "net.bettercombat.mixin.client.MinecraftClientAccessor" {
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"

export interface $MinecraftClientAccessor$$Interface {
get "missTime"(): integer
set "attackCooldown"(value: integer)
get "entityRenderDispatcher"(): $EntityRenderDispatcher
}

export class $MinecraftClientAccessor implements $MinecraftClientAccessor$$Interface {
 "getMissTime"(): integer
 "setAttackCooldown"(arg0: integer): void
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftClientAccessor$$Original = $MinecraftClientAccessor;}
