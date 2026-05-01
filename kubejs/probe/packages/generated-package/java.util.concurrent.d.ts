declare module "java.util.concurrent.TimeUnit" {
import {$Enum} from "java.lang.Enum"
import {$Thread$$Type} from "java.lang.Thread"
import {$ChronoUnit, $ChronoUnit$$Type} from "java.time.temporal.ChronoUnit"
import {$Duration$$Type} from "java.time.Duration"

export class $TimeUnit extends $Enum<($TimeUnit)> {
static readonly "MILLISECONDS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "SECONDS": $TimeUnit
static readonly "NANOSECONDS": $TimeUnit
static readonly "DAYS": $TimeUnit
static readonly "MINUTES": $TimeUnit

public static "values"(): ($TimeUnit)[]
public "convert"(arg0: $Duration$$Type): long
public "convert"(arg0: long, arg1: $TimeUnit$$Type): long
public static "valueOf"(arg0: StringJS): $TimeUnit
public static "of"(arg0: $ChronoUnit$$Type): $TimeUnit
public "toNanos"(arg0: long): long
public "toMillis"(arg0: long): long
public "sleep"(arg0: long): void
public "toDays"(arg0: long): long
public "toSeconds"(arg0: long): long
public "toHours"(arg0: long): long
public "toMinutes"(arg0: long): long
public "toMicros"(arg0: long): long
public "timedWait"(arg0: any, arg1: long): void
public "timedJoin"(arg0: $Thread$$Type, arg1: long): void
public "toChronoUnit"(): $ChronoUnit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeUnit$$Type = (("nanoseconds") | ("microseconds") | ("milliseconds") | ("seconds") | ("minutes") | ("hours") | ("days"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimeUnit$$Original = $TimeUnit;}
declare module "java.util.concurrent.Future$State" {
import {$Enum} from "java.lang.Enum"

export class $Future$State extends $Enum<($Future$State)> {
static readonly "CANCELLED": $Future$State
static readonly "SUCCESS": $Future$State
static readonly "FAILED": $Future$State
static readonly "RUNNING": $Future$State

public static "values"(): ($Future$State)[]
public static "valueOf"(arg0: StringJS): $Future$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$State$$Type = (("running") | ("success") | ("failed") | ("cancelled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Future$State$$Original = $Future$State;}
declare module "java.util.concurrent.ScheduledFuture" {
import {$Delayed$$Type, $Delayed$$Interface} from "java.util.concurrent.Delayed"
import {$Future$$Interface} from "java.util.concurrent.Future"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledFuture$$Interface<V> extends $Delayed$$Interface, $Future$$Interface<(V)> {
get "done"(): boolean
get "cancelled"(): boolean
}

export class $ScheduledFuture<V> implements $ScheduledFuture$$Interface {
 "getDelay"(arg0: $TimeUnit$$Type): long
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduledFuture$$Original<V> = $ScheduledFuture<(V)>;}
declare module "java.util.concurrent.ConcurrentMap" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $ConcurrentMap$$Interface<K, V> extends $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $ConcurrentMap<K, V> implements $ConcurrentMap$$Interface {
 "remove"(arg0: any, arg1: any): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "containsKey"(arg0: any): boolean
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentMap$$Type<K, V> = ($ConcurrentMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcurrentMap$$Original<K, V> = $ConcurrentMap<(K), (V)>;}
declare module "java.util.concurrent.LinkedBlockingQueue" {
import {$Iterator} from "java.util.Iterator"
import {$BlockingQueue$$Interface} from "java.util.concurrent.BlockingQueue"
import {$Collection$$Type} from "java.util.Collection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractQueue} from "java.util.AbstractQueue"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export class $LinkedBlockingQueue<E> extends $AbstractQueue<(E)> implements $BlockingQueue$$Interface<(E)>, $Serializable$$Interface {
constructor(arg0: integer)
constructor()
constructor(arg0: $Collection$$Type<(E)>)

public "remove"(arg0: any): boolean
public "size"(): integer
public "put"(arg0: E): void
public "toString"(): StringJS
public "clear"(): void
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "peek"(): E
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "poll"(): E
public "poll"(arg0: long, arg1: $TimeUnit$$Type): E
public "offer"(arg0: E, arg1: long, arg2: $TimeUnit$$Type): boolean
public "offer"(arg0: E): boolean
public "take"(): E
public "drainTo"(arg0: $Collection$$Type<(E)>, arg1: integer): integer
public "drainTo"(arg0: $Collection$$Type<(E)>): integer
public "remainingCapacity"(): integer
public "add"(arg0: E): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedBlockingQueue$$Type<E> = ($LinkedBlockingQueue<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedBlockingQueue$$Original<E> = $LinkedBlockingQueue<(E)>;}
declare module "java.util.concurrent.Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable$$Interface<V> {

(): V
}

export class $Callable<V> implements $Callable$$Interface {
 "call"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$$Type<V> = (() => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Callable$$Original<V> = $Callable<(V)>;}
declare module "java.util.concurrent.Delayed" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Delayed$$Interface extends $Comparable$$Interface<($Delayed)> {
}

export class $Delayed implements $Delayed$$Interface {
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Delayed$$Type = ($Delayed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Delayed$$Original = $Delayed;}
declare module "java.util.concurrent.ExecutorService" {
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Executor$$Interface} from "java.util.concurrent.Executor"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ExecutorService$$Interface extends $Executor$$Interface, $AutoCloseable$$Interface {
get "terminated"(): boolean
}

export class $ExecutorService implements $ExecutorService$$Interface {
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutorService$$Type = ($ExecutorService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExecutorService$$Original = $ExecutorService;}
declare module "java.util.concurrent.ConcurrentHashMap$CollectionView" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type, $Collection$$Interface} from "java.util.Collection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export class $ConcurrentHashMap$CollectionView<K, V, E> implements $Collection$$Interface<(E)>, $Serializable$$Interface {
public "remove"(arg0: any): boolean
public "size"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "stream"(): $Stream<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$CollectionView$$Type<K, V, E> = ($ConcurrentHashMap$CollectionView<(K), (V), (E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcurrentHashMap$CollectionView$$Original<K, V, E> = $ConcurrentHashMap$CollectionView<(K), (V), (E)>;}
declare module "java.util.concurrent.Flow$Publisher" {
import {$Flow$Subscriber, $Flow$Subscriber$$Type} from "java.util.concurrent.Flow$Subscriber"

export interface $Flow$Publisher$$Interface<T> {

(arg0: $Flow$Subscriber<(T)>): void
}

export class $Flow$Publisher<T> implements $Flow$Publisher$$Interface {
 "subscribe"(arg0: $Flow$Subscriber$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Publisher$$Type<T> = ((arg0: $Flow$Subscriber<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Publisher$$Original<T> = $Flow$Publisher<(T)>;}
declare module "java.util.concurrent.Future" {
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable} from "java.lang.Throwable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Future$$Interface<V> {
get "done"(): boolean
get "cancelled"(): boolean
}

export class $Future<V> implements $Future$$Interface {
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Future$$Original<V> = $Future<(V)>;}
declare module "java.util.concurrent.Flow$Subscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Flow$Subscription$$Interface {
}

export class $Flow$Subscription implements $Flow$Subscription$$Interface {
 "cancel"(): void
 "request"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Subscription$$Type = ($Flow$Subscription);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Subscription$$Original = $Flow$Subscription;}
declare module "java.util.concurrent.CompletableFuture" {
import {$CompletionStage, $CompletionStage$$Type, $CompletionStage$$Interface} from "java.util.concurrent.CompletionStage"
import {$Future$$Interface} from "java.util.concurrent.Future"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Future$State} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $CompletableFuture<T> implements $Future$$Interface<(T)>, $CompletionStage$$Interface<(T)> {
constructor()

public "get"(arg0: long, arg1: $TimeUnit$$Type): T
public "get"(): T
public "toString"(): StringJS
public "join"(): T
public "state"(): $Future$State
public "isDone"(): boolean
public "cancel"(arg0: boolean): boolean
public "copy"(): $CompletableFuture<(T)>
public "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletableFuture<(U)>
public "complete"(arg0: T): boolean
public static "allOf"(...arg0: ($CompletableFuture$$Type<(never)>)[]): $CompletableFuture<(void)>
public "isCancelled"(): boolean
public "resultNow"(): T
public "exceptionNow"(): $Throwable
public "completeExceptionally"(arg0: $Throwable$$Type): boolean
public "completeAsync"(arg0: $Supplier$$Type<(T)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletableFuture<(T)>
public "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "exceptionallyAsync"(arg0: $Function$$Type): $CompletionStage
public "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$$Type): $CompletionStage
public "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "handleAsync"(arg0: $BiFunction$$Type, arg1: $Executor$$Type): $CompletionStage
public "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletableFuture<(U)>
public "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletableFuture<(U)>
public "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "thenCompose"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletableFuture<(U)>
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Runnable$$Type): $CompletionStage
public "runAfterEither"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Consumer$$Type): $CompletionStage
public "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletableFuture<(U)>
public "applyToEitherAsync"(arg0: $CompletionStage$$Type, arg1: $Function$$Type, arg2: $Executor$$Type): $CompletionStage
public "applyToEither"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletableFuture<(U)>
public "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletableFuture<(void)>
public "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "runAfterBoth"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "thenAcceptBothAsync"(arg0: $CompletionStage$$Type, arg1: $BiConsumer$$Type, arg2: $Executor$$Type): $CompletionStage
public "thenAcceptBothAsync"(arg0: $CompletionStage$$Type, arg1: $BiConsumer$$Type): $CompletionStage
public "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletableFuture<(void)>
public "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>, arg2: $Executor$$Type): $CompletableFuture<(V)>
public "thenCombineAsync"(arg0: $CompletionStage$$Type, arg1: $BiFunction$$Type): $CompletionStage
public "thenCombine"(arg0: $CompletionStage$$Type, arg1: $BiFunction$$Type): $CompletionStage
public "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletionStage
public "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage
public "thenRun"(arg0: $Runnable$$Type): $CompletionStage
public "thenAcceptAsync"(arg0: $Consumer$$Type, arg1: $Executor$$Type): $CompletionStage
public "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "thenAccept"(arg0: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>): $CompletableFuture<(U)>
public "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "thenApply"(arg0: $Function$$Type): $CompletionStage
public static "runAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public static "runAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public static "completedFuture"<U>(arg0: U): $CompletableFuture<(U)>
public "getNow"(arg0: T): T
public static "anyOf"(...arg0: ($CompletableFuture$$Type<(never)>)[]): $CompletableFuture<(any)>
public "isCompletedExceptionally"(): boolean
public "obtrudeValue"(arg0: T): void
public "obtrudeException"(arg0: $Throwable$$Type): void
public "getNumberOfDependents"(): integer
public "minimalCompletionStage"(): $CompletionStage<(T)>
public "orTimeout"(arg0: long, arg1: $TimeUnit$$Type): $CompletableFuture<(T)>
public "completeOnTimeout"(arg0: T, arg1: long, arg2: $TimeUnit$$Type): $CompletableFuture<(T)>
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type, arg2: $Executor$$Type): $Executor
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type): $Executor
public static "completedStage"<U>(arg0: U): $CompletionStage<(U)>
public static "failedFuture"<U>(arg0: $Throwable$$Type): $CompletableFuture<(U)>
public static "failedStage"<U>(arg0: $Throwable$$Type): $CompletionStage<(U)>
public "newIncompleteFuture"<U>(): $CompletableFuture<(U)>
public "toCompletableFuture"(): $CompletableFuture<(T)>
public "defaultExecutor"(): $Executor
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>): $CompletableFuture<(U)>
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletableFuture<(T)>
get "done"(): boolean
get "cancelled"(): boolean
get "completedExceptionally"(): boolean
get "numberOfDependents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletableFuture$$Type<T> = ($CompletableFuture<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompletableFuture$$Original<T> = $CompletableFuture<(T)>;}
declare module "java.util.concurrent.CompletionStage" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CompletionStage$$Interface<T> {
}

export class $CompletionStage<T> implements $CompletionStage$$Interface {
 "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "thenCompose"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterEither"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(U)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "applyToEither"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterBoth"(arg0: $CompletionStage$$Type<(never)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>, arg2: $Executor$$Type): $CompletionStage<(V)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenCombine"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenRun"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenAccept"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "thenApply"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "toCompletableFuture"(): $CompletableFuture<(T)>
 "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionStage$$Type<T> = ($CompletionStage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompletionStage$$Original<T> = $CompletionStage<(T)>;}
declare module "java.util.concurrent.Executor" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $Executor$$Interface {

(arg0: $Runnable): void
}

export class $Executor implements $Executor$$Interface {
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$$Type = ((arg0: $Runnable) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Executor$$Original = $Executor;}
declare module "java.util.concurrent.BlockingQueue" {
import {$Iterator} from "java.util.Iterator"
import {$Queue$$Interface} from "java.util.Queue"
import {$Collection$$Type} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $BlockingQueue$$Interface<E> extends $Queue$$Interface<(E)> {
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export class $BlockingQueue<E> implements $BlockingQueue$$Interface {
 "remove"(arg0: any): boolean
 "put"(arg0: E): void
 "add"(arg0: E): boolean
 "contains"(arg0: any): boolean
 "poll"(arg0: long, arg1: $TimeUnit$$Type): E
 "offer"(arg0: E): boolean
 "offer"(arg0: E, arg1: long, arg2: $TimeUnit$$Type): boolean
 "take"(): E
 "drainTo"(arg0: $Collection$$Type<(E)>): integer
 "drainTo"(arg0: $Collection$$Type<(E)>, arg1: integer): integer
 "remainingCapacity"(): integer
 "remove"(): E
 "peek"(): E
 "element"(): E
 "poll"(): E
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(never)>): boolean
 "retainAll"(arg0: $Collection$$Type<(never)>): boolean
 "containsAll"(arg0: $Collection$$Type<(never)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockingQueue$$Type<E> = ($BlockingQueue<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockingQueue$$Original<E> = $BlockingQueue<(E)>;}
declare module "java.util.concurrent.ConcurrentHashMap" {
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$ToDoubleBiFunction$$Type} from "java.util.function.ToDoubleBiFunction"
import {$ToLongBiFunction$$Type} from "java.util.function.ToLongBiFunction"
import {$ToIntBiFunction$$Type} from "java.util.function.ToIntBiFunction"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$DoubleBinaryOperator$$Type} from "java.util.function.DoubleBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ConcurrentHashMap$KeySetView} from "java.util.concurrent.ConcurrentHashMap$KeySetView"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Function$$Type} from "java.util.function.Function"
import {$ConcurrentMap$$Interface} from "java.util.concurrent.ConcurrentMap"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LongBinaryOperator$$Type} from "java.util.function.LongBinaryOperator"
import {$AbstractMap} from "java.util.AbstractMap"
import {$Set} from "java.util.Set"
import {$Enumeration} from "java.util.Enumeration"

export class $ConcurrentHashMap<K, V> extends $AbstractMap<(K), (V)> implements $ConcurrentMap$$Interface<(K), (V)>, $Serializable$$Interface {
constructor()
constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: integer, arg1: float)
constructor(arg0: integer, arg1: float, arg2: integer)
constructor(arg0: integer)

public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: long, arg1: $BiConsumer$$Type<(K), (V)>): void
public "forEach"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>, arg2: $Consumer$$Type<(U)>): void
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(): $Set
public "keySet"(arg0: V): $ConcurrentHashMap$KeySetView<(K), (V)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "mappingCount"(): long
public static "newKeySet"<K>(arg0: integer): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public static "newKeySet"<K>(): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public "search"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>): U
public "reduce"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceToDouble"(arg0: long, arg1: $ToDoubleBiFunction$$Type<(K), (V)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceToLong"(arg0: long, arg1: $ToLongBiFunction$$Type<(K), (V)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceToInt"(arg0: long, arg1: $ToIntBiFunction$$Type<(K), (V)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachKey"(arg0: long, arg1: $Consumer$$Type<(K)>): void
public "forEachKey"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>, arg2: $Consumer$$Type<(U)>): void
public "searchKeys"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>): U
public "reduceKeys"(arg0: long, arg1: $BiFunction$$Type<(K), (K), (K)>): K
public "reduceKeys"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceKeysToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<(K)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceKeysToLong"(arg0: long, arg1: $ToLongFunction$$Type<(K)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceKeysToInt"(arg0: long, arg1: $ToIntFunction$$Type<(K)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachValue"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>, arg2: $Consumer$$Type<(U)>): void
public "forEachValue"(arg0: long, arg1: $Consumer$$Type<(V)>): void
public "searchValues"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>): U
public "reduceValues"(arg0: long, arg1: $BiFunction$$Type<(V), (V), (V)>): V
public "reduceValues"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceValuesToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<(V)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceValuesToLong"(arg0: long, arg1: $ToLongFunction$$Type<(V)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceValuesToInt"(arg0: long, arg1: $ToIntFunction$$Type<(V)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachEntry"(arg0: long, arg1: $Consumer$$Type<($Map$Entry<(K), (V)>)>): void
public "forEachEntry"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>, arg2: $Consumer$$Type<(U)>): void
public "searchEntries"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>): U
public "reduceEntries"(arg0: long, arg1: $BiFunction$$Type<($Map$Entry<(K), (V)>), ($Map$Entry<(K), (V)>), ($Map$Entry$$Type<(K), (V)>)>): $Map$Entry<(K), (V)>
public "reduceEntries"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceEntriesToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceEntriesToLong"(arg0: long, arg1: $ToLongFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceEntriesToInt"(arg0: long, arg1: $ToIntFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$$Type<K, V> = ($ConcurrentHashMap<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcurrentHashMap$$Original<K, V> = $ConcurrentHashMap<(K), (V)>;}
declare module "java.util.concurrent.ConcurrentHashMap$KeySetView" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Spliterator} from "java.util.Spliterator"
import {$ConcurrentHashMap} from "java.util.concurrent.ConcurrentHashMap"
import {$Set, $Set$$Interface} from "java.util.Set"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ConcurrentHashMap$CollectionView} from "java.util.concurrent.ConcurrentHashMap$CollectionView"

export class $ConcurrentHashMap$KeySetView<K, V> extends $ConcurrentHashMap$CollectionView<(K), (V), (K)> implements $Set$$Interface<(K)>, $Serializable$$Interface {
public "remove"(arg0: any): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "add"(arg0: K): boolean
public "iterator"(): $Iterator<(K)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(K)>
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public "removeAll"(arg0: $Collection$$Type): boolean
public "getMap"(): $ConcurrentHashMap
public "getMappedValue"(): V
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
public static "of"<E>(): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public static "of"<E>(...arg0: (K)[]): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K): $Set<(K)>
public static "of"<E>(arg0: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K): $Set<(K)>
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "map"(): $ConcurrentHashMap
get "mappedValue"(): V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$KeySetView$$Type<K, V> = ($ConcurrentHashMap$KeySetView<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcurrentHashMap$KeySetView$$Original<K, V> = $ConcurrentHashMap$KeySetView<(K), (V)>;}
declare module "java.util.concurrent.Flow$Subscriber" {
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Flow$Subscription$$Type} from "java.util.concurrent.Flow$Subscription"

export interface $Flow$Subscriber$$Interface<T> {
}

export class $Flow$Subscriber<T> implements $Flow$Subscriber$$Interface {
 "onError"(arg0: $Throwable$$Type): void
 "onSubscribe"(arg0: $Flow$Subscription$$Type): void
 "onComplete"(): void
 "onNext"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Flow$Subscriber$$Type<T> = ($Flow$Subscriber<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Flow$Subscriber$$Original<T> = $Flow$Subscriber<(T)>;}
declare module "java.util.concurrent.ThreadFactory" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $ThreadFactory$$Interface {

(arg0: $Runnable): $Thread$$Type
}

export class $ThreadFactory implements $ThreadFactory$$Interface {
 "newThread"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadFactory$$Type = ((arg0: $Runnable) => $Thread$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadFactory$$Original = $ThreadFactory;}
declare module "java.util.concurrent.ScheduledExecutorService" {
import {$ScheduledFuture} from "java.util.concurrent.ScheduledFuture"
import {$Collection$$Type} from "java.util.Collection"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$List} from "java.util.List"
import {$Future} from "java.util.concurrent.Future"
import {$ExecutorService$$Interface} from "java.util.concurrent.ExecutorService"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledExecutorService$$Interface extends $ExecutorService$$Interface {
get "terminated"(): boolean
}

export class $ScheduledExecutorService implements $ScheduledExecutorService$$Interface {
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(never)>
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(never)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledExecutorService$$Type = ($ScheduledExecutorService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScheduledExecutorService$$Original = $ScheduledExecutorService;}
