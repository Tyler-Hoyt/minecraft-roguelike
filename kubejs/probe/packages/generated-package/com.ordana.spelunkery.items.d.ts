declare module "com.ordana.spelunkery.items.HammerAndChiselItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$ImmutableBiMap$Builder$$Type} from "com.google.common.collect.ImmutableBiMap$Builder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiMap} from "com.google.common.collect.BiMap"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HammerAndChiselItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "CHISELED_BLOCKS": $Supplier<($BiMap<($Block), ($Block)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "addOptional"(map: $ImmutableBiMap$Builder$$Type<($Block$$Type), ($Block$$Type)>, moddedId: StringJS, moddedId2: StringJS): void
public static "getChiseled"(state: $BlockState$$Type): $Optional<($BlockState)>
public "getUseDuration"(stack: $ItemStack$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onUseTick"(level: $Level$$Type, livingEntity: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseDuration: integer): void
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "isValidRepairItem"(stack: $ItemStack$$Type, repairCandidate: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerAndChiselItem$$Type = ($HammerAndChiselItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerAndChiselItem$$Original = $HammerAndChiselItem;}
declare module "com.ordana.spelunkery.items.CarvedNephriteItem" {
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

export class $CarvedNephriteItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $CarvedNephriteItem$$Type = ($CarvedNephriteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarvedNephriteItem$$Original = $CarvedNephriteItem;}
declare module "com.ordana.spelunkery.items.EchoForkItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $EchoForkItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "removeGlow"(player: $Player$$Type, stack: $ItemStack$$Type, level: $Level$$Type): void
public "tollFork"(player: $Player$$Type, stack: $ItemStack$$Type, level: $Level$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoForkItem$$Type = ($EchoForkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoForkItem$$Original = $EchoForkItem;}
declare module "com.ordana.spelunkery.items.WoodenRailBlockItem" {
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $WoodenRailBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "updatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
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
export type $WoodenRailBlockItem$$Type = ($WoodenRailBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodenRailBlockItem$$Original = $WoodenRailBlockItem;}
declare module "com.ordana.spelunkery.items.NephriteSiphonItem" {
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

export class $NephriteSiphonItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $NephriteSiphonItem$$Type = ($NephriteSiphonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NephriteSiphonItem$$Original = $NephriteSiphonItem;}
declare module "com.ordana.spelunkery.items.NephriteCharmItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $NephriteCharmItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "setStoredXP"(stack: $ItemStack$$Type, amount: integer): void
public "getStoredXP"(stack: $ItemStack$$Type): integer
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "addXP"(stack: $ItemStack$$Type, amount: integer): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NephriteCharmItem$$Type = ($NephriteCharmItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NephriteCharmItem$$Original = $NephriteCharmItem;}
declare module "com.ordana.spelunkery.items.SpringWaterBucketItem" {
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $SpringWaterBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(fluid: $Fluid$$Type, properties: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpringWaterBucketItem$$Type = ($SpringWaterBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpringWaterBucketItem$$Original = $SpringWaterBucketItem;}
declare module "com.ordana.spelunkery.items.MagneticCompassItem" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $MagneticCompassItem extends $Item {
static readonly "TAG_LODESTONE_POS": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "TAG_LODESTONE_DIMENSION": StringJS
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "TAG_LODESTONE_TRACKED": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "setTickCounter"(tick: integer): integer
public static "getMagnetitePos"(stack: $ItemStack$$Type): $GlobalPos
public static "isMagnetiteNearby"(stack: $ItemStack$$Type): boolean
public static "addMagnetiteTags"(lodestoneDimension: $ResourceKey$$Type<($Level)>, pos: $BlockPos$$Type, compoundTag: $CompoundTag$$Type): void
public static "getNorthPosition"(level: $Level$$Type): $GlobalPos
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "setPlayerX"(stack: $ItemStack$$Type, amount: integer): void
public "getPlayerX"(stack: $ItemStack$$Type): integer
public "getPlayerZ"(stack: $ItemStack$$Type): integer
public "setPlayerZ"(stack: $ItemStack$$Type, amount: integer): void
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "tickCounter"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagneticCompassItem$$Type = ($MagneticCompassItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagneticCompassItem$$Original = $MagneticCompassItem;}
declare module "com.ordana.spelunkery.items.SaltBucketItem" {
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $SaltBucketItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "getSaltToPlace"(stack: $ItemStack$$Type): integer
public static "getBlockEntityData"(stack: $ItemStack$$Type): $DataComponentMap
public "getBlock"(): $Block
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "getAmount"(stack: $ItemStack$$Type): integer
public "place"(context: $BlockPlaceContext$$Type): $InteractionResult
public static "updateCustomBlockEntityTag"(level: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type, stack: $ItemStack$$Type): boolean
public "updatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
public "setAmount"(stack: $ItemStack$$Type, amount: integer): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaltBucketItem$$Type = ($SaltBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SaltBucketItem$$Original = $SaltBucketItem;}
declare module "com.ordana.spelunkery.items.TrueCrownItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"

export class $TrueCrownItem extends $BlockItem implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueCrownItem$$Type = ($TrueCrownItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrueCrownItem$$Original = $TrueCrownItem;}
declare module "com.ordana.spelunkery.items.GlowstickItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $GlowstickItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(color: $DyeColor$$Type, block: $Block$$Type, properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getColor"(): $DyeColor
public "getGlowstick"(item: $Item$$Type): $Optional<($DyeColor)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowstickItem$$Type = ($GlowstickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlowstickItem$$Original = $GlowstickItem;}
declare module "com.ordana.spelunkery.items.DepthGaugeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $DepthGaugeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "setYLevel"(stack: $ItemStack$$Type, amount: integer): void
public "getYLevel"(stack: $ItemStack$$Type): integer
public "inventoryTick"(stack: $ItemStack$$Type, levelIn: $Level$$Type, entityIn: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepthGaugeItem$$Type = ($DepthGaugeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DepthGaugeItem$$Original = $DepthGaugeItem;}
declare module "com.ordana.spelunkery.items.PebbleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $PebbleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PebbleItem$$Type = ($PebbleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PebbleItem$$Original = $PebbleItem;}
declare module "com.ordana.spelunkery.items.DustBunItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $DustBunItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DustBunItem$$Type = ($DustBunItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DustBunItem$$Original = $DustBunItem;}
declare module "com.ordana.spelunkery.items.AmethystTuningForkItem" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IThirdPersonAnimationProvider$$Type, $IThirdPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$$Type, $IFirstPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $AmethystTuningForkItem extends $Item implements $IFirstPersonAnimationProvider$$Interface, $IThirdPersonAnimationProvider$$Interface {
static readonly "TAG_LODESTONE_POS": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "TAG_LODESTONE_DIMENSION": StringJS
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "TAG_LODESTONE_TRACKED": StringJS
static readonly "MAX_BAR_WIDTH": integer
static "tolling": boolean
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "animateItemFirstPerson"(entity: $Player$$Type, stack: $ItemStack$$Type, hand: $InteractionHand$$Type, arm: $HumanoidArm$$Type, poseStack: $PoseStack$$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "poseLeftArm"<T extends $LivingEntity>(itemStack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, humanoidArm: $HumanoidArm$$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(itemStack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, humanoidArm: $HumanoidArm$$Type): boolean
public "setTickCounter"(tick: integer): integer
public static "isAmethystNearby"(stack: $ItemStack$$Type): boolean
public static "distanceToAmethyst"(playerPos: $Vec3i$$Type, amethystPos: $BlockPos$$Type): double
public static "getAmethystPos"(stack: $ItemStack$$Type): $GlobalPos
public "getTollRange"(): integer
public "getModifierAngle"(entity: $Entity$$Type, l: long, blockPos: $BlockPos$$Type): float
public "getUseDuration"(stack: $ItemStack$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "setPlayerX"(stack: $ItemStack$$Type, amount: integer): void
public "getPlayerX"(stack: $ItemStack$$Type): integer
public "getPlayerZ"(stack: $ItemStack$$Type): integer
public "setPlayerZ"(stack: $ItemStack$$Type, amount: integer): void
public static "addAmethystTags"(lodestoneDimension: $ResourceKey$$Type<($Level)>, pos: $BlockPos$$Type, compoundTag: $ItemStack$$Type): void
public static "get"(target: $Item$$Type): $IFirstPersonAnimationProvider
public static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
public "isTwoHanded"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "tickCounter"(value: integer)
get "tollRange"(): integer
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmethystTuningForkItem$$Type = ($AmethystTuningForkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmethystTuningForkItem$$Original = $AmethystTuningForkItem;}
declare module "com.ordana.spelunkery.items.NephriteSpoutItem" {
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

export class $NephriteSpoutItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $NephriteSpoutItem$$Type = ($NephriteSpoutItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NephriteSpoutItem$$Original = $NephriteSpoutItem;}
declare module "com.ordana.spelunkery.items.PickOnAStickItem" {
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

export class $PickOnAStickItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickOnAStickItem$$Type = ($PickOnAStickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickOnAStickItem$$Original = $PickOnAStickItem;}
declare module "com.ordana.spelunkery.items.ChannelSluiceItem" {
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

export class $ChannelSluiceItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $ChannelSluiceItem$$Type = ($ChannelSluiceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelSluiceItem$$Original = $ChannelSluiceItem;}
declare module "com.ordana.spelunkery.items.HandheldCompactorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HandheldCompactorItem$CompressionMode} from "com.ordana.spelunkery.items.HandheldCompactorItem$CompressionMode"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ImmutableBiMap$Builder$$Type} from "com.google.common.collect.ImmutableBiMap$Builder"
import {$BiMap} from "com.google.common.collect.BiMap"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HandheldCompactorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "INGOT_COMPACTING": $Supplier<($BiMap<($Item), ($Item)>)>
static readonly "NUGGET_COMPACTING": $Supplier<($BiMap<($Item), ($Item)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getCompressedNugget"(stack: $ItemStack$$Type): $Optional<($ItemStack)>
public static "toggleCompactor"(player: $Player$$Type, stack: $ItemStack$$Type, level: $Level$$Type): void
public static "addOptional"(map: $ImmutableBiMap$Builder$$Type<($Item$$Type), ($Item$$Type)>, moddedId: StringJS, moddedId2: StringJS): void
public static "getCompressedIngot"(stack: $ItemStack$$Type): $Optional<($ItemStack)>
public static "getMode"(stack: $ItemStack$$Type): $HandheldCompactorItem$CompressionMode
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandheldCompactorItem$$Type = ($HandheldCompactorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandheldCompactorItem$$Original = $HandheldCompactorItem;}
declare module "com.ordana.spelunkery.items.SaltBlockItem" {
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

export class $SaltBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $SaltBlockItem$$Type = ($SaltBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SaltBlockItem$$Original = $SaltBlockItem;}
declare module "com.ordana.spelunkery.items.BunnyEarsItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BunnyEarsItem extends $BlockItem implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BunnyEarsItem$$Type = ($BunnyEarsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BunnyEarsItem$$Original = $BunnyEarsItem;}
declare module "com.ordana.spelunkery.items.EggplantItem" {
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

export class $EggplantItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggplantItem$$Type = ($EggplantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EggplantItem$$Original = $EggplantItem;}
declare module "com.ordana.spelunkery.items.MagnetItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagnetItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMagnetRange"(): integer
public static "toggleMagnet"(player: $Player$$Type, stack: $ItemStack$$Type, level: $Level$$Type): void
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "magnetRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetItem$$Type = ($MagnetItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagnetItem$$Original = $MagnetItem;}
declare module "com.ordana.spelunkery.items.MineomiteItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $MineomiteItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $MineomiteItem$$Type = ($MineomiteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineomiteItem$$Original = $MineomiteItem;}
declare module "com.ordana.spelunkery.items.RopeLadderBlockItem" {
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $RopeLadderBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "updatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
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
export type $RopeLadderBlockItem$$Type = ($RopeLadderBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RopeLadderBlockItem$$Original = $RopeLadderBlockItem;}
declare module "com.ordana.spelunkery.items.HandheldCompactorItem$CompressionMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $HandheldCompactorItem$CompressionMode extends $Enum<($HandheldCompactorItem$CompressionMode)> implements $StringRepresentable$$Interface {
static readonly "DISABLED": $HandheldCompactorItem$CompressionMode
static readonly "NUGGETS_TO_INGOTS": $HandheldCompactorItem$CompressionMode
static readonly "ALL": $HandheldCompactorItem$CompressionMode
static readonly "CODEC": $Codec<($HandheldCompactorItem$CompressionMode)>
static "VALUES": ($HandheldCompactorItem$CompressionMode)[]
static readonly "INGOTS_TO_BLOCKS": $HandheldCompactorItem$CompressionMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($HandheldCompactorItem$CompressionMode)>

public static "values"(): ($HandheldCompactorItem$CompressionMode)[]
public static "valueOf"(name: StringJS): $HandheldCompactorItem$CompressionMode
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
export type $HandheldCompactorItem$CompressionMode$$Type = (("disabled") | ("nuggets_to_ingots") | ("ingots_to_blocks") | ("all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HandheldCompactorItem$CompressionMode$$Original = $HandheldCompactorItem$CompressionMode;}
declare module "com.ordana.spelunkery.items.NephriteDiodeItem" {
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

export class $NephriteDiodeItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $NephriteDiodeItem$$Type = ($NephriteDiodeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NephriteDiodeItem$$Original = $NephriteDiodeItem;}
declare module "com.ordana.spelunkery.items.ChannelItem" {
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

export class $ChannelItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $ChannelItem$$Type = ($ChannelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChannelItem$$Original = $ChannelItem;}
declare module "com.ordana.spelunkery.items.CompressionBlastMinerItem" {
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

export class $CompressionBlastMinerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
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
export type $CompressionBlastMinerItem$$Type = ($CompressionBlastMinerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompressionBlastMinerItem$$Original = $CompressionBlastMinerItem;}
declare module "com.ordana.spelunkery.items.ParachuteItem" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IFirstPersonAnimationProvider, $IFirstPersonAnimationProvider$$Type, $IFirstPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IThirdPersonAnimationProvider$$Type, $IThirdPersonAnimationProvider$$Interface} from "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ParachuteItem extends $Item implements $IFirstPersonAnimationProvider$$Interface, $IThirdPersonAnimationProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "animateItemFirstPerson"(entity: $Player$$Type, stack: $ItemStack$$Type, hand: $InteractionHand$$Type, arm: $HumanoidArm$$Type, matrixStack: $PoseStack$$Type, partialTicks: float, pitch: float, attackAnim: float, handHeight: float): void
public "poseLeftArm"<T extends $LivingEntity>(itemStack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, humanoidArm: $HumanoidArm$$Type): boolean
public "poseRightArm"<T extends $LivingEntity>(itemStack: $ItemStack$$Type, model: $HumanoidModel$$Type<(T)>, entity: T, humanoidArm: $HumanoidArm$$Type): boolean
public "setTickCounter"(tick: integer): void
public "releaseUsing"(stack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, timeCharged: integer): void
public "getUseDuration"(stack: $ItemStack$$Type): integer
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public static "getActive"(stack: $ItemStack$$Type): boolean
public "getUsed"(stack: $ItemStack$$Type): boolean
public "onUseTick"(level: $Level$$Type, livingEntity: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseDuration: integer): void
public "appendHoverText"(stack: $ItemStack$$Type, level: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, context: $TooltipFlag$$Type): void
public "setActive"(stack: $ItemStack$$Type, active: boolean): void
public "setUsed"(stack: $ItemStack$$Type, used: boolean): void
public "inventoryTick"(stack: $ItemStack$$Type, levelIn: $Level$$Type, entityIn: $Entity$$Type, itemSlot: integer, isSelected: boolean): void
public "isValidRepairItem"(stack: $ItemStack$$Type, repairCandidate: $ItemStack$$Type): boolean
public static "getParachute"(entity: $LivingEntity$$Type): $ItemStack
public static "get"(target: $Item$$Type): $IFirstPersonAnimationProvider
public static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
public static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
public "isTwoHanded"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "tickCounter"(value: integer)
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParachuteItem$$Type = ($ParachuteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParachuteItem$$Original = $ParachuteItem;}
