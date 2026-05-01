declare module "appeng.me.helpers.IGridConnectedBlockEntity" {
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IInWorldGridNodeHost$$Interface} from "appeng.api.networking.IInWorldGridNodeHost"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IOwnerAwareBlockEntity$$Interface} from "appeng.block.IOwnerAwareBlockEntity"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$Set} from "java.util.Set"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"

export interface $IGridConnectedBlockEntity$$Interface extends $IActionHost$$Interface, $IOwnerAwareBlockEntity$$Interface, $IInWorldGridNodeHost$$Interface {
set "owner"(value: $Player$$Type)
get "mainNode"(): $IManagedGridNode
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}

export class $IGridConnectedBlockEntity implements $IGridConnectedBlockEntity$$Interface {
 "setOwner"(arg0: $Player$$Type): void
 "saveChanges"(): void
 "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
 "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
 "getMainNode"(): $IManagedGridNode
 "getGridNode"(): $IGridNode
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getActionableNode"(): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnectedBlockEntity$$Type = ($IGridConnectedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridConnectedBlockEntity$$Original = $IGridConnectedBlockEntity;}
