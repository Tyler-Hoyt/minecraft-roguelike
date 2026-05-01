declare module "appeng.client.render.crafting.AssemblerAnimationStatus" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $AssemblerAnimationStatus {
constructor(arg0: byte, arg1: $ItemStack$$Type)

public "getSpeed"(): byte
public "getTicksUntilParticles"(): float
public "setAccumulatedTicks"(arg0: float): void
public "getAccumulatedTicks"(): float
public "setTicksUntilParticles"(arg0: float): void
public "getIs"(): $ItemStack
public "isExpired"(): boolean
get "speed"(): byte
get "ticksUntilParticles"(): float
set "accumulatedTicks"(value: float)
get "accumulatedTicks"(): float
set "ticksUntilParticles"(value: float)
get "is"(): boolean
get "expired"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblerAnimationStatus$$Type = ($AssemblerAnimationStatus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblerAnimationStatus$$Original = $AssemblerAnimationStatus;}
