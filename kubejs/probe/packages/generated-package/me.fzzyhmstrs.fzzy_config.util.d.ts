declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable" {
import {$ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$ErrorEntry$Mutable {
constructor(entry: $ValidationResult$ErrorEntry$$Type)

public "getEntry$fzzy_config"(): $ValidationResult$ErrorEntry
public static "addError$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: $ValidationResult$ErrorEntry$Type$$Type, arg2: StringJS, arg3: $Throwable$$Type, arg4: integer, arg5: any): $ValidationResult$ErrorEntry$Mutable
public "setEntry$fzzy_config"(arg0: $ValidationResult$ErrorEntry$$Type): void
public "addError"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(StringJS)>)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(result: $ValidationResult$$Type<(never)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult$ErrorEntry$Mutable
public "report"<T>(value: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): T
public static "report$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type, arg3: StringJS, arg4: $Throwable$$Type, arg5: integer, arg6: any): any
get "entry$fzzy_config"(): $ValidationResult$ErrorEntry
set "entry$fzzy_config"(value: $ValidationResult$ErrorEntry$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Mutable$$Type = ($ValidationResult$ErrorEntry$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$Mutable$$Original = $ValidationResult$ErrorEntry$Mutable;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder" {
import {$ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$ErrorEntry$Builder<C> {
constructor(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>)

public "message"(msg: StringJS): $ValidationResult$ErrorEntry$Builder<(C)>
public "exception"(e: $Throwable$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
public "build"(): $ValidationResult$ErrorEntry
public "header"(header: StringJS): $ValidationResult$ErrorEntry$Builder<(C)>
public "content"(content: C): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$$Type<(never)>): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Builder$$Type<C> = ($ValidationResult$ErrorEntry$Builder<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$Builder$$Original<C> = $ValidationResult$ErrorEntry$Builder<(C)>;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry" {
import {$Iterable} from "java.lang.Iterable"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry$Companion} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Companion"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "org.slf4j.event.Level"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ValidationResult$ErrorEntry$Mutable} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger$$Type} from "org.slf4j.Logger"

export interface $ValidationResult$ErrorEntry$$Interface {
get "empty"(): boolean
get "error"(): boolean
get "loggable"(): boolean
get "string"(): StringJS
get "critical"(): boolean
get "plainString"(): StringJS
}

export class $ValidationResult$ErrorEntry implements $ValidationResult$ErrorEntry$$Interface {
static readonly "Companion": $ValidationResult$ErrorEntry$Companion

 "log"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "isEmpty"(): boolean
 "isError"(): boolean
 "isLoggable"(): boolean
 "getString"(): StringJS
static "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(never)>)>
 "addError"(arg0: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry
 "addError"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry
 "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(StringJS)>)>): $ValidationResult$ErrorEntry
 "hasType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
 "iterateAll"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(never)>)>
 "logPlain"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "consumeAll"(arg0: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(never)>)>): void
 "isCritical"(): boolean
 "consumeType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
 "predicateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
 "iterateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
 "predicateAll"(arg0: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(never)>)>): boolean
 "mutable"(): $ValidationResult$ErrorEntry$Mutable
 "getPlainString"(): StringJS
static "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(StringJS), ($Throwable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$$Type = ($ValidationResult$ErrorEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$$Original = $ValidationResult$ErrorEntry;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult" {
import {$Iterable} from "java.lang.Iterable"
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$ValidationResult$Companion} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$Companion"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ValidationResult<T> {
static readonly "Companion": $ValidationResult$Companion

constructor(storedVal: any, errorContext: $ValidationResult$ErrorEntry$$Type, $constructor_marker: $DefaultConstructorMarker$$Type)

public "get"(): T
public "toString"(): StringJS
public "log"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public "log"(): $ValidationResult<(T)>
public "test"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
public "test"(p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(never)>)>): void
public "isError"(): boolean
public "iterate"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
public "iterate"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(never)>)>
public "isValid"(): boolean
public "has"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
public "consume"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
public "consume"(c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(never)>)>): void
public "getError"(): StringJS
public static "access$getErrorContext$p"($this: $ValidationResult$$Type): $ValidationResult$ErrorEntry
public static "access$getStoredVal$p"($this: $ValidationResult$$Type): any
public static "log$default"(arg0: $ValidationResult$$Type, arg1: $BiConsumer$$Type, arg2: integer, arg3: any): $ValidationResult
public "logPlain"(): $ValidationResult<(T)>
public "logPlain"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public "writeError"(errors: $List$$Type<(StringJS)>): void
public "isCritical"(): boolean
public "writeWarning"(errors: $List$$Type<(StringJS)>): void
public static "logPlain$default"(arg0: $ValidationResult$$Type, arg1: $BiConsumer$$Type, arg2: integer, arg3: any): $ValidationResult
public "getErrorEntry"(): $ValidationResult$ErrorEntry
get "error"(): boolean
get "valid"(): boolean
get "error"(): StringJS
get "critical"(): boolean
get "errorEntry"(): $ValidationResult$ErrorEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$$Type<T> = ($ValidationResult<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$$Original<T> = $ValidationResult<(T)>;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Companion" {
import {$ValidationResult$ErrorEntry$Builder} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$BiConsumer} from "java.util.function.BiConsumer"
import {$Level$$Type} from "org.slf4j.event.Level"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Entry} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger$$Type} from "org.slf4j.Logger"
import {$Consumer} from "java.util.function.Consumer"

