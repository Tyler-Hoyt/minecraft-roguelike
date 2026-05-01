declare module "net.p3pp3rf1y.sophisticatedstorage.upgrades.hopper.HopperUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$HopperUpgradeItem} from "net.p3pp3rf1y.sophisticatedstorage.upgrades.hopper.HopperUpgradeItem"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ContentsFilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$INeighborChangeListenerUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.upgrades.INeighborChangeListenerUpgrade"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"

export class $HopperUpgradeWrapper extends $UpgradeWrapperBase<($HopperUpgradeWrapper), ($HopperUpgradeItem)> implements $ITickableUpgrade$$Interface, $INeighborChangeListenerUpgrade$$Interface {
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getOutputFilterLogic"(): $ContentsFilterLogic
public "setPullingFrom"(arg0: $Direction$$Type, arg1: boolean): void
public "isPullingFrom"(arg0: $Direction$$Type): boolean
public "isPushingTo"(arg0: $Direction$$Type): boolean
public "updateCacheOnSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "initDirections"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "setPushingTo"(arg0: $Direction$$Type, arg1: boolean): void
public "onNeighborChange"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "getInputFilterLogic"(): $ContentsFilterLogic
public "deserialize"(): void
get "outputFilterLogic"(): $ContentsFilterLogic
get "inputFilterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeWrapper$$Type = ($HopperUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HopperUpgradeWrapper$$Original = $HopperUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedstorage.upgrades.compression.CompressionUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CompressionUpgradeItem$Wrapper} from "net.p3pp3rf1y.sophisticatedstorage.upgrades.compression.CompressionUpgradeItem$Wrapper"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Holder} from "net.minecraft.core.Holder"
import {$IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CompressionUpgradeItem extends $UpgradeItemBase<($CompressionUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CompressionUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getType"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
public "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(never)>): $UpgradeSlotChangeResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($CompressionUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$$Type = ($CompressionUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressionUpgradeItem$$Original = $CompressionUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.upgrades.hopper.HopperUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$HopperUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedstorage.upgrades.hopper.HopperUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$Holder} from "net.minecraft.core.Holder"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $HopperUpgradeItem extends $UpgradeItemBase<($HopperUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($HopperUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IntSupplier$$Type, arg2: $IntSupplier$$Type, arg3: $IntSupplier$$Type)

public "getType"(): $UpgradeType<($HopperUpgradeWrapper)>
public "getInputFilterSlotCount"(): integer
public "getOutputFilterSlotCount"(): integer
public "getTransferSpeedTicks"(): long
public "getMaxTransferStackSize"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeType<($HopperUpgradeWrapper)>
get "inputFilterSlotCount"(): integer
get "outputFilterSlotCount"(): integer
get "transferSpeedTicks"(): long
get "maxTransferStackSize"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperUpgradeItem$$Type = ($HopperUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HopperUpgradeItem$$Original = $HopperUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.upgrades.compression.CompressionUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$CompressionUpgradeItem} from "net.p3pp3rf1y.sophisticatedstorage.upgrades.compression.CompressionUpgradeItem"

export class $CompressionUpgradeItem$Wrapper extends $UpgradeWrapperBase<($CompressionUpgradeItem$Wrapper), ($CompressionUpgradeItem)> {
public "canBeDisabled"(): boolean
public "onBeforeRemoved"(): void
public "hideSettingsTab"(): boolean
public "onAdded"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressionUpgradeItem$Wrapper$$Type = ($CompressionUpgradeItem$Wrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressionUpgradeItem$Wrapper$$Original = $CompressionUpgradeItem$Wrapper;}
declare module "net.p3pp3rf1y.sophisticatedstorage.upgrades.INeighborChangeListenerUpgrade" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $INeighborChangeListenerUpgrade$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $Direction): void
}

export class $INeighborChangeListenerUpgrade implements $INeighborChangeListenerUpgrade$$Interface {
 "onNeighborChange"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INeighborChangeListenerUpgrade$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INeighborChangeListenerUpgrade$$Original = $INeighborChangeListenerUpgrade;}
