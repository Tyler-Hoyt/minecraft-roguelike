declare module "twilightforest.advancements.HurtBossTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$HurtBossTrigger$TriggerInstance} from "twilightforest.advancements.HurtBossTrigger$TriggerInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HurtBossTrigger extends $SimpleCriterionTrigger<($HurtBossTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): void
public "codec"(): $Codec<($HurtBossTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtBossTrigger$$Type = ($HurtBossTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HurtBossTrigger$$Original = $HurtBossTrigger;}
declare module "twilightforest.advancements.UncraftItemTrigger" {
import {$UncraftItemTrigger$TriggerInstance} from "twilightforest.advancements.UncraftItemTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $UncraftItemTrigger extends $SimpleCriterionTrigger<($UncraftItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($UncraftItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncraftItemTrigger$$Type = ($UncraftItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UncraftItemTrigger$$Original = $UncraftItemTrigger;}
declare module "twilightforest.advancements.SimpleAdvancementTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SimpleAdvancementTrigger$TriggerInstance} from "twilightforest.advancements.SimpleAdvancementTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SimpleAdvancementTrigger extends $SimpleCriterionTrigger<($SimpleAdvancementTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type): void
public "codec"(): $Codec<($SimpleAdvancementTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAdvancementTrigger$$Type = ($SimpleAdvancementTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleAdvancementTrigger$$Original = $SimpleAdvancementTrigger;}
declare module "twilightforest.advancements.StructureClearedTrigger" {
import {$StructureClearedTrigger$TriggerInstance} from "twilightforest.advancements.StructureClearedTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $StructureClearedTrigger extends $SimpleCriterionTrigger<($StructureClearedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceKey$$Type<($Structure)>): void
public "codec"(): $Codec<($StructureClearedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureClearedTrigger$$Type = ($StructureClearedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureClearedTrigger$$Original = $StructureClearedTrigger;}
declare module "twilightforest.advancements.UncraftItemTrigger$TriggerInstance" {
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

export class $UncraftItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($UncraftItemTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, item: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "uncraftedItem"(arg0: $ItemLike$$Type): $Criterion<($UncraftItemTrigger$TriggerInstance)>
public static "uncraftedItem"(arg0: $ItemPredicate$$Type): $Criterion<($UncraftItemTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncraftItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UncraftItemTrigger$TriggerInstance$$Original = $UncraftItemTrigger$TriggerInstance;}
declare module "twilightforest.advancements.DrinkFromFlaskTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DrinkFromFlaskTrigger$TriggerInstance} from "twilightforest.advancements.DrinkFromFlaskTrigger$TriggerInstance"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $DrinkFromFlaskTrigger extends $SimpleCriterionTrigger<($DrinkFromFlaskTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: integer, arg2: integer, arg3: $Holder$$Type<($Potion)>): void
public "codec"(): $Codec<($DrinkFromFlaskTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkFromFlaskTrigger$$Type = ($DrinkFromFlaskTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrinkFromFlaskTrigger$$Original = $DrinkFromFlaskTrigger;}
declare module "twilightforest.advancements.KillBugTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$KillBugTrigger$TriggerInstance} from "twilightforest.advancements.KillBugTrigger$TriggerInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KillBugTrigger extends $SimpleCriterionTrigger<($KillBugTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockState$$Type): void
public "codec"(): $Codec<($KillBugTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KillBugTrigger$$Type = ($KillBugTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KillBugTrigger$$Original = $KillBugTrigger;}
declare module "twilightforest.advancements.AddModifierTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$AddModifierTrigger$TriggerInstance} from "twilightforest.advancements.AddModifierTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AddModifierTrigger extends $SimpleCriterionTrigger<($AddModifierTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public "codec"(): $Codec<($AddModifierTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddModifierTrigger$$Type = ($AddModifierTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddModifierTrigger$$Original = $AddModifierTrigger;}
declare module "twilightforest.advancements.SimpleAdvancementTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $SimpleAdvancementTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($SimpleAdvancementTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public static "makeTFPortal"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "activatedPedestal"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "completeQuestRam"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "killAllPhantoms"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "activateGhastTrap"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "eatHydraChop"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public static "brokenSword"(): $Criterion<($SimpleAdvancementTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleAdvancementTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleAdvancementTrigger$TriggerInstance$$Original = $SimpleAdvancementTrigger$TriggerInstance;}
declare module "twilightforest.advancements.HurtBossTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $HurtBossTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($HurtBossTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, hurt: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public static "hurtBoss"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($HurtBossTrigger$TriggerInstance)>
public "hurt"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtBossTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "hurt"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, hurt?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HurtBossTrigger$TriggerInstance$$Original = $HurtBossTrigger$TriggerInstance;}
declare module "twilightforest.advancements.DrinkFromFlaskTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$DrinkFromFlaskTrigger$$Type} from "twilightforest.advancements.DrinkFromFlaskTrigger"

export class $DrinkFromFlaskTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
constructor(player: ($ContextAwarePredicate$$Type)?, doses: $MinMaxBounds$Ints$$Type, seconds: $MinMaxBounds$Ints$$Type, potion: $Holder$$Type<($Potion)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $DrinkFromFlaskTrigger$$Type, arg1: integer, arg2: integer, arg3: $Holder$$Type<($Potion)>): boolean
public "seconds"(): $MinMaxBounds$Ints
public "potion"(): $Holder<($Potion)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "doses"(): $MinMaxBounds$Ints
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrinkFromFlaskTrigger$TriggerInstance$$Type = ({"doses"?: $MinMaxBounds$Ints$$Type, "potion"?: $Holder$$Type<($Potion)>, "player"?: ($ContextAwarePredicate$$Type)?, "seconds"?: $MinMaxBounds$Ints$$Type}) | ([doses?: $MinMaxBounds$Ints$$Type, potion?: $Holder$$Type<($Potion)>, player?: ($ContextAwarePredicate$$Type)?, seconds?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrinkFromFlaskTrigger$TriggerInstance$$Original = $DrinkFromFlaskTrigger$TriggerInstance;}
declare module "twilightforest.advancements.StructureClearedTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $StructureClearedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($StructureClearedTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, structure: $ResourceKey$$Type<($Structure)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "structure"(): $ResourceKey<($Structure)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "clearedStructure"(arg0: $ResourceKey$$Type<($Structure)>): $Criterion<($StructureClearedTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureClearedTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "structure"?: $ResourceKey$$Type<($Structure)>}) | ([player?: ($ContextAwarePredicate$$Type)?, structure?: $ResourceKey$$Type<($Structure)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureClearedTrigger$TriggerInstance$$Original = $StructureClearedTrigger$TriggerInstance;}
declare module "twilightforest.advancements.KillBugTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $KillBugTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($KillBugTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, bugType: ($Block$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public static "killBug"(arg0: $Block$$Type): $Criterion<($KillBugTrigger$TriggerInstance)>
public "bugType"(): $Optional<($Block)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KillBugTrigger$TriggerInstance$$Type = ({"bugType"?: ($Block$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([bugType?: ($Block$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KillBugTrigger$TriggerInstance$$Original = $KillBugTrigger$TriggerInstance;}
declare module "twilightforest.advancements.AddModifierTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $AddModifierTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($AddModifierTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, modifier: ($ResourceLocation$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "modifier"(): $Optional<($ResourceLocation)>
public static "addedModifier"(arg0: $ResourceLocation$$Type): $Criterion<($AddModifierTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "addedAnyModifier"(): $Criterion<($AddModifierTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddModifierTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "modifier"?: ($ResourceLocation$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, modifier?: ($ResourceLocation$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddModifierTrigger$TriggerInstance$$Original = $AddModifierTrigger$TriggerInstance;}
