declare module "io.redspace.ironslib.game.block.statue.player.PlayerStatueBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$AbstractStatueBlock} from "io.redspace.ironslib.game.block.statue.AbstractStatueBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerStatueBlock extends $AbstractStatueBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "MAX": integer
readonly "zSize": integer
static readonly "X_POS": $IntegerProperty
readonly "ySize": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "xSize": integer
static readonly "Y_POS": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PlayerStatueBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "Z_POS": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStatueBlock$$Type = ($PlayerStatueBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerStatueBlock$$Original = $PlayerStatueBlock;}
declare module "io.redspace.ironslib.game.item.LegacyTransmogTableBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

/**
 * 
 * @deprecated
 */
export class $LegacyTransmogTableBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
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
export type $LegacyTransmogTableBlockItem$$Type = ($LegacyTransmogTableBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyTransmogTableBlockItem$$Original = $LegacyTransmogTableBlockItem;}
declare module "io.redspace.ironslib.game.client.ICapeDataProvider" {
import {$CapeData, $CapeData$$Type} from "io.redspace.ironslib.game.client.CapeData"

export interface $ICapeDataProvider$$Interface {

(): $CapeData$$Type
}

export class $ICapeDataProvider implements $ICapeDataProvider$$Interface {
 "irons_lib$getCapeData"(): $CapeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapeDataProvider$$Type = (() => $CapeData$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICapeDataProvider$$Original = $ICapeDataProvider;}
declare module "io.redspace.ironslib.game.item.LegacyPlayerStatueBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

/**
 * 
 * @deprecated
 */
export class $LegacyPlayerStatueBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
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
export type $LegacyPlayerStatueBlockItem$$Type = ($LegacyPlayerStatueBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyPlayerStatueBlockItem$$Original = $LegacyPlayerStatueBlockItem;}
declare module "io.redspace.ironslib.game.block.statue.player.PlayerStatueBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
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

export class $PlayerStatueBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $PlayerStatueBlockItem$$Type = ($PlayerStatueBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerStatueBlockItem$$Original = $PlayerStatueBlockItem;}
declare module "io.redspace.ironslib.game.block.statue.AbstractStatueBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractStatueBlock extends $BaseEntityBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "MAX": integer
readonly "zSize": integer
static readonly "X_POS": $IntegerProperty
readonly "ySize": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "xSize": integer
static readonly "Y_POS": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "Z_POS": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: integer, arg1: integer, arg2: integer)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStatueBlock$$Type = ($AbstractStatueBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractStatueBlock$$Original = $AbstractStatueBlock;}
declare module "io.redspace.ironslib.game.block.transmog_table.LegacyTransmogTableBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$TransmogTableBlock} from "io.redspace.ironslib.game.block.transmog_table.TransmogTableBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $LegacyTransmogTableBlock extends $TransmogTableBlock {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyTransmogTableBlock$$Type = ($LegacyTransmogTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyTransmogTableBlock$$Original = $LegacyTransmogTableBlock;}
declare module "io.redspace.ironslib.game.client.ISupportTransmog" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"

export interface $ISupportTransmog$$Interface {

(arg0: $EquipmentSlot): $ItemStack$$Type
}

export class $ISupportTransmog implements $ISupportTransmog$$Interface {
 "irons_lib$getArmorBySlotRaw"(arg0: $EquipmentSlot$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISupportTransmog$$Type = ((arg0: $EquipmentSlot) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISupportTransmog$$Original = $ISupportTransmog;}
declare module "io.redspace.ironslib.game.block.statue.player.LegacyPlayerStatueBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PlayerStatueBlock} from "io.redspace.ironslib.game.block.statue.player.PlayerStatueBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $LegacyPlayerStatueBlock extends $PlayerStatueBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "MAX": integer
readonly "zSize": integer
static readonly "X_POS": $IntegerProperty
readonly "ySize": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "xSize": integer
static readonly "Y_POS": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PlayerStatueBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "Z_POS": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyPlayerStatueBlock$$Type = ($LegacyPlayerStatueBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyPlayerStatueBlock$$Original = $LegacyPlayerStatueBlock;}
declare module "io.redspace.ironslib.game.block.statue.decorative.DecorativeStatueBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$AbstractStatueBlock} from "io.redspace.ironslib.game.block.statue.AbstractStatueBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DecorativeStatueBlock extends $AbstractStatueBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "MAX": integer
readonly "zSize": integer
static readonly "X_POS": $IntegerProperty
readonly "ySize": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "xSize": integer
static readonly "Y_POS": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DecorativeStatueBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "Z_POS": $IntegerProperty
static readonly "TYPE_CODEC": $Codec<($Holder<($BlockEntityType<(never)>)>)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $Holder$$Type<($BlockEntityType<($BlockEntity)>)>)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorativeStatueBlock$$Type = ($DecorativeStatueBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorativeStatueBlock$$Original = $DecorativeStatueBlock;}
declare module "io.redspace.ironslib.game.block.transmog_table.TransmogTableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MenuProvider} from "net.minecraft.world.MenuProvider"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransmogTableBlock extends $Block {
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

public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmogTableBlock$$Type = ($TransmogTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransmogTableBlock$$Original = $TransmogTableBlock;}
declare module "io.redspace.ironslib.game.client.CapeData" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CapeData {
 "xCloak": double
 "lastTick": integer
 "xCloakO": double
 "yCloakO": double
 "zCloak": double
 "bob": float
 "oBob": float
 "yCloak": double
 "zCloakO": double

constructor()

public "calculateRotationsDegrees"(arg0: $LivingEntity$$Type, arg1: float): $Vec3
public "renderUpdate"(arg0: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapeData$$Type = ($CapeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapeData$$Original = $CapeData;}
