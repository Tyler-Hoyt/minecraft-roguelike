declare module "com.aetherteam.aether.blockentity.TreasureChestBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RandomizableContainerBlockEntity} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$WorldlyContainer$$Interface} from "net.minecraft.world.WorldlyContainer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LidBlockEntity$$Interface} from "net.minecraft.world.level.block.entity.LidBlockEntity"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TreasureChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity$$Interface, $WorldlyContainer$$Interface {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor()

public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "setKind"(arg0: $ResourceLocation$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "getContainerSize"(): integer
public "getKind"(): $ResourceLocation
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public static "setDungeonType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $ResourceLocation$$Type): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "recheckOpen"(): void
public static "lidAnimateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $TreasureChestBlockEntity$$Type): void
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getLocked"(): boolean
public "tryUnlock"(arg0: $Player$$Type): boolean
public "getOpenNess"(arg0: float): float
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "setLocked"(arg0: boolean): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getLevel"(): $Level
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public "getBlockPos"(): $BlockPos
public static "tryClear"(arg0: any): void
set "kind"(value: $ResourceLocation$$Type)
get "updatePacket"(): $Packet
get "containerSize"(): integer
get "kind"(): $ResourceLocation
get "locked"(): boolean
set "locked"(value: boolean)
get "changed"(): void
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureChestBlockEntity$$Type = ($TreasureChestBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TreasureChestBlockEntity$$Original = $TreasureChestBlockEntity;}
