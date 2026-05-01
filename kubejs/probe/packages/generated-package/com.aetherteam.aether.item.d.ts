declare module "com.aetherteam.aether.item.accessories.gloves.GlovesItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SlotTypeReference} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$SlotIdentifierHolder$$Interface} from "com.aetherteam.aether.item.accessories.SlotIdentifierHolder"

export class $GlovesItem extends $AccessoryItem implements $SlotIdentifierHolder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BASE_PUNCH_DAMAGE_ID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: double, arg2: StringJS, arg3: $Holder$$Type<($SoundEvent)>, arg4: $Item$Properties$$Type)
constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: double, arg2: $ResourceLocation$$Type, arg3: $Holder$$Type<($SoundEvent)>, arg4: $Item$Properties$$Type)

public "getDamage"(): double
public "getIdentifier"(): $SlotTypeReference
public static "getStaticIdentifier"(): $SlotTypeReference
public "getDynamicModifiers"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $AccessoryAttributeBuilder$$Type): void
public "getEnchantmentValue"(): integer
public "getMaterial"(): $Holder<($ArmorMaterial)>
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getGlovesTexture"(): $ResourceLocation
public "setRenderTexture"(arg0: StringJS, arg1: StringJS): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "damage"(): double
get "identifier"(): $SlotTypeReference
public static get "staticIdentifier"(): $SlotTypeReference
get "enchantmentValue"(): integer
get "material"(): $Holder<($ArmorMaterial)>
get "glovesTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlovesItem$$Type = ($GlovesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlovesItem$$Original = $GlovesItem;}
declare module "com.aetherteam.aether.item.combat.loot.LightningKnifeItem" {
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

export class $LightningKnifeItem extends $Item implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningKnifeItem$$Type = ($LightningKnifeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningKnifeItem$$Original = $LightningKnifeItem;}
declare module "com.aetherteam.aether.item.tools.zanite.ZaniteAxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$ZaniteTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ZaniteTool"

export class $ZaniteAxeItem extends $AxeItem implements $ZaniteTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "increaseSpeed"(arg0: $ItemStack$$Type, arg1: float): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteAxeItem$$Type = ($ZaniteAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteAxeItem$$Original = $ZaniteAxeItem;}
declare module "com.aetherteam.aether.item.accessories.miscellaneous.IronBubbleItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $IronBubbleItem extends $AccessoryItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronBubbleItem$$Type = ($IronBubbleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IronBubbleItem$$Original = $IronBubbleItem;}
declare module "com.aetherteam.aether.item.accessories.miscellaneous.GoldenFeatherItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$AllowWalkingOnSnow$$Interface} from "io.wispforest.accessories.api.events.extra.AllowWalkingOnSnow"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlowFallAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.SlowFallAccessory"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $GoldenFeatherItem extends $AccessoryItem implements $SlowFallAccessory$$Interface, $AllowWalkingOnSnow$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "allowWalkingOnSnow"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
public "handleSlowFall"(arg0: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenFeatherItem$$Type = ($GoldenFeatherItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoldenFeatherItem$$Original = $GoldenFeatherItem;}
declare module "com.aetherteam.aether.item.tools.holystone.HolystoneAxeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$HolystoneTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.HolystoneTool"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HolystoneAxeItem extends $AxeItem implements $HolystoneTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "dropAmbrosium"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneAxeItem$$Type = ($HolystoneAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneAxeItem$$Original = $HolystoneAxeItem;}
declare module "com.aetherteam.aether.item.tools.valkyrie.ValkyrieHoeItem" {
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ValkyrieTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ValkyrieTool"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ValkyrieHoeItem extends $HoeItem implements $ValkyrieTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieHoeItem$$Type = ($ValkyrieHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieHoeItem$$Original = $ValkyrieHoeItem;}
declare module "com.aetherteam.aether.item.miscellaneous.ParachuteItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Parachute, $Parachute$$Type} from "com.aetherteam.aether.entity.miscellaneous.Parachute"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $ParachuteItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($EntityType$$Type<($Parachute$$Type)>)>, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getParachuteEntity"(): $Supplier<($EntityType<($Parachute)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "parachuteEntity"(): $Supplier<($EntityType<($Parachute)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParachuteItem$$Type = ($ParachuteItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParachuteItem$$Original = $ParachuteItem;}
declare module "com.aetherteam.aether.item.accessories.pendant.PendantItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SlotTypeReference} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$Item} from "net.minecraft.world.item.Item"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SlotIdentifierHolder$$Interface} from "com.aetherteam.aether.item.accessories.SlotIdentifierHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $PendantItem extends $AccessoryItem implements $SlotIdentifierHolder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $Holder$$Type<($SoundEvent)>, arg2: $Item$Properties$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($SoundEvent)>, arg2: $Item$Properties$$Type)

public "getIdentifier"(): $SlotTypeReference
public static "getStaticIdentifier"(): $SlotTypeReference
public "getPendantTexture"(): $ResourceLocation
public "setRenderTexture"(arg0: StringJS, arg1: StringJS): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "identifier"(): $SlotTypeReference
public static get "staticIdentifier"(): $SlotTypeReference
get "pendantTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PendantItem$$Type = ($PendantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PendantItem$$Original = $PendantItem;}
declare module "com.aetherteam.aether.item.materials.SwetBallItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemUseConversion$$Interface} from "com.aetherteam.aether.item.materials.behavior.ItemUseConversion"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SwetBallRecipe} from "com.aetherteam.aether.recipe.recipes.block.SwetBallRecipe"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MatchEventRecipe} from "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe"

export class $SwetBallItem extends $Item implements $ItemUseConversion$$Interface<($SwetBallRecipe)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "convertBlockWithoutContext"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "convertBlock"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwetBallItem$$Type = ($SwetBallItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwetBallItem$$Original = $SwetBallItem;}
declare module "com.aetherteam.aether.item.tools.zanite.ZaniteShovelItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$ZaniteTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ZaniteTool"

export class $ZaniteShovelItem extends $ShovelItem implements $ZaniteTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "increaseSpeed"(arg0: $ItemStack$$Type, arg1: float): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteShovelItem$$Type = ($ZaniteShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteShovelItem$$Original = $ZaniteShovelItem;}
declare module "com.aetherteam.aether.item.miscellaneous.SkyrootBoatItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $SkyrootBoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootBoatItem$$Type = ($SkyrootBoatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootBoatItem$$Original = $SkyrootBoatItem;}
declare module "com.aetherteam.aether.item.combat.DartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractDart} from "com.aetherteam.aether.entity.projectile.dart.AbstractDart"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DartItem extends $ArrowItem implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isInfinite"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): boolean
public "createDart"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractDart
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DartItem$$Type = ($DartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DartItem$$Original = $DartItem;}
declare module "com.aetherteam.aether.item.tools.skyroot.SkyrootAxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$SkyrootTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.SkyrootTool"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyrootAxeItem extends $AxeItem implements $SkyrootTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "doubleDrops"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootAxeItem$$Type = ($SkyrootAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootAxeItem$$Original = $SkyrootAxeItem;}
declare module "com.aetherteam.aether.item.combat.SkyrootSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SkyrootWeapon$$Interface} from "com.aetherteam.aether.item.combat.abilities.weapon.SkyrootWeapon"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $SkyrootSwordItem extends $SwordItem implements $SkyrootWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootSwordItem$$Type = ($SkyrootSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootSwordItem$$Original = $SkyrootSwordItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootSolidBucketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SolidBucketItem} from "net.minecraft.world.item.SolidBucketItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SkyrootSolidBucketItem extends $SolidBucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $SoundEvent$$Type, arg2: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
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
export type $SkyrootSolidBucketItem$$Type = ($SkyrootSolidBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootSolidBucketItem$$Original = $SkyrootSolidBucketItem;}
declare module "com.aetherteam.aether.item.accessories.cape.ValkyrieCapeItem" {
import {$CapeItem} from "com.aetherteam.aether.item.accessories.cape.CapeItem"
import {$Map} from "java.util.Map"
import {$AllowWalkingOnSnow$$Interface} from "io.wispforest.accessories.api.events.extra.AllowWalkingOnSnow"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlowFallAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.SlowFallAccessory"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ValkyrieCapeItem extends $CapeItem implements $SlowFallAccessory$$Interface, $AllowWalkingOnSnow$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "allowWalkingOnSnow"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
public "handleSlowFall"(arg0: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieCapeItem$$Type = ($ValkyrieCapeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieCapeItem$$Original = $ValkyrieCapeItem;}
declare module "com.aetherteam.aether.item.combat.abilities.weapon.HolystoneWeapon" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $HolystoneWeapon$$Interface {
}

export class $HolystoneWeapon implements $HolystoneWeapon$$Interface {
 "dropAmbrosium"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneWeapon$$Type = ($HolystoneWeapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneWeapon$$Original = $HolystoneWeapon;}
declare module "com.aetherteam.aether.item.combat.PoisonDartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractDart} from "com.aetherteam.aether.entity.projectile.dart.AbstractDart"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DartItem} from "com.aetherteam.aether.item.combat.DartItem"

export class $PoisonDartItem extends $DartItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDart"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractDart
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonDartItem$$Type = ($PoisonDartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoisonDartItem$$Original = $PoisonDartItem;}
declare module "com.aetherteam.aether.item.tools.gravitite.GravititeShovelItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GravititeTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.GravititeTool"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $GravititeShovelItem extends $ShovelItem implements $GravititeTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "floatBlock"(arg0: $UseOnContext$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeShovelItem$$Type = ($GravititeShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeShovelItem$$Original = $GravititeShovelItem;}
declare module "com.aetherteam.aether.item.combat.DartShooterItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractDart, $AbstractDart$$Type} from "com.aetherteam.aether.entity.projectile.dart.AbstractDart"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ProjectileWeaponItem} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DartShooterItem extends $ProjectileWeaponItem {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($Item$$Type)>, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getDefaultProjectileRange"(): integer
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "customDart"(arg0: $AbstractDart$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $AbstractDart
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "getDartType"(): $Supplier<($Item)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "defaultProjectileRange"(): integer
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "dartType"(): $Supplier<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DartShooterItem$$Type = ($DartShooterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DartShooterItem$$Original = $DartShooterItem;}
declare module "com.aetherteam.aether.item.accessories.abilities.FreezingAccessory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FreezeEvent} from "com.aetherteam.aether.event.FreezeEvent"
import {$FreezingBehavior$$Interface} from "com.aetherteam.aether.block.FreezingBehavior"
import {$Optional$$Type} from "java.util.Optional"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $FreezingAccessory$$Interface extends $FreezingBehavior$$Interface<($ItemStack)> {
}

export class $FreezingAccessory implements $FreezingAccessory$$Interface {
 "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: any): $FreezeEvent
 "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $ItemStack$$Type): $FreezeEvent
 "freezeTick"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type): void
 "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: any, arg4: integer): integer
 "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: integer): integer
 "freezeBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: ($CacheableFunction$$Type)?, arg6: $ItemStack$$Type, arg7: integer): integer
 "freezeBlocks"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingAccessory$$Type = ($FreezingAccessory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezingAccessory$$Original = $FreezingAccessory;}
declare module "com.aetherteam.aether.item.tools.valkyrie.ValkyriePickaxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ValkyrieTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ValkyrieTool"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $ValkyriePickaxeItem extends $PickaxeItem implements $ValkyrieTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyriePickaxeItem$$Type = ($ValkyriePickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyriePickaxeItem$$Original = $ValkyriePickaxeItem;}
declare module "com.aetherteam.aether.item.combat.abilities.weapon.SkyrootWeapon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SkyrootWeapon$$Interface {
}

export class $SkyrootWeapon implements $SkyrootWeapon$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootWeapon$$Type = ($SkyrootWeapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootWeapon$$Original = $SkyrootWeapon;}
declare module "com.aetherteam.aether.item.accessories.gloves.ZaniteGlovesItem" {
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GlovesItem} from "com.aetherteam.aether.item.accessories.gloves.GlovesItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $ZaniteGlovesItem extends $GlovesItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BASE_PUNCH_DAMAGE_ID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: double, arg1: $Item$Properties$$Type)

public "getDynamicModifiers"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $AccessoryAttributeBuilder$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteGlovesItem$$Type = ($ZaniteGlovesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteGlovesItem$$Original = $ZaniteGlovesItem;}
declare module "com.aetherteam.aether.item.miscellaneous.LoreBookItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $LoreBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoreBookItem$$Type = ($LoreBookItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoreBookItem$$Original = $LoreBookItem;}
declare module "com.aetherteam.aether.item.accessories.ring.RingItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $RingItem extends $AccessoryItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RingItem$$Type = ($RingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RingItem$$Original = $RingItem;}
declare module "com.aetherteam.aether.item.combat.loot.PhoenixBowItem" {
import {$BowItem} from "net.minecraft.world.item.BowItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $PhoenixBowItem extends $BowItem {
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

constructor()

public "customArrow"(arg0: $AbstractArrow$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $AbstractArrow
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhoenixBowItem$$Type = ($PhoenixBowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PhoenixBowItem$$Original = $PhoenixBowItem;}
declare module "com.aetherteam.aether.item.tools.holystone.HolystonePickaxeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolystoneTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.HolystoneTool"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HolystonePickaxeItem extends $PickaxeItem implements $HolystoneTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "dropAmbrosium"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystonePickaxeItem$$Type = ($HolystonePickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystonePickaxeItem$$Original = $HolystonePickaxeItem;}
declare module "com.aetherteam.aether.item.accessories.cape.AgilityCapeItem" {
import {$CapeItem} from "com.aetherteam.aether.item.accessories.cape.CapeItem"
import {$AttributeModifier} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AgilityCapeItem extends $CapeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "getStepHeightModifier"(): $AttributeModifier
public "onUnequip"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "stepHeightModifier"(): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgilityCapeItem$$Type = ($AgilityCapeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgilityCapeItem$$Original = $AgilityCapeItem;}
declare module "com.aetherteam.aether.item.tools.skyroot.SkyrootPickaxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$SkyrootTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.SkyrootTool"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyrootPickaxeItem extends $PickaxeItem implements $SkyrootTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "doubleDrops"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootPickaxeItem$$Type = ($SkyrootPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootPickaxeItem$$Original = $SkyrootPickaxeItem;}
declare module "com.aetherteam.aether.item.accessories.cape.InvisibilityCloakItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $InvisibilityCloakItem extends $AccessoryItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "onUnequip"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvisibilityCloakItem$$Type = ($InvisibilityCloakItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvisibilityCloakItem$$Original = $InvisibilityCloakItem;}
declare module "com.aetherteam.aether.item.miscellaneous.MoaEggItem" {
import {$Iterable} from "java.lang.Iterable"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Moa} from "com.aetherteam.aether.entity.passive.Moa"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MoaType, $MoaType$$Type} from "com.aetherteam.aether.api.registers.MoaType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MoaEggItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ResourceKey$$Type<($MoaType)>, arg1: integer, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getColor"(): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "byId"(arg0: $ResourceKey$$Type<($MoaType)>): $MoaEggItem
public static "moaEggs"(): $Iterable<($MoaEggItem)>
public "getMoaType"(): $ResourceKey<($MoaType)>
public "getStackWithTags"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: boolean, arg4: $ResourceKey$$Type<($MoaType)>, arg5: boolean, arg6: boolean): $Consumer<($Moa)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): integer
get "moaType"(): $ResourceKey<($MoaType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoaEggItem$$Type = ($MoaEggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MoaEggItem$$Original = $MoaEggItem;}
declare module "com.aetherteam.aether.item.tools.gravitite.GravititeAxeItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GravititeTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.GravititeTool"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $GravititeAxeItem extends $AxeItem implements $GravititeTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "floatBlock"(arg0: $UseOnContext$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeAxeItem$$Type = ($GravititeAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeAxeItem$$Original = $GravititeAxeItem;}
declare module "com.aetherteam.aether.item.combat.loot.ValkyrieLanceItem" {
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ValkyrieTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ValkyrieTool"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ValkyrieLanceItem extends $SwordItem implements $ValkyrieTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieLanceItem$$Type = ($ValkyrieLanceItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieLanceItem$$Original = $ValkyrieLanceItem;}
declare module "com.aetherteam.aether.item.combat.HolystoneSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HolystoneWeapon$$Interface} from "com.aetherteam.aether.item.combat.abilities.weapon.HolystoneWeapon"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $HolystoneSwordItem extends $SwordItem implements $HolystoneWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "dropAmbrosium"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneSwordItem$$Type = ($HolystoneSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneSwordItem$$Original = $HolystoneSwordItem;}
declare module "com.aetherteam.aether.item.tools.abilities.ValkyrieTool" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $ValkyrieTool$$Interface {
}

export class $ValkyrieTool implements $ValkyrieTool$$Interface {
static readonly "ENTITY_INTERACTION_RANGE_MODIFIER_UUID": $ResourceLocation
static readonly "RANGE_MODIFER": double
static readonly "BLOCK_INTERACTION_RANGE_MODIFIER_UUID": $ResourceLocation

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieTool$$Type = ($ValkyrieTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieTool$$Original = $ValkyrieTool;}
declare module "com.aetherteam.aether.item.tools.abilities.ZaniteTool" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ZaniteTool$$Interface {
}

export class $ZaniteTool implements $ZaniteTool$$Interface {
 "increaseSpeed"(arg0: $ItemStack$$Type, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteTool$$Type = ($ZaniteTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteTool$$Original = $ZaniteTool;}
declare module "com.aetherteam.aether.item.combat.abilities.weapon.ZaniteWeapon" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export interface $ZaniteWeapon$$Interface {
}

export class $ZaniteWeapon implements $ZaniteWeapon$$Interface {
static readonly "DAMAGE_MODIFIER_ID": $ResourceLocation

 "calculateDamageIncrease"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: $ItemAttributeModifiers$$Type, arg3: $ItemStack$$Type): integer
 "increaseDamage"(arg0: $ItemAttributeModifiers$$Type, arg1: $ItemStack$$Type): $ItemAttributeModifiers$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteWeapon$$Type = ($ZaniteWeapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteWeapon$$Original = $ZaniteWeapon;}
declare module "com.aetherteam.aether.item.combat.loot.HammerOfKingbdogzItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem$$Interface} from "net.minecraft.world.item.ProjectileItem"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"

export class $HammerOfKingbdogzItem extends $SwordItem implements $ProjectileItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerOfKingbdogzItem$$Type = ($HammerOfKingbdogzItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerOfKingbdogzItem$$Original = $HammerOfKingbdogzItem;}
declare module "com.aetherteam.aether.item.accessories.ring.IceRingItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FreezeEvent} from "com.aetherteam.aether.event.FreezeEvent"
import {$Optional$$Type} from "java.util.Optional"
import {$FreezingAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.FreezingAccessory"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RingItem} from "com.aetherteam.aether.item.accessories.ring.RingItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IceRingItem extends $RingItem implements $FreezingAccessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: any): $FreezeEvent
public "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $ItemStack$$Type): $FreezeEvent
public "freezeTick"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type): void
public "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: any, arg4: integer): integer
public "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: integer): integer
public "freezeBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: ($CacheableFunction$$Type)?, arg6: $ItemStack$$Type, arg7: integer): integer
public "freezeBlocks"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: float): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IceRingItem$$Type = ($IceRingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IceRingItem$$Original = $IceRingItem;}
declare module "com.aetherteam.aether.item.combat.loot.VampireBladeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $VampireBladeItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VampireBladeItem$$Type = ($VampireBladeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VampireBladeItem$$Original = $VampireBladeItem;}
declare module "com.aetherteam.aether.item.tools.skyroot.SkyrootShovelItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Item} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SkyrootTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.SkyrootTool"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyrootShovelItem extends $ShovelItem implements $SkyrootTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "doubleDrops"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootShovelItem$$Type = ($SkyrootShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootShovelItem$$Original = $SkyrootShovelItem;}
declare module "com.aetherteam.aether.item.miscellaneous.ConsumableItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ConsumableItem$$Interface {
}

export class $ConsumableItem implements $ConsumableItem$$Interface {
 "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConsumableItem$$Type = ($ConsumableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConsumableItem$$Original = $ConsumableItem;}
declare module "com.aetherteam.aether.item.combat.loot.LightningSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $LightningSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningSwordItem$$Type = ($LightningSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningSwordItem$$Original = $LightningSwordItem;}
declare module "com.aetherteam.aether.item.accessories.AccessoryItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEventData} from "io.wispforest.accessories.api.SoundEventData"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$DropRule} from "io.wispforest.accessories.api.DropRule"
import {$AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Accessory$$Interface} from "io.wispforest.accessories.api.Accessory"

export class $AccessoryItem extends $Item implements $Accessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $Holder$$Type<($SoundEvent)>, arg1: $Item$Properties$$Type)

public "getEquipSound"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $SoundEventData
public "canEquipFromUse"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
public "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "maxStackSize"(stack: $ItemStack$$Type): integer
public "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
public "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
public "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
public "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
public "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
public "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
/**
 * 
 * @deprecated
 */
public "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
public "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
/**
 * 
 * @deprecated
 */
public "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
public "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItem$$Type = ($AccessoryItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessoryItem$$Original = $AccessoryItem;}
declare module "com.aetherteam.aether.item.accessories.SlotIdentifierHolder" {
import {$SlotTypeReference, $SlotTypeReference$$Type} from "io.wispforest.accessories.api.slot.SlotTypeReference"

export interface $SlotIdentifierHolder$$Interface {

(): $SlotTypeReference$$Type
get "identifier"(): $SlotTypeReference
}

export class $SlotIdentifierHolder implements $SlotIdentifierHolder$$Interface {
 "getIdentifier"(): $SlotTypeReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotIdentifierHolder$$Type = (() => $SlotTypeReference$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotIdentifierHolder$$Original = $SlotIdentifierHolder;}
declare module "com.aetherteam.aether.item.tools.zanite.ZanitePickaxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$ZaniteTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ZaniteTool"

export class $ZanitePickaxeItem extends $PickaxeItem implements $ZaniteTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "increaseSpeed"(arg0: $ItemStack$$Type, arg1: float): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZanitePickaxeItem$$Type = ($ZanitePickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZanitePickaxeItem$$Original = $ZanitePickaxeItem;}
declare module "com.aetherteam.aether.item.tools.holystone.HolystoneShovelItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolystoneTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.HolystoneTool"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HolystoneShovelItem extends $ShovelItem implements $HolystoneTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "dropAmbrosium"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneShovelItem$$Type = ($HolystoneShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneShovelItem$$Original = $HolystoneShovelItem;}
declare module "com.aetherteam.aether.item.combat.EnchantedDartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractDart} from "com.aetherteam.aether.entity.projectile.dart.AbstractDart"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DartItem} from "com.aetherteam.aether.item.combat.DartItem"

export class $EnchantedDartItem extends $DartItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDart"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractDart
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedDartItem$$Type = ($EnchantedDartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantedDartItem$$Original = $EnchantedDartItem;}
declare module "com.aetherteam.aether.item.accessories.miscellaneous.ShieldOfRepulsionItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SlotTypeReference} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$Item} from "net.minecraft.world.item.Item"
import {$SlotIdentifierHolder$$Interface} from "com.aetherteam.aether.item.accessories.SlotIdentifierHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $ShieldOfRepulsionItem extends $AccessoryItem implements $SlotIdentifierHolder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getIdentifier"(): $SlotTypeReference
public static "getStaticIdentifier"(): $SlotTypeReference
public "getShieldOfRepulsionTexture"(): $ResourceLocation
public "getShieldOfRepulsionSlimTexture"(): $ResourceLocation
public "getShieldOfRepulsionInactiveTexture"(): $ResourceLocation
public "getShieldOfRepulsionSlimInactiveTexture"(): $ResourceLocation
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "identifier"(): $SlotTypeReference
public static get "staticIdentifier"(): $SlotTypeReference
get "shieldOfRepulsionTexture"(): $ResourceLocation
get "shieldOfRepulsionSlimTexture"(): $ResourceLocation
get "shieldOfRepulsionInactiveTexture"(): $ResourceLocation
get "shieldOfRepulsionSlimInactiveTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldOfRepulsionItem$$Type = ($ShieldOfRepulsionItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldOfRepulsionItem$$Original = $ShieldOfRepulsionItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootBucketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Supplier} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $SkyrootBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "REPLACEMENTS": $Map<($Supplier<($Item)>), ($Supplier<($Item)>)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Fluid$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getEmptySuccessItem"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $ItemStack
public static "swapBucketType"(arg0: $ItemStack$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootBucketItem$$Type = ($SkyrootBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootBucketItem$$Original = $SkyrootBucketItem;}
declare module "com.aetherteam.aether.item.combat.loot.PigSlayerItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $PigSlayerItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "onLivingDamage"(arg0: $LivingDamageEvent$Pre$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PigSlayerItem$$Type = ($PigSlayerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PigSlayerItem$$Original = $PigSlayerItem;}
declare module "com.aetherteam.aether.item.tools.zanite.ZaniteHoeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$ZaniteTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ZaniteTool"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"

export class $ZaniteHoeItem extends $HoeItem implements $ZaniteTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "increaseSpeed"(arg0: $ItemStack$$Type, arg1: float): float
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteHoeItem$$Type = ($ZaniteHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteHoeItem$$Original = $ZaniteHoeItem;}
declare module "com.aetherteam.aether.item.combat.loot.HolySwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $HolySwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "onLivingDamage"(arg0: $LivingDamageEvent$Pre$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolySwordItem$$Type = ($HolySwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolySwordItem$$Original = $HolySwordItem;}
declare module "com.aetherteam.aether.item.tools.valkyrie.ValkyrieAxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ValkyrieTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ValkyrieTool"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $ValkyrieAxeItem extends $AxeItem implements $ValkyrieTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieAxeItem$$Type = ($ValkyrieAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieAxeItem$$Original = $ValkyrieAxeItem;}
declare module "com.aetherteam.aether.item.tools.valkyrie.ValkyrieShovelItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ValkyrieTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.ValkyrieTool"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ValkyrieShovelItem extends $ShovelItem implements $ValkyrieTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValkyrieShovelItem$$Type = ($ValkyrieShovelItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValkyrieShovelItem$$Original = $ValkyrieShovelItem;}
declare module "com.aetherteam.aether.item.accessories.ring.ZaniteRingItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$RingItem} from "com.aetherteam.aether.item.accessories.ring.RingItem"
import {$ZaniteAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.ZaniteAccessory"
import {$Holder} from "net.minecraft.core.Holder"

export class $ZaniteRingItem extends $RingItem implements $ZaniteAccessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "handleMiningSpeed"(arg0: float, arg1: $ItemStack$$Type): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteRingItem$$Type = ($ZaniteRingItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteRingItem$$Original = $ZaniteRingItem;}
declare module "com.aetherteam.aether.item.accessories.abilities.SlowFallAccessory" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $SlowFallAccessory$$Interface {
}

export class $SlowFallAccessory implements $SlowFallAccessory$$Interface {
 "handleSlowFall"(arg0: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlowFallAccessory$$Type = ($SlowFallAccessory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlowFallAccessory$$Original = $SlowFallAccessory;}
declare module "com.aetherteam.aether.item.combat.ZaniteSwordItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$ItemAttributeModifierEvent$$Type} from "net.neoforged.neoforge.event.ItemAttributeModifierEvent"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$ZaniteWeapon$$Interface} from "com.aetherteam.aether.item.combat.abilities.weapon.ZaniteWeapon"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item} from "net.minecraft.world.item.Item"

export class $ZaniteSwordItem extends $SwordItem implements $ZaniteWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "onModifyAttributes"(arg0: $ItemAttributeModifierEvent$$Type): void
public "calculateDamageIncrease"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type, arg2: $ItemAttributeModifiers$$Type, arg3: $ItemStack$$Type): integer
public "increaseDamage"(arg0: $ItemAttributeModifiers$$Type, arg1: $ItemStack$$Type): $ItemAttributeModifiers$Entry
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteSwordItem$$Type = ($ZaniteSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteSwordItem$$Original = $ZaniteSwordItem;}
declare module "com.aetherteam.aether.item.combat.loot.FlamingSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $FlamingSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "onLivingDamage"(arg0: $LivingDamageEvent$Post$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamingSwordItem$$Type = ($FlamingSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlamingSwordItem$$Original = $FlamingSwordItem;}
declare module "com.aetherteam.aether.item.tools.abilities.HolystoneTool" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $HolystoneTool$$Interface {
}

export class $HolystoneTool implements $HolystoneTool$$Interface {
 "dropAmbrosium"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneTool$$Type = ($HolystoneTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneTool$$Original = $HolystoneTool;}
declare module "com.aetherteam.aether.item.food.HealingStoneItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $HealingStoneItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealingStoneItem$$Type = ($HealingStoneItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HealingStoneItem$$Original = $HealingStoneItem;}
declare module "com.aetherteam.aether.item.materials.behavior.ItemUseConversion" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MatchEventRecipe} from "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe"

export interface $ItemUseConversion$$Interface<R extends $MatchEventRecipe> {
}

export class $ItemUseConversion<R extends $MatchEventRecipe> implements $ItemUseConversion$$Interface {
 "convertBlockWithoutContext"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
 "convertBlock"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUseConversion$$Type<R> = ($ItemUseConversion<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemUseConversion$$Original<R> = $ItemUseConversion<(R)>;}
declare module "com.aetherteam.aether.item.miscellaneous.LifeShardItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"

export class $LifeShardItem extends $Item implements $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeShardItem$$Type = ($LifeShardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LifeShardItem$$Original = $LifeShardItem;}
declare module "com.aetherteam.aether.item.accessories.gloves.GoldGlovesItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PiglinNeutralInducer$$Interface} from "io.wispforest.accessories.api.events.extra.PiglinNeutralInducer"
import {$GlovesItem} from "com.aetherteam.aether.item.accessories.gloves.GlovesItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$TriState} from "net.fabricmc.fabric.api.util.TriState"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $GoldGlovesItem extends $GlovesItem implements $PiglinNeutralInducer$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BASE_PUNCH_DAMAGE_ID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: double, arg1: $Item$Properties$$Type)

public "makePiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldGlovesItem$$Type = ($GoldGlovesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoldGlovesItem$$Original = $GoldGlovesItem;}
declare module "com.aetherteam.aether.item.combat.GravititeSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GravititeWeapon$$Interface} from "com.aetherteam.aether.item.combat.abilities.weapon.GravititeWeapon"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $GravititeSwordItem extends $SwordItem implements $GravititeWeapon$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "launchEntity"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeSwordItem$$Type = ($GravititeSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeSwordItem$$Original = $GravititeSwordItem;}
declare module "com.aetherteam.aether.item.materials.AmbrosiumShardItem" {
import {$Map} from "java.util.Map"
import {$ItemUseConversion$$Interface} from "com.aetherteam.aether.item.materials.behavior.ItemUseConversion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$AmbrosiumRecipe} from "com.aetherteam.aether.recipe.recipes.block.AmbrosiumRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"
import {$MatchEventRecipe} from "com.aetherteam.aether.recipe.recipes.block.MatchEventRecipe"

export class $AmbrosiumShardItem extends $Item implements $ItemUseConversion$$Interface<($AmbrosiumRecipe)>, $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "convertBlockWithoutContext"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "convertBlock"<T extends $MatchEventRecipe>(arg0: $RecipeType$$Type<(T)>, arg1: $UseOnContext$$Type): $InteractionResult
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbrosiumShardItem$$Type = ($AmbrosiumShardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmbrosiumShardItem$$Original = $AmbrosiumShardItem;}
declare module "com.aetherteam.aether.item.combat.GoldenDartItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractDart} from "com.aetherteam.aether.entity.projectile.dart.AbstractDart"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Position$$Type} from "net.minecraft.core.Position"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DartItem} from "com.aetherteam.aether.item.combat.DartItem"

export class $GoldenDartItem extends $DartItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asProjectile"(arg0: $Level$$Type, arg1: $Position$$Type, arg2: $ItemStack$$Type, arg3: $Direction$$Type): $Projectile
public "createDart"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractDart
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenDartItem$$Type = ($GoldenDartItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoldenDartItem$$Original = $GoldenDartItem;}
declare module "com.aetherteam.aether.item.accessories.pendant.ZanitePendantItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PendantItem} from "com.aetherteam.aether.item.accessories.pendant.PendantItem"
import {$ZaniteAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.ZaniteAccessory"
import {$Holder} from "net.minecraft.core.Holder"

export class $ZanitePendantItem extends $PendantItem implements $ZaniteAccessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "handleMiningSpeed"(arg0: float, arg1: $ItemStack$$Type): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZanitePendantItem$$Type = ($ZanitePendantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZanitePendantItem$$Original = $ZanitePendantItem;}
declare module "com.aetherteam.aether.item.combat.loot.CloudStaffItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CloudStaffItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudStaffItem$$Type = ($CloudStaffItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloudStaffItem$$Original = $CloudStaffItem;}
declare module "com.aetherteam.aether.item.combat.loot.CandyCaneSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $CandyCaneSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandyCaneSwordItem$$Type = ($CandyCaneSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CandyCaneSwordItem$$Original = $CandyCaneSwordItem;}
declare module "com.aetherteam.aether.item.tools.gravitite.GravititePickaxeItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GravititeTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.GravititeTool"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $GravititePickaxeItem extends $PickaxeItem implements $GravititeTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "floatBlock"(arg0: $UseOnContext$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititePickaxeItem$$Type = ($GravititePickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititePickaxeItem$$Original = $GravititePickaxeItem;}
declare module "com.aetherteam.aether.item.food.GummySwetItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$FoodProperties} from "net.minecraft.world.food.FoodProperties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"

export class $GummySwetItem extends $Item implements $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GummySwetItem$$Type = ($GummySwetItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GummySwetItem$$Original = $GummySwetItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootMilkBucketItem" {
import {$MilkBucketItem} from "net.minecraft.world.item.MilkBucketItem"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $SkyrootMilkBucketItem extends $MilkBucketItem implements $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootMilkBucketItem$$Type = ($SkyrootMilkBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootMilkBucketItem$$Original = $SkyrootMilkBucketItem;}
declare module "com.aetherteam.aether.item.accessories.pendant.IcePendantItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FreezeEvent} from "com.aetherteam.aether.event.FreezeEvent"
import {$Optional$$Type} from "java.util.Optional"
import {$FreezingAccessory$$Interface} from "com.aetherteam.aether.item.accessories.abilities.FreezingAccessory"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PendantItem} from "com.aetherteam.aether.item.accessories.pendant.PendantItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CacheableFunction$$Type} from "net.minecraft.commands.CacheableFunction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IcePendantItem extends $PendantItem implements $FreezingAccessory$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: any): $FreezeEvent
public "onFreeze"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $ItemStack$$Type): $FreezeEvent
public "freezeTick"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type): void
public "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: any, arg4: integer): integer
public "freezeFromRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: integer): integer
public "freezeBlockAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: ($CacheableFunction$$Type)?, arg6: $ItemStack$$Type, arg7: integer): integer
public "freezeBlocks"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: float): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcePendantItem$$Type = ($IcePendantItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IcePendantItem$$Original = $IcePendantItem;}
declare module "com.aetherteam.aether.item.accessories.cape.CapeItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SlotTypeReference} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$Item} from "net.minecraft.world.item.Item"
import {$SlotIdentifierHolder$$Interface} from "com.aetherteam.aether.item.accessories.SlotIdentifierHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $CapeItem extends $AccessoryItem implements $SlotIdentifierHolder$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $Item$Properties$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: $Item$Properties$$Type)

public "getIdentifier"(): $SlotTypeReference
public static "getStaticIdentifier"(): $SlotTypeReference
public "setRenderTexture"(arg0: StringJS, arg1: StringJS): void
public "getCapeTexture"(): $ResourceLocation
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "identifier"(): $SlotTypeReference
public static get "staticIdentifier"(): $SlotTypeReference
get "capeTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapeItem$$Type = ($CapeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapeItem$$Original = $CapeItem;}
declare module "com.aetherteam.aether.item.accessories.abilities.ZaniteAccessory" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ZaniteAccessory$$Interface {
}

export class $ZaniteAccessory implements $ZaniteAccessory$$Interface {
static "handleMiningSpeed"(arg0: float, arg1: $ItemStack$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZaniteAccessory$$Type = ($ZaniteAccessory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZaniteAccessory$$Original = $ZaniteAccessory;}
declare module "com.aetherteam.aether.item.tools.skyroot.SkyrootHoeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"
import {$SkyrootTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.SkyrootTool"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyrootHoeItem extends $HoeItem implements $SkyrootTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "doubleDrops"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $ItemStack
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootHoeItem$$Type = ($SkyrootHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootHoeItem$$Original = $SkyrootHoeItem;}
declare module "com.aetherteam.aether.item.accessories.miscellaneous.RegenerationStoneItem" {
import {$AccessoryItem} from "com.aetherteam.aether.item.accessories.AccessoryItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"
import {$SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $RegenerationStoneItem extends $AccessoryItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "tick"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegenerationStoneItem$$Type = ($RegenerationStoneItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegenerationStoneItem$$Original = $RegenerationStoneItem;}
declare module "com.aetherteam.aether.item.tools.abilities.SkyrootTool" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SkyrootTool$$Interface {
}

export class $SkyrootTool implements $SkyrootTool$$Interface {
 "doubleDrops"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $BlockState$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootTool$$Type = ($SkyrootTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootTool$$Original = $SkyrootTool;}
declare module "com.aetherteam.aether.item.tools.gravitite.GravititeHoeItem" {
import {$Map} from "java.util.Map"
import {$GravititeTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.GravititeTool"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $GravititeHoeItem extends $HoeItem implements $GravititeTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "floatBlock"(arg0: $UseOnContext$$Type): boolean
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeHoeItem$$Type = ($GravititeHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeHoeItem$$Original = $GravititeHoeItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootPoisonBucketItem" {
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
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"

export class $SkyrootPoisonBucketItem extends $Item implements $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootPoisonBucketItem$$Type = ($SkyrootPoisonBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootPoisonBucketItem$$Original = $SkyrootPoisonBucketItem;}
declare module "com.aetherteam.aether.item.accessories.gloves.LeatherGlovesItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GlovesItem} from "com.aetherteam.aether.item.accessories.gloves.GlovesItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $LeatherGlovesItem extends $GlovesItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BASE_PUNCH_DAMAGE_ID": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: double, arg1: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeatherGlovesItem$$Type = ($LeatherGlovesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeatherGlovesItem$$Original = $LeatherGlovesItem;}
declare module "com.aetherteam.aether.item.tools.abilities.GravititeTool" {
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $GravititeTool$$Interface {
}

export class $GravititeTool implements $GravititeTool$$Interface {
 "floatBlock"(arg0: $UseOnContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeTool$$Type = ($GravititeTool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeTool$$Original = $GravititeTool;}
declare module "com.aetherteam.aether.item.tools.holystone.HolystoneHoeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$HolystoneTool$$Interface} from "com.aetherteam.aether.item.tools.abilities.HolystoneTool"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HolystoneHoeItem extends $HoeItem implements $HolystoneTool$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "dropAmbrosium"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $BlockState$$Type): void
public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolystoneHoeItem$$Type = ($HolystoneHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolystoneHoeItem$$Original = $HolystoneHoeItem;}
declare module "com.aetherteam.aether.item.combat.abilities.weapon.GravititeWeapon" {
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $GravititeWeapon$$Interface {
}

export class $GravititeWeapon implements $GravititeWeapon$$Interface {
 "launchEntity"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravititeWeapon$$Type = ($GravititeWeapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GravititeWeapon$$Original = $GravititeWeapon;}
declare module "com.aetherteam.aether.item.food.WhiteAppleItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $WhiteAppleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhiteAppleItem$$Type = ($WhiteAppleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhiteAppleItem$$Original = $WhiteAppleItem;}
declare module "com.aetherteam.aether.item.miscellaneous.SliderSpawnEggItem" {
import {$Map} from "java.util.Map"
import {$DeferredSpawnEggItem} from "net.neoforged.neoforge.common.DeferredSpawnEggItem"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SpawnEggItem} from "net.minecraft.world.item.SpawnEggItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SliderSpawnEggItem extends $DeferredSpawnEggItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ENTITY_TYPE_FIELD_CODEC": $MapCodec<($EntityType<(never)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(never)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SliderSpawnEggItem$$Type = ($SliderSpawnEggItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SliderSpawnEggItem$$Original = $SliderSpawnEggItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootRemedyBucketItem" {
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
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConsumableItem$$Interface} from "com.aetherteam.aether.item.miscellaneous.ConsumableItem"

export class $SkyrootRemedyBucketItem extends $Item implements $ConsumableItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "consume"(arg0: $Item$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootRemedyBucketItem$$Type = ($SkyrootRemedyBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootRemedyBucketItem$$Original = $SkyrootRemedyBucketItem;}
declare module "com.aetherteam.aether.item.miscellaneous.bucket.SkyrootMobBucketItem" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MobBucketItem} from "net.minecraft.world.item.MobBucketItem"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SkyrootMobBucketItem extends $MobBucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EntityType<(never)>
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EntityType$$Type<(never)>, arg1: $Fluid$$Type, arg2: $SoundEvent$$Type, arg3: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyrootMobBucketItem$$Type = ($SkyrootMobBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkyrootMobBucketItem$$Original = $SkyrootMobBucketItem;}
declare module "com.aetherteam.aether.item.miscellaneous.AetherPortalItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $AetherPortalItem extends $Item {
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
export type $AetherPortalItem$$Type = ($AetherPortalItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AetherPortalItem$$Original = $AetherPortalItem;}
