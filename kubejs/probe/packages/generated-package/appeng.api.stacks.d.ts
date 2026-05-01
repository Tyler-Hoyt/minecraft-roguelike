declare module "appeng.api.stacks.KeyCounter" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Spliterator} from "java.util.Spliterator"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Set} from "java.util.Set"
import {$Class$$Type} from "java.lang.Class"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Object2LongMap$Entry, $Object2LongMap$Entry$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongMap$Entry"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $KeyCounter implements $Iterable$$Interface<($Object2LongMap$Entry<($AEKey)>)> {
constructor()

public "remove"(arg0: $AEKey$$Type): long
public "remove"(arg0: $AEKey$$Type, arg1: long): void
public "size"(): integer
public "reset"(): void
public "get"(arg0: $AEKey$$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: $AEKey$$Type, arg1: long): void
public "iterator"(): $Iterator<($Object2LongMap$Entry<($AEKey)>)>
public "addAll"(arg0: $KeyCounter$$Type): void
public "set"(arg0: $AEKey$$Type, arg1: long): void
public "keySet"(): $Set<($AEKey)>
public "removeAll"(arg0: $KeyCounter$$Type): void
public "getFirstEntry"(): $Object2LongMap$Entry<($AEKey)>
public "getFirstEntry"<T extends $AEKey>(arg0: $Class$$Type<(T)>): $Object2LongMap$Entry<($AEKey)>
public "removeEmptySubmaps"(): void
public "removeZeros"(): void
public "getFirstKey"<T extends $AEKey>(arg0: $Class$$Type<(T)>): T
public "getFirstKey"(): $AEKey
public "findFuzzy"(arg0: $AEKey$$Type, arg1: $FuzzyMode$$Type): $Collection<($Object2LongMap$Entry<($AEKey)>)>
public "spliterator"(): $Spliterator<($Object2LongMap$Entry<($AEKey)>)>
public "forEach"(arg0: $Consumer$$Type<($Object2LongMap$Entry<($AEKey)>)>): void
[Symbol.iterator](): IterableIterator<$Object2LongMap$Entry<($AEKey)>>;
get "empty"(): boolean
get "firstEntry"(): $Object2LongMap$Entry<($AEKey)>
get "firstKey"(): $AEKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCounter$$Type = ($KeyCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyCounter$$Original = $KeyCounter;}
declare module "appeng.api.stacks.AmountFormat" {
import {$Enum} from "java.lang.Enum"

export class $AmountFormat extends $Enum<($AmountFormat)> {
static readonly "SLOT_LARGE_FONT": $AmountFormat
static readonly "SLOT": $AmountFormat
static readonly "FULL": $AmountFormat

public static "values"(): ($AmountFormat)[]
public static "valueOf"(arg0: StringJS): $AmountFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmountFormat$$Type = (("full") | ("slot") | ("slot_large_font"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmountFormat$$Original = $AmountFormat;}
declare module "appeng.api.stacks.AEKeyType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEKeyFilter} from "appeng.api.storage.AEKeyFilter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AmountFormat$$Type} from "appeng.api.stacks.AmountFormat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Stream} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<($AEKey$$Type)>, arg2: $Component$$Type)

public "toString"(): StringJS
public "contains"(arg0: $AEKey$$Type): boolean
public "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public static "fluids"(): $AEKeyType
public static "items"(): $AEKeyType
public "tryCast"(arg0: $AEKey$$Type): $AEKey
public "codec"(): $MapCodec<($AEKey)>
public "supportsFuzzyRangeSearch"(): boolean
public "getAmountPerOperation"(): integer
public "getTagNames"(): $Stream<($TagKey<(never)>)>
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getUnitSymbol"(): StringJS
public "getAmountPerUnit"(): integer
public "getAmountPerByte"(): integer
public "formatAmount"(arg0: long, arg1: $AmountFormat$$Type): StringJS
public "getRawId"(): byte
public static "fromRawId"(arg0: integer): $AEKeyType
public "loadKeyFromTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEKey
public "getDescription"(): $Component
public "getKeyClass"(): $Class<($AEKey)>
get "id"(): $ResourceLocation
get "amountPerOperation"(): integer
get "tagNames"(): $Stream<($TagKey<(never)>)>
get "unitSymbol"(): StringJS
get "amountPerUnit"(): integer
get "amountPerByte"(): integer
get "rawId"(): byte
get "description"(): $Component
get "keyClass"(): $Class<($AEKey)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Ae2Keytypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.Ae2KeytypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyType$$Type = (Special.Ae2Keytypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEKeyType$$Original = $AEKeyType;}
declare module "appeng.api.stacks.AEItemKey" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AEKeyFilter} from "appeng.api.storage.AEKeyFilter"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AEItemKey extends $AEKey {
static readonly "CODEC": $Codec<($AEItemKey)>
static readonly "MAP_CODEC": $MapCodec<($AEItemKey)>
static readonly "TYPE_FIELD": StringJS
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>

public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Ingredient$$Type): boolean
public "matches"(arg0: $ItemStack$$Type): boolean
public static "matches"(arg0: $AEKey$$Type, arg1: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemStack$$Type): $AEItemKey
public static "of"(arg0: $ItemLike$$Type): $AEItemKey
public static "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public "is"(arg0: $ItemLike$$Type): boolean
public static "is"(arg0: $AEKey$$Type): boolean
public "getItem"(): $Item
public static "fromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEItemKey
public "isDamaged"(): boolean
public "toStack"(): $ItemStack
public "toStack"(arg0: integer): $ItemStack
public "getPrimaryKey"(): any
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchValue"(): integer
public "getFuzzySearchMaxValue"(): integer
public static "fromTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEItemKey
public "getReadOnlyStack"(): $ItemStack
public "getMaxStackSize"(): integer
public "dropSecondary"(): $AEKey
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "hasComponents"(): boolean
public "addDrops"(arg0: long, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $Level$$Type, arg3: $BlockPos$$Type): void
public "isTagged"(arg0: $TagKey$$Type<(never)>): boolean
public "toTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "item"(): $Item
get "damaged"(): boolean
get "primaryKey"(): any
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "readOnlyStack"(): $ItemStack
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEItemKey$$Type = ($AEItemKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEItemKey$$Original = $AEItemKey;}
declare module "appeng.api.stacks.AEFluidKeys" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $AEFluidKeys extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEFluidKeys$$Type = ($AEFluidKeys);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEFluidKeys$$Original = $AEFluidKeys;}
declare module "appeng.api.stacks.GenericStack" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $GenericStack extends $Record {
static readonly "FAULT_TOLERANT_LIST_CODEC": $Codec<($List<($GenericStack)>)>
static readonly "CODEC": $Codec<($GenericStack)>
static readonly "AMOUNT_FIELD": StringJS
static readonly "FAULT_TOLERANT_NULLABLE_LIST_CODEC": $Codec<($List<($GenericStack)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GenericStack)>

constructor(what: $AEKey$$Type, amount: long)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "isWrapped"(arg0: $ItemStack$$Type): boolean
public static "sum"(arg0: $GenericStack$$Type, arg1: $GenericStack$$Type): $GenericStack
public static "writeBuffer"(arg0: $GenericStack$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "what"(): $AEKey
public static "readBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): $GenericStack
public "amount"(): long
public static "fromItemStack"(arg0: $ItemStack$$Type): $GenericStack
public static "fromFluidStack"(arg0: $FluidStack$$Type): $GenericStack
public static "getStackSizeOrZero"(arg0: $GenericStack$$Type): long
public static "wrapInItemStack"(arg0: $AEKey$$Type, arg1: long): $ItemStack
public static "wrapInItemStack"(arg0: $GenericStack$$Type): $ItemStack
public static "unwrapItemStack"(arg0: $ItemStack$$Type): $GenericStack
public static "writeTag"(arg0: $HolderLookup$Provider$$Type, arg1: $GenericStack$$Type): $CompoundTag
public static "readTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStack$$Type = ({"what"?: $AEKey$$Type, "amount"?: long}) | ([what?: $AEKey$$Type, amount?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericStack$$Original = $GenericStack;}
declare module "appeng.api.stacks.AEKey" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$List$$Type} from "java.util.List"
import {$FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AmountFormat$$Type} from "appeng.api.stacks.AmountFormat"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AEKey {
static readonly "CODEC": $Codec<($AEKey)>
static readonly "MAP_CODEC": $MapCodec<($AEKey)>
static readonly "TYPE_FIELD": StringJS
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>

constructor()

public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "matches"(arg0: $GenericStack$$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public "getDisplayName"(): $Component
public "toTagGeneric"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getPrimaryKey"(): any
public "getModId"(): StringJS
public "fuzzyEquals"(arg0: $AEKey$$Type, arg1: $FuzzyMode$$Type): boolean
public "supportsFuzzyRangeSearch"(): boolean
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchValue"(): integer
public "getFuzzySearchMaxValue"(): integer
public static "writeKey"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AEKey$$Type): void
public "getAmountPerOperation"(): integer
public static "fromTagGeneric"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEKey
public "dropSecondary"(): $AEKey
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "writeOptionalKey"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AEKey$$Type): void
public static "readOptionalKey"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getUnitSymbol"(): StringJS
public "getAmountPerUnit"(): integer
public "getAmountPerByte"(): integer
public "formatAmount"(arg0: long, arg1: $AmountFormat$$Type): StringJS
public "hasComponents"(): boolean
public "addDrops"(arg0: long, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $Level$$Type, arg3: $BlockPos$$Type): void
public "isTagged"(arg0: $TagKey$$Type<(never)>): boolean
public "toTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public static "readKey"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "displayName"(): $Component
get "primaryKey"(): any
get "modId"(): StringJS
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "amountPerOperation"(): integer
get "unitSymbol"(): StringJS
get "amountPerUnit"(): integer
get "amountPerByte"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKey$$Type = ($AEKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEKey$$Original = $AEKey;}
declare module "appeng.api.stacks.AEItemKeys" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"

export class $AEItemKeys extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEItemKeys$$Type = ($AEItemKeys);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEItemKeys$$Original = $AEItemKeys;}
