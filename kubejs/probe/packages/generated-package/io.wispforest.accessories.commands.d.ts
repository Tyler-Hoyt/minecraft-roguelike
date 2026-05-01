declare module "io.wispforest.accessories.commands.RecordArgumentTypeInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$StructEndec, $StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RecordArgumentTypeInfo$RecordInfoTemplate, $RecordArgumentTypeInfo$RecordInfoTemplate$$Type} from "io.wispforest.accessories.commands.RecordArgumentTypeInfo$RecordInfoTemplate"
import {$Record} from "java.lang.Record"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RecordArgumentTypeInfo<A extends $ArgumentType<(object)>, T> extends $Record implements $ArgumentTypeInfo$$Interface<(A), ($RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>)> {
constructor(endec: $StructEndec$$Type<(T)>, toTemplate: $Function$$Type<(A), (T)>, fromTemplate: $BiFunction$$Type<($CommandBuildContext), (T), (A)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<A extends $ArgumentType<(object)>>(argTypeConstructor: $Function$$Type<($CommandBuildContext), (A)>): $RecordArgumentTypeInfo<(A), (void)>
public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "endec"(): $StructEndec<(T)>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<(A), (T)>, json: $JsonObject$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<(A), (T)>, buffer: $FriendlyByteBuf$$Type): void
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
public "toTemplate"(): $Function<(A), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$$Type<A, T> = ({"fromTemplate"?: $BiFunction$$Type<($CommandBuildContext$$Type), (T), (A)>, "toTemplate"?: $Function$$Type<(A), (T)>, "endec"?: $StructEndec$$Type<(T)>}) | ([fromTemplate?: $BiFunction$$Type<($CommandBuildContext$$Type), (T), (A)>, toTemplate?: $Function$$Type<(A), (T)>, endec?: $StructEndec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordArgumentTypeInfo$$Original<A, T> = $RecordArgumentTypeInfo<(A), (T)>;}
declare module "io.wispforest.accessories.commands.RecordArgumentTypeInfo$RecordInfoTemplate" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Record} from "java.lang.Record"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RecordArgumentTypeInfo$RecordInfoTemplate<A extends $ArgumentType<(object)>, T> extends $Record implements $ArgumentTypeInfo$Template$$Interface<(A)> {
constructor(type: $ArgumentTypeInfo$$Type<(A), (never)>, data: T, fromTemplate: $BiFunction$$Type<($CommandBuildContext), (T), (A)>)

public "type"(): $ArgumentTypeInfo<(A), (never)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): T
public "instantiate"(ctx: $CommandBuildContext$$Type): A
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<A, T> = ({"fromTemplate"?: $BiFunction$$Type<($CommandBuildContext$$Type), (T), (A)>, "data"?: T, "type"?: $ArgumentTypeInfo$$Type<(A), (never)>}) | ([fromTemplate?: $BiFunction$$Type<($CommandBuildContext$$Type), (T), (A)>, data?: T, type?: $ArgumentTypeInfo$$Type<(A), (never)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecordArgumentTypeInfo$RecordInfoTemplate$$Original<A, T> = $RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>;}
