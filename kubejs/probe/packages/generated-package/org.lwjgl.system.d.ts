declare module "org.lwjgl.system.Pointer$Default" {
import {$Pointer$$Interface} from "org.lwjgl.system.Pointer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pointer$Default implements $Pointer$$Interface {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "address"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointer$Default$$Type = ($Pointer$Default);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pointer$Default$$Original = $Pointer$Default;}
declare module "org.lwjgl.system.Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Struct$StructValidation$$Interface {

(arg0: long): void
}

export class $Struct$StructValidation implements $Struct$StructValidation$$Interface {
 "validate"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$StructValidation$$Type = ((arg0: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Struct$StructValidation$$Original = $Struct$StructValidation;}
declare module "org.lwjgl.system.Struct" {
import {$Pointer$Default} from "org.lwjgl.system.Pointer$Default"
import {$Struct$StructValidation$$Type} from "org.lwjgl.system.Struct$StructValidation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Struct<SELF extends $Struct<(object)>> extends $Pointer$Default {
public "clear"(): void
public static "validate"(arg0: long, arg1: integer, arg2: integer, arg3: $Struct$StructValidation$$Type): void
public "isNull"(arg0: integer): boolean
public "free"(): void
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Struct$$Type<SELF> = ($Struct<(SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Struct$$Original<SELF> = $Struct<(SELF)>;}
declare module "org.lwjgl.system.StructBuffer" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$Struct, $Struct$$Type} from "org.lwjgl.system.Struct"
import {$CustomBuffer} from "org.lwjgl.system.CustomBuffer"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $StructBuffer<T extends $Struct<(object)>, SELF extends $StructBuffer<(object), (object)>> extends $CustomBuffer<(SELF)> implements $Iterable$$Interface<(T)> {
public "get"(arg0: integer, arg1: T): SELF
public "get"(arg0: T): SELF
public "get"(arg0: integer): T
public "get"(): T
public "put"(arg0: integer, arg1: T): SELF
public "put"(arg0: T): SELF
public "iterator"(): $Iterator<(T)>
public "apply"(arg0: integer, arg1: $Consumer$$Type<(T)>): SELF
public "apply"(arg0: $Consumer$$Type<(T)>): SELF
public "stream"(): $Stream<(T)>
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "parallelStream"(): $Stream<(T)>
public "sizeof"(): integer
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructBuffer$$Type<T, SELF> = ($StructBuffer<(T), (SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructBuffer$$Original<T, SELF> = $StructBuffer<(T), (SELF)>;}
declare module "org.lwjgl.system.CustomBuffer" {
import {$Pointer$Default} from "org.lwjgl.system.Pointer$Default"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CustomBuffer<SELF extends $CustomBuffer<(object)>> extends $Pointer$Default {
public "reset"(): SELF
public "put"(arg0: SELF): SELF
public "toString"(): StringJS
public "clear"(): SELF
public "position"(): integer
public "position"(arg0: integer): SELF
public "limit"(): integer
public "limit"(arg0: integer): SELF
public "remaining"(): integer
public "capacity"(): integer
public "address"(): long
public "address"(arg0: integer): long
public "mark"(): SELF
public "flip"(): SELF
public "rewind"(): SELF
public "hasRemaining"(): boolean
public "slice"(): SELF
public "slice"(arg0: integer, arg1: integer): SELF
public "duplicate"(): SELF
public "free"(): void
public "compact"(): SELF
public "address0"(): long
public "sizeof"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBuffer$$Type<SELF> = ($CustomBuffer<(SELF)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomBuffer$$Original<SELF> = $CustomBuffer<(SELF)>;}
