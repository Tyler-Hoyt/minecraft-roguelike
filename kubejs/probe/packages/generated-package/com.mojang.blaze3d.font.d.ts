declare module "com.mojang.blaze3d.font.GlyphProvider$Conditional" {
import {$FontOption$Filter, $FontOption$Filter$$Type} from "net.minecraft.client.gui.font.FontOption$Filter"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GlyphProvider, $GlyphProvider$$Type} from "com.mojang.blaze3d.font.GlyphProvider"
import {$Record} from "java.lang.Record"

export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable$$Interface {
constructor(arg0: $GlyphProvider$$Type, arg1: $FontOption$Filter$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $FontOption$Filter
public "provider"(): $GlyphProvider
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$Conditional$$Type = ({"provider"?: $GlyphProvider$$Type, "filter"?: $FontOption$Filter$$Type}) | ([provider?: $GlyphProvider$$Type, filter?: $FontOption$Filter$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphProvider$Conditional$$Original = $GlyphProvider$Conditional;}
declare module "com.mojang.blaze3d.font.GlyphProvider" {
import {$IntSet, $IntSet$$Type} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GlyphInfo} from "com.mojang.blaze3d.font.GlyphInfo"

export interface $GlyphProvider$$Interface extends $AutoCloseable$$Interface {

(): $IntSet$$Type
get "supportedGlyphs"(): $IntSet
}

export class $GlyphProvider implements $GlyphProvider$$Interface {
static readonly "BASELINE": float

 "close"(): void
 "getGlyph"(arg0: integer): $GlyphInfo
 "getSupportedGlyphs"(): $IntSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphProvider$$Type = (() => $IntSet$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphProvider$$Original = $GlyphProvider;}
declare module "com.mojang.blaze3d.font.SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo$$Interface {
get "bottom"(): float
get "left"(): float
get "right"(): float
get "colored"(): boolean
get "pixelWidth"(): integer
get "pixelHeight"(): integer
get "bearingLeft"(): float
get "oversample"(): float
get "bearingTop"(): float
get "top"(): float
}

export class $SheetGlyphInfo implements $SheetGlyphInfo$$Interface {
 "getBottom"(): float
 "getLeft"(): float
 "getRight"(): float
 "isColored"(): boolean
 "getPixelWidth"(): integer
 "getPixelHeight"(): integer
 "getBearingLeft"(): float
 "getOversample"(): float
 "getBearingTop"(): float
 "upload"(arg0: integer, arg1: integer): void
 "getTop"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SheetGlyphInfo$$Type = ($SheetGlyphInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SheetGlyphInfo$$Original = $SheetGlyphInfo;}
declare module "com.mojang.blaze3d.font.GlyphInfo" {
import {$SheetGlyphInfo$$Type} from "com.mojang.blaze3d.font.SheetGlyphInfo"
import {$BakedGlyph, $BakedGlyph$$Type} from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import {$Function$$Type} from "java.util.function.Function"

export interface $GlyphInfo$$Interface {
get "boldOffset"(): float
get "advance"(): float
get "shadowOffset"(): float
}

export class $GlyphInfo implements $GlyphInfo$$Interface {
 "bake"(arg0: $Function$$Type<($SheetGlyphInfo), ($BakedGlyph$$Type)>): $BakedGlyph
 "getBoldOffset"(): float
 "getAdvance"(arg0: boolean): float
 "getAdvance"(): float
 "getShadowOffset"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphInfo$$Type = ($GlyphInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphInfo$$Original = $GlyphInfo;}
