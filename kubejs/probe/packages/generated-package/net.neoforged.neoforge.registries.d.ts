declare module "net.neoforged.neoforge.registries.holdersets.AndHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AndHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndHolderSet$Type$$Type = ($AndHolderSet$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AndHolderSet$Type$$Original = $AndHolderSet$Type;}
declare module "net.neoforged.neoforge.registries.callback.ClearCallback" {
import {$RegistryCallback$$Interface} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"

export interface $ClearCallback$$Interface<T> extends $RegistryCallback$$Interface<(T)> {

(arg0: $Registry<(T)>, arg1: boolean): void
}

export class $ClearCallback<T> implements $ClearCallback$$Interface {
 "onClear"(arg0: $Registry$$Type<(T)>, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClearCallback$$Type<T> = ((arg0: $Registry<(T)>, arg1: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClearCallback$$Original<T> = $ClearCallback<(T)>;}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapsUpdatedEvent" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$DataMapsUpdatedEvent$UpdateCause, $DataMapsUpdatedEvent$UpdateCause$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapsUpdatedEvent$UpdateCause"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $DataMapsUpdatedEvent extends $Event {
constructor(arg0: $RegistryAccess$$Type, arg1: $Registry$$Type<(never)>, arg2: $DataMapsUpdatedEvent$UpdateCause$$Type)

public "getCause"(): $DataMapsUpdatedEvent$UpdateCause
public "getRegistries"(): $RegistryAccess
public "ifRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Consumer$$Type<($Registry<(T)>)>): void
public "getRegistryKey"(): $ResourceKey<($Registry<(never)>)>
public "getRegistry"(): $Registry<(never)>
get "cause"(): $DataMapsUpdatedEvent$UpdateCause
get "registries"(): $RegistryAccess
get "registryKey"(): $ResourceKey<($Registry<(never)>)>
get "registry"(): $Registry<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapsUpdatedEvent$$Type = ($DataMapsUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataMapsUpdatedEvent$$Original = $DataMapsUpdatedEvent;}
declare module "net.neoforged.neoforge.registries.DataPackRegistryEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $DataPackRegistryEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataPackRegistryEvent$$Type = ($DataPackRegistryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataPackRegistryEvent$$Original = $DataPackRegistryEvent;}
declare module "net.neoforged.neoforge.registries.IdMappingEvent" {
import {$IdMappingEvent$IdRemapping$$Type} from "net.neoforged.neoforge.registries.IdMappingEvent$IdRemapping"
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$IdMappingEvent$ModRemapping} from "net.neoforged.neoforge.registries.IdMappingEvent$ModRemapping"

/**
 * 
 * @deprecated
 */
export class $IdMappingEvent extends $Event {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($Map$$Type<($ResourceLocation$$Type), ($IdMappingEvent$IdRemapping$$Type)>)>, arg1: boolean)

public "isFrozen"(): boolean
public "getRemaps"(arg0: $ResourceLocation$$Type): $ImmutableList<($IdMappingEvent$ModRemapping)>
public "getRegistries"(): $ImmutableSet<($ResourceLocation)>
get "frozen"(): boolean
get "registries"(): $ImmutableSet<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$$Type = ($IdMappingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdMappingEvent$$Original = $IdMappingEvent;}
declare module "net.neoforged.neoforge.registries.datamaps.RegisterDataMapTypesEvent" {
import {$Map$$Type} from "java.util.Map"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterDataMapTypesEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $Map$$Type<($ResourceKey$$Type<($Registry$$Type<(never)>)>), ($Map$$Type<($ResourceLocation$$Type), ($DataMapType$$Type<(never), (never)>)>)>)

public "register"<T, R>(arg0: $DataMapType$$Type<(R), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterDataMapTypesEvent$$Type = ($RegisterDataMapTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterDataMapTypesEvent$$Original = $RegisterDataMapTypesEvent;}
declare module "net.neoforged.neoforge.registries.holdersets.HolderSetType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $HolderSetType$$Interface {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeHolderSetType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeHolderSetTypeTag
}

export class $HolderSetType implements $HolderSetType$$Interface {
 "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
 "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSetType$$Type = (Special.NeoforgeHolderSetType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderSetType$$Original = $HolderSetType;}
declare module "net.neoforged.neoforge.registries.DataPackRegistryEvent$NewRegistry" {
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DataPackRegistryEvent} from "net.neoforged.neoforge.registries.DataPackRegistryEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
constructor()

public "dataPackRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<(T)>): void
public "dataPackRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<(T)>, arg2: $Codec$$Type<(T)>, arg3: $Consumer$$Type<($RegistryBuilder<(T)>)>): void
public "dataPackRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<(T)>, arg2: $Codec$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataPackRegistryEvent$NewRegistry$$Type = ($DataPackRegistryEvent$NewRegistry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataPackRegistryEvent$NewRegistry$$Original = $DataPackRegistryEvent$NewRegistry;}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapType$Builder" {
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataMapType} from "net.neoforged.neoforge.registries.datamaps.DataMapType"

export class $DataMapType$Builder<T, R> {
public "build"(): $DataMapType<(R), (T)>
public "synced"(arg0: $Codec$$Type<(T)>, arg1: boolean): $DataMapType$Builder<(T), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapType$Builder$$Type<T, R> = ($DataMapType$Builder<(T), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataMapType$Builder$$Original<T, R> = $DataMapType$Builder<(T), (R)>;}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapsUpdatedEvent$UpdateCause" {
import {$Enum} from "java.lang.Enum"

export class $DataMapsUpdatedEvent$UpdateCause extends $Enum<($DataMapsUpdatedEvent$UpdateCause)> {
static readonly "CLIENT_SYNC": $DataMapsUpdatedEvent$UpdateCause
static readonly "SERVER_RELOAD": $DataMapsUpdatedEvent$UpdateCause

public static "values"(): ($DataMapsUpdatedEvent$UpdateCause)[]
public static "valueOf"(arg0: StringJS): $DataMapsUpdatedEvent$UpdateCause
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapsUpdatedEvent$UpdateCause$$Type = (("client_sync") | ("server_reload"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataMapsUpdatedEvent$UpdateCause$$Original = $DataMapsUpdatedEvent$UpdateCause;}
declare module "net.neoforged.neoforge.registries.callback.RegistryCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistryCallback$$Interface<T> {
}

export class $RegistryCallback<T> implements $RegistryCallback$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryCallback$$Type<T> = ($RegistryCallback<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryCallback$$Original<T> = $RegistryCallback<(T)>;}
declare module "net.neoforged.neoforge.registries.NewRegistryEvent" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $NewRegistryEvent extends $Event implements $IModBusEvent$$Interface {
public "register"<T>(arg0: $Registry$$Type<(T)>): void
public "create"<T>(arg0: $RegistryBuilder$$Type<(T)>): $Registry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewRegistryEvent$$Type = ($NewRegistryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NewRegistryEvent$$Original = $NewRegistryEvent;}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$DataMapType$Builder} from "net.neoforged.neoforge.registries.datamaps.DataMapType$Builder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $DataMapType<R, T> {
public static "builder"<T, R>(arg0: $ResourceLocation$$Type, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Codec$$Type<(T)>): $DataMapType$Builder<(T), (R)>
public "id"(): $ResourceLocation
public "mandatorySync"(): boolean
public "registryKey"(): $ResourceKey<($Registry<(R)>)>
public "networkCodec"(): $Codec<(T)>
public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapType$$Type<R, T> = ($DataMapType<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataMapType$$Original<R, T> = $DataMapType<(R), (T)>;}
declare module "net.neoforged.neoforge.registries.holdersets.NotHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $NotHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotHolderSet$Type$$Type = ($NotHolderSet$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NotHolderSet$Type$$Original = $NotHolderSet$Type;}
declare module "net.neoforged.neoforge.registries.datamaps.IWithData" {
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"

export interface $IWithData$$Interface<R> {
}

export class $IWithData<R> implements $IWithData$$Interface {
 "getData"<T>(arg0: $DataMapType$$Type<(R), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithData$$Type<R> = ($IWithData<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWithData$$Original<R> = $IWithData<(R)>;}
declare module "net.neoforged.neoforge.registries.IdMappingEvent$ModRemapping" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export class $IdMappingEvent$ModRemapping {
readonly "registry": $ResourceLocation
readonly "newId": integer
readonly "oldId": integer
readonly "key": $ResourceLocation

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$ModRemapping$$Type = ($IdMappingEvent$ModRemapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdMappingEvent$ModRemapping$$Original = $IdMappingEvent$ModRemapping;}
declare module "net.neoforged.neoforge.registries.RegistryBuilder" {
import {$RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BakeCallback$$Type} from "net.neoforged.neoforge.registries.callback.BakeCallback"
import {$ClearCallback$$Type} from "net.neoforged.neoforge.registries.callback.ClearCallback"
import {$AddCallback$$Type} from "net.neoforged.neoforge.registries.callback.AddCallback"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $RegistryBuilder<T> {
constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>)

public "callback"(arg0: $RegistryCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "create"(): $Registry<(T)>
public "sync"(arg0: boolean): $RegistryBuilder<(T)>
public "maxId"(arg0: integer): $RegistryBuilder<(T)>
public "onClear"(arg0: $ClearCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "onBake"(arg0: $BakeCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "onAdd"(arg0: $AddCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceKey$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceLocation$$Type): $RegistryBuilder<(T)>
public "disableRegistrationCheck"(): $RegistryBuilder<(T)>
/**
 * 
 * @deprecated
 */
public "withIntrusiveHolders"(): $RegistryBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryBuilder$$Original<T> = $RegistryBuilder<(T)>;}
declare module "net.neoforged.neoforge.registries.RegisterEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RegisterEvent$RegisterHelper$$Type} from "net.neoforged.neoforge.registries.RegisterEvent$RegisterHelper"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegisterEvent extends $Event implements $IModBusEvent$$Interface {
public "register"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Consumer$$Type<($RegisterEvent$RegisterHelper<(T)>)>): void
public "register"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type, arg2: $Supplier$$Type<(T)>): void
public "getRegistryKey"(): $ResourceKey<($Registry<(never)>)>
public "getRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Registry<(T)>
public "getRegistry"(): $Registry<(never)>
get "registryKey"(): $ResourceKey<($Registry<(never)>)>
get "registry"(): $Registry<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$$Type = ($RegisterEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterEvent$$Original = $RegisterEvent;}
declare module "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet" {
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
import {$Either} from "com.mojang.datafixers.util.Either"
import {$Function$$Type} from "java.util.function.Function"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Interface} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"
import {$HolderSetType} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"

export interface $ICustomHolderSet$$Interface<T> extends $HolderSet$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<$Holder<(T)>>;
}

export class $ICustomHolderSet<T> implements $ICustomHolderSet$$Interface {
 "type"(): $HolderSetType
 "serializationType"(): $IHolderSetExtension$SerializationType
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
 "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
 "iterator"(): $Iterator<($Holder<(T)>)>
 "spliterator"(): $Spliterator<($Holder<(T)>)>
 "forEach"(arg0: $Consumer$$Type<($Holder<(T)>)>): void
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomHolderSet$$Type<T> = ($ICustomHolderSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomHolderSet$$Original<T> = $ICustomHolderSet<(T)>;}
declare module "net.neoforged.neoforge.registries.ModifyRegistriesEvent" {
import {$Iterable} from "java.lang.Iterable"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $ModifyRegistriesEvent extends $Event implements $IModBusEvent$$Interface {
public "getRegistries"(): $Iterable<($Registry<(never)>)>
public "getRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Registry<(T)>
get "registries"(): $Iterable<($Registry<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyRegistriesEvent$$Type = ($ModifyRegistriesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyRegistriesEvent$$Original = $ModifyRegistriesEvent;}
declare module "net.neoforged.neoforge.registries.holdersets.AnyHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AnyHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyHolderSet$Type$$Type = ($AnyHolderSet$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnyHolderSet$Type$$Original = $AnyHolderSet$Type;}
declare module "net.neoforged.neoforge.registries.IdMappingEvent$IdRemapping" {
import {$Record} from "java.lang.Record"

export class $IdMappingEvent$IdRemapping extends $Record {
constructor(currId: integer, newId: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "newId"(): integer
public "currId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$IdRemapping$$Type = ({"newId"?: integer, "currId"?: integer}) | ([newId?: integer, currId?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdMappingEvent$IdRemapping$$Original = $IdMappingEvent$IdRemapping;}
declare module "net.neoforged.neoforge.registries.datamaps.builtin.Compostable" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $Compostable extends $Record {
static readonly "CODEC": $Codec<($Compostable)>
static readonly "CHANCE_CODEC": $Codec<($Compostable)>

constructor(arg0: float)
constructor(chance: float, canVillagerCompost: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "chance"(): float
public "canVillagerCompost"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Compostable$$Type = ({"chance"?: float, "canVillagerCompost"?: boolean}) | ([chance?: float, canVillagerCompost?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Compostable$$Original = $Compostable;}
declare module "net.neoforged.neoforge.registries.callback.BakeCallback" {
import {$RegistryCallback$$Interface} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"

export interface $BakeCallback$$Interface<T> extends $RegistryCallback$$Interface<(T)> {

(arg0: $Registry<(T)>): void
}

export class $BakeCallback<T> implements $BakeCallback$$Interface {
 "onBake"(arg0: $Registry$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakeCallback$$Type<T> = ((arg0: $Registry<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakeCallback$$Original<T> = $BakeCallback<(T)>;}
declare module "net.neoforged.neoforge.registries.callback.AddCallback" {
import {$RegistryCallback$$Interface} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $AddCallback$$Interface<T> extends $RegistryCallback$$Interface<(T)> {

(arg0: $Registry<(T)>, arg1: integer, arg2: $ResourceKey<(T)>, arg3: T): void
}

export class $AddCallback<T> implements $AddCallback$$Interface {
 "onAdd"(arg0: $Registry$$Type<(T)>, arg1: integer, arg2: $ResourceKey$$Type<(T)>, arg3: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddCallback$$Type<T> = ((arg0: $Registry<(T)>, arg1: integer, arg2: $ResourceKey<(T)>, arg3: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddCallback$$Original<T> = $AddCallback<(T)>;}
declare module "net.neoforged.neoforge.registries.RegisterEvent$RegisterHelper" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $RegisterEvent$RegisterHelper$$Interface<T> {

(arg0: $ResourceLocation, arg1: T): void
}

export class $RegisterEvent$RegisterHelper<T> implements $RegisterEvent$RegisterHelper$$Interface {
 "register"(arg0: $ResourceKey$$Type<(T)>, arg1: T): void
 "register"(arg0: $ResourceLocation$$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$RegisterHelper$$Type<T> = ((arg0: $ResourceLocation, arg1: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterEvent$RegisterHelper$$Original<T> = $RegisterEvent$RegisterHelper<(T)>;}
declare module "net.neoforged.neoforge.registries.IRegistryExtension" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $IRegistryExtension$$Interface<T> {
get "maxId"(): integer
}

export class $IRegistryExtension<T> implements $IRegistryExtension$$Interface {
 "resolve"(arg0: $ResourceLocation$$Type): $ResourceLocation
 "resolve"(arg0: $ResourceKey$$Type<(T)>): $ResourceKey<(T)>
 "getId"(arg0: $ResourceKey$$Type<(T)>): integer
 "getId"(arg0: $ResourceLocation$$Type): integer
 "containsValue"(arg0: T): boolean
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
 "addCallback"<C extends $RegistryCallback<(object)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "getKeyOrNull"(arg0: T): $ResourceLocation
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "doesSync"(): boolean
 "getMaxId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegistryExtension$$Type<T> = ($IRegistryExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRegistryExtension$$Original<T> = $IRegistryExtension<(T)>;}
declare module "net.neoforged.neoforge.registries.holdersets.OrHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $OrHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrHolderSet$Type$$Type = ($OrHolderSet$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OrHolderSet$Type$$Original = $OrHolderSet$Type;}
