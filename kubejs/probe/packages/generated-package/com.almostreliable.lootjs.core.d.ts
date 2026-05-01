declare module "com.almostreliable.lootjs.core.entry.TagLootEntry" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.world.level.storage.loot.entries.TagEntry"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TagLootEntry extends $AbstractSimpleLootEntry<($TagEntry)> implements $SingleLootEntry$$Interface {
constructor(arg0: $TagEntry$$Type)
constructor(arg0: $TagKey$$Type<($Item)>, arg1: boolean)

public "getTag"(): StringJS
public "addCondition"(arg0: $LootItemCondition$$Type): any
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setTag"(arg0: StringJS): void
public "isTag"(arg0: StringJS): boolean
public "getExpand"(): boolean
public "setExpand"(arg0: boolean): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setCount"(arg0: $NumberProvider$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
get "expand"(): boolean
set "expand"(value: boolean)
get "vanillaEntry"(): $LootPoolEntryContainer
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagLootEntry$$Type = ($TagLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagLootEntry$$Original = $TagLootEntry;}
declare module "com.almostreliable.lootjs.core.LootBucket" {
import {$Iterator} from "java.util.Iterator"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Spliterator} from "java.util.Spliterator"
import {$List$$Type} from "java.util.List"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$NullableFunction$$Type} from "com.almostreliable.lootjs.util.NullableFunction"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LootBucket implements $Iterable$$Interface<($ItemStack)> {
constructor(arg0: $LootContext$$Type)
constructor(arg0: $LootContext$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "remove"(arg0: $ItemFilter$$Type): void
public "size"(): integer
public "get"(arg0: integer): $ItemStack
public "extract"(arg0: $ItemFilter$$Type): $LootBucket
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean): void
public "replace"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type): void
public "replace"(arg0: $ItemFilter$$Type, arg1: $LootEntry$$Type, arg2: boolean, arg3: ($DataComponentType$$Type<(never)>)[]): void
public "iterator"(): $Iterator
public "merge"(arg0: $LootBucket$$Type): void
public "addEntry"(arg0: $LootEntry$$Type): void
public "addItem"(arg0: $ItemStack$$Type): void
public "modifyItems"(arg0: $NullableFunction$$Type<($ItemStack), ($ItemStack$$Type)>): void
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "addAllItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootBucket$$Type = ($LootBucket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootBucket$$Original = $LootBucket;}
declare module "com.almostreliable.lootjs.core.entry.LootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List} from "java.util.List"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$LootConditionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootEntry$$Interface extends $LootConditionsContainer$$Interface<($LootEntry)> {
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
get "conditions"(): $LootConditionList
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
}

