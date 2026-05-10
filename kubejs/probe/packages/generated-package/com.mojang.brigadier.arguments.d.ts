declare module "com.mojang.brigadier.arguments.StringArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$StringArgumentType$StringType} from "com.mojang.brigadier.arguments.StringArgumentType$StringType"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $StringArgumentType implements $ArgumentType$$Interface<(StringJS)> {
public "toString"(): StringJS
public "parse"(arg0: $StringReader$$Type): any
public "getType"(): $StringArgumentType$StringType
public static "string"(): $StringArgumentType
public static "getString"(arg0: $CommandContext$$Type<(never)>, arg1: StringJS): StringJS
public static "word"(): $StringArgumentType
public static "escapeIfRequired"(arg0: StringJS): StringJS
public static "greedyString"(): $StringArgumentType
public "getExamples"(): $Collection<(StringJS)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): StringJS
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "type"(): $StringArgumentType$StringType
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$$Type = ($StringArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringArgumentType$$Original = $StringArgumentType;}
declare module "com.mojang.brigadier.arguments.StringArgumentType$StringType" {
import {$Collection} from "java.util.Collection"
import {$Enum} from "java.lang.Enum"

export class $StringArgumentType$StringType extends $Enum<($StringArgumentType$StringType)> {
static readonly "QUOTABLE_PHRASE": $StringArgumentType$StringType
static readonly "GREEDY_PHRASE": $StringArgumentType$StringType
static readonly "SINGLE_WORD": $StringArgumentType$StringType

public static "values"(): ($StringArgumentType$StringType)[]
public static "valueOf"(arg0: StringJS): $StringArgumentType$StringType
public "getExamples"(): $Collection<(StringJS)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentType$StringType$$Type = (("single_word") | ("quotable_phrase") | ("greedy_phrase"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringArgumentType$StringType$$Original = $StringArgumentType$StringType;}
declare module "com.mojang.brigadier.arguments.IntegerArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $IntegerArgumentType implements $ArgumentType$$Interface<(integer)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parse"(arg0: $StringReader$$Type): any
public static "getInteger"(arg0: $CommandContext$$Type<(never)>, arg1: StringJS): integer
public static "integer"(): $IntegerArgumentType
public static "integer"(arg0: integer, arg1: integer): $IntegerArgumentType
public static "integer"(arg0: integer): $IntegerArgumentType
public "getMaximum"(): integer
public "getMinimum"(): integer
public "getExamples"(): $Collection<(StringJS)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): integer
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "maximum"(): integer
get "minimum"(): integer
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerArgumentType$$Type = ($IntegerArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegerArgumentType$$Original = $IntegerArgumentType;}
declare module "com.mojang.brigadier.arguments.DoubleArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $DoubleArgumentType implements $ArgumentType$$Interface<(double)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getDouble"(arg0: $CommandContext$$Type<(never)>, arg1: StringJS): double
public "parse"(arg0: $StringReader$$Type): any
public "getMaximum"(): double
public "getMinimum"(): double
public "getExamples"(): $Collection<(StringJS)>
public static "doubleArg"(arg0: double): $DoubleArgumentType
public static "doubleArg"(arg0: double, arg1: double): $DoubleArgumentType
public static "doubleArg"(): $DoubleArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): double
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "maximum"(): double
get "minimum"(): double
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleArgumentType$$Type = ($DoubleArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleArgumentType$$Original = $DoubleArgumentType;}
declare module "com.mojang.brigadier.arguments.FloatArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $FloatArgumentType implements $ArgumentType$$Interface<(float)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getFloat"(arg0: $CommandContext$$Type<(never)>, arg1: StringJS): float
public "parse"(arg0: $StringReader$$Type): any
public "getMaximum"(): float
public "getMinimum"(): float
public "getExamples"(): $Collection<(StringJS)>
public static "floatArg"(arg0: float): $FloatArgumentType
public static "floatArg"(arg0: float, arg1: float): $FloatArgumentType
public static "floatArg"(): $FloatArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): float
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "maximum"(): float
get "minimum"(): float
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatArgumentType$$Type = ($FloatArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatArgumentType$$Original = $FloatArgumentType;}
declare module "com.mojang.brigadier.arguments.LongArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType$$Interface} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $LongArgumentType implements $ArgumentType$$Interface<(long)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getLong"(arg0: $CommandContext$$Type<(never)>, arg1: StringJS): long
public "parse"(arg0: $StringReader$$Type): any
public "getMaximum"(): long
public "getMinimum"(): long
public "getExamples"(): $Collection<(StringJS)>
public static "longArg"(arg0: long): $LongArgumentType
public static "longArg"(arg0: long, arg1: long): $LongArgumentType
public static "longArg"(): $LongArgumentType
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): long
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
get "maximum"(): long
get "minimum"(): long
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArgumentType$$Type = ($LongArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongArgumentType$$Original = $LongArgumentType;}
declare module "com.mojang.brigadier.arguments.ArgumentType" {
import {$CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Suggestions} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection} from "java.util.Collection"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $ArgumentType$$Interface<T> {

(arg0: $StringReader): T
get "examples"(): $Collection<(StringJS)>
}

export class $ArgumentType<T> implements $ArgumentType$$Interface {
 "parse"(arg0: $StringReader$$Type): T
 "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
 "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "getExamples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentType$$Type<T> = ((arg0: $StringReader) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentType$$Original<T> = $ArgumentType<(T)>;}
