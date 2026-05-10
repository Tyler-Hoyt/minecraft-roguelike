declare module "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal" {
import {$Map} from "java.util.Map"
import {$Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
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

export class $VillagerBrainEventInternal {
constructor(arg0: $Brain$$Type<($Villager$$Type)>, arg1: $Villager$$Type)

public "getVillager"(): $Villager
public "scheduleActivity"(arg0: $Activity$$Type, arg1: integer, arg2: integer): void
public "getMemories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
public "addTaskToActivity"<P extends $Pair<(object), (object)>>(arg0: $Activity$$Type, arg1: P): boolean
public "addSensor"(arg0: $SensorType$$Type<($Sensor$$Type<($Villager$$Type)>)>): void
public "addOrReplaceActivity"(arg0: $Activity$$Type, arg1: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<($Villager$$Type)>)>)>): void
get "villager"(): $Villager
get "memories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerBrainEventInternal$$Type = ($VillagerBrainEventInternal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerBrainEventInternal$$Original = $VillagerBrainEventInternal;}
declare module "net.mehvahdjukaar.moonlight.core.criteria_triggers.GrindItemTrigger$Instance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $GrindItemTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($GrindItemTrigger$Instance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: $ItemPredicate$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $ItemPredicate
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindItemTrigger$Instance$$Type = ({"item"?: $ItemPredicate$$Type, "player"?: ($ContextAwarePredicate$$Type)?}) | ([item?: $ItemPredicate$$Type, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindItemTrigger$Instance$$Original = $GrindItemTrigger$Instance;}
declare module "net.mehvahdjukaar.moonlight.core.worldgen.SpawnBoxBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GameMasterBlock$$Interface} from "net.minecraft.world.level.block.GameMasterBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpawnBoxBlock extends $Block implements $EntityBlock$$Interface, $GameMasterBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnBoxBlock$$Type = ($SpawnBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnBoxBlock$$Original = $SpawnBoxBlock;}
declare module "net.mehvahdjukaar.moonlight.core.mixins.platform.ContextAwareReloadListenerAccessor" {
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"

export interface $ContextAwareReloadListenerAccessor$$Interface {

(): $ICondition$IContext$$Type
}

export class $ContextAwareReloadListenerAccessor implements $ContextAwareReloadListenerAccessor$$Interface {
 "invokeGetContext"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwareReloadListenerAccessor$$Type = (() => $ICondition$IContext$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextAwareReloadListenerAccessor$$Original = $ContextAwareReloadListenerAccessor;}
declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedItem" {
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export interface $IExtendedItem$$Interface {
}

export class $IExtendedItem implements $IExtendedItem$$Interface {
 "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
 "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
 "moonlight$getClientAnimationExtension"(): any
 "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedItem$$Type = ($IExtendedItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExtendedItem$$Original = $IExtendedItem;}
declare module "net.mehvahdjukaar.moonlight.core.misc.IExtendedPistonTile" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IExtendedPistonTile$$Interface {

(arg0: $Level, arg1: $BlockPos): void
}

export class $IExtendedPistonTile implements $IExtendedPistonTile$$Interface {
 "tickMovedBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedPistonTile$$Type = ((arg0: $Level, arg1: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IExtendedPistonTile$$Original = $IExtendedPistonTile;}
declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.BrainAccessor" {
import {$Map} from "java.util.Map"
import {$Activity} from "net.minecraft.world.entity.schedule.Activity"
import {$SensorType} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$Set} from "java.util.Set"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Behavior} from "net.minecraft.world.entity.ai.behavior.Behavior"
import {$Sensor} from "net.minecraft.world.entity.ai.sensing.Sensor"

export interface $BrainAccessor$$Interface<E extends $LivingEntity> {
get "sensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
get "availableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($Behavior<(E)>)>)>)>
}

export class $BrainAccessor<E extends $LivingEntity> implements $BrainAccessor$$Interface {
 "getSensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
 "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($Behavior<(E)>)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$$Type<E> = ($BrainAccessor<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainAccessor$$Original<E> = $BrainAccessor<(E)>;}
declare module "net.mehvahdjukaar.moonlight.core.misc.IMapDataPacketExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$CustomMapData$DirtyDataPatch, $CustomMapData$DirtyDataPatch$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyDataPatch"
import {$MLMapDecoration, $MLMapDecoration$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"

export interface $IMapDataPacketExtension$$Interface {
}

export class $IMapDataPacketExtension implements $IMapDataPacketExtension$$Interface {
 "moonlight$getDirtyCustomData"(): $Optional<($List<($CustomMapData$DirtyDataPatch<(never), (never)>)>)>
 "moonlight$getCustomDecorations"(): $Optional<($List<($MLMapDecoration)>)>
 "moonlight$setCustomDecorations"(arg0: ($List$$Type<($MLMapDecoration$$Type)>)?): void
 "moonlight$setDirtyCustomData"(arg0: ($List$$Type<($CustomMapData$DirtyDataPatch$$Type<(never), (never)>)>)?): void
 "moonlight$setMapCenter"(arg0: integer, arg1: integer): void
 "moonlight$getDimension"(): $ResourceLocation
 "moonlight$getMapCenterZ"(): integer
 "moonlight$setDimension"(arg0: $ResourceLocation$$Type): void
 "moonlight$getMapCenterX"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMapDataPacketExtension$$Type = ($IMapDataPacketExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMapDataPacketExtension$$Original = $IMapDataPacketExtension;}
declare module "net.mehvahdjukaar.moonlight.core.criteria_triggers.GrindItemTrigger" {
import {$GrindItemTrigger$Instance} from "net.mehvahdjukaar.moonlight.core.criteria_triggers.GrindItemTrigger$Instance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $GrindItemTrigger extends $SimpleCriterionTrigger<($GrindItemTrigger$Instance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($GrindItemTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindItemTrigger$$Type = ($GrindItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindItemTrigger$$Original = $GrindItemTrigger;}
declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $DispenserBlockEntityAccessor$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
get "items"(): $NonNullList<($ItemStack)>
}

export class $DispenserBlockEntityAccessor implements $DispenserBlockEntityAccessor$$Interface {
 "getItems"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockEntityAccessor$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserBlockEntityAccessor$$Original = $DispenserBlockEntityAccessor;}
declare module "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockAccessor" {
import {$Map} from "java.util.Map"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export interface $DispenserBlockAccessor$$Interface {
public static get "dispenserRegistry"(): $Map<($Item), ($DispenseItemBehavior)>
}

export class $DispenserBlockAccessor implements $DispenserBlockAccessor$$Interface {
static "getDispenserRegistry"(): $Map<($Item), ($DispenseItemBehavior)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$$Type = ($DispenserBlockAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserBlockAccessor$$Original = $DispenserBlockAccessor;}
declare module "net.mehvahdjukaar.moonlight.core.misc.IHoldingPlayerExtension" {
import {$CustomMapData$Type$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$CustomMapData$DirtyCounter} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IHoldingPlayerExtension$$Interface {
}

export class $IHoldingPlayerExtension implements $IHoldingPlayerExtension$$Interface {
 "moonlight$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$$Type<(never), (never)>, arg1: $Consumer$$Type<(H)>): void
 "moonlight$setCustomMarkersDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHoldingPlayerExtension$$Type = ($IHoldingPlayerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHoldingPlayerExtension$$Original = $IHoldingPlayerExtension;}
