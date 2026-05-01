declare module "com.mojang.brigadier.context.ContextChain" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$ResultConsumer$$Type} from "com.mojang.brigadier.ResultConsumer"
import {$ContextChain$Stage} from "com.mojang.brigadier.context.ContextChain$Stage"

export class $ContextChain<S> {
constructor(arg0: $List$$Type<($CommandContext$$Type<(S)>)>, arg1: $CommandContext$$Type<(S)>)

public "nextStage"(): $ContextChain<(S)>
public static "tryFlatten"<S>(arg0: $CommandContext$$Type<(S)>): $Optional<($ContextChain<(S)>)>
public "executeAll"(arg0: S, arg1: $ResultConsumer$$Type<(S)>): integer
public "getStage"(): $ContextChain$Stage
public static "runExecutable"<S>(arg0: $CommandContext$$Type<(S)>, arg1: S, arg2: $ResultConsumer$$Type<(S)>, arg3: boolean): integer
public static "runModifier"<S>(arg0: $CommandContext$$Type<(S)>, arg1: S, arg2: $ResultConsumer$$Type<(S)>, arg3: boolean): $Collection<(S)>
public "getTopContext"(): $CommandContext<(S)>
get "stage"(): $ContextChain$Stage
get "topContext"(): $CommandContext<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextChain$$Type<S> = ($ContextChain<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextChain$$Original<S> = $ContextChain<(S)>;}
declare module "com.mojang.brigadier.context.CommandContextBuilder" {
import {$CommandContext} from "com.mojang.brigadier.context.CommandContext"
import {$ParsedArgument, $ParsedArgument$$Type} from "com.mojang.brigadier.context.ParsedArgument"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$SuggestionContext} from "com.mojang.brigadier.context.SuggestionContext"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$ParsedCommandNode} from "com.mojang.brigadier.context.ParsedCommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $CommandContextBuilder<S> {
constructor(arg0: $CommandDispatcher$$Type<(S)>, arg1: S, arg2: $CommandNode$$Type<(S)>, arg3: integer)

