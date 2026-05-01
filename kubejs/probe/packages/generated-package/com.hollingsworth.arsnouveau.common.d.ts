declare module "com.hollingsworth.arsnouveau.common.items.EnchantersShield" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ShieldItem} from "net.minecraft.world.item.ShieldItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $EnchantersShield extends $ShieldItem implements $GeoItem$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersShield$$Type = ($EnchantersShield);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantersShield$$Original = $EnchantersShield;}
declare module "com.hollingsworth.arsnouveau.common.block.AlchemicalSourcelinkBlock" {
import {$SourcelinkBlock} from "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlchemicalSourcelinkBlock extends $SourcelinkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemicalSourcelinkBlock$$Type = ($AlchemicalSourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemicalSourcelinkBlock$$Original = $AlchemicalSourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.MagicFire" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BaseFireBlock} from "net.minecraft.world.level.block.BaseFireBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MagicFire extends $BaseFireBlock {
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "AGE": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MagicFire)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: float)

public static "getState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canCatchFire"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFire$$Type = ($MagicFire);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicFire$$Original = $MagicFire;}
declare module "com.hollingsworth.arsnouveau.common.items.FlaskCannon" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$IRadialProvider$$Interface} from "com.hollingsworth.arsnouveau.api.item.IRadialProvider"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $FlaskCannon extends $ModItem implements $IRadialProvider$$Interface, $GeoItem$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getThrownStack"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type): $ItemStack
public "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "forKey"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$$Type = ($FlaskCannon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlaskCannon$$Original = $FlaskCannon;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.ScribesTile" {
import {$ITooltipProvider$$Interface} from "com.hollingsworth.arsnouveau.api.client.ITooltipProvider"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAnimationListener$$Interface} from "com.hollingsworth.arsnouveau.common.block.tile.IAnimationListener"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$IWandable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ColorPos, $ColorPos$$Type} from "com.hollingsworth.arsnouveau.client.particle.ColorPos"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GlyphRecipe, $GlyphRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.GlyphRecipe"

export class $ScribesTile extends $ModdedTile implements $GeoBlockEntity$$Interface, $ITickable$$Interface, $Container$$Interface, $ITooltipProvider$$Interface, $IAnimationListener$$Interface, $IWandable$$Interface, $RecipeInput$$Interface {
 "consumedStacks": $List<($ItemStack)>
 "craftingTicks": integer
 "crafting": boolean
 "recipe": $RecipeHolder<($GlyphRecipe)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "autoYoink": boolean

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "size"(): integer
public "isEmpty"(): boolean
public "getStack"(): $ItemStack
public "tick"(): void
public "getItem"(arg0: integer): $ItemStack
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "takeNearby"(): void
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setStack"(arg0: $ItemStack$$Type): void
public "onWanded"(arg0: $Player$$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "setRecipe"(arg0: $RecipeHolder$$Type<($GlyphRecipe$$Type)>, arg1: $Player$$Type): void
public static "getExperienceForLevel"(arg0: integer): integer
public "consumeStack"(arg0: $ItemStack$$Type): boolean
public "clearContent"(): void
public "isMasterTile"(): boolean
public "refundConsumed"(): void
public "getLogicTile"(): $ScribesTile
public "getRemainingRequired"(): $List<($Ingredient)>
public "canConsumeItemstack"(arg0: $ItemStack$$Type): boolean
public static "getTotalPlayerExperience"(arg0: $Player$$Type): integer
public static "getLevelsFromExp"(arg0: integer): integer
public "startAnimation"(arg0: integer): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "setChanged"(): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
public "onClearConnections"(arg0: $Player$$Type): $IWandable$Result
public "onFirstConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
public "getWandHighlight"(arg0: $List$$Type<($ColorPos$$Type)>): $List<($ColorPos)>
public "getUpdatePacket"(): $Packet
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getSlotLimit"(slot: integer): integer
public "clear"(): void
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "empty"(): boolean
get "stack"(): $ItemStack
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "containerSize"(): integer
set "stack"(value: $ItemStack$$Type)
get "masterTile"(): boolean
get "logicTile"(): $ScribesTile
get "remainingRequired"(): $List<($Ingredient)>
get "changed"(): void
get "maxStackSize"(): integer
get "updatePacket"(): $Packet
get "boneResetTime"(): double
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScribesTile$$Type = ($ScribesTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScribesTile$$Original = $ScribesTile;}
declare module "com.hollingsworth.arsnouveau.common.entity.EnchantedFallingBlock" {
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$GeoEntity$$Interface} from "software.bernie.geckolib.animatable.GeoEntity"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ColoredProjectile, $ColoredProjectile$$Type} from "com.hollingsworth.arsnouveau.common.entity.ColoredProjectile"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$IEntityWithComplexSpawn$$Interface} from "net.neoforged.neoforge.entity.IEntityWithComplexSpawn"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$SpellStats, $SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EnchantedFallingBlock extends $ColoredProjectile implements $GeoEntity$$Interface, $IEntityWithComplexSpawn$$Interface {
 "blockState": $BlockState
 "cancelDrop": boolean
 "hurtEntities": boolean
 "xRot": float
 "hasImpulse": boolean
 "knockback": integer
 "ars_Nouveau$motions": $Stack
 "dropItem": boolean
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "context": $SpellContext
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "resolver": $SpellResolver
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "blockData": $CompoundTag
 "spellStats": $SpellStats
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "baseDamage": float
 "rainbowStartTick": integer
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "time": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$$Type, arg5: $SpellResolver$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpellResolver$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $EntityType$$Type<($ColoredProjectile$$Type)>, arg1: $Level$$Type)
constructor(arg0: $EntityType$$Type<($ColoredProjectile$$Type)>, arg1: $Level$$Type, arg2: double, arg3: double, arg4: double, arg5: $BlockState$$Type, arg6: $SpellResolver$$Type)

public "getEntityType"(): $EntityType<(never)>
public "tick"(): void
public "getStateDamageBonus"(): float
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type): void
public "setHurtsEntities"(arg0: float, arg1: integer): void
public "callOnBrokenAfterFall"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "getBlockState"(): $BlockState
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "groundBlock"(arg0: boolean): $BlockPos
public static "fall"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: $SpellContext$$Type, arg4: $SpellResolver$$Type, arg5: $SpellStats$$Type): $EnchantedFallingBlock
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$$Type): void
public "isAttackable"(): boolean
public "canCollideWith"(arg0: $Entity$$Type): boolean
public "getPickRadius"(): float
public "onlyOpCanSetNbt"(): boolean
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public "isPickable"(): boolean
public static "canFall"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: $SpellStats$$Type): boolean
public "setStartPos"(arg0: $BlockPos$$Type): void
public "getStartPos"(): $BlockPos
public "getDamageSource"(arg0: $Entity$$Type, arg1: $Entity$$Type): $DamageSource
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readSpawnData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "writeSpawnData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "doPostHurtEffects"(arg0: $LivingEntity$$Type): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "entityType"(): $EntityType<(never)>
get "stateDamageBonus"(): float
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "attackable"(): boolean
get "pickRadius"(): float
get "pickable"(): boolean
set "startPos"(value: $BlockPos$$Type)
get "startPos"(): $BlockPos
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedFallingBlock$$Type = ($EnchantedFallingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedFallingBlock$$Original = $EnchantedFallingBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.BasicSpellTurretTile" {
import {$ITooltipProvider$$Interface} from "com.hollingsworth.arsnouveau.api.client.ITooltipProvider"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAnimationListener$$Interface} from "com.hollingsworth.arsnouveau.common.block.tile.IAnimationListener"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$PlayState} from "software.bernie.geckolib.animation.PlayState"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$IWandable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpellCaster} from "com.hollingsworth.arsnouveau.api.spell.SpellCaster"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Pair, $Pair$$Type} from "it.unimi.dsi.fastutil.Pair"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$ColorPos, $ColorPos$$Type} from "com.hollingsworth.arsnouveau.client.particle.ColorPos"
import {$ICapabilityProvider$$Interface} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $BasicSpellTurretTile extends $ModdedTile implements $ITooltipProvider$$Interface, $GeoBlockEntity$$Interface, $IAnimationListener$$Interface, $ITickable$$Interface, $ICapabilityProvider$$Interface<($BasicSpellTurretTile), (void), ($SpellCaster)>, $IWandable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getCapability"(arg0: $BasicSpellTurretTile$$Type, arg1: void): $SpellCaster
public "getCapability"(arg0: any, arg1: any): any
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "getManaCost"(): integer
public "setSpell"(arg0: $Spell$$Type): void
public "setPlayer"(arg0: $UUID$$Type): void
public "getLinkedSourceProvider"(): $Pair<($BlockPos), ($Optional<($Direction)>)>
public "setLinkedSourceProvider"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): void
public "setLinkedSourceProvider"(arg0: $Pair$$Type<($BlockPos$$Type), (($Direction$$Type)?)>): void
public "shootSpell"(): void
public "walkPredicate"(arg0: $AnimationState$$Type<(never)>): $PlayState
public "startAnimation"(arg0: integer): void
public "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "tick"(): void
/**
 * 
 * @deprecated
 */
public "onWanded"(arg0: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
public "onClearConnections"(arg0: $Player$$Type): $IWandable$Result
public "onFirstConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
public "getWandHighlight"(arg0: $List$$Type<($ColorPos$$Type)>): $List<($ColorPos)>
public "getUpdatePacket"(): $Packet
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "manaCost"(): integer
set "spell"(value: $Spell$$Type)
set "player"(value: $UUID$$Type)
get "linkedSourceProvider"(): $Pair<($BlockPos), ($Optional<($Direction)>)>
set "linkedSourceProvider"(value: $Pair$$Type<($BlockPos$$Type), (($Direction$$Type)?)>)
get "updatePacket"(): $Packet
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSpellTurretTile$$Type = ($BasicSpellTurretTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicSpellTurretTile$$Original = $BasicSpellTurretTile;}
declare module "com.hollingsworth.arsnouveau.common.items.curios.JumpingRing" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArsNouveauCurio} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export class $JumpingRing extends $ArsNouveauCurio {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public static "doJump"(arg0: $Player$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JumpingRing$$Type = ($JumpingRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JumpingRing$$Original = $JumpingRing;}
declare module "com.hollingsworth.arsnouveau.common.block.FalseWeave" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MirrorWeave} from "com.hollingsworth.arsnouveau.common.block.MirrorWeave"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $FalseWeave extends $MirrorWeave {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalseWeave$$Type = ($FalseWeave);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FalseWeave$$Original = $FalseWeave;}
declare module "com.hollingsworth.arsnouveau.common.mixin.structure.StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor$$Interface {

(): $StructureProcessorType$$Type<(never)>
}

