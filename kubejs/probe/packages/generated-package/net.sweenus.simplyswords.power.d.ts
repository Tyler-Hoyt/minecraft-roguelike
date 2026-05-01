declare module "net.sweenus.simplyswords.power.powers.StoneskinPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $StoneskinPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneskinPower$$Type = ($StoneskinPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoneskinPower$$Original = $StoneskinPower;}
declare module "net.sweenus.simplyswords.power.powers.OnslaughtPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List$$Type} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $OnslaughtPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnslaughtPower$$Type = ($OnslaughtPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OnslaughtPower$$Original = $OnslaughtPower;}
declare module "net.sweenus.simplyswords.power.PowerType" {
import {$Enum} from "java.lang.Enum"
import {$RegistrySupplier} from "dev.architectury.registry.registries.RegistrySupplier"
import {$List} from "java.util.List"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $PowerType extends $Enum<($PowerType)> {
static readonly "NETHER": $PowerType
static readonly "RUNIC": $PowerType
static readonly "RUNEFUSED": $PowerType

public static "values"(): ($PowerType)[]
public static "valueOf"(name: StringJS): $PowerType
public "getEntries"(): $List<($RegistrySupplier<($GemPower)>)>
get "entries"(): $List<($RegistrySupplier<($GemPower)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerType$$Type = (("runic") | ("runefused") | ("nether"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PowerType$$Original = $PowerType;}
declare module "net.sweenus.simplyswords.power.powers.WildfirePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $WildfirePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfirePower$$Type = ($WildfirePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WildfirePower$$Original = $WildfirePower;}
declare module "net.sweenus.simplyswords.power.powers.ThrowingPower" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ThrowingPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowingPower$$Type = ($ThrowingPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThrowingPower$$Original = $ThrowingPower;}
declare module "net.sweenus.simplyswords.power.powers.SwiftnessPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $SwiftnessPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwiftnessPower$$Type = ($SwiftnessPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SwiftnessPower$$Original = $SwiftnessPower;}
declare module "net.sweenus.simplyswords.power.GemPower" {
import {$PowerType, $PowerType$$Type} from "net.sweenus.simplyswords.power.PowerType"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $GemPower implements $TooltipProvider$$Interface {
static "EMPTY": $GemPower

constructor(isGreater: boolean, ...applicableTypes: ($PowerType$$Type)[])

public "isEmpty"(): boolean
public "isGreater"(): boolean
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "applicableTypes"(): $List<($PowerType)>
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "addToTooltip"(context: $Item$TooltipContext$$Type, tooltip: $Consumer$$Type<($Component)>, type: $TooltipFlag$$Type): void
get "empty"(): boolean
get "greater"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.SimplyswordsGemPower
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SimplyswordsGemPowerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPower$$Type = (Special.SimplyswordsGemPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemPower$$Original = $GemPower;}
declare module "net.sweenus.simplyswords.power.powers.PincushionPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $PincushionPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PincushionPower$$Type = ($PincushionPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PincushionPower$$Original = $PincushionPower;}
declare module "net.sweenus.simplyswords.power.RunefusedGemPower" {
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $RunefusedGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunefusedGemPower$$Type = ($RunefusedGemPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunefusedGemPower$$Original = $RunefusedGemPower;}
declare module "net.sweenus.simplyswords.power.powers.ShieldingPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ShieldingPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldingPower$$Type = ($ShieldingPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShieldingPower$$Original = $ShieldingPower;}
declare module "net.sweenus.simplyswords.power.powers.TrailblazePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $TrailblazePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailblazePower$$Type = ($TrailblazePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrailblazePower$$Original = $TrailblazePower;}
declare module "net.sweenus.simplyswords.power.powers.UnstablePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $UnstablePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePower$$Type = ($UnstablePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnstablePower$$Original = $UnstablePower;}
declare module "net.sweenus.simplyswords.power.powers.SlowPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $SlowPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlowPower$$Type = ($SlowPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlowPower$$Original = $SlowPower;}
declare module "net.sweenus.simplyswords.power.powers.WardPower" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $WardPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WardPower$$Type = ($WardPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WardPower$$Original = $WardPower;}
declare module "net.sweenus.simplyswords.power.powers.ImbuedPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ImbuedPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuedPower$$Type = ($ImbuedPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImbuedPower$$Original = $ImbuedPower;}
declare module "net.sweenus.simplyswords.power.GemPowerComponent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$Record} from "java.lang.Record"

export class $GemPowerComponent extends $Record {
static readonly "CODEC": $Codec<($GemPowerComponent)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GemPowerComponent)>
static readonly "DEFAULT": $GemPowerComponent

constructor(hasRunicPower: boolean, hasNetherPower: boolean, runicPower: $Holder$$Type<($GemPower)>, netherPower: $Holder$$Type<($GemPower)>)

public "equals"(componentObject: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "fill"(runicFiller: $BiFunction$$Type<(boolean), ($Holder<($GemPower)>), ($Holder$$Type<($GemPower$$Type)>)>, netherFiller: $BiFunction$$Type<(boolean), ($Holder<($GemPower)>), ($Holder$$Type<($GemPower$$Type)>)>): $GemPowerComponent
public static "create"(runic: $Holder$$Type<($GemPower)>, nether: $Holder$$Type<($GemPower)>): $GemPowerComponent
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "createEmpty"(hasRunic: boolean, hasNether: boolean): $GemPowerComponent
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "hasPower"(power: $Holder$$Type<($GemPower)>): boolean
public static "nether"(power: $Holder$$Type<($GemPower)>): $GemPowerComponent
public "runicPower"(): $Holder<($GemPower)>
public static "runic"(power: $Holder$$Type<($GemPower)>): $GemPowerComponent
public "hasNether"(power: $Holder$$Type<($GemPower)>): boolean
public "hasRunic"(power: $Holder$$Type<($GemPower)>): boolean
public "hasNetherPower"(): boolean
public "hasRunicPower"(): boolean
public "netherPower"(): $Holder<($GemPower)>
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "canBeFilled"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPowerComponent$$Type = ({"netherPower"?: $Holder$$Type<($GemPower)>, "hasNetherPower"?: boolean, "hasRunicPower"?: boolean, "runicPower"?: $Holder$$Type<($GemPower)>}) | ([netherPower?: $Holder$$Type<($GemPower)>, hasNetherPower?: boolean, hasRunicPower?: boolean, runicPower?: $Holder$$Type<($GemPower)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemPowerComponent$$Original = $GemPowerComponent;}
declare module "net.sweenus.simplyswords.power.RunicGemPower" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $RunicGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicGemPower$$Type = ($RunicGemPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RunicGemPower$$Original = $RunicGemPower;}
declare module "net.sweenus.simplyswords.power.powers.NullificationPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List$$Type} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $NullificationPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullificationPower$$Type = ($NullificationPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NullificationPower$$Original = $NullificationPower;}
declare module "net.sweenus.simplyswords.power.powers.FrostWardPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $FrostWardPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostWardPower$$Type = ($FrostWardPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrostWardPower$$Original = $FrostWardPower;}
declare module "net.sweenus.simplyswords.power.powers.FloatPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $FloatPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatPower$$Type = ($FloatPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloatPower$$Original = $FloatPower;}
declare module "net.sweenus.simplyswords.power.powers.ActiveDefencePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ActiveDefencePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActiveDefencePower$$Type = ($ActiveDefencePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ActiveDefencePower$$Original = $ActiveDefencePower;}
declare module "net.sweenus.simplyswords.power.powers.EchoPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List$$Type} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $EchoPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoPower$$Type = ($EchoPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EchoPower$$Original = $EchoPower;}
declare module "net.sweenus.simplyswords.power.powers.BerserkPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List$$Type} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $BerserkPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BerserkPower$$Type = ($BerserkPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BerserkPower$$Original = $BerserkPower;}
declare module "net.sweenus.simplyswords.power.powers.ImmolationPower" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ImmolationPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolationPower$$Type = ($ImmolationPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmolationPower$$Original = $ImmolationPower;}
declare module "net.sweenus.simplyswords.power.GemPower$EmptyGemPower" {
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $GemPower$EmptyGemPower extends $GemPower {
static "EMPTY": $GemPower

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPower$EmptyGemPower$$Type = ($GemPower$EmptyGemPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemPower$EmptyGemPower$$Original = $GemPower$EmptyGemPower;}
declare module "net.sweenus.simplyswords.power.powers.MomentumPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$RunicGemPower} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $MomentumPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MomentumPower$$Type = ($MomentumPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MomentumPower$$Original = $MomentumPower;}
declare module "net.sweenus.simplyswords.power.powers.FreezePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $FreezePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezePower$$Type = ($FreezePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreezePower$$Original = $FreezePower;}
declare module "net.sweenus.simplyswords.power.NetherGemPower" {
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"

export class $NetherGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherGemPower$$Type = ($NetherGemPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetherGemPower$$Original = $NetherGemPower;}
declare module "net.sweenus.simplyswords.power.powers.RadiancePower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List$$Type} from "java.util.List"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $RadiancePower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadiancePower$$Type = ($RadiancePower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RadiancePower$$Original = $RadiancePower;}
declare module "net.sweenus.simplyswords.power.powers.ZephyrPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ZephyrPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZephyrPower$$Type = ($ZephyrPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZephyrPower$$Original = $ZephyrPower;}
declare module "net.sweenus.simplyswords.power.GemPowerFiller" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export interface $GemPowerFiller$$Interface {

(arg0: $ItemStack, arg1: $GemPowerComponent): $ValidationResult$$Type<($GemPowerComponent$$Type)>
}

export class $GemPowerFiller implements $GemPowerFiller$$Interface {
 "fill"(arg0: $ItemStack$$Type, arg1: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPowerFiller$$Type = ((arg0: $ItemStack, arg1: $GemPowerComponent) => $ValidationResult$$Type<($GemPowerComponent$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GemPowerFiller$$Original = $GemPowerFiller;}
declare module "net.sweenus.simplyswords.power.powers.WeakenPower" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$RunefusedGemPower} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower} from "net.sweenus.simplyswords.power.GemPower"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $WeakenPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakenPower$$Type = ($WeakenPower);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WeakenPower$$Original = $WeakenPower;}
