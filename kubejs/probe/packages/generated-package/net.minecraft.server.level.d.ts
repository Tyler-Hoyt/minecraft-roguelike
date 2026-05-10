declare module "net.minecraft.server.level.ClientInformation" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ChatVisiblity, $ChatVisiblity$$Type} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$Record} from "java.lang.Record"

export class $ClientInformation extends $Record {
static readonly "MAX_LANGUAGE_LENGTH": integer

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: StringJS, arg1: integer, arg2: $ChatVisiblity$$Type, arg3: boolean, arg4: integer, arg5: $HumanoidArm$$Type, arg6: boolean, arg7: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(arg0: $FriendlyByteBuf$$Type): void
public "language"(): StringJS
public "mainHand"(): $HumanoidArm
public "chatColors"(): boolean
public "modelCustomisation"(): integer
public static "createDefault"(): $ClientInformation
public "allowsListing"(): boolean
public "viewDistance"(): integer
public "chatVisibility"(): $ChatVisiblity
public "textFilteringEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInformation$$Type = ({"modelCustomisation"?: integer, "viewDistance"?: integer, "language"?: StringJS, "allowsListing"?: boolean, "chatVisibility"?: $ChatVisiblity$$Type, "chatColors"?: boolean, "mainHand"?: $HumanoidArm$$Type, "textFilteringEnabled"?: boolean}) | ([modelCustomisation?: integer, viewDistance?: integer, language?: StringJS, allowsListing?: boolean, chatVisibility?: $ChatVisiblity$$Type, chatColors?: boolean, mainHand?: $HumanoidArm$$Type, textFilteringEnabled?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientInformation$$Original = $ClientInformation;}
declare module "net.minecraft.server.level.WorldGenRegion" {
import {$Iterable} from "java.lang.Iterable"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BiomeManager} from "net.minecraft.world.level.biome.BiomeManager"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$Difficulty} from "net.minecraft.world.Difficulty"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$LevelData} from "net.minecraft.world.level.storage.LevelData"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$WorldBorder} from "net.minecraft.world.level.border.WorldBorder"
import {$TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$TargetingConditions$$Type} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$WorldGenLevel$$Interface} from "net.minecraft.world.level.WorldGenLevel"
import {$HolderLookup} from "net.minecraft.core.HolderLookup"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$DifficultyInstance} from "net.minecraft.world.DifficultyInstance"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export class $WorldGenRegion implements $WorldGenLevel$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, arg2: $ChunkStep$$Type, arg3: $ChunkAccess$$Type)

public "getSeed"(): long
/**
 * 
 * @deprecated
 */
public "getLevel"(): $ServerLevel
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "isClientSide"(): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "dimensionType"(): $DimensionType
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getSkyDarken"(): integer
public "getBiomeManager"(): $BiomeManager
public "getSeaLevel"(): integer
public "getMinBuildHeight"(): integer
public "getChunkSource"(): $ChunkSource
public "getLightEngine"(): $LevelLightEngine
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
public "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "nextSubTickCount"(): long
public "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getServer"(): $MinecraftServer
public "getCenter"(): $ChunkPos
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
public "getRandom"(): $RandomSource
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "isOldChunkAround"(arg0: $ChunkPos$$Type, arg1: integer): boolean
public "getWorldBorder"(): $WorldBorder
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "registryAccess"(): $RegistryAccess
public "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
public "getHeight"(): integer
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "getLevelData"(): $LevelData
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
public "getDifficulty"(): $Difficulty
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
public "dayTime"(): long
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
public "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
public "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
public "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
public "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
public "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getTimeOfDay"(arg0: float): float
public "getMoonPhase"(): integer
public "getMoonBrightness"(): float
public "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
public "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
public "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
public "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
public "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
public "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
public "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
public "getPlayerByUUID"(arg0: $UUID$$Type): $Player
public "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
public "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
public "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
public "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
public "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
public "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "containsAnyLiquid"(arg0: $AABB$$Type): boolean
public "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
public "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
public "isWaterAt"(arg0: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
public "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
public "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "getPlayers"(): $EntityArrayList
public "getMcPlayers"(): $List<($Player)>
public "getMcEntities"(): $Iterable<($Entity)>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "self"(): $EntityGetter
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
public "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
public "isUnobstructed"(arg0: $Entity$$Type): boolean
public "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
public "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "noCollision"(arg0: $Entity$$Type): boolean
public "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "noCollision"(arg0: $AABB$$Type): boolean
public "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
public "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
public "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
public "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
public "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
public "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
public "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
public "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
public "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
public "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
public "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
/**
 * 
 * @deprecated
 */
public "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
public "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
public "getEntities"(): $EntityArrayList
public "getEntityByNetworkID"(id: integer): $Entity
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "getMaxLightLevel"(): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMinSection"(): integer
public "getMaxBuildHeight"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
get "seed"(): long
get "level"(): $ServerLevel
get "clientSide"(): boolean
get "skyDarken"(): integer
get "biomeManager"(): $BiomeManager
get "seaLevel"(): integer
get "minBuildHeight"(): integer
get "chunkSource"(): $ChunkSource
get "lightEngine"(): $LevelLightEngine
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "blockTicks"(): $LevelTickAccess<($Block)>
get "server"(): $MinecraftServer
get "center"(): $ChunkPos
get "random"(): $RandomSource
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "worldBorder"(): $WorldBorder
get "height"(): integer
get "levelData"(): $LevelData
get "difficulty"(): $Difficulty
get "moonPhase"(): integer
get "moonBrightness"(): float
get "players"(): $EntityArrayList
get "mcPlayers"(): $List<($Player)>
get "mcEntities"(): $Iterable<($Entity)>
get "entities"(): $EntityArrayList
get "maxLightLevel"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenRegion$$Type = ($WorldGenRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldGenRegion$$Original = $WorldGenRegion;}
declare module "net.minecraft.server.level.ServerLevel" {
import {$PortalForcer} from "net.minecraft.world.level.portal.PortalForcer"
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$ReputationEventType$$Type} from "net.minecraft.world.entity.ai.village.ReputationEventType"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$PathTypeCache} from "net.minecraft.world.level.pathfinder.PathTypeCache"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$StructureManager} from "net.minecraft.world.level.StructureManager"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ExplosionDamageCalculator$$Type} from "net.minecraft.world.level.ExplosionDamageCalculator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Raid} from "net.minecraft.world.entity.raid.Raid"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$ServerChunkCache} from "net.minecraft.server.level.ServerChunkCache"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$1$$Interface} from "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.ServerLevelAccessor"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$PersistentEntitySectionManager} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"
import {$ServerLevelAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.accessors.ServerLevelAccessor"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$ServerLevelKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerLevelKJS"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EndDragonFight, $EndDragonFight$$Type} from "net.minecraft.world.level.dimension.end.EndDragonFight"
import {$Path$$Type} from "java.nio.file.Path"
import {$CustomSpawner$$Type} from "net.minecraft.world.level.CustomSpawner"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$CrashReportCategory} from "net.minecraft.CrashReportCategory"
import {$Raids} from "net.minecraft.world.entity.raid.Raids"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ServerLevelAccessor$$Interface as $ServerLevelAccessor$0$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.ServerLevelAccessor"
import {$DimensionDataStorage} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ServerWorldExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.ServerWorldExtended"
import {$LongSet} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ProgressListener$$Type} from "net.minecraft.util.ProgressListener"
import {$IntProvider} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$RandomSequences, $RandomSequences$$Type} from "net.minecraft.world.RandomSequences"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Explosion} from "net.minecraft.world.level.Explosion"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$ServerLevelData, $ServerLevelData$$Type} from "net.minecraft.world.level.storage.ServerLevelData"
import {$Level$ExplosionInteraction$$Type} from "net.minecraft.world.level.Level$ExplosionInteraction"
import {$Function$$Type} from "java.util.function.Function"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$EnderDragon} from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WorldGenLevel$$Interface} from "net.minecraft.world.level.WorldGenLevel"
import {$AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Collection} from "java.util.Collection"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$ICapabilityInvalidationListener$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener"
import {$ReputationEventHandler$$Type} from "net.minecraft.world.entity.ReputationEventHandler"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerLevel extends $Level implements $WorldGenLevel$$Interface, $ServerWorldExtended$$Interface, $ServerLevelAccessor$1$$Interface, $ServerLevelAccessor$$Interface, $ServerLevelAccessor$0$$Interface, $ServerLevelKJS$$Interface {
 "restoringBlockSnapshots": boolean
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "RAIN_DELAY": $IntProvider
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
 "rainLevel": float
 "oThunderLevel": float
static readonly "THUNDER_DURATION": $IntProvider
readonly "serverLevelData": $ServerLevelData
static readonly "RAIN_DURATION": $IntProvider
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "entityManager": $PersistentEntitySectionManager<($Entity)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
 "oRainLevel": float
static readonly "END_SPAWN_POINT": $BlockPos
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
 "captureBlockSnapshots": boolean

constructor(arg0: $MinecraftServer$$Type, arg1: $Executor$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $ServerLevelData$$Type, arg4: $ResourceKey$$Type<($Level)>, arg5: $LevelStem$$Type, arg6: $ChunkProgressListener$$Type, arg7: boolean, arg8: long, arg9: $List$$Type<($CustomSpawner$$Type)>, arg10: boolean, arg11: $RandomSequences$$Type)

public "toString"(): StringJS
public "close"(): void
public "save"(arg0: $ProgressListener$$Type, arg1: boolean, arg2: boolean): void
public "unload"(arg0: $LevelChunk$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type): void
public "getSeed"(): long
public "getLevel"(): $ServerLevel
public "addWithUUID"(arg0: $Entity$$Type): boolean
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "getPersistentData"(): $CompoundTag
public "getEntity"(arg0: integer): $Entity
public "getDayTimeFraction"(): float
public "addLegacyChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "addWorldGenChunkEntities"(arg0: $Stream$$Type<($Entity$$Type)>): void
public "onStructureStartsAvailable"(arg0: $ChunkAccess$$Type): void
public "isPositionEntityTicking"(arg0: $BlockPos$$Type): boolean
public "canSleepThroughNights"(): boolean
public "setWeatherParameters"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): void
public "findNearestMapStructure"(arg0: $TagKey$$Type<($Structure)>, arg1: $BlockPos$$Type, arg2: integer, arg3: boolean): $BlockPos
public "removePlayerImmediately"(arg0: $ServerPlayer$$Type, arg1: $Entity$RemovalReason$$Type): void
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "gatherChunkSourceStats"(): StringJS
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
public "invalidateCapabilities"(arg0: $BlockPos$$Type): void
public "getStructureManager"(): $StructureTemplateManager
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>, arg2: $List$$Type<(T)>, arg3: integer): void
public "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $Predicate$$Type<(T)>): $List<(T)>
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "broadcastDamageEvent"(arg0: $Entity$$Type, arg1: $DamageSource$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $BlockPos$$Type): void
public "onBlockStateChange"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "getChunkSource"(): $ServerChunkCache
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "updateNeighborsAt"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "setDayTimePerTick"(arg0: float): void
public "potionBrewing"(): $PotionBrewing
public "getDayTimePerTick"(): float
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getPartEntities"(): $Collection<($PartEntity<(never)>)>
public "getRecipeManager"(): $RecipeManager
public "setDayTimeFraction"(arg0: float): void
public "shouldTickBlocksAt"(arg0: long): boolean
public "getFreeMapId"(): $MapId
public "isVillage"(arg0: $BlockPos$$Type): boolean
public "isVillage"(arg0: $SectionPos$$Type): boolean
public "isRaided"(arg0: $BlockPos$$Type): boolean
public "getRaidAt"(arg0: $BlockPos$$Type): $Raid
public "getRaids"(): $Raids
public "isFlat"(): boolean
public "syncData"(arg0: $AttachmentType$$Type<(never)>): void
public "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "getFluidTicks"(): $LevelTickAccess
public "getBlockTicks"(): $LevelTickAccess
public "mayInteract"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "resetEmptyTime"(): void
public "addDuringTeleport"(arg0: $Entity$$Type): void
public "getScoreboard"(): $ServerScoreboard
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "explode"(arg0: $Entity$$Type, arg1: $DamageSource$$Type, arg2: $ExplosionDamageCalculator$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: boolean, arg8: $Level$ExplosionInteraction$$Type, arg9: $ParticleOptions$$Type, arg10: $ParticleOptions$$Type, arg11: $Holder$$Type<($SoundEvent)>): $Explosion
public "broadcastEntityEvent"(arg0: $Entity$$Type, arg1: byte): void
public "updateSleepingPlayerList"(): void
/**
 * 
 * @deprecated
 */
