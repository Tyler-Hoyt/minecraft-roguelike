declare module "appeng.api.crafting.EncodedPatternDecoder" {
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $EncodedPatternDecoder$$Interface<T extends $IPatternDetails> {

(arg0: $AEItemKey, arg1: $Level): T
}

export class $EncodedPatternDecoder<T extends $IPatternDetails> implements $EncodedPatternDecoder$$Interface {
 "decode"(arg0: $AEItemKey$$Type, arg1: $Level$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncodedPatternDecoder$$Type<T> = ((arg0: $AEItemKey, arg1: $Level) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncodedPatternDecoder$$Original<T> = $EncodedPatternDecoder<(T)>;}
declare module "appeng.api.crafting.InvalidPatternTooltipStrategy" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PatternDetailsTooltip, $PatternDetailsTooltip$$Type} from "appeng.api.crafting.PatternDetailsTooltip"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $InvalidPatternTooltipStrategy$$Interface {

(arg0: $ItemStack, arg1: $Level, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip$$Type
}

export class $InvalidPatternTooltipStrategy implements $InvalidPatternTooltipStrategy$$Interface {
 "getTooltip"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Exception$$Type, arg3: $TooltipFlag$$Type): $PatternDetailsTooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvalidPatternTooltipStrategy$$Type = ((arg0: $ItemStack, arg1: $Level, arg2: $Exception, arg3: $TooltipFlag) => $PatternDetailsTooltip$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvalidPatternTooltipStrategy$$Original = $InvalidPatternTooltipStrategy;}
declare module "appeng.api.crafting.PatternDetailsTooltip" {
import {$PatternDetailsTooltip$Property} from "appeng.api.crafting.PatternDetailsTooltip$Property"
import {$IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$List} from "java.util.List"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $PatternDetailsTooltip {
static readonly "OUTPUT_TEXT_PRODUCES": $Component
static readonly "OUTPUT_TEXT_CRAFTS": $Component

constructor(arg0: $Component$$Type)

public "getProperties"(): $List<($PatternDetailsTooltip$Property)>
public "getOutputs"(): $List<($GenericStack)>
public "getInputs"(): $List<($GenericStack)>
public "addOutput"(arg0: $AEKey$$Type, arg1: long): void
public "addOutput"(arg0: $GenericStack$$Type): void
public "addProperty"(arg0: $Component$$Type, arg1: $Component$$Type): void
public "addProperty"(arg0: $Component$$Type): void
public "addInputsAndOutputs"(arg0: $IPatternDetails$$Type): void
public "setOutputMethod"(arg0: $Component$$Type): void
public "getOutputMethod"(): $Component
public "addInput"(arg0: $GenericStack$$Type): void
public "addInput"(arg0: $AEKey$$Type, arg1: long): void
get "properties"(): $List<($PatternDetailsTooltip$Property)>
get "outputs"(): $List<($GenericStack)>
get "inputs"(): $List<($GenericStack)>
set "outputMethod"(value: $Component$$Type)
get "outputMethod"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternDetailsTooltip$$Type = ($PatternDetailsTooltip);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternDetailsTooltip$$Original = $PatternDetailsTooltip;}
declare module "appeng.api.crafting.IPatternDetails" {
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$List} from "java.util.List"
import {$AEItemKey} from "appeng.api.stacks.AEItemKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$PatternDetailsTooltip} from "appeng.api.crafting.PatternDetailsTooltip"
import {$GenericStack} from "appeng.api.stacks.GenericStack"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IPatternDetails$IInput} from "appeng.api.crafting.IPatternDetails$IInput"
import {$IPatternDetails$PatternInputSink$$Type} from "appeng.api.crafting.IPatternDetails$PatternInputSink"

export interface $IPatternDetails$$Interface {
get "definition"(): $AEItemKey
get "outputs"(): $List<($GenericStack)>
get "inputs"(): ($IPatternDetails$IInput)[]
get "primaryOutput"(): $GenericStack
}

export class $IPatternDetails implements $IPatternDetails$$Interface {
 "getDefinition"(): $AEItemKey
 "getOutputs"(): $List<($GenericStack)>
 "getInputs"(): ($IPatternDetails$IInput)[]
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
 "getPrimaryOutput"(): $GenericStack
 "supportsPushInputsToExternalInventory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$$Type = ($IPatternDetails);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPatternDetails$$Original = $IPatternDetails;}
declare module "appeng.api.crafting.IPatternDetails$IInput" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack} from "appeng.api.stacks.GenericStack"

export interface $IPatternDetails$IInput$$Interface {
get "multiplier"(): long
get "possibleInputs"(): ($GenericStack)[]
}

export class $IPatternDetails$IInput implements $IPatternDetails$IInput$$Interface {
 "getMultiplier"(): long
 "isValid"(arg0: $AEKey$$Type, arg1: $Level$$Type): boolean
 "getRemainingKey"(arg0: $AEKey$$Type): $AEKey
 "getPossibleInputs"(): ($GenericStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$IInput$$Type = ($IPatternDetails$IInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPatternDetails$IInput$$Original = $IPatternDetails$IInput;}
declare module "appeng.api.crafting.PatternDetailsTooltip$Property" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $PatternDetailsTooltip$Property extends $Record {
constructor(name: $Component$$Type, value: $Component$$Type)

public "name"(): $Component
public "value"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternDetailsTooltip$Property$$Type = ({"value"?: $Component$$Type, "name"?: $Component$$Type}) | ([value?: $Component$$Type, name?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PatternDetailsTooltip$Property$$Original = $PatternDetailsTooltip$Property;}
declare module "appeng.api.crafting.IPatternDetails$PatternInputSink" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $IPatternDetails$PatternInputSink$$Interface {

(arg0: $AEKey, arg1: long): void
}

export class $IPatternDetails$PatternInputSink implements $IPatternDetails$PatternInputSink$$Interface {
 "pushInput"(arg0: $AEKey$$Type, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$PatternInputSink$$Type = ((arg0: $AEKey, arg1: long) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPatternDetails$PatternInputSink$$Original = $IPatternDetails$PatternInputSink;}
