declare module "appeng.items.tools.powered.PortableCellItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AbstractPortableCell} from "appeng.items.tools.powered.AbstractPortableCell"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $PortableCellItem extends $AbstractPortableCell implements $IBasicCellItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AEKeyType$$Type, arg1: integer, arg2: $MenuType$$Type<(never)>, arg3: $StorageTier$$Type, arg4: $Item$Properties$$Type, arg5: integer)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "getKeyType"(): $AEKeyType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getTier"(): $StorageTier
public "getRecipeId"(): $ResourceLocation
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "storableInStorageCell"(): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
get "tier"(): $StorageTier
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellItem$$Type = ($PortableCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableCellItem$$Original = $PortableCellItem;}
declare module "appeng.items.tools.powered.EntropyManipulatorItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IBlockTool$$Interface} from "appeng.hooks.IBlockTool"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EntropyManipulatorItem extends $AEBasePoweredItem implements $IBlockTool$$Interface {
static readonly "ENERGY_PER_USE": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyManipulatorItem$$Type = ($EntropyManipulatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntropyManipulatorItem$$Original = $EntropyManipulatorItem;}
declare module "appeng.items.tools.powered.powersink.AEBasePoweredItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$IAEItemPowerStorage$$Interface} from "appeng.api.implementations.items.IAEItemPowerStorage"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export class $AEBasePoweredItem extends $AEBaseItem implements $IAEItemPowerStorage$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getAECurrentPower"(arg0: $ItemStack$$Type): double
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
public "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredItem$$Type = ($AEBasePoweredItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBasePoweredItem$$Original = $AEBasePoweredItem;}
declare module "appeng.items.tools.powered.WirelessCraftingTerminalItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Item} from "net.minecraft.world.item.Item"
import {$WirelessTerminalItem} from "appeng.items.tools.powered.WirelessTerminalItem"
import {$IGridLinkableHandler} from "appeng.api.features.IGridLinkableHandler"

export class $WirelessCraftingTerminalItem extends $WirelessTerminalItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost
public "getMenuType"(): $MenuType<(never)>
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "menuType"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessCraftingTerminalItem$$Type = ($WirelessCraftingTerminalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessCraftingTerminalItem$$Original = $WirelessCraftingTerminalItem;}
declare module "appeng.items.tools.powered.WirelessTerminalItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$IGridLinkableHandler} from "appeng.api.features.IGridLinkableHandler"
import {$WirelessTerminalMenuHost} from "appeng.helpers.WirelessTerminalMenuHost"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeableItem$$Interface} from "appeng.api.upgrades.IUpgradeableItem"
import {$PoweredContainerItem} from "appeng.items.tools.powered.PoweredContainerItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$IGrid} from "appeng.api.networking.IGrid"

export class $WirelessTerminalItem extends $PoweredContainerItem implements $IMenuItem$$Interface, $IUpgradeableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hasPower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $WirelessTerminalMenuHost<(never)>
public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "getMenuType"(): $MenuType<(never)>
public "usePower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "menuType"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalItem$$Type = ($WirelessTerminalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessTerminalItem$$Original = $WirelessTerminalItem;}
declare module "appeng.items.tools.powered.MatterCannonItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LookDirection$$Type} from "appeng.util.LookDirection"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $MatterCannonItem extends $AEBasePoweredItem implements $IBasicCellItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "storableInStorageCell"(): boolean
public "fireCannon"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $LookDirection$$Type): boolean
public "getKeyType"(): $AEKeyType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getDamageFromPenetration"(arg0: float): integer
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonItem$$Type = ($MatterCannonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MatterCannonItem$$Original = $MatterCannonItem;}
declare module "appeng.items.tools.powered.ChargedStaffItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $ChargedStaffItem extends $AEBasePoweredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getChargeRate"(arg0: $ItemStack$$Type): double
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedStaffItem$$Type = ($ChargedStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedStaffItem$$Original = $ChargedStaffItem;}
declare module "appeng.items.tools.powered.ColorApplicatorItem" {
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$IBlockTool$$Interface} from "appeng.hooks.IBlockTool"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IMouseWheelItem$$Interface} from "appeng.helpers.IMouseWheelItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $ColorApplicatorItem extends $AEBasePoweredItem implements $IBasicCellItem$$Interface, $IBlockTool$$Interface, $IMouseWheelItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "createFullColorApplicator"(): $ItemStack
public "storableInStorageCell"(): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "getColor"(arg0: $ItemStack$$Type): $AEColor
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getKeyType"(): $AEKeyType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "consumeItem"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type, arg2: boolean): boolean
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "setActiveColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "cycleColors"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: integer): void
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "consumeColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: boolean): boolean
public "getActiveColor"(arg0: $ItemStack$$Type): $AEColor
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorApplicatorItem$$Type = ($ColorApplicatorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorApplicatorItem$$Original = $ColorApplicatorItem;}
declare module "appeng.items.tools.powered.AbstractPortableCell" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$PoweredContainerItem} from "appeng.items.tools.powered.PoweredContainerItem"
import {$PortableCellMenuHost} from "appeng.items.contents.PortableCellMenuHost"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AbstractPortableCell extends $PoweredContainerItem implements $ICellWorkbenchItem$$Interface, $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $MenuType$$Type<(never)>, arg1: $Item$Properties$$Type, arg2: integer)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getColor"(arg0: $ItemStack$$Type): integer
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $PortableCellMenuHost<(never)>
public "onUpgradesChanged"(arg0: $ItemStack$$Type, arg1: $IUpgradeInventory$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRecipeId"(): $ResourceLocation
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "asItem"(): $Item
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPortableCell$$Type = ($AbstractPortableCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPortableCell$$Original = $AbstractPortableCell;}
declare module "appeng.items.tools.powered.PoweredContainerItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$AEBasePoweredItem} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $PoweredContainerItem extends $AEBasePoweredItem implements $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(never)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredContainerItem$$Type = ($PoweredContainerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredContainerItem$$Original = $PoweredContainerItem;}
