declare module "org.apache.commons.lang3.mutable.MutableInt" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $MutableInt extends number implements $Comparable$$Interface<($MutableInt)>, $Mutable$$Interface<(number)> {
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: integer)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $MutableInt$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): integer
public "add"(arg0: integer): void
public "add"(arg0: number): void
public "increment"(): void
public "setValue"(arg0: number): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): integer
public "getAndAdd"(arg0: integer): integer
public "incrementAndGet"(): integer
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: number): integer
public "addAndGet"(arg0: integer): integer
public "subtract"(arg0: integer): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toInteger"(): integer
get "value"(): integer
set "value"(value: number)
set "value"(value: integer)
set "value"(value: any)
get "andIncrement"(): integer
get "andDecrement"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableInt$$Type = ($MutableInt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableInt$$Original = $MutableInt;}
declare module "org.apache.commons.lang3.math.Fraction" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $Fraction extends number implements $Comparable$$Interface<($Fraction)> {
static readonly "FOUR_FIFTHS": $Fraction
static readonly "ZERO": $Fraction
static readonly "ONE_HALF": $Fraction
static readonly "TWO_QUARTERS": $Fraction
static readonly "THREE_FIFTHS": $Fraction
static readonly "ONE": $Fraction
static readonly "ONE_QUARTER": $Fraction
static readonly "TWO_THIRDS": $Fraction
static readonly "THREE_QUARTERS": $Fraction
static readonly "ONE_THIRD": $Fraction
static readonly "ONE_FIFTH": $Fraction
static readonly "TWO_FIFTHS": $Fraction

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Fraction
public "pow"(arg0: integer): $Fraction
public "compareTo"(arg0: $Fraction$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "add"(arg0: $Fraction$$Type): $Fraction
public "reduce"(): $Fraction
public "subtract"(arg0: $Fraction$$Type): $Fraction
public "negate"(): $Fraction
public "multiplyBy"(arg0: $Fraction$$Type): $Fraction
public "divideBy"(arg0: $Fraction$$Type): $Fraction
public "invert"(): $Fraction
public "getNumerator"(): integer
public "getDenominator"(): integer
public static "getReducedFraction"(arg0: integer, arg1: integer): $Fraction
public static "getFraction"(arg0: integer, arg1: integer): $Fraction
public static "getFraction"(arg0: integer, arg1: integer, arg2: integer): $Fraction
public static "getFraction"(arg0: StringJS): $Fraction
public static "getFraction"(arg0: double): $Fraction
public "toProperString"(): StringJS
public "getProperWhole"(): integer
public "getProperNumerator"(): integer
get "numerator"(): integer
get "denominator"(): integer
get "properWhole"(): integer
get "properNumerator"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fraction$$Type = ($Fraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Fraction$$Original = $Fraction;}
declare module "org.apache.commons.lang3.function.FailableFunction" {
import {$Throwable} from "java.lang.Throwable"

export interface $FailableFunction$$Interface<T, R, E extends $Throwable> {

(arg0: T): R
}

export class $FailableFunction<T, R, E extends $Throwable> implements $FailableFunction$$Interface {
static readonly "NOP": $FailableFunction

 "apply"(arg0: T): R
static "identity"<T, E extends $Throwable>(): $FailableFunction<(T), (T), (E)>
static "function"<T, R, E extends $Throwable>(arg0: $FailableFunction$$Type<(T), (R), (E)>): $FailableFunction<(T), (R), (E)>
 "compose"<V>(arg0: $FailableFunction$$Type<(V), (T), (E)>): $FailableFunction<(V), (R), (E)>
 "andThen"<V>(arg0: $FailableFunction$$Type<(R), (V), (E)>): $FailableFunction<(T), (V), (E)>
static "nop"<T, R, E extends $Throwable>(): $FailableFunction<(T), (R), (E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FailableFunction$$Type<T, R, E> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FailableFunction$$Original<T, R, E> = $FailableFunction<(T), (R), (E)>;}
declare module "org.apache.commons.lang3.function.FailableBiConsumer" {
import {$Throwable} from "java.lang.Throwable"

export interface $FailableBiConsumer$$Interface<T, U, E extends $Throwable> {

(arg0: T, arg1: U): void
}

export class $FailableBiConsumer<T, U, E extends $Throwable> implements $FailableBiConsumer$$Interface {
static readonly "NOP": $FailableBiConsumer

 "accept"(arg0: T, arg1: U): void
 "andThen"(arg0: $FailableBiConsumer$$Type<(T), (U), (E)>): $FailableBiConsumer<(T), (U), (E)>
static "nop"<T, U, E extends $Throwable>(): $FailableBiConsumer<(T), (U), (E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FailableBiConsumer$$Type<T, U, E> = ((arg0: T, arg1: U) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FailableBiConsumer$$Original<T, U, E> = $FailableBiConsumer<(T), (U), (E)>;}
declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer$$Interface<T, U, V> {

(arg0: T, arg1: U, arg2: V): void
}

export class $TriConsumer<T, U, V> implements $TriConsumer$$Interface {
 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriConsumer$$Original<T, U, V> = $TriConsumer<(T), (U), (V)>;}
declare module "org.apache.commons.lang3.tuple.Triple" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $Triple<L, M, R> implements $Comparable$$Interface<($Triple<(L), (M), (R)>)>, $Serializable$$Interface {
static readonly "EMPTY_ARRAY": ($Triple<(never), (never), (never)>)[]

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: StringJS): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Triple$$Type<(L), (M), (R)>): integer
public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($Triple<(L), (M), (R)>)[]
public static "ofNonNull"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public "getLeft"(): L
public "getRight"(): R
public "getMiddle"(): M
get "left"(): L
get "right"(): R
get "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$$Type<L, M, R> = ($Triple<(L), (M), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Triple$$Original<L, M, R> = $Triple<(L), (M), (R)>;}
declare module "org.apache.commons.lang3.mutable.MutableBoolean" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $MutableBoolean implements $Mutable$$Interface<(boolean)>, $Serializable$$Interface, $Comparable$$Interface<($MutableBoolean)> {
constructor(arg0: boolean)
constructor(arg0: boolean)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableBoolean$$Type): integer
public "booleanValue"(): boolean
public "getValue"(): any
public "setValue"(arg0: boolean): void
public "setValue"(arg0: any): void
public "setValue"(arg0: boolean): void
public "toBoolean"(): boolean
public "isFalse"(): boolean
public "setFalse"(): void
public "setTrue"(): void
public "isTrue"(): boolean
get "value"(): any
set "value"(value: boolean)
set "value"(value: any)
set "value"(value: boolean)
get "false"(): boolean
get "false"(): void
get "true"(): void
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBoolean$$Type = ($MutableBoolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableBoolean$$Original = $MutableBoolean;}
declare module "org.apache.commons.lang3.tuple.ImmutableTriple" {
import {$Triple} from "org.apache.commons.lang3.tuple.Triple"

export class $ImmutableTriple<L, M, R> extends $Triple<(L), (M), (R)> {
readonly "middle": M
static readonly "EMPTY_ARRAY": ($ImmutableTriple<(never), (never), (never)>)[]
readonly "left": L
readonly "right": R

constructor(arg0: L, arg1: M, arg2: R)

public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($ImmutableTriple<(L), (M), (R)>)[]
public static "ofNonNull"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public "getLeft"(): L
public "getRight"(): R
public static "nullTriple"<L, M, R>(): $ImmutableTriple<(L), (M), (R)>
public "getMiddle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableTriple$$Type<L, M, R> = ($ImmutableTriple<(L), (M), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmutableTriple$$Original<L, M, R> = $ImmutableTriple<(L), (M), (R)>;}
declare module "org.apache.commons.lang3.tuple.Pair" {
import {$Comparable, $Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$FailableBiFunction$$Type} from "org.apache.commons.lang3.function.FailableBiFunction"
import {$Throwable} from "java.lang.Throwable"
import {$Map$Entry, $Map$Entry$$Type, $Map$Entry$$Interface} from "java.util.Map$Entry"
import {$FailableBiConsumer$$Type} from "org.apache.commons.lang3.function.FailableBiConsumer"

export class $Pair<L, R> implements $Map$Entry$$Interface<(L), (R)>, $Comparable$$Interface<($Pair<(L), (R)>)>, $Serializable$$Interface {
static readonly "EMPTY_ARRAY": ($Pair<(never), (never)>)[]

constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "toString"(arg0: StringJS): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Pair$$Type<(L), (R)>): integer
public "getValue"(): R
public "apply"<V, E extends $Throwable>(arg0: $FailableBiFunction$$Type<(L), (R), (V), (E)>): V
public static "of"<L, R>(arg0: L, arg1: R): $Pair<(L), (R)>
public static "of"<L, R>(arg0: $Map$Entry$$Type<(L), (R)>): $Pair<(L), (R)>
public "getKey"(): L
public "accept"<E extends $Throwable>(arg0: $FailableBiConsumer$$Type<(L), (R), (E)>): void
public static "emptyArray"<L, R>(): ($Pair<(L), (R)>)[]
public static "ofNonNull"<L, R>(arg0: L, arg1: R): $Pair<(L), (R)>
public "getLeft"(): L
public "getRight"(): R
public static "copyOf"<K, V>(arg0: $Map$Entry$$Type<(L), (R)>): $Map$Entry<(L), (R)>
public static "comparingByKey"<K, V>(arg0: $Comparator$$Type<(L)>): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByKey"<K extends $Comparable<(object)>, V>(): $Comparator<($Map$Entry<(L), (R)>)>
public "setValue"(arg0: R): R
public static "comparingByValue"<K, V extends $Comparable<(object)>>(): $Comparator<($Map$Entry<(L), (R)>)>
public static "comparingByValue"<K, V>(arg0: $Comparator$$Type<(R)>): $Comparator<($Map$Entry<(L), (R)>)>
get "value"(): R
get "key"(): L
get "left"(): L
get "right"(): R
set "value"(value: R)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Pair$$Original<L, R> = $Pair<(L), (R)>;}
declare module "org.apache.commons.lang3.function.FailableBiFunction" {
import {$FailableFunction$$Type} from "org.apache.commons.lang3.function.FailableFunction"
import {$Throwable} from "java.lang.Throwable"

export interface $FailableBiFunction$$Interface<T, U, R, E extends $Throwable> {

(arg0: T, arg1: U): R
}

export class $FailableBiFunction<T, U, R, E extends $Throwable> implements $FailableBiFunction$$Interface {
static readonly "NOP": $FailableBiFunction

 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $FailableFunction$$Type<(R), (V), (E)>): $FailableBiFunction<(T), (U), (V), (E)>
static "nop"<T, U, R, E extends $Throwable>(): $FailableBiFunction<(T), (U), (R), (E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FailableBiFunction$$Type<T, U, R, E> = ((arg0: T, arg1: U) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FailableBiFunction$$Original<T, U, R, E> = $FailableBiFunction<(T), (U), (R), (E)>;}
declare module "org.apache.commons.lang3.function.TriFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $TriFunction$$Interface<T, U, V, R> {

(arg0: T, arg1: U, arg2: V): R
}

export class $TriFunction<T, U, V, R> implements $TriFunction$$Interface {
 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriFunction$$Original<T, U, V, R> = $TriFunction<(T), (U), (V), (R)>;}
declare module "org.apache.commons.lang3.mutable.MutableFloat" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $MutableFloat extends number implements $Comparable$$Interface<($MutableFloat)>, $Mutable$$Interface<(number)> {
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: float)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): float
public "add"(arg0: float): void
public "add"(arg0: number): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: float): void
public "setValue"(arg0: number): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): float
public "getAndAdd"(arg0: float): float
public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: float): float
public "addAndGet"(arg0: number): float
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toFloat"(): float
get "infinite"(): boolean
get "value"(): float
get "naN"(): boolean
set "value"(value: float)
set "value"(value: number)
set "value"(value: any)
get "andIncrement"(): float
get "andDecrement"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableFloat$$Type = ($MutableFloat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableFloat$$Original = $MutableFloat;}
declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable$$Interface<T> {
get "value"(): T
set "value"(value: T)
}

export class $Mutable<T> implements $Mutable$$Interface {
 "getValue"(): T
 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$$Type<T> = ($Mutable<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Mutable$$Original<T> = $Mutable<(T)>;}
declare module "org.apache.commons.lang3.mutable.MutableObject" {
import {$Mutable$$Interface} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable$$Interface} from "java.io.Serializable"

export class $MutableObject<T> implements $Mutable$$Interface<(T)>, $Serializable$$Interface {
constructor()
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): T
public "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableObject$$Type<T> = ($MutableObject<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableObject$$Original<T> = $MutableObject<(T)>;}