export class $StructureProcessorAccessor implements $StructureProcessorAccessor$$Interface {
 "callGetType"(): $StructureProcessorType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$$Type = (() => $StructureProcessorType$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureProcessorAccessor$$Original = $StructureProcessorAccessor;}
declare module "com.hollingsworth.arsnouveau.common.items.EarthEssence" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractEssence} from "com.hollingsworth.arsnouveau.common.items.AbstractEssence"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $EarthEssence extends $AbstractEssence {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "name": StringJS
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthEssence$$Type = ($EarthEssence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EarthEssence$$Original = $EarthEssence;}
declare module "com.hollingsworth.arsnouveau.common.items.StarbuncleShades" {
import {$ItemDisplayContext} from "net.minecraft.world.item.ItemDisplayContext"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AnimModItem} from "com.hollingsworth.arsnouveau.common.items.AnimModItem"
import {$ICosmeticItem$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICosmeticItem"

export class $StarbuncleShades extends $AnimModItem implements $ICosmeticItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "starbyScale": $Vec3
static readonly "MAX_BAR_WIDTH": integer
static readonly "starbyTrans": $Vec3
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getTranslations"(arg0: $LivingEntity$$Type): $Vec3
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getScaling"(arg0: $LivingEntity$$Type): $Vec3
public "canWear"(arg0: $LivingEntity$$Type): boolean
public "getTransformType"(): $ItemDisplayContext
public "getTranslations"(): $Vec3
public "getScaling"(): $Vec3
public "getBone"(arg0: $LivingEntity$$Type): StringJS
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "transformType"(): $ItemDisplayContext
get "translations"(): $Vec3
get "scaling"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleShades$$Type = ($StarbuncleShades);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarbuncleShades$$Original = $StarbuncleShades;}
declare module "com.hollingsworth.arsnouveau.common.block.ITickable" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITickable$$Interface {
}

export class $ITickable implements $ITickable$$Interface {
 "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
 "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickable$$Type = ($ITickable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITickable$$Original = $ITickable;}
declare module "com.hollingsworth.arsnouveau.common.items.AbstractEssence" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $AbstractEssence extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "name": StringJS
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEssence$$Type = ($AbstractEssence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractEssence$$Original = $AbstractEssence;}
declare module "com.hollingsworth.arsnouveau.common.block.RelayCollectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Relay} from "com.hollingsworth.arsnouveau.common.block.Relay"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RelayCollectorBlock extends $Relay {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayCollectorBlock$$Type = ($RelayCollectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelayCollectorBlock$$Original = $RelayCollectorBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ScryRitualRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $ScryRitualRecipe extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(augment: $TagKey$$Type<($Item)>, highlight: $TagKey$$Type<($Block)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "highlight"(): $TagKey<($Block)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "augment"(): $TagKey<($Item)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryRitualRecipe$$Type = ({"augment"?: $TagKey$$Type<($Item)>, "highlight"?: $TagKey$$Type<($Block)>}) | ([augment?: $TagKey$$Type<($Item)>, highlight?: $TagKey$$Type<($Block)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryRitualRecipe$$Original = $ScryRitualRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.ItemDetector" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ItemDetector extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetector$$Type = ($ItemDetector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDetector$$Original = $ItemDetector;}
declare module "com.hollingsworth.arsnouveau.common.block.ArcanePlatform" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ArcanePedestal} from "com.hollingsworth.arsnouveau.common.block.ArcanePedestal"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcanePlatform extends $ArcanePedestal {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DOWN": $VoxelShape
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $VoxelShape

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getOffsetScalar"(): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "offsetScalar"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanePlatform$$Type = ($ArcanePlatform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanePlatform$$Original = $ArcanePlatform;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ArmorUpgradeRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ITextOutput$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ITextOutput"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ArmorUpgradeRecipe extends $EnchantingApparatusRecipe implements $ITextOutput$$Interface {
constructor(arg0: $List$$Type<($Ingredient$$Type)>, arg1: integer, arg2: integer)

public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "tier"(): integer
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getOutputComponent"(): $Component
public "doesReagentMatch"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "excludeJei"(): boolean
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "outputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorUpgradeRecipe$$Type = ($ArmorUpgradeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorUpgradeRecipe$$Original = $ArmorUpgradeRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.MirrorWeave" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
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
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $MirrorWeave extends $ModBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "isCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "hasDynamicShape"(): boolean
public "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "setMimicState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorWeave$$Type = ($MirrorWeave);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MirrorWeave$$Original = $MirrorWeave;}
declare module "com.hollingsworth.arsnouveau.common.items.Glyph" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $Glyph extends $ModItem {
 "spellPart": $AbstractSpellPart
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AbstractSpellPart$$Type)

public "getName"(): $Component
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "name"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Glyph$$Type = ($Glyph);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Glyph$$Original = $Glyph;}
declare module "com.hollingsworth.arsnouveau.common.mixin.ChatComponentAccessor" {
import {$List} from "java.util.List"
import {$GuiMessage$Line} from "net.minecraft.client.GuiMessage$Line"
import {$GuiMessage} from "net.minecraft.client.GuiMessage"

export interface $ChatComponentAccessor$$Interface {
get "allMessages"(): $List<($GuiMessage)>
get "trimmedMessages"(): $List<($GuiMessage$Line)>
}

export class $ChatComponentAccessor implements $ChatComponentAccessor$$Interface {
 "getAllMessages"(): $List<($GuiMessage)>
 "getTrimmedMessages"(): $List<($GuiMessage$Line)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponentAccessor$$Type = ($ChatComponentAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChatComponentAccessor$$Original = $ChatComponentAccessor;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$ApparatusRecipeInput, $ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $IEnchantingRecipe$$Interface extends $Recipe$$Interface<($ApparatusRecipeInput)> {
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $IEnchantingRecipe implements $IEnchantingRecipe$$Interface {
 "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
 "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
 "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type): boolean
 "sourceCost"(): integer
 "isSpecial"(): boolean
static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
 "consumesSource"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getType"(): $RecipeType<(never)>
 "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $ApparatusRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnchantingRecipe$$Type = ($IEnchantingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnchantingRecipe$$Original = $IEnchantingRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.BasicSpellTurret" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position} from "net.minecraft.core.Position"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ITurretBehavior} from "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HashMap} from "java.util.HashMap"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BasicSpellTurret extends $TickableModBlock implements $SimpleWaterloggedBlock$$Interface {
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
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "getDispensePosition"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): $Position
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSpellTurret$$Type = ($BasicSpellTurret);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicSpellTurret$$Original = $BasicSpellTurret;}
declare module "com.hollingsworth.arsnouveau.common.block.ImbuementBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ImbuementBlock extends $TickableModBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementBlock$$Type = ($ImbuementBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImbuementBlock$$Original = $ImbuementBlock;}
declare module "com.hollingsworth.arsnouveau.common.mixin.MobAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export interface $MobAccessor$$Interface {

(arg0: $Player, arg1: $InteractionHand): $InteractionResult$$Type
}

export class $MobAccessor implements $MobAccessor$$Interface {
 "callMobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$$Type = ((arg0: $Player, arg1: $InteractionHand) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobAccessor$$Original = $MobAccessor;}
declare module "com.hollingsworth.arsnouveau.common.block.PotionMelder" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PotionMelder extends $TickableModBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionMelder$$Type = ($PotionMelder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionMelder$$Original = $PotionMelder;}
declare module "com.hollingsworth.arsnouveau.common.item.ArchwoodBoatItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ArchwoodBoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchwoodBoatItem$$Type = ($ArchwoodBoatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchwoodBoatItem$$Original = $ArchwoodBoatItem;}
declare module "com.hollingsworth.arsnouveau.common.block.WixieCauldron" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SummonBlock} from "com.hollingsworth.arsnouveau.common.block.SummonBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WixieCauldron extends $SummonBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
static readonly "FILLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor()

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieCauldron$$Type = ($WixieCauldron);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WixieCauldron$$Original = $WixieCauldron;}
declare module "com.hollingsworth.arsnouveau.common.block.ScryersOculus" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ScryersOculus extends $TickableModBlock {
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "openMenu"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryersOculus$$Type = ($ScryersOculus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryersOculus$$Original = $ScryersOculus;}
declare module "com.hollingsworth.arsnouveau.common.block.CrabHat" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CrabHat extends $ModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrabHat$$Type = ($CrabHat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrabHat$$Original = $CrabHat;}
declare module "com.hollingsworth.arsnouveau.common.items.AnnotatedCodex" {
import {$Map} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $AnnotatedCodex extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUnlockLevelCost"(arg0: $Collection$$Type<($AbstractSpellPart$$Type)>): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotatedCodex$$Type = ($AnnotatedCodex);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnnotatedCodex$$Original = $AnnotatedCodex;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SpellWriteRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ITextOutput$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ITextOutput"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpellWriteRecipe extends $EnchantingApparatusRecipe implements $ITextOutput$$Interface {
constructor(arg0: $List$$Type<($Ingredient$$Type)>, arg1: integer)

public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getOutputComponent"(): $Component
public "doesReagentMatch"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "excludeJei"(): boolean
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "outputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellWriteRecipe$$Type = ($SpellWriteRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellWriteRecipe$$Original = $SpellWriteRecipe;}
declare module "com.hollingsworth.arsnouveau.common.items.AbjurationEssence" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractEssence} from "com.hollingsworth.arsnouveau.common.items.AbstractEssence"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AbjurationEssence extends $AbstractEssence {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "name": StringJS
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbjurationEssence$$Type = ($AbjurationEssence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbjurationEssence$$Original = $AbjurationEssence;}
declare module "com.hollingsworth.arsnouveau.common.block.MageBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MageBlock extends $TickableModBlock {
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
static readonly "TEMPORARY": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MageBlock$$Type = ($MageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MageBlock$$Original = $MageBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.data.LightJarData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $LightJarData extends $Record {
static "CODEC": $Codec<($LightJarData)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($LightJarData)>

constructor(pos: ($BlockPos$$Type)?, enabled: boolean)
constructor(arg0: $BlockPos$$Type, arg1: boolean)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): boolean
public "pos"(): $Optional<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightJarData$$Type = ({"enabled"?: boolean, "pos"?: ($BlockPos$$Type)?}) | ([enabled?: boolean, pos?: ($BlockPos$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightJarData$$Original = $LightJarData;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ReactiveEnchantmentRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnchantmentRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantmentRecipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ReactiveEnchantmentRecipe extends $EnchantmentRecipe {
constructor(arg0: $List$$Type<($Ingredient$$Type)>, arg1: integer)

public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public static "getParchment"(arg0: $List$$Type<($ItemStack$$Type)>): $ItemStack
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveEnchantmentRecipe$$Type = ($ReactiveEnchantmentRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactiveEnchantmentRecipe$$Original = $ReactiveEnchantmentRecipe;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.GlyphRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$GlyphRecipe, $GlyphRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.GlyphRecipe"

export class $GlyphRecipe$Serializer implements $RecipeSerializer$$Interface<($GlyphRecipe)> {
static readonly "CODEC": $MapCodec<($GlyphRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GlyphRecipe)>

constructor()

public "codec"(): $MapCodec<($GlyphRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $GlyphRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($GlyphRecipe)>
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $GlyphRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRecipe$Serializer$$Type = ($GlyphRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphRecipe$Serializer$$Original = $GlyphRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.WixieCharm" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $WixieCharm extends $AbstractSummonCharm implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieCharm$$Type = ($WixieCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WixieCharm$$Original = $WixieCharm;}
declare module "com.hollingsworth.arsnouveau.common.block.CraftingLecternBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $CraftingLecternBlock extends $TickableModBlock {
static "SHAPE_NORTH": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
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
static readonly "SHAPE_EAST": $VoxelShape

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLecternBlock$$Type = ($CraftingLecternBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingLecternBlock$$Original = $CraftingLecternBlock;}
declare module "com.hollingsworth.arsnouveau.common.potions.SoakedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SoakedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoakedEffect$$Type = ($SoakedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoakedEffect$$Original = $SoakedEffect;}
declare module "com.hollingsworth.arsnouveau.common.items.ScryCaster" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $ScryCaster extends $ModItem implements $ICasterTool$$Interface, $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryCaster$$Type = ($ScryCaster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryCaster$$Original = $ScryCaster;}
declare module "com.hollingsworth.arsnouveau.common.items.ItemScroll" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemScroll$SortPref} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$IScribeable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IScribeable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$Comparator} from "java.util.Comparator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $ItemScroll extends $ModItem implements $IScribeable$$Interface, $AliasProvider$$Interface {
static "sortPrefComparator": $Comparator<($ItemScroll$SortPref)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getSortPref"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $IItemHandler$$Type): $ItemScroll$SortPref
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScroll$$Type = ($ItemScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemScroll$$Original = $ItemScroll;}
declare module "com.hollingsworth.arsnouveau.common.mixin.BrushableBlockEntityAccessor" {
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $BrushableBlockEntityAccessor$$Interface {
set "lootTable"(value: $ResourceKey$$Type<($LootTable)>)
set "lootTableSeed"(value: long)
get "lootTableSeed"(): long
get "lootTable"(): $ResourceKey<($LootTable)>
}

export class $BrushableBlockEntityAccessor implements $BrushableBlockEntityAccessor$$Interface {
 "setLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setLootTableSeed"(arg0: long): void
 "getLootTableSeed"(): long
 "getLootTable"(): $ResourceKey<($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrushableBlockEntityAccessor$$Type = ($BrushableBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrushableBlockEntityAccessor$$Original = $BrushableBlockEntityAccessor;}
declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentLimits" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $SpellPartConfigUtil$AugmentLimits {
public "getAugmentLimit"(arg0: $ResourceLocation$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$AugmentLimits$$Type = ($SpellPartConfigUtil$AugmentLimits);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPartConfigUtil$AugmentLimits$$Original = $SpellPartConfigUtil$AugmentLimits;}
declare module "com.hollingsworth.arsnouveau.common.items.SpellBow" {
import {$BowItem} from "net.minecraft.world.item.BowItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$EntitySpellArrow} from "com.hollingsworth.arsnouveau.common.entity.EntitySpellArrow"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $SpellBow extends $BowItem implements $GeoItem$$Interface, $ICasterTool$$Interface, $IManaDiscountEquipment$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "findAmmo"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
public "addArrow"(arg0: $AbstractArrow$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean, arg4: $Player$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "canPlayerCastSpell"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "buildSpellArrow"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $AbstractCaster$$Type<(never)>, arg3: boolean, arg4: $ItemStack$$Type, arg5: $ItemStack$$Type): $EntitySpellArrow
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBow$$Type = ($SpellBow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellBow$$Original = $SpellBow;}
declare module "com.hollingsworth.arsnouveau.common.items.StarbuncleShard" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $StarbuncleShard extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleShard$$Type = ($StarbuncleShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarbuncleShard$$Original = $StarbuncleShard;}
declare module "com.hollingsworth.arsnouveau.common.items.SpellBook" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RadialMenu} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenu"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$IRadialProvider$$Interface} from "com.hollingsworth.arsnouveau.api.item.IRadialProvider"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$RadialMenuSlot} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenuSlot"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$SpellTier, $SpellTier$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellTier"

export class $SpellBook extends $ModItem implements $GeoItem$$Interface, $ICasterTool$$Interface, $IRadialProvider$$Interface, $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $SpellTier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $SpellTier$$Type)
constructor(arg0: $Item$Properties$$Type, arg1: $SpellTier$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canQuickCast"(): boolean
public "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTier"(): $SpellTier
public "getRadialMenuProviderForSpellpart"(arg0: $ItemStack$$Type): $RadialMenu<($AbstractSpellPart)>
public "getRadialMenuSlotsForSpellpart"(arg0: $ItemStack$$Type): $List<($RadialMenuSlot<($AbstractSpellPart)>)>
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "forKey"(): integer
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBook$$Type = ($SpellBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellBook$$Original = $SpellBook;}
declare module "com.hollingsworth.arsnouveau.common.world.structure.WildenGuardianDen" {
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$WildenDen} from "com.hollingsworth.arsnouveau.common.world.structure.WildenDen"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $WildenGuardianDen extends $WildenDen {
static readonly "CODEC": $MapCodec<($WildenGuardianDen)>
 "allowedTerrainHeightRange": $Optional<(integer)>
 "maxYAllowed": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
 "terrainHeightCheckRadius": $Optional<(integer)>
readonly "startJigsawName": $Optional<($ResourceLocation)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "size": integer
 "cannotSpawnInLiquid": boolean
 "minYAllowed": $Optional<(integer)>
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: ($ResourceLocation$$Type)?, arg3: integer, arg4: $HeightProvider$$Type, arg5: ($Heightmap$Types$$Type)?, arg6: integer)

public "type"(): $StructureType<(never)>
public "afterPlace"(arg0: $WorldGenLevel$$Type, arg1: $StructureManager$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BoundingBox$$Type, arg5: $ChunkPos$$Type, arg6: $PiecesContainer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildenGuardianDen$$Type = ($WildenGuardianDen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WildenGuardianDen$$Original = $WildenGuardianDen;}
declare module "com.hollingsworth.arsnouveau.common.items.RunicChalk" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $RunicChalk extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicChalk$$Type = ($RunicChalk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicChalk$$Original = $RunicChalk;}
declare module "com.hollingsworth.arsnouveau.common.block.TickableModBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TickableModBlock extends $ModBlock implements $ITickableBlock$$Interface {
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableModBlock$$Type = ($TickableModBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickableModBlock$$Original = $TickableModBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.SpellParchment" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SpellParchment extends $ModItem implements $ICasterTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellParchment$$Type = ($SpellParchment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellParchment$$Original = $SpellParchment;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.DispelEntityRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$Record} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DispelEntityRecipe extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(entity: $EntityType$$Type<(never)>, lootTable: $ResourceLocation$$Type, conditions: ($LootItemCondition$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LivingEntity$$Type, arg1: $Entity$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(arg0: $LivingEntity$$Type, arg1: $Entity$$Type): $List<($ItemStack)>
public "getType"(): $RecipeType<(never)>
public "entity"(): $EntityType<(never)>
public "conditions"(): ($LootItemCondition)[]
public "lootTable"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEntityRecipe$$Type = ({"conditions"?: ($LootItemCondition$$Type)[], "lootTable"?: $ResourceLocation$$Type, "entity"?: $EntityType$$Type<(never)>}) | ([conditions?: ($LootItemCondition$$Type)[], lootTable?: $ResourceLocation$$Type, entity?: $EntityType$$Type<(never)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispelEntityRecipe$$Original = $DispelEntityRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.Relay" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $Relay extends $TickableModBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Relay$$Type = ($Relay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Relay$$Original = $Relay;}
declare module "com.hollingsworth.arsnouveau.common.potions.FreezingEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FreezingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingEffect$$Type = ($FreezingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezingEffect$$Original = $FreezingEffect;}
declare module "com.hollingsworth.arsnouveau.common.block.SpellPrismBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Position} from "net.minecraft.core.Position"
import {$IPrismaticBlock$$Interface} from "com.hollingsworth.arsnouveau.api.block.IPrismaticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpellPrismBlock extends $ModBlock implements $IPrismaticBlock$$Interface {
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
constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDispensePosition"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): $Position
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPrismBlock$$Type = ($SpellPrismBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPrismBlock$$Original = $SpellPrismBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EnchantingApparatusRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"

export class $EnchantingApparatusRecipe$Serializer implements $RecipeSerializer$$Interface<($EnchantingApparatusRecipe)> {
static "CODEC": $MapCodec<($EnchantingApparatusRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnchantingApparatusRecipe)>

constructor()

public "codec"(): $MapCodec<($EnchantingApparatusRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnchantingApparatusRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusRecipe$Serializer$$Type = ($EnchantingApparatusRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingApparatusRecipe$Serializer$$Original = $EnchantingApparatusRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.block.BrazierRelay" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrazierRelay extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrazierRelay$$Type = ($BrazierRelay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrazierRelay$$Original = $BrazierRelay;}
declare module "com.hollingsworth.arsnouveau.common.items.curios.BeltOfLevitation" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArsNouveauCurio} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"

export class $BeltOfLevitation extends $ArsNouveauCurio {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltOfLevitation$$Type = ($BeltOfLevitation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeltOfLevitation$$Original = $BeltOfLevitation;}
declare module "com.hollingsworth.arsnouveau.common.block.PlanariumProjector" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlanariumProjector extends $ModBlock implements $EntityBlock$$Interface {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlanariumProjector$$Type = ($PlanariumProjector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlanariumProjector$$Original = $PlanariumProjector;}
declare module "com.hollingsworth.arsnouveau.common.block.LightBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $LightBlock extends $ModBlock implements $ITickableBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightBlock$$Type = ($LightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightBlock$$Original = $LightBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.VolcanicSourcelinkBlock" {
import {$SourcelinkBlock} from "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VolcanicSourcelinkBlock extends $SourcelinkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolcanicSourcelinkBlock$$Type = ($VolcanicSourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VolcanicSourcelinkBlock$$Original = $VolcanicSourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.FireEssence" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractEssence} from "com.hollingsworth.arsnouveau.common.items.AbstractEssence"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export class $FireEssence extends $AbstractEssence {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "name": StringJS
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireEssence$$Type = ($FireEssence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireEssence$$Original = $FireEssence;}
declare module "com.hollingsworth.arsnouveau.common.items.data.WarpScrollData" {
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Record} from "java.lang.Record"

export class $WarpScrollData extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($WarpScrollData)>

constructor(arg0: boolean)
constructor(pos: ($BlockPos$$Type)?, dimension: StringJS, rotation: $Vec2$$Type, crossDim: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $Optional<($BlockPos)>
public "isValid"(): boolean
public "dimension"(): StringJS
public "crossDim"(): boolean
public "canTeleportWithDim"(arg0: StringJS): boolean
public "canTeleportWithDim"(arg0: $Level$$Type): boolean
public "rotation"(): $Vec2
public "withCrossDim"(arg0: boolean): $WarpScrollData
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpScrollData$$Type = ({"rotation"?: $Vec2$$Type, "pos"?: ($BlockPos$$Type)?, "crossDim"?: boolean, "dimension"?: StringJS}) | ([rotation?: $Vec2$$Type, pos?: ($BlockPos$$Type)?, crossDim?: boolean, dimension?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarpScrollData$$Original = $WarpScrollData;}
declare module "com.hollingsworth.arsnouveau.common.block.ITickableBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITickableBlock$$Interface extends $EntityBlock$$Interface {

(arg0: $BlockPos, arg1: $BlockState): $BlockEntity$$Type
}

export class $ITickableBlock implements $ITickableBlock$$Interface {
 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlock$$Type = ((arg0: $BlockPos, arg1: $BlockState) => $BlockEntity$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITickableBlock$$Original = $ITickableBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.curios.ShapersFocus" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArsNouveauCurio} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"
import {$ISpellModifierItem$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnchantedFallingBlock$$Type} from "com.hollingsworth.arsnouveau.common.entity.EnchantedFallingBlock"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $ShapersFocus extends $ArsNouveauCurio implements $ISpellModifierItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "tryPropagateBlockSpell"(arg0: $BlockHitResult$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: $SpellContext$$Type, arg4: $SpellResolver$$Type): $SpellContext
public static "tryPropagateEntitySpell"(arg0: $EnchantedFallingBlock$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: $SpellContext$$Type, arg4: $SpellResolver$$Type): $SpellContext
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapersFocus$$Type = ($ShapersFocus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapersFocus$$Original = $ShapersFocus;}
declare module "com.hollingsworth.arsnouveau.common.block.VoidPrism" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IPrismaticBlock$$Interface} from "com.hollingsworth.arsnouveau.api.block.IPrismaticBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidPrism extends $ModBlock implements $IPrismaticBlock$$Interface {
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

public "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidPrism$$Type = ($VoidPrism);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidPrism$$Original = $VoidPrism;}
declare module "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityTravelToDimensionEvent$$Type} from "net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent"
import {$PlayerEvent$PlayerLoggedOutEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedOutEvent"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ITimedEvent$$Interface} from "com.hollingsworth.arsnouveau.api.event.ITimedEvent"
import {$ServerTickEvent$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent"

export class $RewindEvent implements $ITimedEvent$$Interface {
 "doneRewinding": boolean
 "serverSide": boolean
 "startGameTime": long
 "rewindTicks": integer
 "respectsGravity": boolean
 "context": $SpellContext
 "registeredEvents": boolean
 "ticksToRewind": integer
 "entity": $Entity

constructor(arg0: $Entity$$Type, arg1: long, arg2: integer, arg3: $SpellContext$$Type)
constructor(arg0: $Entity$$Type, arg1: long, arg2: integer)
constructor(arg0: long, arg1: integer, arg2: $SpellContext$$Type)

public "stop"(): void
public "tick"(arg0: boolean): void
public "removeWeightlessness"(): void
public "isExpired"(): boolean
public "onServerStopping"(): void
public "onChangeDimension"(arg0: $EntityTravelToDimensionEvent$$Type): void
public "onEntityRemoved"(arg0: $PlayerEvent$PlayerLoggedOutEvent$$Type): void
public "getID"(): StringJS
public "tick"(arg0: $ServerTickEvent$$Type): void
public "serialize"(arg0: $CompoundTag$$Type): $CompoundTag
public "onPacketHandled"(): void
get "expired"(): boolean
get "ID"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewindEvent$$Type = ($RewindEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewindEvent$$Original = $RewindEvent;}
declare module "com.hollingsworth.arsnouveau.common.items.DominionWand" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RadialMenu} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenu"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IWandable$Result$$Type} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$Holder} from "net.minecraft.core.Holder"
import {$IWandable} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$IRadialProvider$$Interface} from "com.hollingsworth.arsnouveau.api.item.IRadialProvider"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RadialMenuSlot} from "com.hollingsworth.arsnouveau.client.gui.radial_menu.RadialMenuSlot"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DominionWand extends $ModItem implements $IRadialProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "clear"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getRadialMenuProviderForDominion"(arg0: $ItemStack$$Type): $RadialMenu<(StringJS)>
public "getRadialMenuSlotsForDominion"(arg0: $ItemStack$$Type): $List<($RadialMenuSlot<(StringJS)>)>
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "playSoundFromResult"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $IWandable$Result$$Type): void
public "getWandableBlock"(arg0: $UseOnContext$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $IWandable
public static "getGlobalPosString"(arg0: $GlobalPos$$Type): StringJS
public static "getPosString"(arg0: $BlockPos$$Type): StringJS
public "forKey"(): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DominionWand$$Type = ($DominionWand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DominionWand$$Original = $DominionWand;}
declare module "com.hollingsworth.arsnouveau.common.block.ArchwoodChest" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ChestType} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ChestBlock} from "net.minecraft.world.level.block.ChestBlock"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArchwoodChest extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchwoodChest$$Type = ($ArchwoodChest);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchwoodChest$$Original = $ArchwoodChest;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ITextOutput" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ITextOutput$$Interface {

(): $Component$$Type
get "outputComponent"(): $Component
}

export class $ITextOutput implements $ITextOutput$$Interface {
 "getOutputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextOutput$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITextOutput$$Original = $ITextOutput;}
declare module "com.hollingsworth.arsnouveau.common.items.EnchantersGauntlet" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $EnchantersGauntlet extends $ModItem implements $ICasterTool$$Interface, $GeoItem$$Interface, $IManaDiscountEquipment$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersGauntlet$$Type = ($EnchantersGauntlet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantersGauntlet$$Original = $EnchantersGauntlet;}
declare module "com.hollingsworth.arsnouveau.common.block.SummonBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SummonBlock extends $TickableModBlock {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonBlock$$Type = ($SummonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonBlock$$Original = $SummonBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.IAnimationListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAnimationListener$$Interface {

(arg0: integer): void
}

export class $IAnimationListener implements $IAnimationListener$$Interface {
 "startAnimation"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimationListener$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAnimationListener$$Original = $IAnimationListener;}
declare module "com.hollingsworth.arsnouveau.common.block.DimBoundary" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$IWandable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ColorPos, $ColorPos$$Type} from "com.hollingsworth.arsnouveau.client.particle.ColorPos"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DimBoundary extends $ModBlock implements $IWandable$$Interface {
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

public static "playerAttemptedBreak"(arg0: $Level$$Type, arg1: $Player$$Type): void
public "onFirstConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
/**
 * 
 * @deprecated
 */
public "onWanded"(arg0: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
public "onClearConnections"(arg0: $Player$$Type): $IWandable$Result
public "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
public "getWandHighlight"(arg0: $List$$Type<($ColorPos$$Type)>): $List<($ColorPos)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimBoundary$$Type = ($DimBoundary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimBoundary$$Original = $DimBoundary;}
declare module "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref" {
import {$Enum} from "java.lang.Enum"

export class $ItemScroll$SortPref extends $Enum<($ItemScroll$SortPref)> {
static readonly "HIGH": $ItemScroll$SortPref
static readonly "LOW": $ItemScroll$SortPref
static readonly "HIGHEST": $ItemScroll$SortPref
static readonly "INVALID": $ItemScroll$SortPref

public static "values"(): ($ItemScroll$SortPref)[]
public static "valueOf"(arg0: StringJS): $ItemScroll$SortPref
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScroll$SortPref$$Type = (("invalid") | ("low") | ("high") | ("highest"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemScroll$SortPref$$Original = $ItemScroll$SortPref;}
declare module "com.hollingsworth.arsnouveau.common.block.PortalBlock$Size" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$WarpScrollData$$Type} from "com.hollingsworth.arsnouveau.common.items.data.WarpScrollData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $PortalBlock$Size {
constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$Axis$$Type)

public "isValid"(): boolean
public "isPortalFrame"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "isComplete"(): boolean
public "getHeight"(): integer
public "placePortalBlocks"(arg0: $WarpScrollData$$Type, arg1: StringJS): void
public "getWidth"(): integer
get "valid"(): boolean
get "complete"(): boolean
get "height"(): integer
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalBlock$Size$$Type = ($PortalBlock$Size);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortalBlock$Size$$Original = $PortalBlock$Size;}
declare module "com.hollingsworth.arsnouveau.common.entity.ColoredProjectile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ParticleColor$IntWrapper} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor$IntWrapper"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

/**
 * 
 * @deprecated
 */
export class $ColoredProjectile extends $Projectile {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "rainbowStartTick": integer
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
static readonly "GREEN": $EntityDataAccessor<(integer)>
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($ColoredProjectile$$Type)>, arg1: $Level$$Type, arg2: $LivingEntity$$Type)
constructor(arg0: $EntityType$$Type<($ColoredProjectile$$Type)>, arg1: $Level$$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $EntityType$$Type<($ColoredProjectile$$Type)>, arg1: $Level$$Type)

public "load"(arg0: $CompoundTag$$Type): void
public "setColor"(arg0: $ParticleColor$$Type): void
/**
 * 
 * @deprecated
 */
public "getParticleColorWrapper"(): $ParticleColor$IntWrapper
public "getColor"(): $ParticleColor
/**
 * 
 * @deprecated
 */
public "isRainbow"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "getParticleColor"(): $ParticleColor
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "color"(value: $ParticleColor$$Type)
get "particleColorWrapper"(): $ParticleColor$IntWrapper
get "color"(): $ParticleColor
get "rainbow"(): boolean
get "particleColor"(): $ParticleColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredProjectile$$Type = ($ColoredProjectile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColoredProjectile$$Original = $ColoredProjectile;}
declare module "com.hollingsworth.arsnouveau.common.light.LambDynamicLight" {
import {$Level} from "net.minecraft.world.level.Level"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $LambDynamicLight$$Interface {
}

export class $LambDynamicLight implements $LambDynamicLight$$Interface {
 "ars_nouveau$getLuminance"(): integer
 "ars_nouveau$isDynamicLightEnabled"(): boolean
 "ars_nouveau$dynamicLightTick"(): void
 "ars_nouveau$getDynamicLightX"(): double
 "ars_nouveau$setDynamicLightEnabled"(arg0: boolean): void
 "ars_nouveau$getDynamicLightY"(): double
 "ars_nouveau$getDynamicLightWorld"(): $Level
 "ars_nouveau$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
 "ars_nouveau$resetDynamicLight"(): void
 "ars_nouveau$getDynamicLightZ"(): double
 "ars_nouveau$shouldUpdateDynamicLight"(): boolean
 "ars_nouveau$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LambDynamicLight$$Type = ($LambDynamicLight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LambDynamicLight$$Original = $LambDynamicLight;}
declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$AugmentCosts" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $SpellPartConfigUtil$AugmentCosts {
public "getAugmentCost"(arg0: $ResourceLocation$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$AugmentCosts$$Type = ($SpellPartConfigUtil$AugmentCosts);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPartConfigUtil$AugmentCosts$$Original = $SpellPartConfigUtil$AugmentCosts;}
declare module "com.hollingsworth.arsnouveau.common.block.TempLightBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LightBlock} from "com.hollingsworth.arsnouveau.common.block.LightBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TempLightBlock extends $LightBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempLightBlock$$Type = ($TempLightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TempLightBlock$$Original = $TempLightBlock;}
declare module "com.hollingsworth.arsnouveau.common.mixin.LivingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingAccessor$$Interface {

(): float
}

export class $LivingAccessor implements $LivingAccessor$$Interface {
 "callGetJumpPower"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingAccessor$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingAccessor$$Original = $LivingAccessor;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SpellWriteRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SpellWriteRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpellWriteRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SpellWriteRecipe$Serializer implements $RecipeSerializer$$Interface<($SpellWriteRecipe)> {
static readonly "CODEC": $MapCodec<($SpellWriteRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($SpellWriteRecipe)>

constructor()

public "codec"(): $MapCodec<($SpellWriteRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpellWriteRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellWriteRecipe$Serializer$$Type = ($SpellWriteRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellWriteRecipe$Serializer$$Original = $SpellWriteRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.AlakarkinosRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$AlakarkinosConversionRegistry$LootDrops, $AlakarkinosConversionRegistry$LootDrops$$Type} from "com.hollingsworth.arsnouveau.api.registry.AlakarkinosConversionRegistry$LootDrops"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlakarkinosRecipe extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(arg0: $Block$$Type, arg1: $ResourceKey$$Type<($LootTable)>, arg2: integer)
constructor(input: $Block$$Type, table: $ResourceKey$$Type<($LootTable)>, weight: integer, drops: ($AlakarkinosConversionRegistry$LootDrops$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "table"(): $ResourceKey<($LootTable)>
public "getType"(): $RecipeType<(never)>
public "input"(): $Block
public "drops"(): $Optional<($AlakarkinosConversionRegistry$LootDrops)>
public "weight"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlakarkinosRecipe$$Type = ({"table"?: $ResourceKey$$Type<($LootTable)>, "drops"?: ($AlakarkinosConversionRegistry$LootDrops$$Type)?, "input"?: $Block$$Type, "weight"?: integer}) | ([table?: $ResourceKey$$Type<($LootTable)>, drops?: ($AlakarkinosConversionRegistry$LootDrops$$Type)?, input?: $Block$$Type, weight?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlakarkinosRecipe$$Original = $AlakarkinosRecipe;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.WhirlisprigCharm" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $WhirlisprigCharm extends $AbstractSummonCharm implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlisprigCharm$$Type = ($WhirlisprigCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhirlisprigCharm$$Original = $WhirlisprigCharm;}
declare module "com.hollingsworth.arsnouveau.common.world.feature.SingleBlockFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SingleBlockFeature extends $Feature<($BlockStateConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($BlockStateConfiguration$$Type)>)

public "place"(arg0: $FeatureConfiguration$$Type, arg1: $WorldGenLevel$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type): boolean
public "place"(arg0: $BlockStateConfiguration$$Type, arg1: $WorldGenLevel$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type): boolean
public "onStatePlace"(arg0: $WorldGenLevel$$Type, arg1: $ChunkGenerator$$Type, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $BlockStateConfiguration$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleBlockFeature$$Type = ($SingleBlockFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleBlockFeature$$Original = $SingleBlockFeature;}
declare module "com.hollingsworth.arsnouveau.common.items.ModItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ModItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "withRarity"(arg0: $Rarity$$Type): $ModItem
public "withTooltip"(arg0: StringJS): $ModItem
public "withTooltip"(arg0: $Component$$Type): $ModItem
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItem$$Type = ($ModItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModItem$$Original = $ModItem;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.BookwyrmCharm" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $BookwyrmCharm extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookwyrmCharm$$Type = ($BookwyrmCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookwyrmCharm$$Original = $BookwyrmCharm;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.GlyphRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$ScribesTile, $ScribesTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.ScribesTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $GlyphRecipe implements $Recipe$$Interface<($ScribesTile)> {
readonly "output": $ItemStack
readonly "inputs": $List<($Ingredient)>
readonly "exp": integer

constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($Ingredient$$Type)>, arg2: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ScribesTile$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ScribesTile$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "withItem"(arg0: $ItemLike$$Type, arg1: integer): $GlyphRecipe
public "withItem"(arg0: $ItemLike$$Type): $GlyphRecipe
public "getOutput"(): $ItemStack
public "getInputs"(): $List<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getSpellPart"(): $AbstractSpellPart
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getExp"(): integer
public "withIngredient"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $GlyphRecipe
public "withIngredient"(arg0: $Ingredient$$Type): $GlyphRecipe
public "withIngredient"(arg0: $Ingredient$$Type, arg1: integer): $GlyphRecipe
public "withStack"(arg0: $ItemStack$$Type, arg1: integer): $GlyphRecipe
public "withStack"(arg0: $ItemStack$$Type): $GlyphRecipe
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $ScribesTile$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "spellPart"(): $AbstractSpellPart
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphRecipe$$Type = ($GlyphRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlyphRecipe$$Original = $GlyphRecipe;}
declare module "com.hollingsworth.arsnouveau.common.mixin.jar.MobAccessorMixin" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"

export interface $MobAccessorMixin$$Interface {

(): $SoundEvent$$Type
}

export class $MobAccessorMixin implements $MobAccessorMixin$$Interface {
 "callGetAmbientSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessorMixin$$Type = (() => $SoundEvent$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobAccessorMixin$$Original = $MobAccessorMixin;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile" {
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SummoningTile extends $ModdedTile implements $ITickable$$Interface {
 "converted": boolean
 "isOff": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "tickCounter": integer
static readonly "CONVERTED": $BooleanProperty

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "convertedEffect"(): void
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningTile$$Type = ($SummoningTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummoningTile$$Original = $SummoningTile;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.BuddingConversionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BuddingConversionRecipe extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(input: $Block$$Type, result: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $BlockState$$Type): boolean
public "result"(): $Block
public "getType"(): $RecipeType<(never)>
public "input"(): $Block
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuddingConversionRecipe$$Type = ({"input"?: $Block$$Type, "result"?: $Block$$Type}) | ([input?: $Block$$Type, result?: $Block$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuddingConversionRecipe$$Original = $BuddingConversionRecipe;}
declare module "com.hollingsworth.arsnouveau.common.items.EnchantersMirror" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ISpellModifierItem$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $EnchantersMirror extends $ModItem implements $ICasterTool$$Interface, $GeoItem$$Interface, $ISpellModifierItem$$Interface, $IManaDiscountEquipment$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersMirror$$Type = ($EnchantersMirror);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantersMirror$$Original = $EnchantersMirror;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ImbuementRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ImbuementTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.ImbuementTile"
import {$IImbuementRecipe, $IImbuementRecipe$$Interface} from "com.hollingsworth.arsnouveau.api.imbuement_chamber.IImbuementRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ImbuementRecipe implements $IImbuementRecipe$$Interface {
readonly "output": $ItemStack
readonly "input": $Ingredient
readonly "source": integer
 "id": $ResourceLocation
 "pedestalItems": $List<($Ingredient)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type, arg3: integer)
constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type, arg3: integer)
constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: $List$$Type<($Ingredient$$Type)>)

public "matches"(arg0: $ImbuementTile$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getSource"(): integer
public "assemble"(arg0: $ImbuementTile$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getOutput"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getPedestalItems"(): $List<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getSourceCost"(arg0: $ImbuementTile$$Type): integer
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "withPedestalItem"(arg0: $Ingredient$$Type): $ImbuementRecipe
public "withPedestalItem"(arg0: $ItemLike$$Type): $ImbuementRecipe
public "doesReagentMatch"(arg0: $ItemStack$$Type): boolean
public "getInput"(): $Ingredient
public static "getRecipe"(arg0: $Level$$Type, arg1: $ImbuementTile$$Type): $RecipeHolder<($IImbuementRecipe)>
public "getCraftingStartedText"(arg0: $ImbuementTile$$Type): $Component
public "getCraftingProgressText"(arg0: $ImbuementTile$$Type, arg1: integer): $Component
public "getCraftingText"(arg0: $ImbuementTile$$Type): $Component
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $ImbuementTile$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementRecipe$$Type = ($ImbuementRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImbuementRecipe$$Original = $ImbuementRecipe;}
declare module "com.hollingsworth.arsnouveau.common.items.WixieHat" {
import {$ItemDisplayContext} from "net.minecraft.world.item.ItemDisplayContext"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AnimModItem} from "com.hollingsworth.arsnouveau.common.items.AnimModItem"
import {$ICosmeticItem$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICosmeticItem"

export class $WixieHat extends $AnimModItem implements $ICosmeticItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getTransformType"(): $ItemDisplayContext
public "getTranslations"(): $Vec3
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getScaling"(): $Vec3
public "canWear"(arg0: $LivingEntity$$Type): boolean
public "getTranslations"(arg0: $LivingEntity$$Type): $Vec3
public "getScaling"(arg0: $LivingEntity$$Type): $Vec3
public "getBone"(arg0: $LivingEntity$$Type): StringJS
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "transformType"(): $ItemDisplayContext
get "translations"(): $Vec3
get "scaling"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WixieHat$$Type = ($WixieHat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WixieHat$$Original = $WixieHat;}
declare module "com.hollingsworth.arsnouveau.common.items.itemscrolls.AllowItemScroll" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemScroll} from "com.hollingsworth.arsnouveau.common.items.ItemScroll"
import {$Comparator} from "java.util.Comparator"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemScroll$SortPref} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $AllowItemScroll extends $ItemScroll {
static "sortPrefComparator": $Comparator<($ItemScroll$SortPref)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "getSortPref"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $IItemHandler$$Type): $ItemScroll$SortPref
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowItemScroll$$Type = ($AllowItemScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllowItemScroll$$Original = $AllowItemScroll;}
declare module "com.hollingsworth.arsnouveau.common.event.timed.IRewindable" {
import {$Stack} from "java.util.Stack"
import {$RewindEntityData} from "com.hollingsworth.arsnouveau.common.spell.rewind.RewindEntityData"

export interface $IRewindable$$Interface {
get "rewinding"(): boolean
set "rewinding"(value: boolean)
get "motions"(): $Stack<($RewindEntityData)>
}

export class $IRewindable implements $IRewindable$$Interface {
 "isRewinding"(): boolean
 "setRewinding"(arg0: boolean): void
 "getMotions"(): $Stack<($RewindEntityData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRewindable$$Type = ($IRewindable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRewindable$$Original = $IRewindable;}
declare module "com.hollingsworth.arsnouveau.common.block.PotionDiffuserBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PotionDiffuserBlock extends $TickableModBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionDiffuserBlock$$Type = ($PotionDiffuserBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionDiffuserBlock$$Original = $PotionDiffuserBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.FamiliarScript" {
import {$AbstractFamiliarHolder, $AbstractFamiliarHolder$$Type} from "com.hollingsworth.arsnouveau.api.familiar.AbstractFamiliarHolder"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $FamiliarScript extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "familiar": $AbstractFamiliarHolder
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AbstractFamiliarHolder$$Type)
constructor()
constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarScript$$Type = ($FamiliarScript);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FamiliarScript$$Original = $FamiliarScript;}
declare module "com.hollingsworth.arsnouveau.common.potions.MagicFindEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagicFindEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFindEffect$$Type = ($MagicFindEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicFindEffect$$Original = $MagicFindEffect;}
declare module "com.hollingsworth.arsnouveau.common.potions.SnareEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SnareEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "SNARE_ATTR": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnareEffect$$Type = ($SnareEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnareEffect$$Original = $SnareEffect;}
declare module "com.hollingsworth.arsnouveau.common.armor.AnimatedMagicArmor" {
import {$IDyeable$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IDyeable"
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $AnimatedMagicArmor extends $ArmorItem implements $IDyeable$$Interface, $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $GeoModel<($AnimatedMagicArmor)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type, arg3: $GeoModel$$Type<($AnimatedMagicArmor$$Type)>)
constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $GeoModel$$Type<($AnimatedMagicArmor$$Type)>)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
/**
 * 
 * @deprecated
 */
public "getColor"(arg0: $ItemStack$$Type): StringJS
public static "light"(arg0: $ArmorItem$Type$$Type): $AnimatedMagicArmor
public "getMinTier"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "heavy"(arg0: $ArmorItem$Type$$Type): $AnimatedMagicArmor
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public static "medium"(arg0: $ArmorItem$Type$$Type): $AnimatedMagicArmor
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "getArmorModel"(): $GeoModel<($AnimatedMagicArmor)>
public "onDye"(arg0: $ItemStack$$Type, arg1: $DyeColor$$Type): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "minTier"(): integer
get "armorModel"(): $GeoModel<($AnimatedMagicArmor)>
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedMagicArmor$$Type = ($AnimatedMagicArmor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimatedMagicArmor$$Original = $AnimatedMagicArmor;}
declare module "com.hollingsworth.arsnouveau.common.block.ItemGrate" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BucketPickup$$Interface} from "net.minecraft.world.level.block.BucketPickup"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemGrate extends $ModBlock implements $BucketPickup$$Interface {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGrate$$Type = ($ItemGrate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGrate$$Original = $ItemGrate;}
declare module "com.hollingsworth.arsnouveau.common.items.FlaskCannon$LingeringLauncher" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FlaskCannon} from "com.hollingsworth.arsnouveau.common.items.FlaskCannon"

export class $FlaskCannon$LingeringLauncher extends $FlaskCannon {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getThrownStack"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type): $ItemStack
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$LingeringLauncher$$Type = ($FlaskCannon$LingeringLauncher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlaskCannon$LingeringLauncher$$Original = $FlaskCannon$LingeringLauncher;}
declare module "com.hollingsworth.arsnouveau.common.spell.rewind.IRewindCallback" {
import {$RewindEvent, $RewindEvent$$Type} from "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent"

export interface $IRewindCallback$$Interface {

(arg0: $RewindEvent): void
}

export class $IRewindCallback implements $IRewindCallback$$Interface {
 "onRewind"(arg0: $RewindEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRewindCallback$$Type = ((arg0: $RewindEvent) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRewindCallback$$Original = $IRewindCallback;}
declare module "com.hollingsworth.arsnouveau.common.block.RepositoryCatalog" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RepositoryCatalog extends $TickableModBlock {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepositoryCatalog$$Type = ($RepositoryCatalog);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepositoryCatalog$$Original = $RepositoryCatalog;}
declare module "com.hollingsworth.arsnouveau.common.items.ScryerScroll" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $ScryerScroll extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryerScroll$$Type = ($ScryerScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryerScroll$$Original = $ScryerScroll;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $SpecialSingleInputRecipe$$Interface extends $Recipe$$Interface<($SingleRecipeInput)> {
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "group"(): StringJS
}

export class $SpecialSingleInputRecipe implements $SpecialSingleInputRecipe$$Interface {
 "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
 "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialSingleInputRecipe$$Type = ($SpecialSingleInputRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialSingleInputRecipe$$Original = $SpecialSingleInputRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.RelayDepositBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Relay} from "com.hollingsworth.arsnouveau.common.block.Relay"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RelayDepositBlock extends $Relay {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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

constructor(arg0: StringJS)
constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayDepositBlock$$Type = ($RelayDepositBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelayDepositBlock$$Original = $RelayDepositBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ReactiveEnchantmentRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ReactiveEnchantmentRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ReactiveEnchantmentRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ReactiveEnchantmentRecipe$Serializer implements $RecipeSerializer$$Interface<($ReactiveEnchantmentRecipe)> {
static readonly "CODEC": $MapCodec<($ReactiveEnchantmentRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($ReactiveEnchantmentRecipe)>

constructor()

public "codec"(): $MapCodec<($ReactiveEnchantmentRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ReactiveEnchantmentRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactiveEnchantmentRecipe$Serializer$$Type = ($ReactiveEnchantmentRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactiveEnchantmentRecipe$Serializer$$Original = $ReactiveEnchantmentRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.itemscrolls.MimicItemScroll" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemScroll} from "com.hollingsworth.arsnouveau.common.items.ItemScroll"
import {$Comparator} from "java.util.Comparator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemScroll$SortPref} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $MimicItemScroll extends $ItemScroll {
static "sortPrefComparator": $Comparator<($ItemScroll$SortPref)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getSortPref"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $IItemHandler$$Type): $ItemScroll$SortPref
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MimicItemScroll$$Type = ($MimicItemScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MimicItemScroll$$Original = $MimicItemScroll;}
declare module "com.hollingsworth.arsnouveau.common.camera.ANIChunkStorageProvider" {
import {$ClientChunkCache$Storage} from "net.minecraft.client.multiplayer.ClientChunkCache$Storage"

export interface $ANIChunkStorageProvider$$Interface {
}

export class $ANIChunkStorageProvider implements $ANIChunkStorageProvider$$Interface {
 "ANnewStorage"(arg0: integer): $ClientChunkCache$Storage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ANIChunkStorageProvider$$Type = ($ANIChunkStorageProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ANIChunkStorageProvider$$Original = $ANIChunkStorageProvider;}
declare module "com.hollingsworth.arsnouveau.common.block.MagelightTorch" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MagelightTorch extends $TickableModBlock {
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
static readonly "FLOOR": $BooleanProperty
static readonly "ROOF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "makeShape"(): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagelightTorch$$Type = ($MagelightTorch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagelightTorch$$Original = $MagelightTorch;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantmentRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EnchantmentRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantmentRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchantmentRecipe$Serializer implements $RecipeSerializer$$Interface<($EnchantmentRecipe)> {
static "CODEC": $MapCodec<($EnchantmentRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnchantmentRecipe)>

constructor()

public "codec"(): $MapCodec<($EnchantmentRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EnchantmentRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRecipe$Serializer$$Type = ($EnchantmentRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentRecipe$Serializer$$Original = $EnchantmentRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.block.DecorBlossom" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DecorBlossom extends $ModBlock implements $ITickableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static "NORTH_SHAPE": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "SOUTH_SHAPE": $VoxelShape
static "WEST_SHAPE": $VoxelShape
static "EAST_SHAPE": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static "DOWN_SHAPE": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static "UP_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecorBlossom$$Type = ($DecorBlossom);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecorBlossom$$Original = $DecorBlossom;}
declare module "com.hollingsworth.arsnouveau.common.items.JarOfLight" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$LightJarData$$Type} from "com.hollingsworth.arsnouveau.common.items.data.LightJarData"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $JarOfLight extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "placeLight"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "removeLight"(arg0: $Level$$Type, arg1: $LightJarData$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarOfLight$$Type = ($JarOfLight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JarOfLight$$Original = $JarOfLight;}
declare module "com.hollingsworth.arsnouveau.common.block.GhostWeave" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MirrorWeave} from "com.hollingsworth.arsnouveau.common.block.MirrorWeave"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $GhostWeave extends $MirrorWeave {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhostWeave$$Type = ($GhostWeave);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GhostWeave$$Original = $GhostWeave;}
declare module "com.hollingsworth.arsnouveau.common.block.MobJar" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $MobJar extends $TickableModBlock implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
static readonly "LIGHT_LEVEL": $Property<(integer)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $Property<(boolean)>
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobJar$$Type = ($MobJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobJar$$Original = $MobJar;}
declare module "com.hollingsworth.arsnouveau.common.block.CreativeSourceJar" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$SourceJar} from "com.hollingsworth.arsnouveau.common.block.SourceJar"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CreativeSourceJar extends $SourceJar {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "fill": $Property<(integer)>
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeSourceJar$$Type = ($CreativeSourceJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeSourceJar$$Original = $CreativeSourceJar;}
declare module "com.hollingsworth.arsnouveau.common.items.VoidJar" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IScribeable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IScribeable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $VoidJar extends $ModItem implements $IScribeable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "toggleStatus"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "preConsume"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "voidStack"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
public static "tryVoiding"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidJar$$Type = ($VoidJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidJar$$Original = $VoidJar;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.RotatingTurretTile" {
import {$BasicSpellTurretTile} from "com.hollingsworth.arsnouveau.common.block.tile.BasicSpellTurretTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$IWandable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotatingTurretTile extends $BasicSpellTurretTile implements $IWandable$$Interface {
 "neededRotationX": float
 "rotationX": float
 "neededRotationY": float
 "rotationY": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "clientNeededX": float
 "clientNeededY": float

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "getShootAngle"(): $Vec3
public "orderedByNearest"(): ($Direction)[]
public "getRotationY"(): float
public "setRotationX"(arg0: float): void
public static "angleBetween"(arg0: $Vec3$$Type, arg1: $Vec3$$Type): double
public "getRotationX"(): float
public "setRotationY"(arg0: float): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
public "shootSpell"(): void
public "aim"(arg0: $BlockPos$$Type, arg1: $Player$$Type): void
public "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
public "getUpdatePacket"(): $Packet
get "shootAngle"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatingTurretTile$$Type = ($RotatingTurretTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotatingTurretTile$$Original = $RotatingTurretTile;}
declare module "com.hollingsworth.arsnouveau.common.items.CasterTome" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $CasterTome extends $ModItem implements $ICasterTool$$Interface, $IManaDiscountEquipment$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterTome$$Type = ($CasterTome);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasterTome$$Original = $CasterTome;}
declare module "com.hollingsworth.arsnouveau.common.mixin.structure.StructureTemplateAccessor" {
import {$StructureTemplate$Palette} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$StructureTemplate$StructureEntityInfo} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$List} from "java.util.List"

export interface $StructureTemplateAccessor$$Interface {
get "palettes"(): $List<($StructureTemplate$Palette)>
get "entityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}

export class $StructureTemplateAccessor implements $StructureTemplateAccessor$$Interface {
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getEntityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccessor$$Type = ($StructureTemplateAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTemplateAccessor$$Original = $StructureTemplateAccessor;}
declare module "com.hollingsworth.arsnouveau.common.block.RedstoneRelay" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RedstoneRelay extends $TickableModBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updatePower"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelay$$Type = ($RedstoneRelay);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneRelay$$Original = $RedstoneRelay;}
declare module "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SourcelinkBlock extends $TickableModBlock {
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

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourcelinkBlock$$Type = ($SourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourcelinkBlock$$Original = $SourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe$WeightedMobType" {
import {$WeightedEntry$$Interface} from "net.minecraft.util.random.WeightedEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Weight} from "net.minecraft.util.random.Weight"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SummonRitualRecipe$WeightedMobType extends $Record implements $WeightedEntry$$Interface {
static readonly "CODEC": $MapCodec<($SummonRitualRecipe$WeightedMobType)>

constructor(arg0: $ResourceLocation$$Type)
constructor(mob: $ResourceLocation$$Type, weight: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "mob"(): $ResourceLocation
public "weight"(): integer
public "getWeight"(): $Weight
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$WeightedMobType$$Type = ({"weight"?: integer, "mob"?: $ResourceLocation$$Type}) | ([weight?: integer, mob?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonRitualRecipe$WeightedMobType$$Original = $SummonRitualRecipe$WeightedMobType;}
declare module "com.hollingsworth.arsnouveau.common.block.SconceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SconceBlock extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SconceBlock$$Type = ($SconceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SconceBlock$$Original = $SconceBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.CasterTomeData$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CasterTomeData} from "com.hollingsworth.arsnouveau.common.crafting.recipes.CasterTomeData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CasterTomeData$Serializer implements $RecipeSerializer$$Interface<($CasterTomeData)> {
static "CODEC": $MapCodec<($CasterTomeData)>
static "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($CasterTomeData)>

constructor()

public "codec"(): $MapCodec<($CasterTomeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CasterTomeData)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterTomeData$Serializer$$Type = ($CasterTomeData$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasterTomeData$Serializer$$Original = $CasterTomeData$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.itemscrolls.DenyItemScroll" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemScroll} from "com.hollingsworth.arsnouveau.common.items.ItemScroll"
import {$Comparator} from "java.util.Comparator"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemScroll$SortPref} from "com.hollingsworth.arsnouveau.common.items.ItemScroll$SortPref"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $DenyItemScroll extends $ItemScroll {
static "sortPrefComparator": $Comparator<($ItemScroll$SortPref)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "getSortPref"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $IItemHandler$$Type): $ItemScroll$SortPref
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenyItemScroll$$Type = ($DenyItemScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenyItemScroll$$Original = $DenyItemScroll;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.StarbuncleCharm" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $StarbuncleCharm extends $AbstractSummonCharm implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarbuncleCharm$$Type = ($StarbuncleCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarbuncleCharm$$Original = $StarbuncleCharm;}
declare module "com.hollingsworth.arsnouveau.common.potions.SummoningSicknessEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map} from "java.util.Map"
import {$EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set$$Type} from "java.util.Set"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SummoningSicknessEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningSicknessEffect$$Type = ($SummoningSicknessEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummoningSicknessEffect$$Original = $SummoningSicknessEffect;}
declare module "com.hollingsworth.arsnouveau.common.world.structure.WildenDen" {
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $WildenDen extends $Structure {
static readonly "CODEC": $MapCodec<($WildenDen)>
 "allowedTerrainHeightRange": $Optional<(integer)>
 "maxYAllowed": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
 "terrainHeightCheckRadius": $Optional<(integer)>
readonly "startJigsawName": $Optional<($ResourceLocation)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "size": integer
 "cannotSpawnInLiquid": boolean
 "minYAllowed": $Optional<(integer)>
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: ($ResourceLocation$$Type)?, arg3: integer, arg4: $HeightProvider$$Type, arg5: ($Heightmap$Types$$Type)?, arg6: integer)

public "type"(): $StructureType<(never)>
public "afterPlace"(arg0: $WorldGenLevel$$Type, arg1: $StructureManager$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BoundingBox$$Type, arg5: $ChunkPos$$Type, arg6: $PiecesContainer$$Type): void
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildenDen$$Type = ($WildenDen);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WildenDen$$Original = $WildenDen;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.CrushRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CrushRecipe$CrushOutput, $CrushRecipe$CrushOutput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.CrushRecipe$CrushOutput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $CrushRecipe extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $List$$Type<($CrushRecipe$CrushOutput$$Type)>)
constructor(input: $Ingredient$$Type, outputs: $List$$Type<($CrushRecipe$CrushOutput$$Type)>, skipBlockPlace: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "input"(): $Ingredient
public "outputs"(): $List<($CrushRecipe$CrushOutput)>
public "shouldSkipBlockPlace"(): boolean
public "getRolledOutputs"(arg0: $RandomSource$$Type): $List<($ItemStack)>
public "skipBlockPlace"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushRecipe$$Type = ({"input"?: $Ingredient$$Type, "skipBlockPlace"?: boolean, "outputs"?: $List$$Type<($CrushRecipe$CrushOutput$$Type)>}) | ([input?: $Ingredient$$Type, skipBlockPlace?: boolean, outputs?: $List$$Type<($CrushRecipe$CrushOutput$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrushRecipe$$Original = $CrushRecipe;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe$MobSource" {
import {$Enum} from "java.lang.Enum"

export class $SummonRitualRecipe$MobSource extends $Enum<($SummonRitualRecipe$MobSource)> {
static readonly "MOB_LIST": $SummonRitualRecipe$MobSource
static readonly "CURRENT_BIOME": $SummonRitualRecipe$MobSource

public static "values"(): ($SummonRitualRecipe$MobSource)[]
public static "valueOf"(arg0: StringJS): $SummonRitualRecipe$MobSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$MobSource$$Type = (("current_biome") | ("mob_list"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonRitualRecipe$MobSource$$Original = $SummonRitualRecipe$MobSource;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ScryRitualRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ScryRitualRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ScryRitualRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ScryRitualRecipe$Serializer implements $RecipeSerializer$$Interface<($ScryRitualRecipe)> {
static readonly "CODEC": $MapCodec<($ScryRitualRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ScryRitualRecipe)>

constructor()

public "codec"(): $MapCodec<($ScryRitualRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ScryRitualRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryRitualRecipe$Serializer$$Type = ($ScryRitualRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryRitualRecipe$Serializer$$Original = $ScryRitualRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.potions.BlastEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BlastEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "explode"(arg0: $LivingEntity$$Type, arg1: integer): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastEffect$$Type = ($BlastEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastEffect$$Original = $BlastEffect;}
declare module "com.hollingsworth.arsnouveau.common.items.Wand" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $Wand extends $ModItem implements $GeoItem$$Interface, $ICasterTool$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wand$$Type = ($Wand);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wand$$Original = $Wand;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.SingleItemTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity} from "net.minecraft.world.entity.item.ItemEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SingleItemTile extends $ModdedTile implements $Container$$Interface {
 "renderEntity": $ItemEntity
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isEmpty"(): boolean
public "getStack"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
public "setStack"(arg0: $ItemStack$$Type): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getMaxStackSize"(): integer
public "clearContent"(): void
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "setChanged"(): void
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getUpdatePacket"(): $Packet
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getSlotLimit"(slot: integer): integer
public "clear"(): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "empty"(): boolean
get "stack"(): $ItemStack
get "containerSize"(): integer
set "stack"(value: $ItemStack$$Type)
get "maxStackSize"(): integer
get "changed"(): void
get "updatePacket"(): $Packet
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleItemTile$$Type = ($SingleItemTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleItemTile$$Original = $SingleItemTile;}
declare module "com.hollingsworth.arsnouveau.common.block.RitualBrazierBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RitualBrazierBlock extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
static readonly "LIT": $Property<(boolean)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualBrazierBlock$$Type = ($RitualBrazierBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualBrazierBlock$$Original = $RitualBrazierBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.StrippableLog" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$BlockRegistryWrapper$$Type} from "com.hollingsworth.arsnouveau.setup.registry.BlockRegistryWrapper"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StrippableLog extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BlockRegistryWrapper$$Type<($Block$$Type)>)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrippableLog$$Type = ($StrippableLog);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrippableLog$$Original = $StrippableLog;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.PrestidigitationRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PrestidigitationRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.PrestidigitationRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PrestidigitationRecipe$Serializer implements $RecipeSerializer$$Interface<($PrestidigitationRecipe)> {
static readonly "CODEC": $MapCodec<($PrestidigitationRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($PrestidigitationRecipe)>

constructor()

public "codec"(): $MapCodec<($PrestidigitationRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PrestidigitationRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrestidigitationRecipe$Serializer$$Type = ($PrestidigitationRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrestidigitationRecipe$Serializer$$Original = $PrestidigitationRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.ManipulationEssence" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractEssence} from "com.hollingsworth.arsnouveau.common.items.AbstractEssence"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export class $ManipulationEssence extends $AbstractEssence {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "name": StringJS
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManipulationEssence$$Type = ($ManipulationEssence);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManipulationEssence$$Original = $ManipulationEssence;}
declare module "com.hollingsworth.arsnouveau.common.items.WornNotebook" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $WornNotebook extends $ModItem implements $GeoItem$$Interface, $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WornNotebook$$Type = ($WornNotebook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WornNotebook$$Original = $WornNotebook;}
declare module "com.hollingsworth.arsnouveau.common.block.DrygmyStone" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$SummonBlock} from "com.hollingsworth.arsnouveau.common.block.SummonBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $DrygmyStone extends $SummonBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrygmyStone$$Type = ($DrygmyStone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrygmyStone$$Original = $DrygmyStone;}
declare module "com.hollingsworth.arsnouveau.common.items.EnchantersFishingRod" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $EnchantersFishingRod extends $ModItem implements $ICasterTool$$Interface, $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getEnchantmentValue"(): integer
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "enchantmentValue"(): integer
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersFishingRod$$Type = ($EnchantersFishingRod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantersFishingRod$$Original = $EnchantersFishingRod;}
declare module "com.hollingsworth.arsnouveau.common.items.Present" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $Present extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Present$$Type = ($Present);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Present$$Original = $Present;}
declare module "com.hollingsworth.arsnouveau.common.block.TimerSpellTurret" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ITurretBehavior} from "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BasicSpellTurret} from "com.hollingsworth.arsnouveau.common.block.BasicSpellTurret"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TimerSpellTurret extends $BasicSpellTurret {
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
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor()

public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimerSpellTurret$$Type = ($TimerSpellTurret);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TimerSpellTurret$$Original = $TimerSpellTurret;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.CrushRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CrushRecipe, $CrushRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.CrushRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CrushRecipe$Serializer implements $RecipeSerializer$$Interface<($CrushRecipe)> {
static readonly "CODEC": $MapCodec<($CrushRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CrushRecipe)>

constructor()

public "codec"(): $MapCodec<($CrushRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $CrushRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CrushRecipe)>
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $CrushRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushRecipe$Serializer$$Type = ($CrushRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrushRecipe$Serializer$$Original = $CrushRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.block.MagicLeaves" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$LeavesBlock} from "net.minecraft.world.level.block.LeavesBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MagicLeaves extends $LeavesBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($LeavesBlock)>
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
static readonly "DECAY_DISTANCE": integer
static readonly "WATERLOGGED": $BooleanProperty
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
export type $MagicLeaves$$Type = ($MagicLeaves);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicLeaves$$Original = $MagicLeaves;}
declare module "com.hollingsworth.arsnouveau.common.block.PortalBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PortalBlock$Size} from "com.hollingsworth.arsnouveau.common.block.PortalBlock$Size"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WarpScrollData$$Type} from "com.hollingsworth.arsnouveau.common.items.data.WarpScrollData"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LiquidBlockContainer$$Interface} from "net.minecraft.world.level.block.LiquidBlockContainer"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PortalBlock extends $TickableModBlock implements $LiquidBlockContainer$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ALTERNATE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isPortal"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $PortalBlock$Size
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "trySpawnVerticalPortal"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $WarpScrollData$$Type, arg3: StringJS): boolean
public "trySpawnHorizontalPortal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $WarpScrollData$$Type, arg3: StringJS): boolean
public "setType"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "trySpawnPortal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $WarpScrollData$$Type, arg3: StringJS): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalBlock$$Type = ($PortalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortalBlock$$Original = $PortalBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.EnchantedSpellTurret" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BasicSpellTurret} from "com.hollingsworth.arsnouveau.common.block.BasicSpellTurret"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ITurretBehavior} from "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantedSpellTurret extends $BasicSpellTurret {
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
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedSpellTurret$$Type = ($EnchantedSpellTurret);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedSpellTurret$$Original = $EnchantedSpellTurret;}
declare module "com.hollingsworth.arsnouveau.common.block.WhirlisprigFlower" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SummonBlock} from "com.hollingsworth.arsnouveau.common.block.SummonBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $WhirlisprigFlower extends $SummonBlock implements $SimpleWaterloggedBlock$$Interface {
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
constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlisprigFlower$$Type = ($WhirlisprigFlower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhirlisprigFlower$$Original = $WhirlisprigFlower;}
declare module "com.hollingsworth.arsnouveau.common.block.PrestidigitationBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $PrestidigitationBlock extends $ModBlock implements $ITickableBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrestidigitationBlock$$Type = ($PrestidigitationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrestidigitationBlock$$Original = $PrestidigitationBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.FlaskCannon$SplashLauncher" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FlaskCannon} from "com.hollingsworth.arsnouveau.common.items.FlaskCannon"

export class $FlaskCannon$SplashLauncher extends $FlaskCannon {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getThrownStack"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type): $ItemStack
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlaskCannon$SplashLauncher$$Type = ($FlaskCannon$SplashLauncher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlaskCannon$SplashLauncher$$Original = $FlaskCannon$SplashLauncher;}
declare module "com.hollingsworth.arsnouveau.common.block.RotatingSpellTurret" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatingTurretTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.RotatingTurretTile"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicSpellTurret} from "com.hollingsworth.arsnouveau.common.block.BasicSpellTurret"
import {$Position} from "net.minecraft.core.Position"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ITurretBehavior} from "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotatingSpellTurret extends $BasicSpellTurret {
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
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static "ROT_TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getDispensePosition"(arg0: $BlockPos$$Type, arg1: $RotatingTurretTile$$Type): $Position
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatingSpellTurret$$Type = ($RotatingSpellTurret);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotatingSpellTurret$$Original = $RotatingSpellTurret;}
declare module "com.hollingsworth.arsnouveau.common.world.feature.LightFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$SingleBlockFeature} from "com.hollingsworth.arsnouveau.common.world.feature.SingleBlockFeature"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LightFeature extends $SingleBlockFeature {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($BlockStateConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($BlockStateConfiguration$$Type)>): boolean
public "onStatePlace"(arg0: $WorldGenLevel$$Type, arg1: $ChunkGenerator$$Type, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $BlockStateConfiguration$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightFeature$$Type = ($LightFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightFeature$$Original = $LightFeature;}
declare module "com.hollingsworth.arsnouveau.common.items.AnimModItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $AnimModItem extends $ModItem implements $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimModItem$$Type = ($AnimModItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimModItem$$Original = $AnimModItem;}
declare module "com.hollingsworth.arsnouveau.common.block.SkyWeave" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MirrorWeave} from "com.hollingsworth.arsnouveau.common.block.MirrorWeave"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $SkyWeave extends $MirrorWeave implements $ITickableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
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
constructor()

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyWeave$$Type = ($SkyWeave);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyWeave$$Original = $SkyWeave;}
declare module "com.hollingsworth.arsnouveau.common.entity.EntitySpellArrow" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Arrow, $Arrow$$Type} from "net.minecraft.world.entity.projectile.Arrow"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$ConfiguredSpellSound} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IntOpenHashSet} from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$ParticleEmitter} from "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractArrow$Pickup} from "net.minecraft.world.entity.projectile.AbstractArrow$Pickup"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EntitySpellArrow extends $Arrow {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "shakeTime": integer
 "xRotO": float
 "resolveEmitter": $ParticleEmitter
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "resolveSound": $ConfiguredSpellSound
 "piercingIgnoreEntityIds": $IntOpenHashSet
 "invulnerableTime": integer
 "piercedAndKilledEntities": $List<($Entity)>
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
 "pierceLeft": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "pickup": $AbstractArrow$Pickup
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
 "tickEmitter": $ParticleEmitter
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "flairEmitter": $ParticleEmitter
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
static readonly "SPELL_RESOLVER": $EntityDataAccessor<($SpellResolver)>
 "onSpawnEmitter": $ParticleEmitter
 "castSound": $ConfiguredSpellSound
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type, arg4: $SpellResolver$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)
constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$$Type, arg5: $ItemStack$$Type)
constructor(arg0: $EntityType$$Type<($Arrow$$Type)>, arg1: $Level$$Type)

public "getEntityType"(): $EntityType<(never)>
public "resolver"(): $SpellResolver
public "tick"(): void
public "setResolver"(arg0: $SpellResolver$$Type): void
public "playResolve"(): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "buildEmitters"(): void
public "playParticles"(): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "entityType"(): $EntityType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpellArrow$$Type = ($EntitySpellArrow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySpellArrow$$Original = $EntitySpellArrow;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEnchantingRecipe, $IEnchantingRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchantingApparatusRecipe implements $IEnchantingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Ingredient$$Type)>, arg3: integer, arg4: boolean)

public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "result"(): $ItemStack
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "sourceCost"(): integer
public "reagent"(): $Ingredient
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "consumesSource"(): boolean
public "doPedestalsMatch"(arg0: $ApparatusRecipeInput$$Type): boolean
public "doesReagentMatch"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public static "doItemsMatch"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($Ingredient$$Type)>): boolean
public "pedestalItems"(): $List<($Ingredient)>
public "keepNbtOfReagent"(): boolean
public "excludeJei"(): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type): boolean
public "isSpecial"(): boolean
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $ApparatusRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusRecipe$$Type = ($EnchantingApparatusRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingApparatusRecipe$$Original = $EnchantingApparatusRecipe;}
declare module "com.hollingsworth.arsnouveau.common.mixin.BlockItemAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockItemAccessor$$Interface {

(arg0: $BlockPos, arg1: $Level, arg2: $ItemStack, arg3: $BlockState): $BlockState$$Type
}

export class $BlockItemAccessor implements $BlockItemAccessor$$Interface {
static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "invokeUpdateBlockStateFromTag"(arg0: $BlockPos$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemAccessor$$Type = ((arg0: $BlockPos, arg1: $Level, arg2: $ItemStack, arg3: $BlockState) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItemAccessor$$Original = $BlockItemAccessor;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ArmorUpgradeRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ArmorUpgradeRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ArmorUpgradeRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ArmorUpgradeRecipe$Serializer implements $RecipeSerializer$$Interface<($ArmorUpgradeRecipe)> {
static "CODEC": $MapCodec<($ArmorUpgradeRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ArmorUpgradeRecipe)>

constructor()

public "codec"(): $MapCodec<($ArmorUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ArmorUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorUpgradeRecipe$Serializer$$Type = ($ArmorUpgradeRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorUpgradeRecipe$Serializer$$Original = $ArmorUpgradeRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.DispelEntityRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DispelEntityRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.DispelEntityRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $DispelEntityRecipe$Serializer implements $RecipeSerializer$$Interface<($DispelEntityRecipe)> {
static readonly "CODEC": $MapCodec<($DispelEntityRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($DispelEntityRecipe)>

constructor()

public "codec"(): $MapCodec<($DispelEntityRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DispelEntityRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispelEntityRecipe$Serializer$$Type = ($DispelEntityRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispelEntityRecipe$Serializer$$Original = $DispelEntityRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.AlchemistsCrown" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$IRadialProvider$$Interface} from "com.hollingsworth.arsnouveau.api.item.IRadialProvider"

export class $AlchemistsCrown extends $ModItem implements $IRadialProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "forKey"(): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistsCrown$$Type = ($AlchemistsCrown);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlchemistsCrown$$Original = $AlchemistsCrown;}
declare module "com.hollingsworth.arsnouveau.common.block.Planarium" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Planarium extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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
static readonly "INVERTED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Planarium$$Type = ($Planarium);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Planarium$$Original = $Planarium;}
declare module "com.hollingsworth.arsnouveau.common.items.PerkItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IPerk, $IPerk$$Type} from "com.hollingsworth.arsnouveau.api.perk.IPerk"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $PerkItem extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "perk": $IPerk
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $IPerk$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerkItem$$Type = ($PerkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PerkItem$$Original = $PerkItem;}
declare module "com.hollingsworth.arsnouveau.common.block.MycelialSourcelinkBlock" {
import {$SourcelinkBlock} from "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MycelialSourcelinkBlock extends $SourcelinkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialSourcelinkBlock$$Type = ($MycelialSourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialSourcelinkBlock$$Original = $MycelialSourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$EnchantingApparatusTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.EnchantingApparatusTile"
import {$Record} from "java.lang.Record"

export class $ApparatusRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(catalyst: $ItemStack$$Type, pedestals: $List$$Type<($ItemStack$$Type)>, player: $Player$$Type)
constructor(arg0: $EnchantingApparatusTile$$Type, arg1: $Player$$Type)
constructor(arg0: $EnchantingApparatusTile$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "player"(): $Player
public "catalyst"(): $ItemStack
public "pedestals"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApparatusRecipeInput$$Type = ({"player"?: $Player$$Type, "pedestals"?: $List$$Type<($ItemStack$$Type)>, "catalyst"?: $ItemStack$$Type}) | ([player?: $Player$$Type, pedestals?: $List$$Type<($ItemStack$$Type)>, catalyst?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApparatusRecipeInput$$Original = $ApparatusRecipeInput;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTypeRegistryWrapper$$Type} from "com.hollingsworth.arsnouveau.setup.registry.BlockEntityTypeRegistryWrapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModdedTile extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockEntityTypeRegistryWrapper$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateBlock"(): boolean
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getY"(): double
public "getZ"(): double
public "getX"(): double
get "updatePacket"(): $Packet
get "y"(): double
get "z"(): double
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModdedTile$$Type = ($ModdedTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModdedTile$$Original = $ModdedTile;}
declare module "com.hollingsworth.arsnouveau.common.block.ArcanePedestal" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f} from "org.joml.Vector3f"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
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
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $ArcanePedestal extends $ModBlock implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DOWN": $VoxelShape
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $VoxelShape

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getOffsetScalar"(): float
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getItemOffset"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type): $Vector3f
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "offsetScalar"(): float
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanePedestal$$Type = ($ArcanePedestal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanePedestal$$Original = $ArcanePedestal;}
declare module "com.hollingsworth.arsnouveau.common.block.SourceBerryBush" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$PathType} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SourceBerryBush extends $BushBlock implements $BonemealableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SourceBerryBush)>
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBerryBush$$Type = ($SourceBerryBush);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourceBerryBush$$Original = $SourceBerryBush;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.AlakarkinosRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AlakarkinosRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.AlakarkinosRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AlakarkinosRecipe$Serializer implements $RecipeSerializer$$Interface<($AlakarkinosRecipe)> {
static readonly "CODEC": $MapCodec<($AlakarkinosRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($AlakarkinosRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlakarkinosRecipe)>

constructor()

public "codec"(): $MapCodec<($AlakarkinosRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AlakarkinosRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlakarkinosRecipe$Serializer$$Type = ($AlakarkinosRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlakarkinosRecipe$Serializer$$Original = $AlakarkinosRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.BlankParchmentItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IScribeable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IScribeable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlankParchmentItem extends $ModItem implements $IScribeable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankParchmentItem$$Type = ($BlankParchmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlankParchmentItem$$Original = $BlankParchmentItem;}
declare module "com.hollingsworth.arsnouveau.common.block.AgronomicSourcelinkBlock" {
import {$SourcelinkBlock} from "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AgronomicSourcelinkBlock extends $SourcelinkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgronomicSourcelinkBlock$$Type = ($AgronomicSourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgronomicSourcelinkBlock$$Original = $AgronomicSourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.ScribesBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TableBlock} from "com.hollingsworth.arsnouveau.common.block.TableBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PlayerInteractEvent$RightClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ThreePartBlock} from "com.hollingsworth.arsnouveau.common.block.ThreePartBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ScribesBlock extends $TableBlock {
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
static readonly "PART": $EnumProperty<($ThreePartBlock)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "rightClick"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public "tearDown"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScribesBlock$$Type = ($ScribesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScribesBlock$$Original = $ScribesBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.RuneBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RuneBlock extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "FLOOR": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneBlock$$Type = ($RuneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneBlock$$Original = $RuneBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.SpellSensor" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SculkSensorPhase} from "net.minecraft.world.level.block.state.properties.SculkSensorPhase"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SpellSensor extends $TickableModBlock {
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
static readonly "PHASE": $EnumProperty<($SculkSensorPhase)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSensor$$Type = ($SpellSensor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellSensor$$Original = $SpellSensor;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.DrygmyCharm" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $DrygmyCharm extends $AbstractSummonCharm implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrygmyCharm$$Type = ($DrygmyCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrygmyCharm$$Original = $DrygmyCharm;}
declare module "com.hollingsworth.arsnouveau.common.potions.BounceEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$LivingFallEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingFallEvent"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BounceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "onFall"(arg0: $LivingFallEvent$$Type): void
public static "onFlyWallDamage"(arg0: $LivingDamageEvent$Pre$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BounceEffect$$Type = ($BounceEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BounceEffect$$Original = $BounceEffect;}
declare module "com.hollingsworth.arsnouveau.common.block.ArcaneCore" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcaneCore extends $ModBlock implements $EntityBlock$$Interface {
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
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
export type $ArcaneCore$$Type = ($ArcaneCore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcaneCore$$Original = $ArcaneCore;}
declare module "com.hollingsworth.arsnouveau.common.block.ScryerCrystal" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position} from "net.minecraft.core.Position"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ScryerCrystal extends $TickableModBlock {
static "DOWN": $VoxelShape
static "WEST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "NORTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "SOUTH": $VoxelShape
static "UP": $VoxelShape
static "EAST": $VoxelShape
static readonly "BEING_VIEWED": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "getDispensePosition"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): $Position
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryerCrystal$$Type = ($ScryerCrystal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScryerCrystal$$Original = $ScryerCrystal;}
declare module "com.hollingsworth.arsnouveau.common.block.VitalicSourcelinkBlock" {
import {$SourcelinkBlock} from "com.hollingsworth.arsnouveau.common.block.SourcelinkBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VitalicSourcelinkBlock extends $SourcelinkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VitalicSourcelinkBlock$$Type = ($VitalicSourcelinkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VitalicSourcelinkBlock$$Original = $VitalicSourcelinkBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.RelayWarpBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Relay} from "com.hollingsworth.arsnouveau.common.block.Relay"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RelayWarpBlock extends $Relay {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: StringJS)
constructor(arg0: StringJS)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelayWarpBlock$$Type = ($RelayWarpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelayWarpBlock$$Original = $RelayWarpBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.ImbuementTile" {
import {$ITooltipProvider$$Interface} from "com.hollingsworth.arsnouveau.api.client.ITooltipProvider"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IImbuementRecipe} from "com.hollingsworth.arsnouveau.api.imbuement_chamber.IImbuementRecipe"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemEntity} from "net.minecraft.world.entity.item.ItemEntity"
import {$IPedestalMachine$$Interface} from "com.hollingsworth.arsnouveau.api.block.IPedestalMachine"
import {$SourceStorage} from "com.hollingsworth.arsnouveau.common.capability.SourceStorage"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$AbstractSourceMachine} from "com.hollingsworth.arsnouveau.api.source.AbstractSourceMachine"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ImbuementTile extends $AbstractSourceMachine implements $Container$$Interface, $ITickable$$Interface, $GeoBlockEntity$$Interface, $ITooltipProvider$$Interface, $IPedestalMachine$$Interface, $RecipeInput$$Interface {
static "COLOR_TAG": StringJS
 "stack": $ItemStack
 "sourceStorage": $SourceStorage
 "frames": float
 "draining": boolean
static "SOURCE_TAG": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "entity": $ItemEntity

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "size"(): integer
public "isEmpty"(): boolean
public "getStack"(): $ItemStack
public "tick"(): void
public "getItem"(arg0: integer): $ItemStack
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "lightPedestal"(arg0: $Level$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getPedestalItems"(): $List<($ItemStack)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getMaxStackSize"(): integer
public "clearContent"(): void
public "getRecipeNow"(): $RecipeHolder<($IImbuementRecipe)>
public "getNearbyPedestals"(): $List<($BlockPos)>
public "stopOpen"(arg0: $Player$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "setChanged"(): void
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $List$$Type<($BlockPos$$Type)>): void
public "pedestalList"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Level$$Type): $List<($BlockPos)>
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "isMutable"(): boolean
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "getSlotLimit"(slot: integer): integer
public "clear"(): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
public "getUpdatePacket"(): $Packet
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "clear"(match: $ItemPredicate$$Type): void
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
get "empty"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "containerSize"(): integer
get "pedestalItems"(): $List<($ItemStack)>
get "maxStackSize"(): integer
get "recipeNow"(): $RecipeHolder<($IImbuementRecipe)>
get "nearbyPedestals"(): $List<($BlockPos)>
get "changed"(): void
get "width"(): integer
get "height"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "changed"(): void
get "boneResetTime"(): double
get "updatePacket"(): $Packet
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementTile$$Type = ($ImbuementTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImbuementTile$$Original = $ImbuementTile;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.CasterTomeData" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ConfiguredSpellSound$$Type} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $CasterTomeData extends $Record implements $SpecialSingleInputRecipe$$Interface {
constructor(flavorText: StringJS, spell: $Spell$$Type, tomeType: $ResourceLocation$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: $List$$Type<($ResourceLocation$$Type)>, arg2: $ResourceLocation$$Type, arg3: StringJS, arg4: $CompoundTag$$Type, arg5: $ConfiguredSpellSound$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: $List$$Type<($ResourceLocation$$Type)>, arg2: $ResourceLocation$$Type, arg3: StringJS, arg4: $ParticleColor$$Type, arg5: $ConfiguredSpellSound$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "spell"(): $Spell
public "tomeType"(): $ResourceLocation
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "flavorText"(): StringJS
public static "makeTome"(arg0: $Item$$Type, arg1: $Spell$$Type, arg2: StringJS): $ItemStack
public static "makeTome"(arg0: $Item$$Type, arg1: StringJS, arg2: $Spell$$Type, arg3: StringJS): $ItemStack
public static "deserialize"(arg0: StringJS, arg1: $List$$Type<($ResourceLocation$$Type)>, arg2: $ResourceLocation$$Type, arg3: StringJS, arg4: $ParticleColor$$Type, arg5: $ConfiguredSpellSound$$Type, arg6: ($Spell$$Type)?): $CasterTomeData
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterTomeData$$Type = ({"spell"?: $Spell$$Type, "tomeType"?: $ResourceLocation$$Type, "flavorText"?: StringJS}) | ([spell?: $Spell$$Type, tomeType?: $ResourceLocation$$Type, flavorText?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CasterTomeData$$Original = $CasterTomeData;}
declare module "com.hollingsworth.arsnouveau.common.items.StableWarpScroll" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"

export class $StableWarpScroll extends $ModItem implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWarpScroll$$Type = ($StableWarpScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StableWarpScroll$$Original = $StableWarpScroll;}
declare module "com.hollingsworth.arsnouveau.common.block.ThreePartBlock" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ThreePartBlock extends $Enum<($ThreePartBlock)> implements $StringRepresentable$$Interface {
static readonly "OTHER": $ThreePartBlock
static readonly "HEAD": $ThreePartBlock
static readonly "FOOT": $ThreePartBlock

public "toString"(): StringJS
public static "values"(): ($ThreePartBlock)[]
public static "valueOf"(arg0: StringJS): $ThreePartBlock
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
export type $ThreePartBlock$$Type = (("head") | ("foot") | ("other"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThreePartBlock$$Original = $ThreePartBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.SourceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SourceBlock extends $ModBlock implements $EntityBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: StringJS)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceBlock$$Type = ($SourceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourceBlock$$Original = $SourceBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.DowsingRod" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $DowsingRod extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DowsingRod$$Type = ($DowsingRod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DowsingRod$$Original = $DowsingRod;}
declare module "com.hollingsworth.arsnouveau.common.block.SourceLamp" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ILightable$$Interface} from "com.hollingsworth.arsnouveau.api.spell.ILightable"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$CopperBulbBlock} from "net.minecraft.world.level.block.CopperBulbBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SourceLamp extends $CopperBulbBlock implements $ILightable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CopperBulbBlock)>
static readonly "LIGHT_LEVEL": $IntegerProperty
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor()

public "onLight"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceLamp$$Type = ($SourceLamp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourceLamp$$Original = $SourceLamp;}
declare module "com.hollingsworth.arsnouveau.common.items.AlakarkinosCharm" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $AlakarkinosCharm extends $AbstractSummonCharm implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlakarkinosCharm$$Type = ($AlakarkinosCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlakarkinosCharm$$Original = $AlakarkinosCharm;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.PrestidigitationRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PrestidigitationRecipe extends $EnchantingApparatusRecipe {
constructor(arg0: $List$$Type<($Ingredient$$Type)>, arg1: integer)

public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "doesReagentMatch"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "excludeJei"(): boolean
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrestidigitationRecipe$$Type = ($PrestidigitationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrestidigitationRecipe$$Original = $PrestidigitationRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.SourceJar" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$SourceBlock} from "com.hollingsworth.arsnouveau.common.block.SourceBlock"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $SourceJar extends $SourceBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "fill": $Property<(integer)>
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
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: StringJS)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
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
export type $SourceJar$$Type = ($SourceJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourceJar$$Original = $SourceJar;}
declare module "com.hollingsworth.arsnouveau.common.block.DirectionalModBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DirectionalModBlock extends $ModBlock {
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
constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalModBlock$$Type = ($DirectionalModBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DirectionalModBlock$$Original = $DirectionalModBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.RepositoryBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
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
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $RepositoryBlock extends $ModBlock implements $EntityBlock$$Interface {
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

public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepositoryBlock$$Type = ($RepositoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepositoryBlock$$Original = $RepositoryBlock;}
declare module "com.hollingsworth.arsnouveau.common.potions.ImmolateEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ImmolateEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolateEffect$$Type = ($ImmolateEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmolateEffect$$Original = $ImmolateEffect;}
declare module "com.hollingsworth.arsnouveau.common.mixin.EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor$$Interface {
set "boardingCooldown"(value: integer)
get "boardingCooldown"(): integer
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "setBoardingCooldown"(arg0: integer): void
 "getBoardingCooldown"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ($EntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.ImbuementRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ImbuementRecipe, $ImbuementRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ImbuementRecipe"

export class $ImbuementRecipe$Serializer implements $RecipeSerializer$$Interface<($ImbuementRecipe)> {
static readonly "CODEC": $MapCodec<($ImbuementRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ImbuementRecipe)>

constructor()

public "codec"(): $MapCodec<($ImbuementRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $ImbuementRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ImbuementRecipe)>
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $ImbuementRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuementRecipe$Serializer$$Type = ($ImbuementRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImbuementRecipe$Serializer$$Original = $ImbuementRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.SpellCrossbow" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$EntitySpellArrow} from "com.hollingsworth.arsnouveau.common.entity.EntitySpellArrow"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$CrossbowItem} from "net.minecraft.world.item.CrossbowItem"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $SpellCrossbow extends $CrossbowItem implements $GeoItem$$Interface, $ICasterTool$$Interface, $IManaDiscountEquipment$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MOB_ARROW_POWER": float
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "performShooting"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: $LivingEntity$$Type): void
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "shootOne"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type, arg5: float, arg6: boolean, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "buildSpellArrow"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $AbstractCaster$$Type<(never)>, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type): $EntitySpellArrow
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCrossbow$$Type = ($SpellCrossbow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellCrossbow$$Original = $SpellCrossbow;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.BuddingConversionRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BuddingConversionRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.BuddingConversionRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BuddingConversionRecipe$Serializer implements $RecipeSerializer$$Interface<($BuddingConversionRecipe)> {
static readonly "CODEC": $MapCodec<($BuddingConversionRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($BuddingConversionRecipe)>

constructor()

public "codec"(): $MapCodec<($BuddingConversionRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BuddingConversionRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuddingConversionRecipe$Serializer$$Type = ($BuddingConversionRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BuddingConversionRecipe$Serializer$$Original = $BuddingConversionRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.spell.rewind.RewindEntityData" {
import {$RewindEvent$$Type} from "com.hollingsworth.arsnouveau.common.event.timed.RewindEvent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IRewindCallback$$Interface} from "com.hollingsworth.arsnouveau.common.spell.rewind.IRewindCallback"

export class $RewindEntityData implements $IRewindCallback$$Interface {
 "gameTime": long
 "deltaMovement": $Vec3
 "health": float
 "position": $Vec3

constructor(arg0: long, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: float)

public "onRewind"(arg0: $RewindEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewindEntityData$$Type = ($RewindEntityData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RewindEntityData$$Original = $RewindEntityData;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.EnchantingApparatusTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity} from "net.minecraft.world.entity.item.ItemEntity"
import {$IPedestalMachine$$Interface} from "com.hollingsworth.arsnouveau.api.block.IPedestalMachine"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$SingleItemTile} from "com.hollingsworth.arsnouveau.common.block.tile.SingleItemTile"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$Container$$Interface} from "net.minecraft.world.Container"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantingApparatusTile extends $SingleItemTile implements $Container$$Interface, $IPedestalMachine$$Interface, $ITickable$$Interface, $GeoBlockEntity$$Interface {
 "isCrafting": boolean
static readonly "craftingLength": integer
 "renderEntity": $ItemEntity
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "getItem"(arg0: integer): $ItemStack
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "lightPedestal"(arg0: $Level$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getPedestalItems"(): $List<($ItemStack)>
public "getRecipe"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $IEnchantingRecipe
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "clearItems"(): void
public "getBoneResetTime"(): double
public "pedestalList"(): $List<($BlockPos)>
public "attemptCraft"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "craftingPossible"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "isEmpty"(): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getContainerSize"(): integer
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getMaxStackSize"(): integer
public "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "spawnParticlesForPedestal"(arg0: $Level$$Type, arg1: $List$$Type<($BlockPos$$Type)>): void
public "pedestalList"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Level$$Type): $List<($BlockPos)>
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public static "tryClear"(arg0: any): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getUpdatePacket"(): $Packet
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "pedestalItems"(): $List<($ItemStack)>
get "boneResetTime"(): double
get "empty"(): boolean
get "containerSize"(): integer
get "changed"(): void
get "maxStackSize"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusTile$$Type = ($EnchantingApparatusTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingApparatusTile$$Original = $EnchantingApparatusTile;}
declare module "com.hollingsworth.arsnouveau.common.potions.ShockedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ShockedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockedEffect$$Type = ($ShockedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShockedEffect$$Original = $ShockedEffect;}
declare module "com.hollingsworth.arsnouveau.common.block.tile.RitualBrazierTile" {
import {$ILightable$$Interface} from "com.hollingsworth.arsnouveau.api.spell.ILightable"
import {$ITooltipProvider$$Interface} from "com.hollingsworth.arsnouveau.api.client.ITooltipProvider"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IWandable$Result} from "com.hollingsworth.arsnouveau.api.item.IWandable$Result"
import {$IWandable$$Interface} from "com.hollingsworth.arsnouveau.api.item.IWandable"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"
import {$IDispellable$$Interface} from "com.hollingsworth.arsnouveau.api.entity.IDispellable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GeoBlockEntity$$Interface} from "software.bernie.geckolib.animatable.GeoBlockEntity"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$InventoryManager} from "com.hollingsworth.arsnouveau.api.item.inv.InventoryManager"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickable$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickable"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ModdedTile} from "com.hollingsworth.arsnouveau.common.block.tile.ModdedTile"
import {$ColorPos, $ColorPos$$Type} from "com.hollingsworth.arsnouveau.client.particle.ColorPos"
import {$IInvProvider$$Interface} from "com.hollingsworth.arsnouveau.api.item.inv.IInvProvider"
import {$SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$AbstractRitual} from "com.hollingsworth.arsnouveau.api.ritual.AbstractRitual"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $RitualBrazierTile extends $ModdedTile implements $ITooltipProvider$$Interface, $GeoBlockEntity$$Interface, $ILightable$$Interface, $ITickable$$Interface, $IInvProvider$$Interface, $IDispellable$$Interface, $IWandable$$Interface {
 "isDecorative": boolean
 "color": $ParticleColor
 "ritual": $AbstractRitual
 "relayPos": $BlockPos
 "isOff": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "sourceBackoff": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
/**
 * 
 * @deprecated
 */
public "startRitual"(): void
public "startRitual"(arg0: $Player$$Type): void
public "getInventoryManager"(): $InventoryManager
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "setRitual"(arg0: $ResourceLocation$$Type): void
public "onWanded"(arg0: $Player$$Type): void
public "takeSource"(): boolean
public "onDispel"(arg0: $LivingEntity$$Type): boolean
public "onLight"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type): void
public "makeParticle"(arg0: $ParticleColor$$Type, arg1: $ParticleColor$$Type, arg2: integer): void
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
public "canTakeAnotherRitual"(): boolean
public "isRitualDone"(): boolean
/**
 * 
 * @deprecated
 */
public "canRitualStart"(): boolean
public "tryBurnStack"(arg0: $ItemStack$$Type): boolean
public "getWandHighlight"(arg0: $List$$Type<($ColorPos$$Type)>): $List<($ColorPos)>
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "tick"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionFirst"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $BlockPos$$Type, arg1: $LivingEntity$$Type, arg2: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "onFinishedConnectionLast"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): void
public "onClearConnections"(arg0: $Player$$Type): $IWandable$Result
public "onFirstConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public "onLastConnection"(arg0: $GlobalPos$$Type, arg1: $Direction$$Type, arg2: $LivingEntity$$Type, arg3: $Player$$Type): $IWandable$Result
public static "getStoredDimension"(arg0: $GlobalPos$$Type, arg1: $LivingEntity$$Type): $ResourceKey<($Level)>
public "getUpdatePacket"(): $Packet
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
get "inventoryManager"(): $InventoryManager
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "ritualDone"(): boolean
get "updatePacket"(): $Packet
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualBrazierTile$$Type = ($RitualBrazierTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualBrazierTile$$Original = $RitualBrazierTile;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$SummonRitualRecipe$MobSource, $SummonRitualRecipe$MobSource$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe$MobSource"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SummonRitualRecipe$WeightedMobType, $SummonRitualRecipe$WeightedMobType$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe$WeightedMobType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SpecialSingleInputRecipe$$Interface} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SpecialSingleInputRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SummonRitualRecipe implements $SpecialSingleInputRecipe$$Interface {
readonly "augment": $Ingredient
readonly "mobs": $WeightedRandomList<($SummonRitualRecipe$WeightedMobType)>
readonly "mobSource": $SummonRitualRecipe$MobSource
readonly "count": integer

constructor(arg0: $Ingredient$$Type, arg1: $SummonRitualRecipe$MobSource$$Type, arg2: integer)
constructor(arg0: $Ingredient$$Type, arg1: StringJS, arg2: integer, arg3: $WeightedRandomList$$Type<($SummonRitualRecipe$WeightedMobType$$Type)>)
constructor(arg0: $Ingredient$$Type, arg1: StringJS, arg2: integer, arg3: $List$$Type<($SummonRitualRecipe$WeightedMobType$$Type)>)
constructor(arg0: $Ingredient$$Type, arg1: $SummonRitualRecipe$MobSource$$Type, arg2: integer, arg3: $WeightedRandomList$$Type<($SummonRitualRecipe$WeightedMobType$$Type)>)

public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $List$$Type<($ItemStack$$Type)>): boolean
public "getType"(): $RecipeType<(never)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $ItemStack$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$$Type = ($SummonRitualRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonRitualRecipe$$Original = $SummonRitualRecipe;}
declare module "com.hollingsworth.arsnouveau.common.items.summon_charms.AmethystGolemCharm" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $AmethystGolemCharm extends $AbstractSummonCharm {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmethystGolemCharm$$Type = ($AmethystGolemCharm);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmethystGolemCharm$$Original = $AmethystGolemCharm;}
declare module "com.hollingsworth.arsnouveau.common.block.MageBloomCrop" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CropBlock} from "net.minecraft.world.level.block.CropBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MageBloomCrop extends $CropBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "AGE_0_4": $IntegerProperty
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AGE": $IntegerProperty

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MageBloomCrop$$Type = ($MageBloomCrop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MageBloomCrop$$Original = $MageBloomCrop;}
declare module "com.hollingsworth.arsnouveau.common.items.FormSpellArrow" {
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$SpellArrow} from "com.hollingsworth.arsnouveau.common.items.SpellArrow"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $FormSpellArrow extends $SpellArrow {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "numParts": integer
static readonly "MAX_BAR_WIDTH": integer
 "part": $AbstractSpellPart
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AbstractAugment$$Type, arg1: integer)

public "modifySpell"(arg0: $Spell$Mutable$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FormSpellArrow$$Type = ($FormSpellArrow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FormSpellArrow$$Original = $FormSpellArrow;}
declare module "com.hollingsworth.arsnouveau.common.items.curios.BeltOfUnstableGifts" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArsNouveauCurio} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"

export class $BeltOfUnstableGifts extends $ArsNouveauCurio {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeltOfUnstableGifts$$Type = ($BeltOfUnstableGifts);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeltOfUnstableGifts$$Original = $BeltOfUnstableGifts;}
declare module "com.hollingsworth.arsnouveau.common.block.AlterationTable" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TableBlock} from "com.hollingsworth.arsnouveau.common.block.TableBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ThreePartBlock} from "com.hollingsworth.arsnouveau.common.block.ThreePartBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AlterationTable extends $TableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static "WEST_OTHER": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static "NORTH_OTHER": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "PART": $EnumProperty<($ThreePartBlock)>
static "SOUTH_OTHER": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static "EAST_OTHER": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "tearDown"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getConnectedDirections"(arg0: $BlockState$$Type): $List<($Direction)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlterationTable$$Type = ($AlterationTable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlterationTable$$Original = $AlterationTable;}
declare module "com.hollingsworth.arsnouveau.common.block.RelaySplitter" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Relay} from "com.hollingsworth.arsnouveau.common.block.Relay"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RelaySplitter extends $Relay {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelaySplitter$$Type = ($RelaySplitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RelaySplitter$$Original = $RelaySplitter;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantmentRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnchantmentRecipe extends $EnchantingApparatusRecipe {
constructor(arg0: $List$$Type<($Ingredient$$Type)>, arg1: $ResourceKey$$Type<($Enchantment)>, arg2: integer, arg3: integer)

public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "doesReagentMatch"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type, arg2: $Player$$Type): boolean
public "enchantmentKey"(): $ResourceKey<($Enchantment)>
public "enchantLevel"(): integer
public "excludeJei"(): boolean
public "holderFor"(arg0: $Level$$Type): $Holder<($Enchantment)>
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentRecipe$$Type = ($EnchantmentRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentRecipe$$Original = $EnchantmentRecipe;}
declare module "com.hollingsworth.arsnouveau.common.block.ModBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModBlock extends $Block {
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
constructor()

public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public static "defaultProperties"(): $BlockBehaviour$Properties
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBlock$$Type = ($ModBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlock$$Original = $ModBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.WarpScroll" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AliasProvider$$Interface} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AliasProvider$Alias} from "com.hollingsworth.arsnouveau.client.jei.AliasProvider$Alias"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $WarpScroll extends $ModItem implements $AliasProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getAliases"(): $Collection<($AliasProvider$Alias)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "aliases"(): $Collection<($AliasProvider$Alias)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpScroll$$Type = ($WarpScroll);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarpScroll$$Original = $WarpScroll;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SummonRitualRecipe} from "com.hollingsworth.arsnouveau.common.crafting.recipes.SummonRitualRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SummonRitualRecipe$Serializer implements $RecipeSerializer$$Interface<($SummonRitualRecipe)> {
static readonly "CODEC": $MapCodec<($SummonRitualRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SummonRitualRecipe)>

constructor()

public "codec"(): $MapCodec<($SummonRitualRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SummonRitualRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonRitualRecipe$Serializer$$Type = ($SummonRitualRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonRitualRecipe$Serializer$$Original = $SummonRitualRecipe$Serializer;}
declare module "com.hollingsworth.arsnouveau.common.items.Debug" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Path} from "java.nio.file.Path"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $Debug extends $ModItem {
static readonly "DEBUG_LOG": $Path
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Debug$$Type = ($Debug);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Debug$$Original = $Debug;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.IDyeable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

/**
 * 
 * @deprecated
 */
export interface $IDyeable$$Interface {
}

export class $IDyeable implements $IDyeable$$Interface {
 "onDye"(arg0: $ItemStack$$Type, arg1: $DyeColor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDyeable$$Type = ($IDyeable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDyeable$$Original = $IDyeable;}
declare module "com.hollingsworth.arsnouveau.common.items.SpellArrow" {
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$AbstractAugment$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractAugment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpellArrow extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "numParts": integer
static readonly "MAX_BAR_WIDTH": integer
 "part": $AbstractSpellPart
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AbstractAugment$$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createArrow"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractArrow
public "modifySpell"(arg0: $Spell$Mutable$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellArrow$$Type = ($SpellArrow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellArrow$$Original = $SpellArrow;}
declare module "com.hollingsworth.arsnouveau.common.crafting.recipes.CrushRecipe$CrushOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $CrushRecipe$CrushOutput extends $Record {
static readonly "CODEC": $Codec<($CrushRecipe$CrushOutput)>

constructor(arg0: $ItemStack$$Type, arg1: float)
constructor(stack: $ItemStack$$Type, chance: float, maxRange: integer)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "chance"(): float
public "maxRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushRecipe$CrushOutput$$Type = ({"maxRange"?: integer, "chance"?: float, "stack"?: $ItemStack$$Type}) | ([maxRange?: integer, chance?: float, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrushRecipe$CrushOutput$$Original = $CrushRecipe$CrushOutput;}
declare module "com.hollingsworth.arsnouveau.common.block.ArchfruitPod" {
import {$ILightable$$Interface} from "com.hollingsworth.arsnouveau.api.spell.ILightable"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CocoaBlock} from "net.minecraft.world.level.block.CocoaBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$SpellStats$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ArchfruitPod extends $CocoaBlock implements $ILightable$$Interface {
/**
 * 
 * @deprecated
 */
 "surviveBlock": $Supplier<($Block)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CocoaBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
 "surviveTag": $TagKey<($Block)>
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor(arg0: $TagKey$$Type<($Block)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Supplier$$Type<($Block$$Type)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onLight"(arg0: $HitResult$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: $SpellStats$$Type, arg4: $SpellContext$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchfruitPod$$Type = ($ArchfruitPod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArchfruitPod$$Original = $ArchfruitPod;}
declare module "com.hollingsworth.arsnouveau.common.block.IntangibleAirBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$LiquidBlockContainer$$Interface} from "net.minecraft.world.level.block.LiquidBlockContainer"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IntangibleAirBlock extends $TickableModBlock implements $LiquidBlockContainer$$Interface {
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

public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntangibleAirBlock$$Type = ($IntangibleAirBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntangibleAirBlock$$Original = $IntangibleAirBlock;}
declare module "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Optional} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$GeoEntity$$Interface} from "software.bernie.geckolib.animatable.GeoEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ColoredProjectile} from "com.hollingsworth.arsnouveau.common.entity.ColoredProjectile"
import {$DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Set} from "java.util.Set"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ConfiguredSpellSound} from "com.hollingsworth.arsnouveau.api.sound.ConfiguredSpellSound"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ParticleEmitter} from "com.hollingsworth.arsnouveau.api.particle.ParticleEmitter"
import {$Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Stack} from "java.util.Stack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$SpellResolver, $SpellResolver$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellResolver"

export class $EntityProjectileSpell extends $ColoredProjectile implements $GeoEntity$$Interface {
 "xRot": float
 "hasImpulse": boolean
static readonly "OWNER_ID": $EntityDataAccessor<(integer)>
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
/**
 * 
 * @deprecated
 */
 "expireTime": integer
 "resolveEmitter": $ParticleEmitter
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "rainbowStartTick": integer
 "hurtMarked": boolean
 "resolveSound": $ConfiguredSpellSound
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BLUE": $EntityDataAccessor<(integer)>
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "prismRedirect": integer
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
 "pierceLeft": integer
static readonly "DEFAULT_BB_HEIGHT": float
/**
 * 
 * @deprecated
 */
 "spellResolver": $SpellResolver
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hitList": $Set<($BlockPos)>
 "hasBeenShot": boolean
static readonly "GREEN": $EntityDataAccessor<(integer)>
 "tickEmitter": $ParticleEmitter
static readonly "RED": $EntityDataAccessor<(integer)>
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "flairEmitter": $ParticleEmitter
static readonly "PARTICLE_TAG": $EntityDataAccessor<($CompoundTag)>
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
static readonly "SPELL_RESOLVER": $EntityDataAccessor<($SpellResolver)>
 "onSpawnEmitter": $ParticleEmitter
 "castSound": $ConfiguredSpellSound
 "age": integer
 "numSensitive": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double)
constructor(arg0: $EntityType$$Type<($EntityProjectileSpell$$Type)>, arg1: $Level$$Type, arg2: $SpellResolver$$Type)
constructor(arg0: $Level$$Type, arg1: $SpellResolver$$Type)
constructor(arg0: $Level$$Type, arg1: $LivingEntity$$Type)
constructor(arg0: $EntityType$$Type<($EntityProjectileSpell$$Type)>, arg1: $Level$$Type)
constructor(arg0: $EntityType$$Type<($EntityProjectileSpell$$Type)>, arg1: $Level$$Type, arg2: double, arg3: double, arg4: double)
constructor(arg0: $EntityType$$Type<($EntityProjectileSpell$$Type)>, arg1: $Level$$Type, arg2: $LivingEntity$$Type)

public "load"(arg0: $CompoundTag$$Type): void
public "getEntityType"(): $EntityType<(never)>
public "resolver"(): $SpellResolver
public "setOwner"(arg0: $Entity$$Type): void
public "tick"(): void
public "shoot"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float): void
public "shoot"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "sendResolveParticles"(): void
public "bounce"(arg0: $BlockHitResult$$Type): void
public "setResolver"(arg0: $SpellResolver$$Type): void
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$$Type): void
public "isNoGravity"(): boolean
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "setRemoved"(arg0: $Entity$RemovalReason$$Type): void
public "getExpirationTime"(): integer
public "setGravity"(arg0: boolean): $EntityProjectileSpell
public "canBounce"(): boolean
public "getHitResult"(): $HitResult
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "transformHitResult"(arg0: $HitResult$$Type): $HitResult
public "getNextHitPosition"(): $Vec3
public "canTraversePortals"(): boolean
public "traceAnyHit"(arg0: $HitResult$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type): void
public "buildEmitters"(): void
public "tickNextPosition"(): void
public "getParticleDelay"(): integer
public "playParticles"(): void
/**
 * 
 * @deprecated
 */
public "readSpawnData"(arg0: $FriendlyByteBuf$$Type): void
/**
 * 
 * @deprecated
 */
public "writeSpawnData"(arg0: $FriendlyByteBuf$$Type): void
public "getTick"(arg0: any): double
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "entityType"(): $EntityType<(never)>
set "owner"(value: $Entity$$Type)
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "noGravity"(): boolean
set "removed"(value: $Entity$RemovalReason$$Type)
get "expirationTime"(): integer
set "gravity"(value: boolean)
get "hitResult"(): $HitResult
get "nextHitPosition"(): $Vec3
get "particleDelay"(): integer
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityProjectileSpell$$Type = ($EntityProjectileSpell);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityProjectileSpell$$Original = $EntityProjectileSpell;}
declare module "com.hollingsworth.arsnouveau.common.block.TableBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ThreePartBlock, $ThreePartBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.ThreePartBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TableBlock extends $TickableModBlock {
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
static readonly "PART": $EnumProperty<($ThreePartBlock)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "getNeighbourDirection"(arg0: $ThreePartBlock$$Type, arg1: $Direction$$Type): $Direction
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "tearDown"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableBlock$$Type = ($TableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TableBlock$$Original = $TableBlock;}
declare module "com.hollingsworth.arsnouveau.common.block.PotionJar" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
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
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $PotionJar extends $ModBlock implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface {
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
constructor()

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionJar$$Type = ($PotionJar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionJar$$Original = $PotionJar;}
declare module "com.hollingsworth.arsnouveau.common.potions.PublicEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $PublicEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicEffect$$Type = ($PublicEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicEffect$$Original = $PublicEffect;}
declare module "com.hollingsworth.arsnouveau.common.items.ModBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ModBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getRarity"(): $Rarity
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "withRarity"(arg0: $Rarity$$Type): $ModBlockItem
public "withTooltip"(arg0: $Component$$Type): $ModBlockItem
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
export type $ModBlockItem$$Type = ($ModBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBlockItem$$Original = $ModBlockItem;}
declare module "com.hollingsworth.arsnouveau.common.items.RitualTablet" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractRitual, $AbstractRitual$$Type} from "com.hollingsworth.arsnouveau.api.ritual.AbstractRitual"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ModItem} from "com.hollingsworth.arsnouveau.common.items.ModItem"

export class $RitualTablet extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "ritual": $AbstractRitual
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $AbstractRitual$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualTablet$$Type = ($RitualTablet);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualTablet$$Original = $RitualTablet;}
declare module "com.hollingsworth.arsnouveau.common.block.TemporaryBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MirrorWeave} from "com.hollingsworth.arsnouveau.common.block.MirrorWeave"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ITickableBlock$$Interface} from "com.hollingsworth.arsnouveau.common.block.ITickableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $TemporaryBlock extends $MirrorWeave implements $EntityBlock$$Interface, $ITickableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LIGHT_LEVEL": $Property<(integer)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
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

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporaryBlock$$Type = ($TemporaryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporaryBlock$$Original = $TemporaryBlock;}
declare module "com.hollingsworth.arsnouveau.common.items.curios.SummoningFocus" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$SummonEvent$Death$$Type} from "com.hollingsworth.arsnouveau.api.event.SummonEvent$Death"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity} from "net.minecraft.world.item.Rarity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArsNouveauCurio} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"
import {$SummonEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.SummonEvent"
import {$ISpellModifierItem$$Interface} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AbstractCastMethod} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SpellCastEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.SpellCastEvent"

export class $SummoningFocus extends $ArsNouveauCurio implements $ISpellModifierItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static "sympatheticMethods": $List<($AbstractCastMethod)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "castSpell"(arg0: $SpellCastEvent$$Type): void
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public static "summonDeathEvent"(arg0: $SummonEvent$Death$$Type): void
public static "containsThis"(arg0: $Level$$Type, arg1: $Entity$$Type): boolean
public static "summonedEvent"(arg0: $SummonEvent$$Type): void
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummoningFocus$$Type = ($SummoningFocus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummoningFocus$$Original = $SummoningFocus;}
declare module "com.hollingsworth.arsnouveau.common.block.SummonBed" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ModBlock} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SummonBed extends $ModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "collisionShape": $VoxelShape
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

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isPowered"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonBed$$Type = ($SummonBed);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonBed$$Original = $SummonBed;}
declare module "com.hollingsworth.arsnouveau.common.items.MobJarItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Map} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $MobJarItem extends $BlockItem implements $GeoItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public static "fromItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $Entity
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobJarItem$$Type = ($MobJarItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobJarItem$$Original = $MobJarItem;}
declare module "com.hollingsworth.arsnouveau.common.mixin.PufferfishAccessor" {
import {$TargetingConditions} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"

export interface $PufferfishAccessor$$Interface {
set "deflateTimer"(value: integer)
get "deflateTimer"(): integer
get "inflateCounter"(): integer
set "inflateCounter"(value: integer)
}

export class $PufferfishAccessor implements $PufferfishAccessor$$Interface {
static "targetConditions"(): $TargetingConditions
 "setDeflateTimer"(arg0: integer): void
 "getDeflateTimer"(): integer
 "getInflateCounter"(): integer
 "setInflateCounter"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PufferfishAccessor$$Type = ($PufferfishAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PufferfishAccessor$$Original = $PufferfishAccessor;}
declare module "com.hollingsworth.arsnouveau.common.items.EnchantersSword" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$ICasterTool$$Interface} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnimatableInstanceCache} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$GeoItem$$Interface} from "software.bernie.geckolib.animatable.GeoItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$IManaDiscountEquipment$$Interface} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $EnchantersSword extends $SwordItem implements $ICasterTool$$Interface, $GeoItem$$Interface, $IManaDiscountEquipment$$Interface {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: integer, arg2: float)
constructor(arg0: $Tier$$Type, arg1: integer, arg2: float, arg3: $Item$Properties$$Type)

public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(never)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "sendSetMessage"(arg0: $Player$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(never)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "getBoneResetTime"(): double
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantersSword$$Type = ($EnchantersSword);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantersSword$$Original = $EnchantersSword;}
declare module "com.hollingsworth.arsnouveau.common.util.SpellPartConfigUtil$ComboLimits" {
import {$ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Set} from "java.util.Set"

export class $SpellPartConfigUtil$ComboLimits {
constructor(arg0: $ModConfigSpec$ConfigValue$$Type<($List$$Type<(StringJS)>)>)

public "contains"(arg0: $ResourceLocation$$Type): boolean
public "parseComboLimits"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPartConfigUtil$ComboLimits$$Type = ($SpellPartConfigUtil$ComboLimits);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellPartConfigUtil$ComboLimits$$Original = $SpellPartConfigUtil$ComboLimits;}
declare module "com.hollingsworth.arsnouveau.common.capability.SourceStorage" {
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ISourceCap$$Interface} from "com.hollingsworth.arsnouveau.api.source.ISourceCap"

export class $SourceStorage implements $ISourceCap$$Interface, $INBTSerializable$$Interface<($Tag)> {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "getSource"(): integer
public "setMaxSource"(arg0: integer): void
public "extractSource"(arg0: integer, arg1: boolean): integer
public "getSourceCapacity"(): integer
public "canProvideSource"(arg0: integer): boolean
public "getMaxExtract"(): integer
public "receiveSource"(arg0: integer, arg1: boolean): integer
public "getMaxReceive"(): integer
public "canAcceptSource"(arg0: integer): boolean
public "onContentsChanged"(): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "canReceive"(): boolean
public "canExtract"(): boolean
public "setSource"(arg0: integer): void
public "setMaxExtract"(arg0: integer): void
public "setMaxReceive"(arg0: integer): void
public "getMaxSource"(): integer
get "source"(): integer
set "maxSource"(value: integer)
get "sourceCapacity"(): integer
get "maxExtract"(): integer
get "maxReceive"(): integer
set "source"(value: integer)
set "maxExtract"(value: integer)
set "maxReceive"(value: integer)
get "maxSource"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceStorage$$Type = ($SourceStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SourceStorage$$Original = $SourceStorage;}
declare module "com.hollingsworth.arsnouveau.common.block.EnchantingApparatusBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TickableModBlock} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $EnchantingApparatusBlock extends $TickableModBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "NORTH_SHAPE": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "SOUTH_SHAPE": $VoxelShape
static readonly "WEST_SHAPE": $VoxelShape
static readonly "EAST_SHAPE": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "DOWN_SHAPE": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingApparatusBlock$$Type = ($EnchantingApparatusBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantingApparatusBlock$$Original = $EnchantingApparatusBlock;}
declare module "com.hollingsworth.arsnouveau.common.potions.GravityEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PlayerTickEvent$Post$$Type} from "net.neoforged.neoforge.event.tick.PlayerTickEvent$Post"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GravityEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "entityHurt"(arg0: $LivingDamageEvent$Pre$$Type): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public static "entityTick"(arg0: $PlayerTickEvent$Post$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravityEffect$$Type = ($GravityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravityEffect$$Original = $GravityEffect;}
declare module "com.hollingsworth.arsnouveau.common.mixin.BlockBehaviourAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccessor$$Interface {

(arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand, arg6: $BlockHitResult): $ItemInteractionResult$$Type
}

export class $BlockBehaviourAccessor implements $BlockBehaviourAccessor$$Interface {
 "callUseItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$$Type = ((arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand, arg6: $BlockHitResult) => $ItemInteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourAccessor$$Original = $BlockBehaviourAccessor;}
