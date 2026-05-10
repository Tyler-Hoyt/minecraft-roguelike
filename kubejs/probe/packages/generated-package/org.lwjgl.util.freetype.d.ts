declare module "org.lwjgl.util.freetype.FT_Size" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Generic, $FT_Generic$$Type} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Size_Metrics, $FT_Size_Metrics$$Type} from "org.lwjgl.util.freetype.FT_Size_Metrics"
import {$FT_Size_Internal, $FT_Size_Internal$$Type} from "org.lwjgl.util.freetype.FT_Size_Internal"
import {$FT_Size$Buffer} from "org.lwjgl.util.freetype.FT_Size$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face, $FT_Face$$Type} from "org.lwjgl.util.freetype.FT_Face"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FT_Size extends $Struct<($FT_Size)> implements $NativeResource$$Interface {
static readonly "GENERIC": integer
static readonly "ALIGNOF": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "INTERNAL": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public static "validate"(arg0: long): void
public "set"(arg0: $FT_Face$$Type, arg1: $FT_Generic$$Type, arg2: $FT_Size_Metrics$$Type): $FT_Size
public "set"(arg0: $FT_Size$$Type): $FT_Size
public static "create"(arg0: integer): $FT_Size$Buffer
public static "create"(): $FT_Size
public static "create"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "create"(arg0: long): $FT_Size
public "generic"(arg0: $FT_Generic$$Type): $FT_Size
public "generic"(arg0: $Consumer$$Type<($FT_Generic)>): $FT_Size
public "generic"(): $FT_Generic
public "metrics"(): $FT_Size_Metrics
public "metrics"(arg0: $FT_Size_Metrics$$Type): $FT_Size
public "face"(): $FT_Face
public "face"(arg0: $FT_Face$$Type): $FT_Size
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Size
public static "calloc"(): $FT_Size
public static "calloc"(arg0: integer): $FT_Size$Buffer
public static "createSafe"(arg0: long): $FT_Size
public static "createSafe"(arg0: long, arg1: integer): $FT_Size$Buffer
public static "malloc"(): $FT_Size
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Size
public static "malloc"(arg0: integer): $FT_Size$Buffer
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Size$Buffer
public "sizeof"(): integer
public static "ngeneric"(arg0: long): $FT_Generic
public static "ngeneric"(arg0: long, arg1: $FT_Generic$$Type): void
public static "nface"(arg0: long): $FT_Face
public static "nface"(arg0: long, arg1: $FT_Face$$Type): void
public static "nmetrics"(arg0: long): $FT_Size_Metrics
public static "nmetrics"(arg0: long, arg1: $FT_Size_Metrics$$Type): void
public static "ninternal"(arg0: long): $FT_Size_Internal
public static "ninternal"(arg0: long, arg1: $FT_Size_Internal$$Type): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Size$$Type = ($FT_Size);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Size$$Original = $FT_Size;}
declare module "org.lwjgl.util.freetype.FT_GlyphSlot" {
import {$FT_Glyph_Metrics} from "org.lwjgl.util.freetype.FT_Glyph_Metrics"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Vector} from "org.lwjgl.util.freetype.FT_Vector"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$FT_Outline} from "org.lwjgl.util.freetype.FT_Outline"
import {$FT_GlyphSlot$Buffer} from "org.lwjgl.util.freetype.FT_GlyphSlot$Buffer"
import {$FT_Bitmap} from "org.lwjgl.util.freetype.FT_Bitmap"

