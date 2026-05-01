declare module "quek.undergarden.item.armor.UndergardenArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $UndergardenArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public static "createFroststeelAttributes"(arg0: $ArmorItem$Type$$Type, arg1: $ArmorMaterial$$Type): $ItemAttributeModifiers
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndergardenArmorItem$$Type = ($UndergardenArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UndergardenArmorItem$$Original = $UndergardenArmorItem;}
