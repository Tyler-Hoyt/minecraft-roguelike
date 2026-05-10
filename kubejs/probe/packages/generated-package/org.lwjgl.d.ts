declare module "org.lwjgl.PointerBuffer" {
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$Pointer$$Type} from "org.lwjgl.system.Pointer"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$CustomBuffer, $CustomBuffer$$Type} from "org.lwjgl.system.CustomBuffer"
import {$IntBuffer, $IntBuffer$$Type} from "java.nio.IntBuffer"
import {$LongBuffer, $LongBuffer$$Type} from "java.nio.LongBuffer"
import {$DoubleBuffer, $DoubleBuffer$$Type} from "java.nio.DoubleBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ShortBuffer, $ShortBuffer$$Type} from "java.nio.ShortBuffer"

export class $PointerBuffer extends $CustomBuffer<($PointerBuffer)> implements $Comparable$$Interface<($PointerBuffer)> {
public "get"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public static "get"(arg0: $ByteBuffer$$Type): long
public "get"(): long
public "get"(arg0: integer): long
public static "get"(arg0: $ByteBuffer$$Type, arg1: integer): long
public "get"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: $IntBuffer$$Type): $PointerBuffer
public "put"(arg0: $ShortBuffer$$Type): $PointerBuffer
public "put"(arg0: $FloatBuffer$$Type): $PointerBuffer
public "put"(arg0: $DoubleBuffer$$Type): $PointerBuffer
public "put"(arg0: $LongBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $DoubleBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $FloatBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $LongBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $IntBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ShortBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $ByteBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: long): $PointerBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: long): void
public "put"(arg0: long): $PointerBuffer
public "put"(arg0: (long)[]): $PointerBuffer
public "put"(arg0: (long)[], arg1: integer, arg2: integer): $PointerBuffer
public "put"(arg0: $ByteBuffer$$Type): $PointerBuffer
public "put"(arg0: integer, arg1: $Pointer$$Type): $PointerBuffer
public "put"(arg0: $Pointer$$Type): $PointerBuffer
public static "put"(arg0: $ByteBuffer$$Type, arg1: integer, arg2: long): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $PointerBuffer$$Type): integer
public "compareTo"(arg0: any): integer
public static "create"(arg0: $ByteBuffer$$Type): $PointerBuffer
public static "create"(arg0: long, arg1: integer): $PointerBuffer
public "getByteBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "getByteBuffer"(arg0: integer): $ByteBuffer
public static "allocateDirect"(arg0: integer): $PointerBuffer
public "getPointerBuffer"(arg0: integer, arg1: integer): $PointerBuffer
public "getPointerBuffer"(arg0: integer): $PointerBuffer
public "putAddressOf"(arg0: $CustomBuffer$$Type<(never)>): $PointerBuffer
public "putAddressOf"(arg0: integer, arg1: $CustomBuffer$$Type<(never)>): $PointerBuffer
public "getStringASCII"(arg0: integer): StringJS
public "getStringASCII"(): StringJS
public "getIntBuffer"(arg0: integer): $IntBuffer
public "getIntBuffer"(arg0: integer, arg1: integer): $IntBuffer
public "getFloatBuffer"(arg0: integer): $FloatBuffer
public "getFloatBuffer"(arg0: integer, arg1: integer): $FloatBuffer
public "getShortBuffer"(arg0: integer): $ShortBuffer
public "getShortBuffer"(arg0: integer, arg1: integer): $ShortBuffer
public "getLongBuffer"(arg0: integer, arg1: integer): $LongBuffer
public "getLongBuffer"(arg0: integer): $LongBuffer
public "getStringUTF16"(): StringJS
public "getStringUTF16"(arg0: integer): StringJS
public "getStringUTF8"(arg0: integer): StringJS
public "getStringUTF8"(): StringJS
public "getDoubleBuffer"(arg0: integer, arg1: integer): $DoubleBuffer
public "getDoubleBuffer"(arg0: integer): $DoubleBuffer
public "sizeof"(): integer
get "stringASCII"(): StringJS
get "stringUTF16"(): StringJS
get "stringUTF8"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointerBuffer$$Type = ($PointerBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PointerBuffer$$Original = $PointerBuffer;}
