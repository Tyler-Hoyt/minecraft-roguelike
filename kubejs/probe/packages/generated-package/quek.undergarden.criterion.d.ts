declare module "quek.undergarden.criterion.SlingshotFireTrigger" {
import {$SlingshotFireTrigger$TriggerInstance} from "quek.undergarden.criterion.SlingshotFireTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SlingshotFireTrigger extends $SimpleCriterionTrigger<($SlingshotFireTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($SlingshotFireTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotFireTrigger$$Type = ($SlingshotFireTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlingshotFireTrigger$$Original = $SlingshotFireTrigger;}
declare module "quek.undergarden.criterion.UthericInfectionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$UthericInfectionTrigger$TriggerInstance} from "quek.undergarden.criterion.UthericInfectionTrigger$TriggerInstance"

export class $UthericInfectionTrigger extends $SimpleCriterionTrigger<($UthericInfectionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: double): void
public "codec"(): $Codec<($UthericInfectionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UthericInfectionTrigger$$Type = ($UthericInfectionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UthericInfectionTrigger$$Original = $UthericInfectionTrigger;}
declare module "quek.undergarden.criterion.StonebornTradeTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StonebornTradeTrigger$TriggerInstance} from "quek.undergarden.criterion.StonebornTradeTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Stoneborn$$Type} from "quek.undergarden.entity.monster.stoneborn.Stoneborn"

export class $StonebornTradeTrigger extends $SimpleCriterionTrigger<($StonebornTradeTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Stoneborn$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($StonebornTradeTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonebornTradeTrigger$$Type = ($StonebornTradeTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonebornTradeTrigger$$Original = $StonebornTradeTrigger;}
declare module "quek.undergarden.criterion.SlingshotFireTrigger$TriggerInstance" {
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

export class $SlingshotFireTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($SlingshotFireTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, slingshot: ($ItemPredicate$$Type)?, ammo: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "ammo"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "slingshot"(): $Optional<($ItemPredicate)>
public static "shotItem"(arg0: $ItemLike$$Type): $Criterion<(never)>
public static "shotItem"(arg0: $ItemLike$$Type, arg1: $ItemLike$$Type): $Criterion<(never)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlingshotFireTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "ammo"?: ($ItemPredicate$$Type)?, "slingshot"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, ammo?: ($ItemPredicate$$Type)?, slingshot?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlingshotFireTrigger$TriggerInstance$$Original = $SlingshotFireTrigger$TriggerInstance;}
declare module "quek.undergarden.criterion.DenizenCampfireDestroyedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DenizenCampfireDestroyedTrigger$TriggerInstance} from "quek.undergarden.criterion.DenizenCampfireDestroyedTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DenizenCampfireDestroyedTrigger extends $SimpleCriterionTrigger<($DenizenCampfireDestroyedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockState$$Type): void
public "codec"(): $Codec<($DenizenCampfireDestroyedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenizenCampfireDestroyedTrigger$$Type = ($DenizenCampfireDestroyedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenizenCampfireDestroyedTrigger$$Original = $DenizenCampfireDestroyedTrigger;}
declare module "quek.undergarden.criterion.UthericInfectionTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $UthericInfectionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($UthericInfectionTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, infectionLevel: ($MinMaxBounds$Doubles$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: double): boolean
public static "hasInfectionLevel"(arg0: integer): $Criterion<(never)>
public static "hasInfectionLevel"(arg0: $MinMaxBounds$Doubles$$Type): $Criterion<(never)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "isInfected"(): $Criterion<(never)>
public "infectionLevel"(): $Optional<($MinMaxBounds$Doubles)>
public "validate"(arg0: $CriterionValidator$$Type): void
public static get "infected"(): $Criterion<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UthericInfectionTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "infectionLevel"?: ($MinMaxBounds$Doubles$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, infectionLevel?: ($MinMaxBounds$Doubles$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UthericInfectionTrigger$TriggerInstance$$Original = $UthericInfectionTrigger$TriggerInstance;}
declare module "quek.undergarden.criterion.DenizenCampfireDestroyedTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $DenizenCampfireDestroyedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($DenizenCampfireDestroyedTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, block: ($Holder$$Type<($Block$$Type)>)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type): boolean
public "block"(): $Optional<($Holder<($Block)>)>
public static "destroyedCampfire"(arg0: $Block$$Type): $Criterion<($DenizenCampfireDestroyedTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenizenCampfireDestroyedTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "block"?: ($Holder$$Type<($Block$$Type)>)?}) | ([player?: ($ContextAwarePredicate$$Type)?, block?: ($Holder$$Type<($Block$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenizenCampfireDestroyedTrigger$TriggerInstance$$Original = $DenizenCampfireDestroyedTrigger$TriggerInstance;}
declare module "quek.undergarden.criterion.StonebornTradeTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $StonebornTradeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($StonebornTradeTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, stoneborn: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public static "tradeWithStoneborn"(): $Criterion<(never)>
public "stoneborn"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonebornTradeTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "stoneborn"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, stoneborn?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonebornTradeTrigger$TriggerInstance$$Original = $StonebornTradeTrigger$TriggerInstance;}
