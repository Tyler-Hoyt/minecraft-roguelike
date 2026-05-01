declare module "io.wispforest.accessories.api.Accessory" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEventData} from "io.wispforest.accessories.api.SoundEventData"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $Accessory$$Interface {
}

export class $Accessory implements $Accessory$$Interface {
/**
 * 
 * @deprecated
 */
 "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "maxStackSize"(stack: $ItemStack$$Type): integer
 "getEquipSound"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): $SoundEventData
 "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
 "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
 "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
 "canEquipFromUse"(stack: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
/**
 * 
 * @deprecated
 */
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$$Type = ($Accessory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Accessory$$Original = $Accessory;}
declare module "io.wispforest.accessories.api.AccessoriesCapability" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Pair} from "it.unimi.dsi.fastutil.Pair"
import {$Optional} from "java.util.Optional"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AccessoriesContainer} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SlotTypeReference$$Type} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$EquipAction} from "io.wispforest.accessories.api.EquipAction"
import {$AccessoriesHolder} from "io.wispforest.accessories.api.AccessoriesHolder"
import {$TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$EquipCheck$$Type} from "io.wispforest.accessories.api.EquipCheck"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Accessory$$Type} from "io.wispforest.accessories.api.Accessory"
import {$SlotEntryReference} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export interface $AccessoriesCapability$$Interface {
get "holder"(): $AccessoriesHolder
get "slotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "allEquipped"(): $List<($SlotEntryReference)>
get "containers"(): $Map<(StringJS), ($AccessoriesContainer)>
}

