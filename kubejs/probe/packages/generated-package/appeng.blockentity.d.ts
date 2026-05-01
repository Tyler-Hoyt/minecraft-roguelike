declare module "appeng.blockentity.ServerTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerTickingBlockEntity$$Interface {

(): void
}

export class $ServerTickingBlockEntity implements $ServerTickingBlockEntity$$Interface {
 "serverTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickingBlockEntity$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickingBlockEntity$$Original = $ServerTickingBlockEntity;}
declare module "appeng.blockentity.CommonTickingBlockEntity" {
import {$ClientTickingBlockEntity$$Interface} from "appeng.blockentity.ClientTickingBlockEntity"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"

export interface $CommonTickingBlockEntity$$Interface extends $ServerTickingBlockEntity$$Interface, $ClientTickingBlockEntity$$Interface {

(): void
}

export class $CommonTickingBlockEntity implements $CommonTickingBlockEntity$$Interface {
 "clientTick"(): void
 "commonTick"(): void
 "serverTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTickingBlockEntity$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonTickingBlockEntity$$Original = $CommonTickingBlockEntity;}
declare module "appeng.blockentity.AEBaseInvBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventoryHost$$Interface} from "appeng.util.inv.InternalInventoryHost"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AEBaseInvBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInternalInventory"(): $InternalInventory
public "getExposedItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "clearContent"(): void
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseInvBlockEntity$$Type = ($AEBaseInvBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseInvBlockEntity$$Original = $AEBaseInvBlockEntity;}
declare module "appeng.blockentity.AEBaseBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IDebugExportable$$Interface} from "appeng.util.IDebugExportable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable$$Interface} from "net.minecraft.world.Clearable"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockOrientation} from "appeng.api.orientation.BlockOrientation"
import {$Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ISegmentedInventory$$Interface} from "appeng.api.inventories.ISegmentedInventory"

export class $AEBaseBlockEntity extends $BlockEntity implements $Nameable$$Interface, $ISegmentedInventory$$Interface, $Clearable$$Interface, $IDebugExportable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getName"(): $Component
public "setName"(arg0: StringJS): void
public "saveChanges"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getCustomName"(): $Component
public static "registerBlockEntityItem"(arg0: $BlockEntityType$$Type<(never)>, arg1: $Item$$Type): void
public "markForClientUpdate"(): void
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "getGlobalPos"(): $GlobalPos
public "getFront"(): $Direction
public "getOrientation"(): $BlockOrientation
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $Player$$Type): $DataComponentMap
public "getModelData"(): $ModelData
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "markForUpdate"(): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "clearContent"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "notLoaded"(): boolean
public "getTop"(): $Direction
public "getQueuedForReady"(): byte
public "getReadyInvoked"(): byte
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "name"(): $Component
set "name"(value: StringJS)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "customName"(): $Component
get "globalPos"(): $GlobalPos
get "front"(): $Direction
get "orientation"(): $BlockOrientation
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$$Type)
get "top"(): $Direction
get "queuedForReady"(): byte
get "readyInvoked"(): byte
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlockEntity$$Type = ($AEBaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseBlockEntity$$Original = $AEBaseBlockEntity;}
declare module "appeng.blockentity.ClientTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientTickingBlockEntity$$Interface {

(): void
}

export class $ClientTickingBlockEntity implements $ClientTickingBlockEntity$$Interface {
 "clientTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickingBlockEntity$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientTickingBlockEntity$$Original = $ClientTickingBlockEntity;}
