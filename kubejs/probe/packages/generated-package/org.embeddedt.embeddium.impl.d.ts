declare module "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel" {
import {$Enum} from "java.lang.Enum"

export class $SpriteTransparencyLevel extends $Enum<($SpriteTransparencyLevel)> {
static readonly "OPAQUE": $SpriteTransparencyLevel
static readonly "TRANSLUCENT": $SpriteTransparencyLevel
static readonly "TRANSPARENT": $SpriteTransparencyLevel

public static "values"(): ($SpriteTransparencyLevel)[]
public static "valueOf"(arg0: StringJS): $SpriteTransparencyLevel
public "chooseNextLevel"(arg0: $SpriteTransparencyLevel$$Type): $SpriteTransparencyLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTransparencyLevel$$Type = (("opaque") | ("transparent") | ("translucent"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteTransparencyLevel$$Original = $SpriteTransparencyLevel;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsInvoker$$Interface {

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]): void
}

export class $SpriteContentsInvoker implements $SpriteContentsInvoker$$Interface {
 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsInvoker$$Original = $SpriteContentsInvoker;}
declare module "org.embeddedt.embeddium.impl.world.ReadableContainerExtended" {
import {$PalettedContainerRO, $PalettedContainerRO$$Type} from "net.minecraft.world.level.chunk.PalettedContainerRO"

export interface $ReadableContainerExtended$$Interface<T> {
}

export class $ReadableContainerExtended<T> implements $ReadableContainerExtended$$Interface {
static "clone"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
static "of"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $ReadableContainerExtended<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
 "sodium$copy"(): $PalettedContainerRO<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableContainerExtended$$Type<T> = ($ReadableContainerExtended<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReadableContainerExtended$$Original<T> = $ReadableContainerExtended<(T)>;}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener$$Interface {
}

export class $ClientChunkEventListener implements $ClientChunkEventListener$$Interface {
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "updateLoadDistance"(arg0: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$$Type = ($ClientChunkEventListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkEventListener$$Original = $ClientChunkEventListener;}
declare module "org.embeddedt.embeddium.impl.render.viewport.CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "fracX": float
readonly "x": double
readonly "fracY": float
readonly "y": double
readonly "intZ": integer
readonly "z": double
readonly "intY": integer
readonly "fracZ": float

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$$Type = ($CameraTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraTransform$$Original = $CameraTransform;}
declare module "org.embeddedt.embeddium.impl.render.matrix_stack.CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack$$Interface {

(arg0: boolean): void
}

export class $CachingPoseStack implements $CachingPoseStack$$Interface {
 "embeddium$setCachingEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachingPoseStack$$Original = $CachingPoseStack;}
declare module "org.embeddedt.embeddium.impl.model.color.interop.BlockColorsExtended" {
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Reference2ReferenceMap} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import {$ReferenceSet} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsExtended$$Interface {
}

export class $BlockColorsExtended implements $BlockColorsExtended$$Interface {
static "getProviders"(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
static "getOverridenVanillaBlocks"(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtended$$Type = ($BlockColorsExtended);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColorsExtended$$Original = $BlockColorsExtended;}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTrackerHolder" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ChunkTracker, $ChunkTracker$$Type} from "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker"

export interface $ChunkTrackerHolder$$Interface {

(): $ChunkTracker$$Type
}

export class $ChunkTrackerHolder implements $ChunkTrackerHolder$$Interface {
static "get"(arg0: $ClientLevel$$Type): $ChunkTracker
 "sodium$getTracker"(): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$$Type = (() => $ChunkTracker$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTrackerHolder$$Original = $ChunkTrackerHolder;}
declare module "org.embeddedt.embeddium.impl.model.EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement$$Interface {

(): void
}

export class $EpsilonizableBlockElement implements $EpsilonizableBlockElement$$Interface {
 "embeddium$epsilonize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EpsilonizableBlockElement$$Original = $EpsilonizableBlockElement;}
declare module "org.embeddedt.embeddium.impl.model.quad.BakedQuadView" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteTransparencyLevel} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$ModelQuadView$$Interface} from "org.embeddedt.embeddium.impl.model.quad.ModelQuadView"
import {$Direction} from "net.minecraft.core.Direction"
import {$ModelQuadFacing} from "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing"

export interface $BakedQuadView$$Interface extends $ModelQuadView$$Interface {
get "normalFace"(): $ModelQuadFacing
get "transparencyLevel"(): $SpriteTransparencyLevel
set "flags"(value: integer)
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "computedFaceNormal"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "colorIndex"(): integer
}

export class $BakedQuadView implements $BakedQuadView$$Interface {
 "getNormalFace"(): $ModelQuadFacing
 "hasShade"(): boolean
 "getTransparencyLevel"(): $SpriteTransparencyLevel
 "setFlags"(arg0: integer): void
 "getFlags"(): integer
 "getColor"(arg0: integer): integer
 "getY"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getTexV"(arg0: integer): float
 "getTexU"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "hasAmbientOcclusion"(): boolean
 "getComputedFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getModFaceNormal"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getColorIndex"(): integer
 "getLight"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$$Type = ($BakedQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuadView$$Original = $BakedQuadView;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"
import {$List, $List$$Type} from "java.util.List"

export interface $SpriteContentsAnimationAccessor$$Interface {

(): $List$$Type<($SpriteContents$FrameInfo$$Type)>
get "frames"(): $List<($SpriteContents$FrameInfo)>
}

export class $SpriteContentsAnimationAccessor implements $SpriteContentsAnimationAccessor$$Interface {
 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$$Type = (() => $List$$Type<($SpriteContents$FrameInfo$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAnimationAccessor$$Original = $SpriteContentsAnimationAccessor;}
declare module "org.embeddedt.embeddium.impl.world.BiomeSeedProvider" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"

export interface $BiomeSeedProvider$$Interface {

(): long
}

export class $BiomeSeedProvider implements $BiomeSeedProvider$$Interface {
 "sodium$getBiomeSeed"(): long
static "getBiomeSeed"(arg0: $ClientLevel$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeSeedProvider$$Original = $BiomeSeedProvider;}
declare module "org.embeddedt.embeddium.impl.mixin.core.render.MinecraftAccessor" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"

export interface $MinecraftAccessor$$Interface {

(): $Thread$$Type
}

export class $MinecraftAccessor implements $MinecraftAccessor$$Interface {
 "embeddium$getGameThread"(): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = (() => $Thread$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccessor$$Original = $MinecraftAccessor;}
declare module "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Set$$Type} from "java.util.Set"

export class $ModelCuboid {
readonly "u5": float
readonly "mirror": boolean
readonly "z1": float
readonly "y1": float
readonly "z2": float
readonly "x1": float
readonly "y2": float
readonly "x2": float
readonly "v0": float
readonly "u0": float
readonly "v1": float
readonly "u1": float
readonly "v2": float
readonly "u2": float
readonly "u3": float
readonly "u4": float

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$$Type<($Direction$$Type)>)

public "shouldDrawFace"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboid$$Type = ($ModelCuboid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelCuboid$$Original = $ModelCuboid;}
declare module "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevelHolder" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteTransparencyLevel, $SpriteTransparencyLevel$$Type} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"

export interface $SpriteTransparencyLevelHolder$$Interface {

(): $SpriteTransparencyLevel$$Type
}

export class $SpriteTransparencyLevelHolder implements $SpriteTransparencyLevelHolder$$Interface {
 "embeddium$getTransparencyLevel"(): $SpriteTransparencyLevel
static "getTransparencyLevel"(arg0: $TextureAtlasSprite$$Type): $SpriteTransparencyLevel
static "getTransparencyLevel"(arg0: $SpriteContents$$Type): $SpriteTransparencyLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTransparencyLevelHolder$$Type = (() => $SpriteTransparencyLevel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteTransparencyLevelHolder$$Original = $SpriteTransparencyLevelHolder;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor$$Interface {

(): integer
get "time"(): integer
}

export class $SpriteContentsAnimationFrameAccessor implements $SpriteContentsAnimationFrameAccessor$$Interface {
 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAnimationFrameAccessor$$Original = $SpriteContentsAnimationFrameAccessor;}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker" {
import {$ClientChunkEventListener$$Interface} from "org.embeddedt.embeddium.impl.render.chunk.map.ClientChunkEventListener"
import {$ChunkTracker$ChunkEventHandler$$Type} from "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker$ChunkEventHandler"
import {$LongCollection, $LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener$$Interface {
constructor()

public "getReadyChunks"(): $LongCollection
public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public static "forEachChunk"(arg0: $LongCollection$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "updateLoadDistance"(arg0: integer): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$$Type = ($ChunkTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTracker$$Original = $ChunkTracker;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"
import {$List} from "java.util.List"

export interface $SpriteContentsAnimationAccessor$$Interface {
get "frames"(): $List<($SpriteContents$FrameInfo)>
get "frameRowSize"(): integer
}

export class $SpriteContentsAnimationAccessor implements $SpriteContentsAnimationAccessor$$Interface {
 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$$Type = ($SpriteContentsAnimationAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAnimationAccessor$$Original = $SpriteContentsAnimationAccessor;}
declare module "org.embeddedt.embeddium.impl.render.viewport.frustum.Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum$$Interface {

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export class $Frustum implements $Frustum$$Interface {
 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ((arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frustum$$Original = $Frustum;}
declare module "org.embeddedt.embeddium.impl.render.immediate.model.ModelPartData" {
import {$ModelCuboid} from "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartData$$Interface {
get "hidden"(): boolean
get "children"(): ($ModelPart)[]
get "cuboids"(): ($ModelCuboid)[]
get "visible"(): boolean
}

export class $ModelPartData implements $ModelPartData$$Interface {
 "isHidden"(): boolean
static "from"(arg0: $ModelPart$$Type): $ModelPartData
/**
 * 
 * @deprecated
 */
 "getChildren"(): ($ModelPart)[]
/**
 * 
 * @deprecated
 */
 "getCuboids"(): ($ModelCuboid)[]
 "isVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartData$$Type = ($ModelPartData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelPartData$$Original = $ModelPartData;}
declare module "org.embeddedt.embeddium.impl.world.WorldRendererExtended" {
import {$EmbeddiumWorldRenderer, $EmbeddiumWorldRenderer$$Type} from "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer"

export interface $WorldRendererExtended$$Interface {

(): $EmbeddiumWorldRenderer$$Type
}

export class $WorldRendererExtended implements $WorldRendererExtended$$Interface {
 "sodium$getWorldRenderer"(): $EmbeddiumWorldRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererExtended$$Type = (() => $EmbeddiumWorldRenderer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldRendererExtended$$Original = $WorldRendererExtended;}
declare module "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing" {
import {$Enum} from "java.lang.Enum"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "NEG_Z": $ModelQuadFacing
static readonly "POS_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "ALL": integer
static readonly "POS_Y": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer

public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: StringJS): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$$Type): $ModelQuadFacing
get "opposite"(): $ModelQuadFacing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$$Type = (("pos_x") | ("pos_y") | ("pos_z") | ("neg_x") | ("neg_y") | ("neg_z") | ("unassigned"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelQuadFacing$$Original = $ModelQuadFacing;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor$$Interface {

(): ($NativeImage$$Type)[]
get "images"(): ($NativeImage)[]
}

export class $SpriteContentsAccessor implements $SpriteContentsAccessor$$Interface {
 "getImages"(): ($NativeImage)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => ($NativeImage$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAccessor$$Original = $SpriteContentsAccessor;}
declare module "org.embeddedt.embeddium.impl.gui.options.TextProvider" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $TextProvider$$Interface {

(): $Component$$Type
get "localizedName"(): $Component
}

export class $TextProvider implements $TextProvider$$Interface {
 "getLocalizedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextProvider$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextProvider$$Original = $TextProvider;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor$$Interface {
get "index"(): integer
get "time"(): integer
}

export class $SpriteContentsAnimationFrameAccessor implements $SpriteContentsAnimationFrameAccessor$$Interface {
 "getIndex"(): integer
 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAnimationFrameAccessor$$Original = $SpriteContentsAnimationFrameAccessor;}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor$$Interface {

(): long
get "pointer"(): long
}

export class $NativeImageAccessor implements $NativeImageAccessor$$Interface {
 "getPointer"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NativeImageAccessor$$Original = $NativeImageAccessor;}
declare module "org.embeddedt.embeddium.impl.render.viewport.ViewportProvider" {
import {$Viewport, $Viewport$$Type} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"

export interface $ViewportProvider$$Interface {

(): $Viewport$$Type
}

export class $ViewportProvider implements $ViewportProvider$$Interface {
 "sodium$createViewport"(): $Viewport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$$Type = (() => $Viewport$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewportProvider$$Original = $ViewportProvider;}
declare module "org.embeddedt.embeddium.impl.model.color.interop.ItemColorsExtended" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsExtended$$Interface {

(arg0: $ItemStack): $ItemColor$$Type
}

export class $ItemColorsExtended implements $ItemColorsExtended$$Interface {
 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtended$$Type = ((arg0: $ItemStack) => $ItemColor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemColorsExtended$$Original = $ItemColorsExtended;}
declare module "org.embeddedt.embeddium.impl.render.texture.SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended$$Interface {
}

export class $SpriteContentsExtended implements $SpriteContentsExtended$$Interface {
 "sodium$isActive"(): boolean
 "sodium$setActive"(arg0: boolean): void
 "sodium$hasAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtended$$Type = ($SpriteContentsExtended);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsExtended$$Original = $SpriteContentsExtended;}
declare module "org.embeddedt.embeddium.impl.model.ModelCuboidAccessor" {
import {$ModelCuboid} from "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid"

export interface $ModelCuboidAccessor$$Interface {
}

export class $ModelCuboidAccessor implements $ModelCuboidAccessor$$Interface {
 "embeddium$getSimpleCuboid"(): $ModelCuboid
 "sodium$copy"(): $ModelCuboid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboidAccessor$$Type = ($ModelCuboidAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelCuboidAccessor$$Original = $ModelCuboidAccessor;}
declare module "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer" {
import {$Iterator} from "java.util.Iterator"
import {$Viewport$$Type} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"
import {$BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$Collection} from "java.util.Collection"
import {$SortedSet$$Type} from "java.util.SortedSet"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $EmbeddiumWorldRenderer {
constructor(arg0: $Minecraft$$Type)

public static "instance"(): $EmbeddiumWorldRenderer
public "reload"(): void
public "getDebugStrings"(): $Collection<(StringJS)>
public "forEachVisibleBlockEntity"(arg0: $Consumer$$Type<($BlockEntity)>): void
public "getVisibleChunkCount"(): integer
public "isTerrainRenderComplete"(): boolean
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "blockEntityIterator"(): $Iterator<($BlockEntity)>
public "drawChunkLayer"(arg0: $RenderType$$Type, arg1: $Matrix4f$$Type, arg2: double, arg3: double, arg4: double): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setupTerrain"(arg0: $Camera$$Type, arg1: $Viewport$$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "setWorld"(arg0: $ClientLevel$$Type): void
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "scheduleTerrainUpdate"(): void
public "getChunksDebugString"(): StringJS
public "renderBlockEntities"(arg0: $Matrix4f$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: $Camera$$Type, arg4: float): void
public static "instanceNullable"(): $EmbeddiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$$Type): boolean
public "didBlockEntityRequestOutline"(): boolean
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
get "debugStrings"(): $Collection<(StringJS)>
get "visibleChunkCount"(): integer
get "terrainRenderComplete"(): boolean
set "world"(value: $ClientLevel$$Type)
get "chunksDebugString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumWorldRenderer$$Type = ($EmbeddiumWorldRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmbeddiumWorldRenderer$$Original = $EmbeddiumWorldRenderer;}
declare module "org.embeddedt.embeddium.impl.render.viewport.Viewport" {
import {$SectionPos} from "net.minecraft.core.SectionPos"
import {$Frustum$$Type} from "org.embeddedt.embeddium.impl.render.viewport.frustum.Frustum"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CameraTransform} from "org.embeddedt.embeddium.impl.render.viewport.CameraTransform"
import {$Vector3d$$Type} from "org.joml.Vector3d"

export class $Viewport {
constructor(arg0: $Frustum$$Type, arg1: $Vector3d$$Type)

public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float): boolean
public "isBoxVisible"(arg0: $AABB$$Type): boolean
public "getTransform"(): $CameraTransform
public "getChunkCoord"(): $SectionPos
public "getBlockCoord"(): $BlockPos
get "transform"(): $CameraTransform
get "chunkCoord"(): $SectionPos
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$$Type = ($Viewport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Viewport$$Original = $Viewport;}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler$$Interface {

(arg0: integer, arg1: integer): void
}

export class $ChunkTracker$ChunkEventHandler implements $ChunkTracker$ChunkEventHandler$$Interface {
 "apply"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTracker$ChunkEventHandler$$Original = $ChunkTracker$ChunkEventHandler;}
declare module "org.embeddedt.embeddium.impl.model.quad.ModelQuadView" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction} from "net.minecraft.core.Direction"

export interface $ModelQuadView$$Interface {
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "computedFaceNormal"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "colorIndex"(): integer
}

export class $ModelQuadView implements $ModelQuadView$$Interface {
 "getFlags"(): integer
 "getColor"(arg0: integer): integer
 "getY"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getTexV"(arg0: integer): float
 "getTexU"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "hasAmbientOcclusion"(): boolean
 "getComputedFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getModFaceNormal"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getColorIndex"(): integer
 "getLight"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$$Type = ($ModelQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelQuadView$$Original = $ModelQuadView;}
