declare module "com.aetherteam.aether.advancement.IncubationTrigger" {
import {$IncubationTrigger$Instance} from "com.aetherteam.aether.advancement.IncubationTrigger$Instance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $IncubationTrigger extends $SimpleCriterionTrigger<($IncubationTrigger$Instance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($IncubationTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncubationTrigger$$Type = ($IncubationTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncubationTrigger$$Original = $IncubationTrigger;}
declare module "com.aetherteam.aether.advancement.LoreTrigger" {
import {$LoreTrigger$Instance} from "com.aetherteam.aether.advancement.LoreTrigger$Instance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $LoreTrigger extends $SimpleCriterionTrigger<($LoreTrigger$Instance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($LoreTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreTrigger$$Type = ($LoreTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoreTrigger$$Original = $LoreTrigger;}
declare module "com.aetherteam.aether.advancement.IncubationTrigger$Instance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $IncubationTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($IncubationTrigger$Instance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "forItem"(arg0: $ItemPredicate$$Type): $Criterion<($IncubationTrigger$Instance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncubationTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncubationTrigger$Instance$$Original = $IncubationTrigger$Instance;}
declare module "com.aetherteam.aether.advancement.LoreTrigger$Instance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $LoreTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($LoreTrigger$Instance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "forItem"(arg0: $ItemPredicate$$Type): $Criterion<($LoreTrigger$Instance)>
public static "forItem"(arg0: $ItemLike$$Type): $Criterion<($LoreTrigger$Instance)>
public static "forAny"(): $Criterion<($LoreTrigger$Instance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoreTrigger$Instance$$Original = $LoreTrigger$Instance;}
