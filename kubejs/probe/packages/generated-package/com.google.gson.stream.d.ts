declare module "com.google.gson.stream.JsonReader" {
import {$Reader$$Type} from "java.io.Reader"
import {$JsonToken} from "com.google.gson.stream.JsonToken"
import {$Closeable$$Interface} from "java.io.Closeable"

export class $JsonReader implements $Closeable$$Interface {
constructor(arg0: $Reader$$Type)

public "toString"(): StringJS
public "hasNext"(): boolean
public "close"(): void
public "getPath"(): StringJS
public "peek"(): $JsonToken
public "nextDouble"(): double
public "nextInt"(): integer
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nextLong"(): long
public "nextBoolean"(): boolean
public "nextNull"(): void
public "skipValue"(): void
public "nextName"(): StringJS
public "nextString"(): StringJS
public "endObject"(): void
public "beginArray"(): void
public "endArray"(): void
public "getPreviousPath"(): StringJS
public "beginObject"(): void
get "path"(): StringJS
set "lenient"(value: boolean)
get "lenient"(): boolean
get "previousPath"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReader$$Type = ($JsonReader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonReader$$Original = $JsonReader;}
declare module "com.google.gson.stream.JsonWriter" {
import {$Writer$$Type} from "java.io.Writer"
import {$Closeable$$Interface} from "java.io.Closeable"
import {$Flushable$$Interface} from "java.io.Flushable"

export class $JsonWriter implements $Closeable$$Interface, $Flushable$$Interface {
constructor(arg0: $Writer$$Type)

public "name"(arg0: StringJS): $JsonWriter
public "value"(arg0: float): $JsonWriter
public "value"(arg0: double): $JsonWriter
public "value"(arg0: long): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: StringJS): $JsonWriter
public "value"(arg0: number): $JsonWriter
public "flush"(): void
public "close"(): void
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nullValue"(): $JsonWriter
public "setIndent"(arg0: StringJS): void
public "jsonValue"(arg0: StringJS): $JsonWriter
public "endObject"(): $JsonWriter
public "beginArray"(): $JsonWriter
public "endArray"(): $JsonWriter
public "isHtmlSafe"(): boolean
public "getSerializeNulls"(): boolean
public "beginObject"(): $JsonWriter
public "setSerializeNulls"(arg0: boolean): void
public "setHtmlSafe"(arg0: boolean): void
set "lenient"(value: boolean)
get "lenient"(): boolean
set "indent"(value: StringJS)
get "htmlSafe"(): boolean
get "serializeNulls"(): boolean
set "serializeNulls"(value: boolean)
set "htmlSafe"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriter$$Type = ($JsonWriter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonWriter$$Original = $JsonWriter;}
