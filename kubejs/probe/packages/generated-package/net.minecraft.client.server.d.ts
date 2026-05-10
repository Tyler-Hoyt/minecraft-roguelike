declare module "net.minecraft.client.server.IntegratedServer" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$UUID$$Type} from "java.util.UUID"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$Thread$$Type} from "java.lang.Thread"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Path} from "java.nio.file.Path"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Services$$Type} from "net.minecraft.server.Services"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $IntegratedServer extends $MinecraftServer {
static readonly "VANILLA_BRAND": StringJS
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings

constructor(arg0: $Thread$$Type, arg1: $Minecraft$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $PackRepository$$Type, arg4: $WorldStem$$Type, arg5: $Services$$Type, arg6: $ChunkProgressListenerFactory$$Type)

public "getPort"(): integer
public "halt"(arg0: boolean): void
public "getServerDirectory"(): $Path
public "isEpollEnabled"(): boolean
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "getModdedStatus"(): $ModCheck
public "getScaledTrackingDistance"(arg0: integer): integer
public "forceSynchronousWrites"(): boolean
public "isDedicated"(): boolean
public "getForcedGameType"(): $GameType
public "initServer"(): boolean
public "stop"(): void
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "getRateLimitPacketsPerSecond"(): integer
public "shouldInformAdmins"(): boolean
public "isPublished"(): boolean
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "setUUID"(arg0: $UUID$$Type): void
public "isPaused"(): boolean
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "isCommandBlockEnabled"(): boolean
public "isTickTimeLoggingEnabled"(): boolean
public "shouldRconBroadcast"(): boolean
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "port"(): integer
get "serverDirectory"(): $Path
get "epollEnabled"(): boolean
set "defaultGameType"(value: $GameType$$Type)
get "moddedStatus"(): $ModCheck
get "dedicated"(): boolean
get "forcedGameType"(): $GameType
get "rateLimitPacketsPerSecond"(): integer
get "published"(): boolean
set "UUID"(value: $UUID$$Type)
get "paused"(): boolean
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
get "commandBlockEnabled"(): boolean
get "tickTimeLoggingEnabled"(): boolean
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
