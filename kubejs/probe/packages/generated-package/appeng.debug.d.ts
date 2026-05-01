declare module "appeng.debug.CubeGeneratorBlockEntity" {
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CubeGeneratorBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeGeneratorBlockEntity$$Type = ($CubeGeneratorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeGeneratorBlockEntity$$Original = $CubeGeneratorBlockEntity;}
declare module "appeng.debug.PhantomNodeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$PhantomNodeBlockEntity} from "appeng.debug.PhantomNodeBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PhantomNodeBlock extends $AEBaseEntityBlock<($PhantomNodeBlockEntity)> {
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

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomNodeBlock$$Type = ($PhantomNodeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhantomNodeBlock$$Original = $PhantomNodeBlock;}
declare module "appeng.debug.DebugCardItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $DebugCardItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugCardItem$$Type = ($DebugCardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugCardItem$$Original = $DebugCardItem;}
declare module "appeng.debug.EnergyGeneratorBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity$$Interface} from "appeng.blockentity.ServerTickingBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyGeneratorBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity$$Interface, $IEnergyStorage$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setGenerationRate"(arg0: integer): void
public "getGenerationRate"(): integer
public "getMaxEnergyStored"(): integer
public "getEnergyStored"(): integer
public "serverTick"(): void
public "canReceive"(): boolean
public "canExtract"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public static "tryClear"(arg0: any): void
set "generationRate"(value: integer)
get "generationRate"(): integer
get "maxEnergyStored"(): integer
get "energyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyGeneratorBlockEntity$$Type = ($EnergyGeneratorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyGeneratorBlockEntity$$Original = $EnergyGeneratorBlockEntity;}
declare module "appeng.debug.PhantomNodeBlockEntity" {
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AENetworkedBlockEntity} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PhantomNodeBlockEntity extends $AENetworkedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "onReady"(): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomNodeBlockEntity$$Type = ($PhantomNodeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhantomNodeBlockEntity$$Original = $PhantomNodeBlockEntity;}
declare module "appeng.debug.EnergyGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnergyGeneratorBlockEntity} from "appeng.debug.EnergyGeneratorBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyGeneratorBlock extends $AEBaseEntityBlock<($EnergyGeneratorBlockEntity)> {
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

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyGeneratorBlock$$Type = ($EnergyGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyGeneratorBlock$$Original = $EnergyGeneratorBlock;}
declare module "appeng.debug.ItemGenBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemGenBlockEntity} from "appeng.debug.ItemGenBlockEntity"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemGenBlock extends $AEBaseEntityBlock<($ItemGenBlockEntity)> {
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

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGenBlock$$Type = ($ItemGenBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGenBlock$$Original = $ItemGenBlock;}
declare module "appeng.debug.CubeGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AEBaseEntityBlock} from "appeng.block.AEBaseEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$CubeGeneratorBlockEntity} from "appeng.debug.CubeGeneratorBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CubeGeneratorBlock extends $AEBaseEntityBlock<($CubeGeneratorBlockEntity)> {
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

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeGeneratorBlock$$Type = ($CubeGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeGeneratorBlock$$Original = $CubeGeneratorBlock;}
declare module "appeng.debug.EraserItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $EraserItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EraserItem$$Type = ($EraserItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EraserItem$$Original = $EraserItem;}
declare module "appeng.debug.MeteoritePlacerItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $MeteoritePlacerItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteoritePlacerItem$$Type = ($MeteoritePlacerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeteoritePlacerItem$$Original = $MeteoritePlacerItem;}
declare module "appeng.debug.ItemGenBlockEntity" {
import {$AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InternalInventoryHost$$Interface} from "appeng.util.inv.InternalInventoryHost"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemGenBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearRemoved"(): void
public "setItem"(arg0: $Item$$Type): void
public "getItemHandler"(): $IItemHandler
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "item"(value: $Item$$Type)
get "itemHandler"(): $IItemHandler
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGenBlockEntity$$Type = ($ItemGenBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGenBlockEntity$$Original = $ItemGenBlockEntity;}
declare module "appeng.debug.ReplicatorCardItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $ReplicatorCardItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplicatorCardItem$$Type = ($ReplicatorCardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReplicatorCardItem$$Original = $ReplicatorCardItem;}
