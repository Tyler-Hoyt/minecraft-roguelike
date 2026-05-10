declare module "com.google.gson.JsonPrimitive" {
import {$BigInteger} from "java.math.BigInteger"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$BigDecimal} from "java.math.BigDecimal"

export class $JsonPrimitive extends $JsonElement {
constructor(arg0: character)
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): StringJS
public "isNumber"(): boolean
public "getAsShort"(): short
public "deepCopy"(): $JsonElement
public "isString"(): boolean
public "getAsFloat"(): float
public "isBoolean"(): boolean
public "getAsByte"(): byte
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsNumber"(): number
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): StringJS
get "number"(): boolean
get "asShort"(): short
get "string"(): boolean
get "asFloat"(): float
get "boolean"(): boolean
get "asByte"(): byte
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asCharacter"(): character
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPrimitive$$Type = (number) | (StringJS) | (boolean) | (null);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonPrimitive$$Original = $JsonPrimitive;}
declare module "com.google.gson.TypeAdapter" {
import {$JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$Writer$$Type} from "java.io.Writer"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $TypeAdapter<T> {
constructor()

public "write"(arg0: $JsonWriter$$Type, arg1: T): void
public "read"(arg0: $JsonReader$$Type): T
public "toJson"(arg0: $Writer$$Type, arg1: T): void
public "toJson"(arg0: T): StringJS
public "toJsonTree"(arg0: T): $JsonElement
public "nullSafe"(): $TypeAdapter<(T)>
public "fromJsonTree"(arg0: $JsonElement$$Type): T
public "fromJson"(arg0: $Reader$$Type): T
public "fromJson"(arg0: StringJS): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapter$$Type<T> = ($TypeAdapter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeAdapter$$Original<T> = $TypeAdapter<(T)>;}
declare module "com.google.gson.JsonNull" {
import {$JsonElement} from "com.google.gson.JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/**
 * 
 * @deprecated
 */
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "deepCopy"(): $JsonNull
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNull$$Type = ($JsonNull);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonNull$$Original = $JsonNull;}
declare module "com.google.gson.Gson" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$Appendable$$Type} from "java.lang.Appendable"
import {$Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$GsonBuilder} from "com.google.gson.GsonBuilder"
import {$TypeAdapter} from "com.google.gson.TypeAdapter"
import {$Excluder} from "com.google.gson.internal.Excluder"
import {$Writer$$Type} from "java.io.Writer"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$TypeToken$$Type} from "com.google.gson.reflect.TypeToken"
import {$FieldNamingStrategy} from "com.google.gson.FieldNamingStrategy"

