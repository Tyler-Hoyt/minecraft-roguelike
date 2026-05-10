declare module "com.electronwill.nightconfig.core.io.ConfigParser" {
import {$FileNotFoundAction$$Type} from "com.electronwill.nightconfig.core.file.FileNotFoundAction"
import {$ParsingMode$$Type} from "com.electronwill.nightconfig.core.io.ParsingMode"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$File$$Type} from "java.io.File"
import {$Reader$$Type} from "java.io.Reader"
import {$URL$$Type} from "java.net.URL"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$InputStream$$Type} from "java.io.InputStream"
import {$Path$$Type} from "java.nio.file.Path"
import {$ConfigFormat} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $ConfigParser$$Interface<C extends $Config> {
get "format"(): $ConfigFormat<(C)>
}

export class $ConfigParser<C extends $Config> implements $ConfigParser$$Interface {
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $URL$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $URL$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: StringJS, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: StringJS): C
 "parse"(arg0: $Reader$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $Reader$$Type): C
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $Charset$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Charset$$Type): C
 "parse"(arg0: $InputStream$$Type): C
 "getFormat"(): $ConfigFormat<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigParser$$Type<C> = ($ConfigParser<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigParser$$Original<C> = $ConfigParser<(C)>;}
declare module "com.electronwill.nightconfig.core.CommentedConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$OptionalLong} from "java.util.OptionalLong"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type, $UnmodifiableCommentedConfig$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$Config, $Config$$Type, $Config$$Interface} from "com.electronwill.nightconfig.core.Config"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class$$Type} from "java.lang.Class"
import {$CommentedConfig$Entry} from "com.electronwill.nightconfig.core.CommentedConfig$Entry"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $CommentedConfig$$Interface extends $UnmodifiableCommentedConfig$$Interface, $Config$$Interface {
get "comments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
public static get "insertionOrderPreserved"(): boolean
public static set "insertionOrderPreserved"(value: boolean)
get "empty"(): boolean
}

export class $CommentedConfig implements $CommentedConfig$$Interface {
static "wrap"(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(never)>): $CommentedConfig
static "of"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "of"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
 "entrySet"(): $Set<($CommentedConfig$Entry)>
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(never)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
 "checked"(): $Config
 "setComment"(arg0: StringJS, arg1: StringJS): StringJS
 "setComment"(arg0: $List$$Type<(StringJS)>, arg1: StringJS): StringJS
 "clearComments"(): void
 "removeComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "removeComment"(arg0: StringJS): StringJS
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $CommentedConfig
static "fake"(arg0: $Config$$Type): $CommentedConfig
static "inMemory"(): $CommentedConfig
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "createSubConfig"(): $Config
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$$Type): void
 "putAllComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "containsComment"(arg0: StringJS): boolean
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: StringJS, arg1: any): void
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
static "inMemoryUniversal"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptionalLong"(arg0: StringJS): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "configFormat"(): $ConfigFormat<(never)>
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$$Type = ($CommentedConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommentedConfig$$Original = $CommentedConfig;}
declare module "com.electronwill.nightconfig.core.Config" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$OptionalLong} from "java.util.OptionalLong"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$Config$Entry} from "com.electronwill.nightconfig.core.Config$Entry"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type, $UnmodifiableConfig$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $Config$$Interface extends $UnmodifiableConfig$$Interface {
public static get "insertionOrderPreserved"(): boolean
public static set "insertionOrderPreserved"(value: boolean)
get "empty"(): boolean
}

export class $Config implements $Config$$Interface {
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: StringJS, arg1: any): void
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "clear"(): void
static "wrap"(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(never)>): $Config
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
static "of"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
static "of"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<(never)>): $Config
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "entrySet"(): $Set<($Config$Entry)>
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(never)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type): $Config
 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
static "inMemoryUniversal"(): $Config
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(never)>): $Config
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $Config
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
static "inMemory"(): $Config
 "createSubConfig"(): $Config
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptionalLong"(arg0: StringJS): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "configFormat"(): $ConfigFormat<(never)>
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$$Type = ($Config);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Config$$Original = $Config;}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode" {
import {$Map, $Map$$Type} from "java.util.Map"

