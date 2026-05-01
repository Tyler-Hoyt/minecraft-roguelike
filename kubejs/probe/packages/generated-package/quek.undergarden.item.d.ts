declare module "quek.undergarden.item.CatalystItem" {
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$UndergardenPortalShape, $UndergardenPortalShape$$Type} from "quek.undergarden.block.portal.UndergardenPortalShape"
import {$Holder} from "net.minecraft.core.Holder"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $CatalystItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "findPortalShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Predicate$$Type<($UndergardenPortalShape)>, arg3: $Direction$Axis$$Type): $Optional<($UndergardenPortalShape)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CatalystItem$$Type = ($CatalystItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CatalystItem$$Original = $CatalystItem;}
declare module "quek.undergarden.item.CrumblingCatalystItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$CatalystItem} from "quek.undergarden.item.CatalystItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $CrumblingCatalystItem extends $CatalystItem {
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
export type $CrumblingCatalystItem$$Type = ($CrumblingCatalystItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrumblingCatalystItem$$Original = $CrumblingCatalystItem;}
declare module "quek.undergarden.item.BlisterbombItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $BlisterbombItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlisterbombItem$$Type = ($BlisterbombItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlisterbombItem$$Original = $BlisterbombItem;}
declare module "quek.undergarden.item.DitchbulbPasteItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $DitchbulbPasteItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DitchbulbPasteItem$$Type = ($DitchbulbPasteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DitchbulbPasteItem$$Original = $DitchbulbPasteItem;}
declare module "quek.undergarden.item.RogdoriumItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $RogdoriumItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: float, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RogdoriumItem$$Type = ($RogdoriumItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RogdoriumItem$$Original = $RogdoriumItem;}
declare module "quek.undergarden.item.DroopfruitItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemNameBlockItem} from "net.minecraft.world.item.ItemNameBlockItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $DroopfruitItem extends $ItemNameBlockItem implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
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
export type $DroopfruitItem$$Type = ($DroopfruitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroopfruitItem$$Original = $DroopfruitItem;}
declare module "quek.undergarden.item.ForgottenSmithingTemplateItem" {
import {$SmithingTemplateItem} from "net.minecraft.world.item.SmithingTemplateItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $ForgottenSmithingTemplateItem extends $SmithingTemplateItem {
static readonly "NETHERITE_UPGRADE_APPLIES_TO": $Component
static readonly "EMPTY_SLOT_LEGGINGS": $ResourceLocation
static readonly "NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "ARMOR_TRIM_INGREDIENTS": $Component
static readonly "EMPTY_SLOT_PICKAXE": $ResourceLocation
static readonly "NETHERITE_UPGRADE_INGREDIENTS": $Component
static readonly "EMPTY_SLOT_QUARTZ": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EMPTY_SLOT_HOE": $ResourceLocation
static readonly "EMPTY_SLOT_DIAMOND": $ResourceLocation
static readonly "INGREDIENTS_TITLE": $Component
static readonly "EMPTY_SLOT_SWORD": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION": $Component
static readonly "EMPTY_SLOT_INGOT": $ResourceLocation
static readonly "EMPTY_SLOT_AMETHYST_SHARD": $ResourceLocation
static readonly "EMPTY_SLOT_HELMET": $ResourceLocation
static readonly "EMPTY_SLOT_EMERALD": $ResourceLocation
static readonly "EMPTY_SLOT_AXE": $ResourceLocation
static readonly "EMPTY_SLOT_REDSTONE_DUST": $ResourceLocation
static readonly "NETHERITE_UPGRADE": $Component
static readonly "TITLE_FORMAT": $ChatFormatting
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "ARMOR_TRIM_BASE_SLOT_DESCRIPTION": $Component
static readonly "MAX_BAR_WIDTH": integer
static readonly "EMPTY_SLOT_LAPIS_LAZULI": $ResourceLocation
static readonly "EMPTY_SLOT_SHOVEL": $ResourceLocation
static readonly "EMPTY_SLOT_CHESTPLATE": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "EMPTY_SLOT_BOOTS": $ResourceLocation
static readonly "APPLIES_TO_TITLE": $Component
static readonly "DESCRIPTION_FORMAT": $ChatFormatting
static readonly "ARMOR_TRIM_APPLIES_TO": $Component
static readonly "ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "createForgottenUpgradeIconList"(): $List<($ResourceLocation)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgottenSmithingTemplateItem$$Type = ($ForgottenSmithingTemplateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForgottenSmithingTemplateItem$$Original = $ForgottenSmithingTemplateItem;}
declare module "quek.undergarden.item.CarvedGloomgourdItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CarvedGloomgourdItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
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
export type $CarvedGloomgourdItem$$Type = ($CarvedGloomgourdItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarvedGloomgourdItem$$Original = $CarvedGloomgourdItem;}
declare module "quek.undergarden.item.DenizenMaskItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $DenizenMaskItem extends $Item implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenizenMaskItem$$Type = ($DenizenMaskItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenizenMaskItem$$Original = $DenizenMaskItem;}
