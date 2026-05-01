declare module "appeng.server.testplots.KitOutPlayerEvent" {
import {$PlayerEvent} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export class $KitOutPlayerEvent extends $PlayerEvent {
constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
public "getEntity"(): $Entity
get "player"(): $ServerPlayer
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KitOutPlayerEvent$$Type = ($KitOutPlayerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KitOutPlayerEvent$$Original = $KitOutPlayerEvent;}
declare module "appeng.server.testplots.SpawnExtraGridTestTools" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export class $SpawnExtraGridTestTools extends $Event {
constructor(arg0: $ResourceLocation$$Type, arg1: $InternalInventory$$Type, arg2: $IGrid$$Type)

public "getGrid"(): $IGrid
public "getInventory"(): $InternalInventory
public "getPlotId"(): $ResourceLocation
get "grid"(): $IGrid
get "inventory"(): $InternalInventory
get "plotId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnExtraGridTestTools$$Type = ($SpawnExtraGridTestTools);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnExtraGridTestTools$$Original = $SpawnExtraGridTestTools;}
