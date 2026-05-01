declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesModifiable" {
import {$LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
import {$IDrawerAttributes$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes"

export interface $IDrawerAttributesModifiable$$Interface extends $IDrawerAttributes$$Interface {
set "priority"(value: integer)
get "sealed"(): boolean
get "priority"(): integer
get "void"(): boolean
get "magnet"(): boolean
get "hopper"(): boolean
get "suspended"(): boolean
get "showingQuantity"(): boolean
get "concealed"(): boolean
get "dictConvertible"(): boolean
get "balancedFill"(): boolean
get "unlimitedStorage"(): boolean
get "unlimitedVending"(): boolean
}

export class $IDrawerAttributesModifiable implements $IDrawerAttributesModifiable$$Interface {
 "setPriority"(arg0: integer): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "setIsBalancedFill"(arg0: boolean): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsHopper"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "setIsMagnet"(arg0: boolean): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSuspended"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$$Type, arg1: boolean): boolean
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isMagnet"(): boolean
 "isHopper"(): boolean
 "isSuspended"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "isShowingQuantity"(): boolean
 "isConcealed"(): boolean
 "isDictConvertible"(): boolean
 "isBalancedFill"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesModifiable$$Type = ($IDrawerAttributesModifiable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerAttributesModifiable$$Original = $IDrawerAttributesModifiable;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacing" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockMeta} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMeta"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacing extends $BlockMeta {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacing$$Type = ($BlockMetaFacing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacing$$Original = $BlockMetaFacing;}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeRedstone extends $Enum<($EnumUpgradeRedstone)> implements $StringRepresentable$$Interface {
static readonly "COMBINED": $EnumUpgradeRedstone
static readonly "MIN": $EnumUpgradeRedstone
static readonly "MAX": $EnumUpgradeRedstone

public "toString"(): StringJS
public static "values"(): ($EnumUpgradeRedstone)[]
public static "valueOf"(arg0: StringJS): $EnumUpgradeRedstone
public "getMetadata"(): integer
public "getSerializedName"(): StringJS
public "getUnlocalizedName"(): StringJS
public static "byMetadata"(arg0: integer): $EnumUpgradeRedstone
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "metadata"(): integer
get "serializedName"(): StringJS
get "unlocalizedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeRedstone$$Type = (("combined") | ("max") | ("min"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumUpgradeRedstone$$Original = $EnumUpgradeRedstone;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$FaceSlotBlock} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockType} from "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$FaceSlotBlock$InteractContext$$Type} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockDrawers extends $FaceSlotBlock implements $INetworked$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "indBaseGeometry": ($AABB)[]
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "retrimType"(): $BlockType
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "interactReturnDrawer"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: $ItemStack$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "interactPullDrawer"(arg0: $FaceSlotBlock$InteractContext$$Type): boolean
public "getStorageUnits"(): integer
public "repartitionBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "retrimBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "getNameTypeKey"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "storageUnits"(): integer
get "nameTypeKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDrawers$$Type = ($BlockDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDrawers$$Original = $BlockDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl" {
import {$LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
import {$EnumSet$$Type} from "java.util.EnumSet"

export interface $IDrawerAttributesGroupControl$$Interface {
set "isShowingQuantity"(value: boolean)
set "isConcealed"(value: boolean)
set "isSuspended"(value: boolean)
}

export class $IDrawerAttributesGroupControl implements $IDrawerAttributesGroupControl$$Interface {
 "setIsShowingQuantity"(arg0: boolean): boolean
 "toggleIsShowingQuantity"(): boolean
 "toggleItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type): boolean
 "toggleConcealed"(): boolean
 "toggleIsSuspended"(): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSuspended"(arg0: boolean): boolean
 "setItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesGroupControl$$Type = ($IDrawerAttributesGroupControl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerAttributesGroupControl$$Original = $IDrawerAttributesGroupControl;}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"

export interface $IFramedMaterials$$Interface {
set "hostBlock"(value: $ItemStack$$Type)
get "hostBlock"(): $ItemStack
}

export class $IFramedMaterials implements $IFramedMaterials$$Interface {
 "setMaterial"(arg0: $FrameMaterial$$Type, arg1: $ItemStack$$Type): void
 "setHostBlock"(arg0: $ItemStack$$Type): void
 "getHostBlock"(): $ItemStack
 "getMaterial"(arg0: $FrameMaterial$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedMaterials$$Type = ($IFramedMaterials);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedMaterials$$Original = $IFramedMaterials;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked" {
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$Set} from "java.util.Set"

export interface $INetworked$$Interface {
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}

export class $INetworked implements $INetworked$$Interface {
 "getBoundControlGroup"(): $IControlGroup
 "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
 "softBindControlGroup"(arg0: $IControlGroup$$Type): void
 "unbindControlGroup"(): void
 "scheduleValidation"(): void
 "canRecurseSearch"(): boolean
 "supportsDirectControllerLink"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworked$$Type = ($INetworked);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INetworked$$Original = $INetworked;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeIllumination" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeIllumination extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeIllumination$$Type = ($ItemUpgradeIllumination);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeIllumination$$Original = $ItemUpgradeIllumination;}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedController" {
import {$BlockController} from "com.jaquadro.minecraft.storagedrawers.block.BlockController"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IFramedBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFramedController extends $BlockController implements $IFramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockController)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedController$$Type = ($BlockFramedController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramedController$$Original = $BlockFramedController;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute" {
import {$Enum} from "java.lang.Enum"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $LockAttribute extends $Enum<($LockAttribute)> {
static readonly "LOCK_EMPTY": $LockAttribute
static readonly "LOCK_POPULATED": $LockAttribute

public static "values"(): ($LockAttribute)[]
public static "valueOf"(arg0: StringJS): $LockAttribute
public static "getEnumSet"(arg0: integer): $EnumSet<($LockAttribute)>
public static "getBitfield"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>): integer
public "getFlagValue"(): integer
get "flagValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockAttribute$$Type = (("lock_populated") | ("lock_empty"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LockAttribute$$Original = $LockAttribute;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockFramingTable" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$EnumFramingTablePart} from "com.jaquadro.minecraft.storagedrawers.block.EnumFramingTablePart"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$DoubleBlockCombiner$BlockType} from "net.minecraft.world.level.block.DoubleBlockCombiner$BlockType"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockFramingTable extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockFramingTable)>
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
static readonly "PART": $EnumProperty<($EnumFramingTablePart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "getTableDirection"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Direction
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public static "getBlockType"(arg0: $BlockState$$Type): $DoubleBlockCombiner$BlockType
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
export type $BlockFramingTable$$Type = ($BlockFramingTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramingTable$$Original = $BlockFramingTable;}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedControllerIO" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IFramedBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$BlockControllerIO} from "com.jaquadro.minecraft.storagedrawers.block.BlockControllerIO"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFramedControllerIO extends $BlockControllerIO implements $IFramedBlock$$Interface {
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

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedControllerIO$$Type = ($BlockFramedControllerIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramedControllerIO$$Original = $BlockFramedControllerIO;}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IFramedSourceBlock$$Interface {

(arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack, arg3: $ItemStack): $ItemStack$$Type
}

export class $IFramedSourceBlock implements $IFramedSourceBlock$$Interface {
 "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedSourceBlock$$Type = ((arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack, arg3: $ItemStack) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedSourceBlock$$Original = $IFramedSourceBlock;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeFillLevel" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeFillLevel extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeFillLevel$$Type = ($ItemUpgradeFillLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeFillLevel$$Original = $ItemUpgradeFillLevel;}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IItemRepository$ItemRecord} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository$ItemRecord"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $IItemRepository$$Interface {
get "allItems"(): $NonNullList<($IItemRepository$ItemRecord)>
}

export class $IItemRepository implements $IItemRepository$$Interface {
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): $ItemStack
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "getItemCapacity"(arg0: $ItemStack$$Type): integer
 "getItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getStoredItemCount"(arg0: $ItemStack$$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$$Type = ($IItemRepository);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemRepository$$Original = $IItemRepository;}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedTrim" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$IFramedBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockTrim} from "com.jaquadro.minecraft.storagedrawers.block.BlockTrim"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockEntityTrim} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityTrim"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BlockFramedTrim extends $BlockTrim implements $EntityBlock$$Interface, $IFramedBlock$$Interface {
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

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntityTrim
public "canUseForRetrim"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedTrim$$Type = ($BlockFramedTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramedTrim$$Original = $BlockFramedTrim;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController" {
import {$BlockController} from "com.jaquadro.minecraft.storagedrawers.block.BlockController"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerGroup, $IDrawerGroup$$Type, $IDrawerGroup$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$MaterialData} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.MaterialData"
import {$List} from "java.util.List"
import {$ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"
import {$IControlGroup, $IControlGroup$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$IDrawerAttributesGroupControl} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$BaseBlockEntity} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$IItemRepository} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IDrawer} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IFramedBlockEntity$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$Stream} from "java.util.stream.Stream"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityController extends $BaseBlockEntity implements $IDrawerGroup$$Interface, $IControlGroup$$Interface, $IFramedBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onEntityLoad"(): void
public "getDrawer"(arg0: integer): $IDrawer
public "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
public "getBlock"(): $BlockController
public "dataPacketRequiresRenderUpdate"(): boolean
public "setRemoved"(): void
public "getBoundControlGroup"(): $IControlGroup
public "toggleProtection"(arg0: $GameProfile$$Type, arg1: $ISecurityProvider$$Type): void
public "updateCache"(): void
public "printDebugInfo"(): void
public "clearProtection"(): void
public "readFixed"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "isValidIO"(arg0: $BlockPos$$Type): boolean
public "getGroupControllableAttributes"(arg0: $Player$$Type): $IDrawerAttributesGroupControl
public "interactPutItemsIntoInventory"(arg0: $Player$$Type): integer
public "material"(): $MaterialData
public "getBalanceDrawers"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $Stream<($IDrawer)>
public "validateRemoteNode"(arg0: $INetworked$$Type): void
public "getItemRepository"(): $IItemRepository
public "getDrawerGroup"(): $IDrawerGroup
public "addRemoteNode"(arg0: $INetworked$$Type): boolean
public "isSoftBindingValid"(arg0: $BlockPos$$Type, arg1: $IDrawerGroup$$Type): boolean
public "isGroupValid"(): boolean
public "getGroupForDrawerSlot"(arg0: integer): $IDrawerGroup
public "invalidateRemoteNode"(arg0: $INetworked$$Type): void
public "getAccessibleDrawerSlots"(): (integer)[]
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "getDrawerCount"(): integer
public "hasMissingDrawers"(): boolean
public "getUpdatePacket"(): $Packet
get "block"(): $BlockController
get "removed"(): void
get "boundControlGroup"(): $IControlGroup
get "itemRepository"(): $IItemRepository
get "drawerGroup"(): $IDrawerGroup
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerCount"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityController$$Type = ($BlockEntityController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityController$$Original = $BlockEntityController;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes" {
import {$LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"

export interface $IDrawerAttributes$$Interface {
get "sealed"(): boolean
get "priority"(): integer
get "void"(): boolean
get "magnet"(): boolean
get "hopper"(): boolean
get "suspended"(): boolean
get "showingQuantity"(): boolean
get "concealed"(): boolean
get "dictConvertible"(): boolean
get "balancedFill"(): boolean
get "unlimitedStorage"(): boolean
get "unlimitedVending"(): boolean
}

export class $IDrawerAttributes implements $IDrawerAttributes$$Interface {
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isMagnet"(): boolean
 "isHopper"(): boolean
 "isSuspended"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "isShowingQuantity"(): boolean
 "isConcealed"(): boolean
 "isDictConvertible"(): boolean
 "isBalancedFill"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributes$$Type = ($IDrawerAttributes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerAttributes$$Original = $IDrawerAttributes;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemKey" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemKey extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "createAttributes"(): $ItemAttributeModifiers
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKey$$Type = ($ItemKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemKey$$Original = $ItemKey;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDetachedDrawer" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IPortable$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemDetachedDrawer extends $Item implements $IPortable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(): StringJS
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultInstance"(): $ItemStack
get "descriptionId"(): StringJS
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetachedDrawer$$Type = ($ItemDetachedDrawer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDetachedDrawer$$Original = $ItemDetachedDrawer;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemShroudKey" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemShroudKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShroudKey$$Type = ($ItemShroudKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemShroudKey$$Original = $ItemShroudKey;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeOneStack" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeOneStack extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeOneStack$$Type = ($ItemUpgradeOneStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeOneStack$$Original = $ItemUpgradeOneStack;}
declare module "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerConfig$$Interface {

(): integer
get "unitsPerSlot"(): integer
}

export class $IDrawerConfig implements $IDrawerConfig$$Interface {
 "getUnitsPerSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerConfig$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerConfig$$Original = $IDrawerConfig;}
declare module "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IDrawerGeometry$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGeometry"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumCompDrawer extends $Enum<($EnumCompDrawer)> implements $IDrawerGeometry$$Interface, $StringRepresentable$$Interface {
static readonly "OPEN2": $EnumCompDrawer
static readonly "OPEN3": $EnumCompDrawer
static readonly "OPEN1": $EnumCompDrawer

public "toString"(): StringJS
public static "values"(): ($EnumCompDrawer)[]
public static "valueOf"(arg0: StringJS): $EnumCompDrawer
public "getMetadata"(): integer
public "getSerializedName"(): StringJS
public static "byOpenSlots"(arg0: integer): $EnumCompDrawer
public "getOpenSlots"(): integer
public static "byMetadata"(arg0: integer): $EnumCompDrawer
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "metadata"(): integer
get "serializedName"(): StringJS
get "openSlots"(): integer
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCompDrawer$$Type = (("open1") | ("open2") | ("open3"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumCompDrawer$$Original = $EnumCompDrawer;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup" {
import {$ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$IDrawerCapabilityProvider$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IDrawerCapabilityProvider"
import {$IDrawer} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"

export interface $IDrawerGroup$$Interface extends $IDrawerCapabilityProvider$$Interface {
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "drawerCount"(): integer
}

export class $IDrawerGroup implements $IDrawerGroup$$Interface {
 "getDrawer"(arg0: integer): $IDrawer
 "isGroupValid"(): boolean
 "getAccessibleDrawerSlots"(): (integer)[]
 "getDrawerCount"(): integer
 "hasMissingDrawers"(): boolean
 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGroup$$Type = ($IDrawerGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerGroup$$Original = $IDrawerGroup;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockKeyButton" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FaceAttachedHorizontalDirectionalBlock} from "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$KeyType$$Type} from "com.jaquadro.minecraft.storagedrawers.block.KeyType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockKeyButton extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockKeyButton)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: $KeyType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "press"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "codec"(): $MapCodec<($BlockKeyButton)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyButton$$Type = ($BlockKeyButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockKeyButton$$Original = $BlockKeyButton;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeConversion" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeConversion extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeConversion$$Type = ($ItemUpgradeConversion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeConversion$$Original = $ItemUpgradeConversion;}
declare module "com.jaquadro.minecraft.storagedrawers.block.KeyType" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Stream} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"

export class $KeyType extends $Record {
static readonly "PERSONAL": $KeyType
static readonly "CODEC": $Codec<($KeyType)>
static readonly "CONCEALMENT": $KeyType
static readonly "SUSPEND": $KeyType
static readonly "QUANTIFY": $KeyType
static readonly "DRAWER": $KeyType

constructor(name: StringJS)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public static "values"(): $Stream<($KeyType)>
public "hashCode"(): integer
public "isEnabled"(): boolean
public static "register"(arg0: $KeyType$$Type): $KeyType
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyType$$Type = ({"name"?: StringJS}) | ([name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyType$$Original = $KeyType;}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IDrawerCapabilityProvider" {
import {$ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"

export interface $IDrawerCapabilityProvider$$Interface {
}

export class $IDrawerCapabilityProvider implements $IDrawerCapabilityProvider$$Interface {
 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerCapabilityProvider$$Type = ($IDrawerCapabilityProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerCapabilityProvider$$Original = $IDrawerCapabilityProvider;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeMagnet" {
import {$EnumUpgradeMagnet, $EnumUpgradeMagnet$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeMagnet"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeMagnet extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EnumUpgradeMagnet
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeMagnet$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpRange"(): integer
public "getDescription"(): $Component
public "getDownRange"(): integer
public "getIdleSpeed"(): integer
public "getHorzRange"(): integer
public "getActiveSpeed"(): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "upRange"(): integer
get "description"(): $Component
get "downRange"(): integer
get "idleSpeed"(): integer
get "horzRange"(): integer
get "activeSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeMagnet$$Type = ($ItemUpgradeMagnet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeMagnet$$Original = $ItemUpgradeMagnet;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradePortability" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradePortability extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradePortability$$Type = ($ItemUpgradePortability);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradePortability$$Original = $ItemUpgradePortability;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemPriorityKey" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ItemPriorityKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: integer, arg2: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getNextKey"(): $ItemPriorityKey
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "nextKey"(): $ItemPriorityKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPriorityKey$$Type = ($ItemPriorityKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPriorityKey$$Original = $ItemPriorityKey;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityTrim" {
import {$IFramedMaterials} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$BaseBlockEntity} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IFramedBlockEntity$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityTrim extends $BaseBlockEntity implements $IFramedBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "dataPacketRequiresRenderUpdate"(): boolean
public "material"(): $IFramedMaterials
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTrim$$Type = ($BlockEntityTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTrim$$Original = $BlockEntityTrim;}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity" {
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"

export interface $IFramedBlockEntity$$Interface {

(): $IFramedMaterials$$Type
}

export class $IFramedBlockEntity implements $IFramedBlockEntity$$Interface {
 "material"(): $IFramedMaterials
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlockEntity$$Type = (() => $IFramedMaterials$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedBlockEntity$$Original = $IFramedBlockEntity;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IPortable$$Interface {

(arg0: $HolderLookup$Provider, arg1: $ItemStack): boolean
}

export class $IPortable implements $IPortable$$Interface {
 "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortable$$Type = ((arg0: $HolderLookup$Provider, arg1: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPortable$$Original = $IPortable;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockController" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$KeyType$$Type} from "com.jaquadro.minecraft.storagedrawers.block.KeyType"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$IFramedSourceBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockController extends $HorizontalDirectionalBlock implements $INetworked$$Interface, $EntityBlock$$Interface, $IFramedSourceBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockController)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "togglePersonal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: StringJS): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "codec"(): $MapCodec<($BlockController)>
public "toggle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $KeyType$$Type): void
public "toggle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $Item$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$$Type): void
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "canRecurseSearch"(): boolean
public "supportsDirectControllerLink"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockController$$Type = ($BlockController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockController$$Original = $BlockController;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.UpgradeData" {
import {$IDrawerAttributesModifiable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesModifiable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityDataShim} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$MagnetDim$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.MagnetDim"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnumUpgradeRedstone} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone"

export class $UpgradeData extends $BlockEntityDataShim {
constructor(arg0: integer)

public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getSlotCount"(): integer
public "getMagnetRange"(arg0: $MagnetDim$$Type): integer
public "getUpgrade"(arg0: integer): $ItemStack
public "addUpgrade"(arg0: $ItemStack$$Type): boolean
public "getStorageMultiplier"(): integer
public "getMagnetActiveRate"(): integer
public "updateRemoteUpgradeBinding"(arg0: $ItemStack$$Type): void
public "hasPortabilityUpgrade"(): boolean
public "setUpgrade"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "hasVendingUpgrade"(): boolean
public "hasOneStackUpgrade"(): boolean
public "getRemoteUpgrade"(): $ItemStack
public "hasMagnetUpgrade"(): boolean
public "getRedstoneType"(): $EnumUpgradeRedstone
public "hasEmptySlot"(): boolean
public "hasHopperUpgrade"(): boolean
public "canRemoveUpgrade"(arg0: integer): boolean
public "canSwapUpgrade"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "hasIlluminationUpgrade"(): boolean
public "setDrawerAttributes"(arg0: $IDrawerAttributesModifiable$$Type): void
public "hasUnlimitedUpgrade"(): boolean
public "hasConversionUpgrade"(): boolean
public "unbindRemoteUpgrade"(): void
public "hasbalancedFillUpgrade"(): boolean
public "hasRemoteUpgrade"(): boolean
public "getMagnetIdleRate"(): integer
public "canAddUpgrade"(arg0: $ItemStack$$Type): boolean
get "slotCount"(): integer
get "storageMultiplier"(): integer
get "magnetActiveRate"(): integer
get "remoteUpgrade"(): $ItemStack
get "redstoneType"(): $EnumUpgradeRedstone
set "drawerAttributes"(value: $IDrawerAttributesModifiable$$Type)
get "magnetIdleRate"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$$Type = ($UpgradeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeData$$Original = $UpgradeData;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawerPuller" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemDrawerPuller extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerPuller$$Type = ($ItemDrawerPuller);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDrawerPuller$$Original = $ItemDrawerPuller;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemQuantifyKey" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemQuantifyKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuantifyKey$$Type = ($ItemQuantifyKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemQuantifyKey$$Original = $ItemQuantifyKey;}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedCompDrawers" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$IFramedBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockCompDrawers} from "com.jaquadro.minecraft.storagedrawers.block.BlockCompDrawers"
import {$EnumCompDrawer} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockFramedCompDrawers extends $BlockCompDrawers implements $IFramedBlock$$Interface {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCompDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedCompDrawers$$Type = ($BlockFramedCompDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramedCompDrawers$$Original = $BlockFramedCompDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockStandardDrawers" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$BlockDrawers} from "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IFramedSourceBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityDrawers} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityDrawers"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStandardDrawers extends $BlockDrawers implements $IFramedSourceBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockStandardDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "indBaseGeometry": ($AABB)[]
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "setMatKey"(arg0: $ResourceLocation$$Type): $BlockStandardDrawers
public "setMatKey"(arg0: StringJS): $BlockStandardDrawers
public "getMatKey"(): StringJS
public "codec"(): $MapCodec<($BlockStandardDrawers)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntityDrawers
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getNameMatKey"(): StringJS
public "repartitionBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "retrimBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "matKey"(value: $ResourceLocation$$Type)
set "matKey"(value: StringJS)
get "matKey"(): StringJS
get "nameMatKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStandardDrawers$$Type = ($BlockStandardDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStandardDrawers$$Original = $BlockStandardDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockTrim" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IFramedSourceBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockTrim extends $Block implements $INetworked$$Interface, $IFramedSourceBlock$$Interface {
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

public "setMatKey"(arg0: StringJS): $BlockTrim
public "setMatKey"(arg0: $ResourceLocation$$Type): $BlockTrim
public "getMatKey"(): StringJS
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getNameMatKey"(): StringJS
public "canUseForRetrim"(): boolean
public "getNameTypeKey"(): StringJS
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$$Type): void
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "canRecurseSearch"(): boolean
public "supportsDirectControllerLink"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "matKey"(value: StringJS)
set "matKey"(value: $ResourceLocation$$Type)
get "matKey"(): StringJS
get "nameMatKey"(): StringJS
get "nameTypeKey"(): StringJS
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrim$$Type = ($BlockTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTrim$$Original = $BlockTrim;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemSuspendKey" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemSuspendKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSuspendKey$$Type = ($ItemSuspendKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSuspendKey$$Original = $ItemSuspendKey;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawerKey" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemDrawerKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerKey$$Type = ($ItemDrawerKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDrawerKey$$Original = $ItemDrawerKey;}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeMagnet" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeMagnet extends $Enum<($EnumUpgradeMagnet)> implements $StringRepresentable$$Interface {
static readonly "LEVEL1": $EnumUpgradeMagnet
static readonly "LEVEL2": $EnumUpgradeMagnet
static readonly "LEVEL3": $EnumUpgradeMagnet

public "toString"(): StringJS
public static "values"(): ($EnumUpgradeMagnet)[]
public static "valueOf"(arg0: StringJS): $EnumUpgradeMagnet
public "getLevel"(): integer
public "getMetadata"(): integer
public "getSerializedName"(): StringJS
public "getUnlocalizedName"(): StringJS
public static "byMetadata"(arg0: integer): $EnumUpgradeMagnet
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "level"(): integer
get "metadata"(): integer
get "serializedName"(): StringJS
get "unlocalizedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeMagnet$$Type = (("level1") | ("level2") | ("level3"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumUpgradeMagnet$$Original = $EnumUpgradeMagnet;}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository$ItemRecord" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $IItemRepository$ItemRecord {
readonly "itemPrototype": $ItemStack
readonly "count": integer

constructor(arg0: $ItemStack$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$ItemRecord$$Type = ($IItemRepository$ItemRecord);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemRepository$ItemRecord$$Original = $IItemRepository$ItemRecord;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedSlotted$Label" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedSlotted$Label extends $BlockMetaFacingSized {
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "SLOT": $IntegerProperty
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Label$$Type = ($BlockMetaFacingSizedSlotted$Label);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSizedSlotted$Label$$Original = $BlockMetaFacingSizedSlotted$Label;}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FrameMaterial extends $Enum<($FrameMaterial)> implements $StringRepresentable$$Interface {
static readonly "SIDE": $FrameMaterial
static readonly "TRIM": $FrameMaterial
static readonly "FRONT": $FrameMaterial

public static "values"(): ($FrameMaterial)[]
public static "valueOf"(arg0: StringJS): $FrameMaterial
public "getSerializedName"(): StringJS
public "getTagKey"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "tagKey"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameMaterial$$Type = (("side") | ("trim") | ("front"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameMaterial$$Original = $FrameMaterial;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemFramedTrim" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemTrim} from "com.jaquadro.minecraft.storagedrawers.item.ItemTrim"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemFramedTrim extends $ItemTrim {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

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
export type $ItemFramedTrim$$Type = ($ItemFramedTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFramedTrim$$Original = $ItemFramedTrim;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeBalance" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeBalance extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeBalance$$Type = ($ItemUpgradeBalance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeBalance$$Original = $ItemUpgradeBalance;}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock" {
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFramedBlock$$Interface {
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}

export class $IFramedBlock implements $IFramedBlock$$Interface {
 "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
 "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
 "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlock$$Type = ($IFramedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFramedBlock$$Original = $IFramedBlock;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockCompDrawers" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$BlockDrawers} from "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EnumCompDrawer} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$IFramedSourceBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCompDrawers extends $BlockDrawers implements $INetworked$$Interface, $IFramedSourceBlock$$Interface {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCompDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "codec"(): $MapCodec<($BlockCompDrawers)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompDrawers$$Type = ($BlockCompDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCompDrawers$$Original = $BlockCompDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.MaterialData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IFramedMaterials$$Type, $IFramedMaterials$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$BlockEntityDataShim} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MaterialData extends $BlockEntityDataShim implements $IFramedMaterials$$Interface {
static readonly "CODEC": $Codec<($MaterialData)>
static readonly "EMPTY": $MaterialData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MaterialData)>

constructor(arg0: $IFramedMaterials$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)
constructor()

public "clear"(): void
public "isEmpty"(): boolean
public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $ItemStack$$Type): void
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getSide"(): $ItemStack
public "setSide"(arg0: $ItemStack$$Type): void
public "getFront"(): $ItemStack
public "setFront"(arg0: $ItemStack$$Type): void
public "setTrim"(arg0: $ItemStack$$Type): void
public "getTrim"(): $ItemStack
public "setMaterial"(arg0: $FrameMaterial$$Type, arg1: $ItemStack$$Type): void
public "getEffectiveTrim"(): $ItemStack
public "getFrameBase"(): $ItemStack
public "getEffectiveFront"(): $ItemStack
public "getEffectiveSide"(): $ItemStack
public "setFrameBase"(arg0: $ItemStack$$Type): void
public "setHostBlock"(arg0: $ItemStack$$Type): void
public "isMatOpaque"(arg0: $ItemStack$$Type): boolean
public "getHostBlock"(): $ItemStack
public "getMaterial"(arg0: $FrameMaterial$$Type): $ItemStack
public "allMatOpaque"(): boolean
get "empty"(): boolean
get "side"(): $ItemStack
set "side"(value: $ItemStack$$Type)
get "front"(): $ItemStack
set "front"(value: $ItemStack$$Type)
set "trim"(value: $ItemStack$$Type)
get "trim"(): $ItemStack
get "effectiveTrim"(): $ItemStack
get "frameBase"(): $ItemStack
get "effectiveFront"(): $ItemStack
get "effectiveSide"(): $ItemStack
set "frameBase"(value: $ItemStack$$Type)
set "hostBlock"(value: $ItemStack$$Type)
get "hostBlock"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialData$$Type = ($MaterialData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialData$$Original = $MaterialData;}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeCreative" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeCreative extends $Enum<($EnumUpgradeCreative)> implements $StringRepresentable$$Interface {
static readonly "STORAGE": $EnumUpgradeCreative
static readonly "VENDING": $EnumUpgradeCreative

public "toString"(): StringJS
public static "values"(): ($EnumUpgradeCreative)[]
public static "valueOf"(arg0: StringJS): $EnumUpgradeCreative
public "getMetadata"(): integer
public "getSerializedName"(): StringJS
public "getUnlocalizedName"(): StringJS
public static "byMetadata"(arg0: integer): $EnumUpgradeCreative
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "metadata"(): integer
get "serializedName"(): StringJS
get "unlocalizedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeCreative$$Type = (("store") | ("vend"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumUpgradeCreative$$Original = $EnumUpgradeCreative;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IDrawerAttributes} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes"

export interface $IDrawer$$Interface {
get "empty"(): boolean
get "enabled"(): boolean
get "attributes"(): $IDrawerAttributes
get "storedItemPrototype"(): $ItemStack
get "storedItemStackSize"(): integer
get "maxCapacity"(): integer
set "storedItemCount"(value: integer)
set "detached"(value: boolean)
get "remainingCapacity"(): integer
get "acceptingRemainingCapacity"(): integer
set "storedItem"(value: $ItemStack$$Type)
get "storedItemCount"(): integer
get "missing"(): boolean
}

export class $IDrawer implements $IDrawer$$Interface {
 "isEmpty"(): boolean
 "isEnabled"(): boolean
 "copy"(): $IDrawer
 "getAttributes"(): $IDrawerAttributes
 "canDetach"(): boolean
 "canItemBeExtracted"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "canItemBeExtracted"(arg0: $ItemStack$$Type): boolean
 "getStoredItemPrototype"(): $ItemStack
 "getStoredItemStackSize"(): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$$Type): integer
 "adjustStoredItemCount"(arg0: integer): integer
 "getMaxCapacity"(): integer
 "getMaxCapacity"(arg0: $ItemStack$$Type): integer
 "setStoredItemCount"(arg0: integer): void
 "setDetached"(arg0: boolean): void
 "getRemainingCapacity"(): integer
 "canItemBeStoredManual"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "getAcceptingRemainingCapacity"(): integer
 "setStoredItem"(arg0: $ItemStack$$Type): $IDrawer
 "setStoredItem"(arg0: $ItemStack$$Type, arg1: integer): $IDrawer
 "getStoredItemCount"(): integer
 "canItemBeStored"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "canItemBeStored"(arg0: $ItemStack$$Type): boolean
 "isMissing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawer$$Type = ($IDrawer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawer$$Original = $IDrawer;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMeta" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMeta extends $Block {
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
export type $BlockMeta$$Type = ($BlockMeta);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMeta$$Original = $BlockMeta;}
declare module "com.jaquadro.minecraft.storagedrawers.block.EnumFramingTablePart" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumFramingTablePart extends $Enum<($EnumFramingTablePart)> implements $StringRepresentable$$Interface {
static readonly "LEFT": $EnumFramingTablePart
static readonly "RIGHT": $EnumFramingTablePart

public "toString"(): StringJS
public static "values"(): ($EnumFramingTablePart)[]
public static "valueOf"(arg0: StringJS): $EnumFramingTablePart
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFramingTablePart$$Type = (("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumFramingTablePart$$Original = $EnumFramingTablePart;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeRedstone" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone"

export class $ItemUpgradeRedstone extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EnumUpgradeRedstone
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeRedstone$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRedstone$$Type = ($ItemUpgradeRedstone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeRedstone$$Original = $ItemUpgradeRedstone;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedSlotted$Slots124" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IntegerSetProperty} from "com.jaquadro.minecraft.storagedrawers.block.state.IntegerSetProperty"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedSlotted$Slots124 extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerSetProperty
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Slots124$$Type = ($BlockMetaFacingSizedSlotted$Slots124);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSizedSlotted$Slots124$$Original = $BlockMetaFacingSizedSlotted$Slots124;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType" {
import {$Enum} from "java.lang.Enum"

export class $BlockType extends $Enum<($BlockType)> {
static readonly "Trim": $BlockType
static readonly "Drawers": $BlockType

public static "values"(): ($BlockType)[]
public static "valueOf"(arg0: StringJS): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$$Type = (("drawers") | ("trim"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockType$$Original = $BlockType;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerGeometry$$Interface {
get "halfDepth"(): boolean
get "drawerCount"(): integer
}

export class $IDrawerGeometry implements $IDrawerGeometry$$Interface {
 "isHalfDepth"(): boolean
 "getDrawerCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGeometry$$Type = ($IDrawerGeometry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrawerGeometry$$Original = $IDrawerGeometry;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.MagnetDim" {
import {$Enum} from "java.lang.Enum"

export class $MagnetDim extends $Enum<($MagnetDim)> {
static readonly "DOWN": $MagnetDim
static readonly "HORIZONTAL": $MagnetDim
static readonly "UP": $MagnetDim

public static "values"(): ($MagnetDim)[]
public static "valueOf"(arg0: StringJS): $MagnetDim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetDim$$Type = (("horizontal") | ("up") | ("down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagnetDim$$Original = $MagnetDim;}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeStorage" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeStorage extends $Enum<($EnumUpgradeStorage)> implements $StringRepresentable$$Interface {
static readonly "GOLD": $EnumUpgradeStorage
static readonly "EMERALD": $EnumUpgradeStorage
static readonly "OBSIDIAN": $EnumUpgradeStorage
static readonly "NETHERITE": $EnumUpgradeStorage
static readonly "DIAMOND": $EnumUpgradeStorage
static readonly "IRON": $EnumUpgradeStorage
static readonly "COPPER": $EnumUpgradeStorage

public "toString"(): StringJS
public static "values"(): ($EnumUpgradeStorage)[]
public static "valueOf"(arg0: StringJS): $EnumUpgradeStorage
public "getLevel"(): integer
public "getMetadata"(): integer
public "getSerializedName"(): StringJS
public "getUnlocalizedName"(): StringJS
public static "byLevel"(arg0: integer): $EnumUpgradeStorage
public static "byMetadata"(arg0: integer): $EnumUpgradeStorage
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "level"(): integer
get "metadata"(): integer
get "serializedName"(): StringJS
get "unlocalizedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeStorage$$Type = (("obsidian") | ("iron") | ("gold") | ("diamond") | ("emerald") | ("copper") | ("netherite"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumUpgradeStorage$$Original = $EnumUpgradeStorage;}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedStandardDrawers" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IFramedBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockType} from "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockStandardDrawers} from "com.jaquadro.minecraft.storagedrawers.block.BlockStandardDrawers"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFramedStandardDrawers extends $BlockStandardDrawers implements $IFramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockStandardDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "indBaseGeometry": ($AABB)[]
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "retrimType"(): $BlockType
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedStandardDrawers$$Type = ($BlockFramedStandardDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFramedStandardDrawers$$Original = $BlockFramedStandardDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedOpen$Open3" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EnumCompDrawer} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedOpen$Open3 extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$Open3$$Type = ($BlockMetaFacingSizedOpen$Open3);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSizedOpen$Open3$$Original = $BlockMetaFacingSizedOpen$Open3;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedOpen$Open2" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EnumCompDrawer} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedOpen$Open2 extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$Open2$$Type = ($BlockMetaFacingSizedOpen$Open2);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSizedOpen$Open2$$Original = $BlockMetaFacingSizedOpen$Open2;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawers" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPortable$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemDrawers extends $BlockItem implements $IPortable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canFitInsideContainerItems"(): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "getDescription"(): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawers$$Type = ($ItemDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDrawers$$Original = $ItemDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BlockEntityDataShim {
constructor()

public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDataShim$$Type = ($BlockEntityDataShim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityDataShim$$Original = $BlockEntityDataShim;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemPersonalKey" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemPersonalKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "getSecurityProviderKey"(): StringJS
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "securityProviderKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPersonalKey$$Type = ($ItemPersonalKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPersonalKey$$Original = $ItemPersonalKey;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedSlotted$Slots23" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IntegerSetProperty} from "com.jaquadro.minecraft.storagedrawers.block.state.IntegerSetProperty"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedSlotted$Slots23 extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerSetProperty
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Slots23$$Type = ($BlockMetaFacingSizedSlotted$Slots23);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSizedSlotted$Slots23$$Original = $BlockMetaFacingSizedSlotted$Slots23;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeCreative" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$EnumUpgradeCreative, $EnumUpgradeCreative$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeCreative"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeCreative extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EnumUpgradeCreative
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeCreative$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeCreative$$Type = ($ItemUpgradeCreative);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeCreative$$Original = $ItemUpgradeCreative;}
declare module "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IProtectable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export interface $ISecurityProvider$$Interface {
get "providerID"(): StringJS
}

export class $ISecurityProvider implements $ISecurityProvider$$Interface {
 "hasAccess"(arg0: $Player$$Type, arg1: $IProtectable$$Type): boolean
 "getProviderID"(): StringJS
 "hasOwnership"(arg0: $GameProfile$$Type, arg1: $IProtectable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityProvider$$Type = ($ISecurityProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISecurityProvider$$Original = $ISecurityProvider;}
declare module "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FaceSlotBlock$InteractContext {
 "hit": $BlockHitResult
 "level": $Level
 "pos": $BlockPos
 "state": $BlockState
 "slot": integer
 "player": $Player

constructor(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type, arg5: integer)

public "getCheckedEntity"<BE extends $BlockEntity>(arg0: $Class$$Type<(BE)>): BE
public "getCheckedEntity"<BE extends $BlockEntity, B extends $Block>(arg0: $Class$$Type<(BE)>, arg1: $Class$$Type<(B)>): BE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$InteractContext$$Type = ($FaceSlotBlock$InteractContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaceSlotBlock$InteractContext$$Original = $FaceSlotBlock$InteractContext;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeVoid" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeVoid extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeVoid$$Type = ($ItemUpgradeVoid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeVoid$$Original = $ItemUpgradeVoid;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityDrawers" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerGroup, $IDrawerGroup$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$MaterialData} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.MaterialData"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IDrawerAttributes} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeData} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.UpgradeData"
import {$Set} from "java.util.Set"
import {$IDrawer} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"
import {$IProtectable$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$ISecurityProvider, $ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable$$Interface} from "net.minecraft.world.Nameable"
import {$ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$BaseBlockEntity} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IFramedBlockEntity$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"

export class $BlockEntityDrawers extends $BaseBlockEntity implements $IDrawerGroup$$Interface, $IProtectable$$Interface, $INetworked$$Interface, $IFramedBlockEntity$$Interface, $Nameable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public "getName"(): $Component
public "getOwner"(): $UUID
public "setOwner"(arg0: $UUID$$Type): boolean
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "onEntityLoad"(): void
/**
 * 
 * @deprecated
 */
public "getDrawer"(arg0: integer): $IDrawer
public "isRedstone"(): boolean
public "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
public "pushItemsTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "dataPacketRequiresRenderUpdate"(): boolean
public "interactPutCurrentItemIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
public "getCustomName"(): $Component
public "entityInside"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): void
public "getEffectiveDrawerCapacity"(): integer
public "getBoundControlGroup"(): $IControlGroup
public "getDrawerAttributes"(): $IDrawerAttributes
public static "getDrawerAttributes"(arg0: $BlockEntityDrawers$$Type): $IDrawerAttributes
public "validateBoundController"(): void
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "setSecurityProvider"(arg0: $ISecurityProvider$$Type): boolean
public "interactPutItemsIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
public "softBindControlGroup"(arg0: $IControlGroup$$Type): void
public "upgrades"(): $UpgradeData
public "setChanged"(): void
public "material"(): $MaterialData
public "getDrawerCapacity"(): integer
public "clientUpdateCount"(arg0: integer, arg1: integer): void
public "writePortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: integer): integer
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: integer, arg3: $Player$$Type): integer
public "isGroupValid"(): boolean
public "getGroup"(): $IDrawerGroup
public static "getGroup"(arg0: $BlockEntityDrawers$$Type): $IDrawerGroup
public "interactPutCurrentInventoryIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
public "getSecurityProvider"(): $ISecurityProvider
/**
 * 
 * @deprecated
 */
public "getAccessibleDrawerSlots"(): (integer)[]
/**
 * 
 * @deprecated
 */
public "getDrawerCount"(): integer
public "readPortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getRedstoneLevel"(): integer
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "canRecurseSearch"(): boolean
public "takeItemsFromSlot"(arg0: integer, arg1: integer): $ItemStack
public "takeItemsFromSlot"(arg0: integer, arg1: integer, arg2: $Player$$Type): $ItemStack
public "supportsDirectControllerLink"(): boolean
public "hasMissingDrawers"(): boolean
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getUpdatePacket"(): $Packet
get "name"(): $Component
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "redstone"(): boolean
get "customName"(): $Component
get "effectiveDrawerCapacity"(): integer
get "boundControlGroup"(): $IControlGroup
get "drawerAttributes"(): $IDrawerAttributes
get "softBoundControlGroups"(): $Set<($IControlGroup)>
set "securityProvider"(value: $ISecurityProvider$$Type)
get "changed"(): void
get "drawerCapacity"(): integer
get "groupValid"(): boolean
get "group"(): $IDrawerGroup
get "securityProvider"(): $ISecurityProvider
get "accessibleDrawerSlots"(): (integer)[]
get "drawerCount"(): integer
get "redstoneLevel"(): integer
get "displayName"(): $Component
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDrawers$$Type = ($BlockEntityDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityDrawers$$Original = $BlockEntityDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockMetaFacing} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacing"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSized extends $BlockMetaFacing {
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSized$$Type = ($BlockMetaFacingSized);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockMetaFacingSized$$Original = $BlockMetaFacingSized;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemTrim" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemTrim extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
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
export type $ItemTrim$$Type = ($ItemTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTrim$$Original = $ItemTrim;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDrawerGroup, $IDrawerGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$List} from "java.util.List"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IDrawerAttributesGroupControl} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"

export interface $IControlGroup$$Interface {
get "boundControlGroup"(): $IControlGroup
get "drawerGroup"(): $IDrawerGroup
get "boundRemoteNodes"(): $List<($INetworked)>
}

export class $IControlGroup implements $IControlGroup$$Interface {
 "getBoundControlGroup"(): $IControlGroup
 "getGroupControllableAttributes"(arg0: $Player$$Type): $IDrawerAttributesGroupControl
 "validateRemoteNode"(arg0: $INetworked$$Type): void
 "getDrawerGroup"(): $IDrawerGroup
 "addRemoteNode"(arg0: $INetworked$$Type): boolean
 "isSoftBindingValid"(arg0: $BlockPos$$Type, arg1: $IDrawerGroup$$Type): boolean
 "invalidateRemoteNode"(arg0: $INetworked$$Type): void
 "getBoundRemoteNodes"(): $List<($INetworked)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControlGroup$$Type = ($IControlGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IControlGroup$$Original = $IControlGroup;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeStorage" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Component} from "net.minecraft.network.chat.Component"
import {$EnumUpgradeStorage, $EnumUpgradeStorage$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeStorage"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeStorage extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "level": $EnumUpgradeStorage
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeStorage$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeStorage$$Type = ($ItemUpgradeStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeStorage$$Original = $ItemUpgradeStorage;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemUpgrade extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "getUpgradeGroup"(): integer
public "getAllowMultiple"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "setAllowMultiple"(arg0: boolean): void
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
get "upgradeGroup"(): integer
get "allowMultiple"(): boolean
set "allowMultiple"(value: boolean)
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$$Type = ($ItemUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgrade$$Original = $ItemUpgrade;}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockControllerIO" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IFramedSourceBlock$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityController} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockControllerIO extends $Block implements $INetworked$$Interface, $EntityBlock$$Interface, $IFramedSourceBlock$$Interface {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getController"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BlockEntityController
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$$Type): void
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "canRecurseSearch"(): boolean
public "supportsDirectControllerLink"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockControllerIO$$Type = ($BlockControllerIO);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockControllerIO$$Original = $BlockControllerIO;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeHopper" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemUpgradeHopper extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeHopper$$Type = ($ItemUpgradeHopper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeHopper$$Original = $ItemUpgradeHopper;}
declare module "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$FaceSlotBlock$InteractContext$$Type} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$INetworked$$Interface} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FaceSlotBlock extends $HorizontalDirectionalBlock implements $INetworked$$Interface, $EntityBlock$$Interface {
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

public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "leftAction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "getFaceSlot"(arg0: $BlockState$$Type, arg1: $BlockHitResult$$Type): integer
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "rightAction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$$Type): void
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "canRecurseSearch"(): boolean
public "supportsDirectControllerLink"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$$Type = ($FaceSlotBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaceSlotBlock$$Original = $FaceSlotBlock;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemFramedDrawers" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemDrawers} from "com.jaquadro.minecraft.storagedrawers.item.ItemDrawers"

export class $ItemFramedDrawers extends $ItemDrawers {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

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
export type $ItemFramedDrawers$$Type = ($ItemFramedDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFramedDrawers$$Original = $ItemFramedDrawers;}
declare module "com.jaquadro.minecraft.storagedrawers.block.state.IntegerSetProperty" {
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$Comparable$$Type} from "java.lang.Comparable"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $IntegerSetProperty extends $Property<(integer)> {
public "getName"(arg0: $Comparable$$Type): StringJS
public "getName"(arg0: integer): StringJS
public "equals"(arg0: any): boolean
public "getValue"(arg0: StringJS): $Optional<(integer)>
public static "create"(arg0: StringJS, arg1: StringJS): $IntegerSetProperty
public "generateHashCode"(): integer
public "getPossibleValues"(): $Collection<(integer)>
get "possibleValues"(): $Collection<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerSetProperty$$Type = ($IntegerSetProperty);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegerSetProperty$$Original = $IntegerSetProperty;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemKeyring" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$RegistryEntry$$Type} from "com.texelsaurus.minecraft.chameleon.registry.RegistryEntry"
import {$ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"

export class $ItemKeyring extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $RegistryEntry$$Type<($ItemKey$$Type)>, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getKey"(): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public static "getKeyring"(arg0: $ItemStack$$Type): $ItemStack
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "getDescription"(): $Component
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "key"(): $ItemStack
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKeyring$$Type = ($ItemKeyring);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemKeyring$$Original = $ItemKeyring;}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ISecurityProvider, $ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"

export interface $IProtectable$$Interface {
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
set "securityProvider"(value: $ISecurityProvider$$Type)
get "securityProvider"(): $ISecurityProvider
}

export class $IProtectable implements $IProtectable$$Interface {
 "getOwner"(): $UUID
 "setOwner"(arg0: $UUID$$Type): boolean
 "setSecurityProvider"(arg0: $ISecurityProvider$$Type): boolean
 "getSecurityProvider"(): $ISecurityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProtectable$$Type = ($IProtectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProtectable$$Original = $IProtectable;}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeRemote" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityController, $BlockEntityController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemUpgrade} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ItemUpgradeRemote extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean, arg2: $Item$Properties$$Type)

public "isEnabled"(): boolean
public static "setUnbound"(arg0: $ItemStack$$Type): $ItemStack
public "isBound"(): boolean
public static "copyControllerBinding"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public static "setBoundController"(arg0: $ItemStack$$Type, arg1: $BlockEntityController$$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getBoundPosition"(arg0: $ItemStack$$Type): $BlockPos
public static "getBoundController"(arg0: $ItemStack$$Type, arg1: $LevelAccessor$$Type): $BlockEntityController
public static "validateInventory"(arg0: $Inventory$$Type, arg1: $Level$$Type): void
public "isGroupUpgrade"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enabled"(): boolean
public static set "unbound"(value: $ItemStack$$Type)
get "bound"(): boolean
get "groupUpgrade"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRemote$$Type = ($ItemUpgradeRemote);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUpgradeRemote$$Original = $ItemUpgradeRemote;}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockEntityDataShim$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "dataPacketRequiresRenderUpdate"(): boolean
public "injectData"(arg0: $BlockEntityDataShim$$Type): void
public "injectPortableData"(arg0: $BlockEntityDataShim$$Type): void
public "markBlockForUpdate"(): void
public "writePortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "hasDataPacket"(): boolean
public "markBlockForUpdateClient"(): void
public "markBlockForRenderUpdate"(): void
public "readPortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$$Type = ($BaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseBlockEntity$$Original = $BaseBlockEntity;}