public "setDragonFight"(arg0: $EndDragonFight$$Type): void
public "tickPrecipitation"(arg0: $BlockPos$$Type): void
public "isHandlingTick"(): boolean
public "getPoiManager"(): $PoiManager
public "getDataStorage"(): $DimensionDataStorage
public "tickNonPassenger"(arg0: $Entity$$Type): void
public "resetWeatherCycle"(): void
public "tickCustomSpawners"(arg0: boolean, arg1: boolean): void
public "clearBlockEvents"(arg0: $BoundingBox$$Type): void
public "getAllEntities"(): $Iterable<($Entity)>
public "addNewPlayer"(arg0: $ServerPlayer$$Type): void
public "getWatchdogStats"(): StringJS
public "startTickingChunk"(arg0: $LevelChunk$$Type): void
public "getPathTypeCache"(): $PathTypeCache
public "areEntitiesLoaded"(arg0: long): boolean
public "getLogicalHeight"(): integer
public "getRandomSequence"(arg0: $ResourceLocation$$Type): $RandomSource
public "addRespawnedPlayer"(arg0: $ServerPlayer$$Type): void
public "getRandomPlayer"(): $ServerPlayer
public "getPortalForcer"(): $PortalForcer
public "saveDebugReport"(arg0: $Path$$Type): void
public "sectionsToVillage"(arg0: $SectionPos$$Type): integer
public "getDragonFight"(): $EndDragonFight
public "setDefaultSpawnPos"(arg0: $BlockPos$$Type, arg1: float): void
public "isCloseToVillage"(arg0: $BlockPos$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "getEntityOrPart"(arg0: integer): $Entity
public "setChunkForced"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "getForcedChunks"(): $LongSet
public "findClosestBiome3d"(arg0: $Predicate$$Type<($Holder<($Biome)>)>, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: integer): $Pair<($BlockPos), ($Holder<($Biome)>)>
public "onReputationEvent"(arg0: $ReputationEventType$$Type, arg1: $Entity$$Type, arg2: $ReputationEventHandler$$Type): void
public "getRandomSequences"(): $RandomSequences
public "getEntityManager"(): $PersistentEntitySectionManager
public "getDragons"(): $List<($EnderDragon)>
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>, arg1: integer): $List<($ServerPlayer)>
public "getPlayers"(arg0: $Predicate$$Type<($ServerPlayer)>): $List<($ServerPlayer)>
public "tickChunk"(arg0: $LevelChunk$$Type, arg1: integer): void
public "setDayTime"(arg0: long): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getServer"(): $MinecraftServer
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "blockEvent"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: integer): void
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "noSave"(): boolean
public "sendParticles"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: integer, arg5: double, arg6: double, arg7: double, arg8: double): integer
public "sendParticles"<T extends $ParticleOptions>(arg0: $ServerPlayer$$Type, arg1: T, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: double, arg8: double, arg9: double, arg10: double): boolean
public "tryAddFreshEntityWithPassengers"(arg0: $Entity$$Type): boolean
public "updateNeighborsAtExceptFromFacing"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: $Direction$$Type): void
public "lithium$setNavigationActive"(arg0: $Mob$$Type): void
public "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
public "areEntityNavigationsConsistent"(): boolean
public "cleanCapabilityListenerReferences"(): void
public "structureManager"(): $StructureManager
public "registerCapabilityListener"(arg0: $BlockPos$$Type, arg1: $ICapabilityInvalidationListener$$Type): void
public "isNaturalSpawningAllowed"(arg0: $BlockPos$$Type): boolean
public "isNaturalSpawningAllowed"(arg0: $ChunkPos$$Type): boolean
public "tickRateManager"(): $TickRateManager
public "fillReportDetails"(arg0: $CrashReport$$Type): $CrashReportCategory
public "enabledFeatures"(): $FeatureFlagSet
public "ensureCanWrite"(arg0: $BlockPos$$Type): boolean
public "setCurrentlyGenerating"(arg0: $Supplier$$Type<(StringJS)>): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "self"(): $EntityGetter
public "addFreshEntityWithPassengers"(arg0: $Entity$$Type): void
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMinBuildHeight"(): integer
public "getHeight"(): integer
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
get "seed"(): long
get "level"(): $ServerLevel
get "persistentData"(): $CompoundTag
get "dayTimeFraction"(): float
get "chunkSource"(): $ServerChunkCache
set "dayTimePerTick"(value: float)
get "dayTimePerTick"(): float
get "partEntities"(): $Collection<($PartEntity<(never)>)>
get "recipeManager"(): $RecipeManager
set "dayTimeFraction"(value: float)
get "freeMapId"(): $MapId
get "raids"(): $Raids
get "flat"(): boolean
get "fluidTicks"(): $LevelTickAccess
get "blockTicks"(): $LevelTickAccess
get "scoreboard"(): $ServerScoreboard
set "dragonFight"(value: $EndDragonFight$$Type)
get "handlingTick"(): boolean
get "poiManager"(): $PoiManager
get "dataStorage"(): $DimensionDataStorage
get "allEntities"(): $Iterable<($Entity)>
get "watchdogStats"(): StringJS
get "pathTypeCache"(): $PathTypeCache
get "logicalHeight"(): integer
get "randomPlayer"(): $ServerPlayer
get "portalForcer"(): $PortalForcer
get "dragonFight"(): $EndDragonFight
get "forcedChunks"(): $LongSet
get "randomSequences"(): $RandomSequences
get "dragons"(): $List<($EnderDragon)>
set "dayTime"(value: long)
get "server"(): $MinecraftServer
set "currentlyGenerating"(value: $Supplier$$Type<(StringJS)>)
get "minBuildHeight"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevel$$Type = ($ServerLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevel$$Original = $ServerLevel;}
declare module "net.minecraft.server.level.ChunkHolder$PlayerProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ChunkHolder$PlayerProvider$$Interface {

