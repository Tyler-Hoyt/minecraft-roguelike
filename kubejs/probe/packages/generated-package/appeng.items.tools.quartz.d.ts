declare module "appeng.items.tools.quartz.QuartzHoeItem" {
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$HoeItem} from "net.minecraft.world.item.HoeItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Consumer} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"

export class $QuartzHoeItem extends $HoeItem {
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

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzHoeItem$$Type = ($QuartzHoeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzHoeItem$$Original = $QuartzHoeItem;}
declare module "appeng.items.tools.quartz.QuartzPickaxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$PickaxeItem} from "net.minecraft.world.item.PickaxeItem"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $QuartzPickaxeItem extends $PickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzPickaxeItem$$Type = ($QuartzPickaxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzPickaxeItem$$Original = $QuartzPickaxeItem;}
declare module "appeng.items.tools.quartz.QuartzSwordItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$SwordItem} from "net.minecraft.world.item.SwordItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $QuartzSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSwordItem$$Type = ($QuartzSwordItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzSwordItem$$Original = $QuartzSwordItem;}
declare module "appeng.items.tools.quartz.QuartzToolType" {
import {$Enum} from "java.lang.Enum"
import {$Tier} from "net.minecraft.world.item.Tier"

export class $QuartzToolType extends $Enum<($QuartzToolType)> {
static readonly "CERTUS": $QuartzToolType
static readonly "NETHER": $QuartzToolType

public "getName"(): StringJS
public static "values"(): ($QuartzToolType)[]
public static "valueOf"(arg0: StringJS): $QuartzToolType
public "getToolTier"(): $Tier
get "name"(): StringJS
get "toolTier"(): $Tier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzToolType$$Type = (("certus") | ("nether"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzToolType$$Original = $QuartzToolType;}
declare module "appeng.items.tools.quartz.QuartzSpadeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ShovelItem} from "net.minecraft.world.item.ShovelItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $QuartzSpadeItem extends $ShovelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSpadeItem$$Type = ($QuartzSpadeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzSpadeItem$$Original = $QuartzSpadeItem;}
declare module "appeng.items.tools.quartz.QuartzWrenchItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $QuartzWrenchItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzWrenchItem$$Type = ($QuartzWrenchItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzWrenchItem$$Original = $QuartzWrenchItem;}
declare module "appeng.items.tools.quartz.QuartzAxeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$AxeItem} from "net.minecraft.world.item.AxeItem"
import {$Tier} from "net.minecraft.world.item.Tier"
import {$Holder} from "net.minecraft.core.Holder"

export class $QuartzAxeItem extends $AxeItem {
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

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzAxeItem$$Type = ($QuartzAxeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzAxeItem$$Original = $QuartzAxeItem;}
declare module "appeng.items.tools.quartz.QuartzCuttingKnifeItem" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem$$Interface} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $QuartzCuttingKnifeItem extends $AEBaseItem implements $IMenuItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(never)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingKnifeItem$$Type = ($QuartzCuttingKnifeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuartzCuttingKnifeItem$$Original = $QuartzCuttingKnifeItem;}
