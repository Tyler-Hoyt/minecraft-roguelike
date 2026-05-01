declare module "appeng.api.implementations.menuobjects.IMenuItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export interface $IMenuItem$$Interface {

(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $ItemMenuHost$$Type<(never)>
}

export class $IMenuItem implements $IMenuItem$$Interface {
 "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuItem$$Type = ((arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult) => $ItemMenuHost$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMenuItem$$Original = $IMenuItem;}
declare module "appeng.api.implementations.menuobjects.IPortableTerminal" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$ITerminalHost$$Interface} from "appeng.api.storage.ITerminalHost"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"

export interface $IPortableTerminal$$Interface extends $ITerminalHost$$Interface, $IEnergySource$$Interface {
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): StringJS
get "inventory"(): $MEStorage
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
}

export class $IPortableTerminal implements $IPortableTerminal$$Interface {
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): StringJS
 "getInventory"(): $MEStorage
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "getConfigManager"(): $IConfigManager
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortableTerminal$$Type = ($IPortableTerminal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPortableTerminal$$Original = $IPortableTerminal;}
declare module "appeng.api.implementations.menuobjects.ItemMenuHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export class $ItemMenuHost<T extends $Item> implements $IUpgradeableObject$$Interface {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "isValid"(): boolean
public "getItem"(): T
public "getPlayer"(): $Player
public "getLocator"(): $ItemMenuHostLocator
public "isClientSide"(): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getItemStack"(): $ItemStack
public "consumeIdlePower"(arg0: $Actionable$$Type): boolean
public "getPlayerInventorySlot"(): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
get "valid"(): boolean
get "item"(): T
get "player"(): $Player
get "locator"(): $ItemMenuHostLocator
get "clientSide"(): boolean
get "upgrades"(): $IUpgradeInventory
get "itemStack"(): $ItemStack
get "playerInventorySlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMenuHost$$Type<T> = ($ItemMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemMenuHost$$Original<T> = $ItemMenuHost<(T)>;}
