declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventDiscardEvent" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventDiscardEvent extends $WorldEventInstanceEvent {
constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventDiscardEvent$$Type = ($WorldEventDiscardEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventDiscardEvent$$Original = $WorldEventDiscardEvent;}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventTickEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventTickEvent extends $WorldEventInstanceEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventTickEvent$$Type = ($WorldEventTickEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventTickEvent$$Original = $WorldEventTickEvent;}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventRenderEvent" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$WorldEventRenderer, $WorldEventRenderer$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventRenderer"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventRenderEvent extends $WorldEventInstanceEvent {
constructor(arg0: $WorldEventInstance$$Type, arg1: $WorldEventRenderer$$Type<($WorldEventInstance$$Type)>, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float)

public "getPoseStack"(): $PoseStack
public "getRenderer"(): $WorldEventRenderer<($WorldEventInstance)>
public "getMultiBufferSource"(): $MultiBufferSource
public "getPartialTicks"(): float
get "poseStack"(): $PoseStack
get "renderer"(): $WorldEventRenderer<($WorldEventInstance)>
get "multiBufferSource"(): $MultiBufferSource
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventRenderEvent$$Type = ($WorldEventRenderEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventRenderEvent$$Original = $WorldEventRenderEvent;}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventCreationEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventCreationEvent extends $WorldEventInstanceEvent implements $ICancellableEvent$$Interface {
constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventCreationEvent$$Type = ($WorldEventCreationEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventCreationEvent$$Original = $WorldEventCreationEvent;}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export class $WorldEventInstanceEvent extends $Event {
constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
public "getWorldEvent"(): $WorldEventInstance
get "level"(): $Level
get "worldEvent"(): $WorldEventInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventInstanceEvent$$Type = ($WorldEventInstanceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventInstanceEvent$$Original = $WorldEventInstanceEvent;}
