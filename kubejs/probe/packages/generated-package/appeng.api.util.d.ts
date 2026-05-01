declare module "appeng.api.util.IConfigManagerListener" {
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManagerListener$$Interface {

(arg0: $IConfigManager, arg1: $Setting<(never)>): void
}

export class $IConfigManagerListener implements $IConfigManagerListener$$Interface {
 "onSettingChanged"(arg0: $IConfigManager$$Type, arg1: $Setting$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManagerListener$$Type = ((arg0: $IConfigManager, arg1: $Setting<(never)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigManagerListener$$Original = $IConfigManagerListener;}
declare module "appeng.api.util.KeyTypeSelection$Listener" {
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"

export interface $KeyTypeSelection$Listener$$Interface {

(arg0: $KeyTypeSelection): void
}

export class $KeyTypeSelection$Listener implements $KeyTypeSelection$Listener$$Interface {
 "onKeyTypeSelectionChanged"(arg0: $KeyTypeSelection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelection$Listener$$Type = ((arg0: $KeyTypeSelection) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyTypeSelection$Listener$$Original = $KeyTypeSelection$Listener;}
declare module "appeng.api.util.AECableSize" {
import {$Enum} from "java.lang.Enum"

export class $AECableSize extends $Enum<($AECableSize)> {
static readonly "DENSE": $AECableSize
static readonly "NONE": $AECableSize
static readonly "NORMAL": $AECableSize

public static "values"(): ($AECableSize)[]
public static "min"(arg0: $AECableSize$$Type, arg1: $AECableSize$$Type): $AECableSize
public static "max"(arg0: $AECableSize$$Type, arg1: $AECableSize$$Type): $AECableSize
public static "valueOf"(arg0: StringJS): $AECableSize
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableSize$$Type = (("none") | ("normal") | ("dense"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AECableSize$$Original = $AECableSize;}
declare module "appeng.api.util.AEColor" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AEColor extends $Enum<($AEColor)> implements $StringRepresentable$$Interface {
readonly "mediumVariant": integer
readonly "englishName": StringJS
static readonly "GRAY": $AEColor
readonly "translationKey": StringJS
static readonly "BLUE": $AEColor
static readonly "TINTINDEX_BRIGHT": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AEColor)>
static readonly "VALID_COLORS": $List<($AEColor)>
static readonly "PINK": $AEColor
readonly "whiteVariant": integer
static readonly "BLACK": $AEColor
static readonly "TRANSPARENT": $AEColor
static readonly "BROWN": $AEColor
static readonly "ORANGE": $AEColor
static readonly "WHITE": $AEColor
static readonly "TINTINDEX_DARK": integer
readonly "registryPrefix": StringJS
static readonly "CODEC": $Codec<($AEColor)>
readonly "contrastTextColor": integer
static readonly "TINTINDEX_MEDIUM_BRIGHT": integer
static readonly "PURPLE": $AEColor
static readonly "GREEN": $AEColor
static readonly "TINTINDEX_MEDIUM": integer
static readonly "RED": $AEColor
readonly "dye": $DyeColor
static readonly "LIGHT_GRAY": $AEColor
static readonly "LIGHT_BLUE": $AEColor
static readonly "LIME": $AEColor
static readonly "MAGENTA": $AEColor
static readonly "YELLOW": $AEColor
static readonly "CYAN": $AEColor
readonly "blackVariant": integer

public "toString"(): StringJS
public static "values"(): ($AEColor)[]
public static "valueOf"(arg0: StringJS): $AEColor
public "getSerializedName"(): StringJS
public "getVariantByTintIndex"(arg0: integer): integer
public static "fromDye"(arg0: $DyeColor$$Type): $AEColor
public "getEnglishName"(): StringJS
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
export type $AEColor$$Type = (("white") | ("light_gray") | ("gray") | ("black") | ("lime") | ("yellow") | ("orange") | ("brown") | ("red") | ("pink") | ("magenta") | ("purple") | ("blue") | ("light_blue") | ("cyan") | ("green") | ("fluix"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AEColor$$Original = $AEColor;}
declare module "appeng.api.util.AECableType" {
import {$Enum} from "java.lang.Enum"
import {$AECableVariant} from "appeng.api.util.AECableVariant"
import {$AECableSize} from "appeng.api.util.AECableSize"

export class $AECableType extends $Enum<($AECableType)> {
static readonly "GLASS": $AECableType
static readonly "VALIDCABLES": ($AECableType)[]
static readonly "COVERED": $AECableType
static readonly "NONE": $AECableType
static readonly "SMART": $AECableType
static readonly "DENSE_COVERED": $AECableType
static readonly "DENSE_SMART": $AECableType

public "size"(): $AECableSize
public static "values"(): ($AECableType)[]
public static "min"(arg0: $AECableType$$Type, arg1: $AECableType$$Type): $AECableType
public static "max"(arg0: $AECableType$$Type, arg1: $AECableType$$Type): $AECableType
public static "valueOf"(arg0: StringJS): $AECableType
public "isValid"(): boolean
public "variant"(): $AECableVariant
public "isDense"(): boolean
public "isSmart"(): boolean
get "valid"(): boolean
get "dense"(): boolean
get "smart"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableType$$Type = (("none") | ("glass") | ("covered") | ("smart") | ("dense_covered") | ("dense_smart"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AECableType$$Original = $AECableType;}
declare module "appeng.api.util.DimensionalBlockPos" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $DimensionalBlockPos {
constructor(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)
constructor(arg0: $BlockEntity$$Type)
constructor(arg0: $DimensionalBlockPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLevel"(): $Level
public "isInWorld"(arg0: $LevelAccessor$$Type): boolean
public "getPos"(): $BlockPos
get "level"(): $Level
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalBlockPos$$Type = ($DimensionalBlockPos);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionalBlockPos$$Original = $DimensionalBlockPos;}
declare module "appeng.api.util.AECableVariant" {
import {$Enum} from "java.lang.Enum"

export class $AECableVariant extends $Enum<($AECableVariant)> {
static readonly "GLASS": $AECableVariant
static readonly "COVERED": $AECableVariant
static readonly "NONE": $AECableVariant
static readonly "SMART": $AECableVariant

public static "values"(): ($AECableVariant)[]
public static "min"(arg0: $AECableVariant$$Type, arg1: $AECableVariant$$Type): $AECableVariant
public static "max"(arg0: $AECableVariant$$Type, arg1: $AECableVariant$$Type): $AECableVariant
public static "valueOf"(arg0: StringJS): $AECableVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableVariant$$Type = (("none") | ("glass") | ("covered") | ("smart"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AECableVariant$$Original = $AECableVariant;}
declare module "appeng.api.util.KeyTypeSelection" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$KeyTypeSelection$Listener$$Type} from "appeng.api.util.KeyTypeSelection$Listener"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $KeyTypeSelection {
constructor(arg0: $Runnable$$Type, arg1: $Predicate$$Type<($AEKeyType)>)
constructor(arg0: $KeyTypeSelection$Listener$$Type, arg1: $Predicate$$Type<($AEKeyType)>)

public "isEnabled"(arg0: $AEKeyType$$Type): boolean
public "enabled"(): $Map<($AEKeyType), (boolean)>
public "enabledPredicate"(): $Predicate<($AEKeyType)>
public "setEnabledSet"(arg0: $List$$Type<($AEKeyType$$Type)>): void
public "enabledSet"(): $List<($AEKeyType)>
public "setEnabled"(arg0: $AEKeyType$$Type, arg1: boolean): void
public static "forStack"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($AEKeyType)>): $KeyTypeSelection
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelection$$Type = ($KeyTypeSelection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyTypeSelection$$Original = $KeyTypeSelection;}
declare module "appeng.api.util.IConfigManager" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$IConfigManagerBuilder} from "appeng.api.util.IConfigManagerBuilder"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IConfigManagerListener$$Type} from "appeng.api.util.IConfigManagerListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManager$$Interface {
get "settings"(): $Set<($Setting<(never)>)>
}

export class $IConfigManager implements $IConfigManager$$Interface {
static "builder"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManagerBuilder
static "builder"(arg0: $Runnable$$Type): $IConfigManagerBuilder
static "builder"(arg0: $ItemStack$$Type): $IConfigManagerBuilder
static "builder"(arg0: $IConfigManagerListener$$Type): $IConfigManagerBuilder
 "hasSetting"(arg0: $Setting$$Type<(never)>): boolean
 "putSetting"<T extends $Enum<(object)>>(arg0: $Setting$$Type<(T)>, arg1: T): void
 "getSettings"(): $Set<($Setting<(never)>)>
 "exportSettings"(): $Map<(StringJS), (StringJS)>
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): boolean
 "getSetting"<T extends $Enum<(object)>>(arg0: $Setting$$Type<(T)>): T
 "importSettings"(arg0: $Map$$Type<(StringJS), (StringJS)>): boolean
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManager$$Type = ($IConfigManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigManager$$Original = $IConfigManager;}
declare module "appeng.api.util.IConfigManagerBuilder" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IConfigManager} from "appeng.api.util.IConfigManager"
import {$Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManagerBuilder$$Interface {
}

export class $IConfigManagerBuilder implements $IConfigManagerBuilder$$Interface {
 "build"(): $IConfigManager
 "registerSetting"<T extends $Enum<(object)>>(arg0: $Setting$$Type<(T)>, arg1: T): $IConfigManagerBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManagerBuilder$$Type = ($IConfigManagerBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigManagerBuilder$$Original = $IConfigManagerBuilder;}
declare module "appeng.api.util.IConfigurableObject" {
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"

export interface $IConfigurableObject$$Interface {

(): $IConfigManager$$Type
get "configManager"(): $IConfigManager
}

export class $IConfigurableObject implements $IConfigurableObject$$Interface {
 "getConfigManager"(): $IConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableObject$$Type = (() => $IConfigManager$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigurableObject$$Original = $IConfigurableObject;}
declare module "appeng.api.util.KeyTypeSelectionHost" {
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"

export interface $KeyTypeSelectionHost$$Interface {

(): $KeyTypeSelection$$Type
get "keyTypeSelection"(): $KeyTypeSelection
}

export class $KeyTypeSelectionHost implements $KeyTypeSelectionHost$$Interface {
 "getKeyTypeSelection"(): $KeyTypeSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionHost$$Type = (() => $KeyTypeSelection$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyTypeSelectionHost$$Original = $KeyTypeSelectionHost;}
