declare module "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $BookOpenTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static "CODEC": $Codec<($BookOpenTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, book: $ResourceLocation$$Type, entry: ($ResourceLocation$$Type)?, page: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: integer): boolean
public "entry"(): $Optional<($ResourceLocation)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "page"(): $MinMaxBounds$Ints
public "book"(): $ResourceLocation
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entry"?: ($ResourceLocation$$Type)?, "book"?: $ResourceLocation$$Type, "page"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, entry?: ($ResourceLocation$$Type)?, book?: $ResourceLocation$$Type, page?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookOpenTrigger$TriggerInstance$$Original = $BookOpenTrigger$TriggerInstance;}
declare module "vazkii.patchouli.common.advancement.BookOpenTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BookOpenTrigger$TriggerInstance} from "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance"

export class $BookOpenTrigger extends $SimpleCriterionTrigger<($BookOpenTrigger$TriggerInstance)> {
static readonly "INSTANCE": $BookOpenTrigger
static readonly "ID": $ResourceLocation

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: integer): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public "codec"(): $Codec<($BookOpenTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$$Type = ($BookOpenTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookOpenTrigger$$Original = $BookOpenTrigger;}
