declare module "net.minecraft.server.ServerLinks$UntrustedEntry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks$UntrustedEntry extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$UntrustedEntry)>

constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: StringJS)

public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "link"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$UntrustedEntry$$Type = ({"link"?: StringJS, "type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>}) | ([link?: StringJS, type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$UntrustedEntry$$Original = $ServerLinks$UntrustedEntry;}
declare module "net.minecraft.server.TickTask" {
import {$Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"

export class $TickTask implements $Runnable$$Interface {
constructor(arg0: integer, arg1: $Runnable$$Type)

public "run"(): void
public "getTick"(): integer
get "tick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickTask$$Type = ($TickTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickTask$$Original = $TickTask;}
declare module "net.minecraft.server.ServerAdvancementManager" {
import {$Collection} from "java.util.Collection"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AdvancementTree} from "net.minecraft.advancements.AdvancementTree"
import {$AdvancementHolder} from "net.minecraft.advancements.AdvancementHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SimpleJsonResourceReloadListener} from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"

export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
constructor(arg0: $HolderLookup$Provider$$Type)

public "get"(arg0: $ResourceLocation$$Type): $AdvancementHolder
public "tree"(): $AdvancementTree
public "getAllAdvancements"(): $Collection<($AdvancementHolder)>
get "allAdvancements"(): $Collection<($AdvancementHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAdvancementManager$$Type = ($ServerAdvancementManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerAdvancementManager$$Original = $ServerAdvancementManager;}
declare module "net.minecraft.server.ServerFunctionLibrary" {
import {$Iterable} from "java.lang.Iterable"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$CommandFunction} from "net.minecraft.commands.functions.CommandFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ServerFunctionLibrary implements $PreparableReloadListener$$Interface {
static readonly "TYPE_KEY": $ResourceKey<($Registry<($CommandFunction<($CommandSourceStack)>)>)>

constructor(arg0: integer, arg1: $CommandDispatcher$$Type<($CommandSourceStack$$Type)>)

public "getFunction"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "getFunctions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
public "getAvailableTags"(): $Iterable<($ResourceLocation)>
public "getName"(): StringJS
get "functions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
get "availableTags"(): $Iterable<($ResourceLocation)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionLibrary$$Type = ($ServerFunctionLibrary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionLibrary$$Original = $ServerFunctionLibrary;}
declare module "net.minecraft.server.Services" {
import {$GameProfileCache, $GameProfileCache$$Type} from "net.minecraft.server.players.GameProfileCache"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$YggdrasilAuthenticationService$$Type} from "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService"
import {$ServicesKeySet, $ServicesKeySet$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$File$$Type} from "java.io.File"
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"
import {$Record} from "java.lang.Record"

export class $Services extends $Record {
constructor(arg0: $MinecraftSessionService$$Type, arg1: $ServicesKeySet$$Type, arg2: $GameProfileRepository$$Type, arg3: $GameProfileCache$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $YggdrasilAuthenticationService$$Type, arg1: $File$$Type): $Services
public "canValidateProfileKeys"(): boolean
public "profileRepository"(): $GameProfileRepository
public "profileCache"(): $GameProfileCache
public "profileKeySignatureValidator"(): $SignatureValidator
public "servicesKeySet"(): $ServicesKeySet
public "sessionService"(): $MinecraftSessionService
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Services$$Type = ({"profileRepository"?: $GameProfileRepository$$Type, "profileCache"?: $GameProfileCache$$Type, "servicesKeySet"?: $ServicesKeySet$$Type, "sessionService"?: $MinecraftSessionService$$Type}) | ([profileRepository?: $GameProfileRepository$$Type, profileCache?: $GameProfileCache$$Type, servicesKeySet?: $ServicesKeySet$$Type, sessionService?: $MinecraftSessionService$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Services$$Original = $Services;}
declare module "net.minecraft.server.ReloadableServerResources" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$TagManager} from "net.minecraft.tags.TagManager"
import {$ServerScriptManager} from "dev.latvian.mods.kubejs.server.ServerScriptManager"
import {$List} from "java.util.List"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$ReloadableServerResourcesKJS$$Interface} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$ICondition$IContext} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ServerFunctionLibrary} from "net.minecraft.server.ServerFunctionLibrary"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Commands$CommandSelection$$Type} from "net.minecraft.commands.Commands$CommandSelection"

export class $ReloadableServerResources implements $ReloadableServerResourcesKJS$$Interface {
public "listeners"(): $List<($PreparableReloadListener)>
public "getFunctionLibrary"(): $ServerFunctionLibrary
public "updateRegistryTags"(): void
public "getAdvancements"(): $ServerAdvancementManager
public "kjs$getTagManager"(): $TagManager
public static "loadResources"(arg0: $ResourceManager$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $FeatureFlagSet$$Type, arg3: $Commands$CommandSelection$$Type, arg4: integer, arg5: $Executor$$Type, arg6: $Executor$$Type): $CompletableFuture<($ReloadableServerResources)>
public "getCommands"(): $Commands
public "fullRegistries"(): $ReloadableServerRegistries$Holder
public "getConditionContext"(): $ICondition$IContext
public "getRecipeManager"(): $RecipeManager
public "getRegistryLookup"(): $HolderLookup$Provider
public "kjs$getServerScriptManager"(): $ServerScriptManager
get "functionLibrary"(): $ServerFunctionLibrary
get "advancements"(): $ServerAdvancementManager
get "commands"(): $Commands
get "conditionContext"(): $ICondition$IContext
get "recipeManager"(): $RecipeManager
get "registryLookup"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerResources$$Type = ($ReloadableServerResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerResources$$Original = $ReloadableServerResources;}
declare module "net.minecraft.server.MinecraftServer" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$CommandStorage} from "net.minecraft.world.level.storage.CommandStorage"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$MinecraftServerAccessor$$Interface as $MinecraftServerAccessor$0$$Interface} from "com.aetherteam.aether.mixin.mixins.common.accessor.MinecraftServerAccessor"
import {$ChunkIOErrorReporter$$Interface} from "net.minecraft.world.level.chunk.storage.ChunkIOErrorReporter"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$ProfileResults, $ProfileResults$$Type} from "net.minecraft.util.profiling.ProfileResults"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$PlayerSelector$$Type} from "dev.latvian.mods.kubejs.core.PlayerSelector"
import {$LevelResource$$Type} from "net.minecraft.world.level.storage.LevelResource"
import {$ServerConnectionListener} from "net.minecraft.server.network.ServerConnectionListener"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Function$$Type} from "java.util.function.Function"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CommandSource$$Interface} from "net.minecraft.commands.CommandSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$MinecraftServer$ServerResourcePackInfo} from "net.minecraft.server.MinecraftServer$ServerResourcePackInfo"
import {$ServerInfo$$Interface} from "net.minecraft.server.ServerInfo"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$MinecraftServerAccessor$$Interface} from "com.aetherteam.cumulus.mixin.mixins.common.accessor.MinecraftServerAccessor"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$ServerStatus} from "net.minecraft.network.protocol.status.ServerStatus"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$WorldData} from "net.minecraft.world.level.storage.WorldData"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Services$$Type} from "net.minecraft.server.Services"
import {$RuntimeException$$Type} from "java.lang.RuntimeException"
import {$PlayerList, $PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Iterable} from "java.lang.Iterable"
import {$Optional} from "java.util.Optional"
import {$AdvancementNode} from "net.minecraft.advancements.AdvancementNode"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$DataFixer, $DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ServerFunctionManager} from "net.minecraft.server.ServerFunctionManager"
import {$Set} from "java.util.Set"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$ServerLinks} from "net.minecraft.server.ServerLinks"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules} from "net.minecraft.world.level.GameRules"
import {$KeyPair} from "java.security.KeyPair"
import {$RegistryLayer} from "net.minecraft.server.RegistryLayer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$ServerTickRateManager} from "net.minecraft.server.ServerTickRateManager"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ITimeTrackingServer$$Interface} from "org.embeddedt.modernfix.duck.ITimeTrackingServer"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$MinecraftServerKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftServerKJS"
import {$ChatDecorator} from "net.minecraft.network.chat.ChatDecorator"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$TickTask, $TickTask$$Type} from "net.minecraft.server.TickTask"
import {$GameProfileCache} from "net.minecraft.server.players.GameProfileCache"
import {$Collection$$Type} from "java.util.Collection"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$AttachedData} from "dev.latvian.mods.kubejs.util.AttachedData"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CustomBossEvents} from "net.minecraft.server.bossevents.CustomBossEvents"