export class $Gson {
constructor()

public "newBuilder"(): $GsonBuilder
public "toString"(): StringJS
public "getAdapter"<T>(arg0: $Class$$Type<(T)>): $TypeAdapter<(T)>
public "getAdapter"<T>(arg0: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "toJson"(arg0: any, arg1: $Type$$Type): StringJS
public "toJson"(arg0: any): StringJS
public "toJson"(arg0: $JsonElement$$Type, arg1: $JsonWriter$$Type): void
public "toJson"(arg0: any, arg1: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type, arg1: $Appendable$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $JsonWriter$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type): StringJS
/**
 * 
 * @deprecated
 */
public "excluder"(): $Excluder
public "htmlSafe"(): boolean
public "toJsonTree"(arg0: any, arg1: $Type$$Type): $JsonElement
public "toJsonTree"(arg0: any): $JsonElement
public "newJsonReader"(arg0: $Reader$$Type): $JsonReader
public "newJsonWriter"(arg0: $Writer$$Type): $JsonWriter
public "fieldNamingStrategy"(): $FieldNamingStrategy
public "serializeNulls"(): boolean
public "getDelegateAdapter"<T>(arg0: $TypeAdapterFactory$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $Type$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gson$$Type = ($Gson);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Gson$$Original = $Gson;}
declare module "com.google.gson.JsonDeserializationContext" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"

export interface $JsonDeserializationContext$$Interface {

(arg0: $JsonElement, arg1: $Type): T
}

export class $JsonDeserializationContext implements $JsonDeserializationContext$$Interface {
 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializationContext$$Type = ((arg0: $JsonElement, arg1: $Type) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonDeserializationContext$$Original = $JsonDeserializationContext;}
declare module "com.google.gson.FieldNamingStrategy" {
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export interface $FieldNamingStrategy$$Interface {

(arg0: $Field): StringJS
}

export class $FieldNamingStrategy implements $FieldNamingStrategy$$Interface {
 "translateName"(arg0: $Field$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingStrategy$$Type = ((arg0: $Field) => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieldNamingStrategy$$Original = $FieldNamingStrategy;}
declare module "com.google.gson.JsonElement" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$BigInteger} from "java.math.BigInteger"
import {$BigDecimal} from "java.math.BigDecimal"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$JsonNull} from "com.google.gson.JsonNull"

export class $JsonElement {
/**
 * 
 * @deprecated
 */
constructor()

public "toString"(): StringJS
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): StringJS
public "isJsonNull"(): boolean
public "getAsShort"(): short
public "deepCopy"(): $JsonElement
public "getAsFloat"(): float
public "getAsByte"(): byte
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
public "getAsJsonPrimitive"(): $JsonPrimitive
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsNumber"(): number
public "getAsJsonNull"(): $JsonNull
public "isJsonArray"(): boolean
public "isJsonObject"(): boolean
public "isJsonPrimitive"(): boolean
public "getAsJsonObject"(): $JsonObject
public "getAsJsonArray"(): $JsonArray
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): StringJS
get "jsonNull"(): boolean
get "asShort"(): short
get "asFloat"(): float
get "asByte"(): byte
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asJsonPrimitive"(): $JsonPrimitive
get "asCharacter"(): character
get "asNumber"(): number
get "asJsonNull"(): $JsonNull
get "jsonArray"(): boolean
get "jsonObject"(): boolean
get "jsonPrimitive"(): boolean
get "asJsonObject"(): $JsonObject
get "asJsonArray"(): $JsonArray
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$$Type = ($JsonObject$$Type) | ($JsonArray$$Type) | ($JsonPrimitive$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonElement$$Original = $JsonElement;}
declare module "com.google.gson.GsonBuilder" {
import {$ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$LongSerializationPolicy$$Type} from "com.google.gson.LongSerializationPolicy"
import {$Type$$Type} from "java.lang.reflect.Type"
import {$ToNumberStrategy$$Type} from "com.google.gson.ToNumberStrategy"
import {$Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$Gson} from "com.google.gson.Gson"
import {$ReflectionAccessFilter$$Type} from "com.google.gson.ReflectionAccessFilter"
import {$FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"
import {$FieldNamingPolicy$$Type} from "com.google.gson.FieldNamingPolicy"

export class $GsonBuilder {
constructor()

public "create"(): $Gson
public "setLenient"(): $GsonBuilder
public "setVersion"(arg0: double): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "addDeserializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "setFieldNamingPolicy"(arg0: $FieldNamingPolicy$$Type): $GsonBuilder
public "setObjectToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "excludeFieldsWithModifiers"(...arg0: (integer)[]): $GsonBuilder
public "setFieldNamingStrategy"(arg0: $FieldNamingStrategy$$Type): $GsonBuilder
public "disableHtmlEscaping"(): $GsonBuilder
public "addReflectionAccessFilter"(arg0: $ReflectionAccessFilter$$Type): $GsonBuilder
public "registerTypeAdapterFactory"(arg0: $TypeAdapterFactory$$Type): $GsonBuilder
public "registerTypeAdapter"(arg0: $Type$$Type, arg1: any): $GsonBuilder
public "setExclusionStrategies"(...arg0: ($ExclusionStrategy$$Type)[]): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
public "setLongSerializationPolicy"(arg0: $LongSerializationPolicy$$Type): $GsonBuilder
public "setNumberToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
public "setDateFormat"(arg0: integer, arg1: integer): $GsonBuilder
public "setDateFormat"(arg0: StringJS): $GsonBuilder
public "setDateFormat"(arg0: integer): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "registerTypeHierarchyAdapter"(arg0: $Class$$Type<(never)>, arg1: any): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "addSerializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
get "lenient"(): $GsonBuilder
set "version"(value: double)
set "fieldNamingPolicy"(value: $FieldNamingPolicy$$Type)
set "objectToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$$Type)
set "exclusionStrategies"(value: ($ExclusionStrategy$$Type)[])
set "longSerializationPolicy"(value: $LongSerializationPolicy$$Type)
set "numberToNumberStrategy"(value: $ToNumberStrategy$$Type)
get "prettyPrinting"(): $GsonBuilder
set "dateFormat"(value: StringJS)
set "dateFormat"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonBuilder$$Type = ($GsonBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GsonBuilder$$Original = $GsonBuilder;}
declare module "com.google.gson.JsonArray" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$BigInteger} from "java.math.BigInteger"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BigDecimal} from "java.math.BigDecimal"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $JsonArray extends $JsonElement implements $Iterable$$Interface<($JsonElement)> {
constructor()
constructor(arg0: integer)

public "remove"(arg0: integer): $JsonElement
public "remove"(arg0: $JsonElement$$Type): boolean
public "size"(): integer
public "get"(arg0: integer): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: character): void
public "add"(arg0: boolean): void
public "add"(arg0: $JsonElement$$Type): void
public "add"(arg0: number): void
public "add"(arg0: StringJS): void
public "iterator"(): $Iterator<($JsonElement)>
public "contains"(arg0: $JsonElement$$Type): boolean
public "addAll"(arg0: $JsonArray$$Type): void
public "set"(arg0: integer, arg1: $JsonElement$$Type): $JsonElement
public "asList"(): $List<($JsonElement)>
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): StringJS
public "getAsShort"(): short
public "deepCopy"(): $JsonElement
public "getAsFloat"(): float
public "getAsByte"(): byte
public "getAsBigInteger"(): $BigInteger
public "getAsBigDecimal"(): $BigDecimal
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsNumber"(): number
public "spliterator"(): $Spliterator<($JsonElement)>
public "forEach"(arg0: $Consumer$$Type<($JsonElement)>): void
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): StringJS
get "asShort"(): short
get "asFloat"(): float
get "asByte"(): byte
get "asBigInteger"(): $BigInteger
get "asBigDecimal"(): $BigDecimal
get "asCharacter"(): character
get "asNumber"(): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArray$$Type = ((any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonArray$$Original = $JsonArray;}
declare module "com.google.gson.TypeAdapterFactory" {
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export interface $TypeAdapterFactory$$Interface {

(arg0: $Gson, arg1: $TypeToken<(T)>): $TypeAdapter$$Type<(T)>
}

export class $TypeAdapterFactory implements $TypeAdapterFactory$$Interface {
 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapterFactory$$Type = ((arg0: $Gson, arg1: $TypeToken<(T)>) => $TypeAdapter$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TypeAdapterFactory$$Original = $TypeAdapterFactory;}
declare module "com.google.gson.JsonObject" {
import {$JsonPrimitive} from "com.google.gson.JsonPrimitive"
import {$Map} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Set} from "java.util.Set"
import {$JsonArray} from "com.google.gson.JsonArray"
import {$Map$Entry} from "java.util.Map$Entry"

export class $JsonObject extends $JsonElement {
constructor()

public "remove"(arg0: StringJS): $JsonElement
public "size"(): integer
public "get"(arg0: StringJS): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: StringJS, arg1: $JsonElement$$Type): void
public "entrySet"(): $Set<($Map$Entry<(StringJS), ($JsonElement)>)>
public "keySet"(): $Set<(StringJS)>
public "has"(arg0: StringJS): boolean
public "asMap"(): $Map<(StringJS), ($JsonElement)>
public "deepCopy"(): $JsonElement
public "getAsJsonPrimitive"(arg0: StringJS): $JsonPrimitive
public "getAsJsonObject"(arg0: StringJS): $JsonObject
public "getAsJsonArray"(arg0: StringJS): $JsonArray
public "addProperty"(arg0: StringJS, arg1: boolean): void
public "addProperty"(arg0: StringJS, arg1: StringJS): void
public "addProperty"(arg0: StringJS, arg1: number): void
public "addProperty"(arg0: StringJS, arg1: character): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObject$$Type = (object);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JsonObject$$Original = $JsonObject;}
