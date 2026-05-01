declare module "appeng.api.storage.ISubMenuHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"

export interface $ISubMenuHost$$Interface {
get "mainMenuIcon"(): $ItemStack
}

export class $ISubMenuHost implements $ISubMenuHost$$Interface {
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenuHost$$Type = ($ISubMenuHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISubMenuHost$$Original = $ISubMenuHost;}
declare module "appeng.api.storage.IStorageMounts" {
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"

export interface $IStorageMounts$$Interface {

(arg0: $MEStorage, arg1: integer): void
}

export class $IStorageMounts implements $IStorageMounts$$Interface {
static readonly "DEFAULT_PRIORITY": integer

 "mount"(arg0: $MEStorage$$Type): void
 "mount"(arg0: $MEStorage$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageMounts$$Type = ((arg0: $MEStorage, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageMounts$$Original = $IStorageMounts;}
declare module "appeng.api.storage.ITerminalHost" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IConfigurableObject$$Interface} from "appeng.api.util.IConfigurableObject"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject$$Interface} from "appeng.api.upgrades.IUpgradeableObject"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ISubMenuHost$$Interface} from "appeng.api.storage.ISubMenuHost"

export interface $ITerminalHost$$Interface extends $IUpgradeableObject$$Interface, $IConfigurableObject$$Interface, $ISubMenuHost$$Interface {
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): StringJS
get "inventory"(): $MEStorage
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
}

export class $ITerminalHost implements $ITerminalHost$$Interface {
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): StringJS
 "getInventory"(): $MEStorage
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
export type $ITerminalHost$$Type = ($ITerminalHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITerminalHost$$Original = $ITerminalHost;}
declare module "appeng.api.storage.ILinkStatus" {
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ILinkStatus$$Interface {
}

export class $ILinkStatus implements $ILinkStatus$$Interface {
static "ofManagedNode"(arg0: $IManagedGridNode$$Type): $ILinkStatus
 "statusDescription"(): $Component
static "ofConnected"(): $ILinkStatus
static "ofDisconnected"(arg0: $Component$$Type): $ILinkStatus
static "ofDisconnected"(): $ILinkStatus
 "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkStatus$$Type = ($ILinkStatus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILinkStatus$$Original = $ILinkStatus;}
declare module "appeng.api.storage.AEKeyFilter" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $AEKeyFilter$$Interface {

(arg0: $AEKey): boolean
}

export class $AEKeyFilter implements $AEKeyFilter$$Interface {
 "matches"(arg0: $AEKey$$Type): boolean
static "none"(): $AEKeyFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyFilter$$Type = ((arg0: $AEKey) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEKeyFilter$$Original = $AEKeyFilter;}
declare module "appeng.api.storage.AEKeySlotFilter" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $AEKeySlotFilter$$Interface {

(arg0: integer, arg1: $AEKey): boolean
}

export class $AEKeySlotFilter implements $AEKeySlotFilter$$Interface {
 "isAllowed"(arg0: integer, arg1: $AEKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeySlotFilter$$Type = ((arg0: integer, arg1: $AEKey) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEKeySlotFilter$$Original = $AEKeySlotFilter;}
declare module "appeng.api.storage.IStorageProvider" {
import {$IStorageMounts, $IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"

export interface $IStorageProvider$$Interface extends $IGridNodeService$$Interface {

(arg0: $IStorageMounts): void
}

export class $IStorageProvider implements $IStorageProvider$$Interface {
 "mountInventories"(arg0: $IStorageMounts$$Type): void
static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageProvider$$Type = ((arg0: $IStorageMounts) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageProvider$$Original = $IStorageProvider;}
declare module "appeng.api.storage.MEStorage" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $MEStorage$$Interface {

(): $Component$$Type
get "availableStacks"(): $KeyCounter
get "description"(): $Component
}

export class $MEStorage implements $MEStorage$$Interface {
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "getAvailableStacks"(): $KeyCounter
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
 "getDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEStorage$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MEStorage$$Original = $MEStorage;}
