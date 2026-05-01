declare module "appeng.items.storage.ViewCellItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$IPartitionList} from "appeng.util.prioritylist.IPartitionList"
import {$AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $ViewCellItem extends $AEBaseItem implements $ICellWorkbenchItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "createItemFilter"(arg0: $Collection$$Type<($ItemStack$$Type)>): $IPartitionList
public static "createFilter"(arg0: $AEKeyFilter$$Type, arg1: $Collection$$Type<($ItemStack$$Type)>): $IPartitionList
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewCellItem$$Type = ($ViewCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewCellItem$$Original = $ViewCellItem;}
declare module "appeng.items.storage.CreativeCellItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ICellWorkbenchItem$$Interface} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $CreativeCellItem extends $AEBaseItem implements $ICellWorkbenchItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "ofItems"(...arg0: ($ItemLike$$Type)[]): $ItemStack
public static "ofFluids"(...arg0: ($Fluid$$Type)[]): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCellItem$$Type = ($CreativeCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCellItem$$Original = $CreativeCellItem;}
declare module "appeng.items.storage.BasicStorageCell" {
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
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AEToolItem$$Interface} from "appeng.hooks.AEToolItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$IBasicCellItem$$Interface} from "appeng.api.storage.cells.IBasicCellItem"

export class $BasicStorageCell extends $AEBaseItem implements $IBasicCellItem$$Interface, $AEToolItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: $AEKeyType$$Type)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getKeyType"(): $AEKeyType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getIdleDrain"(): double
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "storableInStorageCell"(): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
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
export type $BasicStorageCell$$Type = ($BasicStorageCell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicStorageCell$$Original = $BasicStorageCell;}
declare module "appeng.items.storage.SpatialStorageCellItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ISpatialStorageCell$$Interface} from "appeng.api.implementations.items.ISpatialStorageCell"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SpatialStorageCellItem extends $AEBaseItem implements $ISpatialStorageCell$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "doSpatialTransition"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer): boolean
public "getAllocatedPlotId"(arg0: $ItemStack$$Type): integer
public "setStoredDimension"(arg0: $ItemStack$$Type, arg1: integer, arg2: $BlockPos$$Type): void
public "getMaxStoredDim"(arg0: $ItemStack$$Type): integer
public "isSpatialStorage"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialStorageCellItem$$Type = ($SpatialStorageCellItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpatialStorageCellItem$$Original = $SpatialStorageCellItem;}
declare module "appeng.items.storage.StorageTier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $StorageTier extends $Record {
static readonly "SIZE_256K": $StorageTier
static readonly "SIZE_1K": $StorageTier
static readonly "SIZE_4K": $StorageTier
static readonly "SIZE_64K": $StorageTier
static readonly "SIZE_16K": $StorageTier

constructor(index: integer, namePrefix: StringJS, bytes: integer, idleDrain: double, componentSupplier: $Supplier$$Type<($Item$$Type)>)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bytes"(): integer
public "idleDrain"(): double
public "componentSupplier"(): $Supplier<($Item)>
public "namePrefix"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTier$$Type = ({"namePrefix"?: StringJS, "index"?: integer, "idleDrain"?: double, "bytes"?: integer, "componentSupplier"?: $Supplier$$Type<($Item$$Type)>}) | ([namePrefix?: StringJS, index?: integer, idleDrain?: double, bytes?: integer, componentSupplier?: $Supplier$$Type<($Item$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageTier$$Original = $StorageTier;}
