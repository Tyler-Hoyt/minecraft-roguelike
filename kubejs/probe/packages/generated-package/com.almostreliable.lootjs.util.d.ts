declare module "com.almostreliable.lootjs.util.NullableFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NullableFunction$$Interface<T, R> {

(arg0: T): R
}

export class $NullableFunction<T, R> implements $NullableFunction$$Interface {
 "apply"(arg0: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullableFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NullableFunction$$Original<T, R> = $NullableFunction<(T), (R)>;}
declare module "com.almostreliable.lootjs.util.ListHolder" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ArrayList} from "java.util.ArrayList"
import {$Spliterator} from "java.util.Spliterator"
import {$List$$Type} from "java.util.List"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ListHolder<W, T> implements $Iterable$$Interface<(W)> {
constructor(arg0: $List$$Type<(T)>)
constructor()

public "remove"(arg0: integer): W
public "size"(): integer
public "get"(arg0: integer): W
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: integer, arg1: W): void
public "add"(arg0: W): boolean
public "iterator"(): $Iterator<(W)>
public "set"(arg0: integer, arg1: W): W
public static "asArrayList"<T>(arg0: $List$$Type<(T)>): $ArrayList<(T)>
public "spliterator"(): $Spliterator<(W)>
public "forEach"(arg0: $Consumer$$Type<(W)>): void
[Symbol.iterator](): IterableIterator<W>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListHolder$$Type<W, T> = ($ListHolder<(W), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListHolder$$Original<W, T> = $ListHolder<(W), (T)>;}
declare module "com.almostreliable.lootjs.util.DebugInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugInfo {
constructor()

public "add"(arg0: StringJS): void
public "release"(): void
public "push"(): void
public "pop"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugInfo$$Type = ($DebugInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugInfo$$Original = $DebugInfo;}
declare module "com.almostreliable.lootjs.util.BlockFilter" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream} from "java.util.stream.Stream"
import {$BlockStatePredicate$$Type} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockFilter$$Interface extends $Iterable$$Interface<($Block)>, $Predicate$$Interface<($BlockState)> {
[Symbol.iterator](): IterableIterator<$Block>;
}

export class $BlockFilter implements $BlockFilter$$Interface {
 "stream"(): $Stream<($Block)>
 "iterator"(): $Iterator<($Block)>
 "spliterator"(): $Spliterator<($Block)>
 "forEach"(arg0: $Consumer$$Type<($Block)>): void
 "test"(arg0: $BlockState$$Type): boolean
 "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFilter$$Type = (($BlockStatePredicate$$Type));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFilter$$Original = $BlockFilter;}
