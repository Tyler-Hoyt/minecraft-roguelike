declare module "net.neoforged.neoforge.common.extensions.IHolderLookupProviderExtension" {
import {$Optional} from "java.util.Optional"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder} from "net.minecraft.core.Holder"

export interface $IHolderLookupProviderExtension$$Interface {
}

export class $IHolderLookupProviderExtension implements $IHolderLookupProviderExtension$$Interface {
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderLookupProviderExtension$$Type = ($IHolderLookupProviderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHolderLookupProviderExtension$$Original = $IHolderLookupProviderExtension;}
declare module "net.neoforged.neoforge.common.world.chunk.TicketController" {
import {$LoadingValidationCallback, $LoadingValidationCallback$$Type} from "net.neoforged.neoforge.common.world.chunk.LoadingValidationCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID$$Type} from "java.util.UUID"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"

export class $TicketController extends $Record {
constructor(id: $ResourceLocation$$Type, callback: $LoadingValidationCallback$$Type)
constructor(arg0: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public "callback"(): $LoadingValidationCallback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketController$$Type = ({"callback"?: $LoadingValidationCallback$$Type, "id"?: $ResourceLocation$$Type}) | ([callback?: $LoadingValidationCallback$$Type, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TicketController$$Original = $TicketController;}
declare module "net.neoforged.neoforge.common.world.chunk.RegisterTicketControllersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$TicketController$$Type} from "net.neoforged.neoforge.common.world.chunk.TicketController"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterTicketControllersEvent extends $Event implements $IModBusEvent$$Interface {
public "register"(arg0: $TicketController$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTicketControllersEvent$$Type = ($RegisterTicketControllersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterTicketControllersEvent$$Original = $RegisterTicketControllersEvent;}
declare module "net.neoforged.neoforge.common.SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {
public "name"(): StringJS
public static "get"(arg0: StringJS): $SoundAction
public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundAction$$Type = ($SoundAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundAction$$Original = $SoundAction;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$RestartType" {
import {$Enum} from "java.lang.Enum"

export class $ModConfigSpec$RestartType extends $Enum<($ModConfigSpec$RestartType)> {
static readonly "GAME": $ModConfigSpec$RestartType
static readonly "NONE": $ModConfigSpec$RestartType
static readonly "WORLD": $ModConfigSpec$RestartType

public static "values"(): ($ModConfigSpec$RestartType)[]
public static "valueOf"(arg0: StringJS): $ModConfigSpec$RestartType
public "with"(arg0: $ModConfigSpec$RestartType$$Type): $ModConfigSpec$RestartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$RestartType$$Type = (("none") | ("world") | ("game"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$RestartType$$Original = $ModConfigSpec$RestartType;}
declare module "net.neoforged.neoforge.common.extensions.ILivingEntityExtension" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IEntityExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IEntityExtension"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MobCategory} from "net.minecraft.world.entity.MobCategory"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $ILivingEntityExtension$$Interface extends $IEntityExtension$$Interface {
get "maxHeightFluidType"(): $FluidType
get "persistentData"(): $CompoundTag
get "multipartEntity"(): boolean
get "eyeInFluidType"(): $FluidType
get "addedToLevel"(): boolean
get "parts"(): ($PartEntity<(never)>)[]
get "inFluidType"(): boolean
}

export class $ILivingEntityExtension implements $ILivingEntityExtension$$Interface {
 "self"(): $LivingEntity
 "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
 "jumpInFluid"(arg0: $FluidType$$Type): void
 "onDamageTaken"(arg0: $DamageContainer$$Type): void
 "sinkInFluid"(arg0: $FluidType$$Type): void
 "moveInFluid"(arg0: $FluidState$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "getMaxHeightFluidType"(): $FluidType
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "canRiderInteract"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "onAddedToLevel"(): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
 "getPersistentData"(): $CompoundTag
 "onRemovedFromLevel"(): void
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "shouldRiderSit"(): boolean
 "canStartSwimming"(): boolean
 "isMultipartEntity"(): boolean
 "getEyeInFluidType"(): $FluidType
 "isAddedToLevel"(): boolean
 "revive"(): void
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "getParts"(): ($PartEntity<(never)>)[]
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "isInFluidType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityExtension$$Type = ($ILivingEntityExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILivingEntityExtension$$Original = $ILivingEntityExtension;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue" {
import {$ModConfigSpec$ValueSpec} from "net.neoforged.neoforge.common.ModConfigSpec$ValueSpec"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"
import {$Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$ModConfigSpec$Builder} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ModConfigSpec$ConfigValue<T> implements $Supplier$$Interface<(T)> {
public "get"(): T
public "next"(): $ModConfigSpec$Builder
public "getDefault"(): T
public "set"(arg0: T): void
public "save"(): void
public "getPath"(): $List<(StringJS)>
public "clearCache"(): void
public "getSpec"(): $ModConfigSpec$ValueSpec
public "getRaw"(): T
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(StringJS)>, arg2: $Supplier$$Type<(T)>): T
get "default"(): T
get "path"(): $List<(StringJS)>
get "spec"(): $ModConfigSpec$ValueSpec
get "raw"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$ConfigValue$$Type<T> = ($ModConfigSpec$ConfigValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$ConfigValue$$Original<T> = $ModConfigSpec$ConfigValue<(T)>;}
declare module "net.neoforged.neoforge.common.crafting.SizedIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SizedIngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.SizedIngredientKJS"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $SizedIngredient implements $SizedIngredientKJS$$Interface {
static readonly "NESTED_CODEC": $Codec<($SizedIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedIngredient)>
static readonly "FLAT_CODEC": $Codec<($SizedIngredient)>

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemLike$$Type, arg1: integer): $SizedIngredient
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $SizedIngredient
public "count"(): integer
public "ingredient"(): $Ingredient
public "getItems"(): ($ItemStack)[]
public "matches"(cx: $RecipeMatchContext$$Type, item: $ItemStack$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $Ingredient$$Type, exact: boolean): boolean
public "kjs$self"(): $SizedIngredient
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "kjs$asIngredient"(): $Ingredient
public "kjs$toFlatJson"(): $JsonElement
public "kjs$toNestedJson"(): $JsonElement
public "matches"(cx: $RecipeMatchContext$$Type, itemLike: $ItemLike$$Type, exact: boolean): boolean
public "matchesAny"(cx: $RecipeMatchContext$$Type, itemLikes: $Iterable$$Type<($ItemLike$$Type)>, exact: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "items"(): ($ItemStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedIngredient$$Type = ($ItemStack$$Type) | ($Ingredient$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizedIngredient$$Original = $SizedIngredient;}
declare module "net.neoforged.neoforge.common.extensions.IHolderExtension" {
import {$IWithData$$Interface} from "net.neoforged.neoforge.registries.datamaps.IWithData"
import {$DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$HolderLookup$RegistryLookup} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Holder} from "net.minecraft.core.Holder"

export interface $IHolderExtension$$Interface<T> extends $IWithData$$Interface<(T)> {
get "key"(): $ResourceKey<(T)>
get "delegate"(): $Holder<(T)>
}

export class $IHolderExtension<T> implements $IHolderExtension$$Interface {
 "getKey"(): $ResourceKey<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getDelegate"(): $Holder<(T)>
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderExtension$$Type<T> = ($IHolderExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHolderExtension$$Original<T> = $IHolderExtension<(T)>;}
declare module "net.neoforged.neoforge.common.extensions.IDispensibleContainerItemExtension" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IDispensibleContainerItemExtension$$Interface {
}

export class $IDispensibleContainerItemExtension implements $IDispensibleContainerItemExtension$$Interface {
 "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDispensibleContainerItemExtension$$Type = ($IDispensibleContainerItemExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDispensibleContainerItemExtension$$Original = $IDispensibleContainerItemExtension;}
declare module "net.neoforged.neoforge.common.extensions.IPackResourcesExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPackResourcesExtension$$Interface {
get "hidden"(): boolean
}

export class $IPackResourcesExtension implements $IPackResourcesExtension$$Interface {
 "isHidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPackResourcesExtension$$Type = ($IPackResourcesExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPackResourcesExtension$$Original = $IPackResourcesExtension;}
declare module "net.neoforged.neoforge.common.extensions.IFriendlyByteBufExtension" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamEncoder$$Type} from "net.minecraft.network.codec.StreamEncoder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$TriConsumer$$Type} from "org.apache.commons.lang3.function.TriConsumer"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IntFunction$$Type} from "java.util.function.IntFunction"

export interface $IFriendlyByteBufExtension$$Interface {
}

export class $IFriendlyByteBufExtension implements $IFriendlyByteBufExtension$$Interface {
 "writeByte"(arg0: byte): $FriendlyByteBuf
 "writeObjectCollection"<T>(arg0: $Collection$$Type<(T)>, arg1: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>): void
 "readArray"<T>(arg0: $IntFunction$$Type<((T)[])>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): (T)[]
 "writeArray"<T>(arg0: (T)[], arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): $FriendlyByteBuf
 "writeMap"<K, V>(arg0: $Map$$Type<(K), (V)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (K)>, arg2: $TriConsumer$$Type<($FriendlyByteBuf), (K), (V)>): void
 "readMap"<K, V>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg1: $BiFunction$$Type<($FriendlyByteBuf), (K), (V)>): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFriendlyByteBufExtension$$Type = ($IFriendlyByteBufExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFriendlyByteBufExtension$$Original = $IFriendlyByteBufExtension;}
declare module "net.neoforged.neoforge.common.extensions.IBlockExtension" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BubbleColumnDirection} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export interface $IBlockExtension$$Interface {
}

export class $IBlockExtension implements $IBlockExtension$$Interface {
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(never)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "ignitedByLava"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockExtension$$Type = ($IBlockExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockExtension$$Original = $IBlockExtension;}
declare module "net.neoforged.neoforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import {$StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$StructureSpawnOverride, $StructureSpawnOverride$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {
public static "copyOf"(arg0: $StructureSpawnOverride$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "build"(): $StructureSpawnOverride
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "removeSpawns"(arg0: $Predicate$$Type<($MobSpawnSettings$SpawnerData)>): void
public "addSpawn"(arg0: $MobSpawnSettings$SpawnerData$$Type): void
public "setBoundingBox"(arg0: $StructureSpawnOverride$BoundingBoxType$$Type): void
public "removeSpawn"(arg0: $MobSpawnSettings$SpawnerData$$Type): void
public "getSpawns"(): $List<($MobSpawnSettings$SpawnerData)>
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$$Type)
get "spawns"(): $List<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$$Type = ($StructureSettingsBuilder$StructureSpawnOverrideBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$$Original = $StructureSettingsBuilder$StructureSpawnOverrideBuilder;}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder" {
import {$MobSpawnSettingsBuilder} from "net.neoforged.neoforge.common.world.MobSpawnSettingsBuilder"
import {$ClimateSettingsBuilder} from "net.neoforged.neoforge.common.world.ClimateSettingsBuilder"
import {$BiomeSpecialEffectsBuilder} from "net.neoforged.neoforge.common.world.BiomeSpecialEffectsBuilder"
import {$BiomeGenerationSettingsBuilder} from "net.neoforged.neoforge.common.world.BiomeGenerationSettingsBuilder"
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {
public static "copyOf"(arg0: $ModifiableBiomeInfo$BiomeInfo$$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "build"(): $ModifiableBiomeInfo$BiomeInfo
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
public "getClimateSettings"(): $ClimateSettingsBuilder
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$$Type = ($ModifiableBiomeInfo$BiomeInfo$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$$Original = $ModifiableBiomeInfo$BiomeInfo$Builder;}
declare module "net.neoforged.neoforge.common.crafting.IngredientType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ICustomIngredient} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $IngredientType<T extends $ICustomIngredient> extends $Record {
constructor(arg0: $MapCodec$$Type<(T)>)
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeIngredientSerializer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeIngredientSerializerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientType$$Type<T> = (Special.NeoforgeIngredientSerializer) | ({"codec"?: $MapCodec$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>}) | ([codec?: $MapCodec$$Type<(T)>, streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IngredientType$$Original<T> = $IngredientType<(T)>;}
declare module "net.neoforged.neoforge.common.extensions.IBlockAndTintGetterExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockAndTintGetterExtension$$Interface {
}

export class $IBlockAndTintGetterExtension implements $IBlockAndTintGetterExtension$$Interface {
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockAndTintGetterExtension$$Type = ($IBlockAndTintGetterExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockAndTintGetterExtension$$Original = $IBlockAndTintGetterExtension;}
declare module "net.neoforged.neoforge.common.world.BiomeGenerationSettingsBuilder" {
import {$GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$GenerationStep$Carving$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import {$PlacedFeature} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$BiomeGenerationSettings$PlainBuilder} from "net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder"
import {$List} from "java.util.List"
import {$BiomeGenerationSettings$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import {$ConfiguredWorldCarver} from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import {$Holder} from "net.minecraft.core.Holder"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
readonly "features": $List<($List<($Holder<($PlacedFeature)>)>)>

constructor(arg0: $BiomeGenerationSettings$$Type)

public "getFeatures"(arg0: $GenerationStep$Decoration$$Type): $List<($Holder<($PlacedFeature)>)>
public "getCarvers"(arg0: $GenerationStep$Carving$$Type): $List<($Holder<($ConfiguredWorldCarver<(never)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGenerationSettingsBuilder$$Type = ($BiomeGenerationSettingsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeGenerationSettingsBuilder$$Original = $BiomeGenerationSettingsBuilder;}
declare module "net.neoforged.neoforge.common.world.ClimateSettingsBuilder" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type} from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {
public static "copyOf"(arg0: $Biome$ClimateSettings$$Type): $ClimateSettingsBuilder
public static "create"(arg0: boolean, arg1: float, arg2: $Biome$TemperatureModifier$$Type, arg3: float): $ClimateSettingsBuilder
public "build"(): $Biome$ClimateSettings
public "hasPrecipitation"(): boolean
public "getTemperature"(): float
public "setDownfall"(arg0: float): void
public "setTemperature"(arg0: float): void
public "getDownfall"(): float
public "setHasPrecipitation"(arg0: boolean): void
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
get "temperature"(): float
set "downfall"(value: float)
set "temperature"(value: float)
get "downfall"(): float
get "temperatureModifier"(): $Biome$TemperatureModifier
set "temperatureModifier"(value: $Biome$TemperatureModifier$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsBuilder$$Type = ($ClimateSettingsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClimateSettingsBuilder$$Original = $ClimateSettingsBuilder;}
declare module "net.neoforged.neoforge.common.world.BiomeModifiers$AddSpawnsBiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $BiomeModifiers$AddSpawnsBiomeModifier extends $Record implements $BiomeModifier$$Interface {
constructor(biomes: $HolderSet$$Type<($Biome)>, spawners: $List$$Type<($MobSpawnSettings$SpawnerData$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "singleSpawn"(arg0: $HolderSet$$Type<($Biome)>, arg1: $MobSpawnSettings$SpawnerData$$Type): $BiomeModifiers$AddSpawnsBiomeModifier
public "biomes"(): $HolderSet<($Biome)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public "spawners"(): $List<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifiers$AddSpawnsBiomeModifier$$Type = ({"spawners"?: $List$$Type<($MobSpawnSettings$SpawnerData$$Type)>, "biomes"?: $HolderSet$$Type<($Biome)>}) | ([spawners?: $List$$Type<($MobSpawnSettings$SpawnerData$$Type)>, biomes?: $HolderSet$$Type<($Biome)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeModifiers$AddSpawnsBiomeModifier$$Original = $BiomeModifiers$AddSpawnsBiomeModifier;}
declare module "net.neoforged.neoforge.common.conditions.ICondition$IContext" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ICondition$IContext$$Interface {

(arg0: $ResourceKey<($Registry<(T)>)>): $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>
}

export class $ICondition$IContext implements $ICondition$IContext$$Interface {
static readonly "TAGS_INVALID": $ICondition$IContext
static readonly "EMPTY": $ICondition$IContext

 "getTag"<T>(arg0: $TagKey$$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$IContext$$Type = ((arg0: $ResourceKey<($Registry<(T)>)>) => $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICondition$IContext$$Original = $ICondition$IContext;}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo$Builder" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo"
import {$StructureSettingsBuilder} from "net.neoforged.neoforge.common.world.StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {
public static "copyOf"(arg0: $ModifiableStructureInfo$StructureInfo$$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "build"(): $ModifiableStructureInfo$StructureInfo
public "getStructureSettings"(): $StructureSettingsBuilder
get "structureSettings"(): $StructureSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$$Type = ($ModifiableStructureInfo$StructureInfo$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$$Original = $ModifiableStructureInfo$StructureInfo$Builder;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$Builder" {
import {$EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$ModConfigSpec$DoubleValue} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$BooleanValue} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Range$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Range"
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ModConfigSpec$ValueSpec$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ValueSpec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$ModConfigSpec$EnumValue} from "net.neoforged.neoforge.common.ModConfigSpec$EnumValue"
import {$Class$$Type} from "java.lang.Class"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$ModConfigSpec$LongValue} from "net.neoforged.neoforge.common.ModConfigSpec$LongValue"
import {$ModConfigSpec$IntValue} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $ModConfigSpec$Builder {
constructor()

public "comment"(arg0: StringJS): $ModConfigSpec$Builder
public "comment"(...arg0: (StringJS)[]): $ModConfigSpec$Builder
public "build"(): $ModConfigSpec
public "push"(arg0: $List$$Type<(StringJS)>): $ModConfigSpec$Builder
public "push"(arg0: StringJS): $ModConfigSpec$Builder
public "pop"(arg0: integer): $ModConfigSpec$Builder
public "pop"(): $ModConfigSpec$Builder
public "configure"<T>(arg0: $Function$$Type<($ModConfigSpec$Builder), (T)>): $Pair<(T), ($ModConfigSpec)>
public "worldRestart"(): $ModConfigSpec$Builder
public "gameRestart"(): $ModConfigSpec$Builder
public "translation"(arg0: StringJS): $ModConfigSpec$Builder
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $EnumGetMethod$$Type, ...arg3: (V)[]): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $Collection$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, ...arg2: (V)[]): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $EnumGetMethod$$Type, arg3: $Collection$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $Collection$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $EnumGetMethod$$Type): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, ...arg2: (V)[]): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $EnumGetMethod$$Type, ...arg3: (V)[]): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $EnumGetMethod$$Type, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: $Supplier$$Type<(V)>, arg2: $Predicate$$Type<(any)>, arg3: $Class$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: $Supplier$$Type<(V)>, arg2: $EnumGetMethod$$Type, arg3: $Predicate$$Type<(any)>, arg4: $Class$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(V)>, arg2: $Predicate$$Type<(any)>, arg3: $Class$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(V)>, arg2: $EnumGetMethod$$Type, arg3: $Predicate$$Type<(any)>, arg4: $Class$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $EnumGetMethod$$Type, arg3: $Collection$$Type<(V)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $EnumGetMethod$$Type, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V, arg2: $EnumGetMethod$$Type): $ModConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(object)>>(arg0: StringJS, arg1: V): $ModConfigSpec$EnumValue<(V)>
public "define"<T>(arg0: $List$$Type<(StringJS)>, arg1: $ModConfigSpec$ValueSpec$$Type, arg2: $Supplier$$Type<(T)>): $ModConfigSpec$ConfigValue<(T)>
public "define"(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(boolean)>): $ModConfigSpec$BooleanValue
public "define"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<(any)>, arg3: $Class$$Type<(never)>): $ModConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<(T)>
public "define"(arg0: StringJS, arg1: $Supplier$$Type<(boolean)>): $ModConfigSpec$BooleanValue
public "define"(arg0: $List$$Type<(StringJS)>, arg1: boolean): $ModConfigSpec$BooleanValue
public "define"(arg0: StringJS, arg1: boolean): $ModConfigSpec$BooleanValue
public "define"<T>(arg0: StringJS, arg1: T): $ModConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): $ModConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: StringJS, arg1: T, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<(T)>
public "defineList"<T>(arg0: StringJS, arg1: $List$$Type<(T)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineList"<T>(arg0: StringJS, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineList"<T>(arg0: StringJS, arg1: $List$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>, arg4: $ModConfigSpec$Range$$Type<(integer)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineList"<T>(arg0: StringJS, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $List$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $List$$Type<(T)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineInRange"<V extends $Comparable<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(V)>, arg2: V, arg3: V, arg4: $Class$$Type<(V)>): $ModConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: StringJS, arg1: double, arg2: double, arg3: double): $ModConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: double, arg2: double, arg3: double): $ModConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(long)>, arg2: long, arg3: long): $ModConfigSpec$LongValue
public "defineInRange"(arg0: StringJS, arg1: $Supplier$$Type<(long)>, arg2: long, arg3: long): $ModConfigSpec$LongValue
public "defineInRange"<V extends $Comparable<(object)>>(arg0: StringJS, arg1: V, arg2: V, arg3: V, arg4: $Class$$Type<(V)>): $ModConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(object)>>(arg0: $List$$Type<(StringJS)>, arg1: V, arg2: V, arg3: V, arg4: $Class$$Type<(V)>): $ModConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(object)>>(arg0: StringJS, arg1: $Supplier$$Type<(V)>, arg2: V, arg3: V, arg4: $Class$$Type<(V)>): $ModConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(integer)>, arg2: integer, arg3: integer): $ModConfigSpec$IntValue
public "defineInRange"(arg0: StringJS, arg1: $Supplier$$Type<(integer)>, arg2: integer, arg3: integer): $ModConfigSpec$IntValue
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: integer, arg2: integer, arg3: integer): $ModConfigSpec$IntValue
public "defineInRange"(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer): $ModConfigSpec$IntValue
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(double)>, arg2: double, arg3: double): $ModConfigSpec$DoubleValue
public "defineInRange"(arg0: StringJS, arg1: long, arg2: long, arg3: long): $ModConfigSpec$LongValue
public "defineInRange"(arg0: $List$$Type<(StringJS)>, arg1: long, arg2: long, arg3: long): $ModConfigSpec$LongValue
public "defineInRange"(arg0: StringJS, arg1: $Supplier$$Type<(double)>, arg2: double, arg3: double): $ModConfigSpec$DoubleValue
public "defineInList"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>, arg2: $Collection$$Type<(T)>): $ModConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: StringJS, arg1: T, arg2: $Collection$$Type<(T)>): $ModConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $Collection$$Type<(T)>): $ModConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>, arg2: $Collection$$Type<(T)>): $ModConfigSpec$ConfigValue<(T)>
public "defineListAllowEmpty"<T>(arg0: StringJS, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineListAllowEmpty"<T>(arg0: $List$$Type<(StringJS)>, arg1: $List$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineListAllowEmpty"<T>(arg0: $List$$Type<(StringJS)>, arg1: $List$$Type<(T)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineListAllowEmpty"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineListAllowEmpty"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineListAllowEmpty"<T>(arg0: StringJS, arg1: $List$$Type<(T)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
public "defineListAllowEmpty"<T>(arg0: StringJS, arg1: $List$$Type<(T)>, arg2: $Supplier$$Type<(T)>, arg3: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
/**
 * 
 * @deprecated
 */
public "defineListAllowEmpty"<T>(arg0: StringJS, arg1: $Supplier$$Type<($List$$Type<(T)>)>, arg2: $Predicate$$Type<(any)>): $ModConfigSpec$ConfigValue<($List<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$Builder$$Type = ($ModConfigSpec$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$Builder$$Original = $ModConfigSpec$Builder;}
declare module "net.neoforged.neoforge.common.enums.BubbleColumnDirection" {
import {$Enum} from "java.lang.Enum"

export class $BubbleColumnDirection extends $Enum<($BubbleColumnDirection)> {
static readonly "DOWNWARD": $BubbleColumnDirection
static readonly "UPWARD": $BubbleColumnDirection
static readonly "NONE": $BubbleColumnDirection

public static "values"(): ($BubbleColumnDirection)[]
public static "valueOf"(arg0: StringJS): $BubbleColumnDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleColumnDirection$$Type = (("upward") | ("downward") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BubbleColumnDirection$$Original = $BubbleColumnDirection;}
declare module "net.neoforged.neoforge.common.world.chunk.TicketSet" {
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$Record} from "java.lang.Record"

export class $TicketSet extends $Record {
constructor(nonTicking: $LongSet$$Type, ticking: $LongSet$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "ticking"(): $LongSet
public "nonTicking"(): $LongSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketSet$$Type = ({"ticking"?: $LongSet$$Type, "nonTicking"?: $LongSet$$Type}) | ([ticking?: $LongSet$$Type, nonTicking?: $LongSet$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TicketSet$$Original = $TicketSet;}
declare module "net.neoforged.neoforge.common.extensions.IAbstractMinecartExtension" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IAbstractMinecartExtension$$Interface {
get "poweredCart"(): boolean
get "slopeAdjustment"(): double
get "comparatorLevel"(): integer
get "maxCartSpeedOnRail"(): float
get "currentRailPosition"(): $BlockPos
set "maxSpeedAirVertical"(value: float)
get "maxSpeedWithRail"(): double
get "maxSpeedAirLateral"(): float
get "maxSpeedAirVertical"(): float
set "maxSpeedAirLateral"(value: float)
set "currentCartSpeedCapOnRail"(value: float)
get "currentCartSpeedCapOnRail"(): float
get "dragAir"(): double
set "dragAir"(value: double)
}

export class $IAbstractMinecartExtension implements $IAbstractMinecartExtension$$Interface {
static readonly "DEFAULT_AIR_DRAG": double
static readonly "DEFAULT_MAX_SPEED_AIR_VERTICAL": float
static readonly "DEFAULT_MAX_SPEED_AIR_LATERAL": float

 "setCanUseRail"(arg0: boolean): void
 "moveMinecartOnRail"(arg0: $BlockPos$$Type): void
 "isPoweredCart"(): boolean
 "getSlopeAdjustment"(): double
 "canBeRidden"(): boolean
 "getComparatorLevel"(): integer
 "getMaxCartSpeedOnRail"(): float
 "getCurrentRailPosition"(): $BlockPos
 "setMaxSpeedAirVertical"(arg0: float): void
 "getMaxSpeedWithRail"(): double
 "getMaxSpeedAirLateral"(): float
 "getMaxSpeedAirVertical"(): float
 "shouldDoRailFunctions"(): boolean
 "setMaxSpeedAirLateral"(arg0: float): void
 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "getCurrentCartSpeedCapOnRail"(): float
 "getDragAir"(): double
 "canUseRail"(): boolean
 "setDragAir"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbstractMinecartExtension$$Type = ($IAbstractMinecartExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAbstractMinecartExtension$$Original = $IAbstractMinecartExtension;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue" {
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$DoubleSupplier$$Interface} from "java.util.function.DoubleSupplier"
import {$List$$Type} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Config$$Type} from "com.electronwill.nightconfig.core.Config"

export class $ModConfigSpec$DoubleValue extends $ModConfigSpec$ConfigValue<(double)> implements $DoubleSupplier$$Interface {
public "getAsDouble"(): double
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(StringJS)>, arg2: $Supplier$$Type<(double)>): double
get "asDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$DoubleValue$$Type = ($ModConfigSpec$DoubleValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$DoubleValue$$Original = $ModConfigSpec$DoubleValue;}
declare module "net.neoforged.neoforge.common.damagesource.DamageContainer" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingShieldBlockEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingShieldBlockEvent"
import {$DamageContainer$Reduction$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction"
import {$IReductionFunction$$Type} from "net.neoforged.neoforge.common.damagesource.IReductionFunction"

export class $DamageContainer {
constructor(arg0: $DamageSource$$Type, arg1: float)

public "getSource"(): $DamageSource
public "getNewDamage"(): float
public "setBlockedDamage"(arg0: $LivingShieldBlockEvent$$Type): void
public "setNewDamage"(arg0: float): void
public "setReduction"(arg0: $DamageContainer$Reduction$$Type, arg1: float): void
public "getBlockedDamage"(): float
public "getReduction"(arg0: $DamageContainer$Reduction$$Type): float
public "getPostAttackInvulnerabilityTicks"(): integer
public "getOriginalDamage"(): float
public "getShieldDamage"(): float
public "addModifier"(arg0: $DamageContainer$Reduction$$Type, arg1: $IReductionFunction$$Type): void
public "setPostAttackInvulnerabilityTicks"(arg0: integer): void
get "source"(): $DamageSource
get "newDamage"(): float
set "blockedDamage"(value: $LivingShieldBlockEvent$$Type)
set "newDamage"(value: float)
get "blockedDamage"(): float
get "postAttackInvulnerabilityTicks"(): integer
get "originalDamage"(): float
get "shieldDamage"(): float
set "postAttackInvulnerabilityTicks"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageContainer$$Type = ($DamageContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageContainer$$Original = $DamageContainer;}
declare module "net.neoforged.neoforge.common.extensions.IBlockStateExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BubbleColumnDirection} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $IBlockStateExtension$$Interface {
get "empty"(): boolean
get "stickyBlock"(): boolean
get "slimeBlock"(): boolean
get "bubbleColumnDirection"(): $BubbleColumnDirection
}

export class $IBlockStateExtension implements $IBlockStateExtension$$Interface {
 "isEmpty"(): boolean
 "rotate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): $BlockState
 "collisionExtendsVertically"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "getCloneItemStack"(arg0: $HitResult$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): $ItemStack
 "setBedOccupied"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: boolean): void
 "getBedDirection"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): $Direction
 "addLandingEffects"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: integer): boolean
 "getSoundType"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): $SoundType
 "isScaffolding"(arg0: $LivingEntity$$Type): boolean
 "shouldHideAdjacentFluidFace"(arg0: $Direction$$Type, arg1: $FluidState$$Type): boolean
 "isLadder"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $LevelReader$$Type, arg1: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $TreeConfiguration$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type): boolean
 "getExpDrop"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockEntity$$Type, arg3: $Entity$$Type, arg4: $ItemStack$$Type): integer
 "isFertile"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "addRunningEffects"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "isBed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "isFireSource"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "onCaughtFire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $LivingEntity$$Type): void
 "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
 "isPortalFrame"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
 "getRespawnPosition"(arg0: $EntityType$$Type<(never)>, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "canHarvestBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type): $PathType
 "ignitedByLava"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "isStickyBlock"(): boolean
 "isSlimeBlock"(): boolean
 "isConduitFrame"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): boolean
 "onBlockExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
 "canBeHydrated"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockPos$$Type): boolean
 "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
 "shouldCheckWeakPower"(arg0: $SignalGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "getLightEmission"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): integer
 "getWeakChanges"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): boolean
 "onNeighborChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "getToolModifiedState"(arg0: $UseOnContext$$Type, arg1: $ItemAbility$$Type, arg2: boolean): $BlockState
 "supportsExternalFaceHiding"(): boolean
 "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
 "getStateAtViewpoint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Vec3$$Type): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
 "canDropFromExplosion"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
 "getBubbleColumnDirection"(): $BubbleColumnDirection
 "getEnchantPowerBonus"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): float
 "onDestroyedByPushReaction"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $FluidState$$Type): void
 "onDestroyedByPlayer"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: boolean, arg4: $FluidState$$Type): boolean
 "hasDynamicLightEmission"(): boolean
 "canRedstoneConnectTo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateExtension$$Type = ($IBlockStateExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockStateExtension$$Original = $IBlockStateExtension;}
declare module "net.neoforged.neoforge.common.ModConfigSpec" {
import {$ConfigSpec$CorrectionListener$$Type} from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener"
import {$ModConfig$$Type} from "net.neoforged.fml.config.ModConfig"
import {$List$$Type} from "java.util.List"
import {$ModConfigSpec$RestartType$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$RestartType"
import {$UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$IConfigSpec$ILoadedConfig$$Type} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$UnmodifiableConfig} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$IConfigSpec$$Interface} from "net.neoforged.fml.config.IConfigSpec"
import {$CommentedConfig$$Type} from "com.electronwill.nightconfig.core.CommentedConfig"

export class $ModConfigSpec implements $IConfigSpec$$Interface {
public "isEmpty"(): boolean
public "save"(): void
public "isLoaded"(): boolean
public "getLevelComment"(arg0: $List$$Type<(StringJS)>): StringJS
public "afterReload"(): void
public "getSpec"(): $UnmodifiableConfig
public "getValues"(): $UnmodifiableConfig
public "correct"(arg0: $CommentedConfig$$Type): void
public "correct"(arg0: $CommentedConfig$$Type, arg1: $ConfigSpec$CorrectionListener$$Type, arg2: $ConfigSpec$CorrectionListener$$Type): integer
public "correct"(arg0: $CommentedConfig$$Type, arg1: $ConfigSpec$CorrectionListener$$Type): integer
public "isCorrect"(arg0: $UnmodifiableCommentedConfig$$Type): boolean
public "resetCaches"(arg0: $ModConfigSpec$RestartType$$Type): void
public "acceptConfig"(arg0: $IConfigSpec$ILoadedConfig$$Type): void
public "validateSpec"(arg0: $ModConfig$$Type): void
public "getLevelTranslationKey"(arg0: $List$$Type<(StringJS)>): StringJS
get "empty"(): boolean
get "loaded"(): boolean
get "spec"(): $UnmodifiableConfig
get "values"(): $UnmodifiableConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$$Type = ($ModConfigSpec);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$$Original = $ModConfigSpec;}
declare module "net.neoforged.neoforge.common.extensions.IBlockEntityExtension" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IBlockEntityExtension$$Interface {

(): $CompoundTag$$Type
get "persistentData"(): $CompoundTag
get "modelData"(): $ModelData
}

export class $IBlockEntityExtension implements $IBlockEntityExtension$$Interface {
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
 "onChunkUnloaded"(): void
 "requestModelDataUpdate"(): void
 "getPersistentData"(): $CompoundTag
 "onLoad"(): void
 "invalidateCapabilities"(): void
 "getModelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityExtension$$Type = (() => $CompoundTag$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockEntityExtension$$Original = $IBlockEntityExtension;}
declare module "net.neoforged.neoforge.common.extensions.IServerGamePacketListenerExtension" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$Exception$$Type} from "java.lang.Exception"
import {$IServerCommonPacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IServerGamePacketListenerExtension$$Interface extends $IServerCommonPacketListenerExtension$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "connection"(): $Connection
get "acceptingMessages"(): boolean
}

export class $IServerGamePacketListenerExtension implements $IServerGamePacketListenerExtension$$Interface {
 "sendBundled"(...arg0: ($CustomPacketPayload$$Type)[]): void
 "sendBundled"(arg0: $Iterable$$Type<($CustomPacketPayload$$Type)>): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "disconnect"(arg0: $Component$$Type): void
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
 "getConnection"(): $Connection
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerGamePacketListenerExtension$$Type = ($IServerGamePacketListenerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerGamePacketListenerExtension$$Original = $IServerGamePacketListenerExtension;}
declare module "net.neoforged.neoforge.common.extensions.IItemExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $IItemExtension$$Interface {

(arg0: $ItemStack): boolean
}

export class $IItemExtension implements $IItemExtension$$Interface {
 "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
 "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
 "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
 "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
 "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
 "isDamaged"(arg0: $ItemStack$$Type): boolean
 "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
 "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
 "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
 "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
 "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
 "getDamage"(arg0: $ItemStack$$Type): integer
 "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
 "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
 "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
 "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
 "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
 "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
 "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
 "getMaxDamage"(arg0: $ItemStack$$Type): integer
 "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
 "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
 "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
 "getXpRepairRatio"(arg0: $ItemStack$$Type): float
 "isRepairable"(arg0: $ItemStack$$Type): boolean
 "isDamageable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemExtension$$Type = ((arg0: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemExtension$$Original = $IItemExtension;}
declare module "net.neoforged.neoforge.common.extensions.IBucketPickupExtension" {
import {$Optional} from "java.util.Optional"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBucketPickupExtension$$Interface {
}

export class $IBucketPickupExtension implements $IBucketPickupExtension$$Interface {
 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBucketPickupExtension$$Type = ($IBucketPickupExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBucketPickupExtension$$Original = $IBucketPickupExtension;}
declare module "net.neoforged.neoforge.common.extensions.IRecipeOutputExtension" {
import {$RecipeOutput} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $IRecipeOutputExtension$$Interface {

(arg0: $ResourceLocation, arg1: $Recipe<(never)>, arg2: $AdvancementHolder, ...arg3: ($ICondition)[]): void
}

export class $IRecipeOutputExtension implements $IRecipeOutputExtension$$Interface {
 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(never)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
 "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeOutputExtension$$Type = ((arg0: $ResourceLocation, arg1: $Recipe<(never)>, arg2: $AdvancementHolder, arg3: ($ICondition)[]) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeOutputExtension$$Original = $IRecipeOutputExtension;}
declare module "net.neoforged.neoforge.common.util.BlockSnapshot" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSnapshot {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getState"(): $BlockState
public static "create"(arg0: $ResourceKey$$Type<($Level)>, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: integer): $BlockSnapshot
public static "create"(arg0: $ResourceKey$$Type<($Level)>, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): $BlockSnapshot
public "getLevel"(): $LevelAccessor
public "getFlags"(): integer
public "getTag"(): $CompoundTag
public "getDimension"(): $ResourceKey<($Level)>
public "getCurrentState"(): $BlockState
public "restoreToLocation"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): boolean
public "restoreBlockEntity"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "restore"(): boolean
public "restore"(arg0: integer): boolean
public "getPos"(): $BlockPos
public "recreateBlockEntity"(arg0: $HolderLookup$Provider$$Type): $BlockEntity
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "flags"(): integer
get "tag"(): $CompoundTag
get "dimension"(): $ResourceKey<($Level)>
get "currentState"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSnapshot$$Type = ($BlockSnapshot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockSnapshot$$Original = $BlockSnapshot;}
declare module "net.neoforged.neoforge.common.util.InsertableLinkedOpenCustomHashSet" {
import {$ObjectBidirectionalIterator} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$Hash$Strategy$$Type} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$SequencedSet} from "java.util.SequencedSet"
import {$Collection$$Type} from "java.util.Collection"
import {$SortedSet} from "java.util.SortedSet"
import {$ObjectSet} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$ObjectIterator} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Spliterator} from "java.util.Spliterator"
import {$Set} from "java.util.Set"
import {$ObjectLinkedOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectLinkedOpenCustomHashSet"

export class $InsertableLinkedOpenCustomHashSet<T> extends $ObjectLinkedOpenCustomHashSet<(T)> {
constructor()
constructor(arg0: $Hash$Strategy$$Type<(T)>)

public "addFirst"(arg0: T): void
public "addLast"(arg0: T): void
public "addAfter"(arg0: T, arg1: T): boolean
public "addBefore"(arg0: T, arg1: T): boolean
public "iterator"(): $ObjectIterator
public "iterator"(arg0: any): $ObjectBidirectionalIterator
public "spliterator"(): $Spliterator
public "subSet"(arg0: any, arg1: any): $SortedSet
public "headSet"(arg0: any): $SortedSet
public "tailSet"(arg0: any): $SortedSet
public static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
public static "of"<K>(): $ObjectSet<(K)>
public static "of"<K>(arg0: K): $ObjectSet<(K)>
public "reversed"(): $SequencedSet
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsertableLinkedOpenCustomHashSet$$Type<T> = ($InsertableLinkedOpenCustomHashSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InsertableLinkedOpenCustomHashSet$$Original<T> = $InsertableLinkedOpenCustomHashSet<(T)>;}
declare module "net.neoforged.neoforge.common.extensions.ITagBuilderExtension" {
import {$TagEntry$$Type} from "net.minecraft.tags.TagEntry"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder} from "net.minecraft.tags.TagBuilder"

export interface $ITagBuilderExtension$$Interface {
get "rawBuilder"(): $TagBuilder
}

export class $ITagBuilderExtension implements $ITagBuilderExtension$$Interface {
/**
 * 
 * @deprecated
 */
 "remove"(arg0: $TagEntry$$Type, arg1: StringJS): $TagBuilder
/**
 * 
 * @deprecated
 */
 "removeElement"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
 "removeElement"(arg0: $ResourceLocation$$Type): $TagBuilder
/**
 * 
 * @deprecated
 */
 "removeTag"(arg0: $ResourceLocation$$Type, arg1: StringJS): $TagBuilder
 "removeTag"(arg0: $ResourceLocation$$Type): $TagBuilder
 "getRawBuilder"(): $TagBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagBuilderExtension$$Type = ($ITagBuilderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITagBuilderExtension$$Original = $ITagBuilderExtension;}
declare module "net.neoforged.neoforge.common.DeferredSpawnEggItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpawnEggItem} from "net.minecraft.world.item.SpawnEggItem"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DeferredSpawnEggItem extends $SpawnEggItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ENTITY_TYPE_FIELD_CODEC": $MapCodec<($EntityType<(never)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(never)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type)

public static "deferredOnlyById"(arg0: $EntityType$$Type<(never)>): $SpawnEggItem
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSpawnEggItem$$Type = ($DeferredSpawnEggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferredSpawnEggItem$$Original = $DeferredSpawnEggItem;}
declare module "net.neoforged.neoforge.common.world.StructureModifier$Phase" {
import {$Enum} from "java.lang.Enum"

export class $StructureModifier$Phase extends $Enum<($StructureModifier$Phase)> {
static readonly "ADD": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase

public static "values"(): ($StructureModifier$Phase)[]
public static "valueOf"(arg0: StringJS): $StructureModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Phase$$Type = (("before_everything") | ("add") | ("remove") | ("modify") | ("after_everything"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureModifier$Phase$$Original = $StructureModifier$Phase;}
declare module "net.neoforged.neoforge.common.util.TriState" {
import {$Enum} from "java.lang.Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState

public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "isDefault"(): boolean
public "isFalse"(): boolean
public "isTrue"(): boolean
get "default"(): boolean
get "false"(): boolean
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("true") | ("default") | ("false"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriState$$Original = $TriState;}
declare module "net.neoforged.neoforge.common.world.BiomeModifiers$AddFeaturesBiomeModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $BiomeModifiers$AddFeaturesBiomeModifier extends $Record implements $BiomeModifier$$Interface {
constructor(biomes: $HolderSet$$Type<($Biome)>, features: $HolderSet$$Type<($PlacedFeature)>, step: $GenerationStep$Decoration$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "step"(): $GenerationStep$Decoration
public "biomes"(): $HolderSet<($Biome)>
public "features"(): $HolderSet<($PlacedFeature)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifiers$AddFeaturesBiomeModifier$$Type = ({"step"?: $GenerationStep$Decoration$$Type, "biomes"?: $HolderSet$$Type<($Biome)>, "features"?: $HolderSet$$Type<($PlacedFeature)>}) | ([step?: $GenerationStep$Decoration$$Type, biomes?: $HolderSet$$Type<($Biome)>, features?: $HolderSet$$Type<($PlacedFeature)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeModifiers$AddFeaturesBiomeModifier$$Original = $BiomeModifiers$AddFeaturesBiomeModifier;}
declare module "net.neoforged.neoforge.common.extensions.IMobEffectExtension" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$Set$$Type} from "java.util.Set"

export interface $IMobEffectExtension$$Interface {
}

export class $IMobEffectExtension implements $IMobEffectExtension$$Interface {
 "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
 "getSortOrder"(arg0: $MobEffectInstance$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEffectExtension$$Type = ($IMobEffectExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMobEffectExtension$$Original = $IMobEffectExtension;}
declare module "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction" {
import {$Enum} from "java.lang.Enum"

export class $DamageContainer$Reduction extends $Enum<($DamageContainer$Reduction)> {
static readonly "MOB_EFFECTS": $DamageContainer$Reduction
static readonly "ENCHANTMENTS": $DamageContainer$Reduction
static readonly "INNATE_RESISTANCE": $DamageContainer$Reduction
static readonly "ARMOR": $DamageContainer$Reduction
static readonly "ABSORPTION": $DamageContainer$Reduction
static readonly "INVULNERABILITY": $DamageContainer$Reduction

public static "values"(): ($DamageContainer$Reduction)[]
public static "valueOf"(arg0: StringJS): $DamageContainer$Reduction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageContainer$Reduction$$Type = (("invulnerability") | ("armor") | ("enchantments") | ("mob_effects") | ("absorption") | ("innate_resistance"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageContainer$Reduction$$Original = $DamageContainer$Reduction;}
declare module "net.neoforged.neoforge.common.IMinecartCollisionHandler" {
import {$AbstractMinecart$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $IMinecartCollisionHandler$$Interface {
}

export class $IMinecartCollisionHandler implements $IMinecartCollisionHandler$$Interface {
 "getBoundingBox"(arg0: $AbstractMinecart$$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): void
 "getMinecartCollisionBox"(arg0: $AbstractMinecart$$Type): $AABB
 "getCollisionBox"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecartCollisionHandler$$Type = ($IMinecartCollisionHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMinecartCollisionHandler$$Original = $IMinecartCollisionHandler;}
declare module "net.neoforged.neoforge.common.world.chunk.TicketHelper" {
import {$Map} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TicketSet} from "net.neoforged.neoforge.common.world.chunk.TicketSet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TicketHelper {
public "removeAllTickets"(arg0: $BlockPos$$Type): void
public "removeAllTickets"(arg0: $UUID$$Type): void
public "getEntityTickets"(): $Map<($UUID), ($TicketSet)>
public "removeTicket"(arg0: $UUID$$Type, arg1: long, arg2: boolean): void
public "removeTicket"(arg0: $BlockPos$$Type, arg1: long, arg2: boolean): void
public "getBlockTickets"(): $Map<($BlockPos), ($TicketSet)>
get "entityTickets"(): $Map<($UUID), ($TicketSet)>
get "blockTickets"(): $Map<($BlockPos), ($TicketSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketHelper$$Type = ($TicketHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TicketHelper$$Original = $TicketHelper;}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import {$MobSpawnSettings, $MobSpawnSettings$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import {$Record} from "java.lang.Record"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {
constructor(climateSettings: $Biome$ClimateSettings$$Type, effects: $BiomeSpecialEffects$$Type, generationSettings: $BiomeGenerationSettings$$Type, mobSpawnSettings: $MobSpawnSettings$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "effects"(): $BiomeSpecialEffects
public "mobSpawnSettings"(): $MobSpawnSettings
public "generationSettings"(): $BiomeGenerationSettings
public "climateSettings"(): $Biome$ClimateSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$$Type = ({"mobSpawnSettings"?: $MobSpawnSettings$$Type, "generationSettings"?: $BiomeGenerationSettings$$Type, "effects"?: $BiomeSpecialEffects$$Type, "climateSettings"?: $Biome$ClimateSettings$$Type}) | ([mobSpawnSettings?: $MobSpawnSettings$$Type, generationSettings?: $BiomeGenerationSettings$$Type, effects?: $BiomeSpecialEffects$$Type, climateSettings?: $Biome$ClimateSettings$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableBiomeInfo$BiomeInfo$$Original = $ModifiableBiomeInfo$BiomeInfo;}
declare module "net.neoforged.neoforge.common.extensions.IAdvancementBuilderExtension" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IAdvancementBuilderExtension$$Interface {
}

export class $IAdvancementBuilderExtension implements $IAdvancementBuilderExtension$$Interface {
 "save"(arg0: $Consumer$$Type<($AdvancementHolder)>, arg1: $ResourceLocation$$Type, arg2: $ExistingFileHelper$$Type): $AdvancementHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancementBuilderExtension$$Type = ($IAdvancementBuilderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAdvancementBuilderExtension$$Original = $IAdvancementBuilderExtension;}
declare module "net.neoforged.neoforge.common.world.StructureSettingsBuilder" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$StructureSettingsBuilder$StructureSpawnOverrideBuilder} from "net.neoforged.neoforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $StructureSettingsBuilder {
public static "copyOf"(arg0: $Structure$StructureSettings$$Type): $StructureSettingsBuilder
public "build"(): $Structure$StructureSettings
public "getSpawnOverrides"(arg0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getOrAddSpawnOverrides"(arg0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "removeSpawnOverrides"(arg0: $MobCategory$$Type): void
public "getBiomes"(): $HolderSet<($Biome)>
public "getDecorationStep"(): $GenerationStep$Decoration
public "setDecorationStep"(arg0: $GenerationStep$Decoration$$Type): void
public "getTerrainAdaptation"(): $TerrainAdjustment
public "setTerrainAdaptation"(arg0: $TerrainAdjustment$$Type): void
public "setBiomes"(arg0: $HolderSet$$Type<($Biome)>): void
get "biomes"(): $HolderSet<($Biome)>
get "decorationStep"(): $GenerationStep$Decoration
set "decorationStep"(value: $GenerationStep$Decoration$$Type)
get "terrainAdaptation"(): $TerrainAdjustment
set "terrainAdaptation"(value: $TerrainAdjustment$$Type)
set "biomes"(value: $HolderSet$$Type<($Biome)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$$Type = ($StructureSettingsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureSettingsBuilder$$Original = $StructureSettingsBuilder;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$LongValue" {
import {$LongSupplier$$Interface} from "java.util.function.LongSupplier"
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$List$$Type} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Config$$Type} from "com.electronwill.nightconfig.core.Config"

export class $ModConfigSpec$LongValue extends $ModConfigSpec$ConfigValue<(long)> implements $LongSupplier$$Interface {
public "getAsLong"(): long
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type, arg2: $Supplier$$Type): any
get "asLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$LongValue$$Type = ($ModConfigSpec$LongValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$LongValue$$Original = $ModConfigSpec$LongValue;}
declare module "net.neoforged.neoforge.common.extensions.IBoatExtension" {
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export interface $IBoatExtension$$Interface {
}

export class $IBoatExtension implements $IBoatExtension$$Interface {
 "canBoatInFluid"(arg0: $FluidState$$Type): boolean
 "canBoatInFluid"(arg0: $FluidType$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBoatExtension$$Type = ($IBoatExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBoatExtension$$Original = $IBoatExtension;}
declare module "net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IDataComponentHolderExtension$$Interface {
}

export class $IDataComponentHolderExtension implements $IDataComponentHolderExtension$$Interface {
 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentHolderExtension$$Type = ($IDataComponentHolderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDataComponentHolderExtension$$Original = $IDataComponentHolderExtension;}
declare module "net.neoforged.neoforge.common.extensions.ILevelReaderExtension" {
import {$Optional} from "java.util.Optional"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder} from "net.minecraft.core.Holder"

export interface $ILevelReaderExtension$$Interface {
}

export class $ILevelReaderExtension implements $ILevelReaderExtension$$Interface {
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelReaderExtension$$Type = ($ILevelReaderExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILevelReaderExtension$$Original = $ILevelReaderExtension;}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo" {
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$Record} from "java.lang.Record"

export class $ModifiableStructureInfo$StructureInfo extends $Record {
constructor(structureSettings: $Structure$StructureSettings$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "structureSettings"(): $Structure$StructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$$Type = ({"structureSettings"?: $Structure$StructureSettings$$Type}) | ([structureSettings?: $Structure$StructureSettings$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableStructureInfo$StructureInfo$$Original = $ModifiableStructureInfo$StructureInfo;}
declare module "net.neoforged.neoforge.common.BooleanAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $BooleanAttribute extends $Attribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: boolean)

public "toComponent"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $MutableComponent
public "sanitizeValue"(arg0: double): double
public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanAttribute$$Type = ($BooleanAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BooleanAttribute$$Original = $BooleanAttribute;}
declare module "net.neoforged.neoforge.common.extensions.IItemPropertiesExtensions" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties} from "net.minecraft.world.item.Item$Properties"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $IItemPropertiesExtensions$$Interface {
}

export class $IItemPropertiesExtensions implements $IItemPropertiesExtensions$$Interface {
 "component"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemPropertiesExtensions$$Type = ($IItemPropertiesExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemPropertiesExtensions$$Original = $IItemPropertiesExtensions;}
declare module "net.neoforged.neoforge.common.damagesource.IReductionFunction" {
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"

export interface $IReductionFunction$$Interface {

(arg0: $DamageContainer, arg1: float): float
}

export class $IReductionFunction implements $IReductionFunction$$Interface {
 "modify"(arg0: $DamageContainer$$Type, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReductionFunction$$Type = ((arg0: $DamageContainer, arg1: float) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IReductionFunction$$Original = $IReductionFunction;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue" {
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$BooleanSupplier$$Interface} from "java.util.function.BooleanSupplier"

export class $ModConfigSpec$BooleanValue extends $ModConfigSpec$ConfigValue<(boolean)> implements $BooleanSupplier$$Interface {
public "getAsBoolean"(): boolean
public "isFalse"(): boolean
public "isTrue"(): boolean
get "asBoolean"(): boolean
get "false"(): boolean
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$BooleanValue$$Type = ($ModConfigSpec$BooleanValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$BooleanValue$$Original = $ModConfigSpec$BooleanValue;}
declare module "net.neoforged.neoforge.common.EffectCure" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Collection} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $EffectCure {
static "CODEC": $Codec<($EffectCure)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($EffectCure)>

public "name"(): StringJS
public static "get"(arg0: StringJS): $EffectCure
public "toString"(): StringJS
public static "getAllCures"(): $Collection<($EffectCure)>
public static get "allCures"(): $Collection<($EffectCure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectCure$$Type = ($EffectCure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectCure$$Original = $EffectCure;}
declare module "net.neoforged.neoforge.common.damagesource.IScalingFunction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"

export interface $IScalingFunction$$Interface {

(arg0: $DamageSource, arg1: $Player, arg2: float, arg3: $Difficulty): float
}

export class $IScalingFunction implements $IScalingFunction$$Interface {
static readonly "DEFAULT": $IScalingFunction

 "scaleDamage"(arg0: $DamageSource$$Type, arg1: $Player$$Type, arg2: float, arg3: $Difficulty$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalingFunction$$Type = ((arg0: $DamageSource, arg1: $Player, arg2: float, arg3: $Difficulty) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScalingFunction$$Original = $IScalingFunction;}
declare module "net.neoforged.neoforge.common.conditions.WithConditions" {
import {$List, $List$$Type} from "java.util.List"
import {$WithConditions$Builder} from "net.neoforged.neoforge.common.conditions.WithConditions$Builder"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record} from "java.lang.Record"

export class $WithConditions<A> extends $Record {
constructor(conditions: $List$$Type<($ICondition$$Type)>, carrier: A)
constructor(arg0: A)
constructor(arg0: A, ...arg1: ($ICondition$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"<A>(arg0: A): $WithConditions$Builder<(A)>
public "carrier"(): A
public "conditions"(): $List<($ICondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithConditions$$Type<A> = ({"conditions"?: $List$$Type<($ICondition$$Type)>, "carrier"?: A}) | ([conditions?: $List$$Type<($ICondition$$Type)>, carrier?: A]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WithConditions$$Original<A> = $WithConditions<(A)>;}
declare module "net.neoforged.neoforge.common.world.chunk.LoadingValidationCallback" {
import {$TicketHelper, $TicketHelper$$Type} from "net.neoforged.neoforge.common.world.chunk.TicketHelper"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $LoadingValidationCallback$$Interface {

(arg0: $ServerLevel, arg1: $TicketHelper): void
}

export class $LoadingValidationCallback implements $LoadingValidationCallback$$Interface {
 "validateTickets"(arg0: $ServerLevel$$Type, arg1: $TicketHelper$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingValidationCallback$$Type = ((arg0: $ServerLevel, arg1: $TicketHelper) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoadingValidationCallback$$Original = $LoadingValidationCallback;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$EnumValue" {
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Enum} from "java.lang.Enum"
import {$List$$Type} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Config$$Type} from "com.electronwill.nightconfig.core.Config"

export class $ModConfigSpec$EnumValue<T extends $Enum<(object)>> extends $ModConfigSpec$ConfigValue<(T)> {
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(StringJS)>, arg2: $Supplier$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$EnumValue$$Type<T> = ($ModConfigSpec$EnumValue<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$EnumValue$$Original<T> = $ModConfigSpec$EnumValue<(T)>;}
declare module "net.neoforged.neoforge.common.world.MobSpawnSettingsBuilder" {
import {$Map} from "java.util.Map"
import {$MobSpawnSettings$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$List} from "java.util.List"
import {$MobSpawnSettings$Builder} from "net.minecraft.world.level.biome.MobSpawnSettings$Builder"
import {$Set} from "java.util.Set"
import {$MobSpawnSettings$SpawnerData} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$MobSpawnSettings$MobSpawnCost} from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
readonly "mobSpawnCosts": $Map<($EntityType<(never)>), ($MobSpawnSettings$MobSpawnCost)>
readonly "spawners": $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>

constructor(arg0: $MobSpawnSettings$$Type)

public "getSpawner"(arg0: $MobCategory$$Type): $List<($MobSpawnSettings$SpawnerData)>
public "removeSpawnCost"(...arg0: ($EntityType$$Type<(never)>)[]): $MobSpawnSettingsBuilder
public "getEntityTypes"(): $Set<($EntityType<(never)>)>
public "getSpawnerTypes"(): $Set<($MobCategory)>
public "getCost"(arg0: $EntityType$$Type<(never)>): $MobSpawnSettings$MobSpawnCost
public "getProbability"(): float
public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
get "entityTypes"(): $Set<($EntityType<(never)>)>
get "spawnerTypes"(): $Set<($MobCategory)>
get "probability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilder$$Type = ($MobSpawnSettingsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobSpawnSettingsBuilder$$Original = $MobSpawnSettingsBuilder;}
declare module "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ICommonPacketListener$$Interface} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IServerCommonPacketListenerExtension$$Interface extends $ICommonPacketListener$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "connection"(): $Connection
get "acceptingMessages"(): boolean
}

export class $IServerCommonPacketListenerExtension implements $IServerCommonPacketListenerExtension$$Interface {
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "disconnect"(arg0: $Component$$Type): void
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
 "getConnection"(): $Connection
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerCommonPacketListenerExtension$$Type = ($IServerCommonPacketListenerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerCommonPacketListenerExtension$$Original = $IServerCommonPacketListenerExtension;}
declare module "net.neoforged.neoforge.common.extensions.IServerConfigurationPacketListenerExtension" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$ConfigurationTask$Type$$Type} from "net.minecraft.server.network.ConfigurationTask$Type"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$Exception$$Type} from "java.lang.Exception"
import {$IServerCommonPacketListenerExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IServerConfigurationPacketListenerExtension$$Interface extends $IServerCommonPacketListenerExtension$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "connection"(): $Connection
get "acceptingMessages"(): boolean
}

export class $IServerConfigurationPacketListenerExtension implements $IServerConfigurationPacketListenerExtension$$Interface {
 "finishCurrentTask"(arg0: $ConfigurationTask$Type$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "disconnect"(arg0: $Component$$Type): void
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
 "getConnection"(): $Connection
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerConfigurationPacketListenerExtension$$Type = ($IServerConfigurationPacketListenerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IServerConfigurationPacketListenerExtension$$Original = $IServerConfigurationPacketListenerExtension;}
declare module "net.neoforged.neoforge.common.util.INBTSerializable" {
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $INBTSerializable$$Interface<T extends $Tag> {
}

export class $INBTSerializable<T extends $Tag> implements $INBTSerializable$$Interface {
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): T
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$$Type<T> = ($INBTSerializable<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INBTSerializable$$Original<T> = $INBTSerializable<(T)>;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$ValueSpec" {
import {$ModConfigSpec$Range} from "net.neoforged.neoforge.common.ModConfigSpec$Range"
import {$Comparable} from "java.lang.Comparable"
import {$ModConfigSpec$RestartType} from "net.neoforged.neoforge.common.ModConfigSpec$RestartType"
import {$Class} from "java.lang.Class"

export class $ModConfigSpec$ValueSpec {
public "test"(arg0: any): boolean
public "getDefault"(): any
public "getComment"(): StringJS
public "getRange"<V extends $Comparable<(object)>>(): $ModConfigSpec$Range<(V)>
public "getTranslationKey"(): StringJS
public "correct"(arg0: any): any
public "getClazz"(): $Class<(never)>
public "restartType"(): $ModConfigSpec$RestartType
get "default"(): any
get "comment"(): StringJS
get "range"(): $ModConfigSpec$Range<(V)>
get "translationKey"(): StringJS
get "clazz"(): $Class<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$ValueSpec$$Type = ($ModConfigSpec$ValueSpec);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$ValueSpec$$Original = $ModConfigSpec$ValueSpec;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$IntValue" {
import {$ModConfigSpec$ConfigValue} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$List$$Type} from "java.util.List"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$IntSupplier$$Interface} from "java.util.function.IntSupplier"

export class $ModConfigSpec$IntValue extends $ModConfigSpec$ConfigValue<(integer)> implements $IntSupplier$$Interface {
public "getAsInt"(): integer
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type, arg2: $Supplier$$Type): any
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$IntValue$$Type = ($ModConfigSpec$IntValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$IntValue$$Original = $ModConfigSpec$IntValue;}
declare module "net.neoforged.neoforge.common.extensions.IFluidStateExtension" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFluidStateExtension$$Interface {
get "fluidType"(): $FluidType
}

export class $IFluidStateExtension implements $IFluidStateExtension$$Interface {
 "move"(arg0: $LivingEntity$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "canConvertToSource"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $Boat$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "canHydrate"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: boolean): $PathType
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStateExtension$$Type = ($IFluidStateExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidStateExtension$$Original = $IFluidStateExtension;}
declare module "net.neoforged.neoforge.common.world.BiomeModifiers$RemoveFeaturesBiomeModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $BiomeModifiers$RemoveFeaturesBiomeModifier extends $Record implements $BiomeModifier$$Interface {
constructor(biomes: $HolderSet$$Type<($Biome)>, features: $HolderSet$$Type<($PlacedFeature)>, steps: $Set$$Type<($GenerationStep$Decoration$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "steps"(): $Set<($GenerationStep$Decoration)>
public "biomes"(): $HolderSet<($Biome)>
public "features"(): $HolderSet<($PlacedFeature)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public static "allSteps"(arg0: $HolderSet$$Type<($Biome)>, arg1: $HolderSet$$Type<($PlacedFeature)>): $BiomeModifiers$RemoveFeaturesBiomeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifiers$RemoveFeaturesBiomeModifier$$Type = ({"steps"?: $Set$$Type<($GenerationStep$Decoration$$Type)>, "biomes"?: $HolderSet$$Type<($Biome)>, "features"?: $HolderSet$$Type<($PlacedFeature)>}) | ([steps?: $Set$$Type<($GenerationStep$Decoration$$Type)>, biomes?: $HolderSet$$Type<($Biome)>, features?: $HolderSet$$Type<($PlacedFeature)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeModifiers$RemoveFeaturesBiomeModifier$$Original = $BiomeModifiers$RemoveFeaturesBiomeModifier;}
declare module "net.neoforged.neoforge.common.extensions.ICommonPacketListener" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$PacketListener$$Interface} from "net.minecraft.network.PacketListener"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $ICommonPacketListener$$Interface extends $PacketListener$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "connection"(): $Connection
get "acceptingMessages"(): boolean
}

export class $ICommonPacketListener implements $ICommonPacketListener$$Interface {
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "disconnect"(arg0: $Component$$Type): void
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
 "getConnection"(): $Connection
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonPacketListener$$Type = ($ICommonPacketListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICommonPacketListener$$Original = $ICommonPacketListener;}
declare module "net.neoforged.neoforge.common.util.AttributeTooltipContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item$TooltipContext, $Item$TooltipContext$$Type, $Item$TooltipContext$$Interface} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $AttributeTooltipContext$$Interface extends $Item$TooltipContext$$Interface {
}

export class $AttributeTooltipContext implements $AttributeTooltipContext$$Interface {
static "of"(arg0: $Player$$Type, arg1: $Item$TooltipContext$$Type, arg2: $TooltipFlag$$Type): $AttributeTooltipContext
 "flag"(): $TooltipFlag
 "player"(): $Player
static "of"(arg0: $Level$$Type): $Item$TooltipContext
static "of"(arg0: $HolderLookup$Provider$$Type): $Item$TooltipContext
 "level"(): $Level
 "registries"(): $HolderLookup$Provider
 "tickRate"(): float
 "mapData"(arg0: $MapId$$Type): $MapItemSavedData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeTooltipContext$$Type = ($AttributeTooltipContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttributeTooltipContext$$Original = $AttributeTooltipContext;}
declare module "net.neoforged.neoforge.common.IShearable" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export interface $IShearable$$Interface {
}

export class $IShearable implements $IShearable$$Interface {
 "handler$chj000$apothic_enchanting$apoth_handleShearFortune"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
 "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
 "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
 "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "handler$chj000$apothic_enchanting$apoth_handleShearEnchantments"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShearable$$Type = ($IShearable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IShearable$$Original = $IShearable;}
declare module "net.neoforged.neoforge.common.extensions.IBlockGetterExtension" {
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $IBlockGetterExtension$$Interface {
}

export class $IBlockGetterExtension implements $IBlockGetterExtension$$Interface {
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGetterExtension$$Type = ($IBlockGetterExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockGetterExtension$$Original = $IBlockGetterExtension;}
declare module "net.neoforged.neoforge.common.extensions.IHolderSetExtension" {
import {$IHolderSetExtension$SerializationType} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType"
import {$Runnable$$Type} from "java.lang.Runnable"

export interface $IHolderSetExtension$$Interface<T> {
}

export class $IHolderSetExtension<T> implements $IHolderSetExtension$$Interface {
 "serializationType"(): $IHolderSetExtension$SerializationType
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderSetExtension$$Type<T> = ($IHolderSetExtension<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHolderSetExtension$$Original<T> = $IHolderSetExtension<(T)>;}
declare module "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType" {
import {$Enum} from "java.lang.Enum"

export class $IHolderSetExtension$SerializationType extends $Enum<($IHolderSetExtension$SerializationType)> {
static readonly "STRING": $IHolderSetExtension$SerializationType
static readonly "UNKNOWN": $IHolderSetExtension$SerializationType
static readonly "OBJECT": $IHolderSetExtension$SerializationType
static readonly "LIST": $IHolderSetExtension$SerializationType

public static "values"(): ($IHolderSetExtension$SerializationType)[]
public static "valueOf"(arg0: StringJS): $IHolderSetExtension$SerializationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderSetExtension$SerializationType$$Type = (("unknown") | ("string") | ("list") | ("object"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHolderSetExtension$SerializationType$$Original = $IHolderSetExtension$SerializationType;}
declare module "net.neoforged.neoforge.common.extensions.IPlayerExtension" {
import {$MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$OptionalInt} from "java.util.OptionalInt"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IPlayerExtension$$Interface {
get "fakePlayer"(): boolean
}

export class $IPlayerExtension implements $IPlayerExtension$$Interface {
 "isCloseEnough"(arg0: $Entity$$Type, arg1: double): boolean
 "isFakePlayer"(): boolean
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $BlockPos$$Type): $OptionalInt
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
 "mayFly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerExtension$$Type = ($IPlayerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerExtension$$Original = $IPlayerExtension;}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo" {
import {$List$$Type} from "java.util.List"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo"

export class $ModifiableBiomeInfo {
constructor(arg0: $ModifiableBiomeInfo$BiomeInfo$$Type)

public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "applyBiomeModifiers"(arg0: $Holder$$Type<($Biome)>, arg1: $List$$Type<($BiomeModifier$$Type)>, arg2: $RegistryAccess$$Type): boolean
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$$Type = ($ModifiableBiomeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableBiomeInfo$$Original = $ModifiableBiomeInfo;}
declare module "net.neoforged.neoforge.common.data.ExistingFileHelper" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection$$Type} from "java.util.Collection"
import {$File$$Type} from "java.io.File"
import {$PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$List} from "java.util.List"
import {$Set$$Type} from "java.util.Set"
import {$Path$$Type} from "java.nio.file.Path"
import {$ExistingFileHelper$IResourceType$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper$IResourceType"
import {$Resource} from "net.minecraft.server.packs.resources.Resource"

export class $ExistingFileHelper {
constructor(arg0: $Collection$$Type<($Path$$Type)>, arg1: $Set$$Type<(StringJS)>, arg2: boolean, arg3: StringJS, arg4: $File$$Type)

public "isEnabled"(): boolean
public "getResource"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: StringJS, arg3: StringJS): $Resource
public "getResource"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): $Resource
public "exists"(arg0: $ResourceLocation$$Type, arg1: $ExistingFileHelper$IResourceType$$Type): boolean
public "exists"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): boolean
public "exists"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: StringJS, arg3: StringJS): boolean
public "getResourceStack"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): $List<($Resource)>
public "trackGenerated"(arg0: $ResourceLocation$$Type, arg1: $ExistingFileHelper$IResourceType$$Type): void
public "trackGenerated"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: StringJS, arg3: StringJS): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$$Type = ($ExistingFileHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExistingFileHelper$$Original = $ExistingFileHelper;}
declare module "net.neoforged.neoforge.common.extensions.IPacketFlowExtension" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$LogicalSide} from "net.neoforged.fml.LogicalSide"

export interface $IPacketFlowExtension$$Interface {
get "receptionSide"(): $LogicalSide
get "serverbound"(): boolean
get "clientbound"(): boolean
}

export class $IPacketFlowExtension implements $IPacketFlowExtension$$Interface {
 "self"(): $PacketFlow
 "getReceptionSide"(): $LogicalSide
 "isServerbound"(): boolean
 "isClientbound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketFlowExtension$$Type = ($IPacketFlowExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPacketFlowExtension$$Original = $IPacketFlowExtension;}
declare module "net.neoforged.neoforge.common.data.ExistingFileHelper$IResourceType" {
import {$PackType} from "net.minecraft.server.packs.PackType"

export interface $ExistingFileHelper$IResourceType$$Interface {
get "packType"(): $PackType
get "suffix"(): StringJS
get "prefix"(): StringJS
}

export class $ExistingFileHelper$IResourceType implements $ExistingFileHelper$IResourceType$$Interface {
 "getPackType"(): $PackType
 "getSuffix"(): StringJS
 "getPrefix"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$IResourceType$$Type = ($ExistingFileHelper$IResourceType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExistingFileHelper$IResourceType$$Original = $ExistingFileHelper$IResourceType;}
declare module "net.neoforged.neoforge.common.world.poi.ExtendPoiTypesEvent" {
import {$PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Set$$Type} from "java.util.Set"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ExtendPoiTypesEvent extends $Event implements $IModBusEvent$$Interface {
public "addBlockToPoi"(arg0: $ResourceKey$$Type<($PoiType)>, arg1: $Block$$Type): void
public "addStatesToPoi"(arg0: $ResourceKey$$Type<($PoiType)>, arg1: $Set$$Type<($BlockState$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendPoiTypesEvent$$Type = ($ExtendPoiTypesEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendPoiTypesEvent$$Original = $ExtendPoiTypesEvent;}
declare module "net.neoforged.neoforge.common.extensions.IOwnedSpawner" {
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IOwnedSpawner$$Interface {

(): $Either$$Type<($BlockEntity$$Type), ($Entity$$Type)>
get "owner"(): $Either<($BlockEntity), ($Entity)>
}

export class $IOwnedSpawner implements $IOwnedSpawner$$Interface {
 "getOwner"(): $Either<($BlockEntity), ($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnedSpawner$$Type = (() => $Either$$Type<($BlockEntity$$Type), ($Entity$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOwnedSpawner$$Original = $IOwnedSpawner;}
declare module "net.neoforged.neoforge.common.crafting.ICustomIngredient" {
import {$IngredientType} from "net.neoforged.neoforge.common.crafting.IngredientType"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$CustomIngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.CustomIngredientKJS"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"

export interface $ICustomIngredient$$Interface extends $CustomIngredientKJS$$Interface {
get "type"(): $IngredientType<(never)>
get "items"(): $Stream<($ItemStack)>
get "simple"(): boolean
get "displayStacks"(): $ItemStackSet
get "stackArray"(): ($ItemStack)[]
get "wildcard"(): boolean
get "stacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemTypes"(): $Set<($Item)>
get "itemIds"(): $Set<(StringJS)>
get "itemStream"(): $Stream<($Item)>
}

export class $ICustomIngredient implements $ICustomIngredient$$Interface {
 "test"(arg0: $ItemStack$$Type): boolean
 "getType"(): $IngredientType<(never)>
 "getItems"(): $Stream<($ItemStack)>
 "toVanilla"(): $Ingredient
 "isSimple"(): boolean
 "canBeUsedForMatching"(): boolean
 "getDisplayStacks"(): $ItemStackSet
 "asIngredient"(): $Ingredient
 "getStackArray"(): ($ItemStack)[]
 "test"(itemStack: any): boolean
static "wrap"(from: any): $ItemPredicate
 "isWildcard"(): boolean
 "getStacks"(): $ItemStackSet
 "testItem"(item: $Item$$Type): boolean
 "getFirst"(): $ItemStack
 "getItemTypes"(): $Set<($Item)>
 "getItemIds"(): $Set<(StringJS)>
 "getItemStream"(): $Stream<($Item)>
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomIngredient$$Type = ($ICustomIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomIngredient$$Original = $ICustomIngredient;}
declare module "net.neoforged.neoforge.common.world.BiomeSpecialEffectsBuilder" {
import {$AmbientMoodSettings} from "net.minecraft.world.level.biome.AmbientMoodSettings"
import {$Optional} from "java.util.Optional"
import {$BiomeSpecialEffects$GrassColorModifier} from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import {$BiomeSpecialEffects$Builder} from "net.minecraft.world.level.biome.BiomeSpecialEffects$Builder"
import {$AmbientParticleSettings} from "net.minecraft.world.level.biome.AmbientParticleSettings"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$AmbientAdditionsSettings} from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import {$Music} from "net.minecraft.sounds.Music"
import {$Holder} from "net.minecraft.core.Holder"
import {$BiomeSpecialEffects$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
 "ambientLoopSoundEvent": $Optional<($Holder<($SoundEvent)>)>
 "ambientAdditionsSettings": $Optional<($AmbientAdditionsSettings)>
 "ambientMoodSettings": $Optional<($AmbientMoodSettings)>

public static "copyOf"(arg0: $BiomeSpecialEffects$$Type): $BiomeSpecialEffectsBuilder
public static "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BiomeSpecialEffectsBuilder
public "getBackgroundMusic"(): $Optional<($Music)>
public "waterColor"(): integer
public "getSkyColor"(): integer
public "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
public "getGrassColorOverride"(): $Optional<(integer)>
public "getFoliageColorOverride"(): $Optional<(integer)>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getFogColor"(): integer
public "getWaterFogColor"(): integer
public "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
public "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
public "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
get "backgroundMusic"(): $Optional<($Music)>
get "skyColor"(): integer
get "ambientParticle"(): $Optional<($AmbientParticleSettings)>
get "grassColorOverride"(): $Optional<(integer)>
get "foliageColorOverride"(): $Optional<(integer)>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "fogColor"(): integer
get "waterFogColor"(): integer
get "ambientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
get "ambientMoodSound"(): $Optional<($AmbientMoodSettings)>
get "ambientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilder$$Type = ($BiomeSpecialEffectsBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeSpecialEffectsBuilder$$Original = $BiomeSpecialEffectsBuilder;}
declare module "net.neoforged.neoforge.common.extensions.IItemStackExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"

export interface $IItemStackExtension$$Interface {
get "attributeModifiers"(): $ItemAttributeModifiers
get "equipmentSlot"(): $EquipmentSlot
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
get "piglinCurrency"(): boolean
get "xpRepairRatio"(): float
get "repairable"(): boolean
}

export class $IItemStackExtension implements $IItemStackExtension$$Interface {
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "getEquipmentSlot"(): $EquipmentSlot
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
 "handler$bnl000$irons_spellbooks$canElytraFly"(arg0: $LivingEntity$$Type, arg1: $CallbackInfoReturnable$$Type): void
 "handler$bnl000$irons_spellbooks$elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $CallbackInfoReturnable$$Type): void
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "hasCraftingRemainingItem"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "getEnchantmentValue"(): integer
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "canGrindstoneRepair"(): boolean
 "canFitInsideContainerItems"(): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "getBurnTime"(arg0: $RecipeType$$Type<(never)>): integer
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "isPiglinCurrency"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "getXpRepairRatio"(): float
 "isRepairable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackExtension$$Type = ($IItemStackExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemStackExtension$$Original = $IItemStackExtension;}
declare module "net.neoforged.neoforge.common.world.LevelChunkAuxiliaryLightManager" {
import {$Map$$Type} from "java.util.Map"
import {$AuxiliaryLightManager$$Interface} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ClientboundLevelChunkWithLightPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $LevelChunkAuxiliaryLightManager implements $AuxiliaryLightManager$$Interface, $INBTSerializable$$Interface<($ListTag)> {
static readonly "LIGHT_NBT_KEY": StringJS

constructor(arg0: $LevelChunk$$Type)

public "sendLightDataTo"(arg0: $ClientboundLevelChunkWithLightPacket$$Type): $Packet<(never)>
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $ListTag$$Type): void
public "handleLightDataSync"(arg0: $Map$$Type<($BlockPos$$Type), (byte)>): void
public "getLightAt"(arg0: $BlockPos$$Type): integer
public "setLightAt"(arg0: $BlockPos$$Type, arg1: integer): void
public "removeLightAt"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelChunkAuxiliaryLightManager$$Type = ($LevelChunkAuxiliaryLightManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelChunkAuxiliaryLightManager$$Original = $LevelChunkAuxiliaryLightManager;}
declare module "net.neoforged.neoforge.common.world.AuxiliaryLightManager" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AuxiliaryLightManager$$Interface {
}

export class $AuxiliaryLightManager implements $AuxiliaryLightManager$$Interface {
 "removeLightAt"(arg0: $BlockPos$$Type): void
 "getLightAt"(arg0: $BlockPos$$Type): integer
 "setLightAt"(arg0: $BlockPos$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuxiliaryLightManager$$Type = ($AuxiliaryLightManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AuxiliaryLightManager$$Original = $AuxiliaryLightManager;}
declare module "net.neoforged.neoforge.common.damagesource.IDeathMessageProvider" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CombatEntry, $CombatEntry$$Type} from "net.minecraft.world.damagesource.CombatEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IDeathMessageProvider$$Interface {

(arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry): $Component$$Type
}

export class $IDeathMessageProvider implements $IDeathMessageProvider$$Interface {
static readonly "DEFAULT": $IDeathMessageProvider

 "getDeathMessage"(arg0: $LivingEntity$$Type, arg1: $CombatEntry$$Type, arg2: $CombatEntry$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeathMessageProvider$$Type = ((arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry) => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDeathMessageProvider$$Original = $IDeathMessageProvider;}
declare module "net.neoforged.neoforge.common.conditions.WithConditions$Builder" {
import {$Collection$$Type} from "java.util.Collection"
import {$WithConditions} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $WithConditions$Builder<T> {
constructor()

public "build"(): $WithConditions<(T)>
public "addCondition"(...arg0: ($ICondition$$Type)[]): $WithConditions$Builder<(T)>
public "addCondition"(arg0: $Collection$$Type<($ICondition$$Type)>): $WithConditions$Builder<(T)>
public "withCarrier"(arg0: T): $WithConditions$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithConditions$Builder$$Type<T> = ($WithConditions$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WithConditions$Builder$$Original<T> = $WithConditions$Builder<(T)>;}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo" {
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$List$$Type} from "java.util.List"
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo"
import {$StructureModifier$$Type} from "net.neoforged.neoforge.common.world.StructureModifier"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $ModifiableStructureInfo {
constructor(arg0: $ModifiableStructureInfo$StructureInfo$$Type)

public "get"(): $ModifiableStructureInfo$StructureInfo
public "applyStructureModifiers"(arg0: $Holder$$Type<($Structure)>, arg1: $List$$Type<($StructureModifier$$Type)>): void
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$$Type = ($ModifiableStructureInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModifiableStructureInfo$$Original = $ModifiableStructureInfo;}
declare module "net.neoforged.neoforge.common.MutableDataComponentHolder" {
import {$ComponentFunctions} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$UUID$$Type} from "java.util.UUID"
import {$List$$Type} from "java.util.List"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$MutableDataComponentHolderFunctions$$Interface} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map$$Type} from "java.util.Map"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Type, $DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Unit$$Type} from "net.minecraft.util.Unit"

export interface $MutableDataComponentHolder$$Interface extends $DataComponentHolder$$Interface, $MutableDataComponentHolderFunctions$$Interface {

(): $DataComponentMap$$Type
get "components"(): $DataComponentMap
get "componentMap"(): $DataComponentMap
get "componentHolder"(): $MutableDataComponentHolder
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
get "additionalTooltipHidden"(): void
set "blockStateProperties"(value: $Map$$Type<(StringJS), (StringJS)>)
set "customModelData"(value: integer)
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
get "componentString"(): StringJS
set "potionContents"(value: $PotionContents$$Type)
get "tooltipHidden"(): void
set "glintOverride"(value: boolean)
set "baseColor"(value: $DyeColor$$Type)
set "lockCode"(value: StringJS)
set "profile"(value: $GameProfile$$Type)
set "entityData"(value: $CompoundTag$$Type)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "customData"(value: $CompoundTag$$Type)
get "customData"(): $CompoundTag
set "customName"(value: $Component$$Type)
get "customName"(): $Component
set "lore"(value: $List$$Type<($Component$$Type)>)
set "dyedColor"(value: $KubeColor$$Type)
set "potionId"(value: $Holder$$Type<($Potion)>)
set "rarity"(value: $Rarity$$Type)
}

export class $MutableDataComponentHolder implements $MutableDataComponentHolder$$Interface {
 "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(never)>)>)[]): void
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(never)>)[]): void
 "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
 "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
 "has"(arg0: $DataComponentType$$Type<(never)>): boolean
 "getComponents"(): $DataComponentMap
 "set"(components: $DataComponentMap$$Type): $ComponentFunctions
 "patch"(components: $DataComponentPatch$$Type): $ComponentFunctions
 "getComponentMap"(): $DataComponentMap
 "getComponentHolder"(): $MutableDataComponentHolder
 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "set"(component: $DataComponentType$$Type<(never)>, value: any): $ComponentFunctions
 "remove"(type: $DataComponentType$$Type<(never)>): $ComponentFunctions
 "get"<T>(type: $DataComponentType$$Type<(T)>): T
 "setDyedColorWithTooltip"(color: $KubeColor$$Type): void
 "setAdditionalTooltipHidden"(): void
 "setBlockStateProperties"(properties: $Map$$Type<(StringJS), (StringJS)>): void
 "setCustomModelData"(data: integer): void
 "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>, seed: long): void
 "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): void
 "getComponentString"(): StringJS
 "resetComponents"(): $ComponentFunctions
 "setPotionContents"(contents: $PotionContents$$Type): void
 "setTooltipHidden"(): void
 "setGlintOverride"(override: boolean): void
 "setBaseColor"(color: $DyeColor$$Type): void
 "setLockCode"(lock: StringJS): void
 "setProfile"(profile: $GameProfile$$Type): void
 "setProfile"(name: StringJS, uuid: $UUID$$Type): void
 "setEntityData"(tag: $CompoundTag$$Type): void
 "setUnit"(component: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
 "setCustomData"(tag: $CompoundTag$$Type): void
 "getCustomData"(): $CompoundTag
 "setCustomName"(name: $Component$$Type): void
 "getCustomName"(): $Component
 "setLore"(lines: $List$$Type<($Component$$Type)>): void
 "setLore"(lines: $List$$Type<($Component$$Type)>, styledLines: $List$$Type<($Component$$Type)>): void
 "setDyedColor"(color: $KubeColor$$Type): void
 "setPotionId"(potion: $Holder$$Type<($Potion)>): void
 "setRarity"(rarity: $Rarity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableDataComponentHolder$$Type = (() => $DataComponentMap$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableDataComponentHolder$$Original = $MutableDataComponentHolder;}
declare module "net.neoforged.neoforge.common.extensions.ITransformationExtension" {
import {$Transformation} from "com.mojang.math.Transformation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f$$Type} from "org.joml.Vector3f"

export interface $ITransformationExtension$$Interface {
get "identity"(): boolean
}

export class $ITransformationExtension implements $ITransformationExtension$$Interface {
 "isIdentity"(): boolean
 "applyOrigin"(arg0: $Vector3f$$Type): $Transformation
 "rotateTransform"(arg0: $Direction$$Type): $Direction
 "blockCornerToCenter"(): $Transformation
 "blockCenterToCorner"(): $Transformation
 "transformPosition"(arg0: $Vector4f$$Type): void
 "transformNormal"(arg0: $Vector3f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITransformationExtension$$Type = ($ITransformationExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITransformationExtension$$Original = $ITransformationExtension;}
declare module "net.neoforged.neoforge.common.extensions.ILevelExtension" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ModelDataManager} from "net.neoforged.neoforge.client.model.data.ModelDataManager"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$Collection} from "java.util.Collection"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILevelExtension$$Interface {
get "modelDataManager"(): $ModelDataManager
get "descriptionKey"(): StringJS
get "maxEntityRadius"(): double
get "partEntities"(): $Collection<($PartEntity<(never)>)>
get "description"(): $Component
}

export class $ILevelExtension implements $ILevelExtension$$Interface {
static readonly "TRANSLATION_PREFIX": StringJS

 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: C): T
 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): T
 "increaseMaxEntityRadius"(arg0: double): double
 "invalidateCapabilities"(arg0: $BlockPos$$Type): void
 "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
 "getModelDataManager"(): $ModelDataManager
 "getDescriptionKey"(): StringJS
 "getMaxEntityRadius"(): double
 "getPartEntities"(): $Collection<($PartEntity<(never)>)>
 "getDescription"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelExtension$$Type = ($ILevelExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILevelExtension$$Original = $ILevelExtension;}
declare module "net.neoforged.neoforge.common.loot.IGlobalLootModifier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$WithConditions} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LootItemCondition} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $IGlobalLootModifier$$Interface {
}

export class $IGlobalLootModifier implements $IGlobalLootModifier$$Interface {
static readonly "CONDITIONAL_CODEC": $Codec<($Optional<($WithConditions<($IGlobalLootModifier)>)>)>
static readonly "LOOT_CONDITIONS_CODEC": $Codec<(($LootItemCondition)[])>
static readonly "DIRECT_CODEC": $Codec<($IGlobalLootModifier)>

 "apply"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: $LootContext$$Type): $ObjectArrayList<($ItemStack)>
 "codec"(): $MapCodec<($IGlobalLootModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlobalLootModifier$$Type = ($IGlobalLootModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGlobalLootModifier$$Original = $IGlobalLootModifier;}
declare module "net.neoforged.neoforge.common.ItemAbility" {
import {$Collection} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"

export class $ItemAbility {
static "CODEC": $Codec<($ItemAbility)>

public "name"(): StringJS
public static "get"(arg0: StringJS): $ItemAbility
public "toString"(): StringJS
public static "getActions"(): $Collection<($ItemAbility)>
public static get "actions"(): $Collection<($ItemAbility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAbility$$Type = ($ItemAbility);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAbility$$Original = $ItemAbility;}
declare module "net.neoforged.neoforge.common.extensions.IFluidExtension" {
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFluidExtension$$Interface {

(): $FluidType$$Type
get "fluidType"(): $FluidType
}

export class $IFluidExtension implements $IFluidExtension$$Interface {
 "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
 "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "canHydrate"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: boolean): $PathType
 "getAdjacentBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "getExplosionResistance"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidExtension$$Type = (() => $FluidType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidExtension$$Original = $IFluidExtension;}
declare module "net.neoforged.neoforge.common.extensions.ICommandSourceStackExtension" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Level} from "net.minecraft.world.level.Level"
import {$AdvancementHolder} from "net.minecraft.advancements.AdvancementHolder"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"

export interface $ICommandSourceStackExtension$$Interface {
get "scoreboard"(): $Scoreboard
get "recipeManager"(): $RecipeManager
get "unsidedLevel"(): $Level
}

export class $ICommandSourceStackExtension implements $ICommandSourceStackExtension$$Interface {
 "getScoreboard"(): $Scoreboard
 "getRecipeManager"(): $RecipeManager
 "getUnsidedLevel"(): $Level
 "getAdvancement"(arg0: $ResourceLocation$$Type): $AdvancementHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommandSourceStackExtension$$Type = ($ICommandSourceStackExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICommandSourceStackExtension$$Original = $ICommandSourceStackExtension;}
declare module "net.neoforged.neoforge.common.conditions.ICondition" {
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICondition$$Interface {
}

export class $ICondition implements $ICondition$$Interface {
static readonly "CODEC": $Codec<($ICondition)>
static readonly "LIST_CODEC": $Codec<($List<($ICondition)>)>

 "test"(arg0: $ICondition$IContext$$Type): boolean
 "codec"(): $MapCodec<($ICondition)>
static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<(($WithConditions$$Type<(T)>)?)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<((T)?)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$$Type = ($ICondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICondition$$Original = $ICondition;}
declare module "net.neoforged.neoforge.common.extensions.IAttributeExtension" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DecimalFormat} from "java.text.DecimalFormat"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export interface $IAttributeExtension$$Interface {

(arg0: boolean): $TextColor$$Type
get "baseId"(): $ResourceLocation
}

export class $IAttributeExtension implements $IAttributeExtension$$Interface {
static readonly "FORMAT": $DecimalFormat

 "getBaseId"(): $ResourceLocation
static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
 "toComponent"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $MutableComponent
 "getDebugInfo"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $Component
 "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
 "getMergedStyle"(arg0: boolean): $TextColor
 "toBaseComponent"(arg0: double, arg1: double, arg2: boolean, arg3: $TooltipFlag$$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttributeExtension$$Type = ((arg0: boolean) => $TextColor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAttributeExtension$$Original = $IAttributeExtension;}
declare module "net.neoforged.neoforge.common.extensions.IBaseRailBlockExtension" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AbstractMinecart$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import {$RailShape, $RailShape$$Type} from "net.minecraft.world.level.block.state.properties.RailShape"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBaseRailBlockExtension$$Interface {
}

export class $IBaseRailBlockExtension implements $IBaseRailBlockExtension$$Interface {
 "onMinecartPass"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): void
 "isValidRailShape"(arg0: $RailShape$$Type): boolean
 "getRailDirection"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): $RailShape
 "canMakeSlopes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getRailMaxSpeed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): float
 "isFlexibleRail"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaseRailBlockExtension$$Type = ($IBaseRailBlockExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBaseRailBlockExtension$$Original = $IBaseRailBlockExtension;}
declare module "net.neoforged.neoforge.common.world.StructureModifier" {
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ModifiableStructureInfo$StructureInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo$Builder"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$StructureModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.StructureModifier$Phase"

export interface $StructureModifier$$Interface {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeStructureModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeStructureModifierTag
}

export class $StructureModifier implements $StructureModifier$$Interface {
static readonly "DIRECT_CODEC": $Codec<($StructureModifier)>
static readonly "LIST_CODEC": $Codec<($HolderSet<($StructureModifier)>)>
static readonly "REFERENCE_CODEC": $Codec<($Holder<($StructureModifier)>)>

 "codec"(): $MapCodec<($StructureModifier)>
 "modify"(arg0: $Holder$$Type<($Structure)>, arg1: $StructureModifier$Phase$$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$$Type = (Special.NeoforgeStructureModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureModifier$$Original = $StructureModifier;}
declare module "net.neoforged.neoforge.common.extensions.IMenuTypeExtension" {
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $IMenuTypeExtension$$Interface<T> {

(arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T
}

export class $IMenuTypeExtension<T> implements $IMenuTypeExtension$$Interface {
static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuTypeExtension$$Type<T> = ((arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMenuTypeExtension$$Original<T> = $IMenuTypeExtension<(T)>;}
declare module "net.neoforged.neoforge.common.world.BiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BiomeModifier$$Interface {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeBiomeModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeBiomeModifierTag
}

export class $BiomeModifier implements $BiomeModifier$$Interface {
static readonly "DIRECT_CODEC": $Codec<($BiomeModifier)>
static readonly "LIST_CODEC": $Codec<($HolderSet<($BiomeModifier)>)>
static readonly "REFERENCE_CODEC": $Codec<($Holder<($BiomeModifier)>)>

 "codec"(): $MapCodec<($BiomeModifier)>
 "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$$Type = (Special.NeoforgeBiomeModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeModifier$$Original = $BiomeModifier;}
declare module "net.neoforged.neoforge.common.extensions.IClientCommonPacketListenerExtension" {
import {$PacketFlow} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$Exception$$Type} from "java.lang.Exception"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ConnectionProtocol} from "net.minecraft.network.ConnectionProtocol"
import {$Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ICommonPacketListener$$Interface} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$Connection} from "net.minecraft.network.Connection"
import {$CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IClientCommonPacketListenerExtension$$Interface extends $ICommonPacketListener$$Interface {
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
get "connectionType"(): $ConnectionType
get "connection"(): $Connection
get "acceptingMessages"(): boolean
}

export class $IClientCommonPacketListenerExtension implements $IClientCommonPacketListenerExtension$$Interface {
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(never)>
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(never)>): boolean
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "send"(arg0: $Packet$$Type<(never)>): void
 "getConnectionType"(): $ConnectionType
 "getConnection"(): $Connection
 "protocol"(): $ConnectionProtocol
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "onPacketError"(arg0: $Packet$$Type, arg1: $Exception$$Type): void
 "isAcceptingMessages"(): boolean
 "shouldHandleMessage"(arg0: $Packet$$Type<(never)>): boolean
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "flow"(): $PacketFlow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientCommonPacketListenerExtension$$Type = ($IClientCommonPacketListenerExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IClientCommonPacketListenerExtension$$Original = $IClientCommonPacketListenerExtension;}
declare module "net.neoforged.neoforge.common.brewing.IBrewingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IBrewingRecipe$$Interface {
}

export class $IBrewingRecipe implements $IBrewingRecipe$$Interface {
 "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "isInput"(arg0: $ItemStack$$Type): boolean
 "isIngredient"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBrewingRecipe$$Type = ($IBrewingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBrewingRecipe$$Original = $IBrewingRecipe;}
declare module "net.neoforged.neoforge.common.extensions.IDataComponentMapBuilderExtensions" {
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentMap$Builder} from "net.minecraft.core.component.DataComponentMap$Builder"

export interface $IDataComponentMapBuilderExtensions$$Interface {
}

export class $IDataComponentMapBuilderExtensions implements $IDataComponentMapBuilderExtensions$$Interface {
 "set"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $DataComponentMap$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentMapBuilderExtensions$$Type = ($IDataComponentMapBuilderExtensions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDataComponentMapBuilderExtensions$$Original = $IDataComponentMapBuilderExtensions;}
declare module "net.neoforged.neoforge.common.util.Lazy" {
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"

export class $Lazy<T> implements $Supplier$$Interface<(T)> {
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $Lazy<(T)>
public "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$$Type<T> = ($Lazy<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Lazy$$Original<T> = $Lazy<(T)>;}
declare module "net.neoforged.neoforge.common.PercentageAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$RangedAttribute} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $PercentageAttribute extends $RangedAttribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double, arg4: double)
constructor(arg0: StringJS, arg1: double, arg2: double, arg3: double)

public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PercentageAttribute$$Type = ($PercentageAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PercentageAttribute$$Original = $PercentageAttribute;}
declare module "net.neoforged.neoforge.common.world.BiomeModifier$Phase" {
import {$Enum} from "java.lang.Enum"

export class $BiomeModifier$Phase extends $Enum<($BiomeModifier$Phase)> {
static readonly "ADD": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase

public static "values"(): ($BiomeModifier$Phase)[]
public static "valueOf"(arg0: StringJS): $BiomeModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Phase$$Type = (("before_everything") | ("add") | ("remove") | ("modify") | ("after_everything"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeModifier$Phase$$Original = $BiomeModifier$Phase;}
declare module "net.neoforged.neoforge.common.extensions.IEntityExtension" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PartEntity} from "net.neoforged.neoforge.entity.PartEntity"
import {$MobCategory} from "net.minecraft.world.entity.MobCategory"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEntityExtension$$Interface extends $INBTSerializable$$Interface<($CompoundTag)> {
get "maxHeightFluidType"(): $FluidType
get "persistentData"(): $CompoundTag
get "multipartEntity"(): boolean
get "eyeInFluidType"(): $FluidType
get "addedToLevel"(): boolean
get "parts"(): ($PartEntity<(never)>)[]
get "inFluidType"(): boolean
}

export class $IEntityExtension implements $IEntityExtension$$Interface {
 "getMaxHeightFluidType"(): $FluidType
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "canRiderInteract"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "onAddedToLevel"(): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
 "getPersistentData"(): $CompoundTag
 "onRemovedFromLevel"(): void
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "shouldRiderSit"(): boolean
 "canStartSwimming"(): boolean
 "isMultipartEntity"(): boolean
 "getEyeInFluidType"(): $FluidType
 "isAddedToLevel"(): boolean
 "revive"(): void
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "getParts"(): ($PartEntity<(never)>)[]
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "isInFluidType"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityExtension$$Type = ($IEntityExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEntityExtension$$Original = $IEntityExtension;}
declare module "net.neoforged.neoforge.common.ModConfigSpec$Range" {
import {$Comparable} from "java.lang.Comparable"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Class} from "java.lang.Class"

export class $ModConfigSpec$Range<V extends $Comparable<(object)>> implements $Predicate$$Interface<(any)> {
public "toString"(): StringJS
public "test"(arg0: any): boolean
public static "of"(arg0: integer, arg1: integer): $ModConfigSpec$Range<(integer)>
public "getMin"(): V
public "getMax"(): V
public "correct"(arg0: any, arg1: any): any
public "getClazz"(): $Class<(V)>
public "or"(arg0: $Predicate$$Type<(any)>): $Predicate<(any)>
public "negate"(): $Predicate<(any)>
public "and"(arg0: $Predicate$$Type<(any)>): $Predicate<(any)>
public static "not"<T>(arg0: $Predicate$$Type<(any)>): $Predicate<(any)>
public static "isEqual"<T>(arg0: any): $Predicate<(any)>
get "min"(): V
get "max"(): V
get "clazz"(): $Class<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$Range$$Type<V> = ($ModConfigSpec$Range<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModConfigSpec$Range$$Original<V> = $ModConfigSpec$Range<(V)>;}
