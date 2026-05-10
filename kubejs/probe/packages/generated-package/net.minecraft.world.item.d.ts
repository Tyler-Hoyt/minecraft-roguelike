declare module "net.minecraft.world.item.crafting.SingleRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SingleRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(arg0: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleRecipeInput$$Type = ({"item"?: $ItemStack$$Type}) | ([item?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleRecipeInput$$Original = $SingleRecipeInput;}
declare module "net.minecraft.world.item.crafting.SimpleCookingSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractCookingRecipe$Factory$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe$Factory"
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $AbstractCookingRecipe$Factory$$Type<(T)>, arg1: integer)

public "create"(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer): $AbstractCookingRecipe
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCookingSerializer$$Type<T> = ($SimpleCookingSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCookingSerializer$$Original<T> = $SimpleCookingSerializer<(T)>;}
declare module "net.minecraft.world.item.SmithingTemplateItem" {
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TrimPattern$$Type} from "net.minecraft.world.item.armortrim.TrimPattern"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $SmithingTemplateItem extends $Item {
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

constructor(arg0: $Component$$Type, arg1: $Component$$Type, arg2: $Component$$Type, arg3: $Component$$Type, arg4: $Component$$Type, arg5: $List$$Type<($ResourceLocation$$Type)>, arg6: $List$$Type<($ResourceLocation$$Type)>, ...arg7: ($FeatureFlag$$Type)[])

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "createArmorTrimTemplate"(arg0: $ResourceLocation$$Type, ...arg1: ($FeatureFlag$$Type)[]): $SmithingTemplateItem
public static "createArmorTrimTemplate"(arg0: $ResourceKey$$Type<($TrimPattern)>, ...arg1: ($FeatureFlag$$Type)[]): $SmithingTemplateItem
public static "createNetheriteUpgradeTemplate"(): $SmithingTemplateItem
public "getBaseSlotEmptyIcons"(): $List<($ResourceLocation)>
public "getBaseSlotDescription"(): $Component
public "getAdditionSlotDescription"(): $Component
public static "createNetheriteUpgradeIconList"(): $List<($ResourceLocation)>
public "getAdditionalSlotEmptyIcons"(): $List<($ResourceLocation)>
public static "createTrimmableMaterialIconList"(): $List<($ResourceLocation)>
public static "createNetheriteUpgradeMaterialList"(): $List<($ResourceLocation)>
public static "createTrimmableArmorIconList"(): $List<($ResourceLocation)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "baseSlotEmptyIcons"(): $List<($ResourceLocation)>
get "baseSlotDescription"(): $Component
get "additionSlotDescription"(): $Component
get "additionalSlotEmptyIcons"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTemplateItem$$Type = ($SmithingTemplateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTemplateItem$$Original = $SmithingTemplateItem;}
declare module "net.minecraft.world.item.HoeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HoeItem extends $DiggerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public static "changeIntoState"(arg0: $BlockState$$Type): $Consumer<($UseOnContext)>
public static "onlyIfAirAbove"(arg0: $UseOnContext$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "changeIntoStateAndDropItem"(arg0: $BlockState$$Type, arg1: $ItemLike$$Type): $Consumer<($UseOnContext)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItem$$Type = ($HoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoeItem$$Original = $HoeItem;}
declare module "net.minecraft.world.item.ArmorItem" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"
import {$BlockSource$$Type} from "net.minecraft.core.dispenser.BlockSource"
import {$Supplier} from "java.util.function.Supplier"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $ArmorItem extends $Item implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "getType"(): $ArmorItem$Type
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $Holder<($SoundEvent)>
public static "dispenseArmor"(arg0: $BlockSource$$Type, arg1: $ItemStack$$Type): boolean
public "getMaterial"(): $Holder<($ArmorMaterial)>
public "getDefense"(): integer
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getToughness"(): float
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "getEnchantmentValue"(): integer
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $ArmorItem$Type
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
get "material"(): $Holder<($ArmorMaterial)>
get "defense"(): integer
get "toughness"(): float
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItem$$Type = ($ArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorItem$$Original = $ArmorItem;}
declare module "net.minecraft.world.item.BoatItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $BoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $Boat$Type$$Type, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatItem$$Type = ($BoatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoatItem$$Original = $BoatItem;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$DecimalFormat} from "java.text.DecimalFormat"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemAttributeModifiers$Builder} from "net.minecraft.world.item.component.ItemAttributeModifiers$Builder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Record} from "java.lang.Record"

export class $ItemAttributeModifiers extends $Record {
static readonly "CODEC": $Codec<($ItemAttributeModifiers)>
static readonly "ATTRIBUTE_MODIFIER_FORMAT": $DecimalFormat
static readonly "EMPTY": $ItemAttributeModifiers
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttributeModifiers)>

constructor(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, arg1: boolean)

public "modifiers"(): $List<($ItemAttributeModifiers$Entry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $ItemAttributeModifiers$Builder
public "compute"(arg0: double, arg1: $EquipmentSlot$$Type): double
public "forEach"(arg0: $EquipmentSlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "forEach"(arg0: $EquipmentSlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "withTooltip"(arg0: boolean): $ItemAttributeModifiers
public "showInTooltip"(): boolean
public "withModifierAdded"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$$Type = ({"modifiers"?: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, "showInTooltip"?: boolean}) | ([modifiers?: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$$Original = $ItemAttributeModifiers;}
declare module "net.minecraft.world.item.FoodOnAStickItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $FoodOnAStickItem<T extends $Entity> extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EntityType$$Type<(T)>, arg2: integer)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodOnAStickItem$$Type<T> = ($FoodOnAStickItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodOnAStickItem$$Original<T> = $FoodOnAStickItem<(T)>;}
declare module "net.minecraft.world.item.ProjectileItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"

export interface $ProjectileItem$$Interface {

(arg0: $Level, arg1: $Position, arg2: $ItemStack, arg3: $Direction): $Projectile$$Type
}

export class $ProjectileItem implements $ProjectileItem$$Interface {
 "createDispenseConfig"(): $ProjectileItem$DispenseConfig
 "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
 "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileItem$$Type = ((arg0: $Level, arg1: $Position, arg2: $ItemStack, arg3: $Direction) => $Projectile$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileItem$$Original = $ProjectileItem;}
declare module "net.minecraft.world.item.BowItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProjectileWeaponItem} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BowItem extends $ProjectileWeaponItem {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "MAX_DRAW_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "getPowerForTime"(arg0: integer): float
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getDefaultProjectileRange"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BowItem$$Type = ($BowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BowItem$$Original = $BowItem;}
declare module "net.minecraft.world.item.enchantment.Enchantment$Cost" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $Enchantment$Cost extends $Record {
static readonly "CODEC": $Codec<($Enchantment$Cost)>

constructor(base: integer, perLevelAboveFirst: integer)

public "base"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): integer
public "perLevelAboveFirst"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$Cost$$Type = ({"perLevelAboveFirst"?: integer, "base"?: integer}) | ([perLevelAboveFirst?: integer, base?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$Cost$$Original = $Enchantment$Cost;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$List, $List$$Type} from "java.util.List"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $MapCodec<($LevelBasedValue$Lookup)>

constructor(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(float)>
public "hashCode"(): integer
public "fallback"(): $LevelBasedValue
public "calculate"(arg0: integer): float
public "codec"(): $MapCodec<($LevelBasedValue$Lookup)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Lookup$$Type = ({"fallback"?: $LevelBasedValue$$Type, "values"?: $List$$Type<(float)>}) | ([fallback?: $LevelBasedValue$$Type, values?: $List$$Type<(float)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Lookup$$Original = $LevelBasedValue$Lookup;}
declare module "net.minecraft.world.item.Item$Properties" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$IItemPropertiesExtensions$$Interface} from "net.neoforged.neoforge.common.extensions.IItemPropertiesExtensions"
import {$Interner} from "com.google.common.collect.Interner"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $Item$Properties implements $IItemPropertiesExtensions$$Interface {
static readonly "COMPONENT_INTERNER": $Interner<($DataComponentMap)>

constructor()

public "component"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): $Item$Properties
public "attributes"(arg0: $ItemAttributeModifiers$$Type): $Item$Properties
public "durability"(arg0: integer): $Item$Properties
public "rarity"(arg0: $Rarity$$Type): $Item$Properties
public "jukeboxPlayable"(arg0: $ResourceKey$$Type<($JukeboxSong)>): $Item$Properties
public "setNoRepair"(): $Item$Properties
public "fireResistant"(): $Item$Properties
public "craftRemainder"(arg0: $Item$$Type): $Item$Properties
public "stacksTo"(arg0: integer): $Item$Properties
public static "validateComponents"(arg0: $DataComponentMap$$Type): $DataComponentMap
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $Item$Properties
public "food"(arg0: $FoodProperties$$Type): $Item$Properties
public "component"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $Item$Properties
get "noRepair"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$Properties$$Type = ($Item$Properties);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$Properties$$Original = $Item$Properties;}
declare module "net.minecraft.world.item.ComplexItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet} from "net.minecraft.network.protocol.Packet"

export class $ComplexItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getUpdatePacket"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): $Packet<(never)>
public "isComplex"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "complex"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComplexItem$$Type = ($ComplexItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComplexItem$$Original = $ComplexItem;}
declare module "net.minecraft.world.item.armortrim.ArmorTrim" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TrimMaterial, $TrimMaterial$$Type} from "net.minecraft.world.item.armortrim.TrimMaterial"
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TrimPattern, $TrimPattern$$Type} from "net.minecraft.world.item.armortrim.TrimPattern"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"

export class $ArmorTrim implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ArmorTrim)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ArmorTrim)>

constructor(arg0: $Holder$$Type<($TrimMaterial)>, arg1: $Holder$$Type<($TrimPattern)>)
constructor(arg0: $Holder$$Type<($TrimMaterial)>, arg1: $Holder$$Type<($TrimPattern)>, arg2: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "pattern"(): $Holder<($TrimPattern)>
public "withTooltip"(arg0: boolean): $ArmorTrim
public "innerTexture"(arg0: $Holder$$Type<($ArmorMaterial)>): $ResourceLocation
public "outerTexture"(arg0: $Holder$$Type<($ArmorMaterial)>): $ResourceLocation
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "hasPatternAndMaterial"(arg0: $Holder$$Type<($TrimPattern)>, arg1: $Holder$$Type<($TrimMaterial)>): boolean
public "material"(): $Holder<($TrimMaterial)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorTrim$$Type = ($ArmorTrim);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorTrim$$Original = $ArmorTrim;}
declare module "net.minecraft.world.item.MapItem" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ComplexItem} from "net.minecraft.world.item.ComplexItem"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $MapItem extends $ComplexItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "IMAGE_HEIGHT": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "IMAGE_WIDTH": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "update"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $MapItemSavedData$$Type): void
public static "create"(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: byte, arg4: boolean, arg5: boolean): $ItemStack
public static "lockMap"(arg0: $Level$$Type, arg1: $ItemStack$$Type): void
public static "getSavedData"(arg0: $MapId$$Type, arg1: $Level$$Type): $MapItemSavedData
public static "getSavedData"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $MapItemSavedData
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpdatePacket"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): $Packet<(never)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "renderBiomePreviewMap"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type): void
public static "getTooltipForId"(arg0: $MapId$$Type): $Component
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItem$$Type = ($MapItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapItem$$Original = $MapItem;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentAttributeEffect" {
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LevelBasedValue, $LevelBasedValue$$Type} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchantmentLocationBasedEffect, $EnchantmentLocationBasedEffect$$Type, $EnchantmentLocationBasedEffect$$Interface} from "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EnchantmentAttributeEffect extends $Record implements $EnchantmentLocationBasedEffect$$Interface {
static readonly "CODEC": $MapCodec<($EnchantmentAttributeEffect)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($Attribute)>, arg2: $LevelBasedValue$$Type, arg3: $AttributeModifier$Operation$$Type)

public "operation"(): $AttributeModifier$Operation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "attribute"(): $Holder<($Attribute)>
public "amount"(): $LevelBasedValue
public "getModifier"(arg0: integer, arg1: $StringRepresentable$$Type): $AttributeModifier
public "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
public "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
public "codec"(): $MapCodec<($EnchantmentAttributeEffect)>
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentLocationBasedEffect$$Type)>)>): $MapCodec<($EnchantmentLocationBasedEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentAttributeEffect$$Type = ({"amount"?: $LevelBasedValue$$Type, "operation"?: $AttributeModifier$Operation$$Type, "attribute"?: $Holder$$Type<($Attribute)>, "id"?: $ResourceLocation$$Type}) | ([amount?: $LevelBasedValue$$Type, operation?: $AttributeModifier$Operation$$Type, attribute?: $Holder$$Type<($Attribute)>, id?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentAttributeEffect$$Original = $EnchantmentAttributeEffect;}
declare module "net.minecraft.world.item.crafting.SmeltingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmeltingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingRecipe$$Type = ($SmeltingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmeltingRecipe$$Original = $SmeltingRecipe;}
declare module "net.minecraft.world.item.component.TooltipProvider" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $TooltipProvider$$Interface {

(arg0: $Item$TooltipContext, arg1: $Consumer<($Component)>, arg2: $TooltipFlag): void
}

export class $TooltipProvider implements $TooltipProvider$$Interface {
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipProvider$$Type = ((arg0: $Item$TooltipContext, arg1: $Consumer<($Component)>, arg2: $TooltipFlag) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipProvider$$Original = $TooltipProvider;}
declare module "net.minecraft.world.item.CrossbowItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProjectileWeaponItem} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CrossbowItem extends $ProjectileWeaponItem {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "DEFAULT_RANGE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MOB_ARROW_POWER": float
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOnRelease"(arg0: $ItemStack$$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "getChargeDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "performShooting"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: $LivingEntity$$Type): void
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "isCharged"(arg0: $ItemStack$$Type): boolean
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getSupportedHeldProjectiles"(): $Predicate<($ItemStack)>
public "getDefaultProjectileRange"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "supportedHeldProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrossbowItem$$Type = ($CrossbowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrossbowItem$$Original = $CrossbowItem;}
declare module "net.minecraft.world.item.context.BlockPlaceContext" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $BlockPlaceContext extends $UseOnContext {
constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $BlockHitResult$$Type)
constructor(arg0: $UseOnContext$$Type)
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $BlockHitResult$$Type)

public static "at"(arg0: $BlockPlaceContext$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $BlockPlaceContext
public "canPlace"(): boolean
public "getNearestLookingDirections"(): ($Direction)[]
public "getNearestLookingVerticalDirection"(): $Direction
public "handler$zbd000$moonlight$fixNotAccountingForNullPlayer1"(arg0: $CallbackInfoReturnable$$Type): void
public "handler$zbd000$moonlight$fixNotAccountingForNullPlayer2"(arg0: $CallbackInfoReturnable$$Type): void
public "handler$zbd000$moonlight$fixNotAccountingForNullPlayer3"(arg0: $CallbackInfoReturnable$$Type): void
public "getNearestLookingDirection"(): $Direction
public "replacingClickedOnBlock"(): boolean
public "getClickedPos"(): $BlockPos
get "nearestLookingDirections"(): ($Direction)[]
get "nearestLookingVerticalDirection"(): $Direction
get "nearestLookingDirection"(): $Direction
get "clickedPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlaceContext$$Type = ($BlockPlaceContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlaceContext$$Original = $BlockPlaceContext;}
declare module "net.minecraft.world.item.trading.MerchantOffers" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ArrayList} from "java.util.ArrayList"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$MerchantOffer} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"

export class $MerchantOffers extends $ArrayList<($MerchantOffer)> {
static readonly "CODEC": $Codec<($MerchantOffers)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MerchantOffers)>

constructor()

public "copy"(): $MerchantOffers
public "getRecipeFor"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): $MerchantOffer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOffers$$Type = ($MerchantOffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantOffers$$Original = $MerchantOffers;}
declare module "net.minecraft.world.item.SwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Tool, $Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TieredItem} from "net.minecraft.world.item.TieredItem"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SwordItem extends $TieredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)
constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type, arg2: $Tool$$Type)

