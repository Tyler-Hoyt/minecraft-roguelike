declare module "dev.shadowsoffire.apotheosis.advancements.GemCutTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$GemCutTrigger$Instance} from "dev.shadowsoffire.apotheosis.advancements.GemCutTrigger$Instance"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $GemCutTrigger extends $SimpleCriterionTrigger<($GemCutTrigger$Instance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($GemCutTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCutTrigger$$Type = ($GemCutTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCutTrigger$$Original = $GemCutTrigger;}
declare module "dev.shadowsoffire.apotheosis.advancements.EquippedItemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$EquippedItemTrigger$TriggerInstance} from "dev.shadowsoffire.apotheosis.advancements.EquippedItemTrigger$TriggerInstance"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EquippedItemTrigger extends $SimpleCriterionTrigger<($EquippedItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($EquippedItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedItemTrigger$$Type = ($EquippedItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquippedItemTrigger$$Original = $EquippedItemTrigger;}
declare module "dev.shadowsoffire.apotheosis.advancements.EquippedItemTrigger$TriggerInstance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EquippedItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EquippedItemTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, slots: $EquipmentSlotGroup$$Type, items: $ItemPredicate$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): boolean
public "slots"(): $EquipmentSlotGroup
public "player"(): $Optional<($ContextAwarePredicate)>
public "items"(): $ItemPredicate
public static "hasItems"(arg0: $EquipmentSlotGroup$$Type, arg1: $ItemPredicate$$Type): $Criterion<($EquippedItemTrigger$TriggerInstance)>
public static "hasItems"(arg0: $EquipmentSlotGroup$$Type, arg1: $ItemLike$$Type): $Criterion<($EquippedItemTrigger$TriggerInstance)>
public static "hasItems"(arg0: $EquipmentSlotGroup$$Type, arg1: $ItemPredicate$Builder$$Type): $Criterion<($EquippedItemTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "slots"?: $EquipmentSlotGroup$$Type, "items"?: $ItemPredicate$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, slots?: $EquipmentSlotGroup$$Type, items?: $ItemPredicate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquippedItemTrigger$TriggerInstance$$Original = $EquippedItemTrigger$TriggerInstance;}
declare module "dev.shadowsoffire.apotheosis.advancements.GemCutTrigger$Instance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$UnsocketedGem$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.UnsocketedGem"
import {$Purity, $Purity$$Type} from "dev.shadowsoffire.apotheosis.socket.gem.Purity"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $GemCutTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($GemCutTrigger$Instance)>

constructor(player: ($ContextAwarePredicate$$Type)?, gem: $ItemPredicate$$Type, purity: ($Purity$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $UnsocketedGem$$Type): boolean
public "purity"(): $Optional<($Purity)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "gem"(): $ItemPredicate
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemCutTrigger$Instance$$Type = ({"purity"?: ($Purity$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "gem"?: $ItemPredicate$$Type}) | ([purity?: ($Purity$$Type)?, player?: ($ContextAwarePredicate$$Type)?, gem?: $ItemPredicate$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemCutTrigger$Instance$$Original = $GemCutTrigger$Instance;}
