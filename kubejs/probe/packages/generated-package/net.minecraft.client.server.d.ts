declare module "net.minecraft.client.server.LanServerPinger" {
import {$Thread} from "java.lang.Thread"

export class $LanServerPinger extends $Thread {
static readonly "MULTICAST_GROUP": StringJS
static readonly "PING_PORT": integer
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: StringJS, arg1: StringJS)

public "run"(): void
public "interrupt"(): void
public static "parseMotd"(arg0: StringJS): StringJS
public static "createPingString"(arg0: StringJS, arg1: StringJS): StringJS
public static "parseAddress"(arg0: StringJS): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanServerPinger$$Type = ($LanServerPinger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanServerPinger$$Original = $LanServerPinger;}
declare module "net.minecraft.client.server.IntegratedServer" {
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$IntegratedServerAccessor$$Interface} from "com.aetherteam.cumulus.mixin.mixins.common.accessor.IntegratedServerAccessor"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$LanServerPinger, $LanServerPinger$$Type} from "net.minecraft.client.server.LanServerPinger"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$Thread$$Type} from "java.lang.Thread"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$Path} from "java.nio.file.Path"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$IDeferrableIntegratedServer$$Interface} from "org.embeddedt.modernfix.duck.suspend_integrated_server_during_load.IDeferrableIntegratedServer"
import {$Services$$Type} from "net.minecraft.server.Services"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer$$Interface, $IntegratedServerAccessor$$Interface {
static readonly "VANILLA_BRAND": StringJS
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "resources": $MinecraftServer$ReloadableResources
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings

constructor(arg0: $Thread$$Type, arg1: $Minecraft$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $PackRepository$$Type, arg4: $WorldStem$$Type, arg5: $Services$$Type, arg6: $ChunkProgressListenerFactory$$Type)

public "getPort"(): integer
public "halt"(arg0: boolean): void
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "getModdedStatus"(): $ModCheck
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "getServerDirectory"(): $Path
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "isEpollEnabled"(): boolean
public "cumulus$getUUID"(): $UUID
public "isPaused"(): boolean
public "getRateLimitPacketsPerSecond"(): integer
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "stop"(): void
public "initServer"(): boolean
public "shouldInformAdmins"(): boolean
public "setUUID"(arg0: $UUID$$Type): void
public "isPublished"(): boolean
public "isDedicated"(): boolean
public "cumulus$setLanPinger"(arg0: $LanServerPinger$$Type): void
public "cumulus$getLanPinger"(): $LanServerPinger
public "cumulus$setPublishedPort"(arg0: integer): void
public "mfix$markClientLoadFinished"(): void
public "getForcedGameType"(): $GameType
public "shouldRconBroadcast"(): boolean
public "getScaledTrackingDistance"(arg0: integer): integer
public "isTickTimeLoggingEnabled"(): boolean
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "forceSynchronousWrites"(): boolean
public "isCommandBlockEnabled"(): boolean
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "port"(): integer
get "moddedStatus"(): $ModCheck
get "serverDirectory"(): $Path
set "defaultGameType"(value: $GameType$$Type)
get "epollEnabled"(): boolean
get "paused"(): boolean
get "rateLimitPacketsPerSecond"(): integer
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
set "UUID"(value: $UUID$$Type)
get "published"(): boolean
get "dedicated"(): boolean
get "forcedGameType"(): $GameType
get "tickTimeLoggingEnabled"(): boolean
get "commandBlockEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServer$$Type = ($IntegratedServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegratedServer$$Original = $IntegratedServer;}
