declare module "com.almostreliable.lootjs.loot.LootEntryList" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Iterator} from "java.util.Iterator"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootEntryAppender, $LootEntryAppender$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$ListHolder} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootEntryList extends $ListHolder<($LootEntry), ($LootPoolEntryContainer)> implements $LootEntriesTransformer$$Interface, $LootEntryAppender$$Interface {
constructor(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>)
constructor(...arg0: ($LootEntry$$Type)[])
constructor()

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootPoolEntryType$$Type): integer
public "lastIndexOf"(arg0: $LootPoolEntryType$$Type): integer
public "iterator"(): $Iterator
public "contains"(arg0: $LootPoolEntryType$$Type): boolean
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntryList
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "modify"(arg0: $UnaryOperator$$Type<($LootEntry)>): void
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntryList
public "createVanillaArray"(): $List<($LootPoolEntryContainer)>
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeTag"(arg0: StringJS, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: StringJS): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryList$$Type = ($LootEntryList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootEntryList$$Original = $LootEntryList;}
declare module "com.almostreliable.lootjs.loot.table.LootEntriesTransformer" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export interface $LootEntriesTransformer$$Interface {
}

export class $LootEntriesTransformer implements $LootEntriesTransformer$$Interface {
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
 "removeTag"(arg0: StringJS, arg1: boolean): $LootEntriesTransformer
 "removeTag"(arg0: StringJS): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
 "hasItem"(arg0: $ItemFilter$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntriesTransformer$$Type = ($LootEntriesTransformer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootEntriesTransformer$$Original = $LootEntriesTransformer;}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder" {
import {$AddAttributesFunction$Modifier$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction} from "com.almostreliable.lootjs.loot.AddAttributesFunction"
import {$LootItemFunction$Builder$$Interface} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import {$AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder$$Interface {
constructor()

public "add"(arg0: $AddAttributesFunction$Modifier$$Type): $AddAttributesFunction$Builder
public "add"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: $Consumer$$Type<($AddAttributesFunction$Modifier$Builder)>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "simple"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "simple"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "preserveDefaults"(arg0: boolean): $AddAttributesFunction$Builder
public "forSlots"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type, arg4: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$$Type = ($AddAttributesFunction$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddAttributesFunction$Builder$$Original = $AddAttributesFunction$Builder;}
declare module "com.almostreliable.lootjs.loot.LootModificationEvent" {
import {$LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockFilter$$Type} from "com.almostreliable.lootjs.util.BlockFilter"
import {$LootModifier$Builder} from "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder"
import {$IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"

export class $LootModificationEvent {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

public "enableLogging"(): void
public "addTableModifier"(...arg0: ($LootTableFilter$$Type)[]): $LootModifier$Builder
public "addEntityModifier"(arg0: $HolderSet$$Type<($EntityType<(never)>)>): $LootModifier$Builder
public "addBlockModifier"(arg0: $BlockFilter$$Type): $LootModifier$Builder
public "getGlobalModifiers"(): $List<(StringJS)>
/**
 * 
 * @deprecated
 */
public "addTypeModifier"(...arg0: ($LootType$$Type)[]): $LootModifier$Builder
public "disableZombieHeadDrop"(): void
public "removeGlobalModifiers"(...arg0: ($IdFilter$$Type)[]): void
public "disableLootModification"(...arg0: ($IdFilter$$Type)[]): void
public "disableWitherStarDrop"(): void
public "disableCreeperHeadDrop"(): void
public "disableSkeletonHeadDrop"(): void
get "globalModifiers"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEvent$$Type = ($LootModificationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootModificationEvent$$Original = $LootModificationEvent;}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction$Modifier} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {
constructor(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type)

public "build"(): $AddAttributesFunction$Modifier
public "setSlots"(arg0: ($EquipmentSlotGroup$$Type)[]): void
public "setProbability"(arg0: float): void
public "setOperation"(arg0: $AttributeModifier$Operation$$Type): void
set "slots"(value: ($EquipmentSlotGroup$$Type)[])
set "probability"(value: float)
set "operation"(value: $AttributeModifier$Operation$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddAttributesFunction$Modifier$Builder$$Original = $AddAttributesFunction$Modifier$Builder;}
declare module "com.almostreliable.lootjs.loot.table.LootTableList" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $LootTableList implements $LootEntriesTransformer$$Interface, $Iterable$$Interface<($MutableLootTable)> {
constructor(arg0: $List$$Type<($MutableLootTable$$Type)>)

public "clear"(): $LootTableList
public "iterator"(): $Iterator<($MutableLootTable)>
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $LootTableList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootTableList
public "onDrop"(arg0: $PostLootAction$$Type): $LootTableList
public "getTables"(): $List<($MutableLootTable)>
public "modifyEntry"(arg0: $UnaryOperator$$Type, arg1: boolean): $LootEntriesTransformer
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeTag"(arg0: StringJS, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: StringJS): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "spliterator"(): $Spliterator<($MutableLootTable)>
public "forEach"(arg0: $Consumer$$Type<($MutableLootTable)>): void
[Symbol.iterator](): IterableIterator<$MutableLootTable>;
get "tables"(): $List<($MutableLootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableList$$Type = ($LootTableList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableList$$Original = $LootTableList;}
declare module "com.almostreliable.lootjs.loot.LootFunctionList" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List$$Type} from "java.util.List"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootItemFunctionType$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Function$$Type} from "java.util.function.Function"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Iterator} from "java.util.Iterator"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootFunctionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$ListHolder} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootFunctionList extends $ListHolder<($LootItemFunction), ($LootItemFunction)> implements $LootFunctionsContainer$$Interface<($LootFunctionList)>, $BiFunction$$Interface<($ItemStack), ($LootContext), ($ItemStack)> {
constructor()
constructor(arg0: $List$$Type<($LootItemFunction$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemFunctionType$$Type<(never)>): integer
public "lastIndexOf"(arg0: $LootItemFunctionType$$Type<(never)>): integer
public "replace"(arg0: $LootItemFunctionType$$Type<(never)>, arg1: $LootItemFunction$$Type): boolean
public "iterator"(): $Iterator<($LootItemFunction)>
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "apply"(arg0: any, arg1: any): any
public "contains"(arg0: $LootItemFunctionType$$Type<(never)>): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "addFunction"(arg0: $LootItemFunction$$Type): $LootFunctionList
public "setName"(arg0: $Component$$Type): $LootFunctionList
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootFunctionList
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootFunctionList
public "addPotion"(arg0: $Potion$$Type): $LootFunctionList
public "addLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "simulateExplosionDecay"(): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootFunctionList
public "damage"(arg0: $NumberProvider$$Type): $LootFunctionList
public "smelt"(): $LootFunctionList
public "jsonFunction"(arg0: $JsonObject$$Type): $LootFunctionList
public "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $LootFunctionList
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootFunctionList
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootFunctionList
public "enchantRandomly"(): $LootFunctionList
public "setCustomData"(arg0: $CompoundTag$$Type): $LootFunctionList
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootFunctionList
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootFunctionList
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootFunctionList
public "setCount"(arg0: $NumberProvider$$Type): $LootFunctionList
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionList$$Type = ($LootFunctionList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootFunctionList$$Original = $LootFunctionList;}
declare module "com.almostreliable.lootjs.loot.extension.LootTableExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $LootTableExtension$$Interface {
}

export class $LootTableExtension implements $LootTableExtension$$Interface {
static "cast"(arg0: $LootTable$$Type): $LootTableExtension
 "lootjs$setPools"(arg0: $List$$Type<($LootPool$$Type)>): void
 "lootjs$getParamSet"(): $LootContextParamSet
 "lootjs$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "lootjs$getPools"(): $List<($LootPool)>
 "lootjs$setRandomSequence"(arg0: $ResourceLocation$$Type): void
 "lootjs$createFunctionList"(): $LootFunctionList
 "lootjs$getRandomSequence"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableExtension$$Type = ($LootTableExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableExtension$$Original = $LootTableExtension;}
declare module "com.almostreliable.lootjs.loot.table.PostLootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $PostLootAction$$Interface {

(arg0: $LootContext, arg1: $LootBucket): void
}

export class $PostLootAction implements $PostLootAction$$Interface {
 "alter"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostLootAction$$Original = $PostLootAction;}
declare module "com.almostreliable.lootjs.loot.LootFunctionsContainer" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootFunctionsContainer$$Interface<F> {

(arg0: $LootItemFunction): F
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
set "count"(value: $NumberProvider$$Type)
}

export class $LootFunctionsContainer<F> implements $LootFunctionsContainer$$Interface {
 "setName"(arg0: $Component$$Type): F
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): F
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): F
 "addPotion"(arg0: $Potion$$Type): F
 "addLore"(...arg0: ($Component$$Type)[]): F
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "simulateExplosionDecay"(): F
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): F
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): F
 "damage"(arg0: $NumberProvider$$Type): F
 "smelt"(): F
 "jsonFunction"(arg0: $JsonObject$$Type): F
 "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): F
 "replaceLore"(...arg0: ($Component$$Type)[]): F
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): F
 "addFunction"(arg0: $LootItemFunction$$Type): F
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): F
 "enchantRandomly"(): F
 "setCustomData"(arg0: $CompoundTag$$Type): F
 "enchantWithLevels"(arg0: $NumberProvider$$Type): F
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): F
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): F
 "setCount"(arg0: $NumberProvider$$Type): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$$Type<F> = ((arg0: $LootItemFunction) => F);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootFunctionsContainer$$Original<F> = $LootFunctionsContainer<(F)>;}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$LootConditionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootActionContainer, $LootActionContainer$$Interface} from "com.almostreliable.lootjs.loot.LootActionContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$GroupedLootAction} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $GroupedLootAction$Builder implements $LootConditionsContainer$$Interface<($GroupedLootAction$Builder)>, $LootFunctionsContainer$$Interface<($GroupedLootAction$Builder)>, $LootActionContainer$$Interface<($GroupedLootAction$Builder)> {
