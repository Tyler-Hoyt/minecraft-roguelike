declare module "net.minecraft.advancements.critereon.BlockPredicate$Builder" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$StatePropertiesPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$Builder"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockPredicate} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"

export class $BlockPredicate$Builder {
public "of"(arg0: $TagKey$$Type<($Block)>): $BlockPredicate$Builder
public "of"(arg0: $Collection$$Type<($Block$$Type)>): $BlockPredicate$Builder
public "of"(...arg0: ($Block$$Type)[]): $BlockPredicate$Builder
public "setProperties"(arg0: $StatePropertiesPredicate$Builder$$Type): $BlockPredicate$Builder
public static "block"(): $BlockPredicate$Builder
public "build"(): $BlockPredicate
public "hasNbt"(arg0: $CompoundTag$$Type): $BlockPredicate$Builder
set "properties"(value: $StatePropertiesPredicate$Builder$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicate$Builder$$Type = ($BlockPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPredicate$Builder$$Original = $BlockPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.EntityFlagsPredicate" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"

export class $EntityFlagsPredicate extends $Record {
static readonly "CODEC": $Codec<($EntityFlagsPredicate)>

constructor(arg0: (boolean)?, arg1: (boolean)?, arg2: (boolean)?, arg3: (boolean)?, arg4: (boolean)?, arg5: (boolean)?, arg6: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Entity$$Type): boolean
public "isSprinting"(): $Optional<(boolean)>
public "isOnGround"(): $Optional<(boolean)>
public "isCrouching"(): $Optional<(boolean)>
public "isOnFire"(): $Optional<(boolean)>
public "isSwimming"(): $Optional<(boolean)>
public "isFlying"(): $Optional<(boolean)>
public "isBaby"(): $Optional<(boolean)>
get "sprinting"(): $Optional<(boolean)>
get "onGround"(): $Optional<(boolean)>
get "crouching"(): $Optional<(boolean)>
get "onFire"(): $Optional<(boolean)>
get "swimming"(): $Optional<(boolean)>
get "flying"(): $Optional<(boolean)>
get "baby"(): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlagsPredicate$$Type = ({"isOnGround"?: (boolean)?, "isOnFire"?: (boolean)?, "isFlying"?: (boolean)?, "isSprinting"?: (boolean)?, "isCrouching"?: (boolean)?, "isSwimming"?: (boolean)?, "isBaby"?: (boolean)?}) | ([isOnGround?: (boolean)?, isOnFire?: (boolean)?, isFlying?: (boolean)?, isSprinting?: (boolean)?, isCrouching?: (boolean)?, isSwimming?: (boolean)?, isBaby?: (boolean)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityFlagsPredicate$$Original = $EntityFlagsPredicate;}
declare module "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance$Slots" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $InventoryChangeTrigger$TriggerInstance$Slots extends $Record {
static readonly "CODEC": $Codec<($InventoryChangeTrigger$TriggerInstance$Slots)>
static readonly "ANY": $InventoryChangeTrigger$TriggerInstance$Slots

constructor(arg0: $MinMaxBounds$Ints$$Type, arg1: $MinMaxBounds$Ints$$Type, arg2: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: integer, arg1: integer, arg2: integer): boolean
public "empty"(): $MinMaxBounds$Ints
public "full"(): $MinMaxBounds$Ints
public "occupied"(): $MinMaxBounds$Ints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTrigger$TriggerInstance$Slots$$Type = ({"occupied"?: $MinMaxBounds$Ints$$Type, "full"?: $MinMaxBounds$Ints$$Type, "empty"?: $MinMaxBounds$Ints$$Type}) | ([occupied?: $MinMaxBounds$Ints$$Type, full?: $MinMaxBounds$Ints$$Type, empty?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeTrigger$TriggerInstance$Slots$$Original = $InventoryChangeTrigger$TriggerInstance$Slots;}
declare module "net.minecraft.advancements.critereon.ContextAwarePredicate" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $ContextAwarePredicate {
static readonly "CODEC": $Codec<($ContextAwarePredicate)>

public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $ValidationContext$$Type): void
public static "create"(...arg0: ($LootItemCondition$$Type)[]): $ContextAwarePredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwarePredicate$$Type = ($ContextAwarePredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextAwarePredicate$$Original = $ContextAwarePredicate;}
declare module "net.minecraft.advancements.critereon.RecipeUnlockedTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $RecipeUnlockedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($RecipeUnlockedTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "recipe"(): $ResourceLocation
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeUnlockedTrigger$TriggerInstance$$Type = ({"recipe"?: $ResourceLocation$$Type, "player"?: ($ContextAwarePredicate$$Type)?}) | ([recipe?: $ResourceLocation$$Type, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeUnlockedTrigger$TriggerInstance$$Original = $RecipeUnlockedTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EntityFlagsPredicate$Builder" {
import {$EntityFlagsPredicate} from "net.minecraft.advancements.critereon.EntityFlagsPredicate"

export class $EntityFlagsPredicate$Builder {
constructor()

public static "flags"(): $EntityFlagsPredicate$Builder
public "build"(): $EntityFlagsPredicate
public "setSprinting"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setOnGround"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setSwimming"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setIsFlying"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setIsBaby"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setCrouching"(arg0: boolean): $EntityFlagsPredicate$Builder
public "setOnFire"(arg0: boolean): $EntityFlagsPredicate$Builder
set "sprinting"(value: boolean)
set "onGround"(value: boolean)
set "swimming"(value: boolean)
set "isFlying"(value: boolean)
set "isBaby"(value: boolean)
set "crouching"(value: boolean)
set "onFire"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlagsPredicate$Builder$$Type = ($EntityFlagsPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityFlagsPredicate$Builder$$Original = $EntityFlagsPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.ImpossibleTrigger$TriggerInstance" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$CriterionTriggerInstance$$Interface} from "net.minecraft.advancements.CriterionTriggerInstance"
import {$Record} from "java.lang.Record"

export class $ImpossibleTrigger$TriggerInstance extends $Record implements $CriterionTriggerInstance$$Interface {
static readonly "CODEC": $Codec<($ImpossibleTrigger$TriggerInstance)>

constructor()

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpossibleTrigger$TriggerInstance$$Type = ({}) | ([]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImpossibleTrigger$TriggerInstance$$Original = $ImpossibleTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.SlotsPredicate" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SlotRange, $SlotRange$$Type} from "net.minecraft.world.inventory.SlotRange"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $SlotsPredicate extends $Record {
static readonly "CODEC": $Codec<($SlotsPredicate)>

constructor(arg0: $Map$$Type<($SlotRange$$Type), ($ItemPredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Entity$$Type): boolean
public "slots"(): $Map<($SlotRange), ($ItemPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotsPredicate$$Type = ({"slots"?: $Map$$Type<($SlotRange$$Type), ($ItemPredicate$$Type)>}) | ([slots?: $Map$$Type<($SlotRange$$Type), ($ItemPredicate$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotsPredicate$$Original = $SlotsPredicate;}
declare module "net.minecraft.advancements.critereon.RecipeCraftedTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $RecipeCraftedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($RecipeCraftedTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $ResourceLocation$$Type, arg2: $List$$Type<($ItemPredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "crafterCraftedItem"(arg0: $ResourceLocation$$Type): $Criterion<($RecipeCraftedTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "ingredients"(): $List<($ItemPredicate)>
public static "craftedItem"(arg0: $ResourceLocation$$Type): $Criterion<($RecipeCraftedTrigger$TriggerInstance)>
public static "craftedItem"(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($ItemPredicate$Builder$$Type)>): $Criterion<($RecipeCraftedTrigger$TriggerInstance)>
public "recipeId"(): $ResourceLocation
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftedTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "ingredients"?: $List$$Type<($ItemPredicate$$Type)>, "recipeId"?: $ResourceLocation$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, ingredients?: $List$$Type<($ItemPredicate$$Type)>, recipeId?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCraftedTrigger$TriggerInstance$$Original = $RecipeCraftedTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.KilledTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$DamageSourcePredicate$Builder$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate$Builder"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $KilledTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($KilledTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?, arg2: ($DamageSourcePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $LootContext$$Type, arg2: $DamageSource$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "entityPredicate"(): $Optional<($ContextAwarePredicate)>
public "killingBlow"(): $Optional<($DamageSourcePredicate)>
public static "entityKilledPlayer"(arg0: $EntityPredicate$Builder$$Type, arg1: ($DamageSourcePredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(arg0: ($EntityPredicate$$Type)?, arg1: ($DamageSourcePredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(arg0: $EntityPredicate$Builder$$Type, arg1: $DamageSourcePredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(arg0: ($EntityPredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(): $Criterion<($KilledTrigger$TriggerInstance)>
public static "entityKilledPlayer"(arg0: ($EntityPredicate$$Type)?, arg1: $DamageSourcePredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "playerKilledEntity"(): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: ($EntityPredicate$$Type)?, arg1: ($DamageSourcePredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: ($EntityPredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: $EntityPredicate$Builder$$Type, arg1: $DamageSourcePredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: ($EntityPredicate$$Type)?, arg1: $DamageSourcePredicate$Builder$$Type): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntity"(arg0: $EntityPredicate$Builder$$Type, arg1: ($DamageSourcePredicate$$Type)?): $Criterion<($KilledTrigger$TriggerInstance)>
public static "playerKilledEntityNearSculkCatalyst"(): $Criterion<($KilledTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledTrigger$TriggerInstance$$Type = ({"entityPredicate"?: ($ContextAwarePredicate$$Type)?, "killingBlow"?: ($DamageSourcePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([entityPredicate?: ($ContextAwarePredicate$$Type)?, killingBlow?: ($DamageSourcePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KilledTrigger$TriggerInstance$$Original = $KilledTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemUsedOnLocationTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger$TriggerInstance"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ItemUsedOnLocationTrigger extends $SimpleCriterionTrigger<($ItemUsedOnLocationTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($ItemUsedOnLocationTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUsedOnLocationTrigger$$Type = ($ItemUsedOnLocationTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUsedOnLocationTrigger$$Original = $ItemUsedOnLocationTrigger;}
declare module "net.minecraft.advancements.critereon.PlayerTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PlayerTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.PlayerTrigger$TriggerInstance"

export class $PlayerTrigger extends $SimpleCriterionTrigger<($PlayerTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type): void
public "codec"(): $Codec<($PlayerTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrigger$$Type = ($PlayerTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrigger$$Original = $PlayerTrigger;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$Ints" {
import {$MinMaxBounds$BoundsFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$MinMaxBounds$BoundsFromReaderFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$MinMaxBounds, $MinMaxBounds$$Interface} from "net.minecraft.advancements.critereon.MinMaxBounds"
import {$Record} from "java.lang.Record"

export class $MinMaxBounds$Ints extends $Record implements $MinMaxBounds$$Interface<(integer)> {
static readonly "CODEC": $Codec<($MinMaxBounds$Ints)>
static readonly "ANY": $MinMaxBounds$Ints

constructor(arg0: (integer)?, arg1: (integer)?, arg2: (long)?, arg3: (long)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(): $Optional<(integer)>
public "max"(): $Optional<(integer)>
public "matches"(arg0: integer): boolean
public static "between"(arg0: integer, arg1: integer): $MinMaxBounds$Ints
public static "atLeast"(arg0: integer): $MinMaxBounds$Ints
public static "fromReader"(arg0: $StringReader$$Type, arg1: $Function$$Type<(integer), (integer)>): $MinMaxBounds$Ints
public static "fromReader"(arg0: $StringReader$$Type): $MinMaxBounds$Ints
public static "exactly"(arg0: integer): $MinMaxBounds$Ints
public "minSq"(): $Optional<(long)>
public "matchesSqr"(arg0: long): boolean
public "maxSq"(): $Optional<(long)>
public static "atMost"(arg0: integer): $MinMaxBounds$Ints
public static "createCodec"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $Codec$$Type<(integer)>, arg1: $MinMaxBounds$BoundsFactory$$Type<(integer), (R)>): $Codec<(R)>
public static "fromReader"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $StringReader$$Type, arg1: $MinMaxBounds$BoundsFromReaderFactory$$Type<(integer), (R)>, arg2: $Function$$Type<(StringJS), (integer)>, arg3: $Supplier$$Type<($DynamicCommandExceptionType$$Type)>, arg4: $Function$$Type<(integer), (integer)>): R
public "unwrapPoint"(): $Optional<(integer)>
public "isAny"(): boolean
get "any"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$Ints$$Type = ({"max"?: (integer)?, "maxSq"?: (long)?, "min"?: (integer)?, "minSq"?: (long)?}) | ([max?: (integer)?, maxSq?: (long)?, min?: (integer)?, minSq?: (long)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$Ints$$Original = $MinMaxBounds$Ints;}
declare module "net.minecraft.advancements.critereon.SingleComponentItemPredicate" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ItemSubPredicate$$Interface} from "net.minecraft.advancements.critereon.ItemSubPredicate"

export interface $SingleComponentItemPredicate$$Interface<T> extends $ItemSubPredicate$$Interface {
}

export class $SingleComponentItemPredicate<T> implements $SingleComponentItemPredicate$$Interface {
 "componentType"(): $DataComponentType<(T)>
 "matches"(arg0: $ItemStack$$Type): boolean
 "matches"(arg0: $ItemStack$$Type, arg1: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleComponentItemPredicate$$Type<T> = ($SingleComponentItemPredicate<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleComponentItemPredicate$$Original<T> = $SingleComponentItemPredicate<(T)>;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$MinMaxBounds, $MinMaxBounds$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds"

export interface $MinMaxBounds$BoundsFromReaderFactory$$Interface<T extends number, R extends $MinMaxBounds<(object)>> {

(arg0: $StringReader, arg1: $Optional<(T)>, arg2: $Optional<(T)>): R
}

export class $MinMaxBounds$BoundsFromReaderFactory<T extends number, R extends $MinMaxBounds<(object)>> implements $MinMaxBounds$BoundsFromReaderFactory$$Interface {
 "create"(arg0: $StringReader$$Type, arg1: (T)?, arg2: (T)?): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$BoundsFromReaderFactory$$Type<T, R> = ((arg0: $StringReader, arg1: $Optional<(T)>, arg2: $Optional<(T)>) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$BoundsFromReaderFactory$$Original<T, R> = $MinMaxBounds$BoundsFromReaderFactory<(T), (R)>;}
declare module "net.minecraft.advancements.critereon.DefaultBlockInteractionTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $DefaultBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($DefaultBlockInteractionTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "location"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultBlockInteractionTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "location"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, location?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultBlockInteractionTrigger$TriggerInstance$$Original = $DefaultBlockInteractionTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.BlockPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BlockPredicate extends $Record {
static readonly "CODEC": $Codec<($BlockPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BlockPredicate)>

constructor(arg0: ($HolderSet$$Type<($Block$$Type)>)?, arg1: ($StatePropertiesPredicate$$Type)?, arg2: ($NbtPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "matches"(arg0: $BlockInWorld$$Type): boolean
public "properties"(): $Optional<($StatePropertiesPredicate)>
public "blocks"(): $Optional<($HolderSet<($Block)>)>
public "nbt"(): $Optional<($NbtPredicate)>
public "requiresNbt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicate$$Type = ({"blocks"?: ($HolderSet$$Type<($Block$$Type)>)?, "nbt"?: ($NbtPredicate$$Type)?, "properties"?: ($StatePropertiesPredicate$$Type)?}) | ([blocks?: ($HolderSet$$Type<($Block$$Type)>)?, nbt?: ($NbtPredicate$$Type)?, properties?: ($StatePropertiesPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPredicate$$Original = $BlockPredicate;}
declare module "net.minecraft.advancements.critereon.EntityEquipmentPredicate" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BannerPattern$$Type} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record} from "java.lang.Record"
import {$HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $EntityEquipmentPredicate extends $Record {
static readonly "CODEC": $Codec<($EntityEquipmentPredicate)>

constructor(arg0: ($ItemPredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: ($ItemPredicate$$Type)?, arg3: ($ItemPredicate$$Type)?, arg4: ($ItemPredicate$$Type)?, arg5: ($ItemPredicate$$Type)?, arg6: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Entity$$Type): boolean
public "head"(): $Optional<($ItemPredicate)>
public "body"(): $Optional<($ItemPredicate)>
public "feet"(): $Optional<($ItemPredicate)>
public "legs"(): $Optional<($ItemPredicate)>
public "mainhand"(): $Optional<($ItemPredicate)>
public "offhand"(): $Optional<($ItemPredicate)>
public "chest"(): $Optional<($ItemPredicate)>
public static "captainPredicate"(arg0: $HolderGetter$$Type<($BannerPattern$$Type)>): $EntityEquipmentPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEquipmentPredicate$$Type = ({"body"?: ($ItemPredicate$$Type)?, "legs"?: ($ItemPredicate$$Type)?, "feet"?: ($ItemPredicate$$Type)?, "mainhand"?: ($ItemPredicate$$Type)?, "head"?: ($ItemPredicate$$Type)?, "offhand"?: ($ItemPredicate$$Type)?, "chest"?: ($ItemPredicate$$Type)?}) | ([body?: ($ItemPredicate$$Type)?, legs?: ($ItemPredicate$$Type)?, feet?: ($ItemPredicate$$Type)?, mainhand?: ($ItemPredicate$$Type)?, head?: ($ItemPredicate$$Type)?, offhand?: ($ItemPredicate$$Type)?, chest?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEquipmentPredicate$$Original = $EntityEquipmentPredicate;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$StatePropertiesPredicate$ValueMatcher, $StatePropertiesPredicate$ValueMatcher$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$ValueMatcher"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatePropertiesPredicate$PropertyMatcher)>

constructor(arg0: StringJS, arg1: $StatePropertiesPredicate$ValueMatcher$$Type)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "match"<S extends $StateHolder<(object), (object)>>(arg0: $StateDefinition$$Type<(never), (S)>, arg1: S): boolean
public "checkState"(arg0: $StateDefinition$$Type<(never), (never)>): $Optional<(StringJS)>
public "valueMatcher"(): $StatePropertiesPredicate$ValueMatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$PropertyMatcher$$Type = ({"valueMatcher"?: $StatePropertiesPredicate$ValueMatcher$$Type, "name"?: StringJS}) | ([valueMatcher?: $StatePropertiesPredicate$ValueMatcher$$Type, name?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$PropertyMatcher$$Original = $StatePropertiesPredicate$PropertyMatcher;}
declare module "net.minecraft.advancements.critereon.ItemPredicate$Builder" {
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$DataComponentPredicate$$Type} from "net.minecraft.core.component.DataComponentPredicate"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemSubPredicate$Type$$Type} from "net.minecraft.advancements.critereon.ItemSubPredicate$Type"
import {$ItemSubPredicate, $ItemSubPredicate$$Type} from "net.minecraft.advancements.critereon.ItemSubPredicate"
import {$ItemPredicate} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $ItemPredicate$Builder {
public "of"(arg0: $TagKey$$Type<($Item)>): $ItemPredicate$Builder
public "of"(...arg0: ($ItemLike$$Type)[]): $ItemPredicate$Builder
public "build"(): $ItemPredicate
public static "item"(): $ItemPredicate$Builder
public "hasComponents"(arg0: $DataComponentPredicate$$Type): $ItemPredicate$Builder
public "withSubPredicate"<T extends $ItemSubPredicate>(arg0: $ItemSubPredicate$Type$$Type<(T)>, arg1: T): $ItemPredicate$Builder
public "withCount"(arg0: $MinMaxBounds$Ints$$Type): $ItemPredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPredicate$Builder$$Type = ($ItemPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPredicate$Builder$$Original = $ItemPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.EntityHurtPlayerTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DamagePredicate$Builder$$Type} from "net.minecraft.advancements.critereon.DamagePredicate$Builder"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DamagePredicate, $DamagePredicate$$Type} from "net.minecraft.advancements.critereon.DamagePredicate"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EntityHurtPlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EntityHurtPlayerTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($DamagePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $DamageSource$$Type, arg2: float, arg3: float, arg4: boolean): boolean
public static "entityHurtPlayer"(arg0: $DamagePredicate$$Type): $Criterion<($EntityHurtPlayerTrigger$TriggerInstance)>
public static "entityHurtPlayer"(): $Criterion<($EntityHurtPlayerTrigger$TriggerInstance)>
public static "entityHurtPlayer"(arg0: $DamagePredicate$Builder$$Type): $Criterion<($EntityHurtPlayerTrigger$TriggerInstance)>
public "damage"(): $Optional<($DamagePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHurtPlayerTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "damage"?: ($DamagePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, damage?: ($DamagePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityHurtPlayerTrigger$TriggerInstance$$Original = $EntityHurtPlayerTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.LightPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $LightPredicate extends $Record {
static readonly "CODEC": $Codec<($LightPredicate)>

constructor(arg0: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "composite"(): $MinMaxBounds$Ints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightPredicate$$Type = ({"composite"?: $MinMaxBounds$Ints$$Type}) | ([composite?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightPredicate$$Original = $LightPredicate;}
declare module "net.minecraft.advancements.critereon.TargetBlockTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TargetBlockTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.TargetBlockTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TargetBlockTrigger extends $SimpleCriterionTrigger<($TargetBlockTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
public "codec"(): $Codec<($TargetBlockTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetBlockTrigger$$Type = ($TargetBlockTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetBlockTrigger$$Original = $TargetBlockTrigger;}
declare module "net.minecraft.advancements.critereon.TagPredicate" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TagPredicate<T> extends $Record {
constructor(arg0: $TagKey$$Type<(T)>, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Holder$$Type<(T)>): boolean
public "expected"(): boolean
public static "is"<T>(arg0: $TagKey$$Type<(T)>): $TagPredicate<(T)>
public "tag"(): $TagKey<(T)>
public static "isNot"<T>(arg0: $TagKey$$Type<(T)>): $TagPredicate<(T)>
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Codec<($TagPredicate<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagPredicate$$Type<T> = ({"tag"?: $TagKey$$Type<(T)>, "expected"?: boolean}) | ([tag?: $TagKey$$Type<(T)>, expected?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagPredicate$$Original<T> = $TagPredicate<(T)>;}
declare module "net.minecraft.advancements.critereon.MobEffectsPredicate$Builder" {
import {$Optional} from "java.util.Optional"
import {$MobEffectsPredicate$MobEffectInstancePredicate$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate"
import {$MobEffectsPredicate} from "net.minecraft.advancements.critereon.MobEffectsPredicate"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $MobEffectsPredicate$Builder {
constructor()

public "build"(): $Optional<($MobEffectsPredicate)>
public "and"(arg0: $Holder$$Type<($MobEffect)>, arg1: $MobEffectsPredicate$MobEffectInstancePredicate$$Type): $MobEffectsPredicate$Builder
public "and"(arg0: $Holder$$Type<($MobEffect)>): $MobEffectsPredicate$Builder
public static "effects"(): $MobEffectsPredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectsPredicate$Builder$$Type = ($MobEffectsPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectsPredicate$Builder$$Original = $MobEffectsPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.BredAnimalsTrigger" {
import {$AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BredAnimalsTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.BredAnimalsTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $BredAnimalsTrigger extends $SimpleCriterionTrigger<($BredAnimalsTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Animal$$Type, arg2: $Animal$$Type, arg3: $AgeableMob$$Type): void
public "codec"(): $Codec<($BredAnimalsTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BredAnimalsTrigger$$Type = ($BredAnimalsTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BredAnimalsTrigger$$Original = $BredAnimalsTrigger;}
declare module "net.minecraft.advancements.critereon.DefaultBlockInteractionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DefaultBlockInteractionTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.DefaultBlockInteractionTrigger$TriggerInstance"

export class $DefaultBlockInteractionTrigger extends $SimpleCriterionTrigger<($DefaultBlockInteractionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type): void
public "codec"(): $Codec<($DefaultBlockInteractionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultBlockInteractionTrigger$$Type = ($DefaultBlockInteractionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DefaultBlockInteractionTrigger$$Original = $DefaultBlockInteractionTrigger;}
declare module "net.minecraft.advancements.critereon.UsedTotemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$UsedTotemTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.UsedTotemTrigger$TriggerInstance"

export class $UsedTotemTrigger extends $SimpleCriterionTrigger<($UsedTotemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($UsedTotemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsedTotemTrigger$$Type = ($UsedTotemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsedTotemTrigger$$Original = $UsedTotemTrigger;}
declare module "net.minecraft.advancements.critereon.CriterionValidator" {
import {$HolderGetter$Provider$$Type} from "net.minecraft.core.HolderGetter$Provider"
import {$Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$ProblemReporter$$Type} from "net.minecraft.util.ProblemReporter"
import {$List$$Type} from "java.util.List"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $CriterionValidator {
constructor(arg0: $ProblemReporter$$Type, arg1: $HolderGetter$Provider$$Type)

public "validate"(arg0: $ContextAwarePredicate$$Type, arg1: $LootContextParamSet$$Type, arg2: StringJS): void
public "validate"(arg0: $List$$Type<($ContextAwarePredicate$$Type)>, arg1: $LootContextParamSet$$Type, arg2: StringJS): void
public "validateEntities"(arg0: $List$$Type<($ContextAwarePredicate$$Type)>, arg1: StringJS): void
public "validateEntity"(arg0: ($ContextAwarePredicate$$Type)?, arg1: StringJS): void
public "validateEntity"(arg0: $ContextAwarePredicate$$Type, arg1: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionValidator$$Type = ($CriterionValidator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionValidator$$Original = $CriterionValidator;}
declare module "net.minecraft.advancements.critereon.EntityPredicate$LocationWrapper" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EntityPredicate$LocationWrapper extends $Record {
static readonly "CODEC": $MapCodec<($EntityPredicate$LocationWrapper)>

constructor(arg0: ($LocationPredicate$$Type)?, arg1: ($LocationPredicate$$Type)?, arg2: ($LocationPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "located"(): $Optional<($LocationPredicate)>
public "steppingOn"(): $Optional<($LocationPredicate)>
public "affectsMovement"(): $Optional<($LocationPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicate$LocationWrapper$$Type = ({"located"?: ($LocationPredicate$$Type)?, "steppingOn"?: ($LocationPredicate$$Type)?, "affectsMovement"?: ($LocationPredicate$$Type)?}) | ([located?: ($LocationPredicate$$Type)?, steppingOn?: ($LocationPredicate$$Type)?, affectsMovement?: ($LocationPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPredicate$LocationWrapper$$Original = $EntityPredicate$LocationWrapper;}
declare module "net.minecraft.advancements.critereon.EnterBlockTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EnterBlockTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnterBlockTrigger extends $SimpleCriterionTrigger<($EnterBlockTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockState$$Type): void
public "codec"(): $Codec<($EnterBlockTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnterBlockTrigger$$Type = ($EnterBlockTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnterBlockTrigger$$Original = $EnterBlockTrigger;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds" {
import {$SimpleCommandExceptionType} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$MinMaxBounds$BoundsFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory"
import {$Optional} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$MinMaxBounds$BoundsFromReaderFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"

export interface $MinMaxBounds$$Interface<T extends number> {
get "any"(): boolean
}

export class $MinMaxBounds<T extends number> implements $MinMaxBounds$$Interface {
static readonly "ERROR_SWAPPED": $SimpleCommandExceptionType
static readonly "ERROR_EMPTY": $SimpleCommandExceptionType

 "min"(): $Optional<(T)>
 "max"(): $Optional<(T)>
static "createCodec"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $Codec$$Type<(T)>, arg1: $MinMaxBounds$BoundsFactory$$Type<(T), (R)>): $Codec<(R)>
static "fromReader"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $StringReader$$Type, arg1: $MinMaxBounds$BoundsFromReaderFactory$$Type<(T), (R)>, arg2: $Function$$Type<(StringJS), (T)>, arg3: $Supplier$$Type<($DynamicCommandExceptionType$$Type)>, arg4: $Function$$Type<(T), (T)>): R
 "unwrapPoint"(): $Optional<(T)>
 "isAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$$Type<T> = ($MinMaxBounds<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$$Original<T> = $MinMaxBounds<(T)>;}
declare module "net.minecraft.advancements.critereon.NbtPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $NbtPredicate extends $Record {
static readonly "CODEC": $Codec<($NbtPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NbtPredicate)>

constructor(arg0: $CompoundTag$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "matches"(arg0: $Entity$$Type): boolean
public "matches"(arg0: $Tag$$Type): boolean
public "tag"(): $CompoundTag
public static "getEntityTagToCompare"(arg0: $Entity$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtPredicate$$Type = ({"tag"?: $CompoundTag$$Type}) | ([tag?: $CompoundTag$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtPredicate$$Original = $NbtPredicate;}
declare module "net.minecraft.advancements.critereon.RecipeUnlockedTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeUnlockedTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.RecipeUnlockedTrigger$TriggerInstance"

export class $RecipeUnlockedTrigger extends $SimpleCriterionTrigger<($RecipeUnlockedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $RecipeHolder$$Type<(never)>): void
public static "unlocked"(arg0: $ResourceLocation$$Type): $Criterion<($RecipeUnlockedTrigger$TriggerInstance)>
public "codec"(): $Codec<($RecipeUnlockedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeUnlockedTrigger$$Type = ($RecipeUnlockedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeUnlockedTrigger$$Original = $RecipeUnlockedTrigger;}
declare module "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance" {
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$CriterionTriggerInstance$$Interface} from "net.minecraft.advancements.CriterionTriggerInstance"

export interface $SimpleCriterionTrigger$SimpleInstance$$Interface extends $CriterionTriggerInstance$$Interface {

(): ($ContextAwarePredicate$$Type)?
}

export class $SimpleCriterionTrigger$SimpleInstance implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
 "validate"(arg0: $CriterionValidator$$Type): void
 "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCriterionTrigger$SimpleInstance$$Type = (() => ($ContextAwarePredicate$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCriterionTrigger$SimpleInstance$$Original = $SimpleCriterionTrigger$SimpleInstance;}
declare module "net.minecraft.advancements.critereon.ItemPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ItemFilter, $ItemFilter$$Type, $ItemFilter$$Interface} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$DataComponentPredicate, $DataComponentPredicate$$Type} from "net.minecraft.core.component.DataComponentPredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemSubPredicate, $ItemSubPredicate$$Type} from "net.minecraft.advancements.critereon.ItemSubPredicate"
import {$ItemSubPredicate$Type, $ItemSubPredicate$Type$$Type} from "net.minecraft.advancements.critereon.ItemSubPredicate$Type"
import {$Record} from "java.lang.Record"

export class $ItemPredicate extends $Record implements $Predicate$$Interface<($ItemStack)>, $ItemFilter$$Interface {
static readonly "CODEC": $Codec<($ItemPredicate)>

constructor(arg0: ($HolderSet$$Type<($Item$$Type)>)?, arg1: $MinMaxBounds$Ints$$Type, arg2: $DataComponentPredicate$$Type, arg3: $Map$$Type<($ItemSubPredicate$Type$$Type<(never)>), ($ItemSubPredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public "count"(): $MinMaxBounds$Ints
public "items"(): $Optional<($HolderSet<($Item)>)>
public "subPredicates"(): $Map<($ItemSubPredicate$Type<(never)>), ($ItemSubPredicate)>
public "components"(): $DataComponentPredicate
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "or"(arg0: $ItemFilter$$Type): $ItemFilter
public "and"(arg0: $ItemFilter$$Type): $ItemFilter
public static "not"(arg0: $ItemFilter$$Type): $ItemFilter
public static "tag"(arg0: StringJS): $ItemFilter
public static "item"(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
public static "allOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
public static "anyOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
public static "equipmentSlot"(arg0: $EquipmentSlot$$Type): $ItemFilter
public static "hasEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
public static "hasEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
public static "anyToolAction"(...arg0: (StringJS)[]): $ItemFilter
public static "hasComponent"(...arg0: ($DataComponentType$$Type<(never)>)[]): $ItemFilter
public static "equipmentSlotGroup"(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
public static "custom"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $ItemFilter
public static "custom"(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
public static "toolAction"(...arg0: (StringJS)[]): $ItemFilter
public static "hasStoredEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
public static "hasStoredEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPredicate$$Type = ({"components"?: $DataComponentPredicate$$Type, "subPredicates"?: $Map$$Type<($ItemSubPredicate$Type$$Type<(never)>), ($ItemSubPredicate$$Type)>, "items"?: ($HolderSet$$Type<($Item$$Type)>)?, "count"?: $MinMaxBounds$Ints$$Type}) | ([components?: $DataComponentPredicate$$Type, subPredicates?: $Map$$Type<($ItemSubPredicate$Type$$Type<(never)>), ($ItemSubPredicate$$Type)>, items?: ($HolderSet$$Type<($Item$$Type)>)?, count?: $MinMaxBounds$Ints$$Type]) | (($ItemFilter$$Type) | ({"items"?: ($HolderSet$$Type<($Item$$Type)>)?, "count"?: $MinMaxBounds$Ints$$Type, "components"?: $DataComponentPredicate$$Type, "subPredicates"?: $Map$$Type<($ItemSubPredicate$Type$$Type<(never)>), ($ItemSubPredicate$$Type)>}) | ([items?: ($HolderSet$$Type<($Item$$Type)>)?, count?: $MinMaxBounds$Ints$$Type, components?: $DataComponentPredicate$$Type, subPredicates?: $Map$$Type<($ItemSubPredicate$Type$$Type<(never)>), ($ItemSubPredicate$$Type)>]));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPredicate$$Original = $ItemPredicate;}
declare module "net.minecraft.advancements.critereon.ItemSubPredicate$Type" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ItemSubPredicate} from "net.minecraft.advancements.critereon.ItemSubPredicate"
import {$Record} from "java.lang.Record"

export class $ItemSubPredicate$Type<T extends $ItemSubPredicate> extends $Record {
constructor(arg0: $Codec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $Codec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ItemSubPredicateType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ItemSubPredicateTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSubPredicate$Type$$Type<T> = (Special.ItemSubPredicateType) | ({"codec"?: $Codec$$Type<(T)>}) | ([codec?: $Codec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSubPredicate$Type$$Original<T> = $ItemSubPredicate$Type<(T)>;}
declare module "net.minecraft.advancements.critereon.BredAnimalsTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $BredAnimalsTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($BredAnimalsTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?, arg3: ($ContextAwarePredicate$$Type)?)

public "parent"(): $Optional<($ContextAwarePredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $LootContext$$Type, arg2: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "child"(): $Optional<($ContextAwarePredicate)>
public static "bredAnimals"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($BredAnimalsTrigger$TriggerInstance)>
public static "bredAnimals"(): $Criterion<($BredAnimalsTrigger$TriggerInstance)>
public static "bredAnimals"(arg0: ($EntityPredicate$$Type)?, arg1: ($EntityPredicate$$Type)?, arg2: ($EntityPredicate$$Type)?): $Criterion<($BredAnimalsTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "partner"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BredAnimalsTrigger$TriggerInstance$$Type = ({"child"?: ($ContextAwarePredicate$$Type)?, "parent"?: ($ContextAwarePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "partner"?: ($ContextAwarePredicate$$Type)?}) | ([child?: ($ContextAwarePredicate$$Type)?, parent?: ($ContextAwarePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, partner?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BredAnimalsTrigger$TriggerInstance$$Original = $BredAnimalsTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.AnyBlockInteractionTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $AnyBlockInteractionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($AnyBlockInteractionTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "location"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyBlockInteractionTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "location"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, location?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnyBlockInteractionTrigger$TriggerInstance$$Original = $AnyBlockInteractionTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ChanneledLightningTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$Collection$$Type} from "java.util.Collection"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ChanneledLightningTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ChanneledLightningTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $List$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Collection$$Type<($LootContext$$Type)>): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public static "channeledLightning"(...arg0: ($EntityPredicate$Builder$$Type)[]): $Criterion<($ChanneledLightningTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "victims"(): $List<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanneledLightningTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "victims"?: $List$$Type<($ContextAwarePredicate$$Type)>}) | ([player?: ($ContextAwarePredicate$$Type)?, victims?: $List$$Type<($ContextAwarePredicate$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChanneledLightningTrigger$TriggerInstance$$Original = $ChanneledLightningTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.UsingItemTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $UsingItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($UsingItemTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public static "lookingAt"(arg0: $EntityPredicate$Builder$$Type, arg1: $ItemPredicate$Builder$$Type): $Criterion<($UsingItemTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsingItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsingItemTrigger$TriggerInstance$$Original = $UsingItemTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.StartRidingTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $StartRidingTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($StartRidingTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "playerStartsRiding"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($StartRidingTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartRidingTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StartRidingTrigger$TriggerInstance$$Original = $StartRidingTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EnchantedItemTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $EnchantedItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EnchantedItemTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "item"(): $Optional<($ItemPredicate)>
public "levels"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public static "enchantedItem"(): $Criterion<($EnchantedItemTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "levels"?: $MinMaxBounds$Ints$$Type, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, levels?: $MinMaxBounds$Ints$$Type, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedItemTrigger$TriggerInstance$$Original = $EnchantedItemTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.FluidPredicate$Builder" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidPredicate} from "net.minecraft.advancements.critereon.FluidPredicate"
import {$StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"

export class $FluidPredicate$Builder {
public "of"(arg0: $HolderSet$$Type<($Fluid)>): $FluidPredicate$Builder
public "of"(arg0: $Fluid$$Type): $FluidPredicate$Builder
public "setProperties"(arg0: $StatePropertiesPredicate$$Type): $FluidPredicate$Builder
public "build"(): $FluidPredicate
public static "fluid"(): $FluidPredicate$Builder
set "properties"(value: $StatePropertiesPredicate$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPredicate$Builder$$Type = ($FluidPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPredicate$Builder$$Original = $FluidPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$Doubles" {
import {$MinMaxBounds$BoundsFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function$$Type} from "java.util.function.Function"
import {$MinMaxBounds$BoundsFromReaderFactory$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFromReaderFactory"
import {$DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$MinMaxBounds, $MinMaxBounds$$Interface} from "net.minecraft.advancements.critereon.MinMaxBounds"
import {$Record} from "java.lang.Record"

export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds$$Interface<(double)> {
static readonly "CODEC": $Codec<($MinMaxBounds$Doubles)>
static readonly "ANY": $MinMaxBounds$Doubles

constructor(arg0: (double)?, arg1: (double)?, arg2: (double)?, arg3: (double)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "min"(): $Optional<(double)>
public "max"(): $Optional<(double)>
public "matches"(arg0: double): boolean
public static "between"(arg0: double, arg1: double): $MinMaxBounds$Doubles
public static "atLeast"(arg0: double): $MinMaxBounds$Doubles
public static "fromReader"(arg0: $StringReader$$Type, arg1: $Function$$Type<(double), (double)>): $MinMaxBounds$Doubles
public static "fromReader"(arg0: $StringReader$$Type): $MinMaxBounds$Doubles
public static "exactly"(arg0: double): $MinMaxBounds$Doubles
public "minSq"(): $Optional<(double)>
public "matchesSqr"(arg0: double): boolean
public "maxSq"(): $Optional<(double)>
public static "atMost"(arg0: double): $MinMaxBounds$Doubles
public static "createCodec"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $Codec$$Type<(double)>, arg1: $MinMaxBounds$BoundsFactory$$Type<(double), (R)>): $Codec<(R)>
public static "fromReader"<T extends number, R extends $MinMaxBounds<(object)>>(arg0: $StringReader$$Type, arg1: $MinMaxBounds$BoundsFromReaderFactory$$Type<(double), (R)>, arg2: $Function$$Type<(StringJS), (double)>, arg3: $Supplier$$Type<($DynamicCommandExceptionType$$Type)>, arg4: $Function$$Type<(double), (double)>): R
public "unwrapPoint"(): $Optional<(double)>
public "isAny"(): boolean
get "any"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$Doubles$$Type = ({"max"?: (double)?, "maxSq"?: (double)?, "min"?: (double)?, "minSq"?: (double)?}) | ([max?: (double)?, maxSq?: (double)?, min?: (double)?, minSq?: (double)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$Doubles$$Original = $MinMaxBounds$Doubles;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$ValueMatcher" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable} from "java.lang.Comparable"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $StatePropertiesPredicate$ValueMatcher$$Interface {

(arg0: $StateHolder<(never), (never)>, arg1: $Property<(T)>): boolean
}

export class $StatePropertiesPredicate$ValueMatcher implements $StatePropertiesPredicate$ValueMatcher$$Interface {
static readonly "CODEC": $Codec<($StatePropertiesPredicate$ValueMatcher)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatePropertiesPredicate$ValueMatcher)>

 "match"<T extends $Comparable<(object)>>(arg0: $StateHolder$$Type<(never), (never)>, arg1: $Property$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$ValueMatcher$$Type = ((arg0: $StateHolder<(never), (never)>, arg1: $Property<(T)>) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$ValueMatcher$$Original = $StatePropertiesPredicate$ValueMatcher;}
declare module "net.minecraft.advancements.critereon.FishingRodHookedTrigger$TriggerInstance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $FishingRodHookedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($FishingRodHookedTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?, arg3: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type, arg2: $Collection$$Type<($ItemStack$$Type)>): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "item"(): $Optional<($ItemPredicate)>
public "entity"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "fishedItem"(arg0: ($ItemPredicate$$Type)?, arg1: ($EntityPredicate$$Type)?, arg2: ($ItemPredicate$$Type)?): $Criterion<($FishingRodHookedTrigger$TriggerInstance)>
public "rod"(): $Optional<($ItemPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FishingRodHookedTrigger$TriggerInstance$$Type = ({"entity"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "rod"?: ($ItemPredicate$$Type)?}) | ([entity?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, rod?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FishingRodHookedTrigger$TriggerInstance$$Original = $FishingRodHookedTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ConsumeItemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConsumeItemTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ConsumeItemTrigger$TriggerInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ConsumeItemTrigger extends $SimpleCriterionTrigger<($ConsumeItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($ConsumeItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsumeItemTrigger$$Type = ($ConsumeItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConsumeItemTrigger$$Original = $ConsumeItemTrigger;}
declare module "net.minecraft.advancements.critereon.TameAnimalTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $TameAnimalTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($TameAnimalTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "entity"(): $Optional<($ContextAwarePredicate)>
public static "tamedAnimal"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($TameAnimalTrigger$TriggerInstance)>
public static "tamedAnimal"(): $Criterion<($TameAnimalTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TameAnimalTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TameAnimalTrigger$TriggerInstance$$Original = $TameAnimalTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DamagePredicate$Builder" {
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$DamagePredicate} from "net.minecraft.advancements.critereon.DamagePredicate"
import {$DamageSourcePredicate$Builder$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate$Builder"

export class $DamagePredicate$Builder {
constructor()

public "type"(arg0: $DamageSourcePredicate$$Type): $DamagePredicate$Builder
public "type"(arg0: $DamageSourcePredicate$Builder$$Type): $DamagePredicate$Builder
public "build"(): $DamagePredicate
public "dealtDamage"(arg0: $MinMaxBounds$Doubles$$Type): $DamagePredicate$Builder
public "takenDamage"(arg0: $MinMaxBounds$Doubles$$Type): $DamagePredicate$Builder
public static "damageInstance"(): $DamagePredicate$Builder
public "sourceEntity"(arg0: $EntityPredicate$$Type): $DamagePredicate$Builder
public "blocked"(arg0: boolean): $DamagePredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamagePredicate$Builder$$Type = ($DamagePredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamagePredicate$Builder$$Original = $DamagePredicate$Builder;}
declare module "net.minecraft.advancements.critereon.TameAnimalTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TameAnimalTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.TameAnimalTrigger$TriggerInstance"

export class $TameAnimalTrigger extends $SimpleCriterionTrigger<($TameAnimalTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Animal$$Type): void
public "codec"(): $Codec<($TameAnimalTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TameAnimalTrigger$$Type = ($TameAnimalTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TameAnimalTrigger$$Original = $TameAnimalTrigger;}
declare module "net.minecraft.advancements.critereon.SlideDownBlockTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $SlideDownBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($SlideDownBlockTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($Holder$$Type<($Block$$Type)>)?, arg2: ($StatePropertiesPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type): boolean
public "state"(): $Optional<($StatePropertiesPredicate)>
public "block"(): $Optional<($Holder<($Block)>)>
public static "slidesDownBlock"(arg0: $Block$$Type): $Criterion<($SlideDownBlockTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlideDownBlockTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "block"?: ($Holder$$Type<($Block$$Type)>)?, "state"?: ($StatePropertiesPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, block?: ($Holder$$Type<($Block$$Type)>)?, state?: ($StatePropertiesPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlideDownBlockTrigger$TriggerInstance$$Original = $SlideDownBlockTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ChangeDimensionTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ChangeDimensionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ChangeDimensionTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ResourceKey$$Type<($Level$$Type)>)?, arg2: ($ResourceKey$$Type<($Level$$Type)>)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ResourceKey$$Type<($Level)>, arg1: $ResourceKey$$Type<($Level)>): boolean
public "from"(): $Optional<($ResourceKey<($Level)>)>
public "to"(): $Optional<($ResourceKey<($Level)>)>
public static "changedDimensionTo"(arg0: $ResourceKey$$Type<($Level)>): $Criterion<($ChangeDimensionTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "changedDimension"(arg0: $ResourceKey$$Type<($Level)>, arg1: $ResourceKey$$Type<($Level)>): $Criterion<($ChangeDimensionTrigger$TriggerInstance)>
public static "changedDimension"(): $Criterion<($ChangeDimensionTrigger$TriggerInstance)>
public static "changedDimensionFrom"(arg0: $ResourceKey$$Type<($Level)>): $Criterion<($ChangeDimensionTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeDimensionTrigger$TriggerInstance$$Type = ({"from"?: ($ResourceKey$$Type<($Level$$Type)>)?, "player"?: ($ContextAwarePredicate$$Type)?, "to"?: ($ResourceKey$$Type<($Level$$Type)>)?}) | ([from?: ($ResourceKey$$Type<($Level$$Type)>)?, player?: ($ContextAwarePredicate$$Type)?, to?: ($ResourceKey$$Type<($Level$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeDimensionTrigger$TriggerInstance$$Original = $ChangeDimensionTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DamagePredicate" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"

export class $DamagePredicate extends $Record {
static readonly "CODEC": $Codec<($DamagePredicate)>

constructor(arg0: $MinMaxBounds$Doubles$$Type, arg1: $MinMaxBounds$Doubles$$Type, arg2: ($EntityPredicate$$Type)?, arg3: (boolean)?, arg4: ($DamageSourcePredicate$$Type)?)

public "type"(): $Optional<($DamageSourcePredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $DamageSource$$Type, arg2: float, arg3: float, arg4: boolean): boolean
public "dealtDamage"(): $MinMaxBounds$Doubles
public "takenDamage"(): $MinMaxBounds$Doubles
public "sourceEntity"(): $Optional<($EntityPredicate)>
public "blocked"(): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamagePredicate$$Type = ({"takenDamage"?: $MinMaxBounds$Doubles$$Type, "sourceEntity"?: ($EntityPredicate$$Type)?, "type"?: ($DamageSourcePredicate$$Type)?, "dealtDamage"?: $MinMaxBounds$Doubles$$Type, "blocked"?: (boolean)?}) | ([takenDamage?: $MinMaxBounds$Doubles$$Type, sourceEntity?: ($EntityPredicate$$Type)?, type?: ($DamageSourcePredicate$$Type)?, dealtDamage?: $MinMaxBounds$Doubles$$Type, blocked?: (boolean)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamagePredicate$$Original = $DamagePredicate;}
declare module "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate$StoredEnchantments" {
import {$ItemEnchantmentsPredicate} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"

export class $ItemEnchantmentsPredicate$StoredEnchantments extends $ItemEnchantmentsPredicate {
static readonly "CODEC": $Codec<($ItemEnchantmentsPredicate$StoredEnchantments)>

public "componentType"(): $DataComponentType<($ItemEnchantments)>
public "matches"(arg0: $ItemStack$$Type, arg1: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantmentsPredicate$StoredEnchantments$$Type = ($ItemEnchantmentsPredicate$StoredEnchantments);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantmentsPredicate$StoredEnchantments$$Original = $ItemEnchantmentsPredicate$StoredEnchantments;}
declare module "net.minecraft.advancements.critereon.ConstructBeaconTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ConstructBeaconTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ConstructBeaconTrigger$TriggerInstance"

export class $ConstructBeaconTrigger extends $SimpleCriterionTrigger<($ConstructBeaconTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: integer): void
public "codec"(): $Codec<($ConstructBeaconTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructBeaconTrigger$$Type = ($ConstructBeaconTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstructBeaconTrigger$$Original = $ConstructBeaconTrigger;}
declare module "net.minecraft.advancements.critereon.UsingItemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UsingItemTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.UsingItemTrigger$TriggerInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $UsingItemTrigger extends $SimpleCriterionTrigger<($UsingItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($UsingItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsingItemTrigger$$Type = ($UsingItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsingItemTrigger$$Original = $UsingItemTrigger;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StatePropertiesPredicate extends $Record {
static readonly "CODEC": $Codec<($StatePropertiesPredicate)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($StatePropertiesPredicate)>

constructor(arg0: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $FluidState$$Type): boolean
public "matches"<S extends $StateHolder<(object), (object)>>(arg0: $StateDefinition$$Type<(never), (S)>, arg1: S): boolean
public "matches"(arg0: $BlockState$$Type): boolean
public "properties"(): $List<($StatePropertiesPredicate$PropertyMatcher)>
public "checkState"(arg0: $StateDefinition$$Type<(never), (never)>): $Optional<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$$Type = ({"properties"?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>}) | ([properties?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$$Original = $StatePropertiesPredicate;}
declare module "net.minecraft.advancements.critereon.AnyBlockInteractionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AnyBlockInteractionTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.AnyBlockInteractionTrigger$TriggerInstance"

export class $AnyBlockInteractionTrigger extends $SimpleCriterionTrigger<($AnyBlockInteractionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($AnyBlockInteractionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyBlockInteractionTrigger$$Type = ($AnyBlockInteractionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnyBlockInteractionTrigger$$Original = $AnyBlockInteractionTrigger;}
declare module "net.minecraft.advancements.critereon.EntityTypePredicate" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityTypePredicate extends $Record {
static readonly "CODEC": $Codec<($EntityTypePredicate)>

constructor(arg0: $HolderSet$$Type<($EntityType<(never)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $EntityType$$Type<(never)>): boolean
public static "of"(arg0: $TagKey$$Type<($EntityType<(never)>)>): $EntityTypePredicate
public static "of"(arg0: $EntityType$$Type<(never)>): $EntityTypePredicate
public "types"(): $HolderSet<($EntityType<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypePredicate$$Type = ({"types"?: $HolderSet$$Type<($EntityType<(never)>)>}) | ([types?: $HolderSet$$Type<($EntityType<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTypePredicate$$Original = $EntityTypePredicate;}
declare module "net.minecraft.advancements.critereon.PickedUpItemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PickedUpItemTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.PickedUpItemTrigger$TriggerInstance"

export class $PickedUpItemTrigger extends $SimpleCriterionTrigger<($PickedUpItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): void
public "codec"(): $Codec<($PickedUpItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickedUpItemTrigger$$Type = ($PickedUpItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickedUpItemTrigger$$Original = $PickedUpItemTrigger;}
declare module "net.minecraft.advancements.critereon.KilledTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$KilledTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.KilledTrigger$TriggerInstance"

export class $KilledTrigger extends $SimpleCriterionTrigger<($KilledTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type, arg2: $DamageSource$$Type): void
public "codec"(): $Codec<($KilledTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledTrigger$$Type = ($KilledTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KilledTrigger$$Original = $KilledTrigger;}
declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$Builder" {
import {$Optional} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ImmutableList$Builder} from "com.google.common.collect.ImmutableList$Builder"
import {$StatePropertiesPredicate} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$StatePropertiesPredicate$PropertyMatcher} from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $StatePropertiesPredicate$Builder {
readonly "matchers": $ImmutableList$Builder<($StatePropertiesPredicate$PropertyMatcher)>

public static "properties"(): $StatePropertiesPredicate$Builder
public "build"(): $Optional<($StatePropertiesPredicate)>
public "hasProperty"(arg0: $Property$$Type<(integer)>, arg1: integer): $StatePropertiesPredicate$Builder
public "hasProperty"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: T): $StatePropertiesPredicate$Builder
public "hasProperty"(arg0: $Property$$Type<(boolean)>, arg1: boolean): $StatePropertiesPredicate$Builder
public "hasProperty"(arg0: $Property$$Type<(never)>, arg1: StringJS): $StatePropertiesPredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$Builder$$Type = ($StatePropertiesPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StatePropertiesPredicate$Builder$$Original = $StatePropertiesPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.BrewedPotionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BrewedPotionTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.BrewedPotionTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $BrewedPotionTrigger extends $SimpleCriterionTrigger<($BrewedPotionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Holder$$Type<($Potion)>): void
public "codec"(): $Codec<($BrewedPotionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewedPotionTrigger$$Type = ($BrewedPotionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewedPotionTrigger$$Original = $BrewedPotionTrigger;}
declare module "net.minecraft.advancements.critereon.LocationPredicate$PositionPredicate" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"

export class $LocationPredicate$PositionPredicate extends $Record {
static readonly "CODEC": $Codec<($LocationPredicate$PositionPredicate)>

constructor(arg0: $MinMaxBounds$Doubles$$Type, arg1: $MinMaxBounds$Doubles$$Type, arg2: $MinMaxBounds$Doubles$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: double, arg1: double, arg2: double): boolean
public "x"(): $MinMaxBounds$Doubles
public "z"(): $MinMaxBounds$Doubles
public "y"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPredicate$PositionPredicate$$Type = ({"z"?: $MinMaxBounds$Doubles$$Type, "y"?: $MinMaxBounds$Doubles$$Type, "x"?: $MinMaxBounds$Doubles$$Type}) | ([z?: $MinMaxBounds$Doubles$$Type, y?: $MinMaxBounds$Doubles$$Type, x?: $MinMaxBounds$Doubles$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocationPredicate$PositionPredicate$$Original = $LocationPredicate$PositionPredicate;}
declare module "net.minecraft.advancements.critereon.PlayerInteractTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $PlayerInteractTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($PlayerInteractTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "item"(): $Optional<($ItemPredicate)>
public "entity"(): $Optional<($ContextAwarePredicate)>
public static "itemUsedOnEntity"(arg0: $ItemPredicate$Builder$$Type, arg1: ($ContextAwarePredicate$$Type)?): $Criterion<($PlayerInteractTrigger$TriggerInstance)>
public static "itemUsedOnEntity"(arg0: ($ContextAwarePredicate$$Type)?, arg1: $ItemPredicate$Builder$$Type, arg2: ($ContextAwarePredicate$$Type)?): $Criterion<($PlayerInteractTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractTrigger$TriggerInstance$$Original = $PlayerInteractTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.PlayerInteractTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PlayerInteractTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.PlayerInteractTrigger$TriggerInstance"

export class $PlayerInteractTrigger extends $SimpleCriterionTrigger<($PlayerInteractTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $Entity$$Type): void
public "codec"(): $Codec<($PlayerInteractTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractTrigger$$Type = ($PlayerInteractTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInteractTrigger$$Original = $PlayerInteractTrigger;}
declare module "net.minecraft.advancements.critereon.ItemDurabilityTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $ItemDurabilityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ItemDurabilityTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: $MinMaxBounds$Ints$$Type, arg3: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type, arg1: integer): boolean
public "delta"(): $MinMaxBounds$Ints
public "item"(): $Optional<($ItemPredicate)>
public static "changedDurability"(arg0: ($ItemPredicate$$Type)?, arg1: $MinMaxBounds$Ints$$Type): $Criterion<($ItemDurabilityTrigger$TriggerInstance)>
public static "changedDurability"(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: $MinMaxBounds$Ints$$Type): $Criterion<($ItemDurabilityTrigger$TriggerInstance)>
public "durability"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDurabilityTrigger$TriggerInstance$$Type = ({"item"?: ($ItemPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "durability"?: $MinMaxBounds$Ints$$Type, "delta"?: $MinMaxBounds$Ints$$Type}) | ([item?: ($ItemPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, durability?: $MinMaxBounds$Ints$$Type, delta?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDurabilityTrigger$TriggerInstance$$Original = $ItemDurabilityTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.MobEffectsPredicate" {
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MobEffectsPredicate$MobEffectInstancePredicate, $MobEffectsPredicate$MobEffectInstancePredicate$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Record} from "java.lang.Record"

export class $MobEffectsPredicate extends $Record {
static readonly "CODEC": $Codec<($MobEffectsPredicate)>

constructor(arg0: $Map$$Type<($Holder$$Type<($MobEffect$$Type)>), ($MobEffectsPredicate$MobEffectInstancePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LivingEntity$$Type): boolean
public "matches"(arg0: $Map$$Type<($Holder$$Type<($MobEffect$$Type)>), ($MobEffectInstance$$Type)>): boolean
public "matches"(arg0: $Entity$$Type): boolean
public "effectMap"(): $Map<($Holder<($MobEffect)>), ($MobEffectsPredicate$MobEffectInstancePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectsPredicate$$Type = ({"effectMap"?: $Map$$Type<($Holder$$Type<($MobEffect$$Type)>), ($MobEffectsPredicate$MobEffectInstancePredicate$$Type)>}) | ([effectMap?: $Map$$Type<($Holder$$Type<($MobEffect$$Type)>), ($MobEffectsPredicate$MobEffectInstancePredicate$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectsPredicate$$Original = $MobEffectsPredicate;}
declare module "net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$LocationPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.LocationPredicate$Builder"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ItemUsedOnLocationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ItemUsedOnLocationTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "location"(): $Optional<($ContextAwarePredicate)>
public static "placedBlock"(...arg0: ($LootItemCondition$Builder$$Type)[]): $Criterion<($ItemUsedOnLocationTrigger$TriggerInstance)>
public static "placedBlock"(arg0: $Block$$Type): $Criterion<($ItemUsedOnLocationTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "allayDropItemOnBlock"(arg0: $LocationPredicate$Builder$$Type, arg1: $ItemPredicate$Builder$$Type): $Criterion<($ItemUsedOnLocationTrigger$TriggerInstance)>
public static "itemUsedOnBlock"(arg0: $LocationPredicate$Builder$$Type, arg1: $ItemPredicate$Builder$$Type): $Criterion<($ItemUsedOnLocationTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUsedOnLocationTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "location"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, location?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUsedOnLocationTrigger$TriggerInstance$$Original = $ItemUsedOnLocationTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DamageSourcePredicate$Builder" {
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$DamageSourcePredicate} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$TagPredicate$$Type} from "net.minecraft.advancements.critereon.TagPredicate"
import {$DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"

export class $DamageSourcePredicate$Builder {
constructor()

public "isDirect"(arg0: boolean): $DamageSourcePredicate$Builder
public "source"(arg0: $EntityPredicate$Builder$$Type): $DamageSourcePredicate$Builder
public "build"(): $DamageSourcePredicate
public "direct"(arg0: $EntityPredicate$Builder$$Type): $DamageSourcePredicate$Builder
public "tag"(arg0: $TagPredicate$$Type<($DamageType$$Type)>): $DamageSourcePredicate$Builder
public static "damageType"(): $DamageSourcePredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicate$Builder$$Type = ($DamageSourcePredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSourcePredicate$Builder$$Original = $DamageSourcePredicate$Builder;}
declare module "net.minecraft.advancements.critereon.LootTableTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$LootTableTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.LootTableTrigger$TriggerInstance"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export class $LootTableTrigger extends $SimpleCriterionTrigger<($LootTableTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceKey$$Type<($LootTable)>): void
public "codec"(): $Codec<($LootTableTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableTrigger$$Type = ($LootTableTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableTrigger$$Original = $LootTableTrigger;}
declare module "net.minecraft.advancements.critereon.LightningStrikeTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LightningStrikeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.LightningStrikeTrigger$TriggerInstance"

export class $LightningStrikeTrigger extends $SimpleCriterionTrigger<($LightningStrikeTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $LightningBolt$$Type, arg2: $List$$Type<($Entity$$Type)>): void
public "codec"(): $Codec<($LightningStrikeTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningStrikeTrigger$$Type = ($LightningStrikeTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningStrikeTrigger$$Original = $LightningStrikeTrigger;}
declare module "net.minecraft.advancements.critereon.RecipeCraftedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeCraftedTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.RecipeCraftedTrigger$TriggerInstance"

export class $RecipeCraftedTrigger extends $SimpleCriterionTrigger<($RecipeCraftedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "codec"(): $Codec<($RecipeCraftedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftedTrigger$$Type = ($RecipeCraftedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCraftedTrigger$$Original = $RecipeCraftedTrigger;}
declare module "net.minecraft.advancements.critereon.LocationPredicate" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LightPredicate, $LightPredicate$$Type} from "net.minecraft.advancements.critereon.LightPredicate"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FluidPredicate, $FluidPredicate$$Type} from "net.minecraft.advancements.critereon.FluidPredicate"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$LocationPredicate$PositionPredicate, $LocationPredicate$PositionPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate$PositionPredicate"
import {$Record} from "java.lang.Record"

export class $LocationPredicate extends $Record {
static readonly "CODEC": $Codec<($LocationPredicate)>

constructor(arg0: ($LocationPredicate$PositionPredicate$$Type)?, arg1: ($HolderSet$$Type<($Biome$$Type)>)?, arg2: ($HolderSet$$Type<($Structure$$Type)>)?, arg3: ($ResourceKey$$Type<($Level$$Type)>)?, arg4: (boolean)?, arg5: ($LightPredicate$$Type)?, arg6: ($BlockPredicate$$Type)?, arg7: ($FluidPredicate$$Type)?, arg8: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Optional<($LocationPredicate$PositionPredicate)>
public "matches"(arg0: $ServerLevel$$Type, arg1: double, arg2: double, arg3: double): boolean
public "block"(): $Optional<($BlockPredicate)>
public "light"(): $Optional<($LightPredicate)>
public "smokey"(): $Optional<(boolean)>
public "dimension"(): $Optional<($ResourceKey<($Level)>)>
public "structures"(): $Optional<($HolderSet<($Structure)>)>
public "biomes"(): $Optional<($HolderSet<($Biome)>)>
public "canSeeSky"(): $Optional<(boolean)>
public "fluid"(): $Optional<($FluidPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPredicate$$Type = ({"canSeeSky"?: (boolean)?, "dimension"?: ($ResourceKey$$Type<($Level$$Type)>)?, "smokey"?: (boolean)?, "biomes"?: ($HolderSet$$Type<($Biome$$Type)>)?, "fluid"?: ($FluidPredicate$$Type)?, "position"?: ($LocationPredicate$PositionPredicate$$Type)?, "light"?: ($LightPredicate$$Type)?, "block"?: ($BlockPredicate$$Type)?, "structures"?: ($HolderSet$$Type<($Structure$$Type)>)?}) | ([canSeeSky?: (boolean)?, dimension?: ($ResourceKey$$Type<($Level$$Type)>)?, smokey?: (boolean)?, biomes?: ($HolderSet$$Type<($Biome$$Type)>)?, fluid?: ($FluidPredicate$$Type)?, position?: ($LocationPredicate$PositionPredicate$$Type)?, light?: ($LightPredicate$$Type)?, block?: ($BlockPredicate$$Type)?, structures?: ($HolderSet$$Type<($Structure$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocationPredicate$$Original = $LocationPredicate;}
declare module "net.minecraft.advancements.critereon.ChangeDimensionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChangeDimensionTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ChangeDimensionTrigger$TriggerInstance"

export class $ChangeDimensionTrigger extends $SimpleCriterionTrigger<($ChangeDimensionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ResourceKey$$Type<($Level)>): void
public "codec"(): $Codec<($ChangeDimensionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeDimensionTrigger$$Type = ($ChangeDimensionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChangeDimensionTrigger$$Original = $ChangeDimensionTrigger;}
declare module "net.minecraft.advancements.critereon.SlideDownBlockTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SlideDownBlockTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.SlideDownBlockTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlideDownBlockTrigger extends $SimpleCriterionTrigger<($SlideDownBlockTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockState$$Type): void
public "codec"(): $Codec<($SlideDownBlockTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlideDownBlockTrigger$$Type = ($SlideDownBlockTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlideDownBlockTrigger$$Original = $SlideDownBlockTrigger;}
declare module "net.minecraft.advancements.critereon.FilledBucketTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FilledBucketTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.FilledBucketTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $FilledBucketTrigger extends $SimpleCriterionTrigger<($FilledBucketTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($FilledBucketTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilledBucketTrigger$$Type = ($FilledBucketTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilledBucketTrigger$$Original = $FilledBucketTrigger;}
declare module "net.minecraft.advancements.critereon.ShotCrossbowTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ShotCrossbowTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ShotCrossbowTrigger$TriggerInstance"

export class $ShotCrossbowTrigger extends $SimpleCriterionTrigger<($ShotCrossbowTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($ShotCrossbowTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShotCrossbowTrigger$$Type = ($ShotCrossbowTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShotCrossbowTrigger$$Original = $ShotCrossbowTrigger;}
declare module "net.minecraft.advancements.critereon.TradeTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$TradeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.TradeTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $TradeTrigger extends $SimpleCriterionTrigger<($TradeTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $AbstractVillager$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($TradeTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTrigger$$Type = ($TradeTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TradeTrigger$$Original = $TradeTrigger;}
declare module "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $MobEffectsPredicate$MobEffectInstancePredicate extends $Record {
static readonly "CODEC": $Codec<($MobEffectsPredicate$MobEffectInstancePredicate)>

constructor()
constructor(arg0: $MinMaxBounds$Ints$$Type, arg1: $MinMaxBounds$Ints$$Type, arg2: (boolean)?, arg3: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $MobEffectInstance$$Type): boolean
public "duration"(): $MinMaxBounds$Ints
public "visible"(): $Optional<(boolean)>
public "ambient"(): $Optional<(boolean)>
public "amplifier"(): $MinMaxBounds$Ints
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectsPredicate$MobEffectInstancePredicate$$Type = ({"duration"?: $MinMaxBounds$Ints$$Type, "visible"?: (boolean)?, "amplifier"?: $MinMaxBounds$Ints$$Type, "ambient"?: (boolean)?}) | ([duration?: $MinMaxBounds$Ints$$Type, visible?: (boolean)?, amplifier?: $MinMaxBounds$Ints$$Type, ambient?: (boolean)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectsPredicate$MobEffectInstancePredicate$$Original = $MobEffectsPredicate$MobEffectInstancePredicate;}
declare module "net.minecraft.advancements.critereon.KilledByCrossbowTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Collection$$Type} from "java.util.Collection"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $KilledByCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($KilledByCrossbowTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $List$$Type<($ContextAwarePredicate$$Type)>, arg2: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Collection$$Type<($LootContext$$Type)>, arg1: integer): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public static "crossbowKilled"(arg0: $MinMaxBounds$Ints$$Type): $Criterion<($KilledByCrossbowTrigger$TriggerInstance)>
public static "crossbowKilled"(...arg0: ($EntityPredicate$Builder$$Type)[]): $Criterion<($KilledByCrossbowTrigger$TriggerInstance)>
public "uniqueEntityTypes"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public "victims"(): $List<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledByCrossbowTrigger$TriggerInstance$$Type = ({"uniqueEntityTypes"?: $MinMaxBounds$Ints$$Type, "player"?: ($ContextAwarePredicate$$Type)?, "victims"?: $List$$Type<($ContextAwarePredicate$$Type)>}) | ([uniqueEntityTypes?: $MinMaxBounds$Ints$$Type, player?: ($ContextAwarePredicate$$Type)?, victims?: $List$$Type<($ContextAwarePredicate$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KilledByCrossbowTrigger$TriggerInstance$$Original = $KilledByCrossbowTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.BeeNestDestroyedTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $BeeNestDestroyedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($BeeNestDestroyedTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($Holder$$Type<($Block$$Type)>)?, arg2: ($ItemPredicate$$Type)?, arg3: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: integer): boolean
public "block"(): $Optional<($Holder<($Block)>)>
public "item"(): $Optional<($ItemPredicate)>
public static "destroyedBeeNest"(arg0: $Block$$Type, arg1: $ItemPredicate$Builder$$Type, arg2: $MinMaxBounds$Ints$$Type): $Criterion<($BeeNestDestroyedTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "beesInside"(): $MinMaxBounds$Ints
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeNestDestroyedTrigger$TriggerInstance$$Type = ({"beesInside"?: $MinMaxBounds$Ints$$Type, "block"?: ($Holder$$Type<($Block$$Type)>)?, "item"?: ($ItemPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([beesInside?: $MinMaxBounds$Ints$$Type, block?: ($Holder$$Type<($Block$$Type)>)?, item?: ($ItemPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeNestDestroyedTrigger$TriggerInstance$$Original = $BeeNestDestroyedTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.CuredZombieVillagerTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $CuredZombieVillagerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($CuredZombieVillagerTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "villager"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "curedZombieVillager"(): $Criterion<($CuredZombieVillagerTrigger$TriggerInstance)>
public "zombie"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuredZombieVillagerTrigger$TriggerInstance$$Type = ({"villager"?: ($ContextAwarePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "zombie"?: ($ContextAwarePredicate$$Type)?}) | ([villager?: ($ContextAwarePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, zombie?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CuredZombieVillagerTrigger$TriggerInstance$$Original = $CuredZombieVillagerTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.LevitationTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$LevitationTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.LevitationTrigger$TriggerInstance"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $LevitationTrigger extends $SimpleCriterionTrigger<($LevitationTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Vec3$$Type, arg2: integer): void
public "codec"(): $Codec<($LevitationTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevitationTrigger$$Type = ($LevitationTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevitationTrigger$$Original = $LevitationTrigger;}
declare module "net.minecraft.advancements.critereon.MinMaxBounds$BoundsFactory" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MinMaxBounds, $MinMaxBounds$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds"

export interface $MinMaxBounds$BoundsFactory$$Interface<T extends number, R extends $MinMaxBounds<(object)>> {

(arg0: $Optional<(T)>, arg1: $Optional<(T)>): R
}

export class $MinMaxBounds$BoundsFactory<T extends number, R extends $MinMaxBounds<(object)>> implements $MinMaxBounds$BoundsFactory$$Interface {
 "create"(arg0: (T)?, arg1: (T)?): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinMaxBounds$BoundsFactory$$Type<T, R> = ((arg0: $Optional<(T)>, arg1: $Optional<(T)>) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinMaxBounds$BoundsFactory$$Original<T, R> = $MinMaxBounds$BoundsFactory<(T), (R)>;}
declare module "net.minecraft.advancements.critereon.ItemDurabilityTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ItemDurabilityTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ItemDurabilityTrigger$TriggerInstance"

export class $ItemDurabilityTrigger extends $SimpleCriterionTrigger<($ItemDurabilityTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "codec"(): $Codec<($ItemDurabilityTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDurabilityTrigger$$Type = ($ItemDurabilityTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDurabilityTrigger$$Original = $ItemDurabilityTrigger;}
declare module "net.minecraft.advancements.critereon.KilledByCrossbowTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$KilledByCrossbowTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.KilledByCrossbowTrigger$TriggerInstance"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $KilledByCrossbowTrigger extends $SimpleCriterionTrigger<($KilledByCrossbowTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Collection$$Type<($Entity$$Type)>): void
public "codec"(): $Codec<($KilledByCrossbowTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledByCrossbowTrigger$$Type = ($KilledByCrossbowTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KilledByCrossbowTrigger$$Original = $KilledByCrossbowTrigger;}
declare module "net.minecraft.advancements.critereon.LevitationTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $LevitationTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($LevitationTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($DistancePredicate$$Type)?, arg2: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $Vec3$$Type, arg2: integer): boolean
public "duration"(): $MinMaxBounds$Ints
public "distance"(): $Optional<($DistancePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "levitated"(arg0: $DistancePredicate$$Type): $Criterion<($LevitationTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevitationTrigger$TriggerInstance$$Type = ({"distance"?: ($DistancePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "duration"?: $MinMaxBounds$Ints$$Type}) | ([distance?: ($DistancePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, duration?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevitationTrigger$TriggerInstance$$Original = $LevitationTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ConsumeItemTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $ConsumeItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ConsumeItemTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "usedItem"(arg0: $ItemPredicate$Builder$$Type): $Criterion<($ConsumeItemTrigger$TriggerInstance)>
public static "usedItem"(): $Criterion<($ConsumeItemTrigger$TriggerInstance)>
public static "usedItem"(arg0: $ItemLike$$Type): $Criterion<($ConsumeItemTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsumeItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConsumeItemTrigger$TriggerInstance$$Original = $ConsumeItemTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.FilledBucketTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $FilledBucketTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($FilledBucketTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "filledBucket"(arg0: $ItemPredicate$Builder$$Type): $Criterion<($FilledBucketTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilledBucketTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilledBucketTrigger$TriggerInstance$$Original = $FilledBucketTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EnterBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EnterBlockTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($Holder$$Type<($Block$$Type)>)?, arg2: ($StatePropertiesPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type): boolean
public "state"(): $Optional<($StatePropertiesPredicate)>
public "block"(): $Optional<($Holder<($Block)>)>
public static "entersBlock"(arg0: $Block$$Type): $Criterion<($EnterBlockTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnterBlockTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "block"?: ($Holder$$Type<($Block$$Type)>)?, "state"?: ($StatePropertiesPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, block?: ($Holder$$Type<($Block$$Type)>)?, state?: ($StatePropertiesPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnterBlockTrigger$TriggerInstance$$Original = $EnterBlockTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$InventoryChangeTrigger$TriggerInstance$Slots, $InventoryChangeTrigger$TriggerInstance$Slots$$Type} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance$Slots"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $InventoryChangeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($InventoryChangeTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $InventoryChangeTrigger$TriggerInstance$Slots$$Type, arg2: $List$$Type<($ItemPredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Inventory$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: integer): boolean
public "slots"(): $InventoryChangeTrigger$TriggerInstance$Slots
public "player"(): $Optional<($ContextAwarePredicate)>
public "items"(): $List<($ItemPredicate)>
public static "hasItems"(...arg0: ($ItemPredicate$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "hasItems"(...arg0: ($ItemLike$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "hasItems"(...arg0: ($ItemPredicate$Builder$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "slots"?: $InventoryChangeTrigger$TriggerInstance$Slots$$Type, "items"?: $List$$Type<($ItemPredicate$$Type)>}) | ([player?: ($ContextAwarePredicate$$Type)?, slots?: $InventoryChangeTrigger$TriggerInstance$Slots$$Type, items?: $List$$Type<($ItemPredicate$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeTrigger$TriggerInstance$$Original = $InventoryChangeTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.FluidPredicate" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $FluidPredicate extends $Record {
static readonly "CODEC": $Codec<($FluidPredicate)>

constructor(arg0: ($HolderSet$$Type<($Fluid$$Type)>)?, arg1: ($StatePropertiesPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): boolean
public "properties"(): $Optional<($StatePropertiesPredicate)>
public "fluids"(): $Optional<($HolderSet<($Fluid)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPredicate$$Type = ({"fluids"?: ($HolderSet$$Type<($Fluid$$Type)>)?, "properties"?: ($StatePropertiesPredicate$$Type)?}) | ([fluids?: ($HolderSet$$Type<($Fluid$$Type)>)?, properties?: ($StatePropertiesPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPredicate$$Original = $FluidPredicate;}
declare module "net.minecraft.advancements.critereon.ItemSubPredicate" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemSubPredicate$Type} from "net.minecraft.advancements.critereon.ItemSubPredicate$Type"

export interface $ItemSubPredicate$$Interface {

(arg0: $ItemStack): boolean
}

export class $ItemSubPredicate implements $ItemSubPredicate$$Interface {
static readonly "CODEC": $Codec<($Map<($ItemSubPredicate$Type<(never)>), ($ItemSubPredicate)>)>

 "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSubPredicate$$Type = ((arg0: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSubPredicate$$Original = $ItemSubPredicate;}
declare module "net.minecraft.advancements.critereon.LocationPredicate$Builder" {
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$BlockPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.BlockPredicate$Builder"
import {$LocationPredicate} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LightPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.LightPredicate$Builder"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$FluidPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.FluidPredicate$Builder"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $LocationPredicate$Builder {
constructor()

public static "location"(): $LocationPredicate$Builder
public "build"(): $LocationPredicate
public "setX"(arg0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setY"(arg0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setZ"(arg0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setDimension"(arg0: $ResourceKey$$Type<($Level)>): $LocationPredicate$Builder
public static "inStructure"(arg0: $Holder$$Type<($Structure)>): $LocationPredicate$Builder
public static "inDimension"(arg0: $ResourceKey$$Type<($Level)>): $LocationPredicate$Builder
public "setLight"(arg0: $LightPredicate$Builder$$Type): $LocationPredicate$Builder
public "setBlock"(arg0: $BlockPredicate$Builder$$Type): $LocationPredicate$Builder
public static "inBiome"(arg0: $Holder$$Type<($Biome)>): $LocationPredicate$Builder
public "setCanSeeSky"(arg0: boolean): $LocationPredicate$Builder
public "setStructures"(arg0: $HolderSet$$Type<($Structure)>): $LocationPredicate$Builder
public static "atYLocation"(arg0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setFluid"(arg0: $FluidPredicate$Builder$$Type): $LocationPredicate$Builder
public "setBiomes"(arg0: $HolderSet$$Type<($Biome)>): $LocationPredicate$Builder
public "setSmokey"(arg0: boolean): $LocationPredicate$Builder
set "x"(value: $MinMaxBounds$Doubles$$Type)
set "y"(value: $MinMaxBounds$Doubles$$Type)
set "z"(value: $MinMaxBounds$Doubles$$Type)
set "dimension"(value: $ResourceKey$$Type<($Level)>)
set "light"(value: $LightPredicate$Builder$$Type)
set "block"(value: $BlockPredicate$Builder$$Type)
set "canSeeSky"(value: boolean)
set "structures"(value: $HolderSet$$Type<($Structure)>)
set "fluid"(value: $FluidPredicate$Builder$$Type)
set "biomes"(value: $HolderSet$$Type<($Biome)>)
set "smokey"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPredicate$Builder$$Type = ($LocationPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocationPredicate$Builder$$Original = $LocationPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.FallAfterExplosionTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FallAfterExplosionTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.FallAfterExplosionTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FallAfterExplosionTrigger extends $SimpleCriterionTrigger<($FallAfterExplosionTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Vec3$$Type, arg2: $Entity$$Type): void
public "codec"(): $Codec<($FallAfterExplosionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallAfterExplosionTrigger$$Type = ($FallAfterExplosionTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallAfterExplosionTrigger$$Original = $FallAfterExplosionTrigger;}
declare module "net.minecraft.advancements.critereon.EntitySubPredicate" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $EntitySubPredicate$$Interface {
}

export class $EntitySubPredicate implements $EntitySubPredicate$$Interface {
static readonly "CODEC": $Codec<($EntitySubPredicate)>

 "matches"(arg0: $Entity$$Type, arg1: $ServerLevel$$Type, arg2: $Vec3$$Type): boolean
 "codec"(): $MapCodec<($EntitySubPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySubPredicate$$Type = ($EntitySubPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntitySubPredicate$$Original = $EntitySubPredicate;}
declare module "net.minecraft.advancements.critereon.ShotCrossbowTrigger$TriggerInstance" {
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

export class $ShotCrossbowTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ShotCrossbowTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public static "shotCrossbow"(arg0: $ItemLike$$Type): $Criterion<($ShotCrossbowTrigger$TriggerInstance)>
public static "shotCrossbow"(arg0: ($ItemPredicate$$Type)?): $Criterion<($ShotCrossbowTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShotCrossbowTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShotCrossbowTrigger$TriggerInstance$$Original = $ShotCrossbowTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EnchantmentPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $EnchantmentPredicate extends $Record {
static readonly "CODEC": $Codec<($EnchantmentPredicate)>

constructor(arg0: ($HolderSet$$Type<($Enchantment$$Type)>)?, arg1: $MinMaxBounds$Ints$$Type)
constructor(arg0: $HolderSet$$Type<($Enchantment)>, arg1: $MinMaxBounds$Ints$$Type)
constructor(arg0: $Holder$$Type<($Enchantment)>, arg1: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "level"(): $MinMaxBounds$Ints
public "enchantments"(): $Optional<($HolderSet<($Enchantment)>)>
public "containedIn"(arg0: $ItemEnchantments$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentPredicate$$Type = ({"enchantments"?: ($HolderSet$$Type<($Enchantment$$Type)>)?, "level"?: $MinMaxBounds$Ints$$Type}) | ([enchantments?: ($HolderSet$$Type<($Enchantment$$Type)>)?, level?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentPredicate$$Original = $EnchantmentPredicate;}
declare module "net.minecraft.advancements.critereon.PlayerHurtEntityTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamagePredicate$Builder$$Type} from "net.minecraft.advancements.critereon.DamagePredicate$Builder"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$DamagePredicate, $DamagePredicate$$Type} from "net.minecraft.advancements.critereon.DamagePredicate"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $PlayerHurtEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($PlayerHurtEntityTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($DamagePredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $LootContext$$Type, arg2: $DamageSource$$Type, arg3: float, arg4: float, arg5: boolean): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "entity"(): $Optional<($ContextAwarePredicate)>
public static "playerHurtEntity"(arg0: ($EntityPredicate$$Type)?): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
public static "playerHurtEntity"(arg0: $DamagePredicate$Builder$$Type, arg1: ($EntityPredicate$$Type)?): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
public static "playerHurtEntity"(): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
public static "playerHurtEntity"(arg0: ($DamagePredicate$$Type)?, arg1: ($EntityPredicate$$Type)?): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
public "damage"(): $Optional<($DamagePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "playerHurtEntityWithDamage"(arg0: $DamagePredicate$Builder$$Type): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
public static "playerHurtEntityWithDamage"(arg0: ($DamagePredicate$$Type)?): $Criterion<($PlayerHurtEntityTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerHurtEntityTrigger$TriggerInstance$$Type = ({"damage"?: ($DamagePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?}) | ([damage?: ($DamagePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerHurtEntityTrigger$TriggerInstance$$Original = $PlayerHurtEntityTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EffectsChangedTrigger$TriggerInstance" {
import {$MobEffectsPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$MobEffectsPredicate, $MobEffectsPredicate$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EffectsChangedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($EffectsChangedTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($MobEffectsPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "source"(): $Optional<($ContextAwarePredicate)>
public static "gotEffectsFrom"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($EffectsChangedTrigger$TriggerInstance)>
public "effects"(): $Optional<($MobEffectsPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "hasEffects"(arg0: $MobEffectsPredicate$Builder$$Type): $Criterion<($EffectsChangedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsChangedTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "effects"?: ($MobEffectsPredicate$$Type)?, "source"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, effects?: ($MobEffectsPredicate$$Type)?, source?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectsChangedTrigger$TriggerInstance$$Original = $EffectsChangedTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate$Enchantments" {
import {$ItemEnchantmentsPredicate} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"

export class $ItemEnchantmentsPredicate$Enchantments extends $ItemEnchantmentsPredicate {
static readonly "CODEC": $Codec<($ItemEnchantmentsPredicate$Enchantments)>

public "componentType"(): $DataComponentType<($ItemEnchantments)>
public "matches"(arg0: $ItemStack$$Type, arg1: any): boolean
public "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantmentsPredicate$Enchantments$$Type = ($ItemEnchantmentsPredicate$Enchantments);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantmentsPredicate$Enchantments$$Original = $ItemEnchantmentsPredicate$Enchantments;}
declare module "net.minecraft.advancements.critereon.LightningStrikeTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $LightningStrikeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($LightningStrikeTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $List$$Type<($LootContext$$Type)>): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "lightning"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "lightningStrike"(arg0: ($EntityPredicate$$Type)?, arg1: ($EntityPredicate$$Type)?): $Criterion<($LightningStrikeTrigger$TriggerInstance)>
public "bystander"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningStrikeTrigger$TriggerInstance$$Type = ({"bystander"?: ($ContextAwarePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "lightning"?: ($ContextAwarePredicate$$Type)?}) | ([bystander?: ($ContextAwarePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, lightning?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningStrikeTrigger$TriggerInstance$$Original = $LightningStrikeTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.PlayerTrigger$TriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$LocationPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.LocationPredicate$Builder"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $PlayerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($PlayerTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "tick"(): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "avoidVibration"(): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "located"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "located"(arg0: $LocationPredicate$Builder$$Type): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "located"(arg0: ($EntityPredicate$$Type)?): $Criterion<($PlayerTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "walkOnBlockWithEquipment"(arg0: $Block$$Type, arg1: $Item$$Type): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "raidWon"(): $Criterion<($PlayerTrigger$TriggerInstance)>
public static "sleptInBed"(): $Criterion<($PlayerTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerTrigger$TriggerInstance$$Original = $PlayerTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DistanceTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DistanceTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.DistanceTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $DistanceTrigger extends $SimpleCriterionTrigger<($DistanceTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Vec3$$Type): void
public "codec"(): $Codec<($DistanceTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceTrigger$$Type = ($DistanceTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DistanceTrigger$$Original = $DistanceTrigger;}
declare module "net.minecraft.advancements.critereon.ImpossibleTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ImpossibleTrigger$TriggerInstance, $ImpossibleTrigger$TriggerInstance$$Type} from "net.minecraft.advancements.critereon.ImpossibleTrigger$TriggerInstance"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTrigger$$Interface} from "net.minecraft.advancements.CriterionTrigger"

export class $ImpossibleTrigger implements $CriterionTrigger$$Interface<($ImpossibleTrigger$TriggerInstance)> {
constructor()

public "codec"(): $Codec<($ImpossibleTrigger$TriggerInstance)>
public "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<($ImpossibleTrigger$TriggerInstance$$Type)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<($ImpossibleTrigger$TriggerInstance$$Type)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
public "createCriterion"(arg0: $ImpossibleTrigger$TriggerInstance$$Type): $Criterion<($ImpossibleTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImpossibleTrigger$$Type = ($ImpossibleTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImpossibleTrigger$$Original = $ImpossibleTrigger;}
declare module "net.minecraft.advancements.critereon.InventoryChangeTrigger" {
import {$InventoryChangeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export class $InventoryChangeTrigger extends $SimpleCriterionTrigger<($InventoryChangeTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Inventory$$Type, arg2: $ItemStack$$Type): void
public "codec"(): $Codec<($InventoryChangeTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTrigger$$Type = ($InventoryChangeTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryChangeTrigger$$Original = $InventoryChangeTrigger;}
declare module "net.minecraft.advancements.critereon.TargetBlockTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $TargetBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($TargetBlockTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $MinMaxBounds$Ints$$Type, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $Vec3$$Type, arg2: integer): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "signalStrength"(): $MinMaxBounds$Ints
public "projectile"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "targetHit"(arg0: $MinMaxBounds$Ints$$Type, arg1: ($ContextAwarePredicate$$Type)?): $Criterion<($TargetBlockTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetBlockTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "projectile"?: ($ContextAwarePredicate$$Type)?, "signalStrength"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, projectile?: ($ContextAwarePredicate$$Type)?, signalStrength?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetBlockTrigger$TriggerInstance$$Original = $TargetBlockTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.CuredZombieVillagerTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CuredZombieVillagerTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.CuredZombieVillagerTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Villager$$Type} from "net.minecraft.world.entity.npc.Villager"
import {$Zombie$$Type} from "net.minecraft.world.entity.monster.Zombie"

export class $CuredZombieVillagerTrigger extends $SimpleCriterionTrigger<($CuredZombieVillagerTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Zombie$$Type, arg2: $Villager$$Type): void
public "codec"(): $Codec<($CuredZombieVillagerTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuredZombieVillagerTrigger$$Type = ($CuredZombieVillagerTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CuredZombieVillagerTrigger$$Original = $CuredZombieVillagerTrigger;}
declare module "net.minecraft.advancements.critereon.SimpleCriterionTrigger" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTrigger$$Interface} from "net.minecraft.advancements.CriterionTrigger"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $SimpleCriterionTrigger<T extends $SimpleCriterionTrigger$SimpleInstance> implements $CriterionTrigger$$Interface<(T)> {
constructor()

public "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
public "codec"(): $Codec<(T)>
public "createCriterion"(arg0: T): $Criterion<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCriterionTrigger$$Type<T> = ($SimpleCriterionTrigger<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCriterionTrigger$$Original<T> = $SimpleCriterionTrigger<(T)>;}
declare module "net.minecraft.advancements.critereon.ConstructBeaconTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ConstructBeaconTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($ConstructBeaconTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: integer): boolean
public "level"(): $MinMaxBounds$Ints
public static "constructedBeacon"(arg0: $MinMaxBounds$Ints$$Type): $Criterion<($ConstructBeaconTrigger$TriggerInstance)>
public static "constructedBeacon"(): $Criterion<($ConstructBeaconTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConstructBeaconTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "level"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, level?: $MinMaxBounds$Ints$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConstructBeaconTrigger$TriggerInstance$$Original = $ConstructBeaconTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EntityEquipmentPredicate$Builder" {
import {$EntityEquipmentPredicate} from "net.minecraft.advancements.critereon.EntityEquipmentPredicate"
import {$ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"

export class $EntityEquipmentPredicate$Builder {
constructor()

public "head"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public "build"(): $EntityEquipmentPredicate
public "body"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public static "equipment"(): $EntityEquipmentPredicate$Builder
public "feet"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public "legs"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public "mainhand"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public "offhand"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
public "chest"(arg0: $ItemPredicate$Builder$$Type): $EntityEquipmentPredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEquipmentPredicate$Builder$$Type = ($EntityEquipmentPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEquipmentPredicate$Builder$$Original = $EntityEquipmentPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.PlayerHurtEntityTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$PlayerHurtEntityTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.PlayerHurtEntityTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerHurtEntityTrigger extends $SimpleCriterionTrigger<($PlayerHurtEntityTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type, arg2: $DamageSource$$Type, arg3: float, arg4: float, arg5: boolean): void
public "codec"(): $Codec<($PlayerHurtEntityTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerHurtEntityTrigger$$Type = ($PlayerHurtEntityTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerHurtEntityTrigger$$Original = $PlayerHurtEntityTrigger;}
declare module "net.minecraft.advancements.critereon.ChanneledLightningTrigger" {
import {$ChanneledLightningTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.ChanneledLightningTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ChanneledLightningTrigger extends $SimpleCriterionTrigger<($ChanneledLightningTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Collection$$Type<($Entity$$Type)>): void
public "codec"(): $Codec<($ChanneledLightningTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanneledLightningTrigger$$Type = ($ChanneledLightningTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChanneledLightningTrigger$$Original = $ChanneledLightningTrigger;}
declare module "net.minecraft.advancements.critereon.UsedEnderEyeTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$UsedEnderEyeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.UsedEnderEyeTrigger$TriggerInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $UsedEnderEyeTrigger extends $SimpleCriterionTrigger<($UsedEnderEyeTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type): void
public "codec"(): $Codec<($UsedEnderEyeTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsedEnderEyeTrigger$$Type = ($UsedEnderEyeTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsedEnderEyeTrigger$$Original = $UsedEnderEyeTrigger;}
declare module "net.minecraft.advancements.critereon.StartRidingTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$StartRidingTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.StartRidingTrigger$TriggerInstance"

export class $StartRidingTrigger extends $SimpleCriterionTrigger<($StartRidingTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type): void
public "codec"(): $Codec<($StartRidingTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartRidingTrigger$$Type = ($StartRidingTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StartRidingTrigger$$Original = $StartRidingTrigger;}
declare module "net.minecraft.advancements.critereon.PickedUpItemTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $PickedUpItemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($PickedUpItemTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "item"(): $Optional<($ItemPredicate)>
public "entity"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "thrownItemPickedUpByEntity"(arg0: $ContextAwarePredicate$$Type, arg1: ($ItemPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?): $Criterion<($PickedUpItemTrigger$TriggerInstance)>
public static "thrownItemPickedUpByPlayer"(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?, arg2: ($ContextAwarePredicate$$Type)?): $Criterion<($PickedUpItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickedUpItemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickedUpItemTrigger$TriggerInstance$$Original = $PickedUpItemTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.LootTableTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $LootTableTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($LootTableTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $ResourceKey$$Type<($LootTable)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ResourceKey$$Type<($LootTable)>): boolean
public static "lootTableUsed"(arg0: $ResourceKey$$Type<($LootTable)>): $Criterion<($LootTableTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "lootTable"(): $ResourceKey<($LootTable)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableTrigger$TriggerInstance$$Type = ({"lootTable"?: $ResourceKey$$Type<($LootTable)>, "player"?: ($ContextAwarePredicate$$Type)?}) | ([lootTable?: $ResourceKey$$Type<($LootTable)>, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LootTableTrigger$TriggerInstance$$Original = $LootTableTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DistancePredicate" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"

export class $DistancePredicate extends $Record {
static readonly "CODEC": $Codec<($DistancePredicate)>

constructor(arg0: $MinMaxBounds$Doubles$$Type, arg1: $MinMaxBounds$Doubles$$Type, arg2: $MinMaxBounds$Doubles$$Type, arg3: $MinMaxBounds$Doubles$$Type, arg4: $MinMaxBounds$Doubles$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "x"(): $MinMaxBounds$Doubles
public "z"(): $MinMaxBounds$Doubles
public "y"(): $MinMaxBounds$Doubles
public static "absolute"(arg0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public "absolute"(): $MinMaxBounds$Doubles
public static "vertical"(arg0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public static "horizontal"(arg0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public "horizontal"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicate$$Type = ({"horizontal"?: $MinMaxBounds$Doubles$$Type, "z"?: $MinMaxBounds$Doubles$$Type, "y"?: $MinMaxBounds$Doubles$$Type, "absolute"?: $MinMaxBounds$Doubles$$Type, "x"?: $MinMaxBounds$Doubles$$Type}) | ([horizontal?: $MinMaxBounds$Doubles$$Type, z?: $MinMaxBounds$Doubles$$Type, y?: $MinMaxBounds$Doubles$$Type, absolute?: $MinMaxBounds$Doubles$$Type, x?: $MinMaxBounds$Doubles$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DistancePredicate$$Original = $DistancePredicate;}
declare module "net.minecraft.advancements.critereon.EntityPredicate" {
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$LootContext} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntitySubPredicate, $EntitySubPredicate$$Type} from "net.minecraft.advancements.critereon.EntitySubPredicate"
import {$List} from "java.util.List"
import {$EntityFlagsPredicate, $EntityFlagsPredicate$$Type} from "net.minecraft.advancements.critereon.EntityFlagsPredicate"
import {$MobEffectsPredicate, $MobEffectsPredicate$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate"
import {$EntityTypePredicate, $EntityTypePredicate$$Type} from "net.minecraft.advancements.critereon.EntityTypePredicate"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityEquipmentPredicate, $EntityEquipmentPredicate$$Type} from "net.minecraft.advancements.critereon.EntityEquipmentPredicate"
import {$ContextAwarePredicate} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$SlotsPredicate, $SlotsPredicate$$Type} from "net.minecraft.advancements.critereon.SlotsPredicate"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EntityPredicate$LocationWrapper, $EntityPredicate$LocationWrapper$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$LocationWrapper"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MovementPredicate, $MovementPredicate$$Type} from "net.minecraft.advancements.critereon.MovementPredicate"
import {$Record} from "java.lang.Record"

export class $EntityPredicate extends $Record {
static readonly "ADVANCEMENT_CODEC": $Codec<($ContextAwarePredicate)>
static readonly "CODEC": $Codec<($EntityPredicate)>

constructor(arg0: ($EntityTypePredicate$$Type)?, arg1: ($DistancePredicate$$Type)?, arg2: ($MovementPredicate$$Type)?, arg3: $EntityPredicate$LocationWrapper$$Type, arg4: ($MobEffectsPredicate$$Type)?, arg5: ($NbtPredicate$$Type)?, arg6: ($EntityFlagsPredicate$$Type)?, arg7: ($EntityEquipmentPredicate$$Type)?, arg8: ($EntitySubPredicate$$Type)?, arg9: (integer)?, arg10: ($EntityPredicate$$Type)?, arg11: ($EntityPredicate$$Type)?, arg12: ($EntityPredicate$$Type)?, arg13: (StringJS)?, arg14: ($SlotsPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "flags"(): $Optional<($EntityFlagsPredicate)>
public "hashCode"(): integer
public static "wrap"(...arg0: ($EntityPredicate$Builder$$Type)[]): $List<($ContextAwarePredicate)>
public static "wrap"(arg0: $EntityPredicate$$Type): $ContextAwarePredicate
public static "wrap"(arg0: $EntityPredicate$Builder$$Type): $ContextAwarePredicate
public static "wrap"(arg0: ($EntityPredicate$$Type)?): $Optional<($ContextAwarePredicate)>
public "matches"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): boolean
public "matches"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type, arg2: $Entity$$Type): boolean
public "location"(): $EntityPredicate$LocationWrapper
public "slots"(): $Optional<($SlotsPredicate)>
public "team"(): $Optional<(StringJS)>
public "entityType"(): $Optional<($EntityTypePredicate)>
public "effects"(): $Optional<($MobEffectsPredicate)>
public "equipment"(): $Optional<($EntityEquipmentPredicate)>
public "passenger"(): $Optional<($EntityPredicate)>
public static "createContext"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): $LootContext
public "vehicle"(): $Optional<($EntityPredicate)>
public "periodicTick"(): $Optional<(integer)>
public "movement"(): $Optional<($MovementPredicate)>
public "distance"(): $Optional<($DistancePredicate)>
public "subPredicate"(): $Optional<($EntitySubPredicate)>
public "targetedEntity"(): $Optional<($EntityPredicate)>
public "nbt"(): $Optional<($NbtPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicate$$Type = ({"equipment"?: ($EntityEquipmentPredicate$$Type)?, "nbt"?: ($NbtPredicate$$Type)?, "periodicTick"?: (integer)?, "subPredicate"?: ($EntitySubPredicate$$Type)?, "targetedEntity"?: ($EntityPredicate$$Type)?, "flags"?: ($EntityFlagsPredicate$$Type)?, "distance"?: ($DistancePredicate$$Type)?, "location"?: $EntityPredicate$LocationWrapper$$Type, "vehicle"?: ($EntityPredicate$$Type)?, "movement"?: ($MovementPredicate$$Type)?, "team"?: (StringJS)?, "entityType"?: ($EntityTypePredicate$$Type)?, "passenger"?: ($EntityPredicate$$Type)?, "slots"?: ($SlotsPredicate$$Type)?, "effects"?: ($MobEffectsPredicate$$Type)?}) | ([equipment?: ($EntityEquipmentPredicate$$Type)?, nbt?: ($NbtPredicate$$Type)?, periodicTick?: (integer)?, subPredicate?: ($EntitySubPredicate$$Type)?, targetedEntity?: ($EntityPredicate$$Type)?, flags?: ($EntityFlagsPredicate$$Type)?, distance?: ($DistancePredicate$$Type)?, location?: $EntityPredicate$LocationWrapper$$Type, vehicle?: ($EntityPredicate$$Type)?, movement?: ($MovementPredicate$$Type)?, team?: (StringJS)?, entityType?: ($EntityTypePredicate$$Type)?, passenger?: ($EntityPredicate$$Type)?, slots?: ($SlotsPredicate$$Type)?, effects?: ($MobEffectsPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPredicate$$Original = $EntityPredicate;}
declare module "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate" {
import {$ItemEnchantmentsPredicate$Enchantments} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate$Enchantments"
import {$EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$List$$Type} from "java.util.List"
import {$Function$$Type} from "java.util.function.Function"
import {$SingleComponentItemPredicate$$Interface} from "net.minecraft.advancements.critereon.SingleComponentItemPredicate"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ItemEnchantmentsPredicate$StoredEnchantments} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate$StoredEnchantments"

export class $ItemEnchantmentsPredicate implements $SingleComponentItemPredicate$$Interface<($ItemEnchantments)> {
public "matches"(arg0: $ItemStack$$Type, arg1: any): boolean
public "matches"(arg0: $ItemStack$$Type, arg1: $ItemEnchantments$$Type): boolean
public static "codec"<T extends $ItemEnchantmentsPredicate>(arg0: $Function$$Type<($List<($EnchantmentPredicate)>), (T)>): $Codec<(T)>
public static "enchantments"(arg0: $List$$Type<($EnchantmentPredicate$$Type)>): $ItemEnchantmentsPredicate$Enchantments
public static "storedEnchantments"(arg0: $List$$Type<($EnchantmentPredicate$$Type)>): $ItemEnchantmentsPredicate$StoredEnchantments
public "componentType"(): $DataComponentType<($ItemEnchantments)>
public "matches"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantmentsPredicate$$Type = ($ItemEnchantmentsPredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantmentsPredicate$$Original = $ItemEnchantmentsPredicate;}
declare module "net.minecraft.advancements.critereon.SummonedEntityTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $SummonedEntityTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($SummonedEntityTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "entity"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "summonedEntity"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($SummonedEntityTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonedEntityTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonedEntityTrigger$TriggerInstance$$Original = $SummonedEntityTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.MovementPredicate" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"

export class $MovementPredicate extends $Record {
static readonly "CODEC": $Codec<($MovementPredicate)>

constructor(arg0: $MinMaxBounds$Doubles$$Type, arg1: $MinMaxBounds$Doubles$$Type, arg2: $MinMaxBounds$Doubles$$Type, arg3: $MinMaxBounds$Doubles$$Type, arg4: $MinMaxBounds$Doubles$$Type, arg5: $MinMaxBounds$Doubles$$Type, arg6: $MinMaxBounds$Doubles$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "x"(): $MinMaxBounds$Doubles
public "z"(): $MinMaxBounds$Doubles
public "y"(): $MinMaxBounds$Doubles
public "fallDistance"(): $MinMaxBounds$Doubles
public static "fallDistance"(arg0: $MinMaxBounds$Doubles$$Type): $MovementPredicate
public static "horizontalSpeed"(arg0: $MinMaxBounds$Doubles$$Type): $MovementPredicate
public "horizontalSpeed"(): $MinMaxBounds$Doubles
public static "verticalSpeed"(arg0: $MinMaxBounds$Doubles$$Type): $MovementPredicate
public "verticalSpeed"(): $MinMaxBounds$Doubles
public static "speed"(arg0: $MinMaxBounds$Doubles$$Type): $MovementPredicate
public "speed"(): $MinMaxBounds$Doubles
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementPredicate$$Type = ({"z"?: $MinMaxBounds$Doubles$$Type, "fallDistance"?: $MinMaxBounds$Doubles$$Type, "y"?: $MinMaxBounds$Doubles$$Type, "x"?: $MinMaxBounds$Doubles$$Type, "horizontalSpeed"?: $MinMaxBounds$Doubles$$Type, "verticalSpeed"?: $MinMaxBounds$Doubles$$Type, "speed"?: $MinMaxBounds$Doubles$$Type}) | ([z?: $MinMaxBounds$Doubles$$Type, fallDistance?: $MinMaxBounds$Doubles$$Type, y?: $MinMaxBounds$Doubles$$Type, x?: $MinMaxBounds$Doubles$$Type, horizontalSpeed?: $MinMaxBounds$Doubles$$Type, verticalSpeed?: $MinMaxBounds$Doubles$$Type, speed?: $MinMaxBounds$Doubles$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovementPredicate$$Original = $MovementPredicate;}
declare module "net.minecraft.advancements.critereon.EntityPredicate$Builder" {
import {$NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$MobEffectsPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate$Builder"
import {$EntitySubPredicate$$Type} from "net.minecraft.advancements.critereon.EntitySubPredicate"
import {$LocationPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.LocationPredicate$Builder"
import {$EntityTypePredicate$$Type} from "net.minecraft.advancements.critereon.EntityTypePredicate"
import {$EntityEquipmentPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityEquipmentPredicate$Builder"
import {$EntityEquipmentPredicate$$Type} from "net.minecraft.advancements.critereon.EntityEquipmentPredicate"
import {$DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityPredicate} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$SlotsPredicate$$Type} from "net.minecraft.advancements.critereon.SlotsPredicate"
import {$MovementPredicate$$Type} from "net.minecraft.advancements.critereon.MovementPredicate"
import {$EntityFlagsPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityFlagsPredicate$Builder"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityPredicate$Builder {
constructor()

public "flags"(arg0: $EntityFlagsPredicate$Builder$$Type): $EntityPredicate$Builder
public "of"(arg0: $TagKey$$Type<($EntityType<(never)>)>): $EntityPredicate$Builder
public "of"(arg0: $EntityType$$Type<(never)>): $EntityPredicate$Builder
public "slots"(arg0: $SlotsPredicate$$Type): $EntityPredicate$Builder
public "distance"(arg0: $DistancePredicate$$Type): $EntityPredicate$Builder
public "build"(): $EntityPredicate
public "team"(arg0: StringJS): $EntityPredicate$Builder
public "entityType"(arg0: $EntityTypePredicate$$Type): $EntityPredicate$Builder
public static "entity"(): $EntityPredicate$Builder
public "effects"(arg0: $MobEffectsPredicate$Builder$$Type): $EntityPredicate$Builder
public "equipment"(arg0: $EntityEquipmentPredicate$$Type): $EntityPredicate$Builder
public "equipment"(arg0: $EntityEquipmentPredicate$Builder$$Type): $EntityPredicate$Builder
public "located"(arg0: $LocationPredicate$Builder$$Type): $EntityPredicate$Builder
public "passenger"(arg0: $EntityPredicate$Builder$$Type): $EntityPredicate$Builder
public "steppingOn"(arg0: $LocationPredicate$Builder$$Type): $EntityPredicate$Builder
public "vehicle"(arg0: $EntityPredicate$Builder$$Type): $EntityPredicate$Builder
public "periodicTick"(arg0: integer): $EntityPredicate$Builder
public "subPredicate"(arg0: $EntitySubPredicate$$Type): $EntityPredicate$Builder
public "targetedEntity"(arg0: $EntityPredicate$Builder$$Type): $EntityPredicate$Builder
public "nbt"(arg0: $NbtPredicate$$Type): $EntityPredicate$Builder
public "moving"(arg0: $MovementPredicate$$Type): $EntityPredicate$Builder
public "movementAffectedBy"(arg0: $LocationPredicate$Builder$$Type): $EntityPredicate$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicate$Builder$$Type = ($EntityPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityPredicate$Builder$$Original = $EntityPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.LightPredicate$Builder" {
import {$MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$LightPredicate} from "net.minecraft.advancements.critereon.LightPredicate"

export class $LightPredicate$Builder {
constructor()

public "build"(): $LightPredicate
public static "light"(): $LightPredicate$Builder
public "setComposite"(arg0: $MinMaxBounds$Ints$$Type): $LightPredicate$Builder
set "composite"(value: $MinMaxBounds$Ints$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightPredicate$Builder$$Type = ($LightPredicate$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightPredicate$Builder$$Original = $LightPredicate$Builder;}
declare module "net.minecraft.advancements.critereon.DistanceTrigger$TriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$LocationPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.LocationPredicate$Builder"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $DistanceTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($DistanceTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($LocationPredicate$$Type)?, arg2: ($DistancePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type): boolean
public "distance"(): $Optional<($DistancePredicate)>
public static "rideEntityInLava"(arg0: $EntityPredicate$Builder$$Type, arg1: $DistancePredicate$$Type): $Criterion<($DistanceTrigger$TriggerInstance)>
public static "fallFromHeight"(arg0: $EntityPredicate$Builder$$Type, arg1: $DistancePredicate$$Type, arg2: $LocationPredicate$Builder$$Type): $Criterion<($DistanceTrigger$TriggerInstance)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "travelledThroughNether"(arg0: $DistancePredicate$$Type): $Criterion<($DistanceTrigger$TriggerInstance)>
public "startPosition"(): $Optional<($LocationPredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceTrigger$TriggerInstance$$Type = ({"startPosition"?: ($LocationPredicate$$Type)?, "distance"?: ($DistancePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([startPosition?: ($LocationPredicate$$Type)?, distance?: ($DistancePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DistanceTrigger$TriggerInstance$$Original = $DistanceTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.FallAfterExplosionTrigger$TriggerInstance" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $FallAfterExplosionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($FallAfterExplosionTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($LocationPredicate$$Type)?, arg2: ($DistancePredicate$$Type)?, arg3: ($ContextAwarePredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $LootContext$$Type): boolean
public "cause"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
public "distance"(): $Optional<($DistancePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "startPosition"(): $Optional<($LocationPredicate)>
public static "fallAfterExplosion"(arg0: $DistancePredicate$$Type, arg1: $EntityPredicate$Builder$$Type): $Criterion<($FallAfterExplosionTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallAfterExplosionTrigger$TriggerInstance$$Type = ({"distance"?: ($DistancePredicate$$Type)?, "startPosition"?: ($LocationPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "cause"?: ($ContextAwarePredicate$$Type)?}) | ([distance?: ($DistancePredicate$$Type)?, startPosition?: ($LocationPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, cause?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallAfterExplosionTrigger$TriggerInstance$$Original = $FallAfterExplosionTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.TradeTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$EntityPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.EntityPredicate$Builder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $TradeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($TradeTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ContextAwarePredicate$$Type)?, arg2: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type, arg1: $ItemStack$$Type): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
public "item"(): $Optional<($ItemPredicate)>
public static "tradedWithVillager"(arg0: $EntityPredicate$Builder$$Type): $Criterion<($TradeTrigger$TriggerInstance)>
public static "tradedWithVillager"(): $Criterion<($TradeTrigger$TriggerInstance)>
public "villager"(): $Optional<($ContextAwarePredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTrigger$TriggerInstance$$Type = ({"villager"?: ($ContextAwarePredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([villager?: ($ContextAwarePredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TradeTrigger$TriggerInstance$$Original = $TradeTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.EntityHurtPlayerTrigger" {
import {$EntityHurtPlayerTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.EntityHurtPlayerTrigger$TriggerInstance"
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EntityHurtPlayerTrigger extends $SimpleCriterionTrigger<($EntityHurtPlayerTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $DamageSource$$Type, arg2: float, arg3: float, arg4: boolean): void
public "codec"(): $Codec<($EntityHurtPlayerTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHurtPlayerTrigger$$Type = ($EntityHurtPlayerTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityHurtPlayerTrigger$$Original = $EntityHurtPlayerTrigger;}
declare module "net.minecraft.advancements.critereon.EffectsChangedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EffectsChangedTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.EffectsChangedTrigger$TriggerInstance"

export class $EffectsChangedTrigger extends $SimpleCriterionTrigger<($EffectsChangedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): void
public "codec"(): $Codec<($EffectsChangedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsChangedTrigger$$Type = ($EffectsChangedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectsChangedTrigger$$Original = $EffectsChangedTrigger;}
declare module "net.minecraft.advancements.critereon.EnchantedItemTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EnchantedItemTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.EnchantedItemTrigger$TriggerInstance"

export class $EnchantedItemTrigger extends $SimpleCriterionTrigger<($EnchantedItemTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "codec"(): $Codec<($EnchantedItemTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrigger$$Type = ($EnchantedItemTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedItemTrigger$$Original = $EnchantedItemTrigger;}
declare module "net.minecraft.advancements.critereon.UsedTotemTrigger$TriggerInstance" {
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

export class $UsedTotemTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($UsedTotemTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($ItemPredicate$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public static "usedTotem"(arg0: $ItemLike$$Type): $Criterion<($UsedTotemTrigger$TriggerInstance)>
public static "usedTotem"(arg0: $ItemPredicate$$Type): $Criterion<($UsedTotemTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsedTotemTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsedTotemTrigger$TriggerInstance$$Original = $UsedTotemTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.BeeNestDestroyedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BeeNestDestroyedTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.BeeNestDestroyedTrigger$TriggerInstance"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BeeNestDestroyedTrigger extends $SimpleCriterionTrigger<($BeeNestDestroyedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "codec"(): $Codec<($BeeNestDestroyedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeNestDestroyedTrigger$$Type = ($BeeNestDestroyedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeNestDestroyedTrigger$$Original = $BeeNestDestroyedTrigger;}
declare module "net.minecraft.advancements.critereon.BrewedPotionTrigger$TriggerInstance" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $BrewedPotionTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($BrewedPotionTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: ($Holder$$Type<($Potion$$Type)>)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Holder$$Type<($Potion)>): boolean
public static "brewedPotion"(): $Criterion<($BrewedPotionTrigger$TriggerInstance)>
public "potion"(): $Optional<($Holder<($Potion)>)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewedPotionTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "potion"?: ($Holder$$Type<($Potion$$Type)>)?}) | ([player?: ($ContextAwarePredicate$$Type)?, potion?: ($Holder$$Type<($Potion$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewedPotionTrigger$TriggerInstance$$Original = $BrewedPotionTrigger$TriggerInstance;}
declare module "net.minecraft.advancements.critereon.DamageSourcePredicate" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TagPredicate, $TagPredicate$$Type} from "net.minecraft.advancements.critereon.TagPredicate"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$Record} from "java.lang.Record"

export class $DamageSourcePredicate extends $Record {
static readonly "CODEC": $Codec<($DamageSourcePredicate)>

constructor(arg0: $List$$Type<($TagPredicate$$Type<($DamageType$$Type)>)>, arg1: ($EntityPredicate$$Type)?, arg2: ($EntityPredicate$$Type)?, arg3: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $DamageSource$$Type): boolean
public "matches"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type, arg2: $DamageSource$$Type): boolean
public "isDirect"(): $Optional<(boolean)>
public "tags"(): $List<($TagPredicate<($DamageType)>)>
public "directEntity"(): $Optional<($EntityPredicate)>
public "sourceEntity"(): $Optional<($EntityPredicate)>
get "direct"(): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcePredicate$$Type = ({"sourceEntity"?: ($EntityPredicate$$Type)?, "directEntity"?: ($EntityPredicate$$Type)?, "isDirect"?: (boolean)?, "tags"?: $List$$Type<($TagPredicate$$Type<($DamageType$$Type)>)>}) | ([sourceEntity?: ($EntityPredicate$$Type)?, directEntity?: ($EntityPredicate$$Type)?, isDirect?: (boolean)?, tags?: $List$$Type<($TagPredicate$$Type<($DamageType$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DamageSourcePredicate$$Original = $DamageSourcePredicate;}
declare module "net.minecraft.advancements.critereon.FishingRodHookedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$FishingHook$$Type} from "net.minecraft.world.entity.projectile.FishingHook"
import {$FishingRodHookedTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.FishingRodHookedTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $FishingRodHookedTrigger extends $SimpleCriterionTrigger<($FishingRodHookedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $FishingHook$$Type, arg3: $Collection$$Type<($ItemStack$$Type)>): void
public "codec"(): $Codec<($FishingRodHookedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FishingRodHookedTrigger$$Type = ($FishingRodHookedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FishingRodHookedTrigger$$Original = $FishingRodHookedTrigger;}
declare module "net.minecraft.advancements.critereon.SummonedEntityTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SummonedEntityTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.SummonedEntityTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SummonedEntityTrigger extends $SimpleCriterionTrigger<($SummonedEntityTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): void
public "codec"(): $Codec<($SummonedEntityTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonedEntityTrigger$$Type = ($SummonedEntityTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonedEntityTrigger$$Original = $SummonedEntityTrigger;}
declare module "net.minecraft.advancements.critereon.UsedEnderEyeTrigger$TriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $UsedEnderEyeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($UsedEnderEyeTrigger$TriggerInstance)>

constructor(arg0: ($ContextAwarePredicate$$Type)?, arg1: $MinMaxBounds$Doubles$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: double): boolean
public "distance"(): $MinMaxBounds$Doubles
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UsedEnderEyeTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "distance"?: $MinMaxBounds$Doubles$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, distance?: $MinMaxBounds$Doubles$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UsedEnderEyeTrigger$TriggerInstance$$Original = $UsedEnderEyeTrigger$TriggerInstance;}
