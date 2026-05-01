declare module "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IThirdPersonAnimationProvider$$Interface {
get "twoHanded"(): boolean
}

export class $IThirdPersonAnimationProvider implements $IThirdPersonAnimationProvider$$Interface {
static "get"(target: $Item$$Type): $IThirdPersonAnimationProvider
 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type): boolean
 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type): boolean
static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
 "isTwoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonAnimationProvider$$Type = ($IThirdPersonAnimationProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IThirdPersonAnimationProvider$$Original = $IThirdPersonAnimationProvider;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.LightningStruckBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$ILightningStruckBlockEvent, $ILightningStruckBlockEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent$$Interface {
constructor(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type)

public "getEntity"(): $LightningBolt
public "getState"(): $BlockState
public static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "entity"(): $LightningBolt
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningStruckBlockEvent$$Type = ($LightningStruckBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningStruckBlockEvent$$Original = $LightningStruckBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FoodProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FoodProvider {
static readonly "CODEC": $Codec<($FoodProvider)>
static readonly "CUSTOM_PROVIDERS": $Map<($Item), ($FoodProvider)>
static readonly "EMPTY": $FoodProvider

public "isEmpty"(): boolean
public static "create"(item: $Item$$Type, divider: integer): $FoodProvider
public "consume"(player: $Player$$Type, world: $Level$$Type, nbtApplier: $Consumer$$Type<($ItemStack)>): boolean
public "getFoodItem"(): $Item
public "getDivider"(): integer
get "empty"(): boolean
get "foodItem"(): $Item
get "divider"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProvider$$Type = ($FoodProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodProvider$$Original = $FoodProvider;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.SpawnBoxSettings" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$Record} from "java.lang.Record"

export class $SpawnBoxSettings extends $Record {
static readonly "CODEC": $Codec<($SpawnBoxSettings)>
static readonly "EMPTY": $SpawnBoxSettings

constructor(spawnOverrides: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>)

public "get"(boxID: StringJS, category: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "spawnOverrides"(): $Map<($MobCategory), ($Map<(StringJS), ($WeightedRandomList<($MobSpawnSettings$SpawnerData)>)>)>
public "hasCategory"(category: $MobCategory$$Type): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnBoxSettings$$Type = ({"spawnOverrides"?: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>}) | ([spawnOverrides?: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnBoxSettings$$Original = $SpawnBoxSettings;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid" {
import {$FoodProvider} from "net.mehvahdjukaar.moonlight.api.fluids.FoodProvider"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$FluidContainerList} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList"
import {$SoftFluid$TintMethod} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid$TintMethod"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Triplet} from "net.mehvahdjukaar.moonlight.api.misc.Triplet"

export class $SoftFluid {
static readonly "BOTTLE_COUNT": integer
readonly "isGenerated": boolean
static readonly "CODEC": $Codec<($SoftFluid)>
static readonly "BUCKET_COUNT": integer
static readonly "HOLDER_CODEC": $Codec<($Holder<($SoftFluid)>)>
static readonly "TRANSLATABLE_COMPONENT": $Codec<($Component)>
static readonly "BOWL_COUNT": integer
static readonly "WATER_BUCKET_COUNT": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($SoftFluid)>)>

constructor(fluid: $Holder$$Type<($Fluid)>)

public "isEnabled"(): boolean
public "getTranslatedName"(): $Component
public "getEmptyContainer"(filledContainer: $Item$$Type): $Optional<($Item)>
public "getContainerList"(): $FluidContainerList
public "getEquivalentFluids"(): $HolderSet<($Fluid)>
public "isEquivalent"(fluid: $Holder$$Type<($Fluid)>): boolean
public static "getFluidSpecificAttributes"(fluid: $Fluid$$Type): $Pair<(integer), ($Component)>
public "getPreservedComponents"(): $HolderSet<($DataComponentType<(never)>)>
public "getAverageTextureTintColor"(): integer
public "isColored"(): boolean
public "afterInit"(): void
public "isFood"(): boolean
public "getFlowingTexture"(): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
public "getTintColor"(): integer
/**
 * 
 * @deprecated
 */
public "isEmptyFluid"(): boolean
public "getFilledContainer"(emptyContainer: $Item$$Type): $Optional<($Item)>
public "getLuminosity"(): integer
public "getEmissivity"(): integer
public "getTintMethod"(): $SoftFluid$TintMethod
public static "getRenderingData"(useTexturesFrom: $ResourceLocation$$Type): $Triplet<($ResourceLocation), ($ResourceLocation), (integer)>
public "getTextureOverride"(): $ResourceLocation
public "getFoodProvider"(): $FoodProvider
public "getVanillaFluid"(): $Holder<($Fluid)>
get "enabled"(): boolean
get "translatedName"(): $Component
get "containerList"(): $FluidContainerList
get "equivalentFluids"(): $HolderSet<($Fluid)>
get "preservedComponents"(): $HolderSet<($DataComponentType<(never)>)>
get "averageTextureTintColor"(): integer
get "colored"(): boolean
get "food"(): boolean
get "flowingTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "tintColor"(): integer
get "emptyFluid"(): boolean
get "luminosity"(): integer
get "emissivity"(): integer
get "tintMethod"(): $SoftFluid$TintMethod
get "textureOverride"(): $ResourceLocation
get "foodProvider"(): $FoodProvider
get "vanillaFluid"(): $Holder<($Fluid)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightSoftFluid
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightSoftFluidTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$$Type = (Special.MoonlightSoftFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoftFluid$$Original = $SoftFluid;}
declare module "net.mehvahdjukaar.moonlight.api.misc.Triplet" {
import {$Record} from "java.lang.Record"

export class $Triplet<L, M, R> extends $Record {
constructor(left: L, middle: M, right: R)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<A, B, C>(left: A, middle: B, right: C): $Triplet<(A), (B), (C)>
public "left"(): L
public "right"(): R
public "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triplet$$Type<L, M, R> = ({"right"?: R, "left"?: L, "middle"?: M}) | ([right?: R, left?: L, middle?: M]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Triplet$$Original<L, M, R> = $Triplet<(L), (M), (R)>;}
declare module "net.mehvahdjukaar.moonlight.api.client.ModFluidRenderProperties" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$FogShape$$Type} from "com.mojang.blaze3d.shaders.FogShape"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Interface} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FogRenderer$FogMode$$Type} from "net.minecraft.client.renderer.FogRenderer$FogMode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModFluidRenderProperties implements $IClientFluidTypeExtensions$$Interface {
constructor(still: $ResourceLocation$$Type, flowing: $ResourceLocation$$Type, tint: integer)
constructor(still: $ResourceLocation$$Type, flowing: $ResourceLocation$$Type)

public "getRenderOverlayTexture"(mc: $Minecraft$$Type): $ResourceLocation
public "getOverlayTexture"(): $ResourceLocation
public "getOverlayTexture"(state: $FluidState$$Type, getter: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
public "getFlowingTexture"(): $ResourceLocation
public "getFlowingTexture"(state: $FluidState$$Type, getter: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
public "getStillTexture"(state: $FluidState$$Type, getter: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
public "getTintColor"(): integer
public "getTintColor"(state: $FluidState$$Type, getter: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
public "modifyFogColor"(camera: $Camera$$Type, partialTick: float, level: $ClientLevel$$Type, renderDistance: integer, darkenWorldAmount: float, fluidFogColor: $Vector3f$$Type): $Vector3f
public "modifyFogRender"(camera: $Camera$$Type, mode: $FogRenderer$FogMode$$Type, renderDistance: float, partialTick: float, nearDistance: float, farDistance: float, shape: $FogShape$$Type): void
public static "of"(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
public "getOverlayTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "renderOverlay"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type): void
public "renderFluid"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $BlockState$$Type): boolean
public "getFlowingTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "getStillTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "getTintColor"(arg0: $FluidStack$$Type): integer
get "overlayTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "tintColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFluidRenderProperties$$Type = ($ModFluidRenderProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFluidRenderProperties$$Original = $ModFluidRenderProperties;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.FireConsumeBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFireConsumeBlockEvent, $IFireConsumeBlockEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent$$Interface {
constructor(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasTurnedToFire: boolean)

public "wasReplacedByFire"(): boolean
public "getChance"(): integer
public "getFinalState"(): $BlockState
public "getFace"(): $Direction
public "getAge"(): integer
public "setFinalState"(state: $BlockState$$Type): void
public "getState"(): $BlockState
public static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasReplacedByFire: boolean): $IFireConsumeBlockEvent
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "chance"(): integer
get "finalState"(): $BlockState
get "face"(): $Direction
get "age"(): integer
set "finalState"(value: $BlockState$$Type)
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireConsumeBlockEvent$$Type = ($FireConsumeBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireConsumeBlockEvent$$Original = $FireConsumeBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent" {
import {$Map} from "java.util.Map"
import {$MemoryModuleType} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Optional} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Villager, $Villager$$Type} from "net.minecraft.world.entity.npc.Villager"
import {$Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$ExpirableValue} from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import {$Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$VillagerBrainEventInternal} from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"

export interface $IVillagerBrainEvent$$Interface extends $SimpleEvent$$Interface {
get "memories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
get "internal"(): $VillagerBrainEventInternal
get "villager"(): $Villager
}

export class $IVillagerBrainEvent implements $IVillagerBrainEvent$$Interface {
 "scheduleActivity"(arg0: $Activity$$Type, arg1: integer, arg2: integer): void
 "addTaskToActivity"<P extends $Pair<(object), (object)>>(arg0: $Activity$$Type, arg1: P): boolean
 "getMemories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
 "getInternal"(): $VillagerBrainEventInternal
 "addSensor"(arg0: $SensorType$$Type<($Sensor$$Type<($Villager$$Type)>)>): void
 "addOrReplaceActivity"(arg0: $Activity$$Type, arg1: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<($Villager$$Type)>)>)>): void
 "getVillager"(): $Villager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVillagerBrainEvent$$Type = ($IVillagerBrainEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVillagerBrainEvent$$Original = $IVillagerBrainEvent;}
declare module "net.mehvahdjukaar.moonlight.api.map.ExpandedMapData" {
import {$CustomMapData$Type, $CustomMapData$Type$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$Map} from "java.util.Map"
import {$CustomMapData} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$CustomMapData$DirtyCounter} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import {$MLMapMarker, $MLMapMarker$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ExpandedMapData$$Interface {
}

export class $ExpandedMapData implements $ExpandedMapData$$Interface {
 "ml$getCustomData"(): $Map<($CustomMapData$Type<(never), (never)>), ($CustomMapData<(never), (never)>)>
 "ml$setCustomDecorationsDirty"(): void
 "ml$getVanillaDecorationSize"(): integer
 "ml$addCustomMarker"<M extends $MLMapMarker<(object)>>(arg0: M): void
 "ml$toggleCustomDecoration"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
 "ml$removeCustomMarker"(arg0: StringJS): boolean
 "ml$resetCustomDecoration"(): void
 "ml$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$$Type<(never), (never)>, arg1: $Consumer$$Type<(H)>): void
 "ml$getCustomDecorations"(): $Map<(StringJS), ($MLMapDecoration)>
 "ml$getCustomMarkers"(): $Map<(StringJS), ($MLMapMarker<(never)>)>
 "ml$copy"(): $MapItemSavedData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedMapData$$Type = ($ExpandedMapData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExpandedMapData$$Original = $ExpandedMapData;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.ISpawnBoxStructure" {
import {$SpawnBoxSettings, $SpawnBoxSettings$$Type} from "net.mehvahdjukaar.moonlight.api.worldgen.SpawnBoxSettings"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$WeightedRandomList} from "net.minecraft.util.random.WeightedRandomList"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MobSpawnSettings$SpawnerData} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$ISpecialSpawnsStructure$$Interface} from "net.mehvahdjukaar.moonlight.api.worldgen.ISpecialSpawnsStructure"

export interface $ISpawnBoxStructure$$Interface extends $ISpecialSpawnsStructure$$Interface {

(): $SpawnBoxSettings$$Type
}

export class $ISpawnBoxStructure implements $ISpawnBoxStructure$$Interface {
 "ml$getSpecialSpawns"(structureManager: $StructureManager$$Type, structure: $Structure$$Type, pos: $BlockPos$$Type, chunkPosReferences: $LongSet$$Type, category: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
 "ml$getSpawnBoxSettings"(): $SpawnBoxSettings
 "ml$setSpawnBoxSettings"(settings: $SpawnBoxSettings$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpawnBoxStructure$$Type = (() => $SpawnBoxSettings$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpawnBoxStructure$$Original = $ISpawnBoxStructure;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.DropItemOnDeathEvent" {
import {$IDropItemOnDeathEvent, $IDropItemOnDeathEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent$$Interface, $ICancellableEvent$$Interface {
constructor(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean)

public static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
public "isBeforeDrop"(): boolean
public "getReturnItemStack"(): $ItemStack
public "setCanceled"(cancelled: boolean): void
public "getPlayer"(): $Player
public "setReturnItemStack"(stack: $ItemStack$$Type): void
public "getItemStack"(): $ItemStack
public "isCanceled"(): boolean
get "beforeDrop"(): boolean
get "returnItemStack"(): $ItemStack
set "canceled"(value: boolean)
get "player"(): $Player
set "returnItemStack"(value: $ItemStack$$Type)
get "itemStack"(): $ItemStack
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropItemOnDeathEvent$$Type = ($DropItemOnDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropItemOnDeathEvent$$Original = $DropItemOnDeathEvent;}
declare module "net.mehvahdjukaar.moonlight.api.entity.ImprovedProjectileEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level} from "net.minecraft.world.level.Level"
import {$ThrowableItemProjectile} from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $ImprovedProjectileEntity extends $ThrowableItemProjectile {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

public "move"(moverType: $MoverType$$Type, movement: $Vec3$$Type): void
public "tick"(): void
public "hasReachedEndOfLife"(): boolean
public "getDefaultShootVelocity"(): float
public "shoot"(x: double, y: double, z: double, velocity: float, inaccuracy: float): void
public "hasLeftOwner"(): boolean
public "canHarmOwner"(): boolean
public "reachedEndOfLife"(): void
public "spawnTrailParticles"(): void
public "readAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "addAdditionalSaveData"(tag: $CompoundTag$$Type): void
public "isNoPhysics"(): boolean
public "setNoPhysics"(noPhysics: boolean): void
public "shootFromRotation"(shooter: $Entity$$Type, x: float, y: float, z: float, velocity: float, inaccuracy: float): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "defaultShootVelocity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImprovedProjectileEntity$$Type = ($ImprovedProjectileEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImprovedProjectileEntity$$Original = $ImprovedProjectileEntity;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyDataPatch" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CustomMapData$Type, $CustomMapData$Type$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$Map$$Type} from "java.util.Map"
import {$CustomMapData, $CustomMapData$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $CustomMapData$DirtyDataPatch<P, D extends $CustomMapData<(object), (object)>> extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CustomMapData$DirtyDataPatch<(never), (never)>)>

constructor(type: $CustomMapData$Type$$Type<(P), (D)>, patch: P)

public "type"(): $CustomMapData$Type<(P), (D)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(customData: $Map$$Type<($CustomMapData$Type$$Type<(never), (never)>), ($CustomMapData$$Type<(never), (never)>)>): void
public "patch"(): P
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyDataPatch$$Type<P, D> = ({"type"?: $CustomMapData$Type$$Type<(P), (D)>, "patch"?: P}) | ([type?: $CustomMapData$Type$$Type<(P), (D)>, patch?: P]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$DirtyDataPatch$$Original<P, D> = $CustomMapData$DirtyDataPatch<(P), (D)>;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker" {
import {$RecordCodecBuilder$Instance$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RecordCodecBuilder$Mu} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$MLMapDecorationType, $MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $MLMapMarker<D extends $MLMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer
static readonly "REFERENCE_CODEC": $Codec<($MLMapMarker<(never)>)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, component: ($Component$$Type)?, shouldRefresh: (boolean)?, shouldSave: (boolean)?, preventsExtending: boolean)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "getType"(): $Holder<($MLMapDecorationType<(never), (never)>)>
public "getDisplayName"(): $Optional<($Component)>
public "getFlags"(): integer
public "createDecorationFromMarker"(data: $MapItemSavedData$$Type): D
public "shouldRefreshFromWorld"(): boolean
public "hasFlag"(flag: integer): boolean
public "shouldSave"(): boolean
public "preventsExtending"(): boolean
public static "baseCodecGroup"<T extends $MLMapMarker<(object)>>(instance: $RecordCodecBuilder$Instance$$Type<(T)>): $Products$P7<($RecordCodecBuilder$Mu<(T)>), ($Holder<($MLMapDecorationType<(never), (never)>)>), ($BlockPos), (float), ($Optional<($Component)>), ($Optional<(boolean)>), ($Optional<(boolean)>), (boolean)>
public "getMarkerUniqueId"(): StringJS
public "getRotation"(): float
public "getPos"(): $BlockPos
get "type"(): $Holder<($MLMapDecorationType<(never), (never)>)>
get "displayName"(): $Optional<($Component)>
get "flags"(): integer
get "markerUniqueId"(): StringJS
get "rotation"(): float
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapMarker$$Type<D> = ($MLMapMarker<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapMarker$$Original<D> = $MLMapMarker<(D)>;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLJsonMapDecorationType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MLMapDecorationType} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$RuleTest, $RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$SimpleMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.SimpleMapMarker"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $MLJsonMapDecorationType extends $MLMapDecorationType<($MLMapDecoration), ($SimpleMapMarker)> {
static readonly "CODEC": $Codec<($Holder<($MLMapDecorationType<(never), (never)>)>)>
static readonly "DIRECT_CODEC": $Codec<($MLMapDecorationType<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MLMapDecorationType<(never), (never)>)>)>

constructor(target: ($RuleTest$$Type)?, name: ($Component$$Type)?, rotation: float, mapColor: integer, structure: ($HolderSet$$Type<($Structure$$Type)>)?)
constructor(target: ($RuleTest$$Type)?, name: ($Component$$Type)?, rotation: float, mapColor: integer)
constructor(target: ($RuleTest$$Type)?)

public "getTarget"(): $Optional<($RuleTest)>
public "getDisplayName"(): $Optional<($Component)>
public "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
public "createMarkerFromWorld"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $MLMapMarker
public "isFromWorld"(): boolean
public "getCustomFactoryID"(): $ResourceLocation
public "getDefaultMapColor"(): integer
public "getRotation"(): float
get "target"(): $Optional<($RuleTest)>
get "displayName"(): $Optional<($Component)>
get "associatedStructure"(): $Optional<($HolderSet<($Structure)>)>
get "fromWorld"(): boolean
get "customFactoryID"(): $ResourceLocation
get "defaultMapColor"(): integer
get "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLJsonMapDecorationType$$Type = ($MLJsonMapDecorationType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLJsonMapDecorationType$$Original = $MLJsonMapDecorationType;}
declare module "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor} from "net.minecraft.world.level.LevelAccessor"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFireConsumeBlockEvent$$Interface extends $SimpleEvent$$Interface {
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "chance"(): integer
get "finalState"(): $BlockState
get "face"(): $Direction
get "age"(): integer
set "finalState"(value: $BlockState$$Type)
get "pos"(): $BlockPos
}

export class $IFireConsumeBlockEvent implements $IFireConsumeBlockEvent$$Interface {
 "getState"(): $BlockState
static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasReplacedByFire: boolean): $IFireConsumeBlockEvent
 "getLevel"(): $LevelAccessor
 "wasReplacedByFire"(): boolean
 "getChance"(): integer
 "getFinalState"(): $BlockState
 "getFace"(): $Direction
 "getAge"(): integer
 "setFinalState"(arg0: $BlockState$$Type): void
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireConsumeBlockEvent$$Type = ($IFireConsumeBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFireConsumeBlockEvent$$Original = $IFireConsumeBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid$TintMethod" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SoftFluid$TintMethod extends $Enum<($SoftFluid$TintMethod)> implements $StringRepresentable$$Interface {
static readonly "FLOWING": $SoftFluid$TintMethod
static readonly "CODEC": $Codec<($SoftFluid$TintMethod)>
static readonly "STILL_AND_FLOWING": $SoftFluid$TintMethod
static readonly "NO_TINT": $SoftFluid$TintMethod

public static "values"(): ($SoftFluid$TintMethod)[]
public static "valueOf"(name: StringJS): $SoftFluid$TintMethod
public "getSerializedName"(): StringJS
public "appliesToStill"(): boolean
public "appliesToFlowing"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$TintMethod$$Type = (("no_tint") | ("flowing") | ("still_and_flowing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoftFluid$TintMethod$$Original = $SoftFluid$TintMethod;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$WorldSavedData, $WorldSavedData$$Type} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedData"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$WorldSavedDataType$Scope$$Type} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType$Scope"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $WorldSavedDataType<D extends $WorldSavedData> {
static readonly "CODEC": $Codec<($WorldSavedDataType<($WorldSavedData)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WorldSavedDataType<($WorldSavedData)>)>

constructor(id: $ResourceLocation$$Type, overworldToDataConstructor: $Function$$Type<($ServerLevel), (D)>, codec: $Supplier$$Type<($Codec$$Type<(D)>)>, streamCodec: $Supplier$$Type<($StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>)>)
constructor(id: $ResourceLocation$$Type, overworldToDataConstructor: $Function$$Type<($ServerLevel), (D)>, codec: $Supplier$$Type<($Codec$$Type<(D)>)>, streamCodec: $Supplier$$Type<($StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>)>, scope: $WorldSavedDataType$Scope$$Type)

public "getName"(): StringJS
public "getData"(level: $Level$$Type): D
public "getStreamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
public "getCodec"(): $Codec<(D)>
public "setData"(level: $Level$$Type, data: D): void
public "isSyncable"(): boolean
get "name"(): StringJS
get "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
get "codec"(): $Codec<(D)>
get "syncable"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightWorldSavedDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightWorldSavedDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedDataType$$Type<D> = (Special.MoonlightWorldSavedDataType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedDataType$$Original<D> = $WorldSavedDataType<(D)>;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter$$Interface {
get "dirty"(): boolean
}

export class $CustomMapData$DirtyCounter implements $CustomMapData$DirtyCounter$$Interface {
 "isDirty"(): boolean
 "clearDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyCounter$$Type = ($CustomMapData$DirtyCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$DirtyCounter$$Original = $CustomMapData$DirtyCounter;}
declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BlockPlacerItem} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"

export class $AdditionalItemPlacement {
constructor(placeable: $Block$$Type)

public "toString"(): StringJS
public "overridePlace"(pContext: $BlockPlaceContext$$Type): $InteractionResult
public "overrideUseOn"(pContext: $UseOnContext$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
public static "getBlockPlacer"(): $BlockPlacerItem
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$$Type): $BlockState
public "getPlacedBlock"(): $Block
public static get "blockPlacer"(): $BlockPlacerItem
get "placedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalItemPlacement$$Type = ($AdditionalItemPlacement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionalItemPlacement$$Original = $AdditionalItemPlacement;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CustomMapData} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$Record} from "java.lang.Record"

export class $CustomMapData$Type<P, T extends $CustomMapData<(object), (object)>> extends $Record {
static readonly "CODEC": $Codec<($CustomMapData$Type<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CustomMapData$Type<(never), (never)>)>

constructor(id: $ResourceLocation$$Type, factory: $Supplier$$Type<(T)>, patchCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>)

public "get"(mapData: $MapItemSavedData$$Type): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "id"(): $ResourceLocation
public "patchCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (P)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightCustomMapDataTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightCustomMapDataTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type$$Type<P, T> = (Special.MoonlightCustomMapDataTypes) | ({"patchCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>, "id"?: $ResourceLocation$$Type, "factory"?: $Supplier$$Type<(T)>}) | ([patchCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>, id?: $ResourceLocation$$Type, factory?: $Supplier$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$Type$$Original<P, T> = $CustomMapData$Type<(P), (T)>;}
declare module "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"

export interface $IDropItemOnDeathEvent$$Interface extends $SimpleEvent$$Interface {
get "beforeDrop"(): boolean
get "returnItemStack"(): $ItemStack
set "canceled"(value: boolean)
get "player"(): $Player
set "returnItemStack"(value: $ItemStack$$Type)
get "itemStack"(): $ItemStack
get "canceled"(): boolean
}

export class $IDropItemOnDeathEvent implements $IDropItemOnDeathEvent$$Interface {
static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
 "isBeforeDrop"(): boolean
 "getReturnItemStack"(): $ItemStack
 "setCanceled"(arg0: boolean): void
 "getPlayer"(): $Player
 "setReturnItemStack"(arg0: $ItemStack$$Type): void
 "getItemStack"(): $ItemStack
 "isCanceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropItemOnDeathEvent$$Type = ($IDropItemOnDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDropItemOnDeathEvent$$Original = $IDropItemOnDeathEvent;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.VillagerBrainEvent" {
import {$Map} from "java.util.Map"
import {$Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$MemoryModuleType} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Optional} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Event} from "net.neoforged.bus.api.Event"
import {$SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Villager, $Villager$$Type} from "net.minecraft.world.entity.npc.Villager"
import {$Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$IVillagerBrainEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent"
import {$BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$ExpirableValue} from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import {$Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$VillagerBrainEventInternal} from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"

export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent$$Interface {
constructor(brain: $Brain$$Type<($Villager$$Type)>, villager: $Villager$$Type)

public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
public "addTaskToActivity"<P extends $Pair<(object), (object)>>(activity: $Activity$$Type, task: P): boolean
public "getMemories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
public "getInternal"(): $VillagerBrainEventInternal
public "addSensor"(newSensor: $SensorType$$Type<($Sensor$$Type<($Villager$$Type)>)>): void
public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<($Villager$$Type)>)>)>): void
public "getVillager"(): $Villager
get "memories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
get "internal"(): $VillagerBrainEventInternal
get "villager"(): $Villager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerBrainEvent$$Type = ($VillagerBrainEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerBrainEvent$$Original = $VillagerBrainEvent;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData" {
import {$CustomMapData$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomMapData$$Interface<C extends $CustomMapData$DirtyCounter, P> {
get "type"(): $CustomMapData$Type<(P), (never)>
}

export class $CustomMapData<C extends $CustomMapData$DirtyCounter, P> implements $CustomMapData$$Interface {
 "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getType"(): $CustomMapData$Type<(P), (never)>
 "onItemUpdate"(data: $MapItemSavedData$$Type, entity: $Entity$$Type): boolean
 "persistOnRescale"(): boolean
 "setDirty"(data: $MapItemSavedData$$Type, dirtySetter: $Consumer$$Type<(C)>): void
 "applyUpdatePatch"(arg0: P): void
 "onItemTooltip"(data: $MapItemSavedData$$Type, stack: $ItemStack$$Type): $Component
 "persistOnCopyOrLock"(): boolean
 "createUpdatePatch"(arg0: C): P
 "createDirtyCounter"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$$Type<C, P> = ($CustomMapData<(C), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$$Original<C, P> = $CustomMapData<(C), (P)>;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList" {
import {$Iterator} from "java.util.Iterator"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$FluidContainerList$Category, $FluidContainerList$Category$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList$Category"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FluidContainerList implements $Iterable$$Interface<($FluidContainerList$Category)> {
static readonly "CODEC": $Codec<($FluidContainerList)>

constructor(categoryList: $List$$Type<($FluidContainerList$Category$$Type)>)
constructor()

public "iterator"(): $Iterator<($FluidContainerList$Category)>
public "getCategoryFromFilled"(filledContainer: $Item$$Type): $Optional<($FluidContainerList$Category)>
public "getCategoryFromEmpty"(emptyContainer: $Item$$Type): $Optional<($FluidContainerList$Category)>
public "getPossibleFilled"(): $Collection<($Item)>
public "getPossibleEmpty"(): $Collection<($Item)>
public "getEmpty"(filledContainer: $Item$$Type): $Optional<($Item)>
public "getFilled"(emptyContainer: $Item$$Type): $Optional<($Item)>
public "getCategories"(): $List<($FluidContainerList$Category)>
public "spliterator"(): $Spliterator<($FluidContainerList$Category)>
public "forEach"(arg0: $Consumer$$Type<($FluidContainerList$Category)>): void
[Symbol.iterator](): IterableIterator<$FluidContainerList$Category>;
get "possibleFilled"(): $Collection<($Item)>
get "possibleEmpty"(): $Collection<($Item)>
get "categories"(): $List<($FluidContainerList$Category)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$$Type = ($FluidContainerList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerList$$Original = $FluidContainerList;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedData" {
import {$WorldSavedDataType} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WorldSavedData extends $SavedData {
constructor()

public "save"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): $CompoundTag
public "getType"(): $WorldSavedDataType<($WorldSavedData)>
public "sync"(): void
public "setDirty"(dirty: boolean): void
public "onReassigned"(level: $Level$$Type): void
get "type"(): $WorldSavedDataType<($WorldSavedData)>
set "dirty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedData$$Type = ($WorldSavedData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedData$$Original = $WorldSavedData;}
declare module "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILightningStruckBlockEvent$$Interface extends $SimpleEvent$$Interface {
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "entity"(): $LightningBolt
get "pos"(): $BlockPos
}

export class $ILightningStruckBlockEvent implements $ILightningStruckBlockEvent$$Interface {
 "getState"(): $BlockState
static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
 "getLevel"(): $LevelAccessor
 "getEntity"(): $LightningBolt
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightningStruckBlockEvent$$Type = ($ILightningStruckBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILightningStruckBlockEvent$$Original = $ILightningStruckBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid$Properties" {
import {$Map} from "java.util.Map"
import {$PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"

export class $ModFlowingFluid$Properties {
 "canConvertToSource": boolean
 "sounds": $Map<(StringJS), ($SoundEvent)>

constructor()

public "setCanConvertToSource"(canConvertToSource: boolean): $ModFlowingFluid$Properties
public "sound"(soundActionId: StringJS, sound: $SoundEvent$$Type): $ModFlowingFluid$Properties
public "supportsBoating"(supportsBoating: boolean): $ModFlowingFluid$Properties
public "rarity"(rarity: $Rarity$$Type): $ModFlowingFluid$Properties
public "canExtinguish"(canExtinguish: boolean): $ModFlowingFluid$Properties
public "motionScale"(motionScale: double): $ModFlowingFluid$Properties
public "canPushEntity"(canPushEntity: boolean): $ModFlowingFluid$Properties
public "canHydrate"(canHydrate: boolean): $ModFlowingFluid$Properties
public "canSwim"(canSwim: boolean): $ModFlowingFluid$Properties
public "lightLevel"(lightLevel: integer): $ModFlowingFluid$Properties
public "descriptionId"(descriptionId: StringJS): $ModFlowingFluid$Properties
public "temperature"(temperature: integer): $ModFlowingFluid$Properties
public "adjacentPathType"(adjacentPathType: $PathType$$Type): $ModFlowingFluid$Properties
public "density"(density: integer): $ModFlowingFluid$Properties
public "fallDistanceModifier"(fallDistanceModifier: float): $ModFlowingFluid$Properties
public "canDrown"(canDrown: boolean): $ModFlowingFluid$Properties
public "pathType"(pathType: $PathType$$Type): $ModFlowingFluid$Properties
public "viscosity"(viscosity: integer): $ModFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFlowingFluid$Properties$$Type = ($ModFlowingFluid$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFlowingFluid$Properties$$Original = $ModFlowingFluid$Properties;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MLMapDecorationType, $MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $MLMapDecoration {
static readonly "CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MLMapDecoration)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, x: byte, y: byte, rot: byte, displayName: ($Component$$Type)?)

public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getType"(): $Holder<($MLMapDecorationType<(never), (never)>)>
public "getDisplayName"(): $Component
public "getY"(): byte
public "getRot"(): byte
public "getX"(): byte
get "type"(): $Holder<($MLMapDecorationType<(never), (never)>)>
get "displayName"(): $Component
get "y"(): byte
get "rot"(): byte
get "x"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapDecoration$$Type = ($MLMapDecoration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapDecoration$$Original = $MLMapDecoration;}
declare module "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $IFirstPersonAnimationProvider$$Interface {

(arg0: $Player, arg1: $ItemStack, arg2: $InteractionHand, arg3: $HumanoidArm, arg4: $PoseStack, arg5: float, arg6: float, arg7: float, arg8: float): void
}

export class $IFirstPersonAnimationProvider implements $IFirstPersonAnimationProvider$$Interface {
static "get"(target: $Item$$Type): $IFirstPersonAnimationProvider
 "animateItemFirstPerson"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: float, arg6: float, arg7: float, arg8: float): void
static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFirstPersonAnimationProvider$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: $InteractionHand, arg3: $HumanoidArm, arg4: $PoseStack, arg5: float, arg6: float, arg7: float, arg8: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFirstPersonAnimationProvider$$Original = $IFirstPersonAnimationProvider;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$ModFluidRenderProperties} from "net.mehvahdjukaar.moonlight.api.client.ModFluidRenderProperties"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ModFlowingFluid$Properties} from "net.mehvahdjukaar.moonlight.api.fluids.ModFlowingFluid$Properties"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $ModFlowingFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

public static "properties"(): $ModFlowingFluid$Properties
public "getSource"(): $Fluid
public "createRenderProperties"(): $ModFluidRenderProperties
public "getFluidType"(): $FluidType
public "isSame"(fluidIn: $Fluid$$Type): boolean
public "getFlowing"(): $Fluid
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "source"(): $Fluid
get "fluidType"(): $FluidType
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFlowingFluid$$Type = ($ModFlowingFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModFlowingFluid$$Original = $ModFlowingFluid;}
declare module "net.mehvahdjukaar.moonlight.api.block.IBlockHolder" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockHolder$$Interface {
set "heldBlock"(value: $BlockState$$Type)
get "heldBlock"(): $BlockState
}

export class $IBlockHolder implements $IBlockHolder$$Interface {
 "setHeldBlock"(state: $BlockState$$Type): boolean
 "setHeldBlock"(arg0: $BlockState$$Type, arg1: integer): boolean
 "getHeldBlock"(arg0: integer): $BlockState
 "getHeldBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHolder$$Type = ($IBlockHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockHolder$$Original = $IBlockHolder;}
declare module "net.mehvahdjukaar.moonlight.api.block.ModStairBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ModStairBlock extends $StairBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ModStairBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(baseBlock: $Supplier$$Type<($Block$$Type)>, settings: $BlockBehaviour$Properties$$Type)

public "getBaseBlock"(): $Block
public "codec"(): $MapCodec<($ModStairBlock)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "baseBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModStairBlock$$Type = ($ModStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModStairBlock$$Original = $ModStairBlock;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.SimpleMapMarker" {
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"

export class $SimpleMapMarker extends $MLMapMarker<($MLMapDecoration)> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer
static readonly "DIRECT_CODEC": $MapCodec<($SimpleMapMarker)>
static readonly "REFERENCE_CODEC": $Codec<($MLMapMarker<(never)>)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, name: ($Component$$Type)?)
constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, name: ($Component$$Type)?, shouldRefresh: (boolean)?, shouldSave: (boolean)?, preventsExtending: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapMarker$$Type = ($SimpleMapMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMapMarker$$Original = $SimpleMapMarker;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType$Scope" {
import {$Enum} from "java.lang.Enum"

export class $WorldSavedDataType$Scope extends $Enum<($WorldSavedDataType$Scope)> {
static readonly "SINGLE_OVERWORLD": $WorldSavedDataType$Scope
static readonly "PER_LEVEL": $WorldSavedDataType$Scope

public static "values"(): ($WorldSavedDataType$Scope)[]
public static "valueOf"(name: StringJS): $WorldSavedDataType$Scope
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedDataType$Scope$$Type = (("single_overworld") | ("per_level"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedDataType$Scope$$Original = $WorldSavedDataType$Scope;}
declare module "net.mehvahdjukaar.moonlight.api.events.SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent$$Interface {
}

export class $SimpleEvent implements $SimpleEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleEvent$$Type = ($SimpleEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleEvent$$Original = $SimpleEvent;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.ISpecialSpawnsStructure" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"

export interface $ISpecialSpawnsStructure$$Interface {

(arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos, arg3: $LongSet, arg4: $MobCategory): $WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>
}

export class $ISpecialSpawnsStructure implements $ISpecialSpawnsStructure$$Interface {
 "ml$getSpecialSpawns"(arg0: $StructureManager$$Type, arg1: $Structure$$Type, arg2: $BlockPos$$Type, arg3: $LongSet$$Type, arg4: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialSpawnsStructure$$Type = ((arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos, arg3: $LongSet, arg4: $MobCategory) => $WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpecialSpawnsStructure$$Original = $ISpecialSpawnsStructure;}
declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pBlock: $Block$$Type, pProperties: $Item$Properties$$Type)

public static "get"(): $BlockPlacerItem
public "getBlock"(): $Block
public "getFoodProperties"(stack: $ItemStack$$Type, entity: $LivingEntity$$Type): $FoodProperties
public "getDescriptionId"(): StringJS
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type): $BlockState
public "registerBlocks"(pBlockToItemMap: $Map$$Type<($Block$$Type), ($Item$$Type)>, pItem: $Item$$Type): void
public "canPlace"(pContext: $BlockPlaceContext$$Type, pState: $BlockState$$Type): boolean
public "mimicPlace"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type, overrideSound: $SoundType$$Type): $InteractionResult
public "mimicUseOn"(pContext: $UseOnContext$$Type, toPlace: $Block$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "block"(): $Block
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerItem$$Type = ($BlockPlacerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlacerItem$$Original = $BlockPlacerItem;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$Holder} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<(object)>> {
static readonly "CODEC": $Codec<($Holder<($MLMapDecorationType<(never), (never)>)>)>
static readonly "DIRECT_CODEC": $Codec<($MLMapDecorationType<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MLMapDecorationType<(never), (never)>)>)>

public "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
public "createMarkerFromWorld"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): M
/**
 * 
 * @deprecated
 */
public "createMarkerFromWorld"(reader: $BlockGetter$$Type, pos: $BlockPos$$Type): M
public "getCustomFactoryID"(): $ResourceLocation
public "getMarkerCodec"(): $MapCodec<(M)>
public "getDefaultMapColor"(): integer
public "getDecorationCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
get "associatedStructure"(): $Optional<($HolderSet<($Structure)>)>
get "customFactoryID"(): $ResourceLocation
get "markerCodec"(): $MapCodec<(M)>
get "defaultMapColor"(): integer
get "decorationCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightMapMarker
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightMapMarkerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapDecorationType$$Type<D, M> = (Special.MoonlightMapMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapDecorationType$$Original<D, M> = $MLMapDecorationType<(D), (M)>;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList$Category" {
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export class $FluidContainerList$Category {
static readonly "CODEC": $Codec<($FluidContainerList$Category)>

public "isEmpty"(): boolean
public "getEmptyContainer"(): $Item
public "getFilledItems"(): $List<($Item)>
public "getEmptySound"(): $SoundEvent
public "getFirstFilled"(): $Optional<($Item)>
public "getFillSound"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getAmount"(): integer
public "getCapacity"(): integer
get "empty"(): boolean
get "emptyContainer"(): $Item
get "filledItems"(): $List<($Item)>
get "emptySound"(): $SoundEvent
get "firstFilled"(): $Optional<($Item)>
get "fillSound"(): $SoundEvent
get "amount"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Category$$Type = ($FluidContainerList$Category);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerList$Category$$Original = $FluidContainerList$Category;}
