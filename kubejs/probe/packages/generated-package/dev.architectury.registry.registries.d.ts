declare module "dev.architectury.registry.registries.RegistrySupplier" {
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Interface} from "net.minecraft.core.Holder"
import {$Registrar} from "dev.architectury.registry.registries.Registrar"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DeferredSupplier$$Interface} from "dev.architectury.registry.registries.DeferredSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrarManager} from "dev.architectury.registry.registries.RegistrarManager"
import {$Stream} from "java.util.stream.Stream"
import {$Holder$Kind} from "net.minecraft.core.Holder$Kind"

export interface $RegistrySupplier$$Interface<T> extends $DeferredSupplier$$Interface<(T)>, $Holder$$Interface<(T)> {
get "registrar"(): $Registrar<(T)>
get "registrarManager"(): $RegistrarManager
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "bound"(): boolean
get "registeredName"(): StringJS
get "present"(): boolean
get "orNull"(): T
get "delegate"(): $Holder<(T)>
}

export class $RegistrySupplier<T> implements $RegistrySupplier$$Interface {
 "listen"(callback: $Consumer$$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
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
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getDelegate"(): $Holder<(T)>
 "get"(): T
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySupplier$$Type<T> = ($RegistrySupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrySupplier$$Original<T> = $RegistrySupplier<(T)>;}
declare module "dev.architectury.registry.registries.DeferredSupplier" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$OptionalSupplier$$Interface} from "dev.architectury.utils.OptionalSupplier"
import {$Optional} from "java.util.Optional"
import {$Registry} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $DeferredSupplier$$Interface<T> extends $OptionalSupplier$$Interface<(T)> {
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryId"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "present"(): boolean
get "orNull"(): T
}

export class $DeferredSupplier<T> implements $DeferredSupplier$$Interface {
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredSupplier$$Original<T> = $DeferredSupplier<(T)>;}
declare module "dev.architectury.registry.registries.RegistrarBuilder" {
import {$RegistrarOption$$Type} from "dev.architectury.registry.registries.options.RegistrarOption"
import {$Registrar} from "dev.architectury.registry.registries.Registrar"

export interface $RegistrarBuilder$$Interface<T> {
}

export class $RegistrarBuilder<T> implements $RegistrarBuilder$$Interface {
 "option"(arg0: $RegistrarOption$$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarBuilder$$Type<T> = ($RegistrarBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrarBuilder$$Original<T> = $RegistrarBuilder<(T)>;}
declare module "dev.architectury.registry.registries.RegistrarManager" {
import {$RegistrarBuilder} from "dev.architectury.registry.registries.RegistrarBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RegistrarManager {
/**
 * 
 * @deprecated
 */
public "get"<T>(registry: $Registry$$Type<(T)>): $Registrar<(T)>
public static "get"(modId: StringJS): $RegistrarManager
public "get"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>): $Registrar<(T)>
public "builder"<T>(registryId: $ResourceLocation$$Type, ...typeGetter: (T)[]): $RegistrarBuilder<(T)>
/**
 * 
 * @deprecated
 */
public static "getId"<T>(object: T, fallback: $Registry$$Type<(T)>): $ResourceLocation
public static "getId"<T>(object: T, fallback: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceLocation
public "forRegistry"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>, callback: $Consumer$$Type<($Registrar<(T)>)>): void
public "getModId"(): StringJS
get "modId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarManager$$Type = ($RegistrarManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrarManager$$Original = $RegistrarManager;}
declare module "dev.architectury.registry.registries.options.RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption$$Interface {
}

export class $RegistrarOption implements $RegistrarOption$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarOption$$Type = ($RegistrarOption);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistrarOption$$Original = $RegistrarOption;}
declare module "dev.architectury.registry.registries.Registrar" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Optional} from "java.util.Optional"
import {$Spliterator} from "java.util.Spliterator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Map$Entry} from "java.util.Map$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistrySupplier, $RegistrySupplier$$Type} from "dev.architectury.registry.registries.RegistrySupplier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $Registrar$$Interface<T> extends $Iterable$$Interface<(T)> {
[Symbol.iterator](): IterableIterator<T>;
get "ids"(): $Set<($ResourceLocation)>
}

export class $Registrar<T> implements $Registrar$$Interface {
 "get"(arg0: $ResourceLocation$$Type): T
 "wrap"<R>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<($Registry<(T)>)>
 "listen"(arg0: $ResourceLocation$$Type, arg1: $Consumer$$Type<(T)>): void
 "listen"<R>(supplier: $RegistrySupplier$$Type<(R)>, callback: $Consumer$$Type<(R)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "delegate"(arg0: $ResourceLocation$$Type): $RegistrySupplier<(T)>
 "getHolder"(id: $ResourceLocation$$Type): $Holder<(T)>
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "byRawId"(arg0: integer): T
 "getRawId"(arg0: T): integer
 "getIds"(): $Set<($ResourceLocation)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registrar$$Type<T> = ($Registrar<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Registrar$$Original<T> = $Registrar<(T)>;}
