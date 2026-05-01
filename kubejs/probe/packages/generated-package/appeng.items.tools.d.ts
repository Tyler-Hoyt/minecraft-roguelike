declare module "appeng.items.tools.GuideItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $GuideItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "GUIDE_ID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideItem$$Type = ($GuideItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuideItem$$Original = $GuideItem;}
declare module "appeng.items.tools.NetworkToolItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$NetworkToolMenuHost} from "appeng.items.contents.NetworkToolMenuHost"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $NetworkToolItem extends $AEBaseItem implements $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getInventory"(arg0: $ItemStack$$Type): $InternalInventory
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "findNetworkToolInv"(arg0: $Player$$Type): $NetworkToolMenuHost
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolItem$$Type = ($NetworkToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkToolItem$$Original = $NetworkToolItem;}
declare module "appeng.items.tools.MemoryCardItem" {
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMemoryCard$$Interface} from "appeng.api.implementations.items.IMemoryCard"
import {$List$$Type} from "java.util.List"
import {$MemoryCardMessages$$Type} from "appeng.api.implementations.items.MemoryCardMessages"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $MemoryCardItem extends $AEBaseItem implements $IMemoryCard$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getColor"(arg0: $ItemStack$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "exportGenericSettings"(arg0: any, arg1: $DataComponentMap$Builder$$Type): void
public static "importGenericSettings"(arg0: any, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): $Set<($DataComponentType<(never)>)>
public static "getSettingTranslationKey"(arg0: $DataComponentType$$Type<(never)>): StringJS
public static "importGenericSettingsAndNotify"(arg0: any, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "clearCard"(arg0: $ItemStack$$Type): void
public "notifyUser"(arg0: $Player$$Type, arg1: $MemoryCardMessages$$Type): void
public static "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$$Type = ($MemoryCardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MemoryCardItem$$Original = $MemoryCardItem;}
