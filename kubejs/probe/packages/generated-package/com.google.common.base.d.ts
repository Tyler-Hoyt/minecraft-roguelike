declare module "com.google.common.base.Function" {
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type, $Function$$Interface as $Function$0$$Interface} from "java.util.function.Function"

export interface $Function$$Interface<F, T> extends $Function$0$$Interface<(F), (T)> {
}

export class $Function<F, T> implements $Function$$Interface {
 "equals"(object: any): boolean
 "apply"(input: F): T
static "identity"<T>(): $Function$0<(F), (F)>
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<F, T> = ($Function<(F), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function$$Original<F, T> = $Function<(F), (T)>;}
declare module "com.google.common.base.Predicate" {
import {$Predicate as $Predicate$0, $Predicate$$Type as $Predicate$0$$Type, $Predicate$$Interface as $Predicate$0$$Interface} from "java.util.function.Predicate"

export interface $Predicate$$Interface<T> extends $Predicate$0$$Interface<(T)> {
}

export class $Predicate<T> implements $Predicate$$Interface {
 "equals"(object: any): boolean
 "test"(input: T): boolean
 "apply"(input: T): boolean
 "or"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
 "negate"(): $Predicate$0<(T)>
 "and"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "not"<T>(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "isEqual"<T>(arg0: any): $Predicate$0<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$$Type<T> = ($Predicate<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Predicate$$Original<T> = $Predicate<(T)>;}
