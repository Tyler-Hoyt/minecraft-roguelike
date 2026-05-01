declare module "appeng.thirdparty.fabric.QuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction} from "net.minecraft.core.Direction"
import {$MutableQuadView$$Type} from "appeng.thirdparty.fabric.MutableQuadView"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView$$Interface {
}

export class $QuadView implements $QuadView$$Interface {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "normalZ"(arg0: integer): float
 "cullFace"(): $Direction
 "colorIndex"(): integer
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
 "lightFace"(): $Direction
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "faceNormal"(): $Vector3f
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasAmbientOcclusion"(): boolean
 "nominalFace"(): $Direction
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "hasShade"(): boolean
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "toBlockBakedQuad"(): $BakedQuad
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
declare module "appeng.thirdparty.fabric.SpriteFinder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "appeng.thirdparty.fabric.QuadView"

export interface $SpriteFinder$$Interface {
}

export class $SpriteFinder implements $SpriteFinder$$Interface {
static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
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
declare module "appeng.thirdparty.fabric.MutableQuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$QuadView$$Interface} from "appeng.thirdparty.fabric.QuadView"
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

static "getInstance"(): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "ambientOcclusion"(arg0: boolean): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "shade"(arg0: boolean): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "normalZ"(arg0: integer): float
 "cullFace"(): $Direction
 "colorIndex"(): integer
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "posByIndex"(arg0: integer, arg1: integer): float
 "lightFace"(): $Direction
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "faceNormal"(): $Vector3f
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasAmbientOcclusion"(): boolean
 "nominalFace"(): $Direction
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "hasShade"(): boolean
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "toBlockBakedQuad"(): $BakedQuad
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
declare module "appeng.thirdparty.fabric.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "appeng.thirdparty.fabric.QuadView"
import {$SpriteFinder$$Interface} from "appeng.thirdparty.fabric.SpriteFinder"

export class $SpriteFinderImpl implements $SpriteFinder$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$$Original = $SpriteFinderImpl;}
declare module "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "appeng.thirdparty.fabric.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess$$Interface {

(): $SpriteFinderImpl$$Type
}

export class $SpriteFinderImpl$SpriteFinderAccess implements $SpriteFinderImpl$SpriteFinderAccess$$Interface {
 "fabric_spriteFinder"(): $SpriteFinderImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = (() => $SpriteFinderImpl$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Original = $SpriteFinderImpl$SpriteFinderAccess;}
