declare module "net.minecraft.client.renderer.RenderType$OutlineProperty" {
import {$Enum} from "java.lang.Enum"

export class $RenderType$OutlineProperty extends $Enum<($RenderType$OutlineProperty)> {
static readonly "IS_OUTLINE": $RenderType$OutlineProperty
static readonly "NONE": $RenderType$OutlineProperty
static readonly "AFFECTS_OUTLINE": $RenderType$OutlineProperty

public "toString"(): StringJS
public static "values"(): ($RenderType$OutlineProperty)[]
public static "valueOf"(arg0: StringJS): $RenderType$OutlineProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$OutlineProperty$$Type = (("none") | ("is_outline") | ("affects_outline"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$OutlineProperty$$Original = $RenderType$OutlineProperty;}
declare module "net.minecraft.client.renderer.block.LiquidBlockRenderer" {
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidBlockRenderer {
constructor()

public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $BlockState$$Type): boolean
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $FluidState$$Type): boolean
public "tesselate"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockRenderer$$Type = ($LiquidBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockRenderer$$Original = $LiquidBlockRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LayeringStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LayeringStateShard$$Type = ($RenderStateShard$LayeringStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LayeringStateShard$$Original = $RenderStateShard$LayeringStateShard;}
declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$HiveDebugPayload$HiveInfo$$Type} from "net.minecraft.network.protocol.common.custom.HiveDebugPayload$HiveInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BeeDebugPayload$BeeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BeeDebugPayload$BeeInfo"

export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "addOrUpdateBeeInfo"(arg0: $BeeDebugPayload$BeeInfo$$Type): void
public "removeBeeInfo"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addOrUpdateHiveInfo"(arg0: $HiveDebugPayload$HiveInfo$$Type, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeDebugRenderer$$Type = ($BeeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeDebugRenderer$$Original = $BeeDebugRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $TextureAtlasSprite$Ticker$$Interface extends $AutoCloseable$$Interface {
}

export class $TextureAtlasSprite$Ticker implements $TextureAtlasSprite$Ticker$$Interface {
 "close"(): void
 "tickAndUpload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$Ticker$$Type = ($TextureAtlasSprite$Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$Ticker$$Original = $TextureAtlasSprite$Ticker;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasSprite$Ticker} from "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$SpriteContents} from "net.minecraft.client.renderer.texture.SpriteContents"

export class $TextureAtlasSprite {
public "toString"(): StringJS
public "wrap"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "contents"(): $SpriteContents
public "getY"(): integer
public "getV"(arg0: float): float
public "getU"(arg0: float): float
public "getU0"(): float
public "getV0"(): float
public "getU1"(): float
public "getV1"(): float
public "atlasLocation"(): $ResourceLocation
public "getX"(): integer
public "uvShrinkRatio"(): float
public "createTicker"(): $TextureAtlasSprite$Ticker
public "uploadFirstFrame"(): void
public "getPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): integer
public "getUOffset"(arg0: float): float
public "getVOffset"(arg0: float): float
get "y"(): integer
get "u0"(): float
get "v0"(): float
get "u1"(): float
get "v1"(): float
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$$Type = ($TextureAtlasSprite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$$Original = $TextureAtlasSprite;}
declare module "net.minecraft.client.renderer.block.model.BlockElement" {
import {$EpsilonizableBlockElement$$Interface} from "org.embeddedt.embeddium.impl.model.EpsilonizableBlockElement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockElementRotation, $BlockElementRotation$$Type} from "net.minecraft.client.renderer.block.model.BlockElementRotation"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"

export class $BlockElement implements $EpsilonizableBlockElement$$Interface {
readonly "rotation": $BlockElementRotation
readonly "shade": boolean
readonly "from": $Vector3f
readonly "to": $Vector3f
readonly "faces": $Map<($Direction), ($BlockElementFace)>

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean, arg5: $ExtraFaceData$$Type)

public "getFaceData"(): $ExtraFaceData
public "setFaceData"(arg0: $ExtraFaceData$$Type): void
public "embeddium$epsilonize"(): void
public "uvsByFace"(arg0: $Direction$$Type): (float)[]
get "faceData"(): $ExtraFaceData
set "faceData"(value: $ExtraFaceData$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElement$$Type = ($BlockElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElement$$Original = $BlockElement;}
declare module "net.minecraft.client.renderer.Rect2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect2i {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "contains"(arg0: integer, arg1: integer): boolean
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "intersect"(arg0: $Rect2i$$Type): $Rect2i
public "getY"(): integer
public "setX"(arg0: integer): void
public "setY"(arg0: integer): void
public "getX"(): integer
public "getHeight"(): integer
public "setPosition"(arg0: integer, arg1: integer): void
public "getWidth"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "y"(): integer
set "x"(value: integer)
set "y"(value: integer)
get "x"(): integer
get "height"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect2i$$Type = ($Rect2i);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rect2i$$Original = $Rect2i;}
declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$GoalDebugPayload$DebugGoal$$Type} from "net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "addGoalSelector"(arg0: integer, arg1: $BlockPos$$Type, arg2: $List$$Type<($GoalDebugPayload$DebugGoal$$Type)>): void
public "removeGoalSelector"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoalSelectorDebugRenderer$$Type = ($GoalSelectorDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoalSelectorDebugRenderer$$Original = $GoalSelectorDebugRenderer;}
declare module "net.minecraft.client.renderer.entity.ItemFrameRenderer" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ItemFrame, $ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<(T)> {
static readonly "LEASH_RENDER_STEPS": integer
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type)

public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameRenderer$$Type<T> = ($ItemFrameRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameRenderer$$Original<T> = $ItemFrameRenderer<(T)>;}
declare module "net.minecraft.client.renderer.MultiBufferSource" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $MultiBufferSource$$Interface {

(arg0: $RenderType): $VertexConsumer$$Type
}

export class $MultiBufferSource implements $MultiBufferSource$$Interface {
 "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$$Type = ((arg0: $RenderType) => $VertexConsumer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$$Original = $MultiBufferSource;}
declare module "net.minecraft.client.renderer.block.model.BlockElementFace" {
import {$BlockFaceUV, $BlockFaceUV$$Type} from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableObject, $MutableObject$$Type} from "org.apache.commons.lang3.mutable.MutableObject"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"
import {$Record} from "java.lang.Record"

export class $BlockElementFace extends $Record {
static readonly "NO_TINT": integer

constructor(arg0: $Direction$$Type, arg1: integer, arg2: StringJS, arg3: $BlockFaceUV$$Type)
constructor(cullForDirection: $Direction$$Type, tintIndex: integer, texture: StringJS, uv: $BlockFaceUV$$Type, faceData: $ExtraFaceData$$Type, parent: $MutableObject$$Type<($BlockElement$$Type)>)

public "parent"(): $MutableObject<($BlockElement)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cullForDirection"(): $Direction
public "tintIndex"(): integer
public "texture"(): StringJS
public "uv"(): $BlockFaceUV
public "faceData"(): $ExtraFaceData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementFace$$Type = ({"texture"?: StringJS, "cullForDirection"?: $Direction$$Type, "faceData"?: $ExtraFaceData$$Type, "uv"?: $BlockFaceUV$$Type, "tintIndex"?: integer, "parent"?: $MutableObject$$Type<($BlockElement$$Type)>}) | ([texture?: StringJS, cullForDirection?: $Direction$$Type, faceData?: $ExtraFaceData$$Type, uv?: $BlockFaceUV$$Type, tintIndex?: integer, parent?: $MutableObject$$Type<($BlockElement$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementFace$$Original = $BlockElementFace;}
declare module "net.minecraft.client.renderer.block.model.BlockElementRotation" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $BlockElementRotation extends $Record {
constructor(arg0: $Vector3f$$Type, arg1: $Direction$Axis$$Type, arg2: float, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "origin"(): $Vector3f
public "rescale"(): boolean
public "axis"(): $Direction$Axis
public "angle"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementRotation$$Type = ({"origin"?: $Vector3f$$Type, "angle"?: float, "axis"?: $Direction$Axis$$Type, "rescale"?: boolean}) | ([origin?: $Vector3f$$Type, angle?: float, axis?: $Direction$Axis$$Type, rescale?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementRotation$$Original = $BlockElementRotation;}
declare module "net.minecraft.client.renderer.LightTexture" {
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $LightTexture implements $AutoCloseable$$Interface {
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer
static readonly "FULL_BLOCK": integer

constructor(arg0: $GameRenderer$$Type, arg1: $Minecraft$$Type)

public "close"(): void
public static "block"(arg0: integer): integer
public "tick"(): void
public static "getBrightness"(arg0: $DimensionType$$Type, arg1: integer): float
public "turnOnLightLayer"(): void
public "turnOffLightLayer"(): void
public "updateLightTexture"(arg0: float): void
public static "sky"(arg0: integer): integer
public static "pack"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTexture$$Type = ($LightTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightTexture$$Original = $LightTexture;}
declare module "net.minecraft.client.renderer.texture.SpriteTicker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $SpriteTicker$$Interface extends $AutoCloseable$$Interface {
}

export class $SpriteTicker implements $SpriteTicker$$Interface {
 "close"(): void
 "tickAndUpload"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTicker$$Type = ($SpriteTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteTicker$$Original = $SpriteTicker;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity} from "net.minecraft.world.entity.Entity"

export interface $EntityRendererProvider$$Interface<T extends $Entity> {

(arg0: $EntityRendererProvider$Context): $EntityRenderer$$Type<(T)>
}

export class $EntityRendererProvider<T extends $Entity> implements $EntityRendererProvider$$Interface {
 "create"(arg0: $EntityRendererProvider$Context$$Type): $EntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$$Type<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$$Original<T> = $EntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.ShaderInstance" {
import {$ShaderProgramAccessor$$Interface} from "io.wispforest.owo.mixin.shader.ShaderProgramAccessor"
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Shader$$Interface} from "com.mojang.blaze3d.shaders.Shader"
import {$Map} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$LodestoneProgram} from "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$IShaderInstance$$Interface} from "team.lodestar.lodestone.systems.rendering.shader.IShaderInstance"

export class $ShaderInstance implements $Shader$$Interface, $AutoCloseable$$Interface, $ShaderProgramAccessor$$Interface, $IShaderInstance$$Interface {
readonly "FOG_START": $Uniform
readonly "PROJECTION_MATRIX": $Uniform
static readonly "SHADER_PATH": StringJS
readonly "TEXTURE_MATRIX": $Uniform
readonly "FOG_END": $Uniform
readonly "MODEL_VIEW_MATRIX": $Uniform
readonly "SCREEN_SIZE": $Uniform
readonly "GLINT_ALPHA": $Uniform
readonly "COLOR_MODULATOR": $Uniform
readonly "LINE_WIDTH": $Uniform
readonly "uniformMap": $Map<(StringJS), ($Uniform)>
readonly "LIGHT0_DIRECTION": $Uniform
readonly "CHUNK_OFFSET": $Uniform
readonly "FOG_COLOR": $Uniform
readonly "FOG_SHAPE": $Uniform
readonly "GAME_TIME": $Uniform
readonly "LIGHT1_DIRECTION": $Uniform

/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $VertexFormat$$Type)
constructor(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type, arg2: $VertexFormat$$Type)

public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "markDirty"(): void
public "setSampler"(arg0: StringJS, arg1: any): void
public "getFragmentProgram"(): $Program
public "getVertexProgram"(): $Program
public "getUniform"(arg0: StringJS): $Uniform
public "handler$ckc001$lodestone$close"(arg0: $CallbackInfo$$Type): void
public "owo$getLoadedUniforms"(): $Map
public "attachToProgram"(): void
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public "getGeometryProgram"(): $LodestoneProgram
public "getVertexFormat"(): $VertexFormat
public "setDefaultUniforms"(arg0: $VertexFormat$Mode$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: $Window$$Type): void
get "name"(): StringJS
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
get "geometryProgram"(): $LodestoneProgram
get "vertexFormat"(): $VertexFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstance$$Type = ($ShaderInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderInstance$$Original = $ShaderInstance;}
declare module "net.minecraft.client.renderer.texture.Stitcher$Entry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $Stitcher$Entry$$Interface {
}

export class $Stitcher$Entry implements $Stitcher$Entry$$Interface {
 "name"(): $ResourceLocation
 "width"(): integer
 "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stitcher$Entry$$Type = ($Stitcher$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stitcher$Entry$$Original = $Stitcher$Entry;}
declare module "net.minecraft.client.renderer.texture.Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable$$Interface {

(): void
}

export class $Tickable implements $Tickable$$Interface {
 "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tickable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tickable$$Original = $Tickable;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderer" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$IBlockEntityRendererExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension"

export interface $BlockEntityRenderer$$Interface<T extends $BlockEntity> extends $IBlockEntityRendererExtension$$Interface<(T)> {

(arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer): void
get "viewDistance"(): integer
}

export class $BlockEntityRenderer<T extends $BlockEntity> implements $BlockEntityRenderer$$Interface {
 "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
 "getViewDistance"(): integer
 "shouldRenderOffScreen"(arg0: T): boolean
 "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
 "getRenderBoundingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderer$$Type<T> = ((arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderer$$Original<T> = $BlockEntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.texture.AbstractTexture" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $AbstractTexture implements $AutoCloseable$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor()

public "reset"(arg0: $TextureManager$$Type, arg1: $ResourceManager$$Type, arg2: $ResourceLocation$$Type, arg3: $Executor$$Type): void
public "load"(arg0: $ResourceManager$$Type): void
public "getId"(): integer
public "close"(): void
public "bind"(): void
public "setFilter"(arg0: boolean, arg1: boolean): void
public "restoreLastBlurMipmap"(): void
public "releaseId"(): void
public "setBlurMipmap"(arg0: boolean, arg1: boolean): void
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTexture$$Type = ($AbstractTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTexture$$Original = $AbstractTexture;}
declare module "net.minecraft.client.renderer.FogRenderer$FogMode" {
import {$Enum} from "java.lang.Enum"

export class $FogRenderer$FogMode extends $Enum<($FogRenderer$FogMode)> {
static readonly "FOG_TERRAIN": $FogRenderer$FogMode
static readonly "FOG_SKY": $FogRenderer$FogMode

public static "values"(): ($FogRenderer$FogMode)[]
public static "valueOf"(arg0: StringJS): $FogRenderer$FogMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogRenderer$FogMode$$Type = (("fog_sky") | ("fog_terrain"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FogRenderer$FogMode$$Original = $FogRenderer$FogMode;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BrainDebugRenderer$PoiInfo {
readonly "pos": $BlockPos
 "freeTicketCount": integer
readonly "type": StringJS

constructor(arg0: $BlockPos$$Type, arg1: StringJS, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$PoiInfo$$Type = ($BrainDebugRenderer$PoiInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$PoiInfo$$Original = $BrainDebugRenderer$PoiInfo;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager" {
import {$GpuWarnlistManager$Preparations} from "net.minecraft.client.renderer.GpuWarnlistManager$Preparations"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<($GpuWarnlistManager$Preparations)> {
constructor()

public "showWarning"(): void
public "dismissWarning"(): void
public "getVersionWarnings"(): StringJS
public "isShowingWarning"(): boolean
public "getVendorWarnings"(): StringJS
public "resetWarnings"(): void
public "hasWarnings"(): boolean
public "getAllWarnings"(): StringJS
public "willShowWarning"(): boolean
public "isSkippingFabulous"(): boolean
public "dismissWarningAndSkipFabulous"(): void
public "getRendererWarnings"(): StringJS
get "versionWarnings"(): StringJS
get "showingWarning"(): boolean
get "vendorWarnings"(): StringJS
get "allWarnings"(): StringJS
get "skippingFabulous"(): boolean
get "rendererWarnings"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$$Type = ($GpuWarnlistManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$$Original = $GpuWarnlistManager;}
declare module "net.minecraft.client.renderer.entity.EntityRenderDispatcher" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$OwoEntityRenderDispatcherExtension$$Interface} from "io.wispforest.owo.util.pond.OwoEntityRenderDispatcherExtension"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$Map} from "java.util.Map"
import {$PlayerSkin$Model} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ItemInHandRenderer} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface, $OwoEntityRenderDispatcherExtension$$Interface {
 "crosshairPickEntity": $Entity
 "renderers": $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
readonly "options": $Options
readonly "textureManager": $TextureManager
 "camera": $Camera

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ItemRenderer$$Type, arg3: $BlockRenderDispatcher$$Type, arg4: $Font$$Type, arg5: $Options$$Type, arg6: $EntityModelSet$$Type)

public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $Entity$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "setRenderShadow"(arg0: boolean): void
public "owo$setShowNametag"(showNametag: boolean): void
public "setRenderHitBoxes"(arg0: boolean): void
public "wrapOperation$cje000$undergarden$neverShowInactivePotHitbox"(arg0: $Entity$$Type, arg1: $Operation$$Type): boolean
public "distanceToSqr"(arg0: double, arg1: double, arg2: double): double
public "distanceToSqr"(arg0: $Entity$$Type): double
public "render"<E extends $Entity>(arg0: E, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer): void
public "getRenderer"<T extends $Entity>(arg0: T): $EntityRenderer<(T)>
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "owo$setCounterRotate"(counterRotate: boolean): void
public "overrideCameraOrientation"(arg0: $Quaternionf$$Type): void
public "cameraOrientation"(): $Quaternionf
public "owo$counterRotate"(): boolean
public "owo$showNametag"(): boolean
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getPackedLightCoords"<E extends $Entity>(arg0: E, arg1: float): integer
public "shouldRender"<E extends $Entity>(arg0: E, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "shouldRenderHitBoxes"(): boolean
public "getSkinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
set "level"(value: $Level$$Type)
set "renderShadow"(value: boolean)
set "renderHitBoxes"(value: boolean)
get "itemInHandRenderer"(): $ItemInHandRenderer
get "skinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcher$$Type = ($EntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcher$$Original = $EntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.RenderStateShard$CullStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$CullStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$CullStateShard$$Type = ($RenderStateShard$CullStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$CullStateShard$$Original = $RenderStateShard$CullStateShard;}
declare module "net.minecraft.client.renderer.block.BlockModelShaper" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Comparable$$Type} from "java.lang.Comparable"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockModelShaper {
constructor(arg0: $ModelManager$$Type)

public "replaceCache"(arg0: $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>): void
public "getModelManager"(): $ModelManager
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
/**
 * 
 * @deprecated
 */
public "getParticleIcon"(arg0: $BlockState$$Type): $TextureAtlasSprite
public "getTexture"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $TextureAtlasSprite
public static "statePropertiesToString"(arg0: $Map$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): StringJS
public static "stateToModelLocation"(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(arg0: $BlockState$$Type): $ModelResourceLocation
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelShaper$$Type = ($BlockModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelShaper$$Original = $BlockModelShaper;}
declare module "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$ShaderInstance, $ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ShaderStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
readonly "shader": $Optional<($Supplier<($ShaderInstance)>)>
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Supplier$$Type<($ShaderInstance$$Type)>)
constructor()

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ShaderStateShard$$Type = ($RenderStateShard$ShaderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ShaderStateShard$$Original = $RenderStateShard$ShaderStateShard;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$IDimensionSpecialEffectsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IDimensionSpecialEffectsExtension"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $DimensionSpecialEffects implements $IDimensionSpecialEffectsExtension$$Interface {
constructor(arg0: float, arg1: boolean, arg2: $DimensionSpecialEffects$SkyType$$Type, arg3: boolean, arg4: boolean)

public static "forType"(arg0: $DimensionType$$Type): $DimensionSpecialEffects
public "skyType"(): $DimensionSpecialEffects$SkyType
public "getBrightnessDependentFogColor"(arg0: $Vec3$$Type, arg1: float): $Vec3
public "hasGround"(): boolean
public "getSunriseColor"(arg0: float, arg1: float): (float)[]
public "getCloudHeight"(): float
public "constantAmbientLight"(): boolean
public "isFoggyAt"(arg0: integer, arg1: integer): boolean
public "forceBrightLightmap"(): boolean
public "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
public "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
public "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
public "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
public "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
get "cloudHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$$Type = ($DimensionSpecialEffects);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$$Original = $DimensionSpecialEffects;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$Optional} from "java.util.Optional"
import {$GameTestDebugRenderer} from "net.minecraft.client.renderer.debug.GameTestDebugRenderer"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$VillageSectionsDebugRenderer} from "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RaidDebugRenderer} from "net.minecraft.client.renderer.debug.RaidDebugRenderer"
import {$GoalSelectorDebugRenderer} from "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer"
import {$GameEventListenerRenderer} from "net.minecraft.client.renderer.debug.GameEventListenerRenderer"
import {$BeeDebugRenderer} from "net.minecraft.client.renderer.debug.BeeDebugRenderer"
import {$BreezeDebugRenderer} from "net.minecraft.client.renderer.debug.BreezeDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PathfindingRenderer} from "net.minecraft.client.renderer.debug.PathfindingRenderer"
import {$OrientedBoundingBox$$Type} from "net.bettercombat.client.collision.OrientedBoundingBox"
import {$LightSectionDebugRenderer} from "net.minecraft.client.renderer.debug.LightSectionDebugRenderer"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BrainDebugRenderer} from "net.minecraft.client.renderer.debug.BrainDebugRenderer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$StructureRenderer} from "net.minecraft.client.renderer.debug.StructureRenderer"

export class $DebugRenderer {
readonly "waterDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "neighborsUpdateRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "pathfindingRenderer": $PathfindingRenderer
readonly "gameTestDebugRenderer": $GameTestDebugRenderer
readonly "supportBlockRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "solidFaceRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "breezeDebugRenderer": $BreezeDebugRenderer
readonly "gameEventListenerRenderer": $GameEventListenerRenderer
readonly "structureRenderer": $StructureRenderer
readonly "lightDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "brainDebugRenderer": $BrainDebugRenderer
readonly "heightMapRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkBorderRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "collisionBoxRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "skyLightSectionDebugRenderer": $LightSectionDebugRenderer
readonly "goalSelectorRenderer": $GoalSelectorDebugRenderer
readonly "beeDebugRenderer": $BeeDebugRenderer
readonly "villageSectionsDebugRenderer": $VillageSectionsDebugRenderer
readonly "raidDebugRenderer": $RaidDebugRenderer
readonly "worldGenAttemptRenderer": $DebugRenderer$SimpleDebugRenderer

constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float, arg8: boolean, arg9: float, arg10: boolean): void
public static "renderFilledUnitCube"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "printDebug"(obb: $OrientedBoundingBox$$Type): void
public "handler$bjf000$bettercombat$renderColliderDebug"(matrices: $PoseStack$$Type, vertexConsumers: $MultiBufferSource$BufferSource$$Type, cameraX: double, cameraY: double, cameraZ: double, ci: $CallbackInfo$$Type): void
public "handler$bhp000$moonlight$supp$renderVanillaDebug"(poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$BufferSource$$Type, camX: double, camY: double, camZ: double, ci: $CallbackInfo$$Type): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "getTargetedEntity"(arg0: $Entity$$Type, arg1: integer): $Optional<($Entity)>
public "switchRenderChunkborder"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$$Type = ($DebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$$Original = $DebugRenderer;}
declare module "net.minecraft.client.renderer.GameRenderer" {
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LightTexture} from "net.minecraft.client.renderer.LightTexture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$MapRenderer} from "net.minecraft.client.gui.MapRenderer"
import {$Args$$Type} from "org.spongepowered.asm.mixin.injection.invoke.arg.Args"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$ShaderInstance} from "net.minecraft.client.renderer.ShaderInstance"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$OverlayTexture} from "net.minecraft.client.renderer.texture.OverlayTexture"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $GameRenderer implements $AutoCloseable$$Interface {
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
static readonly "PROJECTION_Z_NEAR": float
 "blitShader": $ShaderInstance
static readonly "MAX_BLUR_RADIUS": integer
readonly "itemInHandRenderer": $ItemInHandRenderer

constructor(arg0: $Minecraft$$Type, arg1: $ItemInHandRenderer$$Type, arg2: $ResourceManager$$Type, arg3: $RenderBuffers$$Type)

public "close"(): void
public "pick"(arg0: float): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "checkEntityPostEffect"(arg0: $Entity$$Type): void
public "setRenderBlockOutline"(arg0: boolean): void
public "resetData"(): void
public "shutdownEffect"(): void
public "currentEffect"(): $PostChain
public "isPanoramicMode"(): boolean
public "renderZoomed"(arg0: float, arg1: float, arg2: float): void
public "setPanoramicMode"(arg0: boolean): void
public "render"(arg0: $DeltaTracker$$Type, arg1: boolean): void
public "preloadUiShader"(arg0: $ResourceProvider$$Type): void
public "getMainCamera"(): $Camera
public "renderLevel"(arg0: $DeltaTracker$$Type): void
public static "getPositionTexColorShader"(): $ShaderInstance
public static "getPositionColorShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeBreezeWindShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public static "getPositionTexShader"(): $ShaderInstance
public "createReloadListener"(): $PreparableReloadListener
public static "getPositionShader"(): $ShaderInstance
public "lightTexture"(): $LightTexture
public "setRenderHand"(arg0: boolean): void
public "getDepthFar"(): float
public "overlayTexture"(): $OverlayTexture
public "togglePostEffect"(): void
public "getRenderDistance"(): float
public "getMapRenderer"(): $MapRenderer
public static "getParticleShader"(): $ShaderInstance
public "processBlurEffect"(arg0: float): void
public "getMinecraft"(): $Minecraft
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public "loadEffect"(arg0: $ResourceLocation$$Type): void
public "getShader"(arg0: StringJS): $ShaderInstance
public "getFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeCloudsShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeSolidShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public "getDarkenWorldAmount"(arg0: float): float
public "displayItemActivation"(arg0: $ItemStack$$Type): void
public "getProjectionMatrix"(arg0: double): $Matrix4f
public "resetProjectionMatrix"(arg0: $Matrix4f$$Type): void
public static "getNightVisionScale"(arg0: $LivingEntity$$Type, arg1: float): float
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public "args$cjl000$lodestone$extractViewBob"(arg0: $Args$$Type): void
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public "handler$cjl000$lodestone$clearViewBob"(arg0: $CallbackInfo$$Type): void
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public "handler$bmj000$ars_nouveau$arsNouveau$resize"(arg0: integer, arg1: integer, arg2: $CallbackInfo$$Type): void
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public "handler$cjl000$lodestone$injectionResizeListener"(arg0: integer, arg1: integer, arg2: $CallbackInfo$$Type): void
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
set "renderBlockOutline"(value: boolean)
get "panoramicMode"(): boolean
set "panoramicMode"(value: boolean)
get "mainCamera"(): $Camera
public static get "positionTexColorShader"(): $ShaderInstance
public static get "positionColorShader"(): $ShaderInstance
public static get "rendertypeTextBackgroundShader"(): $ShaderInstance
public static get "rendertypeEndPortalShader"(): $ShaderInstance
public static get "rendertypeBeaconBeamShader"(): $ShaderInstance
public static get "rendertypeTextIntensityShader"(): $ShaderInstance
public static get "rendertypeEndGatewayShader"(): $ShaderInstance
public static get "rendertypeBreezeWindShader"(): $ShaderInstance
public static get "rendertypeEntitySolidShader"(): $ShaderInstance
public static get "rendertypeTripwireShader"(): $ShaderInstance
public static get "rendertypeEntityShadowShader"(): $ShaderInstance
public static get "rendertypeTextSeeThroughShader"(): $ShaderInstance
public static get "rendertypeEnergySwirlShader"(): $ShaderInstance
public static get "rendertypeEntityGlintShader"(): $ShaderInstance
public static get "positionColorTexLightmapShader"(): $ShaderInstance
public static get "rendertypeCutoutMippedShader"(): $ShaderInstance
public static get "rendertypeEntityDecalShader"(): $ShaderInstance
public static get "rendertypeLightningShader"(): $ShaderInstance
public static get "rendertypeGuiOverlayShader"(): $ShaderInstance
public static get "rendertypeEntityNoOutlineShader"(): $ShaderInstance
public static get "rendertypeCrumblingShader"(): $ShaderInstance
public static get "rendertypeTranslucentShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutShader"(): $ShaderInstance
public static get "rendertypeEntityAlphaShader"(): $ShaderInstance
public static get "positionColorLightmapShader"(): $ShaderInstance
public static get "rendertypeWaterMaskShader"(): $ShaderInstance
public static get "positionTexShader"(): $ShaderInstance
public static get "positionShader"(): $ShaderInstance
set "renderHand"(value: boolean)
get "depthFar"(): float
get "renderDistance"(): float
get "mapRenderer"(): $MapRenderer
public static get "particleShader"(): $ShaderInstance
get "minecraft"(): $Minecraft
public static get "rendertypeGlintDirectShader"(): $ShaderInstance
public static get "rendertypeArmorGlintShader"(): $ShaderInstance
public static get "rendertypeEyesShader"(): $ShaderInstance
public static get "rendertypeLeashShader"(): $ShaderInstance
public static get "rendertypeCloudsShader"(): $ShaderInstance
public static get "rendertypeGlintShader"(): $ShaderInstance
public static get "rendertypeLinesShader"(): $ShaderInstance
public static get "rendertypeCutoutShader"(): $ShaderInstance
public static get "rendertypeTextShader"(): $ShaderInstance
public static get "rendertypeGuiShader"(): $ShaderInstance
public static get "rendertypeSolidShader"(): $ShaderInstance
public static get "rendertypeOutlineShader"(): $ShaderInstance
public static get "rendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static get "rendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static get "rendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static get "rendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public static get "rendertypeEntityGlintDirectShader"(): $ShaderInstance
public static get "rendertypeArmorEntityGlintShader"(): $ShaderInstance
public static get "rendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static get "rendertypeGlintTranslucentShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static get "rendertypeGuiTextHighlightShader"(): $ShaderInstance
public static get "rendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static get "rendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRenderer$$Type = ($GameRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRenderer$$Original = $GameRenderer;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider$Context" {
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"

export class $EntityRendererProvider$Context {
constructor(arg0: $EntityRenderDispatcher$$Type, arg1: $ItemRenderer$$Type, arg2: $BlockRenderDispatcher$$Type, arg3: $ItemInHandRenderer$$Type, arg4: $ResourceManager$$Type, arg5: $EntityModelSet$$Type, arg6: $Font$$Type)

public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getModelManager"(): $ModelManager
public "getModelSet"(): $EntityModelSet
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getItemRenderer"(): $ItemRenderer
public "getFont"(): $Font
public "getResourceManager"(): $ResourceManager
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "modelManager"(): $ModelManager
get "modelSet"(): $EntityModelSet
get "itemInHandRenderer"(): $ItemInHandRenderer
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "itemRenderer"(): $ItemRenderer
get "font"(): $Font
get "resourceManager"(): $ResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$Context$$Type = ($EntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$Context$$Original = $EntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.RenderStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public "toString"(): StringJS
public "setupRenderState"(): void
public "clearRenderState"(): void
public static "setupGlintTexturing"(arg0: float): void
get "upRenderState"(): void
public static set "upGlintTexturing"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$$Type = ($RenderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$$Original = $RenderStateShard;}
declare module "net.minecraft.client.renderer.block.ModelBlockRenderer" {
import {$BitSet$$Type} from "java.util.BitSet"
import {$BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBlockRenderer {
constructor(arg0: $BlockColors$$Type)

public static "clearCache"(): void
public static "enableCaching"(): void
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "putQuadData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $PoseStack$Pose$$Type, arg5: $BakedQuad$$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer): void
public "calculateShape"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: (integer)[], arg4: $Direction$$Type, arg5: (float)[], arg6: $BitSet$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $ModelData$$Type, arg10: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRenderer$$Type = ($ModelBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBlockRenderer$$Original = $ModelBlockRenderer;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable$$Interface<($SectionRenderDispatcher$RenderSection$CompileTask)> {
public "compareTo"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Type = ($SectionRenderDispatcher$RenderSection$CompileTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Original = $SectionRenderDispatcher$RenderSection$CompileTask;}
declare module "net.minecraft.client.renderer.texture.SpriteLoader$Preparations" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Record} from "java.lang.Record"

export class $SpriteLoader$Preparations extends $Record {
constructor(width: integer, height: integer, mipLevel: integer, missing: $TextureAtlasSprite$$Type, regions: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, readyForUpload: $CompletableFuture$$Type<(void)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "regions"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "waitForUpload"(): $CompletableFuture<($SpriteLoader$Preparations)>
public "readyForUpload"(): $CompletableFuture<(void)>
public "height"(): integer
public "missing"(): $TextureAtlasSprite
public "mipLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteLoader$Preparations$$Type = ({"readyForUpload"?: $CompletableFuture$$Type<(void)>, "mipLevel"?: integer, "regions"?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, "height"?: integer, "missing"?: $TextureAtlasSprite$$Type, "width"?: integer}) | ([readyForUpload?: $CompletableFuture$$Type<(void)>, mipLevel?: integer, regions?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, height?: integer, missing?: $TextureAtlasSprite$$Type, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteLoader$Preparations$$Original = $SpriteLoader$Preparations;}
declare module "net.minecraft.client.renderer.EffectInstance" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Map} from "java.util.Map"
import {$BlendMode} from "com.mojang.blaze3d.shaders.BlendMode"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$EffectProgram} from "com.mojang.blaze3d.shaders.EffectProgram"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Effect$$Interface} from "com.mojang.blaze3d.shaders.Effect"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $EffectInstance implements $Effect$$Interface, $AutoCloseable$$Interface {
readonly "samplerMap": $Map<(StringJS), ($IntSupplier)>

constructor(arg0: $ResourceProvider$$Type, arg1: StringJS)

public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "markDirty"(): void
public "setSampler"(arg0: StringJS, arg1: $IntSupplier$$Type): void
public "getFragmentProgram"(): $Program
public "getVertexProgram"(): $Program
public "getUniform"(arg0: StringJS): $Uniform
public "attachToProgram"(): void
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public static "parseBlendNode"(arg0: $JsonObject$$Type): $BlendMode
public static "getOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $EffectProgram
get "name"(): StringJS
get "id"(): integer
get "fragmentProgram"(): $Program
get "vertexProgram"(): $Program
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectInstance$$Type = ($EffectInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectInstance$$Original = $EffectInstance;}
declare module "net.minecraft.client.renderer.debug.BreezeDebugRenderer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BreezeDebugPayload$BreezeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BreezeDebugPayload$BreezeInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $BreezeDebugRenderer {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "add"(arg0: $BreezeDebugPayload$BreezeInfo$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreezeDebugRenderer$$Type = ($BreezeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreezeDebugRenderer$$Original = $BreezeDebugRenderer;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection" {
import {$VertexBuffer} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$SectionRenderDispatcher$RenderSection$CompileTask} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$AtomicReference} from "java.util.concurrent.atomic.AtomicReference"
import {$SectionRenderDispatcher$CompiledSection} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $SectionRenderDispatcher$RenderSection {
readonly "compiled": $AtomicReference<($SectionRenderDispatcher$CompiledSection)>
static readonly "SIZE": integer
readonly "index": integer

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "isDirty"(): boolean
public "getBuffer"(arg0: $RenderType$$Type): $VertexBuffer
public "getOrigin"(): $BlockPos
public "getBoundingBox"(): $AABB
public "rebuildSectionAsync"(arg0: $SectionRenderDispatcher$$Type, arg1: $RenderRegionCache$$Type): void
public "getCompiled"(): $SectionRenderDispatcher$CompiledSection
public "setNotDirty"(): void
public "isDirtyFromPlayer"(): boolean
public "setDirty"(arg0: boolean): void
public "compileSync"(arg0: $RenderRegionCache$$Type): void
public "releaseBuffers"(): void
public "isAxisAlignedWith"(arg0: integer, arg1: integer, arg2: integer): boolean
public "resortTransparency"(arg0: $RenderType$$Type, arg1: $SectionRenderDispatcher$$Type): boolean
public "createCompileTask"(arg0: $RenderRegionCache$$Type): $SectionRenderDispatcher$RenderSection$CompileTask
public "hasAllNeighbors"(): boolean
public "getRelativeOrigin"(arg0: $Direction$$Type): $BlockPos
public "setOrigin"(arg0: integer, arg1: integer, arg2: integer): void
get "dirty"(): boolean
get "origin"(): $BlockPos
get "boundingBox"(): $AABB
get "notDirty"(): void
get "dirtyFromPlayer"(): boolean
set "dirty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$$Type = ($SectionRenderDispatcher$RenderSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$$Original = $SectionRenderDispatcher$RenderSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$WriteMaskStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
readonly "writeColor": boolean
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "writeDepth": boolean
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean, arg1: boolean)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$WriteMaskStateShard$$Type = ($RenderStateShard$WriteMaskStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$WriteMaskStateShard$$Original = $RenderStateShard$WriteMaskStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$List$$Type} from "java.util.List"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$ItemOverrides$BakedOverride} from "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride"
import {$UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $ItemOverrides {
static readonly "NO_OVERRIDE": float
static readonly "EMPTY": $ItemOverrides

constructor(arg0: $ModelBaker$$Type, arg1: $UnbakedModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>, arg3: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>)

public "resolve"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: $ClientLevel$$Type, arg3: $LivingEntity$$Type, arg4: integer): $BakedModel
public "getOverrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
get "overrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$$Type = ($ItemOverrides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$$Original = $ItemOverrides;}
declare module "net.minecraft.client.renderer.block.model.BlockModel" {
import {$ItemOverrides} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$$Type} from "net.minecraft.client.renderer.block.model.BlockModel$GuiLight"
import {$Gson} from "com.google.gson.Gson"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$FaceBakery} from "net.minecraft.client.renderer.block.model.FaceBakery"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Reader$$Type} from "java.io.Reader"
import {$BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel$$Type, $UnbakedModel$$Interface} from "net.minecraft.client.resources.model.UnbakedModel"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$BlockGeometryBakingContext} from "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext"
import {$ItemOverride, $ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $BlockModel implements $UnbakedModel$$Interface {
 "parent": $BlockModel
readonly "textureMap": $Map<(StringJS), ($Either<($Material), (StringJS)>)>
static readonly "PARTICLE_TEXTURE_REFERENCE": StringJS
 "name": StringJS
static readonly "GSON": $Gson
readonly "customData": $BlockGeometryBakingContext
static readonly "FACE_BAKERY": $FaceBakery

constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($BlockElement$$Type)>, arg2: $Map$$Type<(StringJS), ($Either$$Type<($Material$$Type), (StringJS)>)>, arg3: boolean, arg4: $BlockModel$GuiLight$$Type, arg5: $ItemTransforms$$Type, arg6: $List$$Type<($ItemOverride$$Type)>)

public "toString"(): StringJS
public "isResolved"(): boolean
public static "fromStream"(arg0: $Reader$$Type): $BlockModel
public "getDependencies"(): $Collection<($ResourceLocation)>
public "getGuiLight"(): $BlockModel$GuiLight
public "getRootModel"(): $BlockModel
public "bakeVanilla"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
/**
 * 
 * @deprecated
 */
public "getElements"(): $List<($BlockElement)>
public "bake"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public static "bakeFace"(arg0: $BlockElement$$Type, arg1: $BlockElementFace$$Type, arg2: $TextureAtlasSprite$$Type, arg3: $Direction$$Type, arg4: $ModelState$$Type): $BakedQuad
public "hasTexture"(arg0: StringJS): boolean
public "getTransforms"(): $ItemTransforms
public "getOverrides"(): $List<($ItemOverride)>
public "getOverrides"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $ItemOverrides
public "getParentLocation"(): $ResourceLocation
public "getMaterial"(arg0: StringJS): $Material
public "hasAmbientOcclusion"(): boolean
public "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
public static "fromString"(arg0: StringJS): $BlockModel
get "resolved"(): boolean
get "dependencies"(): $Collection<($ResourceLocation)>
get "guiLight"(): $BlockModel$GuiLight
get "rootModel"(): $BlockModel
get "elements"(): $List<($BlockElement)>
get "transforms"(): $ItemTransforms
get "overrides"(): $List<($ItemOverride)>
get "parentLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$$Type = ($BlockModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$$Original = $BlockModel;}
declare module "net.minecraft.client.renderer.ViewArea" {
import {$SectionRenderDispatcher$RenderSection} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export class $ViewArea {
 "sections": ($SectionRenderDispatcher$RenderSection)[]

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: $Level$$Type, arg2: integer, arg3: $LevelRenderer$$Type)

public "getViewDistance"(): integer
public "setDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "repositionCamera"(arg0: double, arg1: double): void
public "releaseAllBuffers"(): void
public "getLevelHeightAccessor"(): $LevelHeightAccessor
get "viewDistance"(): integer
get "levelHeightAccessor"(): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewArea$$Type = ($ViewArea);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewArea$$Original = $ViewArea;}
declare module "net.minecraft.client.renderer.chunk.RenderChunkRegion" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $RenderChunkRegion implements $BlockAndTintGetter$$Interface {
static readonly "RADIUS": integer
static readonly "SIZE": integer

public static "index"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getMinBuildHeight"(): integer
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getHeight"(): integer
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getLightEngine"(): $LevelLightEngine
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getMaxLightLevel"(): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMaxBuildHeight"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "getMaxSection"(): integer
public "getSectionsCount"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
get "minBuildHeight"(): integer
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "maxSection"(): integer
get "sectionsCount"(): integer
get "minSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkRegion$$Type = ($RenderChunkRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderChunkRegion$$Original = $RenderChunkRegion;}
declare module "net.minecraft.client.renderer.block.model.BakedQuad" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteTransparencyLevel} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ModelQuadFacing} from "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing"
import {$BakedQuadAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.BakedQuadAccess"
import {$BakedQuadView$$Interface} from "org.embeddedt.embeddium.impl.model.quad.BakedQuadView"

export class $BakedQuad implements $BakedQuadAccess$$Interface, $BakedQuadView$$Interface {
 "tintIndex": integer
 "direction": $Direction

constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean)
constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean, arg5: boolean)

public "getFlags"(): integer
public "getColor"(arg0: integer): integer
public "getY"(arg0: integer): float
public "isShade"(): boolean
public "getSprite"(): $TextureAtlasSprite
public "getNormalFace"(): $ModelQuadFacing
public "isTinted"(): boolean
public "getTexV"(arg0: integer): float
public "getTexU"(arg0: integer): float
public "getZ"(arg0: integer): float
public "getX"(arg0: integer): float
public "getDirection"(): $Direction
public "getVertices"(): (integer)[]
public "hasAmbientOcclusion"(): boolean
public "getComputedFaceNormal"(): integer
public "hasShade"(): boolean
public "getTintIndex"(): integer
public "getLightFace"(): $Direction
public "getForgeNormal"(arg0: integer): integer
public "getColorIndex"(): integer
public "setVertices"(arg0: (integer)[]): void
public "getTransparencyLevel"(): $SpriteTransparencyLevel
public "setFlags"(arg0: integer): void
public "getLight"(arg0: integer): integer
public "hasColor"(): boolean
public "getModFaceNormal"(): integer
get "flags"(): integer
get "shade"(): boolean
get "sprite"(): $TextureAtlasSprite
get "normalFace"(): $ModelQuadFacing
get "tinted"(): boolean
get "vertices"(): (integer)[]
get "computedFaceNormal"(): integer
get "lightFace"(): $Direction
get "colorIndex"(): integer
set "vertices"(value: (integer)[])
get "transparencyLevel"(): $SpriteTransparencyLevel
set "flags"(value: integer)
get "modFaceNormal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuad$$Type = ($BakedQuad);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuad$$Original = $BakedQuad;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher" {
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$SectionRenderDispatcher$RenderSection$CompileTask$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"

export class $SectionRenderDispatcher {
constructor(arg0: $ClientLevel$$Type, arg1: $LevelRenderer$$Type, arg2: $Executor$$Type, arg3: $RenderBuffers$$Type, arg4: $BlockRenderDispatcher$$Type, arg5: $BlockEntityRenderDispatcher$$Type)

public "schedule"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "dispose"(): void
public "setCamera"(arg0: $Vec3$$Type): void
public "getFreeBufferCount"(): integer
public "uploadAllPendingUploads"(): void
public "rebuildSectionSync"(arg0: $SectionRenderDispatcher$RenderSection$$Type, arg1: $RenderRegionCache$$Type): void
public "getStats"(): StringJS
public "blockUntilClear"(): void
public "getCameraPosition"(): $Vec3
public "isQueueEmpty"(): boolean
public "uploadSectionLayer"(arg0: $MeshData$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
public "getToUpload"(): integer
public "getToBatchCount"(): integer
public "uploadSectionIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
set "level"(value: $ClientLevel$$Type)
set "camera"(value: $Vec3$$Type)
get "freeBufferCount"(): integer
get "stats"(): StringJS
get "cameraPosition"(): $Vec3
get "queueEmpty"(): boolean
get "toUpload"(): integer
get "toBatchCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$$Type = ($SectionRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$$Original = $SectionRenderDispatcher;}
declare module "net.minecraft.client.renderer.culling.Frustum" {
import {$Viewport} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"
import {$ViewportProvider$$Interface} from "org.embeddedt.embeddium.impl.render.viewport.ViewportProvider"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $Frustum implements $ViewportProvider$$Interface {
static readonly "OFFSET_STEP": integer

constructor(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type)
constructor(arg0: $Frustum$$Type)

public "prepare"(arg0: double, arg1: double, arg2: double): void
public "isVisible"(arg0: $AABB$$Type): boolean
public "sodium$createViewport"(): $Viewport
public "offsetToFullyIncludeCameraCube"(arg0: integer): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ($Frustum);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frustum$$Original = $Frustum;}
declare module "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$OverlayStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OverlayStateShard$$Type = ($RenderStateShard$OverlayStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OverlayStateShard$$Original = $RenderStateShard$OverlayStateShard;}
declare module "net.minecraft.client.renderer.OutlineBufferSource" {
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $OutlineBufferSource implements $MultiBufferSource$$Interface {
readonly "outlineBufferSource": $MultiBufferSource$BufferSource

constructor(arg0: $MultiBufferSource$BufferSource$$Type)

public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endOutlineBatch"(): void
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSource$$Type = ($OutlineBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutlineBufferSource$$Original = $OutlineBufferSource;}
declare module "net.minecraft.client.renderer.block.model.BlockFaceUV" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockFaceUV {
 "uvs": (float)[]
readonly "rotation": integer

constructor(arg0: (float)[], arg1: integer)

public "setMissingUv"(arg0: (float)[]): void
public "getReverseIndex"(arg0: integer): integer
public "getV"(arg0: integer): float
public "getU"(arg0: integer): float
set "missingUv"(value: (float)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFaceUV$$Type = ($BlockFaceUV);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFaceUV$$Original = $BlockFaceUV;}
declare module "net.minecraft.client.renderer.texture.SpriteContents" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteTransparencyLevel} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$IntStream} from "java.util.stream.IntStream"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$SpriteContentsExtended$$Interface} from "org.embeddedt.embeddium.impl.render.texture.SpriteContentsExtended"
import {$FrameSize$$Type} from "net.minecraft.client.resources.metadata.animation.FrameSize"
import {$Stitcher$Entry$$Interface} from "net.minecraft.client.renderer.texture.Stitcher$Entry"
import {$SpriteContentsAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAccessor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$SpriteContentsInvoker$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.SpriteContentsInvoker"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$SpriteTransparencyLevelHolder$$Interface} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevelHolder"

export class $SpriteContents implements $Stitcher$Entry$$Interface, $AutoCloseable$$Interface, $SpriteContentsAccessor$$Interface, $SpriteTransparencyLevelHolder$$Interface, $SpriteContentsExtended$$Interface, $SpriteContentsInvoker$$Interface {
readonly "animatedTexture": $SpriteContents$AnimatedTexture
 "byMipLevel": ($NativeImage)[]
 "originalImage": $NativeImage

constructor(arg0: $ResourceLocation$$Type, arg1: $FrameSize$$Type, arg2: $NativeImage$$Type, arg3: $ResourceMetadata$$Type)

public "name"(): $ResourceLocation
public "toString"(): StringJS
public "close"(): void
public "width"(): integer
public "sodium$isActive"(): boolean
public "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
public "sodium$setActive"(arg0: boolean): void
public "getUniqueFrames"(): $IntStream
public "isTransparent"(arg0: integer, arg1: integer, arg2: integer): boolean
public "increaseMipLevel"(arg0: integer): void
public "height"(): integer
public "getFrameCount"(): integer
public "embeddium$getTransparencyLevel"(): $SpriteTransparencyLevel
public "getOriginalImage"(): $NativeImage
public "createTicker"(): $SpriteTicker
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
public "sodium$hasAnimation"(): boolean
public "getImages"(): ($NativeImage)[]
public "metadata"(): $ResourceMetadata
public static "getTransparencyLevel"(arg0: $TextureAtlasSprite$$Type): $SpriteTransparencyLevel
public static "getTransparencyLevel"(arg0: $SpriteContents$$Type): $SpriteTransparencyLevel
get "uniqueFrames"(): $IntStream
get "frameCount"(): integer
get "images"(): ($NativeImage)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$$Type = ($SpriteContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$$Original = $SpriteContents;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context" {
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"

export class $BlockEntityRendererProvider$Context {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $BlockRenderDispatcher$$Type, arg2: $ItemRenderer$$Type, arg3: $EntityRenderDispatcher$$Type, arg4: $EntityModelSet$$Type, arg5: $Font$$Type)

public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getModelSet"(): $EntityModelSet
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getItemRenderer"(): $ItemRenderer
public "getFont"(): $Font
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
public "getEntityRenderer"(): $EntityRenderDispatcher
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "modelSet"(): $EntityModelSet
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "itemRenderer"(): $ItemRenderer
get "font"(): $Font
get "entityRenderer"(): $EntityRenderDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$Context$$Type = ($BlockEntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$Context$$Original = $BlockEntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.texture.Dumpable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $Dumpable$$Interface {

(arg0: $ResourceLocation, arg1: $Path): void
}

export class $Dumpable implements $Dumpable$$Interface {
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dumpable$$Type = ((arg0: $ResourceLocation, arg1: $Path) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dumpable$$Original = $Dumpable;}
declare module "net.minecraft.client.renderer.ItemInHandRenderer" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ItemInHandRenderer {
constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $ItemRenderer$$Type)

public "tick"(): void
public "itemUsed"(arg0: $InteractionHand$$Type): void
public "renderPlayerArm"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: float, arg4: float, arg5: $HumanoidArm$$Type): void
public "handler$bib000$moonlight$animateItem"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, handHeight: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type): void
public "handler$bib000$moonlight$renderSpecial"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, equippedProgress: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type, arm: $HumanoidArm$$Type): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
public "applyItemArmTransform"(arg0: $PoseStack$$Type, arg1: $HumanoidArm$$Type, arg2: float): void
public "renderHandsWithItems"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type, arg3: $LocalPlayer$$Type, arg4: integer): void
public "applyItemArmAttackTransform"(arg0: $PoseStack$$Type, arg1: $HumanoidArm$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInHandRenderer$$Type = ($ItemInHandRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInHandRenderer$$Original = $ItemInHandRenderer;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource" {
import {$SpriteSource$Output$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output"
import {$SpriteSourceType} from "net.minecraft.client.renderer.texture.atlas.SpriteSourceType"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $SpriteSource$$Interface {
}

export class $SpriteSource implements $SpriteSource$$Interface {
static readonly "TEXTURE_ID_CONVERTER": $FileToIdConverter

 "run"(arg0: $ResourceManager$$Type, arg1: $SpriteSource$Output$$Type): void
 "type"(): $SpriteSourceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$$Type = ($SpriteSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$$Original = $SpriteSource;}
declare module "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$BooleanStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type, arg3: boolean)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$BooleanStateShard$$Type = ($RenderStateShard$BooleanStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$BooleanStateShard$$Original = $RenderStateShard$BooleanStateShard;}
declare module "net.minecraft.client.renderer.texture.OverlayTexture" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export class $OverlayTexture implements $AutoCloseable$$Interface {
static readonly "NO_WHITE_U": integer
static readonly "WHITE_OVERLAY_V": integer
static readonly "NO_OVERLAY": integer
static readonly "RED_OVERLAY_V": integer

constructor()

public static "v"(arg0: boolean): integer
public "close"(): void
public static "u"(arg0: float): integer
public "teardownOverlayColor"(): void
public "setupOverlayColor"(): void
public static "pack"(arg0: float, arg1: boolean): integer
public static "pack"(arg0: integer, arg1: integer): integer
get "upOverlayColor"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayTexture$$Type = ($OverlayTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverlayTexture$$Original = $OverlayTexture;}
declare module "net.minecraft.client.renderer.block.model.ItemTransform" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $ItemTransform {
static readonly "NO_TRANSFORM": $ItemTransform
readonly "rotation": $Vector3f
readonly "translation": $Vector3f
readonly "scale": $Vector3f
readonly "rightRotation": $Vector3f

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type, arg3: $Vector3f$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: boolean, arg1: $PoseStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransform$$Type = ($ItemTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransform$$Original = $ItemTransform;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo" {
import {$SpriteContentsAnimationFrameAccessor$$Interface as $SpriteContentsAnimationFrameAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor"
import {$SpriteContentsAnimationFrameAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor"

export class $SpriteContents$FrameInfo implements $SpriteContentsAnimationFrameAccessor$$Interface, $SpriteContentsAnimationFrameAccessor$0$$Interface {
readonly "index": integer
readonly "time": integer

public "getIndex"(): integer
public "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$FrameInfo$$Type = ($SpriteContents$FrameInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$FrameInfo$$Original = $SpriteContents$FrameInfo;}
declare module "net.minecraft.client.renderer.entity.player.PlayerRenderer" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PlayerModel} from "net.minecraft.client.model.PlayerModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LivingEntityRenderer} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"

export class $PlayerRenderer extends $LivingEntityRenderer<($AbstractClientPlayer), ($PlayerModel<($AbstractClientPlayer)>)> {
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: boolean)

public "getTextureLocation"(arg0: $AbstractClientPlayer$$Type): $ResourceLocation
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $AbstractClientPlayer$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: $AbstractClientPlayer$$Type, arg1: float): $Vec3
public "renderRightHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "renderLeftHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRenderer$$Type = ($PlayerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRenderer$$Original = $PlayerRenderer;}
declare module "net.minecraft.client.renderer.debug.StructureRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$StructuresDebugPayload$PieceInfo$$Type} from "net.minecraft.network.protocol.common.custom.StructuresDebugPayload$PieceInfo"

export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "addBoundingBox"(arg0: $BoundingBox$$Type, arg1: $List$$Type<($StructuresDebugPayload$PieceInfo$$Type)>, arg2: $ResourceKey$$Type<($Level)>): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRenderer$$Type = ($StructureRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureRenderer$$Original = $StructureRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride" {
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"

export class $ItemOverrides$BakedOverride {
 "model": $BakedModel

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$BakedOverride$$Type = ($ItemOverrides$BakedOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$BakedOverride$$Original = $ItemOverrides$BakedOverride;}
declare module "net.minecraft.client.renderer.entity.layers.RenderLayer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IUpperPartHelper$$Interface} from "dev.kosmx.playerAnim.impl.IUpperPartHelper"

export class $RenderLayer<T extends $Entity, M extends $EntityModel<(object)>> implements $IUpperPartHelper$$Interface {
constructor(arg0: $RenderLayerParent$$Type<(T), (M)>)

public "isUpperPart"(): boolean
public "getParentModel"(): M
public "setUpperPart"(bl: boolean): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
get "upperPart"(): boolean
get "parentModel"(): M
set "upperPart"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayer$$Type<T, M> = ($RenderLayer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayer$$Original<T, M> = $RenderLayer<(T), (M)>;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder" {
import {$RenderType$CompositeState} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$LayeringStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$WriteMaskStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderType$OutlineProperty$$Type} from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import {$RenderStateShard$DepthTestStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
constructor()

public "setTextureState"(arg0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setColorLogicState"(arg0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(arg0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(arg0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(arg0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(arg0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(arg0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(arg0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(arg0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(arg0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTransparencyState"(arg0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "createCompositeState"(arg0: boolean): $RenderType$CompositeState
public "createCompositeState"(arg0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
public "setLightmapState"(arg0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
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
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Type = ($RenderType$CompositeState$CompositeStateBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Original = $RenderType$CompositeState$CompositeStateBuilder;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection" {
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$CompiledSection {
static readonly "UNCOMPILED": $SectionRenderDispatcher$CompiledSection
static readonly "EMPTY": $SectionRenderDispatcher$CompiledSection

constructor()

public "isEmpty"(arg0: $RenderType$$Type): boolean
public "getRenderableBlockEntities"(): $List<($BlockEntity)>
public "hasNoRenderableLayers"(): boolean
public "facesCanSeeEachother"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
get "renderableBlockEntities"(): $List<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$CompiledSection$$Type = ($SectionRenderDispatcher$CompiledSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$CompiledSection$$Original = $SectionRenderDispatcher$CompiledSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$LineStateShard" {
import {$OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LineStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $OptionalDouble$$Type)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LineStateShard$$Type = ($RenderStateShard$LineStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LineStateShard$$Original = $RenderStateShard$LineStateShard;}
declare module "net.minecraft.client.renderer.entity.EntityRenderer" {
import {$EntityRendererAccessor$$Interface as $EntityRendererAccessor$0$$Interface} from "com.aetherteam.cumulus.mixin.mixins.client.accessor.EntityRendererAccessor"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityRendererAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.EntityRendererAccessor"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$EntityRendererInter$$Interface} from "dev.tr7zw.entityculling.access.EntityRendererInter"

export class $EntityRenderer<T extends $Entity> implements $EntityRendererAccessor$$Interface, $EntityRendererInter$$Interface, $EntityRendererAccessor$0$$Interface {
static readonly "LEASH_RENDER_STEPS": integer

public "shadowShouldShowName"(entity: $Entity$$Type): boolean
public "shadowRenderNameTag"(entity: $Entity$$Type, component: $Component$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, light: integer, delta: float): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "entityCullingIgnoresCulling"(entity: $Entity$$Type): boolean
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "getFont"(): $Font
public "cumulus$getShadowRadius"(): float
public "aether$getShadowRadius"(): float
public "aether$setShadowRadius"(arg0: float): void
public "cumulus$setShadowRadius"(arg0: float): void
public "entityCullingGetCullingBox"(entity: $Entity$$Type): $AABB
public "handler$boj000$irons_spellbooks$renderRayOverride"(arg0: $Entity$$Type, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double, arg5: $CallbackInfoReturnable$$Type): void
public "getPackedLightCoords"(arg0: T, arg1: float): integer
public "shouldRender"(arg0: T, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderer$$Type<T> = ($EntityRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderer$$Original<T> = $EntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.debug.GameTestDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public "clear"(): void
public "addMarker"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS, arg3: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameTestDebugRenderer$$Type = ($GameTestDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameTestDebugRenderer$$Original = $GameTestDebugRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$LightmapStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LightmapStateShard$$Type = ($RenderStateShard$LightmapStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LightmapStateShard$$Original = $RenderStateShard$LightmapStateShard;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSourceType" {
import {$SpriteSource, $SpriteSource$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SpriteSourceType extends $Record {
constructor(arg0: $MapCodec$$Type<($SpriteSource$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<($SpriteSource)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSourceType$$Type = ({"codec"?: $MapCodec$$Type<($SpriteSource$$Type)>}) | ([codec?: $MapCodec$$Type<($SpriteSource$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSourceType$$Original = $SpriteSourceType;}
declare module "net.minecraft.client.renderer.debug.PathfindingRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public static "renderPathLine"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Path$$Type, arg3: double, arg4: double, arg5: double): void
public "addPath"(arg0: integer, arg1: $Path$$Type, arg2: float): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public static "renderPath"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $Path$$Type, arg3: float, arg4: boolean, arg5: boolean, arg6: double, arg7: double, arg8: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathfindingRenderer$$Type = ($PathfindingRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PathfindingRenderer$$Original = $PathfindingRenderer;}
declare module "net.minecraft.client.renderer.RenderStateShard$OutputStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"

export class $RenderStateShard$OutputStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OutputStateShard$$Type = ($RenderStateShard$OutputStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OutputStateShard$$Original = $RenderStateShard$OutputStateShard;}
declare module "net.minecraft.client.renderer.item.ClampedItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemPropertyFunction$$Interface} from "net.minecraft.client.renderer.item.ItemPropertyFunction"

export interface $ClampedItemPropertyFunction$$Interface extends $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ClampedItemPropertyFunction implements $ClampedItemPropertyFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
 "unclampedCall"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClampedItemPropertyFunction$$Original = $ClampedItemPropertyFunction;}
declare module "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$DepthTestStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: integer)

public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$DepthTestStateShard$$Type = ($RenderStateShard$DepthTestStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$DepthTestStateShard$$Original = $RenderStateShard$DepthTestStateShard;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SpriteSource$SpriteSupplier$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier"
import {$Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteSource$Output$$Interface {
}

export class $SpriteSource$Output implements $SpriteSource$Output$$Interface {
 "add"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): void
 "add"(arg0: $ResourceLocation$$Type, arg1: $SpriteSource$SpriteSupplier$$Type): void
 "removeAll"(arg0: $Predicate$$Type<($ResourceLocation)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$Output$$Type = ($SpriteSource$Output);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$Output$$Original = $SpriteSource$Output;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"
import {$SpriteResourceLoader, $SpriteResourceLoader$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"

export interface $SpriteSource$SpriteSupplier$$Interface extends $Function$$Interface<($SpriteResourceLoader), ($SpriteContents)> {

(arg0: $SpriteResourceLoader): $SpriteContents$$Type
}

export class $SpriteSource$SpriteSupplier implements $SpriteSource$SpriteSupplier$$Interface {
 "discard"(): void
 "apply"(arg0: $SpriteResourceLoader$$Type): $SpriteContents
static "identity"<T>(): $Function<($SpriteResourceLoader), ($SpriteResourceLoader)>
 "compose"<V>(arg0: $Function$$Type<(V), ($SpriteResourceLoader$$Type)>): $Function<(V), ($SpriteContents)>
 "andThen"<V>(arg0: $Function$$Type<($SpriteContents), (V)>): $Function<($SpriteResourceLoader), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$SpriteSupplier$$Type = ((arg0: $SpriteResourceLoader) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$SpriteSupplier$$Original = $SpriteSource$SpriteSupplier;}
declare module "net.minecraft.client.renderer.RenderStateShard$TextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TextureStateShard extends $RenderStateShard$EmptyTextureStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
 "blur": boolean
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
readonly "texture": $Optional<($ResourceLocation)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
 "mipmap": boolean
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)

public "toString"(): StringJS
public "cutoutTexture"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TextureStateShard$$Type = ($RenderStateShard$TextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TextureStateShard$$Original = $RenderStateShard$TextureStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TransparencyStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TransparencyStateShard$$Type = ($RenderStateShard$TransparencyStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TransparencyStateShard$$Original = $RenderStateShard$TransparencyStateShard;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType" {
import {$Enum} from "java.lang.Enum"

export class $DimensionSpecialEffects$SkyType extends $Enum<($DimensionSpecialEffects$SkyType)> {
static readonly "END": $DimensionSpecialEffects$SkyType
static readonly "NONE": $DimensionSpecialEffects$SkyType
static readonly "NORMAL": $DimensionSpecialEffects$SkyType

public static "values"(): ($DimensionSpecialEffects$SkyType)[]
public static "valueOf"(arg0: StringJS): $DimensionSpecialEffects$SkyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$SkyType$$Type = (("none") | ("normal") | ("end"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$SkyType$$Original = $DimensionSpecialEffects$SkyType;}
declare module "net.minecraft.client.renderer.RenderType" {
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
 "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $Runnable$$Type, arg7: $Runnable$$Type)

public "mode"(): $VertexFormat$Mode
public "toString"(): StringJS
public static "lines"(): $RenderType
public "format"(): $VertexFormat
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "text"(arg0: $ResourceLocation$$Type): $RenderType
public static "cutoutMipped"(): $RenderType
public "affectsCrumbling"(): boolean
public "sortOnUpload"(): boolean
public static "endPortal"(): $RenderType
public "draw"(arg0: $MeshData$$Type): void
public static "leash"(): $RenderType
public static "lightning"(): $RenderType
public static "eyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "gui"(): $RenderType
public static "solid"(): $RenderType
public static "translucent"(): $RenderType
public static "entityNoOutline"(arg0: $ResourceLocation$$Type): $RenderType
public static "energySwirl"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "armorEntityGlint"(): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type): $RenderType
public static "cloudsDepthOnly"(): $RenderType
public static "entityCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityDecal"(arg0: $ResourceLocation$$Type): $RenderType
public static "glintTranslucent"(): $RenderType
public static "textIntensity"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugLineStrip"(arg0: double): $RenderType
public static "entityGlintDirect"(): $RenderType
public "getChunkLayerId"(): integer
public static "entityShadow"(arg0: $ResourceLocation$$Type): $RenderType
public static "textSeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "entitySolid"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugSectionQuads"(): $RenderType
public static "textPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "chunkBufferLayers"(): $List<($RenderType)>
public static "entitySmoothCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityGlint"(): $RenderType
public static "dragonRaysDepth"(): $RenderType
public static "debugFilledBox"(): $RenderType
public static "armorCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "textBackground"(): $RenderType
public static "guiTextHighlight"(): $RenderType
public static "guiOverlay"(): $RenderType
public static "tripwire"(): $RenderType
public "canConsolidateConsecutiveGeometry"(): boolean
public static "createArmorDecalCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensityPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "dragonExplosionAlpha"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensitySeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "itemEntityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "translucentMovingBlock"(): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "debugStructureQuads"(): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public static "cutout"(): $RenderType
public static "clouds"(): $RenderType
public static "breezeEyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugQuads"(): $RenderType
public "isOutline"(): boolean
public static "crumbling"(arg0: $ResourceLocation$$Type): $RenderType
public static "breezeWind"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "endGateway"(): $RenderType
public static "lineStrip"(): $RenderType
public "outline"(): $Optional<($RenderType)>
public static "outline"(arg0: $ResourceLocation$$Type): $RenderType
public static "glint"(): $RenderType
public static "dragonRays"(): $RenderType
public static "waterMask"(): $RenderType
public static "beaconBeam"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public "bufferSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$$Type = ($RenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$$Original = $RenderType;}
declare module "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$EmptyTextureStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Runnable$$Type, arg1: $Runnable$$Type)

public "cutoutTexture"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Type = ($RenderStateShard$EmptyTextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Original = $RenderStateShard$EmptyTextureStateShard;}
declare module "net.minecraft.client.renderer.texture.DynamicTexture" {
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Path$$Type} from "java.nio.file.Path"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor(arg0: $NativeImage$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "load"(arg0: $ResourceManager$$Type): void
public "close"(): void
public "upload"(): void
public "getPixels"(): $NativeImage
public "setPixels"(arg0: $NativeImage$$Type): void
public "dumpContents"(pResourceLocation: $ResourceLocation$$Type, pPath: $Path$$Type): void
public "wrapOperation$bia000$moonlight$forceMipMap"(instance: $NativeImage$$Type, a: integer, b: integer, c: integer, autoClose: boolean, op: $Operation$$Type): void
public "wrapOperation$bia000$moonlight$forceMipMap"(a: integer, b: integer, c: integer, op: $Operation$$Type): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTexture$$Type = ($DynamicTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicTexture$$Original = $DynamicTexture;}
declare module "net.minecraft.client.renderer.debug.GameEventListenerRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PositionSource$$Type} from "net.minecraft.world.level.gameevent.PositionSource"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "trackListener"(arg0: $PositionSource$$Type, arg1: integer): void
public "trackGameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $Vec3$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameEventListenerRenderer$$Type = ($GameEventListenerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameEventListenerRenderer$$Original = $GameEventListenerRenderer;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture" {
import {$IntStream} from "java.util.stream.IntStream"
import {$SpriteContents$FrameInfo} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"
import {$List} from "java.util.List"
import {$SpriteContentsAnimationAccessor$$Interface as $SpriteContentsAnimationAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$SpriteContentsAnimationAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor"

export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimationAccessor$$Interface, $SpriteContentsAnimationAccessor$0$$Interface {
readonly "frames": $List<($SpriteContents$FrameInfo)>
readonly "frameRowSize": integer
readonly "interpolateFrames": boolean

public "getUniqueFrames"(): $IntStream
public "getFrames"(): $List
public "createTicker"(): $SpriteTicker
public "uploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
public "getFrameRowSize"(): integer
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
public "getFrameY"(arg0: integer): integer
public "getFrameX"(arg0: integer): integer
get "uniqueFrames"(): $IntStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$AnimatedTexture$$Type = ($SpriteContents$AnimatedTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$AnimatedTexture$$Original = $SpriteContents$AnimatedTexture;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection$$Type} from "java.util.Collection"
import {$SpriteContentsConstructor, $SpriteContentsConstructor$$Type} from "net.neoforged.neoforge.client.textures.SpriteContentsConstructor"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$Logger} from "org.slf4j.Logger"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteResourceLoader$$Interface {

(arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor): $SpriteContents$$Type
}

export class $SpriteResourceLoader implements $SpriteResourceLoader$$Interface {
static readonly "LOGGER": $Logger

static "create"(arg0: $Collection$$Type<($MetadataSectionSerializer$$Type<(never)>)>): $SpriteResourceLoader
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): $SpriteContents
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type, arg2: $SpriteContentsConstructor$$Type): $SpriteContents
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteResourceLoader$$Type = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteResourceLoader$$Original = $SpriteResourceLoader;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderType$CompositeState$CompositeStateBuilder} from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderType$OutlineProperty} from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState {
readonly "transparencyState": $RenderStateShard$TransparencyStateShard
readonly "overlayState": $RenderStateShard$OverlayStateShard
readonly "outputState": $RenderStateShard$OutputStateShard
readonly "outlineProperty": $RenderType$OutlineProperty
readonly "depthTestState": $RenderStateShard$DepthTestStateShard
readonly "lightmapState": $RenderStateShard$LightmapStateShard
readonly "cullState": $RenderStateShard$CullStateShard
readonly "texturingState": $RenderStateShard$TexturingStateShard
readonly "textureState": $RenderStateShard$EmptyTextureStateShard
readonly "states": $ImmutableList<($RenderStateShard)>
readonly "colorLogicState": $RenderStateShard$ColorLogicStateShard
readonly "layeringState": $RenderStateShard$LayeringStateShard
readonly "lineState": $RenderStateShard$LineStateShard
readonly "shaderState": $RenderStateShard$ShaderStateShard
readonly "writeMaskState": $RenderStateShard$WriteMaskStateShard

public "toString"(): StringJS
public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$$Type = ($RenderType$CompositeState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$$Original = $RenderType$CompositeState;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPool" {
import {$List$$Type} from "java.util.List"
import {$SectionBufferBuilderPack, $SectionBufferBuilderPack$$Type} from "net.minecraft.client.renderer.SectionBufferBuilderPack"

export class $SectionBufferBuilderPool {
constructor(arg0: $List$$Type<($SectionBufferBuilderPack$$Type)>)

public "isEmpty"(): boolean
public "release"(arg0: $SectionBufferBuilderPack$$Type): void
public "acquire"(): $SectionBufferBuilderPack
public static "allocate"(arg0: integer): $SectionBufferBuilderPool
public "getFreeBufferCount"(): integer
get "empty"(): boolean
get "freeBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPool$$Type = ($SectionBufferBuilderPool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPool$$Original = $SectionBufferBuilderPool;}
declare module "net.minecraft.client.renderer.block.BlockRenderDispatcher" {
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$LiquidBlockRenderer} from "net.minecraft.client.renderer.block.LiquidBlockRenderer"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ModelBlockRenderer} from "net.minecraft.client.renderer.block.ModelBlockRenderer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockModelShaper, $BlockModelShaper$$Type} from "net.minecraft.client.renderer.block.BlockModelShaper"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
readonly "blockColors": $BlockColors

constructor(arg0: $BlockModelShaper$$Type, arg1: $BlockEntityWithoutLevelRenderer$$Type, arg2: $BlockColors$$Type)

/**
 * 
 * @deprecated
 */
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: $ModelData$$Type, arg6: $RenderType$$Type): void
public "renderLiquid"(arg0: $BlockPos$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type, arg7: $ModelData$$Type, arg8: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type): void
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $ModelData$$Type): void
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "getLiquidBlockRenderer"(): $LiquidBlockRenderer
public "getBlockModelShaper"(): $BlockModelShaper
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getModelRenderer"(): $ModelBlockRenderer
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "liquidBlockRenderer"(): $LiquidBlockRenderer
get "blockModelShaper"(): $BlockModelShaper
get "modelRenderer"(): $ModelBlockRenderer
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderDispatcher$$Type = ($BlockRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRenderDispatcher$$Original = $BlockRenderDispatcher;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride$Predicate" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ItemOverride$Predicate {
constructor(arg0: $ResourceLocation$$Type, arg1: float)

public "getProperty"(): $ResourceLocation
public "getValue"(): float
get "property"(): $ResourceLocation
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$Predicate$$Type = ($ItemOverride$Predicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$Predicate$$Original = $ItemOverride$Predicate;}
declare module "net.minecraft.client.renderer.entity.ItemRenderer" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ItemColors$$Type} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ItemModelShaper} from "net.minecraft.client.renderer.ItemModelShaper"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ItemRenderer implements $ResourceManagerReloadListener$$Interface {
static readonly "GUI_SLOT_CENTER_X": integer
static readonly "COMPASS_FOIL_UI_SCALE": float
static readonly "COMPASS_FOIL_FIRST_PERSON_SCALE": float
static readonly "COMPASS_FOIL_TEXTURE_SCALE": float
static readonly "ENCHANTED_GLINT_ENTITY": $ResourceLocation
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer
static readonly "GUI_SLOT_CENTER_Y": integer
static readonly "ITEM_COUNT_BLIT_OFFSET": integer
static readonly "ENCHANTED_GLINT_ITEM": $ResourceLocation
static readonly "SPYGLASS_IN_HAND_MODEL": $ModelResourceLocation
static readonly "TRIDENT_IN_HAND_MODEL": $ModelResourceLocation

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ModelManager$$Type, arg3: $ItemColors$$Type, arg4: $BlockEntityWithoutLevelRenderer$$Type)

public "render"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type): void
public "renderStatic"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer, arg8: integer, arg9: integer): void
public "renderStatic"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer): void
public "getModel"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): $BakedModel
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public static "getCompassFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getFoilBufferDirect"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public "getItemModelShaper"(): $ItemModelShaper
public static "getFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public static "getArmorFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean): $VertexConsumer
public "renderQuadList"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $List$$Type<($BakedQuad$$Type)>, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public "renderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "itemModelShaper"(): $ItemModelShaper
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRenderer$$Type = ($ItemRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRenderer$$Original = $ItemRenderer;}
declare module "net.minecraft.client.renderer.ItemModelShaper" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"

export class $ItemModelShaper {
readonly "shapes": $Int2ObjectMap<($ModelResourceLocation)>

constructor(arg0: $ModelManager$$Type)

public "register"(arg0: $Item$$Type, arg1: $ModelResourceLocation$$Type): void
public "getModelManager"(): $ModelManager
public "rebuildCache"(): void
public "getItemModel"(arg0: $ItemStack$$Type): $BakedModel
public "getItemModel"(arg0: $Item$$Type): $BakedModel
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelShaper$$Type = ($ItemModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModelShaper$$Original = $ItemModelShaper;}
declare module "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TexturingStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TexturingStateShard$$Type = ($RenderStateShard$TexturingStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TexturingStateShard$$Original = $RenderStateShard$TexturingStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemTransforms" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemTransform, $ItemTransform$$Type} from "net.minecraft.client.renderer.block.model.ItemTransform"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export class $ItemTransforms {
static readonly "NO_TRANSFORMS": $ItemTransforms
readonly "head": $ItemTransform
readonly "firstPersonLeftHand": $ItemTransform
readonly "moddedTransforms": $ImmutableMap<($ItemDisplayContext), ($ItemTransform)>
readonly "firstPersonRightHand": $ItemTransform
readonly "thirdPersonRightHand": $ItemTransform
readonly "thirdPersonLeftHand": $ItemTransform
readonly "gui": $ItemTransform
readonly "ground": $ItemTransform
readonly "fixed": $ItemTransform

constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type, arg8: $ImmutableMap$$Type<($ItemDisplayContext$$Type), ($ItemTransform$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type)
constructor(arg0: $ItemTransforms$$Type)

public "hasTransform"(arg0: $ItemDisplayContext$$Type): boolean
public "getTransform"(arg0: $ItemDisplayContext$$Type): $ItemTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransforms$$Type = ($ItemTransforms);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransforms$$Original = $ItemTransforms;}
declare module "net.minecraft.client.renderer.RenderBuffers" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SectionBufferBuilderPool} from "net.minecraft.client.renderer.SectionBufferBuilderPool"
import {$SectionBufferBuilderPack} from "net.minecraft.client.renderer.SectionBufferBuilderPack"
import {$OutlineBufferSource} from "net.minecraft.client.renderer.OutlineBufferSource"

export class $RenderBuffers {
constructor(arg0: integer)

public "fixedBufferPack"(): $SectionBufferBuilderPack
public "sectionBufferPool"(): $SectionBufferBuilderPool
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "bufferSource"(): $MultiBufferSource$BufferSource
public "outlineBufferSource"(): $OutlineBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffers$$Type = ($RenderBuffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBuffers$$Original = $RenderBuffers;}
declare module "net.minecraft.client.renderer.LevelRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$0$$Interface} from "com.stal111.forbidden_arcanus.core.mixin.LevelRendererAccessor"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$CloudStatus, $CloudStatus$$Type} from "net.minecraft.client.CloudStatus"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockDestructionProgress} from "net.minecraft.server.level.BlockDestructionProgress"
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$LevelRendererAccessor$$Interface} from "com.aetherteam.aether.mixin.mixins.client.accessor.LevelRendererAccessor"
import {$WorldRendererExtended$$Interface} from "org.embeddedt.embeddium.impl.world.WorldRendererExtended"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$MeshData} from "com.mojang.blaze3d.vertex.MeshData"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$SectionRenderDispatcher} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ViewArea$$Type} from "net.minecraft.client.renderer.ViewArea"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$VertexBuffer, $VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Collection$$Type} from "java.util.Collection"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$EmbeddiumWorldRenderer} from "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $LevelRenderer implements $ResourceManagerReloadListener$$Interface, $AutoCloseable$$Interface, $LevelRendererAccessor$$Interface, $LevelRendererAccessor$0$$Interface, $WorldRendererExtended$$Interface {
readonly "renderBuffers": $RenderBuffers
 "rainSoundTime": integer
static readonly "HALF_SECTION_SIZE": integer
 "darkBuffer": $VertexBuffer
static readonly "SECTION_SIZE": integer
readonly "destroyingBlocks": $Int2ObjectMap<($BlockDestructionProgress)>
static readonly "DIRECTIONS": ($Direction)[]
 "skyBuffer": $VertexBuffer

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $BlockEntityRenderDispatcher$$Type, arg3: $RenderBuffers$$Type)

public "clear"(): void
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type): void
public "allChanged"(): void
public "redirect$bml000$ars_nouveau$anonRepositionCamera"(arg0: $ViewArea$$Type, arg1: double, arg2: double): void
public "needsUpdate"(): void
public "graphicsChanged"(): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): void
public "addRecentlyCompiledSection"(arg0: $SectionRenderDispatcher$RenderSection$$Type): void
public "getEntityStatistics"(): StringJS
public "getSectionRenderDispatcher"(): $SectionRenderDispatcher
public "shouldShowEntityOutlines"(): boolean
public "getLastViewDistance"(): double
public "doesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
public "requestOutlineEffect"(): void
public static "renderShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "renderLineBox"(arg0: $VertexConsumer$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: float, arg8: float, arg9: float, arg10: float): void
public "renderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
public static "renderVoxelShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "killFrustum"(): void
public "playJukeboxSong"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: $BlockPos$$Type): void
public "setSectionDirty"(arg0: integer, arg1: integer, arg2: integer): void
public "renderClouds"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double): void
public "updateGlobalBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>, arg1: $Collection$$Type<($BlockEntity$$Type)>): void
public "sodium$getWorldRenderer"(): $EmbeddiumWorldRenderer
public "localvar$cjo000$lodestone$cacheBlockModelViewMatrix"(arg0: $Matrix4f$$Type): $Matrix4f
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public "renderLevel"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type): void
public "entityTarget"(): $RenderTarget
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "callBuildClouds"(arg0: $Tesselator$$Type, arg1: double, arg2: double, arg3: double, arg4: $Vec3$$Type): $MeshData
public "getTotalSections"(): double
public "isSectionCompiled"(arg0: $BlockPos$$Type): boolean
public static "offsetFrustum"(arg0: $Frustum$$Type): $Frustum
public "onChunkLoaded"(arg0: $ChunkPos$$Type): void
public "setBlockDirty"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "blockChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: integer): void
public "getParticlesTarget"(): $RenderTarget
public "getCloudsTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "doEntityOutline"(): void
public "prepareCullFrustum"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type): void
public static "renderFace"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Direction$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): void
public "setBlocksDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "renderSky"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: float, arg3: $Camera$$Type, arg4: boolean, arg5: $Runnable$$Type): void
public "aether$setPrevCloudsType"(arg0: $CloudStatus$$Type): void
public "aether$getSkyBuffer"(): $VertexBuffer
public "aether$getPrevCloudsType"(): $CloudStatus
public "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle
public "aether$setCloudBuffer"(arg0: $VertexBuffer$$Type): void
public "getSectionStatistics"(): StringJS
public "aether$getCloudBuffer"(): $VertexBuffer
public "aether$setGenerateClouds"(arg0: boolean): void
public "aether$isGenerateClouds"(): boolean
public "aether$getStarBuffer"(): $VertexBuffer
public "handler$cjo000$lodestone$injectionBeforeTransparencyChainProcess"(arg0: $CallbackInfo$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getFrustum"(): $Frustum
public "tickRain"(arg0: $Camera$$Type): void
public "getTicks"(): integer
public "getTranslucentTarget"(): $RenderTarget
public "getItemEntityTarget"(): $RenderTarget
public "hasRenderedAllSections"(): boolean
public "countRenderedSections"(): integer
public "handler$bne000$patchouli$onRender"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "stopJukeboxSongAndNotifyNearby"(arg0: $BlockPos$$Type): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public "handler$bbk000$embeddium$renderCloudsFast"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double, arg7: $CallbackInfo$$Type): void
public "initOutline"(): void
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type): integer
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): integer
public "renderSnowAndRain"(arg0: $LightTexture$$Type, arg1: float, arg2: double, arg3: double, arg4: double): void
public "captureFrustum"(): void
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type): void
public "handler$zdm000$geckolib$captureRenderedEntities"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
set "level"(value: $ClientLevel$$Type)
get "entityStatistics"(): StringJS
get "sectionRenderDispatcher"(): $SectionRenderDispatcher
get "lastViewDistance"(): double
get "totalSections"(): double
get "particlesTarget"(): $RenderTarget
get "cloudsTarget"(): $RenderTarget
get "weatherTarget"(): $RenderTarget
get "sectionStatistics"(): StringJS
get "frustum"(): $Frustum
get "ticks"(): integer
get "translucentTarget"(): $RenderTarget
get "itemEntityTarget"(): $RenderTarget
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRenderer$$Type = ($LevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRenderer$$Original = $LevelRenderer;}
declare module "net.minecraft.client.renderer.block.model.BlockModel$GuiLight" {
import {$Enum} from "java.lang.Enum"

export class $BlockModel$GuiLight extends $Enum<($BlockModel$GuiLight)> {
static readonly "SIDE": $BlockModel$GuiLight
static readonly "FRONT": $BlockModel$GuiLight

public static "values"(): ($BlockModel$GuiLight)[]
public static "valueOf"(arg0: StringJS): $BlockModel$GuiLight
public static "getByName"(arg0: StringJS): $BlockModel$GuiLight
public "lightLikeBlock"(): boolean
public "getSerializedName"(): StringJS
get "serializedName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$GuiLight$$Type = (("front") | ("side"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$GuiLight$$Original = $BlockModel$GuiLight;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPack" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionBufferBuilderPack implements $AutoCloseable$$Interface {
static readonly "TOTAL_BUFFERS_SIZE": integer

constructor()

public "buffer"(arg0: $RenderType$$Type): $ByteBufferBuilder
public "close"(): void
public "discardAll"(): void
public "clearAll"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPack$$Type = ($SectionBufferBuilderPack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPack$$Original = $SectionBufferBuilderPack;}
declare module "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard" {
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ColorLogicStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ColorLogicStateShard$$Type = ($RenderStateShard$ColorLogicStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ColorLogicStateShard$$Original = $RenderStateShard$ColorLogicStateShard;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GpuWarnlistManager$Preparations {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$Preparations$$Type = ($GpuWarnlistManager$Preparations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$Preparations$$Original = $GpuWarnlistManager$Preparations;}
declare module "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
public "clear"(): void
public "setVillageSection"(arg0: $SectionPos$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "setNotVillageSection"(arg0: $SectionPos$$Type): void
set "villageSection"(value: $SectionPos$$Type)
set "notVillageSection"(value: $SectionPos$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageSectionsDebugRenderer$$Type = ($VillageSectionsDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillageSectionsDebugRenderer$$Original = $VillageSectionsDebugRenderer;}
declare module "net.minecraft.client.renderer.debug.LightSectionDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $LightLayer$$Type)

public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightSectionDebugRenderer$$Type = ($LightSectionDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightSectionDebugRenderer$$Original = $LightSectionDebugRenderer;}
declare module "net.minecraft.client.renderer.PostChain" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$List} from "java.util.List"
import {$LocalRef$$Type} from "com.llamalad7.mixinextras.sugar.ref.LocalRef"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$PostPass} from "net.minecraft.client.renderer.PostPass"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Matrix4f} from "org.joml.Matrix4f"

export class $PostChain implements $AutoCloseable$$Interface {
 "screenWidth": integer
readonly "passes": $List<($PostPass)>
readonly "screenTarget": $RenderTarget
 "screenHeight": integer
 "shaderOrthoMatrix": $Matrix4f
readonly "fullSizedTargets": $List<($RenderTarget)>

constructor(arg0: $TextureManager$$Type, arg1: $ResourceProvider$$Type, arg2: $RenderTarget$$Type, arg3: $ResourceLocation$$Type)

public "getName"(): StringJS
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "process"(arg0: float): void
public "redirect$ckb000$lodestone$addAdditionalTargetNodeSpecifications$mixinextras$bridge$19"(arg0: $PostChain$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $LocalRef$$Type): void
public "redirect$ckb000$lodestone$addAdditionalTargetNodeSpecifications"(arg0: $PostChain$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: $JsonObject$$Type): void
public "addTempTarget"(arg0: StringJS, arg1: integer, arg2: integer): void
public "setUniform"(arg0: StringJS, arg1: float): void
public "updateOrthoMatrix"(): void
public "getTempTarget"(arg0: StringJS): $RenderTarget
public "addPass"(arg0: StringJS, arg1: $RenderTarget$$Type, arg2: $RenderTarget$$Type, arg3: boolean): $PostPass
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostChain$$Type = ($PostChain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostChain$$Original = $PostChain;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$BrainDebugPayload$BrainDump$$Type} from "net.minecraft.network.protocol.common.custom.BrainDebugPayload$BrainDump"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BrainDebugRenderer$PoiInfo$$Type} from "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo"

export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "setFreeTicketCount"(arg0: $BlockPos$$Type, arg1: integer): void
public "addPoi"(arg0: $BrainDebugRenderer$PoiInfo$$Type): void
public "removeBrainDump"(arg0: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addOrUpdateBrainDump"(arg0: $BrainDebugPayload$BrainDump$$Type): void
public "removePoi"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$$Type = ($BrainDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$$Original = $BrainDebugRenderer;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider" {
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityRendererProvider$$Interface<T extends $BlockEntity> {

(arg0: $BlockEntityRendererProvider$Context): $BlockEntityRenderer$$Type<(T)>
}

export class $BlockEntityRendererProvider<T extends $BlockEntity> implements $BlockEntityRendererProvider$$Interface {
 "create"(arg0: $BlockEntityRendererProvider$Context$$Type): $BlockEntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$$Type<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$$Original<T> = $BlockEntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.PostPass" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$EffectInstance} from "net.minecraft.client.renderer.EffectInstance"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $PostPass implements $AutoCloseable$$Interface {
readonly "outTarget": $RenderTarget
readonly "inTarget": $RenderTarget

constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $RenderTarget$$Type, arg3: $RenderTarget$$Type, arg4: boolean)

public "getName"(): StringJS
public "close"(): void
public "process"(arg0: float): void
public "getEffect"(): $EffectInstance
public "getFilterMode"(): integer
public "addAuxAsset"(arg0: StringJS, arg1: $IntSupplier$$Type, arg2: integer, arg3: integer): void
public "setOrthoMatrix"(arg0: $Matrix4f$$Type): void
get "name"(): StringJS
get "effect"(): $EffectInstance
get "filterMode"(): integer
set "orthoMatrix"(value: $Matrix4f$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostPass$$Type = ($PostPass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostPass$$Original = $PostPass;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher" {
import {$Map} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockEntityRenderer} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
 "cameraHitResult": $HitResult
 "level": $Level
 "renderers": $Map<($BlockEntityType<(never)>), ($BlockEntityRenderer<(never)>)>
 "camera": $Camera

constructor(arg0: $Font$$Type, arg1: $EntityModelSet$$Type, arg2: $Supplier$$Type<($BlockRenderDispatcher$$Type)>, arg3: $Supplier$$Type<($ItemRenderer$$Type)>, arg4: $Supplier$$Type<($EntityRenderDispatcher$$Type)>)

public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $HitResult$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "render"<E extends $BlockEntity>(arg0: E, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type): void
public "getRenderer"<E extends $BlockEntity>(arg0: E): $BlockEntityRenderer<(E)>
public "renderItem"<E extends $BlockEntity>(arg0: E, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): boolean
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "handler$bpa000$entityculling$render"(blockEntity: $BlockEntity$$Type, f: float, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, info: $CallbackInfo$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderDispatcher$$Type = ($BlockEntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderDispatcher$$Original = $BlockEntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.CubeMap" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $CubeMap {
constructor(arg0: $ResourceLocation$$Type)

public "render"(arg0: $Minecraft$$Type, arg1: float, arg2: float, arg3: float): void
public "preload"(arg0: $TextureManager$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeMap$$Type = ($CubeMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeMap$$Original = $CubeMap;}
declare module "net.minecraft.client.renderer.texture.TextureManager" {
import {$Map} from "java.util.Map"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"
import {$AbstractTexture, $AbstractTexture$$Type} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureManager implements $PreparableReloadListener$$Interface, $Tickable$$Interface, $AutoCloseable$$Interface {
readonly "byPath": $Map<($ResourceLocation), ($AbstractTexture)>
static readonly "INTENTIONAL_MISSING_TEXTURE": $ResourceLocation

constructor(arg0: $ResourceManager$$Type)

public "register"(arg0: StringJS, arg1: $DynamicTexture$$Type): $ResourceLocation
public "register"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): void
public "close"(): void
public "release"(arg0: $ResourceLocation$$Type): void
public "tick"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "bindForSetup"(arg0: $ResourceLocation$$Type): void
public "dumpAllSheets"(arg0: $Path$$Type): void
public "preload"(arg0: $ResourceLocation$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "getTexture"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): $AbstractTexture
public "getTexture"(arg0: $ResourceLocation$$Type): $AbstractTexture
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureManager$$Type = ($TextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureManager$$Original = $TextureManager;}
declare module "net.minecraft.client.renderer.entity.RenderLayerParent" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $RenderLayerParent$$Interface<T extends $Entity, M extends $EntityModel<(object)>> {
get "model"(): M
}

export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<(object)>> implements $RenderLayerParent$$Interface {
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getModel"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayerParent$$Type<T, M> = ($RenderLayerParent<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayerParent$$Original<T, M> = $RenderLayerParent<(T), (M)>;}
declare module "net.minecraft.client.renderer.block.model.FaceBakery" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BlockFaceUV, $BlockFaceUV$$Type} from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import {$BlockElementRotation$$Type} from "net.minecraft.client.renderer.block.model.BlockElementRotation"
import {$Transformation$$Type} from "com.mojang.math.Transformation"
import {$BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export class $FaceBakery {
static readonly "VERTEX_INT_SIZE": integer
static readonly "UV_INDEX": integer
static readonly "VERTEX_COUNT": integer

constructor()

public "recalculateWinding"(arg0: (integer)[], arg1: $Direction$$Type): void
public static "recomputeUVs"(arg0: $BlockFaceUV$$Type, arg1: $Direction$$Type, arg2: $Transformation$$Type): $BlockFaceUV
public static "calculateFacing"(arg0: (integer)[]): $Direction
public "applyModelRotation"(arg0: $Vector3f$$Type, arg1: $Transformation$$Type): void
public "bakeQuad"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $BlockElementFace$$Type, arg3: $TextureAtlasSprite$$Type, arg4: $Direction$$Type, arg5: $ModelState$$Type, arg6: $BlockElementRotation$$Type, arg7: boolean): $BakedQuad
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceBakery$$Type = ($FaceBakery);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaceBakery$$Original = $FaceBakery;}
declare module "net.minecraft.client.renderer.entity.LivingEntityRenderer" {
import {$RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List} from "java.util.List"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$LivingEntityRendererAccessor$$Interface as $LivingEntityRendererAccessor$0$$Interface} from "net.sweenus.simplyswords.mixin.client.LivingEntityRendererAccessor"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderLayerParent$$Interface} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LivingEntityRendererAccessor$$Interface} from "io.wispforest.accessories.mixin.client.LivingEntityRendererAccessor"

export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $EntityRenderer<(T)> implements $RenderLayerParent$$Interface<(T), (M)>, $LivingEntityRendererAccessor$$Interface, $LivingEntityRendererAccessor$0$$Interface {
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: M, arg2: float)

public "addLayer"(arg0: $RenderLayer$$Type<(T), (M)>): boolean
public static "getOverlayCoords"(arg0: $LivingEntity$$Type, arg1: float): integer
public "getLayers"(): $List
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "handler$cjf000$undergarden$shakeWhileChilly"(arg0: $LivingEntity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "wrapMethod$zhe000$irons_lib$irons_spellbooks$handleTransmog"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: $Operation$$Type): void
public "getModel"(): M
public "invokeAddFeature"(arg0: $RenderLayer$$Type): boolean
public static "isEntityUpsideDown"(arg0: $LivingEntity$$Type): boolean
public "getTextureLocation"(arg0: T): $ResourceLocation
get "layers"(): $List
get "model"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRenderer$$Type<T, M> = ($LivingEntityRenderer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRenderer$$Original<T, M> = $LivingEntityRenderer<(T), (M)>;}
declare module "net.minecraft.client.renderer.RenderType$CompositeRenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderType$CompositeState} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"

export class $RenderType$CompositeRenderType extends $RenderType {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
 "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "OUTLINE": $BiFunction<($ResourceLocation), ($RenderStateShard$CullStateShard), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

public "toString"(): StringJS
public "state"(): $RenderType$CompositeState
public "isOutline"(): boolean
public "outline"(): $Optional<($RenderType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeRenderType$$Type = ($RenderType$CompositeRenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeRenderType$$Original = $RenderType$CompositeRenderType;}
declare module "net.minecraft.client.renderer.MultiBufferSource$BufferSource" {
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$AccessorMultiBufferSource$$Interface} from "vazkii.patchouli.mixin.client.AccessorMultiBufferSource"
import {$BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource$$Interface, $AccessorMultiBufferSource$$Interface {
readonly "fixedBuffers": $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "sharedBuffer": $ByteBufferBuilder

constructor(arg0: $ByteBufferBuilder$$Type, arg1: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>)

public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "getFallbackBuffer"(): $ByteBufferBuilder
public "getFixedBuffers"(): $SequencedMap
public "endBatch"(arg0: $RenderType$$Type): void
public "endBatch"(arg0: $RenderType$$Type, arg1: $BufferBuilder$$Type): void
public "endBatch"(): void
public "endLastBatch"(): void
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "fallbackBuffer"(): $ByteBufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$BufferSource$$Type = ($MultiBufferSource$BufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$BufferSource$$Original = $MultiBufferSource$BufferSource;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $DebugRenderer$SimpleDebugRenderer$$Interface {

(arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double): void
}

export class $DebugRenderer$SimpleDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
 "clear"(): void
 "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Type = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Original = $DebugRenderer$SimpleDebugRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$ItemOverride$Predicate, $ItemOverride$Predicate$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride$Predicate"
import {$Stream} from "java.util.stream.Stream"

export class $ItemOverride {
constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($ItemOverride$Predicate$$Type)>)

public "getPredicates"(): $Stream<($ItemOverride$Predicate)>
public "getModel"(): $ResourceLocation
get "predicates"(): $Stream<($ItemOverride$Predicate)>
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$$Type = ($ItemOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$$Original = $ItemOverride;}
declare module "net.minecraft.client.renderer.chunk.RenderRegionCache" {
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$RenderChunkRegion} from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $RenderRegionCache {
constructor()

public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type): $RenderChunkRegion
public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type, arg2: boolean): $RenderChunkRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegionCache$$Type = ($RenderRegionCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderRegionCache$$Original = $RenderRegionCache;}
declare module "net.minecraft.client.renderer.item.ItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

/**
 * 
 * @deprecated
 */
export interface $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ItemPropertyFunction implements $ItemPropertyFunction$$Interface {
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPropertyFunction$$Original = $ItemPropertyFunction;}
declare module "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type)

public "handler$zdk000$geckolib$renderGeckolibItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer, arg6: $CallbackInfo$$Type): void
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityWithoutLevelRenderer$$Type = ($BlockEntityWithoutLevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityWithoutLevelRenderer$$Original = $BlockEntityWithoutLevelRenderer;}
declare module "net.minecraft.client.renderer.debug.RaidDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Collection$$Type} from "java.util.Collection"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "setRaidCenters"(arg0: $Collection$$Type<($BlockPos$$Type)>): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
set "raidCenters"(value: $Collection$$Type<($BlockPos$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaidDebugRenderer$$Type = ($RaidDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaidDebugRenderer$$Original = $RaidDebugRenderer;}
declare module "net.minecraft.client.renderer.PanoramaRenderer" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"

export class $PanoramaRenderer {
static readonly "PANORAMA_OVERLAY": $ResourceLocation

constructor(arg0: $CubeMap$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
public "handler$ceb000$cumulus_menus$render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanoramaRenderer$$Type = ($PanoramaRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PanoramaRenderer$$Original = $PanoramaRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlas" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map} from "java.util.Map"
import {$SpriteFinderImpl$SpriteFinderAccess$$Interface} from "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$List} from "java.util.List"
import {$SpriteContents} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$SpriteLoader$Preparations$$Type} from "net.minecraft.client.renderer.texture.SpriteLoader$Preparations"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteFinderImpl} from "appeng.thirdparty.fabric.SpriteFinderImpl"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable$$Interface, $Tickable$$Interface, $SpriteFinderImpl$SpriteFinderAccess$$Interface {
static readonly "NOT_ASSIGNED": integer
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_BLOCKS": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_PARTICLES": $ResourceLocation
 "texturesByName": $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "sprites": $List<($SpriteContents)>

constructor(arg0: $ResourceLocation$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "location"(): $ResourceLocation
public "tick"(): void
public "maxSupportedTextureSize"(): integer
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getHeight"(): integer
public "upload"(arg0: $SpriteLoader$Preparations$$Type): void
public "cycleAnimationFrames"(): void
public "fabric_spriteFinder"(): $SpriteFinderImpl
public "updateFilter"(arg0: $SpriteLoader$Preparations$$Type): void
public "getTextures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "clearTextureData"(): void
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "getWidth"(): integer
get "height"(): integer
get "textures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlas$$Type = ($TextureAtlas);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlas$$Original = $TextureAtlas;}
