declare module "appeng.items.misc.MissingContentItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$MissingContentItem$BrokenStackInfo} from "appeng.items.misc.MissingContentItem$BrokenStackInfo"

export class $MissingContentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getBrokenStackInfo"(arg0: $ItemStack$$Type): $MissingContentItem$BrokenStackInfo
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingContentItem$$Type = ($MissingContentItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MissingContentItem$$Original = $MissingContentItem;}
declare module "appeng.items.misc.PaintBallItem" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $PaintBallItem extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $AEColor$$Type, arg2: boolean)

public "getColor"(): $AEColor
public "isLumen"(): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $AEColor
get "lumen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintBallItem$$Type = ($PaintBallItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintBallItem$$Original = $PaintBallItem;}
declare module "appeng.items.misc.MeteoriteCompassItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$Holder} from "net.minecraft.core.Holder"

export class $MeteoriteCompassItem extends $AEBaseItem {
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
export type $MeteoriteCompassItem$$Type = ($MeteoriteCompassItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeteoriteCompassItem$$Original = $MeteoriteCompassItem;}
declare module "appeng.items.misc.MissingContentItem$BrokenStackInfo" {
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $MissingContentItem$BrokenStackInfo extends $Record {
constructor(displayName: $Component$$Type, keyType: $AEKeyType$$Type, amount: long)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "displayName"(): $Component
public "keyType"(): $AEKeyType
public "amount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingContentItem$BrokenStackInfo$$Type = ({"displayName"?: $Component$$Type, "amount"?: long, "keyType"?: $AEKeyType$$Type}) | ([displayName?: $Component$$Type, amount?: long, keyType?: $AEKeyType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MissingContentItem$BrokenStackInfo$$Original = $MissingContentItem$BrokenStackInfo;}
declare module "appeng.items.misc.WrappedGenericStack" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AEBaseItem} from "appeng.items.AEBaseItem"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $WrappedGenericStack extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "wrap"(arg0: $GenericStack$$Type): $ItemStack
public static "wrap"(arg0: $AEKey$$Type, arg1: long): $ItemStack
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "unwrapAmount"(arg0: $ItemStack$$Type): long
public "unwrapWhat"(arg0: $ItemStack$$Type): $AEKey
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedGenericStack$$Type = ($WrappedGenericStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedGenericStack$$Original = $WrappedGenericStack;}