public "copy"(): $CommandContextBuilder<(S)>
public "build"(arg0: StringJS): $CommandContext<(S)>
public "getChild"(): $CommandContextBuilder<(S)>
public "getSource"(): S
public "findSuggestionContext"(arg0: integer): $SuggestionContext<(S)>
public "withSource"(arg0: S): $CommandContextBuilder<(S)>
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
public "getRange"(): $StringRange
public "withChild"(arg0: $CommandContextBuilder$$Type<(S)>): $CommandContextBuilder<(S)>
public "getCommand"(): $Command<(S)>
public "withCommand"(arg0: $Command$$Type<(S)>): $CommandContextBuilder<(S)>
public "getLastChild"(): $CommandContextBuilder<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "getArguments"(): $Map<(StringJS), ($ParsedArgument<(S), (never)>)>
public "getDispatcher"(): $CommandDispatcher<(S)>
public "withNode"(arg0: $CommandNode$$Type<(S)>, arg1: $StringRange$$Type): $CommandContextBuilder<(S)>
public "withArgument"(arg0: StringJS, arg1: $ParsedArgument$$Type<(S), (never)>): $CommandContextBuilder<(S)>
get "child"(): $CommandContextBuilder<(S)>
get "source"(): S
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
get "range"(): $StringRange
get "command"(): $Command<(S)>
get "lastChild"(): $CommandContextBuilder<(S)>
get "rootNode"(): $CommandNode<(S)>
get "arguments"(): $Map<(StringJS), ($ParsedArgument<(S), (never)>)>
get "dispatcher"(): $CommandDispatcher<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContextBuilder$$Type<S> = ($CommandContextBuilder<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandContextBuilder$$Original<S> = $CommandContextBuilder<(S)>;}
declare module "com.mojang.brigadier.context.ParsedArgument" {
import {$StringRange} from "com.mojang.brigadier.context.StringRange"

export class $ParsedArgument<S, T> {
constructor(arg0: integer, arg1: integer, arg2: T)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getResult"(): T
public "getRange"(): $StringRange
get "result"(): T
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedArgument$$Type<S, T> = ($ParsedArgument<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParsedArgument$$Original<S, T> = $ParsedArgument<(S), (T)>;}
declare module "com.mojang.brigadier.context.SuggestionContext" {
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"

export class $SuggestionContext<S> {
readonly "parent": $CommandNode<(S)>
readonly "startPos": integer

constructor(arg0: $CommandNode$$Type<(S)>, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuggestionContext$$Type<S> = ($SuggestionContext<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuggestionContext$$Original<S> = $SuggestionContext<(S)>;}
declare module "com.mojang.brigadier.context.StringRange" {
import {$ImmutableStringReader$$Type} from "com.mojang.brigadier.ImmutableStringReader"

export class $StringRange {
constructor(arg0: integer, arg1: integer)

public "get"(arg0: StringJS): StringJS
public "get"(arg0: $ImmutableStringReader$$Type): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(): integer
public "isEmpty"(): boolean
public static "at"(arg0: integer): $StringRange
public static "between"(arg0: integer, arg1: integer): $StringRange
public static "encompassing"(arg0: $StringRange$$Type, arg1: $StringRange$$Type): $StringRange
public "getStart"(): integer
public "getEnd"(): integer
get "length"(): integer
get "empty"(): boolean
get "start"(): integer
get "end"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringRange$$Type = ($StringRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringRange$$Original = $StringRange;}
declare module "com.mojang.brigadier.context.ParsedCommandNode" {
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"

export class $ParsedCommandNode<S> {
constructor(arg0: $CommandNode$$Type<(S)>, arg1: $StringRange$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getNode"(): $CommandNode<(S)>
public "getRange"(): $StringRange
get "node"(): $CommandNode<(S)>
get "range"(): $StringRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedCommandNode$$Type<S> = ($ParsedCommandNode<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParsedCommandNode$$Original<S> = $ParsedCommandNode<(S)>;}
declare module "com.mojang.brigadier.context.ContextChain$Stage" {
import {$Enum} from "java.lang.Enum"

export class $ContextChain$Stage extends $Enum<($ContextChain$Stage)> {
static readonly "EXECUTE": $ContextChain$Stage
static readonly "MODIFY": $ContextChain$Stage

public static "values"(): ($ContextChain$Stage)[]
public static "valueOf"(arg0: StringJS): $ContextChain$Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextChain$Stage$$Type = (("modify") | ("execute"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextChain$Stage$$Original = $ContextChain$Stage;}
declare module "com.mojang.brigadier.context.CommandContext" {
import {$ParsedArgument$$Type} from "com.mojang.brigadier.context.ParsedArgument"
import {$Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Class$$Type} from "java.lang.Class"
import {$RedirectModifier, $RedirectModifier$$Type} from "com.mojang.brigadier.RedirectModifier"
import {$StringRange, $StringRange$$Type} from "com.mojang.brigadier.context.StringRange"
import {$CommandNode, $CommandNode$$Type} from "com.mojang.brigadier.tree.CommandNode"
import {$ParsedCommandNode, $ParsedCommandNode$$Type} from "com.mojang.brigadier.context.ParsedCommandNode"
import {$Command, $Command$$Type} from "com.mojang.brigadier.Command"

export class $CommandContext<S> {
constructor(arg0: S, arg1: StringJS, arg2: $Map$$Type<(StringJS), ($ParsedArgument$$Type<(S), (never)>)>, arg3: $Command$$Type<(S)>, arg4: $CommandNode$$Type<(S)>, arg5: $List$$Type<($ParsedCommandNode$$Type<(S)>)>, arg6: $StringRange$$Type, arg7: $CommandContext$$Type<(S)>, arg8: $RedirectModifier$$Type<(S)>, arg9: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getChild"(): $CommandContext<(S)>
public "getSource"(): S
public "getNodes"(): $List<($ParsedCommandNode<(S)>)>
public "isForked"(): boolean
public "hasNodes"(): boolean
public "getRedirectModifier"(): $RedirectModifier<(S)>
public "getRange"(): $StringRange
public "getCommand"(): $Command<(S)>
public "copyFor"(arg0: S): $CommandContext<(S)>
public "getLastChild"(): $CommandContext<(S)>
public "getRootNode"(): $CommandNode<(S)>
public "getArgument"<V>(arg0: StringJS, arg1: $Class$$Type<(V)>): V
public "getInput"(): StringJS
get "child"(): $CommandContext<(S)>
get "source"(): S
get "nodes"(): $List<($ParsedCommandNode<(S)>)>
get "forked"(): boolean
get "redirectModifier"(): $RedirectModifier<(S)>
get "range"(): $StringRange
get "command"(): $Command<(S)>
get "lastChild"(): $CommandContext<(S)>
get "rootNode"(): $CommandNode<(S)>
get "input"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandContext$$Type<S> = ($CommandContext<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandContext$$Original<S> = $CommandContext<(S)>;}
