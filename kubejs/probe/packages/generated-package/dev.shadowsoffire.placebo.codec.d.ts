declare module "dev.shadowsoffire.placebo.codec.CodecMap" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$CodecProvider, $CodecProvider$$Type} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$List} from "java.util.List"
import {$Dynamic$$Type} from "com.mojang.serialization.Dynamic"
import {$Encoder, $Encoder$$Type} from "com.mojang.serialization.Encoder"
import {$Decoder$Terminal, $Decoder$Terminal$$Type} from "com.mojang.serialization.Decoder$Terminal"
import {$MapDecoder, $MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type, $Codec$$Interface} from "com.mojang.serialization.Codec"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Decoder, $Decoder$$Type} from "com.mojang.serialization.Decoder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Codec$ResultFunction$$Type} from "com.mojang.serialization.Codec$ResultFunction"
import {$Decoder$Boxed, $Decoder$Boxed$$Type} from "com.mojang.serialization.Decoder$Boxed"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SimpleMapCodec} from "com.mojang.serialization.codecs.SimpleMapCodec"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Decoder$Simple, $Decoder$Simple$$Type} from "com.mojang.serialization.Decoder$Simple"
import {$UnboundedMapCodec} from "com.mojang.serialization.codecs.UnboundedMapCodec"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$MapEncoder, $MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Lifecycle$$Type} from "com.mojang.serialization.Lifecycle"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CodecMap<V extends $CodecProvider<(object)>> implements $Codec$$Interface<(V)> {
constructor(arg0: StringJS)

public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<(V), (T)>)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type, arg2: any): $DataResult
public "encode"<T>(arg0: V, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
public "getValue"(arg0: $ResourceLocation$$Type): $Codec<(V)>
public "isEmpty"(): boolean
public "getKey"(arg0: $Codec$$Type<(never)>): $ResourceLocation
public "register"(arg0: $ResourceLocation$$Type, arg1: $Codec$$Type<(V)>): void
public "containsKey"(arg0: $ResourceLocation$$Type): boolean
public "getDefaultCodec"(): $Codec<(V)>
public "setDefaultCodec"(arg0: $Codec$$Type<(V)>): void
public "dispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (V)>, arg2: $Function$$Type<(V), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public "dispatch"<E>(arg0: $Function$$Type<(E), (V)>, arg1: $Function$$Type<(V), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public static "of"<A>(arg0: $MapEncoder$$Type<(V)>, arg1: $MapDecoder$$Type<(V)>, arg2: $Supplier$$Type<(StringJS)>): $MapCodec<(V)>
public static "of"<A>(arg0: $MapEncoder$$Type<(V)>, arg1: $MapDecoder$$Type<(V)>): $MapCodec<(V)>
public static "of"<A>(arg0: $Encoder$$Type<(V)>, arg1: $Decoder$$Type<(V)>, arg2: StringJS): $Codec<(V)>
public static "of"<A>(arg0: $Encoder$$Type<(V)>, arg1: $Decoder$$Type<(V)>): $Codec<(V)>
public static "list"<E>(arg0: $Codec$$Type<(E)>): $Codec<($List<(E)>)>
public static "list"<E>(arg0: $Codec$$Type<(E)>, arg1: integer, arg2: integer): $Codec<($List<(E)>)>
public "validate"(arg0: $Function$$Type<(V), ($DataResult$$Type<(V)>)>): $Codec<(V)>
public "orElse"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: V): $Codec<(V)>
public "orElse"(arg0: V): $Codec<(V)>
public "orElse"(arg0: $Consumer$$Type<(StringJS)>, arg1: V): $Codec<(V)>
public static "unit"<A>(arg0: $Supplier$$Type<(V)>): $Codec<(V)>
public static "unit"<A>(arg0: V): $Codec<(V)>
public static "string"(arg0: integer, arg1: integer): $Codec<(StringJS)>
public "orElseGet"(arg0: $Supplier$$Type<(V)>): $Codec<(V)>
public "orElseGet"(arg0: $UnaryOperator$$Type<(StringJS)>, arg1: $Supplier$$Type<(V)>): $Codec<(V)>
public "orElseGet"(arg0: $Consumer$$Type<(StringJS)>, arg1: $Supplier$$Type<(V)>): $Codec<(V)>
public static "recursive"<A>(arg0: StringJS, arg1: $Function$$Type<($Codec<(V)>), ($Codec$$Type<(V)>)>): $Codec<(V)>
public static "pair"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "checkRange"<N extends number>(arg0: N, arg1: N): $Function<(N), ($DataResult<(N)>)>
public static "xor"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "withLifecycle"(arg0: $Lifecycle$$Type): $Codec<(V)>
public static "optionalField"<F>(arg0: StringJS, arg1: $Codec$$Type<(F)>, arg2: boolean): $MapCodec<($Optional<(F)>)>
public "optionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(V)>)>
public "optionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: V, arg3: $Lifecycle$$Type): $MapCodec<(V)>
public "optionalFieldOf"(arg0: StringJS, arg1: V, arg2: $Lifecycle$$Type): $MapCodec<(V)>
public "optionalFieldOf"(arg0: StringJS, arg1: V): $MapCodec<(V)>
public "promotePartial"(arg0: $Consumer$$Type): $Decoder
public "partialDispatch"<E>(arg0: StringJS, arg1: $Function$$Type<(E), ($DataResult$$Type<(V)>)>, arg2: $Function$$Type<(V), ($DataResult$$Type<($MapCodec$$Type<(E)>)>)>): $Codec<(E)>
public "dispatchStable"<E>(arg0: $Function$$Type<(E), (V)>, arg1: $Function$$Type<(V), ($MapCodec$$Type<(E)>)>): $Codec<(E)>
public static "doubleRange"(arg0: double, arg1: double): $Codec<(double)>
public static "sizeLimitedString"(arg0: integer): $Codec<(StringJS)>
public "sizeLimitedListOf"(arg0: integer): $Codec<($List<(V)>)>
public static "withAlternative"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $Function$$Type<(U), (T)>): $Codec<(T)>
public static "withAlternative"<T>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(T)>): $Codec<(T)>
public static "lazyInitialized"<A>(arg0: $Supplier$$Type<($Codec$$Type<(V)>)>): $Codec<(V)>
public static "stringResolver"<E>(arg0: $Function$$Type<(E), (StringJS)>, arg1: $Function$$Type<(StringJS), (E)>): $Codec<(E)>
public static "compoundList"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $Codec<($List<($Pair<(K), (V)>)>)>
public "comapFlatMap"<S>(arg0: $Function$$Type<(V), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), (V)>): $Codec<(S)>
public static "dispatchedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Function$$Type<(K), ($Codec$$Type<(V)>)>): $Codec<($Map<(K), (V)>)>
public "dispatchMap"<E>(arg0: StringJS, arg1: $Function$$Type<(E), (V)>, arg2: $Function$$Type<(V), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "dispatchMap"<E>(arg0: $Function$$Type<(E), (V)>, arg1: $Function$$Type<(V), ($MapCodec$$Type<(E)>)>): $MapCodec<(E)>
public "flatComapMap"<S>(arg0: $Function$$Type<(V), (S)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(V)>)>): $Codec<(S)>
public static "unboundedMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>): $UnboundedMapCodec<(K), (V)>
public "xmap"<S>(arg0: $Function$$Type<(V), (S)>, arg1: $Function$$Type<(S), (V)>): $Codec<(S)>
public "fieldOf"(arg0: StringJS): $MapDecoder
public "flatXmap"<S>(arg0: $Function$$Type<(V), ($DataResult$$Type<(S)>)>, arg1: $Function$$Type<(S), ($DataResult$$Type<(V)>)>): $Codec<(S)>
public "mapResult"(arg0: $Codec$ResultFunction$$Type<(V)>): $Codec<(V)>
public static "mapPair"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Pair<(F), (S)>)>
public static "mapEither"<F, S>(arg0: $MapCodec$$Type<(F)>, arg1: $MapCodec$$Type<(S)>): $MapCodec<($Either<(F), (S)>)>
public static "simpleMap"<K, V>(arg0: $Codec$$Type<(K)>, arg1: $Codec$$Type<(V)>, arg2: $Keyable$$Type): $SimpleMapCodec<(K), (V)>
public "deprecated"(arg0: integer): $Codec<(V)>
public static "intRange"(arg0: integer, arg1: integer): $Codec<(integer)>
public static "floatRange"(arg0: float, arg1: float): $Codec<(float)>
public static "either"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Either<(F), (S)>)>
public "listOf"(arg0: integer, arg1: integer): $Codec<($List<(V)>)>
public "listOf"(): $Codec<($List<(V)>)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: V, arg2: $Lifecycle$$Type): $MapCodec<(V)>
public "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($Optional<(V)>)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: V): $MapCodec<(V)>
public "lenientOptionalFieldOf"(arg0: StringJS, arg1: $Lifecycle$$Type, arg2: V, arg3: $Lifecycle$$Type): $MapCodec<(V)>
public "stable"(): $Codec<(V)>
public static "empty"<A>(): $MapEncoder<(V)>
public static "error"<A>(arg0: StringJS): $Encoder<(V)>
public "encodeStart"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: V): $DataResult<(T)>
public "comap"<B>(arg0: $Function$$Type<(B), (V)>): $Encoder<(B)>
public "flatComap"<B>(arg0: $Function$$Type<(B), ($DataResult$$Type<(V)>)>): $Encoder<(B)>
public "decode"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<($Pair<(V), (T)>)>
public "map"<B>(arg0: $Function$$Type<(V), (B)>): $Decoder<(B)>
public "flatMap"<B>(arg0: $Function$$Type<(V), ($DataResult$$Type<(B)>)>): $Decoder<(B)>
public "parse"<T>(arg0: $Dynamic$$Type<(T)>): $DataResult<(V)>
public "parse"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<(V)>
public "boxed"(): $Decoder$Boxed<(V)>
public "terminal"(): $Decoder$Terminal<(V)>
public static "ofSimple"<A>(arg0: $Decoder$Simple$$Type<(V)>): $Decoder<(V)>
public static "ofTerminal"<A>(arg0: $Decoder$Terminal$$Type<(V)>): $Decoder<(V)>
public "simple"(): $Decoder$Simple<(V)>
public static "ofBoxed"<A>(arg0: $Decoder$Boxed$$Type<(V)>): $Decoder<(V)>
get "defaultCodec"(): $Codec<(V)>
set "defaultCodec"(value: $Codec$$Type<(V)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecMap$$Type<V> = ($CodecMap<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodecMap$$Original<V> = $CodecMap<(V)>;}
declare module "dev.shadowsoffire.placebo.codec.CodecProvider" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export interface $CodecProvider$$Interface<R> {

(): $Codec$$Type<(R)>
get "codec"(): $Codec<(R)>
}

export class $CodecProvider<R> implements $CodecProvider$$Interface {
 "getCodec"(): $Codec<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecProvider$$Type<R> = (() => $Codec$$Type<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodecProvider$$Original<R> = $CodecProvider<(R)>;}