(arg0: $ChunkPos, arg1: boolean): $List$$Type<($ServerPlayer$$Type)>
}

export class $ChunkHolder$PlayerProvider implements $ChunkHolder$PlayerProvider$$Interface {
 "getPlayers"(arg0: $ChunkPos$$Type, arg1: boolean): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolder$PlayerProvider$$Type = ((arg0: $ChunkPos, arg1: boolean) => $List$$Type<($ServerPlayer$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolder$PlayerProvider$$Original = $ChunkHolder$PlayerProvider;}
declare module "net.minecraft.server.level.ServerChunkCache" {
import {$ChunkGeneratorStructureState} from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$DimensionDataStorage, $DimensionDataStorage$$Type} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$Level} from "net.minecraft.world.level.Level"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$ChunkMap} from "net.minecraft.server.level.ChunkMap"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ChunkScanAccess} from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NaturalSpawner$SpawnState} from "net.minecraft.world.level.NaturalSpawner$SpawnState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$RandomState} from "net.minecraft.world.level.levelgen.RandomState"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$LightChunk} from "net.minecraft.world.level.chunk.LightChunk"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$IServerChunkCacheExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerChunkCacheExtension"
import {$PoiManager} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension$$Interface {
readonly "level": $ServerLevel
readonly "chunkMap": $ChunkMap

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $ChunkGenerator$$Type, arg6: integer, arg7: integer, arg8: boolean, arg9: $ChunkProgressListener$$Type, arg10: $ChunkStatusUpdateListener$$Type, arg11: $Supplier$$Type<($DimensionDataStorage$$Type)>)

public "close"(): void
public "save"(arg0: boolean): void
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "tick"(arg0: $BooleanSupplier$$Type, arg1: boolean): void
public "pollTask"(): boolean
public "getLevel"(): $Level
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "setViewDistance"(arg0: integer): void
public "getGenerator"(): $ChunkGenerator
public "getChunkForLighting"(arg0: integer, arg1: integer): $LightChunk
public "getLoadedChunksCount"(): integer
public "getLightEngine"(): $LevelLightEngine
public "gatherStats"(): StringJS
public "setSpawnSettings"(arg0: boolean, arg1: boolean): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "randomState"(): $RandomState
public "chunkScanner"(): $ChunkScanAccess
public "getGeneratorState"(): $ChunkGeneratorStructureState
public "getPoiManager"(): $PoiManager
public "getDataStorage"(): $DimensionDataStorage
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "isPositionTicking"(arg0: long): boolean
public "blockChanged"(arg0: $BlockPos$$Type): void
public "getLastSpawnState"(): $NaturalSpawner$SpawnState
public "updateChunkForced"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "removeEntity"(arg0: $Entity$$Type): void
public "addEntity"(arg0: $Entity$$Type): void
public "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "getChunkFuture"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "onLightUpdate"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type): void
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "getPendingTasksCount"(): integer
public "removeTicketsOnClosing"(): void
public "getTickingGenerated"(): integer
public "setSimulationDistance"(arg0: integer): void
public "getChunkNow"(arg0: integer, arg1: integer): $LevelChunk
public "self"(): $ServerChunkCache
public "broadcast"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
public "broadcastAndSend"(arg0: $Entity$$Type, arg1: $CustomPacketPayload$$Type): void
set "viewDistance"(value: integer)
get "generator"(): $ChunkGenerator
get "loadedChunksCount"(): integer
get "lightEngine"(): $LevelLightEngine
get "generatorState"(): $ChunkGeneratorStructureState
get "poiManager"(): $PoiManager
get "dataStorage"(): $DimensionDataStorage
get "lastSpawnState"(): $NaturalSpawner$SpawnState
get "pendingTasksCount"(): integer
get "tickingGenerated"(): integer
set "simulationDistance"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkCache$$Type = ($ServerChunkCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkCache$$Original = $ServerChunkCache;}
declare module "net.minecraft.server.level.FullChunkStatus" {
import {$Enum} from "java.lang.Enum"

export class $FullChunkStatus extends $Enum<($FullChunkStatus)> {
static readonly "ENTITY_TICKING": $FullChunkStatus
static readonly "INACCESSIBLE": $FullChunkStatus
static readonly "FULL": $FullChunkStatus
static readonly "BLOCK_TICKING": $FullChunkStatus

public static "values"(): ($FullChunkStatus)[]
public static "valueOf"(arg0: StringJS): $FullChunkStatus
public "isOrAfter"(arg0: $FullChunkStatus$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullChunkStatus$$Type = (("inaccessible") | ("full") | ("block_ticking") | ("entity_ticking"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FullChunkStatus$$Original = $FullChunkStatus;}
declare module "net.minecraft.server.level.ServerPlayer" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$CommonPlayerSpawnInfo} from "net.minecraft.network.protocol.game.CommonPlayerSpawnInfo"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DimensionTransition$PostDimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition$PostDimensionTransition"
import {$Optional} from "java.util.Optional"
import {$RemoteChatSession, $RemoteChatSession$$Type} from "net.minecraft.network.chat.RemoteChatSession"
import {$ServerGamePacketListenerImpl} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player$BedSleepingProblem} from "net.minecraft.world.entity.player.Player$BedSleepingProblem"
import {$CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ChestMenuData$$Type} from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ServerPlayerKJS$$Interface} from "dev.latvian.mods.kubejs.core.ServerPlayerKJS"
import {$KubeJSGUI$$Type} from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ServerStatsCounter} from "net.minecraft.stats.ServerStatsCounter"
import {$Duration$$Type} from "java.time.Duration"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ClientInformation, $ClientInformation$$Type} from "net.minecraft.server.level.ClientInformation"
import {$LevelBlock, $LevelBlock$$Type} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractHorse$$Type} from "net.minecraft.world.entity.animal.horse.AbstractHorse"
import {$Stat$$Type} from "net.minecraft.stats.Stat"
import {$OptionalInt} from "java.util.OptionalInt"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ServerRecipeBook} from "net.minecraft.stats.ServerRecipeBook"
import {$InventoryMenu} from "net.minecraft.world.inventory.InventoryMenu"
import {$Unit} from "net.minecraft.util.Unit"
import {$PlayerAdvancements} from "net.minecraft.server.PlayerAdvancements"
import {$MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$List$$Type} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$WardenSpawnTracker} from "net.minecraft.world.entity.monster.warden.WardenSpawnTracker"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PickOnAStickEntity} from "com.ordana.spelunkery.entities.PickOnAStickEntity"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$OutgoingChatMessage$$Type} from "net.minecraft.network.chat.OutgoingChatMessage"
import {$FishingHook} from "net.minecraft.world.entity.projectile.FishingHook"
import {$WalkAnimationState} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$InventoryKJS$$Type} from "dev.latvian.mods.kubejs.core.InventoryKJS"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$GameType$$Type} from "net.minecraft.world.level.GameType"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$PlayerStatsJS} from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import {$ChunkTrackingView, $ChunkTrackingView$$Type} from "net.minecraft.server.level.ChunkTrackingView"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ServerStatus$$Type} from "net.minecraft.network.protocol.status.ServerStatus"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$EntityAnchorArgument$Anchor$$Type} from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"