export class $LootEntry implements $LootEntry$$Interface {
static readonly "EMPTY_CONDITIONS": $List<($LootItemCondition)>
static readonly "EMPTY_FUNCTIONS": $List<($LootItemFunction)>

static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
static "tag"(arg0: StringJS): $TagLootEntry
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootEntry
 "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "getConditions"(): $LootConditionList
 "isReference"(): boolean
static "testItem"(arg0: StringJS): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isTag"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isSimple"(): boolean
 "isDynamic"(): boolean
 "isItem"(): boolean
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "hasAnyStage"(...arg0: (StringJS)[]): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "addCondition"(arg0: $LootItemCondition$$Type): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$$Type = (($ItemStack$$Type));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootEntry$$Original = $LootEntry;}
declare module "com.almostreliable.lootjs.core.filters.IdFilter" {
import {$Pattern$$Type} from "java.util.regex.Pattern"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"

export interface $IdFilter$$Interface extends $Predicate$$Interface<($ResourceLocation)> {

(arg0: $ResourceLocation): boolean
}

export class $IdFilter implements $IdFilter$$Interface {
 "test"(arg0: $ResourceLocation$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "not"<T>(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "isEqual"<T>(arg0: any): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFilter$$Type = ((arg0: $ResourceLocation) => boolean) | ((StringJS) | ($Pattern$$Type));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IdFilter$$Original = $IdFilter;}
declare module "com.almostreliable.lootjs.core.filters.ItemFilter" {
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $ItemFilter$$Interface {

(arg0: $ItemStack): boolean
}

export class $ItemFilter implements $ItemFilter$$Interface {
static readonly "BLOCK_ITEM": $ItemFilter
static readonly "ARMOR": $ItemFilter
static readonly "DAMAGED": $ItemFilter
static readonly "NONE": $ItemFilter
static readonly "ANY": $ItemFilter
static readonly "ENCHANTED": $ItemFilter
static readonly "EMPTY": $ItemFilter
static readonly "DAMAGEABLE": $ItemFilter
static readonly "EDIBLE": $ItemFilter

 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $ItemFilter$$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(arg0: $ItemFilter$$Type): $ItemFilter
static "not"(arg0: $ItemFilter$$Type): $ItemFilter
static "tag"(arg0: StringJS): $ItemFilter
static "item"(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
static "allOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
static "anyOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
static "equipmentSlot"(arg0: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
static "anyToolAction"(...arg0: (StringJS)[]): $ItemFilter
static "hasComponent"(...arg0: ($DataComponentType$$Type<(never)>)[]): $ItemFilter
static "equipmentSlotGroup"(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
static "custom"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $ItemFilter
static "custom"(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
static "toolAction"(...arg0: (StringJS)[]): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $ItemStack) => boolean) | (($Ingredient$$Type));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFilter$$Original = $ItemFilter;}
declare module "com.almostreliable.lootjs.core.entry.ItemLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$LootItem, $LootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.LootItem"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $ItemLootEntry extends $AbstractSimpleLootEntry<($LootItem)> implements $SingleLootEntry$$Interface {
constructor(arg0: $Item$$Type, arg1: $NumberProvider$$Type)
constructor(arg0: $ItemStack$$Type)
constructor(arg0: $LootItem$$Type)

public "test"(arg0: $ItemFilter$$Type): boolean
public "getItem"(): $Item
public "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
public "getVanillaType"(): $LootPoolEntryType
public "addCondition"(arg0: $LootItemCondition$$Type): $ItemLootEntry
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setItem"(arg0: $Item$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setCount"(arg0: $NumberProvider$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
get "item"(): $Item
get "vanillaType"(): $LootPoolEntryType
set "item"(value: $Item$$Type)
get "vanillaEntry"(): $LootPoolEntryContainer
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLootEntry$$Type = ($ItemLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemLootEntry$$Original = $ItemLootEntry;}
declare module "com.almostreliable.lootjs.core.entry.EmptyLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$EmptyLootItem, $EmptyLootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.EmptyLootItem"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $EmptyLootEntry extends $AbstractSimpleLootEntry<($EmptyLootItem)> implements $SingleLootEntry$$Interface {
constructor(arg0: $EmptyLootItem$$Type)
constructor()

public "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
public "addCondition"(arg0: $LootItemCondition$$Type): any
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setCount"(arg0: $NumberProvider$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
get "vanillaEntry"(): $LootPoolEntryContainer
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyLootEntry$$Type = ($EmptyLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyLootEntry$$Original = $EmptyLootEntry;}
declare module "com.almostreliable.lootjs.core.filters.LootTableFilter" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootTableFilter$$Interface {
}

export class $LootTableFilter implements $LootTableFilter$$Interface {
 "test"(arg0: $LootTable$$Type): boolean
 "test"(arg0: $LootContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableFilter$$Type = ($LootTableFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableFilter$$Original = $LootTableFilter;}
declare module "com.almostreliable.lootjs.core.entry.SimpleLootEntry" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer$$Interface} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootEntry, $LootEntry$$Type, $LootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"

export interface $SimpleLootEntry$$Interface extends $LootEntry$$Interface, $LootFunctionsContainer$$Interface<($SimpleLootEntry)> {
get "quality"(): integer
set "quality"(value: integer)
set "weight"(value: integer)
get "functions"(): $LootFunctionList
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
get "conditions"(): $LootConditionList
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export class $SimpleLootEntry implements $SimpleLootEntry$$Interface {
 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $SimpleLootEntry
 "getQuality"(): integer
 "withWeight"(arg0: integer): $SimpleLootEntry
 "setQuality"(arg0: integer): void
 "setWeight"(arg0: integer): void
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "getFunctions"(): $LootFunctionList
 "setCount"(arg0: $NumberProvider$$Type): any
 "getWeight"(): integer
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
static "tag"(arg0: StringJS): $TagLootEntry
 "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "getConditions"(): $LootConditionList
 "isReference"(): boolean
static "testItem"(arg0: StringJS): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isTag"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isSimple"(): boolean
 "isDynamic"(): boolean
 "isItem"(): boolean
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "hasAnyStage"(...arg0: (StringJS)[]): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "addCondition"(arg0: $LootItemCondition$$Type): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleLootEntry$$Type = ($SimpleLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleLootEntry$$Original = $SimpleLootEntry;}
declare module "com.almostreliable.lootjs.core.LootType" {
import {$Enum} from "java.lang.Enum"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $LootType extends $Enum<($LootType)> {
static readonly "BLOCK": $LootType
static readonly "VAULT": $LootType
static readonly "ADVANCEMENT_REWARD": $LootType
static readonly "ARCHAEOLOGY": $LootType
static readonly "CHEST": $LootType
static readonly "ADVANCEMENT_ENTITY": $LootType
static readonly "EQUIPMENT": $LootType
static readonly "GIFT": $LootType
static readonly "FISHING": $LootType
static readonly "ENTITY": $LootType
static readonly "GENERIC": $LootType
static readonly "SELECTOR": $LootType
static readonly "PIGLIN_BARTER": $LootType
static readonly "BLOCK_USE": $LootType
static readonly "COMMAND": $LootType
static readonly "UNKNOWN": $LootType
static readonly "ADVANCEMENT_LOCATION": $LootType
static readonly "SHEARING": $LootType

public static "values"(): ($LootType)[]
public static "valueOf"(arg0: StringJS): $LootType
public "getParamSet"(): $LootContextParamSet
public static "getLootType"(arg0: $LootContextParamSet$$Type): $LootType
get "paramSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootType$$Type = (("unknown") | ("block") | ("block_use") | ("chest") | ("fishing") | ("entity") | ("equipment") | ("archaeology") | ("gift") | ("vault") | ("piglin_barter") | ("advancement_reward") | ("advancement_entity") | ("advancement_location") | ("command") | ("selector") | ("shearing") | ("generic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootType$$Original = $LootType;}
declare module "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$SimpleLootEntry, $SimpleLootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$LootPoolSingletonContainer, $LootPoolSingletonContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"

export class $AbstractSimpleLootEntry<E extends $LootPoolSingletonContainer> implements $SimpleLootEntry$$Interface {
constructor(arg0: E)
constructor(arg0: E, arg1: $LootConditionList$$Type, arg2: $LootFunctionList$$Type)

public "getQuality"(): integer
public "getVanillaEntry"(): $LootPoolEntryContainer
public "getVanillaType"(): $LootPoolEntryType
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setQuality"(arg0: integer): void
public "setWeight"(arg0: integer): void
public "getConditions"(): $LootConditionList
public "getFunctions"(): $LootFunctionList
public "getWeight"(): integer
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $SimpleLootEntry
public "withWeight"(arg0: integer): $SimpleLootEntry
public "withQuality"(arg0: integer): $SimpleLootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setCount"(arg0: $NumberProvider$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
public "isAlternative"(): boolean
public "isComposite"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public "isReference"(): boolean
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "isGroup"(): boolean
public "isSequence"(): boolean
public "isTag"(): boolean
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public "isSimple"(): boolean
public "isDynamic"(): boolean
public "isItem"(): boolean
public "setName"(arg0: $Component$$Type): $SimpleLootEntry
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
public "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
public "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "simulateExplosionDecay"(): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "smelt"(): $SimpleLootEntry
public "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
public "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $SimpleLootEntry
public "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
public "enchantRandomly"(): $SimpleLootEntry
public "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "hasAnyStage"(...arg0: (StringJS)[]): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "addCondition"(arg0: $LootItemCondition$$Type): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
get "quality"(): integer
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
set "quality"(value: integer)
set "weight"(value: integer)
get "conditions"(): $LootConditionList
get "functions"(): $LootFunctionList
get "weight"(): integer
set "count"(value: $NumberProvider$$Type)
get "type"(): $ResourceLocation
get "composite"(): boolean
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimpleLootEntry$$Type<E> = ($AbstractSimpleLootEntry<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractSimpleLootEntry$$Original<E> = $AbstractSimpleLootEntry<(E)>;}
declare module "com.almostreliable.lootjs.core.entry.CompositeLootEntry" {
import {$SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$CompositeEntryBase$$Type} from "net.minecraft.world.level.storage.loot.entries.CompositeEntryBase"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootEntry, $LootEntry$$Type, $LootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Interface} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $CompositeLootEntry implements $LootEntry$$Interface, $LootEntriesTransformer$$Interface, $LootEntryAppender$$Interface {
constructor(arg0: $CompositeEntryBase$$Type)
constructor(arg0: $CompositeEntryBase$$Type, arg1: $LootEntryList$$Type, arg2: $LootConditionList$$Type)

public "entries"(arg0: $Consumer$$Type<($LootEntryList)>): $CompositeLootEntry
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "getEntries"(): $LootEntryList
public "when"(arg0: $Consumer$$Type): $LootEntry
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $CompositeLootEntry
public "getVanillaEntry"(): $LootPoolEntryContainer
public "getVanillaType"(): $LootPoolEntryType
public "addCondition"(arg0: $LootItemCondition$$Type): any
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getConditions"(): $LootConditionList
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $CompositeLootEntry
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
public "isAlternative"(): boolean
public "isComposite"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public "isReference"(): boolean
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "isGroup"(): boolean
public "isSequence"(): boolean
public "isTag"(): boolean
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public "isSimple"(): boolean
public "isDynamic"(): boolean
public "isItem"(): boolean
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
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "hasAnyStage"(...arg0: (StringJS)[]): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "conditions"(): $LootConditionList
get "type"(): $ResourceLocation
get "composite"(): boolean
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootEntry$$Type = ($CompositeLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompositeLootEntry$$Original = $CompositeLootEntry;}
declare module "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$NestedLootTable, $NestedLootTable$$Type} from "net.minecraft.world.level.storage.loot.entries.NestedLootTable"
import {$AbstractSimpleLootEntry} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TableReferenceLootEntry extends $AbstractSimpleLootEntry<($NestedLootTable)> {
constructor(arg0: $NestedLootTable$$Type)
constructor(arg0: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public "addCondition"(arg0: $LootItemCondition$$Type): $TableReferenceLootEntry
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setLocation"(arg0: $ResourceLocation$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setCount"(arg0: $NumberProvider$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
public static "tag"(arg0: StringJS): $TagLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "testItem"(arg0: StringJS): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
get "location"(): $ResourceLocation
set "location"(value: $ResourceLocation$$Type)
get "vanillaEntry"(): $LootPoolEntryContainer
set "count"(value: $NumberProvider$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableReferenceLootEntry$$Type = ($TableReferenceLootEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TableReferenceLootEntry$$Original = $TableReferenceLootEntry;}
declare module "com.almostreliable.lootjs.core.entry.SingleLootEntry" {
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$SimpleLootEntry, $SimpleLootEntry$$Interface} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"

export interface $SingleLootEntry$$Interface extends $SimpleLootEntry$$Interface {
get "quality"(): integer
set "quality"(value: integer)
set "weight"(value: integer)
get "functions"(): $LootFunctionList
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
get "conditions"(): $LootConditionList
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export class $SingleLootEntry implements $SingleLootEntry$$Interface {
 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $SimpleLootEntry
 "getQuality"(): integer
 "withWeight"(arg0: integer): $SimpleLootEntry
 "setQuality"(arg0: integer): void
 "setWeight"(arg0: integer): void
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "getFunctions"(): $LootFunctionList
 "setCount"(arg0: $NumberProvider$$Type): any
 "getWeight"(): integer
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: StringJS, arg1: boolean): $TagLootEntry
static "tag"(arg0: StringJS): $TagLootEntry
 "createRandomItem"(arg0: $LootContext$$Type): $ItemStack
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "getConditions"(): $LootConditionList
 "isReference"(): boolean
static "testItem"(arg0: StringJS): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isTag"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isSimple"(): boolean
 "isDynamic"(): boolean
 "isItem"(): boolean
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(StringJS), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "hasAnyStage"(...arg0: (StringJS)[]): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "addCondition"(arg0: $LootItemCondition$$Type): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleLootEntry$$Type = (($ItemStack$$Type));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleLootEntry$$Original = $SingleLootEntry;}