export class $ValidationResult$ErrorEntry$Companion {
public "builder"(): $ValidationResult$ErrorEntry$Builder<(StringJS)>
public "builder"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $ValidationResult$ErrorEntry$Builder<(C)>
public "empty"(header: StringJS): $ValidationResult$ErrorEntry
public "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(never)>)>
public "basic"(error: StringJS): $ValidationResult$ErrorEntry
public "getENTRY_WARN_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public "getLOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(never)>)>
public "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(StringJS), ($Throwable)>
public static "empty$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: StringJS, arg2: integer, arg3: any): $ValidationResult$ErrorEntry
public "getENTRY_INFO_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public static "createEntryLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: integer, arg4: any): $BiConsumer
public "getENTRY_ERROR_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public static "createLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: boolean, arg4: integer, arg5: any): $Consumer
get "ENTRY_WARN_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
get "LOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(never)>)>
get "ENTRY_INFO_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
get "ENTRY_ERROR_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Companion$$Type = ($ValidationResult$ErrorEntry$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$Companion$$Original = $ValidationResult$ErrorEntry$Companion;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type" {
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$ErrorEntry$Type<C> {
constructor(name: StringJS, isString: boolean, isLoggable: boolean, isError: boolean)
constructor(arg0: StringJS, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: $DefaultConstructorMarker$$Type)

public "getName"(): StringJS
public "toString"(): StringJS
public "isError"(): boolean
public "isLoggable"(): boolean
public "isString"(): boolean
public "create$fzzy_config"(content: C, e: $Throwable$$Type, msg: StringJS): $ValidationResult$ErrorEntry
public static "create$fzzy_config$default"(arg0: $ValidationResult$ErrorEntry$Type$$Type, arg1: any, arg2: $Throwable$$Type, arg3: StringJS, arg4: integer, arg5: any): $ValidationResult$ErrorEntry
get "name"(): StringJS
get "error"(): boolean
get "loggable"(): boolean
get "string"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Type$$Type<C> = ($ValidationResult$ErrorEntry$Type<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$Type$$Original<C> = $ValidationResult$ErrorEntry$Type<(C)>;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry" {
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export interface $ValidationResult$ErrorEntry$Entry$$Interface<C> {
get "type"(): $ValidationResult$ErrorEntry$Type<(C)>
get "content"(): C
get "e"(): $Throwable
}

export class $ValidationResult$ErrorEntry$Entry<C> implements $ValidationResult$ErrorEntry$Entry$$Interface {
 "log"(arg0: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "getType"(): $ValidationResult$ErrorEntry$Type<(C)>
 "getContent"(): C
 "getE"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Entry$$Type<C> = ($ValidationResult$ErrorEntry$Entry<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$ErrorEntry$Entry$$Original<C> = $ValidationResult$ErrorEntry$Entry<(C)>;}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$Companion" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$ValidationResult$ErrorEntry$Mutable, $ValidationResult$ErrorEntry$Mutable$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$Companion {
constructor($constructor_marker: $DefaultConstructorMarker$$Type)

public "wrap"<T>($this$wrap: $ValidationResult$$Type<(never)>, newVal: T): $ValidationResult<(T)>
public "map"<N, T>($this$map: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), (N)>): $ValidationResult<(N)>
public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult<(T)>
public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS): $ValidationResult<(T)>
public "error"<T>(storedVal: T, errorEntry: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "error"<T, C>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "error"<T>(storedVal: T, error: StringJS): $ValidationResult<(T)>
public "success"<T>(storedVal: T): $ValidationResult<(T)>
public static "createMutable$default"(arg0: $ValidationResult$Companion$$Type, arg1: StringJS, arg2: integer, arg3: any): $ValidationResult$ErrorEntry$Mutable
public static "also$default"(arg0: $ValidationResult$Companion$$Type, arg1: $ValidationResult$$Type, arg2: boolean, arg3: $ValidationResult$ErrorEntry$Type$$Type, arg4: StringJS, arg5: $Throwable$$Type, arg6: integer, arg7: any): $ValidationResult
public "attachTo"<T>($this$attachTo: $ValidationResult$$Type<(T)>, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "createMutable"(header: StringJS): $ValidationResult$ErrorEntry$Mutable
public static "error$default"(arg0: $ValidationResult$Companion$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type, arg3: StringJS, arg4: $Throwable$$Type, arg5: integer, arg6: any): $ValidationResult
public "reportTo"<T>($this$reportTo: $ValidationResult$$Type<(T)>, errorReporter: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public "inmap"<N, T>($this$inmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), (N)>): $ValidationResult<(N)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>, fallback: T): $ValidationResult<(T)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>): $ValidationResult<(T)>
public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorReporter: $Consumer$$Type<(StringJS)>): $ValidationResult<(T)>
public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorBuilder: $List$$Type<(StringJS)>): $ValidationResult<(T)>
public "ofMutable"<T>(storedVal: T, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "outmap"<N, T>($this$outmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
public "predicated"<T, C>(storedVal: T, valid: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $Supplier$$Type<(StringJS)>): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: StringJS): $ValidationResult<(T)>
public "predicated"<T, C>(storedVal: T, valid: $Predicate$$Type<(T)>, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, error: StringJS): $ValidationResult<(T)>
public "also"<T, C>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult<(T)>
public "bimap"<N, T>($this$bimap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$Companion$$Type = ($ValidationResult$Companion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValidationResult$Companion$$Original = $ValidationResult$Companion;}
