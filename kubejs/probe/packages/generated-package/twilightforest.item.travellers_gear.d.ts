declare module "twilightforest.item.travellers_gear.TravellersArmorBeltItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TravellersArmorItem} from "twilightforest.item.travellers_gear.TravellersArmorItem"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$ItemContainerContents} from "net.minecraft.world.item.component.ItemContainerContents"

export class $TravellersArmorBeltItem extends $TravellersArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DEFAULT_EMPTY_BELT_CONTAINER": $ItemContainerContents
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type, arg2: integer, arg3: integer)
constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public static "beltProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public static "isSwapHotbarActive"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public static "hasSwapHotbar"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public static "travellersTrySwapHotbar"(arg0: $Player$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersArmorBeltItem$$Type = ($TravellersArmorBeltItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersArmorBeltItem$$Original = $TravellersArmorBeltItem;}
declare module "twilightforest.item.travellers_gear.TravellersArmorItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$ItemAttributeModifiers$Builder} from "net.minecraft.world.item.component.ItemAttributeModifiers$Builder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TravellersModifiable$$Interface} from "twilightforest.item.travellers_gear.modifiers.TravellersModifiable"

export class $TravellersArmorItem extends $ArmorItem implements $TravellersModifiable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type, arg2: integer)
constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type, arg2: integer, arg3: integer)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "glovesProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public static "bootsProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public static "wingsProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public static "gogglesProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public static "chestProperties"(arg0: $Item$Properties$$Type): $Item$Properties
public "getModifierSlots"(): integer
public static "isTravellersArmorAndBroken"(arg0: $ItemStack$$Type): boolean
public static "defaultArmorProperties"(arg0: $ArmorItem$Type$$Type): $ItemAttributeModifiers$Builder
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "modifierSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersArmorItem$$Type = ($TravellersArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersArmorItem$$Original = $TravellersArmorItem;}
declare module "twilightforest.item.travellers_gear.TravellersGogglesItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TravellersArmorItem} from "twilightforest.item.travellers_gear.TravellersArmorItem"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TravellersGogglesItem extends $TravellersArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersGogglesItem$$Type = ($TravellersGogglesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TravellersGogglesItem$$Original = $TravellersGogglesItem;}
