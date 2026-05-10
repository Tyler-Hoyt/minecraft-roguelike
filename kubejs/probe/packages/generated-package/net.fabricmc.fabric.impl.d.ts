declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

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
declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

export interface $RenderDataMapConsumer$$Interface {

(arg0: $Long2ObjectMap<(any)>): void
}

export class $RenderDataMapConsumer implements $RenderDataMapConsumer$$Interface {
 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataMapConsumer$$Type = ((arg0: $Long2ObjectMap<(any)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderDataMapConsumer$$Original = $RenderDataMapConsumer;}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteFinder$$Interface} from "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export class $SpriteFinderImpl implements $SpriteFinder$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
public "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
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
