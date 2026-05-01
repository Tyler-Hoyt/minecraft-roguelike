declare module "appeng.items.contents.NetworkToolMenuHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NetworkToolItem, $NetworkToolItem$$Type} from "appeng.items.tools.NetworkToolItem"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$$Type} from "appeng.api.networking.IInWorldGridNodeHost"

export class $NetworkToolMenuHost<T extends $NetworkToolItem> extends $ItemMenuHost<(T)> {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $IInWorldGridNodeHost$$Type)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getInventory"(): $InternalInventory
public "getGridHost"(): $IInWorldGridNodeHost
get "inventory"(): $InternalInventory
get "gridHost"(): $IInWorldGridNodeHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolMenuHost$$Type<T> = ($NetworkToolMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkToolMenuHost$$Original<T> = $NetworkToolMenuHost<(T)>;}
declare module "appeng.items.contents.PortableCellMenuHost" {
import {$ILinkStatus} from "appeng.api.storage.ILinkStatus"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IEnergySource} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IPortableTerminal$$Interface} from "appeng.api.implementations.menuobjects.IPortableTerminal"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$AbstractPortableCell, $AbstractPortableCell$$Type} from "appeng.items.tools.powered.AbstractPortableCell"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $PortableCellMenuHost<T extends $AbstractPortableCell> extends $ItemMenuHost<(T)> implements $IPortableTerminal$$Interface {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "getLinkStatus"(): $ILinkStatus
public "getCloseHotkey"(): StringJS
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getInventory"(): $MEStorage
public "getConfigManager"(): $IConfigManager
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public static "empty"(): $IEnergySource
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): StringJS
get "mainMenuIcon"(): $ItemStack
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellMenuHost$$Type<T> = ($PortableCellMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableCellMenuHost$$Original<T> = $PortableCellMenuHost<(T)>;}