export class $ServerPlayer extends $Player implements $ServerPlayerKJS$$Interface {
 "spelunkery$pickEntity": $PickOnAStickEntity
static readonly "DEFAULT_BASE_GRAVITY": double
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "yHeadRot": float
 "yCloakO": double
 "noPhysics": boolean
 "yo": double
 "connection": $ServerGamePacketListenerImpl
 "yBodyRotO": float
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
static readonly "ID_TAG": StringJS
static readonly "WAKE_UP_DURATION": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "walkDist": float
 "noCulling": boolean
readonly "walkAnimation": $WalkAnimationState
readonly "gameMode": $ServerPlayerGameMode
readonly "object": any
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "PERSISTED_NBT_TAG": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": StringJS
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
readonly "rotA": float
 "horizontalCollision": boolean
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
 "tickCount": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "currentExplosionCause": $Entity

constructor(arg0: $MinecraftServer$$Type, arg1: $ServerLevel$$Type, arg2: $GameProfile$$Type, arg3: $ClientInformation$$Type)

public "drop"(arg0: boolean): boolean
public "drop"(arg0: $ItemStack$$Type, arg1: boolean, arg2: boolean): $ItemEntity
public "getLanguage"(): StringJS
public "tick"(): void
public "take"(arg0: $Entity$$Type, arg1: integer): void
public "onLeaveCombat"(): void
public "onEnterCombat"(): void
public "onItemPickup"(arg0: $ItemEntity$$Type): void
public "indicateDamage"(arg0: double, arg1: double): void
public "onUpdateAbilities"(): void
public "stopSleepInBed"(arg0: boolean, arg1: boolean): void
public "closeMenu"(): void
public "resetStat"(arg0: $Stat$$Type<(never)>): void
public "die"(arg0: $DamageSource$$Type): void
public "crit"(arg0: $Entity$$Type): void
public "openMenu"(arg0: $MenuProvider$$Type): $OptionalInt
public "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
public "magicCrit"(arg0: $Entity$$Type): void
public "travel"(arg0: $Vec3$$Type): void
public "getStatsCounter"(): $ServerStatsCounter
public "sendServerStatus"(arg0: $ServerStatus$$Type): void
public "clientInformation"(): $ClientInformation
public "getLastSectionPos"(): $SectionPos
public "getLastActionTime"(): long
public "getTabListFooter"(): $Component
public "setTabListFooter"(arg0: $Component$$Type): void
public "getTextFilter"(): $TextFilter
public "loadGameTypes"(arg0: $CompoundTag$$Type): void
public "getChatSession"(): $RemoteChatSession
public "getTabListHeader"(): $Component
public "setKnownMovement"(arg0: $Vec3$$Type): void
public "getChatVisibility"(): $ChatVisiblity
public "canChatInColor"(): boolean
public "setLastSectionPos"(arg0: $SectionPos$$Type): void
public "refreshTabListName"(): void
public "setChatSession"(arg0: $RemoteChatSession$$Type): void
public "setTabListHeader"(arg0: $Component$$Type): void
public "findRespawnPositionAndUseSpawnBlock"(arg0: boolean, arg1: $DimensionTransition$PostDimensionTransition$$Type): $DimensionTransition
public "teleportRelative"(arg0: double, arg1: double, arg2: double): void
public "getRespawnPosition"(): $BlockPos
public "onExplosionHit"(arg0: $Entity$$Type): void
public "serverLevel"(): $ServerLevel
public "showEndCredits"(): void
public "setRespawnPosition"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean): void
public "displayClientMessage"(arg0: $Component$$Type, arg1: boolean): void
public "rideTick"(): void
public "dismountTo"(arg0: double, arg1: double, arg2: double): void
public "teleportTo"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "getRespawnDimension"(): $ResourceKey<($Level)>
public "mayInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getKnownMovement"(): $Vec3
public "broadcastToPlayer"(arg0: $ServerPlayer$$Type): boolean
public "sendSystemMessage"(arg0: $Component$$Type, arg1: boolean): void
public "sendSystemMessage"(arg0: $Component$$Type): void
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "restoreFrom"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "moveTo"(arg0: double, arg1: double, arg2: double): void
public "setRaidOmenPosition"(arg0: $BlockPos$$Type): void
public "clearRaidOmenPosition"(): void
public "getRaidOmenPosition"(): $BlockPos
public "allowsListing"(): boolean
/**
 * Changes the player's gamemode.
 * 
 * @param gameMode - One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
 */
