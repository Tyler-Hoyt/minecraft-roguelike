declare module "top.theillusivec4.curios.api.event.CurioDropsEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: $Collection$$Type<($ItemEntity$$Type)>, arg4: integer, arg5: boolean)

public "getSource"(): $DamageSource
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
public "getDrops"(): $Collection<($ItemEntity)>
public "isRecentlyHit"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "source"(): $DamageSource
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
get "drops"(): $Collection<($ItemEntity)>
get "recentlyHit"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDropsEvent$$Type = ($CurioDropsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioDropsEvent$$Original = $CurioDropsEvent;}
declare module "top.theillusivec4.curios.api.event.DropRulesEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tuple} from "net.minecraft.util.Tuple"

export class $DropRulesEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: integer, arg4: boolean)

public "getSource"(): $DamageSource
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
public "getOverrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
public "isRecentlyHit"(): boolean
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
get "source"(): $DamageSource
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
get "overrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
get "recentlyHit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRulesEvent$$Type = ($DropRulesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropRulesEvent$$Original = $DropRulesEvent;}
declare module "top.theillusivec4.curios.api.extensions.ICurioSlotExtension" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $ICurioSlotExtension$$Interface {
}

export class $ICurioSlotExtension implements $ICurioSlotExtension$$Interface {
static readonly "DEFAULT": $ICurioSlotExtension

static "from"(arg0: StringJS): $ICurioSlotExtension
 "getSlotTooltip"(arg0: $SlotContext$$Type, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getDisplayStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getCloneStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioSlotExtension$$Type = ($ICurioSlotExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioSlotExtension$$Original = $ICurioSlotExtension;}
declare module "top.theillusivec4.curios.api.event.CurioCanUnequipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanUnequipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "getUnequipResult"(): $TriState
public "setUnequipResult"(arg0: $TriState$$Type): void
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
get "unequipResult"(): $TriState
set "unequipResult"(value: $TriState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanUnequipEvent$$Type = ($CurioCanUnequipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanUnequipEvent$$Original = $CurioCanUnequipEvent;}
declare module "top.theillusivec4.curios.api.event.CurioCanEquipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanEquipEvent extends $LivingEvent {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $TriState$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getEquipResult"(): $TriState
public "getSlotContext"(): $SlotContext
public "setEquipResult"(arg0: $TriState$$Type): void
get "stack"(): $ItemStack
get "equipResult"(): $TriState
get "slotContext"(): $SlotContext
set "equipResult"(value: $TriState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanEquipEvent$$Type = ($CurioCanEquipEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCanEquipEvent$$Original = $CurioCanEquipEvent;}
declare module "top.theillusivec4.curios.api.type.util.IIconHelper" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

/**
 * 
 * @deprecated
 */
export interface $IIconHelper$$Interface {
}

export class $IIconHelper implements $IIconHelper$$Interface {
/**
 * 
 * @deprecated
 */
 "addIcon"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
/**
 * 
 * @deprecated
 */
 "clearIcons"(): void
/**
 * 
 * @deprecated
 */
 "getIcon"(arg0: StringJS): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIconHelper$$Type = ($IIconHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIconHelper$$Original = $IIconHelper;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurio$$Interface {

(): $ItemStack$$Type
get "stack"(): $ItemStack
}

export class $ICurio implements $ICurio$$Interface {
 "getStack"(): $ItemStack
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
 "canEquip"(arg0: $SlotContext$$Type): boolean
static "playBreakAnimation"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
 "curioTick"(arg0: $SlotContext$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean): $ICurio$DropRule
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$$Original = $ICurio;}
declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CurioAttributeModifierEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getId"(): $ResourceLocation
public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getOriginalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getSlotContext"(): $SlotContext
public "getItemStack"(): $ItemStack
public "clearModifiers"(): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "id"(): $ResourceLocation
get "originalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "slotContext"(): $SlotContext
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAttributeModifierEvent$$Type = ($CurioAttributeModifierEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioAttributeModifierEvent$$Original = $CurioAttributeModifierEvent;}
declare module "top.theillusivec4.curios.api.type.util.ISlotHelper" {
import {$Collection} from "java.util.Collection"
import {$ICurioStacksHandler} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$Optional} from "java.util.Optional"
import {$ISlotType, $ISlotType$$Type} from "top.theillusivec4.curios.api.type.ISlotType"
import {$Set} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SortedMap} from "java.util.SortedMap"

/**
 * 
 * @deprecated
 */
export interface $ISlotHelper$$Interface {
get "slotTypeIds"(): $Set<(StringJS)>
get "slotTypes"(): $Collection<($ISlotType)>
}

export class $ISlotHelper implements $ISlotHelper$$Interface {
/**
 * 
 * @deprecated
 */
 "clear"(): void
/**
 * 
 * @deprecated
 */
 "addSlotType"(arg0: $ISlotType$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotType"(arg0: StringJS): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotTypeIds"(): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "createSlots"(arg0: $LivingEntity$$Type): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "createSlots"(): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "setSlotsForType"(arg0: StringJS, arg1: $LivingEntity$$Type, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "getSlotsForType"(arg0: $LivingEntity$$Type, arg1: StringJS): integer
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(arg0: $LivingEntity$$Type): $Collection<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(): $Collection<($ISlotType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotHelper$$Type = ($ISlotHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotHelper$$Original = $ISlotHelper;}
declare module "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getTypes"(): $Set<(StringJS)>
get "types"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotModifiersUpdatedEvent$$Type = ($SlotModifiersUpdatedEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotModifiersUpdatedEvent$$Original = $SlotModifiersUpdatedEvent;}
declare module "top.theillusivec4.curios.api.SlotPredicate" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SlotPredicate extends $Record {
static readonly "CODEC": $Codec<($SlotPredicate)>

constructor(slots: $List$$Type<(StringJS)>, index: $MinMaxBounds$Ints$$Type)

public "index"(): $MinMaxBounds$Ints
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type): boolean
public "slots"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPredicate$$Type = ({"index"?: $MinMaxBounds$Ints$$Type, "slots"?: $List$$Type<(StringJS)>}) | ([index?: $MinMaxBounds$Ints$$Type, slots?: $List$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotPredicate$$Original = $SlotPredicate;}
declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import {$LivingEvent} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {
constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getFrom"(): $ItemStack
public "getSlotIndex"(): integer
public "getIdentifier"(): StringJS
public "getTo"(): $ItemStack
get "from"(): $ItemStack
get "slotIndex"(): integer
get "identifier"(): StringJS
get "to"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioChangeEvent$$Type = ($CurioChangeEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioChangeEvent$$Original = $CurioChangeEvent;}
declare module "top.theillusivec4.curios.api.type.util.ICuriosHelper" {
import {$ImmutableTriple} from "org.apache.commons.lang3.tuple.ImmutableTriple"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ICurio} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$TriConsumer$$Type} from "org.apache.logging.log4j.util.TriConsumer"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ICuriosItemHandler} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

/**
 * 
 * @deprecated
 */
export interface $ICuriosHelper$$Interface {
set "brokenCurioConsumer"(value: $Consumer$$Type<($SlotContext)>)
set "brokenCurioConsumer"(value: $TriConsumer$$Type<(StringJS), (integer), ($LivingEntity$$Type)>)
}

export class $ICuriosHelper implements $ICuriosHelper$$Interface {
/**
 * 
 * @deprecated
 */
 "getEquippedCurios"(arg0: $LivingEntity$$Type): $Optional<($IItemHandlerModifiable)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "setEquippedCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "findCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, ...arg1: (StringJS)[]): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $Consumer$$Type<($SlotContext)>): void
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $TriConsumer$$Type<(StringJS), (integer), ($LivingEntity$$Type)>): void
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Item$$Type, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: $SlotContext$$Type): void
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getCuriosHandler"(arg0: $LivingEntity$$Type): $Optional<($ICuriosItemHandler)>
/**
 * 
 * @deprecated
 */
 "isStackValid"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getCurioTags"(arg0: $Item$$Type): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "getCurio"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosHelper$$Type = ($ICuriosHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICuriosHelper$$Original = $ICuriosHelper;}
declare module "top.theillusivec4.curios.api.CuriosApi" {
import {$ISlotHelper, $ISlotHelper$$Type} from "top.theillusivec4.curios.api.type.util.ISlotHelper"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ICurio} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$ICuriosHelper, $ICuriosHelper$$Type} from "top.theillusivec4.curios.api.type.util.ICuriosHelper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICuriosItemHandler} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICurioItem$$Type} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$ISlotType} from "top.theillusivec4.curios.api.type.ISlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IIconHelper, $IIconHelper$$Type} from "top.theillusivec4.curios.api.type.util.IIconHelper"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CuriosApi {
static readonly "MODID": StringJS

constructor()

public static "getSlot"(arg0: StringJS, arg1: boolean): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getSlot"(arg0: StringJS): $Optional<($ISlotType)>
public static "getSlot"(arg0: StringJS, arg1: $Level$$Type): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "setSlotHelper"(arg0: $ISlotHelper$$Type): void
/**
 * 
 * @deprecated
 */
public static "setCuriosHelper"(arg0: $ICuriosHelper$$Type): void
/**
 * 
 * @deprecated
 */
public static "getSlotHelper"(): $ISlotHelper
public static "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "getCuriosInventory"(arg0: $LivingEntity$$Type): $Optional<($ICuriosItemHandler)>
public static "getSlotId"(arg0: $SlotContext$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
public static "getEntitySlots"(arg0: $EntityType$$Type<(never)>): $Map<(StringJS), ($ISlotType)>
public static "getEntitySlots"(arg0: $LivingEntity$$Type): $Map<(StringJS), ($ISlotType)>
public static "getEntitySlots"(arg0: $EntityType$$Type<(never)>, arg1: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getEntitySlots"(arg0: $EntityType$$Type<(never)>, arg1: boolean): $Map<(StringJS), ($ISlotType)>
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: boolean): $Map<(StringJS), ($ISlotType)>
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getItemStackSlots"(arg0: $ItemStack$$Type): $Map<(StringJS), ($ISlotType)>
public static "registerCurioPredicate"(arg0: $ResourceLocation$$Type, arg1: $Predicate$$Type<($SlotResult)>): void
public static "testCurioPredicates"(arg0: $Set$$Type<($ResourceLocation$$Type)>, arg1: $SlotResult$$Type): boolean
public static "broadcastCurioBreakEvent"(arg0: $SlotContext$$Type): void
/**
 * 
 * @deprecated
 */
public static "setIconHelper"(arg0: $IIconHelper$$Type): void
/**
 * 
 * @deprecated
 */
public static "getCuriosHelper"(): $ICuriosHelper
public static "isStackValid"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public static "withSlotModifier"(arg0: $ItemAttributeModifiers$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers
public static "registerCurio"(arg0: $Item$$Type, arg1: $ICurioItem$$Type): void
/**
 * 
 * @deprecated
 */
public static "getPlayerSlots"(): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: boolean): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: $Player$$Type): $Map<(StringJS), ($ISlotType)>
public static "getCurioPredicate"(arg0: $ResourceLocation$$Type): $Optional<($Predicate<($SlotResult)>)>
public static "getCurioPredicates"(): $Map<($ResourceLocation), ($Predicate<($SlotResult)>)>
/**
 * 
 * @deprecated
 */
public static "getSlotIcon"(arg0: StringJS): $ResourceLocation
/**
 * 
 * @deprecated
 */
public static "getIconHelper"(): $IIconHelper
public static "addModifier"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Attribute)>, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: StringJS): void
public static "getCurio"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
public static "addSlotModifier"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type): void
public static "addSlotModifier"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: StringJS): void
public static "getSlots"(arg0: $Level$$Type): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getSlots"(): $Map<(StringJS), ($ISlotType)>
public static "getSlots"(arg0: boolean): $Map<(StringJS), ($ISlotType)>
public static set "slotHelper"(value: $ISlotHelper$$Type)
public static set "curiosHelper"(value: $ICuriosHelper$$Type)
public static get "slotHelper"(): $ISlotHelper
public static set "iconHelper"(value: $IIconHelper$$Type)
public static get "curiosHelper"(): $ICuriosHelper
public static get "playerSlots"(): $Map<(StringJS), ($ISlotType)>
public static get "curioPredicates"(): $Map<($ResourceLocation), ($Predicate<($SlotResult)>)>
public static get "iconHelper"(): $IIconHelper
public static get "slots"(): $Map<(StringJS), ($ISlotType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuriosApi$$Type = ($CuriosApi);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CuriosApi$$Original = $CuriosApi;}
declare module "top.theillusivec4.curios.api.client.ICurioRenderer" {
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$RenderLayerParent, $RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ICurioRenderer$$Interface {

(arg0: $ItemStack, arg1: $SlotContext, arg2: $PoseStack, arg3: $RenderLayerParent<(T), (M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
}

export class $ICurioRenderer implements $ICurioRenderer$$Interface {
static "translateIfSneaking"(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
static "followBodyRotations"(arg0: $LivingEntity$$Type, ...arg1: ($HumanoidModel$$Type<($LivingEntity$$Type)>)[]): void
static "followHeadRotations"(arg0: $LivingEntity$$Type, ...arg1: ($ModelPart$$Type)[]): void
 "render"<T extends $LivingEntity, M extends $EntityModel<(object)>>(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $PoseStack$$Type, arg3: $RenderLayerParent$$Type<(T), (M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
static "rotateIfSneaking"(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioRenderer$$Type = ((arg0: $ItemStack, arg1: $SlotContext, arg2: $PoseStack, arg3: $RenderLayerParent<(T), (M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioRenderer$$Original = $ICurioRenderer;}
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IDynamicStackHandler} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set} from "java.util.Set"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler$$Interface {
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "visible"(): boolean
get "identifier"(): StringJS
get "activeStates"(): $NonNullList<(boolean)>
get "renders"(): $NonNullList<(boolean)>
get "permanentModifiers"(): $Set<($AttributeModifier)>
get "dropRule"(): $ICurio$DropRule
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "sizeShift"(): integer
get "cosmeticStacks"(): $IDynamicStackHandler
get "syncTag"(): $CompoundTag
get "slots"(): integer
}

export class $ICurioStacksHandler implements $ICurioStacksHandler$$Interface {
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "isVisible"(): boolean
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "getIdentifier"(): StringJS
 "getActiveStates"(): $NonNullList<(boolean)>
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "clearModifiers"(): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getRenders"(): $NonNullList<(boolean)>
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "getDropRule"(): $ICurio$DropRule
 "getCachedModifiers"(): $Set<($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "updateActiveState"(arg0: integer): void
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "applySyncTag"(arg0: $CompoundTag$$Type): void
 "getCosmeticStacks"(): $IDynamicStackHandler
 "getSyncTag"(): $CompoundTag
 "getSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$$Type = ($ICurioStacksHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioStacksHandler$$Original = $ICurioStacksHandler;}
declare module "top.theillusivec4.curios.api.SlotResult" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record} from "java.lang.Record"

export class $SlotResult extends $Record {
constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$$Type = ({"slotContext"?: $SlotContext$$Type, "stack"?: $ItemStack$$Type}) | ([slotContext?: $SlotContext$$Type, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotResult$$Original = $SlotResult;}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDynamicStackHandler$$Interface extends $IItemHandlerModifiable$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "changed"(): void
}

export class $IDynamicStackHandler implements $IDynamicStackHandler$$Interface {
 "grow"(arg0: integer): void
 "shrink"(arg0: integer): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isMutable"(): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "getWidth"(): integer
 "getHeight"(): integer
 "asContainer"(): $Container
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "setChanged"(): void
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDynamicStackHandler$$Original = $IDynamicStackHandler;}
declare module "top.theillusivec4.curios.api.extensions.RegisterCuriosExtensionsEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$ICurioSlotExtension$$Type} from "top.theillusivec4.curios.api.extensions.ICurioSlotExtension"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "registerSlotExtension"(arg0: $ICurioSlotExtension$$Type, ...arg1: (StringJS)[]): void
public "isSlotExtensionRegistered"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCuriosExtensionsEvent$$Type = ($RegisterCuriosExtensionsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCuriosExtensionsEvent$$Original = $RegisterCuriosExtensionsEvent;}
declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional} from "java.util.Optional"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set} from "java.util.Set"
import {$Logger} from "org.slf4j.Logger"

export interface $ICuriosItemHandler$$Interface {
get "modifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "equippedCurios"(): $IItemHandlerModifiable
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
get "lockedSlots"(): $Set<(StringJS)>
get "visibleSlots"(): integer
get "fortuneBonus"(): integer
get "curios"(): $Map<(StringJS), ($ICurioStacksHandler)>
set "curios"(value: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>)
get "wearer"(): $LivingEntity
get "slots"(): integer
}

export class $ICuriosItemHandler implements $ICuriosItemHandler$$Interface {
static readonly "LOGGER": $Logger

 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "clearSlotModifiers"(): void
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(arg0: $Item$$Type): boolean
 "handleInvalidStacks"(): void
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "loadInventory"(arg0: $ListTag$$Type): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
 "saveInventory"(arg0: boolean): $ListTag
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
 "getVisibleSlots"(): integer
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "clearCachedSlotModifiers"(): void
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "writeTag"(): $Tag
 "getWearer"(): $LivingEntity
 "readTag"(arg0: $Tag$$Type): void
 "getSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$$Type = ($ICuriosItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICuriosItemHandler$$Original = $ICuriosItemHandler;}
declare module "top.theillusivec4.curios.api.type.capability.ICurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$ICurio} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$List, $List$$Type} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurioItem$$Interface {
}

export class $ICurioItem implements $ICurioItem$$Interface {
static readonly "defaultInstance": $ICurio

/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
 "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
 "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
 "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioItem$$Type = ($ICurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurioItem$$Original = $ICurioItem;}
declare module "top.theillusivec4.curios.api.SlotContext" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"

export class $SlotContext extends $Record {
constructor(identifier: StringJS, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "visible"(): boolean
public "entity"(): $LivingEntity
public "cosmetic"(): boolean
public "identifier"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"cosmetic"?: boolean, "index"?: integer, "identifier"?: StringJS, "entity"?: $LivingEntity$$Type, "visible"?: boolean}) | ([cosmetic?: boolean, index?: integer, identifier?: StringJS, entity?: $LivingEntity$$Type, visible?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotContext$$Original = $SlotContext;}
declare module "top.theillusivec4.curios.api.type.ISlotType" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set} from "java.util.Set"

export interface $ISlotType$$Interface extends $Comparable$$Interface<($ISlotType)> {
get "priority"(): integer
get "size"(): integer
get "locked"(): boolean
get "visible"(): boolean
get "identifier"(): StringJS
get "order"(): integer
get "validators"(): $Set<($ResourceLocation)>
get "icon"(): $ResourceLocation
get "dropRule"(): $ICurio$DropRule
}

export class $ISlotType implements $ISlotType$$Interface {
/**
 * 
 * @deprecated
 */
 "getPriority"(): integer
 "getSize"(): integer
/**
 * 
 * @deprecated
 */
 "isLocked"(): boolean
/**
 * 
 * @deprecated
 */
 "isVisible"(): boolean
 "getIdentifier"(): StringJS
 "writeNbt"(): $CompoundTag
 "getOrder"(): integer
 "useNativeGui"(): boolean
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "getValidators"(): $Set<($ResourceLocation)>
 "getIcon"(): $ResourceLocation
 "getDropRule"(): $ICurio$DropRule
 "compareTo"(arg0: $ISlotType$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotType$$Type = ($ISlotType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISlotType$$Original = $ISlotType;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record} from "java.lang.Record"

export class $ICurio$SoundInfo extends $Record {
constructor(soundEvent: $SoundEvent$$Type, volume: float, pitch: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
public "pitch"(): float
public "volume"(): float
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
public "soundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$$Type = ({"pitch"?: float, "soundEvent"?: $SoundEvent$$Type, "volume"?: float}) | ([pitch?: float, soundEvent?: $SoundEvent$$Type, volume?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$SoundInfo$$Original = $ICurio$SoundInfo;}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import {$Enum} from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule

public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: StringJS): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$$Type = (("default") | ("always_drop") | ("always_keep") | ("destroy"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICurio$DropRule$$Original = $ICurio$DropRule;}
