declare module "twilightforest.util.iterators.RectangleLatticeIterator$TriangularLatticeConfig" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockPos$MutableBlockPos} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ZippedIterator} from "twilightforest.util.iterators.ZippedIterator"
import {$Record} from "java.lang.Record"

export class $RectangleLatticeIterator$TriangularLatticeConfig extends $Record {
static readonly "CODEC": $Codec<($RectangleLatticeIterator$TriangularLatticeConfig)>
static readonly "DEFAULT": $RectangleLatticeIterator$TriangularLatticeConfig

constructor(spacing: float, xOffset: float, zOffset: float, xSpacing: float, zSpacing: float)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "xSpacing"(): float
public static "fromNBT"(arg0: $CompoundTag$$Type): $RectangleLatticeIterator$TriangularLatticeConfig
public "boundedGrid"(arg0: $BoundingBox$$Type, arg1: integer): $ZippedIterator<($BlockPos$MutableBlockPos)>
public "xOffset"(): float
public "zOffset"(): float
public "spacing"(): float
public "zSpacing"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RectangleLatticeIterator$TriangularLatticeConfig$$Type = ({"zSpacing"?: float, "xOffset"?: float, "zOffset"?: float, "spacing"?: float, "xSpacing"?: float}) | ([zSpacing?: float, xOffset?: float, zOffset?: float, spacing?: float, xSpacing?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RectangleLatticeIterator$TriangularLatticeConfig$$Original = $RectangleLatticeIterator$TriangularLatticeConfig;}
declare module "twilightforest.util.iterators.ZippedIterator" {
import {$Iterable$$Type, $Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type, $Iterator$$Interface} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ZippedIterator<E> implements $Iterator$$Interface<(E)>, $Iterable$$Interface<(E)> {
constructor(arg0: $Iterator$$Type<(E)>, arg1: $Iterator$$Type<(E)>)

public "iterator"(): $Iterator<(E)>
public "hasNext"(): boolean
public "next"(): E
public static "fromIterables"<E>(arg0: $Iterable$$Type<(E)>, arg1: $Iterable$$Type<(E)>): $ZippedIterator<(E)>
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZippedIterator$$Type<E> = ($ZippedIterator<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZippedIterator$$Original<E> = $ZippedIterator<(E)>;}
