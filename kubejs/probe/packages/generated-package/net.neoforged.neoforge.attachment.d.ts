declare module "net.neoforged.neoforge.attachment.AttachmentHolder" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Optional} from "java.util.Optional"
import {$IAttachmentHolder$$Interface} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AttachmentHolder implements $IAttachmentHolder$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor()

public "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "hasAttachments"(): boolean
public "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
public "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "hasData"(arg0: $AttachmentType$$Type<(never)>): boolean
public "serializeAttachments"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
public "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
public "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
public "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "syncData"(arg0: $AttachmentType$$Type<(never)>): void
public "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(never)>)>): void
public "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$$Type = ($AttachmentHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentHolder$$Original = $AttachmentHolder;}
declare module "net.neoforged.neoforge.attachment.AttachmentHolder$AsField" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$AttachmentHolder} from "net.neoforged.neoforge.attachment.AttachmentHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AttachmentHolder$AsField extends $AttachmentHolder {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $IAttachmentHolder$$Type)

public "deserializeInternal"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "syncData"(arg0: $AttachmentType$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$AsField$$Type = ($AttachmentHolder$AsField);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentHolder$AsField$$Original = $AttachmentHolder$AsField;}
declare module "net.neoforged.neoforge.attachment.IAttachmentSerializer" {
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentSerializer$$Interface<S extends $Tag, T> {
}

export class $IAttachmentSerializer<S extends $Tag, T> implements $IAttachmentSerializer$$Interface {
 "write"(arg0: T, arg1: $HolderLookup$Provider$$Type): S
 "read"(arg0: $IAttachmentHolder$$Type, arg1: S, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentSerializer$$Type<S, T> = ($IAttachmentSerializer<(S), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentSerializer$$Original<S, T> = $IAttachmentSerializer<(S), (T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentType$Builder" {
import {$StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IAttachmentCopyHandler$$Type} from "net.neoforged.neoforge.attachment.IAttachmentCopyHandler"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$AttachmentType} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AttachmentSyncHandler$$Type} from "net.neoforged.neoforge.attachment.AttachmentSyncHandler"

export class $AttachmentType$Builder<T> {
public "build"(): $AttachmentType<(T)>
public "sync"(arg0: $BiPredicate$$Type<($IAttachmentHolder), ($ServerPlayer)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $AttachmentType$Builder<(T)>
public "sync"(arg0: $AttachmentSyncHandler$$Type<(T)>): $AttachmentType$Builder<(T)>
public "sync"(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $AttachmentType$Builder<(T)>
public "copyOnDeath"(): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>, arg1: $Predicate$$Type<(T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $IAttachmentSerializer$$Type<(never), (T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>): $AttachmentType$Builder<(T)>
public "copyHandler"(arg0: $IAttachmentCopyHandler$$Type<(T)>): $AttachmentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Builder$$Type<T> = ($AttachmentType$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentType$Builder$$Original<T> = $AttachmentType$Builder<(T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentType" {
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$AttachmentType$Builder} from "net.neoforged.neoforge.attachment.AttachmentType$Builder"
import {$INBTSerializable} from "net.neoforged.neoforge.common.util.INBTSerializable"

export class $AttachmentType<T> {
public static "builder"<T>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "builder"<T>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(object)>>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(object)>>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeAttachmentTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeAttachmentTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$$Type<T> = (Special.NeoforgeAttachmentTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentType$$Original<T> = $AttachmentType<(T)>;}
declare module "net.neoforged.neoforge.attachment.IAttachmentCopyHandler" {
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentCopyHandler$$Interface<T> {

(arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider): T
}

export class $IAttachmentCopyHandler<T> implements $IAttachmentCopyHandler$$Interface {
 "copy"(arg0: T, arg1: $IAttachmentHolder$$Type, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentCopyHandler$$Type<T> = ((arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentCopyHandler$$Original<T> = $IAttachmentCopyHandler<(T)>;}
declare module "net.neoforged.neoforge.attachment.AttachmentSyncHandler" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $AttachmentSyncHandler$$Interface<T> {
}

export class $AttachmentSyncHandler<T> implements $AttachmentSyncHandler$$Interface {
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T, arg2: boolean): void
 "read"(arg0: $IAttachmentHolder$$Type, arg1: $RegistryFriendlyByteBuf$$Type, arg2: T): T
 "sendToPlayer"(arg0: $IAttachmentHolder$$Type, arg1: $ServerPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentSyncHandler$$Type<T> = ($AttachmentSyncHandler<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentSyncHandler$$Original<T> = $AttachmentSyncHandler<(T)>;}
declare module "net.neoforged.neoforge.attachment.IAttachmentHolder" {
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type} from "java.util.function.Supplier"

export interface $IAttachmentHolder$$Interface {
}

export class $IAttachmentHolder implements $IAttachmentHolder$$Interface {
 "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
 "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
 "hasAttachments"(): boolean
 "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "syncData"(arg0: $AttachmentType$$Type<(never)>): void
 "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(never)>)>): void
 "hasData"(arg0: $AttachmentType$$Type<(never)>): boolean
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentHolder$$Type = ($IAttachmentHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttachmentHolder$$Original = $IAttachmentHolder;}
