declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SlotPredicate, $SlotPredicate$$Type} from "top.theillusivec4.curios.api.SlotPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EquipCurioTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EquipCurioTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?, location: ($LocationPredicate$$Type)?, slot: ($SlotPredicate$$Type)?)

public "slot"(): $Optional<($SlotPredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $LootContext$$Type): boolean
public "location"(): $Optional<($LocationPredicate)>
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$TriggerInstance$$Type = ({"slot"?: ($SlotPredicate$$Type)?, "location"?: ($LocationPredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([slot?: ($SlotPredicate$$Type)?, location?: ($LocationPredicate$$Type)?, item?: ($ItemPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipCurioTrigger$TriggerInstance$$Original = $EquipCurioTrigger$TriggerInstance;}
declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger" {
import {$SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EquipCurioTrigger$TriggerInstance} from "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance"

export class $EquipCurioTrigger extends $SimpleCriterionTrigger<($EquipCurioTrigger$TriggerInstance)> {
static readonly "INSTANCE": $EquipCurioTrigger

constructor()

public "trigger"(arg0: $SlotContext$$Type, arg1: $ServerPlayer$$Type, arg2: $ItemStack$$Type): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($EquipCurioTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$$Type = ($EquipCurioTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EquipCurioTrigger$$Original = $EquipCurioTrigger;}
