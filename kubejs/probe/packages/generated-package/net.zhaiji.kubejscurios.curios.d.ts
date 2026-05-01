declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributesTooltipFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export interface $CapabilityCurios$AttributesTooltipFunction$$Interface {

(arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack): $List$$Type<($Component$$Type)>
}

export class $CapabilityCurios$AttributesTooltipFunction implements $CapabilityCurios$AttributesTooltipFunction$$Interface {
 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$AttributesTooltipFunction$$Type = ((arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List$$Type<($Component$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$AttributesTooltipFunction$$Original = $CapabilityCurios$AttributesTooltipFunction;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributeModificationContext" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CapabilityCurios$AttributeModificationContext {
constructor(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "remove"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): $CapabilityCurios$AttributeModificationContext
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "getIdentifier"(): $ResourceLocation
public "modify"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $CapabilityCurios$AttributeModificationContext
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
get "identifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$AttributeModificationContext$$Type = ($CapabilityCurios$AttributeModificationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$AttributeModificationContext$$Original = $CapabilityCurios$AttributeModificationContext;}
declare module "net.zhaiji.kubejscurios.curios.CurioRenderer$RenderContext" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderLayerParent, $RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioRenderer$RenderContext {
 "matrixStack": $PoseStack
 "stack": $ItemStack
 "renderLayerParent": $RenderLayerParent<($LivingEntity), ($EntityModel<($LivingEntity)>)>
 "ageInTicks": float
 "netHeadYaw": float
 "light": integer
 "limbSwingAmount": float
 "renderTypeBuffer": $MultiBufferSource
 "limbSwing": float
 "slotContext": $SlotContext
 "headPitch": float
 "partialTicks": float

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $PoseStack$$Type, arg3: $RenderLayerParent$$Type<($LivingEntity$$Type), ($EntityModel$$Type<($LivingEntity$$Type)>)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioRenderer$RenderContext$$Type = ($CurioRenderer$RenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurioRenderer$RenderContext$$Original = $CurioRenderer$RenderContext;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$EquipConsumer" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $CapabilityCurios$EquipConsumer$$Interface {

(arg0: $SlotContext, arg1: $ItemStack, arg2: $ItemStack): void
}

export class $CapabilityCurios$EquipConsumer implements $CapabilityCurios$EquipConsumer$$Interface {
 "accept"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$EquipConsumer$$Type = ((arg0: $SlotContext, arg1: $ItemStack, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$EquipConsumer$$Original = $CapabilityCurios$EquipConsumer;}
declare module "net.zhaiji.kubejscurios.curios.KubeJSCuriosHelper" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ICurio} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$SlotResult} from "top.theillusivec4.curios.api.SlotResult"
import {$ICurioStacksHandler} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICuriosItemHandler} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ISlotType} from "top.theillusivec4.curios.api.type.ISlotType"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $KubeJSCuriosHelper$$Interface {
get "curiosSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "curiosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
get "equippedCurios"(): $IItemHandlerModifiable
get "curiosInventory"(): $ICuriosItemHandler
get "entityCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
get "allCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
}

export class $KubeJSCuriosHelper implements $KubeJSCuriosHelper$$Interface {
 "getCuriosRegistrySlot"(arg0: StringJS): $Optional<($ISlotType)>
 "removeCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "getCuriosSlotModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "getCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "clearCuriosSlotModifiers"(): void
 "getStackInCuriosSlots"(arg0: $ItemStack$$Type): $Map<(StringJS), ($ISlotType)>
 "addCuriosSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getCuriosStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getCuriosInventory"(): $ICuriosItemHandler
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "getEntityCuriosRegistrySlots"(): $Map<(StringJS), ($ISlotType)>
 "getAllCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "getCurioCapability"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "isCuriosEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isCuriosEquipped"(arg0: $Item$$Type): boolean
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KubeJSCuriosHelper$$Type = ($KubeJSCuriosHelper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KubeJSCuriosHelper$$Original = $KubeJSCuriosHelper;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$FortuneFunction" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"

export interface $CapabilityCurios$FortuneFunction$$Interface {

(arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack): integer
}

export class $CapabilityCurios$FortuneFunction implements $CapabilityCurios$FortuneFunction$$Interface {
 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$FortuneFunction$$Type = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$FortuneFunction$$Original = $CapabilityCurios$FortuneFunction;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$CuriosCapabilityBuilder" {
import {$Map} from "java.util.Map"
import {$ItemModificationKubeEvent$ItemModifications} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent$ItemModifications"
import {$ICurioItem} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$CapabilityCurios} from "net.zhaiji.kubejscurios.curios.CapabilityCurios"
import {$ItemBuilder} from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CapabilityCurios$CuriosCapabilityBuilder {
static readonly "itemBuilders": $Map<($ItemBuilder), ($ICurioItem)>
static "INSTANCE": $CapabilityCurios$CuriosCapabilityBuilder
static readonly "itemModifications": $Map<($ItemModificationKubeEvent$ItemModifications), ($ICurioItem)>

constructor()

public static "load"(): void
public "create"(): $CapabilityCurios
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$CuriosCapabilityBuilder$$Type = ($CapabilityCurios$CuriosCapabilityBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$CuriosCapabilityBuilder$$Original = $CapabilityCurios$CuriosCapabilityBuilder;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios" {
import {$CapabilityCurios$AttributesTooltipFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributesTooltipFunction"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CapabilityCurios$SlotsTooltipFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$SlotsTooltipFunction"
import {$CapabilityCurios$EnderMaskPredicate$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$EnderMaskPredicate"
import {$CapabilityCurios$FortuneFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$FortuneFunction"
import {$CapabilityCurios$EquipConsumer$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$EquipConsumer"
import {$CapabilityCurios$AttributeModificationContext$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$AttributeModificationContext"
import {$CapabilityCurios$LootingFunction$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$LootingFunction"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$CapabilityCurios$DropRulePredicate$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$DropRulePredicate"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $CapabilityCurios {
constructor()

public "addAttribute"(arg0: $ResourceKey$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): $CapabilityCurios
public "canEquip"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "canDrop"(arg0: $CapabilityCurios$DropRulePredicate$$Type): $CapabilityCurios
public "modifyAttributesTooltip"(arg0: $CapabilityCurios$AttributesTooltipFunction$$Type): $CapabilityCurios
public "modifySlotsTooltip"(arg0: $CapabilityCurios$SlotsTooltipFunction$$Type): $CapabilityCurios
public "modifyEquipSound"(arg0: $BiFunction$$Type<($SlotContext), ($ItemStack), ($ICurio$SoundInfo$$Type)>): $CapabilityCurios
public "modifyAttribute"(arg0: $Consumer$$Type<($CapabilityCurios$AttributeModificationContext)>): $CapabilityCurios
public "modifyFortuneLevel"(arg0: $CapabilityCurios$FortuneFunction$$Type): $CapabilityCurios
public "modifyLootingLevel"(arg0: $CapabilityCurios$LootingFunction$$Type): $CapabilityCurios
public "makesPiglinsNeutral"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "canWalkOnPowderedSnow"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "onUnequip"(arg0: $CapabilityCurios$EquipConsumer$$Type): $CapabilityCurios
public "onEquip"(arg0: $CapabilityCurios$EquipConsumer$$Type): $CapabilityCurios
public "canUnequip"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "curioTick"(arg0: $BiConsumer$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "isEnderMask"(arg0: $CapabilityCurios$EnderMaskPredicate$$Type): $CapabilityCurios
public "canEquipFromUse"(arg0: $BiPredicate$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
public "onEquipFromUse"(arg0: $BiConsumer$$Type<($SlotContext), ($ItemStack)>): $CapabilityCurios
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$$Type = ($CapabilityCurios);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$$Original = $CapabilityCurios;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$SlotsTooltipFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export interface $CapabilityCurios$SlotsTooltipFunction$$Interface {

(arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack): $List$$Type<($Component$$Type)>
}

export class $CapabilityCurios$SlotsTooltipFunction implements $CapabilityCurios$SlotsTooltipFunction$$Interface {
 "apply"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$SlotsTooltipFunction$$Type = ((arg0: $List<($Component)>, arg1: $Item$TooltipContext, arg2: $ItemStack) => $List$$Type<($Component$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$SlotsTooltipFunction$$Original = $CapabilityCurios$SlotsTooltipFunction;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$LootingFunction" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"

export interface $CapabilityCurios$LootingFunction$$Interface {

(arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack): integer
}

export class $CapabilityCurios$LootingFunction implements $CapabilityCurios$LootingFunction$$Interface {
 "apply"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$LootingFunction$$Type = ((arg0: $SlotContext, arg1: $LootContext, arg2: $ItemStack) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$LootingFunction$$Original = $CapabilityCurios$LootingFunction;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$EnderMaskPredicate" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"

export interface $CapabilityCurios$EnderMaskPredicate$$Interface {

(arg0: $SlotContext, arg1: $EnderMan, arg2: $ItemStack): boolean
}

export class $CapabilityCurios$EnderMaskPredicate implements $CapabilityCurios$EnderMaskPredicate$$Interface {
 "test"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$EnderMaskPredicate$$Type = ((arg0: $SlotContext, arg1: $EnderMan, arg2: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$EnderMaskPredicate$$Original = $CapabilityCurios$EnderMaskPredicate;}
declare module "net.zhaiji.kubejscurios.curios.CapabilityCurios$DropRulePredicate" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"

export interface $CapabilityCurios$DropRulePredicate$$Interface {

(arg0: $SlotContext, arg1: $DamageSource, arg2: boolean, arg3: $ItemStack): boolean
}

export class $CapabilityCurios$DropRulePredicate implements $CapabilityCurios$DropRulePredicate$$Interface {
 "test"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityCurios$DropRulePredicate$$Type = ((arg0: $SlotContext, arg1: $DamageSource, arg2: boolean, arg3: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityCurios$DropRulePredicate$$Original = $CapabilityCurios$DropRulePredicate;}