public static "createToolProperties"(): $Tool
public static "createAttributes"(arg0: $Tier$$Type, arg1: float, arg2: float): $ItemAttributeModifiers
public static "createAttributes"(arg0: $Tier$$Type, arg1: integer, arg2: float): $ItemAttributeModifiers
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwordItem$$Type = ($SwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwordItem$$Original = $SwordItem;}
declare module "net.minecraft.world.item.component.SuspiciousStewEffects" {
import {$SuspiciousStewEffects$Entry, $SuspiciousStewEffects$Entry$$Type} from "net.minecraft.world.item.component.SuspiciousStewEffects$Entry"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $SuspiciousStewEffects extends $Record {
static readonly "CODEC": $Codec<($SuspiciousStewEffects)>
static readonly "EMPTY": $SuspiciousStewEffects
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SuspiciousStewEffects)>

constructor(arg0: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withEffectAdded"(arg0: $SuspiciousStewEffects$Entry$$Type): $SuspiciousStewEffects
public "effects"(): $List<($SuspiciousStewEffects$Entry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewEffects$$Type = ({"effects"?: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>}) | ([effects?: $List$$Type<($SuspiciousStewEffects$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewEffects$$Original = $SuspiciousStewEffects;}
declare module "net.minecraft.world.item.BedItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BedItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedItem$$Type = ($BedItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BedItem$$Original = $BedItem;}
declare module "net.minecraft.world.item.component.FireworkExplosion$Shape" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"

export class $FireworkExplosion$Shape extends $Enum<($FireworkExplosion$Shape)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "SMALL_BALL": $FireworkExplosion$Shape
static readonly "LARGE_BALL": $FireworkExplosion$Shape
static readonly "CODEC": $Codec<($FireworkExplosion$Shape)>
static readonly "STAR": $FireworkExplosion$Shape
static readonly "CREEPER": $FireworkExplosion$Shape
static readonly "BURST": $FireworkExplosion$Shape
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FireworkExplosion$Shape)>

public "getName"(): $MutableComponent
public static "values"(): ($FireworkExplosion$Shape)[]
public static "valueOf"(arg0: StringJS): $FireworkExplosion$Shape
public "getId"(): integer
public static "getExtensionInfo"(): $ExtensionInfo
public static "byId"(arg0: integer): $FireworkExplosion$Shape
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "name"(): $MutableComponent
get "id"(): integer
public static get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkExplosion$Shape$$Type = (("small_ball") | ("large_ball") | ("star") | ("creeper") | ("burst"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkExplosion$Shape$$Original = $FireworkExplosion$Shape;}
declare module "net.minecraft.world.item.CreativeModeTab$Builder" {
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Function$$Type} from "java.util.function.Function"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $CreativeModeTab$Builder {
constructor(arg0: $CreativeModeTab$Row$$Type, arg1: integer)

public "build"(): $CreativeModeTab
public "withScrollBarSpriteLocation"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
public "hideTitle"(): $CreativeModeTab$Builder
public "icon"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $CreativeModeTab$Builder
public "title"(arg0: $Component$$Type): $CreativeModeTab$Builder
public "alignedRight"(): $CreativeModeTab$Builder
public "backgroundTexture"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
public "noScrollBar"(): $CreativeModeTab$Builder
public "displayItems"(arg0: $CreativeModeTab$DisplayItemsGenerator$$Type): $CreativeModeTab$Builder
public "displayItems"(arg0: $Collection$$Type<($Holder$$Type<($ItemLike$$Type)>)>): $CreativeModeTab$Builder
public "withTabsImage"(arg0: $ResourceLocation$$Type): $CreativeModeTab$Builder
public "withTabsAfter"(...arg0: ($ResourceLocation$$Type)[]): $CreativeModeTab$Builder
public "withTabsAfter"(...arg0: ($ResourceKey$$Type<($CreativeModeTab$$Type)>)[]): $CreativeModeTab$Builder
public "withTabFactory"(arg0: $Function$$Type<($CreativeModeTab$Builder), ($CreativeModeTab$$Type)>): $CreativeModeTab$Builder
public "withLabelColor"(arg0: integer): $CreativeModeTab$Builder
public "withSlotColor"(arg0: integer): $CreativeModeTab$Builder
public "withSearchBar"(): $CreativeModeTab$Builder
public "withSearchBar"(arg0: integer): $CreativeModeTab$Builder
public "withTabsBefore"(...arg0: ($ResourceKey$$Type<($CreativeModeTab$$Type)>)[]): $CreativeModeTab$Builder
public "withTabsBefore"(...arg0: ($ResourceLocation$$Type)[]): $CreativeModeTab$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Builder$$Type = ($CreativeModeTab$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Builder$$Original = $CreativeModeTab$Builder;}
declare module "net.minecraft.world.item.ScaffoldingBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ScaffoldingBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "updatePlacementContext"(arg0: $BlockPlaceContext$$Type): $BlockPlaceContext
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaffoldingBlockItem$$Type = ($ScaffoldingBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScaffoldingBlockItem$$Original = $ScaffoldingBlockItem;}
declare module "net.minecraft.world.item.component.BundleContents" {
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TooltipComponent$$Interface} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$Fraction} from "org.apache.commons.lang3.math.Fraction"
import {$Stream} from "java.util.stream.Stream"

export class $BundleContents implements $TooltipComponent$$Interface {
static readonly "CODEC": $Codec<($BundleContents)>
static readonly "EMPTY": $BundleContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BundleContents)>

constructor(arg0: $List$$Type<($ItemStack$$Type)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "weight"(): $Fraction
public "items"(): $Iterable<($ItemStack)>
public "itemsCopy"(): $Iterable<($ItemStack)>
public "getItemUnsafe"(arg0: integer): $ItemStack
public "itemCopyStream"(): $Stream<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleContents$$Type = ($BundleContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleContents$$Original = $BundleContents;}
declare module "net.minecraft.world.item.HangingEntityItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HangingEntity, $HangingEntity$$Type} from "net.minecraft.world.entity.decoration.HangingEntity"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $HangingEntityItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EntityType<($HangingEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EntityType$$Type<($HangingEntity$$Type)>, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingEntityItem$$Type = ($HangingEntityItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HangingEntityItem$$Original = $HangingEntityItem;}
declare module "net.minecraft.world.item.InkSacItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"

export class $InkSacItem extends $Item implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InkSacItem$$Type = ($InkSacItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InkSacItem$$Original = $InkSacItem;}
declare module "net.minecraft.world.item.DebugStickItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DebugStickItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugStickItem$$Type = ($DebugStickItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugStickItem$$Original = $DebugStickItem;}
declare module "net.minecraft.world.item.crafting.FireworkStarFadeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FireworkStarFadeRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkStarFadeRecipe$$Type = ($FireworkStarFadeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkStarFadeRecipe$$Original = $FireworkStarFadeRecipe;}
declare module "net.minecraft.world.item.ShovelItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ShovelItem extends $DiggerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "getShovelPathingState"(arg0: $BlockState$$Type): $BlockState
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItem$$Type = ($ShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShovelItem$$Original = $ShovelItem;}
declare module "net.minecraft.world.item.EnchantedBookItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $EnchantedBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public static "createForEnchantment"(arg0: $EnchantmentInstance$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedBookItem$$Type = ($EnchantedBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedBookItem$$Original = $EnchantedBookItem;}
declare module "net.minecraft.world.item.KnowledgeBookItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $KnowledgeBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowledgeBookItem$$Type = ($KnowledgeBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KnowledgeBookItem$$Original = $KnowledgeBookItem;}
declare module "net.minecraft.world.item.ProjectileWeaponItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ProjectileWeaponItem extends $Item {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getHeldProjectile"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $ItemStack
public "customArrow"(arg0: $AbstractArrow$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $AbstractArrow
public "getDefaultCreativeAmmo"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
public "getAllSupportedProjectiles"(arg0: $ItemStack$$Type): $Predicate<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getSupportedHeldProjectiles"(arg0: $ItemStack$$Type): $Predicate<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "getSupportedHeldProjectiles"(): $Predicate<($ItemStack)>
public "getEnchantmentValue"(): integer
public "getDefaultProjectileRange"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "supportedHeldProjectiles"(): $Predicate<($ItemStack)>
get "enchantmentValue"(): integer
get "defaultProjectileRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileWeaponItem$$Type = ($ProjectileWeaponItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileWeaponItem$$Original = $ProjectileWeaponItem;}
declare module "net.minecraft.world.item.crafting.FireworkStarRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$FireworkExplosion$Shape} from "net.minecraft.world.item.component.FireworkExplosion$Shape"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item} from "net.minecraft.world.item.Item"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $FireworkStarRecipe extends $CustomRecipe {
static "SHAPE_INGREDIENT": $Ingredient
static "SHAPE_BY_ITEM": $Map<($Item), ($FireworkExplosion$Shape)>

constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkStarRecipe$$Type = ($FireworkStarRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkStarRecipe$$Original = $FireworkStarRecipe;}
declare module "net.minecraft.world.item.crafting.CraftingInput$Positioned" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Record} from "java.lang.Record"

export class $CraftingInput$Positioned extends $Record {
static readonly "EMPTY": $CraftingInput$Positioned

constructor(arg0: $CraftingInput$$Type, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "input"(): $CraftingInput
public "top"(): integer
public "left"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingInput$Positioned$$Type = ({"top"?: integer, "input"?: $CraftingInput$$Type, "left"?: integer}) | ([top?: integer, input?: $CraftingInput$$Type, left?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingInput$Positioned$$Original = $CraftingInput$Positioned;}
declare module "net.minecraft.world.item.MilkBucketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MilkBucketItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkBucketItem$$Type = ($MilkBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MilkBucketItem$$Original = $MilkBucketItem;}
declare module "net.minecraft.world.item.component.DyedItemColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$DyeItem$$Type} from "net.minecraft.world.item.DyeItem"
import {$Record} from "java.lang.Record"

export class $DyedItemColor extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($DyedItemColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DyedItemColor)>
static readonly "LEATHER_COLOR": integer

constructor(arg0: integer, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "getOrDefault"(arg0: $ItemStack$$Type, arg1: integer): integer
public "rgb"(): integer
public "withTooltip"(arg0: boolean): $DyedItemColor
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "showInTooltip"(): boolean
public static "applyDyes"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DyeItem$$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyedItemColor$$Type = ({"showInTooltip"?: boolean, "rgb"?: integer}) | ([showInTooltip?: boolean, rgb?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyedItemColor$$Original = $DyedItemColor;}
declare module "net.minecraft.world.item.crafting.ShapelessRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ShapelessRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapelessRecipe)> {
static readonly "CODEC": $MapCodec<($ShapelessRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapelessRecipe)>
public "codec"(): $MapCodec<($ShapelessRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipe$Serializer$$Type = ($ShapelessRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessRecipe$Serializer$$Original = $ShapelessRecipe$Serializer;}
declare module "net.minecraft.world.item.CreativeModeTab$Row" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$Row extends $Enum<($CreativeModeTab$Row)> {
static readonly "TOP": $CreativeModeTab$Row
static readonly "BOTTOM": $CreativeModeTab$Row

public static "values"(): ($CreativeModeTab$Row)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$Row
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Row$$Type = (("top") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Row$$Original = $CreativeModeTab$Row;}
declare module "net.minecraft.world.item.crafting.CraftingBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $CraftingBookCategory extends $Enum<($CraftingBookCategory)> implements $StringRepresentable$$Interface {
static readonly "EQUIPMENT": $CraftingBookCategory
static readonly "CODEC": $Codec<($CraftingBookCategory)>
static readonly "BUILDING": $CraftingBookCategory
static readonly "REDSTONE": $CraftingBookCategory
static readonly "MISC": $CraftingBookCategory
static readonly "BY_ID": $IntFunction<($CraftingBookCategory)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CraftingBookCategory)>

public static "values"(): ($CraftingBookCategory)[]
public static "valueOf"(arg0: StringJS): $CraftingBookCategory
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBookCategory$$Type = (("building") | ("redstone") | ("equipment") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingBookCategory$$Original = $CraftingBookCategory;}
declare module "net.minecraft.world.item.component.MapItemColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $MapItemColor extends $Record {
static readonly "CODEC": $Codec<($MapItemColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MapItemColor)>
static readonly "DEFAULT": $MapItemColor

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "rgb"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapItemColor$$Type = ({"rgb"?: integer}) | ([rgb?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapItemColor$$Original = $MapItemColor;}
declare module "net.minecraft.world.item.crafting.ShapedRecipePattern" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map$$Type} from "java.util.Map"
import {$Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ShapedRecipePattern$Data$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern$Data"
import {$List$$Type} from "java.util.List"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ShapedRecipePattern {
static readonly "MAP_CODEC": $MapCodec<($ShapedRecipePattern)>
 "symmetrical": boolean
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedRecipePattern)>

constructor(arg0: integer, arg1: integer, arg2: $NonNullList$$Type<($Ingredient$$Type)>, arg3: ($ShapedRecipePattern$Data$$Type)?)

public "matches"(arg0: $CraftingInput$$Type): boolean
public static "of"(arg0: $Map$$Type<(character), ($Ingredient$$Type)>, arg1: $List$$Type<(StringJS)>): $ShapedRecipePattern
public static "of"(arg0: $Map$$Type<(character), ($Ingredient$$Type)>, ...arg1: (StringJS)[]): $ShapedRecipePattern
public "width"(): integer
public "height"(): integer
public static "getMaxHeight"(): integer
public static "getMaxWidth"(): integer
public static "setCraftingSize"(arg0: integer, arg1: integer): void
public "ingredients"(): $NonNullList<($Ingredient)>
public static get "maxHeight"(): integer
public static get "maxWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipePattern$$Type = ($ShapedRecipePattern);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipePattern$$Original = $ShapedRecipePattern;}
declare module "net.minecraft.world.item.ThrowablePotionItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PotionItem} from "net.minecraft.world.item.PotionItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ThrowablePotionItem extends $PotionItem implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowablePotionItem$$Type = ($ThrowablePotionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThrowablePotionItem$$Original = $ThrowablePotionItem;}
declare module "net.minecraft.world.item.crafting.ShapedRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ShapedRecipe$Serializer implements $RecipeSerializer$$Interface<($ShapedRecipe)> {
static readonly "CODEC": $MapCodec<($ShapedRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ShapedRecipe)>
public "codec"(): $MapCodec<($ShapedRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipe$Serializer$$Type = ($ShapedRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipe$Serializer$$Original = $ShapedRecipe$Serializer;}
declare module "net.minecraft.world.item.component.MapPostProcessing" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Enum} from "java.lang.Enum"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $MapPostProcessing extends $Enum<($MapPostProcessing)> {
static readonly "ID_MAP": $IntFunction<($MapPostProcessing)>
static readonly "LOCK": $MapPostProcessing
static readonly "SCALE": $MapPostProcessing
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MapPostProcessing)>

public static "values"(): ($MapPostProcessing)[]
public static "valueOf"(arg0: StringJS): $MapPostProcessing
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPostProcessing$$Type = (("lock") | ("scale"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapPostProcessing$$Original = $MapPostProcessing;}
declare module "net.minecraft.world.item.Rarity" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UnaryOperator} from "java.util.function.UnaryOperator"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Style} from "net.minecraft.network.chat.Style"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $Rarity extends $Enum<($Rarity)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "CODEC": $Codec<($Rarity)>
static readonly "RARE": $Rarity
static readonly "EPIC": $Rarity
static readonly "UNCOMMON": $Rarity
static readonly "BY_ID": $IntFunction<($Rarity)>
static readonly "COMMON": $Rarity
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Rarity)>

public static "values"(): ($Rarity)[]
public static "valueOf"(arg0: StringJS): $Rarity
/**
 * 
 * @deprecated
 */
public "color"(): $ChatFormatting
public static "getExtensionInfo"(): $ExtensionInfo
public "getStyleModifier"(): $UnaryOperator<($Style)>
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static get "extensionInfo"(): $ExtensionInfo
get "styleModifier"(): $UnaryOperator<($Style)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rarity$$Type = (("common") | ("uncommon") | ("rare") | ("epic"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rarity$$Original = $Rarity;}
declare module "net.minecraft.world.item.AirItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $AirItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirItem$$Type = ($AirItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AirItem$$Original = $AirItem;}
declare module "net.minecraft.world.item.HangingSignItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignItem} from "net.minecraft.world.item.SignItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $HangingSignItem extends $SignItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingSignItem$$Type = ($HangingSignItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HangingSignItem$$Original = $HangingSignItem;}
declare module "net.minecraft.world.item.component.Unbreakable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Unbreakable extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($Unbreakable)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Unbreakable)>

constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withTooltip"(arg0: boolean): $Unbreakable
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "showInTooltip"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Unbreakable$$Type = ({"showInTooltip"?: boolean}) | ([showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Unbreakable$$Original = $Unbreakable;}
declare module "net.minecraft.world.item.Tier" {
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Tool} from "net.minecraft.world.item.component.Tool"

export interface $Tier$$Interface {
get "speed"(): float
get "attackDamageBonus"(): float
get "uses"(): integer
get "enchantmentValue"(): integer
get "incorrectBlocksForDrops"(): $TagKey<($Block)>
get "repairIngredient"(): $Ingredient
}

export class $Tier implements $Tier$$Interface {
 "createToolProperties"(arg0: $TagKey$$Type<($Block)>): $Tool
 "getSpeed"(): float
 "getAttackDamageBonus"(): float
 "getUses"(): integer
 "getEnchantmentValue"(): integer
 "getIncorrectBlocksForDrops"(): $TagKey<($Block)>
 "getRepairIngredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tier$$Type = (StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tier$$Original = $Tier;}
declare module "net.minecraft.world.item.enchantment.TargetedConditionalEffect" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$EnchantmentTarget, $EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$Record} from "java.lang.Record"

export class $TargetedConditionalEffect<T> extends $Record {
constructor(arg0: $EnchantmentTarget$$Type, arg1: $EnchantmentTarget$$Type, arg2: T, arg3: ($LootItemCondition$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "requirements"(): $Optional<($LootItemCondition)>
public static "equipmentDropsCodec"<S>(arg0: $Codec$$Type<(S)>, arg1: $LootContextParamSet$$Type): $Codec<($TargetedConditionalEffect<(S)>)>
public "affected"(): $EnchantmentTarget
public "enchanted"(): $EnchantmentTarget
public "effect"(): T
public static "codec"<S>(arg0: $Codec$$Type<(S)>, arg1: $LootContextParamSet$$Type): $Codec<($TargetedConditionalEffect<(S)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetedConditionalEffect$$Type<T> = ({"enchanted"?: $EnchantmentTarget$$Type, "requirements"?: ($LootItemCondition$$Type)?, "affected"?: $EnchantmentTarget$$Type, "effect"?: T}) | ([enchanted?: $EnchantmentTarget$$Type, requirements?: ($LootItemCondition$$Type)?, affected?: $EnchantmentTarget$$Type, effect?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetedConditionalEffect$$Original<T> = $TargetedConditionalEffect<(T)>;}
declare module "net.minecraft.world.item.BundleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $BundleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public static "getFullnessDisplay"(arg0: $ItemStack$$Type): float
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleItem$$Type = ($BundleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BundleItem$$Original = $BundleItem;}
declare module "net.minecraft.world.item.ArmorMaterial" {
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ArmorMaterial extends $Record {
static readonly "CODEC": $Codec<($Holder<($ArmorMaterial)>)>

constructor(arg0: $Map$$Type<($ArmorItem$Type$$Type), (integer)>, arg1: integer, arg2: $Holder$$Type<($SoundEvent)>, arg3: $Supplier$$Type<($Ingredient$$Type)>, arg4: $List$$Type<($ArmorMaterial$Layer$$Type)>, arg5: float, arg6: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "layers"(): $List<($ArmorMaterial$Layer)>
public "repairIngredient"(): $Supplier<($Ingredient)>
public "enchantmentValue"(): integer
public "getDefense"(arg0: $ArmorItem$Type$$Type): integer
public "defense"(): $Map<($ArmorItem$Type), (integer)>
public "toughness"(): float
public "equipSound"(): $Holder<($SoundEvent)>
public "knockbackResistance"(): float
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ArmorMaterial
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ArmorMaterialTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorMaterial$$Type = (Special.ArmorMaterial) | (StringJS) | ({"repairIngredient"?: $Supplier$$Type<($Ingredient$$Type)>, "equipSound"?: $Holder$$Type<($SoundEvent)>, "enchantmentValue"?: integer, "defense"?: $Map$$Type<($ArmorItem$Type$$Type), (integer)>, "toughness"?: float, "layers"?: $List$$Type<($ArmorMaterial$Layer$$Type)>, "knockbackResistance"?: float}) | ([repairIngredient?: $Supplier$$Type<($Ingredient$$Type)>, equipSound?: $Holder$$Type<($SoundEvent)>, enchantmentValue?: integer, defense?: $Map$$Type<($ArmorItem$Type$$Type), (integer)>, toughness?: float, layers?: $List$$Type<($ArmorMaterial$Layer$$Type)>, knockbackResistance?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorMaterial$$Original = $ArmorMaterial;}
declare module "net.minecraft.world.item.crafting.ShulkerBoxColoring" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShulkerBoxColoring extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxColoring$$Type = ($ShulkerBoxColoring);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxColoring$$Original = $ShulkerBoxColoring;}
declare module "net.minecraft.world.item.ChorusFruitItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ChorusFruitItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusFruitItem$$Type = ($ChorusFruitItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChorusFruitItem$$Original = $ChorusFruitItem;}
declare module "net.minecraft.world.item.GameMasterBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $GameMasterBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameMasterBlockItem$$Type = ($GameMasterBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameMasterBlockItem$$Original = $GameMasterBlockItem;}
declare module "net.minecraft.world.item.component.CustomData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Predicate} from "java.util.function.Predicate"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$MapDecoder$$Type} from "com.mojang.serialization.MapDecoder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapEncoder$$Type} from "com.mojang.serialization.MapEncoder"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CustomData {
static readonly "CODEC": $Codec<($CustomData)>
static readonly "CODEC_WITH_ID": $Codec<($CustomData)>
static readonly "EMPTY": $CustomData
/**
 * 
 * @deprecated
 */
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CustomData)>

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "update"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $MapEncoder$$Type<(T)>, arg2: T): $DataResult<($CustomData)>
public "update"(arg0: $Consumer$$Type<($CompoundTag)>): $CustomData
public static "update"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($CompoundTag)>): void
public "isEmpty"(): boolean
public static "of"(arg0: $CompoundTag$$Type): $CustomData
public "contains"(arg0: StringJS): boolean
/**
 * 
 * @deprecated
 */
public "getUnsafe"(): $CompoundTag
public static "set"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $ItemStack$$Type, arg2: $CompoundTag$$Type): void
public "read"<T>(arg0: $MapDecoder$$Type<(T)>): $DataResult<(T)>
public "read"<T>(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: $MapDecoder$$Type<(T)>): $DataResult<(T)>
public "loadInto"(arg0: $Entity$$Type): void
public "loadInto"(arg0: $BlockEntity$$Type, arg1: $HolderLookup$Provider$$Type): boolean
public static "itemMatcher"(arg0: $DataComponentType$$Type<($CustomData$$Type)>, arg1: $CompoundTag$$Type): $Predicate<($ItemStack)>
public "matchedBy"(arg0: $CompoundTag$$Type): boolean
public "copyTag"(): $CompoundTag
get "empty"(): boolean
get "unsafe"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomData$$Type = ($CustomData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomData$$Original = $CustomData;}
declare module "net.minecraft.world.item.ProjectileItem$DispenseConfig" {
import {$ProjectileItem$DispenseConfig$Builder} from "net.minecraft.world.item.ProjectileItem$DispenseConfig$Builder"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$ProjectileItem$PositionFunction, $ProjectileItem$PositionFunction$$Type} from "net.minecraft.world.item.ProjectileItem$PositionFunction"
import {$Record} from "java.lang.Record"

export class $ProjectileItem$DispenseConfig extends $Record {
static readonly "DEFAULT": $ProjectileItem$DispenseConfig

constructor(arg0: $ProjectileItem$PositionFunction$$Type, arg1: float, arg2: float, arg3: $OptionalInt$$Type)

public "power"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $ProjectileItem$DispenseConfig$Builder
public "positionFunction"(): $ProjectileItem$PositionFunction
public "overrideDispenseEvent"(): $OptionalInt
public "uncertainty"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileItem$DispenseConfig$$Type = ({"positionFunction"?: $ProjectileItem$PositionFunction$$Type, "uncertainty"?: float, "power"?: float, "overrideDispenseEvent"?: $OptionalInt$$Type}) | ([positionFunction?: $ProjectileItem$PositionFunction$$Type, uncertainty?: float, power?: float, overrideDispenseEvent?: $OptionalInt$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileItem$DispenseConfig$$Original = $ProjectileItem$DispenseConfig;}
declare module "net.minecraft.world.item.component.BookContent" {
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"

export interface $BookContent$$Interface<T, C> {
}

export class $BookContent<T, C> implements $BookContent$$Interface {
 "pages"(): $List<($Filterable<(T)>)>
 "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<(T)>)>): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContent$$Type<T, C> = ($BookContent<(T), (C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookContent$$Original<T, C> = $BookContent<(T), (C)>;}
declare module "net.minecraft.world.item.crafting.ShapelessRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShapelessRecipe implements $CraftingRecipe$$Interface {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ItemStack$$Type, arg3: $NonNullList$$Type<($Ingredient$$Type)>)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getType"(): $RecipeType<(never)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipe$$Type = ($ShapelessRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapelessRecipe$$Original = $ShapelessRecipe;}
declare module "net.minecraft.world.item.crafting.AbstractCookingRecipe$Factory" {
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $AbstractCookingRecipe$Factory$$Interface<T extends $AbstractCookingRecipe> {

(arg0: StringJS, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: float, arg5: integer): T
}

export class $AbstractCookingRecipe$Factory<T extends $AbstractCookingRecipe> implements $AbstractCookingRecipe$Factory$$Interface {
 "create"(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipe$Factory$$Type<T> = ((arg0: StringJS, arg1: $CookingBookCategory, arg2: $Ingredient, arg3: $ItemStack, arg4: float, arg5: integer) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCookingRecipe$Factory$$Original<T> = $AbstractCookingRecipe$Factory<(T)>;}
declare module "net.minecraft.world.item.ItemDisplayContext" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IntFunction} from "java.util.function.IntFunction"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $ItemDisplayContext extends $Enum<($ItemDisplayContext)> implements $StringRepresentable$$Interface, $IExtensibleEnum$$Interface {
static readonly "HEAD": $ItemDisplayContext
static readonly "CODEC": $Codec<($ItemDisplayContext)>
static readonly "THIRD_PERSON_LEFT_HAND": $ItemDisplayContext
static readonly "THIRD_PERSON_RIGHT_HAND": $ItemDisplayContext
static readonly "FIRST_PERSON_RIGHT_HAND": $ItemDisplayContext
static readonly "GROUND": $ItemDisplayContext
static readonly "FIRST_PERSON_LEFT_HAND": $ItemDisplayContext
static readonly "FIXED": $ItemDisplayContext
static readonly "BY_ID": $IntFunction<($ItemDisplayContext)>
static readonly "GUI": $ItemDisplayContext
static readonly "NONE": $ItemDisplayContext

public static "values"(): ($ItemDisplayContext)[]
public static "valueOf"(arg0: StringJS): $ItemDisplayContext
public "getId"(): byte
public "fallback"(): $ItemDisplayContext
public "isModded"(): boolean
public static "getExtensionInfo"(): $ExtensionInfo
public "getSerializedName"(): StringJS
public "firstPerson"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "id"(): byte
get "modded"(): boolean
public static get "extensionInfo"(): $ExtensionInfo
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDisplayContext$$Type = (("none") | ("thirdperson_lefthand") | ("thirdperson_righthand") | ("firstperson_lefthand") | ("firstperson_righthand") | ("head") | ("gui") | ("ground") | ("fixed"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDisplayContext$$Original = $ItemDisplayContext;}
declare module "net.minecraft.world.item.NameTagItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $NameTagItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameTagItem$$Type = ($NameTagItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NameTagItem$$Original = $NameTagItem;}
declare module "net.minecraft.world.item.ShieldItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Interface} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ShieldItem extends $Item implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getEquipmentSlot"(): $EquipmentSlot
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldItem$$Type = ($ShieldItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldItem$$Original = $ShieldItem;}
declare module "net.minecraft.world.item.crafting.AbstractCookingRecipe" {
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AbstractCookingRecipe implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: StringJS, arg2: $CookingBookCategory$$Type, arg3: $Ingredient$$Type, arg4: $ItemStack$$Type, arg5: float, arg6: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "category"(): $CookingBookCategory
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getCookingTime"(): integer
public "getGroup"(): StringJS
public "getExperience"(): float
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "cookingTime"(): integer
get "group"(): StringJS
get "experience"(): float
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCookingRecipe$$Type = ($AbstractCookingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractCookingRecipe$$Original = $AbstractCookingRecipe;}
declare module "net.minecraft.world.item.enchantment.ConditionalEffect" {
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$Record} from "java.lang.Record"

export class $ConditionalEffect<T> extends $Record {
constructor(arg0: T, arg1: ($LootItemCondition$$Type)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public static "conditionCodec"(arg0: $LootContextParamSet$$Type): $Codec<($LootItemCondition)>
public "requirements"(): $Optional<($LootItemCondition)>
public "effect"(): T
public static "codec"<T>(arg0: $Codec$$Type<(T)>, arg1: $LootContextParamSet$$Type): $Codec<($ConditionalEffect<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalEffect$$Type<T> = ({"requirements"?: ($LootItemCondition$$Type)?, "effect"?: T}) | ([requirements?: ($LootItemCondition$$Type)?, effect?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConditionalEffect$$Original<T> = $ConditionalEffect<(T)>;}
declare module "net.minecraft.world.item.LeadItem" {
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $LeadItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "leashableInArea"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Predicate$$Type<($Leashable)>): $List<($Leashable)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "bindPlayerMobs"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeadItem$$Type = ($LeadItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeadItem$$Original = $LeadItem;}
declare module "net.minecraft.world.item.OminousBottleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $OminousBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "EFFECT_DURATION": integer
static readonly "MAX_AMPLIFIER": integer
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MIN_AMPLIFIER": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OminousBottleItem$$Type = ($OminousBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OminousBottleItem$$Original = $OminousBottleItem;}
declare module "net.minecraft.world.item.GlowInkSacItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"

export class $GlowInkSacItem extends $Item implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowInkSacItem$$Type = ($GlowInkSacItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlowInkSacItem$$Original = $GlowInkSacItem;}
declare module "net.minecraft.world.item.ProjectileItem$PositionFunction" {
import {$BlockSource, $BlockSource$$Type} from "net.minecraft.core.dispenser.BlockSource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"

export interface $ProjectileItem$PositionFunction$$Interface {

(arg0: $BlockSource, arg1: $Direction): $Position$$Type
}

export class $ProjectileItem$PositionFunction implements $ProjectileItem$PositionFunction$$Interface {
 "getDispensePosition"(arg0: $BlockSource$$Type, arg1: $Direction$$Type): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileItem$PositionFunction$$Type = ((arg0: $BlockSource, arg1: $Direction) => $Position$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileItem$PositionFunction$$Original = $ProjectileItem$PositionFunction;}
declare module "net.minecraft.world.item.HoneyBottleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $HoneyBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyBottleItem$$Type = ($HoneyBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoneyBottleItem$$Original = $HoneyBottleItem;}
declare module "net.minecraft.world.item.component.LodestoneTracker" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $LodestoneTracker extends $Record {
static readonly "CODEC": $Codec<($LodestoneTracker)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($LodestoneTracker)>

constructor(arg0: ($GlobalPos$$Type)?, arg1: boolean)

public "equals"(arg0: any): boolean
public "target"(): $Optional<($GlobalPos)>
public "toString"(): StringJS
public "hashCode"(): integer
public "tick"(arg0: $ServerLevel$$Type): $LodestoneTracker
public "tracked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTracker$$Type = ({"tracked"?: boolean, "target"?: ($GlobalPos$$Type)?}) | ([tracked?: boolean, target?: ($GlobalPos$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LodestoneTracker$$Original = $LodestoneTracker;}
declare module "net.minecraft.world.item.crafting.CampfireCookingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CampfireCookingRecipe$$Type = ($CampfireCookingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CampfireCookingRecipe$$Original = $CampfireCookingRecipe;}
declare module "net.minecraft.world.item.ElytraItem" {
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
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ElytraItem extends $Item implements $Equipable$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $Holder<($SoundEvent)>
public static "isFlyEnabled"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElytraItem$$Type = ($ElytraItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElytraItem$$Original = $ElytraItem;}
declare module "net.minecraft.world.item.PlayerHeadItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $PlayerHeadItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerHeadItem$$Type = ($PlayerHeadItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerHeadItem$$Original = $PlayerHeadItem;}
declare module "net.minecraft.world.item.context.UseOnContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $UseOnContext {
constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockHitResult$$Type)
constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $BlockHitResult$$Type)

public "getLevel"(): $Level
public "getHand"(): $InteractionHand
public "isSecondaryUseActive"(): boolean
public "getClickedFace"(): $Direction
public "isInside"(): boolean
public "getHorizontalDirection"(): $Direction
public "getRotation"(): float
public "getClickedPos"(): $BlockPos
public "getClickLocation"(): $Vec3
public "getPlayer"(): $Player
public "getItemInHand"(): $ItemStack
get "level"(): $Level
get "hand"(): $InteractionHand
get "secondaryUseActive"(): boolean
get "clickedFace"(): $Direction
get "inside"(): boolean
get "horizontalDirection"(): $Direction
get "rotation"(): float
get "clickedPos"(): $BlockPos
get "clickLocation"(): $Vec3
get "player"(): $Player
get "itemInHand"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContext$$Type = ($UseOnContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseOnContext$$Original = $UseOnContext;}
declare module "net.minecraft.world.item.component.Fireworks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion, $FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Fireworks extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($Fireworks)>
static readonly "MAX_EXPLOSIONS": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Fireworks)>

constructor(arg0: integer, arg1: $List$$Type<($FireworkExplosion$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "explosions"(): $List<($FireworkExplosion)>
public "flightDuration"(): integer
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fireworks$$Type = ({"flightDuration"?: integer, "explosions"?: $List$$Type<($FireworkExplosion$$Type)>}) | ([flightDuration?: integer, explosions?: $List$$Type<($FireworkExplosion$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Fireworks$$Original = $Fireworks;}
declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SimpleCraftingRecipeSerializer$Factory$$Type} from "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer$Factory"
import {$CraftingRecipe} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $SimpleCraftingRecipeSerializer$Factory$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCraftingRecipeSerializer$$Type<T> = ($SimpleCraftingRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCraftingRecipeSerializer$$Original<T> = $SimpleCraftingRecipeSerializer<(T)>;}
declare module "net.minecraft.world.item.crafting.TippedArrowRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TippedArrowRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TippedArrowRecipe$$Type = ($TippedArrowRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TippedArrowRecipe$$Original = $TippedArrowRecipe;}
declare module "net.minecraft.world.item.alchemy.Potion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $Potion implements $FeatureElement$$Interface {
static readonly "CODEC": $Codec<($Holder<($Potion)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Potion)>)>

constructor(...arg0: ($MobEffectInstance$$Type)[])
constructor(arg0: StringJS, ...arg1: ($MobEffectInstance$$Type)[])

public static "getName"(arg0: ($Holder$$Type<($Potion$$Type)>)?, arg1: StringJS): StringJS
public "getEffects"(): $List<($MobEffectInstance)>
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $Potion
public "requiredFeatures"(): $FeatureFlagSet
public "hasInstantEffects"(): boolean
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
get "effects"(): $List<($MobEffectInstance)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Potion
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PotionTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Potion$$Type = (Special.Potion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Potion$$Original = $Potion;}
declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer$$Interface<($SmithingTransformRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SmithingTransformRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SmithingTransformRecipe)>
public "codec"(): $MapCodec<($SmithingTransformRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipe$Serializer$$Type = ($SmithingTransformRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTransformRecipe$Serializer$$Original = $SmithingTransformRecipe$Serializer;}
declare module "net.minecraft.world.item.crafting.RecipeHolder" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$RecipeSchema} from "dev.latvian.mods.kubejs.recipe.schema.RecipeSchema"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$ReplacementMatchInfo$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatchInfo"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$RecipeHolderKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeHolderKJS"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $RecipeHolder<T extends $Recipe<(object)>> extends $Record implements $RecipeHolderKJS$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeHolder<(never)>)>

constructor(arg0: $ResourceLocation$$Type, arg1: T)

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "getTypeKey"(): $ResourceKey
public "setGroup"(group: StringJS): void
public "getGroup"(): StringJS
public "replaceInput"(cx: $RecipeScriptContext$$Type, match: $ReplacementMatchInfo$$Type, arg2: any): boolean
public "replaceOutput"(cx: $RecipeScriptContext$$Type, match: $ReplacementMatchInfo$$Type, arg2: any): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(never)>
public "getSchema"(): $RecipeSchema
public "self"(): $RecipeHolder<(never)>
public "getRecipe"(): $Recipe<(never)>
public "hasInput"(cx: $RecipeMatchContext$$Type, match: $ReplacementMatchInfo$$Type): boolean
public "hasOutput"(cx: $RecipeMatchContext$$Type, match: $ReplacementMatchInfo$$Type): boolean
public "getType"(): $ResourceLocation
public "getMod"(): StringJS
get "typeKey"(): $ResourceKey
set "group"(value: StringJS)
get "group"(): StringJS
get "orCreateId"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(never)>
get "schema"(): $RecipeSchema
get "recipe"(): $Recipe<(never)>
get "type"(): $ResourceLocation
get "mod"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeHolder$$Type<T> = ({"id"?: $ResourceLocation$$Type, "value"?: T}) | ([id?: $ResourceLocation$$Type, value?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeHolder$$Original<T> = $RecipeHolder<(T)>;}
declare module "net.minecraft.world.item.FishingRodItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"

export class $FishingRodItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getEnchantmentValue"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FishingRodItem$$Type = ($FishingRodItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FishingRodItem$$Original = $FishingRodItem;}
declare module "net.minecraft.world.item.Item" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$IItemExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IItemExtension"
import {$ItemEnchantments} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$IExtendedItem$$Interface} from "net.mehvahdjukaar.moonlight.core.misc.IExtendedItem"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemStackKey} from "dev.latvian.mods.kubejs.item.ItemStackKey"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKJS$$Interface} from "dev.latvian.mods.kubejs.core.ItemKJS"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map} from "java.util.Map"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Registry} from "net.minecraft.core.Registry"
import {$TagKey} from "net.minecraft.tags.TagKey"

export class $Item implements $FeatureElement$$Interface, $ItemLike$$Interface, $IItemExtension$$Interface, $IExtendedItem$$Interface, $ItemKJS$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescription"(): $Component
public static "getPlayerPOVHitResult"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ClipContext$Fluid$$Type): $BlockHitResult
public "setCraftingRemainder"(arg0: $Item$$Type): void
public "getTypeItemStackKey"(): $ItemStackKey
public "getDefaultMaxStackSize"(): integer
public "getName"(arg0: $ItemStack$$Type): $Component
public "toString"(): StringJS
public static "getId"(arg0: $Item$$Type): Special.Item
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOnRelease"(arg0: $ItemStack$$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "asItem"(): $Item
public "getBreakingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "getItemBuilder"(): $ItemBuilder
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "setItemBuilder"(b: $ItemBuilder$$Type): void
public "setCanRepair"(arg0: boolean): void
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "components"(): $DataComponentMap
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getTypeData"(): $Map
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "setNameKey"(arg0: StringJS): void
public "asHolder"(): $Holder$Reference
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
/**
 * 
 * @deprecated
 */
public "builtInRegistryHolder"(): $Holder$Reference<($Item)>
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "byId"(arg0: integer): $Item
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getCraftingRemainingItem"(): $Item
/**
 * 
 * @deprecated
 */
public "hasCraftingRemainingItem"(): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
/**
 * 
 * @deprecated
 */
public "modifyDefaultComponentsFrom"(arg0: $DataComponentPatch$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getAttackDamageBonus"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public "asIngredient"(): $Ingredient
public "requiredFeatures"(): $FeatureFlagSet
public "isComplex"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "handler$zzm000$moonlight$initializeClient"(arg0: $Consumer$$Type, arg1: $CallbackInfo$$Type): void
public "getId"(): Special.Item
/**
 * 
 * @deprecated
 */
public static "byBlock"(arg0: $Block$$Type): $Item
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
/**
 * 
 * @deprecated
 */
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "getKey"(): $ResourceKey
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
/**
 * 
 * @deprecated
 */
public "getEnchantmentValue"(): integer
/**
 * 
 * @deprecated
 */
public "canFitInsideContainerItems"(): boolean
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "getDescriptionId"(): StringJS
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
public "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
public "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
public "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "getDamage"(arg0: $ItemStack$$Type): integer
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
public "isDamaged"(arg0: $ItemStack$$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
public "getXpRepairRatio"(arg0: $ItemStack$$Type): float
public "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
public "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
public "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
public "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
public "getRegistryId"(): $ResourceKey<($Registry<($Item)>)>
public "getRegistry"(): $Registry<($Item)>
public "getItem"(): $Item
public "getIdLocation"(): $ResourceLocation
public "getTags"(): $List<($ResourceLocation)>
public "getTagKeys"(): $List<($TagKey<($Item)>)>
public "specialEquals"(o: any, shallow: boolean): boolean
public "getMod"(): StringJS
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "description"(): $Component
set "craftingRemainder"(value: $Item$$Type)
get "typeItemStackKey"(): $ItemStackKey
get "defaultMaxStackSize"(): integer
get "breakingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
get "itemBuilder"(): $ItemBuilder
set "itemBuilder"(value: $ItemBuilder$$Type)
set "canRepair"(value: boolean)
get "typeData"(): $Map
set "nameKey"(value: StringJS)
get "craftingRemainingItem"(): $Item
get "complex"(): boolean
get "id"(): Special.Item
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "key"(): $ResourceKey
get "enchantmentValue"(): integer
get "defaultInstance"(): $ItemStack
get "descriptionId"(): StringJS
get "registryId"(): $ResourceKey<($Registry<($Item)>)>
get "registry"(): $Registry<($Item)>
get "item"(): $Item
get "idLocation"(): $ResourceLocation
get "tags"(): $List<($ResourceLocation)>
get "tagKeys"(): $List<($TagKey<($Item)>)>
get "mod"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Item
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ItemTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$$Type = (Special.Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$$Original = $Item;}
declare module "net.minecraft.world.item.enchantment.EnchantedItemInUse" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EnchantedItemInUse extends $Record {
constructor(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type, arg3: $Consumer$$Type<($Item)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "owner"(): $LivingEntity
public "inSlot"(): $EquipmentSlot
public "onBreak"(): $Consumer<($Item)>
public "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemInUse$$Type = ({"onBreak"?: $Consumer$$Type<($Item$$Type)>, "itemStack"?: $ItemStack$$Type, "inSlot"?: $EquipmentSlot$$Type, "owner"?: $LivingEntity$$Type}) | ([onBreak?: $Consumer$$Type<($Item$$Type)>, itemStack?: $ItemStack$$Type, inSlot?: $EquipmentSlot$$Type, owner?: $LivingEntity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedItemInUse$$Original = $EnchantedItemInUse;}
declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SmithingTrimRecipe implements $SmithingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipe$$Type = ($SmithingTrimRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTrimRecipe$$Original = $SmithingTrimRecipe;}
declare module "net.minecraft.world.item.trading.Merchant" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export interface $Merchant$$Interface {
get "tradingPlayer"(): $Player
set "tradingPlayer"(value: $Player$$Type)
get "clientSide"(): boolean
get "villagerXp"(): integer
get "notifyTradeSound"(): $SoundEvent
get "offers"(): $MerchantOffers
}

export class $Merchant implements $Merchant$$Interface {
 "openTradingScreen"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: integer): void
 "showProgressBar"(): boolean
 "getTradingPlayer"(): $Player
 "setTradingPlayer"(arg0: $Player$$Type): void
 "notifyTrade"(arg0: $MerchantOffer$$Type): void
 "overrideOffers"(arg0: $MerchantOffers$$Type): void
 "notifyTradeUpdated"(arg0: $ItemStack$$Type): void
 "isClientSide"(): boolean
 "getVillagerXp"(): integer
 "getNotifyTradeSound"(): $SoundEvent
 "getOffers"(): $MerchantOffers
 "canRestock"(): boolean
 "overrideXp"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Merchant$$Type = ($Merchant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Merchant$$Original = $Merchant;}
declare module "net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer$Factory" {
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"

export interface $SimpleCraftingRecipeSerializer$Factory$$Interface<T extends $CraftingRecipe> {

(arg0: $CraftingBookCategory): T
}

export class $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> implements $SimpleCraftingRecipeSerializer$Factory$$Interface {
 "create"(arg0: $CraftingBookCategory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCraftingRecipeSerializer$Factory$$Type<T> = ((arg0: $CraftingBookCategory) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCraftingRecipeSerializer$Factory$$Original<T> = $SimpleCraftingRecipeSerializer$Factory<(T)>;}
declare module "net.minecraft.world.item.component.WrittenBookContent" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BookContent$$Interface} from "net.minecraft.world.item.component.BookContent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Record} from "java.lang.Record"

export class $WrittenBookContent extends $Record implements $BookContent$$Interface<($Component), ($WrittenBookContent)> {
static readonly "TITLE_LENGTH": integer
static readonly "TITLE_MAX_LENGTH": integer
static readonly "CODEC": $Codec<($WrittenBookContent)>
static readonly "MAX_CRAFTABLE_GENERATION": integer
static readonly "PAGES_CODEC": $Codec<($List<($Filterable<($Component)>)>)>
static readonly "PAGE_LENGTH": integer
static readonly "EMPTY": $WrittenBookContent
static readonly "CONTENT_CODEC": $Codec<($Component)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WrittenBookContent)>
static readonly "MAX_GENERATION": integer

constructor(arg0: $Filterable$$Type<(StringJS)>, arg1: StringJS, arg2: integer, arg3: $List$$Type<($Filterable$$Type<($Component$$Type)>)>, arg4: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "resolve"(arg0: $CommandSourceStack$$Type, arg1: $Player$$Type): $WrittenBookContent
public "resolved"(): boolean
public "author"(): StringJS
public "generation"(): integer
public "markResolved"(): $WrittenBookContent
public "title"(): $Filterable<(StringJS)>
public "pages"(): $List<($Filterable<($Component)>)>
public "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<($Component$$Type)>)>): $WrittenBookContent
public "tryCraftCopy"(): $WrittenBookContent
public "getPages"(arg0: boolean): $List<($Component)>
public static "pagesCodec"(arg0: $Codec$$Type<($Component$$Type)>): $Codec<($List<($Filterable<($Component)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrittenBookContent$$Type = ({"pages"?: $List$$Type<($Filterable$$Type<($Component$$Type)>)>, "resolved"?: boolean, "title"?: $Filterable$$Type<(StringJS)>, "author"?: StringJS, "generation"?: integer}) | ([pages?: $List$$Type<($Filterable$$Type<($Component$$Type)>)>, resolved?: boolean, title?: $Filterable$$Type<(StringJS)>, author?: StringJS, generation?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrittenBookContent$$Original = $WrittenBookContent;}
declare module "net.minecraft.world.item.TippedArrowItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $TippedArrowItem extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TippedArrowItem$$Type = ($TippedArrowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TippedArrowItem$$Original = $TippedArrowItem;}
declare module "net.minecraft.world.item.CompassItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos} from "net.minecraft.core.GlobalPos"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CompassItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getSpawnPosition"(arg0: $Level$$Type): $GlobalPos
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassItem$$Type = ($CompassItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompassItem$$Original = $CompassItem;}
declare module "net.minecraft.world.item.UseAnim" {
import {$Enum} from "java.lang.Enum"

export class $UseAnim extends $Enum<($UseAnim)> {
static readonly "BRUSH": $UseAnim
static readonly "TOOT_HORN": $UseAnim
static readonly "BLOCK": $UseAnim
static readonly "CUSTOM": $UseAnim
static readonly "EAT": $UseAnim
static readonly "BOW": $UseAnim
static readonly "NONE": $UseAnim
static readonly "DRINK": $UseAnim
static readonly "SPEAR": $UseAnim
static readonly "CROSSBOW": $UseAnim
static readonly "SPYGLASS": $UseAnim

public static "values"(): ($UseAnim)[]
public static "valueOf"(arg0: StringJS): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseAnim$$Type = (("none") | ("eat") | ("drink") | ("block") | ("bow") | ("spear") | ("crossbow") | ("spyglass") | ("toot_horn") | ("brush") | ("custom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseAnim$$Original = $UseAnim;}
declare module "net.minecraft.world.item.enchantment.EnchantmentTarget" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnchantmentTarget extends $Enum<($EnchantmentTarget)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($EnchantmentTarget)>
static readonly "ATTACKER": $EnchantmentTarget
static readonly "VICTIM": $EnchantmentTarget
static readonly "DAMAGING_ENTITY": $EnchantmentTarget

public static "values"(): ($EnchantmentTarget)[]
public static "valueOf"(arg0: StringJS): $EnchantmentTarget
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTarget$$Type = (("attacker") | ("damaging_entity") | ("victim"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentTarget$$Original = $EnchantmentTarget;}
declare module "net.minecraft.world.item.crafting.ShieldDecorationRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ShieldDecorationRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldDecorationRecipe$$Type = ($ShieldDecorationRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldDecorationRecipe$$Original = $ShieldDecorationRecipe;}
declare module "net.minecraft.world.item.CreativeModeTab$Output" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"

export interface $CreativeModeTab$Output$$Interface {

(arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility): void
}

export class $CreativeModeTab$Output implements $CreativeModeTab$Output$$Interface {
 "accept"(arg0: $ItemLike$$Type): void
 "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "accept"(arg0: $ItemStack$$Type): void
 "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
 "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Output$$Type = ((arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Output$$Original = $CreativeModeTab$Output;}
declare module "net.minecraft.world.item.crafting.SingleItemRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SingleItemRecipe implements $Recipe$$Interface<($SingleRecipeInput)> {
constructor(arg0: $RecipeType$$Type<(never)>, arg1: $RecipeSerializer$$Type<(never)>, arg2: StringJS, arg3: $Ingredient$$Type, arg4: $ItemStack$$Type)

public "getType"(): $RecipeType<(never)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleItemRecipe$$Type = ($SingleItemRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleItemRecipe$$Original = $SingleItemRecipe;}
declare module "net.minecraft.world.item.component.Tool" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Tool$Rule, $Tool$Rule$$Type} from "net.minecraft.world.item.component.Tool$Rule"
import {$Record} from "java.lang.Record"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Tool extends $Record {
static readonly "CODEC": $Codec<($Tool)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Tool)>

constructor(arg0: $List$$Type<($Tool$Rule$$Type)>, arg1: float, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "rules"(): $List<($Tool$Rule)>
public "isCorrectForDrops"(arg0: $BlockState$$Type): boolean
public "getMiningSpeed"(arg0: $BlockState$$Type): float
public "damagePerBlock"(): integer
public "defaultMiningSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tool$$Type = ({"rules"?: $List$$Type<($Tool$Rule$$Type)>, "defaultMiningSpeed"?: float, "damagePerBlock"?: integer}) | ([rules?: $List$$Type<($Tool$Rule$$Type)>, defaultMiningSpeed?: float, damagePerBlock?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tool$$Original = $Tool;}
declare module "net.minecraft.world.item.crafting.ArmorDyeRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ArmorDyeRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorDyeRecipe$$Type = ($ArmorDyeRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorDyeRecipe$$Original = $ArmorDyeRecipe;}
declare module "net.minecraft.world.item.component.SuspiciousStewEffects$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance} from "net.minecraft.world.effect.MobEffectInstance"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Record} from "java.lang.Record"

export class $SuspiciousStewEffects$Entry extends $Record {
static readonly "CODEC": $Codec<($SuspiciousStewEffects$Entry)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SuspiciousStewEffects$Entry)>

constructor(arg0: $Holder$$Type<($MobEffect)>, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "duration"(): integer
public "effect"(): $Holder<($MobEffect)>
public "createEffectInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewEffects$Entry$$Type = ({"duration"?: integer, "effect"?: $Holder$$Type<($MobEffect)>}) | ([duration?: integer, effect?: $Holder$$Type<($MobEffect)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewEffects$Entry$$Original = $SuspiciousStewEffects$Entry;}
declare module "net.minecraft.world.item.ArrowItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ArrowItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isInfinite"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): boolean
public "createArrow"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractArrow
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrowItem$$Type = ($ArrowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArrowItem$$Original = $ArrowItem;}
declare module "net.minecraft.world.item.component.FireworkExplosion" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FireworkExplosion$Shape, $FireworkExplosion$Shape$$Type} from "net.minecraft.world.item.component.FireworkExplosion$Shape"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FireworkExplosion extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($FireworkExplosion)>
static readonly "DEFAULT": $FireworkExplosion
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($FireworkExplosion)>
static readonly "COLOR_LIST_CODEC": $Codec<($IntList)>

constructor(shape: $FireworkExplosion$Shape$$Type, colors: $IntList$$Type, fadeColors: $IntList$$Type, hasTrail: boolean, hasTwinkle: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "shape"(): $FireworkExplosion$Shape
public "colors"(): $IntList
public "withFadeColors"(arg0: $IntList$$Type): $FireworkExplosion
public "hasTrail"(): boolean
public "hasTwinkle"(): boolean
public "fadeColors"(): $IntList
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "addShapeNameTooltip"(arg0: $Consumer$$Type<($Component)>): void
public "addAdditionalTooltip"(arg0: $Consumer$$Type<($Component)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkExplosion$$Type = ({"fadeColors"?: $IntList$$Type, "shape"?: $FireworkExplosion$Shape$$Type, "hasTwinkle"?: boolean, "colors"?: $IntList$$Type, "hasTrail"?: boolean}) | ([fadeColors?: $IntList$$Type, shape?: $FireworkExplosion$Shape$$Type, hasTwinkle?: boolean, colors?: $IntList$$Type, hasTrail?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkExplosion$$Original = $FireworkExplosion;}
declare module "net.minecraft.world.item.DiscFragmentItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $DiscFragmentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDisplayName"(): $MutableComponent
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "displayName"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscFragmentItem$$Type = ($DiscFragmentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiscFragmentItem$$Original = $DiscFragmentItem;}
declare module "net.minecraft.world.item.DiggerItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DiggerItemKJS$$Interface} from "dev.latvian.mods.kubejs.core.DiggerItemKJS"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TieredItem} from "net.minecraft.world.item.TieredItem"

export class $DiggerItem extends $TieredItem implements $DiggerItemKJS$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $TagKey$$Type<($Block)>, arg2: $Item$Properties$$Type)

public static "createAttributes"(arg0: $Tier$$Type, arg1: float, arg2: float): $ItemAttributeModifiers
public "kjs$getMineableTag"(): $TagKey
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "handler$bdg000$kubejs$init"(ci: $CallbackInfo$$Type, blocks: $TagKey$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiggerItem$$Type = ($DiggerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DiggerItem$$Original = $DiggerItem;}
declare module "net.minecraft.world.item.crafting.BannerDuplicateRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BannerDuplicateRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BannerDuplicateRecipe$$Type = ($BannerDuplicateRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BannerDuplicateRecipe$$Original = $BannerDuplicateRecipe;}
declare module "net.minecraft.world.item.crafting.CraftingInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$StackedContents} from "net.minecraft.world.entity.player.StackedContents"

export class $CraftingInput implements $RecipeInput$$Interface {
static readonly "EMPTY": $CraftingInput

public "size"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>): $CraftingInput
public "width"(): integer
public "getItem"(arg0: integer, arg1: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "height"(): integer
public "ingredientCount"(): integer
public "stackedContents"(): $StackedContents
public "items"(): $List<($ItemStack)>
public static "ofPositioned"(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>): $CraftingInput$Positioned
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingInput$$Type = ($CraftingInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingInput$$Original = $CraftingInput;}
declare module "net.minecraft.world.item.CreativeModeTab$Type" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$Type extends $Enum<($CreativeModeTab$Type)> {
static readonly "INVENTORY": $CreativeModeTab$Type
static readonly "SEARCH": $CreativeModeTab$Type
static readonly "CATEGORY": $CreativeModeTab$Type
static readonly "HOTBAR": $CreativeModeTab$Type

public static "values"(): ($CreativeModeTab$Type)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$Type$$Type = (("category") | ("inventory") | ("hotbar") | ("search"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$Type$$Original = $CreativeModeTab$Type;}
declare module "net.minecraft.world.item.SnowballItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $SnowballItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnowballItem$$Type = ($SnowballItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnowballItem$$Original = $SnowballItem;}
declare module "net.minecraft.world.item.AxeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AxeItem extends $DiggerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "getAxeStrippingState"(arg0: $BlockState$$Type): $BlockState
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItem$$Type = ($AxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AxeItem$$Original = $AxeItem;}
declare module "net.minecraft.world.item.EndCrystalItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $EndCrystalItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndCrystalItem$$Type = ($EndCrystalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndCrystalItem$$Original = $EndCrystalItem;}
declare module "net.minecraft.world.item.DyeColor" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$KubeColor$$Interface} from "dev.latvian.mods.kubejs.color.KubeColor"

export class $DyeColor extends $Enum<($DyeColor)> implements $StringRepresentable$$Interface, $KubeColor$$Interface {
static readonly "WHITE": $DyeColor
static readonly "GRAY": $DyeColor
static readonly "CODEC": $StringRepresentable$EnumCodec<($DyeColor)>
static readonly "BLUE": $DyeColor
static readonly "PURPLE": $DyeColor
static readonly "GREEN": $DyeColor
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($DyeColor)>
static readonly "RED": $DyeColor
static readonly "PINK": $DyeColor
static readonly "LIGHT_GRAY": $DyeColor
static readonly "LIGHT_BLUE": $DyeColor
static readonly "LIME": $DyeColor
static readonly "MAGENTA": $DyeColor
static readonly "BLACK": $DyeColor
static readonly "YELLOW": $DyeColor
static readonly "CYAN": $DyeColor
static readonly "BROWN": $DyeColor
static readonly "ORANGE": $DyeColor

public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($DyeColor)[]
public static "valueOf"(arg0: StringJS): $DyeColor
public "getId"(): integer
public "getTag"(): $TagKey<($Item)>
public static "byName"(arg0: StringJS, arg1: $DyeColor$$Type): $DyeColor
public "getFireworkColor"(): integer
public static "byFireworkColor"(arg0: integer): $DyeColor
public "getArgb"(): integer
public "getFireworkRGB"(): integer
public "getTextColor"(): integer
public "getMapColor"(): $MapColor
public "getTextureDiffuseColor"(): integer
public static "byId"(arg0: integer): $DyeColor
public "getRgb"(): integer
public "getDyedTag"(): $TagKey<($Item)>
public "getSerializedName"(): StringJS
public static "getColor"(arg0: $ItemStack$$Type): $DyeColor
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public "toHexString"(): StringJS
public "serialize"(): StringJS
public "createTextColor"(): $TextColor
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "name"(): StringJS
get "id"(): integer
get "tag"(): $TagKey<($Item)>
get "fireworkColor"(): integer
get "argb"(): integer
get "fireworkRGB"(): integer
get "textColor"(): integer
get "mapColor"(): $MapColor
get "textureDiffuseColor"(): integer
get "rgb"(): integer
get "dyedTag"(): $TagKey<($Item)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeColor$$Type = (("white") | ("orange") | ("magenta") | ("light_blue") | ("yellow") | ("lime") | ("pink") | ("gray") | ("light_gray") | ("cyan") | ("purple") | ("blue") | ("brown") | ("green") | ("red") | ("black"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeColor$$Original = $DyeColor;}
declare module "net.minecraft.world.item.crafting.CookingBookCategory" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CookingBookCategory extends $Enum<($CookingBookCategory)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($CookingBookCategory)>
static readonly "BLOCKS": $CookingBookCategory
static readonly "MISC": $CookingBookCategory
static readonly "FOOD": $CookingBookCategory

public static "values"(): ($CookingBookCategory)[]
public static "valueOf"(arg0: StringJS): $CookingBookCategory
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingBookCategory$$Type = (("food") | ("blocks") | ("misc"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CookingBookCategory$$Original = $CookingBookCategory;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Constant" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $Codec<($LevelBasedValue$Constant)>
static readonly "TYPED_CODEC": $MapCodec<($LevelBasedValue$Constant)>

constructor(arg0: float)

public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): float
public "codec"(): $MapCodec<($LevelBasedValue$Constant)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Constant$$Type = ({"value"?: float}) | ([value?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Constant$$Original = $LevelBasedValue$Constant;}
declare module "net.minecraft.world.item.EitherHolder" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $EitherHolder<T> extends $Record {
constructor(arg0: ($Holder$$Type<(T)>)?, arg1: $ResourceKey$$Type<(T)>)
constructor(arg0: $ResourceKey$$Type<(T)>)
constructor(arg0: $Holder$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceKey<(T)>
public "holder"(): $Optional<($Holder<(T)>)>
public "unwrap"(arg0: $Registry$$Type<(T)>): $Optional<(T)>
public "unwrap"(arg0: $HolderLookup$Provider$$Type): $Optional<($Holder<(T)>)>
public static "streamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), ($Holder$$Type<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($EitherHolder<(T)>)>
public "asEither"(): $Either<($Holder<(T)>), ($ResourceKey<(T)>)>
public static "fromEither"<T>(arg0: $Either$$Type<($Holder$$Type<(T)>), ($ResourceKey$$Type<(T)>)>): $EitherHolder<(T)>
public static "codec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>): $Codec<($EitherHolder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EitherHolder$$Type<T> = ({"holder"?: ($Holder$$Type<(T)>)?, "key"?: $ResourceKey$$Type<(T)>}) | ([holder?: ($Holder$$Type<(T)>)?, key?: $ResourceKey$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EitherHolder$$Original<T> = $EitherHolder<(T)>;}
declare module "net.minecraft.world.item.LingeringPotionItem" {
import {$ThrowablePotionItem} from "net.minecraft.world.item.ThrowablePotionItem"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $LingeringPotionItem extends $ThrowablePotionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LingeringPotionItem$$Type = ($LingeringPotionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LingeringPotionItem$$Original = $LingeringPotionItem;}
declare module "net.minecraft.world.item.alchemy.PotionContents" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $PotionContents extends $Record {
static readonly "CODEC": $Codec<($PotionContents)>
static readonly "EMPTY": $PotionContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PotionContents)>

constructor(arg0: $Holder$$Type<($Potion)>)
constructor(potion: ($Holder$$Type<($Potion$$Type)>)?, customColor: (integer)?, customEffects: $List$$Type<($MobEffectInstance$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "is"(arg0: $Holder$$Type<($Potion)>): boolean
public "potion"(): $Optional<($Holder<($Potion)>)>
public "addPotionTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: float, arg2: float): void
public static "addPotionTooltip"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>, arg1: $Consumer$$Type<($Component)>, arg2: float, arg3: float): void
public "forEachEffect"(arg0: $Consumer$$Type<($MobEffectInstance)>): void
public "withEffectAdded"(arg0: $MobEffectInstance$$Type): $PotionContents
public "withPotion"(arg0: $Holder$$Type<($Potion)>): $PotionContents
public "hasEffects"(): boolean
public static "getColor"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>): integer
public static "getColor"(arg0: $Holder$$Type<($Potion)>): integer
public "getColor"(): integer
public static "createItemStack"(arg0: $Item$$Type, arg1: $Holder$$Type<($Potion)>): $ItemStack
public "customColor"(): $Optional<(integer)>
public "customEffects"(): $List<($MobEffectInstance)>
public "getAllEffects"(): $Iterable<($MobEffectInstance)>
public static "getColorOptional"(arg0: $Iterable$$Type<($MobEffectInstance$$Type)>): $OptionalInt
get "color"(): integer
get "allEffects"(): $Iterable<($MobEffectInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionContents$$Type = ({"customColor"?: (integer)?, "customEffects"?: $List$$Type<($MobEffectInstance$$Type)>, "potion"?: ($Holder$$Type<($Potion$$Type)>)?}) | ([customColor?: (integer)?, customEffects?: $List$$Type<($MobEffectInstance$$Type)>, potion?: ($Holder$$Type<($Potion$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionContents$$Original = $PotionContents;}
declare module "net.minecraft.world.item.ArmorItem$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ArmorItem$Type extends $Enum<($ArmorItem$Type)> implements $StringRepresentable$$Interface {
static readonly "LEGGINGS": $ArmorItem$Type
static readonly "HELMET": $ArmorItem$Type
static readonly "CODEC": $Codec<($ArmorItem$Type)>
static readonly "CHESTPLATE": $ArmorItem$Type
static readonly "BOOTS": $ArmorItem$Type
static readonly "BODY": $ArmorItem$Type

public "getName"(): StringJS
public static "values"(): ($ArmorItem$Type)[]
public static "valueOf"(arg0: StringJS): $ArmorItem$Type
public "getSlot"(): $EquipmentSlot
public "hasTrims"(): boolean
public "getDurability"(arg0: integer): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
get "name"(): StringJS
get "slot"(): $EquipmentSlot
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorItem$Type$$Type = (("helmet") | ("chestplate") | ("leggings") | ("boots") | ("body"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorItem$Type$$Original = $ArmorItem$Type;}
declare module "net.minecraft.world.item.BrushItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $BrushItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "ANIMATION_DURATION": integer
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrushItem$$Type = ($BrushItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrushItem$$Original = $BrushItem;}
declare module "net.minecraft.world.item.ItemFrameItem" {
import {$HangingEntityItem} from "net.minecraft.world.item.HangingEntityItem"
import {$HangingEntity, $HangingEntity$$Type} from "net.minecraft.world.entity.decoration.HangingEntity"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $ItemFrameItem extends $HangingEntityItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EntityType<($HangingEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EntityType$$Type<($HangingEntity$$Type)>, arg1: $Item$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameItem$$Type = ($ItemFrameItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameItem$$Original = $ItemFrameItem;}
declare module "net.minecraft.world.item.enchantment.providers.EnchantmentProvider" {
import {$ItemEnchantments$Mutable$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $EnchantmentProvider$$Interface {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnchantmentProvider
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentProviderTag
}

export class $EnchantmentProvider implements $EnchantmentProvider$$Interface {
static readonly "DIRECT_CODEC": $Codec<($EnchantmentProvider)>

 "enchant"(arg0: $ItemStack$$Type, arg1: $ItemEnchantments$Mutable$$Type, arg2: $RandomSource$$Type, arg3: $DifficultyInstance$$Type): void
 "codec"(): $MapCodec<($EnchantmentProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentProvider$$Type = (Special.EnchantmentProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentProvider$$Original = $EnchantmentProvider;}
declare module "net.minecraft.world.item.InstrumentItem" {
import {$Instrument$$Type} from "net.minecraft.world.item.Instrument"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $InstrumentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $TagKey$$Type<($Instrument)>)

public static "create"(arg0: $Item$$Type, arg1: $Holder$$Type<($Instrument)>): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public static "setRandom"(arg0: $ItemStack$$Type, arg1: $TagKey$$Type<($Instrument)>, arg2: $RandomSource$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstrumentItem$$Type = ($InstrumentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstrumentItem$$Original = $InstrumentItem;}
declare module "net.minecraft.world.item.enchantment.providers.SingleEnchantment" {
import {$ItemEnchantments$Mutable$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentProvider$$Interface} from "net.minecraft.world.item.enchantment.providers.EnchantmentProvider"
import {$DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $SingleEnchantment extends $Record implements $EnchantmentProvider$$Interface {
static readonly "CODEC": $MapCodec<($SingleEnchantment)>

constructor(arg0: $Holder$$Type<($Enchantment)>, arg1: $IntProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "level"(): $IntProvider
public "enchantment"(): $Holder<($Enchantment)>
public "enchant"(arg0: $ItemStack$$Type, arg1: $ItemEnchantments$Mutable$$Type, arg2: $RandomSource$$Type, arg3: $DifficultyInstance$$Type): void
public "codec"(): $MapCodec<($SingleEnchantment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleEnchantment$$Type = ({"level"?: $IntProvider$$Type, "enchantment"?: $Holder$$Type<($Enchantment)>}) | ([level?: $IntProvider$$Type, enchantment?: $Holder$$Type<($Enchantment)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleEnchantment$$Original = $SingleEnchantment;}
declare module "net.minecraft.world.item.BannerItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $BannerItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "appendHoverTextFromBannerBlockEntityTag"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getColor"(): $DyeColor
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BannerItem$$Type = ($BannerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BannerItem$$Original = $BannerItem;}
declare module "net.minecraft.world.item.crafting.Ingredient$Value" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $Ingredient$Value$$Interface {

(): $Collection$$Type<($ItemStack$$Type)>
get "items"(): $Collection<($ItemStack)>
}

export class $Ingredient$Value implements $Ingredient$Value$$Interface {
static readonly "CODEC": $Codec<($Ingredient$Value)>
static readonly "MAP_CODEC": $MapCodec<($Ingredient$Value)>

 "getItems"(): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ingredient$Value$$Type = (() => $Collection$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ingredient$Value$$Original = $Ingredient$Value;}
declare module "net.minecraft.world.item.trading.MerchantOffer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemCost, $ItemCost$$Type} from "net.minecraft.world.item.trading.ItemCost"

export class $MerchantOffer {
static readonly "CODEC": $Codec<($MerchantOffer)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MerchantOffer)>

constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer)
constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: float)
constructor(arg0: $ItemCost$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: float)
constructor(arg0: $ItemCost$$Type, arg1: ($ItemCost$$Type)?, arg2: $ItemStack$$Type, arg3: integer, arg4: integer, arg5: float)

public "copy"(): $MerchantOffer
public "take"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getResult"(): $ItemStack
public "getCostA"(): $ItemStack
public "getCostB"(): $ItemStack
public static "createFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): $MerchantOffer
public "assemble"(): $ItemStack
public "needsRestock"(): boolean
public "getPriceMultiplier"(): float
public "updateDemand"(): void
public "getBaseCostA"(): $ItemStack
public "shouldRewardExp"(): boolean
public "getItemCostA"(): $ItemCost
public "increaseUses"(): void
public "getItemCostB"(): $Optional<($ItemCost)>
public "setSpecialPriceDiff"(arg0: integer): void
public "getSpecialPriceDiff"(): integer
public "getXp"(): integer
public "isOutOfStock"(): boolean
public "resetSpecialPriceDiff"(): void
public "addToSpecialPriceDiff"(arg0: integer): void
public "getUses"(): integer
public "satisfiedBy"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "setToOutOfStock"(): void
public "getMaxUses"(): integer
public "getDemand"(): integer
public "resetUses"(): void
get "result"(): $ItemStack
get "costA"(): $ItemStack
get "costB"(): $ItemStack
get "priceMultiplier"(): float
get "baseCostA"(): $ItemStack
get "itemCostA"(): $ItemCost
get "itemCostB"(): $Optional<($ItemCost)>
set "specialPriceDiff"(value: integer)
get "specialPriceDiff"(): integer
get "xp"(): integer
get "outOfStock"(): boolean
get "uses"(): integer
get "toOutOfStock"(): void
get "maxUses"(): integer
get "demand"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOffer$$Type = ($MerchantOffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantOffer$$Original = $MerchantOffer;}
declare module "net.minecraft.world.item.crafting.Recipe" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$WithConditions} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $Recipe$$Interface<T extends $RecipeInput> {
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}

export class $Recipe<T extends $RecipeInput> implements $Recipe$$Interface {
static readonly "CODEC": $Codec<($Recipe<(never)>)>
static readonly "CONDITIONAL_CODEC": $Codec<($Optional<($WithConditions<($Recipe<(never)>)>)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Recipe<(never)>)>

 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Recipe$$Type<T> = ($Recipe<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Recipe$$Original<T> = $Recipe<(T)>;}
declare module "net.minecraft.world.item.BookItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"

export class $BookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getEnchantmentValue"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookItem$$Type = ($BookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookItem$$Original = $BookItem;}
declare module "net.minecraft.world.item.FireworkStarItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $FireworkStarItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkStarItem$$Type = ($FireworkStarItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkStarItem$$Original = $FireworkStarItem;}
declare module "net.minecraft.world.item.JukeboxPlayable" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$JukeboxSong, $JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EitherHolder, $EitherHolder$$Type} from "net.minecraft.world.item.EitherHolder"
import {$Record} from "java.lang.Record"

export class $JukeboxPlayable extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($JukeboxPlayable)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxPlayable)>

constructor(arg0: $EitherHolder$$Type<($JukeboxSong$$Type)>, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "withTooltip"(arg0: boolean): $JukeboxPlayable
public "song"(): $EitherHolder<($JukeboxSong)>
public static "tryInsertIntoJukebox"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): $ItemInteractionResult
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "showInTooltip"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxPlayable$$Type = ({"showInTooltip"?: boolean, "song"?: $EitherHolder$$Type<($JukeboxSong$$Type)>}) | ([showInTooltip?: boolean, song?: $EitherHolder$$Type<($JukeboxSong$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxPlayable$$Original = $JukeboxPlayable;}
declare module "net.minecraft.world.item.DispensibleContainerItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDispensibleContainerItemExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IDispensibleContainerItemExtension"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $DispensibleContainerItem$$Interface extends $IDispensibleContainerItemExtension$$Interface {

(arg0: $Player, arg1: $Level, arg2: $BlockPos, arg3: $BlockHitResult): boolean
}

export class $DispensibleContainerItem implements $DispensibleContainerItem$$Interface {
/**
 * 
 * @deprecated
 */
 "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type): boolean
 "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
 "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispensibleContainerItem$$Type = ((arg0: $Player, arg1: $Level, arg2: $BlockPos, arg3: $BlockHitResult) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispensibleContainerItem$$Original = $DispensibleContainerItem;}
declare module "net.minecraft.world.item.SpawnEggItem" {
import {$Iterable} from "java.lang.Iterable"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SpawnEggItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityType$$Type<($Mob$$Type)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type)

public "getType"(arg0: $ItemStack$$Type): $EntityType<(never)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "spawnsEntity"(arg0: $ItemStack$$Type, arg1: $EntityType$$Type<(never)>): boolean
public static "byId"(arg0: $EntityType$$Type<(never)>): $SpawnEggItem
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "spawnOffspringFromSpawnEgg"(arg0: $Player$$Type, arg1: $Mob$$Type, arg2: $EntityType$$Type<($Mob$$Type)>, arg3: $ServerLevel$$Type, arg4: $Vec3$$Type, arg5: $ItemStack$$Type): $Optional<($Mob)>
public "requiredFeatures"(): $FeatureFlagSet
public static "eggs"(): $Iterable<($SpawnEggItem)>
public "getColor"(arg0: integer): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEggItem$$Type = ($SpawnEggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnEggItem$$Original = $SpawnEggItem;}
declare module "net.minecraft.world.item.crafting.StonecutterRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleItemRecipe} from "net.minecraft.world.item.crafting.SingleItemRecipe"

export class $StonecutterRecipe extends $SingleItemRecipe {
constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getToastSymbol"(): $ItemStack
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterRecipe$$Type = ($StonecutterRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterRecipe$$Original = $StonecutterRecipe;}
declare module "net.minecraft.world.item.EnderpearlItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $EnderpearlItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderpearlItem$$Type = ($EnderpearlItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderpearlItem$$Original = $EnderpearlItem;}
declare module "net.minecraft.world.item.FireworkRocketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FireworkRocketItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "CRAFTABLE_DURATIONS": (byte)[]
static readonly "ROCKET_PLACEMENT_OFFSET": double
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkRocketItem$$Type = ($FireworkRocketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkRocketItem$$Original = $FireworkRocketItem;}
declare module "net.minecraft.world.item.crafting.CraftingRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $CraftingRecipe$$Interface extends $Recipe$$Interface<($CraftingInput)> {
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}

export class $CraftingRecipe implements $CraftingRecipe$$Interface {
 "getType"(): $RecipeType<(never)>
 "category"(): $CraftingBookCategory
 "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
 "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingRecipe$$Type = ($CraftingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingRecipe$$Original = $CraftingRecipe;}
declare module "net.minecraft.world.item.crafting.SuspiciousStewRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SuspiciousStewRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewRecipe$$Type = ($SuspiciousStewRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewRecipe$$Original = $SuspiciousStewRecipe;}
declare module "net.minecraft.world.item.EnderEyeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $EnderEyeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderEyeItem$$Type = ($EnderEyeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderEyeItem$$Original = $EnderEyeItem;}
declare module "net.minecraft.world.item.SpyglassItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpyglassItem extends $Item {
static readonly "USE_DURATION": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "ZOOM_FOV_MODIFIER": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpyglassItem$$Type = ($SpyglassItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpyglassItem$$Original = $SpyglassItem;}
declare module "net.minecraft.world.item.component.BlockItemStateProperties" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockItemStateProperties extends $Record {
static readonly "CODEC": $Codec<($BlockItemStateProperties)>
static readonly "EMPTY": $BlockItemStateProperties
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockItemStateProperties)>

constructor(arg0: $Map$$Type<(StringJS), (StringJS)>)

public "get"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "apply"(arg0: $BlockState$$Type): $BlockState
public "properties"(): $Map<(StringJS), (StringJS)>
public "with"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: $BlockState$$Type): $BlockItemStateProperties
public "with"<T extends $Comparable<(object)>>(arg0: $Property$$Type<(T)>, arg1: T): $BlockItemStateProperties
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemStateProperties$$Type = ({"properties"?: $Map$$Type<(StringJS), (StringJS)>}) | ([properties?: $Map$$Type<(StringJS), (StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItemStateProperties$$Original = $BlockItemStateProperties;}
declare module "net.minecraft.world.item.component.SeededContainerLoot" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Record} from "java.lang.Record"

export class $SeededContainerLoot extends $Record {
static readonly "CODEC": $Codec<($SeededContainerLoot)>

constructor(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "seed"(): long
public "lootTable"(): $ResourceKey<($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeededContainerLoot$$Type = ({"lootTable"?: $ResourceKey$$Type<($LootTable)>, "seed"?: long}) | ([lootTable?: $ResourceKey$$Type<($LootTable)>, seed?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeededContainerLoot$$Original = $SeededContainerLoot;}
declare module "net.minecraft.world.item.ItemCooldowns" {
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemCooldowns {
constructor()

public "tick"(): void
public "removeCooldown"(arg0: $Item$$Type): void
public "isOnCooldown"(arg0: $Item$$Type): boolean
public "addCooldown"(arg0: $Item$$Type, arg1: integer): void
public "getCooldownPercent"(arg0: $Item$$Type, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCooldowns$$Type = ($ItemCooldowns);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCooldowns$$Original = $ItemCooldowns;}
declare module "net.minecraft.world.item.component.DebugStickState" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $DebugStickState extends $Record {
static readonly "CODEC": $Codec<($DebugStickState)>
static readonly "EMPTY": $DebugStickState

constructor(arg0: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $Map<($Holder<($Block)>), ($Property<(never)>)>
public "withProperty"(arg0: $Holder$$Type<($Block)>, arg1: $Property$$Type<(never)>): $DebugStickState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugStickState$$Type = ({"properties"?: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>}) | ([properties?: $Map$$Type<($Holder$$Type<($Block$$Type)>), ($Property$$Type<(never)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugStickState$$Original = $DebugStickState;}
declare module "net.minecraft.world.item.SplashPotionItem" {
import {$ThrowablePotionItem} from "net.minecraft.world.item.ThrowablePotionItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $SplashPotionItem extends $ThrowablePotionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashPotionItem$$Type = ($SplashPotionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashPotionItem$$Original = $SplashPotionItem;}
declare module "net.minecraft.world.item.AdventureModePredicate" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPredicate$$Type} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$List$$Type} from "java.util.List"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AdventureModePredicate {
static readonly "CAN_PLACE_HEADER": $Component
static readonly "CODEC": $Codec<($AdventureModePredicate)>
static readonly "CAN_BREAK_HEADER": $Component
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AdventureModePredicate)>

constructor(arg0: $List$$Type<($BlockPredicate$$Type)>, arg1: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockInWorld$$Type): boolean
public "withTooltip"(arg0: boolean): $AdventureModePredicate
public "addToTooltip"(arg0: $Consumer$$Type<($Component)>): void
public "showInTooltip"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdventureModePredicate$$Type = ($AdventureModePredicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdventureModePredicate$$Original = $AdventureModePredicate;}
declare module "net.minecraft.world.item.SpectralArrowItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpectralArrowItem extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "createArrow"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractArrow
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectralArrowItem$$Type = ($SpectralArrowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectralArrowItem$$Original = $SpectralArrowItem;}
declare module "net.minecraft.world.item.SolidBucketItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$DispensibleContainerItem$$Interface} from "net.minecraft.world.item.DispensibleContainerItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SolidBucketItem extends $BlockItem implements $DispensibleContainerItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $SoundEvent$$Type, arg2: $Item$Properties$$Type)

public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getDescriptionId"(): StringJS
public "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidBucketItem$$Type = ($SolidBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidBucketItem$$Original = $SolidBucketItem;}
declare module "net.minecraft.world.item.Instrument" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $Instrument extends $Record {
static readonly "CODEC": $Codec<($Holder<($Instrument)>)>
static readonly "DIRECT_CODEC": $Codec<($Instrument)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Instrument)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Instrument)>)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: integer, arg2: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "range"(): float
public "soundEvent"(): $Holder<($SoundEvent)>
public "useDuration"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Instrument
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.InstrumentTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instrument$$Type = (Special.Instrument) | ({"range"?: float, "useDuration"?: integer, "soundEvent"?: $Holder$$Type<($SoundEvent)>}) | ([range?: float, useDuration?: integer, soundEvent?: $Holder$$Type<($SoundEvent)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instrument$$Original = $Instrument;}
declare module "net.minecraft.world.item.CreativeModeTab$TabVisibility" {
import {$Enum} from "java.lang.Enum"

export class $CreativeModeTab$TabVisibility extends $Enum<($CreativeModeTab$TabVisibility)> {
static readonly "PARENT_AND_SEARCH_TABS": $CreativeModeTab$TabVisibility
static readonly "PARENT_TAB_ONLY": $CreativeModeTab$TabVisibility
static readonly "SEARCH_TAB_ONLY": $CreativeModeTab$TabVisibility

public static "values"(): ($CreativeModeTab$TabVisibility)[]
public static "valueOf"(arg0: StringJS): $CreativeModeTab$TabVisibility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$TabVisibility$$Type = (("parent_and_search_tabs") | ("parent_tab_only") | ("search_tab_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$TabVisibility$$Original = $CreativeModeTab$TabVisibility;}
declare module "net.minecraft.world.item.JukeboxSong" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $JukeboxSong extends $Record {
static readonly "CODEC": $Codec<($Holder<($JukeboxSong)>)>
static readonly "DIRECT_CODEC": $Codec<($JukeboxSong)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxSong)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($JukeboxSong)>)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $Component$$Type, arg2: float, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "description"(): $Component
public "soundEvent"(): $Holder<($SoundEvent)>
public static "fromStack"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): $Optional<($Holder<($JukeboxSong)>)>
public "lengthInSeconds"(): float
public "hasFinished"(arg0: long): boolean
public "lengthInTicks"(): integer
public "comparatorOutput"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.JukeboxSong
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.JukeboxSongTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSong$$Type = (Special.JukeboxSong) | ({"comparatorOutput"?: integer, "lengthInSeconds"?: float, "description"?: $Component$$Type, "soundEvent"?: $Holder$$Type<($SoundEvent)>}) | ([comparatorOutput?: integer, lengthInSeconds?: float, description?: $Component$$Type, soundEvent?: $Holder$$Type<($SoundEvent)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSong$$Original = $JukeboxSong;}
declare module "net.minecraft.world.item.BlockItem" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$IExtendedItem$$Interface} from "net.mehvahdjukaar.moonlight.core.misc.IExtendedItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BlockItem extends $Item implements $IExtendedItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

/**
 * 
 * @deprecated
 */
public "removeFromBlockToItemMap"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "updatePlacementContext"(arg0: $BlockPlaceContext$$Type): $BlockPlaceContext
public static "updateCustomBlockEntityTag"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "getBlock"(): $Block
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "requiredFeatures"(): $FeatureFlagSet
public static "setBlockEntityData"(arg0: $ItemStack$$Type, arg1: $BlockEntityType$$Type<(never)>, arg2: $CompoundTag$$Type): void
public "canFitInsideContainerItems"(): boolean
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "block"(): $Block
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItem$$Type = ($BlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItem$$Original = $BlockItem;}
declare module "net.minecraft.world.item.ArmorStandItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ArmorStandItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorStandItem$$Type = ($ArmorStandItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorStandItem$$Original = $ArmorStandItem;}
declare module "net.minecraft.world.item.armortrim.TrimMaterial" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TrimMaterial extends $Record {
static readonly "CODEC": $Codec<($Holder<($TrimMaterial)>)>
static readonly "DIRECT_CODEC": $Codec<($TrimMaterial)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TrimMaterial)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($TrimMaterial)>)>

constructor(arg0: StringJS, arg1: $Holder$$Type<($Item)>, arg2: float, arg3: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, arg4: $Component$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: StringJS, arg1: $Item$$Type, arg2: float, arg3: $Component$$Type, arg4: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>): $TrimMaterial
public "description"(): $Component
public "ingredient"(): $Holder<($Item)>
public "itemModelIndex"(): float
public "assetName"(): StringJS
public "overrideArmorMaterials"(): $Map<($Holder<($ArmorMaterial)>), (StringJS)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TrimMaterial
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TrimMaterialTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrimMaterial$$Type = (Special.TrimMaterial) | ({"assetName"?: StringJS, "description"?: $Component$$Type, "ingredient"?: $Holder$$Type<($Item)>, "overrideArmorMaterials"?: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, "itemModelIndex"?: float}) | ([assetName?: StringJS, description?: $Component$$Type, ingredient?: $Holder$$Type<($Item)>, overrideArmorMaterials?: $Map$$Type<($Holder$$Type<($ArmorMaterial$$Type)>), (StringJS)>, itemModelIndex?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrimMaterial$$Original = $TrimMaterial;}
declare module "net.minecraft.world.item.EmptyMapItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ComplexItem} from "net.minecraft.world.item.ComplexItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $EmptyMapItem extends $ComplexItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyMapItem$$Type = ($EmptyMapItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyMapItem$$Original = $EmptyMapItem;}
declare module "net.minecraft.world.item.BucketItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DispensibleContainerItem$$Interface} from "net.minecraft.world.item.DispensibleContainerItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BucketItem extends $Item implements $DispensibleContainerItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Fluid$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
/**
 * 
 * @deprecated
 */
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type): boolean
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
public "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
public static "getEmptySuccessItem"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketItem$$Type = ($BucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BucketItem$$Original = $BucketItem;}
declare module "net.minecraft.world.item.AnimalArmorItem" {
import {$ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AnimalArmorItem$BodyType, $AnimalArmorItem$BodyType$$Type} from "net.minecraft.world.item.AnimalArmorItem$BodyType"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$Supplier} from "java.util.function.Supplier"
import {$ArmorItem} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $AnimalArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $AnimalArmorItem$BodyType$$Type, arg2: boolean, arg3: $Item$Properties$$Type)

public "getBreakingSound"(): $SoundEvent
public "getOverlayTexture"(): $ResourceLocation
public "getBodyType"(): $AnimalArmorItem$BodyType
public "getTexture"(): $ResourceLocation
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "breakingSound"(): $SoundEvent
get "overlayTexture"(): $ResourceLocation
get "bodyType"(): $AnimalArmorItem$BodyType
get "texture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalArmorItem$$Type = ($AnimalArmorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalArmorItem$$Original = $AnimalArmorItem;}
declare module "net.minecraft.world.item.alchemy.PotionBrewing" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IBrewingRecipe} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PotionBrewing {
static readonly "BREWING_TIME_SECONDS": integer
static readonly "EMPTY": $PotionBrewing

/**
 * 
 * @deprecated
 */
public static "bootstrap"(arg0: $FeatureFlagSet$$Type): $PotionBrewing
public static "bootstrap"(arg0: $FeatureFlagSet$$Type, arg1: $RegistryAccess$$Type): $PotionBrewing
public "mix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "hasPotionMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "hasContainerMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "addVanillaMixes"(arg0: $PotionBrewing$Builder$$Type): void
public "isPotionIngredient"(arg0: $ItemStack$$Type): boolean
public "hasMix"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isInput"(arg0: $ItemStack$$Type): boolean
public "isIngredient"(arg0: $ItemStack$$Type): boolean
public "isBrewablePotion"(arg0: $Holder$$Type<($Potion)>): boolean
public "getRecipes"(): $List<($IBrewingRecipe)>
public "isContainerIngredient"(arg0: $ItemStack$$Type): boolean
get "recipes"(): $List<($IBrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewing$$Type = ($PotionBrewing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewing$$Original = $PotionBrewing;}
declare module "net.minecraft.world.item.MinecartItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AbstractMinecart$Type$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart$Type"

export class $MinecartItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AbstractMinecart$Type$$Type, arg1: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartItem$$Type = ($MinecartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartItem$$Original = $MinecartItem;}
declare module "net.minecraft.world.item.crafting.SmithingTrimRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SmithingTrimRecipe} from "net.minecraft.world.item.crafting.SmithingTrimRecipe"

export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer$$Interface<($SmithingTrimRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SmithingTrimRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SmithingTrimRecipe)>
public "codec"(): $MapCodec<($SmithingTrimRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipe$Serializer$$Type = ($SmithingTrimRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTrimRecipe$Serializer$$Original = $SmithingTrimRecipe$Serializer;}
declare module "net.minecraft.world.item.TridentItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Tool} from "net.minecraft.world.item.component.Tool"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TridentItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_DAMAGE": float
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "SHOOT_POWER": float
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "THROW_THRESHOLD_TIME": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "createToolProperties"(): $Tool
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "createAttributes"(): $ItemAttributeModifiers
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "getEnchantmentValue"(): integer
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TridentItem$$Type = ($TridentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TridentItem$$Original = $TridentItem;}
declare module "net.minecraft.world.item.component.ItemContainerContents" {
import {$Iterable} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $ItemContainerContents {
static readonly "CODEC": $Codec<($ItemContainerContents)>
static readonly "EMPTY": $ItemContainerContents
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemContainerContents)>

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "stream"(): $Stream<($ItemStack)>
public "copyInto"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "nonEmptyItemsCopy"(): $Iterable<($ItemStack)>
public "nonEmptyItems"(): $Iterable<($ItemStack)>
public static "fromItems"(arg0: $List$$Type<($ItemStack$$Type)>): $ItemContainerContents
public "nonEmptyStream"(): $Stream<($ItemStack)>
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "copyOne"(): $ItemStack
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemContainerContents$$Type = ($ItemContainerContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemContainerContents$$Original = $ItemContainerContents;}
declare module "net.minecraft.world.item.crafting.CustomRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CustomRecipe implements $CraftingRecipe$$Interface {
constructor(arg0: $CraftingBookCategory$$Type)

public "category"(): $CraftingBookCategory
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getType"(): $RecipeType<(never)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRecipe$$Type = ($CustomRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomRecipe$$Original = $CustomRecipe;}
declare module "net.minecraft.world.item.ItemStack" {
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Unbreakable$$Type} from "net.minecraft.world.item.component.Unbreakable"
import {$RelativeURL} from "dev.latvian.mods.kubejs.web.RelativeURL"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$WritableBookContent$$Type} from "net.minecraft.world.item.component.WritableBookContent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MutableDataComponentHolderFunctions} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$SeededContainerLoot$$Type} from "net.minecraft.world.item.component.SeededContainerLoot"
import {$ItemLore$$Type} from "net.minecraft.world.item.component.ItemLore"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$BeehiveBlockEntity$Occupant$$Type} from "net.minecraft.world.level.block.entity.BeehiveBlockEntity$Occupant"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DebugStickState$$Type} from "net.minecraft.world.item.component.DebugStickState"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$MapItemColor$$Type} from "net.minecraft.world.item.component.MapItemColor"
import {$Unit, $Unit$$Type} from "net.minecraft.util.Unit"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ComponentFunctions} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Interface} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$BundleContents$$Type} from "net.minecraft.world.item.component.BundleContents"
import {$ItemStackAccessor$$Interface} from "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemStackAccessor"
import {$LodestoneTracker$$Type} from "net.minecraft.world.item.component.LodestoneTracker"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemStackKJS$$Interface} from "dev.latvian.mods.kubejs.core.ItemStackKJS"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Instrument$$Type} from "net.minecraft.world.item.Instrument"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PatchedDataComponentMap$$Type} from "net.minecraft.core.component.PatchedDataComponentMap"
import {$BlockInWorld$$Type} from "net.minecraft.world.level.block.state.pattern.BlockInWorld"
import {$ChargedProjectiles$$Type} from "net.minecraft.world.item.component.ChargedProjectiles"
import {$ChangeSubscriber, $ChangeSubscriber$$Type, $ChangeSubscriber$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$PotDecorations$$Type} from "net.minecraft.world.level.block.entity.PotDecorations"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Iterable$$Type} from "java.lang.Iterable"
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$MapDecorations$$Type} from "net.minecraft.world.item.component.MapDecorations"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional} from "java.util.Optional"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$JukeboxPlayable$$Type} from "net.minecraft.world.item.JukeboxPlayable"
import {$CustomData$$Type} from "net.minecraft.world.item.component.CustomData"
import {$AdventureModePredicate$$Type} from "net.minecraft.world.item.AdventureModePredicate"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$WrittenBookContent$$Type} from "net.minecraft.world.item.component.WrittenBookContent"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemFrame} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$MapPostProcessing$$Type} from "net.minecraft.world.item.component.MapPostProcessing"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$DyedItemColor$$Type} from "net.minecraft.world.item.component.DyedItemColor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$DataResult} from "com.mojang.serialization.DataResult"
import {$HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Fireworks$$Type} from "net.minecraft.world.item.component.Fireworks"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$LevelBlock$$Type} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$ResolvableProfile$$Type} from "net.minecraft.world.item.component.ResolvableProfile"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$FireworkExplosion$$Type} from "net.minecraft.world.item.component.FireworkExplosion"
import {$IItemStackExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IItemStackExtension"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SuspiciousStewEffects$$Type} from "net.minecraft.world.item.component.SuspiciousStewEffects"
import {$Codec} from "com.mojang.serialization.Codec"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$ArmorTrim$$Type} from "net.minecraft.world.item.armortrim.ArmorTrim"
import {$BannerPatternLayers$$Type} from "net.minecraft.world.level.block.entity.BannerPatternLayers"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CustomModelData$$Type} from "net.minecraft.world.item.component.CustomModelData"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Type, $DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ChangePublisher$$Interface} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangePublisher"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockItemStateProperties$$Type} from "net.minecraft.world.item.component.BlockItemStateProperties"

export class $ItemStack implements $DataComponentHolder$$Interface, $MutableDataComponentHolder$$Interface, $IItemStackExtension$$Interface, $ItemStackAccessor$$Interface, $ChangeSubscriber$$Interface, $ChangePublisher$$Interface, $ItemStackKJS$$Interface {
static readonly "SIMPLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($ItemStack)>)>
static readonly "CODEC": $Codec<($ItemStack)>
static readonly "ITEM_NON_AIR_CODEC": $Codec<($Holder<($Item)>)>
static readonly "SINGLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "STRICT_CODEC": $Codec<($ItemStack)>
static readonly "OPTIONAL_CODEC": $Codec<($ItemStack)>
static readonly "STRICT_SINGLE_ITEM_CODEC": $Codec<($ItemStack)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
static readonly "EMPTY": $ItemStack
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
static readonly "OPTIONAL_LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($ItemStack)>)>

constructor(arg0: $Holder$$Type<($Item)>)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $ItemLike$$Type)
constructor(arg0: $ItemLike$$Type, arg1: integer)

public "toString"(): StringJS
public "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "isEmpty"(): boolean
public static "matches"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "split"(arg0: integer): $ItemStack
public "getCount"(): integer
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($ItemStack)>
public "copy"(): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "is"(arg0: $Predicate$$Type<($Holder<($Item)>)>): boolean
public "is"(arg0: $Item$$Type): boolean
public "is"(arg0: $Holder$$Type<($Item)>): boolean
public "is"(arg0: $TagKey$$Type<($Item)>): boolean
public "is"(arg0: $HolderSet$$Type<($Item)>): boolean
public "grow"(arg0: integer): void
public "getDisplayName"(): $Component
public "consume"(arg0: integer, arg1: $LivingEntity$$Type): void
public "getItem"(): $Item
public "useOnRelease"(): boolean
public "getUseAnimation"(): $UseAnim
public "finishUsingItem"(arg0: $Level$$Type, arg1: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $LivingEntity$$Type): integer
public "releaseUsing"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "forEachModifier"(arg0: $EquipmentSlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "forEachModifier"(arg0: $EquipmentSlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
public "canBeHurtBy"(arg0: $DamageSource$$Type): boolean
public "lithium$notify"(arg0: any, arg1: integer): void
public "lithium$notify"(arg0: $PatchedDataComponentMap$$Type, arg1: integer): void
public "copyWithCount"(arg0: integer): $ItemStack
/**
 * 
 * @deprecated
 */
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "lithium$subscribe"(arg0: $ChangeSubscriber$$Type, arg1: integer): void
public "getBreakingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "isCorrectToolForDrops"(arg0: $BlockState$$Type): boolean
public "hurtEnemy"(arg0: $LivingEntity$$Type, arg1: $Player$$Type): boolean
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
public "getComponents"(): $DataComponentMap
public "setCount"(arg0: integer): void
public "limitSize"(arg0: integer): void
public "lithium$unsubscribe"(arg0: $ChangeSubscriber$$Type): integer
public "setEntityRepresentation"(arg0: $Entity$$Type): void
public "lithium$forceUnsubscribe"(arg0: $PatchedDataComponentMap$$Type, arg1: integer): void
public "lithium$forceUnsubscribe"(arg0: any, arg1: integer): void
public static "isSameItemSameComponents"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getDestroySpeed"(arg0: $BlockState$$Type): float
public "getComponentsPatch"(): $DataComponentPatch
public "getItemHolder"(): $Holder<($Item)>
public "getHoverName"(): $Component
public "onCraftedBySystem"(arg0: $Level$$Type): void
public "getPrototype"(): $DataComponentMap
public "shrink"(arg0: integer): void
public static "isSameItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isDamaged"(): boolean
public "getPopTime"(): integer
public "setPopTime"(arg0: integer): void
public "getRarity"(): $Rarity
public "mineBlock"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "isFramed"(): boolean
public "getFrame"(): $ItemFrame
public static "lenientOptionalFieldOf"(arg0: StringJS): $MapCodec<($ItemStack)>
public "overrideStackedOnOther"(arg0: $Slot$$Type, arg1: $ClickAction$$Type, arg2: $Player$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type, arg4: $SlotAccess$$Type): boolean
public static "validatedStreamCodec"(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), ($ItemStack$$Type)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStack)>
public "isComponentsPatchEmpty"(): boolean
public "lithium$isSubscribedWithData"(arg0: $ChangeSubscriber$$Type, arg1: integer): boolean
public "interactLivingEntity"(arg0: $Player$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): $InteractionResult
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ItemStack
public "getMaxDamage"(): integer
public "getDamageValue"(): integer
public "setDamageValue"(arg0: integer): void
public "isDamageableItem"(): boolean
public "isStackable"(): boolean
public "onCraftedBy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: integer): void
public "isEnchantable"(): boolean
public "isEnchanted"(): boolean
public "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public static "hashStackList"(arg0: $List$$Type<($ItemStack$$Type)>): integer
public static "validateComponents"(arg0: $DataComponentMap$$Type): $DataResult<($Unit)>
public "inventoryTick"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: integer, arg3: boolean): void
public "getTagEnchantments"(): $ItemEnchantments
public "transmuteCopy"(arg0: $ItemLike$$Type, arg1: integer): $ItemStack
public "transmuteCopy"(arg0: $ItemLike$$Type): $ItemStack
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "lithium$getItem"(): $Item
/**
 * 
 * @deprecated
 */
public static "listMatches"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "canPlaceOnBlockInAdventureMode"(arg0: $BlockInWorld$$Type): boolean
public "lithium$unsubscribeWithData"(arg0: $ChangeSubscriber$$Type, arg1: integer): void
public "getMaxStackSize"(): integer
public "consumeAndReturn"(arg0: integer, arg1: $LivingEntity$$Type): $ItemStack
public "copyAndClear"(): $ItemStack
public "hurtAndBreak"(arg0: integer, arg1: $ServerLevel$$Type, arg2: $ServerPlayer$$Type, arg3: $Consumer$$Type<($Item)>): void
public "hurtAndBreak"(arg0: integer, arg1: $LivingEntity$$Type, arg2: $EquipmentSlot$$Type): void
public "hurtAndBreak"(arg0: integer, arg1: $ServerLevel$$Type, arg2: $LivingEntity$$Type, arg3: $Consumer$$Type<($Item)>): void
public "postHurtEnemy"(arg0: $LivingEntity$$Type, arg1: $Player$$Type): void
public "canBreakBlockInAdventureMode"(arg0: $BlockInWorld$$Type): boolean
public "hasFoil"(): boolean
public "getBarColor"(): integer
public "getTooltipLines"(arg0: $Item$TooltipContext$$Type, arg1: $Player$$Type, arg2: $TooltipFlag$$Type): $List<($Component)>
public "getBarWidth"(): integer
public "isBarVisible"(): boolean
public "getTooltipImage"(): $Optional<($TooltipComponent)>
public "resetComponents"(): this
public "getEntityRepresentation"(): $Entity
public "applyComponentsAndValidate"(arg0: $DataComponentPatch$$Type): void
public static "hashItemAndComponents"(arg0: $ItemStack$$Type): integer
public "hurtAndConvertOnBreak"(arg0: integer, arg1: $ItemLike$$Type, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type): $ItemStack
public "isItemEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "getDescriptionId"(): StringJS
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(never)>)>)[]): void
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(never)>)[]): void
public "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
public "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
public "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
public "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
public "getEntityLifespan"(arg0: $Level$$Type): integer
public "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
public "canElytraFly"(arg0: $LivingEntity$$Type): boolean
public "getEquipmentSlot"(): $EquipmentSlot
public "canPerformAction"(arg0: $ItemAbility$$Type): boolean
public "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
public "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
public "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
public "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
public "getCraftingRemainingItem"(): $ItemStack
public "hasCraftingRemainingItem"(): boolean
public "getAttributeModifiers"(): $ItemAttributeModifiers
public "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
public "getBurnTime"(arg0: $RecipeType$$Type<(never)>): integer
public "isPiglinCurrency"(): boolean
public "getXpRepairRatio"(): float
public "onDroppedByPlayer"(arg0: $Player$$Type): boolean
public "isRepairable"(): boolean
public "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
public "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
public "getHighlightTip"(arg0: $Component$$Type): $Component
public "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
public "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
public "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
public "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
public "canGrindstoneRepair"(): boolean
public "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
public "getEnchantmentValue"(): integer
public "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(any)>, arg3: integer): $ChangeSubscriber<(any)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(any)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>): $ChangeSubscriber<(any)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(never)>, arg1: $ChangeSubscriber$$Type<(never)>, arg2: integer): integer
public "matches"(cx: $RecipeMatchContext$$Type, itemLike: $ItemLike$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $Ingredient$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, s: $ItemStack$$Type, exact: boolean): boolean
public "getBlock"(): $Block
public "getTypeData"(): $Map<(StringJS), (any)>
public "getRegistryId"(): $ResourceKey<($Registry<($Item)>)>
public "getRegistry"(): $Registry<($Item)>
public "getIdLocation"(): $ResourceLocation
public "asHolder"(): $Holder<($Item)>
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "getWebIconURL"(ops: $DynamicOps$$Type<($Tag$$Type)>, size: integer): $RelativeURL
public "specialEquals"(o: any, shallow: boolean): boolean
public "toStringJS"(): StringJS
public "getCodec"(): $Codec<($ItemStack)>
public "withCustomName"(name: $Component$$Type): this
/**
 * 
 * @deprecated
 */
public "withChance"(chance: float): $ItemStack
public "withLore"(lines: ($Component$$Type)[], styledLines: ($Component$$Type)[]): this
public "withLore"(lines: ($Component$$Type)[]): this
public "withCount"(c: integer): this
public "enchant"(enchantment: $Holder$$Type<($Enchantment)>, level: integer): this
public "enchant"(enchantments: $ItemEnchantments$$Type): this
public "hasEnchantment"(enchantment: $Holder$$Type<($Enchantment)>, level: integer): boolean
public "toItemString"(): StringJS
public "areItemsEqual"(other: $ItemStack$$Type): boolean
public "toItemString0"(dynamicOps: $DynamicOps$$Type<($Tag$$Type)>): StringJS
public "asIngredient"(): $Ingredient
public "getId"(): Special.Item
public "getMod"(): StringJS
public "self"(): $ItemStack
public "getKey"(): $ResourceKey<($Item)>
public "getComponentString"(): StringJS
public "areComponentsEqual"(other: $ItemStack$$Type): boolean
public "equalsIgnoringCount"(stack: $ItemStack$$Type): boolean
public "getHarvestSpeed"(): float
public "getHarvestSpeed"(block: $LevelBlock$$Type): float
public "getEnchantments"(): $ItemEnchantments
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "patch"(components: $DataComponentPatch$$Type): $ComponentFunctions
public "getComponentMap"(): $DataComponentMap
public "getComponentHolder"(): $MutableDataComponentHolder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public static "toStringJS"(arg1: any): StringJS
public "setDamage"(damage: integer): void
public "setItemName"(component: $Component$$Type): void
public "setRepairCost"(repairCost: integer): void
public "setInstrument"(instrument: $Holder$$Type<($Instrument)>): void
public "setTool"(tool: $Tool$$Type): void
public "setFood"(foodProperties: $FoodProperties$$Type): void
public "setFood"(nutrition: integer, saturation: float): void
public "setMaxDamage"(maxDamage: integer): void
public "setFireworks"(fireworks: $Fireworks$$Type): void
public "setUnbreakable"(): void
public "setUnbreakableWithTooltip"(): void
public "setFireResistant"(): void
public "setBundleContents"(items: $List$$Type<($ItemStack$$Type)>): void
public "setChargedProjectiles"(items: $List$$Type<($ItemStack$$Type)>): void
public "setBlockEntityData"(tag: $CompoundTag$$Type): void
public "setFireworkExplosion"(explosion: $FireworkExplosion$$Type): void
public "setNoteBlockSound"(id: $ResourceLocation$$Type): void
public "getAttributeModifiers"(): $ItemAttributeModifiers
public "setMaxStackSize"(size: integer): void
public "setBucketEntityData"(tag: $CompoundTag$$Type): void
public "setMapItemColor"(color: $KubeColor$$Type): void
public "matchesAny"(cx: $RecipeMatchContext$$Type, itemLikes: $Iterable$$Type<($ItemLike$$Type)>, exact: boolean): boolean
public "getTags"(): $List<($ResourceLocation)>
public "getTagKeys"(): $List<($TagKey<($Item)>)>
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "remove"(type: $DataComponentType$$Type<(never)>): $ComponentFunctions
public "get"<T>(type: $DataComponentType$$Type<(T)>): T
public "setCustomData"(tag: $CompoundTag$$Type): void
public "getCustomData"(): $CompoundTag
public "setRarity"(rarity: $Rarity$$Type): void
public "setUnit"(component: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
public "setPotionId"(potion: $Holder$$Type<($Potion)>): void
public "setLore"(lines: $List$$Type<($Component$$Type)>): void
public "setLore"(lines: $List$$Type<($Component$$Type)>, styledLines: $List$$Type<($Component$$Type)>): void
public "setCustomName"(name: $Component$$Type): void
public "setDyedColor"(color: $KubeColor$$Type): void
public "setBaseColor"(color: $DyeColor$$Type): void
public "getCustomName"(): $Component
public "setProfile"(name: StringJS, uuid: $UUID$$Type): void
public "setProfile"(profile: $GameProfile$$Type): void
public "setEntityData"(tag: $CompoundTag$$Type): void
public "setLockCode"(lock: StringJS): void
public "setAdditionalTooltipHidden"(): void
public "setBlockStateProperties"(properties: $Map$$Type<(StringJS), (StringJS)>): void
public "setDyedColorWithTooltip"(color: $KubeColor$$Type): void
public "setGlintOverride"(override: boolean): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>, seed: long): void
public "setContainerLootTable"(lootTable: $ResourceKey$$Type<($LootTable)>): void
public "setPotionContents"(contents: $PotionContents$$Type): void
public "setCustomModelData"(data: integer): void
public "setTooltipHidden"(): void
/**
 * Sets the attack speed of this item to the given value, **removing** all other modifiers to attack speed.
 * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
 * (Example: Swords have an attack speed of -2.4, leading to a total value of 1.6 without any other changes.)
 */
public "setAttackSpeed"(speed: double): void
public "getAttackSpeed"(): double
public "setAttributeModifiersWithTooltip"(modifiers: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
public "setAttributeModifiers"(modifiers: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
public "getBaseAttackSpeed"(): double
public "addAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, mod: $AttributeModifier$$Type, slot: $EquipmentSlotGroup$$Type): void
public "hasAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, id: $ResourceLocation$$Type): boolean
public "getAttributeModifier"(attribute: $Holder$$Type<($Attribute)>, id: $ResourceLocation$$Type): $AttributeModifier
/**
 * Sets the attack damage of this item to the given value, **removing** all other modifiers to attack damage.
 * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
 * (In practice, this simply means that most weapons have this value set to 1 less than what you might think.)
 */
public "setAttackDamage"(dmg: double): void
public "getAttackDamage"(): double
public "getBaseAttackDamage"(): double
/**
 * Overrides the *base* attack speed of this item to be the given value, keeping other modifiers intact.
 * Note that players have a default attack speed of 4.0, so this modifier is added on top of that.
 */
public "setBaseAttackSpeed"(speed: double): void
/**
 * Overrides the *base* attack damage of this item to be the given value, keeping other modifiers intact.
 * Note that since players have a default attack damage of 1.0, total damage will be (dmg + 1.0) before other modifiers.
 */
public "setBaseAttackDamage"(dmg: double): void
public static "wrap"(o: any): $ReplacementMatch
public "set"<T extends ComponentTypes>(componentType: T, value: ComponentTypeMap[T]): $ItemStack
get "empty"(): boolean
get "count"(): integer
get "displayName"(): $Component
get "item"(): $Item
get "useAnimation"(): $UseAnim
get "breakingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
get "components"(): $DataComponentMap
set "count"(value: integer)
set "entityRepresentation"(value: $Entity$$Type)
get "componentsPatch"(): $DataComponentPatch
get "itemHolder"(): $Holder<($Item)>
get "hoverName"(): $Component
get "prototype"(): $DataComponentMap
get "damaged"(): boolean
get "popTime"(): integer
set "popTime"(value: integer)
get "rarity"(): $Rarity
get "framed"(): boolean
get "frame"(): $ItemFrame
get "componentsPatchEmpty"(): boolean
get "maxDamage"(): integer
get "damageValue"(): integer
set "damageValue"(value: integer)
get "damageableItem"(): boolean
get "stackable"(): boolean
get "enchantable"(): boolean
get "enchanted"(): boolean
get "tagEnchantments"(): $ItemEnchantments
get "maxStackSize"(): integer
get "barColor"(): integer
get "barWidth"(): integer
get "barVisible"(): boolean
get "tooltipImage"(): $Optional<($TooltipComponent)>
get "entityRepresentation"(): $Entity
get "descriptionId"(): StringJS
get "equipmentSlot"(): $EquipmentSlot
get "craftingRemainingItem"(): $ItemStack
get "attributeModifiers"(): $ItemAttributeModifiers
get "piglinCurrency"(): boolean
get "xpRepairRatio"(): float
get "repairable"(): boolean
get "enchantmentValue"(): integer
get "block"(): $Block
get "typeData"(): $Map<(StringJS), (any)>
get "registryId"(): $ResourceKey<($Registry<($Item)>)>
get "registry"(): $Registry<($Item)>
get "idLocation"(): $ResourceLocation
get "codec"(): $Codec<($ItemStack)>
get "id"(): Special.Item
get "mod"(): StringJS
get "key"(): $ResourceKey<($Item)>
get "componentString"(): StringJS
get "harvestSpeed"(): float
get "enchantments"(): $ItemEnchantments
get "componentMap"(): $DataComponentMap
get "componentHolder"(): $MutableDataComponentHolder
set "damage"(value: integer)
set "itemName"(value: $Component$$Type)
set "repairCost"(value: integer)
set "instrument"(value: $Holder$$Type<($Instrument)>)
set "tool"(value: $Tool$$Type)
set "food"(value: $FoodProperties$$Type)
set "maxDamage"(value: integer)
set "fireworks"(value: $Fireworks$$Type)
get "unbreakable"(): void
get "unbreakableWithTooltip"(): void
get "fireResistant"(): void
set "bundleContents"(value: $List$$Type<($ItemStack$$Type)>)
set "chargedProjectiles"(value: $List$$Type<($ItemStack$$Type)>)
set "blockEntityData"(value: $CompoundTag$$Type)
set "fireworkExplosion"(value: $FireworkExplosion$$Type)
set "noteBlockSound"(value: $ResourceLocation$$Type)
get "attributeModifiers"(): $ItemAttributeModifiers
set "maxStackSize"(value: integer)
set "bucketEntityData"(value: $CompoundTag$$Type)
set "mapItemColor"(value: $KubeColor$$Type)
get "tags"(): $List<($ResourceLocation)>
get "tagKeys"(): $List<($TagKey<($Item)>)>
set "customData"(value: $CompoundTag$$Type)
get "customData"(): $CompoundTag
set "rarity"(value: $Rarity$$Type)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "potionId"(value: $Holder$$Type<($Potion)>)
set "lore"(value: $List$$Type<($Component$$Type)>)
set "customName"(value: $Component$$Type)
set "dyedColor"(value: $KubeColor$$Type)
set "baseColor"(value: $DyeColor$$Type)
get "customName"(): $Component
set "profile"(value: $GameProfile$$Type)
set "entityData"(value: $CompoundTag$$Type)
set "lockCode"(value: StringJS)
get "additionalTooltipHidden"(): void
set "blockStateProperties"(value: $Map$$Type<(StringJS), (StringJS)>)
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
set "glintOverride"(value: boolean)
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
set "potionContents"(value: $PotionContents$$Type)
set "customModelData"(value: integer)
get "tooltipHidden"(): void
set "attackSpeed"(value: double)
get "attackSpeed"(): double
set "attributeModifiersWithTooltip"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
set "attributeModifiers"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
get "baseAttackSpeed"(): double
set "attackDamage"(value: double)
get "attackDamage"(): double
get "baseAttackDamage"(): double
set "baseAttackSpeed"(value: double)
set "baseAttackDamage"(value: double)
}
export type ComponentTypeMap = {"minecraft:ominous_bottle_amplifier": integer;
"minecraft:container": $ItemContainerContents$$Type;
"minecraft:hide_additional_tooltip": $Unit$$Type;
"minecraft:item_name": $Component$$Type;
"minecraft:suspicious_stew_effects": $SuspiciousStewEffects$$Type;
"minecraft:lock": $LockCode$$Type;
"minecraft:bees": $List$$Type<($BeehiveBlockEntity$Occupant$$Type)>;
"minecraft:creative_slot_lock": $Unit$$Type;
"minecraft:dyed_color": $DyedItemColor$$Type;
"minecraft:max_damage": integer;
"minecraft:tool": $Tool$$Type;
"minecraft:enchantment_glint_override": boolean;
"minecraft:fire_resistant": $Unit$$Type;
"minecraft:max_stack_size": integer;
"minecraft:entity_data": $CustomData$$Type;
"minecraft:block_entity_data": $CustomData$$Type;
"minecraft:potion_contents": $PotionContents$$Type;
"minecraft:written_book_content": $WrittenBookContent$$Type;
"minecraft:can_break": $AdventureModePredicate$$Type;
"minecraft:block_state": $BlockItemStateProperties$$Type;
"minecraft:container_loot": $SeededContainerLoot$$Type;
"minecraft:map_decorations": $MapDecorations$$Type;
"minecraft:debug_stick_state": $DebugStickState$$Type;
"minecraft:custom_data": $CustomData$$Type;
"minecraft:firework_explosion": $FireworkExplosion$$Type;
"minecraft:map_color": $MapItemColor$$Type;
"minecraft:damage": integer;
"minecraft:attribute_modifiers": $ItemAttributeModifiers$$Type;
"minecraft:custom_name": $Component$$Type;
"minecraft:can_place_on": $AdventureModePredicate$$Type;
"minecraft:jukebox_playable": $JukeboxPlayable$$Type;
"minecraft:base_color": $DyeColor$$Type;
"minecraft:bucket_entity_data": $CustomData$$Type;
"minecraft:intangible_projectile": $Unit$$Type;
"minecraft:recipes": $List$$Type<($ResourceLocation$$Type)>;
"minecraft:trim": $ArmorTrim$$Type;
"minecraft:map_id": $MapId$$Type;
"minecraft:unbreakable": $Unbreakable$$Type;
"minecraft:repair_cost": integer;
"minecraft:instrument": $Holder$$Type<($Instrument$$Type)>;
"minecraft:stored_enchantments": $ItemEnchantments$$Type;
"minecraft:note_block_sound": $ResourceLocation$$Type;
"minecraft:lore": $ItemLore$$Type;
"minecraft:map_post_processing": $MapPostProcessing$$Type;
"minecraft:hide_tooltip": $Unit$$Type;
"minecraft:enchantments": $ItemEnchantments$$Type;
"minecraft:banner_patterns": $BannerPatternLayers$$Type;
"minecraft:food": $FoodProperties$$Type;
"minecraft:profile": $ResolvableProfile$$Type;
"minecraft:charged_projectiles": $ChargedProjectiles$$Type;
"minecraft:rarity": $Rarity$$Type;
"minecraft:lodestone_tracker": $LodestoneTracker$$Type;
"minecraft:custom_model_data": $CustomModelData$$Type;
"minecraft:bundle_contents": $BundleContents$$Type;
"minecraft:fireworks": $Fireworks$$Type;
"minecraft:pot_decorations": $PotDecorations$$Type;
"minecraft:writable_book_content": $WritableBookContent$$Type};
export type ComponentTypes = keyof ComponentTypeMap;
export type ItemWithCount = {"item": Special.Item, "count"?: integer};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStack$$Type = ("probejs$$itemStack") | (ItemWithCount);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStack$$Original = $ItemStack;}
declare module "net.minecraft.world.item.crafting.Ingredient" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$IngredientKJS$$Interface} from "dev.latvian.mods.kubejs.core.IngredientKJS"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$List} from "java.util.List"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Ingredient$Value, $Ingredient$Value$$Type} from "net.minecraft.world.item.crafting.Ingredient$Value"
import {$RecipeScriptContext$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeScriptContext"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$RecipeMatchContext$$Type} from "dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext"
import {$ICustomIngredient, $ICustomIngredient$$Type} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IntList} from "it.unimi.dsi.fastutil.ints.IntList"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SizedIngredient} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $Ingredient implements $Predicate$$Interface<($ItemStack)>, $IngredientKJS$$Interface {
static readonly "CODEC": $Codec<($Ingredient)>
static readonly "LIST_CODEC_NONEMPTY": $Codec<($List<($Ingredient)>)>
 "stackingIds": $IntList
static readonly "CODEC_NONEMPTY": $Codec<($Ingredient)>
static readonly "CONTENTS_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Ingredient)>
 "values": ($Ingredient$Value)[]
static readonly "LIST_CODEC": $Codec<($List<($Ingredient)>)>
 "itemStacks": ($ItemStack)[]
static readonly "EMPTY": $Ingredient
static readonly "MAP_CODEC_NONEMPTY": $MapCodec<($Ingredient)>

constructor(arg0: $Stream$$Type<($Ingredient$Value$$Type)>)
constructor(arg0: $ICustomIngredient$$Type)

public "isSimple"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public "isEmpty"(): boolean
public static "of"(): $Ingredient
public static "of"(...arg0: ($ItemLike$$Type)[]): $Ingredient
public static "of"(...arg0: ($ItemStack$$Type)[]): $Ingredient
public static "of"(arg0: $Stream$$Type<($ItemStack$$Type)>): $Ingredient
public static "of"(arg0: $TagKey$$Type<($Item)>): $Ingredient
public "getValues"(): ($Ingredient$Value)[]
public "isCustom"(): boolean
public "hasNoItems"(): boolean
public static "fromValues"(arg0: $Stream$$Type<($Ingredient$Value$$Type)>): $Ingredient
public "self"(): $Ingredient
public "getStackingIds"(): $IntList
public "canBeUsedForMatching"(): boolean
public "getCustomIngredient"(): $ICustomIngredient
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "matches"(cx: $RecipeMatchContext$$Type, item: $ItemStack$$Type, exact: boolean): boolean
public "matches"(cx: $RecipeMatchContext$$Type, arg1: $Ingredient$$Type, exact: boolean): boolean
public "isWildcard"(): boolean
public "replaceThisWith"(cx: $RecipeScriptContext$$Type, arg1: any): any
public "except"(subtracted: $Ingredient$$Type): $Ingredient
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "getCodec"(): $Codec<(never)>
public "withCount"(count: integer): $SizedIngredient
public "asIngredient"(): $Ingredient
public "containsAnyTag"(): boolean
public "asStack"(): $SizedIngredient
public "getStackArray"(): ($ItemStack)[]
public "getTagKey"(): $TagKey<($Item)>
public "toIngredientString"(ops: $DynamicOps$$Type<($Tag$$Type)>): StringJS
public static "wrap"(from: any): $ItemPredicate
public "getItemTypes"(): $Set<($Item)>
public "testItem"(item: $Item$$Type): boolean
public "getItemIds"(): $Set<(StringJS)>
public "getStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getItemStream"(): $Stream<($Item)>
public "getDisplayStacks"(): $ItemStackSet
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public "matches"(cx: $RecipeMatchContext$$Type, itemLike: $ItemLike$$Type, exact: boolean): boolean
public "matchesAny"(cx: $RecipeMatchContext$$Type, itemLikes: $Iterable$$Type<($ItemLike$$Type)>, exact: boolean): boolean
get "simple"(): boolean
get "empty"(): boolean
get "custom"(): boolean
get "customIngredient"(): $ICustomIngredient
get "wildcard"(): boolean
get "codec"(): $Codec<(never)>
get "stackArray"(): ($ItemStack)[]
get "tagKey"(): $TagKey<($Item)>
get "itemTypes"(): $Set<($Item)>
get "itemIds"(): $Set<(StringJS)>
get "stacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemStream"(): $Stream<($Item)>
get "displayStacks"(): $ItemStackSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ingredient$$Type = ($ItemStack$$Type) | (($Ingredient$$Type)[]) | (RegExp) | ("*") | ("-") | (`#${Special.ItemTag}`) | (`@${Special.Mod}`) | (`%${Special.CreativeModeTab}`);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ingredient$$Original = $Ingredient;}
declare module "net.minecraft.world.item.DyeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DyeItem extends $Item implements $SignApplicator$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DyeColor$$Type, arg1: $Item$Properties$$Type)

public "getDyeColor"(): $DyeColor
public static "byColor"(arg0: $DyeColor$$Type): $DyeItem
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeItem$$Type = ($DyeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeItem$$Original = $DyeItem;}
declare module "net.minecraft.world.item.component.ChargedProjectiles" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export class $ChargedProjectiles {
static readonly "CODEC": $Codec<($ChargedProjectiles)>
static readonly "EMPTY": $ChargedProjectiles
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargedProjectiles)>

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $List$$Type<($ItemStack$$Type)>): $ChargedProjectiles
public static "of"(arg0: $ItemStack$$Type): $ChargedProjectiles
public "contains"(arg0: $Item$$Type): boolean
public "getItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "items"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedProjectiles$$Type = ($ChargedProjectiles);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedProjectiles$$Original = $ChargedProjectiles;}
declare module "net.minecraft.world.item.SuspiciousStewItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SuspiciousStewItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "DEFAULT_DURATION": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuspiciousStewItem$$Type = ($SuspiciousStewItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuspiciousStewItem$$Original = $SuspiciousStewItem;}
declare module "net.minecraft.world.item.component.MapDecorations" {
import {$MapDecorations$Entry, $MapDecorations$Entry$$Type} from "net.minecraft.world.item.component.MapDecorations$Entry"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $MapDecorations extends $Record {
static readonly "CODEC": $Codec<($MapDecorations)>
static readonly "EMPTY": $MapDecorations

constructor(arg0: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decorations"(): $Map<(StringJS), ($MapDecorations$Entry)>
public "withDecoration"(arg0: StringJS, arg1: $MapDecorations$Entry$$Type): $MapDecorations
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorations$$Type = ({"decorations"?: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>}) | ([decorations?: $Map$$Type<(StringJS), ($MapDecorations$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorations$$Original = $MapDecorations;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $EnchantmentLocationBasedEffect$$Interface {
}

export class $EnchantmentLocationBasedEffect implements $EnchantmentLocationBasedEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentLocationBasedEffect)>

static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentLocationBasedEffect$$Type)>)>): $MapCodec<($EnchantmentLocationBasedEffect)>
 "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
 "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
 "codec"(): $MapCodec<($EnchantmentLocationBasedEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentLocationBasedEffect$$Type = ($EnchantmentLocationBasedEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentLocationBasedEffect$$Original = $EnchantmentLocationBasedEffect;}
declare module "net.minecraft.world.item.SignApplicator" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity, $SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"

export interface $SignApplicator$$Interface {

(arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player): boolean
}

export class $SignApplicator implements $SignApplicator$$Interface {
 "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
 "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignApplicator$$Type = ((arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignApplicator$$Original = $SignApplicator;}
declare module "net.minecraft.world.item.crafting.DecoratedPotRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DecoratedPotRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecoratedPotRecipe$$Type = ($DecoratedPotRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DecoratedPotRecipe$$Original = $DecoratedPotRecipe;}
declare module "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Set} from "java.util.Set"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemEnchantments$Mutable {
constructor(arg0: $ItemEnchantments$$Type)

public "set"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "keySet"(): $Set<($Holder<($Enchantment)>)>
public "removeIf"(arg0: $Predicate$$Type<($Holder<($Enchantment)>)>): void
public "getLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "toImmutable"(): $ItemEnchantments
public "upgrade"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantments$Mutable$$Type = ($ItemEnchantments$Mutable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantments$Mutable$$Original = $ItemEnchantments$Mutable;}
declare module "net.minecraft.world.item.TooltipFlag" {
import {$TooltipFlag$Default} from "net.minecraft.world.item.TooltipFlag$Default"

export interface $TooltipFlag$$Interface {
get "advanced"(): boolean
get "creative"(): boolean
}

export class $TooltipFlag implements $TooltipFlag$$Interface {
static readonly "NORMAL": $TooltipFlag$Default
static readonly "ADVANCED": $TooltipFlag$Default

 "isAdvanced"(): boolean
 "isCreative"(): boolean
 "hasShiftDown"(): boolean
 "hasAltDown"(): boolean
 "hasControlDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipFlag$$Type = ($TooltipFlag);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipFlag$$Original = $TooltipFlag;}
declare module "net.minecraft.world.item.crafting.SmokingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmokingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingRecipe$$Type = ($SmokingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokingRecipe$$Original = $SmokingRecipe;}
declare module "net.minecraft.world.item.component.CustomModelData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $CustomModelData extends $Record {
static readonly "CODEC": $Codec<($CustomModelData)>
static readonly "DEFAULT": $CustomModelData
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CustomModelData)>

constructor(arg0: integer)

public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomModelData$$Type = ({"value"?: integer}) | ([value?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomModelData$$Original = $CustomModelData;}
declare module "net.minecraft.world.item.MobBucketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $MobBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EntityType$$Type<(never)>, arg1: $Fluid$$Type, arg2: $SoundEvent$$Type, arg3: $Item$Properties$$Type)

public "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobBucketItem$$Type = ($MobBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobBucketItem$$Original = $MobBucketItem;}
declare module "net.minecraft.world.item.JukeboxSongPlayer" {
import {$JukeboxSongPlayer$OnSongChanged$$Type} from "net.minecraft.world.item.JukeboxSongPlayer$OnSongChanged"
import {$JukeboxSong, $JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $JukeboxSongPlayer {
static readonly "PLAY_EVENT_INTERVAL_TICKS": integer

constructor(arg0: $JukeboxSongPlayer$OnSongChanged$$Type, arg1: $BlockPos$$Type)

public "stop"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type): void
public "tick"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type): void
public "isPlaying"(): boolean
public "getSong"(): $JukeboxSong
public "play"(arg0: $LevelAccessor$$Type, arg1: $Holder$$Type<($JukeboxSong)>): void
public "getTicksSinceSongStarted"(): long
public "setSongWithoutPlaying"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: long): void
get "playing"(): boolean
get "song"(): $JukeboxSong
get "ticksSinceSongStarted"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSongPlayer$$Type = ($JukeboxSongPlayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSongPlayer$$Original = $JukeboxSongPlayer;}
declare module "net.minecraft.world.item.crafting.RecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$RecipeInputMixin$$Interface} from "dev.latvian.mods.kubejs.core.mixin.RecipeInputMixin"
import {$RecipeInputKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeInputKJS"

export interface $RecipeInput$$Interface extends $RecipeInputKJS$$Interface, $RecipeInputMixin$$Interface {
get "empty"(): boolean
}

export class $RecipeInput implements $RecipeInput$$Interface {
 "size"(): integer
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "find"(filter: $SlotFilter$$Type): $ItemStack
 "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
 "findAll"(): $List<($ItemStack)>
 "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
 "self"(): $RecipeInput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeInput$$Type = ($RecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeInput$$Original = $RecipeInput;}
declare module "net.minecraft.world.item.crafting.BookCloningRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookCloningRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCloningRecipe$$Type = ($BookCloningRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BookCloningRecipe$$Original = $BookCloningRecipe;}
declare module "net.minecraft.world.item.enchantment.Enchantment" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Enchantment$Cost, $Enchantment$Cost$$Type} from "net.minecraft.world.item.enchantment.Enchantment$Cost"
import {$ConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.ConditionalEffect"
import {$Enchantment$EnchantmentDefinition, $Enchantment$EnchantmentDefinition$$Type} from "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Enchantment$Builder} from "net.minecraft.world.item.enchantment.Enchantment$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TargetedConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.TargetedConditionalEffect"
import {$EnchantmentValueEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$EnchantmentEntityEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentEntityEffect"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MutableFloat$$Type} from "org.apache.commons.lang3.mutable.MutableFloat"
import {$Map} from "java.util.Map"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Record} from "java.lang.Record"

export class $Enchantment extends $Record {
static readonly "CODEC": $Codec<($Holder<($Enchantment)>)>
static readonly "DIRECT_CODEC": $Codec<($Enchantment)>
static readonly "MAX_LEVEL": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Enchantment)>)>

constructor(description: $Component$$Type, definition: $Enchantment$EnchantmentDefinition$$Type, exclusiveSet: $HolderSet$$Type<($Enchantment)>, effects: $DataComponentMap$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "tick"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type): void
public "description"(): $Component
public "isImmuneToDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $DamageSource$$Type): boolean
public "modifyKnockback"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
/**
 * 
 * @deprecated
 */
public "isSupportedItem"(arg0: $ItemStack$$Type): boolean
public static "getFullname"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $Component
public "exclusiveSet"(): $HolderSet<($Enchantment)>
public static "dynamicCost"(arg0: integer, arg1: integer): $Enchantment$Cost
public "matchingSlot"(arg0: $EquipmentSlot$$Type): boolean
public static "constantCost"(arg0: integer): $Enchantment$Cost
public "getSlotItems"(arg0: $LivingEntity$$Type): $Map<($EquipmentSlot), ($ItemStack)>
public static "blockHitContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $Vec3$$Type, arg4: $BlockState$$Type): $LootContext
public "modifyAmmoCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public static "itemContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type): $LootContext
public static "locationContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: boolean): $LootContext
/**
 * 
 * @deprecated
 */
public "getSupportedItems"(): $HolderSet<($Item)>
public static "doPostAttack"(arg0: $TargetedConditionalEffect$$Type<($EnchantmentEntityEffect$$Type)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $EnchantedItemInUse$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type): void
public "doPostAttack"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $EnchantmentTarget$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type): void
public static "entityContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $Vec3$$Type): $LootContext
/**
 * 
 * @deprecated
 */
public "isPrimaryItem"(arg0: $ItemStack$$Type): boolean
public static "damageContext"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $Entity$$Type, arg3: $DamageSource$$Type): $LootContext
public "getEffects"<T>(arg0: $DataComponentType$$Type<($List$$Type<(T)>)>): $List<(T)>
public static "enchantment"(arg0: $Enchantment$EnchantmentDefinition$$Type): $Enchantment$Builder
public "getMinLevel"(): integer
public "getMaxLevel"(): integer
public "stopLocationBasedEffects"(arg0: integer, arg1: $EnchantedItemInUse$$Type, arg2: $LivingEntity$$Type): void
public "runLocationChangedEffects"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $LivingEntity$$Type): void
public "getWeight"(): integer
public "getAnvilCost"(): integer
public static "areCompatible"(arg0: $Holder$$Type<($Enchantment)>, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getMaxCost"(arg0: integer): integer
public "getMinCost"(arg0: integer): integer
/**
 * 
 * @deprecated
 */
public "canEnchant"(arg0: $ItemStack$$Type): boolean
public "onHitBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: $BlockState$$Type): void
public "onProjectileSpawned"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type): void
public "modifyFallBasedDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "modifyDamage"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public static "applyEffects"<T>(arg0: $List$$Type<($ConditionalEffect$$Type<(T)>)>, arg1: $LootContext$$Type, arg2: $Consumer$$Type<(T)>): void
public "definition"(): $Enchantment$EnchantmentDefinition
public static "definition"(arg0: $HolderSet$$Type<($Item)>, arg1: $HolderSet$$Type<($Item)>, arg2: integer, arg3: integer, arg4: $Enchantment$Cost$$Type, arg5: $Enchantment$Cost$$Type, arg6: integer, ...arg7: ($EquipmentSlotGroup$$Type)[]): $Enchantment$EnchantmentDefinition
public static "definition"(arg0: $HolderSet$$Type<($Item)>, arg1: integer, arg2: integer, arg3: $Enchantment$Cost$$Type, arg4: $Enchantment$Cost$$Type, arg5: integer, ...arg6: ($EquipmentSlotGroup$$Type)[]): $Enchantment$EnchantmentDefinition
public "effects"(): $DataComponentMap
public "modifyTridentReturnToOwnerAcceleration"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyDurabilityToRepairFromXp"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyTridentSpinAttackStrength"(arg0: $RandomSource$$Type, arg1: integer, arg2: $MutableFloat$$Type): void
public "modifyItemFilteredCount"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $MutableFloat$$Type): void
public "modifyCrossbowChargeTime"(arg0: $RandomSource$$Type, arg1: integer, arg2: $MutableFloat$$Type): void
public "modifyUnfilteredValue"(arg0: $DataComponentType$$Type<($EnchantmentValueEffect$$Type)>, arg1: $RandomSource$$Type, arg2: integer, arg3: $MutableFloat$$Type): void
public "modifyDamageProtection"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "modifyProjectileCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyDamageFilteredValue"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $Entity$$Type, arg5: $DamageSource$$Type, arg6: $MutableFloat$$Type): void
public "modifyMobExperience"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyEntityFilteredValue"(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<($EnchantmentValueEffect$$Type)>)>)>, arg1: $ServerLevel$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $Entity$$Type, arg5: $MutableFloat$$Type): void
public "modifyFishingTimeReduction"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyProjectileSpread"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyPiercingCount"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyFishingLuckBonus"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $MutableFloat$$Type): void
public "modifyBlockExperience"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
public "modifyArmorEffectivness"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $Entity$$Type, arg4: $DamageSource$$Type, arg5: $MutableFloat$$Type): void
public "modifyDurabilityChange"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $MutableFloat$$Type): void
get "supportedItems"(): $HolderSet<($Item)>
get "minLevel"(): integer
get "maxLevel"(): integer
get "weight"(): integer
get "anvilCost"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Enchantment
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnchantmentTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$$Type = (Special.Enchantment) | ({"description"?: $Component$$Type, "exclusiveSet"?: $HolderSet$$Type<($Enchantment)>, "definition"?: $Enchantment$EnchantmentDefinition$$Type, "effects"?: $DataComponentMap$$Type}) | ([description?: $Component$$Type, exclusiveSet?: $HolderSet$$Type<($Enchantment)>, definition?: $Enchantment$EnchantmentDefinition$$Type, effects?: $DataComponentMap$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$$Original = $Enchantment;}
declare module "net.minecraft.world.item.PlaceOnWaterBlockItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PlaceOnWaterBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceOnWaterBlockItem$$Type = ($PlaceOnWaterBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaceOnWaterBlockItem$$Original = $PlaceOnWaterBlockItem;}
declare module "net.minecraft.world.item.crafting.MapExtendingRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MapExtendingRecipe extends $ShapedRecipe {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapExtendingRecipe$$Type = ($MapExtendingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapExtendingRecipe$$Original = $MapExtendingRecipe;}
declare module "net.minecraft.world.item.enchantment.Enchantment$Builder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$List$$Type} from "java.util.List"
import {$EnchantmentAttributeEffect$$Type} from "net.minecraft.world.item.enchantment.effects.EnchantmentAttributeEffect"
import {$ConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.ConditionalEffect"
import {$Enchantment$EnchantmentDefinition$$Type} from "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$TargetedConditionalEffect$$Type} from "net.minecraft.world.item.enchantment.TargetedConditionalEffect"
import {$LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentTarget$$Type} from "net.minecraft.world.item.enchantment.EnchantmentTarget"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Unit$$Type} from "net.minecraft.util.Unit"

export class $Enchantment$Builder {
constructor(arg0: $Enchantment$EnchantmentDefinition$$Type)

public "build"(arg0: $ResourceLocation$$Type): $Enchantment
public "exclusiveWith"(arg0: $HolderSet$$Type<($Enchantment)>): $Enchantment$Builder
public "withSpecialEffect"<E>(arg0: $DataComponentType$$Type<(E)>, arg1: E): $Enchantment$Builder
public "withCustomName"(arg0: $UnaryOperator$$Type<($MutableComponent)>): $Enchantment$Builder
public "withEffect"(arg0: $DataComponentType$$Type<($Unit$$Type)>): $Enchantment$Builder
public "withEffect"(arg0: $DataComponentType$$Type<($List$$Type<($EnchantmentAttributeEffect$$Type)>)>, arg1: $EnchantmentAttributeEffect$$Type): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<(E)>)>)>, arg1: E): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($TargetedConditionalEffect$$Type<(E)>)>)>, arg1: $EnchantmentTarget$$Type, arg2: $EnchantmentTarget$$Type, arg3: E, arg4: $LootItemCondition$Builder$$Type): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($TargetedConditionalEffect$$Type<(E)>)>)>, arg1: $EnchantmentTarget$$Type, arg2: $EnchantmentTarget$$Type, arg3: E): $Enchantment$Builder
public "withEffect"<E>(arg0: $DataComponentType$$Type<($List$$Type<($ConditionalEffect$$Type<(E)>)>)>, arg1: E, arg2: $LootItemCondition$Builder$$Type): $Enchantment$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$Builder$$Type = ($Enchantment$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$Builder$$Original = $Enchantment$Builder;}
declare module "net.minecraft.world.item.JukeboxSongPlayer$OnSongChanged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JukeboxSongPlayer$OnSongChanged$$Interface {

(): void
}

export class $JukeboxSongPlayer$OnSongChanged implements $JukeboxSongPlayer$OnSongChanged$$Interface {
 "notifyChange"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxSongPlayer$OnSongChanged$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $JukeboxSongPlayer$OnSongChanged$$Original = $JukeboxSongPlayer$OnSongChanged;}
declare module "net.minecraft.world.item.component.ItemLore" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Record} from "java.lang.Record"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ItemLore extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ItemLore)>
static readonly "MAX_LINES": integer
static readonly "EMPTY": $ItemLore
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemLore)>

constructor(arg0: $List$$Type<($Component$$Type)>)
constructor(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($Component$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "lines"(): $List<($Component)>
public "withLineAdded"(arg0: $Component$$Type): $ItemLore
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "styledLines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLore$$Type = ({"styledLines"?: $List$$Type<($Component$$Type)>, "lines"?: $List$$Type<($Component$$Type)>}) | ([styledLines?: $List$$Type<($Component$$Type)>, lines?: $List$$Type<($Component$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemLore$$Original = $ItemLore;}
declare module "net.minecraft.world.item.crafting.ShapedRecipePattern$Data" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ShapedRecipePattern$Data extends $Record {
static readonly "MAP_CODEC": $MapCodec<($ShapedRecipePattern$Data)>

constructor(key: $Map$$Type<(character), ($Ingredient$$Type)>, pattern: $List$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pattern"(): $List<(StringJS)>
public "key"(): $Map<(character), ($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipePattern$Data$$Type = ({"pattern"?: $List$$Type<(StringJS)>, "key"?: $Map$$Type<(character), ($Ingredient$$Type)>}) | ([pattern?: $List$$Type<(StringJS)>, key?: $Map$$Type<(character), ($Ingredient$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipePattern$Data$$Original = $ShapedRecipePattern$Data;}
declare module "net.minecraft.world.item.MaceItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Tool} from "net.minecraft.world.item.component.Tool"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MaceItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "SMASH_ATTACK_KNOCKBACK_RADIUS": float
static readonly "SMASH_ATTACK_FALL_THRESHOLD": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "createToolProperties"(): $Tool
public static "createAttributes"(): $ItemAttributeModifiers
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "canSmashAttack"(arg0: $LivingEntity$$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getAttackDamageBonus"(arg0: $Entity$$Type, arg1: float, arg2: $DamageSource$$Type): float
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "getEnchantmentValue"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaceItem$$Type = ($MaceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaceItem$$Original = $MaceItem;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$LevelBasedValue$Linear} from "net.minecraft.world.item.enchantment.LevelBasedValue$Linear"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export interface $LevelBasedValue$$Interface {
}

export class $LevelBasedValue implements $LevelBasedValue$$Interface {
static readonly "DISPATCH_CODEC": $Codec<($LevelBasedValue)>
static readonly "CODEC": $Codec<($LevelBasedValue)>

static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
static "constant"(arg0: float): $LevelBasedValue$Constant
static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
 "calculate"(arg0: integer): float
static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
static "perLevel"(arg0: float): $LevelBasedValue$Linear
 "codec"(): $MapCodec<($LevelBasedValue)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$$Type = ($LevelBasedValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$$Original = $LevelBasedValue;}
declare module "net.minecraft.world.item.TieredItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $TieredItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getTier"(): $Tier
public "getEnchantmentValue"(): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredItem$$Type = ($TieredItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TieredItem$$Original = $TieredItem;}
declare module "net.minecraft.world.item.crafting.RecipeManager" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ReloadableServerResourcesKJS, $ReloadableServerResourcesKJS$$Type} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SimpleJsonResourceReloadListener} from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"
import {$RecipeManagerKJS$$Interface} from "dev.latvian.mods.kubejs.core.RecipeManagerKJS"
import {$RecipeManager$CachedCheck} from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Stream} from "java.util.stream.Stream"
import {$Logger} from "org.slf4j.Logger"

export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $RecipeManagerKJS$$Interface {
static readonly "LOGGER": $Logger

constructor(arg0: $HolderLookup$Provider$$Type)

public "hadErrorsLoading"(): boolean
public "kjs$replaceRecipes"(map: $Map$$Type): void
public "kjs$getRecipeIdMap"(): $Map
public "kjs$getResources"(): $ReloadableServerResourcesKJS
public "getOrderedRecipes"(): $Collection<($RecipeHolder<(never)>)>
public "replaceRecipes"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>): void
public "getRecipeIds"(): $Stream<($ResourceLocation)>
public "getAllRecipesFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
public "getRecipesFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $List<($RecipeHolder<(T)>)>
public "kjs$setResources"(resources: $ReloadableServerResourcesKJS$$Type): void
public "byKey"(arg0: $ResourceLocation$$Type): $Optional<($RecipeHolder<(never)>)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type, arg3: $RecipeHolder$$Type<(T)>): $Optional<($RecipeHolder<(T)>)>
public "getRecipeFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type, arg3: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
public static "createCheck"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>): $RecipeManager$CachedCheck<(I), (T)>
public "getRemainingItemsFor"<I extends $RecipeInput, T extends $Recipe<(object)>>(arg0: $RecipeType$$Type<(T)>, arg1: I, arg2: $Level$$Type): $NonNullList<($ItemStack)>
public "getRecipes"(): $Collection<($RecipeHolder<(never)>)>
get "orderedRecipes"(): $Collection<($RecipeHolder<(never)>)>
get "recipeIds"(): $Stream<($ResourceLocation)>
get "recipes"(): $Collection<($RecipeHolder<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManager$$Type = ($RecipeManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManager$$Original = $RecipeManager;}
declare module "net.minecraft.world.item.StandingAndWallBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $StandingAndWallBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type, arg3: $Direction$$Type)

/**
 * 
 * @deprecated
 */
public "removeFromBlockToItemMap"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandingAndWallBlockItem$$Type = ($StandingAndWallBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StandingAndWallBlockItem$$Original = $StandingAndWallBlockItem;}
declare module "net.minecraft.world.item.HoneycombItem" {
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$SignApplicator$$Interface} from "net.minecraft.world.item.SignApplicator"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiMap} from "com.google.common.collect.BiMap"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SignText$$Type} from "net.minecraft.world.level.block.entity.SignText"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HoneycombItem extends $Item implements $SignApplicator$$Interface {
/**
 * 
 * @deprecated
 */
static readonly "WAX_OFF_BY_BLOCK": $Supplier<($BiMap<($Block), ($Block)>)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "WAXABLES": $Supplier<($BiMap<($Block), ($Block)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getWaxed"(arg0: $BlockState$$Type): $Optional<($BlockState)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "canApplyToSign"(arg0: $SignText$$Type, arg1: $Player$$Type): boolean
public "tryApplyToSign"(arg0: $Level$$Type, arg1: $SignBlockEntity$$Type, arg2: boolean, arg3: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneycombItem$$Type = ($HoneycombItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoneycombItem$$Original = $HoneycombItem;}
declare module "net.minecraft.world.item.crafting.RepairItemRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RepairItemRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairItemRecipe$$Type = ($RepairItemRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RepairItemRecipe$$Original = $RepairItemRecipe;}
declare module "net.minecraft.world.item.enchantment.EnchantmentInstance" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$WeightedEntry$Wrapper} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$WeightedEntry$IntrusiveBase} from "net.minecraft.util.random.WeightedEntry$IntrusiveBase"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
readonly "level": integer
readonly "enchantment": $Holder<($Enchantment)>

constructor(arg0: $Holder$$Type<($Enchantment)>, arg1: integer)

public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentInstance$$Type = ($EnchantmentInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentInstance$$Original = $EnchantmentInstance;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers$Entry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ItemAttributeModifiers$Entry extends $Record {
static readonly "CODEC": $Codec<($ItemAttributeModifiers$Entry)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttributeModifiers$Entry)>

constructor(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type)

public "slot"(): $EquipmentSlotGroup
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$Entry$$Type = ({"attribute"?: $Holder$$Type<($Attribute)>, "modifier"?: $AttributeModifier$$Type, "slot"?: $EquipmentSlotGroup$$Type}) | ([attribute?: $Holder$$Type<($Attribute)>, modifier?: $AttributeModifier$$Type, slot?: $EquipmentSlotGroup$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$Entry$$Original = $ItemAttributeModifiers$Entry;}
declare module "net.minecraft.world.item.Item$TooltipContext" {
import {$MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $Item$TooltipContext$$Interface {
}

export class $Item$TooltipContext implements $Item$TooltipContext$$Interface {
static readonly "EMPTY": $Item$TooltipContext

static "of"(arg0: $Level$$Type): $Item$TooltipContext
static "of"(arg0: $HolderLookup$Provider$$Type): $Item$TooltipContext
 "level"(): $Level
 "mapData"(arg0: $MapId$$Type): $MapItemSavedData
 "tickRate"(): float
 "registries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Item$TooltipContext$$Type = ($Item$TooltipContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Item$TooltipContext$$Original = $Item$TooltipContext;}
declare module "net.minecraft.world.item.component.MapDecorations$Entry" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapDecorationType, $MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $MapDecorations$Entry extends $Record {
static readonly "CODEC": $Codec<($MapDecorations$Entry)>

constructor(arg0: $Holder$$Type<($MapDecorationType)>, arg1: double, arg2: double, arg3: float)

public "type"(): $Holder<($MapDecorationType)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): double
public "z"(): double
public "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorations$Entry$$Type = ({"x"?: double, "rotation"?: float, "type"?: $Holder$$Type<($MapDecorationType)>, "z"?: double}) | ([x?: double, rotation?: float, type?: $Holder$$Type<($MapDecorationType)>, z?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorations$Entry$$Original = $MapDecorations$Entry;}
declare module "net.minecraft.world.item.armortrim.TrimPattern" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$TrimMaterial$$Type} from "net.minecraft.world.item.armortrim.TrimMaterial"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $TrimPattern extends $Record {
static readonly "CODEC": $Codec<($Holder<($TrimPattern)>)>
static readonly "DIRECT_CODEC": $Codec<($TrimPattern)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TrimPattern)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($TrimPattern)>)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($Item)>, arg2: $Component$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "description"(): $Component
public "assetId"(): $ResourceLocation
public "templateItem"(): $Holder<($Item)>
public "copyWithStyle"(arg0: $Holder$$Type<($TrimMaterial)>): $Component
public "decal"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.TrimPattern
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.TrimPatternTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrimPattern$$Type = (Special.TrimPattern) | ({"decal"?: boolean, "templateItem"?: $Holder$$Type<($Item)>, "description"?: $Component$$Type, "assetId"?: $ResourceLocation$$Type}) | ([decal?: boolean, templateItem?: $Holder$$Type<($Item)>, description?: $Component$$Type, assetId?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrimPattern$$Original = $TrimPattern;}
declare module "net.minecraft.world.item.alchemy.PotionBrewing$Builder" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"

export class $PotionBrewing$Builder {
constructor(arg0: $FeatureFlagSet$$Type)

public "build"(): $PotionBrewing
public "addRecipe"(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type): void
public "addRecipe"(arg0: $IBrewingRecipe$$Type): void
public "addMix"(arg0: $Holder$$Type<($Potion)>, arg1: $Item$$Type, arg2: $Holder$$Type<($Potion)>): void
public "addContainerRecipe"(arg0: $Item$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "addStartMix"(arg0: $Item$$Type, arg1: $Holder$$Type<($Potion)>): void
public "addContainer"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewing$Builder$$Type = ($PotionBrewing$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewing$Builder$$Original = $PotionBrewing$Builder;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentEntityEffect" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnchantedItemInUse$$Type} from "net.minecraft.world.item.enchantment.EnchantedItemInUse"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$EnchantmentLocationBasedEffect$$Interface} from "net.minecraft.world.item.enchantment.effects.EnchantmentLocationBasedEffect"

export interface $EnchantmentEntityEffect$$Interface extends $EnchantmentLocationBasedEffect$$Interface {
}

export class $EnchantmentEntityEffect implements $EnchantmentEntityEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentEntityEffect)>

 "apply"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type): void
static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentEntityEffect$$Type)>)>): $MapCodec<($EnchantmentEntityEffect)>
 "onChangedBlock"(arg0: $ServerLevel$$Type, arg1: integer, arg2: $EnchantedItemInUse$$Type, arg3: $Entity$$Type, arg4: $Vec3$$Type, arg5: boolean): void
 "codec"(): $MapCodec<($EnchantmentEntityEffect)>
 "onDeactivated"(arg0: $EnchantedItemInUse$$Type, arg1: $Entity$$Type, arg2: $Vec3$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentEntityEffect$$Type = ($EnchantmentEntityEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentEntityEffect$$Original = $EnchantmentEntityEffect;}
declare module "net.minecraft.world.item.BoneMealItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $BoneMealItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "GRASS_COUNT_MULTIPLIER": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "GRASS_SPREAD_HEIGHT": integer
static readonly "GRASS_SPREAD_WIDTH": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "applyBonemeal"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "growWaterPlant"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "addGrowthParticles"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public static "growCrop"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneMealItem$$Type = ($BoneMealItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoneMealItem$$Original = $BoneMealItem;}
declare module "net.minecraft.world.item.ExperienceBottleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ExperienceBottleItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceBottleItem$$Type = ($ExperienceBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExperienceBottleItem$$Original = $ExperienceBottleItem;}
declare module "net.minecraft.world.item.FireChargeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FireChargeItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireChargeItem$$Type = ($FireChargeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireChargeItem$$Original = $FireChargeItem;}
declare module "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export interface $CreativeModeTab$DisplayItemsGenerator$$Interface {

(arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output): void
}

export class $CreativeModeTab$DisplayItemsGenerator implements $CreativeModeTab$DisplayItemsGenerator$$Interface {
 "accept"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$DisplayItemsGenerator$$Type = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$DisplayItemsGenerator$$Original = $CreativeModeTab$DisplayItemsGenerator;}
declare module "net.minecraft.world.item.trading.ItemCost" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$DataComponentPredicate$Builder$$Type} from "net.minecraft.core.component.DataComponentPredicate$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DataComponentPredicate, $DataComponentPredicate$$Type} from "net.minecraft.core.component.DataComponentPredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $ItemCost extends $Record {
static readonly "CODEC": $Codec<($ItemCost)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Optional<($ItemCost)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemCost)>

constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPredicate$$Type, arg3: $ItemStack$$Type)
constructor(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: $DataComponentPredicate$$Type)
constructor(arg0: $ItemLike$$Type, arg1: integer)
constructor(arg0: $ItemLike$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "count"(): integer
public "item"(): $Holder<($Item)>
public "withComponents"(arg0: $UnaryOperator$$Type<($DataComponentPredicate$Builder)>): $ItemCost
public "components"(): $DataComponentPredicate
public "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCost$$Type = ({"count"?: integer, "components"?: $DataComponentPredicate$$Type, "itemStack"?: $ItemStack$$Type, "item"?: $Holder$$Type<($Item)>}) | ([count?: integer, components?: $DataComponentPredicate$$Type, itemStack?: $ItemStack$$Type, item?: $Holder$$Type<($Item)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCost$$Original = $ItemCost;}
declare module "net.minecraft.world.item.enchantment.LevelBasedValue$Linear" {
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$List$$Type} from "java.util.List"
import {$LevelBasedValue, $LevelBasedValue$$Type, $LevelBasedValue$$Interface} from "net.minecraft.world.item.enchantment.LevelBasedValue"
import {$LevelBasedValue$Lookup} from "net.minecraft.world.item.enchantment.LevelBasedValue$Lookup"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"
import {$LevelBasedValue$Constant} from "net.minecraft.world.item.enchantment.LevelBasedValue$Constant"

export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue$$Interface {
static readonly "CODEC": $MapCodec<($LevelBasedValue$Linear)>

constructor(arg0: float, arg1: float)

public "base"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "calculate"(arg0: integer): float
public "perLevelAboveFirst"(): float
public "codec"(): $MapCodec<($LevelBasedValue$Linear)>
public static "lookup"(arg0: $List$$Type<(float)>, arg1: $LevelBasedValue$$Type): $LevelBasedValue$Lookup
public static "constant"(arg0: float): $LevelBasedValue$Constant
public static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($LevelBasedValue$$Type)>)>): $MapCodec<($LevelBasedValue)>
public static "perLevel"(arg0: float, arg1: float): $LevelBasedValue$Linear
public static "perLevel"(arg0: float): $LevelBasedValue$Linear
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelBasedValue$Linear$$Type = ({"perLevelAboveFirst"?: float, "base"?: float}) | ([perLevelAboveFirst?: float, base?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelBasedValue$Linear$$Original = $LevelBasedValue$Linear;}
declare module "net.minecraft.world.item.CreativeModeTab" {
import {$CreativeModeTabKJS$$Interface} from "dev.latvian.mods.kubejs.core.CreativeModeTabKJS"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$Builder} from "net.minecraft.world.item.CreativeModeTab$Builder"
import {$CreativeModeTab$Row, $CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$CreativeModeTab$Type} from "net.minecraft.world.item.CreativeModeTab$Type"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeModeTab implements $CreativeModeTabKJS$$Interface {
readonly "tabsAfter": $List<($ResourceLocation)>
readonly "tabsBefore": $List<($ResourceLocation)>

public "row"(): $CreativeModeTab$Row
/**
 * 
 * @deprecated
 */
public static "builder"(arg0: $CreativeModeTab$Row$$Type, arg1: integer): $CreativeModeTab$Builder
public static "builder"(): $CreativeModeTab$Builder
public "contains"(arg0: $ItemStack$$Type): boolean
public "getType"(): $CreativeModeTab$Type
public "getDisplayName"(): $Component
public "showTitle"(): boolean
public "canScroll"(): boolean
public "column"(): integer
public "buildContents"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "shouldDisplay"(): boolean
public static "createTextureLocation"(arg0: StringJS): $ResourceLocation
public "getBackgroundTexture"(): $ResourceLocation
public "isAlignedRight"(): boolean
public "hasSearchBar"(): boolean
public "getIconItem"(): $ItemStack
public "getDisplayItems"(): $Collection<($ItemStack)>
public "getSearchBarWidth"(): integer
public "hasAnyItems"(): boolean
public "getTabsImage"(): $ResourceLocation
public "getLabelColor"(): integer
public "getSlotColor"(): integer
public "getScrollerSprite"(): $ResourceLocation
public "kjs$setIcon"(icon: $ItemStack$$Type): void
public "kjs$setDisplayName"(component: $Component$$Type): void
public "getSearchTabDisplayItems"(): $Collection<($ItemStack)>
get "type"(): $CreativeModeTab$Type
get "displayName"(): $Component
get "backgroundTexture"(): $ResourceLocation
get "alignedRight"(): boolean
get "iconItem"(): $ItemStack
get "displayItems"(): $Collection<($ItemStack)>
get "searchBarWidth"(): integer
get "tabsImage"(): $ResourceLocation
get "labelColor"(): integer
get "slotColor"(): integer
get "scrollerSprite"(): $ResourceLocation
get "searchTabDisplayItems"(): $Collection<($ItemStack)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CreativeModeTab
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CreativeModeTabTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$$Type = (Special.CreativeModeTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$$Original = $CreativeModeTab;}
declare module "net.minecraft.world.item.enchantment.ItemEnchantments" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set} from "java.util.Set"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Object2IntMap$Entry} from "it.unimi.dsi.fastutil.objects.Object2IntMap$Entry"

export class $ItemEnchantments implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($ItemEnchantments)>
static readonly "EMPTY": $ItemEnchantments
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemEnchantments)>

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entrySet"(): $Set<($Object2IntMap$Entry<($Holder<($Enchantment)>)>)>
public "keySet"(): $Set<($Holder<($Enchantment)>)>
public "getLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
public "withTooltip"(arg0: boolean): $ItemEnchantments
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnchantments$$Type = ({[key in Special.Enchantment]?: integer});
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEnchantments$$Original = $ItemEnchantments;}
declare module "net.minecraft.world.item.component.ResolvableProfile" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$PropertyMap, $PropertyMap$$Type} from "com.mojang.authlib.properties.PropertyMap"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ResolvableProfile extends $Record {
static readonly "CODEC": $Codec<($ResolvableProfile)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ResolvableProfile)>

constructor(arg0: (StringJS)?, arg1: ($UUID$$Type)?, arg2: $PropertyMap$$Type, arg3: $GameProfile$$Type)
constructor(arg0: $GameProfile$$Type)
constructor(arg0: (StringJS)?, arg1: ($UUID$$Type)?, arg2: $PropertyMap$$Type)

public "name"(): $Optional<(StringJS)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $Optional<($UUID)>
public "resolve"(): $CompletableFuture<($ResolvableProfile)>
public "properties"(): $PropertyMap
public "isResolved"(): boolean
public "gameProfile"(): $GameProfile
get "resolved"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResolvableProfile$$Type = ({"gameProfile"?: $GameProfile$$Type, "properties"?: $PropertyMap$$Type, "id"?: ($UUID$$Type)?, "name"?: (StringJS)?}) | ([gameProfile?: $GameProfile$$Type, properties?: $PropertyMap$$Type, id?: ($UUID$$Type)?, name?: (StringJS)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResolvableProfile$$Original = $ResolvableProfile;}
declare module "net.minecraft.world.item.component.WritableBookContent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BookContent$$Interface} from "net.minecraft.world.item.component.BookContent"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Filterable, $Filterable$$Type} from "net.minecraft.server.network.Filterable"
import {$List, $List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $WritableBookContent extends $Record implements $BookContent$$Interface<(StringJS), ($WritableBookContent)> {
static readonly "MAX_PAGES": integer
static readonly "PAGE_EDIT_LENGTH": integer
static readonly "CODEC": $Codec<($WritableBookContent)>
static readonly "PAGES_CODEC": $Codec<($List<($Filterable<(StringJS)>)>)>
static readonly "EMPTY": $WritableBookContent
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WritableBookContent)>

constructor(arg0: $List$$Type<($Filterable$$Type<(StringJS)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pages"(): $List<($Filterable<(StringJS)>)>
public "withReplacedPages"(arg0: $List$$Type<($Filterable$$Type<(StringJS)>)>): $WritableBookContent
public "getPages"(arg0: boolean): $Stream<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableBookContent$$Type = ({"pages"?: $List$$Type<($Filterable$$Type<(StringJS)>)>}) | ([pages?: $List$$Type<($Filterable$$Type<(StringJS)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableBookContent$$Original = $WritableBookContent;}
declare module "net.minecraft.world.item.crafting.SmithingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $SmithingRecipe$$Interface extends $Recipe$$Interface<($SmithingRecipeInput)> {
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
}

export class $SmithingRecipe implements $SmithingRecipe$$Interface {
 "getType"(): $RecipeType<(never)>
 "getToastSymbol"(): $ItemStack
 "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
 "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
 "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
 "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "showNotification"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
 "getGroup"(): StringJS
 "isSpecial"(): boolean
 "getSerializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingRecipe$$Type = ($SmithingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingRecipe$$Original = $SmithingRecipe;}
declare module "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $CreativeModeTab$ItemDisplayParameters extends $Record {
constructor(enabledFeatures: $FeatureFlagSet$$Type, hasPermissions: boolean, holders: $HolderLookup$Provider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hasPermissions"(): boolean
public "holders"(): $HolderLookup$Provider
public "needsUpdate"(arg0: $FeatureFlagSet$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): boolean
public "enabledFeatures"(): $FeatureFlagSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTab$ItemDisplayParameters$$Type = ({"enabledFeatures"?: $FeatureFlagSet$$Type, "holders"?: $HolderLookup$Provider$$Type, "hasPermissions"?: boolean}) | ([enabledFeatures?: $FeatureFlagSet$$Type, holders?: $HolderLookup$Provider$$Type, hasPermissions?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTab$ItemDisplayParameters$$Original = $CreativeModeTab$ItemDisplayParameters;}
declare module "net.minecraft.world.item.crafting.MapCloningRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MapCloningRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCloningRecipe$$Type = ($MapCloningRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapCloningRecipe$$Original = $MapCloningRecipe;}
declare module "net.minecraft.world.item.ShearsItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Tool} from "net.minecraft.world.item.component.Tool"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ShearsItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "createToolProperties"(): $Tool
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "modifyReturnValue$zcf000$moonlight$m$mineBlock"(arg0: boolean, arg1: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShearsItem$$Type = ($ShearsItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShearsItem$$Original = $ShearsItem;}
declare module "net.minecraft.world.item.enchantment.Enchantment$EnchantmentDefinition" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Enchantment$Cost, $Enchantment$Cost$$Type} from "net.minecraft.world.item.enchantment.Enchantment$Cost"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $Enchantment$EnchantmentDefinition extends $Record {
static readonly "CODEC": $MapCodec<($Enchantment$EnchantmentDefinition)>

constructor(supportedItems: $HolderSet$$Type<($Item)>, primaryItems: ($HolderSet$$Type<($Item$$Type)>)?, weight: integer, maxLevel: integer, minCost: $Enchantment$Cost$$Type, maxCost: $Enchantment$Cost$$Type, anvilCost: integer, slots: $List$$Type<($EquipmentSlotGroup$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slots"(): $List<($EquipmentSlotGroup)>
public "primaryItems"(): $Optional<($HolderSet<($Item)>)>
public "supportedItems"(): $HolderSet<($Item)>
public "maxLevel"(): integer
public "weight"(): integer
public "anvilCost"(): integer
public "minCost"(): $Enchantment$Cost
public "maxCost"(): $Enchantment$Cost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enchantment$EnchantmentDefinition$$Type = ({"supportedItems"?: $HolderSet$$Type<($Item)>, "maxCost"?: $Enchantment$Cost$$Type, "maxLevel"?: integer, "minCost"?: $Enchantment$Cost$$Type, "primaryItems"?: ($HolderSet$$Type<($Item$$Type)>)?, "anvilCost"?: integer, "weight"?: integer, "slots"?: $List$$Type<($EquipmentSlotGroup$$Type)>}) | ([supportedItems?: $HolderSet$$Type<($Item)>, maxCost?: $Enchantment$Cost$$Type, maxLevel?: integer, minCost?: $Enchantment$Cost$$Type, primaryItems?: ($HolderSet$$Type<($Item$$Type)>)?, anvilCost?: integer, weight?: integer, slots?: $List$$Type<($EquipmentSlotGroup$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Enchantment$EnchantmentDefinition$$Original = $Enchantment$EnchantmentDefinition;}
declare module "net.minecraft.world.item.crafting.BlastingRecipe" {
import {$CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BlastingRecipe extends $AbstractCookingRecipe {
constructor(arg0: StringJS, arg1: $CookingBookCategory$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: integer)

public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingRecipe$$Type = ($BlastingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastingRecipe$$Original = $BlastingRecipe;}
declare module "net.minecraft.world.item.AnimalArmorItem$BodyType" {
import {$Enum} from "java.lang.Enum"

export class $AnimalArmorItem$BodyType extends $Enum<($AnimalArmorItem$BodyType)> {
static readonly "EQUESTRIAN": $AnimalArmorItem$BodyType
static readonly "CANINE": $AnimalArmorItem$BodyType

public static "values"(): ($AnimalArmorItem$BodyType)[]
public static "valueOf"(arg0: StringJS): $AnimalArmorItem$BodyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalArmorItem$BodyType$$Type = (("equestrian") | ("canine"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalArmorItem$BodyType$$Original = $AnimalArmorItem$BodyType;}
declare module "net.minecraft.world.item.TooltipFlag$Default" {
import {$TooltipFlag$$Interface} from "net.minecraft.world.item.TooltipFlag"
import {$Record} from "java.lang.Record"

export class $TooltipFlag$Default extends $Record implements $TooltipFlag$$Interface {
constructor(advanced: boolean, creative: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "creative"(): boolean
public "isAdvanced"(): boolean
public "isCreative"(): boolean
public "advanced"(): boolean
public "asCreative"(): $TooltipFlag$Default
public "hasShiftDown"(): boolean
public "hasAltDown"(): boolean
public "hasControlDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipFlag$Default$$Type = ({"creative"?: boolean, "advanced"?: boolean}) | ([creative?: boolean, advanced?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipFlag$Default$$Original = $TooltipFlag$Default;}
declare module "net.minecraft.world.item.WrittenBookItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $WrittenBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "resolveBookComponents"(arg0: $ItemStack$$Type, arg1: $CommandSourceStack$$Type, arg2: $Player$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrittenBookItem$$Type = ($WrittenBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrittenBookItem$$Original = $WrittenBookItem;}
declare module "net.minecraft.world.item.SignItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $SignItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Block$$Type, arg2: $Block$$Type, arg3: $Direction$$Type)
constructor(arg0: $Item$Properties$$Type, arg1: $Block$$Type, arg2: $Block$$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SignItem$$Type = ($SignItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SignItem$$Original = $SignItem;}
declare module "net.minecraft.world.item.enchantment.effects.EnchantmentValueEffect" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $EnchantmentValueEffect$$Interface {
}

export class $EnchantmentValueEffect implements $EnchantmentValueEffect$$Interface {
static readonly "CODEC": $Codec<($EnchantmentValueEffect)>

static "bootstrap"(arg0: $Registry$$Type<($MapCodec$$Type<($EnchantmentValueEffect$$Type)>)>): $MapCodec<($EnchantmentValueEffect)>
 "process"(arg0: integer, arg1: $RandomSource$$Type, arg2: float): float
 "codec"(): $MapCodec<($EnchantmentValueEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentValueEffect$$Type = ($EnchantmentValueEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentValueEffect$$Original = $EnchantmentValueEffect;}
declare module "net.minecraft.world.item.BannerPatternItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BannerPattern, $BannerPattern$$Type} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $BannerPatternItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TagKey$$Type<($BannerPattern)>, arg1: $Item$Properties$$Type)

public "getDisplayName"(): $MutableComponent
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBannerPattern"(): $TagKey<($BannerPattern)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "displayName"(): $MutableComponent
get "bannerPattern"(): $TagKey<($BannerPattern)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BannerPatternItem$$Type = ($BannerPatternItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BannerPatternItem$$Original = $BannerPatternItem;}
declare module "net.minecraft.world.item.SaddleItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SaddleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SaddleItem$$Type = ($SaddleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SaddleItem$$Original = $SaddleItem;}
declare module "net.minecraft.world.item.crafting.RecipeType" {
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$SmithingRecipe} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$CraftingRecipe} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CampfireCookingRecipe} from "net.minecraft.world.item.crafting.CampfireCookingRecipe"

export interface $RecipeType$$Interface<T extends $Recipe<(object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.RecipeType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.RecipeTypeTag
}

export class $RecipeType<T extends $Recipe<(object)>> implements $RecipeType$$Interface {
static readonly "BLASTING": $RecipeType<($BlastingRecipe)>
static readonly "STONECUTTING": $RecipeType<($StonecutterRecipe)>
static readonly "CRAFTING": $RecipeType<($CraftingRecipe)>
static readonly "SMELTING": $RecipeType<($SmeltingRecipe)>
static readonly "SMOKING": $RecipeType<($SmokingRecipe)>
static readonly "CAMPFIRE_COOKING": $RecipeType<($CampfireCookingRecipe)>
static readonly "SMITHING": $RecipeType<($SmithingRecipe)>

static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<(T)>
static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$$Type<T> = (Special.RecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeType$$Original<T> = $RecipeType<(T)>;}
declare module "net.minecraft.world.item.enchantment.providers.EnchantmentsByCostWithDifficulty" {
import {$ItemEnchantments$Mutable$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments$Mutable"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentProvider$$Interface} from "net.minecraft.world.item.enchantment.providers.EnchantmentProvider"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EnchantmentsByCostWithDifficulty extends $Record implements $EnchantmentProvider$$Interface {
static readonly "CODEC": $MapCodec<($EnchantmentsByCostWithDifficulty)>
static readonly "MAX_ALLOWED_VALUE_PART": integer

constructor(arg0: $HolderSet$$Type<($Enchantment)>, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "maxCostSpan"(): integer
public "enchant"(arg0: $ItemStack$$Type, arg1: $ItemEnchantments$Mutable$$Type, arg2: $RandomSource$$Type, arg3: $DifficultyInstance$$Type): void
public "minCost"(): integer
public "enchantments"(): $HolderSet<($Enchantment)>
public "codec"(): $MapCodec<($EnchantmentsByCostWithDifficulty)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentsByCostWithDifficulty$$Type = ({"enchantments"?: $HolderSet$$Type<($Enchantment)>, "minCost"?: integer, "maxCostSpan"?: integer}) | ([enchantments?: $HolderSet$$Type<($Enchantment)>, minCost?: integer, maxCostSpan?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentsByCostWithDifficulty$$Original = $EnchantmentsByCostWithDifficulty;}
declare module "net.minecraft.world.item.ArmorMaterial$Layer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ArmorMaterial$Layer {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: boolean)
constructor(arg0: $ResourceLocation$$Type)

public "texture"(arg0: boolean): $ResourceLocation
public "dyeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorMaterial$Layer$$Type = ($ArmorMaterial$Layer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmorMaterial$Layer$$Original = $ArmorMaterial$Layer;}
declare module "net.minecraft.world.item.ProjectileItem$DispenseConfig$Builder" {
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$ProjectileItem$PositionFunction$$Type} from "net.minecraft.world.item.ProjectileItem$PositionFunction"

export class $ProjectileItem$DispenseConfig$Builder {
constructor()

public "power"(arg0: float): $ProjectileItem$DispenseConfig$Builder
public "build"(): $ProjectileItem$DispenseConfig
public "positionFunction"(arg0: $ProjectileItem$PositionFunction$$Type): $ProjectileItem$DispenseConfig$Builder
public "overrideDispenseEvent"(arg0: integer): $ProjectileItem$DispenseConfig$Builder
public "uncertainty"(arg0: float): $ProjectileItem$DispenseConfig$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileItem$DispenseConfig$Builder$$Type = ($ProjectileItem$DispenseConfig$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProjectileItem$DispenseConfig$Builder$$Original = $ProjectileItem$DispenseConfig$Builder;}
declare module "net.minecraft.world.item.ItemNameBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemNameBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemNameBlockItem$$Type = ($ItemNameBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemNameBlockItem$$Original = $ItemNameBlockItem;}
declare module "net.minecraft.world.item.WindChargeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $WindChargeItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindChargeItem$$Type = ($WindChargeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindChargeItem$$Original = $WindChargeItem;}
declare module "net.minecraft.world.item.EggItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $EggItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggItem$$Type = ($EggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EggItem$$Original = $EggItem;}
declare module "net.minecraft.world.item.WritableBookItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $WritableBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableBookItem$$Type = ($WritableBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WritableBookItem$$Original = $WritableBookItem;}
declare module "net.minecraft.world.item.BottleItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $BottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleItem$$Type = ($BottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BottleItem$$Original = $BottleItem;}
declare module "net.minecraft.world.item.PotionItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $PotionItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionItem$$Type = ($PotionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionItem$$Original = $PotionItem;}
declare module "net.minecraft.world.item.crafting.ShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ShapedRecipe implements $CraftingRecipe$$Interface {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean)
constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getWidth"(): integer
public "getGroup"(): StringJS
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getHeight"(): integer
public "getSerializer"(): $RecipeSerializer<(never)>
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "width"(): integer
get "group"(): StringJS
get "height"(): integer
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipe$$Type = ($ShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipe$$Original = $ShapedRecipe;}
declare module "net.minecraft.world.item.Items" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockItem$$Type} from "net.minecraft.world.item.BlockItem"

export class $Items {
static readonly "GREEN_CONCRETE_POWDER": $Item
static readonly "FOX_SPAWN_EGG": $Item
static readonly "PIGLIN_HEAD": $Item
static readonly "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "PURPLE_CARPET": $Item
static readonly "GOLDEN_PICKAXE": $Item
static readonly "SMALL_AMETHYST_BUD": $Item
static readonly "DEAD_TUBE_CORAL": $Item
static readonly "WOLF_SPAWN_EGG": $Item
static readonly "GREEN_GLAZED_TERRACOTTA": $Item
static readonly "JUNGLE_PRESSURE_PLATE": $Item
static readonly "EXPOSED_CUT_COPPER": $Item
static readonly "TRAPPED_CHEST": $Item
static readonly "BEE_SPAWN_EGG": $Item
static readonly "STONE_BRICK_STAIRS": $Item
static readonly "SANDSTONE_WALL": $Item
static readonly "RABBIT_STEW": $Item
static readonly "OAK_WOOD": $Item
static readonly "WHITE_TULIP": $Item
static readonly "GRAY_STAINED_GLASS": $Item
static readonly "BLUE_ORCHID": $Item
static readonly "SPRUCE_DOOR": $Item
static readonly "STRIPPED_BIRCH_LOG": $Item
static readonly "LIGHT_BLUE_TERRACOTTA": $Item
static readonly "CHERRY_BOAT": $Item
static readonly "ZOMBIE_HEAD": $Item
static readonly "BROWN_WOOL": $Item
static readonly "FIRE_CHARGE": $Item
static readonly "GRANITE_WALL": $Item
static readonly "MANGROVE_BOAT": $Item
static readonly "SHORT_GRASS": $Item
static readonly "ORANGE_SHULKER_BOX": $Item
static readonly "FLINT_AND_STEEL": $Item
static readonly "GREEN_CANDLE": $Item
static readonly "CRACKED_STONE_BRICKS": $Item
static readonly "BRICK_SLAB": $Item
static readonly "BLUE_CANDLE": $Item
static readonly "LAPIS_BLOCK": $Item
static readonly "JUNGLE_SLAB": $Item
static readonly "PURPLE_BED": $Item
static readonly "END_STONE_BRICK_STAIRS": $Item
static readonly "CLOCK": $Item
static readonly "MUSIC_DISC_STRAD": $Item
static readonly "JUNGLE_PLANKS": $Item
static readonly "DIAMOND_HORSE_ARMOR": $Item
static readonly "CHEST_MINECART": $Item
static readonly "TURTLE_EGG": $Item
static readonly "DIAMOND": $Item
static readonly "WOODEN_SHOVEL": $Item
static readonly "WHITE_CANDLE": $Item
static readonly "VERDANT_FROGLIGHT": $Item
static readonly "COBBLESTONE": $Item
static readonly "TUBE_CORAL": $Item
static readonly "GILDED_BLACKSTONE": $Item
static readonly "CYAN_STAINED_GLASS_PANE": $Item
static readonly "WAXED_COPPER_BULB": $Item
static readonly "SMOOTH_RED_SANDSTONE_SLAB": $Item
static readonly "CHISELED_SANDSTONE": $Item
static readonly "ARROW": $Item
static readonly "TOTEM_OF_UNDYING": $Item
static readonly "LIGHT_BLUE_SHULKER_BOX": $Item
static readonly "NETHER_BRICK_WALL": $Item
static readonly "AXOLOTL_SPAWN_EGG": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER_STAIRS": $Item
static readonly "RED_WOOL": $Item
static readonly "COMMAND_BLOCK": $Item
static readonly "ROOTED_DIRT": $Item
static readonly "PRISMARINE_STAIRS": $Item
static readonly "DEEPSLATE_TILE_STAIRS": $Item
static readonly "POLISHED_ANDESITE": $Item
static readonly "CRAFTING_TABLE": $Item
static readonly "MOJANG_BANNER_PATTERN": $Item
static readonly "CORNFLOWER": $Item
static readonly "SCULK_SHRIEKER": $Item
static readonly "INFESTED_COBBLESTONE": $Item
static readonly "TORCHFLOWER_SEEDS": $Item
static readonly "DIORITE": $Item
static readonly "LIGHT_BLUE_CONCRETE": $Item
static readonly "POLISHED_ANDESITE_SLAB": $Item
static readonly "END_CRYSTAL": $Item
static readonly "POLISHED_BLACKSTONE_BUTTON": $Item
static readonly "MOSSY_STONE_BRICK_WALL": $Item
static readonly "POLISHED_DEEPSLATE_WALL": $Item
static readonly "HORSE_SPAWN_EGG": $Item
static readonly "WARPED_SLAB": $Item
static readonly "SKELETON_HORSE_SPAWN_EGG": $Item
static readonly "STONE_BRICK_WALL": $Item
static readonly "DARK_OAK_WOOD": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER_STAIRS": $Item
static readonly "CRIMSON_HYPHAE": $Item
static readonly "JUKEBOX": $Item
static readonly "DARK_OAK_BUTTON": $Item
static readonly "APPLE": $Item
static readonly "BIRCH_BOAT": $Item
static readonly "BUCKET": $Item
static readonly "GOAT_HORN": $Item
static readonly "CRACKED_DEEPSLATE_BRICKS": $Item
static readonly "CHERRY_PRESSURE_PLATE": $Item
static readonly "WARPED_STAIRS": $Item
static readonly "MANGROVE_PLANKS": $Item
static readonly "DEEPSLATE_TILE_WALL": $Item
static readonly "BLACK_CONCRETE_POWDER": $Item
static readonly "DARK_OAK_PRESSURE_PLATE": $Item
static readonly "MINECART": $Item
static readonly "POTION": $Item
static readonly "STRIPPED_SPRUCE_WOOD": $Item
static readonly "MANGROVE_LOG": $Item
static readonly "OAK_BUTTON": $Item
static readonly "BAMBOO_CHEST_RAFT": $Item
static readonly "GRANITE": $Item
static readonly "SAND": $Item
static readonly "SCRAPE_POTTERY_SHERD": $Item
static readonly "LIGHT": $Item
static readonly "BROWN_TERRACOTTA": $Item
static readonly "ORANGE_STAINED_GLASS_PANE": $Item
static readonly "WOODEN_AXE": $Item
static readonly "FILLED_MAP": $Item
static readonly "REINFORCED_DEEPSLATE": $Item
static readonly "MOURNER_POTTERY_SHERD": $Item
static readonly "INK_SAC": $Item
static readonly "NETHER_WART": $Item
static readonly "YELLOW_CARPET": $Item
static readonly "RECOVERY_COMPASS": $Item
static readonly "BEETROOT": $Item
static readonly "LILY_OF_THE_VALLEY": $Item
static readonly "DEEPSLATE_TILES": $Item
static readonly "HAY_BLOCK": $Item
static readonly "COOKIE": $Item
static readonly "IRON_LEGGINGS": $Item
static readonly "ORANGE_DYE": $Item
static readonly "LECTERN": $Item
static readonly "RAW_COPPER_BLOCK": $Item
static readonly "GLOW_INK_SAC": $Item
static readonly "CRIMSON_FENCE_GATE": $Item
static readonly "BLACK_STAINED_GLASS_PANE": $Item
static readonly "ALLIUM": $Item
static readonly "TUFF_BRICK_WALL": $Item
static readonly "COBBLESTONE_STAIRS": $Item
static readonly "CROSSBOW": $Item
static readonly "PUMPKIN_PIE": $Item
static readonly "CRYING_OBSIDIAN": $Item
static readonly "DETECTOR_RAIL": $Item
static readonly "SOUL_CAMPFIRE": $Item
static readonly "AMETHYST_CLUSTER": $Item
static readonly "PURPLE_STAINED_GLASS": $Item
static readonly "BROWN_CONCRETE_POWDER": $Item
static readonly "TUFF_STAIRS": $Item
static readonly "MANGROVE_ROOTS": $Item
static readonly "TERRACOTTA": $Item
static readonly "END_STONE_BRICKS": $Item
static readonly "BAMBOO_RAFT": $Item
static readonly "DROWNED_SPAWN_EGG": $Item
static readonly "COARSE_DIRT": $Item
static readonly "LIGHT_GRAY_GLAZED_TERRACOTTA": $Item
static readonly "GLOWSTONE": $Item
static readonly "MANGROVE_HANGING_SIGN": $Item
static readonly "DIORITE_SLAB": $Item
static readonly "SKULL_POTTERY_SHERD": $Item
static readonly "ANCIENT_DEBRIS": $Item
static readonly "WAXED_EXPOSED_COPPER_TRAPDOOR": $Item
static readonly "SUSPICIOUS_STEW": $Item
static readonly "PINK_SHULKER_BOX": $Item
static readonly "CRIMSON_DOOR": $Item
static readonly "PORKCHOP": $Item
static readonly "POLISHED_TUFF": $Item
static readonly "GLASS_PANE": $Item
static readonly "DIAMOND_ORE": $Item
static readonly "CHIPPED_ANVIL": $Item
static readonly "DEEPSLATE_COPPER_ORE": $Item
static readonly "OAK_LEAVES": $Item
static readonly "COOKED_COD": $Item
static readonly "CYAN_BANNER": $Item
static readonly "BAMBOO_STAIRS": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER_SLAB": $Item
static readonly "MAGENTA_BED": $Item
static readonly "SPONGE": $Item
static readonly "RED_BED": $Item
static readonly "SCULK": $Item
static readonly "RAW_IRON": $Item
static readonly "TRIAL_KEY": $Item
static readonly "TIPPED_ARROW": $Item
static readonly "IRON_NUGGET": $Item
static readonly "MANGROVE_TRAPDOOR": $Item
static readonly "CANDLE": $Item
static readonly "STRIPPED_SPRUCE_LOG": $Item
static readonly "WAXED_EXPOSED_COPPER_DOOR": $Item
static readonly "WOODEN_SWORD": $Item
static readonly "COPPER_GRATE": $Item
static readonly "CHORUS_PLANT": $Item
static readonly "NETHER_BRICK": $Item
static readonly "ANDESITE_STAIRS": $Item
static readonly "PIGLIN_SPAWN_EGG": $Item
static readonly "STONE_HOE": $Item
static readonly "WAXED_WEATHERED_COPPER_BULB": $Item
static readonly "BRICKS": $Item
static readonly "CAT_SPAWN_EGG": $Item
static readonly "RED_NETHER_BRICK_WALL": $Item
static readonly "WET_SPONGE": $Item
static readonly "STRUCTURE_BLOCK": $Item
static readonly "SPIDER_SPAWN_EGG": $Item
static readonly "CHERRY_BUTTON": $Item
static readonly "RED_CARPET": $Item
static readonly "ENCHANTING_TABLE": $Item
static readonly "PHANTOM_SPAWN_EGG": $Item
static readonly "GUSTER_BANNER_PATTERN": $Item
static readonly "YELLOW_STAINED_GLASS": $Item
static readonly "PIGLIN_BANNER_PATTERN": $Item
static readonly "DEEPSLATE": $Item
static readonly "BAT_SPAWN_EGG": $Item
static readonly "RED_BANNER": $Item
static readonly "TADPOLE_SPAWN_EGG": $Item
static readonly "BLUE_STAINED_GLASS_PANE": $Item
static readonly "SPRUCE_LOG": $Item
static readonly "COPPER_TRAPDOOR": $Item
static readonly "BIRCH_FENCE": $Item
static readonly "MAP": $Item
static readonly "HOGLIN_SPAWN_EGG": $Item
static readonly "SOUL_LANTERN": $Item
static readonly "POLISHED_BLACKSTONE_BRICKS": $Item
static readonly "WHITE_STAINED_GLASS_PANE": $Item
static readonly "LIME_STAINED_GLASS": $Item
static readonly "DIORITE_WALL": $Item
static readonly "MAGMA_BLOCK": $Item
static readonly "GLOWSTONE_DUST": $Item
static readonly "STRIDER_SPAWN_EGG": $Item
static readonly "DARK_OAK_SIGN": $Item
static readonly "GOLDEN_SHOVEL": $Item
static readonly "POLISHED_DEEPSLATE": $Item
static readonly "RABBIT_SPAWN_EGG": $Item
static readonly "BLUE_CONCRETE_POWDER": $Item
static readonly "CHORUS_FLOWER": $Item
static readonly "BLACK_GLAZED_TERRACOTTA": $Item
static readonly "WRITTEN_BOOK": $Item
static readonly "RED_STAINED_GLASS": $Item
static readonly "DIAMOND_PICKAXE": $Item
static readonly "BARRIER": $Item
static readonly "ENCHANTED_BOOK": $Item
static readonly "WARPED_FENCE_GATE": $Item
static readonly "DEEPSLATE_REDSTONE_ORE": $Item
static readonly "BAMBOO_MOSAIC_STAIRS": $Item
static readonly "DEEPSLATE_BRICK_STAIRS": $Item
static readonly "CLAY_BALL": $Item
static readonly "WANDERING_TRADER_SPAWN_EGG": $Item
static readonly "LEATHER_BOOTS": $Item
static readonly "MILK_BUCKET": $Item
static readonly "COOKED_BEEF": $Item
static readonly "GRAY_CANDLE": $Item
static readonly "FARMLAND": $Item
static readonly "SKELETON_SPAWN_EGG": $Item
static readonly "TRIAL_SPAWNER": $Item
static readonly "SMOOTH_BASALT": $Item
static readonly "PRISMARINE_BRICKS": $Item
static readonly "DARK_OAK_LOG": $Item
static readonly "BRAIN_CORAL_FAN": $Item
static readonly "LEATHER_LEGGINGS": $Item
static readonly "WEATHERED_CUT_COPPER_SLAB": $Item
static readonly "OMINOUS_TRIAL_KEY": $Item
static readonly "FISHING_ROD": $Item
static readonly "WARDEN_SPAWN_EGG": $Item
static readonly "ACACIA_HANGING_SIGN": $Item
static readonly "MAGENTA_SHULKER_BOX": $Item
static readonly "ENDER_PEARL": $Item
static readonly "QUARTZ_PILLAR": $Item
static readonly "WARPED_TRAPDOOR": $Item
static readonly "AXOLOTL_BUCKET": $Item
static readonly "STRIPPED_BAMBOO_BLOCK": $Item
static readonly "GOAT_SPAWN_EGG": $Item
static readonly "REDSTONE_BLOCK": $Item
static readonly "COBBLED_DEEPSLATE_WALL": $Item
static readonly "MUSIC_DISC_PIGSTEP": $Item
static readonly "CHISELED_POLISHED_BLACKSTONE": $Item
static readonly "EXPOSED_CHISELED_COPPER": $Item
static readonly "BIRCH_SLAB": $Item
static readonly "LIME_SHULKER_BOX": $Item
static readonly "QUARTZ_SLAB": $Item
static readonly "OXIDIZED_COPPER_GRATE": $Item
static readonly "QUARTZ_BLOCK": $Item
static readonly "SHEEP_SPAWN_EGG": $Item
static readonly "PIGLIN_BRUTE_SPAWN_EGG": $Item
static readonly "SNOW": $Item
static readonly "SUGAR_CANE": $Item
static readonly "TNT_MINECART": $Item
static readonly "WITCH_SPAWN_EGG": $Item
static readonly "ACACIA_FENCE": $Item
static readonly "ARMOR_STAND": $Item
static readonly "DARK_OAK_FENCE": $Item
static readonly "HORN_CORAL": $Item
static readonly "BOW": $Item
static readonly "TUBE_CORAL_FAN": $Item
static readonly "SUGAR": $Item
static readonly "MOSSY_COBBLESTONE": $Item
static readonly "WARPED_FENCE": $Item
static readonly "DAYLIGHT_DETECTOR": $Item
static readonly "POLISHED_TUFF_WALL": $Item
static readonly "RABBIT_HIDE": $Item
static readonly "BUBBLE_CORAL": $Item
static readonly "JUNGLE_STAIRS": $Item
static readonly "CYAN_CARPET": $Item
static readonly "OXIDIZED_COPPER_DOOR": $Item
static readonly "OBSERVER": $Item
static readonly "DEEPSLATE_DIAMOND_ORE": $Item
static readonly "AMETHYST_BLOCK": $Item
static readonly "SPRUCE_TRAPDOOR": $Item
static readonly "JUNGLE_BOAT": $Item
static readonly "CHERRY_STAIRS": $Item
static readonly "CUT_COPPER": $Item
static readonly "BLAST_FURNACE": $Item
static readonly "RED_SANDSTONE_SLAB": $Item
static readonly "OBSIDIAN": $Item
static readonly "FIRE_CORAL_FAN": $Item
static readonly "AZURE_BLUET": $Item
static readonly "DEBUG_STICK": $Item
static readonly "PURPLE_STAINED_GLASS_PANE": $Item
static readonly "LIME_GLAZED_TERRACOTTA": $Item
static readonly "HUSK_SPAWN_EGG": $Item
static readonly "CARTOGRAPHY_TABLE": $Item
static readonly "BOLT_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "ORANGE_CANDLE": $Item
static readonly "CHARCOAL": $Item
static readonly "ZOMBIE_SPAWN_EGG": $Item
static readonly "BEETROOT_SOUP": $Item
static readonly "WITHER_ROSE": $Item
static readonly "DEAD_BRAIN_CORAL_FAN": $Item
static readonly "PISTON": $Item
static readonly "NETHERITE_CHESTPLATE": $Item
static readonly "BLACK_CANDLE": $Item
static readonly "CUT_RED_SANDSTONE": $Item
static readonly "YELLOW_BANNER": $Item
static readonly "BIRCH_SAPLING": $Item
static readonly "LIME_CONCRETE": $Item
static readonly "CHAINMAIL_LEGGINGS": $Item
static readonly "PURPUR_SLAB": $Item
static readonly "SNOWBALL": $Item
static readonly "PURPLE_CONCRETE_POWDER": $Item
static readonly "PURPLE_BANNER": $Item
static readonly "BIRCH_LOG": $Item
static readonly "DEEPSLATE_BRICK_WALL": $Item
static readonly "DARK_PRISMARINE_SLAB": $Item
static readonly "ACACIA_PLANKS": $Item
static readonly "MYCELIUM": $Item
static readonly "RED_SANDSTONE": $Item
static readonly "BROWN_CONCRETE": $Item
static readonly "LEATHER_CHESTPLATE": $Item
static readonly "PRISMARINE_BRICK_STAIRS": $Item
static readonly "BUNDLE": $Item
static readonly "STONE_SLAB": $Item
static readonly "LEATHER_HORSE_ARMOR": $Item
static readonly "BIRCH_LEAVES": $Item
static readonly "BAMBOO_FENCE_GATE": $Item
static readonly "DEEPSLATE_GOLD_ORE": $Item
static readonly "NETHER_BRICK_FENCE": $Item
static readonly "FIREWORK_ROCKET": $Item
static readonly "BROWN_MUSHROOM": $Item
static readonly "TUFF_BRICK_SLAB": $Item
static readonly "CYAN_SHULKER_BOX": $Item
static readonly "POLISHED_BLACKSTONE_SLAB": $Item
static readonly "WAXED_EXPOSED_CHISELED_COPPER": $Item
static readonly "NETHERITE_BLOCK": $Item
static readonly "OCELOT_SPAWN_EGG": $Item
static readonly "ACACIA_PRESSURE_PLATE": $Item
static readonly "RED_SAND": $Item
static readonly "PACKED_MUD": $Item
static readonly "SHEARS": $Item
static readonly "POLISHED_GRANITE_STAIRS": $Item
static readonly "MAGENTA_BANNER": $Item
static readonly "QUARTZ_STAIRS": $Item
static readonly "DRIED_KELP_BLOCK": $Item
static readonly "SCULK_VEIN": $Item
static readonly "BREWING_STAND": $Item
static readonly "CACTUS": $Item
static readonly "SMOOTH_QUARTZ_SLAB": $Item
static readonly "CAKE": $Item
static readonly "CHAINMAIL_BOOTS": $Item
static readonly "STRIPPED_ACACIA_WOOD": $Item
static readonly "FIREWORK_STAR": $Item
static readonly "PURPLE_DYE": $Item
static readonly "COW_SPAWN_EGG": $Item
static readonly "BAMBOO_MOSAIC_SLAB": $Item
static readonly "ELDER_GUARDIAN_SPAWN_EGG": $Item
static readonly "LIGHT_GRAY_BANNER": $Item
static readonly "GREEN_BANNER": $Item
static readonly "SPRUCE_SIGN": $Item
static readonly "BLUE_STAINED_GLASS": $Item
static readonly "ZOMBIE_VILLAGER_SPAWN_EGG": $Item
static readonly "CHISELED_TUFF_BRICKS": $Item
static readonly "STRIPPED_BIRCH_WOOD": $Item
static readonly "SLIME_BLOCK": $Item
static readonly "RED_MUSHROOM": $Item
static readonly "DRIED_KELP": $Item
static readonly "BAMBOO_FENCE": $Item
static readonly "SPRUCE_SAPLING": $Item
static readonly "LIGHT_BLUE_STAINED_GLASS": $Item
static readonly "MUTTON": $Item
static readonly "NAUTILUS_SHELL": $Item
static readonly "EXPOSED_COPPER_DOOR": $Item
static readonly "GLOBE_BANNER_PATTERN": $Item
static readonly "POLISHED_GRANITE_SLAB": $Item
static readonly "SMOOTH_RED_SANDSTONE_STAIRS": $Item
static readonly "WAXED_COPPER_TRAPDOOR": $Item
static readonly "BRAIN_CORAL": $Item
static readonly "TURTLE_HELMET": $Item
static readonly "PUFFERFISH_BUCKET": $Item
static readonly "COMPARATOR": $Item
static readonly "PIG_SPAWN_EGG": $Item
static readonly "REDSTONE_ORE": $Item
static readonly "STRIPPED_CRIMSON_HYPHAE": $Item
static readonly "SPIDER_EYE": $Item
static readonly "PINK_CANDLE": $Item
static readonly "DEAD_FIRE_CORAL_BLOCK": $Item
static readonly "RED_SANDSTONE_WALL": $Item
static readonly "WITHER_SKELETON_SKULL": $Item
static readonly "LIGHT_GRAY_TERRACOTTA": $Item
static readonly "LIGHT_BLUE_STAINED_GLASS_PANE": $Item
static readonly "FLOW_POTTERY_SHERD": $Item
static readonly "GRASS_BLOCK": $Item
static readonly "KNOWLEDGE_BOOK": $Item
static readonly "EXPOSED_COPPER_TRAPDOOR": $Item
static readonly "NETHERITE_AXE": $Item
static readonly "MAGENTA_STAINED_GLASS": $Item
static readonly "CRIMSON_PRESSURE_PLATE": $Item
static readonly "COAL_ORE": $Item
static readonly "FURNACE_MINECART": $Item
static readonly "DEEPSLATE_BRICKS": $Item
static readonly "WAXED_EXPOSED_COPPER_BULB": $Item
static readonly "PRISMARINE_CRYSTALS": $Item
static readonly "ICE": $Item
static readonly "PURPLE_SHULKER_BOX": $Item
static readonly "RIB_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "LIGHT_GRAY_CONCRETE_POWDER": $Item
static readonly "STRIPPED_OAK_WOOD": $Item
static readonly "DEEPSLATE_BRICK_SLAB": $Item
static readonly "GOLD_ORE": $Item
static readonly "GREEN_CARPET": $Item
static readonly "OCHRE_FROGLIGHT": $Item
static readonly "POLISHED_BLACKSTONE": $Item
static readonly "BLAZE_POWDER": $Item
static readonly "CLAY": $Item
static readonly "TUBE_CORAL_BLOCK": $Item
static readonly "LILAC": $Item
static readonly "RED_SANDSTONE_STAIRS": $Item
static readonly "RABBIT_FOOT": $Item
static readonly "STRIPPED_CHERRY_LOG": $Item
static readonly "WAXED_CUT_COPPER_STAIRS": $Item
static readonly "DARK_PRISMARINE": $Item
static readonly "REDSTONE": $Item
static readonly "MUSIC_DISC_WAIT": $Item
static readonly "WAXED_EXPOSED_COPPER_GRATE": $Item
static readonly "NETHER_SPROUTS": $Item
static readonly "LINGERING_POTION": $Item
static readonly "BUBBLE_CORAL_BLOCK": $Item
static readonly "BLUE_GLAZED_TERRACOTTA": $Item
static readonly "WHITE_DYE": $Item
static readonly "BRICK_WALL": $Item
static readonly "ACACIA_FENCE_GATE": $Item
static readonly "SLIME_BALL": $Item
static readonly "GLOW_LICHEN": $Item
static readonly "CHERRY_DOOR": $Item
static readonly "BIRCH_FENCE_GATE": $Item
static readonly "LIGHT_GRAY_CONCRETE": $Item
static readonly "DIAMOND_LEGGINGS": $Item
static readonly "DRAGON_BREATH": $Item
static readonly "OXIDIZED_CUT_COPPER_SLAB": $Item
static readonly "MOSSY_COBBLESTONE_STAIRS": $Item
static readonly "DARK_OAK_TRAPDOOR": $Item
static readonly "YELLOW_TERRACOTTA": $Item
static readonly "WITHER_SPAWN_EGG": $Item
static readonly "WEATHERED_CHISELED_COPPER": $Item
static readonly "CHISELED_RED_SANDSTONE": $Item
static readonly "JUNGLE_WOOD": $Item
static readonly "WARPED_FUNGUS_ON_A_STICK": $Item
static readonly "PUMPKIN_SEEDS": $Item
static readonly "CRACKED_DEEPSLATE_TILES": $Item
static readonly "NETHERITE_INGOT": $Item
static readonly "WHITE_BANNER": $Item
static readonly "ACACIA_DOOR": $Item
static readonly "FLOWERING_AZALEA": $Item
static readonly "MOSSY_STONE_BRICKS": $Item
static readonly "PRISMARINE": $Item
static readonly "WARPED_BUTTON": $Item
static readonly "TUFF_SLAB": $Item
static readonly "DEAD_TUBE_CORAL_BLOCK": $Item
static readonly "GOLDEN_HELMET": $Item
static readonly "SMOOTH_SANDSTONE": $Item
static readonly "DIAMOND_BLOCK": $Item
static readonly "MUSIC_DISC_5": $Item
static readonly "OAK_SAPLING": $Item
static readonly "POLISHED_DEEPSLATE_SLAB": $Item
static readonly "PARROT_SPAWN_EGG": $Item
static readonly "MANGROVE_FENCE_GATE": $Item
static readonly "CHISELED_DEEPSLATE": $Item
static readonly "STONE_BRICK_SLAB": $Item
static readonly "CUT_COPPER_STAIRS": $Item
static readonly "GRAY_CONCRETE": $Item
static readonly "DARK_OAK_LEAVES": $Item
static readonly "EXPOSED_COPPER_GRATE": $Item
static readonly "BAMBOO_PRESSURE_PLATE": $Item
static readonly "IRON_AXE": $Item
static readonly "MELON": $Item
static readonly "SEA_LANTERN": $Item
static readonly "GREEN_CONCRETE": $Item
static readonly "LANTERN": $Item
static readonly "SHIELD": $Item
static readonly "SMOOTH_STONE_SLAB": $Item
static readonly "SMOOTH_STONE": $Item
static readonly "COD_SPAWN_EGG": $Item
static readonly "GREEN_STAINED_GLASS_PANE": $Item
static readonly "ORANGE_CONCRETE": $Item
static readonly "BONE": $Item
static readonly "RED_NETHER_BRICKS": $Item
static readonly "POISONOUS_POTATO": $Item
static readonly "MANGROVE_DOOR": $Item
static readonly "MUSIC_DISC_FAR": $Item
static readonly "CYAN_CONCRETE_POWDER": $Item
static readonly "WAXED_COPPER_BLOCK": $Item
static readonly "SMOKER": $Item
static readonly "BIRCH_PLANKS": $Item
static readonly "WOODEN_PICKAXE": $Item
static readonly "REPEATING_COMMAND_BLOCK": $Item
static readonly "TURTLE_SPAWN_EGG": $Item
static readonly "RED_CONCRETE_POWDER": $Item
static readonly "BIRCH_DOOR": $Item
static readonly "CRIMSON_SIGN": $Item
static readonly "DARK_OAK_BOAT": $Item
static readonly "BLAZE_ROD": $Item
static readonly "BOOK": $Item
static readonly "YELLOW_DYE": $Item
static readonly "CHISELED_COPPER": $Item
static readonly "CRIMSON_TRAPDOOR": $Item
static readonly "WEATHERED_COPPER_TRAPDOOR": $Item
static readonly "BLUE_CARPET": $Item
static readonly "DEEPSLATE_TILE_SLAB": $Item
static readonly "GOLDEN_HORSE_ARMOR": $Item
static readonly "DRAGON_EGG": $Item
static readonly "EXPOSED_COPPER": $Item
static readonly "WEATHERED_CUT_COPPER_STAIRS": $Item
static readonly "SANDSTONE": $Item
static readonly "CRIMSON_STAIRS": $Item
static readonly "COBBLED_DEEPSLATE_SLAB": $Item
static readonly "MUSIC_DISC_MELLOHI": $Item
static readonly "MOSS_CARPET": $Item
static readonly "BREAD": $Item
static readonly "ANVIL": $Item
static readonly "REPEATER": $Item
static readonly "CRIMSON_HANGING_SIGN": $Item
static readonly "OXIDIZED_COPPER_BULB": $Item
static readonly "MANGROVE_CHEST_BOAT": $Item
static readonly "DEAD_BRAIN_CORAL": $Item
static readonly "BOOKSHELF": $Item
static readonly "SMOOTH_QUARTZ_STAIRS": $Item
static readonly "DANGER_POTTERY_SHERD": $Item
static readonly "LIGHT_BLUE_CANDLE": $Item
static readonly "WILD_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "COOKED_CHICKEN": $Item
static readonly "SPRUCE_WOOD": $Item
static readonly "BLACK_TERRACOTTA": $Item
static readonly "STONE_STAIRS": $Item
static readonly "EXPERIENCE_BOTTLE": $Item
static readonly "POLISHED_TUFF_SLAB": $Item
static readonly "POWDER_SNOW_BUCKET": $Item
static readonly "COMMAND_BLOCK_MINECART": $Item
static readonly "PHANTOM_MEMBRANE": $Item
static readonly "LIME_WOOL": $Item
static readonly "SPRUCE_FENCE": $Item
static readonly "SALMON": $Item
static readonly "OAK_PRESSURE_PLATE": $Item
static readonly "HONEY_BLOCK": $Item
static readonly "STRIPPED_DARK_OAK_WOOD": $Item
static readonly "MEDIUM_AMETHYST_BUD": $Item
static readonly "BIRCH_STAIRS": $Item
static readonly "MANGROVE_BUTTON": $Item
static readonly "BIRCH_TRAPDOOR": $Item
static readonly "COMPOSTER": $Item
static readonly "PITCHER_POD": $Item
static readonly "ORANGE_STAINED_GLASS": $Item
static readonly "GOLD_INGOT": $Item
static readonly "DECORATED_POT": $Item
static readonly "GLASS": $Item
static readonly "STRIPPED_MANGROVE_LOG": $Item
static readonly "ITEM_FRAME": $Item
static readonly "CHERRY_PLANKS": $Item
static readonly "NETHERITE_BOOTS": $Item
static readonly "SOUL_SAND": $Item
static readonly "EMERALD": $Item
static readonly "DIAMOND_HELMET": $Item
static readonly "GREEN_STAINED_GLASS": $Item
static readonly "GRAY_STAINED_GLASS_PANE": $Item
static readonly "SHULKER_SHELL": $Item
static readonly "BLUE_WOOL": $Item
static readonly "MAGENTA_WOOL": $Item
static readonly "PITCHER_PLANT": $Item
static readonly "BAMBOO_DOOR": $Item
static readonly "DEAD_HORN_CORAL": $Item
static readonly "IRON_HELMET": $Item
static readonly "COCOA_BEANS": $Item
static readonly "PINK_BED": $Item
static readonly "CYAN_CANDLE": $Item
static readonly "POPPY": $Item
static readonly "CYAN_TERRACOTTA": $Item
static readonly "TRIPWIRE_HOOK": $Item
static readonly "PACKED_ICE": $Item
static readonly "YELLOW_CONCRETE": $Item
static readonly "WEATHERED_COPPER_DOOR": $Item
static readonly "ACACIA_STAIRS": $Item
static readonly "COMPASS": $Item
static readonly "VINE": $Item
static readonly "INFESTED_STONE_BRICKS": $Item
static readonly "GOLDEN_CHESTPLATE": $Item
static readonly "COPPER_ORE": $Item
static readonly "NETHERITE_HOE": $Item
static readonly "BAMBOO_TRAPDOOR": $Item
static readonly "CARROT": $Item
static readonly "MAGMA_CUBE_SPAWN_EGG": $Item
static readonly "MUSIC_DISC_13": $Item
static readonly "MUSIC_DISC_WARD": $Item
static readonly "PODZOL": $Item
static readonly "WARPED_WART_BLOCK": $Item
static readonly "MUSIC_DISC_11": $Item
static readonly "POLISHED_BLACKSTONE_WALL": $Item
static readonly "WARPED_NYLIUM": $Item
static readonly "STRIPPED_CRIMSON_STEM": $Item
static readonly "BLUE_BED": $Item
static readonly "DEAD_FIRE_CORAL": $Item
static readonly "PLENTY_POTTERY_SHERD": $Item
static readonly "TURTLE_SCUTE": $Item
static readonly "BLACK_CARPET": $Item
static readonly "MUD": $Item
static readonly "PINK_TERRACOTTA": $Item
static readonly "SHEAF_POTTERY_SHERD": $Item
static readonly "GLOW_SQUID_SPAWN_EGG": $Item
static readonly "FIRE_CORAL_BLOCK": $Item
static readonly "DIAMOND_SHOVEL": $Item
static readonly "GRAY_GLAZED_TERRACOTTA": $Item
static readonly "BREEZE_ROD": $Item
static readonly "NAME_TAG": $Item
static readonly "CHERRY_LEAVES": $Item
static readonly "WEATHERED_COPPER_GRATE": $Item
static readonly "JUNGLE_FENCE": $Item
static readonly "SPAWNER": $Item
static readonly "POLISHED_BASALT": $Item
static readonly "ARCHER_POTTERY_SHERD": $Item
static readonly "WARPED_FUNGUS": $Item
static readonly "WHITE_CONCRETE_POWDER": $Item
static readonly "GRAY_TERRACOTTA": $Item
static readonly "RAIL": $Item
static readonly "MUSIC_DISC_PRECIPICE": $Item
static readonly "SWEET_BERRIES": $Item
static readonly "BREWER_POTTERY_SHERD": $Item
static readonly "DIAMOND_BOOTS": $Item
static readonly "WRITABLE_BOOK": $Item
static readonly "BEDROCK": $Item
static readonly "IRON_GOLEM_SPAWN_EGG": $Item
static readonly "RABBIT": $Item
static readonly "INFESTED_DEEPSLATE": $Item
static readonly "SHROOMLIGHT": $Item
static readonly "CHAIN_COMMAND_BLOCK": $Item
static readonly "CYAN_GLAZED_TERRACOTTA": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER_SLAB": $Item
static readonly "GLOW_ITEM_FRAME": $Item
static readonly "ECHO_SHARD": $Item
static readonly "STRIPPED_DARK_OAK_LOG": $Item
static readonly "GRAY_WOOL": $Item
static readonly "MUSIC_DISC_CREATOR_MUSIC_BOX": $Item
static readonly "ACACIA_CHEST_BOAT": $Item
static readonly "ARMADILLO_SCUTE": $Item
static readonly "MUSIC_DISC_RELIC": $Item
static readonly "DARK_OAK_SLAB": $Item
static readonly "OAK_SIGN": $Item
static readonly "RED_CONCRETE": $Item
static readonly "CRACKED_POLISHED_BLACKSTONE_BRICKS": $Item
static readonly "ANGLER_POTTERY_SHERD": $Item
static readonly "WHEAT_SEEDS": $Item
static readonly "BEEHIVE": $Item
static readonly "WAXED_OXIDIZED_COPPER_DOOR": $Item
static readonly "GRAY_SHULKER_BOX": $Item
static readonly "WARPED_DOOR": $Item
static readonly "TROPICAL_FISH_BUCKET": $Item
static readonly "OAK_FENCE": $Item
static readonly "NETHER_BRICKS": $Item
static readonly "RED_CANDLE": $Item
static readonly "FLETCHING_TABLE": $Item
static readonly "FLOWER_BANNER_PATTERN": $Item
static readonly "EGG": $Item
static readonly "BRICK": $Item
static readonly "GRAY_BANNER": $Item
static readonly "ENDERMAN_SPAWN_EGG": $Item
static readonly "MAGENTA_CONCRETE": $Item
static readonly "JUNGLE_FENCE_GATE": $Item
static readonly "DARK_OAK_CHEST_BOAT": $Item
static readonly "BEETROOT_SEEDS": $Item
static readonly "FLOW_BANNER_PATTERN": $Item
static readonly "BLACK_SHULKER_BOX": $Item
static readonly "FROGSPAWN": $Item
static readonly "JUNGLE_TRAPDOOR": $Item
static readonly "OXIDIZED_CUT_COPPER_STAIRS": $Item
static readonly "ACTIVATOR_RAIL": $Item
static readonly "BOWL": $Item
static readonly "SILVERFISH_SPAWN_EGG": $Item
static readonly "DIRT_PATH": $Item
static readonly "GOLDEN_APPLE": $Item
static readonly "ZOMBIE_HORSE_SPAWN_EGG": $Item
static readonly "IRON_BOOTS": $Item
static readonly "ENCHANTED_GOLDEN_APPLE": $Item
static readonly "SHULKER_SPAWN_EGG": $Item
static readonly "HOPPER_MINECART": $Item
static readonly "ORANGE_CARPET": $Item
static readonly "PINK_CARPET": $Item
static readonly "STRUCTURE_VOID": $Item
static readonly "SADDLE": $Item
static readonly "STONECUTTER": $Item
static readonly "LIME_CONCRETE_POWDER": $Item
static readonly "POLISHED_BLACKSTONE_PRESSURE_PLATE": $Item
static readonly "PINK_BANNER": $Item
static readonly "GREEN_WOOL": $Item
static readonly "HORN_CORAL_FAN": $Item
static readonly "BROWN_DYE": $Item
static readonly "POPPED_CHORUS_FRUIT": $Item
static readonly "IRON_HOE": $Item
static readonly "CHERRY_FENCE": $Item
static readonly "MOSSY_COBBLESTONE_SLAB": $Item
static readonly "DARK_PRISMARINE_STAIRS": $Item
static readonly "TWISTING_VINES": $Item
static readonly "BOGGED_SPAWN_EGG": $Item
static readonly "PINK_CONCRETE": $Item
static readonly "GUNPOWDER": $Item
static readonly "LIME_BANNER": $Item
static readonly "MUSHROOM_STEW": $Item
static readonly "IRON_CHESTPLATE": $Item
static readonly "PRISMARINE_SHARD": $Item
static readonly "BIRCH_CHEST_BOAT": $Item
static readonly "JUNGLE_BUTTON": $Item
static readonly "BEEF": $Item
static readonly "WAXED_WEATHERED_COPPER": $Item
static readonly "MUSHROOM_STEM": $Item
static readonly "BLUE_TERRACOTTA": $Item
static readonly "VEX_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "EXPLORER_POTTERY_SHERD": $Item
static readonly "BROWN_MUSHROOM_BLOCK": $Item
static readonly "DEAD_TUBE_CORAL_FAN": $Item
static readonly "TADPOLE_BUCKET": $Item
static readonly "MAGENTA_GLAZED_TERRACOTTA": $Item
static readonly "TUFF_WALL": $Item
static readonly "CHISELED_BOOKSHELF": $Item
static readonly "DEAD_BUBBLE_CORAL": $Item
static readonly "RAW_GOLD": $Item
static readonly "WHITE_GLAZED_TERRACOTTA": $Item
static readonly "WAXED_OXIDIZED_COPPER": $Item
static readonly "NETHERITE_SCRAP": $Item
static readonly "GOLDEN_HOE": $Item
static readonly "GREEN_BED": $Item
static readonly "CAULDRON": $Item
static readonly "POLISHED_ANDESITE_STAIRS": $Item
static readonly "CHERRY_FENCE_GATE": $Item
static readonly "WITHER_SKELETON_SPAWN_EGG": $Item
static readonly "EMERALD_BLOCK": $Item
static readonly "IRON_SHOVEL": $Item
static readonly "LIME_STAINED_GLASS_PANE": $Item
static readonly "ORANGE_BANNER": $Item
static readonly "WAXED_WEATHERED_CHISELED_COPPER": $Item
static readonly "BLACK_DYE": $Item
static readonly "MUSIC_DISC_BLOCKS": $Item
static readonly "GOLDEN_BOOTS": $Item
static readonly "LIGHT_BLUE_GLAZED_TERRACOTTA": $Item
static readonly "OXIDIZED_COPPER": $Item
static readonly "PINK_STAINED_GLASS": $Item
static readonly "SPRUCE_STAIRS": $Item
static readonly "NETHERITE_LEGGINGS": $Item
static readonly "BLUE_ICE": $Item
static readonly "CAVE_SPIDER_SPAWN_EGG": $Item
static readonly "HEART_POTTERY_SHERD": $Item
static readonly "SCAFFOLDING": $Item
static readonly "CYAN_DYE": $Item
static readonly "BLUE_SHULKER_BOX": $Item
static readonly "HORN_CORAL_BLOCK": $Item
static readonly "CRIMSON_SLAB": $Item
static readonly "RESPAWN_ANCHOR": $Item
static readonly "SHELTER_POTTERY_SHERD": $Item
static readonly "KELP": $Item
static readonly "COPPER_BLOCK": $Item
static readonly "STRIPPED_WARPED_HYPHAE": $Item
static readonly "STRIPPED_JUNGLE_LOG": $Item
static readonly "ANDESITE_SLAB": $Item
static readonly "MINER_POTTERY_SHERD": $Item
static readonly "HOWL_POTTERY_SHERD": $Item
static readonly "SUSPICIOUS_GRAVEL": $Item
static readonly "CRIMSON_PLANKS": $Item
static readonly "GOLD_BLOCK": $Item
static readonly "DARK_OAK_FENCE_GATE": $Item
static readonly "SPRUCE_PRESSURE_PLATE": $Item
static readonly "ACACIA_LEAVES": $Item
static readonly "COBBLESTONE_SLAB": $Item
static readonly "HEAVY_WEIGHTED_PRESSURE_PLATE": $Item
static readonly "PINK_CONCRETE_POWDER": $Item
static readonly "WAXED_COPPER_GRATE": $Item
static readonly "COPPER_INGOT": $Item
static readonly "MELON_SLICE": $Item
static readonly "LIGHT_BLUE_CONCRETE_POWDER": $Item
static readonly "LIGHT_BLUE_DYE": $Item
static readonly "LAPIS_LAZULI": $Item
static readonly "CHISELED_TUFF": $Item
static readonly "WHITE_BED": $Item
static readonly "BUBBLE_CORAL_FAN": $Item
static readonly "HEARTBREAK_POTTERY_SHERD": $Item
static readonly "JUNGLE_CHEST_BOAT": $Item
static readonly "JUNGLE_LOG": $Item
static readonly "NOTE_BLOCK": $Item
static readonly "MANGROVE_SIGN": $Item
static readonly "WARPED_HYPHAE": $Item
static readonly "SLIME_SPAWN_EGG": $Item
static readonly "CHERRY_SIGN": $Item
static readonly "LAVA_BUCKET": $Item
static readonly "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "SPRUCE_SLAB": $Item
static readonly "DIAMOND_AXE": $Item
static readonly "PEONY": $Item
static readonly "OXEYE_DAISY": $Item
static readonly "STICK": $Item
static readonly "OAK_HANGING_SIGN": $Item
static readonly "WATER_BUCKET": $Item
static readonly "ACACIA_SIGN": $Item
static readonly "STRIPPED_WARPED_STEM": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER": $Item
static readonly "MOSS_BLOCK": $Item
static readonly "BEACON": $Item
static readonly "HONEYCOMB_BLOCK": $Item
static readonly "NETHER_BRICK_STAIRS": $Item
static readonly "BRUSH": $Item
static readonly "COBWEB": $Item
static readonly "PRIZE_POTTERY_SHERD": $Item
static readonly "MACE": $Item
static readonly "OAK_LOG": $Item
static readonly "STRIPPED_JUNGLE_WOOD": $Item
static readonly "DEAD_BRAIN_CORAL_BLOCK": $Item
static readonly "MUDDY_MANGROVE_ROOTS": $Item
static readonly "PUFFERFISH": $Item
static readonly "TINTED_GLASS": $Item
static readonly "MAGENTA_CANDLE": $Item
static readonly "YELLOW_BED": $Item
static readonly "LIGHT_GRAY_CANDLE": $Item
static readonly "SPLASH_POTION": $Item
static readonly "CHICKEN_SPAWN_EGG": $Item
static readonly "CHISELED_QUARTZ_BLOCK": $Item
static readonly "LIME_CARPET": $Item
static readonly "FEATHER": $Item
static readonly "DEEPSLATE_EMERALD_ORE": $Item
static readonly "MUD_BRICK_SLAB": $Item
static readonly "PURPLE_GLAZED_TERRACOTTA": $Item
static readonly "IRON_BARS": $Item
static readonly "WHITE_CONCRETE": $Item
static readonly "DIAMOND_CHESTPLATE": $Item
static readonly "STONE": $Item
static readonly "NETHERITE_SHOVEL": $Item
static readonly "YELLOW_WOOL": $Item
static readonly "ROSE_BUSH": $Item
static readonly "OMINOUS_BOTTLE": $Item
static readonly "MUD_BRICKS": $Item
static readonly "BROWN_CARPET": $Item
static readonly "WAXED_CHISELED_COPPER": $Item
static readonly "STRIPPED_CHERRY_WOOD": $Item
static readonly "GOLD_NUGGET": $Item
static readonly "BLACKSTONE_STAIRS": $Item
static readonly "GOLDEN_AXE": $Item
static readonly "ACACIA_LOG": $Item
static readonly "INFESTED_MOSSY_STONE_BRICKS": $Item
static readonly "CREEPER_SPAWN_EGG": $Item
static readonly "ORANGE_GLAZED_TERRACOTTA": $Item
static readonly "MUD_BRICK_STAIRS": $Item
static readonly "MAGENTA_CONCRETE_POWDER": $Item
static readonly "TNT": $Item
static readonly "BELL": $Item
static readonly "BLACKSTONE_SLAB": $Item
static readonly "TORCHFLOWER": $Item
static readonly "SPRUCE_HANGING_SIGN": $Item
static readonly "STRIPPED_ACACIA_LOG": $Item
static readonly "HOST_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "RAW_IRON_BLOCK": $Item
static readonly "POTATO": $Item
static readonly "GHAST_TEAR": $Item
static readonly "BROWN_BANNER": $Item
static readonly "AIR": $Item
static readonly "FROG_SPAWN_EGG": $Item
static readonly "GRANITE_STAIRS": $Item
static readonly "BEE_NEST": $Item
static readonly "PINK_PETALS": $Item
static readonly "CHEST": $Item
static readonly "DOLPHIN_SPAWN_EGG": $Item
static readonly "SCULK_SENSOR": $Item
static readonly "OAK_CHEST_BOAT": $Item
static readonly "BONE_MEAL": $Item
static readonly "LIME_DYE": $Item
static readonly "MANGROVE_FENCE": $Item
static readonly "OAK_DOOR": $Item
static readonly "LILY_PAD": $Item
static readonly "ENDER_DRAGON_SPAWN_EGG": $Item
static readonly "BAKED_POTATO": $Item
static readonly "SMALL_DRIPLEAF": $Item
static readonly "EXPOSED_CUT_COPPER_SLAB": $Item
static readonly "PURPUR_STAIRS": $Item
static readonly "LADDER": $Item
static readonly "RED_MUSHROOM_BLOCK": $Item
static readonly "WOLF_ARMOR": $Item
static readonly "CRAFTER": $Item
static readonly "BASALT": $Item
static readonly "TALL_GRASS": $Item
static readonly "BAMBOO_SIGN": $Item
static readonly "DEAD_BUSH": $Item
static readonly "FLOW_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "COD": $Item
static readonly "EXPOSED_CUT_COPPER_STAIRS": $Item
static readonly "PETRIFIED_OAK_SLAB": $Item
static readonly "MUD_BRICK_WALL": $Item
static readonly "LIGHT_BLUE_CARPET": $Item
static readonly "SCULK_CATALYST": $Item
static readonly "CALIBRATED_SCULK_SENSOR": $Item
static readonly "WAXED_OXIDIZED_CUT_COPPER_STAIRS": $Item
static readonly "PINK_DYE": $Item
static readonly "WARPED_ROOTS": $Item
static readonly "CHAIN": $Item
static readonly "FIRE_CORAL": $Item
static readonly "DEEPSLATE_IRON_ORE": $Item
static readonly "WAXED_OXIDIZED_COPPER_BULB": $Item
static readonly "CHISELED_NETHER_BRICKS": $Item
static readonly "LIGHT_GRAY_STAINED_GLASS_PANE": $Item
static readonly "HEART_OF_THE_SEA": $Item
static readonly "COAL_BLOCK": $Item
static readonly "WHITE_STAINED_GLASS": $Item
static readonly "WEATHERED_CUT_COPPER": $Item
static readonly "CALCITE": $Item
static readonly "PURPUR_PILLAR": $Item
static readonly "BLUE_DYE": $Item
static readonly "MUSIC_DISC_CHIRP": $Item
static readonly "NETHERITE_HELMET": $Item
static readonly "SNOW_GOLEM_SPAWN_EGG": $Item
static readonly "WARD_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "ACACIA_TRAPDOOR": $Item
static readonly "CHERRY_WOOD": $Item
static readonly "CHERRY_CHEST_BOAT": $Item
static readonly "CAMEL_SPAWN_EGG": $Item
static readonly "CRIMSON_STEM": $Item
static readonly "WHITE_CARPET": $Item
static readonly "VINDICATOR_SPAWN_EGG": $Item
static readonly "COAL": $Item
static readonly "RAW_GOLD_BLOCK": $Item
static readonly "CHISELED_STONE_BRICKS": $Item
static readonly "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "JIGSAW": $Item
static readonly "PURPUR_BLOCK": $Item
static readonly "TRIDENT": $Item
static readonly "FURNACE": $Item
static readonly "EVOKER_SPAWN_EGG": $Item
static readonly "JACK_O_LANTERN": $Item
static readonly "BIRCH_PRESSURE_PLATE": $Item
static readonly "BLACK_BED": $Item
static readonly "VILLAGER_SPAWN_EGG": $Item
static readonly "DEEPSLATE_LAPIS_ORE": $Item
static readonly "WAXED_OXIDIZED_CHISELED_COPPER": $Item
static readonly "LARGE_FERN": $Item
static readonly "QUARTZ": $Item
static readonly "SNIFFER_EGG": $Item
static readonly "CUT_RED_SANDSTONE_SLAB": $Item
static readonly "PURPLE_TERRACOTTA": $Item
static readonly "ELYTRA": $Item
static readonly "MAGMA_CREAM": $Item
static readonly "DIRT": $Item
static readonly "WEEPING_VINES": $Item
static readonly "COBBLED_DEEPSLATE": $Item
static readonly "GRAY_BED": $Item
static readonly "MULE_SPAWN_EGG": $Item
static readonly "BONE_BLOCK": $Item
static readonly "POLISHED_DIORITE": $Item
static readonly "GLISTERING_MELON_SLICE": $Item
static readonly "CUT_SANDSTONE": $Item
static readonly "WHITE_TERRACOTTA": $Item
static readonly "COD_BUCKET": $Item
static readonly "EYE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "MOSSY_COBBLESTONE_WALL": $Item
static readonly "SKULL_BANNER_PATTERN": $Item
static readonly "GRINDSTONE": $Item
static readonly "POWERED_RAIL": $Item
static readonly "JUNGLE_SIGN": $Item
static readonly "DARK_OAK_PLANKS": $Item
static readonly "GUARDIAN_SPAWN_EGG": $Item
static readonly "ACACIA_WOOD": $Item
static readonly "END_STONE_BRICK_SLAB": $Item
static readonly "SPRUCE_BOAT": $Item
static readonly "MANGROVE_WOOD": $Item
static readonly "LIGHT_GRAY_STAINED_GLASS": $Item
static readonly "TROPICAL_FISH": $Item
static readonly "SEAGRASS": $Item
static readonly "WEATHERED_COPPER": $Item
static readonly "WAXED_WEATHERED_COPPER_GRATE": $Item
static readonly "OAK_PLANKS": $Item
static readonly "END_PORTAL_FRAME": $Item
static readonly "LEATHER": $Item
static readonly "WAXED_OXIDIZED_COPPER_TRAPDOOR": $Item
static readonly "STONE_SHOVEL": $Item
static readonly "DEEPSLATE_COAL_ORE": $Item
static readonly "FLOWER_POT": $Item
static readonly "HEAVY_CORE": $Item
static readonly "IRON_PICKAXE": $Item
static readonly "LIGHT_GRAY_DYE": $Item
static readonly "STRAY_SPAWN_EGG": $Item
static readonly "WIND_CHARGE": $Item
static readonly "RED_TERRACOTTA": $Item
static readonly "MOOSHROOM_SPAWN_EGG": $Item
static readonly "PAPER": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER": $Item
static readonly "IRON_SWORD": $Item
static readonly "SALMON_BUCKET": $Item
static readonly "WARPED_SIGN": $Item
static readonly "COPPER_BULB": $Item
static readonly "CUT_STANDSTONE_SLAB": $Item
static readonly "SNOW_BLOCK": $Item
static readonly "CRIMSON_FENCE": $Item
static readonly "AMETHYST_SHARD": $Item
static readonly "BURN_POTTERY_SHERD": $Item
static readonly "POLISHED_DIORITE_SLAB": $Item
static readonly "ALLAY_SPAWN_EGG": $Item
static readonly "PILLAGER_SPAWN_EGG": $Item
static readonly "BRAIN_CORAL_BLOCK": $Item
static readonly "RAVAGER_SPAWN_EGG": $Item
static readonly "MOSSY_STONE_BRICK_SLAB": $Item
static readonly "STONE_BRICKS": $Item
static readonly "SANDSTONE_STAIRS": $Item
static readonly "GOLDEN_LEGGINGS": $Item
static readonly "BROWN_BED": $Item
static readonly "MANGROVE_LEAVES": $Item
static readonly "SMOOTH_SANDSTONE_SLAB": $Item
static readonly "CARROT_ON_A_STICK": $Item
static readonly "CHERRY_TRAPDOOR": $Item
static readonly "MAGENTA_TERRACOTTA": $Item
static readonly "SMOOTH_SANDSTONE_STAIRS": $Item
static readonly "SPRUCE_PLANKS": $Item
static readonly "DRAGON_HEAD": $Item
static readonly "CHERRY_SAPLING": $Item
static readonly "ANDESITE_WALL": $Item
static readonly "BLACK_WOOL": $Item
static readonly "LIGHT_GRAY_CARPET": $Item
static readonly "PURPLE_CONCRETE": $Item
static readonly "LIGHTNING_ROD": $Item
static readonly "ZOMBIFIED_PIGLIN_SPAWN_EGG": $Item
static readonly "CHERRY_HANGING_SIGN": $Item
static readonly "CYAN_BED": $Item
static readonly "LARGE_AMETHYST_BUD": $Item
static readonly "RED_SHULKER_BOX": $Item
static readonly "PEARLESCENT_FROGLIGHT": $Item
static readonly "STONE_PICKAXE": $Item
static readonly "MAGENTA_CARPET": $Item
static readonly "REDSTONE_TORCH": $Item
static readonly "CRIMSON_ROOTS": $Item
static readonly "STICKY_PISTON": $Item
static readonly "SMOOTH_QUARTZ": $Item
static readonly "PUMPKIN": $Item
static readonly "FLOWERING_AZALEA_LEAVES": $Item
static readonly "NETHER_WART_BLOCK": $Item
static readonly "COBBLED_DEEPSLATE_STAIRS": $Item
static readonly "COBBLESTONE_WALL": $Item
static readonly "WHEAT": $Item
static readonly "DEAD_FIRE_CORAL_FAN": $Item
static readonly "LIME_CANDLE": $Item
static readonly "ACACIA_SLAB": $Item
static readonly "SNORT_POTTERY_SHERD": $Item
static readonly "CRIMSON_NYLIUM": $Item
static readonly "OXIDIZED_COPPER_TRAPDOOR": $Item
static readonly "ORANGE_TERRACOTTA": $Item
static readonly "HONEYCOMB": $Item
static readonly "BLACK_CONCRETE": $Item
static readonly "AZALEA": $Item
static readonly "DROPPER": $Item
static readonly "MOSSY_STONE_BRICK_STAIRS": $Item
static readonly "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "WARPED_HANGING_SIGN": $Item
static readonly "DONKEY_SPAWN_EGG": $Item
static readonly "OAK_STAIRS": $Item
static readonly "BLACK_STAINED_GLASS": $Item
static readonly "IRON_TRAPDOOR": $Item
static readonly "NETHERITE_PICKAXE": $Item
static readonly "INFESTED_CHISELED_STONE_BRICKS": $Item
static readonly "BLUE_BANNER": $Item
static readonly "POLISHED_DIORITE_STAIRS": $Item
static readonly "WARPED_PRESSURE_PLATE": $Item
static readonly "DISC_FRAGMENT_5": $Item
static readonly "OAK_SLAB": $Item
static readonly "BAMBOO_HANGING_SIGN": $Item
static readonly "POINTED_DRIPSTONE": $Item
static readonly "WAXED_EXPOSED_COPPER": $Item
static readonly "PURPLE_CANDLE": $Item
static readonly "CRIMSON_FUNGUS": $Item
static readonly "GUSTER_POTTERY_SHERD": $Item
static readonly "DARK_OAK_HANGING_SIGN": $Item
static readonly "CREEPER_BANNER_PATTERN": $Item
static readonly "DARK_OAK_SAPLING": $Item
static readonly "CHAINMAIL_CHESTPLATE": $Item
static readonly "ACACIA_BUTTON": $Item
static readonly "MUSIC_DISC_MALL": $Item
static readonly "EMERALD_ORE": $Item
static readonly "MUSIC_DISC_STAL": $Item
static readonly "POLISHED_DEEPSLATE_STAIRS": $Item
static readonly "HONEY_BOTTLE": $Item
static readonly "OAK_FENCE_GATE": $Item
static readonly "POLISHED_BLACKSTONE_STAIRS": $Item
static readonly "WAXED_CUT_COPPER_SLAB": $Item
static readonly "BAMBOO_BLOCK": $Item
static readonly "SUNFLOWER": $Item
static readonly "CAMPFIRE": $Item
static readonly "SANDSTONE_SLAB": $Item
static readonly "MANGROVE_PRESSURE_PLATE": $Item
static readonly "SPRUCE_BUTTON": $Item
static readonly "CYAN_WOOL": $Item
static readonly "JUNGLE_HANGING_SIGN": $Item
static readonly "GHAST_SPAWN_EGG": $Item
static readonly "STRING": $Item
static readonly "PUFFERFISH_SPAWN_EGG": $Item
static readonly "SQUID_SPAWN_EGG": $Item
static readonly "TARGET": $Item
static readonly "PRISMARINE_BRICK_SLAB": $Item
static readonly "DRIPSTONE_BLOCK": $Item
static readonly "LOOM": $Item
static readonly "PANDA_SPAWN_EGG": $Item
static readonly "SALMON_SPAWN_EGG": $Item
static readonly "CREEPER_HEAD": $Item
static readonly "BAMBOO_PLANKS": $Item
static readonly "NETHER_QUARTZ_ORE": $Item
static readonly "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "DEAD_BUBBLE_CORAL_FAN": $Item
static readonly "NETHERITE_SWORD": $Item
static readonly "SUSPICIOUS_SAND": $Item
static readonly "BLACK_BANNER": $Item
static readonly "COPPER_DOOR": $Item
static readonly "WAXED_COPPER_DOOR": $Item
static readonly "COAST_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "LIGHT_BLUE_BED": $Item
static readonly "PRISMARINE_WALL": $Item
static readonly "PINK_STAINED_GLASS_PANE": $Item
static readonly "WEATHERED_COPPER_BULB": $Item
static readonly "BLACKSTONE_WALL": $Item
static readonly "DIORITE_STAIRS": $Item
static readonly "BRICK_STAIRS": $Item
static readonly "BREEZE_SPAWN_EGG": $Item
static readonly "SPYGLASS": $Item
static readonly "BIRCH_HANGING_SIGN": $Item
static readonly "DAMAGED_ANVIL": $Item
static readonly "BAMBOO": $Item
static readonly "CONDUIT": $Item
static readonly "LEATHER_HELMET": $Item
static readonly "LLAMA_SPAWN_EGG": $Item
static readonly "GOLDEN_SWORD": $Item
static readonly "JUNGLE_LEAVES": $Item
static readonly "RED_TULIP": $Item
static readonly "SPORE_BLOSSOM": $Item
static readonly "WAXED_WEATHERED_COPPER_DOOR": $Item
static readonly "DARK_OAK_STAIRS": $Item
static readonly "YELLOW_SHULKER_BOX": $Item
static readonly "PINK_GLAZED_TERRACOTTA": $Item
static readonly "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "DANDELION": $Item
static readonly "FLINT": $Item
static readonly "AZALEA_LEAVES": $Item
static readonly "RED_GLAZED_TERRACOTTA": $Item
static readonly "BAMBOO_MOSAIC": $Item
static readonly "WARPED_STEM": $Item
static readonly "YELLOW_CONCRETE_POWDER": $Item
static readonly "OAK_TRAPDOOR": $Item
static readonly "MAGENTA_DYE": $Item
static readonly "BAMBOO_BUTTON": $Item
static readonly "PURPLE_WOOL": $Item
static readonly "VAULT": $Item
static readonly "LIGHT_BLUE_BANNER": $Item
static readonly "END_STONE": $Item
static readonly "SPRUCE_FENCE_GATE": $Item
static readonly "GRAVEL": $Item
static readonly "BUDDING_AMETHYST": $Item
static readonly "ARMS_UP_POTTERY_SHERD": $Item
static readonly "IRON_HORSE_ARMOR": $Item
static readonly "CYAN_STAINED_GLASS": $Item
static readonly "LAPIS_ORE": $Item
static readonly "CHICKEN": $Item
static readonly "ORANGE_BED": $Item
static readonly "WAXED_WEATHERED_COPPER_TRAPDOOR": $Item
static readonly "BIG_DRIPLEAF": $Item
static readonly "RED_DYE": $Item
static readonly "NETHER_BRICK_SLAB": $Item
static readonly "DISPENSER": $Item
static readonly "CYAN_CONCRETE": $Item
static readonly "SMITHING_TABLE": $Item
static readonly "IRON_ORE": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_SLAB": $Item
static readonly "NETHERRACK": $Item
static readonly "RED_STAINED_GLASS_PANE": $Item
static readonly "COOKED_RABBIT": $Item
static readonly "TROPICAL_FISH_SPAWN_EGG": $Item
static readonly "CHORUS_FRUIT": $Item
static readonly "COOKED_SALMON": $Item
static readonly "BROWN_SHULKER_BOX": $Item
static readonly "MELON_SEEDS": $Item
static readonly "HANGING_ROOTS": $Item
static readonly "PRISMARINE_SLAB": $Item
static readonly "SMOOTH_RED_SANDSTONE": $Item
static readonly "BROWN_STAINED_GLASS": $Item
static readonly "GLOW_BERRIES": $Item
static readonly "ARMADILLO_SPAWN_EGG": $Item
static readonly "CHAINMAIL_HELMET": $Item
static readonly "SKELETON_SKULL": $Item
static readonly "END_STONE_BRICK_WALL": $Item
static readonly "PAINTING": $Item
static readonly "POLISHED_TUFF_STAIRS": $Item
static readonly "TORCH": $Item
static readonly "ENDER_CHEST": $Item
static readonly "WAXED_OXIDIZED_COPPER_GRATE": $Item
static readonly "FERN": $Item
static readonly "BIRCH_SIGN": $Item
static readonly "POLISHED_GRANITE": $Item
static readonly "PINK_TULIP": $Item
static readonly "INFESTED_CRACKED_STONE_BRICKS": $Item
static readonly "JUNGLE_SAPLING": $Item
static readonly "DEAD_BUBBLE_CORAL_BLOCK": $Item
static readonly "LEVER": $Item
static readonly "TUFF": $Item
static readonly "STONE_PRESSURE_PLATE": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_STAIRS": $Item
static readonly "NETHER_GOLD_ORE": $Item
static readonly "QUARTZ_BRICKS": $Item
static readonly "LIME_BED": $Item
static readonly "MUSIC_DISC_OTHERSIDE": $Item
static readonly "STRIPPED_OAK_LOG": $Item
static readonly "MANGROVE_SLAB": $Item
static readonly "END_ROD": $Item
static readonly "WARPED_PLANKS": $Item
static readonly "CHERRY_SLAB": $Item
static readonly "IRON_INGOT": $Item
static readonly "ORANGE_CONCRETE_POWDER": $Item
static readonly "ORANGE_WOOL": $Item
static readonly "PLAYER_HEAD": $Item
static readonly "MANGROVE_STAIRS": $Item
static readonly "LIME_TERRACOTTA": $Item
static readonly "TUFF_BRICKS": $Item
static readonly "WHITE_WOOL": $Item
static readonly "GRAY_CARPET": $Item
static readonly "GREEN_TERRACOTTA": $Item
static readonly "OAK_BOAT": $Item
static readonly "DIAMOND_SWORD": $Item
static readonly "BROWN_CANDLE": $Item
static readonly "GREEN_SHULKER_BOX": $Item
static readonly "DARK_OAK_DOOR": $Item
static readonly "ACACIA_BOAT": $Item
static readonly "GRAY_CONCRETE_POWDER": $Item
static readonly "OXIDIZED_CUT_COPPER": $Item
static readonly "DIAMOND_HOE": $Item
static readonly "BLAZE_SPAWN_EGG": $Item
static readonly "WHITE_SHULKER_BOX": $Item
static readonly "CRIMSON_BUTTON": $Item
static readonly "IRON_BLOCK": $Item
static readonly "ENDER_EYE": $Item
static readonly "BLUE_CONCRETE": $Item
static readonly "GRAY_DYE": $Item
static readonly "REDSTONE_LAMP": $Item
static readonly "SPRUCE_CHEST_BOAT": $Item
static readonly "GOLDEN_CARROT": $Item
static readonly "POLISHED_BLACKSTONE_BRICK_WALL": $Item
static readonly "BIRCH_BUTTON": $Item
static readonly "HOPPER": $Item
static readonly "LIGHT_WEIGHTED_PRESSURE_PLATE": $Item
static readonly "NETHER_STAR": $Item
static readonly "SOUL_SOIL": $Item
static readonly "YELLOW_CANDLE": $Item
static readonly "SOUL_TORCH": $Item
static readonly "LIGHT_BLUE_WOOL": $Item
static readonly "VEX_SPAWN_EGG": $Item
static readonly "LEAD": $Item
static readonly "COOKED_MUTTON": $Item
static readonly "RAW_COPPER": $Item
static readonly "TUFF_BRICK_STAIRS": $Item
static readonly "LIGHT_GRAY_SHULKER_BOX": $Item
static readonly "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "WAXED_CUT_COPPER": $Item
static readonly "STRIPPED_MANGROVE_WOOD": $Item
static readonly "GLASS_BOTTLE": $Item
static readonly "WAXED_WEATHERED_CUT_COPPER": $Item
static readonly "CHERRY_LOG": $Item
static readonly "YELLOW_STAINED_GLASS_PANE": $Item
static readonly "WOODEN_HOE": $Item
static readonly "CUT_COPPER_SLAB": $Item
static readonly "SNIFFER_SPAWN_EGG": $Item
static readonly "MUSIC_DISC_CAT": $Item
static readonly "TRADER_LLAMA_SPAWN_EGG": $Item
static readonly "BLACKSTONE": $Item
static readonly "NETHERITE_UPGRADE_SMITHING_TEMPLATE": $Item
static readonly "RED_NETHER_BRICK_SLAB": $Item
static readonly "COOKED_PORKCHOP": $Item
static readonly "GREEN_DYE": $Item
static readonly "ZOGLIN_SPAWN_EGG": $Item
static readonly "MAGENTA_STAINED_GLASS_PANE": $Item
static readonly "DEAD_HORN_CORAL_FAN": $Item
static readonly "SPECTRAL_ARROW": $Item
static readonly "SHULKER_BOX": $Item
static readonly "DEAD_HORN_CORAL_BLOCK": $Item
static readonly "STONE_SWORD": $Item
static readonly "ENDERMITE_SPAWN_EGG": $Item
static readonly "POLAR_BEAR_SPAWN_EGG": $Item
static readonly "CARVED_PUMPKIN": $Item
static readonly "ROTTEN_FLESH": $Item
static readonly "PINK_WOOL": $Item
static readonly "MUSIC_DISC_CREATOR": $Item
static readonly "LIGHT_GRAY_WOOL": $Item
static readonly "STONE_AXE": $Item
static readonly "BLADE_POTTERY_SHERD": $Item
static readonly "JUNGLE_DOOR": $Item
static readonly "CRACKED_NETHER_BRICKS": $Item
static readonly "GRANITE_SLAB": $Item
static readonly "STONE_BUTTON": $Item
static readonly "LIGHT_GRAY_BED": $Item
static readonly "ACACIA_SAPLING": $Item
static readonly "EXPOSED_COPPER_BULB": $Item
static readonly "FRIEND_POTTERY_SHERD": $Item
static readonly "BAMBOO_SLAB": $Item
static readonly "IRON_DOOR": $Item
static readonly "BROWN_STAINED_GLASS_PANE": $Item
static readonly "WAXED_EXPOSED_CUT_COPPER_SLAB": $Item
static readonly "BIRCH_WOOD": $Item
static readonly "FERMENTED_SPIDER_EYE": $Item
static readonly "LODESTONE": $Item
static readonly "SEA_PICKLE": $Item
static readonly "SPRUCE_LEAVES": $Item
static readonly "ORANGE_TULIP": $Item
static readonly "ANDESITE": $Item
static readonly "RED_NETHER_BRICK_STAIRS": $Item
static readonly "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE": $Item
static readonly "MANGROVE_PROPAGULE": $Item
static readonly "OXIDIZED_CHISELED_COPPER": $Item
static readonly "BROWN_GLAZED_TERRACOTTA": $Item
static readonly "BARREL": $Item
static readonly "INFESTED_STONE": $Item
static readonly "YELLOW_GLAZED_TERRACOTTA": $Item

constructor()

public static "registerBlock"(arg0: $Block$$Type, arg1: $UnaryOperator$$Type<($Item$Properties)>): $Item
public static "registerBlock"(arg0: $Block$$Type): $Item
public static "registerBlock"(arg0: $Block$$Type, arg1: $Item$$Type): $Item
public static "registerBlock"(arg0: $BlockItem$$Type): $Item
public static "registerBlock"(arg0: $Block$$Type, ...arg1: ($Block$$Type)[]): $Item
public static "registerItem"(arg0: StringJS, arg1: $Item$$Type): $Item
public static "registerItem"(arg0: $ResourceKey$$Type<($Item)>, arg1: $Item$$Type): $Item
public static "registerItem"(arg0: $ResourceLocation$$Type, arg1: $Item$$Type): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Items$$Type = ($Items);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Items$$Original = $Items;}
declare module "net.minecraft.world.item.crafting.RecipeManager$CachedCheck" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $RecipeManager$CachedCheck$$Interface<I extends $RecipeInput, T extends $Recipe<(object)>> {

(arg0: I, arg1: $Level): ($RecipeHolder$$Type<(T)>)?
}

export class $RecipeManager$CachedCheck<I extends $RecipeInput, T extends $Recipe<(object)>> implements $RecipeManager$CachedCheck$$Interface {
 "getRecipeFor"(arg0: I, arg1: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManager$CachedCheck$$Type<I, T> = ((arg0: I, arg1: $Level) => ($RecipeHolder$$Type<(T)>)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeManager$CachedCheck$$Original<I, T> = $RecipeManager$CachedCheck<(I), (T)>;}
declare module "net.minecraft.world.item.FlintAndSteelItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"

export class $FlintAndSteelItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlintAndSteelItem$$Type = ($FlintAndSteelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlintAndSteelItem$$Original = $FlintAndSteelItem;}
declare module "net.minecraft.world.item.Equipable" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"

export interface $Equipable$$Interface {

(): $EquipmentSlot$$Type
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $Holder<($SoundEvent)>
}

export class $Equipable implements $Equipable$$Interface {
static "get"(arg0: $ItemStack$$Type): $Equipable
 "getEquipmentSlot"(): $EquipmentSlot
 "getEquipSound"(): $Holder<($SoundEvent)>
 "swapWithEquipmentSlot"(arg0: $Item$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Equipable$$Type = (() => $EquipmentSlot$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Equipable$$Original = $Equipable;}
declare module "net.minecraft.world.item.crafting.SmithingTransformRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SmithingTransformRecipe implements $SmithingRecipe$$Interface {
constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $Ingredient$$Type, arg3: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipe$$Type = ($SmithingTransformRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingTransformRecipe$$Original = $SmithingTransformRecipe;}
declare module "net.minecraft.world.item.crafting.SmithingRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $SmithingRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type)

public "base"(): $ItemStack
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "template"(): $ItemStack
public "addition"(): $ItemStack
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingRecipeInput$$Type = ({"addition"?: $ItemStack$$Type, "base"?: $ItemStack$$Type, "template"?: $ItemStack$$Type}) | ([addition?: $ItemStack$$Type, base?: $ItemStack$$Type, template?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingRecipeInput$$Original = $SmithingRecipeInput;}
declare module "net.minecraft.world.item.crafting.FireworkRocketRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FireworkRocketRecipe extends $CustomRecipe {
constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(never)>
get "serializer"(): $RecipeSerializer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireworkRocketRecipe$$Type = ($FireworkRocketRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireworkRocketRecipe$$Original = $FireworkRocketRecipe;}
declare module "net.minecraft.world.item.DoubleHighBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $DoubleHighBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleHighBlockItem$$Type = ($DoubleHighBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleHighBlockItem$$Original = $DoubleHighBlockItem;}
declare module "net.minecraft.world.item.crafting.RecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$BlastingRecipe} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$ShulkerBoxColoring} from "net.minecraft.world.item.crafting.ShulkerBoxColoring"
import {$FireworkRocketRecipe} from "net.minecraft.world.item.crafting.FireworkRocketRecipe"
import {$SmeltingRecipe} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$BannerDuplicateRecipe} from "net.minecraft.world.item.crafting.BannerDuplicateRecipe"
import {$ShieldDecorationRecipe} from "net.minecraft.world.item.crafting.ShieldDecorationRecipe"
import {$SmithingTrimRecipe} from "net.minecraft.world.item.crafting.SmithingTrimRecipe"
import {$TippedArrowRecipe} from "net.minecraft.world.item.crafting.TippedArrowRecipe"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RepairItemRecipe} from "net.minecraft.world.item.crafting.RepairItemRecipe"
import {$SmithingTransformRecipe} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$BookCloningRecipe} from "net.minecraft.world.item.crafting.BookCloningRecipe"
import {$CampfireCookingRecipe} from "net.minecraft.world.item.crafting.CampfireCookingRecipe"
import {$SuspiciousStewRecipe} from "net.minecraft.world.item.crafting.SuspiciousStewRecipe"
import {$ArmorDyeRecipe} from "net.minecraft.world.item.crafting.ArmorDyeRecipe"
import {$ShapelessRecipe} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$SmokingRecipe} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$FireworkStarRecipe} from "net.minecraft.world.item.crafting.FireworkStarRecipe"
import {$FireworkStarFadeRecipe} from "net.minecraft.world.item.crafting.FireworkStarFadeRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapExtendingRecipe} from "net.minecraft.world.item.crafting.MapExtendingRecipe"
import {$DecoratedPotRecipe} from "net.minecraft.world.item.crafting.DecoratedPotRecipe"
import {$MapCloningRecipe} from "net.minecraft.world.item.crafting.MapCloningRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export interface $RecipeSerializer$$Interface<T extends $Recipe<(object)>> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.RecipeSerializer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.RecipeSerializerTag
}

export class $RecipeSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface {
static readonly "MAP_CLONING": $RecipeSerializer<($MapCloningRecipe)>
static readonly "SMELTING_RECIPE": $RecipeSerializer<($SmeltingRecipe)>
static readonly "REPAIR_ITEM": $RecipeSerializer<($RepairItemRecipe)>
static readonly "FIREWORK_STAR": $RecipeSerializer<($FireworkStarRecipe)>
static readonly "FIREWORK_STAR_FADE": $RecipeSerializer<($FireworkStarFadeRecipe)>
static readonly "SMOKING_RECIPE": $RecipeSerializer<($SmokingRecipe)>
static readonly "SHAPED_RECIPE": $RecipeSerializer<($ShapedRecipe)>
static readonly "ARMOR_DYE": $RecipeSerializer<($ArmorDyeRecipe)>
static readonly "MAP_EXTENDING": $RecipeSerializer<($MapExtendingRecipe)>
static readonly "BOOK_CLONING": $RecipeSerializer<($BookCloningRecipe)>
static readonly "SMITHING_TRANSFORM": $RecipeSerializer<($SmithingTransformRecipe)>
static readonly "BANNER_DUPLICATE": $RecipeSerializer<($BannerDuplicateRecipe)>
static readonly "CAMPFIRE_COOKING_RECIPE": $RecipeSerializer<($CampfireCookingRecipe)>
static readonly "STONECUTTER": $RecipeSerializer<($StonecutterRecipe)>
static readonly "DECORATED_POT_RECIPE": $RecipeSerializer<($DecoratedPotRecipe)>
static readonly "TIPPED_ARROW": $RecipeSerializer<($TippedArrowRecipe)>
static readonly "SHIELD_DECORATION": $RecipeSerializer<($ShieldDecorationRecipe)>
static readonly "BLASTING_RECIPE": $RecipeSerializer<($BlastingRecipe)>
static readonly "SHAPELESS_RECIPE": $RecipeSerializer<($ShapelessRecipe)>
static readonly "SHULKER_BOX_COLORING": $RecipeSerializer<($ShulkerBoxColoring)>
static readonly "SMITHING_TRIM": $RecipeSerializer<($SmithingTrimRecipe)>
static readonly "SUSPICIOUS_STEW": $RecipeSerializer<($SuspiciousStewRecipe)>
static readonly "FIREWORK_ROCKET": $RecipeSerializer<($FireworkRocketRecipe)>

static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
 "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializer$$Type<T> = (Special.RecipeSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeSerializer$$Original<T> = $RecipeSerializer<(T)>;}
declare module "net.minecraft.world.item.PickaxeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$DiggerItem} from "net.minecraft.world.item.DiggerItem"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $PickaxeItem extends $DiggerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickaxeItem$$Type = ($PickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PickaxeItem$$Original = $PickaxeItem;}
declare module "net.minecraft.world.item.component.ItemAttributeModifiers$Builder" {
import {$AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemAttributeModifiers$Builder {
public "add"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers$Builder
public "build"(): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifiers$Builder$$Type = ($ItemAttributeModifiers$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemAttributeModifiers$Builder$$Original = $ItemAttributeModifiers$Builder;}
declare module "net.minecraft.world.item.crafting.SingleItemRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$SingleItemRecipe} from "net.minecraft.world.item.crafting.SingleItemRecipe"

export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer$$Interface<(T)> {
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleItemRecipe$Serializer$$Type<T> = ($SingleItemRecipe$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleItemRecipe$Serializer$$Original<T> = $SingleItemRecipe$Serializer<(T)>;}
declare module "net.minecraft.world.item.component.Tool$Rule" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"

export class $Tool$Rule extends $Record {
static readonly "CODEC": $Codec<($Tool$Rule)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Tool$Rule)>

constructor(arg0: $HolderSet$$Type<($Block)>, arg1: (float)?, arg2: (boolean)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "minesAndDrops"(arg0: $List$$Type<($Block$$Type)>, arg1: float): $Tool$Rule
public static "minesAndDrops"(arg0: $TagKey$$Type<($Block)>, arg1: float): $Tool$Rule
public static "overrideSpeed"(arg0: $TagKey$$Type<($Block)>, arg1: float): $Tool$Rule
public static "overrideSpeed"(arg0: $List$$Type<($Block$$Type)>, arg1: float): $Tool$Rule
public static "deniesDrops"(arg0: $TagKey$$Type<($Block)>): $Tool$Rule
public "blocks"(): $HolderSet<($Block)>
public "speed"(): $Optional<(float)>
public "correctForDrops"(): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tool$Rule$$Type = ({"correctForDrops"?: (boolean)?, "blocks"?: $HolderSet$$Type<($Block)>, "speed"?: (float)?}) | ([correctForDrops?: (boolean)?, blocks?: $HolderSet$$Type<($Block)>, speed?: (float)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tool$Rule$$Original = $Tool$Rule;}
