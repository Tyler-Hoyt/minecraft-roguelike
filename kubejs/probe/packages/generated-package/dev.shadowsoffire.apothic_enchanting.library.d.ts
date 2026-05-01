declare module "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryTile" {
import {$EnchLibraryContainer$$Type} from "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryContainer"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchLibraryTile extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer)

public "getMax"(arg0: $Holder$$Type<($Enchantment)>): integer
public "removeListener"(arg0: $EnchLibraryContainer$$Type): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "addListener"(arg0: $EnchLibraryContainer$$Type): void
public "canExtract"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer, arg2: integer): boolean
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public static "levelToPoints"(arg0: integer): integer
public "loadEnchData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): void
public "saveEnchData"(arg0: $CompoundTag$$Type): void
public "depositBook"(arg0: $ItemStack$$Type): void
public "extractEnchant"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: integer): void
public "getPointsMap"(): $Object2IntMap<($Holder<($Enchantment)>)>
public "getLevelsMap"(): $Object2IntMap<($Holder<($Enchantment)>)>
get "updatePacket"(): $Packet
get "pointsMap"(): $Object2IntMap<($Holder<($Enchantment)>)>
get "levelsMap"(): $Object2IntMap<($Holder<($Enchantment)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchLibraryTile$$Type = ($EnchLibraryTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchLibraryTile$$Original = $EnchLibraryTile;}
declare module "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
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
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$EnchLibraryTile$$Type} from "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EnchLibraryBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NAME": $Component
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

constructor(arg0: $BlockEntityType$BlockEntitySupplier$$Type<($EnchLibraryTile$$Type)>, arg1: integer)

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
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
export type $EnchLibraryBlock$$Type = ($EnchLibraryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchLibraryBlock$$Original = $EnchLibraryBlock;}
declare module "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryContainer" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ButtonClickPayload$IButtonContainer$$Interface} from "dev.shadowsoffire.placebo.payloads.ButtonClickPayload$IButtonContainer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchLibraryTile} from "dev.shadowsoffire.apothic_enchanting.library.EnchLibraryTile"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$BlockEntityMenu} from "dev.shadowsoffire.placebo.menu.BlockEntityMenu"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Object2IntMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"

export class $EnchLibraryContainer extends $BlockEntityMenu<($EnchLibraryTile)> implements $ButtonClickPayload$IButtonContainer$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $BlockPos$$Type)

public "removed"(arg0: $Player$$Type): void
public "getNumStoredEnchants"(): integer
public "getPointsForDisplay"(): $List<($Object2IntMap$Entry<($Holder<($Enchantment)>)>)>
public "onButtonClick"(arg0: integer): void
public "getPointCap"(): integer
public "setNotifier"(arg0: $Runnable$$Type): void
public "onChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getMaxLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "getSlot"(arg0: integer): $Slot
get "numStoredEnchants"(): integer
get "pointsForDisplay"(): $List<($Object2IntMap$Entry<($Holder<($Enchantment)>)>)>
get "pointCap"(): integer
set "notifier"(value: $Runnable$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchLibraryContainer$$Type = ($EnchLibraryContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchLibraryContainer$$Original = $EnchLibraryContainer;}
