declare module "net.minecraft.core.NonNullList" {
import {$Collection$$Type} from "java.util.Collection"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$AbstractList} from "java.util.AbstractList"

export class $NonNullList<E> extends $AbstractList<(E)> {
public "remove"(arg0: integer): E
public "size"(): integer
public "get"(arg0: integer): E
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $NonNullList<(E)>
public "clear"(): void
public "add"(arg0: integer, arg1: E): void
public static "of"<E>(arg0: E, ...arg1: (E)[]): $NonNullList<(E)>
public "set"(arg0: integer, arg1: E): E
public static "create"<E>(): $NonNullList<(E)>
public static "codecOf"<E>(arg0: $Codec$$Type<(E)>): $Codec<($NonNullList<(E)>)>
public static "withSize"<E>(arg0: integer, arg1: E): $NonNullList<(E)>
public static "createWithCapacity"<E>(arg0: integer): $NonNullList<(E)>
public "remove"(arg0: any): boolean
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullList$$Type<E> = ($NonNullList<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullList$$Original<E> = $NonNullList<(E)>;}
declare module "net.minecraft.core.Direction$Axis" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Direction$Plane} from "net.minecraft.core.Direction$Plane"

export class $Direction$Axis extends $Enum<($Direction$Axis)> implements $StringRepresentable$$Interface, $Predicate$$Interface<($Direction)> {
static readonly "CODEC": $StringRepresentable$EnumCodec<($Direction$Axis)>
static readonly "X": $Direction$Axis
static readonly "Y": $Direction$Axis
static readonly "Z": $Direction$Axis
static readonly "VALUES": ($Direction$Axis)[]

public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($Direction$Axis)[]
public "test"(arg0: $Direction$$Type): boolean
public "test"(arg0: any): boolean
public static "valueOf"(arg0: StringJS): $Direction$Axis
public static "getRandom"(arg0: $RandomSource$$Type): $Direction$Axis
public "getSerializedName"(): StringJS
public "isHorizontal"(): boolean
public static "byName"(arg0: StringJS): $Direction$Axis
public "choose"(arg0: integer, arg1: integer, arg2: integer): integer
public "choose"(arg0: double, arg1: double, arg2: double): double
public "isVertical"(): boolean
public "getPlane"(): $Direction$Plane
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "or"(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public "negate"(): $Predicate<($Direction)>
public "and"(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public static "not"<T>(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public static "isEqual"<T>(arg0: any): $Predicate<($Direction)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "horizontal"(): boolean
get "vertical"(): boolean
get "plane"(): $Direction$Plane
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Axis$$Type = (("x") | ("y") | ("z"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction$Axis$$Original = $Direction$Axis;}
declare module "net.minecraft.core.LayeredRegistryAccess" {
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$List$$Type} from "java.util.List"

export class $LayeredRegistryAccess<T> {
constructor(arg0: $List$$Type<(T)>)

public "getLayer"(arg0: T): $RegistryAccess$Frozen
public "compositeAccess"(): $RegistryAccess$Frozen
public "getAccessForLoading"(arg0: T): $RegistryAccess$Frozen
public "getAccessFrom"(arg0: T): $RegistryAccess$Frozen
public "replaceFrom"(arg0: T, ...arg1: ($RegistryAccess$Frozen$$Type)[]): $LayeredRegistryAccess<(T)>
public "replaceFrom"(arg0: T, arg1: $List$$Type<($RegistryAccess$Frozen$$Type)>): $LayeredRegistryAccess<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredRegistryAccess$$Type<T> = ($LayeredRegistryAccess<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredRegistryAccess$$Original<T> = $LayeredRegistryAccess<(T)>;}
declare module "net.minecraft.core.RegistrySetBuilder" {
import {$RegistrySetBuilder$RegistryBootstrap$$Type} from "net.minecraft.core.RegistrySetBuilder$RegistryBootstrap"
import {$RegistrySetBuilder$PatchedRegistries} from "net.minecraft.core.RegistrySetBuilder$PatchedRegistries"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$List} from "java.util.List"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Cloner$Factory$$Type} from "net.minecraft.core.Cloner$Factory"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $RegistrySetBuilder {
constructor()

public "add"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Lifecycle$$Type, arg2: $RegistrySetBuilder$RegistryBootstrap$$Type<(T)>): $RegistrySetBuilder
public "add"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $RegistrySetBuilder$RegistryBootstrap$$Type<(T)>): $RegistrySetBuilder
public "build"(arg0: $RegistryAccess$$Type): $HolderLookup$Provider
public "buildPatch"(arg0: $RegistryAccess$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Cloner$Factory$$Type): $RegistrySetBuilder$PatchedRegistries
public "getEntryKeys"(): $List<($ResourceKey<($Registry<(never)>)>)>
get "entryKeys"(): $List<($ResourceKey<($Registry<(never)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySetBuilder$$Type = ($RegistrySetBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrySetBuilder$$Original = $RegistrySetBuilder;}
declare module "net.minecraft.core.Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Position$$Interface {
}

export class $Position implements $Position$$Interface {
 "x"(): double
 "z"(): double
 "y"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$$Type = ($Position);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Position$$Original = $Position;}
declare module "net.minecraft.core.Rotations" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $Rotations {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Rotations)>

constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: $ListTag$$Type)

public "equals"(arg0: any): boolean
public "save"(): $ListTag
public "getY"(): float
public "getZ"(): float
public "getX"(): float
public "getWrappedZ"(): float
public "getWrappedY"(): float
public "getWrappedX"(): float
get "y"(): float
get "z"(): float
get "x"(): float
get "wrappedZ"(): float
get "wrappedY"(): float
get "wrappedX"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotations$$Type = ($Rotations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rotations$$Original = $Rotations;}
declare module "net.minecraft.core.BlockPos" {
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$BlockPos$MutableBlockPos} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Stream} from "java.util.stream.Stream"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $BlockPos extends $Vec3i {
static readonly "ZERO": $BlockPos
static readonly "CODEC": $Codec<($BlockPos)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockPos)>
static readonly "PACKED_Y_LENGTH": integer

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $Vec3i$$Type)

public static "min"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $BlockPos
public static "max"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $BlockPos
public static "of"(arg0: long): $BlockPos
public "offset"(arg0: $Vec3i$$Type): $BlockPos
public "offset"(arg0: integer, arg1: integer, arg2: integer): $Vec3i
public static "offset"(arg0: long, arg1: $Direction$$Type): long
public static "offset"(arg0: long, arg1: integer, arg2: integer, arg3: integer): long
public "multiply"(arg0: integer): $BlockPos
public "rotate"(arg0: $Rotation$$Type): $BlockPos
public "subtract"(arg0: $Vec3i$$Type): $Vec3i
public "relative"(arg0: $Direction$$Type, arg1: integer): $BlockPos
public "relative"(arg0: $Direction$$Type): $BlockPos
public "relative"(arg0: $Direction$Axis$$Type, arg1: integer): $BlockPos
public static "betweenClosedStream"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Stream<($BlockPos)>
public static "betweenClosedStream"(arg0: $AABB$$Type): $Stream<($BlockPos)>
public static "betweenClosedStream"(arg0: $BoundingBox$$Type): $Stream<($BlockPos)>
public static "betweenClosedStream"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $Stream<($BlockPos)>
public static "getY"(arg0: long): integer
public "getBottomCenter"(): $Vec3
public "getCenter"(): $Vec3
public static "containing"(arg0: $Position$$Type): $BlockPos
public static "containing"(arg0: double, arg1: double, arg2: double): $BlockPos
public "atY"(arg0: integer): $BlockPos
public "west"(): $BlockPos
public "west"(arg0: integer): $Vec3i
public "east"(arg0: integer): $BlockPos
public "east"(): $BlockPos
public "south"(arg0: integer): $Vec3i
public "south"(): $BlockPos
public "north"(arg0: integer): $Vec3i
public "north"(): $Vec3i
public static "getFlatIndex"(arg0: long): long
/**
 * 
 * @deprecated
 */
public static "squareOutSouthEast"(arg0: $BlockPos$$Type): $Stream<($BlockPos)>
public static "spiralAround"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Direction$$Type, arg3: $Direction$$Type): $Iterable<($BlockPos$MutableBlockPos)>
public static "withinManhattan"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer, arg3: integer): $Iterable<($BlockPos)>
public static "betweenClosed"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $Iterable<($BlockPos)>
public static "betweenClosed"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Iterable<($BlockPos)>
public static "findClosestMatch"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer, arg3: $Predicate$$Type<($BlockPos)>): $Optional<($BlockPos)>
public "immutable"(): $BlockPos
public static "getZ"(arg0: long): integer
public static "getX"(arg0: long): integer
public "mutable"(): $BlockPos$MutableBlockPos
public static "randomInCube"(arg0: $RandomSource$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): $Iterable<($BlockPos)>
public static "randomBetweenClosed"(arg0: $RandomSource$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): $Iterable<($BlockPos)>
public "clampLocationWithin"(arg0: $Vec3$$Type): $Vec3
public static "withinManhattanStream"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer, arg3: integer): $Stream<($BlockPos)>
public static "breadthFirstTraversal"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer, arg3: $BiConsumer$$Type<($BlockPos), ($Consumer<($BlockPos)>)>, arg4: $Predicate$$Type<($BlockPos)>): integer
public "cross"(arg0: $Vec3i$$Type): $BlockPos
public "asLong"(): long
public static "asLong"(arg0: integer, arg1: integer, arg2: integer): long
public "above"(arg0: integer): $BlockPos
public "above"(): $BlockPos
public "below"(): $BlockPos
public "below"(arg0: integer): $BlockPos
get "bottomCenter"(): $Vec3
get "center"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPos$$Type = ([x: integer, y: integer, z: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPos$$Original = $BlockPos;}
declare module "net.minecraft.core.Direction" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Collection} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Vector3f} from "org.joml.Vector3f"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$Stream} from "java.util.stream.Stream"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable$$Interface {
static readonly "DOWN": $Direction
static readonly "CODEC": $StringRepresentable$EnumCodec<($Direction)>
static readonly "NORTH": $Direction
static readonly "WEST": $Direction
static readonly "VERTICAL_CODEC": $Codec<($Direction)>
static readonly "BY_ID": $IntFunction<($Direction)>
static readonly "UP": $Direction
static readonly "SOUTH": $Direction
static readonly "EAST": $Direction
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Direction)>