public "setGameMode"(arg0: $GameType$$Type): boolean
public "sendChatMessage"(arg0: $OutgoingChatMessage$$Type, arg1: boolean, arg2: $ChatType$Bound$$Type): void
public "setServerLevel"(arg0: $ServerLevel$$Type): void
public "resetSentInfo"(): void
public "doCheckFallDamage"(arg0: double, arg1: double, arg2: double, arg3: boolean): void
public "getRespawnAngle"(): float
public "getIpAddress"(): StringJS
public "setPlayerInput"(arg0: float, arg1: float, arg2: boolean, arg3: boolean): void
public "isRespawnForced"(): boolean
public "initInventoryMenu"(): void
public "disconnect"(): void
public "giveExperienceLevels"(arg0: integer): void
public "onEnchantmentPerformed"(arg0: $ItemStack$$Type, arg1: integer): void
public "triggerRecipeCrafted"(arg0: $RecipeHolder$$Type<(never)>, arg1: $List$$Type<($ItemStack$$Type)>): void
public "giveExperiencePoints"(arg0: integer): void
public "getWardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
public "onEquippedItemBroken"(arg0: $Item$$Type, arg1: $EquipmentSlot$$Type): void
public "setSpawnExtraParticlesOnFall"(arg0: boolean): void
public "trackEnteredOrExitedLavaOnVehicle"(): void
public static "findRespawnAndUseSpawnBlock"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: float, arg3: boolean, arg4: boolean): $Optional<($ServerPlayer$RespawnPosAngle)>
public "hasDisconnected"(): boolean
public "getRecipeBook"(): $ServerRecipeBook
public "setCamera"(arg0: $Entity$$Type): void
public "getCamera"(): $Entity
public "doTick"(): void
public "awardStat"(arg0: $Stat$$Type<(never)>, arg1: integer): void
public "canHarmPlayer"(arg0: $Player$$Type): boolean
public "playNotifySound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
public "doCloseContainer"(): void
public "awardRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "awardRecipesByKey"(arg0: $List$$Type<($ResourceLocation$$Type)>): void
public "openTextEdit"(arg0: $SignBlockEntity$$Type, arg1: boolean): void
public "openCommandBlock"(arg0: $CommandBlockEntity$$Type): void
public "startSleepInBed"(arg0: $BlockPos$$Type): $Either<($Player$BedSleepingProblem), ($Unit)>
public "openHorseInventory"(arg0: $AbstractHorse$$Type, arg1: $Container$$Type): void
public "startSleeping"(arg0: $BlockPos$$Type): void
public "sendMerchantOffers"(arg0: integer, arg1: $MerchantOffers$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): void
public "resetRecipes"(arg0: $Collection$$Type<($RecipeHolder$$Type<(never)>)>): integer
public "openItemGui"(arg0: $ItemStack$$Type, arg1: $InteractionHand$$Type): void
public "attack"(arg0: $Entity$$Type): void
public "isCreative"(): boolean
public "swing"(arg0: $InteractionHand$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "adjustSpawnLocation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $BlockPos
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Vec3$$Type): void
public "lookAt"(arg0: $EntityAnchorArgument$Anchor$$Type, arg1: $Entity$$Type, arg2: $EntityAnchorArgument$Anchor$$Type): void
public "isSpectator"(): boolean
public "getAdvancements"(): $PlayerAdvancements
public "isTextFilteringEnabled"(): boolean
public "updateOptions"(arg0: $ClientInformation$$Type): void
public "awardKillScore"(arg0: $Entity$$Type, arg1: integer, arg2: $DamageSource$$Type): void
public "startRiding"(arg0: $Entity$$Type, arg1: boolean): boolean
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "onInsideBlock"(arg0: $BlockState$$Type): void
public "resetFallDistance"(): void
public "stopRiding"(): void
public "setExperienceLevels"(arg0: integer): void
public "trackStartFallingPosition"(): void
public "requestedViewDistance"(): integer
public "checkRidingStatistics"(arg0: double, arg1: double, arg2: double): void
public "setExperiencePoints"(arg0: integer): void
public "resetLastActionTime"(): void
public "getTabListDisplayName"(): $Component
public "copyRespawnPosition"(arg0: $ServerPlayer$$Type): void
public "getChunkTrackingView"(): $ChunkTrackingView
public "setChunkTrackingView"(arg0: $ChunkTrackingView$$Type): void
public "createCommonSpawnInfo"(arg0: $ServerLevel$$Type): $CommonPlayerSpawnInfo
public "shouldFilterMessageTo"(arg0: $ServerPlayer$$Type): boolean
public "hasChangedDimension"(): void
public "checkMovementStatistics"(arg0: double, arg1: double, arg2: double): void
public "setTabListHeaderFooter"(arg0: $Component$$Type, arg1: $Component$$Type): void
public "isChangingDimension"(): boolean
public "getStats"(): $PlayerStatsJS
public "setMouseItem"(item: $ItemStack$$Type): void
/**
 * Checks, whether the player is currently mining a block.
 */
public "isMiningBlock"(): boolean
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
/**
 * Checks if the entity is a server-side player.
 */
public "isServerPlayer"(): boolean
public "notify"(builder: $NotificationToastData$$Type): void
/**
 * Bans the player from the server.
 * 
 * @param banner - A string, that specifies who/what banned the player.
 * @param reason - A string, that contains the ban reason.
 * @param banDuration - Duration of a ban. Negative durations will result in a 10-year ban.
 */
public "ban"(banner: StringJS, reason: StringJS, banDuration: $Duration$$Type): void
/**
 * Heals the player to full, and fully restores hunger and saturation.
 */
public "heal"(): void
/**
 * Kicks the player from the server with a generic reason.
 */
public "kick"(): void
/**
 * Kicks the player from the server with the provided reason.
 * 
 * @param reason - A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
 */
public "kick"(reason: $Component$$Type): void
/**
 * Checks, whether the player is a server operator.
 */
public "isOp"(): boolean
public "openChestGUI"(gui: $Consumer$$Type<($KubeJSGUI)>): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<($ChestMenuData)>): void
public "setSelectedSlot"(index: integer): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "setSpawnLocation"(c: $LevelBlock$$Type): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer, rows: integer): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type, columns: integer): void
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
/**
 * Switches the player's gamemode between Creative and Survival.
 * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
 * 
 * @param mode - `true` to change the player's gamemode to Creative.
 * `false` to change the player's gamemode to Survival.
 */
public "setCreativeMode"(mode: boolean): void
public "captureInventory"(autoRestore: boolean): $Container
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "getSpawnLocation"(): $LevelBlock
public "lithium$getCachedFeetBlockState"(): $BlockState
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
get "language"(): StringJS
get "statsCounter"(): $ServerStatsCounter
get "lastSectionPos"(): $SectionPos
get "lastActionTime"(): long
get "tabListFooter"(): $Component
set "tabListFooter"(value: $Component$$Type)
get "textFilter"(): $TextFilter
get "chatSession"(): $RemoteChatSession
get "tabListHeader"(): $Component
set "knownMovement"(value: $Vec3$$Type)
get "chatVisibility"(): $ChatVisiblity
set "lastSectionPos"(value: $SectionPos$$Type)
set "chatSession"(value: $RemoteChatSession$$Type)
set "tabListHeader"(value: $Component$$Type)
get "respawnPosition"(): $BlockPos
get "respawnDimension"(): $ResourceKey<($Level)>
get "knownMovement"(): $Vec3
set "raidOmenPosition"(value: $BlockPos$$Type)
get "raidOmenPosition"(): $BlockPos
get "respawnAngle"(): float
get "ipAddress"(): StringJS
get "respawnForced"(): boolean
get "wardenSpawnTracker"(): $Optional<($WardenSpawnTracker)>
set "spawnExtraParticlesOnFall"(value: boolean)
get "recipeBook"(): $ServerRecipeBook
set "camera"(value: $Entity$$Type)
get "camera"(): $Entity
get "creative"(): boolean
get "spectator"(): boolean
get "advancements"(): $PlayerAdvancements
get "textFilteringEnabled"(): boolean
set "experienceLevels"(value: integer)
set "experiencePoints"(value: integer)
get "tabListDisplayName"(): $Component
get "chunkTrackingView"(): $ChunkTrackingView
set "chunkTrackingView"(value: $ChunkTrackingView$$Type)
get "changingDimension"(): boolean
get "stats"(): $PlayerStatsJS
set "mouseItem"(value: $ItemStack$$Type)
get "miningBlock"(): boolean
get "serverPlayer"(): boolean
get "op"(): boolean
set "selectedSlot"(value: integer)
set "activePostShader"(value: $ResourceLocation$$Type)
set "spawnLocation"(value: $LevelBlock$$Type)
set "creativeMode"(value: boolean)
get "spawnLocation"(): $LevelBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayer$$Type = ($ServerPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayer$$Original = $ServerPlayer;}
declare module "net.minecraft.server.level.BlockDestructionProgress" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockDestructionProgress implements $Comparable$$Interface<($BlockDestructionProgress)> {
constructor(arg0: integer, arg1: $BlockPos$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $BlockDestructionProgress$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): integer
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "updateTick"(arg0: integer): void
public "getPos"(): $BlockPos
public "getUpdatedRenderTick"(): integer
get "id"(): integer
get "progress"(): integer
set "progress"(value: integer)
get "pos"(): $BlockPos
get "updatedRenderTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDestructionProgress$$Type = ($BlockDestructionProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDestructionProgress$$Original = $BlockDestructionProgress;}
declare module "net.minecraft.server.level.GenerationChunkHolder" {
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$List} from "java.util.List"
import {$ImposterProtoChunk$$Type} from "net.minecraft.world.level.chunk.ImposterProtoChunk"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$AtomicReferenceArray} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$FullChunkStatus} from "net.minecraft.server.level.FullChunkStatus"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GenerationChunkHolderAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.world.chunk_access.GenerationChunkHolderAccessor"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"