export class $MinecraftServer extends $ReentrantBlockableEventLoop<($TickTask)> implements $ServerInfo$$Interface, $ChunkIOErrorReporter$$Interface, $CommandSource$$Interface, $AutoCloseable$$Interface, $MinecraftServerAccessor$0$$Interface, $MinecraftServerKJS$$Interface, $ITimeTrackingServer$$Interface, $MinecraftServerAccessor$$Interface {
static readonly "VANILLA_BRAND": StringJS
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "resources": $MinecraftServer$ReloadableResources
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings

constructor(arg0: $Thread$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $PackRepository$$Type, arg3: $WorldStem$$Type, arg4: $Proxy$$Type, arg5: $DataFixer$$Type, arg6: $Services$$Type, arg7: $ChunkProgressListenerFactory$$Type)

public "close"(): void
public "getPort"(): integer
public "getFile"(arg0: StringJS): $Path
public "isShutdown"(): boolean
public "halt"(arg0: boolean): void
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "pollTask"(): boolean
public "getLevel"(arg0: $ResourceKey$$Type<($Level)>): $ServerLevel
public "cancelRecordingMetrics"(): void
public "setUsesAuthentication"(arg0: boolean): void
public "getScheduledEvents"(): $ScheduledEvents
public "scheduleExecutables"(): boolean
public "serverLinks"(): $ServerLinks
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "getServerModName"(): StringJS
public "getModdedStatus"(): $ModCheck
public "saveAllChunks"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "getPlayerNames"(): (StringJS)[]
public "addTickable"(arg0: $Runnable$$Type): void
public "getPlayerCount"(): integer
public "reloadResources"(arg0: $Collection$$Type<(StringJS)>): $CompletableFuture<(void)>
public "getServerDirectory"(): $Path
public "getMaxPlayers"(): integer
public "setFlightAllowed"(arg0: boolean): void
public "usesAuthentication"(): boolean
public "setPvpAllowed"(arg0: boolean): void
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "onServerExit"(): void
public static "setFatalException"(arg0: $RuntimeException$$Type): void
public "getStatusJson"(): StringJS
public "isEpollEnabled"(): boolean
public "setPlayerList"(arg0: $PlayerList$$Type): void
public "repliesToStatus"(): boolean
public "invalidateStatus"(): void
public "getNextTickTime"(): long
public "hidesOnlinePlayers"(): boolean
public "tickChildren"(arg0: $BooleanSupplier$$Type): void
public "getServerVersion"(): StringJS
public "onTickRateChanged"(): void
public "isSpawningMonsters"(): boolean
public "isFlightAllowed"(): boolean
public "getSessionService"(): $MinecraftSessionService
/**
 * 
 * @deprecated
 */
public "forgeGetWorldMap"(): $Map<($ResourceKey<($Level)>), ($ServerLevel)>
public "getTickTime"(arg0: $ResourceKey$$Type<($Level)>): (long)[]
public "getTickTimesNanos"(): (long)[]
public "getOverworld"(): $ServerLevel
public "stopTimeProfiler"(): $ProfileResults
/**
 * 
 * @deprecated
 */
public "markWorldsDirty"(): void
public "isEnforceWhitelist"(): boolean
public "startTimeProfiler"(): void
public "isCurrentlySaving"(): boolean
public "getPackRepository"(): $PackRepository
public "acceptsTransfers"(): boolean
public "getWorldPath"(arg0: $LevelResource$$Type): $Path
public "isRecordingMetrics"(): boolean
public "isHardcore"(): boolean
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public static "spin"<S extends $MinecraftServer>(arg0: $Function$$Type<($Thread), (S)>): S
public "isDemo"(): boolean
public "isReady"(): boolean
public "isPaused"(): boolean
public "doRunTask"(arg0: $TickTask$$Type): void
public "doRunTask"(arg0: $Runnable$$Type): void
public "getPersistentData"(): $CompoundTag
public "createCommandSourceStack"(): $CommandSourceStack
public "getProfileRepository"(): $GameProfileRepository
public "getMotd"(): StringJS
public "getWorldData"(): $WorldData
public "fillSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "tickRateManager"(): $ServerTickRateManager
public "getAdvancements"(): $ServerAdvancementManager
public "registryAccess"(): $RegistryAccess$Frozen
public "isSingleplayer"(): boolean
public "getRunningThread"(): $Thread
public "getFixerUpper"(): $DataFixer
public "executeIfPossible"(arg0: $Runnable$$Type): void
public "waitForTasks"(): void
public "getScoreboard"(): $ServerScoreboard
public "getGameRules"(): $GameRules
public "getRateLimitPacketsPerSecond"(): integer
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "stop"(): void
public "getLocalIp"(): StringJS
public "setLocalIp"(arg0: StringJS): void
public "levelKeys"(): $Set<($ResourceKey<($Level)>)>
public "setMotd"(arg0: StringJS): void
public "hasGui"(): boolean
public "setDemo"(arg0: boolean): void
public "logIPs"(): boolean
public "getMaxChainedNeighborUpdates"(): integer
public "logChatMessage"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type, arg2: StringJS): void
public "setDifficulty"(arg0: $Difficulty$$Type, arg1: boolean): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "getCommands"(): $Commands
public "isLevelEnabled"(arg0: $Level$$Type): boolean
public "acceptsSuccess"(): boolean
public "acceptsFailure"(): boolean
public "shouldInformAdmins"(): boolean
public "getData"(): $AttachedData
public "getProfiler"(): $ProfilerFiller
public "getPlayerList"(): $PlayerList
public "getDefaultGameType"(): $GameType
public "isSpawningAnimals"(): boolean
public "areNpcsEnabled"(): boolean
public "setPort"(arg0: integer): void
public "isPublished"(): boolean
public "getKeyPair"(): $KeyPair
public "isStopped"(): boolean
public "overworld"(): $ServerLevel
public "getServerResources"(): $MinecraftServer$ReloadableResources
public "getCustomBossEvents"(): $CustomBossEvents
public "setDifficultyLocked"(arg0: boolean): void
public "isDedicated"(): boolean
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getStatus"(): $ServerStatus
public "isRunning"(): boolean
public "startRecordingMetrics"(arg0: $Consumer$$Type<($ProfileResults)>, arg1: $Consumer$$Type<($Path)>): void
public "finishRecordingMetrics"(): void
public "isPvpAllowed"(): boolean
public "getSpawnRadius"(arg0: $ServerLevel$$Type): integer
public "getForcedGameType"(): $GameType
public "getFunctions"(): $ServerFunctionManager
public "getRecipeManager"(): $RecipeManager
public "potionBrewing"(): $PotionBrewing
public "reloadableRegistries"(): $ReloadableServerRegistries$Holder
public "createTextFilterForPlayer"(arg0: $ServerPlayer$$Type): $TextFilter
public "createGameModeForPlayer"(arg0: $ServerPlayer$$Type): $ServerPlayerGameMode
public "restoreInventories"(): $Map
public "getProfilePermissions"(arg0: $GameProfile$$Type): integer
public "getCommandStorage"(): $CommandStorage
public "getProfileCache"(): $GameProfileCache
public "getAllLevels"(): $Iterable<($ServerLevel)>
public "getChatDecorator"(): $ChatDecorator
public "getProxy"(): $Proxy
public "shouldRconBroadcast"(): boolean
public "getSingleplayerProfile"(): $GameProfile
public "getServerResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
public "kickUnlistedPlayers"(arg0: $CommandSourceStack$$Type): void
public "dumpServerProperties"(arg0: $Path$$Type): void
public "getSpawnProtectionRadius"(): integer
public "getScaledTrackingDistance"(arg0: integer): integer
public "isTickTimeLoggingEnabled"(): boolean
public "getAverageTickTimeNanos"(): long
public "isResourcePackRequired"(): boolean
public "getPreventProxyConnections"(): boolean
public "setSingleplayerProfile"(arg0: $GameProfile$$Type): void
public "setPreventProxyConnections"(arg0: boolean): void
public "getCompressionThreshold"(): integer
public "enforceSecureProfile"(): boolean
public "getPlayerIdleTimeout"(): integer
public "setEnforceWhitelist"(arg0: boolean): void
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public static "configurePackRepository"(arg0: $PackRepository$$Type, arg1: $WorldDataConfiguration$$Type, arg2: boolean, arg3: boolean): $WorldDataConfiguration
public static "throwIfFatalException"(): boolean
public "setPlayerIdleTimeout"(arg0: integer): void
public "getCurrentSmoothedTickTime"(): float
public "endMetricsRecordingTick"(): void
public "mfix$getLastTickStartTime"(): long
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "stopRecordingMetrics"(): void
public "isTimeProfilerRunning"(): boolean
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "aether$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
public "cumulus$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
public "subscribeToDebugSample"(arg0: $ServerPlayer$$Type, arg1: $RemoteDebugSampleType$$Type): void
public "handler$zgc000$ae2$injectSpatialLevel"(arg0: $ChunkProgressListener$$Type, arg1: $CallbackInfo$$Type): void
public "getResourceManager"(): $ResourceManager
public "forceSynchronousWrites"(): boolean
public "getAbsoluteMaxWorldSize"(): integer
public "getStructureManager"(): $StructureTemplateManager
public "forceTimeSynchronization"(): void
public "isUnderSpawnProtection"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "getTickCount"(): integer
public "isCommandBlockEnabled"(): boolean
public "getWorldScreenshotFile"(): $Optional<($Path)>
public "getConnection"(): $ServerConnectionListener
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public "reportMisplacedChunk"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type, arg2: $RegionStorageInfo$$Type): void
public "alwaysAccepts"(): boolean
public "setStatusMessage"(message: $Component$$Type): void
/**
 * Runs the specified console command. The command won't output any logs in chat nor console.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "self"(): $MinecraftServer
public "tell"(message: $Component$$Type): void
/**
 * Runs the specified console command.
 * 
 * @param command - The console command. Slash at the beginning is optional.
 */
