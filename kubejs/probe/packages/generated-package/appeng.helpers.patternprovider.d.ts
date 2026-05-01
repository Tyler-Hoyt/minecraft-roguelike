declare module "appeng.helpers.patternprovider.PatternProviderLogicHost" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$PatternProviderLogic} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$Direction} from "net.minecraft.core.Direction"
import {$MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PatternContainer$$Interface} from "appeng.helpers.patternprovider.PatternContainer"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$AEItemKey} from "appeng.api.stacks.AEItemKey"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet} from "java.util.EnumSet"

export interface $PatternProviderLogicHost$$Interface extends $IConfigurableObject$$Interface, $IPriorityHost$$Interface, $PatternContainer$$Interface {
set "priority"(value: integer)
get "priority"(): integer
get "grid"(): $IGrid
get "blockEntity"(): $BlockEntity
get "logic"(): $PatternProviderLogic
get "configManager"(): $IConfigManager
get "targets"(): $EnumSet<($Direction)>
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "terminalIcon"(): $AEItemKey
get "terminalPatternInventory"(): $InternalInventory
get "mainMenuIcon"(): $ItemStack
}

export class $PatternProviderLogicHost implements $PatternProviderLogicHost$$Interface {
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "saveChanges"(): void
 "getGrid"(): $IGrid
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getBlockEntity"(): $BlockEntity
 "getLogic"(): $PatternProviderLogic
 "getConfigManager"(): $IConfigManager
 "getTargets"(): $EnumSet<($Direction)>
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "getTerminalGroup"(): $PatternContainerGroup
 "getTerminalIcon"(): $AEItemKey
 "getTerminalPatternInventory"(): $InternalInventory
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderLogicHost$$Type = ($PatternProviderLogicHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternProviderLogicHost$$Original = $PatternProviderLogicHost;}
declare module "appeng.helpers.patternprovider.PatternProviderLogic" {
import {$PatternProviderLogicHost$$Type} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LockCraftingMode} from "appeng.api.config.LockCraftingMode"
import {$List, $List$$Type} from "java.util.List"
import {$InternalInventoryHost$$Interface} from "appeng.util.inv.InternalInventoryHost"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ICraftingProvider$$Interface} from "appeng.api.networking.crafting.ICraftingProvider"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$AEKey} from "appeng.api.stacks.AEKey"
import {$GenericStack} from "appeng.api.stacks.GenericStack"
import {$PatternProviderReturnInventory} from "appeng.helpers.patternprovider.PatternProviderReturnInventory"

export class $PatternProviderLogic implements $InternalInventoryHost$$Interface, $ICraftingProvider$$Interface {
static readonly "NBT_PRIORITY": StringJS
static readonly "NBT_RETURN_INV": StringJS
static readonly "NBT_SEND_LIST": StringJS
static readonly "NBT_MEMORY_CARD_PATTERNS": StringJS
static readonly "NBT_UNLOCK_STACK": StringJS
static readonly "NBT_SEND_DIRECTION": StringJS
static readonly "NBT_UNLOCK_EVENT": StringJS

constructor(arg0: $IManagedGridNode$$Type, arg1: $PatternProviderLogicHost$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $PatternProviderLogicHost$$Type, arg2: integer)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveChanges"(): void
public "updateRedstoneState"(): void
public "getGrid"(): $IGrid
public "isClientSide"(): boolean
public "getConfigManager"(): $IConfigManager
public "onMainNodeStateChanged"(): void
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "isBusy"(): boolean
public "getCraftingLockedReason"(): $LockCraftingMode
public "exportSettings"(arg0: $DataComponentMap$Builder$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "importSettings"(arg0: $DataComponentMap$$Type, arg1: $Player$$Type): void
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "getPatternPriority"(): integer
public "clearContent"(): void
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "getUnlockStack"(): $GenericStack
public "getReturnInv"(): $PatternProviderReturnInventory
public "getPatternInv"(): $InternalInventory
public "resetCraftingLock"(): void
public "updatePatterns"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "getSortValue"(): long
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isBlocking"(): boolean
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
set "priority"(value: integer)
get "priority"(): integer
get "grid"(): $IGrid
get "clientSide"(): boolean
get "configManager"(): $IConfigManager
get "availablePatterns"(): $List<($IPatternDetails)>
get "busy"(): boolean
get "craftingLockedReason"(): $LockCraftingMode
get "patternPriority"(): integer
get "unlockStack"(): $GenericStack
get "returnInv"(): $PatternProviderReturnInventory
get "patternInv"(): $InternalInventory
get "terminalGroup"(): $PatternContainerGroup
get "sortValue"(): long
get "blocking"(): boolean
get "emitableItems"(): $Set<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderLogic$$Type = ($PatternProviderLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternProviderLogic$$Original = $PatternProviderLogic;}
declare module "appeng.helpers.patternprovider.PatternProviderReturnInventory" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$List$$Type} from "java.util.List"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export class $PatternProviderReturnInventory extends $GenericStackInv {
static "NUMBER_OF_SLOTS": integer

constructor(arg0: $Runnable$$Type)

public "canInsert"(): boolean
public "canExtract"(): boolean
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "injectIntoNetwork"(arg0: $MEStorage$$Type, arg1: $IActionSource$$Type, arg2: $Consumer$$Type<($GenericStack)>): boolean
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderReturnInventory$$Type = ($PatternProviderReturnInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternProviderReturnInventory$$Original = $PatternProviderReturnInventory;}
declare module "appeng.helpers.patternprovider.PatternContainer" {
import {$PatternContainerGroup} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IGrid} from "appeng.api.networking.IGrid"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"

export interface $PatternContainer$$Interface {
get "grid"(): $IGrid
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "terminalPatternInventory"(): $InternalInventory
}

export class $PatternContainer implements $PatternContainer$$Interface {
 "getGrid"(): $IGrid
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "getTerminalGroup"(): $PatternContainerGroup
 "getTerminalPatternInventory"(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainer$$Type = ($PatternContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternContainer$$Original = $PatternContainer;}
