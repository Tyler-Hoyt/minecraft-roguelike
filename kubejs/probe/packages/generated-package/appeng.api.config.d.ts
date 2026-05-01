declare module "appeng.api.config.PowerMultiplier" {
import {$Enum} from "java.lang.Enum"

export class $PowerMultiplier extends $Enum<($PowerMultiplier)> {
static readonly "CONFIG": $PowerMultiplier
 "multiplier": double
static readonly "ONE": $PowerMultiplier

public static "values"(): ($PowerMultiplier)[]
public static "valueOf"(arg0: StringJS): $PowerMultiplier
public "multiply"(arg0: double): double
public "divide"(arg0: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerMultiplier$$Type = (("one") | ("config"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PowerMultiplier$$Original = $PowerMultiplier;}
declare module "appeng.api.config.CpuSelectionMode" {
import {$Enum} from "java.lang.Enum"

export class $CpuSelectionMode extends $Enum<($CpuSelectionMode)> {
static readonly "PLAYER_ONLY": $CpuSelectionMode
static readonly "MACHINE_ONLY": $CpuSelectionMode
static readonly "ANY": $CpuSelectionMode

public static "values"(): ($CpuSelectionMode)[]
public static "valueOf"(arg0: StringJS): $CpuSelectionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CpuSelectionMode$$Type = (("any") | ("player_only") | ("machine_only"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CpuSelectionMode$$Original = $CpuSelectionMode;}
declare module "appeng.api.config.PowerUnit" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PowerUnit extends $Enum<($PowerUnit)> {
 "conversionRatio": double
static readonly "AE": $PowerUnit
readonly "unlocalizedName": StringJS
readonly "symbolName": StringJS
static readonly "FE": $PowerUnit

public static "values"(): ($PowerUnit)[]
public static "valueOf"(arg0: StringJS): $PowerUnit
public "textComponent"(): $Component
public "getSymbolName"(): StringJS
public "convertTo"(arg0: $PowerUnit$$Type, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerUnit$$Type = (("ae") | ("fe"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PowerUnit$$Original = $PowerUnit;}
declare module "appeng.api.config.Actionable" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Enum} from "java.lang.Enum"

export class $Actionable extends $Enum<($Actionable)> {
static readonly "MODULATE": $Actionable
static readonly "SIMULATE": $Actionable

public static "values"(): ($Actionable)[]
public static "valueOf"(arg0: StringJS): $Actionable
public static "of"(arg0: $IFluidHandler$FluidAction$$Type): $Actionable
public "getFluidAction"(): $IFluidHandler$FluidAction
public "isSimulate"(): boolean
public static "ofSimulate"(arg0: boolean): $Actionable
get "fluidAction"(): $IFluidHandler$FluidAction
get "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Actionable$$Type = (("modulate") | ("simulate"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Actionable$$Original = $Actionable;}
declare module "appeng.api.config.LockCraftingMode" {
import {$Enum} from "java.lang.Enum"

export class $LockCraftingMode extends $Enum<($LockCraftingMode)> {
static readonly "LOCK_UNTIL_PULSE": $LockCraftingMode
static readonly "LOCK_UNTIL_RESULT": $LockCraftingMode
static readonly "NONE": $LockCraftingMode
static readonly "LOCK_WHILE_HIGH": $LockCraftingMode
static readonly "LOCK_WHILE_LOW": $LockCraftingMode

public static "values"(): ($LockCraftingMode)[]
public static "valueOf"(arg0: StringJS): $LockCraftingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockCraftingMode$$Type = (("none") | ("lock_until_pulse") | ("lock_while_high") | ("lock_while_low") | ("lock_until_result"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LockCraftingMode$$Original = $LockCraftingMode;}
declare module "appeng.api.config.Setting" {
import {$Enum} from "java.lang.Enum"
import {$IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$EnumSet$$Type} from "java.util.EnumSet"

export class $Setting<T extends $Enum<(object)>> {
constructor(arg0: StringJS, arg1: $Class$$Type<(T)>)
constructor(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumSet$$Type<(T)>)

public "getName"(): StringJS
public "toString"(): StringJS
public "getValue"(arg0: $IConfigManager$$Type): T
public "copy"(arg0: $IConfigManager$$Type, arg1: $IConfigManager$$Type): void
public "getEnumClass"(): $Class<(T)>
public "setFromString"(arg0: $IConfigManager$$Type, arg1: StringJS): void
public "getValues"(): $Set<(T)>
get "name"(): StringJS
get "enumClass"(): $Class<(T)>
get "values"(): $Set<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Setting$$Type<T> = ($Setting<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Setting$$Original<T> = $Setting<(T)>;}
declare module "appeng.api.config.FuzzyMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FuzzyMode extends $Enum<($FuzzyMode)> implements $StringRepresentable$$Interface {
static readonly "PERCENT_75": $FuzzyMode
static readonly "PERCENT_99": $FuzzyMode
static readonly "CODEC": $Codec<($FuzzyMode)>
static readonly "PERCENT_25": $FuzzyMode
readonly "percentage": float
readonly "breakPoint": float
static readonly "IGNORE_ALL": $FuzzyMode
static readonly "PERCENT_50": $FuzzyMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($FuzzyMode)>

public static "values"(): ($FuzzyMode)[]
public static "valueOf"(arg0: StringJS): $FuzzyMode
public "calculateBreakPoint"(arg0: integer): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuzzyMode$$Type = (("ignore_all") | ("percent_99") | ("percent_75") | ("percent_50") | ("percent_25"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuzzyMode$$Original = $FuzzyMode;}
declare module "appeng.api.config.IncludeExclude" {
import {$Enum} from "java.lang.Enum"

export class $IncludeExclude extends $Enum<($IncludeExclude)> {
static readonly "BLACKLIST": $IncludeExclude
static readonly "WHITELIST": $IncludeExclude

public static "values"(): ($IncludeExclude)[]
public static "valueOf"(arg0: StringJS): $IncludeExclude
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncludeExclude$$Type = (("whitelist") | ("blacklist"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IncludeExclude$$Original = $IncludeExclude;}
declare module "appeng.api.config.AccessRestriction" {
import {$Enum} from "java.lang.Enum"

export class $AccessRestriction extends $Enum<($AccessRestriction)> {
static readonly "READ": $AccessRestriction
static readonly "NO_ACCESS": $AccessRestriction
static readonly "WRITE": $AccessRestriction
static readonly "READ_WRITE": $AccessRestriction

public static "values"(): ($AccessRestriction)[]
public static "valueOf"(arg0: StringJS): $AccessRestriction
public "isAllowInsertion"(): boolean
public "isAllowExtraction"(): boolean
get "allowInsertion"(): boolean
get "allowExtraction"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessRestriction$$Type = (("no_access") | ("read") | ("write") | ("read_write"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessRestriction$$Original = $AccessRestriction;}
