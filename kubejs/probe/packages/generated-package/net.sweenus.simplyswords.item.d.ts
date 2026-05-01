declare module "net.sweenus.simplyswords.item.custom.RighteousRelicSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RighteousRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RighteousRelicSwordItem$$Type = ($RighteousRelicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RighteousRelicSwordItem$$Original = $RighteousRelicSwordItem;}
declare module "net.sweenus.simplyswords.item.NetherfusedGemItem" {
import {$ValidationResult} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerFiller$$Interface} from "net.sweenus.simplyswords.power.GemPowerFiller"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item} from "net.minecraft.world.item.Item"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export class $NetherfusedGemItem extends $Item implements $GemPowerFiller$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "fill"(stack: $ItemStack$$Type, component: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherfusedGemItem$$Type = ($NetherfusedGemItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetherfusedGemItem$$Original = $NetherfusedGemItem;}
declare module "net.sweenus.simplyswords.item.custom.ThunderbrandSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ThunderbrandSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderbrandSwordItem$$Type = ($ThunderbrandSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThunderbrandSwordItem$$Original = $ThunderbrandSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.BrambleSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BrambleSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrambleSwordItem$$Type = ($BrambleSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrambleSwordItem$$Original = $BrambleSwordItem;}
declare module "net.sweenus.simplyswords.item.RunefusedGemItem" {
import {$ValidationResult} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerFiller$$Interface} from "net.sweenus.simplyswords.power.GemPowerFiller"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item} from "net.minecraft.world.item.Item"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export class $RunefusedGemItem extends $Item implements $GemPowerFiller$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "fill"(stack: $ItemStack$$Type, component: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunefusedGemItem$$Type = ($RunefusedGemItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunefusedGemItem$$Original = $RunefusedGemItem;}
declare module "net.sweenus.simplyswords.item.custom.HearthflameSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HearthflameSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HearthflameSwordItem$$Type = ($HearthflameSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HearthflameSwordItem$$Original = $HearthflameSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.SoulrenderSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulrenderSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulrenderSwordItem$$Type = ($SoulrenderSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulrenderSwordItem$$Original = $SoulrenderSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.PlagueSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlagueSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlagueSwordItem$$Type = ($PlagueSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlagueSwordItem$$Original = $PlagueSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.StormSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormSwordItem$$Type = ($StormSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StormSwordItem$$Original = $StormSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.TaintedRelicSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TaintedRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaintedRelicSwordItem$$Type = ($TaintedRelicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TaintedRelicSwordItem$$Original = $TaintedRelicSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.FrostfallSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FrostfallSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostfallSwordItem$$Type = ($FrostfallSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostfallSwordItem$$Original = $FrostfallSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.EmberlashSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EmberlashSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "tooltipEffectDamage": float
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberlashSwordItem$$Type = ($EmberlashSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmberlashSwordItem$$Original = $EmberlashSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.SoulPyreSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulPyreSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulPyreSwordItem$$Type = ($SoulPyreSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulPyreSwordItem$$Original = $SoulPyreSwordItem;}
declare module "net.sweenus.simplyswords.item.UniqueSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $UniqueSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "getName"(stack: $ItemStack$$Type): $Component
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getItemRarity"(): StringJS
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "itemRarity"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueSwordItem$$Type = ($UniqueSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UniqueSwordItem$$Original = $UniqueSwordItem;}
declare module "net.sweenus.simplyswords.item.SimplySwordsNetheriteSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SimplySwordsNetheriteSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (StringJS)[])

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "isValidRepairItem"(stack: $ItemStack$$Type, ingredient: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsNetheriteSwordItem$$Type = ($SimplySwordsNetheriteSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimplySwordsNetheriteSwordItem$$Original = $SimplySwordsNetheriteSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.LivyatanSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $LivyatanSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivyatanSwordItem$$Type = ($LivyatanSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivyatanSwordItem$$Original = $LivyatanSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.MagispearSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagispearSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagispearSwordItem$$Type = ($MagispearSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagispearSwordItem$$Original = $MagispearSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.HarbingerSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HarbingerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarbingerSwordItem$$Type = ($HarbingerSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarbingerSwordItem$$Original = $HarbingerSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.WatcherSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WatcherSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatcherSwordItem$$Type = ($WatcherSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatcherSwordItem$$Original = $WatcherSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.EnigmaSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EnigmaSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaSwordItem$$Type = ($EnigmaSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnigmaSwordItem$$Original = $EnigmaSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.IcewhisperSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $IcewhisperSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcewhisperSwordItem$$Type = ($IcewhisperSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IcewhisperSwordItem$$Original = $IcewhisperSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.MagibladeSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagibladeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagibladeSwordItem$$Type = ($MagibladeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagibladeSwordItem$$Original = $MagibladeSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.DormantRelicSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $DormantRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DormantRelicSwordItem$$Type = ($DormantRelicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DormantRelicSwordItem$$Original = $DormantRelicSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.ArcanethystSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ArcanethystSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanethystSwordItem$$Type = ($ArcanethystSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanethystSwordItem$$Original = $ArcanethystSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.TempestSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TempestSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempestSwordItem$$Type = ($TempestSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TempestSwordItem$$Original = $TempestSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.StarsEdgeSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StarsEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarsEdgeSwordItem$$Type = ($StarsEdgeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarsEdgeSwordItem$$Original = $StarsEdgeSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.StealSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StealSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StealSwordItem$$Type = ($StealSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StealSwordItem$$Original = $StealSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.SoulkeeperSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulkeeperSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulkeeperSwordItem$$Type = ($SoulkeeperSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulkeeperSwordItem$$Original = $SoulkeeperSwordItem;}
declare module "net.sweenus.simplyswords.item.RunicSwordItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RunicSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicSwordItem$$Type = ($RunicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicSwordItem$$Original = $RunicSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.LichbladeSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $LichbladeSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LichbladeSwordItem$$Type = ($LichbladeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LichbladeSwordItem$$Original = $LichbladeSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.TwistedBladeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TwistedBladeItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwistedBladeItem$$Type = ($TwistedBladeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TwistedBladeItem$$Original = $TwistedBladeItem;}
declare module "net.sweenus.simplyswords.item.EmpoweredRemnantItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $EmpoweredRemnantItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpoweredRemnantItem$$Type = ($EmpoweredRemnantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmpoweredRemnantItem$$Original = $EmpoweredRemnantItem;}
declare module "net.sweenus.simplyswords.item.custom.CaelestisSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CaelestisSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaelestisSwordItem$$Type = ($CaelestisSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CaelestisSwordItem$$Original = $CaelestisSwordItem;}
declare module "net.sweenus.simplyswords.item.SimplySwordsThrowableItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SimplySwordsSwordItem} from "net.sweenus.simplyswords.item.SimplySwordsSwordItem"

export class $SimplySwordsThrowableItem extends $SimplySwordsSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (StringJS)[])

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsThrowableItem$$Type = ($SimplySwordsThrowableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimplySwordsThrowableItem$$Original = $SimplySwordsThrowableItem;}
declare module "net.sweenus.simplyswords.item.custom.ShadowstingSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ShadowstingSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowstingSwordItem$$Type = ($ShadowstingSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShadowstingSwordItem$$Original = $ShadowstingSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.WraithfangSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WraithfangSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WraithfangSwordItem$$Type = ($WraithfangSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WraithfangSwordItem$$Original = $WraithfangSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.WickpiercerSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WickpiercerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickpiercerSwordItem$$Type = ($WickpiercerSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WickpiercerSwordItem$$Original = $WickpiercerSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.WatcherClaymoreItem" {
import {$WatcherSwordItem} from "net.sweenus.simplyswords.item.custom.WatcherSwordItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $WatcherClaymoreItem extends $WatcherSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatcherClaymoreItem$$Type = ($WatcherClaymoreItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatcherClaymoreItem$$Original = $WatcherClaymoreItem;}
declare module "net.sweenus.simplyswords.item.custom.WatchingWarglaiveItem" {
import {$WatcherSwordItem} from "net.sweenus.simplyswords.item.custom.WatcherSwordItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $WatchingWarglaiveItem extends $WatcherSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchingWarglaiveItem$$Type = ($WatchingWarglaiveItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatchingWarglaiveItem$$Original = $WatchingWarglaiveItem;}
declare module "net.sweenus.simplyswords.item.SimplySwordsSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SimplySwordsSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (StringJS)[])
constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "isValidRepairItem"(stack: $ItemStack$$Type, ingredient: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsSwordItem$$Type = ($SimplySwordsSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimplySwordsSwordItem$$Original = $SimplySwordsSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.BrimstoneClaymoreItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BrimstoneClaymoreItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrimstoneClaymoreItem$$Type = ($BrimstoneClaymoreItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrimstoneClaymoreItem$$Original = $BrimstoneClaymoreItem;}
declare module "net.sweenus.simplyswords.item.custom.StormsEdgeSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormsEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormsEdgeSwordItem$$Type = ($StormsEdgeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StormsEdgeSwordItem$$Original = $StormsEdgeSwordItem;}
declare module "net.sweenus.simplyswords.item.TwoHandedWeapon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TwoHandedWeapon$$Interface {
}

export class $TwoHandedWeapon implements $TwoHandedWeapon$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoHandedWeapon$$Type = ($TwoHandedWeapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TwoHandedWeapon$$Original = $TwoHandedWeapon;}
declare module "net.sweenus.simplyswords.item.custom.HiveheartSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HiveheartSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiveheartSwordItem$$Type = ($HiveheartSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HiveheartSwordItem$$Original = $HiveheartSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.MoltenEdgeSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MoltenEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoltenEdgeSwordItem$$Type = ($MoltenEdgeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MoltenEdgeSwordItem$$Original = $MoltenEdgeSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.SunfireSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SunfireSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunfireSwordItem$$Type = ($SunfireSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SunfireSwordItem$$Original = $SunfireSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.RibboncleaverSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RibboncleaverSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaverSwordItem$$Type = ($RibboncleaverSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RibboncleaverSwordItem$$Original = $RibboncleaverSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.FlamewindSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FlamewindSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamewindSwordItem$$Type = ($FlamewindSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlamewindSwordItem$$Original = $FlamewindSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.StormbringerSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormbringerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static "scalesWithSpellPower": boolean
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormbringerSwordItem$$Type = ($StormbringerSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StormbringerSwordItem$$Original = $StormbringerSwordItem;}
declare module "net.sweenus.simplyswords.item.ContainedRemnantItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ContainedRemnantItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public static "addTransformation"(block: $Block$$Type, identifier: $ResourceLocation$$Type): void
public static "checkNearbyBlocks"(player: $ServerPlayer$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainedRemnantItem$$Type = ($ContainedRemnantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainedRemnantItem$$Original = $ContainedRemnantItem;}
declare module "net.sweenus.simplyswords.item.custom.WaxweaverSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WaxweaverSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxweaverSwordItem$$Type = ($WaxweaverSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaxweaverSwordItem$$Original = $WaxweaverSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.ChompolotlSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ChompolotlSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChompolotlSwordItem$$Type = ($ChompolotlSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChompolotlSwordItem$$Original = $ChompolotlSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.MagiscytheSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagiscytheSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagiscytheSwordItem$$Type = ($MagiscytheSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagiscytheSwordItem$$Original = $MagiscytheSwordItem;}
declare module "net.sweenus.simplyswords.item.RunicTabletItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $RunicTabletItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicTabletItem$$Type = ($RunicTabletItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicTabletItem$$Original = $RunicTabletItem;}
declare module "net.sweenus.simplyswords.item.custom.WhisperwindSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon$$Interface} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WhisperwindSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhisperwindSwordItem$$Type = ($WhisperwindSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhisperwindSwordItem$$Original = $WhisperwindSwordItem;}
declare module "net.sweenus.simplyswords.item.custom.EmberIreSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EmberIreSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberIreSwordItem$$Type = ($EmberIreSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmberIreSwordItem$$Original = $EmberIreSwordItem;}
