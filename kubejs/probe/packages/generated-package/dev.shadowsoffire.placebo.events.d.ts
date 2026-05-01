declare module "dev.shadowsoffire.placebo.events.ResourceReloadEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ResourceReloadEvent extends $Event {
constructor(arg0: $ResourceManager$$Type, arg1: $LogicalSide$$Type)

public "getSide"(): $LogicalSide
public "getResourceManager"(): $ResourceManager
get "side"(): $LogicalSide
get "resourceManager"(): $ResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceReloadEvent$$Type = ($ResourceReloadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceReloadEvent$$Original = $ResourceReloadEvent;}
declare module "dev.shadowsoffire.placebo.events.AnvilLandEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnvilLandEvent extends $Event {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $FallingBlockEntity$$Type)

public "getLevel"(): $Level
public "getEntity"(): $FallingBlockEntity
public "getNewState"(): $BlockState
public "getOldState"(): $BlockState
public "getPos"(): $BlockPos
get "level"(): $Level
get "entity"(): $FallingBlockEntity
get "newState"(): $BlockState
get "oldState"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilLandEvent$$Type = ($AnvilLandEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilLandEvent$$Original = $AnvilLandEvent;}
