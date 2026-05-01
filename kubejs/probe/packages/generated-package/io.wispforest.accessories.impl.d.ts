declare module "io.wispforest.accessories.impl.InstanceEndec" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $InstanceEndec$$Interface {
}

export class $InstanceEndec implements $InstanceEndec$$Interface {
 "write"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
 "read"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceEndec$$Type = ($InstanceEndec);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceEndec$$Original = $InstanceEndec;}
declare module "io.wispforest.accessories.impl.PlayerEquipControl" {
import {$Enum} from "java.lang.Enum"

export class $PlayerEquipControl extends $Enum<($PlayerEquipControl)> {
static readonly "DISABLED": $PlayerEquipControl
static readonly "MUST_NOT_CROUCH": $PlayerEquipControl
static readonly "MUST_CROUCH": $PlayerEquipControl

public static "values"(): ($PlayerEquipControl)[]
public static "valueOf"(name: StringJS): $PlayerEquipControl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEquipControl$$Type = (("must_crouch") | ("must_not_crouch") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEquipControl$$Original = $PlayerEquipControl;}
declare module "io.wispforest.accessories.impl.AccessoriesHolderImpl" {
import {$InstanceEndec, $InstanceEndec$$Interface} from "io.wispforest.accessories.impl.InstanceEndec"
import {$Endec} from "io.wispforest.endec.Endec"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$AccessoriesContainer} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$AccessoriesHolder, $AccessoriesHolder$$Interface} from "io.wispforest.accessories.api.AccessoriesHolder"
import {$PlayerEquipControl, $PlayerEquipControl$$Type} from "io.wispforest.accessories.impl.PlayerEquipControl"
import {$MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AccessoriesHolderLookupCache} from "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache"

export class $AccessoriesHolderImpl implements $AccessoriesHolder$$Interface, $InstanceEndec$$Interface {
 "lookupCache": $AccessoriesHolderLookupCache
readonly "invalidStacks": $List<($ItemStack)>

constructor()

public static "of"(): $AccessoriesHolderImpl
public "init"(capability: $AccessoriesCapability$$Type): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(capability: $AccessoriesCapability$$Type, entity: $LivingEntity$$Type, carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(entity: $LivingEntity$$Type, carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(carrier: $MapCarrier$$Type, context: $SerializationContext$$Type): void
public "showAdvancedOptions"(): boolean
public "showAdvancedOptions"(value: boolean): $AccessoriesHolder
public "filteredGroups"(value: $Set$$Type<(StringJS)>): $AccessoriesHolder
public "filteredGroups"(): $Set<(StringJS)>
public "mainWidgetPosition"(value: boolean): $AccessoriesHolder
public "mainWidgetPosition"(): boolean
public "showUnusedSlots"(value: boolean): $AccessoriesHolder
public "showUnusedSlots"(): boolean
public "equipControl"(value: $PlayerEquipControl$$Type): $AccessoriesHolder
public "equipControl"(): $PlayerEquipControl
public "cosmeticsShown"(): boolean
public "cosmeticsShown"(value: boolean): $AccessoriesHolder
public "columnAmount"(value: integer): $AccessoriesHolder
public "columnAmount"(): integer
public "showGroupFilter"(): boolean
public "showGroupFilter"(value: boolean): $AccessoriesHolder
public "isGroupFiltersOpen"(): boolean
public "isGroupFiltersOpen"(value: boolean): $AccessoriesHolder
public "sideWidgetPosition"(): boolean
public "sideWidgetPosition"(value: boolean): $AccessoriesHolder
public "showCraftingGrid"(value: boolean): $AccessoriesHolder
public "showCraftingGrid"(): boolean
public "getLookupCache"(): $AccessoriesHolderLookupCache
public "setValidTypes"(validTypes: $Set$$Type<(StringJS)>): void
public "getSlotContainers"(): $Map<(StringJS), ($AccessoriesContainer)>
public "widgetType"(): integer
public "widgetType"(value: integer): $AccessoriesHolder
public static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
/**
 * 
 * @deprecated
 */
public "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
public "showUniqueSlots"(value: boolean): $AccessoriesHolder
public static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
/**
 * 
 * @deprecated
 */
public "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
public "linesShown"(value: boolean): $AccessoriesHolder
public static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
get "groupFiltersOpen"(): boolean
set "validTypes"(value: $Set$$Type<(StringJS)>)
get "slotContainers"(): $Map<(StringJS), ($AccessoriesContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolderImpl$$Type = ($AccessoriesHolderImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesHolderImpl$$Original = $AccessoriesHolderImpl;}
declare module "io.wispforest.accessories.impl.caching.EquipmentLookupCache" {
import {$ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$List} from "java.util.List"
import {$EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$SlotEntryReference} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export class $EquipmentLookupCache {
public "clearCache"(): void
public "isEquipped"(arg0: $ItemStackBasedPredicate$$Type): boolean
public "getAllEquipped"(): $List<($SlotEntryReference)>
public "getEquipped"(arg0: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
public "firstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
get "allEquipped"(): $List<($SlotEntryReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentLookupCache$$Type = ($EquipmentLookupCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentLookupCache$$Original = $EquipmentLookupCache;}
declare module "io.wispforest.accessories.impl.AccessoriesContainerImpl" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$InstanceEndec, $InstanceEndec$$Interface} from "io.wispforest.accessories.impl.InstanceEndec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$AccessoriesContainer$$Interface} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$SlotReference} from "io.wispforest.accessories.api.slot.SlotReference"
import {$MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ExpandedSimpleContainer} from "io.wispforest.accessories.impl.ExpandedSimpleContainer"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$ContainerListener$$Interface} from "net.minecraft.world.ContainerListener"
import {$Set} from "java.util.Set"
import {$KeyedEndec, $KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export class $AccessoriesContainerImpl implements $AccessoriesContainer$$Interface, $InstanceEndec$$Interface, $ContainerListener$$Interface {
static readonly "BASE_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "COSMETICS_KEY": $KeyedEndec<($ListTag)>
static readonly "SLOT_NAME_KEY": $KeyedEndec<(StringJS)>
static readonly "CACHED_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "PERSISTENT_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "ITEMS_KEY": $KeyedEndec<($ListTag)>
static readonly "RENDER_OPTIONS_KEY": $KeyedEndec<($List<(boolean)>)>
static readonly "CURRENT_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>

constructor(capability: $AccessoriesCapability$$Type, slotType: $SlotType$$Type)

public "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
public "update"(): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, sync: boolean): void
public "read"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, sync: boolean): void
public "getSize"(): integer
public "copyFrom"(other: $AccessoriesContainerImpl$$Type): void
public "getAccessories"(): $ExpandedSimpleContainer
public "capability"(): $AccessoriesCapability
public "removeModifier"(location: $ResourceLocation$$Type): void
public "markChanged"(resizingUpdate: boolean): void
public "renderOptions"(): $List<(boolean)>
public static "copyContainerList"(container: $SimpleContainer$$Type): $SimpleContainer
public "getSlotName"(): StringJS
public static "readContainers"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, ...keys: ($KeyedEndec$$Type<($ListTag$$Type)>)[]): $List<($SimpleContainer)>
public static "readContainer"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, key: $KeyedEndec$$Type<($ListTag$$Type)>): $SimpleContainer
public "clearModifiers"(): void
public "addTransientModifier"(modifier: $AttributeModifier$$Type): void
public "getCosmeticAccessories"(): $ExpandedSimpleContainer
public "hasChanged"(): boolean
public "hasModifier"(location: $ResourceLocation$$Type): boolean
public "removeCachedModifiers"(modifier: $AttributeModifier$$Type): void
public "getModifiersForOperation"(operation: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
public "addPersistentModifier"(modifier: $AttributeModifier$$Type): void
public "clearCachedModifiers"(): void
public "containerChanged"(container: $Container$$Type): void
public "getBaseSize"(): integer
public "getCachedModifiers"(): $Set<($AttributeModifier)>
public "markChanged"(): void
public "createReference"(index: integer): $SlotReference
public "shouldRender"(index: integer): boolean
public "slotType"(): $SlotType
public static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "size"(): integer
get "accessories"(): $ExpandedSimpleContainer
get "slotName"(): StringJS
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "baseSize"(): integer
get "cachedModifiers"(): $Set<($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainerImpl$$Type = ($AccessoriesContainerImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesContainerImpl$$Original = $AccessoriesContainerImpl;}
declare module "io.wispforest.accessories.impl.ExpandedSimpleContainer" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Spliterator} from "java.util.Spliterator"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AccessoriesContainerImpl$$Type} from "io.wispforest.accessories.impl.AccessoriesContainerImpl"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ExpandedSimpleContainer extends $SimpleContainer implements $Iterable$$Interface<($Pair<(integer), ($ItemStack)>)> {
constructor(container: $AccessoriesContainerImpl$$Type, size: integer, name: StringJS)
constructor(container: $AccessoriesContainerImpl$$Type, size: integer, name: StringJS, toggleNewlyConstructed: boolean)

public "name"(): StringJS
public "iterator"(): $Iterator<($Pair<(integer), ($ItemStack)>)>
public "validIndex"(slot: integer): boolean
public "getItem"(slot: integer): $ItemStack
public "wasNewlyConstructed"(): boolean
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "copyPrev"(prevContainer: $ExpandedSimpleContainer$$Type): void
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "fromTag"(containerNbt: $ListTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "isSlotFlagged"(slot: integer): boolean
public "setPreviousItem"(slot: integer, stack: $ItemStack$$Type): void
public "getPreviousItem"(slot: integer): $ItemStack
public "setFromPrev"(prevContainer: $ExpandedSimpleContainer$$Type): void
public "getMaxStackSize"(itemStack: $ItemStack$$Type): integer
public "parseOptional"(lookupProvider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $ItemStack
public "createTag"(provider: $HolderLookup$Provider$$Type): $ListTag
public "spliterator"(): $Spliterator<($Pair<(integer), ($ItemStack)>)>
public "forEach"(arg0: $Consumer$$Type<($Pair<(integer), ($ItemStack)>)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
[Symbol.iterator](): IterableIterator<$Pair<(integer), ($ItemStack)>>;
set "fromPrev"(value: $ExpandedSimpleContainer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedSimpleContainer$$Type = ($ExpandedSimpleContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExpandedSimpleContainer$$Original = $ExpandedSimpleContainer;}
declare module "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache" {
import {$AccessoriesHolderImpl$$Type} from "io.wispforest.accessories.impl.AccessoriesHolderImpl"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentLookupCache} from "io.wispforest.accessories.impl.caching.EquipmentLookupCache"
import {$ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SlotEntryReference} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export class $AccessoriesHolderLookupCache extends $EquipmentLookupCache {
constructor(holder: $AccessoriesHolderImpl$$Type)

public "clearCache"(): void
public "invalidateLookupData"(key: StringJS, stack: $ItemStack$$Type, types: $List$$Type<($DataComponentType$$Type<(never)>)>): void
public "isEquipped"(predicate: $ItemStackBasedPredicate$$Type): boolean
public "getAllEquipped"(): $List<($SlotEntryReference)>
public "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
public "firstEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
public "clearContainerCache"(key: StringJS): void
get "allEquipped"(): $List<($SlotEntryReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolderLookupCache$$Type = ($AccessoriesHolderLookupCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesHolderLookupCache$$Original = $AccessoriesHolderLookupCache;}