constructor(arg0: $ItemFilter$$Type)
constructor()

public "build"(): $GroupedLootAction
public "addCondition"(arg0: $LootItemCondition$$Type): $GroupedLootAction$Builder
public "rolls"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addFunction"(arg0: $LootItemFunction$$Type): $GroupedLootAction$Builder
public "addAction"(arg0: $LootAction$$Type): $LootActionContainer
public "containsLoot"(arg0: $ItemFilter$$Type, arg1: boolean): $GroupedLootAction$Builder
public "containsLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "matchLocation"(arg0: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $GroupedLootAction$Builder
public "isLightLevel"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchMainHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "hasAnyStage"(...arg0: (StringJS)[]): $GroupedLootAction$Builder
public "matchWeather"(arg0: boolean, arg1: boolean): $GroupedLootAction$Builder
public "matchEntity"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchOffHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $GroupedLootAction$Builder
public "matchDistance"(arg0: $DistancePredicate$$Type): $GroupedLootAction$Builder
public "matchPlayer"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $GroupedLootAction$Builder
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "randomChance"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "killedByPlayer"(): $GroupedLootAction$Builder
public "survivesExplosion"(): $GroupedLootAction$Builder
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchCustomCondition"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $GroupedLootAction$Builder
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $GroupedLootAction$Builder
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchTime"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type): $GroupedLootAction$Builder
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "matchHead"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchChest"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchTool"(arg0: $ItemPredicate$$Type): $GroupedLootAction$Builder
public "matchFeet"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $GroupedLootAction$Builder
public "matchLegs"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "setName"(arg0: $Component$$Type): $GroupedLootAction$Builder
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $GroupedLootAction$Builder
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $GroupedLootAction$Builder
public "addPotion"(arg0: $Potion$$Type): $GroupedLootAction$Builder
public "addLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "simulateExplosionDecay"(): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "damage"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "smelt"(): $GroupedLootAction$Builder
public "jsonFunction"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $GroupedLootAction$Builder
public "replaceLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "enchantRandomly"(): $GroupedLootAction$Builder
public "setCustomData"(arg0: $CompoundTag$$Type): $GroupedLootAction$Builder
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $GroupedLootAction$Builder
public "setCount"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): $GroupedLootAction$Builder
public "dropExperience"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): $GroupedLootAction$Builder
public "removeLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "customAction"(arg0: $LootAction$$Type): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean, arg3: ($DataComponentType$$Type<(never)>)[]): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): $GroupedLootAction$Builder
public "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "triggerLightningStrike"(arg0: boolean): $GroupedLootAction$Builder
public "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Builder$$Type = ($GroupedLootAction$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GroupedLootAction$Builder$$Original = $GroupedLootAction$Builder;}
declare module "com.almostreliable.lootjs.loot.LootCondition" {
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $LootCondition implements $LootConditionsContainer$$Interface<($LootItemCondition)> {
constructor()

public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootItemCondition
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootItemCondition
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootItemCondition
public "isLightLevel"(arg0: integer, arg1: integer): $LootItemCondition
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootItemCondition
public "hasAnyStage"(...arg0: (StringJS)[]): $LootItemCondition
public "matchWeather"(arg0: boolean, arg1: boolean): $LootItemCondition
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootItemCondition
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootItemCondition
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootItemCondition
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "randomChance"(arg0: $NumberProvider$$Type): $LootItemCondition
public "killedByPlayer"(): $LootItemCondition
public "survivesExplosion"(): $LootItemCondition
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootItemCondition
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootItemCondition
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootItemCondition
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootItemCondition
public "matchTime"(arg0: integer, arg1: integer): $LootItemCondition
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type): $LootItemCondition
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "matchHead"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchChest"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchTool"(arg0: $ItemPredicate$$Type): $LootItemCondition
public "matchFeet"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootItemCondition
public "matchLegs"(arg0: $ItemFilter$$Type): $LootItemCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCondition$$Type = ($LootCondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootCondition$$Original = $LootCondition;}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction, $LootItemFunction$$Interface} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List$$Type} from "java.util.List"
import {$LootItemFunctionType} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$LootContextParam} from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import {$Function$$Type} from "java.util.function.Function"
import {$Set} from "java.util.Set"
import {$AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction$$Interface {
constructor(arg0: boolean, arg1: $List$$Type<($AddAttributesFunction$Modifier$$Type)>)

public "apply"(arg0: any, arg1: any): any
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "getType"(): $LootItemFunctionType
public static "decorate"(arg0: $BiFunction$$Type<($ItemStack), ($LootContext), ($ItemStack$$Type)>, arg1: $Consumer$$Type<($ItemStack)>, arg2: $LootContext$$Type): $Consumer<($ItemStack)>
public "when"(arg0: $Consumer$$Type): $LootItemFunction
public "validate"(arg0: $ValidationContext$$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(never)>)>
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType
get "referencedContextParams"(): $Set<($LootContextParam<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$$Type = ($AddAttributesFunction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddAttributesFunction$$Original = $AddAttributesFunction;}
declare module "com.almostreliable.lootjs.loot.table.MutableLootTable" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootType} from "com.almostreliable.lootjs.core.LootType"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootTable implements $LootEntriesTransformer$$Interface {
constructor(arg0: $LootContextParamSet$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type)

public "clear"(): $MutableLootTable
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootTable
public "getLocation"(): $ResourceLocation
public "print"(): void
public "getPool"(arg0: integer): $MutableLootPool
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootTable
public "onDrop"(arg0: $PostLootAction$$Type): $MutableLootTable
public "getRandomSequence"(): $ResourceLocation
public "getFunctions"(): $LootFunctionList
public "getLootType"(): $LootType
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootTable
public "setRandomSequence"(arg0: $ResourceLocation$$Type): void
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "firstPool"(): $MutableLootPool
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "createPool"(): $MutableLootPool
public "modifyPool"(arg0: integer, arg1: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "getPools"(): $List<($MutableLootPool)>
public "getPoolByName"(arg0: StringJS): $MutableLootPool
public "modifyPoolByName"(arg0: StringJS, arg1: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "writeToVanillaTable"(): void
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeTag"(arg0: StringJS, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: StringJS): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
get "location"(): $ResourceLocation
get "randomSequence"(): $ResourceLocation
get "functions"(): $LootFunctionList
get "lootType"(): $LootType
set "randomSequence"(value: $ResourceLocation$$Type)
get "pools"(): $List<($MutableLootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootTable$$Type = ($MutableLootTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableLootTable$$Original = $MutableLootTable;}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Collection$$Type} from "java.util.Collection"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"
import {$List, $List$$Type} from "java.util.List"
import {$LootAction, $LootAction$$Type, $LootAction$$Interface} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $GroupedLootAction implements $LootAction$$Interface {
constructor(arg0: $NumberProvider$$Type, arg1: $List$$Type<($LootItemCondition$$Type)>, arg2: $List$$Type<($LootItemFunction$$Type)>, arg3: $Collection$$Type<($LootAction$$Type)>, arg4: $ItemFilter$$Type, arg5: boolean)

public "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
public "exact"(): boolean
public "actions"(): $List<($LootAction)>
public "functions"(): $List<($LootItemFunction)>
public "rolls"(): $NumberProvider
public "conditions"(): $List<($LootItemCondition)>
public "containsLootFilter"(): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$$Type = ($GroupedLootAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GroupedLootAction$$Original = $GroupedLootAction;}
declare module "com.almostreliable.lootjs.loot.table.MutableLootPool" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootPool implements $LootEntriesTransformer$$Interface, $LootEntryAppender$$Interface {
constructor(arg0: $LootPool$$Type)

public "getName"(): StringJS
public "name"(arg0: StringJS): $MutableLootPool
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootPool
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "getEntries"(): $LootEntryList
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $MutableLootPool
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootPool
public "rolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "bonusRolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "getConditions"(): $LootConditionList
public "getFunctions"(): $LootFunctionList
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootPool
public "getVanillaPool"(): $LootPool
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeTag"(arg0: StringJS, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: StringJS): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
get "entries"(): $LootEntryList
get "conditions"(): $LootConditionList
get "functions"(): $LootFunctionList
get "vanillaPool"(): $LootPool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootPool$$Type = ($MutableLootPool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableLootPool$$Original = $MutableLootPool;}
declare module "com.almostreliable.lootjs.loot.LootFunction" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootFunctionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record} from "java.lang.Record"

export class $LootFunction extends $Record implements $LootFunctionsContainer$$Interface<($LootItemFunction)> {
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "addFunction"(arg0: $LootItemFunction$$Type): $LootItemFunction
public "setName"(arg0: $Component$$Type): $LootItemFunction
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootItemFunction
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootItemFunction
public "addPotion"(arg0: $Potion$$Type): $LootItemFunction
public "addLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "simulateExplosionDecay"(): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootItemFunction
public "damage"(arg0: $NumberProvider$$Type): $LootItemFunction
public "smelt"(): $LootItemFunction
public "jsonFunction"(arg0: $JsonObject$$Type): $LootItemFunction
public "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $LootItemFunction
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootItemFunction
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootItemFunction
public "enchantRandomly"(): $LootItemFunction
public "setCustomData"(arg0: $CompoundTag$$Type): $LootItemFunction
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootItemFunction
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootItemFunction
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootItemFunction
public "setCount"(arg0: $NumberProvider$$Type): $LootItemFunction
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunction$$Type = ({}) | ([]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootFunction$$Original = $LootFunction;}
declare module "com.almostreliable.lootjs.loot.table.PostLootActionOwner" {
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"

export interface $PostLootActionOwner$$Interface {
}

export class $PostLootActionOwner implements $PostLootActionOwner$$Interface {
 "lootjs$setPostLootAction"(arg0: $PostLootAction$$Type): void
 "lootjs$getPostLootAction"(): $PostLootAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootActionOwner$$Type = ($PostLootActionOwner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostLootActionOwner$$Original = $PostLootActionOwner;}
declare module "com.almostreliable.lootjs.loot.LootTableEvent" {
import {$LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"
import {$LootTableList} from "com.almostreliable.lootjs.loot.table.LootTableList"

export class $LootTableEvent {
constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

public "create"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "create"(arg0: $ResourceLocation$$Type, arg1: $LootType$$Type): $MutableLootTable
public "getLootTable"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "hasLootTable"(arg0: $ResourceLocation$$Type): boolean
/**
 * 
 * @deprecated
 */
public "modifyLootTypeTables"(...arg0: ($LootType$$Type)[]): $LootTableList
public "getLootTableIds"(): $Set<($ResourceLocation)>
public "getLootTableIds"(arg0: $IdFilter$$Type): $Set<($ResourceLocation)>
public "getEntityTable"(arg0: $EntityType$$Type<(never)>): $MutableLootTable
public "forEachTable"(arg0: $IdFilter$$Type, arg1: $Consumer$$Type<($MutableLootTable)>): void
public "forEachTable"(arg0: $Consumer$$Type<($MutableLootTable)>): void
public "clearLootTables"(arg0: $IdFilter$$Type): void
public "getBlockTable"(arg0: $Block$$Type): $MutableLootTable
public "modifyLootTables"(...arg0: ($LootTableFilter$$Type)[]): $LootTableList
public "modifyEntityTables"(arg0: $IdFilter$$Type): $LootTableList
public "modifyBlockTables"(arg0: $IdFilter$$Type): $LootTableList
get "lootTableIds"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEvent$$Type = ($LootTableEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableEvent$$Original = $LootTableEvent;}
declare module "com.almostreliable.lootjs.loot.extension.CompositeEntryBaseExtension" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $CompositeEntryBaseExtension$$Interface {

(): $List$$Type<($LootPoolEntryContainer$$Type)>
}

export class $CompositeEntryBaseExtension implements $CompositeEntryBaseExtension$$Interface {
 "lootjs$getEntries"(): $List<($LootPoolEntryContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeEntryBaseExtension$$Type = (() => $List$$Type<($LootPoolEntryContainer$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompositeEntryBaseExtension$$Original = $CompositeEntryBaseExtension;}
declare module "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder" {
import {$GroupedLootAction$Builder} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootActionContainer} from "com.almostreliable.lootjs.loot.LootActionContainer"
import {$GroupedLootAction} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"

export class $LootModifier$Builder extends $GroupedLootAction$Builder {
constructor(arg0: $Predicate$$Type<($LootContext)>, arg1: StringJS)

public "name"(arg0: StringJS): $LootModifier$Builder
public "build"(): $GroupedLootAction
public "addAction"(arg0: $LootAction$$Type): $LootActionContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModifier$Builder$$Type = ($LootModifier$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootModifier$Builder$$Original = $LootModifier$Builder;}
declare module "com.almostreliable.lootjs.loot.extension.LootContextExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$DamageSource} from "net.minecraft.world.damagesource.DamageSource"
import {$ServerPlayer} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export interface $LootContextExtension$$Interface {
get "explosionRadius"(): float
get "damageSource"(): $DamageSource
get "attackingEntity"(): $Entity
get "killerPlayer"(): $ServerPlayer
get "data"(): $Map<(StringJS), (any)>
get "entity"(): $Entity
get "id"(): $ResourceLocation
get "position"(): $Vec3
get "tool"(): $ItemStack
get "exploded"(): boolean
get "server"(): $MinecraftServer
get "type"(): $LootType
}

export class $LootContextExtension implements $LootContextExtension$$Interface {
static "cast"(arg0: $LootContext$$Type): $LootContextExtension
 "getExplosionRadius"(): float
 "getDamageSource"(): $DamageSource
 "getAttackingEntity"(): $Entity
 "getKillerPlayer"(): $ServerPlayer
 "self"(): $LootContext
 "getData"(): $Map<(StringJS), (any)>
 "getEntity"(): $Entity
 "getId"(): $ResourceLocation
 "isType"(arg0: $LootType$$Type): boolean
 "getPosition"(): $Vec3
 "getTool"(): $ItemStack
 "isExploded"(): boolean
 "getServer"(): $MinecraftServer
 "getType"(): $LootType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextExtension$$Type = ($LootContextExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootContextExtension$$Original = $LootContextExtension;}
declare module "com.almostreliable.lootjs.loot.LootConditionsContainer" {
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootConditionsContainer$$Interface<C> {

(arg0: $LootItemCondition): C
}

export class $LootConditionsContainer<C> implements $LootConditionsContainer$$Interface {
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): C
 "matchLocation"(arg0: $LocationPredicate$$Type): C
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): C
 "isLightLevel"(arg0: integer, arg1: integer): C
 "matchMainHand"(arg0: $ItemFilter$$Type): C
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): C
 "hasAnyStage"(...arg0: (StringJS)[]): C
 "matchWeather"(arg0: boolean, arg1: boolean): C
 "addCondition"(arg0: $LootItemCondition$$Type): C
 "matchEntity"(arg0: $EntityPredicate$$Type): C
 "matchOffHand"(arg0: $ItemFilter$$Type): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): C
 "matchDistance"(arg0: $DistancePredicate$$Type): C
 "matchPlayer"(arg0: $EntityPredicate$$Type): C
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): C
 "matchAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): C
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "randomChance"(arg0: $NumberProvider$$Type): C
 "killedByPlayer"(): C
 "survivesExplosion"(): C
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): C
 "matchCustomCondition"(arg0: $JsonObject$$Type): C
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): C
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): C
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): C
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): C
 "matchTime"(arg0: integer, arg1: integer): C
 "matchTime"(arg0: long, arg1: integer, arg2: integer): C
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): C
 "matchBlock"(arg0: $Block$$Type): C
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchHead"(arg0: $ItemFilter$$Type): C
 "matchChest"(arg0: $ItemFilter$$Type): C
 "matchTool"(arg0: $ItemPredicate$$Type): C
 "matchFeet"(arg0: $ItemFilter$$Type): C
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): C
 "matchLegs"(arg0: $ItemFilter$$Type): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$$Type<C> = ((arg0: $LootItemCondition) => C);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootConditionsContainer$$Original<C> = $LootConditionsContainer<(C)>;}
declare module "com.almostreliable.lootjs.loot.LootConditionList" {
import {$LootItemConditionType$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemConditionType"
import {$List$$Type} from "java.util.List"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Iterator} from "java.util.Iterator"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ListHolder} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootConditionList extends $ListHolder<($LootItemCondition), ($LootItemCondition)> implements $LootConditionsContainer$$Interface<($LootConditionList)>, $Predicate$$Interface<($LootContext)> {
constructor()
constructor(arg0: $List$$Type<($LootItemCondition$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemConditionType$$Type): integer
public "test"(arg0: $LootContext$$Type): boolean
public "test"(arg0: any): boolean
public "lastIndexOf"(arg0: $LootItemConditionType$$Type): integer
public "iterator"(): $Iterator<($LootItemCondition)>
public "contains"(arg0: $LootItemConditionType$$Type): boolean
public "addCondition"(arg0: $LootItemCondition$$Type): $LootConditionList
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootConditionList
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootConditionList
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootConditionList
public "isLightLevel"(arg0: integer, arg1: integer): $LootConditionList
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootConditionList
public "hasAnyStage"(...arg0: (StringJS)[]): $LootConditionList
public "matchWeather"(arg0: boolean, arg1: boolean): $LootConditionList
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootConditionList
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootConditionList
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootConditionList
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "randomChance"(arg0: $NumberProvider$$Type): $LootConditionList
public "killedByPlayer"(): $LootConditionList
public "survivesExplosion"(): $LootConditionList
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootConditionList
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootConditionList
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootConditionList
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootConditionList
public "matchTime"(arg0: integer, arg1: integer): $LootConditionList
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootConditionList
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootConditionList
public "matchBlock"(arg0: $Block$$Type): $LootConditionList
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "matchHead"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchChest"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchTool"(arg0: $ItemPredicate$$Type): $LootConditionList
public "matchFeet"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootConditionList
public "matchLegs"(arg0: $ItemFilter$$Type): $LootConditionList
public "or"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public "negate"(): $Predicate<($LootContext)>
public "and"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "not"<T>(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "isEqual"<T>(arg0: any): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionList$$Type = ($LootConditionList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootConditionList$$Original = $LootConditionList;}
declare module "com.almostreliable.lootjs.loot.extension.LootPoolExtension" {
import {$LootConditionList} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"

export interface $LootPoolExtension$$Interface {
}

export class $LootPoolExtension implements $LootPoolExtension$$Interface {
static "cast"(arg0: $LootPool$$Type): $LootPoolExtension
 "lootjs$setName"(arg0: StringJS): void
 "lootjs$getEntries"(): $LootEntryList
 "lootjs$getConditions"(): $LootConditionList
 "lootjs$asVanillaPool"(): $LootPool
 "lootjs$getFunctions"(): $LootFunctionList
 "lootjs$collectDebugInfo"(arg0: $DebugInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolExtension$$Type = ($LootPoolExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootPoolExtension$$Original = $LootPoolExtension;}
declare module "com.almostreliable.lootjs.loot.modifier.LootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $LootAction$$Interface {

(arg0: $LootContext, arg1: $LootBucket): void
}

export class $LootAction implements $LootAction$$Interface {
 "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootAction$$Original = $LootAction;}
declare module "com.almostreliable.lootjs.loot.extension.LootItemFunctionExtension" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $LootItemFunctionExtension$$Interface {

(arg0: $Consumer<($LootConditionList)>): $LootItemFunction$$Type
}

export class $LootItemFunctionExtension implements $LootItemFunctionExtension$$Interface {
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootItemFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemFunctionExtension$$Type = ((arg0: $Consumer<($LootConditionList)>) => $LootItemFunction$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootItemFunctionExtension$$Original = $LootItemFunctionExtension;}
declare module "com.almostreliable.lootjs.loot.extension.LootParamsExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"

export interface $LootParamsExtension$$Interface {
set "type"(value: $LootType$$Type)
get "type"(): $LootType
}

export class $LootParamsExtension implements $LootParamsExtension$$Interface {
 "setType"(arg0: $LootType$$Type): void
 "getType"(): $LootType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsExtension$$Type = ($LootParamsExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootParamsExtension$$Original = $LootParamsExtension;}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set$$Type} from "java.util.Set"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $AddAttributesFunction$Modifier {
constructor(arg0: float, arg1: $Holder$$Type<($Attribute)>, arg2: $AttributeModifier$Operation$$Type, arg3: $NumberProvider$$Type, arg4: $ResourceLocation$$Type, arg5: $Set$$Type<($EquipmentSlotGroup$$Type)>)

public "createAttributeModifier"(arg0: $LootContext$$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$$Type = ($AddAttributesFunction$Modifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddAttributesFunction$Modifier$$Original = $AddAttributesFunction$Modifier;}
declare module "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ModifyLootAction$Callback$$Interface {

(arg0: $ItemStack): $ItemStack$$Type
}

export class $ModifyLootAction$Callback implements $ModifyLootAction$Callback$$Interface {
 "modify"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$$Type = ((arg0: $ItemStack) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifyLootAction$Callback$$Original = $ModifyLootAction$Callback;}
declare module "com.almostreliable.lootjs.loot.table.LootEntryAppender" {
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootEntryAppender$$Interface {

(arg0: $LootEntry): $LootEntryAppender$$Type
}

export class $LootEntryAppender implements $LootEntryAppender$$Interface {
 "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
 "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryAppender$$Type = ((arg0: $LootEntry) => $LootEntryAppender$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootEntryAppender$$Original = $LootEntryAppender;}
declare module "com.almostreliable.lootjs.loot.Predicates" {
import {$ItemEnchantmentsPredicate} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate"
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$EnchantmentPredicate, $EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NbtPredicate} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"

export interface $Predicates$$Interface {
}

export class $Predicates implements $Predicates$$Interface {
static "lookup"(): $HolderLookup$Provider
static "storedEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
static "nbt"(arg0: $CompoundTag$$Type): $NbtPredicate
static "enchantment"(arg0: $IdFilter$$Type): $EnchantmentPredicate
static "enchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $EnchantmentPredicate
static "itemEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicates$$Type = ($Predicates);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Predicates$$Original = $Predicates;}
declare module "com.almostreliable.lootjs.loot.LootActionContainer" {
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$GroupedLootAction$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $LootActionContainer$$Interface<A extends $LootActionContainer<(object)>> {

(arg0: $LootAction): A
}

export class $LootActionContainer<A extends $LootActionContainer<(object)>> implements $LootActionContainer$$Interface {
 "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): A
 "dropExperience"(arg0: $NumberProvider$$Type): A
 "addLoot"(...arg0: ($LootEntry$$Type)[]): A
 "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): A
 "removeLoot"(arg0: $ItemFilter$$Type): A
 "addAction"(arg0: $LootAction$$Type): A
 "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): A
 "customAction"(arg0: $LootAction$$Type): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean, arg3: ($DataComponentType$$Type<(never)>)[]): A
 "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): A
 "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): A
 "triggerLightningStrike"(arg0: boolean): A
 "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionContainer$$Type<A> = ((arg0: $LootAction) => A);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootActionContainer$$Original<A> = $LootActionContainer<(A)>;}