export class $FT_GlyphSlot extends $Struct<($FT_GlyphSlot)> {
static readonly "BITMAP": integer
static readonly "FORMAT": integer
static readonly "METRICS": integer
static readonly "SIZEOF": integer
static readonly "LIBRARY": integer
static readonly "SUBGLYPHS": integer
static readonly "NUM_SUBGLYPHS": integer
static readonly "OTHER": integer
static readonly "BITMAP_TOP": integer
static readonly "CONTROL_DATA": integer
static readonly "GENERIC": integer
static readonly "GLYPH_INDEX": integer
static readonly "LINEARHORIADVANCE": integer
static readonly "LINEARVERTADVANCE": integer
static readonly "ALIGNOF": integer
static readonly "NEXT": integer
static readonly "INTERNAL": integer
static readonly "OUTLINE": integer
static readonly "CONTROL_LEN": integer
static readonly "RSB_DELTA": integer
static readonly "BITMAP_LEFT": integer
static readonly "ADVANCE": integer
static readonly "LSB_DELTA": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "next"(): $FT_GlyphSlot
public "format"(): integer
public static "create"(arg0: long): $FT_GlyphSlot
public static "create"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public "generic"(): $FT_Generic
public "advance"(): $FT_Vector
public "metrics"(): $FT_Glyph_Metrics
public "face"(): $FT_Face
public static "createSafe"(arg0: long, arg1: integer): $FT_GlyphSlot$Buffer
public static "createSafe"(arg0: long): $FT_GlyphSlot
public "glyph_index"(): integer
public "bitmap"(): $FT_Bitmap
public "bitmap_top"(): integer
public static "nsubglyphs"(arg0: long): long
public static "nadvance"(arg0: long): $FT_Vector
public static "noutline"(arg0: long): $FT_Outline
public static "nlsb_delta"(arg0: long): long
public "rsb_delta"(): long
public static "nlibrary"(arg0: long): long
public static "nrsb_delta"(arg0: long): long
public static "nbitmap"(arg0: long): $FT_Bitmap
public static "nother"(arg0: long): long
public "lsb_delta"(): long
public static "nformat"(arg0: long): integer
public "library"(): long
public "sizeof"(): integer
public "outline"(): $FT_Outline
public "bitmap_left"(): integer
public "linearVertAdvance"(): long
public static "nlinearHoriAdvance"(arg0: long): long
public static "nglyph_index"(arg0: long): integer
public static "nbitmap_left"(arg0: long): integer
public static "nbitmap_top"(arg0: long): integer
public static "ncontrol_len"(arg0: long): long
public static "nnum_subglyphs"(arg0: long): integer
public static "ncontrol_data"(arg0: long): $ByteBuffer
public "linearHoriAdvance"(): long
public static "nlinearVertAdvance"(arg0: long): long
public static "nnext"(arg0: long): $FT_GlyphSlot
public static "ngeneric"(arg0: long): $FT_Generic
public static "nface"(arg0: long): $FT_Face
public static "nmetrics"(arg0: long): $FT_Glyph_Metrics
public static "ninternal"(arg0: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_GlyphSlot$$Type = ($FT_GlyphSlot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_GlyphSlot$$Original = $FT_GlyphSlot;}
declare module "org.lwjgl.util.freetype.FT_Face" {
import {$FT_BBox} from "org.lwjgl.util.freetype.FT_BBox"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"
import {$FT_GlyphSlot} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$FT_List} from "org.lwjgl.util.freetype.FT_List"
import {$FT_Memory} from "org.lwjgl.util.freetype.FT_Memory"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Size} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Face$Buffer} from "org.lwjgl.util.freetype.FT_Face$Buffer"
import {$FT_Bitmap_Size$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_CharMap} from "org.lwjgl.util.freetype.FT_CharMap"
import {$FT_Stream} from "org.lwjgl.util.freetype.FT_Stream"

