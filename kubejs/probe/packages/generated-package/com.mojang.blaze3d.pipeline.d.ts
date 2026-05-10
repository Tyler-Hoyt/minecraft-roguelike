declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"

export class $RenderTarget {
readonly "useDepth": boolean
 "filterMode": integer
 "viewWidth": integer
 "frameBufferId": integer
 "width": integer
 "viewHeight": integer
 "height": integer

constructor(arg0: boolean)

public "clear"(arg0: boolean): void
public "resize"(arg0: integer, arg1: integer, arg2: boolean): void
public "isStencilEnabled"(): boolean
public "getDepthTextureId"(): integer
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "enableStencil"(): void
public "setFilterMode"(arg0: integer): void
public "getColorTextureId"(): integer
public "checkStatus"(): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "handler$zhf000$sodium$blitToScreen"(arg0: integer, arg1: integer, arg2: boolean, arg3: $CallbackInfo$$Type): void
public "bindWrite"(arg0: boolean): void
public "destroyBuffers"(): void
public "unbindRead"(): void
public "bindRead"(): void
public "unbindWrite"(): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
get "stencilEnabled"(): boolean
get "depthTextureId"(): integer
get "colorTextureId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTarget$$Type = ($RenderTarget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTarget$$Original = $RenderTarget;}