public "runCommand"(command: StringJS): void
public "getName"(): $Component
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getEntityByNetworkID"(id: integer): $Entity
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getPlayers"(): $EntityArrayList
public "getMcPlayers"(): $List<($Player)>
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementNode
public "getMcEntities"(): $Iterable<($Entity)>
public "sendData"(channel: StringJS): void
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntities"(): $EntityArrayList
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "port"(): integer
get "shutdown"(): boolean
get "scheduledEvents"(): $ScheduledEvents
get "serverModName"(): StringJS
get "moddedStatus"(): $ModCheck
get "playerNames"(): (StringJS)[]
get "playerCount"(): integer
get "serverDirectory"(): $Path
get "maxPlayers"(): integer
set "flightAllowed"(value: boolean)
set "pvpAllowed"(value: boolean)
set "defaultGameType"(value: $GameType$$Type)
public static set "fatalException"(value: $RuntimeException$$Type)
get "statusJson"(): StringJS
get "epollEnabled"(): boolean
set "playerList"(value: $PlayerList$$Type)
get "nextTickTime"(): long
get "serverVersion"(): StringJS
get "spawningMonsters"(): boolean
get "flightAllowed"(): boolean
get "sessionService"(): $MinecraftSessionService
get "tickTimesNanos"(): (long)[]
get "enforceWhitelist"(): boolean
get "currentlySaving"(): boolean
get "packRepository"(): $PackRepository
get "recordingMetrics"(): boolean
get "hardcore"(): boolean
get "demo"(): boolean
get "ready"(): boolean
get "paused"(): boolean
get "persistentData"(): $CompoundTag
get "profileRepository"(): $GameProfileRepository
get "motd"(): StringJS
get "worldData"(): $WorldData
get "advancements"(): $ServerAdvancementManager
get "singleplayer"(): boolean
get "runningThread"(): $Thread
get "fixerUpper"(): $DataFixer
get "scoreboard"(): $ServerScoreboard
get "gameRules"(): $GameRules
get "rateLimitPacketsPerSecond"(): integer
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
get "localIp"(): StringJS
set "localIp"(value: StringJS)
set "motd"(value: StringJS)
set "demo"(value: boolean)
get "maxChainedNeighborUpdates"(): integer
get "commands"(): $Commands
get "data"(): $AttachedData
get "profiler"(): $ProfilerFiller
get "playerList"(): $PlayerList
get "defaultGameType"(): $GameType
get "spawningAnimals"(): boolean
set "port"(value: integer)
get "published"(): boolean
get "keyPair"(): $KeyPair
get "stopped"(): boolean
get "serverResources"(): $MinecraftServer$ReloadableResources
get "customBossEvents"(): $CustomBossEvents
set "difficultyLocked"(value: boolean)
get "dedicated"(): boolean
get "profileKeySignatureValidator"(): $SignatureValidator
get "status"(): $ServerStatus
get "running"(): boolean
get "pvpAllowed"(): boolean
get "forcedGameType"(): $GameType
get "functions"(): $ServerFunctionManager
get "recipeManager"(): $RecipeManager
get "commandStorage"(): $CommandStorage
get "profileCache"(): $GameProfileCache
get "allLevels"(): $Iterable<($ServerLevel)>
get "chatDecorator"(): $ChatDecorator
get "proxy"(): $Proxy
get "singleplayerProfile"(): $GameProfile
get "serverResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
get "spawnProtectionRadius"(): integer
get "tickTimeLoggingEnabled"(): boolean
get "averageTickTimeNanos"(): long
get "resourcePackRequired"(): boolean
get "preventProxyConnections"(): boolean
set "singleplayerProfile"(value: $GameProfile$$Type)
set "preventProxyConnections"(value: boolean)
get "compressionThreshold"(): integer
get "playerIdleTimeout"(): integer
set "enforceWhitelist"(value: boolean)
set "playerIdleTimeout"(value: integer)
get "currentSmoothedTickTime"(): float
get "timeProfilerRunning"(): boolean
get "resourceManager"(): $ResourceManager
get "absoluteMaxWorldSize"(): integer
get "structureManager"(): $StructureTemplateManager
get "tickCount"(): integer
get "commandBlockEnabled"(): boolean
get "worldScreenshotFile"(): $Optional<($Path)>
get "connection"(): $ServerConnectionListener
set "statusMessage"(value: $Component$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
get "name"(): $Component
get "players"(): $EntityArrayList
get "mcPlayers"(): $List<($Player)>
get "mcEntities"(): $Iterable<($Entity)>
get "entities"(): $EntityArrayList
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$$Type = ($MinecraftServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$$Original = $MinecraftServer;}
declare module "net.minecraft.server.WorldLoader$PackConfig" {
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CloseableResourceManager} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldLoader$PackConfig extends $Record {
constructor(packRepository: $PackRepository$$Type, initialDataConfig: $WorldDataConfiguration$$Type, safeMode: boolean, initMode: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "packRepository"(): $PackRepository
public "initMode"(): boolean
public "initialDataConfig"(): $WorldDataConfiguration
public "createResourceManager"(): $Pair<($WorldDataConfiguration), ($CloseableResourceManager)>
public "safeMode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldLoader$PackConfig$$Type = ({"initMode"?: boolean, "packRepository"?: $PackRepository$$Type, "initialDataConfig"?: $WorldDataConfiguration$$Type, "safeMode"?: boolean}) | ([initMode?: boolean, packRepository?: $PackRepository$$Type, initialDataConfig?: $WorldDataConfiguration$$Type, safeMode?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldLoader$PackConfig$$Original = $WorldLoader$PackConfig;}
declare module "net.minecraft.server.PlayerAdvancements" {
import {$Map} from "java.util.Map"
import {$ServerAdvancementManager$$Type} from "net.minecraft.server.ServerAdvancementManager"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Path$$Type} from "java.nio.file.Path"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress} from "net.minecraft.advancements.AdvancementProgress"
import {$PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $PlayerAdvancements {
readonly "progress": $Map<($AdvancementHolder), ($AdvancementProgress)>

constructor(arg0: $DataFixer$$Type, arg1: $PlayerList$$Type, arg2: $ServerAdvancementManager$$Type, arg3: $Path$$Type, arg4: $ServerPlayer$$Type)

public "save"(): void
public "reload"(arg0: $ServerAdvancementManager$$Type): void
public "flushDirty"(arg0: $ServerPlayer$$Type): void
public "revoke"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "award"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "setSelectedTab"(arg0: $AdvancementHolder$$Type): void
public "getOrStartProgress"(arg0: $AdvancementHolder$$Type): $AdvancementProgress
public "setPlayer"(arg0: $ServerPlayer$$Type): void
public "stopListening"(): void
set "selectedTab"(value: $AdvancementHolder$$Type)
set "player"(value: $ServerPlayer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancements$$Type = ($PlayerAdvancements);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAdvancements$$Original = $PlayerAdvancements;}
declare module "net.minecraft.server.ServerLinks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry, $ServerLinks$Entry$$Type} from "net.minecraft.server.ServerLinks$Entry"
import {$Optional} from "java.util.Optional"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$List, $List$$Type} from "java.util.List"
import {$ServerLinks$UntrustedEntry} from "net.minecraft.server.ServerLinks$UntrustedEntry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks extends $Record {
static readonly "UNTRUSTED_LINKS_STREAM_CODEC": $StreamCodec<($ByteBuf), ($List<($ServerLinks$UntrustedEntry)>)>
static readonly "TYPE_STREAM_CODEC": $StreamCodec<($ByteBuf), ($Either<($ServerLinks$KnownLinkType), ($Component)>)>
static readonly "EMPTY": $ServerLinks

constructor(arg0: $List$$Type<($ServerLinks$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entries"(): $List<($ServerLinks$Entry)>
public "findKnownType"(arg0: $ServerLinks$KnownLinkType$$Type): $Optional<($ServerLinks$Entry)>
public "untrust"(): $List<($ServerLinks$UntrustedEntry)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$$Type = ({"entries"?: $List$$Type<($ServerLinks$Entry$$Type)>}) | ([entries?: $List$$Type<($ServerLinks$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$$Original = $ServerLinks;}
declare module "net.minecraft.server.ServerLinks$KnownLinkType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry} from "net.minecraft.server.ServerLinks$Entry"
import {$Enum} from "java.lang.Enum"
import {$URI$$Type} from "java.net.URI"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerLinks$KnownLinkType extends $Enum<($ServerLinks$KnownLinkType)> {
static readonly "SUPPORT": $ServerLinks$KnownLinkType
static readonly "FORUMS": $ServerLinks$KnownLinkType
static readonly "STATUS": $ServerLinks$KnownLinkType
static readonly "ANNOUNCEMENTS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY": $ServerLinks$KnownLinkType
static readonly "BUG_REPORT": $ServerLinks$KnownLinkType
static readonly "NEWS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY_GUIDELINES": $ServerLinks$KnownLinkType
static readonly "FEEDBACK": $ServerLinks$KnownLinkType
static readonly "WEBSITE": $ServerLinks$KnownLinkType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$KnownLinkType)>

public static "values"(): ($ServerLinks$KnownLinkType)[]
public static "valueOf"(arg0: StringJS): $ServerLinks$KnownLinkType
public "create"(arg0: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$KnownLinkType$$Type = (("bug_report") | ("community_guidelines") | ("support") | ("status") | ("feedback") | ("community") | ("website") | ("forums") | ("news") | ("announcements"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$KnownLinkType$$Original = $ServerLinks$KnownLinkType;}
declare module "net.minecraft.server.ReloadableServerRegistries$Holder" {
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export class $ReloadableServerRegistries$Holder {
constructor(arg0: $RegistryAccess$Frozen$$Type)

public "get"(): $RegistryAccess$Frozen
public "lookup"(): $HolderGetter$Provider
public "getKeys"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): $Collection<($ResourceLocation)>
public "getLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): $LootTable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerRegistries$Holder$$Type = ($ReloadableServerRegistries$Holder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerRegistries$Holder$$Original = $ReloadableServerRegistries$Holder;}
declare module "net.minecraft.server.ServerLinks$Entry" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ServerLinks$Entry extends $Record {
constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: $URI$$Type)

public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "displayName"(): $Component
public "link"(): $URI
public static "knownType"(arg0: $ServerLinks$KnownLinkType$$Type, arg1: $URI$$Type): $ServerLinks$Entry
public static "custom"(arg0: $Component$$Type, arg1: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$Entry$$Type = ({"link"?: $URI$$Type, "type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>}) | ([link?: $URI$$Type, type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$Entry$$Original = $ServerLinks$Entry;}
declare module "net.minecraft.server.MinecraftServer$ServerResourcePackInfo" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ServerResourcePackInfo extends $Record {
constructor(id: $UUID$$Type, url: StringJS, hash: StringJS, isRequired: boolean, prompt: $Component$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(): StringJS
public "url"(): StringJS
public "id"(): $UUID
public "prompt"(): $Component
public "isRequired"(): boolean
get "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Type = ({"id"?: $UUID$$Type, "hash"?: StringJS, "url"?: StringJS, "isRequired"?: boolean, "prompt"?: $Component$$Type}) | ([id?: $UUID$$Type, hash?: StringJS, url?: StringJS, isRequired?: boolean, prompt?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Original = $MinecraftServer$ServerResourcePackInfo;}
declare module "net.minecraft.server.WorldStem" {
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldData, $WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $WorldStem extends $Record implements $AutoCloseable$$Interface {
constructor(arg0: $CloseableResourceManager$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "dataPackResources"(): $ReloadableServerResources
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "worldData"(): $WorldData
public "resourceManager"(): $CloseableResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStem$$Type = ({"worldData"?: $WorldData$$Type, "registries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, "dataPackResources"?: $ReloadableServerResources$$Type, "resourceManager"?: $CloseableResourceManager$$Type}) | ([worldData?: $WorldData$$Type, registries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, dataPackResources?: $ReloadableServerResources$$Type, resourceManager?: $CloseableResourceManager$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldStem$$Original = $WorldStem;}
declare module "net.minecraft.server.ServerTickRateManager" {
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerTickRateManager extends $TickRateManager {
static readonly "MIN_TICKRATE": float

constructor(arg0: $MinecraftServer$$Type)

public "endTickWork"(): void
public "setTickRate"(arg0: float): void
public "isSprinting"(): boolean
public "requestGameToSprint"(arg0: integer): boolean
public "updateJoiningPlayer"(arg0: $ServerPlayer$$Type): void
public "checkShouldSprintThisTick"(): boolean
public "setFrozen"(arg0: boolean): void
public "stepGameIfPaused"(arg0: integer): boolean
public "stopSprinting"(): boolean
public "stopStepping"(): boolean
set "tickRate"(value: float)
get "sprinting"(): boolean
set "frozen"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickRateManager$$Type = ($ServerTickRateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickRateManager$$Original = $ServerTickRateManager;}
declare module "net.minecraft.server.ServerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerInfo$$Interface {
get "playerCount"(): integer
get "maxPlayers"(): integer
get "serverVersion"(): StringJS
get "motd"(): StringJS
}

export class $ServerInfo implements $ServerInfo$$Interface {
 "getPlayerCount"(): integer
 "getMaxPlayers"(): integer
 "getServerVersion"(): StringJS
 "getMotd"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerInfo$$Type = ($ServerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerInfo$$Original = $ServerInfo;}
declare module "net.minecraft.server.ServerFunctionManager" {
import {$Iterable} from "java.lang.Iterable"
import {$CommandFunction, $CommandFunction$$Type} from "net.minecraft.commands.functions.CommandFunction"
import {$Collection} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$IProfilingServerFunctionManager$$Interface} from "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$ServerFunctionLibrary$$Type} from "net.minecraft.server.ServerFunctionLibrary"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerFunctionManager implements $IProfilingServerFunctionManager$$Interface {
constructor(arg0: $MinecraftServer$$Type, arg1: $ServerFunctionLibrary$$Type)

public "get"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "execute"(arg0: $CommandFunction$$Type<($CommandSourceStack$$Type)>, arg1: $CommandSourceStack$$Type): void
public "tick"(): void
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "mfix$getProfilingResults"(): StringJS
public "replaceLibrary"(arg0: $ServerFunctionLibrary$$Type): void
public "getFunctionNames"(): $Iterable<($ResourceLocation)>
public "getTagNames"(): $Iterable<($ResourceLocation)>
public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public "getGameLoopSender"(): $CommandSourceStack
get "functionNames"(): $Iterable<($ResourceLocation)>
get "tagNames"(): $Iterable<($ResourceLocation)>
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
get "gameLoopSender"(): $CommandSourceStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionManager$$Type = ($ServerFunctionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionManager$$Original = $ServerFunctionManager;}
declare module "net.minecraft.server.MinecraftServer$ReloadableResources" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable$$Interface {
constructor(resourceManager: $CloseableResourceManager$$Type, managers: $ReloadableServerResources$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "managers"(): $ReloadableServerResources
public "resourceManager"(): $CloseableResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ReloadableResources$$Type = ({"managers"?: $ReloadableServerResources$$Type, "resourceManager"?: $CloseableResourceManager$$Type}) | ([managers?: $ReloadableServerResources$$Type, resourceManager?: $CloseableResourceManager$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ReloadableResources$$Original = $MinecraftServer$ReloadableResources;}
declare module "net.minecraft.server.ServerScoreboard" {
import {$ScoreboardSaveData} from "net.minecraft.world.scores.ScoreboardSaveData"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$List} from "java.util.List"
import {$ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerScoreboard extends $Scoreboard {
static readonly "HIDDEN_SCORE_PREFIX": StringJS

constructor(arg0: $MinecraftServer$$Type)

public "addPlayerToTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): boolean
public "onTeamChanged"(arg0: $PlayerTeam$$Type): void
public "getObjectiveDisplaySlotCount"(arg0: $Objective$$Type): integer
public "setDisplayObjective"(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type): void
public "onPlayerScoreRemoved"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "getStopTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "startTrackingObjective"(arg0: $Objective$$Type): void
public "getStartTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "removePlayerFromTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): void
public "stopTrackingObjective"(arg0: $Objective$$Type): void
public "onTeamAdded"(arg0: $PlayerTeam$$Type): void
public "onObjectiveRemoved"(arg0: $Objective$$Type): void
public "addDirtyListener"(arg0: $Runnable$$Type): void
public "onPlayerRemoved"(arg0: $ScoreHolder$$Type): void
public "onObjectiveAdded"(arg0: $Objective$$Type): void
public "onObjectiveChanged"(arg0: $Objective$$Type): void
public "dataFactory"(): $SavedData$Factory<($ScoreboardSaveData)>
public "onTeamRemoved"(arg0: $PlayerTeam$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerScoreboard$$Type = ($ServerScoreboard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerScoreboard$$Original = $ServerScoreboard;}
declare module "net.minecraft.server.RegistryLayer" {
import {$Enum} from "java.lang.Enum"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"

export class $RegistryLayer extends $Enum<($RegistryLayer)> {
static readonly "WORLDGEN": $RegistryLayer
static readonly "DIMENSIONS": $RegistryLayer
static readonly "RELOADABLE": $RegistryLayer
static readonly "STATIC": $RegistryLayer

public static "values"(): ($RegistryLayer)[]
public static "valueOf"(arg0: StringJS): $RegistryLayer
public static "createRegistryAccess"(): $LayeredRegistryAccess<($RegistryLayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryLayer$$Type = (("static") | ("worldgen") | ("dimensions") | ("reloadable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryLayer$$Original = $RegistryLayer;}
