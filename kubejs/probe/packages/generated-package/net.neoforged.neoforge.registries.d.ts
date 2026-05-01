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
public "getRegistry"(): $Registry<(never)>
public "getRegistryKey"(): $ResourceKey<($Registry<(never)>)>
public "ifRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Consumer$$Type<($Registry<(T)>)>): void
get "cause"(): $DataMapsUpdatedEvent$UpdateCause
get "registries"(): $RegistryAccess
get "registry"(): $Registry<(never)>
get "registryKey"(): $ResourceKey<($Registry<(never)>)>
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
declare module "net.neoforged.neoforge.registries.datamaps.RegisterDataMapTypesEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
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
declare module "net.neoforged.neoforge.registries.DataPackRegistryEvent$NewRegistry" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
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
declare module "net.neoforged.neoforge.registries.datamaps.DataMapType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DataMapType$Builder} from "net.neoforged.neoforge.registries.datamaps.DataMapType$Builder"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $DataMapType<R, T> {
public static "builder"<T, R>(arg0: $ResourceLocation$$Type, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Codec$$Type<(T)>): $DataMapType$Builder<(T), (R)>
public "id"(): $ResourceLocation
public "mandatorySync"(): boolean
public "registryKey"(): $ResourceKey<($Registry<(R)>)>
public "codec"(): $Codec<(T)>
public "networkCodec"(): $Codec<(T)>
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
declare module "net.neoforged.neoforge.registries.RegisterEvent" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RegisterEvent$RegisterHelper$$Type} from "net.neoforged.neoforge.registries.RegisterEvent$RegisterHelper"
import {$Event} from "net.neoforged.bus.api.Event"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegisterEvent extends $Event implements $IModBusEvent$$Interface {
public "register"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Consumer$$Type<($RegisterEvent$RegisterHelper<(T)>)>): void
public "register"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $ResourceLocation$$Type, arg2: $Supplier$$Type<(T)>): void
public "getRegistry"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Registry<(T)>
public "getRegistry"(): $Registry<(never)>
public "getRegistryKey"(): $ResourceKey<($Registry<(never)>)>
get "registry"(): $Registry<(never)>
get "registryKey"(): $ResourceKey<($Registry<(never)>)>
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
declare module "net.neoforged.neoforge.registries.DeferredBlock" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $DeferredBlock<T extends $Block> extends $DeferredHolder<($Block), (T)> implements $ItemLike$$Interface {
public "asItem"(): $Item
public "toStack"(): $ItemStack
public "toStack"(arg0: integer): $ItemStack
public static "createBlock"<T extends $Block>(arg0: $ResourceLocation$$Type): $DeferredBlock<(T)>
public static "createBlock"<T extends $Block>(arg0: $ResourceKey$$Type<($Block)>): $DeferredBlock<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredBlock$$Type<T> = ($DeferredBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredBlock$$Original<T> = $DeferredBlock<(T)>;}
declare module "net.neoforged.neoforge.registries.IdMappingEvent$IdRemapping" {
import {$Record} from "java.lang.Record"

export class $IdMappingEvent$IdRemapping extends $Record {
constructor(currId: integer, newId: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "currId"(): integer
public "newId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$IdRemapping$$Type = ({"currId"?: integer, "newId"?: integer}) | ([currId?: integer, newId?: integer]);
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
declare module "net.neoforged.neoforge.registries.holdersets.OrHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $OrHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
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
declare module "net.neoforged.neoforge.registries.holdersets.AndHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AndHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
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
declare module "net.neoforged.neoforge.registries.DeferredHolder" {
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Interface} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$Holder$Kind} from "net.minecraft.core.Holder$Kind"

export class $DeferredHolder<R, T> implements $Holder$$Interface<(R)>, $Supplier$$Interface<(T)> {
public "get"(): T
public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getKey"(): $ResourceKey<(R)>
public "kind"(): $Holder$Kind
public "getId"(): $ResourceLocation
public static "create"<R, T>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $ResourceLocation$$Type): $DeferredHolder<(R), (T)>
public static "create"<R, T>(arg0: $ResourceKey$$Type<(R)>): $DeferredHolder<(R), (T)>
public static "create"<R, T>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $DeferredHolder<(R), (T)>
public "unwrap"(): $Either<($ResourceKey<(R)>), (R)>
public "is"(arg0: $ResourceLocation$$Type): boolean
public "test"(arg0: $Predicate$$Type<($ResourceKey<(R)>)>): boolean
public "tags"(): $Stream<($TagKey<(R)>)>
public "getData"<Z>(arg0: $DataMapType$$Type<(R), (Z)>): Z
public "isBound"(): boolean
public "canSerializeIn"(arg0: $HolderOwner$$Type<(R)>): boolean
public "unwrapKey"(): $Optional<($ResourceKey<(R)>)>
public "asOptional"(): $Optional<(T)>
public "getDelegate"(): $Holder<(R)>
public static "direct"<T>(arg0: R): $Holder<(R)>
public "getRegisteredName"(): StringJS
/**
 * Test if a tag matches the object this holder holds.
 */
public "isTag"(tagKey: $ResourceLocation$$Type): boolean
public "unwrapLookup"(): $HolderLookup$RegistryLookup<(R)>
get "key"(): $ResourceKey<(R)>
get "id"(): $ResourceLocation
get "bound"(): boolean
get "delegate"(): $Holder<(R)>
get "registeredName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredHolder$$Type<R, T> = ($DeferredHolder<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredHolder$$Original<R, T> = $DeferredHolder<(R), (T)>;}
declare module "net.neoforged.neoforge.registries.DeferredRegister$DataComponents" {
import {$DataComponentType$Builder$$Type} from "net.minecraft.core.component.DataComponentType$Builder"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $DeferredRegister$DataComponents extends $DeferredRegister<($DataComponentType<(never)>)> {
public "registerComponentType"<D>(arg0: StringJS, arg1: $UnaryOperator$$Type<($DataComponentType$Builder<(D)>)>): $DeferredHolder<($DataComponentType<(never)>), ($DataComponentType<(D)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$DataComponents$$Type = ($DeferredRegister$DataComponents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredRegister$DataComponents$$Original = $DeferredRegister$DataComponents;}
declare module "net.neoforged.neoforge.registries.IdMappingEvent" {
import {$IdMappingEvent$IdRemapping$$Type} from "net.neoforged.neoforge.registries.IdMappingEvent$IdRemapping"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
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
public "getRegistries"(): $ImmutableSet<($ResourceLocation)>
public "getRemaps"(arg0: $ResourceLocation$$Type): $ImmutableList<($IdMappingEvent$ModRemapping)>
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
declare module "net.neoforged.neoforge.registries.holdersets.HolderSetType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
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
 "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
 "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
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
declare module "net.neoforged.neoforge.registries.holdersets.NotHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $NotHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
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
declare module "net.neoforged.neoforge.registries.DeferredRegister" {
import {$DeferredRegister$DataComponents} from "net.neoforged.neoforge.registries.DeferredRegister$DataComponents"
import {$Collection} from "java.util.Collection"
import {$RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DeferredRegister$Blocks} from "net.neoforged.neoforge.registries.DeferredRegister$Blocks"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Function$$Type} from "java.util.function.Function"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredRegister$Items} from "net.neoforged.neoforge.registries.DeferredRegister$Items"

export class $DeferredRegister<T> {
public "register"<I>(arg0: StringJS, arg1: $Supplier$$Type<(I)>): $DeferredHolder<(T), (I)>
public "register"<I>(arg0: StringJS, arg1: $Function$$Type<($ResourceLocation), (I)>): $DeferredHolder<(T), (I)>
public "register"(arg0: $IEventBus$$Type): void
public static "create"<T>(arg0: $Registry$$Type<(T)>, arg1: StringJS): $DeferredRegister<(T)>
public static "create"<B>(arg0: $ResourceLocation$$Type, arg1: StringJS): $DeferredRegister<(B)>
public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: StringJS): $DeferredRegister<(T)>
public "getEntries"(): $Collection<($DeferredHolder<(T), (T)>)>
public "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
public "getNamespace"(): StringJS
public "getRegistry"(): $Supplier<($Registry<(T)>)>
public "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
public "getRegistryName"(): $ResourceLocation
public static "createDataComponents"(arg0: $ResourceKey$$Type<($Registry<($DataComponentType<(never)>)>)>, arg1: StringJS): $DeferredRegister$DataComponents
/**
 * 
 * @deprecated
 */
public static "createDataComponents"(arg0: StringJS): $DeferredRegister$DataComponents
public static "createBlocks"(arg0: StringJS): $DeferredRegister$Blocks
public "createTagKey"(arg0: StringJS): $TagKey<(T)>
public "createTagKey"(arg0: $ResourceLocation$$Type): $TagKey<(T)>
public static "createItems"(arg0: StringJS): $DeferredRegister$Items
public "makeRegistry"(arg0: $Consumer$$Type<($RegistryBuilder<(T)>)>): $Registry<(T)>
get "entries"(): $Collection<($DeferredHolder<(T), (T)>)>
get "namespace"(): StringJS
get "registry"(): $Supplier<($Registry<(T)>)>
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$$Type<T> = ($DeferredRegister<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredRegister$$Original<T> = $DeferredRegister<(T)>;}
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

public "create"(): $Registry<(T)>
public "sync"(arg0: boolean): $RegistryBuilder<(T)>
public "onAdd"(arg0: $AddCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "maxId"(arg0: integer): $RegistryBuilder<(T)>
public "onBake"(arg0: $BakeCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "onClear"(arg0: $ClearCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceKey$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceLocation$$Type): $RegistryBuilder<(T)>
/**
 * 
 * @deprecated
 */
public "withIntrusiveHolders"(): $RegistryBuilder<(T)>
public "disableRegistrationCheck"(): $RegistryBuilder<(T)>
public "callback"(arg0: $RegistryCallback$$Type<(T)>): $RegistryBuilder<(T)>
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
declare module "net.neoforged.neoforge.registries.DeferredRegister$Items" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$DeferredItem} from "net.neoforged.neoforge.registries.DeferredItem"

export class $DeferredRegister$Items extends $DeferredRegister<($Item)> {
public "register"(arg0: StringJS, arg1: $Function$$Type): $DeferredHolder
public "register"(arg0: StringJS, arg1: $Supplier$$Type): $DeferredHolder
public "registerItem"<I extends $Item>(arg0: StringJS, arg1: $Function$$Type<($Item$Properties), (I)>): $DeferredItem<(I)>
public "registerItem"<I extends $Item>(arg0: StringJS, arg1: $Function$$Type<($Item$Properties), (I)>, arg2: $Item$Properties$$Type): $DeferredItem<(I)>
public "registerSimpleBlockItem"(arg0: StringJS, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Item$Properties$$Type): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: StringJS, arg1: $Supplier$$Type<($Block$$Type)>): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: $Holder$$Type<($Block)>): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: $Holder$$Type<($Block)>, arg1: $Item$Properties$$Type): $DeferredItem<($BlockItem)>
public "registerSimpleItem"(arg0: StringJS): $DeferredItem<($Item)>
public "registerSimpleItem"(arg0: StringJS, arg1: $Item$Properties$$Type): $DeferredItem<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Items$$Type = ($DeferredRegister$Items);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredRegister$Items$$Original = $DeferredRegister$Items;}
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
import {$Function$$Type} from "java.util.function.Function"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Interface} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$HolderSetType} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$HolderSet$Named} from "net.minecraft.core.HolderSet$Named"

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
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
 "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
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
declare module "net.neoforged.neoforge.registries.DeferredItem" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $DeferredItem<T extends $Item> extends $DeferredHolder<($Item), (T)> implements $ItemLike$$Interface {
public "asItem"(): $Item
public "toStack"(): $ItemStack
public "toStack"(arg0: integer): $ItemStack
public static "createItem"<T extends $Item>(arg0: $ResourceLocation$$Type): $DeferredItem<(T)>
public static "createItem"<T extends $Item>(arg0: $ResourceKey$$Type<($Item)>): $DeferredItem<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredItem$$Type<T> = ($DeferredItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredItem$$Original<T> = $DeferredItem<(T)>;}
declare module "net.neoforged.neoforge.registries.holdersets.AnyHolderSet$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICustomHolderSet} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderSetType$$Interface} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AnyHolderSet$Type implements $HolderSetType$$Interface {
constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
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
declare module "net.neoforged.neoforge.registries.DeferredRegister$Blocks" {
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DeferredRegister} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$DeferredBlock} from "net.neoforged.neoforge.registries.DeferredBlock"

export class $DeferredRegister$Blocks extends $DeferredRegister<($Block)> {
public "register"(arg0: StringJS, arg1: $Supplier$$Type): $DeferredHolder
public "register"(arg0: StringJS, arg1: $Function$$Type): $DeferredHolder
public "registerBlock"<B extends $Block>(arg0: StringJS, arg1: $Function$$Type<($BlockBehaviour$Properties), (B)>): $DeferredBlock<(B)>
public "registerBlock"<B extends $Block>(arg0: StringJS, arg1: $Function$$Type<($BlockBehaviour$Properties), (B)>, arg2: $BlockBehaviour$Properties$$Type): $DeferredBlock<(B)>
public "registerSimpleBlock"(arg0: StringJS): $DeferredBlock<($Block)>
public "registerSimpleBlock"(arg0: StringJS, arg1: $BlockBehaviour$Properties$$Type): $DeferredBlock<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Blocks$$Type = ($DeferredRegister$Blocks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredRegister$Blocks$$Original = $DeferredRegister$Blocks;}
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
 "getMaxId"(): integer
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "doesSync"(): boolean
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
 "addCallback"<C extends $RegistryCallback<(object)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "getKeyOrNull"(arg0: T): $ResourceLocation
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