export class $FT_Face extends $Struct<($FT_Face)> {
static readonly "UNDERLINE_THICKNESS": integer
static readonly "GLYPH": integer
static readonly "SIZES_LIST": integer
static readonly "NUM_GLYPHS": integer
static readonly "EXTENSIONS": integer
static readonly "AUTOHINT": integer
static readonly "DRIVER": integer
static readonly "SIZEOF": integer
static readonly "FACE_FLAGS": integer
static readonly "NUM_FACES": integer
static readonly "NUM_FIXED_SIZES": integer
static readonly "MEMORY": integer
static readonly "FAMILY_NAME": integer
static readonly "AVAILABLE_SIZES": integer
static readonly "UNDERLINE_POSITION": integer
static readonly "INTERNAL": integer
static readonly "MAX_ADVANCE_HEIGHT": integer
static readonly "ASCENDER": integer
static readonly "UNITS_PER_EM": integer
static readonly "MAX_ADVANCE_WIDTH": integer
static readonly "FACE_INDEX": integer
static readonly "SIZE": integer
static readonly "STREAM": integer
static readonly "NUM_CHARMAPS": integer
static readonly "CHARMAPS": integer
static readonly "HEIGHT": integer
static readonly "STYLE_FLAGS": integer
static readonly "GENERIC": integer
static readonly "BBOX": integer
static readonly "ALIGNOF": integer
static readonly "STYLE_NAME": integer
static readonly "DESCENDER": integer
static readonly "CHARMAP": integer

constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public static "create"(arg0: long, arg1: integer): $FT_Face$Buffer
public static "create"(arg0: long): $FT_Face
public "generic"(): $FT_Generic
public "ascender"(): short
public "descender"(): short
public static "nascender"(arg0: long): short
public static "ndescender"(arg0: long): short
public "height"(): short
public static "createSafe"(arg0: long): $FT_Face
public static "createSafe"(arg0: long, arg1: integer): $FT_Face$Buffer
public "underline_thickness"(): short
public static "nmax_advance_height"(arg0: long): short
public static "nunderline_position"(arg0: long): short
public static "nunderline_thickness"(arg0: long): short
public static "nsize"(arg0: long): $FT_Size
public static "nface_flags"(arg0: long): long
public static "nfamily_name"(arg0: long): $ByteBuffer
public static "nstyle_name"(arg0: long): $ByteBuffer
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public static "navailable_sizes"(arg0: long): $FT_Bitmap_Size$Buffer
public "max_advance_width"(): short
public static "nstyle_nameString"(arg0: long): StringJS
public "units_per_EM"(): short
public static "nmax_advance_width"(arg0: long): short
public "num_charmaps"(): integer
public static "nsizes_list"(arg0: long): $FT_List
public static "nextensions"(arg0: long): long
public "style_flags"(): long
public static "nnum_charmaps"(arg0: long): integer
public static "nnum_glyphs"(arg0: long): long
public static "nstyle_flags"(arg0: long): long
public static "nfamily_nameString"(arg0: long): StringJS
public "max_advance_height"(): short
public static "nnum_fixed_sizes"(arg0: long): integer
public static "nunits_per_EM"(arg0: long): short
public "family_name"(): $ByteBuffer
public "num_fixed_sizes"(): integer
public "family_nameString"(): StringJS
public "style_nameString"(): StringJS
public "underline_position"(): short
public static "nface_index"(arg0: long): long
public static "nheight"(arg0: long): short
public "glyph"(): $FT_GlyphSlot
public "sizeof"(): integer
public static "ngeneric"(arg0: long): $FT_Generic
public static "ninternal"(arg0: long): long
public "charmap"(): $FT_CharMap
public "face_flags"(): long
public static "nnum_faces"(arg0: long): long
public "num_glyphs"(): long
public static "ncharmap"(arg0: long): $FT_CharMap
public "num_faces"(): long
public "bbox"(): $FT_BBox
public "charmaps"(): $PointerBuffer
public "style_name"(): $ByteBuffer
public static "ncharmaps"(arg0: long): $PointerBuffer
public static "nglyph"(arg0: long): $FT_GlyphSlot
public static "nbbox"(arg0: long): $FT_BBox
public "face_index"(): long
public static "nmemory"(arg0: long): $FT_Memory
public static "ndriver"(arg0: long): long
public static "nstream$"(arg0: long): $FT_Stream
public static "nautohint"(arg0: long): $FT_Generic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$$Type = ($FT_Face);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Face$$Original = $FT_Face;}
declare module "org.lwjgl.util.freetype.FT_BBox" {
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_BBox$Buffer} from "org.lwjgl.util.freetype.FT_BBox$Buffer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_BBox extends $Struct<($FT_BBox)> implements $NativeResource$$Interface {
static readonly "YMIN": integer
static readonly "YMAX": integer
static readonly "XMIN": integer
static readonly "XMAX": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: $FT_BBox$$Type): $FT_BBox
public "set"(arg0: long, arg1: long, arg2: long, arg3: long): $FT_BBox
public static "create"(arg0: long, arg1: integer): $FT_BBox$Buffer
public static "create"(arg0: long): $FT_BBox
public static "create"(): $FT_BBox
public static "create"(arg0: integer): $FT_BBox$Buffer
public static "calloc"(): $FT_BBox
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "calloc"(arg0: integer): $FT_BBox$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "createSafe"(arg0: long): $FT_BBox
public static "createSafe"(arg0: long, arg1: integer): $FT_BBox$Buffer
public static "malloc"(arg0: integer): $FT_BBox$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_BBox
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_BBox$Buffer
public static "malloc"(): $FT_BBox
public "xMin"(arg0: long): $FT_BBox
public "xMin"(): long
public "yMax"(): long
public "yMax"(arg0: long): $FT_BBox
public "yMin"(): long
public "yMin"(arg0: long): $FT_BBox
public "xMax"(): long
public "xMax"(arg0: long): $FT_BBox
public "sizeof"(): integer
public static "nyMin"(arg0: long): long
public static "nyMin"(arg0: long, arg1: long): void
public static "nxMin"(arg0: long): long
public static "nxMin"(arg0: long, arg1: long): void
public static "nxMax"(arg0: long): long
public static "nxMax"(arg0: long, arg1: long): void
public static "nyMax"(arg0: long, arg1: long): void
public static "nyMax"(arg0: long): long
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_BBox$$Type = ($FT_BBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_BBox$$Original = $FT_BBox;}
declare module "org.lwjgl.util.freetype.FT_List" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_List$Buffer} from "org.lwjgl.util.freetype.FT_List$Buffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_ListNode} from "org.lwjgl.util.freetype.FT_ListNode"

