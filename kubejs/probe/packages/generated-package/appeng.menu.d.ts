declare module "appeng.menu.ISubMenu" {
import {$MenuHostLocator} from "appeng.menu.locator.MenuHostLocator"
import {$ISubMenuHost} from "appeng.api.storage.ISubMenuHost"

export interface $ISubMenu$$Interface {
get "host"(): $ISubMenuHost
get "locator"(): $MenuHostLocator
}

export class $ISubMenu implements $ISubMenu$$Interface {
 "getHost"(): $ISubMenuHost
 "getLocator"(): $MenuHostLocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenu$$Type = ($ISubMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISubMenu$$Original = $ISubMenu;}