export class $AccessoriesCapability implements $AccessoriesCapability$$Interface {
 "reset"(arg0: boolean): void
static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesCapability
 "getContainer"(slotType: $SlotType$$Type): $AccessoriesContainer
 "getContainer"(reference: $SlotTypeReference$$Type): $AccessoriesContainer
 "entity"(): $LivingEntity
 "clearSlotModifiers"(): void
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type): boolean
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): boolean
 "getHolder"(): $AccessoriesHolder
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean, additionalCheck: $TriFunction$$Type<($Accessory), ($ItemStack), ($SlotReference), (boolean)>): $Pair<($SlotReference), ($List<($ItemStack)>)>
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $ItemStackBasedPredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "getSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "getAllEquipped"(): $List<($SlotEntryReference)>
 "getAllEquipped"(arg0: boolean): $List<($SlotEntryReference)>
 "getEquipped"(item: $Item$$Type): $List<($SlotEntryReference)>
 "getEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $List<($SlotEntryReference)>
 "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesCapability)>
 "getContainers"(): $Map<(StringJS), ($AccessoriesContainer)>
 "updateContainers"(): void
 "canEquipAccessory"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $EquipCheck$$Type): $Pair<($SlotReference), ($EquipAction)>
 "canEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($EquipAction)>
 "getFirstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $SlotEntryReference
 "getFirstEquipped"(item: $Item$$Type): $SlotEntryReference
 "getFirstEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
 "clearCachedSlotModifiers"(): void
 "addPersistentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "attemptToEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($Optional<($ItemStack)>)>
 "attemptToEquipAccessory"(stack: $ItemStack$$Type): $SlotReference
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesCapability$$Type = ($AccessoriesCapability);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesCapability$$Original = $AccessoriesCapability;}
declare module "io.wispforest.accessories.api.caching.ItemStackBasedPredicate" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export class $ItemStackBasedPredicate implements $Predicate$$Interface<($ItemStack)> {
public "name"(): StringJS
public "equals"(other: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public static "ofPredicate"(predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public static "ofPredicate"(name: StringJS, predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public static "ofComponents"(...dataComponentTypes: ($DataComponentType$$Type<(never)>)[]): $ItemStackBasedPredicate
public static "ofComponents"(name: StringJS, ...dataComponentTypes: ($DataComponentType$$Type<(never)>)[]): $ItemStackBasedPredicate
public "extraStringData"(): StringJS
public static "ofItem"(name: StringJS, item: $Item$$Type): $ItemStackBasedPredicate
public static "ofItem"(item: $Item$$Type): $ItemStackBasedPredicate
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackBasedPredicate$$Type = ($ItemStackBasedPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackBasedPredicate$$Original = $ItemStackBasedPredicate;}
declare module "io.wispforest.accessories.api.slot.SlotTypeReference" {
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Record} from "java.lang.Record"

export class $SlotTypeReference extends $Record {
constructor(slotName: StringJS)

public "get"(level: $Level$$Type): $SlotType
public "get"(isClientSide: boolean): $SlotType
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slotName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotTypeReference$$Type = ({"slotName"?: StringJS}) | ([slotName?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotTypeReference$$Original = $SlotTypeReference;}
declare module "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AttributeModificationData} from "io.wispforest.accessories.api.attributes.AttributeModificationData"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryAttributeBuilder {
constructor()
constructor(slotName: StringJS, slot: integer)
constructor(slotReference: $SlotReference$$Type)

public "getStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "equals"(obj: any): boolean
public "isEmpty"(): boolean
public "addFrom"(builder: $AccessoryAttributeBuilder$$Type): $AccessoryAttributeBuilder
public "getAttributeModifiers"(filterSlots: boolean): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(slotname: StringJS, slot: integer): StringJS
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(ref: $SlotReference$$Type): StringJS
public "getSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "getExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "removeStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "stackedAttributes"(): $Multimap<($Holder<($Attribute)>), ($AttributeModificationData)>
public "removeExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
public "exclusiveAttributes"(): $Map<($Holder<($Attribute)>), ($Map<($ResourceLocation), ($AttributeModificationData)>)>
get "empty"(): boolean
get "slotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryAttributeBuilder$$Type = ($AccessoryAttributeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryAttributeBuilder$$Original = $AccessoryAttributeBuilder;}
declare module "io.wispforest.accessories.api.slot.SlotReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$AccessoriesCapability} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$AccessoriesContainer} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $SlotReference$$Interface {
get "stack"(): $ItemStack
get "valid"(): boolean
set "stack"(value: $ItemStack$$Type)
}

export class $SlotReference implements $SlotReference$$Interface {
 "slot"(): integer
 "type"(): $SlotType
static "of"(livingEntity: $LivingEntity$$Type, slotName: StringJS, slot: integer): $SlotReference
 "getStack"(): $ItemStack
 "isValid"(): boolean
 "capability"(): $AccessoriesCapability
 "entity"(): $LivingEntity
 "slotContainer"(): $AccessoriesContainer
 "createSlotPath"(): StringJS
 "setStack"(stack: $ItemStack$$Type): boolean
 "slotName"(): StringJS
static "ofNest"(livingEntity: $LivingEntity$$Type, slotName: StringJS, initialHolderSlot: integer, innerSlotIndices: $List$$Type<(integer)>): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$$Type = ($SlotReference);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotReference$$Original = $SlotReference;}
declare module "io.wispforest.accessories.api.EquipAction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $EquipAction$$Interface {

(arg0: $ItemStack): ($ItemStack$$Type)?
}

export class $EquipAction implements $EquipAction$$Interface {
 "equipStack"(arg0: $ItemStack$$Type): $Optional<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipAction$$Type = ((arg0: $ItemStack) => ($ItemStack$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipAction$$Original = $EquipAction;}
declare module "io.wispforest.accessories.api.events.extra.PiglinNeutralInducer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $PiglinNeutralInducer$$Interface {

(arg0: $ItemStack, arg1: $SlotReference): $TriState$$Type
}

export class $PiglinNeutralInducer implements $PiglinNeutralInducer$$Interface {
static readonly "EVENT": $Event<($PiglinNeutralInducer)>

 "makePiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinNeutralInducer$$Type = ((arg0: $ItemStack, arg1: $SlotReference) => $TriState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PiglinNeutralInducer$$Original = $PiglinNeutralInducer;}
declare module "io.wispforest.accessories.api.DropRule" {
import {$Enum} from "java.lang.Enum"

export class $DropRule extends $Enum<($DropRule)> {
static readonly "DESTROY": $DropRule
static readonly "KEEP": $DropRule
static readonly "DEFAULT": $DropRule
static readonly "DROP": $DropRule

public static "values"(): ($DropRule)[]
public static "valueOf"(name: StringJS): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRule$$Type = (("keep") | ("drop") | ("destroy") | ("default"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropRule$$Original = $DropRule;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AccessoryItemAttributeModifiers$Entry extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers$Entry)>

constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
public "isStackable"(): boolean
public "slotName"(): StringJS
get "stackable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Entry$$Type = ({"attribute"?: $Holder$$Type<($Attribute)>, "slotName"?: StringJS, "isStackable"?: boolean, "modifier"?: $AttributeModifier$$Type}) | ([attribute?: $Holder$$Type<($Attribute)>, slotName?: StringJS, isStackable?: boolean, modifier?: $AttributeModifier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$Entry$$Original = $AccessoryItemAttributeModifiers$Entry;}
declare module "io.wispforest.accessories.api.EquipmentChecking" {
import {$Enum} from "java.lang.Enum"

export class $EquipmentChecking extends $Enum<($EquipmentChecking)> {
static readonly "ACCESSORIES_ONLY": $EquipmentChecking
static readonly "COSMETICALLY_OVERRIDABLE": $EquipmentChecking

public static "values"(): ($EquipmentChecking)[]
public static "valueOf"(name: StringJS): $EquipmentChecking
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentChecking$$Type = (("accessories_only") | ("cosmetically_overridable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipmentChecking$$Original = $EquipmentChecking;}
declare module "io.wispforest.accessories.api.attributes.AttributeModificationData" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AttributeModificationData extends $Record {
constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)
constructor(slotPath: StringJS, attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
public "slotPath"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeModificationData$$Type = ({"slotPath"?: StringJS, "attribute"?: $Holder$$Type<($Attribute)>, "modifier"?: $AttributeModifier$$Type}) | ([slotPath?: StringJS, attribute?: $Holder$$Type<($Attribute)>, modifier?: $AttributeModifier$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeModificationData$$Original = $AttributeModificationData;}
declare module "io.wispforest.accessories.api.slot.SlotType" {
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"

export interface $SlotType$$Interface {
}

export class $SlotType implements $SlotType$$Interface {
static readonly "EMPTY_SLOT_ICON": $ResourceLocation

 "name"(): StringJS
 "order"(): integer
 "amount"(): integer
 "validators"(): $Set<($ResourceLocation)>
 "icon"(): $ResourceLocation
 "translation"(): StringJS
 "dropRule"(): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$$Type = ($SlotType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotType$$Original = $SlotType;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessoryItemAttributeModifiers} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $AccessoryItemAttributeModifiers$Builder {
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "add"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "build"(): $AccessoryItemAttributeModifiers
public "showInTooltip"(value: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForSlot"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Builder$$Type = ($AccessoryItemAttributeModifiers$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$Builder$$Original = $AccessoryItemAttributeModifiers$Builder;}
declare module "io.wispforest.accessories.api.EquipCheck" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EquipCheck$$Interface {

(arg0: $ItemStack, arg1: boolean): boolean
}

export class $EquipCheck implements $EquipCheck$$Interface {
 "isValid"(arg0: $ItemStack$$Type, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCheck$$Type = ((arg0: $ItemStack, arg1: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipCheck$$Original = $EquipCheck;}
declare module "io.wispforest.accessories.api.events.extra.AllowWalkingOnSnow" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$Event} from "net.fabricmc.fabric.api.event.Event"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AllowWalkingOnSnow$$Interface {

(arg0: $ItemStack, arg1: $SlotReference): $TriState$$Type
}

export class $AllowWalkingOnSnow implements $AllowWalkingOnSnow$$Interface {
static readonly "EVENT": $Event<($AllowWalkingOnSnow)>

 "allowWalkingOnSnow"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowWalkingOnSnow$$Type = ((arg0: $ItemStack, arg1: $SlotReference) => $TriState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllowWalkingOnSnow$$Original = $AllowWalkingOnSnow;}
declare module "io.wispforest.accessories.api.SoundEventData" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $SoundEventData extends $Record {
constructor(event: $Holder$$Type<($SoundEvent)>, volume: float, pitch: float)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "event"(): $Holder<($SoundEvent)>
public "pitch"(): float
public "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventData$$Type = ({"pitch"?: float, "event"?: $Holder$$Type<($SoundEvent)>, "volume"?: float}) | ([pitch?: float, event?: $Holder$$Type<($SoundEvent)>, volume?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEventData$$Original = $SoundEventData;}
declare module "io.wispforest.accessories.api.slot.SlotEntryReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $SlotEntryReference extends $Record {
constructor(reference: $SlotReference$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "reference"(): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotEntryReference$$Type = ({"stack"?: $ItemStack$$Type, "reference"?: $SlotReference$$Type}) | ([stack?: $ItemStack$$Type, reference?: $SlotReference$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotEntryReference$$Original = $SlotEntryReference;}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers" {
import {$AccessoryAttributeBuilder} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$Endec} from "io.wispforest.endec.Endec"
import {$AccessoryItemAttributeModifiers$Builder} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessoryItemAttributeModifiers$Entry, $AccessoryItemAttributeModifiers$Entry$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryItemAttributeModifiers extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers)>
static readonly "EMPTY": $AccessoryItemAttributeModifiers

constructor(modifiers: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, showInTooltip: boolean)

public "modifiers"(): $List<($AccessoryItemAttributeModifiers$Entry)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $AccessoryItemAttributeModifiers$Builder
public "withoutModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AccessoryItemAttributeModifiers
public "gatherAttributes"(slotReference: $SlotReference$$Type): $AccessoryAttributeBuilder
public "getModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModifier
public "hasModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): boolean
public "withModifierAddedForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers
public "showInTooltip"(): boolean
public "withModifierAdded"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: StringJS, isStackable: boolean): $AccessoryItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$$Type = ({"showInTooltip"?: boolean, "modifiers"?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>}) | ([showInTooltip?: boolean, modifiers?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItemAttributeModifiers$$Original = $AccessoryItemAttributeModifiers;}
declare module "io.wispforest.accessories.api.AccessoriesContainer" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ExpandedSimpleContainer} from "io.wispforest.accessories.impl.ExpandedSimpleContainer"
import {$List} from "java.util.List"
import {$SlotType} from "io.wispforest.accessories.api.slot.SlotType"
import {$AccessoriesCapability} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$Set} from "java.util.Set"
import {$SlotReference} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoriesContainer$$Interface {
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "size"(): integer
get "accessories"(): $ExpandedSimpleContainer
get "slotName"(): StringJS
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "cachedModifiers"(): $Set<($AttributeModifier)>
}

export class $AccessoriesContainer implements $AccessoriesContainer$$Interface {
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
 "getSize"(): integer
 "getAccessories"(): $ExpandedSimpleContainer
 "capability"(): $AccessoriesCapability
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "markChanged"(): void
 "markChanged"(arg0: boolean): void
 "renderOptions"(): $List<(boolean)>
 "createReference"(index: integer): $SlotReference
 "getSlotName"(): StringJS
 "clearModifiers"(): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getCosmeticAccessories"(): $ExpandedSimpleContainer
 "hasChanged"(): boolean
 "hasModifier"(arg0: $ResourceLocation$$Type): boolean
 "removeCachedModifiers"(arg0: $AttributeModifier$$Type): void
 "getModifiersForOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "addPersistentModifier"(arg0: $AttributeModifier$$Type): void
 "clearCachedModifiers"(): void
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "shouldRender"(index: integer): boolean
 "slotType"(): $SlotType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainer$$Type = ($AccessoriesContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesContainer$$Original = $AccessoriesContainer;}
declare module "io.wispforest.accessories.api.AccessoriesHolder" {
import {$PlayerEquipControl, $PlayerEquipControl$$Type} from "io.wispforest.accessories.impl.PlayerEquipControl"
import {$Optional} from "java.util.Optional"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessoriesHolderLookupCache} from "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache"

export interface $AccessoriesHolder$$Interface {
get "groupFiltersOpen"(): boolean
get "lookupCache"(): $AccessoriesHolderLookupCache
}

export class $AccessoriesHolder implements $AccessoriesHolder$$Interface {
static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
 "showAdvancedOptions"(): boolean
 "showAdvancedOptions"(arg0: boolean): $AccessoriesHolder
 "filteredGroups"(): $Set<(StringJS)>
 "filteredGroups"(arg0: $Set$$Type<(StringJS)>): $AccessoriesHolder
 "mainWidgetPosition"(): boolean
 "mainWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(): boolean
 "showUnusedSlots"(arg0: boolean): $AccessoriesHolder
 "equipControl"(arg0: $PlayerEquipControl$$Type): $AccessoriesHolder
 "equipControl"(): $PlayerEquipControl
 "cosmeticsShown"(arg0: boolean): $AccessoriesHolder
 "cosmeticsShown"(): boolean
 "columnAmount"(): integer
 "columnAmount"(arg0: integer): $AccessoriesHolder
 "showGroupFilter"(arg0: boolean): $AccessoriesHolder
 "showGroupFilter"(): boolean
 "isGroupFiltersOpen"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(): boolean
 "sideWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(value: boolean): $AccessoriesHolder
 "showCraftingGrid"(): boolean
 "showCraftingGrid"(arg0: boolean): $AccessoriesHolder
 "getLookupCache"(): $AccessoriesHolderLookupCache
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
 "widgetType"(arg0: integer): $AccessoriesHolder
 "widgetType"(): integer
/**
 * 
 * @deprecated
 */
 "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(value: boolean): $AccessoriesHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolder$$Type = ($AccessoriesHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoriesHolder$$Original = $AccessoriesHolder;}
