declare module "com.sammy.malum.common.block.curiosities.totem.unweaver.RiteUnweaverBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RiteUnweaverBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.unweaver.RiteUnweaverBlockEntity"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RiteUnweaverBlock extends $LodestoneEntityBlock<($RiteUnweaverBlockEntity)> {
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
export type $RiteUnweaverBlock$$Type = ($RiteUnweaverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteUnweaverBlock$$Original = $RiteUnweaverBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioEchoingArcanaRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioEchoingArcanaRing extends $MalumCurioItem implements $IVoidItem$$Interface, $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioEchoingArcanaRing$$Type = ($CurioEchoingArcanaRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioEchoingArcanaRing$$Original = $CurioEchoingArcanaRing;}
declare module "com.sammy.malum.common.block.curiosities.totem.anchor.RiteAnchorBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RiteAnchorBlockEntity$AimState} from "com.sammy.malum.common.block.curiosities.totem.anchor.RiteAnchorBlockEntity$AimState"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockRiteEffectActivatorEntity, $BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer} from "java.util.function.Consumer"
import {$HashMap} from "java.util.HashMap"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RiteSparkInteractable$$Interface} from "com.sammy.malum.common.block.curiosities.totem.RiteSparkInteractable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RiteAnchorBlockEntity extends $LodestoneBlockEntity implements $RiteSparkInteractable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($RiteAnchorBlockEntity$AimState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "EFFECTS": $HashMap<($Holder<($SpiritArcanaType)>), ($Consumer<($BlockRiteEffectActivatorEntity)>)>

constructor(arg0: $BlockEntityType$$Type<($RiteAnchorBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getGlowDelta"(): float
public "commonTick"(arg0: $Level$$Type): void
public "travel"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "getSpirit"(): $SpiritArcanaType
public "setSpirit"(arg0: $ServerLevel$$Type, arg1: $Player$$Type, arg2: $SpiritArcanaType$$Type): void
public "updateAimDirection"(arg0: $ServerLevel$$Type, arg1: $Player$$Type): boolean
public "getAimDirection"(): $RiteAnchorBlockEntity$AimState
public "getUpdatePacket"(): $Packet
get "glowDelta"(): float
get "spirit"(): $SpiritArcanaType
get "aimDirection"(): $RiteAnchorBlockEntity$AimState
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteAnchorBlockEntity$$Type = ($RiteAnchorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteAnchorBlockEntity$$Original = $RiteAnchorBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.alchemical.CurioProwessRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioProwessRing extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioProwessRing$$Type = ($CurioProwessRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioProwessRing$$Original = $CurioProwessRing;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ObeliskCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ObeliskCoreBlock<T extends $ObeliskCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskCoreBlock$$Type<T> = ($ObeliskCoreBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObeliskCoreBlock$$Original<T> = $ObeliskCoreBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.tools.spellweaver.SpellweavingAxeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$MagicAxeItem} from "team.lodestar.lodestone.systems.item.tools.magic.MagicAxeItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ISpellweavingTool$$Interface} from "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ISpellweavingTool$Mode} from "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool$Mode"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SpellweavingAxeItem extends $MagicAxeItem implements $ISpiritAffiliatedItem$$Interface, $ISpellweavingTool$$Interface {
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

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMode"(): $ISpellweavingTool$Mode
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getDefiningSpiritType"(): $SpiritLike
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "mode"(): $ISpellweavingTool$Mode
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellweavingAxeItem$$Type = ($SpellweavingAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellweavingAxeItem$$Original = $SpellweavingAxeItem;}
declare module "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator$AltarAcceleratorType" {
import {$Record} from "java.lang.Record"

export class $IAltarAccelerator$AltarAcceleratorType extends $Record {
constructor(maximumEntries: integer, type: StringJS)

public "type"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "maximumEntries"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAltarAccelerator$AltarAcceleratorType$$Type = ({"type"?: StringJS, "maximumEntries"?: integer}) | ([type?: StringJS, maximumEntries?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAltarAccelerator$AltarAcceleratorType$$Original = $IAltarAccelerator$AltarAcceleratorType;}
declare module "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$SpiritAltarBlockEntity} from "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritAltarBlock<T extends $SpiritAltarBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "RENDER_SHAPE": $VoxelShape
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "makeRenderShape"(): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAltarBlock$$Type<T> = ($SpiritAltarBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritAltarBlock$$Original<T> = $SpiritAltarBlock<(T)>;}
declare module "com.sammy.malum.common.block.SpiritedGlassBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Item} from "net.minecraft.world.item.Item"
import {$TransparentBlock} from "net.minecraft.world.level.block.TransparentBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritedGlassBlock extends $TransparentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TransparentBlock)>
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

public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritedGlassBlock$$Type = ($SpiritedGlassBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritedGlassBlock$$Original = $SpiritedGlassBlock;}
declare module "com.sammy.malum.common.item.curiosities.weapons.SunderingAnchorItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$List} from "java.util.List"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Tool} from "net.minecraft.world.item.component.Tool"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LodestoneCombatItem} from "team.lodestar.lodestone.systems.item.LodestoneCombatItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $SunderingAnchorItem extends $LodestoneCombatItem implements $IMalumEventResponder$$Interface, $ISpiritAffiliatedItem$$Interface {
static readonly "SPIRITS": $List<($SpiritLike)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: $LodestoneItemProperties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public static "createToolProperties"(arg0: $Tier$$Type, arg1: $TagKey$$Type<($Block)>): $Tool
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public static "applyCooldown"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: float): void
public static "applyCooldown"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public static "applyHatred"(arg0: $LivingEntity$$Type): void
public static "getSunderingAnchorSpirit"(): $SpiritLike
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getProjectileSpawnPos"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type, arg2: float, arg3: float): $Vec3
public "getDefiningSpiritType"(): $SpiritLike
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "sunderingAnchorSpirit"(): $SpiritLike
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunderingAnchorItem$$Type = ($SunderingAnchorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SunderingAnchorItem$$Original = $SunderingAnchorItem;}
declare module "com.sammy.malum.common.effect.rite.aura.HowlingGaleEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HowlingGaleEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HowlingGaleEffect$$Type = ($HowlingGaleEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HowlingGaleEffect$$Original = $HowlingGaleEffect;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.encasement.WeepingWellBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WeepingWellBlock extends $Block {
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellBlock$$Type = ($WeepingWellBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeepingWellBlock$$Original = $WeepingWellBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.brooches.CurioRunicBrooch" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioRunicBrooch extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "RUNIC_BROOCH_RUNE": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "RUNIC_BROOCH_RING": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRunicBrooch$$Type = ($CurioRunicBrooch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioRunicBrooch$$Original = $CurioRunicBrooch;}
declare module "com.sammy.malum.common.block.ether.EtherTorchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EtherBlock} from "com.sammy.malum.common.block.ether.EtherBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EtherBlockEntity} from "com.sammy.malum.common.block.ether.EtherBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtherTorchBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherTorchBlock$$Type<T> = ($EtherTorchBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherTorchBlock$$Original<T> = $EtherTorchBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.pouch.MalumPouchItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$MalumPouchContentsComponent, $MalumPouchContentsComponent$$Type} from "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MalumPouchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getContents"(arg0: $ItemStack$$Type): $MalumPouchContentsComponent
public "emptyContents"(): $MalumPouchContentsComponent
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "playRemoveOneSound"(arg0: $Entity$$Type): void
public "playInsertSound"(arg0: $Entity$$Type): void
public "playDropContentsSound"(arg0: $Entity$$Type): void
public "setContents"(arg0: $ItemStack$$Type, arg1: $MalumPouchContentsComponent$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumPouchItem$$Type = ($MalumPouchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumPouchItem$$Original = $MalumPouchItem;}
declare module "com.sammy.malum.common.item.ether.EtherBrazierItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EtherItem} from "com.sammy.malum.common.item.ether.EtherItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$DyedItemColor} from "net.minecraft.world.item.component.DyedItemColor"

export class $EtherBrazierItem extends $EtherItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "DEFAULT_FIRST_COLOR": $DyedItemColor
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_SECOND_COLOR": $DyedItemColor
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: boolean)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
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
export type $EtherBrazierItem$$Type = ($EtherBrazierItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherBrazierItem$$Original = $EtherBrazierItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneBolsteringItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneBolsteringItem extends $MadnessRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneBolsteringItem$$Type = ($RuneBolsteringItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneBolsteringItem$$Original = $RuneBolsteringItem;}
declare module "com.sammy.malum.common.block.storage.stand.ItemStandBlockEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MalumItemHolderBlockEntity} from "com.sammy.malum.common.block.storage.MalumItemHolderBlockEntity"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemStandBlockEntity extends $MalumItemHolderBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<($ItemStandBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getItemOffset"(arg0: float): $Vec3
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStandBlockEntity$$Type = ($ItemStandBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStandBlockEntity$$Original = $ItemStandBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonCoreBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$SpiritRepairRecipe, $SpiritRepairRecipe$$Type} from "com.sammy.malum.common.recipe.spirit_repair.SpiritRepairRecipe"
import {$RepairPylonCoreBlockEntity$RepairPylonState, $RepairPylonCoreBlockEntity$RepairPylonState$$Type} from "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonCoreBlockEntity$RepairPylonState"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMalumSpecialItemAccessPoint$$Type} from "com.sammy.malum.common.block.storage.IMalumSpecialItemAccessPoint"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MultiBlockCoreEntity} from "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"

export class $RepairPylonCoreBlockEntity extends $MultiBlockCoreEntity implements $IItemHandlerSupplier$$Interface {
 "repairTargetPosition": $BlockPos
 "timer": integer
 "spiritInventory": $LodestoneBlockEntityInventory
static readonly "CODEC": $StringRepresentable$EnumCodec<($RepairPylonCoreBlockEntity$RepairPylonState)>
 "spiritSpin": float
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
 "recipe": $SpiritRepairRecipe
 "spiritAmount": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "state": $RepairPylonCoreBlockEntity$RepairPylonState
 "inventory": $LodestoneBlockEntityInventory
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockEntityType$$Type<($RepairPylonCoreBlockEntity$$Type)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "setState"(arg0: $RepairPylonCoreBlockEntity$RepairPylonState$$Type): void
public "clientTick"(arg0: $Level$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateRecipe"(): $SpiritRepairRecipe
public "updateRecipe"(arg0: $Predicate$$Type<($SpiritRepairRecipe)>): $SpiritRepairRecipe
public "updateRecipe"(arg0: $ItemStack$$Type): $SpiritRepairRecipe
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "completeRepair"(arg0: $ServerLevel$$Type, arg1: $IMalumSpecialItemAccessPoint$$Type): void
public "beginRepair"(arg0: $ServerLevel$$Type, arg1: $IMalumSpecialItemAccessPoint$$Type): void
public "commonTick"(arg0: $Level$$Type): void
public "serverTick"(arg0: $ServerLevel$$Type): void
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getItemPos"(): $Vec3
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "getCentralItemOffset"(): $Vec3
public "searchForRepairTarget"(): boolean
public "isRepairTargetValid"(arg0: $IMalumSpecialItemAccessPoint$$Type): boolean
public "getUpdatePacket"(): $Packet
get "itemPos"(): $Vec3
get "centralItemOffset"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonCoreBlockEntity$$Type = ($RepairPylonCoreBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairPylonCoreBlockEntity$$Original = $RepairPylonCoreBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.weapons.staff.ErosionScepterItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Color} from "java.awt.Color"
import {$AbstractStaffItem} from "com.sammy.malum.common.item.curiosities.weapons.staff.AbstractStaffItem"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $ErosionScepterItem extends $AbstractStaffItem implements $ISpiritAffiliatedItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MALIGNANT_PURPLE": $Color
static readonly "MALIGNANT_BLACK": $Color
static readonly "SCEPTER_COLOR_DATA": $ColorParticleData
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: integer, arg4: $LodestoneItemProperties$$Type)

public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "getProjectileCount"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: float): integer
public "fireProjectile"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: integer): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "spawnChargeParticles"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: $ItemStack$$Type, arg4: float): void
public "getDefiningSpiritType"(): $SpiritLike
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErosionScepterItem$$Type = ($ErosionScepterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ErosionScepterItem$$Original = $ErosionScepterItem;}
declare module "com.sammy.malum.common.item.augment.BlazingDiodeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $BlazingDiodeItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazingDiodeItem$$Type = ($BlazingDiodeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlazingDiodeItem$$Original = $BlazingDiodeItem;}
declare module "com.sammy.malum.common.effect.rite.aura.StoneWardEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $StoneWardEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "reduceDamage"(arg0: $LivingDamageEvent$Pre$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneWardEffect$$Type = ($StoneWardEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoneWardEffect$$Original = $StoneWardEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneSpellMasteryItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneSpellMasteryItem extends $MadnessRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneSpellMasteryItem$$Type = ($RuneSpellMasteryItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneSpellMasteryItem$$Original = $RuneSpellMasteryItem;}
declare module "com.sammy.malum.common.block.nature.MalumSaplingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$TreeGrower$$Type} from "net.minecraft.world.level.block.grower.TreeGrower"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SaplingBlock} from "net.minecraft.world.level.block.SaplingBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MalumSaplingBlock extends $SaplingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SaplingBlock)>
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $TreeGrower$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumSaplingBlock$$Type = ($MalumSaplingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumSaplingBlock$$Original = $MalumSaplingBlock;}
declare module "com.sammy.malum.common.block.curiosities.soul_brazier.SoulBrazierBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoulBindingRecipe} from "com.sammy.malum.common.recipe.SoulBindingRecipe"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$SoulBrazierBlockEntity$BrazierState, $SoulBrazierBlockEntity$BrazierState$$Type} from "com.sammy.malum.common.block.curiosities.soul_brazier.SoulBrazierBlockEntity$BrazierState"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"

export class $SoulBrazierBlockEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier$$Interface {
 "warmupTimer": float
 "spiritInventory": $LodestoneBlockEntityInventory
static readonly "CODEC": $StringRepresentable$EnumCodec<($SoulBrazierBlockEntity$BrazierState)>
 "exposedInventory": $Supplier<($IItemHandler)>
 "isReady": boolean
 "sacrificedTargets": $List<($UUID)>
 "recipe": $SoulBindingRecipe
 "spiritAmount": float
static readonly "BRAZIER_ITEM_OFFSET": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory
static readonly "BRAZIER_GEAS_ICON_OFFSET": $Vec3
 "extrasAmount": float
 "spiritSpin": float
 "progress": integer
 "state": $SoulBrazierBlockEntity$BrazierState
 "extrasSpin": float

constructor(arg0: $BlockEntityType$$Type<($SoulBrazierBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "clientTick"(arg0: $Level$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateRecipe"(): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "commonTick"(arg0: $Level$$Type): void
public "isIdle"(): boolean
public "serverTick"(arg0: $ServerLevel$$Type): void
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "addSacrifice"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
public "getExtrasOffset"(arg0: integer, arg1: float): $Vec3
public "attemptSoulbinding"(arg0: $ServerLevel$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
public "getSpiritOffset"(arg0: integer, arg1: float): $Vec3
public "beginSoulbinding"(arg0: $ServerLevel$$Type, arg1: $SoulBrazierBlockEntity$BrazierState$$Type): void
public "completeSoulBinding"(arg0: $ServerLevel$$Type, arg1: $List$$Type<($LivingEntity$$Type)>): void
public "getItemPos"(): $Vec3
public "getSpinUp"(arg0: $Easing$$Type): float
public "getUpdatePacket"(): $Packet
get "active"(): boolean
get "idle"(): boolean
get "itemPos"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBrazierBlockEntity$$Type = ($SoulBrazierBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBrazierBlockEntity$$Original = $SoulBrazierBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.banner.SoulwovenBannerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SoulwovenBannerBlock$BannerType} from "com.sammy.malum.common.block.curiosities.banner.SoulwovenBannerBlock$BannerType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SoulwovenBannerBlockEntity} from "com.sammy.malum.common.block.curiosities.banner.SoulwovenBannerBlockEntity"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulwovenBannerBlock extends $LodestoneEntityBlock<($SoulwovenBannerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "BANNER_TYPE": $EnumProperty<($SoulwovenBannerBlock$BannerType)>
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

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwovenBannerBlock$$Type = ($SoulwovenBannerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenBannerBlock$$Original = $SoulwovenBannerBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneStoneWard" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneStoneWard extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneStoneWard$$Type = ($RuneStoneWard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneStoneWard$$Original = $RuneStoneWard;}
declare module "com.sammy.malum.common.block.curiosities.mana_mote.ManaMoteBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SpiritTypeProperty} from "com.sammy.malum.core.systems.spirit.SpiritTypeProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ManaMoteBlockEntity} from "com.sammy.malum.common.block.curiosities.mana_mote.ManaMoteBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ManaMoteBlock extends $LodestoneEntityBlock<($ManaMoteBlockEntity)> {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "SPIRIT_TYPE": $SpiritTypeProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDirectionProperty"(arg0: $Direction$$Type): $BooleanProperty
public static "createManaMoteState"(arg0: $BlockState$$Type, arg1: $SpiritLike$$Type): $BlockState
public static "isOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaMoteBlock$$Type = ($ManaMoteBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManaMoteBlock$$Original = $ManaMoteBlock;}
declare module "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool$Mode" {
import {$Enum} from "java.lang.Enum"

export class $ISpellweavingTool$Mode extends $Enum<($ISpellweavingTool$Mode)> {
static readonly "NEAREST": $ISpellweavingTool$Mode
static readonly "FURTHEST": $ISpellweavingTool$Mode

public static "values"(): ($ISpellweavingTool$Mode)[]
public static "valueOf"(arg0: StringJS): $ISpellweavingTool$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellweavingTool$Mode$$Type = (("nearest") | ("furthest"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellweavingTool$Mode$$Original = $ISpellweavingTool$Mode;}
declare module "com.sammy.malum.common.block.storage.IMalumSpecialItemAccessPoint" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $IMalumSpecialItemAccessPoint$$Interface {
get "itemPos"(): $Vec3
get "suppliedInventory"(): $LodestoneBlockEntityInventory
get "accessPointBlockPos"(): $BlockPos
}

export class $IMalumSpecialItemAccessPoint implements $IMalumSpecialItemAccessPoint$$Interface {
 "getItemPos"(arg0: float): $Vec3
 "getItemPos"(): $Vec3
 "getSuppliedInventory"(): $LodestoneBlockEntityInventory
 "getAccessPointBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMalumSpecialItemAccessPoint$$Type = ($IMalumSpecialItemAccessPoint);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMalumSpecialItemAccessPoint$$Original = $IMalumSpecialItemAccessPoint;}
declare module "com.sammy.malum.common.block.nature.soulwood.SapFilledSoulwoodLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Color$$Type} from "java.awt.Color"
import {$List} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SapFilledLogBlock} from "com.sammy.malum.common.block.nature.SapFilledLogBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $SapFilledSoulwoodLogBlock extends $SapFilledLogBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
readonly "sap": $Supplier<($Item)>
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "sapColor": $List<($ColorParticleData)>
readonly "drained": $Supplier<($Block)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Supplier$$Type<($Item$$Type)>, ...arg3: ($Color$$Type)[])

public "collectSap"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SapFilledSoulwoodLogBlock$$Type = ($SapFilledSoulwoodLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SapFilledSoulwoodLogBlock$$Original = $SapFilledSoulwoodLogBlock;}
declare module "com.sammy.malum.common.effect.HatredEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HatredEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatredEffect$$Type = ($HatredEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatredEffect$$Original = $HatredEffect;}
declare module "com.sammy.malum.common.item.curiosities.weapons.TyrvingItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$LodestoneSwordItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneSwordItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $TyrvingItem extends $LodestoneSwordItem implements $IMalumEventResponder$$Interface, $ISpiritAffiliatedItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getDefiningSpiritType"(): $SpiritLike
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TyrvingItem$$Type = ($TyrvingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TyrvingItem$$Original = $TyrvingItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.prospector.CurioHoarderRing" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $CurioHoarderRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getExplosionPos"(arg0: boolean, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $BlockPos
public static "hasHoarderRing"(arg0: $LivingEntity$$Type): boolean
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHoarderRing$$Type = ($CurioHoarderRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioHoarderRing$$Original = $CurioHoarderRing;}
declare module "com.sammy.malum.common.recipe.spirit_repair.SpiritRepairRegexData" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $SpiritRepairRegexData {
static readonly "CODEC": $Codec<($SpiritRepairRegexData)>
static readonly "EMPTY": $SpiritRepairRegexData

constructor(arg0: StringJS, arg1: StringJS, arg2: $TagKey$$Type<($Item)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "tag"(arg0: StringJS): $SpiritRepairRegexData
public "tagRegex"(): $TagKey<($Item)>
public "withItemId"(arg0: StringJS): $SpiritRepairRegexData
public "withMod"(arg0: StringJS): $SpiritRepairRegexData
public "modIdRegex"(): StringJS
public static "simple"(arg0: StringJS): $SpiritRepairRegexData
public "withTag"(arg0: $TagKey$$Type<($Item)>): $SpiritRepairRegexData
public "modifyRepairInput"(arg0: $List$$Type<($Holder$$Type<($Item$$Type)>)>): $List<($Holder<($Item)>)>
public "itemIdRegex"(): StringJS
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRepairRegexData$$Type = ($SpiritRepairRegexData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRepairRegexData$$Original = $SpiritRepairRegexData;}
declare module "com.sammy.malum.common.item.food.BottledDrinkItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BottledDrinkItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getDrinkingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "drinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottledDrinkItem$$Type = ($BottledDrinkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BottledDrinkItem$$Original = $BottledDrinkItem;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.VoidConduitBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidConduitBlockEntity extends $LodestoneBlockEntity {
 "progress": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "eatenItems": $List<($ItemStack)>
 "reachedStreakGoal": boolean
 "streak": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "clientTick"(arg0: $Level$$Type): void
public "serverTick"(arg0: $ServerLevel$$Type): void
public "acceptItems"(arg0: $ServerLevel$$Type): void
public "processItem"(arg0: $ServerLevel$$Type): void
public "spitOutItem"(arg0: $ItemStack$$Type): void
public "eatGunk"(arg0: $ItemStack$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidConduitBlockEntity$$Type = ($VoidConduitBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidConduitBlockEntity$$Original = $VoidConduitBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.prospector.CurioDemolitionistRing" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioDemolitionistRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "increaseExplosionRadius"(arg0: $LivingEntity$$Type, arg1: float): float
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDemolitionistRing$$Type = ($CurioDemolitionistRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioDemolitionistRing$$Original = $CurioDemolitionistRing;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.wind_tunnel.WindTunnelBlockEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractGustGizmoBlockEntity} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity"
import {$Optional} from "java.util.Optional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$OpenStateBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity$GustGizmoInfo"
import {$GustIgniterBlockEntity, $GustIgniterBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.GustIgniterBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WindTunnelBlockEntity extends $AbstractGustGizmoBlockEntity {
 "closeDelay": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($WindTunnelBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo<($OpenStateBlockEntity)>
public "isActive"(): boolean
public "bind"(arg0: $GustIgniterBlockEntity$$Type): void
public "getTinkeredBlock"(): $OpenStateBlockEntity
public "setInfo"(arg0: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type): void
public "isModified"(): boolean
public "onBreak"(arg0: $Player$$Type): void
public "getTunnelLength"(): integer
public "getIgniter"(): $Optional<($GustIgniterBlockEntity)>
public "canTinker"(): boolean
public "canIgnite"(arg0: $GustIgniterBlockEntity$$Type): boolean
public "findLimit"(arg0: integer): integer
public "unbind"(): void
public "getUpdatePacket"(): $Packet
get "active"(): boolean
get "tinkeredBlock"(): $OpenStateBlockEntity
set "info"(value: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type)
get "modified"(): boolean
get "tunnelLength"(): integer
get "igniter"(): $Optional<($GustIgniterBlockEntity)>
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindTunnelBlockEntity$$Type = ($WindTunnelBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindTunnelBlockEntity$$Original = $WindTunnelBlockEntity;}
declare module "com.sammy.malum.common.item.augment.core.StellarMechanismItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$CoreAugmentItem} from "com.sammy.malum.common.item.augment.core.CoreAugmentItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $StellarMechanismItem extends $CoreAugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StellarMechanismItem$$Type = ($StellarMechanismItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StellarMechanismItem$$Original = $StellarMechanismItem;}
declare module "com.sammy.malum.common.item.ether.EtherTorchItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EtherItem} from "com.sammy.malum.common.item.ether.EtherItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$DyedItemColor} from "net.minecraft.world.item.component.DyedItemColor"

export class $EtherTorchItem extends $EtherItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "DEFAULT_FIRST_COLOR": $DyedItemColor
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_SECOND_COLOR": $DyedItemColor
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type, arg3: boolean)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
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
export type $EtherTorchItem$$Type = ($EtherTorchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherTorchItem$$Original = $EtherTorchItem;}
declare module "com.sammy.malum.common.spiritrite.effect.aqueous.FlowingGraspRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $FlowingGraspRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingGraspRiteEffect$$Type = ($FlowingGraspRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingGraspRiteEffect$$Original = $FlowingGraspRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.encasement.WeepingWellLayeredBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WeepingWellLayeredBlock extends $HorizontalDirectionalBlock {
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
static readonly "LAYER": $IntegerProperty
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellLayeredBlock$$Type = ($WeepingWellLayeredBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeepingWellLayeredBlock$$Original = $WeepingWellLayeredBlock;}
declare module "com.sammy.malum.common.item.curiosities.weapons.staff.HexStaffItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractStaffItem} from "com.sammy.malum.common.item.curiosities.weapons.staff.AbstractStaffItem"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $HexStaffItem extends $AbstractStaffItem implements $ISpiritAffiliatedItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: integer, arg4: $LodestoneItemProperties$$Type)

public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "getProjectileCount"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: float): integer
public "fireProjectile"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: integer): void
public "spawnChargeParticles"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: $ItemStack$$Type, arg4: float): void
public "getDefiningSpiritType"(): $SpiritLike
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexStaffItem$$Type = ($HexStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HexStaffItem$$Original = $HexStaffItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType" {
import {$Enum} from "java.lang.Enum"

export class $AbstractMalumCurioItem$MalumTrinketType extends $Enum<($AbstractMalumCurioItem$MalumTrinketType)> {
static readonly "ORNATE": $AbstractMalumCurioItem$MalumTrinketType
static readonly "TOTEMIC_RUNE": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ROTTEN": $AbstractMalumCurioItem$MalumTrinketType
static readonly "METALLIC": $AbstractMalumCurioItem$MalumTrinketType
static readonly "CLOTH": $AbstractMalumCurioItem$MalumTrinketType
static readonly "GILDED": $AbstractMalumCurioItem$MalumTrinketType
static readonly "VOID": $AbstractMalumCurioItem$MalumTrinketType
static readonly "RUNE": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ALCHEMICAL": $AbstractMalumCurioItem$MalumTrinketType
static readonly "VOID_RUNE": $AbstractMalumCurioItem$MalumTrinketType

public static "values"(): ($AbstractMalumCurioItem$MalumTrinketType)[]
public static "valueOf"(arg0: StringJS): $AbstractMalumCurioItem$MalumTrinketType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumCurioItem$MalumTrinketType$$Type = (("cloth") | ("ornate") | ("gilded") | ("alchemical") | ("rotten") | ("metallic") | ("void") | ("rune") | ("totemic_rune") | ("void_rune"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMalumCurioItem$MalumTrinketType$$Original = $AbstractMalumCurioItem$MalumTrinketType;}
declare module "com.sammy.malum.common.item.curiosities.tools.spellweaver.SpellweavingPickaxeItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$IAttributeExtension$$Type} from "net.neoforged.neoforge.common.extensions.IAttributeExtension"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ISpellweavingTool$$Interface} from "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockEvent$BreakEvent$$Type} from "net.neoforged.neoforge.event.level.BlockEvent$BreakEvent"
import {$ISpellweavingTool$Mode} from "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool$Mode"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MagicPickaxeItem} from "team.lodestar.lodestone.systems.item.tools.magic.MagicPickaxeItem"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpellweavingPickaxeItem extends $MagicPickaxeItem implements $ISpiritAffiliatedItem$$Interface, $ISpellweavingTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BASE_INTERACTION_RANGE": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "matches"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type): boolean
public static "matches"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMode"(): $ISpellweavingTool$Mode
public static "getBaseId"(arg0: $IAttributeExtension$$Type): $ResourceLocation
public static "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: boolean): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "toggleState"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public static "getLociSpeed"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): float
public static "getDirectionOrder"(arg0: $Player$$Type): ($Direction)[]
public static "getSpawnedLoci"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): integer
public static "getStateDisplay"(arg0: $ItemStack$$Type): integer
public "getDefiningSpiritType"(): $SpiritLike
public static "triggerSpellweavingEffect"(arg0: $BlockEvent$BreakEvent$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "mode"(): $ISpellweavingTool$Mode
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellweavingPickaxeItem$$Type = ($SpellweavingPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpellweavingPickaxeItem$$Original = $SpellweavingPickaxeItem;}
declare module "com.sammy.malum.common.entity.MovingEntity" {
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $MovingEntity extends $Entity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
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
 "hurtMarked": boolean
 "invulnerableTime": integer
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
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<(never)>, arg1: $Level$$Type)

public "tick"(): void
public "isPickable"(): boolean
public "lerpMotion"(arg0: double, arg1: double, arg2: double): void
public static "lerpRotation"(arg0: float, arg1: float): float
public "updateRotation"(): void
public "getFriction"(): float
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "pickable"(): boolean
get "friction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingEntity$$Type = ($MovingEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingEntity$$Original = $MovingEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneDexterityItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneDexterityItem extends $MiracleRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getMovementSpeedBonus"(arg0: $LivingEntity$$Type): $AttributeModifier
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneDexterityItem$$Type = ($RuneDexterityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneDexterityItem$$Original = $RuneDexterityItem;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.GustIgniterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AbstractGustGizmoBlock} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$GustIgniterBlockEntity} from "com.sammy.malum.common.block.curiosities.gust_igniter.GustIgniterBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GustIgniterBlock extends $AbstractGustGizmoBlock<($GustIgniterBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public static "activate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GustIgniterBlock$$Type = ($GustIgniterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GustIgniterBlock$$Original = $GustIgniterBlock;}
declare module "com.sammy.malum.common.item.IMalumEventResponder" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export interface $IMalumEventResponder$$Interface extends $ItemEventHandler$IEventResponder$$Interface {
}

export class $IMalumEventResponder implements $IMalumEventResponder$$Interface {
 "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
 "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
 "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
 "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
 "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
 "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
 "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
 "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
 "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMalumEventResponder$$Type = ($IMalumEventResponder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMalumEventResponder$$Original = $IMalumEventResponder;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneAilmentCleansingItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MobEffectEvent$Added$$Type} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Added"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneAilmentCleansingItem extends $MiracleRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "scaleDuration"(arg0: $MobEffectEvent$Added$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneAilmentCleansingItem$$Type = ($RuneAilmentCleansingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneAilmentCleansingItem$$Original = $RuneAilmentCleansingItem;}
declare module "com.sammy.malum.common.spiritrite.effect.wicked.AnimalCullingEffect" {
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$List} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $AnimalCullingEffect extends $SpiritRiteEntityEffect<($Animal)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "getTargetClass"(): $Class<($Animal)>
public "findNearbyTargets"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): $List<($Animal)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): boolean
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
get "targetClass"(): $Class<($Animal)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalCullingEffect$$Type = ($AnimalCullingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalCullingEffect$$Original = $AnimalCullingEffect;}
declare module "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemPedestalBlockEntity} from "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPedestalBlock<T extends $ItemPedestalBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPedestalBlock$$Type<T> = ($ItemPedestalBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPedestalBlock$$Original<T> = $ItemPedestalBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.CurioOrnateNecklace" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioOrnateNecklace extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioOrnateNecklace$$Type = ($CurioOrnateNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioOrnateNecklace$$Original = $CurioOrnateNecklace;}
declare module "com.sammy.malum.common.block.curiosities.runic_workbench.RunicWorkbenchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$RunicWorkbenchBlockEntity} from "com.sammy.malum.common.block.curiosities.runic_workbench.RunicWorkbenchBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RunicWorkbenchBlock<T extends $RunicWorkbenchBlockEntity> extends $LodestoneEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchBlock$$Type<T> = ($RunicWorkbenchBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicWorkbenchBlock$$Original<T> = $RunicWorkbenchBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioEndlessRing" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioEndlessRing extends $MalumCurioItem implements $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioEndlessRing$$Type = ($CurioEndlessRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioEndlessRing$$Original = $CurioEndlessRing;}
declare module "com.sammy.malum.common.spiritrite.effect.sacred.NurturingEffectActor" {
import {$Allay} from "net.minecraft.world.entity.animal.allay.Allay"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$Sheep} from "net.minecraft.world.entity.animal.Sheep"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Chicken} from "net.minecraft.world.entity.animal.Chicken"
import {$Bee} from "net.minecraft.world.entity.animal.Bee"

export interface $NurturingEffectActor$$Interface<T extends $Mob> {
get "targetClass"(): $Class<(T)>
}

export class $NurturingEffectActor<T extends $Mob> implements $NurturingEffectActor$$Interface {
static readonly "BEE": $NurturingEffectActor<($Bee)>
static readonly "CHICKEN": $NurturingEffectActor<($Chicken)>
static readonly "SHEEP": $NurturingEffectActor<($Sheep)>
static readonly "ALLAY": $NurturingEffectActor<($Allay)>

 "act"(arg0: $ServerLevel$$Type, arg1: T): boolean
 "getTargetClass"(): $Class<(T)>
 "tryAct"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NurturingEffectActor$$Type<T> = ($NurturingEffectActor<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NurturingEffectActor$$Original<T> = $NurturingEffectActor<(T)>;}
declare module "com.sammy.malum.common.effect.ascension.AscensionEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$LivingFallEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingFallEvent"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AscensionEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "onEntityFall"(arg0: $LivingFallEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AscensionEffect$$Type = ($AscensionEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AscensionEffect$$Original = $AscensionEffect;}
declare module "com.sammy.malum.common.item.curiosities.weapons.staff.AbstractStaffItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$LodestoneCombatItem} from "team.lodestar.lodestone.systems.item.LodestoneCombatItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $AbstractStaffItem extends $LodestoneCombatItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: integer, arg4: $LodestoneItemProperties$$Type)
constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: $LodestoneItemProperties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "shoot"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getProjectileCount"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: float): integer
public "fireProjectile"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: integer): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getProjectileSpawnPos"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type, arg2: float, arg3: float): $Vec3
public "spawnChargeParticles"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: $ItemStack$$Type, arg4: float): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStaffItem$$Type = ($AbstractStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractStaffItem$$Original = $AbstractStaffItem;}
declare module "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$VoidDepotBlockEntity$VoidDepotGoal} from "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal"

export class $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType extends $Enum<($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)> implements $StringRepresentable$$Interface {
static readonly "ITEM": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
readonly "deserializer": $Function<($CompoundTag), ($VoidDepotBlockEntity$VoidDepotGoal)>
static readonly "EXPERIENCE": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType

public static "values"(): ($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)[]
public static "valueOf"(arg0: StringJS): $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType
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
export type $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$$Type = (("item") | ("experience"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$$Original = $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType;}
declare module "com.sammy.malum.common.block.the_device.TheVessel" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TheDevice} from "com.sammy.malum.common.block.the_device.TheDevice"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $TheVessel extends $TheDevice {
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

public "playSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheVessel$$Type = ($TheVessel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TheVessel$$Original = $TheVessel;}
declare module "com.sammy.malum.common.item.impetus.FracturedImpetusItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $FracturedImpetusItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FracturedImpetusItem$$Type = ($FracturedImpetusItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FracturedImpetusItem$$Original = $FracturedImpetusItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneSkyTether" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneSkyTether extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneSkyTether$$Type = ($RuneSkyTether);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneSkyTether$$Original = $RuneSkyTether;}
declare module "com.sammy.malum.common.item.curiosities.curios.CurioOrnateRing" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioOrnateRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioOrnateRing$$Type = ($CurioOrnateRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioOrnateRing$$Original = $CurioOrnateRing;}
declare module "com.sammy.malum.common.item.cosmetic.curios.CurioTokenOfGratitude" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List} from "java.util.List"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder} from "net.minecraft.core.Holder"
import {$EntityJoinLevelEvent$$Type} from "net.neoforged.neoforge.event.entity.EntityJoinLevelEvent"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioTokenOfGratitude extends $MalumCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "LOFI": $UUID
static readonly "MAX_BAR_WIDTH": integer
static readonly "DELLY": $UUID
static readonly "TRANS_SCARFS": $List<($UUID)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BOBBU": $UUID
static readonly "SALT": $UUID
static readonly "CREECHURE": $UUID
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "SNAKE_SCARF_FELLA": $UUID
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "GRADITUDE_CERTIFIED": $List<($UUID)>
static readonly "SAMMY": $UUID
static readonly "OWL_PERSON": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public static "giveItem"(arg0: $EntityJoinLevelEvent$$Type): void
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
public static "addTransScarf"(arg0: $UUID$$Type): void
public static "validateForGratitude"(arg0: StringJS): $UUID
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioTokenOfGratitude$$Type = ($CurioTokenOfGratitude);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioTokenOfGratitude$$Original = $CurioTokenOfGratitude;}
declare module "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType, $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$$Type} from "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType"

export class $VoidDepotBlockEntity$VoidDepotGoal {
 "deliveredAmount": integer
readonly "amount": integer
readonly "index": StringJS
 "completed": boolean
readonly "type": $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType

constructor(arg0: $VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType$$Type, arg1: StringJS, arg2: integer, arg3: integer)

public "reset"(): void
public "setCompleted"(arg0: boolean): void
public "isCompleted"(): boolean
public "serialize"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlockEntity$VoidDepotGoal$$Type = ($VoidDepotBlockEntity$VoidDepotGoal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidDepotBlockEntity$VoidDepotGoal$$Original = $VoidDepotBlockEntity$VoidDepotGoal;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$TotemBaseBlockEntity$TotemBaseState, $TotemBaseBlockEntity$TotemBaseState$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity$TotemBaseState"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TotemPoleBlockEntity, $TotemPoleBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$TotemPoleBlockEntity$TotemPoleState$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity$TotemPoleState"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$SpiritRiteType} from "com.sammy.malum.core.systems.rite.SpiritRiteType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TotemBaseBlockEntity extends $LodestoneBlockEntity {
readonly "corrupted": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($TotemBaseBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getState"(): $TotemBaseBlockEntity$TotemBaseState
public "setState"(arg0: $ServerLevel$$Type, arg1: $TotemBaseBlockEntity$TotemBaseState$$Type): void
public "getRite"(): $SpiritRiteType
public "triggerRite"(arg0: $ServerLevel$$Type): void
public "canTriggerRite"(): boolean
public "serverTick"(arg0: $ServerLevel$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getSpirits"(arg0: $ServerLevel$$Type): $List<($SpiritArcanaType)>
public "setTotemPoleState"(arg0: $ServerLevel$$Type, arg1: $TotemPoleBlockEntity$TotemPoleState$$Type): void
public "getFirstTotemPole"(): $Optional<($TotemPoleBlockEntity)>
public "addTotemPole"(arg0: $ServerLevel$$Type, arg1: $TotemPoleBlockEntity$$Type): void
public "getTotemPoles"(arg0: $ServerLevel$$Type): $List<($TotemPoleBlockEntity)>
public "isActiveOrAssembling"(): boolean
public "getTotemDirection"(): $Direction
public "updateRite"(arg0: $ServerLevel$$Type): void
public "receiveSparkUpdate"(): void
public "getTotemHeight"(): integer
public "getUpdatePacket"(): $Packet
get "state"(): $TotemBaseBlockEntity$TotemBaseState
get "rite"(): $SpiritRiteType
get "firstTotemPole"(): $Optional<($TotemPoleBlockEntity)>
get "activeOrAssembling"(): boolean
get "totemDirection"(): $Direction
get "totemHeight"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlockEntity$$Type = ($TotemBaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemBaseBlockEntity$$Original = $TotemBaseBlockEntity;}
declare module "com.sammy.malum.common.recipe.spirit_repair.SpiritRepairRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$LodestoneInWorldRecipe} from "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritBasedRecipeInput, $SpiritBasedRecipeInput$$Type} from "com.sammy.malum.core.systems.recipe.SpiritBasedRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SpiritRepairRegexData, $SpiritRepairRegexData$$Type} from "com.sammy.malum.common.recipe.spirit_repair.SpiritRepairRegexData"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$SpiritIngredient, $SpiritIngredient$$Type} from "com.sammy.malum.core.systems.recipe.SpiritIngredient"

export class $SpiritRepairRecipe extends $LodestoneInWorldRecipe<($SpiritBasedRecipeInput)> {
readonly "output": $ItemStack
readonly "validItems": $List<($Holder<($Item)>)>
readonly "repairEfficiency": float
readonly "regex": $SpiritRepairRegexData
static readonly "CODEC": $MapCodec<($SpiritRepairRecipe)>
readonly "repairMaterial": $SizedIngredient
readonly "spirits": $List<($SpiritIngredient)>
static readonly "NAME": StringJS

constructor(arg0: $List$$Type<($Holder$$Type<($Item$$Type)>)>, arg1: $List$$Type<($SpiritIngredient$$Type)>, arg2: $SizedIngredient$$Type, arg3: float, arg4: $SpiritRepairRegexData$$Type)

public "matches"(arg0: $SpiritBasedRecipeInput$$Type, arg1: $ItemStack$$Type): boolean
public "matches"(arg0: $SpiritBasedRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getResultItem"(arg0: $ItemStack$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isValidItemForRepair"(arg0: $ItemLike$$Type): boolean
public "getRepairedItems"(): $List<($ItemStack)>
public "getDamagedItems"(): $List<($ItemStack)>
get "repairedItems"(): $List<($ItemStack)>
get "damagedItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritRepairRecipe$$Type = ($SpiritRepairRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritRepairRecipe$$Original = $SpiritRepairRecipe;}
declare module "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICurioItem$$Interface} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$$Type} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $AbstractMalumCurioItem extends $Item implements $ICurioItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $AbstractMalumCurioItem$MalumTrinketType$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "addAttributeModifier"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $Holder$$Type<($Attribute)>, arg2: $AttributeModifier$$Type): void
public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
public "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
public "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMalumCurioItem$$Type = ($AbstractMalumCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractMalumCurioItem$$Original = $AbstractMalumCurioItem;}
declare module "com.sammy.malum.common.block.curiosities.spirit_catalyzer.SpiritCatalyzerCoreBlockEntity" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$HorizontalDirectionStructure} from "team.lodestar.lodestone.systems.multiblock.HorizontalDirectionStructure"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MultiBlockCoreEntity} from "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IArtificeModifierSource$$Interface} from "com.sammy.malum.core.systems.artifice.IArtificeModifierSource"
import {$ArtificeModifierSourceInstance} from "com.sammy.malum.core.systems.artifice.ArtificeModifierSourceInstance"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CatalyzerArtificeModifierSourceInstance} from "com.sammy.malum.common.block.curiosities.spirit_catalyzer.CatalyzerArtificeModifierSourceInstance"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritCatalyzerCoreBlockEntity extends $MultiBlockCoreEntity implements $IArtificeModifierSource$$Interface, $IItemHandlerSupplier$$Interface {
static readonly "CATALYZER_ITEM_OFFSET": $Vec3
static readonly "STRUCTURE": $Supplier<($HorizontalDirectionStructure)>
 "modifier": $CatalyzerArtificeModifierSourceInstance
static readonly "CATALYZER_AUGMENT_OFFSET": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory
 "augmentInventory": $LodestoneBlockEntityInventory
readonly "structure": $MultiBlockStructure
 "burnTicks": float

constructor(arg0: $BlockEntityType$$Type<($SpiritCatalyzerCoreBlockEntity$$Type)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "clientTick"(arg0: $Level$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "createFocusingModifierInstance"(): $ArtificeModifierSourceInstance
public "getFocusingModifierInstance"(): $Optional<($ArtificeModifierSourceInstance)>
public "triggerRecalibration"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getActiveFocusingModifierInstance"(): $ArtificeModifierSourceInstance
public "getUpdatePacket"(): $Packet
get "focusingModifierInstance"(): $Optional<($ArtificeModifierSourceInstance)>
get "activeFocusingModifierInstance"(): $ArtificeModifierSourceInstance
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerCoreBlockEntity$$Type = ($SpiritCatalyzerCoreBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCatalyzerCoreBlockEntity$$Original = $SpiritCatalyzerCoreBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RepairPylonCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonCoreBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RepairPylonCoreBlock<T extends $RepairPylonCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonCoreBlock$$Type<T> = ($RepairPylonCoreBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairPylonCoreBlock$$Original<T> = $RepairPylonCoreBlock<(T)>;}
declare module "com.sammy.malum.common.block.ether.EtherBrazierBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EtherBlock} from "com.sammy.malum.common.block.ether.EtherBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EtherBlockEntity} from "com.sammy.malum.common.block.ether.EtherBlockEntity"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtherBrazierBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ROTATED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HANGING": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBrazierBlock$$Type<T> = ($EtherBrazierBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherBrazierBlock$$Original<T> = $EtherBrazierBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.alchemical.CurioAlchemicalRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioAlchemicalRing extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAlchemicalRing$$Type = ($CurioAlchemicalRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioAlchemicalRing$$Original = $CurioAlchemicalRing;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneHeresyItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneHeresyItem extends $MadnessRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneHeresyItem$$Type = ($RuneHeresyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneHeresyItem$$Original = $RuneHeresyItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.CurioGildedRing" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioGildedRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGildedRing$$Type = ($CurioGildedRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGildedRing$$Original = $CurioGildedRing;}
declare module "com.sammy.malum.common.item.curiosities.armor.MalignantStrongholdArmorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MalumArmorItem} from "com.sammy.malum.common.item.curiosities.armor.MalumArmorItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $MalignantStrongholdArmorItem extends $MalumArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type)

public "getArmorTexture"(): $ResourceLocation
public "createExtraAttributes"(): $List<($ItemAttributeModifiers$Entry)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "armorTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalignantStrongholdArmorItem$$Type = ($MalignantStrongholdArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalignantStrongholdArmorItem$$Original = $MalignantStrongholdArmorItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AbstractMalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem$$Interface} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$$Type} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $MalumCurioItem extends $AbstractMalumCurioItem implements $ICurioItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $AbstractMalumCurioItem$MalumTrinketType$$Type)

public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>, arg1: $Item$TooltipContext$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumCurioItem$$Type = ($MalumCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumCurioItem$$Original = $MalumCurioItem;}
declare module "com.sammy.malum.common.spiritrite.effect.aqueous.GoodTidesRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $GoodTidesRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoodTidesRiteEffect$$Type = ($GoodTidesRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoodTidesRiteEffect$$Original = $GoodTidesRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlockEntity" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiBlockCoreEntity} from "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity"

export class $ObeliskCoreBlockEntity extends $MultiBlockCoreEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockEntityType$$Type<($ObeliskCoreBlockEntity$$Type)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskCoreBlockEntity$$Type = ($ObeliskCoreBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObeliskCoreBlockEntity$$Original = $ObeliskCoreBlockEntity;}
declare module "com.sammy.malum.common.item.augment.core.ResonanceTuner" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$CoreAugmentItem} from "com.sammy.malum.common.item.augment.core.CoreAugmentItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $ResonanceTuner extends $CoreAugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "exchangeSpeed"(arg0: $ArtificeAttributeData$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResonanceTuner$$Type = ($ResonanceTuner);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResonanceTuner$$Original = $ResonanceTuner;}
declare module "com.sammy.malum.common.spiritrite.effect.earthen.BlockBreakRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockBreakRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakRiteEffect$$Type = ($BlockBreakRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBreakRiteEffect$$Original = $BlockBreakRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.scythe.CurioHowlingMaelstromRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$AbstractScytheProjectileEntity$$Type} from "com.sammy.malum.common.entity.scythe.AbstractScytheProjectileEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioHowlingMaelstromRing extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "handleMaelstrom"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type, arg2: $AbstractScytheProjectileEntity$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHowlingMaelstromRing$$Type = ($CurioHowlingMaelstromRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioHowlingMaelstromRing$$Original = $CurioHowlingMaelstromRing;}
declare module "com.sammy.malum.common.block.blight.CreepingBlightBlock$BlightType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CreepingBlightBlock$BlightType extends $Enum<($CreepingBlightBlock$BlightType)> implements $StringRepresentable$$Interface {
static readonly "HANGING_BLIGHT": $CreepingBlightBlock$BlightType
static readonly "SOULWOOD_SPIKE": $CreepingBlightBlock$BlightType
static readonly "CLINGING_BLIGHT": $CreepingBlightBlock$BlightType
static readonly "SOULWOOD_ROOTS": $CreepingBlightBlock$BlightType

public static "values"(): ($CreepingBlightBlock$BlightType)[]
public static "valueOf"(arg0: StringJS): $CreepingBlightBlock$BlightType
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
export type $CreepingBlightBlock$BlightType$$Type = (("soulwood_roots") | ("soulwood_spike") | ("clinging_blight") | ("hanging_blight"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreepingBlightBlock$BlightType$$Original = $CreepingBlightBlock$BlightType;}
declare module "com.sammy.malum.common.spiritrite.effect.earthen.StoneWardRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $StoneWardRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneWardRiteEffect$$Type = ($StoneWardRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoneWardRiteEffect$$Original = $StoneWardRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavecharger.WaveChargerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SpiritDiodeBlock} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$WaveChargerBlockEntity, $WaveChargerBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.wavecharger.WaveChargerBlockEntity"
import {$SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveChargerBlock extends $SpiritDiodeBlock<($WaveChargerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveChargerBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer): boolean
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveChargerBlockEntity$$Type, arg4: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveChargerBlock$$Type = ($WaveChargerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveChargerBlock$$Original = $WaveChargerBlock;}
declare module "com.sammy.malum.common.recipe.SoulBindingRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$GeasEffectType, $GeasEffectType$$Type} from "com.sammy.malum.core.systems.geas.GeasEffectType"
import {$LodestoneInWorldRecipe} from "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SpiritBasedRecipeInput, $SpiritBasedRecipeInput$$Type} from "com.sammy.malum.core.systems.recipe.SpiritBasedRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$SpiritIngredient, $SpiritIngredient$$Type} from "com.sammy.malum.core.systems.recipe.SpiritIngredient"

export class $SoulBindingRecipe extends $LodestoneInWorldRecipe<($SpiritBasedRecipeInput)> {
readonly "result": $GeasEffectType
readonly "output": $ItemStack
readonly "input": $SizedIngredient
static readonly "CODEC": $MapCodec<($SoulBindingRecipe)>
readonly "extraInputs": $List<($SizedIngredient)>
readonly "spirits": $List<($SpiritIngredient)>
static readonly "NAME": StringJS

constructor(arg0: $SizedIngredient$$Type, arg1: $GeasEffectType$$Type, arg2: $List$$Type<($SizedIngredient$$Type)>, arg3: $List$$Type<($SpiritIngredient$$Type)>)

public "matches"(arg0: $SpiritBasedRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulBindingRecipe$$Type = ($SoulBindingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBindingRecipe$$Original = $SoulBindingRecipe;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.rite_pylon.ArcanaPylonBlockEntity" {
import {$MultiBlockStructure} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ObeliskCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlockEntity"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAltarAccelerator$$Interface} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IAltarAccelerator$AltarAcceleratorType} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator$AltarAcceleratorType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritAltarBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcanaPylonBlockEntity extends $ObeliskCoreBlockEntity implements $IAltarAccelerator$$Interface {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(): $LodestoneBlockEntityInventory
public "getAcceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
public "updateSpirit"(): void
public "getAcceleration"(): float
public "canAccelerate"(): boolean
public "spendSpiritFuel"(arg0: $ServerLevel$$Type, arg1: integer): void
public "getGlowDelta"(): float
public "addParticles"(arg0: $SpiritAltarBlockEntity$$Type, arg1: $SpiritArcanaType$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getSpirit"(): $SpiritArcanaType
public "getItemPos"(): $Vec3
public "getCentralItemOffset"(): $Vec3
public "completeSpiritInfusion"(arg0: $ServerLevel$$Type): void
public "triggerPassiveEffects"(arg0: $ServerLevel$$Type): void
public "getUpdatePacket"(): $Packet
get "inventory"(): $LodestoneBlockEntityInventory
get "acceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
get "acceleration"(): float
get "glowDelta"(): float
get "spirit"(): $SpiritArcanaType
get "itemPos"(): $Vec3
get "centralItemOffset"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanaPylonBlockEntity$$Type = ($ArcanaPylonBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanaPylonBlockEntity$$Original = $ArcanaPylonBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType} from "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$VoidDepotBlockEntity$VoidDepotGoal} from "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity$VoidDepotGoal"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidDepotBlockEntity extends $LodestoneBlockEntity {
 "textVisibility": float
static readonly "CODEC": $StringRepresentable$EnumCodec<($VoidDepotBlockEntity$VoidDepotGoal$VoidDepotGoalType)>
 "repeatable": boolean
 "playersWhoCompleted": $List<($UUID)>
 "nearTimer": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "textToDisplay": $List<(StringJS)>
readonly "goals": $List<($VoidDepotBlockEntity$VoidDepotGoal)>
 "oncePerPlayer": boolean

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "onCompletion"(arg0: $ServerLevel$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlockEntity$$Type = ($VoidDepotBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidDepotBlockEntity$$Original = $VoidDepotBlockEntity;}
declare module "com.sammy.malum.common.block.nature.MalumHangingLeavesBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IGradientedLeavesBlock$$Interface} from "com.sammy.malum.common.block.nature.IGradientedLeavesBlock"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MalumHangingLeavesBlock extends $Block implements $SimpleWaterloggedBlock$$Interface, $IGradientedLeavesBlock$$Interface {
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
static readonly "COLOR": $IntegerProperty
readonly "minColor": $Color
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
readonly "maxColor": $Color
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Color$$Type, arg2: $Color$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getMinColor"(): $Color
public "getMaxColor"(): $Color
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
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
export type $MalumHangingLeavesBlock$$Type = ($MalumHangingLeavesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumHangingLeavesBlock$$Original = $MalumHangingLeavesBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.arcane.UnchainedRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $UnchainedRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnchainedRiteEffect$$Type = ($UnchainedRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnchainedRiteEffect$$Original = $UnchainedRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.soul_brazier.SoulBrazierBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$SoulBrazierBlockEntity} from "com.sammy.malum.common.block.curiosities.soul_brazier.SoulBrazierBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulBrazierBlock<T extends $SoulBrazierBlockEntity> extends $LodestoneEntityBlock<(T)> {
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
static readonly "LIT": $BooleanProperty
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
export type $SoulBrazierBlock$$Type<T> = ($SoulBrazierBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBrazierBlock$$Original<T> = $SoulBrazierBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.totem.unweaver.RiteUnweaverBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RiteSparkInteractable$$Interface} from "com.sammy.malum.common.block.curiosities.totem.RiteSparkInteractable"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RiteUnweaverBlockEntity extends $LodestoneBlockEntity implements $RiteSparkInteractable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($RiteUnweaverBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "travel"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteUnweaverBlockEntity$$Type = ($RiteUnweaverBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteUnweaverBlockEntity$$Original = $RiteUnweaverBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.prospector.CurioProspectorBelt" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CurioProspectorBelt extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "applyFortune"(arg0: $Entity$$Type, arg1: $LootParams$Builder$$Type): $LootParams$Builder
public static "hasProspectorBelt"(arg0: $LivingEntity$$Type): boolean
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>, arg1: $Item$TooltipContext$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioProspectorBelt$$Type = ($CurioProspectorBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioProspectorBelt$$Original = $CurioProspectorBelt;}
declare module "com.sammy.malum.common.item.augment.AugmentItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike, $SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArtificeAttributeType$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemTooltipEvent$$Type} from "net.neoforged.neoforge.event.entity.player.ItemTooltipEvent"

export class $AugmentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $List$$Type<($SpiritLike$$Type)>, arg2: boolean, ...arg3: ($ArtificeModifier$$Type)[])
constructor(arg0: $Item$Properties$$Type, arg1: $SpiritLike$$Type, arg2: boolean, ...arg3: ($ArtificeModifier$$Type)[])
constructor(arg0: $Item$Properties$$Type, arg1: $List$$Type<($SpiritLike$$Type)>, ...arg2: ($ArtificeModifier$$Type)[])
constructor(arg0: $Item$Properties$$Type, arg1: $SpiritLike$$Type, ...arg2: ($ArtificeModifier$$Type)[])

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "addAugmentStatComponent"(arg0: $List$$Type<($Component$$Type)>, arg1: $ArtificeAttributeType$$Type, arg2: float): void
public static "addAugmentAttributeTooltip"(arg0: $ItemTooltipEvent$$Type): void
public "getAugmentTypeTranslator"(): StringJS
public static "makeAugmentStatComponent"(arg0: StringJS, arg1: float, arg2: boolean): $Optional<($Component)>
public static "makeAugmentStatComponent"(arg0: $ArtificeAttributeType$$Type, arg1: float, arg2: boolean): $Optional<($Component)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "augmentTypeTranslator"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentItem$$Type = ($AugmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentItem$$Original = $AugmentItem;}
declare module "com.sammy.malum.common.spiritrite.effect.aerial.SkyTetherRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $SkyTetherRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyTetherRiteEffect$$Type = ($SkyTetherRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyTetherRiteEffect$$Original = $SkyTetherRiteEffect;}
declare module "com.sammy.malum.common.spiritrite.effect.arcane.UndirectedRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$SpiritRiteEffect$RiteParameters$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect$RiteParameters"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $UndirectedRiteEffect extends $SpiritRiteEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $SpiritArcanaType$$Type, arg3: $SpiritRiteEffect$RiteParameters$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UndirectedRiteEffect$$Type = ($UndirectedRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UndirectedRiteEffect$$Original = $UndirectedRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.totem.anchor.RiteAnchorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RiteAnchorBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.anchor.RiteAnchorBlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RiteAnchorBlock extends $LodestoneEntityBlock<($RiteAnchorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SOUTH": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDirectionProperty"(arg0: $Direction$$Type): $BooleanProperty
public static "isOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteAnchorBlock$$Type = ($RiteAnchorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteAnchorBlock$$Original = $RiteAnchorBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.sacred.AnimalLoveEffect" {
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $AnimalLoveEffect extends $SpiritRiteEntityEffect<($Animal)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "getTargetClass"(): $Class<($Animal)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): boolean
get "targetClass"(): $Class<($Animal)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalLoveEffect$$Type = ($AnimalLoveEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalLoveEffect$$Original = $AnimalLoveEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneGoodTides" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneGoodTides extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneGoodTides$$Type = ($RuneGoodTides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneGoodTides$$Original = $RuneGoodTides;}
declare module "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WeaversWorkbenchBlockEntity, $WeaversWorkbenchBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchBlockEntity"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $WeaversWorkbenchItemHandler extends $ItemStackHandler {
readonly "outputs": integer
 "isCrafting": boolean
readonly "entity": $WeaversWorkbenchBlockEntity

constructor(arg0: integer, arg1: integer, arg2: $WeaversWorkbenchBlockEntity$$Type)

public "onContentsChanged"(arg0: integer): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchItemHandler$$Type = ($WeaversWorkbenchItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaversWorkbenchItemHandler$$Original = $WeaversWorkbenchItemHandler;}
declare module "com.sammy.malum.common.entity.nitrate.AbstractNitrateEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$Color} from "java.awt.Color"
import {$TrailPointBuilder} from "team.lodestar.lodestone.systems.rendering.trail.TrailPointBuilder"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MalumNetworkedParticleEffectColorData} from "com.sammy.malum.visual_effects.networked.MalumNetworkedParticleEffectColorData"
import {$NitrateImpactParticleEffectType} from "com.sammy.malum.visual_effects.networked.nitrate.NitrateImpactParticleEffectType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$ThrowableProjectile} from "net.minecraft.world.entity.projectile.ThrowableProjectile"
import {$EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $AbstractNitrateEntity extends $ThrowableProjectile {
 "xRot": float
 "hasImpulse": boolean
static readonly "SECOND_SMOKE_COLOR": $Color
 "ars_Nouveau$motions": $Stack
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
readonly "trailPointBuilder": $TrailPointBuilder
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "spinOffset": float
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
 "hurtMarked": boolean
 "timesExploded": integer
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
readonly "spinningTrailPointBuilder": $TrailPointBuilder
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
static readonly "MAX_AGE": integer
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "fadingAway": boolean
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
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "age": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($AbstractNitrateEntity$$Type)>, arg1: $Level$$Type)
constructor(arg0: $EntityType$$Type<($AbstractNitrateEntity$$Type)>, arg1: $LivingEntity$$Type, arg2: $Level$$Type)

public "tick"(): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(never)>): void
public "spawnParticles"(): void
public "getImpactParticleEffectColor"(): $MalumNetworkedParticleEffectColorData
public "isNoGravity"(): boolean
public "getPickRadius"(): float
public "ignoreExplosion"(arg0: $Explosion$$Type): boolean
public "getMaxPierce"(): integer
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public static "getOwnerFromExplosion"(arg0: $Entity$$Type): $Optional<($LivingEntity)>
public "fireImmune"(): boolean
public "getExplosionRadius"(): float
public "getImpactParticleEffect"(): $NitrateImpactParticleEffectType
public "getVisualEffectScalar"(): float
public "onExplode"(): void
public "isInWater"(): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "impactParticleEffectColor"(): $MalumNetworkedParticleEffectColorData
get "noGravity"(): boolean
get "pickRadius"(): float
get "maxPierce"(): integer
get "explosionRadius"(): float
get "impactParticleEffect"(): $NitrateImpactParticleEffectType
get "visualEffectScalar"(): float
get "inWater"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNitrateEntity$$Type = ($AbstractNitrateEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractNitrateEntity$$Original = $AbstractNitrateEntity;}
declare module "com.sammy.malum.common.block.curiosities.totem.anchor.RiteAnchorBlockEntity$AimState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $RiteAnchorBlockEntity$AimState extends $Enum<($RiteAnchorBlockEntity$AimState)> implements $StringRepresentable$$Interface {
static readonly "PULL": $RiteAnchorBlockEntity$AimState
static readonly "NORTH": $RiteAnchorBlockEntity$AimState
static readonly "WEST": $RiteAnchorBlockEntity$AimState
static readonly "SOUTH": $RiteAnchorBlockEntity$AimState
static readonly "EAST": $RiteAnchorBlockEntity$AimState
readonly "data2d": integer
static readonly "PUSH": $RiteAnchorBlockEntity$AimState

public "getName"(): StringJS
public static "values"(): ($RiteAnchorBlockEntity$AimState)[]
public static "valueOf"(arg0: StringJS): $RiteAnchorBlockEntity$AimState
public "getSerializedName"(): StringJS
public static "fromDirection"(arg0: $Direction$$Type): $RiteAnchorBlockEntity$AimState
public "getData2d"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteAnchorBlockEntity$AimState$$Type = (("north") | ("south") | ("west") | ("east") | ("push") | ("pull"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteAnchorBlockEntity$AimState$$Original = $RiteAnchorBlockEntity$AimState;}
declare module "com.sammy.malum.common.worldgen.tree.RunewoodTreeFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$LodestoneBlockFiller$BlockStateEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$LodestoneBlockFiller$LodestoneLayerToken} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$LodestoneBlockFiller$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$RunewoodTreeConfiguration, $RunewoodTreeConfiguration$$Type} from "com.sammy.malum.common.worldgen.tree.RunewoodTreeConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneBlockFillerLayer"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $RunewoodTreeFeature extends $Feature<($RunewoodTreeConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
static readonly "LOGS": $LodestoneBlockFiller$LodestoneLayerToken
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
static readonly "HANGING_LEAVES": $LodestoneBlockFiller$LodestoneLayerToken
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

constructor()

public "addDownwardsTrunkConnections"(arg0: $BlockState$$Type, arg1: $WorldGenLevel$$Type, arg2: $LodestoneBlockFiller$$Type, arg3: $BlockPos$$Type): void
public "place"(arg0: $FeaturePlaceContext$$Type<($RunewoodTreeConfiguration$$Type)>): boolean
public static "canPlace"(arg0: $WorldGenLevel$$Type, arg1: $BlockPos$$Type): boolean
public "makeLeafSlice"(arg0: $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $LodestoneBlockFiller$BlockStateEntry$$Type): void
public "makeLeafSlice"(arg0: $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $Supplier$$Type<($LodestoneBlockFiller$BlockStateEntry$$Type)>): void
public "makeLeafBlob"(arg0: $RunewoodTreeConfiguration$$Type, arg1: $LodestoneBlockFiller$$Type, arg2: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodTreeFeature$$Type = ($RunewoodTreeFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunewoodTreeFeature$$Original = $RunewoodTreeFeature;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.brilliant.BrilliantObeliskBlockEntity" {
import {$MultiBlockStructure} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$Supplier} from "java.util.function.Supplier"
import {$ObeliskCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrilliantObeliskBlockEntity extends $ObeliskCoreBlockEntity {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrilliantObeliskBlockEntity$$Type = ($BrilliantObeliskBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrilliantObeliskBlockEntity$$Original = $BrilliantObeliskBlockEntity;}
declare module "com.sammy.malum.common.block.nature.SapFilledLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Color$$Type} from "java.awt.Color"
import {$List} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $SapFilledLogBlock extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
readonly "sap": $Supplier<($Item)>
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "sapColor": $List<($ColorParticleData)>
readonly "drained": $Supplier<($Block)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Supplier$$Type<($Item$$Type)>, ...arg3: ($Color$$Type)[])

public "collectSap"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SapFilledLogBlock$$Type = ($SapFilledLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SapFilledLogBlock$$Original = $SapFilledLogBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.brooches.CurioGluttonousBrooch" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioGluttonousBrooch extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "GLUTTONOUS_BROOCH_BELT": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGluttonousBrooch$$Type = ($CurioGluttonousBrooch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGluttonousBrooch$$Original = $CurioGluttonousBrooch;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpiritRitePotionEffect$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AbstractRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.AbstractRuneCurioItem"
import {$RiteEffectHolder$$Type} from "com.sammy.malum.core.systems.registry.rite.RiteEffectHolder"

export class $TotemicRuneCurioItem extends $AbstractRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $RiteEffectHolder$$Type<($SpiritRitePotionEffect$$Type<(never)>)>, arg2: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>)

public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemicRuneCurioItem$$Type = ($TotemicRuneCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemicRuneCurioItem$$Original = $TotemicRuneCurioItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioGruesomeConcentrationRing" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioGruesomeConcentrationRing extends $MalumCurioItem implements $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "onEat"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGruesomeConcentrationRing$$Type = ($CurioGruesomeConcentrationRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGruesomeConcentrationRing$$Original = $CurioGruesomeConcentrationRing;}
declare module "com.sammy.malum.common.item.disc.ArcaneElegyMusicDiscItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ArcaneElegyMusicDiscItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneElegyMusicDiscItem$$Type = ($ArcaneElegyMusicDiscItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcaneElegyMusicDiscItem$$Original = $ArcaneElegyMusicDiscItem;}
declare module "com.sammy.malum.common.effect.gluttony.DesperateNeedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $DesperateNeedEffect extends $MobEffect {
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
export type $DesperateNeedEffect$$Type = ($DesperateNeedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DesperateNeedEffect$$Original = $DesperateNeedEffect;}
declare module "com.sammy.malum.common.spiritrite.effect.aerial.BlockGravityRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockGravityRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
public static "getToolForState"(arg0: $BlockState$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGravityRiteEffect$$Type = ($BlockGravityRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGravityRiteEffect$$Original = $BlockGravityRiteEffect;}
declare module "com.sammy.malum.common.spiritrite.effect.earthen.OakenMightRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $OakenMightRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakenMightRiteEffect$$Type = ($OakenMightRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OakenMightRiteEffect$$Original = $OakenMightRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.soul_brazier.SoulBrazierBlockEntity$BrazierState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SoulBrazierBlockEntity$BrazierState extends $Enum<($SoulBrazierBlockEntity$BrazierState)> implements $StringRepresentable$$Interface {
static readonly "UNBINDING": $SoulBrazierBlockEntity$BrazierState
static readonly "IDLE": $SoulBrazierBlockEntity$BrazierState
static readonly "BINDING": $SoulBrazierBlockEntity$BrazierState

public static "values"(): ($SoulBrazierBlockEntity$BrazierState)[]
public static "valueOf"(arg0: StringJS): $SoulBrazierBlockEntity$BrazierState
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
export type $SoulBrazierBlockEntity$BrazierState$$Type = (("idle") | ("binding") | ("unbinding"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulBrazierBlockEntity$BrazierState$$Original = $SoulBrazierBlockEntity$BrazierState;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TotemPoleBlock} from "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlock"
import {$TotemBaseBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$TotemPoleBlockEntity$TotemPoleState, $TotemPoleBlockEntity$TotemPoleState$$Type} from "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity$TotemPoleState"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TotemPoleBlockEntity extends $LodestoneBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($TotemPoleBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "strip"(arg0: $ServerLevel$$Type): void
public "getState"(): $TotemPoleBlockEntity$TotemPoleState
public "setState"(arg0: $TotemPoleBlockEntity$TotemPoleState$$Type): void
public "clientTick"(arg0: $Level$$Type): void
public "getLogBlock"(): $Block
public "getGlowDelta"(): float
public "asBlock"(): $TotemPoleBlock<(never)>
public "commonTick"(arg0: $Level$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "brieflyActivate"(arg0: $ServerLevel$$Type): void
public "getSpirit"(): $SpiritArcanaType
public "toggleVisuals"(arg0: $ServerLevel$$Type): void
public "beginCharging"(arg0: $ServerLevel$$Type, arg1: $TotemBaseBlockEntity$$Type, arg2: integer): void
public "isSoulwood"(): boolean
public "getUpdatePacket"(): $Packet
get "state"(): $TotemPoleBlockEntity$TotemPoleState
set "state"(value: $TotemPoleBlockEntity$TotemPoleState$$Type)
get "logBlock"(): $Block
get "glowDelta"(): float
get "spirit"(): $SpiritArcanaType
get "soulwood"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlockEntity$$Type = ($TotemPoleBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemPoleBlockEntity$$Original = $TotemPoleBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavebanker.WaveBankerBlockEntity" {
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritDiodeBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritDiodeBlockEntity$TimeIntervalType} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveBankerBlockEntity extends $SpiritDiodeBlockEntity {
 "closeDelay": integer
 "visualTransitionEnd": integer
 "outputSignal": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "visualTransitionStart": integer
 "type": $SpiritDiodeBlockEntity$TimeIntervalType
 "cachedInputSignal": integer
 "visualStartTime": long
 "visualTransitionDuration": integer
 "frequency": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveBankerBlockEntity$$Type = ($WaveBankerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveBankerBlockEntity$$Original = $WaveBankerBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.scythe.CurioRisingEdgeRing" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioRisingEdgeRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "launchEntity"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRisingEdgeRing$$Type = ($CurioRisingEdgeRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioRisingEdgeRing$$Original = $CurioRisingEdgeRing;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavemaker.WaveMakerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SpiritDiodeBlock} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$WaveMakerBlockEntity, $WaveMakerBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.wavemaker.WaveMakerBlockEntity"
import {$SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveMakerBlock extends $SpiritDiodeBlock<($WaveMakerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveMakerBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveMakerBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer): boolean
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveMakerBlockEntity$$Type, arg4: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveMakerBlock$$Type = ($WaveMakerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveMakerBlock$$Original = $WaveMakerBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.aqueous.AqueousEmpowermentRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRiteEmpowermentEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEmpowermentEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $AqueousEmpowermentRiteEffect extends $SpiritRiteEmpowermentEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AqueousEmpowermentRiteEffect$$Type = ($AqueousEmpowermentRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AqueousEmpowermentRiteEffect$$Original = $AqueousEmpowermentRiteEffect;}
declare module "com.sammy.malum.common.block.blight.BlightedEarthBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlightedEarthBlock extends $Block implements $BonemealableBlock$$Interface {
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

public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
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
export type $BlightedEarthBlock$$Type = ($BlightedEarthBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightedEarthBlock$$Original = $BlightedEarthBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.earthen.CreateCobblestoneRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $CreateCobblestoneRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateCobblestoneRiteEffect$$Type = ($CreateCobblestoneRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateCobblestoneRiteEffect$$Original = $CreateCobblestoneRiteEffect;}
declare module "com.sammy.malum.common.block.blight.CreepingBlightBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$CreepingBlightBlock$BlightType} from "com.sammy.malum.common.block.blight.CreepingBlightBlock$BlightType"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreepingBlightBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "BLIGHT_TYPE": $EnumProperty<($CreepingBlightBlock$BlightType)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreepingBlightBlock$$Type = ($CreepingBlightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreepingBlightBlock$$Original = $CreepingBlightBlock;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity$TotemPoleState" {
import {$Enum} from "java.lang.Enum"

export class $TotemPoleBlockEntity$TotemPoleState extends $Enum<($TotemPoleBlockEntity$TotemPoleState)> {
static readonly "ACTIVE": $TotemPoleBlockEntity$TotemPoleState
static readonly "INACTIVE": $TotemPoleBlockEntity$TotemPoleState
static readonly "VISUAL_ONLY": $TotemPoleBlockEntity$TotemPoleState
static readonly "CHARGING": $TotemPoleBlockEntity$TotemPoleState

public static "values"(): ($TotemPoleBlockEntity$TotemPoleState)[]
public static "valueOf"(arg0: StringJS): $TotemPoleBlockEntity$TotemPoleState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlockEntity$TotemPoleState$$Type = (("inactive") | ("visual_only") | ("charging") | ("active"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemPoleBlockEntity$TotemPoleState$$Original = $TotemPoleBlockEntity$TotemPoleState;}
declare module "com.sammy.malum.common.block.curiosities.spirit_catalyzer.SpiritCatalyzerCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SpiritCatalyzerCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.spirit_catalyzer.SpiritCatalyzerCoreBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritCatalyzerCoreBlock<T extends $SpiritCatalyzerCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "NORTH_SOUTH_SHAPE": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "WEST_EAST_SHAPE": $VoxelShape
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeWestEastShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "makeNorthSouthShape"(): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerCoreBlock$$Type<T> = ($SpiritCatalyzerCoreBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCatalyzerCoreBlock$$Original<T> = $SpiritCatalyzerCoreBlock<(T)>;}
declare module "com.sammy.malum.common.spiritrite.effect.infernal.FurnaceAccelerationRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractFurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $FurnaceAccelerationRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
public "quickenFurnace"(arg0: $ServerLevel$$Type, arg1: $AbstractFurnaceBlockEntity$$Type, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceAccelerationRiteEffect$$Type = ($FurnaceAccelerationRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceAccelerationRiteEffect$$Original = $FurnaceAccelerationRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.runewood.RunewoodObeliskCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ObeliskCoreBlock} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RunewoodObeliskBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.runewood.RunewoodObeliskBlockEntity"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RunewoodObeliskCoreBlock extends $ObeliskCoreBlock<($RunewoodObeliskBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodObeliskCoreBlock$$Type = ($RunewoodObeliskCoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunewoodObeliskCoreBlock$$Original = $RunewoodObeliskCoreBlock;}
declare module "com.sammy.malum.common.block.curiosities.ritual_plinth.RitualPlinthBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$RitualPlinthBlockEntity} from "com.sammy.malum.common.block.curiosities.ritual_plinth.RitualPlinthBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RitualPlinthBlock<T extends $RitualPlinthBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualPlinthBlock$$Type<T> = ($RitualPlinthBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualPlinthBlock$$Original<T> = $RitualPlinthBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool" {
import {$ISpellweavingTool$Mode, $ISpellweavingTool$Mode$$Type} from "com.sammy.malum.common.item.curiosities.tools.spellweaver.ISpellweavingTool$Mode"

export interface $ISpellweavingTool$$Interface {

(): $ISpellweavingTool$Mode$$Type
get "mode"(): $ISpellweavingTool$Mode
}

export class $ISpellweavingTool implements $ISpellweavingTool$$Interface {
 "getMode"(): $ISpellweavingTool$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellweavingTool$$Type = (() => $ISpellweavingTool$Mode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpellweavingTool$$Original = $ISpellweavingTool;}
declare module "com.sammy.malum.common.effect.geas.WyrdExhaustionEffect" {
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

export class $WyrdExhaustionEffect extends $MobEffect {
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
export type $WyrdExhaustionEffect$$Type = ($WyrdExhaustionEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WyrdExhaustionEffect$$Original = $WyrdExhaustionEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioHiddenBladeNecklace" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityTickEvent$Pre$$Type} from "net.neoforged.neoforge.event.tick.EntityTickEvent$Pre"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioHiddenBladeNecklace extends $MalumCurioItem implements $IMalumEventResponder$$Interface, $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "COOLDOWN_DURATION": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "entityTick"(arg0: $EntityTickEvent$Pre$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHiddenBladeNecklace$$Type = ($CurioHiddenBladeNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioHiddenBladeNecklace$$Original = $CurioHiddenBladeNecklace;}
declare module "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator" {
import {$IAltarAccelerator$AltarAcceleratorType} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator$AltarAcceleratorType"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritAltarBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlockEntity"

export interface $IAltarAccelerator$$Interface {
get "acceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
get "acceleration"(): float
}

export class $IAltarAccelerator implements $IAltarAccelerator$$Interface {
 "getAcceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
 "getAcceleration"(): float
 "canAccelerate"(): boolean
 "addParticles"(arg0: $SpiritAltarBlockEntity$$Type, arg1: $SpiritArcanaType$$Type): void
 "completeSpiritInfusion"(arg0: $ServerLevel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAltarAccelerator$$Type = ($IAltarAccelerator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAltarAccelerator$$Original = $IAltarAccelerator;}
declare module "com.sammy.malum.common.spiritrite.effect.wicked.HurtEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $HurtEffect extends $SpiritRiteEntityEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "getTargetClass"(): $Class<($LivingEntity)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtEffect$$Type = ($HurtEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HurtEffect$$Original = $HurtEffect;}
declare module "com.sammy.malum.common.item.food.ConcentratedGluttonyItem" {
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GeasEffectType} from "com.sammy.malum.core.systems.geas.GeasEffectType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GluttonyEffect$GluttonyEffectProperties} from "com.sammy.malum.common.effect.gluttony.GluttonyEffect$GluttonyEffectProperties"
import {$BottledDrinkItem} from "com.sammy.malum.common.item.food.BottledDrinkItem"

export class $ConcentratedGluttonyItem extends $BottledDrinkItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ROTTEN_TRINKETS": $Collection<($Holder<($Item)>)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ROTTEN_GEAS": $Collection<($Holder<($GeasEffectType)>)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "applyConcentratedGluttonyEffect"(arg0: $LivingEntity$$Type, arg1: float): $GluttonyEffect$GluttonyEffectProperties
public static "createGluttonyVFX"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type, arg2: float): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcentratedGluttonyItem$$Type = ($ConcentratedGluttonyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcentratedGluttonyItem$$Original = $ConcentratedGluttonyItem;}
declare module "com.sammy.malum.common.item.augment.core.SuspiciousDeviceItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CoreAugmentItem} from "com.sammy.malum.common.item.augment.core.CoreAugmentItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder} from "net.minecraft.core.Holder"

export class $SuspiciousDeviceItem extends $CoreAugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "blowUp"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousDeviceItem$$Type = ($SuspiciousDeviceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousDeviceItem$$Original = $SuspiciousDeviceItem;}
declare module "com.sammy.malum.common.effect.geas.FlawedAimEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlawedAimEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlawedAimEffect$$Type = ($FlawedAimEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlawedAimEffect$$Original = $FlawedAimEffect;}
declare module "com.sammy.malum.common.item.IVoidItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"

export interface $IVoidItem$$Interface extends $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
get "voidParticleIntensity"(): float
}

export class $IVoidItem implements $IVoidItem$$Interface {
 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
 "getVoidParticleIntensity"(): float
 "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVoidItem$$Type = ($IVoidItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVoidItem$$Original = $IVoidItem;}
declare module "com.sammy.malum.common.effect.gluttony.TrialOfFaithEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $TrialOfFaithEffect extends $MobEffect {
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
export type $TrialOfFaithEffect$$Type = ($TrialOfFaithEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrialOfFaithEffect$$Original = $TrialOfFaithEffect;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavebreaker.WaveBreakerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SpiritDiodeBlock} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaveBreakerBlockEntity, $WaveBreakerBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.wavebreaker.WaveBreakerBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveBreakerBlock extends $SpiritDiodeBlock<($WaveBreakerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBreakerBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBreakerBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer): boolean
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBreakerBlockEntity$$Type, arg4: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveBreakerBlock$$Type = ($WaveBreakerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveBreakerBlock$$Original = $WaveBreakerBlock;}
declare module "com.sammy.malum.common.block.storage.jar.SpiritJarBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$PlayerInteractEvent$LeftClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritJarBlockEntity} from "com.sammy.malum.common.block.storage.jar.SpiritJarBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritJarBlock<T extends $SpiritJarBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public static "attack"(arg0: $PlayerInteractEvent$LeftClickBlock$$Type): void
public static "makeShape"(): $VoxelShape
public "handleAttack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJarBlock$$Type<T> = ($SpiritJarBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritJarBlock$$Original<T> = $SpiritJarBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneFlowingGrasp" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneFlowingGrasp extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneFlowingGrasp$$Type = ($RuneFlowingGrasp);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneFlowingGrasp$$Original = $RuneFlowingGrasp;}
declare module "com.sammy.malum.common.effect.RejectedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RejectedEffect extends $MobEffect {
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
export type $RejectedEffect$$Type = ($RejectedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RejectedEffect$$Original = $RejectedEffect;}
declare module "com.sammy.malum.common.block.curiosities.ritual_plinth.RitualPlinthBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RitualPlinthBlockEntity extends $LodestoneBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($RitualPlinthBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualPlinthBlockEntity$$Type = ($RitualPlinthBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualPlinthBlockEntity$$Original = $RitualPlinthBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.weapons.staff.UnwindingChaosStaffItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractStaffItem} from "com.sammy.malum.common.item.curiosities.weapons.staff.AbstractStaffItem"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ColorParticleData} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $UnwindingChaosStaffItem extends $AbstractStaffItem implements $ISpiritAffiliatedItem$$Interface {
static readonly "SPIRITS": $List<($SpiritHolder<($SpiritArcanaType)>)>
static readonly "AURIC_COLOR_DATA": $ColorParticleData
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: integer, arg4: $LodestoneItemProperties$$Type)

public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getProjectileCount"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: float): integer
public "fireProjectile"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: integer): void
public "addStaffCharges"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public static "getUnwindingChaosSpirit"(): $SpiritArcanaType
public "spawnChargeParticles"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: $ItemStack$$Type, arg4: float): void
public "getDefiningSpiritType"(): $SpiritLike
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static get "unwindingChaosSpirit"(): $SpiritArcanaType
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnwindingChaosStaffItem$$Type = ($UnwindingChaosStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnwindingChaosStaffItem$$Original = $UnwindingChaosStaffItem;}
declare module "com.sammy.malum.common.effect.rite.aura.FlowingGraspEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlowingGraspEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "growBoundingBox"(arg0: $Player$$Type, arg1: $AABB$$Type): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingGraspEffect$$Type = ($FlowingGraspEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingGraspEffect$$Original = $FlowingGraspEffect;}
declare module "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$OpenStateBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritDiodeBlockEntity$TimeIntervalType} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritDiodeBlockEntity extends $OpenStateBlockEntity {
 "closeDelay": integer
 "visualTransitionEnd": integer
 "outputSignal": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "visualTransitionStart": integer
 "type": $SpiritDiodeBlockEntity$TimeIntervalType
 "cachedInputSignal": integer
 "visualStartTime": long
 "visualTransitionDuration": integer
 "frequency": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo
public "updateVisuals"(arg0: integer, arg1: integer, arg2: boolean): void
public "getOutputSignal"(): integer
public "updateAnimation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public "getAdjustedFrequency"(): integer
public "getUpdatePacket"(): $Packet
get "adjustedFrequency"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritDiodeBlockEntity$$Type = ($SpiritDiodeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritDiodeBlockEntity$$Original = $SpiritDiodeBlockEntity;}
declare module "com.sammy.malum.common.item.augment.MendingDiffuserItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $MendingDiffuserItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "repairImpetus"(arg0: $Level$$Type, arg1: $ArtificeAttributeData$$Type, arg2: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MendingDiffuserItem$$Type = ($MendingDiffuserItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MendingDiffuserItem$$Original = $MendingDiffuserItem;}
declare module "com.sammy.malum.common.effect.GrowingFleshEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GrowingFleshEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowingFleshEffect$$Type = ($GrowingFleshEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrowingFleshEffect$$Original = $GrowingFleshEffect;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.ObeliskComponentBlock" {
import {$MultiblockComponentBlock} from "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ObeliskComponentBlock extends $MultiblockComponentBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Item$$Type)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObeliskComponentBlock$$Type = ($ObeliskComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObeliskComponentBlock$$Original = $ObeliskComponentBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.brooches.CurioElaborateBrooch" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioElaborateBrooch extends $MalumCurioItem {
static readonly "ELABORATE_BROOCH_NECKLACE": $ResourceLocation
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "ELABORATE_BROOCH_BELT": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioElaborateBrooch$$Type = ($CurioElaborateBrooch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioElaborateBrooch$$Original = $CurioElaborateBrooch;}
declare module "com.sammy.malum.common.recipe.node_cooking.NodeCookingSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$NodeCookingSerializer$Factory, $NodeCookingSerializer$Factory$$Type} from "com.sammy.malum.common.recipe.node_cooking.NodeCookingSerializer$Factory"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NodeCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer$$Interface<(T)> {
readonly "factory": $NodeCookingSerializer$Factory<(T)>
readonly "defaultCookingTime": integer

constructor(arg0: $NodeCookingSerializer$Factory$$Type<(T)>, arg1: integer)

public "codec"(): $MapCodec<(T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): T
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "getStackFromIngredient"(arg0: $Ingredient$$Type): $ItemStack
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeCookingSerializer$$Type<T> = ($NodeCookingSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeCookingSerializer$$Original<T> = $NodeCookingSerializer<(T)>;}
declare module "com.sammy.malum.common.worldgen.ore.CthonicGoldOreFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$List, $List$$Type} from "java.util.List"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
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
import {$LayeredOreFeature} from "com.sammy.malum.common.worldgen.ore.LayeredOreFeature"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $CthonicGoldOreFeature extends $LayeredOreFeature {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
 "oreConfigurations": $List<($OreConfiguration)>
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

constructor()

public "placeClusters"(arg0: $List$$Type<($Runnable$$Type)>, arg1: $RandomSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CthonicGoldOreFeature$$Type = ($CthonicGoldOreFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CthonicGoldOreFeature$$Original = $CthonicGoldOreFeature;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.alchemical.CurioCurativeRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioCurativeRing extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCurativeRing$$Type = ($CurioCurativeRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioCurativeRing$$Original = $CurioCurativeRing;}
declare module "com.sammy.malum.common.effect.rite.aura.BurningFervorEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BurningFervorEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningFervorEffect$$Type = ($BurningFervorEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BurningFervorEffect$$Original = $BurningFervorEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.CurioGildedBelt" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioGildedBelt extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGildedBelt$$Type = ($CurioGildedBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGildedBelt$$Original = $CurioGildedBelt;}
declare module "com.sammy.malum.common.spiritrite.effect.wicked.EmpowermentEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$Class} from "java.lang.Class"
import {$Monster} from "net.minecraft.world.entity.monster.Monster"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $EmpowermentEffect extends $SpiritRitePotionEffect<($Monster)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($Monster)>
get "targetClass"(): $Class<($Monster)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpowermentEffect$$Type = ($EmpowermentEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmpowermentEffect$$Original = $EmpowermentEffect;}
declare module "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent" {
import {$TooltipComponent$$Interface} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MalumPouchContentsComponent$Mutable} from "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent$Mutable"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$List, $List$$Type} from "java.util.List"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"
import {$PouchContentsWeightProcessor$$Type} from "com.sammy.malum.common.data.component.pouch.PouchContentsWeightProcessor"

export class $MalumPouchContentsComponent implements $TooltipComponent$$Interface {
constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $PouchContentsWeightProcessor$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getItems"(): $List<($ItemStack)>
public "weight"(): $Fraction
public "mutable"(): $MalumPouchContentsComponent$Mutable
public "getItemsCopy"(): $List<($ItemStack)>
public "getStorageSize"(): integer
public "containsItem"(arg0: $ItemLike$$Type): boolean
public "getItemUnsafe"(arg0: integer): $ItemStack
get "empty"(): boolean
get "items"(): $List<($ItemStack)>
get "itemsCopy"(): $List<($ItemStack)>
get "storageSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumPouchContentsComponent$$Type = ($MalumPouchContentsComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumPouchContentsComponent$$Original = $MalumPouchContentsComponent;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneOakenMight" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneOakenMight extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneOakenMight$$Type = ($RuneOakenMight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneOakenMight$$Original = $RuneOakenMight;}
declare module "com.sammy.malum.common.effect.ascension.LiftedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$LivingFallEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingFallEvent"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $LiftedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "onEntityFall"(arg0: $LivingFallEvent$$Type): void
public static "modifyVelocity"(arg0: $LivingEntity$$Type, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiftedEffect$$Type = ($LiftedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiftedEffect$$Original = $LiftedEffect;}
declare module "com.sammy.malum.common.effect.rite.aura.soulwood.FieryEmbraceEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FieryEmbraceEffect extends $MobEffect {
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
export type $FieryEmbraceEffect$$Type = ($FieryEmbraceEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieryEmbraceEffect$$Original = $FieryEmbraceEffect;}
declare module "com.sammy.malum.common.item.BlazingQuartzItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemNameBlockItem} from "net.minecraft.world.item.ItemNameBlockItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BlazingQuartzItem extends $ItemNameBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "fuel": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: integer, arg2: $Item$Properties$$Type)

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
export type $BlazingQuartzItem$$Type = ($BlazingQuartzItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlazingQuartzItem$$Original = $BlazingQuartzItem;}
declare module "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$WeaversWorkbenchBlockEntity} from "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WeaversWorkbenchBlock<T extends $WeaversWorkbenchBlockEntity> extends $LodestoneEntityBlock<(T)> {
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchBlock$$Type<T> = ($WeaversWorkbenchBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaversWorkbenchBlock$$Original<T> = $WeaversWorkbenchBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioLimitlessBelt" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$Map} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioLimitlessBelt extends $MalumCurioItem implements $IMalumEventResponder$$Interface, $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioLimitlessBelt$$Type = ($CurioLimitlessBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioLimitlessBelt$$Original = $CurioLimitlessBelt;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioGrowingFleshRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioGrowingFleshRing extends $MalumCurioItem implements $IVoidItem$$Interface, $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGrowingFleshRing$$Type = ($CurioGrowingFleshRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGrowingFleshRing$$Original = $CurioGrowingFleshRing;}
declare module "com.sammy.malum.common.spiritrite.effect.sacred.NurturingEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$NurturingEffectActor} from "com.sammy.malum.common.spiritrite.effect.sacred.NurturingEffectActor"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$HashMap} from "java.util.HashMap"

export class $NurturingEffect extends $SpiritRiteEntityEffect<($Mob)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>
static readonly "ACTORS": $HashMap<($Class<($Mob)>), ($NurturingEffectActor<(never)>)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $Mob$$Type): void
public "getTargetClass"(): $Class<($Mob)>
get "targetClass"(): $Class<($Mob)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NurturingEffect$$Type = ($NurturingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NurturingEffect$$Original = $NurturingEffect;}
declare module "com.sammy.malum.common.block.storage.stand.ItemStandBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ItemStandBlockEntity} from "com.sammy.malum.common.block.storage.stand.ItemStandBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemStandBlock<T extends $ItemStandBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
static readonly "DOWN": $VoxelShape
static readonly "WEST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "EAST": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStandBlock$$Type<T> = ($ItemStandBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStandBlock$$Original<T> = $ItemStandBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneProtectionItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneProtectionItem extends $MiracleRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneProtectionItem$$Type = ($RuneProtectionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneProtectionItem$$Original = $RuneProtectionItem;}
declare module "com.sammy.malum.common.item.curiosities.TemporarilyDisabledItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Holder} from "net.minecraft.core.Holder"

export class $TemporarilyDisabledItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "enable"(arg0: $ServerPlayer$$Type, arg1: integer): void
public static "disable"(arg0: $ServerPlayer$$Type, arg1: integer, arg2: $Supplier$$Type<($Item$$Type)>): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporarilyDisabledItem$$Type = ($TemporarilyDisabledItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemporarilyDisabledItem$$Original = $TemporarilyDisabledItem;}
declare module "com.sammy.malum.common.item.codex.EncyclopediaEsotericaItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"
import {$EncyclopediaArcanaItem} from "com.sammy.malum.common.item.codex.EncyclopediaArcanaItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $EncyclopediaEsotericaItem extends $EncyclopediaArcanaItem implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncyclopediaEsotericaItem$$Type = ($EncyclopediaEsotericaItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncyclopediaEsotericaItem$$Original = $EncyclopediaEsotericaItem;}
declare module "com.sammy.malum.common.item.augment.WarpingEngineItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WarpingEngineItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "skipForward"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ArtificeAttributeData$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpingEngineItem$$Type = ($WarpingEngineItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarpingEngineItem$$Original = $WarpingEngineItem;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.rite_pylon.ArcanaPylonComponentBlock" {
import {$ObeliskComponentBlock} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskComponentBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcanaPylonComponentBlock extends $ObeliskComponentBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Item$$Type)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanaPylonComponentBlock$$Type = ($ArcanaPylonComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanaPylonComponentBlock$$Original = $ArcanaPylonComponentBlock;}
declare module "com.sammy.malum.common.item.curiosities.armor.SoulStainedSteelArmorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MalumArmorItem} from "com.sammy.malum.common.item.curiosities.armor.MalumArmorItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $SoulStainedSteelArmorItem extends $MalumArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type)

public "getArmorTexture"(): $ResourceLocation
public "createExtraAttributes"(): $List<($ItemAttributeModifiers$Entry)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "armorTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulStainedSteelArmorItem$$Type = ($SoulStainedSteelArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulStainedSteelArmorItem$$Original = $SoulStainedSteelArmorItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneCullingItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneCullingItem extends $MiracleRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneCullingItem$$Type = ($RuneCullingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneCullingItem$$Original = $RuneCullingItem;}
declare module "com.sammy.malum.common.block.blight.BlightedPlantBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IShearable$$Interface} from "net.neoforged.neoforge.common.IShearable"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlightedPlantBlock extends $BushBlock implements $BonemealableBlock$$Interface, $IShearable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlightedPlantBlock)>
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

public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "handler$chj000$apothic_enchanting$apoth_handleShearFortune"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
public "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
public "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
public "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "handler$chj000$apothic_enchanting$apoth_handleShearEnchantments"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedPlantBlock$$Type = ($BlightedPlantBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightedPlantBlock$$Original = $BlightedPlantBlock;}
declare module "com.sammy.malum.common.item.disc.AestheticaMusicDiscItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $AestheticaMusicDiscItem extends $Item implements $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getVoidParticleIntensity"(): float
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "asHolder"(): $Holder
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AestheticaMusicDiscItem$$Type = ($AestheticaMusicDiscItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AestheticaMusicDiscItem$$Original = $AestheticaMusicDiscItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneHowlingGale" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneHowlingGale extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneHowlingGale$$Type = ($RuneHowlingGale);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneHowlingGale$$Original = $RuneHowlingGale;}
declare module "com.sammy.malum.common.effect.geas.TrueShotEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $TrueShotEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueShotEffect$$Type = ($TrueShotEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrueShotEffect$$Original = $TrueShotEffect;}
declare module "com.sammy.malum.common.item.GeasItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem$$Interface} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$ItemTooltipEvent$$Type} from "net.neoforged.neoforge.event.entity.player.ItemTooltipEvent"
import {$ICurio$SoundInfo} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export class $GeasItem extends $Item implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface, $ICurioItem$$Interface {
static readonly "GEAS": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "CREATIVE": StringJS
static readonly "CREATIVE_HELP": StringJS
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "SWORN": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
public static "addGeasTooltip"(arg0: $ItemTooltipEvent$$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
public "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeasItem$$Type = ($GeasItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeasItem$$Original = $GeasItem;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavebreaker.WaveBreakerBlockEntity" {
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritDiodeBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritDiodeBlockEntity$TimeIntervalType} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveBreakerBlockEntity extends $SpiritDiodeBlockEntity {
 "closeDelay": integer
 "pendingSignal": integer
 "visualTransitionEnd": integer
 "outputSignal": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "visualTransitionStart": integer
 "type": $SpiritDiodeBlockEntity$TimeIntervalType
 "cachedInputSignal": integer
 "visualStartTime": long
 "visualTransitionDuration": integer
 "frequency": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveBreakerBlockEntity$$Type = ($WaveBreakerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveBreakerBlockEntity$$Original = $WaveBreakerBlockEntity;}
declare module "com.sammy.malum.common.block.VarnishedTerracottaBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$GlazedTerracottaBlock} from "net.minecraft.world.level.block.GlazedTerracottaBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $VarnishedTerracottaBlock extends $GlazedTerracottaBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($GlazedTerracottaBlock)>
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarnishedTerracottaBlock$$Type = ($VarnishedTerracottaBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VarnishedTerracottaBlock$$Original = $VarnishedTerracottaBlock;}
declare module "com.sammy.malum.common.item.ether.EtherItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$DyeItem$$Type} from "net.minecraft.world.item.DyeItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$EtherBlockEntity$$Type} from "com.sammy.malum.common.block.ether.EtherBlockEntity"
import {$DyedItemColor} from "net.minecraft.world.item.component.DyedItemColor"

export class $EtherItem extends $BlockItem implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "DEFAULT_FIRST_COLOR": $DyedItemColor
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_SECOND_COLOR": $DyedItemColor
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: boolean)

public static "canApplySecondaryColor"(arg0: $ItemStack$$Type): boolean
public static "applyDyesToSecondaryColor"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DyeItem$$Type)>): $ItemStack
public static "getSecondaryColor"(arg0: $ItemStack$$Type): integer
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public static "getPrimaryColor"(arg0: $ItemStack$$Type): integer
public static "isIridescent"(arg0: $EtherBlockEntity$$Type): boolean
public static "isIridescent"(arg0: $ItemStack$$Type): boolean
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
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
export type $EtherItem$$Type = ($EtherItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherItem$$Original = $EtherItem;}
declare module "com.sammy.malum.common.block.nature.soulwood.SoulwoodBlock" {
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
import {$LodestoneLogBlock} from "team.lodestar.lodestone.systems.block.LodestoneLogBlock"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulwoodBlock extends $LodestoneLogBlock {
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

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodBlock$$Type = ($SoulwoodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwoodBlock$$Original = $SoulwoodBlock;}
declare module "com.sammy.malum.common.item.impetus.NodeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $NodeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeItem$$Type = ($NodeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeItem$$Original = $NodeItem;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AbstractGustGizmoBlockEntity} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractGustGizmoBlock<T extends $AbstractGustGizmoBlockEntity> extends $LodestoneEntityBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGustGizmoBlock$$Type<T> = ($AbstractGustGizmoBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractGustGizmoBlock$$Original<T> = $AbstractGustGizmoBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.weapons.scythe.MalumScytheItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MalumScytheItem$ScytheDamage} from "com.sammy.malum.common.item.curiosities.weapons.scythe.MalumScytheItem$ScytheDamage"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LodestoneCombatItem} from "team.lodestar.lodestone.systems.item.LodestoneCombatItem"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $MalumScytheItem extends $LodestoneCombatItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public static "canSweep"(arg0: $LivingEntity$$Type): boolean
public static "isEnhanced"(arg0: $LivingEntity$$Type): boolean
public static "trySweep"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type, arg2: float): void
public static "replaceDamageSource"(arg0: $Player$$Type, arg1: $DamageSource$$Type): $DamageSource
public "getScytheSound"(arg0: boolean): $Holder<($SoundEvent)>
public static "getScytheDamage"(arg0: $DamageSource$$Type, arg1: $LivingEntity$$Type): $MalumScytheItem$ScytheDamage
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumScytheItem$$Type = ($MalumScytheItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumScytheItem$$Original = $MalumScytheItem;}
declare module "com.sammy.malum.common.item.augment.ShieldingApparatusItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ShieldingApparatusItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "shieldImpetus"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ArtificeAttributeData$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldingApparatusItem$$Type = ($ShieldingApparatusItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldingApparatusItem$$Original = $ShieldingApparatusItem;}
declare module "com.sammy.malum.common.item.BrillianceChunkItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $BrillianceChunkItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrillianceChunkItem$$Type = ($BrillianceChunkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrillianceChunkItem$$Original = $BrillianceChunkItem;}
declare module "com.sammy.malum.common.block.blight.scarstone.StrangeRootBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $StrangeRootBlock extends $BushBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StrangeRootBlock)>
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
export type $StrangeRootBlock$$Type = ($StrangeRootBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrangeRootBlock$$Original = $StrangeRootBlock;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.brilliant.BrillianceObeliskCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ObeliskCoreBlock} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BrilliantObeliskBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.brilliant.BrilliantObeliskBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrillianceObeliskCoreBlock extends $ObeliskCoreBlock<($BrilliantObeliskBlockEntity)> {
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

public "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrillianceObeliskCoreBlock$$Type = ($BrillianceObeliskCoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrillianceObeliskCoreBlock$$Original = $BrillianceObeliskCoreBlock;}
declare module "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity$RiteSparkAttributeData" {
import {$BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $BlockRiteEffectActivatorEntity$RiteSparkAttributeData {
constructor(arg0: $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType$$Type, arg1: integer)
constructor(arg0: $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType$$Type)

public "load"(arg0: $CompoundTag$$Type): void
public "getValue"(): float
public "save"(arg0: $CompoundTag$$Type): void
public "increase"(): boolean
public "decrease"(): boolean
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRiteEffectActivatorEntity$RiteSparkAttributeData$$Type = ($BlockRiteEffectActivatorEntity$RiteSparkAttributeData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRiteEffectActivatorEntity$RiteSparkAttributeData$$Original = $BlockRiteEffectActivatorEntity$RiteSparkAttributeData;}
declare module "com.sammy.malum.common.worldgen.ore.LayeredOreFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$List} from "java.util.List"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$OreFeature} from "net.minecraft.world.level.levelgen.feature.OreFeature"
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
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LayeredOreFeature extends $OreFeature {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
 "oreConfigurations": $List<($OreConfiguration)>
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

constructor(arg0: $Codec$$Type<($OreConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($OreConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredOreFeature$$Type = ($LayeredOreFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredOreFeature$$Original = $LayeredOreFeature;}
declare module "com.sammy.malum.common.item.augment.ImpurityStabilizer" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$List, $List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ArtificeAttributeType$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $ImpurityStabilizer extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "applyWeaknessTuning"(arg0: $ArtificeAttributeData$$Type, arg1: $List$$Type<($ArtificeAttributeType$$Type)>): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpurityStabilizer$$Type = ($ImpurityStabilizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImpurityStabilizer$$Original = $ImpurityStabilizer;}
declare module "com.sammy.malum.common.block.nature.IGradientedLeavesBlock" {
import {$Color} from "java.awt.Color"

export interface $IGradientedLeavesBlock$$Interface {
get "minColor"(): $Color
get "maxColor"(): $Color
}

export class $IGradientedLeavesBlock implements $IGradientedLeavesBlock$$Interface {
 "getMinColor"(): $Color
 "getMaxColor"(): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGradientedLeavesBlock$$Type = ($IGradientedLeavesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGradientedLeavesBlock$$Original = $IGradientedLeavesBlock;}
declare module "com.sammy.malum.common.entity.scythe.AbstractScytheProjectileEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ThrowableItemProjectile, $ThrowableItemProjectile$$Type} from "net.minecraft.world.entity.projectile.ThrowableItemProjectile"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $AbstractScytheProjectileEntity extends $ThrowableItemProjectile {
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
 "spinOffset": float
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
 "returnTimer": integer
 "hurtMarked": boolean
 "enemiesHit": integer
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "magicDamage": float
 "portalProcess": $PortalProcessor
 "slot": integer
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
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "age": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $EntityType$$Type<($ThrowableItemProjectile$$Type)>, arg1: $Level$$Type)
constructor(arg0: $EntityType$$Type<($ThrowableItemProjectile$$Type)>, arg1: double, arg2: double, arg3: double, arg4: $Level$$Type)

public "tick"(): void
public "isNoGravity"(): boolean
public "getPickRadius"(): float
public "ignoreExplosion"(arg0: $Explosion$$Type): boolean
public "setData"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: integer, arg4: integer): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "fireImmune"(): boolean
public "shootFromRotation"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "noGravity"(): boolean
get "pickRadius"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScytheProjectileEntity$$Type = ($AbstractScytheProjectileEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractScytheProjectileEntity$$Original = $AbstractScytheProjectileEntity;}
declare module "com.sammy.malum.common.block.blight.BlightedCoverageBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$MultifaceBlock} from "net.minecraft.world.level.block.MultifaceBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MultifaceSpreader} from "net.minecraft.world.level.block.MultifaceSpreader"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BlightedCoverageBlock extends $MultifaceBlock implements $BonemealableBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlightedCoverageBlock)>
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

public "getSpreader"(): $MultifaceSpreader
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "spreader"(): $MultifaceSpreader
get "type"(): $BonemealableBlock$Type
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedCoverageBlock$$Type = ($BlightedCoverageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightedCoverageBlock$$Original = $BlightedCoverageBlock;}
declare module "com.sammy.malum.common.block.curiosities.spirit_crucible.SpiritCrucibleCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SpiritCrucibleCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.spirit_crucible.SpiritCrucibleCoreBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritCrucibleCoreBlock<T extends $SpiritCrucibleCoreBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleCoreBlock$$Type<T> = ($SpiritCrucibleCoreBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCrucibleCoreBlock$$Original<T> = $SpiritCrucibleCoreBlock<(T)>;}
declare module "com.sammy.malum.common.block.storage.pedestal.WoodItemPedestalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemPedestalBlockEntity} from "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlockEntity"
import {$ItemPedestalBlock} from "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WoodItemPedestalBlock<T extends $ItemPedestalBlockEntity> extends $ItemPedestalBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodItemPedestalBlock$$Type<T> = ($WoodItemPedestalBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodItemPedestalBlock$$Original<T> = $WoodItemPedestalBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.totem.waveform.WaveformTotemBaseBlockEntity" {
import {$TotemBaseBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveformTotemBaseBlockEntity extends $TotemBaseBlockEntity {
readonly "corrupted": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($WaveformTotemBaseBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "updateRite"(arg0: $ServerLevel$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveformTotemBaseBlockEntity$$Type = ($WaveformTotemBaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveformTotemBaseBlockEntity$$Original = $WaveformTotemBaseBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.GustIgniterBlockEntity" {
import {$AbstractGustGizmoBlockEntity} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity"
import {$Direction} from "net.minecraft.core.Direction"
import {$AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity$GustGizmoInfo"
import {$WindTunnelBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.wind_tunnel.WindTunnelBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HashSet} from "java.util.HashSet"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$OpenStateBlockEntity$InboundInfo, $OpenStateBlockEntity$InboundInfo$$Type} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$OpenStateBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GustIgniterBlockEntity extends $AbstractGustGizmoBlockEntity {
 "closeDelay": integer
 "strength": integer
 "limiter": integer
 "modified": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "windArea": $AABB
 "windDirection": $Direction
 "windTunnels": $HashSet<($BlockPos)>

constructor(arg0: $BlockEntityType$$Type<($GustIgniterBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo<($OpenStateBlockEntity)>
public "bind"(arg0: $WindTunnelBlockEntity$$Type): void
public "activate"(arg0: boolean): void
public "deactivate"(): void
public "serverTick"(arg0: $ServerLevel$$Type): void
public "setInfo"(arg0: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type): void
public "onBreak"(arg0: $Player$$Type): void
public "getTunnelStrength"(): float
public "getTunnelLength"(): integer
public "createWindGust"(): void
public "toggleState"(arg0: $ServerLevel$$Type, arg1: boolean, arg2: $OpenStateBlockEntity$InboundInfo$$Type<(never)>): void
public "unbind"(arg0: $WindTunnelBlockEntity$$Type): void
public "getUpdatePacket"(): $Packet
set "info"(value: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type)
get "tunnelStrength"(): float
get "tunnelLength"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GustIgniterBlockEntity$$Type = ($GustIgniterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GustIgniterBlockEntity$$Original = $GustIgniterBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavemaker.WaveMakerBlockEntity" {
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritDiodeBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritDiodeBlockEntity$TimeIntervalType} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveMakerBlockEntity extends $SpiritDiodeBlockEntity {
 "closeDelay": integer
 "visualTransitionEnd": integer
 "outputSignal": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "visualTransitionStart": integer
 "inverted": boolean
 "type": $SpiritDiodeBlockEntity$TimeIntervalType
 "cachedInputSignal": integer
 "visualStartTime": long
 "visualTransitionDuration": integer
 "frequency": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getOutputSignal"(): integer
public "updateAnimation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public "resetState"(): $OpenStateBlockEntity$InboundInfo
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveMakerBlockEntity$$Type = ($WaveMakerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveMakerBlockEntity$$Original = $WaveMakerBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.totem.waveform.WaveformTotemBaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WaveformTotemBaseBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.waveform.WaveformTotemBaseBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$TotemBaseBlock} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveformTotemBaseBlock<T extends $WaveformTotemBaseBlockEntity> extends $TotemBaseBlock<(T)> {
readonly "corrupted": boolean
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveformTotemBaseBlock$$Type<T> = ($WaveformTotemBaseBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveformTotemBaseBlock$$Original<T> = $WaveformTotemBaseBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.tools.CatalystLobberItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractNitrateEntity, $AbstractNitrateEntity$$Type} from "com.sammy.malum.common.entity.nitrate.AbstractNitrateEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CatalystLobberItem extends $Item {
readonly "entitySupplier": $Function<($Player), ($AbstractNitrateEntity)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Function$$Type<($Player), ($AbstractNitrateEntity$$Type)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "getStateDisplay"(arg0: $ItemStack$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CatalystLobberItem$$Type = ($CatalystLobberItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CatalystLobberItem$$Original = $CatalystLobberItem;}
declare module "com.sammy.malum.common.effect.WickedIntentEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WickedIntentEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickedIntentEffect$$Type = ($WickedIntentEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WickedIntentEffect$$Original = $WickedIntentEffect;}
declare module "com.sammy.malum.common.effect.rite.aura.soulwood.OakenMightEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OakenMightEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "increaseDamage"(arg0: $LivingDamageEvent$Pre$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OakenMightEffect$$Type = ($OakenMightEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OakenMightEffect$$Original = $OakenMightEffect;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.encasement.WeepingWellDirectionalBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LodestoneDirectionalBlock} from "team.lodestar.lodestone.systems.block.LodestoneDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WeepingWellDirectionalBlock extends $LodestoneDirectionalBlock {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellDirectionalBlock$$Type = ($WeepingWellDirectionalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeepingWellDirectionalBlock$$Original = $WeepingWellDirectionalBlock;}
declare module "com.sammy.malum.common.item.augment.PrismaticFocusLensItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $PrismaticFocusLensItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrismaticFocusLensItem$$Type = ($PrismaticFocusLensItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrismaticFocusLensItem$$Original = $PrismaticFocusLensItem;}
declare module "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritDiodeBlockEntity, $SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritDiodeBlock<T extends $SpiritDiodeBlockEntity> extends $LodestoneEntityBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T, arg4: integer, arg5: integer): boolean
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "updateState"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T, arg4: integer, arg5: integer): integer
public "notifyNeighborsInFront"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T, arg4: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritDiodeBlock$$Type<T> = ($SpiritDiodeBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritDiodeBlock$$Original<T> = $SpiritDiodeBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.wind_tunnel.WindTunnelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AbstractGustGizmoBlock} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WindTunnelBlockEntity} from "com.sammy.malum.common.block.curiosities.gust_igniter.wind_tunnel.WindTunnelBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WindTunnelBlock extends $AbstractGustGizmoBlock<($WindTunnelBlockEntity)> {
static readonly "DOWN": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "RIGHT": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LEFT": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "isActive"(arg0: $BlockState$$Type): boolean
public "updateOcclusion"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getRelevantFaces"(arg0: $BlockState$$Type): ($Direction)[]
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "getDirectionProperty"(arg0: integer): $BooleanProperty
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindTunnelBlock$$Type = ($WindTunnelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindTunnelBlock$$Original = $WindTunnelBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneFieryEmbrace" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneFieryEmbrace extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneFieryEmbrace$$Type = ($RuneFieryEmbrace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneFieryEmbrace$$Original = $RuneFieryEmbrace;}
declare module "com.sammy.malum.common.recipe.node_cooking.NodeCookingSerializer$Factory" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $NodeCookingSerializer$Factory$$Interface<T extends $AbstractCookingRecipe> {

(arg0: StringJS, arg1: $Ingredient, arg2: $Ingredient, arg3: integer, arg4: float, arg5: integer): T
}

export class $NodeCookingSerializer$Factory<T extends $AbstractCookingRecipe> implements $NodeCookingSerializer$Factory$$Interface {
 "create"(arg0: StringJS, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: integer, arg4: float, arg5: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeCookingSerializer$Factory$$Type<T> = ((arg0: StringJS, arg1: $Ingredient, arg2: $Ingredient, arg3: integer, arg4: float, arg5: integer) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NodeCookingSerializer$Factory$$Original<T> = $NodeCookingSerializer$Factory<(T)>;}
declare module "com.sammy.malum.common.item.augment.core.SympathyDrive" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CoreAugmentItem} from "com.sammy.malum.common.item.augment.core.CoreAugmentItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $SympathyDrive extends $CoreAugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "repairImpetus"(arg0: $Level$$Type, arg1: $ArtificeAttributeData$$Type, arg2: $ItemStack$$Type): void
public static "completeCycle"(arg0: $ArtificeAttributeData$$Type, arg1: integer): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SympathyDrive$$Type = ($SympathyDrive);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SympathyDrive$$Original = $SympathyDrive;}
declare module "com.sammy.malum.common.effect.geas.ShakenFaithEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ShakenFaithEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShakenFaithEffect$$Type = ($ShakenFaithEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShakenFaithEffect$$Original = $ShakenFaithEffect;}
declare module "com.sammy.malum.common.block.curiosities.spirit_crucible.SpiritCrucibleComponentBlock" {
import {$MultiblockComponentBlock} from "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritCrucibleComponentBlock extends $MultiblockComponentBlock {
static readonly "RENDER_SHAPE": $VoxelShape
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "makeShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "makeRenderShape"(): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleComponentBlock$$Type = ($SpiritCrucibleComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCrucibleComponentBlock$$Original = $SpiritCrucibleComponentBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.aqueous.BlockGrowingRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockGrowingRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGrowingRiteEffect$$Type = ($BlockGrowingRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockGrowingRiteEffect$$Original = $BlockGrowingRiteEffect;}
declare module "com.sammy.malum.common.spiritrite.effect.aerial.AerialEmpowermentRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRiteEmpowermentEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEmpowermentEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $AerialEmpowermentRiteEffect extends $SpiritRiteEmpowermentEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialEmpowermentRiteEffect$$Type = ($AerialEmpowermentRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AerialEmpowermentRiteEffect$$Original = $AerialEmpowermentRiteEffect;}
declare module "com.sammy.malum.common.item.impetus.ImpetusItem" {
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ImpetusItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpetusItem$$Type = ($ImpetusItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImpetusItem$$Original = $ImpetusItem;}
declare module "com.sammy.malum.common.block.ether.EtherWallTorchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EtherBlock} from "com.sammy.malum.common.block.ether.EtherBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$EtherBlockEntity} from "com.sammy.malum.common.block.ether.EtherBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtherWallTorchBlock<T extends $EtherBlockEntity> extends $EtherBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDescriptionId"(): StringJS
public static "getShapeForState"(arg0: $BlockState$$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherWallTorchBlock$$Type<T> = ($EtherWallTorchBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherWallTorchBlock$$Original<T> = $EtherWallTorchBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$SpiritTypeProperty} from "com.sammy.malum.core.systems.spirit.SpiritTypeProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$TotemPoleBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.TotemPoleBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TotemPoleBlock<T extends $TotemPoleBlockEntity> extends $LodestoneEntityBlock<(T)> {
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
static readonly "SPIRIT_TYPE": $SpiritTypeProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>, arg2: boolean)

public "getLogBlock"(): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "isSoulwood"(): boolean
public static "createTotemPoleState"(arg0: $TotemPoleBlock$$Type<(never)>, arg1: $Direction$$Type, arg2: $SpiritLike$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "logBlock"(): $Block
get "soulwood"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemPoleBlock$$Type<T> = ($TotemPoleBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemPoleBlock$$Original<T> = $TotemPoleBlock<(T)>;}
declare module "com.sammy.malum.common.item.augment.core.CoreAugmentItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$List, $List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike, $SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $CoreAugmentItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $List$$Type<($SpiritLike$$Type)>, arg2: boolean, ...arg3: ($ArtificeModifier$$Type)[])

public "getAugmentTypeTranslator"(): StringJS
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "augmentTypeTranslator"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreAugmentItem$$Type = ($CoreAugmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoreAugmentItem$$Original = $CoreAugmentItem;}
declare module "com.sammy.malum.common.worldgen.tree.SoulwoodTreeFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
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
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$LodestoneWorldgenBuilderLayer$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneWorldgenBuilderLayer"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SoulwoodTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor()

public "addDownwardsTrunkConnections"(arg0: $WorldGenLevel$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BlockPos)>): $BlockPos
public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
public static "makeLeafSlice"(arg0: $LodestoneWorldgenBuilderLayer$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): void
public static "makeHangingLeaves"(arg0: $LodestoneWorldgenBuilderLayer$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): void
public static "createLeaves"(arg0: boolean, arg1: integer): $BlockState
public static "makeLeafBlob"(arg0: $LodestoneWorldgenBuilderLayer$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodTreeFeature$$Type = ($SoulwoodTreeFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwoodTreeFeature$$Original = $SoulwoodTreeFeature;}
declare module "com.sammy.malum.common.effect.rite.aura.soulwood.SkyTetherEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$LivingFallEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingFallEvent"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SkyTetherEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "onEntityFall"(arg0: $LivingFallEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyTetherEffect$$Type = ($SkyTetherEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyTetherEffect$$Original = $SkyTetherEffect;}
declare module "com.sammy.malum.common.block.ether.EtherBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DyedItemColor} from "net.minecraft.world.item.component.DyedItemColor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtherBlockEntity extends $LodestoneBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "secondColor": $DyedItemColor
 "firstColor": $DyedItemColor

constructor(arg0: $BlockEntityType$$Type<($EtherBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "clientTick"(arg0: $Level$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBlockEntity$$Type = ($EtherBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherBlockEntity$$Original = $EtherBlockEntity;}
declare module "com.sammy.malum.common.effect.ImminentDeliveranceEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ImminentDeliveranceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImminentDeliveranceEffect$$Type = ($ImminentDeliveranceEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImminentDeliveranceEffect$$Original = $ImminentDeliveranceEffect;}
declare module "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonComponentBlock" {
import {$MultiblockComponentBlock} from "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RepairPylonComponentBlock extends $MultiblockComponentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "TOP_SHAPE": $VoxelShape
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
static readonly "TOP": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "MIDDLE_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "makeMiddleShape"(): $VoxelShape
public static "makeTopShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairPylonComponentBlock$$Type = ($RepairPylonComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairPylonComponentBlock$$Original = $RepairPylonComponentBlock;}
declare module "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlockEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MalumItemHolderBlockEntity} from "com.sammy.malum.common.block.storage.MalumItemHolderBlockEntity"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPedestalBlockEntity extends $MalumItemHolderBlockEntity {
static readonly "PEDESTAL_ITEM_OFFSET": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<($ItemPedestalBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getItemOffset"(arg0: float): $Vec3
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPedestalBlockEntity$$Type = ($ItemPedestalBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPedestalBlockEntity$$Original = $ItemPedestalBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.tools.TinkeringToolItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder} from "net.minecraft.core.Holder"

export class $TinkeringToolItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TinkeringToolItem$$Type = ($TinkeringToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TinkeringToolItem$$Original = $TinkeringToolItem;}
declare module "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$VoidDepotBlockEntity} from "com.sammy.malum.common.block.curiosities.void_depot.VoidDepotBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidDepotBlock<T extends $VoidDepotBlockEntity> extends $LodestoneEntityBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidDepotBlock$$Type<T> = ($VoidDepotBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidDepotBlock$$Original<T> = $VoidDepotBlock<(T)>;}
declare module "com.sammy.malum.common.effect.gluttony.GluttonyEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$MobEffectEvent$Applicable$$Type} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MobEffectEvent$Added$$Type} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Added"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GluttonyEffect$GluttonyEffectProperties, $GluttonyEffect$GluttonyEffectProperties$$Type} from "com.sammy.malum.common.effect.gluttony.GluttonyEffect$GluttonyEffectProperties"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GluttonyEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "canApplyPotion"(arg0: $MobEffectEvent$Applicable$$Type): void
public static "createGluttony"(): $GluttonyEffect$GluttonyEffectProperties
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
public static "removeExistingHunger"(arg0: $MobEffectEvent$Added$$Type): void
public static "getGluttonyEffectType"(arg0: $LivingEntity$$Type): $Holder<($MobEffect)>
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public static "getGluttonyEffectProperties"(arg0: $LivingEntity$$Type, arg1: $Consumer$$Type<($GluttonyEffect$GluttonyEffectProperties)>): $GluttonyEffect$GluttonyEffectProperties
public static "applyGluttony"(arg0: $LivingEntity$$Type, arg1: $Consumer$$Type<($GluttonyEffect$GluttonyEffectProperties)>): $GluttonyEffect$GluttonyEffectProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$$Type = ($GluttonyEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GluttonyEffect$$Original = $GluttonyEffect;}
declare module "com.sammy.malum.common.block.curiosities.banner.SoulwovenBannerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$SoulwovenBannerPatternDataComponent} from "com.sammy.malum.common.data.component.SoulwovenBannerPatternDataComponent"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulwovenBannerBlockEntity extends $LodestoneBlockEntity {
 "patternData": $SoulwovenBannerPatternDataComponent
 "spirit": $SpiritArcanaType
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "intense": boolean

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "setSpirit"(arg0: $ServerLevel$$Type, arg1: $SpiritArcanaType$$Type): void
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwovenBannerBlockEntity$$Type = ($SoulwovenBannerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenBannerBlockEntity$$Original = $SoulwovenBannerBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.weapons.scythe.MagicScytheItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ISpiritAffiliatedItem$$Interface} from "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$MalumScytheItem} from "com.sammy.malum.common.item.curiosities.weapons.scythe.MalumScytheItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicScytheItem extends $MalumScytheItem implements $ISpiritAffiliatedItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public "getDefiningSpiritType"(): $SpiritLike
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "definingSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicScytheItem$$Type = ($MagicScytheItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicScytheItem$$Original = $MagicScytheItem;}
declare module "com.sammy.malum.common.effect.SilencedEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SilencedEffect extends $MobEffect {
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
export type $SilencedEffect$$Type = ($SilencedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SilencedEffect$$Original = $SilencedEffect;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity$GustGizmoInfo" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractGustGizmoBlockEntity, $AbstractGustGizmoBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity"
import {$Codec} from "com.mojang.serialization.Codec"
import {$OpenStateBlockEntity$InboundInfo$$Interface} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$OpenStateBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"
import {$LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $AbstractGustGizmoBlockEntity$GustGizmoInfo extends $Record implements $OpenStateBlockEntity$InboundInfo$$Interface<($AbstractGustGizmoBlockEntity)> {
static readonly "CODEC": $Codec<($AbstractGustGizmoBlockEntity$GustGizmoInfo)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($AbstractGustGizmoBlockEntity$GustGizmoInfo)>

constructor(strength: integer, modified: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modified"(): boolean
public "sync"(arg0: $AbstractGustGizmoBlockEntity$$Type): void
public "sync"(arg0: $LodestoneBlockEntity$$Type): void
public "strength"(): integer
public "sync"(arg0: $OpenStateBlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type = ({"modified"?: boolean, "strength"?: integer}) | ([modified?: boolean, strength?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Original = $AbstractGustGizmoBlockEntity$GustGizmoInfo;}
declare module "com.sammy.malum.common.item.cosmetic.curios.CurioTopHat" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioTopHat extends $MalumCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioTopHat$$Type = ($CurioTopHat);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioTopHat$$Original = $CurioTopHat;}
declare module "com.sammy.malum.common.item.codex.EncyclopediaArcanaItem" {
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

export class $EncyclopediaArcanaItem extends $Item {
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
export type $EncyclopediaArcanaItem$$Type = ($EncyclopediaArcanaItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncyclopediaArcanaItem$$Original = $EncyclopediaArcanaItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AbstractRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.AbstractRuneCurioItem"

export class $MiracleRuneCurioItem extends $AbstractRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MiracleRuneCurioItem$$Type = ($MiracleRuneCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MiracleRuneCurioItem$$Original = $MiracleRuneCurioItem;}
declare module "com.sammy.malum.common.spiritrite.effect.infernal.BlockSmeltingRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockSmeltingRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSmeltingRiteEffect$$Type = ($BlockSmeltingRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockSmeltingRiteEffect$$Original = $BlockSmeltingRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.pouch.RavenousPouchItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemEntityPickupEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent$Pre"
import {$MalumPouchContentsComponent, $MalumPouchContentsComponent$$Type} from "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MalumPouchItem} from "com.sammy.malum.common.item.curiosities.pouch.MalumPouchItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RavenousPouchItem extends $MalumPouchItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContents"(arg0: $ItemStack$$Type): $MalumPouchContentsComponent
public "emptyContents"(): $MalumPouchContentsComponent
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getFullnessDisplay"(arg0: $ItemStack$$Type): float
public "playInsertSound"(arg0: $Entity$$Type): void
public static "trySwallowItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public static "trySwallowItem"(arg0: $ItemEntityPickupEvent$Pre$$Type): void
public "setContents"(arg0: $ItemStack$$Type, arg1: $MalumPouchContentsComponent$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RavenousPouchItem$$Type = ($RavenousPouchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RavenousPouchItem$$Original = $RavenousPouchItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.spirit.CurioArcaneSpoilRing" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioArcaneSpoilRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioArcaneSpoilRing$$Type = ($CurioArcaneSpoilRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioArcaneSpoilRing$$Original = $CurioArcaneSpoilRing;}
declare module "com.sammy.malum.common.block.curiosities.mana_mote.ManaMoteBlockEntity" {
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ManaMoteBlockEntity extends $LodestoneBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManaMoteBlockEntity$$Type = ($ManaMoteBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ManaMoteBlockEntity$$Original = $ManaMoteBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneScorchingItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneScorchingItem extends $MiracleRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneScorchingItem$$Type = ($RuneScorchingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneScorchingItem$$Original = $RuneScorchingItem;}
declare module "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlockEntity" {
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$IAltarAccelerator} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator"
import {$Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AltarCraftingHelper$Ranking} from "com.sammy.malum.common.block.curiosities.spirit_altar.AltarCraftingHelper$Ranking"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritInfusionRecipe} from "com.sammy.malum.common.recipe.SpiritInfusionRecipe"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"

export class $SpiritAltarBlockEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier$$Interface {
 "isCrafting": boolean
 "warmupTimer": float
 "spiritInventory": $LodestoneBlockEntityInventory
static readonly "ALTAR_ITEM_OFFSET": $Vec3
 "exposedInventory": $Supplier<($IItemHandler)>
static readonly "HORIZONTAL_RANGE": integer
 "acceleratorPositions": $List<($BlockPos)>
 "spiritAmount": float
 "recipe": $SpiritInfusionRecipe
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory
 "speed": float
 "extrasInventory": $LodestoneBlockEntityInventory
 "spiritSpin": float
static readonly "VERTICAL_RANGE": integer
 "progress": integer
 "accelerators": $List<($IAltarAccelerator)>
 "possibleRecipes": $Map<($SpiritInfusionRecipe), ($AltarCraftingHelper$Ranking)>
 "idleProgress": integer

constructor(arg0: $BlockEntityType$$Type<($SpiritAltarBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "consume"(arg0: $ServerLevel$$Type): boolean
public "clientTick"(arg0: $Level$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "commonTick"(arg0: $Level$$Type): void
public "serverTick"(arg0: $ServerLevel$$Type): void
public "craft"(arg0: $ServerLevel$$Type): void
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getItemPos"(): $Vec3
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "recalibrateAccelerators"(): void
public "getCentralItemOffset"(): $Vec3
public "getSpinUp"(arg0: $Easing$$Type): float
public "getUpdatePacket"(): $Packet
get "itemPos"(): $Vec3
get "centralItemOffset"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAltarBlockEntity$$Type = ($SpiritAltarBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritAltarBlockEntity$$Original = $SpiritAltarBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.armor.SoulHunterArmorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MalumArmorItem} from "com.sammy.malum.common.item.curiosities.armor.MalumArmorItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $SoulHunterArmorItem extends $MalumArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type)

public "getArmorTexture"(): $ResourceLocation
public "createExtraAttributes"(): $List<($ItemAttributeModifiers$Entry)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "armorTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulHunterArmorItem$$Type = ($SoulHunterArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulHunterArmorItem$$Original = $SoulHunterArmorItem;}
declare module "com.sammy.malum.common.item.curiosities.tools.LamplightersTongsItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $LamplightersTongsItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LamplightersTongsItem$$Type = ($LamplightersTongsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LamplightersTongsItem$$Original = $LamplightersTongsItem;}
declare module "com.sammy.malum.common.block.curiosities.runic_workbench.RunicWorkbenchBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MalumItemHolderBlockEntity} from "com.sammy.malum.common.block.storage.MalumItemHolderBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RunicWorkbenchBlockEntity extends $MalumItemHolderBlockEntity {
static readonly "RUNIC_WORKBENCH_ITEM_OFFSET": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<($RunicWorkbenchBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "craft"(arg0: $ServerLevel$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "getItemOffset"(arg0: float): $Vec3
public "tryCraft"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean): boolean
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicWorkbenchBlockEntity$$Type = ($RunicWorkbenchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicWorkbenchBlockEntity$$Original = $RunicWorkbenchBlockEntity;}
declare module "com.sammy.malum.common.item.BlightedGunkItem" {
import {$ItemNameBlockItem} from "net.minecraft.world.item.ItemNameBlockItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Holder} from "net.minecraft.core.Holder"

export class $BlightedGunkItem extends $ItemNameBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
readonly "wallPlacement": $Block
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
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
export type $BlightedGunkItem$$Type = ($BlightedGunkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightedGunkItem$$Original = $BlightedGunkItem;}
declare module "com.sammy.malum.common.item.spirit.SpiritShardItem" {
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Color} from "java.awt.Color"
import {$Style} from "net.minecraft.network.chat.Style"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SpiritLike$$Type, $SpiritLike$$Interface} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $SpiritShardItem extends $Item implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface, $SpiritLike$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getSpirit"(): $SpiritArcanaType
public "getSpiritHolder"(): $SpiritHolder<($SpiritArcanaType)>
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getName"(): StringJS
public "matches"(arg0: $SpiritLike$$Type): boolean
public "getHolder"(): $Holder<($SpiritArcanaType)>
public "getRegistryName"(): $ResourceLocation
public "getStyle"(arg0: boolean): $Style
public "getStyle"(arg0: float): $Style
public "getTextColor"(arg0: float): $TextColor
public "getTextColor"(arg0: boolean): $TextColor
public "getLangKey"(): StringJS
public "getAlphaMultiplier"(): float
public "getSecondaryColor"(): $Color
public "getSpiritShard"(): $SpiritShardItem
public "getAnalogSignal"(): integer
public "getItemColor"(): $Color
public "getFlavourKey"(): StringJS
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "getPrimaryColor"(): $Color
public "getCountedKey"(): StringJS
public "getSpiritStack"(arg0: integer): $ItemStack
public "getSpiritStack"(): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "spirit"(): $SpiritArcanaType
get "spiritHolder"(): $SpiritHolder<($SpiritArcanaType)>
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "spiritShard"(): $SpiritShardItem
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritShardItem$$Type = ($SpiritShardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritShardItem$$Original = $SpiritShardItem;}
declare module "com.sammy.malum.common.block.curiosities.banner.SoulwovenBannerBlock$BannerType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SoulwovenBannerBlock$BannerType extends $Enum<($SoulwovenBannerBlock$BannerType)> implements $StringRepresentable$$Interface {
static readonly "MOUNTED_EAST": $SoulwovenBannerBlock$BannerType
static readonly "HANGING_Z": $SoulwovenBannerBlock$BannerType
static readonly "MOUNTED_NORTH": $SoulwovenBannerBlock$BannerType
static readonly "HANGING_X": $SoulwovenBannerBlock$BannerType
static readonly "MOUNTED_SOUTH": $SoulwovenBannerBlock$BannerType
static readonly "MOUNTED_WEST": $SoulwovenBannerBlock$BannerType
readonly "direction": $Direction

public static "values"(): ($SoulwovenBannerBlock$BannerType)[]
public static "valueOf"(arg0: StringJS): $SoulwovenBannerBlock$BannerType
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
export type $SoulwovenBannerBlock$BannerType$$Type = (("hanging_x") | ("hanging_z") | ("mounted_north") | ("mounted_south") | ("mounted_west") | ("mounted_east"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenBannerBlock$BannerType$$Original = $SoulwovenBannerBlock$BannerType;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneIgneousSolaceItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneIgneousSolaceItem extends $MadnessRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneIgneousSolaceItem$$Type = ($RuneIgneousSolaceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneIgneousSolaceItem$$Original = $RuneIgneousSolaceItem;}
declare module "com.sammy.malum.common.effect.geas.GleefulTargetEffect" {
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

export class $GleefulTargetEffect extends $MobEffect {
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
export type $GleefulTargetEffect$$Type = ($GleefulTargetEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GleefulTargetEffect$$Original = $GleefulTargetEffect;}
declare module "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional} from "java.util.Optional"
import {$EntityDimensions} from "net.minecraft.world.entity.EntityDimensions"
import {$TrailPointBuilder} from "team.lodestar.lodestone.systems.rendering.trail.TrailPointBuilder"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MovingEntity} from "com.sammy.malum.common.entity.MovingEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Stack} from "java.util.Stack"
import {$ScoreHolder} from "net.minecraft.world.scores.ScoreHolder"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$PortalProcessor} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockRiteEffectActivatorEntity$RiteSparkAttributeData, $BlockRiteEffectActivatorEntity$RiteSparkAttributeData$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity$RiteSparkAttributeData"
import {$SpiritRiteBlockEffect$$Type} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockRiteEffectActivatorEntity extends $MovingEntity {
readonly "potency": $BlockRiteEffectActivatorEntity$RiteSparkAttributeData
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack
readonly "trail": $TrailPointBuilder
 "stuckSpeedMultiplier": $Vec3
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
readonly "impact": $BlockRiteEffectActivatorEntity$RiteSparkAttributeData
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
 "hurtMarked": boolean
 "invulnerableTime": integer
readonly "distance": $BlockRiteEffectActivatorEntity$RiteSparkAttributeData
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
readonly "speed": $BlockRiteEffectActivatorEntity$RiteSparkAttributeData
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
readonly "longTrail": $TrailPointBuilder
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "attributes": $List<($BlockRiteEffectActivatorEntity$RiteSparkAttributeData)>
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $Level$$Type)
constructor(arg0: $Level$$Type, arg1: $SpiritRiteBlockEffect$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type)

public "duplicate"(): void
public "tick"(): void
public "upgrade"(arg0: $BlockRiteEffectActivatorEntity$RiteSparkAttributeData$$Type): void
public "isPickable"(): boolean
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setSpirit"(arg0: $SpiritArcanaType$$Type): void
public "getSpiritType"(): $SpiritArcanaType
public "triggerRiteEffect"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "updateMotion"(): void
public "getVisualEffectScalar"(): float
public "updateDirection"(arg0: $Direction$$Type): void
public "leechHealth"(): void
public "notifyTotem"(): void
public "updatePosition"(): boolean
public "recoverHealth"(): void
public "getFriction"(): float
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "pickable"(): boolean
set "spirit"(value: $SpiritArcanaType$$Type)
get "spiritType"(): $SpiritArcanaType
get "visualEffectScalar"(): float
get "friction"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRiteEffectActivatorEntity$$Type = ($BlockRiteEffectActivatorEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRiteEffectActivatorEntity$$Original = $BlockRiteEffectActivatorEntity;}
declare module "com.sammy.malum.common.spiritrite.effect.sacred.HealEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $HealEffect extends $SpiritRiteEntityEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "getTargetClass"(): $Class<($LivingEntity)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealEffect$$Type = ($HealEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HealEffect$$Original = $HealEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneVitalityItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneVitalityItem extends $MiracleRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneVitalityItem$$Type = ($RuneVitalityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneVitalityItem$$Original = $RuneVitalityItem;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavecharger.WaveChargerBlockEntity" {
import {$OpenStateBlockEntity$InboundInfo} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritDiodeBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritDiodeBlockEntity$TimeIntervalType} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveChargerBlockEntity extends $SpiritDiodeBlockEntity {
 "closeDelay": integer
 "visualTransitionEnd": integer
 "outputSignal": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "visualTransitionStart": integer
 "type": $SpiritDiodeBlockEntity$TimeIntervalType
 "cachedInputSignal": integer
 "visualStartTime": long
 "visualTransitionDuration": integer
 "frequency": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo
public "getUpdatePacket"(): $Packet
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveChargerBlockEntity$$Type = ($WaveChargerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveChargerBlockEntity$$Original = $WaveChargerBlockEntity;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.AbstractRuneCurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ParticleEmitterHandler$ItemParticleSupplier$$Interface} from "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType, $AbstractMalumCurioItem$MalumTrinketType$$Type} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $AbstractRuneCurioItem extends $MalumCurioItem implements $ParticleEmitterHandler$ItemParticleSupplier$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>, arg2: $AbstractMalumCurioItem$MalumTrinketType$$Type)

public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRuneCurioItem$$Type = ($AbstractRuneCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractRuneCurioItem$$Original = $AbstractRuneCurioItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.brooches.CurioGlassBrooch" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioGlassBrooch extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioGlassBrooch$$Type = ($CurioGlassBrooch);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioGlassBrooch$$Original = $CurioGlassBrooch;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.spirit.CurioMirrorNecklace" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioMirrorNecklace extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioMirrorNecklace$$Type = ($CurioMirrorNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioMirrorNecklace$$Original = $CurioMirrorNecklace;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.scythe.CurioNarrowEdgeNecklace" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioNarrowEdgeNecklace extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioNarrowEdgeNecklace$$Type = ($CurioNarrowEdgeNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioNarrowEdgeNecklace$$Original = $CurioNarrowEdgeNecklace;}
declare module "com.sammy.malum.common.block.nature.soulwood.SoulwoodLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$MalumLogBLock} from "com.sammy.malum.common.block.nature.MalumLogBLock"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulwoodLogBlock extends $MalumLogBLock {
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

public "createTotemPole"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $SpiritLike$$Type): boolean
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodLogBlock$$Type = ($SoulwoodLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwoodLogBlock$$Original = $SoulwoodLogBlock;}
declare module "com.sammy.malum.common.item.spirit.FusedConsciousnessItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $FusedConsciousnessItem extends $Item implements $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getVoidParticleIntensity"(): float
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "asHolder"(): $Holder
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusedConsciousnessItem$$Type = ($FusedConsciousnessItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FusedConsciousnessItem$$Original = $FusedConsciousnessItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneVolatileDistortionItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneVolatileDistortionItem extends $MiracleRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneVolatileDistortionItem$$Type = ($RuneVolatileDistortionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneVolatileDistortionItem$$Original = $RuneVolatileDistortionItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.weeping.CurioWatcherNecklace" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EntityTickEvent$Pre$$Type} from "net.neoforged.neoforge.event.tick.EntityTickEvent$Pre"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioWatcherNecklace extends $MalumCurioItem implements $IMalumEventResponder$$Interface, $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "entityTick"(arg0: $EntityTickEvent$Pre$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioWatcherNecklace$$Type = ($CurioWatcherNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioWatcherNecklace$$Original = $CurioWatcherNecklace;}
declare module "com.sammy.malum.common.data.component.pouch.PouchContentsWeightProcessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"

export class $PouchContentsWeightProcessor {
constructor()

public "getWeightModifier"(arg0: $ItemStack$$Type): integer
public "computeContentWeight"(arg0: $List$$Type<($ItemStack$$Type)>): $Fraction
public "getWeight"(arg0: $ItemStack$$Type): $Fraction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PouchContentsWeightProcessor$$Type = ($PouchContentsWeightProcessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PouchContentsWeightProcessor$$Original = $PouchContentsWeightProcessor;}
declare module "com.sammy.malum.common.spiritrite.effect.infernal.InfernalEmpowermentRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRiteEmpowermentEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEmpowermentEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $InfernalEmpowermentRiteEffect extends $SpiritRiteEmpowermentEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfernalEmpowermentRiteEffect$$Type = ($InfernalEmpowermentRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfernalEmpowermentRiteEffect$$Original = $InfernalEmpowermentRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneUnnaturalStaminaItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneUnnaturalStaminaItem extends $MadnessRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public static "forceSprint"(arg0: $LivingEntity$$Type): boolean
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneUnnaturalStaminaItem$$Type = ($RuneUnnaturalStaminaItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneUnnaturalStaminaItem$$Original = $RuneUnnaturalStaminaItem;}
declare module "com.sammy.malum.common.item.spirit.ISpiritAffiliatedItem" {
import {$SpiritLike, $SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"

export interface $ISpiritAffiliatedItem$$Interface {

(): $SpiritLike$$Type
get "definingSpiritType"(): $SpiritLike
}

export class $ISpiritAffiliatedItem implements $ISpiritAffiliatedItem$$Interface {
 "getDefiningSpiritType"(): $SpiritLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpiritAffiliatedItem$$Type = (() => $SpiritLike$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpiritAffiliatedItem$$Original = $ISpiritAffiliatedItem;}
declare module "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo" {
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$OpenStateBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"

export interface $OpenStateBlockEntity$InboundInfo$$Interface<T extends $LodestoneBlockEntity> {

(arg0: T): void
}

export class $OpenStateBlockEntity$InboundInfo<T extends $LodestoneBlockEntity> implements $OpenStateBlockEntity$InboundInfo$$Interface {
 "sync"(arg0: $OpenStateBlockEntity$$Type): void
 "sync"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenStateBlockEntity$InboundInfo$$Type<T> = ((arg0: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpenStateBlockEntity$InboundInfo$$Original<T> = $OpenStateBlockEntity$InboundInfo<(T)>;}
declare module "com.sammy.malum.common.block.blight.BlightedSoulwoodBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlightedSoulwoodBlock extends $Block {
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

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlightedSoulwoodBlock$$Type = ($BlightedSoulwoodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlightedSoulwoodBlock$$Original = $BlightedSoulwoodBlock;}
declare module "com.sammy.malum.common.block.the_device.TheDevice" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TheDevice extends $Block {
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

public "playSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheDevice$$Type = ($TheDevice);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TheDevice$$Original = $TheDevice;}
declare module "com.sammy.malum.common.spiritrite.effect.sacred.NourishingEffect" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $NourishingEffect extends $SpiritRitePotionEffect<($Player)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($Player)>
get "targetClass"(): $Class<($Player)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NourishingEffect$$Type = ($NourishingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NourishingEffect$$Original = $NourishingEffect;}
declare module "com.sammy.malum.common.block.nature.MalumLeavesBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$LeavesBlock} from "net.minecraft.world.level.block.LeavesBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$IGradientedLeavesBlock$$Interface} from "com.sammy.malum.common.block.nature.IGradientedLeavesBlock"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MalumLeavesBlock extends $LeavesBlock implements $IGradientedLeavesBlock$$Interface {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "COLOR": $IntegerProperty
readonly "minColor": $Color
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "maxColor": $Color
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($LeavesBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "DECAY_DISTANCE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Color$$Type, arg2: $Color$$Type)

public "getMinColor"(): $Color
public "getMaxColor"(): $Color
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumLeavesBlock$$Type = ($MalumLeavesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumLeavesBlock$$Original = $MalumLeavesBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.misc.CurioHarmonyNecklace" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEvent$LivingVisibilityEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent$LivingVisibilityEvent"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioHarmonyNecklace extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "preventDetection"(arg0: $LivingEvent$LivingVisibilityEvent$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHarmonyNecklace$$Type = ($CurioHarmonyNecklace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioHarmonyNecklace$$Original = $CurioHarmonyNecklace;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.soulward.CurioMagebaneBelt" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioMagebaneBelt extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioMagebaneBelt$$Type = ($CurioMagebaneBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioMagebaneBelt$$Original = $CurioMagebaneBelt;}
declare module "com.sammy.malum.common.block.curiosities.spirit_catalyzer.SpiritCatalyzerComponentBlock" {
import {$MultiblockComponentBlock} from "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritCatalyzerComponentBlock extends $MultiblockComponentBlock {
static readonly "NORTH_SOUTH_SHAPE": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "WEST_EAST_SHAPE": $VoxelShape
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "makeWestEastShape"(): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "makeNorthSouthShape"(): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCatalyzerComponentBlock$$Type = ($SpiritCatalyzerComponentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCatalyzerComponentBlock$$Original = $SpiritCatalyzerComponentBlock;}
declare module "com.sammy.malum.common.block.nature.soulwood.SoulwoodGrowthBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MalumSaplingBlock} from "com.sammy.malum.common.block.nature.MalumSaplingBlock"
import {$TreeGrower$$Type} from "net.minecraft.world.level.block.grower.TreeGrower"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SaplingBlock} from "net.minecraft.world.level.block.SaplingBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulwoodGrowthBlock extends $MalumSaplingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SaplingBlock)>
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $TreeGrower$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwoodGrowthBlock$$Type = ($SoulwoodGrowthBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwoodGrowthBlock$$Original = $SoulwoodGrowthBlock;}
declare module "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$OpenStateBlockEntity$InboundInfo, $OpenStateBlockEntity$InboundInfo$$Type} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity$InboundInfo"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OpenStateBlockEntity extends $LodestoneBlockEntity {
 "closeDelay": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "resetState"(): $OpenStateBlockEntity$InboundInfo<($OpenStateBlockEntity)>
public "getTinkeredBlock"(): $OpenStateBlockEntity
public "serverTick"(arg0: $ServerLevel$$Type): void
public "canTinker"(): boolean
public "toggleState"(arg0: $ServerLevel$$Type, arg1: boolean, arg2: $OpenStateBlockEntity$InboundInfo$$Type<(never)>): void
public "getUpdatePacket"(): $Packet
get "tinkeredBlock"(): $OpenStateBlockEntity
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenStateBlockEntity$$Type = ($OpenStateBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OpenStateBlockEntity$$Original = $OpenStateBlockEntity;}
declare module "com.sammy.malum.common.item.spirit.SpiritJarItem" {
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

export class $SpiritJarItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
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
export type $SpiritJarItem$$Type = ($SpiritJarItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritJarItem$$Original = $SpiritJarItem;}
declare module "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity$TimeIntervalType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SpiritDiodeBlockEntity$TimeIntervalType extends $Enum<($SpiritDiodeBlockEntity$TimeIntervalType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($SpiritDiodeBlockEntity$TimeIntervalType)>
static readonly "REDSTONE_TICK": $SpiritDiodeBlockEntity$TimeIntervalType
static readonly "SECOND": $SpiritDiodeBlockEntity$TimeIntervalType
static readonly "MINUTE": $SpiritDiodeBlockEntity$TimeIntervalType

public "getName"(): StringJS
public static "values"(): ($SpiritDiodeBlockEntity$TimeIntervalType)[]
public static "valueOf"(arg0: StringJS): $SpiritDiodeBlockEntity$TimeIntervalType
public "getText"(arg0: boolean): $Component
public "getText"(arg0: $SpiritDiodeBlockEntity$$Type): $Component
public "getSerializedName"(): StringJS
public "getLangKey"(): StringJS
public "getPluralLangKey"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "langKey"(): StringJS
get "pluralLangKey"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritDiodeBlockEntity$TimeIntervalType$$Type = (("redstone_tick") | ("second") | ("minute"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritDiodeBlockEntity$TimeIntervalType$$Original = $SpiritDiodeBlockEntity$TimeIntervalType;}
declare module "com.sammy.malum.common.effect.rite.aura.soulwood.GoodTidesEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GoodTidesEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "increaseFishingStats"(arg0: $Player$$Type): $Pair<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoodTidesEffect$$Type = ($GoodTidesEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoodTidesEffect$$Original = $GoodTidesEffect;}
declare module "com.sammy.malum.common.block.storage.MalumItemHolderBlockEntity" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemHolderBlockEntity} from "team.lodestar.lodestone.systems.blockentity.ItemHolderBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMalumSpecialItemAccessPoint$$Interface} from "com.sammy.malum.common.block.storage.IMalumSpecialItemAccessPoint"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MalumItemHolderBlockEntity extends $ItemHolderBlockEntity implements $IMalumSpecialItemAccessPoint$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<($MalumItemHolderBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "getItemPos"(arg0: float): $Vec3
public "getItemOffset"(arg0: float): $Vec3
public "getSuppliedInventory"(): $LodestoneBlockEntityInventory
public "getAccessPointBlockPos"(): $BlockPos
public "getItemPos"(): $Vec3
public "getUpdatePacket"(): $Packet
get "suppliedInventory"(): $LodestoneBlockEntityInventory
get "accessPointBlockPos"(): $BlockPos
get "itemPos"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumItemHolderBlockEntity$$Type = ($MalumItemHolderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumItemHolderBlockEntity$$Original = $MalumItemHolderBlockEntity;}
declare module "com.sammy.malum.common.item.banner.SoulwovenBannerBlockItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
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
import {$SoulwovenBannerPatternDataComponent$$Type} from "com.sammy.malum.common.data.component.SoulwovenBannerPatternDataComponent"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SoulwovenBannerBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "addBannerVariantsToCreativeTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public static "getBannerPattern"(arg0: $ItemStack$$Type): float
public static "tryAddBannerVariant"(arg0: $BuildCreativeModeTabContentsEvent$$Type, arg1: $SoulwovenBannerPatternDataComponent$$Type, arg2: boolean): void
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
export type $SoulwovenBannerBlockItem$$Type = ($SoulwovenBannerBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenBannerBlockItem$$Original = $SoulwovenBannerBlockItem;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.PrimordialSoupBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PrimordialSoupBlock extends $Block {
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
static readonly "TOP": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimordialSoupBlock$$Type = ($PrimordialSoupBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrimordialSoupBlock$$Original = $PrimordialSoupBlock;}
declare module "com.sammy.malum.common.block.curiosities.spirit_crucible.SpiritCrucibleCoreBlockEntity" {
import {$SpiritFocusingRecipe} from "com.sammy.malum.common.recipe.SpiritFocusingRecipe"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBlockEntityInventory} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$IArtificeAcceptor$$Interface} from "com.sammy.malum.core.systems.artifice.IArtificeAcceptor"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArtificeAttributeData, $ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMalumSpecialItemAccessPoint$$Interface} from "com.sammy.malum.common.block.storage.IMalumSpecialItemAccessPoint"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MultiBlockCoreEntity} from "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"

export class $SpiritCrucibleCoreBlockEntity extends $MultiBlockCoreEntity implements $IArtificeAcceptor$$Interface, $IMalumSpecialItemAccessPoint$$Interface, $IItemHandlerSupplier$$Interface {
 "isCrafting": boolean
 "spiritInventory": $LodestoneBlockEntityInventory
static readonly "CRUCIBLE_CORE_AUGMENT_OFFSET": $Vec3
static readonly "CRUCIBLE_ITEM_OFFSET": $Vec3
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
 "coreAugmentInventory": $LodestoneBlockEntityInventory
 "recipe": $SpiritFocusingRecipe
 "spiritAmount": float
 "crackTimer": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory
readonly "structure": $MultiBlockStructure
 "queuedCracks": integer
 "spiritSpin": float
 "progress": float
 "attributes": $ArtificeAttributeData
 "augmentInventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<($SpiritCrucibleCoreBlockEntity$$Type)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getAttributes"(): $ArtificeAttributeData
public "clientTick"(arg0: $Level$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateRecipe"(): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "serverTick"(arg0: $ServerLevel$$Type): void
public "craft"(arg0: $ServerLevel$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "applyAugments"(arg0: $Consumer$$Type<($ItemStack)>): void
public "getItemPos"(arg0: float): $Vec3
public "getSpiritItemOffset"(arg0: integer, arg1: float): $Vec3
public "getVisualAccelerationPoint"(): $Vec3
public "getAugmentItemOffset"(arg0: integer, arg1: float): $Vec3
public "getActiveSpiritType"(): $SpiritArcanaType
public "getSuppliedInventory"(): $LodestoneBlockEntityInventory
public "getAccessPointBlockPos"(): $BlockPos
public "setAttributes"(arg0: $ArtificeAttributeData$$Type): void
public "asBlockEntity"(): $BlockEntity
public "getLookupRadius"(): integer
public "bindModifiers"(arg0: $Level$$Type): void
public "invalidateModifiers"(arg0: $Level$$Type): void
public "recalibrateAccelerators"(arg0: $Level$$Type): void
public "getItemPos"(): $Vec3
public "getUpdatePacket"(): $Packet
get "visualAccelerationPoint"(): $Vec3
get "activeSpiritType"(): $SpiritArcanaType
get "suppliedInventory"(): $LodestoneBlockEntityInventory
get "accessPointBlockPos"(): $BlockPos
get "lookupRadius"(): integer
get "itemPos"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritCrucibleCoreBlockEntity$$Type = ($SpiritCrucibleCoreBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritCrucibleCoreBlockEntity$$Original = $SpiritCrucibleCoreBlockEntity;}
declare module "com.sammy.malum.common.effect.GrimCertaintyEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $GrimCertaintyEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrimCertaintyEffect$$Type = ($GrimCertaintyEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrimCertaintyEffect$$Original = $GrimCertaintyEffect;}
declare module "com.sammy.malum.common.block.curiosities.spirit_altar.AltarCraftingHelper$Ranking" {
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Record} from "java.lang.Record"

export class $AltarCraftingHelper$Ranking extends $Record implements $Comparable$$Interface<($AltarCraftingHelper$Ranking)> {
constructor(inputItemCount: integer, spiritStackCount: integer, spiritItemCount: integer, ingredientStackCount: integer, ingredientItemCount: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $AltarCraftingHelper$Ranking$$Type): integer
public "inputItemCount"(): integer
public "spiritStackCount"(): integer
public "spiritItemCount"(): integer
public "ingredientItemCount"(): integer
public "ingredientStackCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltarCraftingHelper$Ranking$$Type = ({"spiritStackCount"?: integer, "spiritItemCount"?: integer, "inputItemCount"?: integer, "ingredientItemCount"?: integer, "ingredientStackCount"?: integer}) | ([spiritStackCount?: integer, spiritItemCount?: integer, inputItemCount?: integer, ingredientItemCount?: integer, ingredientStackCount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AltarCraftingHelper$Ranking$$Original = $AltarCraftingHelper$Ranking;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.rotten.CurioStarvedBelt" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioStarvedBelt extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioStarvedBelt$$Type = ($CurioStarvedBelt);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioStarvedBelt$$Original = $CurioStarvedBelt;}
declare module "com.sammy.malum.common.effect.geas.AvariceEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AvariceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "addFortune"(arg0: $LivingEntity$$Type, arg1: $Vec3$$Type, arg2: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AvariceEffect$$Type = ($AvariceEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AvariceEffect$$Original = $AvariceEffect;}
declare module "com.sammy.malum.common.spiritrite.effect.infernal.BurningFervorRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $BurningFervorRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BurningFervorRiteEffect$$Type = ($BurningFervorRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BurningFervorRiteEffect$$Original = $BurningFervorRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.weapons.WeightOfWorldsItem" {
import {$LodestoneAxeItem} from "team.lodestar.lodestone.systems.item.tools.LodestoneAxeItem"
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $WeightOfWorldsItem extends $LodestoneAxeItem implements $ItemEventHandler$IEventResponder$$Interface {
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

public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightOfWorldsItem$$Type = ($WeightOfWorldsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeightOfWorldsItem$$Original = $WeightOfWorldsItem;}
declare module "com.sammy.malum.common.block.blight.scarstone.ScarstoneBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ScarstoneBlock extends $Block {
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
export type $ScarstoneBlock$$Type = ($ScarstoneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScarstoneBlock$$Original = $ScarstoneBlock;}
declare module "com.sammy.malum.common.spiritrite.effect.earthen.EarthenEmpowermentRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRiteEmpowermentEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEmpowermentEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $EarthenEmpowermentRiteEffect extends $SpiritRiteEmpowermentEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthenEmpowermentRiteEffect$$Type = ($EarthenEmpowermentRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EarthenEmpowermentRiteEffect$$Original = $EarthenEmpowermentRiteEffect;}
declare module "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$OpenStateBlockEntity} from "com.sammy.malum.common.block.curiosities.redstone.OpenStateBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type} from "com.sammy.malum.common.block.curiosities.gust_igniter.AbstractGustGizmoBlockEntity$GustGizmoInfo"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractGustGizmoBlockEntity extends $OpenStateBlockEntity {
 "closeDelay": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($AbstractGustGizmoBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setInfo"(arg0: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type): void
public "getUpdatePacket"(): $Packet
set "info"(value: $AbstractGustGizmoBlockEntity$GustGizmoInfo$$Type)
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGustGizmoBlockEntity$$Type = ($AbstractGustGizmoBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractGustGizmoBlockEntity$$Original = $AbstractGustGizmoBlockEntity;}
declare module "com.sammy.malum.common.spiritrite.effect.aerial.BlockAscensionRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $BlockAscensionRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAscensionRiteEffect$$Type = ($BlockAscensionRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockAscensionRiteEffect$$Original = $BlockAscensionRiteEffect;}
declare module "com.sammy.malum.common.item.food.SplashOfGluttonyItem" {
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

export class $SplashOfGluttonyItem extends $Item {
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
export type $SplashOfGluttonyItem$$Type = ($SplashOfGluttonyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashOfGluttonyItem$$Original = $SplashOfGluttonyItem;}
declare module "com.sammy.malum.common.block.blight.scarstone.StrangeCrystalBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $StrangeCrystalBlock extends $Block {
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
export type $StrangeCrystalBlock$$Type = ($StrangeCrystalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrangeCrystalBlock$$Original = $StrangeCrystalBlock;}
declare module "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent$Mutable" {
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$List} from "java.util.List"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"
import {$PouchContentsWeightProcessor$$Type} from "com.sammy.malum.common.data.component.pouch.PouchContentsWeightProcessor"
import {$MalumPouchContentsComponent, $MalumPouchContentsComponent$$Type} from "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent"

export class $MalumPouchContentsComponent$Mutable {
constructor(arg0: $MalumPouchContentsComponent$$Type, arg1: $PouchContentsWeightProcessor$$Type)

public "addItem"(arg0: $ItemStack$$Type): void
public "tryTransfer"(arg0: $Slot$$Type, arg1: $Player$$Type): integer
public "getItems"(): $List<($ItemStack)>
public "weight"(): $Fraction
public "immutable"(): $MalumPouchContentsComponent
public "clearItems"(): void
public "containsItem"(arg0: $ItemLike$$Type): boolean
public "tryInsert"(arg0: $ItemStack$$Type): integer
public "removeOne"(): $ItemStack
get "items"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumPouchContentsComponent$Mutable$$Type = ($MalumPouchContentsComponent$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumPouchContentsComponent$Mutable$$Original = $MalumPouchContentsComponent$Mutable;}
declare module "com.sammy.malum.common.item.augment.IntricateAssemblyItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $IntricateAssemblyItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntricateAssemblyItem$$Type = ($IntricateAssemblyItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntricateAssemblyItem$$Original = $IntricateAssemblyItem;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.runewood.RunewoodObeliskBlockEntity" {
import {$MultiBlockStructure} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$ObeliskCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlockEntity"
import {$IAltarAccelerator$$Interface} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IAltarAccelerator$AltarAcceleratorType} from "com.sammy.malum.common.block.curiosities.spirit_altar.IAltarAccelerator$AltarAcceleratorType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpiritAltarBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.spirit_altar.SpiritAltarBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RunewoodObeliskBlockEntity extends $ObeliskCoreBlockEntity implements $IAltarAccelerator$$Interface {
static readonly "STRUCTURE": $Supplier<($MultiBlockStructure)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getAcceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
public "getParticleOffset"(): $Vec3
public "getAcceleration"(): float
public "addParticles"(arg0: $SpiritAltarBlockEntity$$Type, arg1: $SpiritArcanaType$$Type): void
public "canAccelerate"(): boolean
public "completeSpiritInfusion"(arg0: $ServerLevel$$Type): void
public "getUpdatePacket"(): $Packet
get "acceleratorType"(): $IAltarAccelerator$AltarAcceleratorType
get "particleOffset"(): $Vec3
get "acceleration"(): float
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodObeliskBlockEntity$$Type = ($RunewoodObeliskBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunewoodObeliskBlockEntity$$Original = $RunewoodObeliskBlockEntity;}
declare module "com.sammy.malum.common.block.curiosities.obelisk.rite_pylon.ArcanaPylonCoreBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ObeliskCoreBlock} from "com.sammy.malum.common.block.curiosities.obelisk.ObeliskCoreBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ArcanaPylonBlockEntity} from "com.sammy.malum.common.block.curiosities.obelisk.rite_pylon.ArcanaPylonBlockEntity"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcanaPylonCoreBlock extends $ObeliskCoreBlock<($ArcanaPylonBlockEntity)> {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanaPylonCoreBlock$$Type = ($ArcanaPylonCoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanaPylonCoreBlock$$Original = $ArcanaPylonCoreBlock;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TotemBaseBlockEntity} from "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TotemBaseBlock<T extends $TotemBaseBlockEntity> extends $LodestoneEntityBlock<(T)> {
readonly "corrupted": boolean
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)

public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlock$$Type<T> = ($TotemBaseBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemBaseBlock$$Original<T> = $TotemBaseBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.totem.RiteSparkInteractable" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity, $BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"

export interface $RiteSparkInteractable$$Interface {

(arg0: $ServerLevel, arg1: $BlockRiteEffectActivatorEntity): void
}

export class $RiteSparkInteractable implements $RiteSparkInteractable$$Interface {
 "travel"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiteSparkInteractable$$Type = ((arg0: $ServerLevel, arg1: $BlockRiteEffectActivatorEntity) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RiteSparkInteractable$$Original = $RiteSparkInteractable;}
declare module "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType" {
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType extends $Record {
static "SPEED": $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType
static "IMPACT": $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType
static "POTENCY": $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType
static "MAX_DISTANCE": $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType

constructor(arg0: StringJS, arg1: $List$$Type<(float)>)
constructor(name: StringJS, maxTier: integer, valuePerTier: $List$$Type<(float)>)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(arg0: integer): float
public "maxTier"(): integer
public "valuePerTier"(): $List<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType$$Type = ({"valuePerTier"?: $List$$Type<(float)>, "name"?: StringJS, "maxTier"?: integer}) | ([valuePerTier?: $List$$Type<(float)>, name?: StringJS, maxTier?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType$$Original = $BlockRiteEffectActivatorEntity$RiteSparkAttributeDataType;}
declare module "com.sammy.malum.common.item.augment.core.CausticCatalystItem" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$CoreAugmentItem} from "com.sammy.malum.common.item.augment.core.CoreAugmentItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $CausticCatalystItem extends $CoreAugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "scalePotency"(arg0: $ArtificeAttributeData$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CausticCatalystItem$$Type = ($CausticCatalystItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CausticCatalystItem$$Original = $CausticCatalystItem;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.totemic.RuneBurningFervor" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$TotemicRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.TotemicRuneCurioItem"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneBurningFervor extends $TotemicRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneBurningFervor$$Type = ($RuneBurningFervor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneBurningFervor$$Original = $RuneBurningFervor;}
declare module "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchBlockEntity" {
import {$WeaversWorkbenchItemHandler} from "com.sammy.malum.common.block.curiosities.weavers_workbench.WeaversWorkbenchItemHandler"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBlockCapabilityProvider$$Interface} from "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WeaversWorkbenchBlockEntity extends $LodestoneBlockEntity implements $IBlockCapabilityProvider$$Interface<($IItemHandler), ($Direction)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "itemHandler": $WeaversWorkbenchItemHandler

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "itemOffset"(): $Vec3
public "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: $Direction$$Type): $IItemHandler
public "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: any): any
public "getOutput"(): $ItemStack
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onCraft"(): void
public "getItemPos"(): $Vec3
public "tryCraft"(): $ItemStack
public "getUpdatePacket"(): $Packet
get "output"(): $ItemStack
get "itemPos"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaversWorkbenchBlockEntity$$Type = ($WeaversWorkbenchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeaversWorkbenchBlockEntity$$Original = $WeaversWorkbenchBlockEntity;}
declare module "com.sammy.malum.common.block.storage.pedestal.DecoratedItemPedestalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemPedestalBlockEntity} from "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlockEntity"
import {$ItemPedestalBlock} from "com.sammy.malum.common.block.storage.pedestal.ItemPedestalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DecoratedItemPedestalBlock<T extends $ItemPedestalBlockEntity> extends $ItemPedestalBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecoratedItemPedestalBlock$$Type<T> = ($DecoratedItemPedestalBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecoratedItemPedestalBlock$$Original<T> = $DecoratedItemPedestalBlock<(T)>;}
declare module "com.sammy.malum.common.block.curiosities.spirit_catalyzer.CatalyzerArtificeModifierSourceInstance" {
import {$ArtificeAttributeData$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeAttributeData"
import {$ArtificeModifierSourceInstance} from "com.sammy.malum.core.systems.artifice.ArtificeModifierSourceInstance"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SpiritCatalyzerCoreBlockEntity} from "com.sammy.malum.common.block.curiosities.spirit_catalyzer.SpiritCatalyzerCoreBlockEntity"
import {$ArtificeModifier$$Type} from "com.sammy.malum.core.systems.artifice.ArtificeModifier"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$IArtificeAcceptor, $IArtificeAcceptor$$Type} from "com.sammy.malum.core.systems.artifice.IArtificeAcceptor"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CatalyzerArtificeModifierSourceInstance extends $ArtificeModifierSourceInstance {
readonly "catalyzer": $SpiritCatalyzerCoreBlockEntity
readonly "sourcePosition": $BlockPos
static readonly "ID": $ResourceLocation
readonly "type": $ResourceLocation
readonly "maxAmount": integer
 "target": $IArtificeAcceptor

public "tickFocusing"(arg0: $ArtificeAttributeData$$Type): void
public "canModifyFocusing"(arg0: $ArtificeAttributeData$$Type): boolean
public "addParticles"(arg0: $IArtificeAcceptor$$Type, arg1: $SpiritArcanaType$$Type): void
public "consumesFuel"(): boolean
public "modifyFocusing"(arg0: $Consumer$$Type<($ArtificeModifier)>): void
public "applyAugments"(arg0: $Consumer$$Type<($ItemStack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CatalyzerArtificeModifierSourceInstance$$Type = ($CatalyzerArtificeModifierSourceInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CatalyzerArtificeModifierSourceInstance$$Original = $CatalyzerArtificeModifierSourceInstance;}
declare module "com.sammy.malum.common.worldgen.well.WeepingWellStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$StructurePiecesBuilder$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $WeepingWellStructure extends $Structure {
static readonly "CODEC": $MapCodec<($WeepingWellStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(never)>
public "place"(arg0: $Structure$GenerationContext$$Type, arg1: $StructurePiecesBuilder$$Type, arg2: $LevelHeightAccessor$$Type, arg3: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeepingWellStructure$$Type = ($WeepingWellStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeepingWellStructure$$Original = $WeepingWellStructure;}
declare module "com.sammy.malum.common.block.curiosities.repair_pylon.RepairPylonCoreBlockEntity$RepairPylonState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $RepairPylonCoreBlockEntity$RepairPylonState extends $Enum<($RepairPylonCoreBlockEntity$RepairPylonState)> implements $StringRepresentable$$Interface {
static readonly "REPAIRING": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "IDLE": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "CHARGING": $RepairPylonCoreBlockEntity$RepairPylonState
static readonly "SEARCHING": $RepairPylonCoreBlockEntity$RepairPylonState

public static "values"(): ($RepairPylonCoreBlockEntity$RepairPylonState)[]
public static "valueOf"(arg0: StringJS): $RepairPylonCoreBlockEntity$RepairPylonState
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
export type $RepairPylonCoreBlockEntity$RepairPylonState$$Type = (("idle") | ("searching") | ("active") | ("repairing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairPylonCoreBlockEntity$RepairPylonState$$Original = $RepairPylonCoreBlockEntity$RepairPylonState;}
declare module "com.sammy.malum.common.effect.geas.ArcanaphageEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ArcanaphageEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanaphageEffect$$Type = ($ArcanaphageEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcanaphageEffect$$Original = $ArcanaphageEffect;}
declare module "com.sammy.malum.common.item.curiosities.weapons.scythe.EdgeOfDeliveranceItem" {
import {$LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$MalumScytheItem} from "com.sammy.malum.common.item.curiosities.weapons.scythe.MalumScytheItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EdgeOfDeliveranceItem extends $MalumScytheItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "getScytheSound"(arg0: boolean): $Holder<($SoundEvent)>
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public static "triggerMalignantCrit"(arg0: $DamageContainer$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdgeOfDeliveranceItem$$Type = ($EdgeOfDeliveranceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdgeOfDeliveranceItem$$Original = $EdgeOfDeliveranceItem;}
declare module "com.sammy.malum.common.block.nature.MalumLogBLock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SpiritLike$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$LodestoneLogBlock} from "team.lodestar.lodestone.systems.block.LodestoneLogBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MalumLogBLock extends $LodestoneLogBlock {
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

public "createTotemPole"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $SpiritLike$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumLogBLock$$Type = ($MalumLogBLock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumLogBLock$$Original = $MalumLogBLock;}
declare module "com.sammy.malum.common.block.curiosities.redstone.wavebanker.WaveBankerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$WaveBankerBlockEntity, $WaveBankerBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.wavebanker.WaveBankerBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SpiritDiodeBlock} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritDiodeBlockEntity$$Type} from "com.sammy.malum.common.block.curiosities.redstone.SpiritDiodeBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaveBankerBlock extends $SpiritDiodeBlock<($WaveBankerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
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

public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "processUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBankerBlockEntity$$Type, arg4: integer, arg5: integer): boolean
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBankerBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "redstoneTicksUntilUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer, arg5: integer): integer
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SpiritDiodeBlockEntity$$Type, arg4: integer): boolean
public "shouldUpdateWhenNeighborChanged"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $WaveBankerBlockEntity$$Type, arg4: integer): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaveBankerBlock$$Type = ($WaveBankerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaveBankerBlock$$Original = $WaveBankerBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneRadialEmpowermentItem" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemEventHandler$IEventResponder$$Interface} from "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $RuneRadialEmpowermentItem extends $MadnessRuneCurioItem implements $ItemEventHandler$IEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneRadialEmpowermentItem$$Type = ($RuneRadialEmpowermentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneRadialEmpowermentItem$$Original = $RuneRadialEmpowermentItem;}
declare module "com.sammy.malum.common.block.ether.EtherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterLoggedEntityBlock} from "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EtherBlockEntity} from "com.sammy.malum.common.block.ether.EtherBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EtherBlock<T extends $EtherBlockEntity> extends $WaterLoggedEntityBlock<(T)> {
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
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtherBlock$$Type<T> = ($EtherBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EtherBlock$$Original<T> = $EtherBlock<(T)>;}
declare module "com.sammy.malum.common.spiritrite.effect.aqueous.DripstoneFluidExtractionRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockRiteEffectActivatorEntity$$Type} from "com.sammy.malum.common.entity.activator.BlockRiteEffectActivatorEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"
import {$SpiritRiteBlockEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteBlockEffect"

export class $DripstoneFluidExtractionRiteEffect extends $SpiritRiteBlockEffect {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $BlockRiteEffectActivatorEntity$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DripstoneFluidExtractionRiteEffect$$Type = ($DripstoneFluidExtractionRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DripstoneFluidExtractionRiteEffect$$Original = $DripstoneFluidExtractionRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.alchemical.CurioManaweavingRing" {
import {$LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CollectSpiritEvent$$Type} from "com.sammy.malum.core.systems.events.CollectSpiritEvent"
import {$ModifySpiritSpoilsEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySpiritSpoilsEvent"
import {$LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$IMalumEventResponder$$Interface} from "com.sammy.malum.common.item.IMalumEventResponder"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$ModifySoulWardPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifySoulWardPropertiesEvent"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ModifyGluttonyPropertiesEvent$$Type} from "com.sammy.malum.core.systems.events.ModifyGluttonyPropertiesEvent"
import {$Map} from "java.util.Map"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SoulWardDamageEvent$$Type} from "com.sammy.malum.core.systems.events.SoulWardDamageEvent"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MalignantCritEvent$Pre$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Pre"
import {$MalignantCritEvent$Post$$Type} from "com.sammy.malum.core.systems.events.MalignantCritEvent$Post"

export class $CurioManaweavingRing extends $MalumCurioItem implements $IMalumEventResponder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "spiritCollectionEvent"(arg0: $CollectSpiritEvent$$Type, arg1: $LivingEntity$$Type, arg2: double): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "finalizedMalignantCritEvent"(arg0: $MalignantCritEvent$Post$$Type, arg1: $LivingEntity$$Type): void
public "modifyGluttonyPropertiesEvent"(arg0: $ModifyGluttonyPropertiesEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifySoulWardPropertiesEvent"(arg0: $ModifySoulWardPropertiesEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "malignantCritEvent"(arg0: $MalignantCritEvent$Pre$$Type, arg1: $LivingEntity$$Type): void
public "soulWardDamageEvent"(arg0: $SoulWardDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public "modifySpiritSpoilsEvent"(arg0: $ModifySpiritSpoilsEvent$$Type, arg1: $LivingEntity$$Type): void
public "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
public "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioManaweavingRing$$Type = ($CurioManaweavingRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioManaweavingRing$$Original = $CurioManaweavingRing;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder, $SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"
import {$AbstractRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.AbstractRuneCurioItem"

export class $MadnessRuneCurioItem extends $AbstractRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>)

public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MadnessRuneCurioItem$$Type = ($MadnessRuneCurioItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MadnessRuneCurioItem$$Original = $MadnessRuneCurioItem;}
declare module "com.sammy.malum.common.data.component.SoulwovenBannerPatternDataComponent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $SoulwovenBannerPatternDataComponent extends $Record {
static readonly "WICKED": $SoulwovenBannerPatternDataComponent
static readonly "HALLUCINATION": $SoulwovenBannerPatternDataComponent
static "CODEC": $Codec<($SoulwovenBannerPatternDataComponent)>
static readonly "SACRED": $SoulwovenBannerPatternDataComponent
static readonly "INFERNAL": $SoulwovenBannerPatternDataComponent
static readonly "HEFT": $SoulwovenBannerPatternDataComponent
static readonly "ARCANE": $SoulwovenBannerPatternDataComponent
static readonly "HORNS": $SoulwovenBannerPatternDataComponent
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SoulwovenBannerPatternDataComponent)>
static readonly "EARTHEN": $SoulwovenBannerPatternDataComponent
static readonly "REGISTERED_PATTERNS": $List<($SoulwovenBannerPatternDataComponent)>
static readonly "AQUEOUS": $SoulwovenBannerPatternDataComponent
static readonly "AERIAL": $SoulwovenBannerPatternDataComponent
static readonly "HUNGER": $SoulwovenBannerPatternDataComponent
static readonly "COLORFUL_WORLD": $SoulwovenBannerPatternDataComponent
static readonly "DEFAULT": $SoulwovenBannerPatternDataComponent
static readonly "ELDRITCH": $SoulwovenBannerPatternDataComponent

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)
constructor(type: $ResourceLocation$$Type, texturePath: $ResourceLocation$$Type, translationKey: StringJS)

public "type"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "load"(arg0: $CompoundTag$$Type): $SoulwovenBannerPatternDataComponent
public static "register"(arg0: $ResourceLocation$$Type): $SoulwovenBannerPatternDataComponent
public static "register"(arg0: StringJS): $SoulwovenBannerPatternDataComponent
public "save"(arg0: $CompoundTag$$Type): $CompoundTag
public "texturePath"(): $ResourceLocation
public "translationKey"(): StringJS
public "getRecipeId"(): $ResourceLocation
public "getDefaultStack"(): $ItemStack
get "recipeId"(): $ResourceLocation
get "defaultStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwovenBannerPatternDataComponent$$Type = ({"texturePath"?: $ResourceLocation$$Type, "type"?: $ResourceLocation$$Type, "translationKey"?: StringJS}) | ([texturePath?: $ResourceLocation$$Type, type?: $ResourceLocation$$Type, translationKey?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenBannerPatternDataComponent$$Original = $SoulwovenBannerPatternDataComponent;}
declare module "com.sammy.malum.common.item.WindNucleusItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ExplosionDamageCalculator} from "net.minecraft.world.level.ExplosionDamageCalculator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WindNucleusItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "EXPLOSION_DAMAGE_CALCULATOR": $ExplosionDamageCalculator
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getExplosionAffectedEntities"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: float): $List<($Entity)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindNucleusItem$$Type = ($WindNucleusItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindNucleusItem$$Original = $WindNucleusItem;}
declare module "com.sammy.malum.common.item.curiosities.pouch.SoulwovenPouchItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemEntityPickupEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.player.ItemEntityPickupEvent$Pre"
import {$MalumPouchContentsComponent, $MalumPouchContentsComponent$$Type} from "com.sammy.malum.common.data.component.pouch.MalumPouchContentsComponent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MalumPouchItem} from "com.sammy.malum.common.item.curiosities.pouch.MalumPouchItem"
import {$Item} from "net.minecraft.world.item.Item"

export class $SoulwovenPouchItem extends $MalumPouchItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContents"(arg0: $ItemStack$$Type): $MalumPouchContentsComponent
public "emptyContents"(): $MalumPouchContentsComponent
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getFullnessDisplay"(arg0: $ItemStack$$Type): float
public static "trySwallowItem"(arg0: $ItemEntityPickupEvent$Pre$$Type): void
public static "trySwallowItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "setContents"(arg0: $ItemStack$$Type, arg1: $MalumPouchContentsComponent$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulwovenPouchItem$$Type = ($SoulwovenPouchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulwovenPouchItem$$Original = $SoulwovenPouchItem;}
declare module "com.sammy.malum.common.data.attachment.SoulWardData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $SoulWardData {
static "CODEC": $Codec<($SoulWardData)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SoulWardData)>

constructor()
constructor(arg0: double, arg1: integer, arg2: float)

public "tryCorrectCooldown"(arg0: $LivingEntity$$Type): void
public "setSoulWard"(arg0: double): void
public "reduceSoulWard"(arg0: double): void
public "addSoulWard"(arg0: double): void
public "addCooldown"(arg0: $LivingEntity$$Type, arg1: float): void
public "getSoulWardCooldown"(arg0: $LivingEntity$$Type): float
public "getSoulWardCooldown"(): integer
public "getAppliedCooldownMultiplier"(): float
public "isDepleted"(): boolean
public "recoverSoulWard"(arg0: $LivingEntity$$Type, arg1: double): void
public "getSoulWard"(): double
public "tickData"(arg0: $LivingEntity$$Type): void
set "soulWard"(value: double)
get "soulWardCooldown"(): integer
get "appliedCooldownMultiplier"(): float
get "depleted"(): boolean
get "soulWard"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulWardData$$Type = ($SoulWardData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulWardData$$Original = $SoulWardData;}
declare module "com.sammy.malum.common.effect.rite.WickedEmpowerment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WickedEmpowerment extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickedEmpowerment$$Type = ($WickedEmpowerment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WickedEmpowerment$$Original = $WickedEmpowerment;}
declare module "com.sammy.malum.common.worldgen.tree.RunewoodTreeConfiguration" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $RunewoodTreeConfiguration implements $FeatureConfiguration$$Interface {
readonly "hangingLeaves": $Block
readonly "sapFilledLog": $Block
static readonly "CODEC": $Codec<($RunewoodTreeConfiguration)>
readonly "leaves": $Block
readonly "log": $Block
readonly "sapling": $Block

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Block$$Type, arg3: $Block$$Type, arg4: $Block$$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunewoodTreeConfiguration$$Type = ($RunewoodTreeConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunewoodTreeConfiguration$$Original = $RunewoodTreeConfiguration;}
declare module "com.sammy.malum.common.recipe.SpiritInfusionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$LodestoneInWorldRecipe} from "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpiritBasedRecipeInput, $SpiritBasedRecipeInput$$Type} from "com.sammy.malum.core.systems.recipe.SpiritBasedRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$SpiritIngredient, $SpiritIngredient$$Type} from "com.sammy.malum.core.systems.recipe.SpiritIngredient"

export class $SpiritInfusionRecipe extends $LodestoneInWorldRecipe<($SpiritBasedRecipeInput)> {
readonly "result": $ItemStack
readonly "output": $ItemStack
readonly "input": $SizedIngredient
static readonly "CODEC": $MapCodec<($SpiritInfusionRecipe)>
readonly "carryOverComponentData": boolean
readonly "extraInputs": $List<($SizedIngredient)>
readonly "spirits": $List<($SpiritIngredient)>
static readonly "NAME": StringJS

constructor(arg0: $SizedIngredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($SpiritIngredient$$Type)>, arg3: $List$$Type<($SizedIngredient$$Type)>, arg4: boolean)

public "matches"(arg0: $SpiritBasedRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritInfusionRecipe$$Type = ($SpiritInfusionRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritInfusionRecipe$$Original = $SpiritInfusionRecipe;}
declare module "com.sammy.malum.common.recipe.SpiritFocusingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$LodestoneInWorldRecipe} from "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SpiritBasedRecipeInput, $SpiritBasedRecipeInput$$Type} from "com.sammy.malum.core.systems.recipe.SpiritBasedRecipeInput"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SpiritIngredient, $SpiritIngredient$$Type} from "com.sammy.malum.core.systems.recipe.SpiritIngredient"

export class $SpiritFocusingRecipe extends $LodestoneInWorldRecipe<($SpiritBasedRecipeInput)> {
readonly "output": $ItemStack
readonly "input": $Ingredient
static readonly "CODEC": $MapCodec<($SpiritFocusingRecipe)>
readonly "durabilityCost": integer
readonly "spirits": $List<($SpiritIngredient)>
readonly "time": integer
static readonly "NAME": StringJS

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($SpiritIngredient$$Type)>, arg3: integer, arg4: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SpiritBasedRecipeInput$$Type, arg1: $Level$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFocusingRecipe$$Type = ($SpiritFocusingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritFocusingRecipe$$Original = $SpiritFocusingRecipe;}
declare module "com.sammy.malum.common.effect.rite.SacredNourishment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SacredNourishment extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "recoverExhaustion"(arg0: $LivingEntity$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacredNourishment$$Type = ($SacredNourishment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SacredNourishment$$Original = $SacredNourishment;}
declare module "com.sammy.malum.common.block.curiosities.totem.TotemBaseBlockEntity$TotemBaseState" {
import {$Enum} from "java.lang.Enum"

export class $TotemBaseBlockEntity$TotemBaseState extends $Enum<($TotemBaseBlockEntity$TotemBaseState)> {
static readonly "ACTIVE": $TotemBaseBlockEntity$TotemBaseState
static readonly "INACTIVE": $TotemBaseBlockEntity$TotemBaseState
static readonly "ASSEMBLING": $TotemBaseBlockEntity$TotemBaseState

public static "values"(): ($TotemBaseBlockEntity$TotemBaseState)[]
public static "valueOf"(arg0: StringJS): $TotemBaseBlockEntity$TotemBaseState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemBaseBlockEntity$TotemBaseState$$Type = (("inactive") | ("assembling") | ("active"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TotemBaseBlockEntity$TotemBaseState$$Original = $TotemBaseBlockEntity$TotemBaseState;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneIndomitabilityItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneIndomitabilityItem extends $MadnessRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneIndomitabilityItem$$Type = ($RuneIndomitabilityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneIndomitabilityItem$$Original = $RuneIndomitabilityItem;}
declare module "com.sammy.malum.common.spiritrite.effect.infernal.FieryEmbraceRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $FieryEmbraceRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "getTargetClass"(): $Class<($LivingEntity)>
public "applyRuneEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieryEmbraceRiteEffect$$Type = ($FieryEmbraceRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FieryEmbraceRiteEffect$$Original = $FieryEmbraceRiteEffect;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.miracle.RuneReinforcementItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$MiracleRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.miracle.MiracleRuneCurioItem"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneReinforcementItem extends $MiracleRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addAttributeModifiers"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: $SlotContext$$Type, arg2: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneReinforcementItem$$Type = ($RuneReinforcementItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneReinforcementItem$$Original = $RuneReinforcementItem;}
declare module "com.sammy.malum.common.item.curiosities.weapons.scythe.MalumScytheItem$ScytheDamage" {
import {$Record} from "java.lang.Record"

export class $MalumScytheItem$ScytheDamage extends $Record {
constructor(physicalDamage: float, magicDamage: float, isBoomerang: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "magicDamage"(): float
public "physicalDamage"(): float
public "isBoomerang"(): boolean
get "boomerang"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumScytheItem$ScytheDamage$$Type = ({"isBoomerang"?: boolean, "magicDamage"?: float, "physicalDamage"?: float}) | ([isBoomerang?: boolean, magicDamage?: float, physicalDamage?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumScytheItem$ScytheDamage$$Original = $MalumScytheItem$ScytheDamage;}
declare module "com.sammy.malum.common.effect.EchoingArcanaEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EchoingArcanaEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoingArcanaEffect$$Type = ($EchoingArcanaEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoingArcanaEffect$$Original = $EchoingArcanaEffect;}
declare module "com.sammy.malum.common.item.spirit.UmbralSpiritShardItem" {
import {$Map} from "java.util.Map"
import {$IVoidItem$$Interface} from "com.sammy.malum.common.item.IVoidItem"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder$$Type} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$SpiritShardItem} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"

export class $UmbralSpiritShardItem extends $SpiritShardItem implements $IVoidItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpiritHolder$$Type<($SpiritArcanaType$$Type)>)

public "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
public "getVoidParticleIntensity"(): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "voidParticleIntensity"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UmbralSpiritShardItem$$Type = ($UmbralSpiritShardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UmbralSpiritShardItem$$Original = $UmbralSpiritShardItem;}
declare module "com.sammy.malum.common.spiritrite.effect.aerial.HowlingGaleRiteEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$SpiritRitePotionEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRitePotionEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $HowlingGaleRiteEffect extends $SpiritRitePotionEffect<($LivingEntity)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "getTargetClass"(): $Class<($LivingEntity)>
get "targetClass"(): $Class<($LivingEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HowlingGaleRiteEffect$$Type = ($HowlingGaleRiteEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HowlingGaleRiteEffect$$Original = $HowlingGaleRiteEffect;}
declare module "com.sammy.malum.common.block.blight.scarstone.LargeStrangeCrystalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$StrangeCrystalBlock} from "com.sammy.malum.common.block.blight.scarstone.StrangeCrystalBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeStrangeCrystalBlock extends $StrangeCrystalBlock {
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
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "copyWaterloggedFrom"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeStrangeCrystalBlock$$Type = ($LargeStrangeCrystalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeStrangeCrystalBlock$$Original = $LargeStrangeCrystalBlock;}
declare module "com.sammy.malum.common.item.curiosities.curios.runes.madness.RuneTwinnedDurationItem" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$SpiritHolder} from "com.sammy.malum.core.systems.registry.SpiritHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MadnessRuneCurioItem} from "com.sammy.malum.common.item.curiosities.curios.runes.madness.MadnessRuneCurioItem"
import {$MobEffectEvent$Added$$Type} from "net.neoforged.neoforge.event.entity.living.MobEffectEvent$Added"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SpiritArcanaType} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $RuneTwinnedDurationItem extends $MadnessRuneCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
readonly "spirit": $SpiritHolder<($SpiritArcanaType)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "scaleDuration"(arg0: $MobEffectEvent$Added$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuneTwinnedDurationItem$$Type = ($RuneTwinnedDurationItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RuneTwinnedDurationItem$$Original = $RuneTwinnedDurationItem;}
declare module "com.sammy.malum.common.spiritrite.effect.wicked.MonsterRaisingEffect" {
import {$SpiritRiteEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEffect"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Class} from "java.lang.Class"
import {$Monster, $Monster$$Type} from "net.minecraft.world.entity.monster.Monster"
import {$SpiritRiteEntityEffect} from "com.sammy.malum.core.systems.rite.effect.SpiritRiteEntityEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryCodecBuddy} from "com.sammy.malum.core.systems.registry.RegistryCodecBuddy"

export class $MonsterRaisingEffect extends $SpiritRiteEntityEffect<($Monster)> {
static readonly "CODEC": $RegistryCodecBuddy<($SpiritRiteEffect)>

constructor()

public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): void
public "applyEffect"(arg0: $ServerLevel$$Type, arg1: $Monster$$Type): void
public "getTargetClass"(): $Class<($Monster)>
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $LivingEntity$$Type): boolean
public "canApplyEffect"(arg0: $ServerLevel$$Type, arg1: $Monster$$Type): boolean
get "targetClass"(): $Class<($Monster)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonsterRaisingEffect$$Type = ($MonsterRaisingEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonsterRaisingEffect$$Original = $MonsterRaisingEffect;}
declare module "com.sammy.malum.common.item.curiosities.armor.MalumArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$LodestoneArmorItem} from "team.lodestar.lodestone.systems.item.LodestoneArmorItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $MalumArmorItem extends $LodestoneArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: integer, arg3: $Item$Properties$$Type)

public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getArmorTexture"(): $ResourceLocation
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "armorTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MalumArmorItem$$Type = ($MalumArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MalumArmorItem$$Original = $MalumArmorItem;}
declare module "com.sammy.malum.common.block.curiosities.weeping_well.VoidConduitBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VoidConduitBlockEntity} from "com.sammy.malum.common.block.curiosities.weeping_well.VoidConduitBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidConduitBlock<T extends $VoidConduitBlockEntity> extends $LodestoneEntityBlock<(T)> {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidConduitBlock$$Type<T> = ($VoidConduitBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VoidConduitBlock$$Original<T> = $VoidConduitBlock<(T)>;}
declare module "com.sammy.malum.common.item.curiosities.curios.sets.rotten.CurioVoraciousRing" {
import {$LivingEntityUseItemEvent$Start$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Start"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MalumCurioItem} from "com.sammy.malum.common.item.curiosities.curios.MalumCurioItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractMalumCurioItem$MalumTrinketType} from "com.sammy.malum.common.item.curiosities.curios.AbstractMalumCurioItem$MalumTrinketType"

export class $CurioVoraciousRing extends $MalumCurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $AbstractMalumCurioItem$MalumTrinketType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "onEat"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type): void
public static "modifyEating"(arg0: $LivingEntityUseItemEvent$Start$$Type): void
public "addExtraTooltipLines"(arg0: $Consumer$$Type<($Component)>): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioVoraciousRing$$Type = ($CurioVoraciousRing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioVoraciousRing$$Original = $CurioVoraciousRing;}
declare module "com.sammy.malum.common.effect.gluttony.GluttonyEffect$GluttonyEffectProperties" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $GluttonyEffect$GluttonyEffectProperties {
public "apply"(arg0: $LivingEntity$$Type): void
public "scaleInitialAmplifier"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "scaleAmplifierLimit"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "scaleInitialDuration"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "setInitialDuration"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "getEffectType"(): $Holder<($MobEffect)>
public "setAmplifierLimit"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "setDurationLimit"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "setAmplifierGain"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "setDurationGain"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "setInitialAmplifier"(arg0: integer): $GluttonyEffect$GluttonyEffectProperties
public "getInitialAmplifier"(): integer
public "replaceEffectType"(arg0: $Holder$$Type<($MobEffect)>): $GluttonyEffect$GluttonyEffectProperties
public "scaleDurationLimit"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "scaleAmplifierGain"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "scaleDurationGain"(arg0: float): $GluttonyEffect$GluttonyEffectProperties
public "getAmplifierLimit"(): integer
public "getDurationLimit"(): integer
public "getAmplifierGain"(): integer
public "getDurationGain"(): integer
public "getInitialDuration"(): integer
set "initialDuration"(value: integer)
get "effectType"(): $Holder<($MobEffect)>
set "amplifierLimit"(value: integer)
set "durationLimit"(value: integer)
set "amplifierGain"(value: integer)
set "durationGain"(value: integer)
set "initialAmplifier"(value: integer)
get "initialAmplifier"(): integer
get "amplifierLimit"(): integer
get "durationLimit"(): integer
get "amplifierGain"(): integer
get "durationGain"(): integer
get "initialDuration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GluttonyEffect$GluttonyEffectProperties$$Type = ($GluttonyEffect$GluttonyEffectProperties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GluttonyEffect$GluttonyEffectProperties$$Original = $GluttonyEffect$GluttonyEffectProperties;}
declare module "com.sammy.malum.common.block.storage.jar.SpiritJarBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SpiritJarContentsComponent} from "com.sammy.malum.common.data.component.SpiritJarContentsComponent"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandlerSupplier$$Interface} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritJarBlockEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier$$Interface {
 "contents": $SpiritJarContentsComponent
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($SpiritJarBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "handleAttack"(arg0: $Player$$Type): boolean
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "insertAllSpirits"(arg0: $Player$$Type): integer
public "insertHeldItem"(arg0: $Player$$Type): integer
public "insertFromStack"(arg0: $ItemStack$$Type, arg1: $Player$$Type): integer
public "getItemPos"(): $Vec3
public "getUpdatePacket"(): $Packet
get "itemPos"(): $Vec3
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJarBlockEntity$$Type = ($SpiritJarBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritJarBlockEntity$$Original = $SpiritJarBlockEntity;}
declare module "com.sammy.malum.common.item.augment.AcceleratingInlayItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AugmentItem} from "com.sammy.malum.common.item.augment.AugmentItem"
import {$List} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpiritLike} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $AcceleratingInlayItem extends $AugmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
readonly "spiritTypes": $List<($SpiritLike)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratingInlayItem$$Type = ($AcceleratingInlayItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratingInlayItem$$Original = $AcceleratingInlayItem;}
declare module "com.sammy.malum.common.data.component.SpiritJarContentsComponent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ColorParticleDataBuilder} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Color} from "java.awt.Color"
import {$Style} from "net.minecraft.network.chat.Style"
import {$SpiritLike$$Type, $SpiritLike$$Interface} from "com.sammy.malum.core.systems.spirit.type.SpiritLike"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$Holder} from "net.minecraft.core.Holder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$SpiritShardItem} from "com.sammy.malum.common.item.spirit.SpiritShardItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SpiritArcanaType, $SpiritArcanaType$$Type} from "com.sammy.malum.core.systems.spirit.type.SpiritArcanaType"
import {$Record} from "java.lang.Record"

export class $SpiritJarContentsComponent extends $Record implements $SpiritLike$$Interface {
static "CODEC": $Codec<($SpiritJarContentsComponent)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SpiritJarContentsComponent)>

constructor(arg0: $SpiritLike$$Type, arg1: integer)
constructor(spirit: $SpiritArcanaType$$Type, count: integer)

public "remove"(arg0: integer): $SpiritJarContentsComponent
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(arg0: integer): $SpiritJarContentsComponent
public "count"(): integer
public "createStack"(arg0: integer): $ItemStack
public "createStack"(): $ItemStack
public "getSpirit"(): $SpiritArcanaType
public "spirit"(): $SpiritArcanaType
public "getName"(): StringJS
public "matches"(arg0: $SpiritLike$$Type): boolean
public "getHolder"(): $Holder<($SpiritArcanaType)>
public "getRegistryName"(): $ResourceLocation
public "getStyle"(arg0: boolean): $Style
public "getStyle"(arg0: float): $Style
public "getTextColor"(arg0: float): $TextColor
public "getTextColor"(arg0: boolean): $TextColor
public "getLangKey"(): StringJS
public "getAlphaMultiplier"(): float
public "getSecondaryColor"(): $Color
public "getSpiritShard"(): $SpiritShardItem
public "getAnalogSignal"(): integer
public "getItemColor"(): $Color
public "getFlavourKey"(): StringJS
public "createColorData"(arg0: float): $ColorParticleDataBuilder
public "createColorData"(): $ColorParticleDataBuilder
public "getPrimaryColor"(): $Color
public "getCountedKey"(): StringJS
public "getSpiritStack"(arg0: integer): $ItemStack
public "getSpiritStack"(): $ItemStack
get "name"(): StringJS
get "holder"(): $Holder<($SpiritArcanaType)>
get "registryName"(): $ResourceLocation
get "langKey"(): StringJS
get "alphaMultiplier"(): float
get "secondaryColor"(): $Color
get "spiritShard"(): $SpiritShardItem
get "analogSignal"(): integer
get "itemColor"(): $Color
get "flavourKey"(): StringJS
get "primaryColor"(): $Color
get "countedKey"(): StringJS
get "spiritStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJarContentsComponent$$Type = ({"spirit"?: $SpiritArcanaType$$Type, "count"?: integer}) | ([spirit?: $SpiritArcanaType$$Type, count?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpiritJarContentsComponent$$Original = $SpiritJarContentsComponent;}
