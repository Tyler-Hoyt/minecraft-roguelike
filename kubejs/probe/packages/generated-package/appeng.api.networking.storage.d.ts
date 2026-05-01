declare module "appeng.api.networking.storage.IStorageService" {
import {$KeyCounter} from "appeng.api.stacks.KeyCounter"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$MEStorage} from "appeng.api.storage.MEStorage"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$IStorageProvider$$Type} from "appeng.api.storage.IStorageProvider"

export interface $IStorageService$$Interface extends $IGridService$$Interface {
get "cachedInventory"(): $KeyCounter
get "inventory"(): $MEStorage
}

export class $IStorageService implements $IStorageService$$Interface {
 "getCachedInventory"(): $KeyCounter
 "getInventory"(): $MEStorage
 "invalidateCache"(): void
 "addGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "refreshNodeStorageProvider"(arg0: $IGridNode$$Type): void
 "removeGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "refreshGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageService$$Type = ($IStorageService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageService$$Original = $IStorageService;}
