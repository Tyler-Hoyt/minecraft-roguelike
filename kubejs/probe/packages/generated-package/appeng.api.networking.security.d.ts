declare module "appeng.api.networking.security.IActionHost" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"

export interface $IActionHost$$Interface {

(): $IGridNode$$Type
get "actionableNode"(): $IGridNode
}

export class $IActionHost implements $IActionHost$$Interface {
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionHost$$Type = (() => $IGridNode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IActionHost$$Original = $IActionHost;}
declare module "appeng.api.networking.security.IActionSource" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional} from "java.util.Optional"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$Class$$Type} from "java.lang.Class"

export interface $IActionSource$$Interface {
}

export class $IActionSource implements $IActionSource$$Interface {
 "context"<T>(arg0: $Class$$Type<(T)>): $Optional<(T)>
static "empty"(): $IActionSource
 "player"(): $Optional<($Player)>
static "ofMachine"(arg0: $IActionHost$$Type): $IActionSource
static "ofPlayer"(arg0: $Player$$Type): $IActionSource
static "ofPlayer"(arg0: $Player$$Type, arg1: $IActionHost$$Type): $IActionSource
 "machine"(): $Optional<($IActionHost)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionSource$$Type = ($IActionSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IActionSource$$Original = $IActionSource;}