public "getName"(): StringJS
public static "get"(arg0: $Direction$AxisDirection$$Type, arg1: $Direction$Axis$$Type): $Direction
public "toString"(): StringJS
public static "values"(): ($Direction)[]
public static "valueOf"(arg0: StringJS): $Direction
public static "stream"(): $Stream<($Direction)>
public "step"(): $Vector3f
public static "rotate"(arg0: $Matrix4f$$Type, arg1: $Direction$$Type): $Direction
public "getY"(): integer
public "getOpposite"(): $Direction
public "getAxisDirection"(): $Direction$AxisDirection
public static "getRandom"(arg0: $RandomSource$$Type): $Direction
public "getSerializedName"(): StringJS
public static "orderedByNearest"(arg0: $Entity$$Type): ($Direction)[]
public "getIndex"(): integer
public static "getFacingAxis"(arg0: $Entity$$Type, arg1: $Direction$Axis$$Type): $Direction
public "isFacingAngle"(arg0: float): boolean
public static "allShuffled"(arg0: $RandomSource$$Type): $Collection<($Direction)>
public static "from3DDataValue"(arg0: integer): $Direction
public "getHorizontalIndex"(): integer
public "getClockWise"(arg0: $Direction$Axis$$Type): $Direction
public "getClockWise"(): $Direction
public static "from2DDataValue"(arg0: integer): $Direction
public "getPitch"(): float
public static "byName"(arg0: StringJS): $Direction
public static "getNearest"(arg0: $Vec3$$Type): $Direction
public static "getNearest"(arg0: float, arg1: float, arg2: float): $Direction
public static "getNearest"(arg0: double, arg1: double, arg2: double): $Direction
public "getAxis"(): $Direction$Axis
public static "fromYRot"(arg0: double): $Direction
public "getX"(): integer
public "getZ"(): integer
public static "fromDelta"(arg0: integer, arg1: integer, arg2: integer): $Direction
public "getYaw"(): float
public "getNormal"(): $Vec3i
public "getRotation"(): $Quaternionf
public static "fromAxisAndDirection"(arg0: $Direction$Axis$$Type, arg1: $Direction$AxisDirection$$Type): $Direction
public "getCounterClockWise"(arg0: $Direction$Axis$$Type): $Direction
public "getCounterClockWise"(): $Direction
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "name"(): StringJS
get "y"(): integer
get "opposite"(): $Direction
get "axisDirection"(): $Direction$AxisDirection
get "serializedName"(): StringJS
get "index"(): integer
get "horizontalIndex"(): integer
get "clockWise"(): $Direction
get "pitch"(): float
get "axis"(): $Direction$Axis
get "x"(): integer
get "z"(): integer
get "yaw"(): float
get "normal"(): $Vec3i
get "rotation"(): $Quaternionf
get "counterClockWise"(): $Direction
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$$Type = (("down") | ("up") | ("north") | ("south") | ("west") | ("east"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction$$Original = $Direction;}
declare module "net.minecraft.core.IdMapper" {
import {$Iterator} from "java.util.Iterator"
import {$Spliterator} from "java.util.Spliterator"
import {$IdMap$$Interface} from "net.minecraft.core.IdMap"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $IdMapper<T> implements $IdMap$$Interface<(T)> {
constructor()
constructor(arg0: integer)

public "size"(): integer
public "add"(arg0: T): void
public "iterator"(): $Iterator<(T)>
public "contains"(arg0: integer): boolean
public "getId"(arg0: T): integer
public "addMapping"(arg0: T, arg1: integer): void
public "byId"(arg0: integer): T
public "getIdOrThrow"(arg0: T): integer
public "byIdOrThrow"(arg0: integer): T
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMapper$$Type<T> = ($IdMapper<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdMapper$$Original<T> = $IdMapper<(T)>;}
declare module "net.minecraft.core.Direction$Plane" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Enum} from "java.lang.Enum"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Direction$Plane extends $Enum<($Direction$Plane)> implements $Iterable$$Interface<($Direction)>, $Predicate$$Interface<($Direction)> {
static readonly "VERTICAL": $Direction$Plane
static readonly "HORIZONTAL": $Direction$Plane

public "length"(): integer
public static "values"(): ($Direction$Plane)[]
public "test"(arg0: any): boolean
public "test"(arg0: $Direction$$Type): boolean
public static "valueOf"(arg0: StringJS): $Direction$Plane
public "iterator"(): $Iterator<($Direction)>
public "stream"(): $Stream<($Direction)>
public "shuffledCopy"(arg0: $RandomSource$$Type): $List<($Direction)>
public "getRandomAxis"(arg0: $RandomSource$$Type): $Direction$Axis
public "getRandomDirection"(arg0: $RandomSource$$Type): $Direction
public "spliterator"(): $Spliterator<($Direction)>
public "forEach"(arg0: $Consumer$$Type<($Direction)>): void
public "or"(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public "negate"(): $Predicate<($Direction)>
public "and"(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public static "not"<T>(arg0: $Predicate$$Type<($Direction)>): $Predicate<($Direction)>
public static "isEqual"<T>(arg0: any): $Predicate<($Direction)>
[Symbol.iterator](): IterableIterator<$Direction>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$Plane$$Type = (("horizontal") | ("vertical"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction$Plane$$Original = $Direction$Plane;}
declare module "net.minecraft.core.Direction$AxisDirection" {
import {$Enum} from "java.lang.Enum"

export class $Direction$AxisDirection extends $Enum<($Direction$AxisDirection)> {
static readonly "POSITIVE": $Direction$AxisDirection
static readonly "NEGATIVE": $Direction$AxisDirection

public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($Direction$AxisDirection)[]
public static "valueOf"(arg0: StringJS): $Direction$AxisDirection
public "getStep"(): integer
public "opposite"(): $Direction$AxisDirection
get "name"(): StringJS
get "step"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction$AxisDirection$$Type = (("positive") | ("negative"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction$AxisDirection$$Original = $Direction$AxisDirection;}
declare module "net.minecraft.core.RegistrationInfo" {
import {$KnownPack, $KnownPack$$Type} from "net.minecraft.server.packs.repository.KnownPack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Lifecycle, $Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$Record} from "java.lang.Record"

export class $RegistrationInfo extends $Record {
static readonly "BUILT_IN": $RegistrationInfo

constructor(arg0: ($KnownPack$$Type)?, arg1: $Lifecycle$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "lifecycle"(): $Lifecycle
public "knownPackInfo"(): $Optional<($KnownPack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrationInfo$$Type = ({"lifecycle"?: $Lifecycle$$Type, "knownPackInfo"?: ($KnownPack$$Type)?}) | ([lifecycle?: $Lifecycle$$Type, knownPackInfo?: ($KnownPack$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrationInfo$$Original = $RegistrationInfo;}
declare module "net.minecraft.core.RegistryAccess$Frozen" {
import {$RegistryAccess$RegistryEntry} from "net.minecraft.core.RegistryAccess$RegistryEntry"
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$RegistryOps} from "net.minecraft.resources.RegistryOps"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$Lifecycle} from "com.mojang.serialization.Lifecycle"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$RegistryAccess$$Interface} from "net.minecraft.core.RegistryAccess"

export interface $RegistryAccess$Frozen$$Interface extends $RegistryAccess$$Interface {
}

export class $RegistryAccess$Frozen implements $RegistryAccess$Frozen$$Interface {
 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($HolderLookup$RegistryLookup<(T)>)>
 "freeze"(): $RegistryAccess$Frozen
 "registries"(): $Stream<($RegistryAccess$RegistryEntry<(never)>)>
 "listRegistries"(): $Stream<($ResourceKey<($Registry<(never)>)>)>
 "registry"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($Registry<(E)>)>
 "allRegistriesLifecycle"(): $Lifecycle
static "fromRegistryOfRegistries"(arg0: $Registry$$Type<($Registry$$Type<(never)>)>): $RegistryAccess$Frozen
 "registryOrThrow"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Registry<(E)>
static "create"(arg0: $Stream$$Type<($HolderLookup$RegistryLookup$$Type<(never)>)>): $HolderLookup$Provider
 "asGetterLookup"(): $HolderGetter$Provider
 "lookupOrThrow"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup$RegistryLookup<(T)>
 "createSerializationContext"<V>(arg0: $DynamicOps$$Type<(V)>): $RegistryOps<(V)>
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryAccess$Frozen$$Type = ($RegistryAccess$Frozen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryAccess$Frozen$$Original = $RegistryAccess$Frozen;}
declare module "net.minecraft.core.HolderSet" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$IHolderSetExtension$SerializationType} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$HolderSet$Direct} from "net.minecraft.core.HolderSet$Direct"
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$IHolderSetExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"

export interface $HolderSet$$Interface<T> extends $Iterable$$Interface<($Holder<(T)>)>, $IHolderSetExtension$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<$Holder<(T)>>;
}

export class $HolderSet<T> implements $HolderSet$$Interface {
 "size"(): integer
 "get"(arg0: integer): $Holder<(T)>
 "stream"(): $Stream<($Holder<(T)>)>
 "contains"(arg0: $Holder$$Type<(T)>): boolean
static "empty"<T>(): $HolderSet<(T)>
 "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
static "direct"<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
static "direct"<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
static "emptyNamed"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
 "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "iterator"(): $Iterator<($Holder<(T)>)>
 "spliterator"(): $Spliterator<($Holder<(T)>)>
 "forEach"(arg0: $Consumer$$Type<($Holder<(T)>)>): void
 "serializationType"(): $IHolderSetExtension$SerializationType
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSet$$Type<T> = (((Special.LiteralOf<(T)>)[]) | ((`#${Special.TagOf<T>}`)[]) | ($HolderSet<(T)>));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderSet$$Original<T> = $HolderSet<(T)>;}
declare module "net.minecraft.core.HolderSet$Named" {
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderSet$Direct} from "net.minecraft.core.HolderSet$Direct"
import {$HolderSet$ListBacked} from "net.minecraft.core.HolderSet$ListBacked"
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet} from "net.minecraft.core.HolderSet"

export class $HolderSet$Named<T> extends $HolderSet$ListBacked<(T)> {
 "contents": $List<($Holder<(T)>)>

public "toString"(): StringJS
public "contains"(arg0: $Holder$$Type<(T)>): boolean
public "key"(): $TagKey<(T)>
public "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
public "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
public "unwrapKey"(): $Optional<($TagKey<(T)>)>
public "addInvalidationListener"(arg0: $Runnable$$Type): void
public static "empty"<T>(): $HolderSet<(T)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSet$Named$$Type<T> = ($HolderSet$Named<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderSet$Named$$Original<T> = $HolderSet$Named<(T)>;}
declare module "net.minecraft.core.HolderLookup$RegistryLookup" {
import {$HolderLookup$$Interface} from "net.minecraft.core.HolderLookup"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderOwner$$Type, $HolderOwner$$Interface} from "net.minecraft.core.HolderOwner"
import {$Registry} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$Lifecycle} from "com.mojang.serialization.Lifecycle"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"

export interface $HolderLookup$RegistryLookup$$Interface<T> extends $HolderLookup$$Interface<(T)>, $HolderOwner$$Interface<(T)> {
}

export class $HolderLookup$RegistryLookup<T> implements $HolderLookup$RegistryLookup$$Interface {
 "key"(): $ResourceKey<($Registry<(T)>)>
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "registryLifecycle"(): $Lifecycle
 "filterFeatures"(arg0: $FeatureFlagSet$$Type): $HolderLookup$RegistryLookup<(T)>
 "filterElements"(arg0: $Predicate$$Type<(T)>): $HolderLookup$RegistryLookup<(T)>
 "listTagIds"(): $Stream<($TagKey<(T)>)>
 "listTags"(): $Stream<($HolderSet$Named<(T)>)>
 "listElements"(): $Stream<($Holder$Reference<(T)>)>
 "listElementIds"(): $Stream<($ResourceKey<(T)>)>
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "get"(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "get"(arg0: $TagKey$$Type<(T)>): $Optional<($HolderSet$Named<(T)>)>
 "getOrThrow"(arg0: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
 "getOrThrow"(arg0: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderLookup$RegistryLookup$$Type<T> = ($HolderLookup$RegistryLookup<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderLookup$RegistryLookup$$Original<T> = $HolderLookup$RegistryLookup<(T)>;}
declare module "net.minecraft.core.GlobalPos" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $GlobalPos extends $Record {
static readonly "CODEC": $Codec<($GlobalPos)>
static readonly "MAP_CODEC": $MapCodec<($GlobalPos)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($GlobalPos)>

constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type): $GlobalPos
public "pos"(): $BlockPos
public "dimension"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalPos$$Type = ({"dimension"?: $ResourceKey$$Type<($Level)>, "pos"?: $BlockPos$$Type}) | ([dimension?: $ResourceKey$$Type<($Level)>, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlobalPos$$Original = $GlobalPos;}
declare module "net.minecraft.core.IdMap" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Spliterator} from "java.util.Spliterator"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IdMap$$Interface<T> extends $Iterable$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<T>;
}

export class $IdMap<T> implements $IdMap$$Interface {
static readonly "DEFAULT": integer

 "size"(): integer
 "getId"(arg0: T): integer
 "getIdOrThrow"(arg0: T): integer
 "byIdOrThrow"(arg0: integer): T
 "byId"(arg0: integer): T
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMap$$Type<T> = ($IdMap<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdMap$$Original<T> = $IdMap<(T)>;}
declare module "net.minecraft.core.HolderSet$ListBacked" {
import {$Iterator} from "java.util.Iterator"
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$IHolderSetExtension$SerializationType} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$HolderSet$Direct} from "net.minecraft.core.HolderSet$Direct"
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Interface} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"

export class $HolderSet$ListBacked<T> implements $HolderSet$$Interface<(T)> {
constructor()

public "size"(): integer
public "get"(arg0: integer): $Holder<(T)>
public "iterator"(): $Iterator<($Holder<(T)>)>
public "stream"(): $Stream<($Holder<(T)>)>
public "spliterator"(): $Spliterator<($Holder<(T)>)>
public "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
public "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
public "contains"(arg0: $Holder$$Type<(T)>): boolean
public static "empty"<T>(): $HolderSet<(T)>
public "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
public "unwrapKey"(): $Optional<($TagKey<(T)>)>
public "forEach"(arg0: $Consumer$$Type<($Holder<(T)>)>): void
public "serializationType"(): $IHolderSetExtension$SerializationType
public "addInvalidationListener"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$Holder<(T)>>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSet$ListBacked$$Type<T> = ($HolderSet$ListBacked<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderSet$ListBacked$$Original<T> = $HolderSet$ListBacked<(T)>;}
declare module "net.minecraft.core.RegistryAccess$RegistryEntry" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"

export class $RegistryAccess$RegistryEntry<T> extends $Record {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Registry$$Type<(T)>)

public "value"(): $Registry<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryAccess$RegistryEntry$$Type<T> = ({"value"?: $Registry$$Type<(T)>, "key"?: $ResourceKey$$Type<($Registry<(T)>)>}) | ([value?: $Registry$$Type<(T)>, key?: $ResourceKey$$Type<($Registry<(T)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryAccess$RegistryEntry$$Original<T> = $RegistryAccess$RegistryEntry<(T)>;}
declare module "net.minecraft.core.Cloner$Factory" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Cloner} from "net.minecraft.core.Cloner"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $Cloner$Factory {
constructor()

public "cloner"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Cloner<(T)>
public "addCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<(T)>): $Cloner$Factory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cloner$Factory$$Type = ($Cloner$Factory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cloner$Factory$$Original = $Cloner$Factory;}
declare module "net.minecraft.core.Registry" {
import {$Iterable} from "java.lang.Iterable"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$List$$Type} from "java.util.List"
import {$IRegistryExtension$$Interface} from "net.neoforged.neoforge.registries.IRegistryExtension"
import {$HolderOwner} from "net.minecraft.core.HolderOwner"
import {$Map$Entry} from "java.util.Map$Entry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$Iterator} from "java.util.Iterator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$IdMap, $IdMap$$Interface} from "net.minecraft.core.IdMap"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable, $Keyable$$Interface} from "com.mojang.serialization.Keyable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistrationInfo} from "net.minecraft.core.RegistrationInfo"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$Lifecycle} from "com.mojang.serialization.Lifecycle"

export interface $Registry$$Interface<T> extends $Keyable$$Interface, $IdMap$$Interface<(T)>, $IRegistryExtension$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<T>;
get "tags"(): $Stream<($Pair<($TagKey<(T)>), ($HolderSet$Named<(T)>)>)>
get "any"(): $Optional<($Holder$Reference<(T)>)>
get "tagNames"(): $Stream<($TagKey<(T)>)>
get "maxId"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Root
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.RootTag
}

export class $Registry<T> implements $Registry$$Interface {
 "get"(arg0: $ResourceLocation$$Type): T
 "get"(arg0: $ResourceKey$$Type<(T)>): T
 "stream"(): $Stream<(T)>
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $ResourceLocation
static "register"<T>(arg0: $Registry$$Type<(T)>, arg1: StringJS, arg2: T): T
static "register"<V, T>(arg0: $Registry$$Type<(V)>, arg1: $ResourceKey$$Type<(V)>, arg2: T): T
static "register"<V, T>(arg0: $Registry$$Type<(V)>, arg1: $ResourceLocation$$Type, arg2: T): T
 "key"(): $ResourceKey<($Registry<(T)>)>
 "containsKey"(arg0: $ResourceLocation$$Type): boolean
 "containsKey"(arg0: $ResourceKey$$Type<(T)>): boolean
 "getId"(arg0: T): integer
 "keys"<U>(arg0: $DynamicOps$$Type<(U)>): $Stream<(U)>
 "keySet"(): $Set<($ResourceLocation)>
 "freeze"(): $Registry<(T)>
 "getTag"(arg0: $TagKey$$Type<(T)>): $Optional<($HolderSet$Named<(T)>)>
 "asHolderIdMap"(): $IdMap<($Holder<(T)>)>
 "wrapAsHolder"(arg0: T): $Holder<(T)>
 "getRandom"(arg0: $RandomSource$$Type): $Optional<($Holder$Reference<(T)>)>
 "getTags"(): $Stream<($Pair<($TagKey<(T)>), ($HolderSet$Named<(T)>)>)>
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "getHolder"(arg0: $ResourceLocation$$Type): $Optional<($Holder$Reference<(T)>)>
 "getHolder"(arg0: integer): $Optional<($Holder$Reference<(T)>)>
 "createIntrusiveHolder"(arg0: T): $Holder$Reference<(T)>
 "registryLifecycle"(): $Lifecycle
 "asLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getOptional"(arg0: $ResourceLocation$$Type): $Optional<(T)>
 "getOptional"(arg0: $ResourceKey$$Type<(T)>): $Optional<(T)>
 "getHolderOrThrow"(arg0: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
 "getAny"(): $Optional<($Holder$Reference<(T)>)>
 "bindTags"(arg0: $Map$$Type<($TagKey$$Type<(T)>), ($List$$Type<($Holder$$Type<(T)>)>)>): void
 "holders"(): $Stream<($Holder$Reference<(T)>)>
 "resetTags"(): void
 "getTagNames"(): $Stream<($TagKey<(T)>)>
 "getRandomElementOf"(arg0: $TagKey$$Type<(T)>, arg1: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "holderByNameCodec"(): $Codec<($Holder<(T)>)>
 "getTagOrEmpty"(arg0: $TagKey$$Type<(T)>): $Iterable<($Holder<(T)>)>
 "registrationInfo"(arg0: $ResourceKey$$Type<(T)>): $Optional<($RegistrationInfo)>
 "byNameCodec"(): $Codec<(T)>
 "getResourceKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "holderOwner"(): $HolderOwner<(T)>
 "getOrCreateTag"(arg0: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
static "registerForHolder"<T>(arg0: $Registry$$Type<(T)>, arg1: $ResourceLocation$$Type, arg2: T): $Holder$Reference<(T)>
static "registerForHolder"<T>(arg0: $Registry$$Type<(T)>, arg1: $ResourceKey$$Type<(T)>, arg2: T): $Holder$Reference<(T)>
 "asTagAddingLookup"(): $HolderLookup$RegistryLookup<(T)>
 "registryKeySet"(): $Set<($ResourceKey<(T)>)>
 "getOrThrow"(arg0: $ResourceKey$$Type<(T)>): T
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
 "size"(): integer
 "getIdOrThrow"(arg0: T): integer
 "byIdOrThrow"(arg0: integer): T
 "byId"(arg0: integer): T
 "resolve"(arg0: $ResourceLocation$$Type): $ResourceLocation
 "resolve"(arg0: $ResourceKey$$Type<(T)>): $ResourceKey<(T)>
 "getId"(arg0: $ResourceKey$$Type<(T)>): integer
 "getId"(arg0: $ResourceLocation$$Type): integer
 "containsValue"(arg0: T): boolean
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
 "getMaxId"(): integer
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "doesSync"(): boolean
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
 "addCallback"<C extends $RegistryCallback<(object)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "getKeyOrNull"(arg0: T): $ResourceLocation
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registry$$Type<T> = (("forbidden_arcanus:enhancer/effect_condition") | ("twilight:magic_paintings") | ("minecraft:item_sub_predicate_type") | ("minecraft:damage_type") | ("twilight:chunk_blanket_processors") | ("minecraft:trim_material") | ("apothic_spawners:spawner_stat") | ("minecraft:fluid") | ("minecraft:potion") | ("twilight:biome_layer_stack") | ("forbidden_arcanus:enhancer/definition") | ("minecraft:block") | ("minecraft:position_source_type") | ("minecraft:loot_score_provider_type") | ("minecraft:worldgen/carver") | ("minecraft:worldgen/material_condition") | ("forbidden_arcanus:hephaestus_forge/ritual") | ("forbidden_arcanus:magic_circle") | ("minecraft:wolf_variant") | ("minecraft:trigger_type") | ("minecraft:trim_pattern") | ("minecraft:enchantment") | ("twilight:biome_terrain_data") | ("neoforge:entity_data_serializers") | ("forbidden_arcanus:pedestal_effect") | ("forbidden_arcanus:residue_type") | ("ars_nouveau:particle_properties") | ("forbidden_arcanus:mundabitur_interaction") | ("minecraft:height_provider_type") | ("irons_spellbooks:schools") | ("minecraft:block_predicate_type") | ("malum:spirit_types") | ("minecraft:sound_event") | ("twilight:structure_speleothem_settings") | ("minecraft:number_format_type") | ("paraglider:bargain_preview_type") | ("malum:geas_types") | ("minecraft:rule_test") | ("minecraft:enchantment_entity_effect_type") | ("malum:spirit_rite_types") | ("apotheosis:loot_category") | ("minecraft:item") | ("minecraft:enchantment_level_based_value_type") | ("minecraft:enchantment_effect_component_type") | ("ars_nouveau:particle_timelines") | ("minecraft:float_provider_type") | ("forbidden_arcanus:research/knowledge") | ("minecraft:creative_mode_tab") | ("minecraft:worldgen/biome") | ("paraglider:wind_sources") | ("malum:rite_effect_types") | ("minecraft:recipe_serializer") | ("minecraft:worldgen/pool_alias_binding") | ("minecraft:worldgen/chunk_generator") | ("minecraft:memory_module_type") | ("minecraft:worldgen/configured_feature") | ("forbidden_arcanus:enhancer/effect") | ("minecraft:loot_number_provider_type") | ("minecraft:worldgen/structure_pool_element") | ("moonlight:custom_map_data_types") | ("minecraft:worldgen/configured_carver") | ("minecraft:stat_type") | ("minecraft:recipe_type") | ("minecraft:worldgen/foliage_placer_type") | ("minecraft:activity") | ("minecraft:worldgen/feature") | ("minecraft:sensor_type") | ("minecraft:rule_block_entity_modifier") | ("paraglider:bargain_types") | ("minecraft:enchantment_location_based_effect_type") | ("twilight:biome_layer_type") | ("minecraft:schedule") | ("minecraft:pos_rule_test") | ("minecraft:worldgen/placement_modifier_type") | ("minecraft:data_component_type") | ("minecraft:entity_type") | ("minecraft:painting_variant") | ("forbidden_arcanus:ritual_result") | ("neoforge:structure_modifier_serializers") | ("minecraft:game_event") | ("minecraft:worldgen/trunk_placer_type") | ("minecraft:worldgen/flat_level_generator_preset") | ("twilight:template_marker_handler") | ("forbidden_arcanus:research/constellation") | ("minecraft:mob_effect") | ("minecraft:loot_nbt_provider_type") | ("neoforge:attachment_types") | ("twilight:travellers_modifiers") | ("aether:advancement_sound_override") | ("minecraft:armor_material") | ("minecraft:worldgen/feature_size_type") | ("neoforge:holder_set_type") | ("minecraft:point_of_interest_type") | ("minecraft:villager_profession") | ("twilightforest:template_marker_handler_type") | ("neoforge:ingredient_serializer") | ("minecraft:worldgen/structure_set") | ("neoforge:fluid_type") | ("minecraft:cat_variant") | ("twilight:travellers_modifier_type") | ("minecraft:block_entity_type") | ("twilight:wood_palettes") | ("minecraft:banner_pattern") | ("minecraft:worldgen/noise") | ("minecraft:dimension") | ("neoforge:structure_modifier") | ("minecraft:instrument") | ("minecraft:attribute") | ("twilight:template_marker_handler_list") | ("minecraft:villager_type") | ("minecraft:worldgen/processor_list") | ("moonlight:soft_fluid") | ("minecraft:worldgen/structure_piece") | ("moonlight:villager_trades") | ("neoforge:global_loot_modifier_serializers") | ("minecraft:worldgen/tree_decorator_type") | ("minecraft:worldgen/structure_processor") | ("neoforge:biome_modifier_serializers") | ("minecraft:chunk_status") | ("minecraft:loot_pool_entry_type") | ("minecraft:worldgen/noise_settings") | ("twilight:dwarf_rabbit_variant") | ("neoforge:fluid_ingredient_type") | ("forbidden_arcanus:item_modifier") | ("minecraft:worldgen/density_function") | ("twilightforest:chunk_blanket_type") | ("repurposed_structures:json_conditions") | ("irons_spellbooks:spells") | ("apothic_attributes:entity_slot_group") | ("minecraft:jukebox_song") | ("minecraft:loot_condition_type") | ("minecraft:worldgen/placed_feature") | ("minecraft:loot_function_type") | ("forbidden_arcanus:dark_trader_variant") | ("minecraft:menu") | ("minecraft:dimension_type") | ("irons_spellbooks:upgrade_orb_type") | ("minecraft:worldgen/template_pool") | ("minecraft:command_argument_type") | ("apothic_attributes:entity_equipment_slot") | ("twilight:restrictions") | ("moonlight:world_saved_data_type") | ("minecraft:worldgen/world_preset") | ("minecraft:worldgen/structure_placement") | ("twilightforest:enforcement") | ("minecraft:frog_variant") | ("minecraft:worldgen/block_state_provider_type") | ("minecraft:block_type") | ("neoforge:condition_codecs") | ("minecraft:particle_type") | ("lodestone:world_event_type") | ("neoforge:biome_modifier") | ("twilight:tiny_bird_variant") | ("minecraft:worldgen/structure_type") | ("forbidden_arcanus:hephaestus_forge/input") | ("minecraft:int_provider_type") | ("minecraft:map_decoration_type") | ("minecraft:worldgen/material_rule") | ("minecraft:enchantment_value_effect_type") | ("ae2:keytypes") | ("minecraft:enchantment_provider") | ("moonlight:map_marker") | ("minecraft:decorated_pot_pattern") | ("minecraft:worldgen/multi_noise_biome_source_parameter_list") | ("minecraft:worldgen/structure") | ("minecraft:worldgen/biome_source") | ("aether:moa_type") | ("minecraft:entity_sub_predicate_type") | ("minecraft:worldgen/density_function_type") | ("twilight:item_display_type") | ("simplyswords:gem_power") | ("minecraft:worldgen/root_placer_type") | ("ars_nouveau:particle_configs") | ("minecraft:enchantment_provider_type") | ("minecraft:chat_type"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Registry$$Original<T> = $Registry<(T)>;}
declare module "net.minecraft.core.HolderLookup$Provider" {
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryOps} from "net.minecraft.resources.RegistryOps"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Holder} from "net.minecraft.core.Holder"
import {$IHolderLookupProviderExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IHolderLookupProviderExtension"

export interface $HolderLookup$Provider$$Interface extends $IHolderLookupProviderExtension$$Interface {
}

export class $HolderLookup$Provider implements $HolderLookup$Provider$$Interface {
 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($HolderLookup$RegistryLookup<(T)>)>
static "create"(arg0: $Stream$$Type<($HolderLookup$RegistryLookup$$Type<(never)>)>): $HolderLookup$Provider
 "asGetterLookup"(): $HolderGetter$Provider
 "lookupOrThrow"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup$RegistryLookup<(T)>
 "listRegistries"(): $Stream<($ResourceKey<($Registry<(never)>)>)>
 "createSerializationContext"<V>(arg0: $DynamicOps$$Type<(V)>): $RegistryOps<(V)>
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderLookup$Provider$$Type = ($HolderLookup$Provider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderLookup$Provider$$Original = $HolderLookup$Provider;}
declare module "net.minecraft.core.RegistryAccess" {
import {$RegistryAccess$RegistryEntry} from "net.minecraft.core.RegistryAccess$RegistryEntry"
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$RegistryOps} from "net.minecraft.resources.RegistryOps"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Interface} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$Lifecycle} from "com.mojang.serialization.Lifecycle"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Logger} from "org.slf4j.Logger"

export interface $RegistryAccess$$Interface extends $HolderLookup$Provider$$Interface {
}

export class $RegistryAccess implements $RegistryAccess$$Interface {
static readonly "LOGGER": $Logger
static readonly "EMPTY": $RegistryAccess$Frozen

 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($HolderLookup$RegistryLookup<(T)>)>
 "freeze"(): $RegistryAccess$Frozen
 "registries"(): $Stream<($RegistryAccess$RegistryEntry<(never)>)>
 "listRegistries"(): $Stream<($ResourceKey<($Registry<(never)>)>)>
 "registry"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Optional<($Registry<(E)>)>
 "allRegistriesLifecycle"(): $Lifecycle
static "fromRegistryOfRegistries"(arg0: $Registry$$Type<($Registry$$Type<(never)>)>): $RegistryAccess$Frozen
 "registryOrThrow"<E>(arg0: $ResourceKey$$Type<($Registry<(E)>)>): $Registry<(E)>
static "create"(arg0: $Stream$$Type<($HolderLookup$RegistryLookup$$Type<(never)>)>): $HolderLookup$Provider
 "asGetterLookup"(): $HolderGetter$Provider
 "lookupOrThrow"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup$RegistryLookup<(T)>
 "createSerializationContext"<V>(arg0: $DynamicOps$$Type<(V)>): $RegistryOps<(V)>
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryAccess$$Type = ($RegistryAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryAccess$$Original = $RegistryAccess;}
declare module "net.minecraft.core.RegistrySetBuilder$RegistryBootstrap" {
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export interface $RegistrySetBuilder$RegistryBootstrap$$Interface<T> {

(arg0: $BootstrapContext<(T)>): void
}

export class $RegistrySetBuilder$RegistryBootstrap<T> implements $RegistrySetBuilder$RegistryBootstrap$$Interface {
 "run"(arg0: $BootstrapContext$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySetBuilder$RegistryBootstrap$$Type<T> = ((arg0: $BootstrapContext<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrySetBuilder$RegistryBootstrap$$Original<T> = $RegistrySetBuilder$RegistryBootstrap<(T)>;}
declare module "net.minecraft.core.HolderGetter$Provider" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"

export interface $HolderGetter$Provider$$Interface {

(arg0: $ResourceKey<($Registry<(T)>)>): ($HolderGetter$$Type<(T)>)?
}

export class $HolderGetter$Provider implements $HolderGetter$Provider$$Interface {
 "get"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "lookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Optional<($HolderGetter<(T)>)>
 "lookupOrThrow"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderGetter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderGetter$Provider$$Type = ((arg0: $ResourceKey<($Registry<(T)>)>) => ($HolderGetter$$Type<(T)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderGetter$Provider$$Original = $HolderGetter$Provider;}
declare module "net.minecraft.core.Holder" {
import {$IHolderExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IHolderExtension"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$Holder$Kind} from "net.minecraft.core.Holder$Kind"

export interface $Holder$$Interface<T> extends $IHolderExtension$$Interface<(T)> {
get "bound"(): boolean
get "registeredName"(): StringJS
get "key"(): $ResourceKey<(T)>
get "delegate"(): $Holder<(T)>
}

export class $Holder<T> implements $Holder$$Interface {
 "value"(): T
 "kind"(): $Holder$Kind
 "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
/**
 * Test if the holder holds an object registered with given resource location.
 */
 "is"(arg0: $ResourceLocation$$Type): boolean
/**
 * Tests the resource key held by the holder using a predicate.
 */
 "test"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
static "direct"<T>(arg0: T): $Holder<(T)>
 "tags"(): $Stream<($TagKey<(T)>)>
 "isBound"(): boolean
 "getRegisteredName"(): StringJS
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
/**
 * Test if a tag matches the object this holder holds.
 */
 "isTag"(tagKey: $ResourceLocation$$Type): boolean
 "getKey"(): $ResourceKey<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getDelegate"(): $Holder<(T)>
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Holder$$Type<T> = (Special.LiteralOf<(T)>) | ($Holder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Holder$$Original<T> = $Holder<(T)>;}
declare module "net.minecraft.core.HolderOwner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HolderOwner$$Interface<T> {
}

export class $HolderOwner<T> implements $HolderOwner$$Interface {
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderOwner$$Type<T> = ($HolderOwner<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderOwner$$Original<T> = $HolderOwner<(T)>;}
declare module "net.minecraft.core.HolderSet$Direct" {
import {$Collection$$Type} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$HolderSet$ListBacked} from "net.minecraft.core.HolderSet$ListBacked"
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<(T)> {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "contains"(arg0: $Holder$$Type<(T)>): boolean
public "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
public "unwrapKey"(): $Optional<($TagKey<(T)>)>
public static "empty"<T>(): $HolderSet<(T)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSet$Direct$$Type<T> = ($HolderSet$Direct<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderSet$Direct$$Original<T> = $HolderSet$Direct<(T)>;}
declare module "net.minecraft.core.FrontAndTop" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FrontAndTop extends $Enum<($FrontAndTop)> implements $StringRepresentable$$Interface {
static readonly "UP_SOUTH": $FrontAndTop
static readonly "DOWN_NORTH": $FrontAndTop
static readonly "UP_EAST": $FrontAndTop
static readonly "UP_NORTH": $FrontAndTop
static readonly "NORTH_UP": $FrontAndTop
static readonly "SOUTH_UP": $FrontAndTop
static readonly "DOWN_EAST": $FrontAndTop
static readonly "DOWN_WEST": $FrontAndTop
static readonly "UP_WEST": $FrontAndTop
static readonly "WEST_UP": $FrontAndTop
static readonly "DOWN_SOUTH": $FrontAndTop
static readonly "EAST_UP": $FrontAndTop

public static "values"(): ($FrontAndTop)[]
public static "valueOf"(arg0: StringJS): $FrontAndTop
public "top"(): $Direction
public "front"(): $Direction
public "getSerializedName"(): StringJS
public static "fromFrontAndTop"(arg0: $Direction$$Type, arg1: $Direction$$Type): $FrontAndTop
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrontAndTop$$Type = (("down_east") | ("down_north") | ("down_south") | ("down_west") | ("up_east") | ("up_north") | ("up_south") | ("up_west") | ("west_up") | ("east_up") | ("north_up") | ("south_up"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrontAndTop$$Original = $FrontAndTop;}
declare module "net.minecraft.core.Direction8" {
import {$Enum} from "java.lang.Enum"
import {$Direction} from "net.minecraft.core.Direction"
import {$Set} from "java.util.Set"

export class $Direction8 extends $Enum<($Direction8)> {
static readonly "NORTH_WEST": $Direction8
static readonly "NORTH": $Direction8
static readonly "NORTH_EAST": $Direction8
static readonly "WEST": $Direction8
static readonly "SOUTH_EAST": $Direction8
static readonly "SOUTH": $Direction8
static readonly "SOUTH_WEST": $Direction8
static readonly "EAST": $Direction8

public static "values"(): ($Direction8)[]
public static "valueOf"(arg0: StringJS): $Direction8
public "getDirections"(): $Set<($Direction)>
public "getStepX"(): integer
public "getStepZ"(): integer
get "directions"(): $Set<($Direction)>
get "stepX"(): integer
get "stepZ"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Direction8$$Type = (("north") | ("north_east") | ("east") | ("south_east") | ("south") | ("south_west") | ("west") | ("north_west"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Direction8$$Original = $Direction8;}
declare module "net.minecraft.core.Cloner" {
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Cloner<T> {
public "clone"(arg0: T, arg1: $HolderLookup$Provider$$Type, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cloner$$Type<T> = ($Cloner<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cloner$$Original<T> = $Cloner<(T)>;}
declare module "net.minecraft.core.Holder$Kind" {
import {$Enum} from "java.lang.Enum"

export class $Holder$Kind extends $Enum<($Holder$Kind)> {
static readonly "REFERENCE": $Holder$Kind
static readonly "DIRECT": $Holder$Kind

public static "values"(): ($Holder$Kind)[]
public static "valueOf"(arg0: StringJS): $Holder$Kind
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Holder$Kind$$Type = (("reference") | ("direct"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Holder$Kind$$Original = $Holder$Kind;}
declare module "net.minecraft.core.HolderLookup" {
import {$Optional} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$HolderGetter$$Interface} from "net.minecraft.core.HolderGetter"

export interface $HolderLookup$$Interface<T> extends $HolderGetter$$Interface<(T)> {
}

export class $HolderLookup<T> implements $HolderLookup$$Interface {
 "listTagIds"(): $Stream<($TagKey<(T)>)>
 "listTags"(): $Stream<($HolderSet$Named<(T)>)>
 "listElements"(): $Stream<($Holder$Reference<(T)>)>
 "listElementIds"(): $Stream<($ResourceKey<(T)>)>
 "get"(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "get"(arg0: $TagKey$$Type<(T)>): $Optional<($HolderSet$Named<(T)>)>
 "getOrThrow"(arg0: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
 "getOrThrow"(arg0: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderLookup$$Type<T> = ($HolderLookup<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderLookup$$Original<T> = $HolderLookup<(T)>;}
declare module "net.minecraft.core.Vec3i" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Position$$Type} from "net.minecraft.core.Position"

export class $Vec3i implements $Comparable$$Interface<($Vec3i)> {
static readonly "ZERO": $Vec3i
static readonly "CODEC": $Codec<($Vec3i)>

constructor(arg0: integer, arg1: integer, arg2: integer)

public "get"(arg0: $Direction$Axis$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $Vec3i$$Type): integer
public "compareTo"(arg0: any): integer
public "offset"(arg0: integer, arg1: integer, arg2: integer): $Vec3i
public "offset"(arg0: $Vec3i$$Type): $Vec3i
public "toShortString"(): StringJS
public "multiply"(arg0: integer): $Vec3i
public "subtract"(arg0: $Vec3i$$Type): $Vec3i
public "relative"(arg0: $Direction$$Type, arg1: integer): $Vec3i
public "relative"(arg0: $Direction$$Type): $Vec3i
public "relative"(arg0: $Direction$Axis$$Type, arg1: integer): $Vec3i
public "getY"(): integer
public "distSqr"(arg0: $Vec3i$$Type): double
public "closerThan"(arg0: $Vec3i$$Type, arg1: double): boolean
public "west"(arg0: integer): $Vec3i
public "west"(): $Vec3i
public "east"(): $Vec3i
public "east"(arg0: integer): $Vec3i
public "south"(): $Vec3i
public "south"(arg0: integer): $Vec3i
public "north"(): $Vec3i
public "north"(arg0: integer): $Vec3i
public static "offsetCodec"(arg0: integer): $Codec<($Vec3i)>
public "distManhattan"(arg0: $Vec3i$$Type): integer
public "distToLowCornerSqr"(arg0: double, arg1: double, arg2: double): double
public "closerToCenterThan"(arg0: $Position$$Type, arg1: double): boolean
public "distToCenterSqr"(arg0: double, arg1: double, arg2: double): double
public "distToCenterSqr"(arg0: $Position$$Type): double
public "getZ"(): integer
public "getX"(): integer
public "cross"(arg0: $Vec3i$$Type): $Vec3i
public "above"(arg0: integer): $Vec3i
public "above"(): $Vec3i
public "below"(arg0: integer): $Vec3i
public "below"(): $Vec3i
get "y"(): integer
get "z"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3i$$Type = ($Vec3i);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Vec3i$$Original = $Vec3i;}
declare module "net.minecraft.core.RegistrySetBuilder$PatchedRegistries" {
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $RegistrySetBuilder$PatchedRegistries extends $Record {
constructor(full: $HolderLookup$Provider$$Type, patches: $HolderLookup$Provider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "full"(): $HolderLookup$Provider
public "patches"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySetBuilder$PatchedRegistries$$Type = ({"patches"?: $HolderLookup$Provider$$Type, "full"?: $HolderLookup$Provider$$Type}) | ([patches?: $HolderLookup$Provider$$Type, full?: $HolderLookup$Provider$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrySetBuilder$PatchedRegistries$$Original = $RegistrySetBuilder$PatchedRegistries;}
declare module "net.minecraft.core.AxisCycle" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Enum} from "java.lang.Enum"

export class $AxisCycle extends $Enum<($AxisCycle)> {
static readonly "BACKWARD": $AxisCycle
static readonly "FORWARD": $AxisCycle
static readonly "VALUES": ($AxisCycle)[]
static readonly "NONE": $AxisCycle
static readonly "AXIS_VALUES": ($Direction$Axis)[]

public static "values"(): ($AxisCycle)[]
public static "valueOf"(arg0: StringJS): $AxisCycle
public static "between"(arg0: $Direction$Axis$$Type, arg1: $Direction$Axis$$Type): $AxisCycle
public "cycle"(arg0: $Direction$Axis$$Type): $Direction$Axis
public "cycle"(arg0: double, arg1: double, arg2: double, arg3: $Direction$Axis$$Type): double
public "cycle"(arg0: integer, arg1: integer, arg2: integer, arg3: $Direction$Axis$$Type): integer
public "inverse"(): $AxisCycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxisCycle$$Type = (("none") | ("forward") | ("backward"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AxisCycle$$Original = $AxisCycle;}
declare module "net.minecraft.core.HolderGetter" {
import {$Optional} from "java.util.Optional"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"

export interface $HolderGetter$$Interface<T> {
}

export class $HolderGetter<T> implements $HolderGetter$$Interface {
 "get"(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "get"(arg0: $TagKey$$Type<(T)>): $Optional<($HolderSet$Named<(T)>)>
 "getOrThrow"(arg0: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
 "getOrThrow"(arg0: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderGetter$$Type<T> = ($HolderGetter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderGetter$$Original<T> = $HolderGetter<(T)>;}
declare module "net.minecraft.core.BlockPos$MutableBlockPos" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$AxisCycle$$Type} from "net.minecraft.core.AxisCycle"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $BlockPos$MutableBlockPos extends $BlockPos {
static readonly "ZERO": $BlockPos
static readonly "CODEC": $Codec<($BlockPos)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockPos)>
static readonly "PACKED_Y_LENGTH": integer

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor()

public "clamp"(arg0: $Direction$Axis$$Type, arg1: integer, arg2: integer): $BlockPos$MutableBlockPos
public "offset"(arg0: $Vec3i$$Type): $Vec3i
public "offset"(arg0: integer, arg1: integer, arg2: integer): $Vec3i
public "set"(arg0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "set"(arg0: long): $BlockPos$MutableBlockPos
public "set"(arg0: $AxisCycle$$Type, arg1: integer, arg2: integer, arg3: integer): $BlockPos$MutableBlockPos
public "set"(arg0: double, arg1: double, arg2: double): $BlockPos$MutableBlockPos
public "set"(arg0: integer, arg1: integer, arg2: integer): $BlockPos$MutableBlockPos
public "multiply"(arg0: integer): $Vec3i
public "rotate"(arg0: $Rotation$$Type): $BlockPos
public "subtract"(arg0: $Vec3i$$Type): $Vec3i
public "move"(arg0: integer, arg1: integer, arg2: integer): $BlockPos$MutableBlockPos
public "move"(arg0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "move"(arg0: $Direction$$Type, arg1: integer): $BlockPos$MutableBlockPos
public "move"(arg0: $Direction$$Type): $BlockPos$MutableBlockPos
public "relative"(arg0: $Direction$$Type, arg1: integer): $Vec3i
public "relative"(arg0: $Direction$$Type): $Vec3i
public "relative"(arg0: $Direction$Axis$$Type, arg1: integer): $Vec3i
public "setX"(arg0: integer): $BlockPos$MutableBlockPos
public "setY"(arg0: integer): $BlockPos$MutableBlockPos
public "setZ"(arg0: integer): $Vec3i
public "setWithOffset"(arg0: $Vec3i$$Type, arg1: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "setWithOffset"(arg0: $Vec3i$$Type, arg1: $Direction$$Type): $BlockPos$MutableBlockPos
public "setWithOffset"(arg0: $Vec3i$$Type, arg1: integer, arg2: integer, arg3: integer): $BlockPos$MutableBlockPos
public "west"(arg0: integer): $Vec3i
public "west"(): $Vec3i
public "east"(arg0: integer): $Vec3i
public "east"(): $Vec3i
public "south"(arg0: integer): $Vec3i
public "south"(): $Vec3i
public "north"(): $Vec3i
public "north"(arg0: integer): $Vec3i
public "immutable"(): $BlockPos
public "cross"(arg0: $Vec3i$$Type): $Vec3i
public "above"(): $Vec3i
public "above"(arg0: integer): $Vec3i
public "below"(): $Vec3i
public "below"(arg0: integer): $Vec3i
set "x"(value: integer)
set "y"(value: integer)
set "z"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPos$MutableBlockPos$$Type = ($BlockPos$MutableBlockPos);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPos$MutableBlockPos$$Original = $BlockPos$MutableBlockPos;}
declare module "net.minecraft.core.SectionPos" {
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Stream} from "java.util.stream.Stream"
import {$LongConsumer$$Type} from "it.unimi.dsi.fastutil.longs.LongConsumer"

export class $SectionPos extends $Vec3i {
static readonly "ZERO": $Vec3i
static readonly "SECTION_MASK": integer
static readonly "CODEC": $Codec<($Vec3i)>
static readonly "SECTION_SIZE": integer
static readonly "SECTION_HALF_SIZE": integer
static readonly "SECTION_MAX_INDEX": integer
static readonly "SECTION_BITS": integer

public static "of"(arg0: $EntityAccess$$Type): $SectionPos
public static "of"(arg0: $Position$$Type): $SectionPos
public static "of"(arg0: long): $SectionPos
public static "of"(arg0: integer, arg1: integer, arg2: integer): $SectionPos
public static "of"(arg0: $BlockPos$$Type): $SectionPos
public static "of"(arg0: $ChunkPos$$Type, arg1: integer): $SectionPos
public static "offset"(arg0: long, arg1: integer, arg2: integer, arg3: integer): long
public "offset"(arg0: integer, arg1: integer, arg2: integer): $Vec3i
public static "offset"(arg0: long, arg1: $Direction$$Type): long
public "x"(): integer
public static "x"(arg0: long): integer
public "z"(): integer
public static "z"(arg0: long): integer
public static "y"(arg0: long): integer
public "y"(): integer
public "origin"(): $BlockPos
public static "betweenClosedStream"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Stream<($SectionPos)>
public "minBlockY"(): integer
public "minBlockX"(): integer
public "maxBlockX"(): integer
public "maxBlockY"(): integer
public "maxBlockZ"(): integer
public static "bottomOf"(arg0: $ChunkAccess$$Type): $SectionPos
public "minBlockZ"(): integer
public static "sectionRelative"(arg0: integer): integer
public static "aroundChunk"(arg0: $ChunkPos$$Type, arg1: integer, arg2: integer, arg3: integer): $Stream<($SectionPos)>
public static "sectionRelativeZ"(arg0: short): integer
public "relativeToBlockPos"(arg0: short): $BlockPos
public static "posToSectionCoord"(arg0: double): integer
public "blocksInside"(): $Stream<($BlockPos)>
public "relativeToBlockZ"(arg0: short): integer
public static "sectionRelativePos"(arg0: $BlockPos$$Type): short
public static "sectionRelativeX"(arg0: short): integer
public static "getZeroNode"(arg0: integer, arg1: integer): long
public static "getZeroNode"(arg0: long): long
public static "sectionRelativeY"(arg0: short): integer
public "relativeToBlockX"(arg0: short): integer
public "relativeToBlockY"(arg0: short): integer
public static "blockToSection"(arg0: long): long
public "chunk"(): $ChunkPos
public static "blockToSectionCoord"(arg0: integer): integer
public static "blockToSectionCoord"(arg0: double): integer
public static "cube"(arg0: $SectionPos$$Type, arg1: integer): $Stream<($SectionPos)>
public "center"(): $BlockPos
public static "sectionToBlockCoord"(arg0: integer, arg1: integer): integer
public static "sectionToBlockCoord"(arg0: integer): integer
public "asLong"(): long
public static "asLong"(arg0: integer, arg1: integer, arg2: integer): long
public static "asLong"(arg0: $BlockPos$$Type): long
public static "aroundAndAtBlockPos"(arg0: integer, arg1: integer, arg2: integer, arg3: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(arg0: $BlockPos$$Type, arg1: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(arg0: long, arg1: $LongConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionPos$$Type = ($SectionPos);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionPos$$Original = $SectionPos;}
declare module "net.minecraft.core.WritableRegistry" {
import {$Iterable} from "java.lang.Iterable"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$List$$Type} from "java.util.List"
import {$HolderOwner} from "net.minecraft.core.HolderOwner"
import {$Map$Entry} from "java.util.Map$Entry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$Iterator} from "java.util.Iterator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$IdMap} from "net.minecraft.core.IdMap"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistrationInfo, $RegistrationInfo$$Type} from "net.minecraft.core.RegistrationInfo"
import {$Registry, $Registry$$Type, $Registry$$Interface} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$Lifecycle} from "com.mojang.serialization.Lifecycle"

export interface $WritableRegistry$$Interface<T> extends $Registry$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<T>;
get "empty"(): boolean
get "tags"(): $Stream<($Pair<($TagKey<(T)>), ($HolderSet$Named<(T)>)>)>
get "any"(): $Optional<($Holder$Reference<(T)>)>
get "tagNames"(): $Stream<($TagKey<(T)>)>
get "maxId"(): integer
}

export class $WritableRegistry<T> implements $WritableRegistry$$Interface {
 "isEmpty"(): boolean
 "register"(arg0: $ResourceKey$$Type<(T)>, arg1: T, arg2: $RegistrationInfo$$Type): $Holder$Reference<(T)>
 "createRegistrationLookup"(): $HolderGetter<(T)>
 "get"(arg0: $ResourceLocation$$Type): T
 "get"(arg0: $ResourceKey$$Type<(T)>): T
 "stream"(): $Stream<(T)>
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $ResourceLocation
static "register"<T>(arg0: $Registry$$Type<(T)>, arg1: StringJS, arg2: T): T
static "register"<V, T>(arg0: $Registry$$Type<(V)>, arg1: $ResourceKey$$Type<(V)>, arg2: T): T
static "register"<V, T>(arg0: $Registry$$Type<(V)>, arg1: $ResourceLocation$$Type, arg2: T): T
 "key"(): $ResourceKey<($Registry<(T)>)>
 "containsKey"(arg0: $ResourceLocation$$Type): boolean
 "containsKey"(arg0: $ResourceKey$$Type<(T)>): boolean
 "getId"(arg0: T): integer
 "keys"<U>(arg0: $DynamicOps$$Type<(U)>): $Stream<(U)>
 "keySet"(): $Set<($ResourceLocation)>
 "freeze"(): $Registry<(T)>
 "getTag"(arg0: $TagKey$$Type<(T)>): $Optional<($HolderSet$Named<(T)>)>
 "asHolderIdMap"(): $IdMap<($Holder<(T)>)>
 "wrapAsHolder"(arg0: T): $Holder<(T)>
 "getRandom"(arg0: $RandomSource$$Type): $Optional<($Holder$Reference<(T)>)>
 "getTags"(): $Stream<($Pair<($TagKey<(T)>), ($HolderSet$Named<(T)>)>)>
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "getHolder"(arg0: $ResourceLocation$$Type): $Optional<($Holder$Reference<(T)>)>
 "getHolder"(arg0: integer): $Optional<($Holder$Reference<(T)>)>
 "createIntrusiveHolder"(arg0: T): $Holder$Reference<(T)>
 "registryLifecycle"(): $Lifecycle
 "asLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getOptional"(arg0: $ResourceLocation$$Type): $Optional<(T)>
 "getOptional"(arg0: $ResourceKey$$Type<(T)>): $Optional<(T)>
 "getHolderOrThrow"(arg0: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
 "getAny"(): $Optional<($Holder$Reference<(T)>)>
 "bindTags"(arg0: $Map$$Type<($TagKey$$Type<(T)>), ($List$$Type<($Holder$$Type<(T)>)>)>): void
 "holders"(): $Stream<($Holder$Reference<(T)>)>
 "resetTags"(): void
 "getTagNames"(): $Stream<($TagKey<(T)>)>
 "getRandomElementOf"(arg0: $TagKey$$Type<(T)>, arg1: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "holderByNameCodec"(): $Codec<($Holder<(T)>)>
 "getTagOrEmpty"(arg0: $TagKey$$Type<(T)>): $Iterable<($Holder<(T)>)>
 "registrationInfo"(arg0: $ResourceKey$$Type<(T)>): $Optional<($RegistrationInfo)>
 "byNameCodec"(): $Codec<(T)>
 "getResourceKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "holderOwner"(): $HolderOwner<(T)>
 "getOrCreateTag"(arg0: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
static "registerForHolder"<T>(arg0: $Registry$$Type<(T)>, arg1: $ResourceLocation$$Type, arg2: T): $Holder$Reference<(T)>
static "registerForHolder"<T>(arg0: $Registry$$Type<(T)>, arg1: $ResourceKey$$Type<(T)>, arg2: T): $Holder$Reference<(T)>
 "asTagAddingLookup"(): $HolderLookup$RegistryLookup<(T)>
 "registryKeySet"(): $Set<($ResourceKey<(T)>)>
 "getOrThrow"(arg0: $ResourceKey$$Type<(T)>): T
static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(StringJS)>)>): $Keyable
 "size"(): integer
 "getIdOrThrow"(arg0: T): integer
 "byIdOrThrow"(arg0: integer): T
 "byId"(arg0: integer): T
 "resolve"(arg0: $ResourceLocation$$Type): $ResourceLocation
 "resolve"(arg0: $ResourceKey$$Type<(T)>): $ResourceKey<(T)>
 "getId"(arg0: $ResourceKey$$Type<(T)>): integer
 "getId"(arg0: $ResourceLocation$$Type): integer
 "containsValue"(arg0: T): boolean
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
 "getMaxId"(): integer
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "doesSync"(): boolean
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
 "addCallback"<C extends $RegistryCallback<(object)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "getKeyOrNull"(arg0: T): $ResourceLocation
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRegistry$$Type<T> = ($WritableRegistry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableRegistry$$Original<T> = $WritableRegistry<(T)>;}
declare module "net.minecraft.core.Holder$Reference" {
import {$ReferenceAccessor$$Interface} from "io.wispforest.owo.mixin.registry.ReferenceAccessor"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Interface} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$Holder$Kind} from "net.minecraft.core.Holder$Kind"

export class $Holder$Reference<T> implements $Holder$$Interface<(T)>, $ReferenceAccessor$$Interface {
readonly "owner": $HolderOwner<(T)>

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getKey"(): $ResourceKey<(T)>
public "kind"(): $Holder$Kind
public "key"(): $ResourceKey<(T)>
public "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
public "is"(arg0: $ResourceLocation$$Type): boolean
public "test"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
public "tags"(): $Stream<($TagKey<(T)>)>
public "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>): A
public "isBound"(): boolean
public "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
public "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
public "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
public "bindKey"(arg0: $ResourceKey$$Type<(T)>): void
public "owo$setValue"(arg0: any): void
public static "createStandAlone"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $ResourceKey$$Type<(T)>): $Holder$Reference<(T)>
public "owo$setRegistryKey"(arg0: $ResourceKey$$Type): void
/**
 * 
 * @deprecated
 */
public static "createIntrusive"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: T): $Holder$Reference<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
public "getRegisteredName"(): StringJS
/**
 * Test if a tag matches the object this holder holds.
 */
public "isTag"(tagKey: $ResourceLocation$$Type): boolean
public "getDelegate"(): $Holder<(T)>
get "bound"(): boolean
get "registeredName"(): StringJS
get "delegate"(): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Holder$Reference$$Type<T> = ($Holder$Reference<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Holder$Reference$$Original<T> = $Holder$Reference<(T)>;}
