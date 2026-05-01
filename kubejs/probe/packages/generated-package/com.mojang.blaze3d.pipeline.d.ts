declare module "com.mojang.blaze3d.pipeline.RenderTarget" {
import {$AccessoriesFrameBufferExtension$$Interface} from "io.wispforest.accessories.pond.AccessoriesFrameBufferExtension"

export class $RenderTarget implements $AccessoriesFrameBufferExtension$$Interface {
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
public "bindWrite"(arg0: boolean): void
public "unbindWrite"(): void
public "blitToScreen"(arg0: integer, arg1: integer): void
public "blitToScreen"(arg0: integer, arg1: integer, arg2: boolean): void
public "destroyBuffers"(): void
public "checkStatus"(): void
public "setClearColor"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "bindRead"(): void
public "unbindRead"(): void
public "isStencilEnabled"(): boolean
public "getColorTextureId"(): integer
public "enableStencil"(): void
public "getDepthTextureId"(): integer
public "accessories$setUseHighlightShader"(useHighlightShader: boolean): void
public "setFilterMode"(arg0: integer): void
public "setFilterMode"(arg0: integer, arg1: boolean): void
public "createBuffers"(arg0: integer, arg1: integer, arg2: boolean): void
public "copyDepthFrom"(arg0: $RenderTarget$$Type): void
get "stencilEnabled"(): boolean
get "colorTextureId"(): integer
get "depthTextureId"(): integer
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
