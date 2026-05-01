declare module "team.lodestar.lodestone.registry.client.LodestoneRenderTypes$LodestoneCompositeStateBuilder" {
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$LayeringStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderType$CompositeState$CompositeStateBuilder} from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import {$RenderStateShard$WriteMaskStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RenderStateShard$OverlayStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$ShaderHolder$$Type} from "team.lodestar.lodestone.systems.rendering.shader.ShaderHolder"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderTypeToken$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeToken"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $LodestoneRenderTypes$LodestoneCompositeStateBuilder extends $RenderType$CompositeState$CompositeStateBuilder {
public "setTextureState"(arg0: $RenderTypeToken$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setTextureState"(arg0: $ResourceLocation$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setTextureState"(arg0: $RenderStateShard$EmptyTextureStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "accepts"(arg0: $Consumer$$Type<($LodestoneRenderTypes$LodestoneCompositeStateBuilder)>): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setStateShards"(...arg0: (any)[]): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setLineState"(arg0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(arg0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(arg0: $RenderStateShard$DepthTestStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setWriteMaskState"(arg0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(arg0: $RenderStateShard$OutputStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setLayeringState"(arg0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(arg0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(arg0: $RenderStateShard$CullStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "copyState"(arg0: $RenderType$CompositeState$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "replaceVertexFormat"(arg0: $VertexFormat$Mode$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setTransparencyState"(arg0: $RenderStateShard$TransparencyStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "createCompositeState"(): $RenderType$CompositeState
public "setLightmapState"(arg0: $RenderStateShard$LightmapStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setShaderState"(arg0: $ShaderHolder$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setShaderState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
public "setShaderState"(arg0: $ShaderInstance$$Type): $LodestoneRenderTypes$LodestoneCompositeStateBuilder
set "textureState"(value: $RenderTypeToken$$Type)
set "textureState"(value: $ResourceLocation$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "stateShards"(value: (any)[])
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "shaderState"(value: $ShaderHolder$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "shaderState"(value: $ShaderInstance$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRenderTypes$LodestoneCompositeStateBuilder$$Type = ($LodestoneRenderTypes$LodestoneCompositeStateBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRenderTypes$LodestoneCompositeStateBuilder$$Original = $LodestoneRenderTypes$LodestoneCompositeStateBuilder;}