export class $FT_List extends $Struct<($FT_List)> {
static readonly "HEAD": integer
static readonly "ALIGNOF": integer
static readonly "TAIL": integer
static readonly "SIZEOF": integer

constructor(arg0: $ByteBuffer$$Type)

public "tail"(): $FT_ListNode
public static "create"(arg0: long): $FT_List
public static "create"(arg0: long, arg1: integer): $FT_List$Buffer
public "head"(): $FT_ListNode
public static "createSafe"(arg0: long, arg1: integer): $FT_List$Buffer
public static "createSafe"(arg0: long): $FT_List
public "sizeof"(): integer
public static "nhead"(arg0: long): $FT_ListNode
public static "ntail"(arg0: long): $FT_ListNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_List$$Type = ($FT_List);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_List$$Original = $FT_List;}
declare module "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Bitmap_Size} from "org.lwjgl.util.freetype.FT_Bitmap_Size"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Bitmap_Size$Buffer extends $StructBuffer<($FT_Bitmap_Size), ($FT_Bitmap_Size$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): long
public "width"(): short
public "x_ppem"(): long
public "y_ppem"(): long
public "height"(): short
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Bitmap_Size$Buffer$$Type = ($FT_Bitmap_Size$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Bitmap_Size$Buffer$$Original = $FT_Bitmap_Size$Buffer;}
declare module "org.lwjgl.util.freetype.FT_Face$Buffer" {
import {$StructBuffer} from "org.lwjgl.system.StructBuffer"
import {$FT_Size} from "org.lwjgl.util.freetype.FT_Size"
import {$FT_BBox} from "org.lwjgl.util.freetype.FT_BBox"
import {$FT_Generic} from "org.lwjgl.util.freetype.FT_Generic"
import {$FT_Bitmap_Size$Buffer} from "org.lwjgl.util.freetype.FT_Bitmap_Size$Buffer"
import {$PointerBuffer} from "org.lwjgl.PointerBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_GlyphSlot} from "org.lwjgl.util.freetype.FT_GlyphSlot"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"
import {$FT_CharMap} from "org.lwjgl.util.freetype.FT_CharMap"

export class $FT_Face$Buffer extends $StructBuffer<($FT_Face), ($FT_Face$Buffer)> {
constructor(arg0: long, arg1: integer)
constructor(arg0: $ByteBuffer$$Type)

public "size"(): $FT_Size
public "generic"(): $FT_Generic
public "ascender"(): short
public "descender"(): short
public "height"(): short
public "underline_thickness"(): short
public "available_sizes"(): $FT_Bitmap_Size$Buffer
public "max_advance_width"(): short
public "units_per_EM"(): short
public "num_charmaps"(): integer
public "style_flags"(): long
public "max_advance_height"(): short
public "family_name"(): $ByteBuffer
public "num_fixed_sizes"(): integer
public "family_nameString"(): StringJS
public "style_nameString"(): StringJS
public "underline_position"(): short
public "glyph"(): $FT_GlyphSlot
public "charmap"(): $FT_CharMap
public "face_flags"(): long
public "num_glyphs"(): long
public "num_faces"(): long
public "bbox"(): $FT_BBox
public "charmaps"(): $PointerBuffer
public "style_name"(): $ByteBuffer
public "face_index"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Face$Buffer$$Type = ($FT_Face$Buffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Face$Buffer$$Original = $FT_Face$Buffer;}
declare module "org.lwjgl.util.freetype.FT_CharMap" {
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_CharMap$Buffer} from "org.lwjgl.util.freetype.FT_CharMap$Buffer"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Face} from "org.lwjgl.util.freetype.FT_Face"

export class $FT_CharMap extends $Struct<($FT_CharMap)> {
static readonly "PLATFORM_ID": integer
static readonly "ENCODING": integer
static readonly "ALIGNOF": integer
static readonly "ENCODING_ID": integer
static readonly "SIZEOF": integer
static readonly "FACE": integer

constructor(arg0: $ByteBuffer$$Type)

public "encoding"(): integer
public static "create"(arg0: long): $FT_CharMap
public static "create"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public "face"(): $FT_Face
public static "createSafe"(arg0: long): $FT_CharMap
public static "createSafe"(arg0: long, arg1: integer): $FT_CharMap$Buffer
public static "nencoding"(arg0: long): integer
public "sizeof"(): integer
public static "nplatform_id"(arg0: long): short
public "platform_id"(): short
public "encoding_id"(): short
public static "nencoding_id"(arg0: long): short
public static "nface"(arg0: long): $FT_Face
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_CharMap$$Type = ($FT_CharMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_CharMap$$Original = $FT_CharMap;}
declare module "org.lwjgl.util.freetype.FT_Generic" {
import {$FT_Generic$Buffer} from "org.lwjgl.util.freetype.FT_Generic$Buffer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Generic_FinalizerI$$Type} from "org.lwjgl.util.freetype.FT_Generic_FinalizerI"
import {$FT_Generic_Finalizer} from "org.lwjgl.util.freetype.FT_Generic_Finalizer"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $FT_Generic extends $Struct<($FT_Generic)> implements $NativeResource$$Interface {
static readonly "DATA": integer
static readonly "ALIGNOF": integer
static readonly "SIZEOF": integer
static readonly "FINALIZER": integer

constructor(arg0: $ByteBuffer$$Type)

public "data"(arg0: long): $FT_Generic
public "data"(): long
public static "validate"(arg0: long): void
public "set"(arg0: $FT_Generic$$Type): $FT_Generic
public "set"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): $FT_Generic
public "finalizer"(): $FT_Generic_Finalizer
public "finalizer"(arg0: $FT_Generic_FinalizerI$$Type): $FT_Generic
public static "create"(arg0: long): $FT_Generic
public static "create"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "create"(arg0: integer): $FT_Generic$Buffer
public static "create"(): $FT_Generic
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Generic
public static "calloc"(arg0: integer): $FT_Generic$Buffer
public static "calloc"(): $FT_Generic
public static "createSafe"(arg0: long, arg1: integer): $FT_Generic$Buffer
public static "createSafe"(arg0: long): $FT_Generic
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Generic$Buffer
public static "malloc"(arg0: integer): $FT_Generic$Buffer
public static "malloc"(): $FT_Generic
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Generic
public "sizeof"(): integer
public static "ndata"(arg0: long): long
public static "ndata"(arg0: long, arg1: long): void
public static "nfinalizer"(arg0: long): $FT_Generic_Finalizer
public static "nfinalizer"(arg0: long, arg1: $FT_Generic_FinalizerI$$Type): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Generic$$Type = ($FT_Generic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Generic$$Original = $FT_Generic;}
declare module "org.lwjgl.util.freetype.FT_Stream" {
import {$FT_StreamDesc, $FT_StreamDesc$$Type} from "org.lwjgl.util.freetype.FT_StreamDesc"
import {$FT_Stream_IoFunc} from "org.lwjgl.util.freetype.FT_Stream_IoFunc"
import {$FT_Stream_CloseFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_CloseFuncI"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Memory, $FT_Memory$$Type} from "org.lwjgl.util.freetype.FT_Memory"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Stream$Buffer} from "org.lwjgl.util.freetype.FT_Stream$Buffer"
import {$FT_Stream_CloseFunc} from "org.lwjgl.util.freetype.FT_Stream_CloseFunc"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Stream_IoFuncI$$Type} from "org.lwjgl.util.freetype.FT_Stream_IoFuncI"

export class $FT_Stream extends $Struct<($FT_Stream)> implements $NativeResource$$Interface {
static readonly "READ": integer
static readonly "DESCRIPTOR": integer
static readonly "MEMORY": integer
static readonly "POS": integer
static readonly "PATHNAME": integer
static readonly "ALIGNOF": integer
static readonly "SIZE": integer
static readonly "SIZEOF": integer
static readonly "LIMIT": integer
static readonly "CLOSE": integer
static readonly "BASE": integer
static readonly "CURSOR": integer

constructor(arg0: $ByteBuffer$$Type)

public "base"(): $ByteBuffer
public "base"(arg0: $ByteBuffer$$Type): $FT_Stream
public "size"(arg0: long): $FT_Stream
public "size"(): long
public "set"(arg0: $FT_Stream$$Type): $FT_Stream
public "set"(arg0: $ByteBuffer$$Type, arg1: long, arg2: long, arg3: $FT_StreamDesc$$Type, arg4: $FT_StreamDesc$$Type, arg5: $FT_Stream_IoFuncI$$Type, arg6: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public "read"(arg0: $FT_Stream_IoFuncI$$Type): $FT_Stream
public "read"(): $FT_Stream_IoFunc
public "descriptor"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public "descriptor"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "descriptor"(): $FT_StreamDesc
public static "create"(): $FT_Stream
public static "create"(arg0: integer): $FT_Stream$Buffer
public static "create"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "create"(arg0: long): $FT_Stream
public "pos"(arg0: long): $FT_Stream
public "pos"(): long
public static "nread"(arg0: long, arg1: $FT_Stream_IoFuncI$$Type): void
public static "nread"(arg0: long): $FT_Stream_IoFunc
public "pathname"(arg0: $Consumer$$Type<($FT_StreamDesc)>): $FT_Stream
public "pathname"(): $FT_StreamDesc
public "pathname"(arg0: $FT_StreamDesc$$Type): $FT_Stream
public static "calloc"(arg0: integer): $FT_Stream$Buffer
public static "calloc"(): $FT_Stream
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "createSafe"(arg0: long): $FT_Stream
public static "createSafe"(arg0: long, arg1: integer): $FT_Stream$Buffer
public static "malloc"(): $FT_Stream
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Stream
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Stream$Buffer
public static "malloc"(arg0: integer): $FT_Stream$Buffer
public static "nsize"(arg0: long): long
public static "nsize"(arg0: long, arg1: long): void
public "close$"(arg0: $FT_Stream_CloseFuncI$$Type): $FT_Stream
public "close$"(): $FT_Stream_CloseFunc
public static "nclose$"(arg0: long): $FT_Stream_CloseFunc
public static "nclose$"(arg0: long, arg1: $FT_Stream_CloseFuncI$$Type): void
public static "ncursor"(arg0: long, arg1: integer): $ByteBuffer
public static "ncursor"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nlimit$"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nlimit$"(arg0: long, arg1: integer): $ByteBuffer
public static "npos"(arg0: long, arg1: long): void
public static "npos"(arg0: long): long
public static "nbase"(arg0: long, arg1: $ByteBuffer$$Type): void
public static "nbase"(arg0: long): $ByteBuffer
public static "npathname"(arg0: long): $FT_StreamDesc
public static "npathname"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public "sizeof"(): integer
public static "ndescriptor"(arg0: long): $FT_StreamDesc
public static "ndescriptor"(arg0: long, arg1: $FT_StreamDesc$$Type): void
public static "nmemory"(arg0: long, arg1: $FT_Memory$$Type): void
public static "nmemory"(arg0: long): $FT_Memory
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Stream$$Type = ($FT_Stream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Stream$$Original = $FT_Stream;}
declare module "org.lwjgl.util.freetype.FT_Memory" {
import {$FT_Memory$Buffer} from "org.lwjgl.util.freetype.FT_Memory$Buffer"
import {$MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$FT_Alloc_Func} from "org.lwjgl.util.freetype.FT_Alloc_Func"
import {$FT_Realloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Realloc_FuncI"
import {$FT_Free_Func} from "org.lwjgl.util.freetype.FT_Free_Func"
import {$Struct} from "org.lwjgl.system.Struct"
import {$FT_Alloc_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Alloc_FuncI"
import {$FT_Realloc_Func} from "org.lwjgl.util.freetype.FT_Realloc_Func"
import {$NativeResource$$Interface} from "org.lwjgl.system.NativeResource"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$FT_Free_FuncI$$Type} from "org.lwjgl.util.freetype.FT_Free_FuncI"

export class $FT_Memory extends $Struct<($FT_Memory)> implements $NativeResource$$Interface {
static readonly "ALLOC": integer
static readonly "ALIGNOF": integer
static readonly "REALLOC": integer
static readonly "SIZEOF": integer
static readonly "USER": integer
static readonly "FREE": integer

constructor(arg0: $ByteBuffer$$Type)

public "set"(arg0: long, arg1: $FT_Alloc_FuncI$$Type, arg2: $FT_Free_FuncI$$Type, arg3: $FT_Realloc_FuncI$$Type): $FT_Memory
public "set"(arg0: $FT_Memory$$Type): $FT_Memory
public static "create"(): $FT_Memory
public static "create"(arg0: long): $FT_Memory
public static "create"(arg0: long, arg1: integer): $FT_Memory$Buffer
public static "create"(arg0: integer): $FT_Memory$Buffer
public "user"(arg0: long): $FT_Memory
public "user"(): long
public static "calloc"(): $FT_Memory
public static "calloc"(arg0: integer): $FT_Memory$Buffer
public static "calloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "calloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public static "createSafe"(arg0: long, arg1: integer): $FT_Memory$Buffer
public static "createSafe"(arg0: long): $FT_Memory
public "alloc"(arg0: $FT_Alloc_FuncI$$Type): $FT_Memory
public "alloc"(): $FT_Alloc_Func
public static "malloc"(arg0: integer, arg1: $MemoryStack$$Type): $FT_Memory$Buffer
public static "malloc"(arg0: $MemoryStack$$Type): $FT_Memory
public static "malloc"(arg0: integer): $FT_Memory$Buffer
public static "malloc"(): $FT_Memory
public "realloc"(): $FT_Realloc_Func
public "realloc"(arg0: $FT_Realloc_FuncI$$Type): $FT_Memory
public "sizeof"(): integer
public static "nfree$"(arg0: long, arg1: $FT_Free_FuncI$$Type): void
public static "nfree$"(arg0: long): $FT_Free_Func
public static "nrealloc"(arg0: long): $FT_Realloc_Func
public static "nrealloc"(arg0: long, arg1: $FT_Realloc_FuncI$$Type): void
public static "nalloc"(arg0: long, arg1: $FT_Alloc_FuncI$$Type): void
public static "nalloc"(arg0: long): $FT_Alloc_Func
public "free$"(): $FT_Free_Func
public "free$"(arg0: $FT_Free_FuncI$$Type): $FT_Memory
public static "nuser"(arg0: long): long
public static "nuser"(arg0: long, arg1: long): void
public "close"(): void
public "free"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FT_Memory$$Type = ($FT_Memory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FT_Memory$$Original = $FT_Memory;}
