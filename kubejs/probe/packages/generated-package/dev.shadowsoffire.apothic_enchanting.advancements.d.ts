declare module "dev.shadowsoffire.apothic_enchanting.advancements.EnchantedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EnchantedTrigger$TriggerInstance} from "dev.shadowsoffire.apothic_enchanting.advancements.EnchantedTrigger$TriggerInstance"

export class $EnchantedTrigger extends $SimpleCriterionTrigger<($EnchantedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: float, arg4: float, arg5: float, arg6: boolean): void
public "codec"(): $Codec<($EnchantedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedTrigger$$Type = ($EnchantedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedTrigger$$Original = $EnchantedTrigger;}
declare module "dev.shadowsoffire.apothic_enchanting.advancements.EnchantedTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $EnchantedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EnchantedTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?, levels: $MinMaxBounds$Ints$$Type, eterna: $MinMaxBounds$Doubles$$Type, quanta: $MinMaxBounds$Doubles$$Type, arcana: $MinMaxBounds$Doubles$$Type, stable: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: boolean): boolean
public "item"(): $Optional<($ItemPredicate)>
public "levels"(): $MinMaxBounds$Ints
public "eterna"(): $MinMaxBounds$Doubles
public "arcana"(): $MinMaxBounds$Doubles
public "quanta"(): $MinMaxBounds$Doubles
public "player"(): $Optional<($ContextAwarePredicate)>
public "stable"(): $Optional<(boolean)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedTrigger$TriggerInstance$$Type = ({"levels"?: $MinMaxBounds$Ints$$Type, "arcana"?: $MinMaxBounds$Doubles$$Type, "quanta"?: $MinMaxBounds$Doubles$$Type, "eterna"?: $MinMaxBounds$Doubles$$Type, "item"?: ($ItemPredicate$$Type)?, "stable"?: (boolean)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([levels?: $MinMaxBounds$Ints$$Type, arcana?: $MinMaxBounds$Doubles$$Type, quanta?: $MinMaxBounds$Doubles$$Type, eterna?: $MinMaxBounds$Doubles$$Type, item?: ($ItemPredicate$$Type)?, stable?: (boolean)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedTrigger$TriggerInstance$$Original = $EnchantedTrigger$TriggerInstance;}
