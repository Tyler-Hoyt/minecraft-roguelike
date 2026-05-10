declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ShadeMode} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$MaterialView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.material.MaterialView"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $RenderMaterial$$Interface extends $MaterialView$$Interface {
}

export class $RenderMaterial implements $RenderMaterial$$Interface {
static readonly "MATERIAL_STANDARD": $ResourceLocation

/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "blendMode"(): $BlendMode
 "glint"(): $TriState
 "shadeMode"(): $ShadeMode
 "emissive"(): boolean
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMaterial$$Type = ($RenderMaterial);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderMaterial$$Original = $RenderMaterial;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import {$QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Mesh$$Interface {

(arg0: $Consumer<($QuadView)>): void
}

export class $Mesh implements $Mesh$$Interface {
 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$$Type = ((arg0: $Consumer<($QuadView)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mesh$$Original = $Mesh;}
declare module "net.fabricmc.fabric.api.util.BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanFunction$$Interface<R> {

(arg0: boolean): R
}

export class $BooleanFunction<R> implements $BooleanFunction$$Interface {
 "apply"(arg0: boolean): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanFunction$$Type<R> = ((arg0: boolean) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanFunction$$Original<R> = $BooleanFunction<(R)>;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

export interface $RenderContext$QuadTransform$$Interface {

(arg0: $MutableQuadView): boolean
}

export class $RenderContext$QuadTransform implements $RenderContext$QuadTransform$$Interface {
 "transform"(arg0: $MutableQuadView$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$QuadTransform$$Type = ((arg0: $MutableQuadView) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$QuadTransform$$Original = $RenderContext$QuadTransform;}
declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity$$Interface {
get "renderData"(): any
}

export class $RenderDataBlockEntity implements $RenderDataBlockEntity$$Interface {
 "getRenderData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataBlockEntity$$Type = ($RenderDataBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderDataBlockEntity$$Original = $RenderDataBlockEntity;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.MaterialView" {
import {$ShadeMode} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $MaterialView$$Interface {
}

export class $MaterialView implements $MaterialView$$Interface {
 "blendMode"(): $BlendMode
 "glint"(): $TriState
 "shadeMode"(): $ShadeMode
 "emissive"(): boolean
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "ambientOcclusion"(): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialView$$Type = ($MaterialView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialView$$Original = $MaterialView;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.BlendMode" {
import {$Enum} from "java.lang.Enum"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $BlendMode extends $Enum<($BlendMode)> {
static readonly "CUTOUT": $BlendMode
static readonly "TRANSLUCENT": $BlendMode
static readonly "CUTOUT_MIPPED": $BlendMode
static readonly "SOLID": $BlendMode
static readonly "DEFAULT": $BlendMode
readonly "blockRenderLayer": $RenderType

public static "values"(): ($BlendMode)[]
public static "valueOf"(arg0: StringJS): $BlendMode
public static "fromRenderLayer"(arg0: $RenderType$$Type): $BlendMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$$Type = (("default") | ("solid") | ("cutout_mipped") | ("cutout") | ("translucent"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlendMode$$Original = $BlendMode;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vector2fc$$Type} from "org.joml.Vector2fc"
import {$Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView$$Type, $QuadView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView$$Interface extends $QuadView$$Interface {
}

export class $MutableQuadView implements $MutableQuadView$$Interface {
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_ROTATE_NONE": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer

 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "nominalFace"(): $Direction
 "cullFace"(): $Direction
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "material"(): $RenderMaterial
 "normalZ"(arg0: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "faceNormal"(): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$$Type = ($MutableQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableQuadView$$Original = $MutableQuadView;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export interface $RenderContext$BakedModelConsumer$$Interface extends $Consumer$$Interface<($BakedModel)> {
}

export class $RenderContext$BakedModelConsumer implements $RenderContext$BakedModelConsumer$$Interface {
 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$BakedModelConsumer$$Type = ($RenderContext$BakedModelConsumer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$BakedModelConsumer$$Original = $RenderContext$BakedModelConsumer;}
declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Holder} from "net.minecraft.core.Holder"

export interface $FabricBlockView$$Interface {
}

export class $FabricBlockView implements $FabricBlockView$$Interface {
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockView$$Type = ($FabricBlockView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBlockView$$Original = $FabricBlockView;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction} from "net.minecraft.core.Direction"
import {$RenderMaterial} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView$$Interface {
}

export class $QuadView implements $QuadView$$Interface {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "nominalFace"(): $Direction
 "cullFace"(): $Direction
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "material"(): $RenderMaterial
 "normalZ"(arg0: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "faceNormal"(): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$$Type = ($QuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadView$$Original = $QuadView;}
declare module "net.fabricmc.fabric.api.util.TriState" {
import {$BooleanFunction$$Type} from "net.fabricmc.fabric.api.util.BooleanFunction"
import {$Enum} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Throwable} from "java.lang.Throwable"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState

public "get"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "map"<T>(arg0: $BooleanFunction$$Type<(T)>): $Optional<(T)>
public static "of"(arg0: boolean): $TriState
public static "of"(arg0: boolean): $TriState
public "orElse"(arg0: boolean): boolean
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): boolean
public "orElseGet"(arg0: $BooleanSupplier$$Type): boolean
public "getBoxed"(): boolean
get "boxed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("false") | ("default") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriState$$Original = $TriState;}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
import {$QuadEmitter} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$Mesh} from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import {$RenderContext$BakedModelConsumer} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import {$ItemDisplayContext} from "net.minecraft.world.item.ItemDisplayContext"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderContext$QuadTransform$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$Consumer} from "java.util.function.Consumer"

export interface $RenderContext$$Interface {
get "emitter"(): $QuadEmitter
get "modelData"(): $ModelData
get "renderType"(): $RenderType
}

export class $RenderContext implements $RenderContext$$Interface {
 "getEmitter"(): $QuadEmitter
 "getModelData"(): $ModelData
 "hasTransform"(): boolean
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "popTransform"(): void
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
 "itemTransformationMode"(): $ItemDisplayContext
 "getRenderType"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$$Original = $RenderContext;}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder} from "net.minecraft.core.Holder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
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
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

/**
 * 
 * @deprecated
 */
export interface $RenderAttachedBlockView$$Interface extends $BlockAndTintGetter$$Interface {
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "height"(): integer
}

export class $RenderAttachedBlockView implements $RenderAttachedBlockView$$Interface {
/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "isOutsideBuildHeight"(arg0: integer): boolean
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "getMinBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getMaxSection"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getHeight"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachedBlockView$$Type = ($RenderAttachedBlockView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderAttachedBlockView$$Original = $RenderAttachedBlockView;}
declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
import {$RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBakedModel$$Interface {
get "vanillaAdapter"(): boolean
}

export class $FabricBakedModel implements $FabricBakedModel$$Interface {
 "isVanillaAdapter"(): boolean
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModel$$Type = ($FabricBakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FabricBakedModel$$Original = $FabricBakedModel;}
declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export interface $SpriteFinder$$Interface {
}

export class $SpriteFinder implements $SpriteFinder$$Interface {
static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$$Type = ($SpriteFinder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinder$$Original = $SpriteFinder;}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vector2fc$$Type} from "org.joml.Vector2fc"
import {$Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$MutableQuadView, $MutableQuadView$$Type, $MutableQuadView$$Interface} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadEmitter$$Interface extends $MutableQuadView$$Interface {
}

export class $QuadEmitter implements $QuadEmitter$$Interface {
static readonly "CULL_FACE_EPSILON": float

 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $QuadEmitter
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $QuadEmitter
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "tag"(arg0: integer): $QuadEmitter
 "copyFrom"(arg0: $QuadView$$Type): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $QuadEmitter
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "uvUnitSquare"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $QuadEmitter
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $QuadEmitter
 "emit"(): $QuadEmitter
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $QuadEmitter
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
 "nominalFace"(): $Direction
 "cullFace"(): $Direction
 "lightFace"(): $Direction
 "colorIndex"(): integer
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "material"(): $RenderMaterial
 "normalZ"(arg0: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "faceNormal"(): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadEmitter$$Type = ($QuadEmitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadEmitter$$Original = $QuadEmitter;}
declare module "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode" {
import {$Enum} from "java.lang.Enum"

export class $ShadeMode extends $Enum<($ShadeMode)> {
static readonly "ENHANCED": $ShadeMode
static readonly "VANILLA": $ShadeMode

public static "values"(): ($ShadeMode)[]
public static "valueOf"(arg0: StringJS): $ShadeMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadeMode$$Type = (("enhanced") | ("vanilla"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShadeMode$$Original = $ShadeMode;}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $RenderAttachmentBlockEntity$$Interface {

(): any
get "renderAttachmentData"(): any
}

export class $RenderAttachmentBlockEntity implements $RenderAttachmentBlockEntity$$Interface {
/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachmentBlockEntity$$Type = (() => any);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderAttachmentBlockEntity$$Original = $RenderAttachmentBlockEntity;}
