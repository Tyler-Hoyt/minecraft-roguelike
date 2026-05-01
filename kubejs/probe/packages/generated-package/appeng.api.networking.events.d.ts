declare module "appeng.api.networking.events.GridEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GridEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridEvent$$Type = ($GridEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridEvent$$Original = $GridEvent;}
declare module "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkAdded" {
import {$GridChunkEvent} from "appeng.api.networking.events.statistics.GridChunkEvent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $GridChunkEvent$GridChunkAdded extends $GridChunkEvent {
constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkAdded$$Type = ($GridChunkEvent$GridChunkAdded);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridChunkEvent$GridChunkAdded$$Original = $GridChunkEvent$GridChunkAdded;}
declare module "appeng.api.networking.events.statistics.GridStatisticsEvent" {
import {$GridEvent} from "appeng.api.networking.events.GridEvent"

export class $GridStatisticsEvent extends $GridEvent {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridStatisticsEvent$$Type = ($GridStatisticsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridStatisticsEvent$$Original = $GridStatisticsEvent;}
declare module "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkRemoved" {
import {$GridChunkEvent} from "appeng.api.networking.events.statistics.GridChunkEvent"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $GridChunkEvent$GridChunkRemoved extends $GridChunkEvent {
constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkRemoved$$Type = ($GridChunkEvent$GridChunkRemoved);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridChunkEvent$GridChunkRemoved$$Original = $GridChunkEvent$GridChunkRemoved;}
declare module "appeng.api.networking.events.statistics.GridChunkEvent" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GridStatisticsEvent} from "appeng.api.networking.events.statistics.GridStatisticsEvent"

export class $GridChunkEvent extends $GridStatisticsEvent {
constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

public "getLevel"(): $ServerLevel
public "getChunkPos"(): $ChunkPos
get "level"(): $ServerLevel
get "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$$Type = ($GridChunkEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GridChunkEvent$$Original = $GridChunkEvent;}
