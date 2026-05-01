declare module "appeng.parts.ICableBusContainer" {
import {$AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$CableBusRenderState} from "appeng.client.render.cablebus.CableBusRenderState"

export interface $ICableBusContainer$$Interface {
get "empty"(): boolean
get "renderState"(): $CableBusRenderState
get "lightValue"(): integer
}

export class $ICableBusContainer implements $ICableBusContainer$$Interface {
 "isEmpty"(): boolean
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "getRenderState"(): $CableBusRenderState
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "getLightValue"(): integer
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "onEntityCollision"(arg0: $Entity$$Type): void
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$$Type = ($ICableBusContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICableBusContainer$$Original = $ICableBusContainer;}
declare module "appeng.parts.AEBasePart" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$IDebugExportable$$Interface} from "appeng.util.IDebugExportable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPowerChannelState$$Interface} from "appeng.api.implementations.IPowerChannelState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IPart$$Interface} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel} from "appeng.api.parts.IPartModel"
import {$ISegmentedInventory$$Interface} from "appeng.api.inventories.ISegmentedInventory"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AEBasePart implements $IPart$$Interface, $IActionHost$$Interface, $ISegmentedInventory$$Interface, $IPowerChannelState$$Interface, $Nameable$$Interface, $IDebugExportable$$Interface {
constructor(arg0: $IPartItem$$Type<(never)>)

public "getName"(): $Component
public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getLevel"(): $Level
public "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "isPowered"(): boolean
public "getCustomName"(): $Component
public "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
public "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
public "getSide"(): $Direction
public "getMainNode"(): $IManagedGridNode
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getPartItem"(): $IPartItem<(never)>
public "exportSettings"(arg0: $SettingsFrom$$Type): $DataComponentMap
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "useStandardMemoryCard"(): boolean
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getGridNode"(): $IGridNode
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "isMissingChannel"(): boolean
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "onPlacement"(arg0: $Player$$Type): void
public "removeFromWorld"(): void
public "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "getActionableNode"(): $IGridNode
public "addToWorld"(): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getExternalCableConnectionType"(): $AECableType
public "isSolid"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "canConnectRedstone"(): boolean
public "isProvidingWeakPower"(): integer
public "getDesiredConnectionType"(): $AECableType
public "requireDynamicRender"(): boolean
public "getExternalFacingNode"(): $IGridNode
public "isProvidingStrongPower"(): integer
public "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
public "getModelData"(): $ModelData
public "getStaticModels"(): $IPartModel
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getLightLevel"(): integer
public "onEntityCollision"(arg0: $Entity$$Type): void
public "clearContent"(): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "name"(): $Component
get "host"(): $IPartHost
get "active"(): boolean
get "level"(): $Level
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "powered"(): boolean
get "customName"(): $Component
get "side"(): $Direction
get "mainNode"(): $IManagedGridNode
get "partItem"(): $IPartItem<(never)>
get "gridNode"(): $IGridNode
get "missingChannel"(): boolean
get "actionableNode"(): $IGridNode
get "externalCableConnectionType"(): $AECableType
get "solid"(): boolean
get "providingWeakPower"(): integer
get "desiredConnectionType"(): $AECableType
get "externalFacingNode"(): $IGridNode
get "providingStrongPower"(): integer
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "lightLevel"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$$Type = ($AEBasePart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBasePart$$Original = $AEBasePart;}
declare module "appeng.parts.CableBusContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CableBusRenderState} from "appeng.client.render.cablebus.CableBusRenderState"
import {$ICableBusContainer$$Interface} from "appeng.parts.ICableBusContainer"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$AEMultiBlockEntity$$Interface} from "appeng.helpers.AEMultiBlockEntity"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusContainer implements $AEMultiBlockEntity$$Interface, $ICableBusContainer$$Interface {
constructor(arg0: $IPartHost$$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getColor"(): $AEColor
public "isBlocked"(arg0: $Direction$$Type): boolean
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "notifyNeighbors"(): void
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getBlockEntity"(): $BlockEntity
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getPart"(arg0: $Direction$$Type): $IPart
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "isRequiresDynamicRender"(): boolean
public "isInWorld"(): boolean
public "getRenderState"(): $CableBusRenderState
public "addPartDrops"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "isProvidingWeakPower"(arg0: $Direction$$Type): integer
public "isProvidingStrongPower"(arg0: $Direction$$Type): integer
public "setHost"(arg0: $IPartHost$$Type): void
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "getLightValue"(): integer
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "partChanged"(): void
public "updateConnections"(): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "markForSave"(): void
public "removeFromWorld"(): void
public "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "markForUpdate"(): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "clearContent"(): void
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "removePart"(arg0: $IPart$$Type): boolean
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "clearContainer"(): void
public "addToWorld"(): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "getFacadeContainer"(): $IFacadeContainer
public "removePartFromSide"(arg0: $Direction$$Type): void
public "hasRedstone"(): boolean
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "shape"(): $VoxelShape
public static get "loading"(): boolean
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "requiresDynamicRender"(): boolean
get "inWorld"(): boolean
get "renderState"(): $CableBusRenderState
set "host"(value: $IPartHost$$Type)
get "lightValue"(): integer
get "facadeContainer"(): $IFacadeContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$$Type = ($CableBusContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CableBusContainer$$Original = $CableBusContainer;}
