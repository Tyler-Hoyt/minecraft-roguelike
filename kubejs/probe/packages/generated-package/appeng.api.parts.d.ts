declare module "appeng.api.parts.BusSupport" {
import {$Enum} from "java.lang.Enum"

export class $BusSupport extends $Enum<($BusSupport)> {
static readonly "DENSE_CABLE": $BusSupport
static readonly "CABLE": $BusSupport

public static "values"(): ($BusSupport)[]
public static "valueOf"(arg0: StringJS): $BusSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BusSupport$$Type = (("cable") | ("dense_cable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BusSupport$$Original = $BusSupport;}
declare module "appeng.api.parts.IPartModel" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"

export interface $IPartModel$$Interface {
get "models"(): $List<($ResourceLocation)>
}

export class $IPartModel implements $IPartModel$$Interface {
 "requireCableConnection"(): boolean
 "getModels"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartModel$$Type = ($IPartModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartModel$$Original = $IPartModel;}
declare module "appeng.api.parts.IPartHost" {
import {$AEColor} from "appeng.api.util.AEColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$ICustomCableConnection$$Interface} from "appeng.api.parts.ICustomCableConnection"
import {$AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SelectedPart} from "appeng.api.parts.SelectedPart"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer} from "appeng.api.parts.IFacadeContainer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $IPartHost$$Interface extends $ICustomCableConnection$$Interface {
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
}

export class $IPartHost implements $IPartHost$$Interface {
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "getColor"(): $AEColor
 "isBlocked"(arg0: $Direction$$Type): boolean
 "notifyNeighbors"(): void
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "getPart"(arg0: $Direction$$Type): $IPart
 "isInWorld"(): boolean
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "partChanged"(): void
 "markForSave"(): void
 "markForUpdate"(): void
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "removePart"(arg0: $IPart$$Type): boolean
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "clearContainer"(): void
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "hasRedstone"(): boolean
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartHost$$Type = ($IPartHost);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartHost$$Original = $IPartHost;}
declare module "appeng.api.parts.RegisterPartCapabilitiesEvent" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Class$$Type} from "java.lang.Class"
import {$IPart} from "appeng.api.parts.IPart"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

public "register"<T, C, P extends $IPart>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<(P), (C), (T)>, arg2: $Class$$Type<(P)>): void
public "registerContext"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $Function$$Type<(C), ($Direction$$Type)>): void
public "addHostType"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterPartCapabilitiesEvent$$Type = ($RegisterPartCapabilitiesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterPartCapabilitiesEvent$$Original = $RegisterPartCapabilitiesEvent;}
declare module "appeng.api.parts.IPartCollisionHelper" {
import {$Direction} from "net.minecraft.core.Direction"

export interface $IPartCollisionHelper$$Interface {
get "worldX"(): $Direction
get "worldZ"(): $Direction
get "worldY"(): $Direction
get "BBCollision"(): boolean
}

export class $IPartCollisionHelper implements $IPartCollisionHelper$$Interface {
 "getWorldX"(): $Direction
 "getWorldZ"(): $Direction
 "getWorldY"(): $Direction
 "addBox"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
 "isBBCollision"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartCollisionHelper$$Type = ($IPartCollisionHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartCollisionHelper$$Original = $IPartCollisionHelper;}
declare module "appeng.api.parts.IFacadePart" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFacadePart$$Interface {
get "item"(): $Item
get "blockState"(): $BlockState
get "textureItem"(): $ItemStack
get "side"(): $Direction
get "itemStack"(): $ItemStack
}

export class $IFacadePart implements $IFacadePart$$Interface {
 "getItem"(): $Item
 "getBlockState"(): $BlockState
 "getTextureItem"(): $ItemStack
 "getSide"(): $Direction
 "getItemStack"(): $ItemStack
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "getBoxes"(arg0: $IPartCollisionHelper$$Type, arg1: boolean): void
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadePart$$Type = ($IFacadePart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacadePart$$Original = $IFacadePart;}
declare module "appeng.api.parts.SelectedPart" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"

export class $SelectedPart {
readonly "side": $Direction
readonly "part": $IPart
readonly "facade": $IFacadePart

constructor()
constructor(arg0: $IPart$$Type, arg1: $Direction$$Type)
constructor(arg0: $IFacadePart$$Type, arg1: $Direction$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectedPart$$Type = ($SelectedPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectedPart$$Original = $SelectedPart;}
declare module "appeng.api.parts.IFacadeContainer" {
import {$IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"

export interface $IFacadeContainer$$Interface {
get "empty"(): boolean
}

export class $IFacadeContainer implements $IFacadeContainer$$Interface {
 "isEmpty"(): boolean
 "addFacade"(arg0: $IFacadePart$$Type): boolean
 "getFacade"(arg0: $Direction$$Type): $IFacadePart
 "removeFacade"(arg0: $IPartHost$$Type, arg1: $Direction$$Type): void
 "canAddFacade"(arg0: $IFacadePart$$Type): boolean
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeContainer$$Type = ($IFacadeContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFacadeContainer$$Original = $IFacadeContainer;}
declare module "appeng.api.parts.IPartItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$IPart} from "appeng.api.parts.IPart"

export interface $IPartItem$$Interface<P extends $IPart> extends $ItemLike$$Interface {
get "partClass"(): $Class<(P)>
}

export class $IPartItem<P extends $IPart> implements $IPartItem$$Interface {
static "getId"(arg0: $IPartItem$$Type<(never)>): $ResourceLocation
 "createPart"(): P
static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(never)>
static "getNetworkId"(arg0: $IPartItem$$Type<(never)>): integer
static "byNetworkId"(arg0: integer): $IPartItem<(never)>
 "getPartClass"(): $Class<(P)>
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartItem$$Type<P> = ($IPartItem<(P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPartItem$$Original<P> = $IPartItem<(P)>;}
declare module "appeng.api.parts.ICustomCableConnection" {
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"

export interface $ICustomCableConnection$$Interface {

(arg0: $AECableType): float
}

export class $ICustomCableConnection implements $ICustomCableConnection$$Interface {
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCableConnection$$Type = ((arg0: $AECableType) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomCableConnection$$Original = $ICustomCableConnection;}
declare module "appeng.api.parts.IPart" {
import {$DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$ICustomCableConnection$$Interface} from "appeng.api.parts.ICustomCableConnection"
import {$IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel} from "appeng.api.parts.IPartModel"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$IPartItem} from "appeng.api.parts.IPartItem"

export interface $IPart$$Interface extends $ICustomCableConnection$$Interface, $Clearable$$Interface {
get "externalCableConnectionType"(): $AECableType
get "solid"(): boolean
get "providingWeakPower"(): integer
get "desiredConnectionType"(): $AECableType
get "externalFacingNode"(): $IGridNode
get "providingStrongPower"(): integer
get "partItem"(): $IPartItem<(never)>
get "gridNode"(): $IGridNode
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "lightLevel"(): integer
}

export class $IPart implements $IPart$$Interface {
 "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getExternalCableConnectionType"(): $AECableType
 "isSolid"(): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "canConnectRedstone"(): boolean
 "isProvidingWeakPower"(): integer
 "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
 "getDesiredConnectionType"(): $AECableType
 "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
 "requireDynamicRender"(): boolean
 "getExternalFacingNode"(): $IGridNode
 "isProvidingStrongPower"(): integer
 "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getPartItem"(): $IPartItem<(never)>
 "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
 "getGridNode"(): $IGridNode
 "getModelData"(): $ModelData
 "getStaticModels"(): $IPartModel
 "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
 "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
 "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "onPlacement"(arg0: $Player$$Type): void
 "removeFromWorld"(): void
 "onUpdateShape"(arg0: $Direction$$Type): void
 "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
 "getLightLevel"(): integer
 "onEntityCollision"(arg0: $Entity$$Type): void
 "clearContent"(): void
 "addToWorld"(): void
 "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPart$$Type = ($IPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPart$$Original = $IPart;}
