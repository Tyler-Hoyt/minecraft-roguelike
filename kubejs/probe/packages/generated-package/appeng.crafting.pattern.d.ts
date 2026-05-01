declare module "appeng.crafting.pattern.EncodedPatternItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$EncodedPatternDecoder$$Type} from "appeng.api.crafting.EncodedPatternDecoder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$InvalidPatternTooltipStrategy$$Type} from "appeng.api.crafting.InvalidPatternTooltipStrategy"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IPatternDetails} from "appeng.api.crafting.IPatternDetails"
import {$AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$AEBaseItem} from "appeng.items.AEBaseItem"

export class $EncodedPatternItem<T extends $IPatternDetails> extends $AEBaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $EncodedPatternDecoder$$Type<(T)>, arg2: $InvalidPatternTooltipStrategy$$Type)

public "decode"(arg0: $AEItemKey$$Type, arg1: $Level$$Type): $IPatternDetails
public "decode"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $IPatternDetails
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "getOutput"(arg0: $ItemStack$$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncodedPatternItem$$Type<T> = ($EncodedPatternItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncodedPatternItem$$Original<T> = $EncodedPatternItem<(T)>;}
