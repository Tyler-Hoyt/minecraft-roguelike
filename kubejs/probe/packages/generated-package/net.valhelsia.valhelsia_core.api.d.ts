declare module "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistryClass$$Interface {
}

export class $RegistryClass implements $RegistryClass$$Interface {
 "load"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryClass$$Type = ($RegistryClass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryClass$$Original = $RegistryClass;}
declare module "net.valhelsia.valhelsia_core.api.common.registry.helper.RegistryHelper" {
import {$Registry} from "net.minecraft.core.Registry"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Class} from "java.lang.Class"
import {$RegistryClass} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $RegistryHelper<T, R extends $RegistryClass> {
public "getModId"(): StringJS
public "getRegistry"(): $ResourceKey<($Registry<(T)>)>
public "getRegistryClasses"(): $ImmutableList<($Class<(never)>)>
get "modId"(): StringJS
get "registry"(): $ResourceKey<($Registry<(T)>)>
get "registryClasses"(): $ImmutableList<($Class<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryHelper$$Type<T, R> = ($RegistryHelper<(T), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryHelper$$Original<T, R> = $RegistryHelper<(T), (R)>;}
declare module "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry" {
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Interface} from "net.minecraft.core.Holder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream} from "java.util.stream.Stream"
import {$Holder$Kind} from "net.minecraft.core.Holder$Kind"

export class $RegistryEntry<R, T> implements $Holder$$Interface<(R)>, $Supplier$$Interface<(T)> {
constructor(key: $ResourceKey$$Type<(R)>)

public "get"(): T
public "value"(): T
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "kind"(): $Holder$Kind
public "unwrap"(): $Either<($ResourceKey<(R)>), (R)>
public "test"(predicate: $Predicate$$Type<($ResourceKey<(R)>)>): boolean
public "is"(location: $ResourceLocation$$Type): boolean
public "tags"(): $Stream<($TagKey<(R)>)>
public "isBound"(): boolean
public "canSerializeIn"(owner: $HolderOwner$$Type<(R)>): boolean
public "unwrapKey"(): $Optional<($ResourceKey<(R)>)>
public static "direct"<T>(arg0: R): $Holder<(R)>
public "getRegisteredName"(): StringJS
/**
 * Test if a tag matches the object this holder holds.
 */
public "isTag"(tagKey: $ResourceLocation$$Type): boolean
public "getKey"(): $ResourceKey<(R)>
public "unwrapLookup"(): $HolderLookup$RegistryLookup<(R)>
public "getDelegate"(): $Holder<(R)>
public "getData"<T>(arg0: $DataMapType$$Type<(R), (T)>): T
get "bound"(): boolean
get "registeredName"(): StringJS
get "key"(): $ResourceKey<(R)>
get "delegate"(): $Holder<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<R, T> = ($RegistryEntry<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryEntry$$Original<R, T> = $RegistryEntry<(R), (T)>;}
declare module "net.valhelsia.valhelsia_core.api.common.registry.helper.MappedRegistryHelper" {
import {$Collection} from "java.util.Collection"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$RegistryEntry} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistryClass} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass"
import {$RegistryHelper} from "net.valhelsia.valhelsia_core.api.common.registry.helper.RegistryHelper"

export class $MappedRegistryHelper<T> extends $RegistryHelper<(T), ($RegistryClass)> {
constructor(registry: $ResourceKey$$Type<($Registry<(T)>)>, modId: StringJS, registryClasses: $ImmutableList$$Type<($Class$$Type<(never)>)>)

public "register"<O>(name: StringJS, object: $Supplier$$Type<(O)>): $RegistryEntry<(T), (O)>
public "registerInternal"<O, E extends $RegistryEntry<(object), (object)>>(name: StringJS, object: $Supplier$$Type<(O)>): E
public "getRegistryEntries"(): $Collection<($RegistryEntry<(T), (T)>)>
public "getRegistryClasses"(): $ImmutableList<($Class<(never)>)>
public "internalRegister"(): void
get "registryEntries"(): $Collection<($RegistryEntry<(T), (T)>)>
get "registryClasses"(): $ImmutableList<($Class<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappedRegistryHelper$$Type<T> = ($MappedRegistryHelper<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MappedRegistryHelper$$Original<T> = $MappedRegistryHelper<(T)>;}
declare module "net.valhelsia.valhelsia_core.api.common.util.ItemStackListGetter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ItemStackListGetter$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
get "stacks"(): $NonNullList<($ItemStack)>
}

export class $ItemStackListGetter implements $ItemStackListGetter$$Interface {
 "getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackListGetter$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackListGetter$$Original = $ItemStackListGetter;}