export class $UnmodifiableCommentedConfig$CommentNode {
constructor(arg0: StringJS, arg1: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>)

public "getComment"(): StringJS
public "getChildren"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
get "comment"(): StringJS
get "children"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$CommentNode$$Type = ($UnmodifiableCommentedConfig$CommentNode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableCommentedConfig$CommentNode$$Original = $UnmodifiableCommentedConfig$CommentNode;}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry" {
import {$Optional} from "java.util.Optional"
import {$OptionalInt} from "java.util.OptionalInt"
import {$OptionalLong} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableCommentedConfig$Entry$$Interface extends $UnmodifiableConfig$Entry$$Interface {
get "comment"(): StringJS
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "null"(): boolean
get "optional"(): $Optional<(T)>
get "optionalLong"(): $OptionalLong
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export class $UnmodifiableCommentedConfig$Entry implements $UnmodifiableCommentedConfig$Entry$$Interface {
 "getComment"(): StringJS
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "isNull"(): boolean
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOptionalInt"(): $OptionalInt
 "getByteOrElse"(arg0: byte): byte
 "getRawValue"<T>(): T
 "getOrElse"<T>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$Entry$$Type = ($UnmodifiableCommentedConfig$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableCommentedConfig$Entry$$Original = $UnmodifiableCommentedConfig$Entry;}
declare module "com.electronwill.nightconfig.core.EnumGetMethod" {
import {$Enum} from "java.lang.Enum"
import {$Class$$Type} from "java.lang.Class"

export class $EnumGetMethod extends $Enum<($EnumGetMethod)> {
static readonly "NAME_IGNORECASE": $EnumGetMethod
static readonly "ORDINAL_OR_NAME": $EnumGetMethod
static readonly "ORDINAL_OR_NAME_IGNORECASE": $EnumGetMethod
static readonly "NAME": $EnumGetMethod

public "get"<T extends $Enum<(object)>>(arg0: any, arg1: $Class$$Type<(T)>): T
public static "values"(): ($EnumGetMethod)[]
public static "valueOf"(arg0: StringJS): $EnumGetMethod
public "validate"<T extends $Enum<(object)>>(arg0: any, arg1: $Class$$Type<(T)>): boolean
public "isCaseSensitive"(): boolean
public "isOrdinalOk"(): boolean
get "caseSensitive"(): boolean
get "ordinalOk"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumGetMethod$$Type = (("name") | ("name_ignorecase") | ("ordinal_or_name") | ("ordinal_or_name_ignorecase"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumGetMethod$$Original = $EnumGetMethod;}
declare module "com.electronwill.nightconfig.core.ConfigFormat" {
import {$Writer$$Type} from "java.io.Writer"
import {$Map$$Type} from "java.util.Map"
import {$File$$Type} from "java.io.File"
import {$ConfigWriter} from "com.electronwill.nightconfig.core.io.ConfigWriter"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$WriterSupplier$$Type} from "com.electronwill.nightconfig.core.utils.WriterSupplier"
import {$Class$$Type} from "java.lang.Class"
import {$Config} from "com.electronwill.nightconfig.core.Config"
import {$ConfigParser} from "com.electronwill.nightconfig.core.io.ConfigParser"
import {$Path$$Type} from "java.nio.file.Path"

export interface $ConfigFormat$$Interface<C extends $Config> {
get "inMemory"(): boolean
}

export class $ConfigFormat<C extends $Config> implements $ConfigFormat$$Interface {
 "supportsComments"(): boolean
 "supportsType"(arg0: $Class$$Type<(never)>): boolean
 "createWriter"(): $ConfigWriter
 "createParser"(): $ConfigParser<(C)>
 "initEmptyFile"(arg0: $File$$Type): void
 "initEmptyFile"(arg0: $Path$$Type): void
 "initEmptyFile"(arg0: $WriterSupplier$$Type): void
 "initEmptyFile"(arg0: $Writer$$Type): void
 "createConcurrentConfig"(): C
 "isInMemory"(): boolean
 "createConfig"(): C
 "createConfig"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFormat$$Type<C> = ($ConfigFormat<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigFormat$$Original<C> = $ConfigFormat<(C)>;}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$UnmodifiableCommentedConfig$Entry} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$List$$Type} from "java.util.List"
import {$OptionalLong} from "java.util.OptionalLong"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$UnmodifiableConfig$$Type, $UnmodifiableConfig$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class$$Type} from "java.lang.Class"
import {$ConfigFormat} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $UnmodifiableCommentedConfig$$Interface extends $UnmodifiableConfig$$Interface {
get "comments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
get "empty"(): boolean
}

export class $UnmodifiableCommentedConfig implements $UnmodifiableCommentedConfig$$Interface {
 "entrySet"(): $Set<($UnmodifiableCommentedConfig$Entry)>
 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "containsComment"(arg0: StringJS): boolean
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptionalLong"(arg0: StringJS): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "configFormat"(): $ConfigFormat<(never)>
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$$Type = ($UnmodifiableCommentedConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableCommentedConfig$$Original = $UnmodifiableCommentedConfig;}
declare module "com.electronwill.nightconfig.core.utils.WriterSupplier" {
import {$Writer, $Writer$$Type} from "java.io.Writer"

export interface $WriterSupplier$$Interface {

(): $Writer$$Type
}

export class $WriterSupplier implements $WriterSupplier$$Interface {
 "get"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriterSupplier$$Type = (() => $Writer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WriterSupplier$$Original = $WriterSupplier;}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry" {
import {$Optional} from "java.util.Optional"
import {$OptionalInt} from "java.util.OptionalInt"
import {$OptionalLong} from "java.util.OptionalLong"

export interface $UnmodifiableConfig$Entry$$Interface {
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "null"(): boolean
get "optional"(): $Optional<(T)>
get "optionalLong"(): $OptionalLong
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export class $UnmodifiableConfig$Entry implements $UnmodifiableConfig$Entry$$Interface {
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "isNull"(): boolean
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOptionalInt"(): $OptionalInt
 "getByteOrElse"(arg0: byte): byte
 "getRawValue"<T>(): T
 "getOrElse"<T>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$Entry$$Type = ($UnmodifiableConfig$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableConfig$Entry$$Original = $UnmodifiableConfig$Entry;}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig" {
import {$Map} from "java.util.Map"
import {$EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$OptionalLong} from "java.util.OptionalLong"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ConfigFormat} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$UnmodifiableConfig$Entry} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableConfig$$Interface {
get "empty"(): boolean
}

export class $UnmodifiableConfig implements $UnmodifiableConfig$$Interface {
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "entrySet"(): $Set<($UnmodifiableConfig$Entry)>
 "isNull"(arg0: StringJS): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptionalLong"(arg0: StringJS): $OptionalLong
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "configFormat"(): $ConfigFormat<(never)>
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(object)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$$Type = ($UnmodifiableConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnmodifiableConfig$$Original = $UnmodifiableConfig;}
declare module "com.electronwill.nightconfig.core.CommentedConfig$Entry" {
import {$Config$Entry$$Interface} from "com.electronwill.nightconfig.core.Config$Entry"
import {$Optional} from "java.util.Optional"
import {$OptionalInt} from "java.util.OptionalInt"
import {$UnmodifiableCommentedConfig$Entry$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$OptionalLong} from "java.util.OptionalLong"

export interface $CommentedConfig$Entry$$Interface extends $Config$Entry$$Interface, $UnmodifiableCommentedConfig$Entry$$Interface {
set "comment"(value: StringJS)
set "value"(value: any)
get "comment"(): StringJS
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "null"(): boolean
get "optional"(): $Optional<(T)>
get "optionalLong"(): $OptionalLong
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export class $CommentedConfig$Entry implements $CommentedConfig$Entry$$Interface {
 "setComment"(arg0: StringJS): StringJS
 "removeComment"(): StringJS
 "setValue"<T>(arg0: any): T
 "getComment"(): StringJS
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "isNull"(): boolean
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOptionalInt"(): $OptionalInt
 "getByteOrElse"(arg0: byte): byte
 "getRawValue"<T>(): T
 "getOrElse"<T>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$Entry$$Type = ($CommentedConfig$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommentedConfig$Entry$$Original = $CommentedConfig$Entry;}
declare module "com.electronwill.nightconfig.core.Config$Entry" {
import {$Optional} from "java.util.Optional"
import {$OptionalInt} from "java.util.OptionalInt"
import {$OptionalLong} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry$$Interface} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $Config$Entry$$Interface extends $UnmodifiableConfig$Entry$$Interface {
set "value"(value: any)
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "null"(): boolean
get "optional"(): $Optional<(T)>
get "optionalLong"(): $OptionalLong
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
}

export class $Config$Entry implements $Config$Entry$$Interface {
 "setValue"<T>(arg0: any): T
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "isNull"(): boolean
 "getOptional"<T>(): $Optional<(T)>
 "getOptionalLong"(): $OptionalLong
 "getIntOrElse"(arg0: integer): integer
 "getShortOrElse"(arg0: short): short
 "getLongOrElse"(arg0: long): long
 "getCharOrElse"(arg0: character): character
 "getOptionalInt"(): $OptionalInt
 "getByteOrElse"(arg0: byte): byte
 "getRawValue"<T>(): T
 "getOrElse"<T>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Entry$$Type = ($Config$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Config$Entry$$Original = $Config$Entry;}
declare module "com.electronwill.nightconfig.core.io.ConfigWriter" {
import {$WritingMode$$Type} from "com.electronwill.nightconfig.core.io.WritingMode"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Charset$$Type} from "java.nio.charset.Charset"
import {$File$$Type} from "java.io.File"
import {$URL$$Type} from "java.net.URL"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$OutputStream$$Type} from "java.io.OutputStream"
import {$Path$$Type} from "java.nio.file.Path"

export interface $ConfigWriter$$Interface {

(arg0: $UnmodifiableConfig, arg1: $Writer): void
}

export class $ConfigWriter implements $ConfigWriter$$Interface {
 "writeToString"(arg0: $UnmodifiableConfig$$Type): StringJS
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $URL$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Writer$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type, arg2: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWriter$$Type = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigWriter$$Original = $ConfigWriter;}
