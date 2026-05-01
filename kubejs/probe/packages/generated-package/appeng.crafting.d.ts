declare module "appeng.crafting.CraftingLink" {
import {$CraftingLinkNexus$$Type} from "appeng.crafting.CraftingLinkNexus"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID} from "java.util.UUID"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$ICraftingLink$$Interface} from "appeng.api.networking.crafting.ICraftingLink"

export class $CraftingLink implements $ICraftingLink$$Interface {
constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingRequester$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingCPU$$Type)

public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "isDone"(): boolean
public "cancel"(): void
public "isStandalone"(): boolean
public "setNexus"(arg0: $CraftingLinkNexus$$Type): void
public "getCraftingID"(): $UUID
public "isCanceled"(): boolean
public "markDone"(): void
public "writeToNBT"(arg0: $CompoundTag$$Type): void
get "done"(): boolean
get "standalone"(): boolean
set "nexus"(value: $CraftingLinkNexus$$Type)
get "craftingID"(): $UUID
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLink$$Type = ($CraftingLink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingLink$$Original = $CraftingLink;}
