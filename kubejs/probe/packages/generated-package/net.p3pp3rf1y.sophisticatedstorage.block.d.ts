declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageIOBlock" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StorageIOBlock extends $BlockBase implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
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

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageIOBlock$$Type = ($StorageIOBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageIOBlock$$Original = $StorageIOBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ITierDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITierDisplay$$Interface {
}

export class $ITierDisplay implements $ITierDisplay$$Interface {
 "toggleTierVisiblity"(): void
 "shouldShowTier"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITierDisplay$$Type = ($ITierDisplay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITierDisplay$$Original = $ITierDisplay;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.IAdditionalDropDataBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StorageBlockEntity, $StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"

export interface $IAdditionalDropDataBlock$$Interface {

(arg0: $ItemStack, arg1: $StorageBlockEntity): void
}

export class $IAdditionalDropDataBlock implements $IAdditionalDropDataBlock$$Interface {
 "addDropData"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdditionalDropDataBlock$$Type = ((arg0: $ItemStack, arg1: $StorageBlockEntity) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAdditionalDropDataBlock$$Original = $IAdditionalDropDataBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity" {
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ILinkable$$Interface} from "net.p3pp3rf1y.sophisticatedcore.controller.ILinkable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IUpgradeDisplay$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.IUpgradeDisplay"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ILockable$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.ILockable"
import {$IControllableStorage$$Interface} from "net.p3pp3rf1y.sophisticatedcore.controller.IControllableStorage"
import {$ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$SophisticatedOpenersCounter} from "net.p3pp3rf1y.sophisticatedstorage.block.SophisticatedOpenersCounter"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IStorageWrapper} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$ITierDisplay$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.ITierDisplay"

export class $StorageBlockEntity extends $BlockEntity implements $IControllableStorage$$Interface, $ILinkable$$Interface, $ILockable$$Interface, $Nameable$$Interface, $ITierDisplay$$Interface, $IUpgradeDisplay$$Interface, $Clearable$$Interface {
static readonly "UPDATE_BLOCK_RENDER_TAG": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "STORAGE_WRAPPER_TAG": StringJS

public "getName"(): $Component
public "isOpen"(): boolean
public "isLocked"(): boolean
public "getDisplayName"(): $Component
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "allowsEmptySlotsMatchingItemInsertsWhenLocked"(): boolean
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$$Type): void
public "getStorageWrapper"(): $IStorageWrapper
public "setRemoved"(): void
public static "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $StorageBlockEntity$$Type): void
public "onLoad"(): void
public "setChanged"(): void
public "getExternalItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "memorizesItemsWhenLocked"(): boolean
public "removeControllerPos"(): void
public "getSlotFillPercentage"(arg0: integer): float
public "toggleTierVisiblity"(): void
public "toggleLockVisibility"(): void
public "toggleUpgradesVisiblity"(): void
public "getConnectablePositions"(): $Set<($BlockPos)>
public "getStorageBlockLevel"(): $Level
public "toggleLock"(): void
public "isLinked"(): boolean
public "loadSynchronizedData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onNeighborChange"(arg0: $BlockPos$$Type): void
public "clearContent"(): void
public "recheckOpen"(): void
public "dropContents"(): void
public "changeStorageSize"(arg0: integer, arg1: integer): void
public "connectLinkedSelf"(): boolean
public "getStorageBlockPos"(): $BlockPos
public "canConnectStorages"(): boolean
public "shouldDropContents"(): boolean
public "setShouldBeOpen"(arg0: boolean): void
public "shouldShowTier"(): boolean
public "setBeingUpgraded"(arg0: boolean): void
public "shouldShowLock"(): boolean
public "shouldShowUpgrades"(): boolean
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "getControllerPos"(): $Optional<($BlockPos)>
public "isBeingUpgraded"(): boolean
public "getOpenersCounter"(): $SophisticatedOpenersCounter
public "setNotLinked"(): void
public "canBeConnected"(): boolean
public "linkToController"(arg0: $BlockPos$$Type): void
public "setUpdateBlockRender"(): void
public "onInventoryInputOutputHandlerRefresh"(): void
public "unregisterController"(): void
public "tryToAddToController"(): void
public "removeFromController"(): void
public "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "hasStorageData"(): boolean
public "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
public "changeSlots"(arg0: integer): void
public "updateEmptySlots"(): void
public "registerWithControllerOnLoad"(): void
public "registerInventoryStackListeners"(): void
public "unlinkFromController"(): void
public "canBeLinked"(): boolean
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
public "addToAdjacentController"(): void
public "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
public "saveControllerPos"(arg0: $CompoundTag$$Type): void
public "loadControllerPos"(arg0: $CompoundTag$$Type): void
get "name"(): $Component
get "open"(): boolean
get "locked"(): boolean
get "displayName"(): $Component
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "customName"(): $Component
set "customName"(value: $Component$$Type)
get "storageWrapper"(): $IStorageWrapper
get "removed"(): void
get "changed"(): void
get "connectablePositions"(): $Set<($BlockPos)>
get "storageBlockLevel"(): $Level
get "linked"(): boolean
get "storageBlockPos"(): $BlockPos
set "shouldBeOpen"(value: boolean)
set "beingUpgraded"(value: boolean)
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
get "beingUpgraded"(): boolean
get "openersCounter"(): $SophisticatedOpenersCounter
get "notLinked"(): void
get "updateBlockRender"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockEntity$$Type = ($StorageBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageBlockEntity$$Original = $StorageBlockEntity;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlockEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DecorationTableBlockEntity$IItemDecorator, $DecorationTableBlockEntity$IItemDecorator$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlockEntity$IItemDecorator"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$BarrelMaterial$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $DecorationTableBlockEntity extends $BlockEntity implements $Clearable$$Interface {
static readonly "STORAGE_DECORATOR": $DecorationTableBlockEntity$IItemDecorator
static readonly "SIDE_CORE_SLOT": integer
static readonly "GREEN_DYE_SLOT": integer
static readonly "STORAGES_WIHOUT_TOP_INNER_TRIM": $Set<($Item)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "BLUE_DYE_SLOT": integer
static readonly "SIDE_TRIM_SLOT": integer
static readonly "TOP_INNER_TRIM_SLOT": integer
static readonly "BOTTOM_TRIM_SLOT": integer
static readonly "RED_DYE_SLOT": integer
static readonly "TOP_CORE_SLOT": integer
static readonly "TOP_TRIM_SLOT": integer
static readonly "BOTTOM_CORE_SLOT": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getResult"(): $ItemStack
public "getUpdatePacket"(): $Packet
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "setMainColor"(arg0: integer): void
public "setAccentColor"(arg0: integer): void
public "isSlotMaterialInherited"(arg0: integer): boolean
public "getDecoratedPreviewStacks"(): $List<($ItemStack)>
public "getDecorativeBlocks"(): $ItemStackHandler
public "getSlotInheritedFrom"(arg0: integer): integer
public "updateResultAndSetChanged"(): void
public static "registerItemDecorator"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $DecorationTableBlockEntity$IItemDecorator$$Type): void
public "consumeIngredientsOnCraft"(): void
public "setSlotMaterialInheritance"(arg0: integer, arg1: boolean): void
public "getDyes"(): $ItemStackHandler
public "clearContent"(): void
public "dropContents"(): void
public "getMainColor"(): integer
public "getAccentColor"(): integer
public "hasMaterials"(): boolean
public static "allMaterialsMatch"(arg0: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>, arg1: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): boolean
public "getPartsStored"(): $Map<($ResourceLocation), (integer)>
public "getInheritedItem"(arg0: integer): $ItemStack
public "getPartsNeeded"(): $Map<($ResourceLocation), (integer)>
public "getStorageBlock"(): $ItemStackHandler
public "extractResult"(arg0: integer): $ItemStack
public "getMissingDyes"(): $Set<($ResourceLocation)>
public static "tryClear"(arg0: any): void
get "result"(): $ItemStack
get "updatePacket"(): $Packet
set "mainColor"(value: integer)
set "accentColor"(value: integer)
get "decoratedPreviewStacks"(): $List<($ItemStack)>
get "decorativeBlocks"(): $ItemStackHandler
get "dyes"(): $ItemStackHandler
get "mainColor"(): integer
get "accentColor"(): integer
get "partsStored"(): $Map<($ResourceLocation), (integer)>
get "partsNeeded"(): $Map<($ResourceLocation), (integer)>
get "storageBlock"(): $ItemStackHandler
get "missingDyes"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$$Type = ($DecorationTableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorationTableBlockEntity$$Original = $DecorationTableBlockEntity;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.IUpgradeDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpgradeDisplay$$Interface {
}

export class $IUpgradeDisplay implements $IUpgradeDisplay$$Interface {
 "toggleUpgradesVisiblity"(): void
 "shouldShowUpgrades"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeDisplay$$Type = ($IUpgradeDisplay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeDisplay$$Original = $IUpgradeDisplay;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlock" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DecorationTableBlock extends $BlockBase implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
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
static readonly "FACING": $DirectionProperty

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlock$$Type = ($DecorationTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorationTableBlock$$Original = $DecorationTableBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ControllerBlock" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ISneakItemInteractionBlock$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.ISneakItemInteractionBlock"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ControllerBlock extends $BlockBase implements $ISneakItemInteractionBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
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

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "trySneakItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type, arg6: $ItemStack$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlock$$Type = ($ControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerBlock$$Original = $ControllerBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlockEntity$TintDecorationResult" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $DecorationTableBlockEntity$TintDecorationResult extends $Record {
static readonly "EMPTY": $DecorationTableBlockEntity$TintDecorationResult

constructor(result: $ItemStack$$Type, requiredDyeParts: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (integer)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "result"(): $ItemStack
public "requiredDyeParts"(): $Map<($TagKey<($Item)>), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$TintDecorationResult$$Type = ({"result"?: $ItemStack$$Type, "requiredDyeParts"?: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (integer)>}) | ([result?: $ItemStack$$Type, requiredDyeParts?: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (integer)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorationTableBlockEntity$TintDecorationResult$$Original = $DecorationTableBlockEntity$TintDecorationResult;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.IMaterialHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BarrelMaterial, $BarrelMaterial$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial"

export interface $IMaterialHolder$$Interface {
get "materials"(): $Map<($BarrelMaterial), ($ResourceLocation)>
set "materials"(value: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>)
}

export class $IMaterialHolder implements $IMaterialHolder$$Interface {
 "getMaterials"(): $Map<($BarrelMaterial), ($ResourceLocation)>
 "setMaterials"(arg0: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): void
 "canHoldMaterials"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMaterialHolder$$Type = ($IMaterialHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMaterialHolder$$Original = $IMaterialHolder;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.WoodStorageBlockBase" {
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockFamily} from "net.minecraft.data.BlockFamily"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IAdditionalDropDataBlock$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.IAdditionalDropDataBlock"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$StorageBlockBase} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockBase"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WoodStorageBlockBase extends $StorageBlockBase implements $IAdditionalDropDataBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TICKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "addDropData"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "addNameWoodAndTintData"(arg0: $ItemStack$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodStorageBlockBase$$Type = ($WoodStorageBlockBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodStorageBlockBase$$Original = $WoodStorageBlockBase;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ISneakItemInteractionBlock" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ISneakItemInteractionBlock$$Interface {

(arg0: $Player, arg1: $InteractionHand, arg2: $BlockState, arg3: $Level, arg4: $BlockPos, arg5: $BlockHitResult, arg6: $ItemStack): boolean
}

export class $ISneakItemInteractionBlock implements $ISneakItemInteractionBlock$$Interface {
 "trySneakItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type, arg6: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISneakItemInteractionBlock$$Type = ((arg0: $Player, arg1: $InteractionHand, arg2: $BlockState, arg3: $Level, arg4: $BlockPos, arg5: $BlockHitResult, arg6: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISneakItemInteractionBlock$$Original = $ISneakItemInteractionBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ChestBlock" {
import {$ChestType} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockFamily} from "net.minecraft.data.BlockFamily"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$StorageBlockEntity, $StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$WoodStorageBlockBase} from "net.p3pp3rf1y.sophisticatedstorage.block.WoodStorageBlockBase"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ChestBlock extends $WoodStorageBlockBase implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TICKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>

constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>)
constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>, arg2: float)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "addDropData"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
public "getNeighborPos"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $List<($BlockPos)>
public "tryFillUpgrades"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $ItemStack$$Type): boolean
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFacing"(arg0: $BlockState$$Type): $Direction
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public static "isChestBlockedAt"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $StorageBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestBlock$$Type = ($ChestBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestBlock$$Original = $ChestBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageLinkBlock" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $StorageLinkBlock extends $BlockBase implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageLinkBlock$$Type = ($StorageLinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageLinkBlock$$Original = $StorageLinkBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ITintableBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"

export interface $ITintableBlockItem$$Interface {
}

export class $ITintableBlockItem implements $ITintableBlockItem$$Interface {
 "setMainColor"(arg0: $ItemStack$$Type, arg1: integer): void
 "setAccentColor"(arg0: $ItemStack$$Type, arg1: integer): void
 "removeMainColor"(arg0: $ItemStack$$Type): void
 "removeAccentColor"(arg0: $ItemStack$$Type): void
 "getMainColor"(arg0: $ItemStack$$Type): $Optional<(integer)>
 "getAccentColor"(arg0: $ItemStack$$Type): $Optional<(integer)>
 "isTintable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintableBlockItem$$Type = ($ITintableBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITintableBlockItem$$Original = $ITintableBlockItem;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageWrapper" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ITrackedContentsItemHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$UpgradeHandler} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SettingsHandler} from "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler"
import {$InventoryHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$IStorageFluidHandler} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$Class$$Type} from "java.lang.Class"
import {$RenderInfo} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper$$Interface} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$SortBy, $SortBy$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy"

export class $StorageWrapper implements $IStorageWrapper$$Interface {
static readonly "NUMBER_OF_INVENTORY_SLOTS_TAG": StringJS
static readonly "SORT_BY_TAG": StringJS
static readonly "ACCENT_COLOR_TAG": StringJS
static readonly "CONTENTS_TAG": StringJS
static readonly "MAIN_COLOR_TAG": StringJS
static readonly "NUMBER_OF_UPGRADE_SLOTS_TAG": StringJS
static readonly "RENDER_INFO_TAG": StringJS

public "load"(arg0: $CompoundTag$$Type): void
public "sort"(): void
public "save"(arg0: $CompoundTag$$Type): $CompoundTag
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "getDefaultNumberOfUpgradeSlots"(): integer
public "getDefaultNumberOfInventorySlots"(): integer
public "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
public "getUpgradeHandler"(): $UpgradeHandler
public "setContentsChangeHandler"(arg0: $Runnable$$Type): void
public "getNumberOfSlotRows"(): integer
public "onContentsNbtUpdated"(): void
public "onInit"(arg0: $Level$$Type): void
public "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
public "setContentsUuid"(arg0: $UUID$$Type): void
public "changeSize"(arg0: integer, arg1: integer): void
public "hasAccentColor"(): boolean
public "getRenderInfo"(): $RenderInfo
public "hasMainColor"(): boolean
public "getSettingsHandler"(): $SettingsHandler
public "refreshInventoryForUpgradeProcessing"(): void
public "setColors"(arg0: integer, arg1: integer): void
public "getSortBy"(): $SortBy
public "setSortBy"(arg0: $SortBy$$Type): void
public "getMainColor"(): integer
public "getAccentColor"(): integer
public "removeOpenTabId"(): void
public "setOpenTabId"(arg0: integer): void
public "fillWithLoot"(arg0: $Player$$Type): void
public "getOpenTabId"(): $Optional<(integer)>
public "setColumnsTaken"(arg0: integer, arg1: boolean): void
public "getColumnsTaken"(): integer
public "setPersistent"(arg0: boolean): void
public "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
public "getNumberOfInventorySlots"(): integer
public "getInventoryHandler"(): $InventoryHandler
public "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
public "refreshInventoryForInputOutput"(): void
public "getDisplayName"(): $Component
public "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
public "getWrappedStorageStack"(): $ItemStack
public "getBaseStackSizeMultiplier"(): integer
public "getContentsUuid"(): $Optional<($UUID)>
public "getStorageType"(): StringJS
public "getEnergyStorage"(): $Optional<($IEnergyStorage)>
public "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
public "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
get "defaultNumberOfUpgradeSlots"(): integer
get "defaultNumberOfInventorySlots"(): integer
get "upgradeHandler"(): $UpgradeHandler
set "contentsChangeHandler"(value: $Runnable$$Type)
get "numberOfSlotRows"(): integer
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
set "contentsUuid"(value: $UUID$$Type)
get "renderInfo"(): $RenderInfo
get "settingsHandler"(): $SettingsHandler
get "sortBy"(): $SortBy
set "sortBy"(value: $SortBy$$Type)
get "mainColor"(): integer
get "accentColor"(): integer
set "openTabId"(value: integer)
get "openTabId"(): $Optional<(integer)>
get "columnsTaken"(): integer
set "persistent"(value: boolean)
set "upgradeCachesInvalidatedHandler"(value: $Runnable$$Type)
get "numberOfInventorySlots"(): integer
get "inventoryHandler"(): $InventoryHandler
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
get "displayName"(): $Component
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "wrappedStorageStack"(): $ItemStack
get "baseStackSizeMultiplier"(): integer
get "contentsUuid"(): $Optional<($UUID)>
get "storageType"(): StringJS
get "energyStorage"(): $Optional<($IEnergyStorage)>
set "inventorySlotChangeHandler"(value: $Runnable$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageWrapper$$Type = ($StorageWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageWrapper$$Original = $StorageWrapper;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlockEntity$IItemDecorator" {
import {$DecorationTableBlockEntity$TintDecorationResult} from "net.p3pp3rf1y.sophisticatedstorage.block.DecorationTableBlockEntity$TintDecorationResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$List} from "java.util.List"
import {$BarrelMaterial$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial"

export interface $DecorationTableBlockEntity$IItemDecorator$$Interface {
}

export class $DecorationTableBlockEntity$IItemDecorator implements $DecorationTableBlockEntity$IItemDecorator$$Interface {
 "supportsTopInnerTrim"(arg0: $ItemStack$$Type): boolean
 "consumesIngredientsOnCraft"(): boolean
 "getPreviewStackInputs"(arg0: $ItemStack$$Type, arg1: boolean): $List<($ItemStack)>
 "decorateWithMaterials"(arg0: $ItemStack$$Type, arg1: $Map$$Type<($BarrelMaterial$$Type), ($ResourceLocation$$Type)>): $ItemStack
 "supportsTints"(arg0: $ItemStack$$Type): boolean
 "supportsMaterials"(arg0: $ItemStack$$Type): boolean
 "decorateWithTints"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $DecorationTableBlockEntity$TintDecorationResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorationTableBlockEntity$IItemDecorator$$Type = ($DecorationTableBlockEntity$IItemDecorator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorationTableBlockEntity$IItemDecorator$$Original = $DecorationTableBlockEntity$IItemDecorator;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageConnectorBlock" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StorageConnectorBlock extends $BlockBase implements $EntityBlock$$Interface {
static readonly "TOOLTIP_TRANSLATION_KEY": StringJS
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
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

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageConnectorBlock$$Type = ($StorageConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageConnectorBlock$$Original = $StorageConnectorBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$BarrelMaterial$MaterialModelPart} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial$MaterialModelPart"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BarrelMaterial extends $Enum<($BarrelMaterial)> implements $StringRepresentable$$Interface {
static readonly "ALL": $BarrelMaterial
static readonly "CODEC": $Codec<($BarrelMaterial)>
static readonly "SIDE_TRIM": $BarrelMaterial
static readonly "BOTTOM": $BarrelMaterial
static readonly "TOP_INNER_TRIM": $BarrelMaterial
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($BarrelMaterial)>
static readonly "SIDE": $BarrelMaterial
static readonly "SIDE_ALL": $BarrelMaterial
static readonly "TOP": $BarrelMaterial
static readonly "ALL_BUT_TRIM": $BarrelMaterial
static readonly "TOP_TRIM": $BarrelMaterial
static readonly "ALL_TRIM": $BarrelMaterial
static readonly "TOP_ALL": $BarrelMaterial
static readonly "BOTTOM_TRIM": $BarrelMaterial
static readonly "BOTTOM_ALL": $BarrelMaterial

public static "values"(): ($BarrelMaterial)[]
public static "valueOf"(arg0: StringJS): $BarrelMaterial
public "isLeaf"(): boolean
public "getChildren"(): ($BarrelMaterial)[]
public "getMaterialModelPart"(): $BarrelMaterial$MaterialModelPart
public static "getFillFromDefaults"(arg0: $BarrelMaterial$$Type): $List<($BarrelMaterial)>
public "getSerializedName"(): StringJS
public static "fromName"(arg0: StringJS): $BarrelMaterial
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "leaf"(): boolean
get "children"(): ($BarrelMaterial)[]
get "materialModelPart"(): $BarrelMaterial$MaterialModelPart
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$$Type = (("side") | ("side_trim") | ("bottom") | ("bottom_trim") | ("top") | ("top_trim") | ("top_inner_trim") | ("all") | ("all_trim") | ("all_but_trim") | ("top_all") | ("side_all") | ("bottom_all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarrelMaterial$$Original = $BarrelMaterial;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.LimitedBarrelBlock" {
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$VerticalFacing} from "net.p3pp3rf1y.sophisticatedstorage.block.VerticalFacing"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockFamily} from "net.minecraft.data.BlockFamily"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RenderInfo$DisplayItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BarrelBlock} from "net.p3pp3rf1y.sophisticatedstorage.block.BarrelBlock"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LimitedBarrelBlock extends $BarrelBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLAT_TOP": $BooleanProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "OPEN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TICKING": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "VERTICAL_FACING": $EnumProperty<($VerticalFacing)>
static readonly "FACING": $DirectionProperty

constructor(arg0: integer, arg1: $Supplier$$Type<(integer)>, arg2: $Supplier$$Type<(integer)>, arg3: float)

public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "hasFixedIndexDisplayItems"(): boolean
public static "setupDefaultSettings"(arg0: $IStorageWrapper$$Type): void
public "getDisplayItemsCount"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>): integer
public static "getNorthBasedRotation"(arg0: $Direction$$Type): $Quaternionf
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getVerticalFacing"(arg0: $BlockState$$Type): $VerticalFacing
public "tryToDyeAll"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
public "tryToTakeItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBaseStackSizeMultiplier"(): integer
public "getFacing"(arg0: $BlockState$$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getHorizontalDirection"(arg0: $BlockState$$Type): $Direction
public "trySneakItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type, arg6: $ItemStack$$Type): boolean
public "isLookingAtFront"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static set "upDefaultSettings"(value: $IStorageWrapper$$Type)
get "baseStackSizeMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimitedBarrelBlock$$Type = ($LimitedBarrelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LimitedBarrelBlock$$Original = $LimitedBarrelBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.SophisticatedOpenersCounter" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerOpenersCounter} from "net.minecraft.world.level.block.entity.ContainerOpenersCounter"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SophisticatedOpenersCounter extends $ContainerOpenersCounter {
constructor()

public "setForPhysicalBlock"(arg0: boolean): void
public "incrementOpeners"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "recheckOpeners"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
set "forPhysicalBlock"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SophisticatedOpenersCounter$$Type = ($SophisticatedOpenersCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SophisticatedOpenersCounter$$Original = $SophisticatedOpenersCounter;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable$$Interface {
get "locked"(): boolean
}

export class $ILockable implements $ILockable$$Interface {
 "isLocked"(): boolean
 "toggleLockVisibility"(): void
 "toggleLock"(): void
 "shouldShowLock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$$Type = ($ILockable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILockable$$Original = $ILockable;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.IStorageBlock" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IStorageBlock$$Interface {
get "numberOfUpgradeSlots"(): integer
get "baseStackSizeMultiplier"(): integer
get "numberOfInventorySlots"(): integer
}

export class $IStorageBlock implements $IStorageBlock$$Interface {
 "setTicking"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean): void
 "getNumberOfUpgradeSlots"(): integer
 "getBaseStackSizeMultiplier"(): integer
 "getNumberOfInventorySlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageBlock$$Type = ($IStorageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageBlock$$Original = $IStorageBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.BarrelMaterial$MaterialModelPart" {
import {$Enum} from "java.lang.Enum"

export class $BarrelMaterial$MaterialModelPart extends $Enum<($BarrelMaterial$MaterialModelPart)> {
static readonly "CORE": $BarrelMaterial$MaterialModelPart
static readonly "TRIM": $BarrelMaterial$MaterialModelPart
static readonly "BOTH": $BarrelMaterial$MaterialModelPart

public static "values"(): ($BarrelMaterial$MaterialModelPart)[]
public static "valueOf"(arg0: StringJS): $BarrelMaterial$MaterialModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelMaterial$MaterialModelPart$$Type = (("both") | ("trim") | ("core"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarrelMaterial$MaterialModelPart$$Original = $BarrelMaterial$MaterialModelPart;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.ShulkerBoxBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IAdditionalDropDataBlock$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.IAdditionalDropDataBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StorageBlockBase} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockBase"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ShulkerBoxBlock extends $StorageBlockBase implements $IAdditionalDropDataBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TICKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>

constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>)
constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>, arg2: float)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "isCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
public "setTicking"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean): void
public "addDropData"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
public "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getTintedStack"(arg0: $DyeColor$$Type): $ItemStack
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFacing"(arg0: $BlockState$$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxBlock$$Type = ($ShulkerBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxBlock$$Original = $ShulkerBoxBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockBase" {
import {$BlockBase} from "net.p3pp3rf1y.sophisticatedcore.util.BlockBase"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$VerticalFacing} from "net.p3pp3rf1y.sophisticatedstorage.block.VerticalFacing"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IStorageBlock$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.IStorageBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RenderInfo$DisplayItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ISneakItemInteractionBlock$$Interface} from "net.p3pp3rf1y.sophisticatedstorage.block.ISneakItemInteractionBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StorageBlockBase extends $BlockBase implements $IStorageBlock$$Interface, $ISneakItemInteractionBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TICKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "hasFixedIndexDisplayItems"(): boolean
public "getDisplayItemsCount"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>): integer
public "tryAddSingleUpgrade"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $StorageBlockEntity$$Type, arg3: $ItemStack$$Type): boolean
public static "tryAddSingleUpgrade"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $IStorageWrapper$$Type): boolean
public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "setTicking"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean): void
public "getNeighborPos"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $List<($BlockPos)>
public "getVerticalFacing"(arg0: $BlockState$$Type): $VerticalFacing
public "tryFillUpgrades"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $ItemStack$$Type): boolean
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getNumberOfUpgradeSlots"(): integer
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getFacing"(arg0: $BlockState$$Type): $Direction
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getHorizontalDirection"(arg0: $BlockState$$Type): $Direction
public "getNumberOfInventorySlots"(): integer
public "trySneakItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type, arg6: $ItemStack$$Type): boolean
public "getBaseStackSizeMultiplier"(): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "numberOfUpgradeSlots"(): integer
get "numberOfInventorySlots"(): integer
get "baseStackSizeMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockBase$$Type = ($StorageBlockBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageBlockBase$$Original = $StorageBlockBase;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.BarrelBlock" {
import {$WoodType} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockFamily} from "net.minecraft.data.BlockFamily"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$StorageBlockEntity, $StorageBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedstorage.block.StorageBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WoodStorageBlockBase} from "net.p3pp3rf1y.sophisticatedstorage.block.WoodStorageBlockBase"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BarrelBlock extends $WoodStorageBlockBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CUSTOM_TEXTURE_WOOD_TYPES": $Map<($WoodType), ($BlockFamily)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLAT_TOP": $BooleanProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TICKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>, arg2: float)
constructor(arg0: $Supplier$$Type<(integer)>, arg1: $Supplier$$Type<(integer)>, arg2: float, arg3: $Function$$Type<($StateDefinition<($Block), ($BlockState)>), ($BlockState$$Type)>)

public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "isCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
public "addDropData"(arg0: $ItemStack$$Type, arg1: $StorageBlockEntity$$Type): void
public "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getFacing"(arg0: $BlockState$$Type): $Direction
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $StorageBlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarrelBlock$$Type = ($BarrelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarrelBlock$$Original = $BarrelBlock;}
declare module "net.p3pp3rf1y.sophisticatedstorage.block.VerticalFacing" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $VerticalFacing extends $Enum<($VerticalFacing)> implements $StringRepresentable$$Interface {
static readonly "NO": $VerticalFacing
static readonly "DOWN": $VerticalFacing
static readonly "UP": $VerticalFacing

public static "values"(): ($VerticalFacing)[]
public static "valueOf"(arg0: StringJS): $VerticalFacing
public "getIndex"(): integer
public "getSerializedName"(): StringJS
public static "fromDirection"(arg0: $Direction$$Type): $VerticalFacing
public "getDirection"(): $Direction
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "index"(): integer
get "serializedName"(): StringJS
get "direction"(): $Direction
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalFacing$$Type = (("no") | ("up") | ("down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalFacing$$Original = $VerticalFacing;}
