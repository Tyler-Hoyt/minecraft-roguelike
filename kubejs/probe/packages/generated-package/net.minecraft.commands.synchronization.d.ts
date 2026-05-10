declare module "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template" {
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export interface $ArgumentTypeInfo$Template$$Interface<A extends $ArgumentType<(object)>> {
}

export class $ArgumentTypeInfo$Template<A extends $ArgumentType<(object)>> implements $ArgumentTypeInfo$Template$$Interface {
 "type"(): $ArgumentTypeInfo<(A), (never)>
 "instantiate"(arg0: $CommandBuildContext$$Type): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeInfo$Template$$Type<A> = ($ArgumentTypeInfo$Template<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentTypeInfo$Template$$Original<A> = $ArgumentTypeInfo$Template<(A)>;}
declare module "net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$DoubleArgumentInfo$Template, $DoubleArgumentInfo$Template$$Type} from "net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo$Template"
import {$DoubleArgumentType, $DoubleArgumentType$$Type} from "com.mojang.brigadier.arguments.DoubleArgumentType"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $DoubleArgumentInfo implements $ArgumentTypeInfo$$Interface<($DoubleArgumentType), ($DoubleArgumentInfo$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $DoubleArgumentType$$Type): $DoubleArgumentInfo$Template
public "serializeToNetwork"(arg0: $DoubleArgumentInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $DoubleArgumentInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleArgumentInfo$$Type = ($DoubleArgumentInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleArgumentInfo$$Original = $DoubleArgumentInfo;}
declare module "net.minecraft.commands.synchronization.brigadier.LongArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$LongArgumentType} from "com.mojang.brigadier.arguments.LongArgumentType"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $LongArgumentInfo$Template implements $ArgumentTypeInfo$Template$$Interface<($LongArgumentType)> {
public "type"(): $ArgumentTypeInfo<($LongArgumentType), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $LongArgumentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArgumentInfo$Template$$Type = ($LongArgumentInfo$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongArgumentInfo$Template$$Original = $LongArgumentInfo$Template;}
declare module "net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$DoubleArgumentType} from "com.mojang.brigadier.arguments.DoubleArgumentType"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $DoubleArgumentInfo$Template implements $ArgumentTypeInfo$Template$$Interface<($DoubleArgumentType)> {
public "type"(): $ArgumentTypeInfo<($DoubleArgumentType), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $DoubleArgumentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleArgumentInfo$Template$$Type = ($DoubleArgumentInfo$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleArgumentInfo$Template$$Original = $DoubleArgumentInfo$Template;}
declare module "net.minecraft.commands.synchronization.ArgumentTypeInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $ArgumentTypeInfo$$Interface<A extends $ArgumentType<(object)>, T extends $ArgumentTypeInfo$Template<(object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CommandArgumentType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CommandArgumentTypeTag
}

export class $ArgumentTypeInfo<A extends $ArgumentType<(object)>, T extends $ArgumentTypeInfo$Template<(object)>> implements $ArgumentTypeInfo$$Interface {
 "unpack"(arg0: A): T
 "serializeToNetwork"(arg0: T, arg1: $FriendlyByteBuf$$Type): void
 "serializeToJson"(arg0: T, arg1: $JsonObject$$Type): void
 "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeInfo$$Type<A, T> = (Special.CommandArgumentType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArgumentTypeInfo$$Original<A, T> = $ArgumentTypeInfo<(A), (T)>;}
declare module "net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$IntegerArgumentType, $IntegerArgumentType$$Type} from "com.mojang.brigadier.arguments.IntegerArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$IntegerArgumentInfo$Template, $IntegerArgumentInfo$Template$$Type} from "net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $IntegerArgumentInfo implements $ArgumentTypeInfo$$Interface<($IntegerArgumentType), ($IntegerArgumentInfo$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $IntegerArgumentType$$Type): $IntegerArgumentInfo$Template
public "serializeToNetwork"(arg0: $IntegerArgumentInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $IntegerArgumentInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerArgumentInfo$$Type = ($IntegerArgumentInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegerArgumentInfo$$Original = $IntegerArgumentInfo;}
declare module "net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$StringArgumentType$StringType$$Type} from "com.mojang.brigadier.arguments.StringArgumentType$StringType"
import {$StringArgumentType} from "com.mojang.brigadier.arguments.StringArgumentType"
import {$StringArgumentSerializer$$Type} from "net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $StringArgumentSerializer$Template implements $ArgumentTypeInfo$Template$$Interface<($StringArgumentType)> {
constructor(arg0: $StringArgumentSerializer$$Type, arg1: $StringArgumentType$StringType$$Type)

public "type"(): $ArgumentTypeInfo<($StringArgumentType), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $StringArgumentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentSerializer$Template$$Type = ($StringArgumentSerializer$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringArgumentSerializer$Template$$Original = $StringArgumentSerializer$Template;}
declare module "net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$FloatArgumentType} from "com.mojang.brigadier.arguments.FloatArgumentType"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $FloatArgumentInfo$Template implements $ArgumentTypeInfo$Template$$Interface<($FloatArgumentType)> {
public "type"(): $ArgumentTypeInfo<($FloatArgumentType), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $FloatArgumentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatArgumentInfo$Template$$Type = ($FloatArgumentInfo$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatArgumentInfo$Template$$Original = $FloatArgumentInfo$Template;}
declare module "net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FloatArgumentInfo$Template, $FloatArgumentInfo$Template$$Type} from "net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo$Template"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$FloatArgumentType, $FloatArgumentType$$Type} from "com.mojang.brigadier.arguments.FloatArgumentType"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $FloatArgumentInfo implements $ArgumentTypeInfo$$Interface<($FloatArgumentType), ($FloatArgumentInfo$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $FloatArgumentType$$Type): $FloatArgumentInfo$Template
public "serializeToNetwork"(arg0: $FloatArgumentInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $FloatArgumentInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatArgumentInfo$$Type = ($FloatArgumentInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatArgumentInfo$$Original = $FloatArgumentInfo;}
declare module "net.minecraft.commands.synchronization.brigadier.LongArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$LongArgumentInfo$Template, $LongArgumentInfo$Template$$Type} from "net.minecraft.commands.synchronization.brigadier.LongArgumentInfo$Template"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LongArgumentType, $LongArgumentType$$Type} from "com.mojang.brigadier.arguments.LongArgumentType"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $LongArgumentInfo implements $ArgumentTypeInfo$$Interface<($LongArgumentType), ($LongArgumentInfo$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $LongArgumentType$$Type): $LongArgumentInfo$Template
public "serializeToNetwork"(arg0: $LongArgumentInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $LongArgumentInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongArgumentInfo$$Type = ($LongArgumentInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongArgumentInfo$$Original = $LongArgumentInfo;}
declare module "net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$IntegerArgumentType} from "com.mojang.brigadier.arguments.IntegerArgumentType"
import {$ArgumentTypeInfo} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $IntegerArgumentInfo$Template implements $ArgumentTypeInfo$Template$$Interface<($IntegerArgumentType)> {
public "type"(): $ArgumentTypeInfo<($IntegerArgumentType), (never)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $IntegerArgumentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerArgumentInfo$Template$$Type = ($IntegerArgumentInfo$Template);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegerArgumentInfo$Template$$Original = $IntegerArgumentInfo$Template;}
declare module "net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$StringArgumentSerializer$Template, $StringArgumentSerializer$Template$$Type} from "net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer$Template"
import {$ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$StringArgumentType, $StringArgumentType$$Type} from "com.mojang.brigadier.arguments.StringArgumentType"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $StringArgumentSerializer implements $ArgumentTypeInfo$$Interface<($StringArgumentType), ($StringArgumentSerializer$Template)> {
constructor()

public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public "unpack"(arg0: $StringArgumentType$$Type): $StringArgumentSerializer$Template
public "serializeToNetwork"(arg0: $StringArgumentSerializer$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $StringArgumentSerializer$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringArgumentSerializer$$Type = ($StringArgumentSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringArgumentSerializer$$Original = $StringArgumentSerializer;}
declare module "net.minecraft.commands.synchronization.SingletonArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$$Type} from "net.minecraft.commands.synchronization.SingletonArgumentInfo$Template"
import {$ArgumentTypeInfo$$Interface} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $SingletonArgumentInfo<A extends $ArgumentType<(object)>> implements $ArgumentTypeInfo$$Interface<(A), ($SingletonArgumentInfo$Template)> {
public "unpack"(arg0: $ArgumentType$$Type): $ArgumentTypeInfo$Template
public static "contextFree"<T extends $ArgumentType<(object)>>(arg0: $Supplier$$Type<(T)>): $SingletonArgumentInfo<(T)>
public static "contextAware"<T extends $ArgumentType<(object)>>(arg0: $Function$$Type<($CommandBuildContext), (T)>): $SingletonArgumentInfo<(T)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $SingletonArgumentInfo$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $SingletonArgumentInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type, arg1: $JsonObject$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $SingletonArgumentInfo$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$$Type<A> = ($SingletonArgumentInfo<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingletonArgumentInfo$$Original<A> = $SingletonArgumentInfo<(A)>;}
