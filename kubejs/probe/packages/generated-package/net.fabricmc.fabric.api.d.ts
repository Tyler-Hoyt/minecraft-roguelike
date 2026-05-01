declare module "net.fabricmc.fabric.api.event.Event" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $Event<T> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "register"(arg0: $ResourceLocation$$Type, arg1: T): void
public "register"(arg0: T): void
public "invoker"(): T
public "addPhaseOrdering"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type<T> = ($Event<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Event$$Original<T> = $Event<(T)>;}
declare module "net.fabricmc.fabric.api.util.BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanFunction$$Interface<R> {

(arg0: boolean): R
}

export class $BooleanFunction<R> implements $BooleanFunction$$Interface {
 "apply"(arg0: boolean): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanFunction$$Type<R> = ((arg0: boolean) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanFunction$$Original<R> = $BooleanFunction<(R)>;}
declare module "net.fabricmc.fabric.api.util.TriState" {
import {$BooleanFunction$$Type} from "net.fabricmc.fabric.api.util.BooleanFunction"
import {$Enum} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable} from "java.lang.Throwable"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState

public "get"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "map"<T>(arg0: $BooleanFunction$$Type<(T)>): $Optional<(T)>
public static "of"(arg0: boolean): $TriState
public static "of"(arg0: boolean): $TriState
public "orElse"(arg0: boolean): boolean
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): boolean
public "orElseGet"(arg0: $BooleanSupplier$$Type): boolean
public "getBoxed"(): boolean
get "boxed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("false") | ("default") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriState$$Original = $TriState;}