export class $GenerationChunkHolder implements $GenerationChunkHolderAccessor$$Interface {
 "currentlyLoading": $LevelChunk
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type)

public "replaceProtoChunk"(arg0: $ImposterProtoChunk$$Type): void
public "getTicketLevel"(): integer
public "increaseGenerationRefCount"(): void
public "getGenerationRefCount"(): integer
public "decreaseGenerationRefCount"(): void
public "getChunkIfPresentUnchecked"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
public "getFullStatus"(): $FullChunkStatus
public "scheduleChunkGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkMap$$Type): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray
public "getPersistedStatus"(): $ChunkStatus
public "getPos"(): $ChunkPos
public "getChunkIfPresent"(arg0: $ChunkStatus$$Type): $ChunkAccess
public "getLatestStatus"(): $ChunkStatus
public "getLatestChunk"(): $ChunkAccess
public "getQueueLevel"(): integer
public "getAllFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
get "ticketLevel"(): integer
get "generationRefCount"(): integer
get "fullStatus"(): $FullChunkStatus
get "persistedStatus"(): $ChunkStatus
get "pos"(): $ChunkPos
get "latestStatus"(): $ChunkStatus
get "latestChunk"(): $ChunkAccess
get "queueLevel"(): integer
get "allFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationChunkHolder$$Type = ($GenerationChunkHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenerationChunkHolder$$Original = $GenerationChunkHolder;}
declare module "net.minecraft.server.level.GeneratingChunkMap" {
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkGenerationTask} from "net.minecraft.server.level.ChunkGenerationTask"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"

export interface $GeneratingChunkMap$$Interface {
}

