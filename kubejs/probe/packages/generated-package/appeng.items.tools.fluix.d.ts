declare module "appeng.items.tools.fluix.FluixAxeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem$$Interface} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $FluixAxeItem extends $AxeItem implements $IntrinsicEnchantItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixAxeItem$$Type = ($FluixAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixAxeItem$$Original = $FluixAxeItem;}
declare module "appeng.items.tools.fluix.FluixSmithingTemplateItem" {
import {$SmithingTemplateItem} from "net.minecraft.world.item.SmithingTemplateItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $FluixSmithingTemplateItem extends $SmithingTemplateItem {
static readonly "NETHERITE_UPGRADE_APPLIES_TO": $Component
static readonly "EMPTY_SLOT_LEGGINGS": $ResourceLocation
static readonly "NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "ARMOR_TRIM_INGREDIENTS": $Component
static readonly "EMPTY_SLOT_PICKAXE": $ResourceLocation
static readonly "NETHERITE_UPGRADE_INGREDIENTS": $Component
static readonly "EMPTY_SLOT_QUARTZ": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EMPTY_SLOT_HOE": $ResourceLocation
static readonly "EMPTY_SLOT_DIAMOND": $ResourceLocation
static readonly "INGREDIENTS_TITLE": $Component
static readonly "EMPTY_SLOT_SWORD": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION": $Component
static readonly "EMPTY_SLOT_INGOT": $ResourceLocation
static readonly "EMPTY_SLOT_AMETHYST_SHARD": $ResourceLocation
static readonly "EMPTY_SLOT_HELMET": $ResourceLocation
static readonly "EMPTY_SLOT_EMERALD": $ResourceLocation
static readonly "EMPTY_SLOT_AXE": $ResourceLocation
static readonly "EMPTY_SLOT_REDSTONE_DUST": $ResourceLocation
static readonly "NETHERITE_UPGRADE": $Component
static readonly "TITLE_FORMAT": $ChatFormatting
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "ARMOR_TRIM_BASE_SLOT_DESCRIPTION": $Component
static readonly "MAX_BAR_WIDTH": integer
static readonly "EMPTY_SLOT_LAPIS_LAZULI": $ResourceLocation
static readonly "EMPTY_SLOT_SHOVEL": $ResourceLocation
static readonly "EMPTY_SLOT_CHESTPLATE": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "EMPTY_SLOT_BOOTS": $ResourceLocation
static readonly "APPLIES_TO_TITLE": $Component
static readonly "DESCRIPTION_FORMAT": $ChatFormatting
static readonly "ARMOR_TRIM_APPLIES_TO": $Component
static readonly "ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSmithingTemplateItem$$Type = ($FluixSmithingTemplateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixSmithingTemplateItem$$Original = $FluixSmithingTemplateItem;}
declare module "appeng.items.tools.fluix.FluixPickaxeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem$$Interface} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"

export class $FluixPickaxeItem extends $PickaxeItem implements $IntrinsicEnchantItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixPickaxeItem$$Type = ($FluixPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixPickaxeItem$$Original = $FluixPickaxeItem;}
declare module "appeng.items.tools.fluix.FluixHoeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem$$Interface} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"

export class $FluixHoeItem extends $HoeItem implements $IntrinsicEnchantItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixHoeItem$$Type = ($FluixHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixHoeItem$$Original = $FluixHoeItem;}
declare module "appeng.items.tools.fluix.FluixSpadeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$IntrinsicEnchantItem$$Interface} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluixSpadeItem extends $ShovelItem implements $IntrinsicEnchantItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSpadeItem$$Type = ($FluixSpadeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixSpadeItem$$Original = $FluixSpadeItem;}
declare module "appeng.items.tools.fluix.FluixSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem$$Interface} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $FluixSwordItem extends $SwordItem implements $IntrinsicEnchantItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSwordItem$$Type = ($FluixSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluixSwordItem$$Original = $FluixSwordItem;}
