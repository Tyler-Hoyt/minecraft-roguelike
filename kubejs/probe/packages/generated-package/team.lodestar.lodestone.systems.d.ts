declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece" {
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockStructure$StructurePiece {
readonly "offset": $Vec3i
readonly "state": $BlockState

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$$Type)

public "place"(arg0: $BlockPos$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type): void
public "place"(arg0: $BlockPos$$Type, arg1: $Level$$Type): void
public "canPlace"(arg0: $BlockPlaceContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$StructurePiece$$Type = ($MultiBlockStructure$StructurePiece);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBlockStructure$StructurePiece$$Original = $MultiBlockStructure$StructurePiece;}
declare module "team.lodestar.lodestone.systems.item.LodestoneCombatItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TieredItem} from "net.minecraft.world.item.TieredItem"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneCombatItem extends $TieredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneCombatItem$$Type = ($LodestoneCombatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneCombatItem$$Original = $LodestoneCombatItem;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderEntry" {
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$PlacementCondition$$Type} from "team.lodestar.lodestone.systems.worldgen.PlacementCondition"
import {$Function$$Type} from "java.util.function.Function"
import {$AdditionalPlacement$$Type} from "team.lodestar.lodestone.systems.worldgen.AdditionalPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneWorldgenBuilderEntry {
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "position"(): $BlockPos
public "blockState"(): $BlockState
public "place"(arg0: $WorldGenLevel$$Type): void
public "place"(arg0: $WorldGenLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "tryPlace"(arg0: $WorldGenLevel$$Type): boolean
public "canPlace"(arg0: $WorldGenLevel$$Type): boolean
public "isImportant"(): boolean
public "changeState"(arg0: $BlockState$$Type): $LodestoneWorldgenBuilderEntry
public "changeState"(arg0: $Function$$Type<($BlockState), ($BlockState$$Type)>): $LodestoneWorldgenBuilderEntry
public "hasPlacementCondition"(): boolean
public "hasAdditionalPlacement"(): boolean
public "setImportant"(): $LodestoneWorldgenBuilderEntry
public "addPlacementCondition"(arg0: $PlacementCondition$$Type): $LodestoneWorldgenBuilderEntry
public "addAdditionalPlacement"(arg0: $AdditionalPlacement$$Type): $LodestoneWorldgenBuilderEntry
public "changePos"(arg0: $Function$$Type<($BlockPos), ($BlockPos$$Type)>): $LodestoneWorldgenBuilderEntry
public "changePos"(arg0: $BlockPos$$Type): $LodestoneWorldgenBuilderEntry
get "important"(): boolean
get "important"(): $LodestoneWorldgenBuilderEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldgenBuilderEntry$$Type = ($LodestoneWorldgenBuilderEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneWorldgenBuilderEntry$$Original = $LodestoneWorldgenBuilderEntry;}
declare module "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker" {
import {$Enum} from "java.lang.Enum"

export class $SimpleParticleOptions$ParticleSpritePicker extends $Enum<($SimpleParticleOptions$ParticleSpritePicker)> {
static readonly "WITH_AGE": $SimpleParticleOptions$ParticleSpritePicker
static readonly "LAST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "WITH_AGE_INVERSE": $SimpleParticleOptions$ParticleSpritePicker
static readonly "FIRST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "RANDOM_SPRITE": $SimpleParticleOptions$ParticleSpritePicker

public static "values"(): ($SimpleParticleOptions$ParticleSpritePicker)[]
public static "valueOf"(arg0: StringJS): $SimpleParticleOptions$ParticleSpritePicker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$ParticleSpritePicker$$Type = (("first_index") | ("last_index") | ("with_age") | ("with_age_inverse") | ("random_sprite"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleParticleOptions$ParticleSpritePicker$$Original = $SimpleParticleOptions$ParticleSpritePicker;}
declare module "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder" {
import {$ArrayList} from "java.util.ArrayList"
import {$Map} from "java.util.Map"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ScreenParticle} from "team.lodestar.lodestone.systems.particle.screen.base.ScreenParticle"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LodestoneScreenParticleRenderType} from "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType"
import {$Tesselator} from "com.mojang.blaze3d.vertex.Tesselator"

export class $ScreenParticleHolder {
static readonly "TESSELATOR": $Tesselator
readonly "particles": $Map<($LodestoneScreenParticleRenderType), ($ArrayList<($ScreenParticle)>)>

constructor()

public "isEmpty"(): boolean
public "tick"(): void
public "addFrom"(arg0: $ScreenParticleHolder$$Type): void
public "render"(): void
public "render"(arg0: $GuiGraphics$$Type): void
public "render"(arg0: $PoseStack$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticleHolder$$Type = ($ScreenParticleHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenParticleHolder$$Original = $ScreenParticleHolder;}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneShovelItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneShovelItem extends $ShovelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneShovelItem$$Type = ($LodestoneShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneShovelItem$$Original = $LodestoneShovelItem;}
declare module "team.lodestar.lodestone.systems.particle.screen.base.ScreenParticle" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LodestoneScreenParticleRenderType} from "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType"

export class $ScreenParticle {
readonly "level": $ClientLevel
 "yMotion": double
 "lifetime": integer
 "roll": float
 "xMotion": double
 "xMoved": double
 "friction": float
 "oRoll": float
 "yMoved": double
readonly "random": $RandomSource
 "bCol": float
 "removed": boolean
 "size": float
 "yOld": double
 "gravity": float
 "gCol": float
 "alpha": float
 "xOld": double
 "x": double
 "y": double
 "rCol": float
 "age": integer

constructor(arg0: $ClientLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "remove"(): void
public "isAlive"(): boolean
public "tick"(): void
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "setSize"(arg0: float): $ScreenParticle
public "setParticleSpeed"(arg0: double, arg1: double): void
public "getLifetime"(): integer
public "render"(arg0: $BufferBuilder$$Type, arg1: $PoseStack$$Type): void
public "getRenderType"(): $LodestoneScreenParticleRenderType
public "setLifetime"(arg0: integer): void
get "alive"(): boolean
get "renderType"(): $LodestoneScreenParticleRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticle$$Type = ($ScreenParticle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenParticle$$Original = $ScreenParticle;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NetworkedParticleEffectExtraData$$Interface {
}

export class $NetworkedParticleEffectExtraData implements $NetworkedParticleEffectExtraData$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectExtraData$$Type = ($NetworkedParticleEffectExtraData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectExtraData$$Original = $NetworkedParticleEffectExtraData;}
declare module "team.lodestar.lodestone.systems.attribute.LodestoneAttributeBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute$Sentiment, $Attribute$Sentiment$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute$Sentiment"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $LodestoneAttributeBuilder {
 "sentiment": $Attribute$Sentiment
readonly "minValue": double
readonly "defaultValue": double
readonly "maxValue": double
 "forcePercentage": boolean
readonly "id": $ResourceLocation
 "baseId": $ResourceLocation
 "syncable": boolean

constructor(arg0: $ResourceLocation$$Type, arg1: double)
constructor(arg0: $ResourceLocation$$Type, arg1: double, arg2: double, arg3: double)

public "build"(): $Attribute
public "setSentiment"(arg0: $Attribute$Sentiment$$Type): $LodestoneAttributeBuilder
public "setSyncable"(arg0: boolean): $LodestoneAttributeBuilder
public "setAsBaseAttribute"(arg0: $ResourceLocation$$Type): $LodestoneAttributeBuilder
public "setAsBaseAttribute"(): $LodestoneAttributeBuilder
public "forcePercentageDisplay"(): $LodestoneAttributeBuilder
set "asBaseAttribute"(value: $ResourceLocation$$Type)
get "asBaseAttribute"(): $LodestoneAttributeBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneAttributeBuilder$$Type = ($LodestoneAttributeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneAttributeBuilder$$Original = $LodestoneAttributeBuilder;}
declare module "team.lodestar.lodestone.systems.rendering.shader.IShaderInstance" {
import {$LodestoneProgram, $LodestoneProgram$$Type} from "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram"

export interface $IShaderInstance$$Interface {

(): $LodestoneProgram$$Type
get "geometryProgram"(): $LodestoneProgram
}

export class $IShaderInstance implements $IShaderInstance$$Interface {
 "getGeometryProgram"(): $LodestoneProgram
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShaderInstance$$Type = (() => $LodestoneProgram$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IShaderInstance$$Original = $IShaderInstance;}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$$Type<($MultiBlockStructure$StructurePiece$$Type)>)

public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$$Type)[]): $MultiBlockStructure
public "place"(arg0: $BlockPlaceContext$$Type): void
public "canPlace"(arg0: $BlockPlaceContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$$Type = ($MultiBlockStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBlockStructure$$Original = $MultiBlockStructure;}
declare module "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeToken" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$TextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ComplexRenderTypeToken} from "team.lodestar.lodestone.systems.rendering.rendeertype.ComplexRenderTypeToken"
import {$ShaderUniformHandler$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.ShaderUniformHandler"
import {$LodestoneRenderTypes$LodestoneCompositeStateBuilder$$Type} from "team.lodestar.lodestone.registry.client.LodestoneRenderTypes$LodestoneCompositeStateBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RenderTypeToken {
constructor(arg0: $UUID$$Type, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getTexture"(): $ResourceLocation
public "getIdentifier"(): $UUID
public "addUniformHandler"(arg0: $ShaderUniformHandler$$Type): $ComplexRenderTypeToken
public "addUniformHandler"(arg0: $Consumer$$Type<($ShaderUniformHandler)>): $ComplexRenderTypeToken
public static "createToken"(arg0: $ResourceLocation$$Type): $RenderTypeToken
public static "createToken"(arg0: $RenderStateShard$TextureStateShard$$Type): $RenderTypeToken
public "addModifier"(arg0: $Consumer$$Type<($LodestoneRenderTypes$LodestoneCompositeStateBuilder)>): $ComplexRenderTypeToken
get "texture"(): $ResourceLocation
get "identifier"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeToken$$Type = ($RenderTypeToken);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeToken$$Original = $RenderTypeToken;}
declare module "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "update"(arg0: $Level$$Type): void
/**
 * 
 * @deprecated
 */
public "tick"(): void
public "clientTick"(arg0: $Level$$Type): void
public "getUpdatePacket"(): $Packet
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onPlace"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): void
public "onClone"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "commonTick"(arg0: $Level$$Type): void
public "playSound"(arg0: $SoundEvent$$Type): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "serverTick"(arg0: $ServerLevel$$Type): void
public "setDirty"(): void
public "onEntityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onNeighborUpdate"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "onUseWithoutItem"(arg0: $Player$$Type): $InteractionResult
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "notifyObservers"(): void
get "updatePacket"(): $Packet
get "dirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntity$$Type = ($LodestoneBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockEntity$$Original = $LodestoneBlockEntity;}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventInstance" {
import {$WorldEventType, $WorldEventType$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $WorldEventInstance {
 "dirty": boolean
 "discarded": boolean
 "level": $Level
 "frozen": boolean
 "type": $WorldEventType
 "uuid": $UUID

constructor(arg0: $WorldEventType$$Type)

public "end"(arg0: $Level$$Type): void
public "start"(arg0: $Level$$Type): void
public "isFrozen"(): boolean
public "sync"(arg0: $Level$$Type): void
public static "sync"<T extends $WorldEventInstance>(arg0: T): void
public static "sync"<T extends $WorldEventInstance>(arg0: T, arg1: $ServerPlayer$$Type): void
public "tick"(arg0: $Level$$Type): void
public "getLevel"(): $Level
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$$Type): $WorldEventInstance
public "setDirty"(): void
public "synchronizeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventInstance$$Type = ($WorldEventInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventInstance$$Original = $WorldEventInstance;}
declare module "team.lodestar.lodestone.systems.particle.SimpleParticleOptions" {
import {$Float2FloatFunction} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Int2IntFunction} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Supplier} from "java.util.function.Supplier"
import {$SimpleParticleOptions$ParticleSpritePicker} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$SpinParticleData} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $SimpleParticleOptions {
 "colorData": $ColorParticleData
static readonly "DEFAULT_COLOR": $ColorParticleData
 "transparencyData": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "lifetimeSupplier": $Supplier<(integer)>
 "gravitySupplier": $Supplier<(float)>
 "gravityModifier": $Float2FloatFunction
 "spinData": $SpinParticleData
 "lifetimeModifier": $Int2IntFunction
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "frictionModifier": $Float2FloatFunction
 "scaleData": $GenericParticleData
 "lifeDelayModifier": $Int2IntFunction
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>
 "frictionSupplier": $Supplier<(float)>

constructor()

public "getLifetime"(): integer
public "getLifeDelay"(): integer
public "getGravity"(): float
public "getFriction"(): float
get "lifetime"(): integer
get "lifeDelay"(): integer
get "gravity"(): float
get "friction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$$Type = ($SimpleParticleOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleParticleOptions$$Original = $SimpleParticleOptions;}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneHoeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"

export class $LodestoneHoeItem extends $HoeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneHoeItem$$Type = ($LodestoneHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneHoeItem$$Original = $LodestoneHoeItem;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$List$$Type} from "java.util.List"
import {$NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IPayloadContext$$Type} from "net.neoforged.neoforge.network.handling.IPayloadContext"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$OneSidedPayloadData} from "team.lodestar.lodestone.systems.network.OneSidedPayloadData"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$NetworkedParticleEffectType, $NetworkedParticleEffectType$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $NetworkedParticleEffectPayload extends $OneSidedPayloadData {
constructor(arg0: $NetworkedParticleEffectType$$Type<(never)>, arg1: $NetworkedParticleEffectPositionData$$Type, arg2: $NetworkedParticleEffectColorData$$Type, arg3: $NetworkedParticleEffectExtraData$$Type)
constructor(arg0: $FriendlyByteBuf$$Type)

public "handle"(arg0: $IPayloadContext$$Type): void
public "serialize"(arg0: $FriendlyByteBuf$$Type): void
public "getEffectType"(arg0: StringJS): $NetworkedParticleEffectType<(never)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectPayload$$Type = ($NetworkedParticleEffectPayload);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectPayload$$Original = $NetworkedParticleEffectPayload;}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicAxeItem" {
import {$LodestoneAxeItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneAxeItem"
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicAxeItem extends $LodestoneAxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicAxeItem$$Type = ($MagicAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicAxeItem$$Original = $MagicAxeItem;}
declare module "team.lodestar.lodestone.systems.block.sign.LodestoneWallSignBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$WallSignBlock} from "net.minecraft.world.level.block.WallSignBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneWallSignBlock extends $WallSignBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSignBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWallSignBlock$$Type = ($LodestoneWallSignBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneWallSignBlock$$Original = $LodestoneWallSignBlock;}
declare module "team.lodestar.lodestone.systems.easing.Easing$Back" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Easing$Elastic} from "team.lodestar.lodestone.systems.easing.Easing$Elastic"
import {$Easing} from "team.lodestar.lodestone.systems.easing.Easing"
import {$HashMap} from "java.util.HashMap"

export class $Easing$Back extends $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "DEFAULT_OVERSHOOT": float
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: float)

public "getOvershoot"(): float
public "setOvershoot"(arg0: float): void
get "overshoot"(): float
set "overshoot"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Back$$Type = ($Easing$Back);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Easing$Back$$Original = $Easing$Back;}
declare module "team.lodestar.lodestone.systems.easing.Easing" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Easing$Back} from "team.lodestar.lodestone.systems.easing.Easing$Back"
import {$Easing$Elastic} from "team.lodestar.lodestone.systems.easing.Easing$Elastic"
import {$HashMap} from "java.util.HashMap"

export class $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS)

public static "valueOf"(arg0: StringJS): $Easing
public "clamped"(arg0: double, arg1: double, arg2: double): float
public "clamped"(arg0: float, arg1: float, arg2: float, arg3: float): float
public "clamped"(arg0: float, arg1: float, arg2: float): float
public "clamped"(arg0: double, arg1: double, arg2: double, arg3: double): float
public "ease"(arg0: float, arg1: float, arg2: float, arg3: float): float
public "ease"(arg0: double, arg1: double, arg2: double, arg3: double): float
public "ease"(arg0: float, arg1: float, arg2: float): float
public "ease"(arg0: double, arg1: double, arg2: double): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$$Type = ($Easing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Easing$$Original = $Easing;}
declare module "team.lodestar.lodestone.systems.rendering.rendeertype.LodestoneRenderTypeBuilder" {
import {$LodestoneRenderType} from "team.lodestar.lodestone.systems.rendering.LodestoneRenderType"
import {$ShaderUniformHandler$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.ShaderUniformHandler"
import {$RenderTypeToken, $RenderTypeToken$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeToken"
import {$RenderTypeProvider, $RenderTypeProvider$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeProvider"
import {$LodestoneRenderTypes$LodestoneCompositeStateBuilder$$Type} from "team.lodestar.lodestone.registry.client.LodestoneRenderTypes$LodestoneCompositeStateBuilder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LodestoneRenderTypeBuilder {
constructor(arg0: $RenderTypeProvider$$Type, arg1: $RenderTypeToken$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getProvider"(): $RenderTypeProvider
public "getToken"(): $RenderTypeToken
public "withUniformHandler"(arg0: $Consumer$$Type<($ShaderUniformHandler)>): $LodestoneRenderTypeBuilder
public "withUniformHandler"(arg0: $ShaderUniformHandler$$Type): $LodestoneRenderTypeBuilder
public "withModifier"(arg0: $Consumer$$Type<($LodestoneRenderTypes$LodestoneCompositeStateBuilder)>): $LodestoneRenderTypeBuilder
public "getRenderType"(): $LodestoneRenderType
get "provider"(): $RenderTypeProvider
get "token"(): $RenderTypeToken
get "renderType"(): $LodestoneRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRenderTypeBuilder$$Type = ($LodestoneRenderTypeBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRenderTypeBuilder$$Original = $LodestoneRenderTypeBuilder;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $NetworkedParticleEffectPositionData {
static readonly "CODEC": $Codec<($NetworkedParticleEffectPositionData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3$$Type)
constructor(arg0: $Entity$$Type)
constructor(arg0: $BlockPos$$Type)

public "getPosX"(): double
public "getPosY"(): double
public "getAsVector"(): $Vec3
public "getAsBlockPos"(): $BlockPos
public "getPosZ"(): double
get "posX"(): double
get "posY"(): double
get "asVector"(): $Vec3
get "asBlockPos"(): $BlockPos
get "posZ"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectPositionData$$Type = ($NetworkedParticleEffectPositionData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectPositionData$$Original = $NetworkedParticleEffectPositionData;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry" {
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockFiller$BlockStateEntry {
public "getState"(): $BlockState
public "place"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): void
public "canPlace"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "tryDiscard"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntry$$Type = ($LodestoneBlockFiller$BlockStateEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$BlockStateEntry$$Original = $LodestoneBlockFiller$BlockStateEntry;}
declare module "team.lodestar.lodestone.systems.network.OneSidedPayloadData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$LodestoneNetworkPayloadData} from "team.lodestar.lodestone.systems.network.LodestoneNetworkPayloadData"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IPayloadContext$$Type} from "net.neoforged.neoforge.network.handling.IPayloadContext"
import {$CustomPacketPayload} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export class $OneSidedPayloadData extends $LodestoneNetworkPayloadData {
constructor()

public "handle"(arg0: $IPayloadContext$$Type): void
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OneSidedPayloadData$$Type = ($OneSidedPayloadData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OneSidedPayloadData$$Original = $OneSidedPayloadData;}
declare module "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder" {
import {$GenericParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataWrapper"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $GenericParticleDataBuilder implements $GenericParticleDataWrapper$$Interface {
public "unwrap"(): $GenericParticleData
public "build"(): $GenericParticleData
public "setEasing"(arg0: $Easing$$Type, arg1: $Easing$$Type): $GenericParticleDataBuilder
public "setEasing"(arg0: $Easing$$Type): $GenericParticleDataBuilder
public "setCoefficient"(arg0: float): $GenericParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleDataBuilder$$Type = ($GenericParticleDataBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericParticleDataBuilder$$Original = $GenericParticleDataBuilder;}
declare module "team.lodestar.lodestone.systems.rendering.trail.TrailPoint" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector4f} from "org.joml.Vector4f"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $TrailPoint {
constructor(arg0: $Vec3$$Type, arg1: integer)
constructor(arg0: $Vec3$$Type)

public "move"(arg0: $Vec3$$Type): void
public "tick"(): void
public static "getMatrixPosition"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type): $Vector4f
public "getMatrixPosition"(arg0: $Matrix4f$$Type): $Vector4f
public "getInterpolatedMatrixPosition"(arg0: $Matrix4f$$Type, arg1: float): $Vector4f
public "getAge"(): integer
public "setPosition"(arg0: $Vec3$$Type): void
public "getInterpolatedPosition"(arg0: float): $Vec3
public "getPosition"(): $Vec3
get "age"(): integer
set "position"(value: $Vec3$$Type)
get "position"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPoint$$Type = ($TrailPoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailPoint$$Original = $TrailPoint;}
declare module "team.lodestar.lodestone.systems.item.tools.LodestonePickaxeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestonePickaxeItem extends $PickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestonePickaxeItem$$Type = ($LodestonePickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestonePickaxeItem$$Original = $LodestonePickaxeItem;}
declare module "team.lodestar.lodestone.systems.item.LodestoneItemProperties" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$Map} from "java.util.Map"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentMap$Builder} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Interner} from "com.google.common.collect.Interner"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $LodestoneItemProperties extends $Item$Properties {
 "components": $DataComponentMap$Builder
static readonly "TAB_SORTING": $Map<($ResourceKey<($CreativeModeTab)>), ($List<($ResourceLocation)>)>
static readonly "COMPONENT_INTERNER": $Interner<($DataComponentMap)>

constructor()
constructor(arg0: $ResourceKey$$Type<($CreativeModeTab)>)
constructor(arg0: $DeferredHolder$$Type<($CreativeModeTab$$Type), ($CreativeModeTab$$Type)>)

public "component"(arg0: $DataComponentType$$Type, arg1: any): $Item$Properties
public "attributes"(arg0: $ItemAttributeModifiers$$Type): $LodestoneItemProperties
public "durability"(arg0: integer): $Item$Properties
public "rarity"(arg0: $Rarity$$Type): $LodestoneItemProperties
public "food"(arg0: $FoodProperties$$Type): $Item$Properties
public "jukeboxPlayable"(arg0: $ResourceKey$$Type): $Item$Properties
public "fireResistant"(): $LodestoneItemProperties
public "requiredFeatures"(arg0: ($FeatureFlag$$Type)[]): $Item$Properties
public "craftRemainder"(arg0: $Item$$Type): $Item$Properties
public "stacksTo"(arg0: integer): $Item$Properties
public "setNoRepair"(): $LodestoneItemProperties
public static "addToTabSorting"(arg0: $ResourceLocation$$Type, arg1: $Item$Properties$$Type): void
public "mergeAttributes"(arg0: $ItemAttributeModifiers$$Type): $LodestoneItemProperties
public static "mergeAttributes"(arg0: $Item$Properties$$Type, arg1: $ItemAttributeModifiers$$Type): $Item$Properties
public static "populateItemGroups"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
get "noRepair"(): $LodestoneItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemProperties$$Type = ($LodestoneItemProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneItemProperties$$Original = $LodestoneItemProperties;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ColorParticleDataWrapper$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $NetworkedParticleEffectColorData {
static readonly "CODEC": $Codec<($NetworkedParticleEffectColorData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>

constructor(arg0: $List$$Type<($ColorParticleDataWrapper$$Type)>)
constructor(...arg0: ($ColorParticleDataWrapper$$Type)[])

public "getColor"(): $ColorParticleData
public static "fromColors"(arg0: $List$$Type<($ColorParticleDataWrapper$$Type)>): $NetworkedParticleEffectColorData
public static "fromColor"(arg0: $ColorParticleDataWrapper$$Type): $NetworkedParticleEffectColorData
public "getColors"(): $List<($ColorParticleData)>
get "color"(): $ColorParticleData
get "colors"(): $List<($ColorParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectColorData$$Type = ($NetworkedParticleEffectColorData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectColorData$$Original = $NetworkedParticleEffectColorData;}
declare module "team.lodestar.lodestone.systems.block.LodestoneDirectionalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneDirectionalBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LodestoneDirectionalBlock)>
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneDirectionalBlock$$Type = ($LodestoneDirectionalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneDirectionalBlock$$Original = $LodestoneDirectionalBlock;}
declare module "team.lodestar.lodestone.systems.rendering.buffer.LodestoneRenderLayer" {
import {$LodestoneBufferSource} from "team.lodestar.lodestone.systems.rendering.buffer.LodestoneBufferSource"

export class $LodestoneRenderLayer {
constructor()

public "getTarget"(): $LodestoneBufferSource
public "getParticleTarget"(): $LodestoneBufferSource
public "endBatches"(): void
public "getTrailTarget"(): $LodestoneBufferSource
get "target"(): $LodestoneBufferSource
get "particleTarget"(): $LodestoneBufferSource
get "trailTarget"(): $LodestoneBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRenderLayer$$Type = ($LodestoneRenderLayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRenderLayer$$Original = $LodestoneRenderLayer;}
declare module "team.lodestar.lodestone.systems.block.LodestoneLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneLogBlock extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "stripped": $Supplier<($Block)>
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
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneLogBlock$$Type = ($LodestoneLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneLogBlock$$Original = $LodestoneLogBlock;}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicSwordItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LodestoneSwordItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneSwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicSwordItem extends $LodestoneSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$$Type = ($MagicSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicSwordItem$$Original = $MagicSwordItem;}
declare module "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SpinParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataWrapper"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$SpinParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataBuilder"
import {$Easing} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpinParticleData extends $GenericParticleData implements $SpinParticleDataWrapper$$Interface {
readonly "endingValue": float
readonly "startingCurve": $Easing
 "valueMultiplier": float
readonly "spinOffset": float
 "coefficientMultiplier": float
readonly "middleValue": float
readonly "coefficient": float
readonly "startingValue": float
readonly "endingCurve": $Easing

public "lock"(): $SpinParticleData
public "copy"(): $SpinParticleData
public static "create"(arg0: float): $SpinParticleDataBuilder
public static "create"(arg0: float, arg1: float): $SpinParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $SpinParticleDataBuilder
public "unwrap"(): $GenericParticleData
public "bake"(): $SpinParticleData
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float, arg2: float, arg3: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float, arg2: float): $SpinParticleDataBuilder
public "overrideValueMultiplier"(arg0: float): $SpinParticleData
public "overrideCoefficientMultiplier"(arg0: float): $SpinParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleData$$Type = ($SpinParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpinParticleData$$Original = $SpinParticleData;}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $LodestoneRecipeSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $MapCodec$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRecipeSerializer$$Type<T> = ($LodestoneRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRecipeSerializer$$Original<T> = $LodestoneRecipeSerializer<(T)>;}
declare module "team.lodestar.lodestone.systems.multiblock.IMultiBlockCore" {
import {$MultiBlockStructure} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArrayList} from "java.util.ArrayList"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IMultiBlockCore$$Interface {
set "upMultiblock"(value: $BlockPos$$Type)
get "structure"(): $MultiBlockStructure
get "modular"(): boolean
get "componentPositions"(): $ArrayList<($BlockPos)>
}

export class $IMultiBlockCore implements $IMultiBlockCore$$Interface {
 "setupMultiblock"(arg0: $BlockPos$$Type): void
 "destroyMultiblock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getStructure"(): $MultiBlockStructure
 "isModular"(): boolean
 "getComponentPositions"(): $ArrayList<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockCore$$Type = ($IMultiBlockCore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiBlockCore$$Original = $IMultiBlockCore;}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicShovelItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$LodestoneShovelItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneShovelItem"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MagicShovelItem extends $LodestoneShovelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicShovelItem$$Type = ($MagicShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicShovelItem$$Original = $MagicShovelItem;}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneItemCrumbsParticleType" {
import {$AbstractLodestoneParticleType} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$LodestoneItemCrumbsParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.LodestoneItemCrumbsParticleOptions"

export class $LodestoneItemCrumbsParticleType extends $AbstractLodestoneParticleType<($LodestoneItemCrumbsParticleOptions)> {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleType$$Type = ($LodestoneItemCrumbsParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneItemCrumbsParticleType$$Original = $LodestoneItemCrumbsParticleType;}
declare module "team.lodestar.lodestone.systems.rendering.trail.TrailPointBuilder" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$List} from "java.util.List"
import {$Vector4f} from "org.joml.Vector4f"
import {$TrailPoint, $TrailPoint$$Type} from "team.lodestar.lodestone.systems.rendering.trail.TrailPoint"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $TrailPointBuilder {
constructor(arg0: integer)

public "run"(arg0: $Consumer$$Type<($TrailPoint)>): $TrailPointBuilder
public static "create"(arg0: integer): $TrailPointBuilder
public "build"(arg0: $Matrix4f$$Type, arg1: float): $List<($Vector4f)>
public "build"(arg0: $Matrix4f$$Type): $List<($Vector4f)>
public "getOrigin"(): $Vec3
public "getTrailLength"(): integer
public "getTrailPoints"(): $List<($TrailPoint)>
public "addTrailPoint"(arg0: $Vec3$$Type): $TrailPointBuilder
public "addTrailPoint"(arg0: $TrailPoint$$Type): $TrailPointBuilder
public "tickTrailPoints"(): $TrailPointBuilder
public "setOrigin"(arg0: $Vec3$$Type): $TrailPointBuilder
get "origin"(): $Vec3
get "trailLength"(): integer
get "trailPoints"(): $List<($TrailPoint)>
set "origin"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPointBuilder$$Type = ($TrailPointBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailPointBuilder$$Original = $TrailPointBuilder;}
declare module "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"

export interface $LodestoneScreenParticleRenderType$$Interface {
}

export class $LodestoneScreenParticleRenderType implements $LodestoneScreenParticleRenderType$$Interface {
static readonly "ADDITIVE": $LodestoneScreenParticleRenderType
static readonly "LUMITRANSPARENT": $LodestoneScreenParticleRenderType
static readonly "TRANSPARENT": $LodestoneScreenParticleRenderType

 "begin"(arg0: $Tesselator$$Type, arg1: $TextureManager$$Type): $BufferBuilder
 "end"(arg0: $BufferBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneScreenParticleRenderType$$Type = ($LodestoneScreenParticleRenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneScreenParticleRenderType$$Original = $LodestoneScreenParticleRenderType;}
declare module "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram$Type" {
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$LodestoneProgram} from "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram"

export class $LodestoneProgram$Type extends $Enum<($LodestoneProgram$Type)> {
static readonly "VERTEX": $LodestoneProgram$Type
static readonly "FRAGMENT": $LodestoneProgram$Type
static readonly "GEOMETRY": $LodestoneProgram$Type

public "getName"(): StringJS
public static "values"(): ($LodestoneProgram$Type)[]
public static "valueOf"(arg0: StringJS): $LodestoneProgram$Type
public "getExtension"(): StringJS
public "getPrograms"(): $Map<(StringJS), ($LodestoneProgram)>
get "name"(): StringJS
get "extension"(): StringJS
get "programs"(): $Map<(StringJS), ($LodestoneProgram)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneProgram$Type$$Type = (("vertex") | ("fragment") | ("geometry"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneProgram$Type$$Original = $LodestoneProgram$Type;}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneRecipeType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $LodestoneRecipeType<T extends $Recipe<(object)>> implements $RecipeType$$Interface<(T)> {
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

public "toString"(): StringJS
public static "findRecipe"<T extends $RecipeInput, K extends $Recipe<(object)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>, arg2: $Predicate$$Type<(K)>): K
public static "getRecipe"<T extends $RecipeInput, K extends $Recipe<(object)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>, arg2: T): K
public static "getRecipes"<T extends $RecipeInput, K extends $Recipe<(object)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>): $List<(K)>
public static "getRecipeHolders"<T extends $RecipeInput, K extends $Recipe<(object)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>): $List<($RecipeHolder<(K)>)>
public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRecipeType$$Type<T> = ($LodestoneRecipeType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRecipeType$$Original<T> = $LodestoneRecipeType<(T)>;}
declare module "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataWrapper" {
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"

export interface $SpinParticleDataWrapper$$Interface {

(): $SpinParticleData$$Type
}

export class $SpinParticleDataWrapper implements $SpinParticleDataWrapper$$Interface {
 "unwrap"(): $SpinParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleDataWrapper$$Type = (() => $SpinParticleData$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpinParticleDataWrapper$$Original = $SpinParticleDataWrapper;}
declare module "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeProvider" {
import {$LodestoneRenderType$$Type} from "team.lodestar.lodestone.systems.rendering.LodestoneRenderType"
import {$Function$$Type} from "java.util.function.Function"
import {$LodestoneRenderTypeBuilder} from "team.lodestar.lodestone.systems.rendering.rendeertype.LodestoneRenderTypeBuilder"
import {$RenderTypeToken$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.RenderTypeToken"

export class $RenderTypeProvider {
constructor(arg0: $Function$$Type<($RenderTypeToken), ($LodestoneRenderType$$Type)>)

public "toString"(): StringJS
public "apply"(arg0: $RenderTypeToken$$Type): $LodestoneRenderTypeBuilder
public "checkNuclear"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeProvider$$Type = ($RenderTypeProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeProvider$$Original = $RenderTypeProvider;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder" {
import {$Color$$Type} from "java.awt.Color"
import {$NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$List$$Type} from "java.util.List"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$ColorParticleDataWrapper$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NetworkedParticleEffectPayload$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPayload"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkedParticleEffectType$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $NetworkedParticleEffectType$ParticleEffectBuilder<T extends $NetworkedParticleEffectExtraData> {
constructor(arg0: $NetworkedParticleEffectType$$Type<(T)>)

public "at"(arg0: $NetworkedParticleEffectPositionData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $List$$Type<($ColorParticleDataWrapper$$Type)>): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $NetworkedParticleEffectColorData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $ColorParticleDataWrapper$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $Color$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "customData"(arg0: T): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "spawn"(arg0: $ServerLevel$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "spawn"(arg0: $Consumer$$Type<($NetworkedParticleEffectPayload)>): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectType$ParticleEffectBuilder$$Type<T> = ($NetworkedParticleEffectType$ParticleEffectBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectType$ParticleEffectBuilder$$Original<T> = $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder" {
import {$LodestoneBlockFiller$BlockStateEntry} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry"
import {$LodestoneBlockFiller$EntryDiscardPredicate$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryDiscardPredicate"
import {$LodestoneBlockFiller$EntryPlacementPredicate$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryPlacementPredicate"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockFiller$BlockStateEntryBuilder {
constructor(arg0: $BlockState$$Type)

public "build"(): $LodestoneBlockFiller$BlockStateEntry
public "setForcePlace"(): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setForcePlace"(arg0: boolean): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setDiscardPredicate"(arg0: $LodestoneBlockFiller$EntryDiscardPredicate$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setPlacementPredicate"(arg0: $LodestoneBlockFiller$EntryPlacementPredicate$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
get "forcePlace"(): $LodestoneBlockFiller$BlockStateEntryBuilder
set "forcePlace"(value: boolean)
set "discardPredicate"(value: $LodestoneBlockFiller$EntryDiscardPredicate$$Type)
set "placementPredicate"(value: $LodestoneBlockFiller$EntryPlacementPredicate$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntryBuilder$$Type = ($LodestoneBlockFiller$BlockStateEntryBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$BlockStateEntryBuilder$$Original = $LodestoneBlockFiller$BlockStateEntryBuilder;}
declare module "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ColorParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$Easing} from "team.lodestar.lodestone.systems.easing.Easing"

export class $ColorParticleData implements $ColorParticleDataWrapper$$Interface {
static readonly "CODEC": $Codec<($ColorParticleData)>

public "lock"(): $ColorParticleData
public "copy"(): $ColorParticleDataBuilder
public static "create"(arg0: $Color$$Type, arg1: $Color$$Type): $ColorParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $ColorParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $ColorParticleDataBuilder
public static "create"(arg0: $Color$$Type): $ColorParticleDataBuilder
public "unwrap"(): $ColorParticleData
public "getProgress"(arg0: float, arg1: float): float
public "invert"(): $ColorParticleDataBuilder
public "getStartingColor"(): $Color
public "getColorCurve"(): $Easing
public "getEndingColor"(): $Color
public static "createGrayParticleColor"(arg0: $RandomSource$$Type): $ColorParticleData
public static "createGrayParticleColor"(arg0: $RandomSource$$Type, arg1: float, arg2: float): $ColorParticleData
public "multiplyCoefficient"(arg0: float): $ColorParticleData
public "overrideCoefficientMultiplier"(arg0: float): $ColorParticleData
public "rgbToHsv"(arg0: (float)[], arg1: (float)[]): void
public "getColorCoefficient"(): float
get "startingColor"(): $Color
get "colorCurve"(): $Easing
get "endingColor"(): $Color
get "colorCoefficient"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleData$$Type = ($ColorParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorParticleData$$Original = $ColorParticleData;}
declare module "team.lodestar.lodestone.systems.multiblock.ILodestoneMultiblockComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILodestoneMultiblockComponent$$Interface {
}

export class $ILodestoneMultiblockComponent implements $ILodestoneMultiblockComponent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILodestoneMultiblockComponent$$Type = ($ILodestoneMultiblockComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILodestoneMultiblockComponent$$Original = $ILodestoneMultiblockComponent;}
declare module "team.lodestar.lodestone.systems.particle.world.options.LodestoneItemCrumbsParticleOptions" {
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$LodestoneItemCrumbsParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneItemCrumbsParticleType"
import {$LodestoneRenderLayer} from "team.lodestar.lodestone.systems.rendering.buffer.LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleSpritePicker} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$WorldParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$SpinParticleData} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$Consumer} from "java.util.function.Consumer"
import {$Float2FloatFunction} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Int2IntFunction} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$LodestoneWorldParticle} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $LodestoneItemCrumbsParticleOptions extends $WorldParticleOptions {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "stack": $ItemStack
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "type": $ParticleType<(never)>
 "gravitySupplier": $Supplier<(float)>
 "lifetimeModifier": $Int2IntFunction
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "frictionModifier": $Float2FloatFunction
 "scaleData": $GenericParticleData
 "frictionSupplier": $Supplier<(float)>
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "transparencyData": $GenericParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "gravityModifier": $Float2FloatFunction
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $LodestoneRenderLayer
 "lifeDelayModifier": $Int2IntFunction
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $ParticleType$$Type<($LodestoneItemCrumbsParticleOptions$$Type)>, arg1: $ItemStack$$Type)
constructor(arg0: $Supplier$$Type<($LodestoneItemCrumbsParticleType$$Type)>, arg1: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleOptions$$Type = ($LodestoneItemCrumbsParticleOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneItemCrumbsParticleOptions$$Original = $LodestoneItemCrumbsParticleOptions;}
declare module "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataBuilder" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GenericParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder"
import {$SpinParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataWrapper"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpinParticleDataBuilder extends $GenericParticleDataBuilder implements $SpinParticleDataWrapper$$Interface {
public "unwrap"(): $GenericParticleData
public "build"(): $GenericParticleData
public "randomSpinOffset"(arg0: $RandomSource$$Type): $SpinParticleDataBuilder
public "setEasing"(arg0: $Easing$$Type, arg1: $Easing$$Type): $GenericParticleDataBuilder
public "setEasing"(arg0: $Easing$$Type): $GenericParticleDataBuilder
public "setSpinOffset"(arg0: float): $SpinParticleDataBuilder
public "setCoefficient"(arg0: float): $GenericParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "spinOffset"(value: float)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleDataBuilder$$Type = ($SpinParticleDataBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpinParticleDataBuilder$$Original = $SpinParticleDataBuilder;}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneTerrainParticleType" {
import {$AbstractLodestoneParticleType} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$LodestoneTerrainParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.LodestoneTerrainParticleOptions"

export class $LodestoneTerrainParticleType extends $AbstractLodestoneParticleType<($LodestoneTerrainParticleOptions)> {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleType$$Type = ($LodestoneTerrainParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneTerrainParticleType$$Original = $LodestoneTerrainParticleType;}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$NetworkedParticleEffectColorData, $NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData, $NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NetworkedParticleEffectType$ParticleEffectBuilder} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $NetworkedParticleEffectType<T extends $NetworkedParticleEffectExtraData> {
static readonly "CODEC": $Codec<($NetworkedParticleEffectType<(never)>)>
static readonly "EFFECT_TYPES": $Map<(StringJS), ($NetworkedParticleEffectType<(never)>)>

constructor(arg0: StringJS)

public "getId"(): StringJS
public "act"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $NetworkedParticleEffectPositionData$$Type, arg3: $NetworkedParticleEffectColorData$$Type, arg4: T): void
public "getPositionCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>)>
public "createEffect"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "createEffect"(): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "createEffect"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "createEffect"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "getColorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
public "getExtraCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectExtraData)>)>
public "getDefaultExtraData"(): $Optional<($NetworkedParticleEffectExtraData)>
get "id"(): StringJS
get "positionCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>)>
get "colorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
get "extraCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectExtraData)>)>
get "defaultExtraData"(): $Optional<($NetworkedParticleEffectExtraData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectType$$Type<T> = ($NetworkedParticleEffectType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkedParticleEffectType$$Original<T> = $NetworkedParticleEffectType<(T)>;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $LodestoneBlockFiller$LodestoneLayerToken {
readonly "index": $UUID

constructor(arg0: $UUID$$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$LodestoneLayerToken$$Type = ($LodestoneBlockFiller$LodestoneLayerToken);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$LodestoneLayerToken$$Original = $LodestoneBlockFiller$LodestoneLayerToken;}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventType" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WorldEventInstance} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventType$EventInstanceSupplier, $WorldEventType$EventInstanceSupplier$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventType$EventInstanceSupplier"

export class $WorldEventType {
readonly "clientSynced": boolean
readonly "supplier": $WorldEventType$EventInstanceSupplier<(never)>
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type, arg1: $WorldEventType$EventInstanceSupplier$$Type<(never)>, arg2: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: $WorldEventType$EventInstanceSupplier$$Type<(never)>)

public "createInstance"(arg0: $CompoundTag$$Type): $WorldEventInstance
public "isClientSynced"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.LodestoneWorldEventType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.LodestoneWorldEventTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventType$$Type = (Special.LodestoneWorldEventType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventType$$Original = $WorldEventType;}
declare module "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper" {
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export interface $ColorParticleDataWrapper$$Interface {

(): $ColorParticleData$$Type
}

export class $ColorParticleDataWrapper implements $ColorParticleDataWrapper$$Interface {
 "unwrap"(): $ColorParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleDataWrapper$$Type = (() => $ColorParticleData$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorParticleDataWrapper$$Original = $ColorParticleDataWrapper;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryPlacementPredicate" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LodestoneBlockFiller$EntryPlacementPredicate$$Interface {

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState): boolean
}

export class $LodestoneBlockFiller$EntryPlacementPredicate implements $LodestoneBlockFiller$EntryPlacementPredicate$$Interface {
 "canPlace"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryPlacementPredicate$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$EntryPlacementPredicate$$Original = $LodestoneBlockFiller$EntryPlacementPredicate;}
declare module "team.lodestar.lodestone.systems.item.LodestoneArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $LodestoneArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: integer, arg3: $Item$Properties$$Type)

public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "createExtraAttributes"(): $List<($ItemAttributeModifiers$Entry)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneArmorItem$$Type = ($LodestoneArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneArmorItem$$Original = $LodestoneArmorItem;}
declare module "team.lodestar.lodestone.systems.block.LodestoneEntityBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LodestoneEntityBlock<T extends $LodestoneBlockEntity> extends $Block implements $EntityBlock$$Interface {
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

public "onBlockBroken"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "getTicker"<Y extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(Y)>): $BlockEntityTicker<(Y)>
public "hasTileEntity"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "setBlockEntity"(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>): $LodestoneEntityBlock<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "blockEntity"(value: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneEntityBlock$$Type<T> = ($LodestoneEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneEntityBlock$$Original<T> = $LodestoneEntityBlock<(T)>;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneBlockFillerLayer" {
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LodestoneBlockFiller$BlockStateEntryBuilder$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$HashMap} from "java.util.HashMap"

export class $LodestoneBlockFiller$LodestoneBlockFillerLayer extends $HashMap<($BlockPos), ($LodestoneBlockFiller$BlockStateEntry)> {
readonly "layerToken": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $LodestoneBlockFiller$LodestoneLayerToken$$Type)

public "put"(arg0: $BlockPos$$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$$Type): $LodestoneBlockFiller$BlockStateEntry
public "replace"(arg0: $BlockPos$$Type, arg1: $Function$$Type<($LodestoneBlockFiller$BlockStateEntry), ($LodestoneBlockFiller$BlockStateEntry$$Type)>): void
public "fill"(arg0: $LevelAccessor$$Type): void
public "putIfAbsent"(arg0: $BlockPos$$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$$Type): $LodestoneBlockFiller$BlockStateEntry
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type = ($LodestoneBlockFiller$LodestoneBlockFillerLayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Original = $LodestoneBlockFiller$LodestoneBlockFillerLayer;}
declare module "team.lodestar.lodestone.systems.easing.Easing$Elastic" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Easing$Back} from "team.lodestar.lodestone.systems.easing.Easing$Back"
import {$Easing} from "team.lodestar.lodestone.systems.easing.Easing"
import {$HashMap} from "java.util.HashMap"

export class $Easing$Elastic extends $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS, arg1: float, arg2: float)
constructor(arg0: StringJS)

public "getPeriod"(): float
public "setPeriod"(arg0: float): void
public "getAmplitude"(): float
public "setAmplitude"(arg0: float): void
get "period"(): float
set "period"(value: float)
get "amplitude"(): float
set "amplitude"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Elastic$$Type = ($Easing$Elastic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Easing$Elastic$$Original = $Easing$Elastic;}
declare module "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle" {
import {$Collection} from "java.util.Collection"
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$LodestoneRenderLayer} from "team.lodestar.lodestone.systems.rendering.buffer.LodestoneRenderLayer"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$SimpleParticleOptions$ParticleSpritePicker} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$ParticleEngine$MutableSpriteSet, $ParticleEngine$MutableSpriteSet$$Type} from "net.minecraft.client.particle.ParticleEngine$MutableSpriteSet"
import {$SpriteSet$$Type} from "net.minecraft.client.particle.SpriteSet"
import {$SpinParticleData} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$Consumer} from "java.util.function.Consumer"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$TextureSheetParticle} from "net.minecraft.client.particle.TextureSheetParticle"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $LodestoneWorldParticle extends $TextureSheetParticle {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "transparencyData": $GenericParticleData
readonly "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "spinData": $SpinParticleData
readonly "particleLight": integer
readonly "renderLayer": $LodestoneRenderLayer
 "gravity": float
readonly "lengthData": $GenericParticleData
 "lifeDelay": integer
readonly "spriteSet": $ParticleEngine$MutableSpriteSet
readonly "behavior": $LodestoneParticleBehavior
readonly "renderType": $ParticleRenderType
readonly "scaleData": $GenericParticleData
 "age": integer

constructor(arg0: $ClientLevel$$Type, arg1: $WorldParticleOptions$$Type, arg2: $ParticleEngine$MutableSpriteSet$$Type, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double)

public "tick"(): void
public "tick"(arg0: integer): void
public "setParticleSpeed"(arg0: $Vec3$$Type): void
public "getRed"(): float
public "getBlue"(): float
public "getAlpha"(): float
public "getGreen"(): float
public "getY"(): double
public "getSpritePicker"(): $SimpleParticleOptions$ParticleSpritePicker
public "getVertexConsumer"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "getQuadLength"(arg0: float): float
public "getRandom"(): $RandomSource
public "render"(arg0: $VertexConsumer$$Type, arg1: $Camera$$Type, arg2: float): void
public "getParticleSpeed"(): $Vec3
public "getRenderType"(): $ParticleRenderType
public "getU0"(): float
public "getV0"(): float
public "getU1"(): float
public "getV1"(): float
public "getAge"(): integer
public "setParticlePosition"(arg0: $Vec3$$Type): void
public "setSpriteFromInverseAge"(arg0: $SpriteSet$$Type): void
public "setOldParticlePosition"(arg0: $Vec3$$Type): void
public "getOldParticlePosition"(): $Vec3
public "getZ"(): double
public "getX"(): double
public "getRoll"(): float
public "getYMotion"(): double
public "getORoll"(): float
public "getXOld"(): double
public "getZOld"(): double
public "getZMotion"(): double
public "pickColor"(arg0: float): void
public "getXMotion"(): double
public "getYOld"(): double
public "getParticlePosition"(): $Vec3
public "getLightColor"(arg0: float): integer
public "pickSprite"(arg0: integer): void
set "particleSpeed"(value: $Vec3$$Type)
get "red"(): float
get "blue"(): float
get "alpha"(): float
get "green"(): float
get "y"(): double
get "random"(): $RandomSource
get "particleSpeed"(): $Vec3
get "u0"(): float
get "v0"(): float
get "u1"(): float
get "v1"(): float
set "particlePosition"(value: $Vec3$$Type)
set "spriteFromInverseAge"(value: $SpriteSet$$Type)
set "oldParticlePosition"(value: $Vec3$$Type)
get "oldParticlePosition"(): $Vec3
get "z"(): double
get "x"(): double
get "roll"(): float
get "YMotion"(): double
get "ORoll"(): float
get "XOld"(): double
get "ZOld"(): double
get "ZMotion"(): double
get "XMotion"(): double
get "YOld"(): double
get "particlePosition"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticle$$Type = ($LodestoneWorldParticle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneWorldParticle$$Original = $LodestoneWorldParticle;}
declare module "team.lodestar.lodestone.systems.rendering.LodestoneRenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ShaderUniformHandler, $ShaderUniformHandler$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.ShaderUniformHandler"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$LodestoneRenderTypes$LodestoneCompositeStateBuilder$$Type} from "team.lodestar.lodestone.registry.client.LodestoneRenderTypes$LodestoneCompositeStateBuilder"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $LodestoneRenderType extends $RenderType {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
readonly "state": $RenderType$CompositeState
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
 "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
readonly "copies": $HashMap<(any), ($LodestoneRenderType)>
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type, arg7: $ShaderUniformHandler$$Type)

public "toString"(): StringJS
public "copy"(arg0: any, arg1: $Consumer$$Type<($ShaderUniformHandler)>, arg2: $Consumer$$Type<($LodestoneRenderTypes$LodestoneCompositeStateBuilder)>): $LodestoneRenderType
public "copy"(arg0: any, arg1: $ShaderUniformHandler$$Type, arg2: $Consumer$$Type<($LodestoneRenderTypes$LodestoneCompositeStateBuilder)>): $LodestoneRenderType
public "copy"(arg0: any): $LodestoneRenderType
public "copy"(arg0: any, arg1: $ShaderUniformHandler$$Type): $LodestoneRenderType
public "copy"(arg0: any, arg1: $Consumer$$Type<($ShaderUniformHandler)>): $LodestoneRenderType
public "draw"(arg0: $MeshData$$Type): void
public static "isAdditive"(arg0: $LodestoneRenderType$$Type): boolean
public "isAdditive"(): boolean
public "getUniformHandler"(): $ShaderUniformHandler
public "isOutline"(): boolean
public "outline"(): $Optional<($RenderType)>
get "additive"(): boolean
get "uniformHandler"(): $ShaderUniformHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRenderType$$Type = ($LodestoneRenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRenderType$$Original = $LodestoneRenderType;}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneWorldParticleType" {
import {$AbstractLodestoneParticleType} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$WorldParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"

export class $LodestoneWorldParticleType extends $AbstractLodestoneParticleType<($WorldParticleOptions)> {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticleType$$Type = ($LodestoneWorldParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneWorldParticleType$$Original = $LodestoneWorldParticleType;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller" {
import {$ArrayList} from "java.util.ArrayList"
import {$Collection$$Type} from "java.util.Collection"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LodestoneBlockFiller$BlockStateEntryBuilder} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder"
import {$LodestoneBlockFiller$LodestoneBlockFillerLayer, $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneBlockFillerLayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $LodestoneBlockFiller extends $ArrayList<($LodestoneBlockFiller$LodestoneBlockFillerLayer)> {
static readonly "MAIN": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $Collection$$Type<($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)>)
constructor(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)[])
constructor()

public "fill"(arg0: $LevelAccessor$$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public "getLayer"(arg0: $LodestoneBlockFiller$LodestoneLayerToken$$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public static "create"(arg0: $BlockState$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)[]): $LodestoneBlockFiller
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneLayerToken$$Type)[]): $LodestoneBlockFiller
public "getMainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "mainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$$Type = ($LodestoneBlockFiller);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$$Original = $LodestoneBlockFiller;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryDiscardPredicate" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LodestoneBlockFiller$EntryDiscardPredicate$$Interface {

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState): boolean
}

export class $LodestoneBlockFiller$EntryDiscardPredicate implements $LodestoneBlockFiller$EntryDiscardPredicate$$Interface {
 "shouldDiscard"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryDiscardPredicate$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockFiller$EntryDiscardPredicate$$Original = $LodestoneBlockFiller$EntryDiscardPredicate;}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneAxeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestoneAxeItem extends $AxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneAxeItem$$Type = ($LodestoneAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneAxeItem$$Original = $LodestoneAxeItem;}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneSwordItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestoneSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneSwordItem$$Type = ($LodestoneSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneSwordItem$$Original = $LodestoneSwordItem;}
declare module "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder" {
import {$ColorParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataWrapper"
import {$Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $ColorParticleDataBuilder implements $ColorParticleDataWrapper$$Interface {
public "unwrap"(): $ColorParticleData
public "build"(): $ColorParticleData
public "setEasing"(arg0: $Easing$$Type): $ColorParticleDataBuilder
public "setCoefficient"(arg0: float): $ColorParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleDataBuilder$$Type = ($ColorParticleDataBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorParticleDataBuilder$$Original = $ColorParticleDataBuilder;}
declare module "team.lodestar.lodestone.systems.rendering.IVertexBuffer" {
import {$FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$VertexBuffer$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer$Usage"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $IVertexBuffer$$Interface {
}

export class $IVertexBuffer implements $IVertexBuffer$$Interface {
static "cast"(arg0: $VertexBuffer$$Type): $IVertexBuffer
 "drawInstanced"(arg0: integer): void
 "addAttributeVBO"(arg0: integer, arg1: $FloatBuffer$$Type, arg2: $VertexBuffer$Usage$$Type, arg3: $Consumer$$Type<(integer)>): void
 "drawWithShaderInstanced"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: $ShaderInstance$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexBuffer$$Type = ($IVertexBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVertexBuffer$$Original = $IVertexBuffer;}
declare module "team.lodestar.lodestone.systems.multiblock.HorizontalDirectionStructure" {
import {$MultiBlockStructure} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HorizontalDirectionStructure extends $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$$Type<($MultiBlockStructure$StructurePiece$$Type)>)

public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$$Type)[]): $HorizontalDirectionStructure
public "place"(arg0: $BlockPlaceContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalDirectionStructure$$Type = ($HorizontalDirectionStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalDirectionStructure$$Original = $HorizontalDirectionStructure;}
declare module "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$WorldParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractLodestoneParticleType<T extends $WorldParticleOptions> extends $ParticleType<(T)> {
public "getType"(): $AbstractLodestoneParticleType<(T)>
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
get "type"(): $AbstractLodestoneParticleType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLodestoneParticleType$$Type<T> = ($AbstractLodestoneParticleType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractLodestoneParticleType$$Original<T> = $AbstractLodestoneParticleType<(T)>;}
declare module "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerSupplier$$Interface {

(arg0: $Direction): $IItemHandler$$Type
}

export class $IItemHandlerSupplier implements $IItemHandlerSupplier$$Interface {
 "getInventory"(arg0: $Direction$$Type): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSupplier$$Type = ((arg0: $Direction) => $IItemHandler$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IItemHandlerSupplier$$Original = $IItemHandlerSupplier;}
declare module "team.lodestar.lodestone.systems.worldgen.PlacementCondition" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$LodestoneWorldgenBuilderEntry, $LodestoneWorldgenBuilderEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderEntry"

export interface $PlacementCondition$$Interface {

(arg0: $WorldGenLevel, arg1: $LodestoneWorldgenBuilderEntry): boolean
}

export class $PlacementCondition implements $PlacementCondition$$Interface {
static readonly "CAN_SURVIVE": $PlacementCondition

 "canPlace"(arg0: $WorldGenLevel$$Type, arg1: $LodestoneWorldgenBuilderEntry$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementCondition$$Type = ((arg0: $WorldGenLevel, arg1: $LodestoneWorldgenBuilderEntry) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementCondition$$Original = $PlacementCondition;}
declare module "team.lodestar.lodestone.systems.worldgen.AdditionalPlacement" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$LodestoneWorldgenBuilderEntry, $LodestoneWorldgenBuilderEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderEntry"

export interface $AdditionalPlacement$$Interface {

(arg0: $WorldGenLevel, arg1: $LodestoneWorldgenBuilderEntry): void
}

export class $AdditionalPlacement implements $AdditionalPlacement$$Interface {
 "place"(arg0: $WorldGenLevel$$Type, arg1: $LodestoneWorldgenBuilderEntry$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalPlacement$$Type = ((arg0: $WorldGenLevel, arg1: $LodestoneWorldgenBuilderEntry) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionalPlacement$$Original = $AdditionalPlacement;}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicHoeItem" {
import {$LodestoneHoeItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneHoeItem"
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"

export class $MagicHoeItem extends $LodestoneHoeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicHoeItem$$Type = ($MagicHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicHoeItem$$Original = $MagicHoeItem;}
declare module "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ILodestoneMultiblockComponent$$Interface} from "team.lodestar.lodestone.systems.multiblock.ILodestoneMultiblockComponent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MultiBlockComponentEntity} from "team.lodestar.lodestone.systems.multiblock.MultiBlockComponentEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockComponentBlock extends $LodestoneEntityBlock<($MultiBlockComponentEntity)> implements $ILodestoneMultiblockComponent$$Interface {
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
export type $MultiblockComponentBlock$$Type = ($MultiblockComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockComponentBlock$$Original = $MultiblockComponentBlock;}
declare module "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"

export class $WaterLoggedEntityBlock<T extends $LodestoneBlockEntity> extends $LodestoneEntityBlock<(T)> implements $SimpleWaterloggedBlock$$Interface {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
export type $WaterLoggedEntityBlock$$Type<T> = ($WaterLoggedEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterLoggedEntityBlock$$Original<T> = $WaterLoggedEntityBlock<(T)>;}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventType$EventInstanceSupplier" {
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export interface $WorldEventType$EventInstanceSupplier$$Interface<T extends $WorldEventInstance> {

(): T
get "instance"(): T
}

export class $WorldEventType$EventInstanceSupplier<T extends $WorldEventInstance> implements $WorldEventType$EventInstanceSupplier$$Interface {
 "getInstance"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventType$EventInstanceSupplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventType$EventInstanceSupplier$$Original<T> = $WorldEventType$EventInstanceSupplier<(T)>;}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockComponentEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockComponentEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "corePos": $BlockPos

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onUseWithoutItem"(arg0: $Player$$Type): $InteractionResult
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockComponentEntity$$Type = ($MultiBlockComponentEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBlockComponentEntity$$Original = $MultiBlockComponentEntity;}
declare module "team.lodestar.lodestone.systems.blockentity.ItemHolderBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemHolderBlockEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolderBlockEntity$$Type = ($ItemHolderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemHolderBlockEntity$$Original = $ItemHolderBlockEntity;}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicPickaxeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LodestonePickaxeItem} from "team.lodestar.lodestone.systems.item.tools.LodestonePickaxeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicPickaxeItem extends $LodestonePickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPickaxeItem$$Type = ($MagicPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicPickaxeItem$$Original = $MagicPickaxeItem;}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderLayer" {
import {$ArrayList} from "java.util.ArrayList"
import {$Collection} from "java.util.Collection"
import {$PlacementCondition$$Type} from "team.lodestar.lodestone.systems.worldgen.PlacementCondition"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AdditionalPlacement$$Type} from "team.lodestar.lodestone.systems.worldgen.AdditionalPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LodestoneWorldgenBuilderEntry, $LodestoneWorldgenBuilderEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderEntry"

export class $LodestoneWorldgenBuilderLayer {
constructor()

public "remove"(arg0: $BlockPos$$Type): $LodestoneWorldgenBuilderLayer
public "get"(arg0: $BlockPos$$Type): $LodestoneWorldgenBuilderEntry
public "add"(arg0: $BlockPos$$Type, arg1: $Block$$Type): $LodestoneWorldgenBuilderEntry
public "add"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $LodestoneWorldgenBuilderEntry
public "add"(arg0: $BlockPos$$Type, arg1: $LodestoneWorldgenBuilderEntry$$Type): $LodestoneWorldgenBuilderLayer
public "merge"(arg0: $LodestoneWorldgenBuilderLayer$$Type): $LodestoneWorldgenBuilderLayer
public "containsKey"(arg0: $BlockPos$$Type): boolean
public "getEntries"(): $Collection<($LodestoneWorldgenBuilderEntry)>
public "getOrderedEntries"(): $ArrayList<($LodestoneWorldgenBuilderEntry)>
public "getRandomEntries"(arg0: integer): $ArrayList<($LodestoneWorldgenBuilderEntry)>
public "getAffectedArea"(): $ArrayList<($BlockPos)>
public "addPlacementCondition"(arg0: $PlacementCondition$$Type): $LodestoneWorldgenBuilderLayer
public "addAdditionalPlacement"(arg0: $AdditionalPlacement$$Type): $LodestoneWorldgenBuilderLayer
get "entries"(): $Collection<($LodestoneWorldgenBuilderEntry)>
get "orderedEntries"(): $ArrayList<($LodestoneWorldgenBuilderEntry)>
get "affectedArea"(): $ArrayList<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldgenBuilderLayer$$Type = ($LodestoneWorldgenBuilderLayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneWorldgenBuilderLayer$$Original = $LodestoneWorldgenBuilderLayer;}
declare module "team.lodestar.lodestone.systems.rendering.buffer.LodestoneBufferSource" {
import {$Collection} from "java.util.Collection"
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$LodestoneRenderTypeBuilder$$Type} from "team.lodestar.lodestone.systems.rendering.rendeertype.LodestoneRenderTypeBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $LodestoneBufferSource extends $MultiBufferSource$BufferSource {
readonly "fixedBuffers": $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "sharedBuffer": $ByteBufferBuilder

public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "getBuffer"(arg0: $LodestoneRenderTypeBuilder$$Type): $VertexConsumer
public "endBatch"(arg0: $RenderType$$Type): void
public "endBatches"(arg0: boolean): void
public "getAdditives"(): $Collection<($RenderType)>
public "getNonAdditives"(): $Collection<($RenderType)>
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "additives"(): $Collection<($RenderType)>
get "nonAdditives"(): $Collection<($RenderType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBufferSource$$Type = ($LodestoneBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBufferSource$$Original = $LodestoneBufferSource;}
declare module "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory" {
import {$ArrayList} from "java.util.ArrayList"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $LodestoneBlockEntityInventory extends $ItemStackHandler {
 "contentsChangeBehavior": $Runnable
readonly "allowedItemSize": integer
 "blockEntity": $LodestoneBlockEntity
readonly "slotCount": integer
 "autoSync": boolean
 "nonEmptyItemStacks": $ArrayList<($ItemStack)>
 "inputPredicate": $Predicate<($ItemStack)>

constructor(arg0: $LodestoneBlockEntity$$Type, arg1: integer, arg2: integer)

public "getStacks"(): $NonNullList<($ItemStack)>
public "load"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "load"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "interact"(arg0: $ServerLevel$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $ItemStack
public "getFilledSlotCount"(): integer
public "getNonEmptyStacks"(): $ArrayList<($ItemStack)>
public "onContentsChanged"(arg0: integer): void
public "onContentsChanged"(arg0: $Runnable$$Type): $LodestoneBlockEntityInventory
public "giveItemToPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "extractItem"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: $ItemStack$$Type): $ItemStack
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "hasEmptySlots"(): boolean
public "setInputPredicate"(arg0: $Predicate$$Type<($ItemStack)>): $LodestoneBlockEntityInventory
public "getEmptySlotCount"(): integer
public "takeItemFromPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
public "triggerBlockEntityUpdate"(): $LodestoneBlockEntityInventory
public "getFirstEmptyItemIndex"(): integer
public "dumpItems"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
public "dumpItems"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "updateInventoryCaches"(): void
public "getSlots"(): integer
get "stacks"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
get "filledSlotCount"(): integer
get "nonEmptyStacks"(): $ArrayList<($ItemStack)>
get "emptySlotCount"(): integer
get "firstEmptyItemIndex"(): integer
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntityInventory$$Type = ($LodestoneBlockEntityInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneBlockEntityInventory$$Original = $LodestoneBlockEntityInventory;}
declare module "team.lodestar.lodestone.systems.particle.data.GenericParticleData" {
import {$GenericParticleDataWrapper$$Interface} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataWrapper"
import {$GenericParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder"
import {$Easing} from "team.lodestar.lodestone.systems.easing.Easing"

export class $GenericParticleData implements $GenericParticleDataWrapper$$Interface {
readonly "endingValue": float
readonly "startingCurve": $Easing
 "valueMultiplier": float
 "coefficientMultiplier": float
readonly "middleValue": float
readonly "coefficient": float
readonly "startingValue": float
readonly "endingCurve": $Easing

public "lock"(): $GenericParticleData
public "getValue"(arg0: float, arg1: float): float
public "copy"(): $GenericParticleData
public static "create"(arg0: float, arg1: float): $GenericParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $GenericParticleDataBuilder
public static "create"(arg0: float): $GenericParticleDataBuilder
public "unwrap"(): $GenericParticleData
public "bake"(): $GenericParticleData
public "isTrinary"(): boolean
public "getProgress"(arg0: float, arg1: float): float
public "multiplyCoefficient"(arg0: float): $GenericParticleData
public static "constrictTransparency"(arg0: $GenericParticleData$$Type): $GenericParticleData
public "overrideValueMultiplier"(arg0: float): $GenericParticleData
public "overrideCoefficientMultiplier"(arg0: float): $GenericParticleData
public "getValueMultiplier"(): float
public "getCoefficient"(): float
public "multiplyValue"(arg0: float): $GenericParticleData
get "trinary"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleData$$Type = ($GenericParticleData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericParticleData$$Original = $GenericParticleData;}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArrayList} from "java.util.ArrayList"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IMultiBlockCore$$Interface} from "team.lodestar.lodestone.systems.multiblock.IMultiBlockCore"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockCoreEntity extends $LodestoneBlockEntity implements $IMultiBlockCore$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getStructure"(): $MultiBlockStructure
public "onBreak"(arg0: $Player$$Type): void
public "getComponentPositions"(): $ArrayList<($BlockPos)>
public "setupMultiblock"(arg0: $BlockPos$$Type): void
public "destroyMultiblock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "isModular"(): boolean
public "getUpdatePacket"(): $Packet
get "componentPositions"(): $ArrayList<($BlockPos)>
set "upMultiblock"(value: $BlockPos$$Type)
get "modular"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockCoreEntity$$Type = ($MultiBlockCoreEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBlockCoreEntity$$Original = $MultiBlockCoreEntity;}
declare module "team.lodestar.lodestone.systems.rendering.rendeertype.ShaderUniformHandler" {
import {$ConcurrentHashMap} from "java.util.concurrent.ConcurrentHashMap"
import {$ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ShaderUniformHandler {
readonly "uniformChanges": $ConcurrentHashMap<(StringJS), ((float)[])>
readonly "samplerChanges": $ConcurrentHashMap<(StringJS), (integer)>
static readonly "LUMITRANSPARENT": $ShaderUniformHandler
static readonly "LUMITRANSPARENT_DEPTH_FADE": $ShaderUniformHandler
static readonly "DEPTH_FADE": $ShaderUniformHandler

constructor()
constructor(arg0: $ShaderUniformHandler$$Type)

public "lock"(): $ShaderUniformHandler
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "accept"(arg0: $Consumer$$Type<($ShaderUniformHandler)>): $ShaderUniformHandler
public "withDepthFade"(): $ShaderUniformHandler
public "withDepthFade"(arg0: float): $ShaderUniformHandler
public "updateShaderData"(arg0: $ShaderInstance$$Type): void
public "setSamplerTexture"(arg0: StringJS, arg1: integer): $ShaderUniformHandler
public "modifyUniform"(arg0: StringJS, ...arg1: (float)[]): $ShaderUniformHandler
public "withLumiTransparency"(): $ShaderUniformHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderUniformHandler$$Type = ($ShaderUniformHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderUniformHandler$$Original = $ShaderUniformHandler;}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockItem" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $MultiBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "structure": $Supplier<($MultiBlockStructure)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Supplier$$Type<($MultiBlockStructure$$Type)>)

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
export type $MultiBlockItem$$Type = ($MultiBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBlockItem$$Original = $MultiBlockItem;}
declare module "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram" {
import {$GlslPreprocessor$$Type} from "com.mojang.blaze3d.preprocessor.GlslPreprocessor"
import {$Shader$$Type} from "com.mojang.blaze3d.shaders.Shader"
import {$LodestoneProgram$Type$$Type} from "team.lodestar.lodestone.systems.rendering.shader.LodestoneProgram$Type"
import {$InputStream$$Type} from "java.io.InputStream"

export class $LodestoneProgram {
public "getName"(): StringJS
public "close"(): void
public static "compileShader"(arg0: $LodestoneProgram$Type$$Type, arg1: StringJS, arg2: $InputStream$$Type, arg3: StringJS, arg4: $GlslPreprocessor$$Type): $LodestoneProgram
public "attachToShader"(arg0: $Shader$$Type): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneProgram$$Type = ($LodestoneProgram);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneProgram$$Original = $LodestoneProgram;}
declare module "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior" {
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$$Type} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"

export interface $LodestoneParticleBehavior$$Interface {

(arg0: $LodestoneWorldParticle, arg1: $VertexConsumer, arg2: $Camera, arg3: float): void
}

export class $LodestoneParticleBehavior implements $LodestoneParticleBehavior$$Interface {
 "tick"(arg0: $LodestoneWorldParticle$$Type): void
 "render"(arg0: $LodestoneWorldParticle$$Type, arg1: $VertexConsumer$$Type, arg2: $Camera$$Type, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneParticleBehavior$$Type = ((arg0: $LodestoneWorldParticle, arg1: $VertexConsumer, arg2: $Camera, arg3: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneParticleBehavior$$Original = $LodestoneParticleBehavior;}
declare module "team.lodestar.lodestone.systems.block.sign.LodestoneStandingSignBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$StandingSignBlock} from "net.minecraft.world.level.block.StandingSignBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneStandingSignBlock extends $StandingSignBlock implements $EntityBlock$$Interface {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StandingSignBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneStandingSignBlock$$Type = ($LodestoneStandingSignBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneStandingSignBlock$$Original = $LodestoneStandingSignBlock;}
declare module "team.lodestar.lodestone.systems.item.LodestoneFuelBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $LodestoneFuelBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "fuel": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
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
export type $LodestoneFuelBlockItem$$Type = ($LodestoneFuelBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneFuelBlockItem$$Original = $LodestoneFuelBlockItem;}
declare module "team.lodestar.lodestone.systems.attribute.LodestoneRangedAttribute" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LodestoneAttributeBuilder} from "team.lodestar.lodestone.systems.attribute.LodestoneAttributeBuilder"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$RangedAttribute} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"

export class $LodestoneRangedAttribute extends $RangedAttribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>

public static "create"(arg0: $ResourceLocation$$Type, arg1: double, arg2: double, arg3: double): $LodestoneAttributeBuilder
public "getBaseId"(): $ResourceLocation
public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
get "baseId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRangedAttribute$$Type = ($LodestoneRangedAttribute);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneRangedAttribute$$Original = $LodestoneRangedAttribute;}
declare module "team.lodestar.lodestone.systems.particle.data.GenericParticleDataWrapper" {
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"

export interface $GenericParticleDataWrapper$$Interface {

(): $GenericParticleData$$Type
}

export class $GenericParticleDataWrapper implements $GenericParticleDataWrapper$$Interface {
 "unwrap"(): $GenericParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleDataWrapper$$Type = (() => $GenericParticleData$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericParticleDataWrapper$$Original = $GenericParticleDataWrapper;}
declare module "team.lodestar.lodestone.systems.particle.world.options.LodestoneTerrainParticleOptions" {
import {$Collection} from "java.util.Collection"
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$LodestoneRenderLayer} from "team.lodestar.lodestone.systems.rendering.buffer.LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleSpritePicker} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$WorldParticleOptions} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$SpinParticleData} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$Consumer} from "java.util.function.Consumer"
import {$Float2FloatFunction} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Int2IntFunction} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$LodestoneTerrainParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneTerrainParticleType"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LodestoneWorldParticle} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $LodestoneTerrainParticleOptions extends $WorldParticleOptions {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "blockState": $BlockState
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "type": $ParticleType<(never)>
 "gravitySupplier": $Supplier<(float)>
 "lifetimeModifier": $Int2IntFunction
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "frictionModifier": $Float2FloatFunction
 "scaleData": $GenericParticleData
 "frictionSupplier": $Supplier<(float)>
readonly "blockPos": $BlockPos
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "transparencyData": $GenericParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "gravityModifier": $Float2FloatFunction
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $LodestoneRenderLayer
 "lifeDelayModifier": $Int2IntFunction
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $Supplier$$Type<($LodestoneTerrainParticleType$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $ParticleType$$Type<($LodestoneTerrainParticleOptions$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $Supplier$$Type<($LodestoneTerrainParticleType$$Type)>, arg1: $BlockState$$Type, arg2: $BlockPos$$Type)
constructor(arg0: $ParticleType$$Type<($LodestoneTerrainParticleOptions$$Type)>, arg1: $BlockState$$Type, arg2: $BlockPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleOptions$$Type = ($LodestoneTerrainParticleOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneTerrainParticleOptions$$Original = $LodestoneTerrainParticleOptions;}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $LodestoneInWorldRecipe<T extends $RecipeInput> implements $Recipe$$Interface<(T)> {
readonly "output": $ItemStack

constructor(arg0: $RecipeSerializer$$Type<(never)>, arg1: $RecipeType$$Type<(never)>, arg2: $ItemStack$$Type)
constructor(arg0: $RecipeSerializer$$Type<(never)>, arg1: $RecipeType$$Type<(never)>)

public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "matches"(arg0: T, arg1: $Level$$Type): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
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
export type $LodestoneInWorldRecipe$$Type<T> = ($LodestoneInWorldRecipe<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneInWorldRecipe$$Original<T> = $LodestoneInWorldRecipe<(T)>;}
declare module "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions" {
import {$Collection} from "java.util.Collection"
import {$ParticleRenderType} from "net.minecraft.client.particle.ParticleRenderType"
import {$LodestoneWorldParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneWorldParticleType"
import {$LodestoneRenderLayer} from "team.lodestar.lodestone.systems.rendering.buffer.LodestoneRenderLayer"
import {$SimpleParticleOptions$ParticleSpritePicker} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$SpinParticleData} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$Consumer} from "java.util.function.Consumer"
import {$Float2FloatFunction} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Int2IntFunction} from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$GenericParticleData} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$$Type} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$LodestoneWorldParticle} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$SimpleParticleOptions} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $WorldParticleOptions extends $SimpleParticleOptions implements $ParticleOptions$$Interface {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "type": $ParticleType<(never)>
 "gravitySupplier": $Supplier<(float)>
 "lifetimeModifier": $Int2IntFunction
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "frictionModifier": $Float2FloatFunction
 "scaleData": $GenericParticleData
 "frictionSupplier": $Supplier<(float)>
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "transparencyData": $GenericParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "gravityModifier": $Float2FloatFunction
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $LodestoneRenderLayer
 "lifeDelayModifier": $Int2IntFunction
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $ParticleType$$Type<(never)>)
constructor(arg0: $Supplier$$Type<($LodestoneWorldParticleType$$Type)>)

public "getType"(): $ParticleType<(never)>
public "setBehavior"(arg0: $LodestoneParticleBehavior$$Type): $WorldParticleOptions
public "setBehaviorIfDefault"(arg0: $LodestoneParticleBehavior$$Type): $WorldParticleOptions
set "behaviorIfDefault"(value: $LodestoneParticleBehavior$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldParticleOptions$$Type = ($WorldParticleOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldParticleOptions$$Original = $WorldParticleOptions;}
declare module "team.lodestar.lodestone.systems.item.LodestoneFuelItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $LodestoneFuelItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "fuel": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneFuelItem$$Type = ($LodestoneFuelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneFuelItem$$Original = $LodestoneFuelItem;}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventRenderer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export class $WorldEventRenderer<T extends $WorldEventInstance> {
constructor()

public "render"(arg0: T, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float): void
public "canRender"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventRenderer$$Type<T> = ($WorldEventRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldEventRenderer$$Original<T> = $WorldEventRenderer<(T)>;}
