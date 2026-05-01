declare module "org.embeddedt.modernfix.duck.release_protochunks.IClearableChunkHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IClearableChunkHolder$$Interface {

(): void
}

export class $IClearableChunkHolder implements $IClearableChunkHolder$$Interface {
 "mfix$resetProtoChunkFutures"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClearableChunkHolder$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClearableChunkHolder$$Original = $IClearableChunkHolder;}
declare module "org.embeddedt.modernfix.duck.IChunkGenerator" {
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $IChunkGenerator$$Interface {

(arg0: $Path, arg1: $RegistryAccess$Frozen): void
}

export class $IChunkGenerator implements $IChunkGenerator$$Interface {
 "mfix$setStrongholdCachePath"(arg0: $Path$$Type, arg1: $RegistryAccess$Frozen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$$Type = ((arg0: $Path, arg1: $RegistryAccess$Frozen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IChunkGenerator$$Original = $IChunkGenerator;}
declare module "org.embeddedt.modernfix.duck.ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer$$Interface {

(): long
}

export class $ITimeTrackingServer implements $ITimeTrackingServer$$Interface {
 "mfix$getLastTickStartTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITimeTrackingServer$$Original = $ITimeTrackingServer;}
declare module "org.embeddedt.modernfix.duck.release_protochunks.ISuspendedHolderTrackingChunkMap" {
import {$Executor} from "java.util.concurrent.Executor"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ISuspendedHolderTrackingChunkMap$$Interface {
}

export class $ISuspendedHolderTrackingChunkMap implements $ISuspendedHolderTrackingChunkMap$$Interface {
 "mfix$getMainThreadExecutor"(): $Executor
 "mfix$markForSuspensionCheck"(arg0: $ChunkPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISuspendedHolderTrackingChunkMap$$Type = ($ISuspendedHolderTrackingChunkMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISuspendedHolderTrackingChunkMap$$Original = $ISuspendedHolderTrackingChunkMap;}
declare module "org.embeddedt.modernfix.duck.suspend_integrated_server_during_load.IDeferrableIntegratedServer" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $IDeferrableIntegratedServer$$Interface {

(): void
}

export class $IDeferrableIntegratedServer implements $IDeferrableIntegratedServer$$Interface {
static readonly "CLIENT_LOAD_SENTINEL": $ResourceLocation

 "mfix$markClientLoadFinished"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeferrableIntegratedServer$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDeferrableIntegratedServer$$Original = $IDeferrableIntegratedServer;}
declare module "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager$$Interface {

(): StringJS
}

export class $IProfilingServerFunctionManager implements $IProfilingServerFunctionManager$$Interface {
 "mfix$getProfilingResults"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProfilingServerFunctionManager$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProfilingServerFunctionManager$$Original = $IProfilingServerFunctionManager;}
declare module "org.embeddedt.modernfix.duck.IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState$$Interface {
get "cacheInvalid"(): boolean
}

export class $IBlockState implements $IBlockState$$Interface {
 "clearCache"(): void
 "isCacheInvalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$$Type = ($IBlockState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockState$$Original = $IBlockState;}
