declare module "dev.shadowsoffire.apotheosis.event.GetItemSocketsEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $GetItemSocketsEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: integer)

public "getStack"(): $ItemStack
public "setSockets"(arg0: integer): void
public "getSockets"(): integer
get "stack"(): $ItemStack
set "sockets"(value: integer)
get "sockets"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetItemSocketsEvent$$Type = ($GetItemSocketsEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GetItemSocketsEvent$$Original = $GetItemSocketsEvent;}
declare module "dev.shadowsoffire.apotheosis.event.CanSocketGemEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $CanSocketGemEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type)

public "setCanceled"(arg0: boolean): void
public "getInputStack"(): $ItemStack
public "getInputGem"(): $ItemStack
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "inputStack"(): $ItemStack
get "inputGem"(): $ItemStack
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanSocketGemEvent$$Type = ($CanSocketGemEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CanSocketGemEvent$$Original = $CanSocketGemEvent;}
declare module "dev.shadowsoffire.apotheosis.event.ItemSocketingEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event} from "net.neoforged.bus.api.Event"

export class $ItemSocketingEvent extends $Event {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type)

public "getOutput"(): $ItemStack
public "getInputStack"(): $ItemStack
public "getInputGem"(): $ItemStack
public "setOutput"(arg0: $ItemStack$$Type): void
get "output"(): $ItemStack
get "inputStack"(): $ItemStack
get "inputGem"(): $ItemStack
set "output"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSocketingEvent$$Type = ($ItemSocketingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSocketingEvent$$Original = $ItemSocketingEvent;}
