declare module "appeng.helpers.InterfaceLogic" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$List$$Type} from "java.util.List"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ConfigInventory} from "appeng.util.ConfigInventory"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$InterfaceLogicHost$$Type} from "appeng.helpers.InterfaceLogicHost"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType} from "appeng.api.util.AECableType"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$ICraftingRequester$$Interface} from "appeng.api.networking.crafting.ICraftingRequester"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $InterfaceLogic implements $ICraftingRequester$$Interface, $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface {
constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type, arg3: integer)

public "getLocation"(): $DimensionalBlockPos
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "notifyNeighbors"(): void
public "getInventory"(): $MEStorage
public "getConfigManager"(): $IConfigManager
public "getUpgrades"(): $IUpgradeInventory
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getStorage"(): $ConfigInventory
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "gridChanged"(): void
public "getConfig"(): $ConfigInventory
public "getActionableNode"(): $IGridNode
public "jobStateChange"(arg0: $ICraftingLink$$Type): void
public "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "clearContent"(): void
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
get "location"(): $DimensionalBlockPos
set "priority"(value: integer)
get "priority"(): integer
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
get "upgrades"(): $IUpgradeInventory
get "storage"(): $ConfigInventory
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "config"(): $ConfigInventory
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogic$$Type = ($InterfaceLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceLogic$$Original = $InterfaceLogic;}
declare module "appeng.helpers.IMouseWheelItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IMouseWheelItem$$Interface {

(arg0: $ItemStack, arg1: boolean): void
}

export class $IMouseWheelItem implements $IMouseWheelItem$$Interface {
 "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMouseWheelItem$$Type = ((arg0: $ItemStack, arg1: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMouseWheelItem$$Original = $IMouseWheelItem;}
declare module "appeng.helpers.InterfaceLogicHost" {
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$IConfigInvHost$$Interface} from "appeng.helpers.IConfigInvHost"
import {$MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InterfaceLogic} from "appeng.helpers.InterfaceLogic"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPriorityHost$$Interface} from "appeng.helpers.IPriorityHost"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $InterfaceLogicHost$$Interface extends $IConfigurableObject$$Interface, $IUpgradeableObject$$Interface, $IPriorityHost$$Interface, $IConfigInvHost$$Interface {
set "priority"(value: integer)
get "priority"(): integer
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "upgrades"(): $IUpgradeInventory
get "storage"(): $GenericStackInv
get "interfaceLogic"(): $InterfaceLogic
get "config"(): $GenericStackInv
get "mainMenuIcon"(): $ItemStack
}

export class $InterfaceLogicHost implements $InterfaceLogicHost$$Interface {
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "saveChanges"(): void
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getBlockEntity"(): $BlockEntity
 "getConfigManager"(): $IConfigManager
 "getUpgrades"(): $IUpgradeInventory
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getStorage"(): $GenericStackInv
 "getInterfaceLogic"(): $InterfaceLogic
 "getConfig"(): $GenericStackInv
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogicHost$$Type = ($InterfaceLogicHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InterfaceLogicHost$$Original = $InterfaceLogicHost;}
declare module "appeng.helpers.WirelessTerminalMenuHost" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$KeyTypeSelectionHost$$Interface} from "appeng.api.util.KeyTypeSelectionHost"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IPortableTerminal$$Interface} from "appeng.api.implementations.menuobjects.IPortableTerminal"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$WirelessTerminalItem, $WirelessTerminalItem$$Type} from "appeng.items.tools.powered.WirelessTerminalItem"

export class $WirelessTerminalMenuHost<T extends $WirelessTerminalItem> extends $ItemMenuHost<(T)> implements $IPortableTerminal$$Interface, $IActionHost$$Interface, $KeyTypeSelectionHost$$Interface {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "getLinkStatus"(): $ILinkStatus
public "getCloseHotkey"(): StringJS
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getInventory"(): $MEStorage
public "getConfigManager"(): $IConfigManager
public "getActionableNode"(): $IGridNode
public "getKeyTypeSelection"(): $KeyTypeSelection
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public static "empty"(): $IEnergySource
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): StringJS
get "mainMenuIcon"(): $ItemStack
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
get "actionableNode"(): $IGridNode
get "keyTypeSelection"(): $KeyTypeSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalMenuHost$$Type<T> = ($WirelessTerminalMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WirelessTerminalMenuHost$$Original<T> = $WirelessTerminalMenuHost<(T)>;}
declare module "appeng.helpers.IConfigInvHost" {
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $IConfigInvHost$$Interface {

(): $GenericStackInv$$Type
get "config"(): $GenericStackInv
}

export class $IConfigInvHost implements $IConfigInvHost$$Interface {
 "getConfig"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigInvHost$$Type = (() => $GenericStackInv$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigInvHost$$Original = $IConfigInvHost;}
declare module "appeng.helpers.IPriorityHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ISubMenuHost$$Interface} from "appeng.api.storage.ISubMenuHost"

export interface $IPriorityHost$$Interface extends $ISubMenuHost$$Interface {
set "priority"(value: integer)
get "priority"(): integer
get "mainMenuIcon"(): $ItemStack
}

export class $IPriorityHost implements $IPriorityHost$$Interface {
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPriorityHost$$Type = ($IPriorityHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPriorityHost$$Original = $IPriorityHost;}
declare module "appeng.helpers.AEMultiBlockEntity" {
import {$IColorableBlockEntity$$Interface} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$IInWorldGridNodeHost$$Interface} from "appeng.api.networking.IInWorldGridNodeHost"
import {$IPartHost$$Interface} from "appeng.api.parts.IPartHost"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $AEMultiBlockEntity$$Interface extends $IInWorldGridNodeHost$$Interface, $IPartHost$$Interface, $IColorableBlockEntity$$Interface {
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
}

export class $AEMultiBlockEntity implements $AEMultiBlockEntity$$Interface {
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "getColor"(): $AEColor
 "isBlocked"(arg0: $Direction$$Type): boolean
 "notifyNeighbors"(): void
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "getPart"(arg0: $Direction$$Type): $IPart
 "isInWorld"(): boolean
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "partChanged"(): void
 "markForSave"(): void
 "markForUpdate"(): void
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "removePart"(arg0: $IPart$$Type): boolean
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "clearContainer"(): void
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "hasRedstone"(): boolean
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEMultiBlockEntity$$Type = ($AEMultiBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEMultiBlockEntity$$Original = $AEMultiBlockEntity;}
declare module "appeng.helpers.Splotch" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $Splotch {
constructor(arg0: $AEColor$$Type, arg1: boolean, arg2: $Direction$$Type, arg3: $Vec3$$Type)
constructor(arg0: $FriendlyByteBuf$$Type)

public "x"(): float
public "y"(): float
public "getSeed"(): integer
public "getColor"(): $AEColor
public "isLumen"(): boolean
public "getSide"(): $Direction
public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
get "seed"(): integer
get "color"(): $AEColor
get "lumen"(): boolean
get "side"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Splotch$$Type = ($Splotch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Splotch$$Original = $Splotch;}