export class $GeneratingChunkMap implements $GeneratingChunkMap$$Interface {
 "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
 "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
 "runGenerationTasks"(): void
 "acquireGeneration"(arg0: long): $GenerationChunkHolder
 "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratingChunkMap$$Type = ($GeneratingChunkMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratingChunkMap$$Original = $GeneratingChunkMap;}
declare module "net.minecraft.server.level.progress.ChunkProgressListenerFactory" {
import {$ChunkProgressListener, $ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"

export interface $ChunkProgressListenerFactory$$Interface {

(arg0: integer): $ChunkProgressListener$$Type
}

export class $ChunkProgressListenerFactory implements $ChunkProgressListenerFactory$$Interface {
 "create"(arg0: integer): $ChunkProgressListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkProgressListenerFactory$$Type = ((arg0: integer) => $ChunkProgressListener$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkProgressListenerFactory$$Original = $ChunkProgressListenerFactory;}
declare module "net.minecraft.server.level.progress.ChunkProgressListener" {
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export interface $ChunkProgressListener$$Interface {
}

export class $ChunkProgressListener implements $ChunkProgressListener$$Interface {
 "start"(): void
 "stop"(): void
static "calculateDiameter"(arg0: integer): integer
 "onStatusChange"(arg0: $ChunkPos$$Type, arg1: $ChunkStatus$$Type): void
 "updateSpawnPos"(arg0: $ChunkPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkProgressListener$$Type = ($ChunkProgressListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkProgressListener$$Original = $ChunkProgressListener;}
declare module "net.minecraft.server.level.ChunkResult" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$Throwable} from "java.lang.Throwable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ChunkResult$$Interface<T> {
get "success"(): boolean
}

export class $ChunkResult<T> implements $ChunkResult$$Interface {
 "map"<R>(arg0: $Function$$Type<(T), (R)>): $ChunkResult<(R)>
static "of"<T>(arg0: T): $ChunkResult<(T)>
 "orElse"(arg0: T): T
static "orElse"<R>(arg0: $ChunkResult$$Type<(R)>, arg1: R): R
 "orElseThrow"<E extends $Throwable>(arg0: $Supplier$$Type<(E)>): T
static "error"<T>(arg0: $Supplier$$Type<(StringJS)>): $ChunkResult<(T)>
static "error"<T>(arg0: StringJS): $ChunkResult<(T)>
 "getError"(): StringJS
 "isSuccess"(): boolean
 "ifSuccess"(arg0: $Consumer$$Type<(T)>): $ChunkResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkResult$$Type<T> = ($ChunkResult<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkResult$$Original<T> = $ChunkResult<(T)>;}
declare module "net.minecraft.server.level.ServerBossEvent" {
import {$BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$Collection} from "java.util.Collection"
import {$BossEvent} from "net.minecraft.world.BossEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $ServerBossEvent extends $BossEvent {
constructor(arg0: $Component$$Type, arg1: $BossEvent$BossBarColor$$Type, arg2: $BossEvent$BossBarOverlay$$Type)

public "setName"(arg0: $Component$$Type): void
public "setColor"(arg0: $BossEvent$BossBarColor$$Type): void
public "isVisible"(): boolean
public "setCreateWorldFog"(arg0: boolean): $BossEvent
public "setPlayBossMusic"(arg0: boolean): $BossEvent
public "setDarkenScreen"(arg0: boolean): $BossEvent
public "setProgress"(arg0: float): void
public "removePlayer"(arg0: $ServerPlayer$$Type): void
public "addPlayer"(arg0: $ServerPlayer$$Type): void
public "getPlayers"(): $Collection<($ServerPlayer)>
public "setVisible"(arg0: boolean): void
public "removeAllPlayers"(): void
public "setOverlay"(arg0: $BossEvent$BossBarOverlay$$Type): void
set "name"(value: $Component$$Type)
set "color"(value: $BossEvent$BossBarColor$$Type)
get "visible"(): boolean
set "createWorldFog"(value: boolean)
set "playBossMusic"(value: boolean)
set "darkenScreen"(value: boolean)
set "progress"(value: float)
get "players"(): $Collection<($ServerPlayer)>
set "visible"(value: boolean)
set "overlay"(value: $BossEvent$BossBarOverlay$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerBossEvent$$Type = ($ServerBossEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerBossEvent$$Original = $ServerBossEvent;}
declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkTaskPriorityQueueSorter$Message<T> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTaskPriorityQueueSorter$Message$$Type<T> = ($ChunkTaskPriorityQueueSorter$Message<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTaskPriorityQueueSorter$Message$$Original<T> = $ChunkTaskPriorityQueueSorter$Message<(T)>;}
declare module "net.minecraft.server.level.ServerEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$PacketAndPayloadAcceptor$$Type} from "net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ServerEntity {
static readonly "FORCED_POS_UPDATE_PERIOD": integer

constructor(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: integer, arg3: boolean, arg4: $Consumer$$Type<($Packet<(never)>)>)

public "addPairing"(arg0: $ServerPlayer$$Type): void
public "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $PacketAndPayloadAcceptor$$Type<($ClientGamePacketListener$$Type)>): void
public "getLastSentMovement"(): $Vec3
public "getPositionBase"(): $Vec3
public "getLastSentXRot"(): float
public "getLastSentYRot"(): float
public "sendChanges"(): void
public "getLastSentYHeadRot"(): float
public "removePairing"(arg0: $ServerPlayer$$Type): void
get "lastSentMovement"(): $Vec3
get "positionBase"(): $Vec3
get "lastSentXRot"(): float
get "lastSentYRot"(): float
get "lastSentYHeadRot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEntity$$Type = ($ServerEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerEntity$$Original = $ServerEntity;}
declare module "net.minecraft.server.level.progress.StoringChunkProgressListener" {
import {$ChunkProgressListener$$Interface} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export class $StoringChunkProgressListener implements $ChunkProgressListener$$Interface {
public "start"(): void
public "stop"(): void
public static "create"(arg0: integer): $StoringChunkProgressListener
public "getStatus"(arg0: integer, arg1: integer): $ChunkStatus
public "getFullDiameter"(): integer
public "getDiameter"(): integer
public "onStatusChange"(arg0: $ChunkPos$$Type, arg1: $ChunkStatus$$Type): void
public "updateSpawnPos"(arg0: $ChunkPos$$Type): void
public "getProgress"(): integer
public static "createCompleted"(): $StoringChunkProgressListener
public static "createFromGameruleRadius"(arg0: integer): $StoringChunkProgressListener
public static "calculateDiameter"(arg0: integer): integer
get "fullDiameter"(): integer
get "diameter"(): integer
get "progress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoringChunkProgressListener$$Type = ($StoringChunkProgressListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoringChunkProgressListener$$Original = $StoringChunkProgressListener;}
declare module "net.minecraft.server.level.ChunkGenerationTask" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$GeneratingChunkMap$$Type} from "net.minecraft.server.level.GeneratingChunkMap"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkGenerationTask {
readonly "targetStatus": $ChunkStatus

public static "create"(arg0: $GeneratingChunkMap$$Type, arg1: $ChunkStatus$$Type, arg2: $ChunkPos$$Type): $ChunkGenerationTask
public "getCenter"(): $GenerationChunkHolder
public "markForCancellation"(): void
public "runUntilWait"(): $CompletableFuture<(never)>
get "center"(): $GenerationChunkHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkGenerationTask$$Type = ($ChunkGenerationTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkGenerationTask$$Original = $ChunkGenerationTask;}
declare module "net.minecraft.server.level.ChunkTrackingView" {
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ChunkTrackingView$$Interface {
}

export class $ChunkTrackingView implements $ChunkTrackingView$$Interface {
static readonly "EMPTY": $ChunkTrackingView

static "of"(arg0: $ChunkPos$$Type, arg1: integer): $ChunkTrackingView
 "contains"(arg0: integer, arg1: integer, arg2: boolean): boolean
 "contains"(arg0: integer, arg1: integer): boolean
 "contains"(arg0: $ChunkPos$$Type): boolean
 "forEach"(arg0: $Consumer$$Type<($ChunkPos)>): void
static "difference"(arg0: $ChunkTrackingView$$Type, arg1: $ChunkTrackingView$$Type, arg2: $Consumer$$Type<($ChunkPos)>, arg3: $Consumer$$Type<($ChunkPos)>): void
 "isInViewDistance"(arg0: integer, arg1: integer): boolean
static "isInViewDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): boolean
static "isWithinDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackingView$$Type = ($ChunkTrackingView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkTrackingView$$Original = $ChunkTrackingView;}
declare module "net.minecraft.server.level.ThreadedLevelLightEngine" {
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ProcessorMailbox$$Type} from "net.minecraft.util.thread.ProcessorMailbox"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle$$Type} from "net.minecraft.util.thread.ProcessorHandle"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$ChunkTaskPriorityQueueSorter$Message$$Type} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$DataLayer$$Type} from "net.minecraft.world.level.chunk.DataLayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable$$Interface {
static readonly "DEFAULT_BATCH_SIZE": integer
static readonly "LIGHT_SECTION_PADDING": integer

constructor(arg0: $LightChunkGetter$$Type, arg1: $ChunkMap$$Type, arg2: boolean, arg3: $ProcessorMailbox$$Type<($Runnable$$Type)>, arg4: $ProcessorHandle$$Type<($ChunkTaskPriorityQueueSorter$Message$$Type<($Runnable$$Type)>)>)

public "close"(): void
public "tryScheduleUpdate"(): void
public "queueSectionData"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type, arg2: $DataLayer$$Type): void
public "initializeLight"(arg0: $ChunkAccess$$Type, arg1: boolean): $CompletableFuture<($ChunkAccess)>
public "propagateLightSources"(arg0: $ChunkPos$$Type): void
public "waitForPendingTasks"(arg0: integer, arg1: integer): $CompletableFuture<(never)>
public "checkBlock"(arg0: $BlockPos$$Type): void
public "setLightEnabled"(arg0: $ChunkPos$$Type, arg1: boolean): void
public "runLightUpdates"(): integer
public "updateSectionStatus"(arg0: $SectionPos$$Type, arg1: boolean): void
public "lightChunk"(arg0: $ChunkAccess$$Type, arg1: boolean): $CompletableFuture<($ChunkAccess)>
public "retainData"(arg0: $ChunkPos$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedLevelLightEngine$$Type = ($ThreadedLevelLightEngine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreadedLevelLightEngine$$Original = $ThreadedLevelLightEngine;}
declare module "net.minecraft.server.level.ChunkHolder" {
import {$LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkHolder$LevelChangeListener$$Type} from "net.minecraft.server.level.ChunkHolder$LevelChangeListener"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ChunkHolderExtended$$Interface} from "net.caffeinemc.mods.lithium.common.world.chunk.ChunkHolderExtended"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkHolder$PlayerProvider$$Type} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenerationChunkHolder} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkHolderExtended$$Interface {
 "currentlyLoading": $LevelChunk
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_LEVEL_CHUNK": $ChunkResult<($LevelChunk)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(arg0: $ChunkPos$$Type, arg1: integer, arg2: $LevelHeightAccessor$$Type, arg3: $LevelLightEngine$$Type, arg4: $ChunkHolder$LevelChangeListener$$Type, arg5: $ChunkHolder$PlayerProvider$$Type)

public "broadcastChanges"(arg0: $LevelChunk$$Type): void
public "getTicketLevel"(): integer
public "wasAccessibleSinceLastSave"(): boolean
public "refreshAccessibility"(): void
public "sectionLightChanged"(arg0: $LightLayer$$Type, arg1: integer): void
public "getTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "lithium$updateLastAccessTime"(arg0: long): boolean
public "blockChanged"(arg0: $BlockPos$$Type): void
public "getTickingChunk"(): $LevelChunk
public "getFullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "setTicketLevel"(arg0: integer): void
public "getSaveSyncFuture"(): $CompletableFuture<(never)>
public "getSendSyncFuture"(): $CompletableFuture<(never)>
public "addSendDependency"(arg0: $CompletableFuture$$Type<(never)>): void
public "getQueueLevel"(): integer
public "isReadyForSaving"(): boolean
public "getChunkToSend"(): $LevelChunk
public "getEntityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "ticketLevel"(): integer
get "tickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "tickingChunk"(): $LevelChunk
get "fullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
set "ticketLevel"(value: integer)
get "saveSyncFuture"(): $CompletableFuture<(never)>
get "sendSyncFuture"(): $CompletableFuture<(never)>
get "queueLevel"(): integer
get "readyForSaving"(): boolean
get "chunkToSend"(): $LevelChunk
get "entityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolder$$Type = ($ChunkHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkHolder$$Original = $ChunkHolder;}
declare module "net.minecraft.server.level.ChunkMap" {
import {$DimensionDataStorage$$Type} from "net.minecraft.world.level.storage.DimensionDataStorage"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$IllegalStateException$$Type} from "java.lang.IllegalStateException"
import {$ChunkResult} from "net.minecraft.server.level.ChunkResult"
import {$ChunkStep$$Type} from "net.minecraft.world.level.chunk.status.ChunkStep"
import {$List, $List$$Type} from "java.util.List"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ChunkTaskPriorityQueueSorter$Message$$Type} from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ChunkStorage} from "net.minecraft.world.level.chunk.storage.ChunkStorage"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ChunkGenerationTask} from "net.minecraft.server.level.ChunkGenerationTask"
import {$StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$DistanceManager} from "net.minecraft.server.level.DistanceManager"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$BlockableEventLoop$$Type} from "net.minecraft.util.thread.BlockableEventLoop"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$GeneratingChunkMap$$Interface} from "net.minecraft.server.level.GeneratingChunkMap"
import {$ChunkStatusUpdateListener$$Type} from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import {$ChunkHolder$PlayerProvider$$Interface} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"

export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider$$Interface, $GeneratingChunkMap$$Interface {
readonly "level": $ServerLevel
static readonly "MIN_VIEW_DISTANCE": integer
static readonly "MAX_VIEW_DISTANCE": integer
static readonly "FORCED_TICKET_LEVEL": integer
static readonly "LAST_MONOLYTH_STRUCTURE_DATA_VERSION": integer

constructor(arg0: $ServerLevel$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $DataFixer$$Type, arg3: $StructureTemplateManager$$Type, arg4: $Executor$$Type, arg5: $BlockableEventLoop$$Type<($Runnable$$Type)>, arg6: $LightChunkGetter$$Type, arg7: $ChunkGenerator$$Type, arg8: $ChunkProgressListener$$Type, arg9: $ChunkStatusUpdateListener$$Type, arg10: $Supplier$$Type<($DimensionDataStorage$$Type)>, arg11: integer, arg12: boolean)

public "size"(): integer
public "close"(): void
public "broadcast"(arg0: $Entity$$Type, arg1: $Packet$$Type<(never)>): void
public "move"(arg0: $ServerPlayer$$Type): void
public "prepareEntityTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "prepareTickingChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "scheduleGenerationTask"(arg0: $ChunkStatus$$Type, arg1: $ChunkPos$$Type): $ChunkGenerationTask
public "prepareAccessibleChunk"(arg0: $ChunkHolder$$Type): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getPlayersCloseForSpawning"(arg0: $ChunkPos$$Type): $List<($ServerPlayer)>
public "getVisibleChunkIfPresent"(arg0: long): $ChunkHolder
public "debugFuturesAndCreateReportedException"(arg0: $IllegalStateException$$Type, arg1: StringJS): $ReportedException
public "waitForLightBeforeSending"(arg0: $ChunkPos$$Type, arg1: integer): void
public "hasWork"(): boolean
public "getDistanceManager"(): $DistanceManager
public "getPlayers"(arg0: $ChunkPos$$Type, arg1: boolean): $List<($ServerPlayer)>
public "getPlayersWatching"(arg0: $Entity$$Type): $List<($ServerPlayer)>
public "getStorageName"(): StringJS
public "resendBiomesForChunks"(arg0: $List$$Type<($ChunkAccess$$Type)>): void
public "applyStep"(arg0: $GenerationChunkHolder$$Type, arg1: $ChunkStep$$Type, arg2: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>): $CompletableFuture<($ChunkAccess)>
public "runGenerationTasks"(): void
public "getChunkDebugData"(arg0: $ChunkPos$$Type): StringJS
public "acquireGeneration"(arg0: long): $GenerationChunkHolder
public "releaseGeneration"(arg0: $GenerationChunkHolder$$Type): void
public "getChunkToSend"(arg0: long): $LevelChunk
public "scheduleOnMainThreadMailbox"(arg0: $ChunkTaskPriorityQueueSorter$Message$$Type<($Runnable$$Type)>): void
public "getTickingGenerated"(): integer
get "distanceManager"(): $DistanceManager
get "storageName"(): StringJS
get "tickingGenerated"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMap$$Type = ($ChunkMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMap$$Original = $ChunkMap;}
declare module "net.minecraft.server.level.DistanceManager" {
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$TicketType$$Type} from "net.minecraft.server.level.TicketType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export class $DistanceManager {
public "getNaturalSpawnChunkCount"(): integer
public "inEntityTickingRange"(arg0: long): boolean
public "inBlockTickingRange"(arg0: long): boolean
public "updateSimulationDistance"(arg0: integer): void
public "removePlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "runAllUpdates"(arg0: $ChunkMap$$Type): boolean
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "addRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeRegionTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T, arg4: boolean): void
public "getDebugStatus"(): StringJS
public "addPlayer"(arg0: $SectionPos$$Type, arg1: $ServerPlayer$$Type): void
public "hasTickets"(): boolean
public "shouldForceTicks"(arg0: long): boolean
public "removeTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "hasPlayersNearby"(arg0: long): boolean
public "addTicket"<T>(arg0: $TicketType$$Type<(T)>, arg1: $ChunkPos$$Type, arg2: integer, arg3: T): void
public "removeTicketsOnClosing"(): void
get "naturalSpawnChunkCount"(): integer
get "debugStatus"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceManager$$Type = ($DistanceManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DistanceManager$$Original = $DistanceManager;}
declare module "net.minecraft.server.level.ServerPlayer$RespawnPosAngle" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ServerPlayer$RespawnPosAngle extends $Record {
constructor(position: $Vec3$$Type, yaw: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vec3
public static "of"(arg0: $Vec3$$Type, arg1: $BlockPos$$Type): $ServerPlayer$RespawnPosAngle
public "yaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayer$RespawnPosAngle$$Type = ({"yaw"?: float, "position"?: $Vec3$$Type}) | ([yaw?: float, position?: $Vec3$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayer$RespawnPosAngle$$Original = $ServerPlayer$RespawnPosAngle;}
declare module "net.minecraft.server.level.ServerPlayerGameMode" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $ServerPlayerGameMode {
 "isDestroyingBlock": boolean

constructor(arg0: $ServerPlayer$$Type)

public "tick"(): void
public "setLevel"(arg0: $ServerLevel$$Type): void
public "handleBlockBreakAction"(arg0: $BlockPos$$Type, arg1: $ServerboundPlayerActionPacket$Action$$Type, arg2: $Direction$$Type, arg3: integer, arg4: integer): void
public "isSurvival"(): boolean
public "destroyBlock"(arg0: $BlockPos$$Type): boolean
public "destroyAndAck"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS): void
public "getPreviousGameModeForPlayer"(): $GameType
public "useItemOn"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "useItem"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "isCreative"(): boolean
public "getGameModeForPlayer"(): $GameType
public "changeGameModeForPlayer"(arg0: $GameType$$Type): boolean
set "level"(value: $ServerLevel$$Type)
get "survival"(): boolean
get "previousGameModeForPlayer"(): $GameType
get "creative"(): boolean
get "gameModeForPlayer"(): $GameType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerGameMode$$Type = ($ServerPlayerGameMode);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerGameMode$$Original = $ServerPlayerGameMode;}
