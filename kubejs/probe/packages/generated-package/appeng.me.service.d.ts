declare module "appeng.me.service.CraftingService" {
import {$Iterable} from "java.lang.Iterable"
import {$CraftingLink$$Type} from "appeng.crafting.CraftingLink"
import {$AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Future} from "java.util.concurrent.Future"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingSubmitResult} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$IGridServiceProvider$$Interface} from "appeng.api.networking.IGridServiceProvider"
import {$ICraftingProvider, $ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$Set} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$ICraftingService$$Interface} from "appeng.api.networking.crafting.ICraftingService"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$CalculationStrategy$$Type} from "appeng.api.networking.crafting.CalculationStrategy"
import {$IStorageService$$Type} from "appeng.api.networking.storage.IStorageService"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$ICraftingSimulationRequester$$Type} from "appeng.api.networking.crafting.ICraftingSimulationRequester"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"

export class $CraftingService implements $ICraftingService$$Interface, $IGridServiceProvider$$Interface {
constructor(arg0: $IGrid$$Type, arg1: $IStorageService$$Type, arg2: $IEnergyService$$Type)

public "removeNode"(arg0: $IGridNode$$Type): void
public "getProviders"(arg0: $IPatternDetails$$Type): $Iterable<($ICraftingProvider)>
public "onServerEndTick"(): void
public "addGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
public "beginCraftingCalculation"(arg0: $Level$$Type, arg1: $ICraftingSimulationRequester$$Type, arg2: $AEKey$$Type, arg3: long, arg4: $CalculationStrategy$$Type): $Future<($ICraftingPlan)>
public "getCraftingFor"(arg0: $AEKey$$Type): $Collection<($IPatternDetails)>
public "getRequestedAmount"(arg0: $AEKey$$Type): long
public "getCraftables"(arg0: $AEKeyFilter$$Type): $Set<($AEKey)>
public "isRequesting"(arg0: $AEKey$$Type): boolean
public "getFuzzyCraftable"(arg0: $AEKey$$Type, arg1: $AEKeyFilter$$Type): $AEKey
public "isRequestingAny"(): boolean
public "addLink"(arg0: $CraftingLink$$Type): void
public "getCpus"(): $ImmutableSet<($ICraftingCPU)>
public "submitJob"(arg0: $ICraftingPlan$$Type, arg1: $ICraftingRequester$$Type, arg2: $ICraftingCPU$$Type, arg3: boolean, arg4: $IActionSource$$Type): $ICraftingSubmitResult
public "hasCpu"(arg0: $ICraftingCPU$$Type): boolean
public "canEmitFor"(arg0: $AEKey$$Type): boolean
public "refreshGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
public "removeGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
public "insertIntoCpus"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "refreshNodeCraftingProvider"(arg0: $IGridNode$$Type): void
public "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "isCraftable"(arg0: $AEKey$$Type): boolean
public "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "onServerStartTick"(): void
public "onLevelEndTick"(arg0: $Level$$Type): void
public "onLevelStartTick"(arg0: $Level$$Type): void
public "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
get "requestingAny"(): boolean
get "cpus"(): $ImmutableSet<($ICraftingCPU)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingService$$Type = ($CraftingService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingService$$Original = $CraftingService;}
