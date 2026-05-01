declare module "appeng.block.IOwnerAwareBlockEntity" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IOwnerAwareBlockEntity$$Interface {

(arg0: $Player): void
set "owner"(value: $Player$$Type)
}

export class $IOwnerAwareBlockEntity implements $IOwnerAwareBlockEntity$$Interface {
 "setOwner"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerAwareBlockEntity$$Type = ((arg0: $Player) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOwnerAwareBlockEntity$$Original = $IOwnerAwareBlockEntity;}
declare module "appeng.block.AEBaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockOrientation} from "appeng.api.orientation.BlockOrientation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"
import {$IOrientableBlock$$Interface} from "appeng.api.orientation.IOrientableBlock"
import {$IOrientationStrategy} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AEBaseBlock extends $Block implements $IOrientableBlock$$Interface {
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

public "toString"(): StringJS
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "stoneProps"(): $BlockBehaviour$Properties
public static "metalProps"(): $BlockBehaviour$Properties
public static "glassProps"(): $BlockBehaviour$Properties
public "getRegistryName"(): $ResourceLocation
public "getOrientationStrategy"(): $IOrientationStrategy
public static "defaultProps"(arg0: $MapColor$$Type, arg1: $SoundType$$Type): $BlockBehaviour$Properties
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "fixtureProps"(): $BlockBehaviour$Properties
public "getOrientation"(arg0: $BlockState$$Type): $BlockOrientation
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "registryName"(): $ResourceLocation
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlock$$Type = ($AEBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseBlock$$Original = $AEBaseBlock;}
declare module "appeng.block.AEBaseBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $AEBaseBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "addCheckedInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlockItem$$Type = ($AEBaseBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseBlockItem$$Original = $AEBaseBlockItem;}
declare module "appeng.block.AEBaseEntityBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$AEBaseBlockEntity} from "appeng.blockentity.AEBaseBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AEBaseBlock} from "appeng.block.AEBaseBlock"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AEBaseEntityBlock<T extends $AEBaseBlockEntity> extends $AEBaseBlock implements $EntityBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: integer, arg2: integer, arg3: integer): T
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getBlockEntityType"(): $BlockEntityType<(T)>
public "getBlockEntityBlockState"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "setBlockEntity"(arg0: $Class$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockEntityTicker$$Type<(T)>, arg3: $BlockEntityTicker$$Type<(T)>): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseEntityBlock$$Type<T> = ($AEBaseEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEBaseEntityBlock$$Original<T> = $AEBaseEntityBlock<(T)>;}
