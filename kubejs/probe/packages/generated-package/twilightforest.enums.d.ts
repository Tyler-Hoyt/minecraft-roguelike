declare module "twilightforest.enums.BanisterShape" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BanisterShape extends $Enum<($BanisterShape)> implements $StringRepresentable$$Interface {
static readonly "TALL": $BanisterShape
static readonly "CONNECTED": $BanisterShape
static readonly "SHORT": $BanisterShape

public static "values"(): ($BanisterShape)[]
public static "valueOf"(arg0: StringJS): $BanisterShape
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
export type $BanisterShape$$Type = (("short") | ("tall") | ("connected"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BanisterShape$$Original = $BanisterShape;}
declare module "twilightforest.enums.BrazierLight" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BrazierLight extends $Enum<($BrazierLight)> implements $StringRepresentable$$Interface {
static readonly "HALF": $BrazierLight
static readonly "DIM": $BrazierLight
static readonly "OFF": $BrazierLight
static readonly "FULL": $BrazierLight
static readonly "BRIGHT": $BrazierLight

public static "values"(): ($BrazierLight)[]
public static "valueOf"(arg0: StringJS): $BrazierLight
public "isLit"(): boolean
public "getSerializedName"(): StringJS
public "getSmokeRate"(): integer
public "getFireSize"(): float
public "getLight"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "lit"(): boolean
get "serializedName"(): StringJS
get "smokeRate"(): integer
get "fireSize"(): float
get "light"(): integer
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrazierLight$$Type = (("off") | ("dim") | ("half") | ("bright") | ("full"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrazierLight$$Original = $BrazierLight;}
declare module "twilightforest.enums.BossVariant$TrophyType" {
import {$Enum} from "java.lang.Enum"

export class $BossVariant$TrophyType extends $Enum<($BossVariant$TrophyType)> {
static readonly "GOLD": $BossVariant$TrophyType
static readonly "IRONWOOD": $BossVariant$TrophyType
static readonly "IRON": $BossVariant$TrophyType

public static "values"(): ($BossVariant$TrophyType)[]
public static "valueOf"(arg0: StringJS): $BossVariant$TrophyType
public "getModelName"(): StringJS
get "modelName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossVariant$TrophyType$$Type = (("gold") | ("iron") | ("ironwood"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossVariant$TrophyType$$Original = $BossVariant$TrophyType;}
declare module "twilightforest.enums.BlockLoggingEnum$IMultiLoggable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$LiquidBlockContainer$$Interface} from "net.minecraft.world.level.block.LiquidBlockContainer"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BucketPickup$$Interface} from "net.minecraft.world.level.block.BucketPickup"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockLoggingEnum$IMultiLoggable$$Interface extends $BucketPickup$$Interface, $LiquidBlockContainer$$Interface {
get "pickupSound"(): $Optional<($SoundEvent)>
}

export class $BlockLoggingEnum$IMultiLoggable implements $BlockLoggingEnum$IMultiLoggable$$Interface {
 "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
 "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
 "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLoggingEnum$IMultiLoggable$$Type = ($BlockLoggingEnum$IMultiLoggable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockLoggingEnum$IMultiLoggable$$Original = $BlockLoggingEnum$IMultiLoggable;}
declare module "twilightforest.enums.NagastoneVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $NagastoneVariant extends $Enum<($NagastoneVariant)> implements $StringRepresentable$$Interface {
static readonly "SOUTH_DOWN": $NagastoneVariant
static readonly "EAST_DOWN": $NagastoneVariant
static readonly "NORTH_UP": $NagastoneVariant
static readonly "SOUTH_UP": $NagastoneVariant
static readonly "AXIS_Z": $NagastoneVariant
static readonly "WEST_DOWN": $NagastoneVariant
static readonly "SOLID": $NagastoneVariant
static readonly "NORTH_DOWN": $NagastoneVariant
static readonly "WEST_UP": $NagastoneVariant
static readonly "AXIS_Y": $NagastoneVariant
static readonly "EAST_UP": $NagastoneVariant
static readonly "AXIS_X": $NagastoneVariant

public static "values"(): ($NagastoneVariant)[]
public static "valueOf"(arg0: StringJS): $NagastoneVariant
public "getSerializedName"(): StringJS
public static "getVariantFromAxis"(arg0: $Direction$Axis$$Type): $NagastoneVariant
public static "getVariantFromDoubleFacing"(arg0: $Direction$$Type, arg1: $Direction$$Type): $NagastoneVariant
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
export type $NagastoneVariant$$Type = (("north_down") | ("south_down") | ("west_down") | ("east_down") | ("north_up") | ("south_up") | ("east_up") | ("west_up") | ("axis_x") | ("axis_y") | ("axis_z") | ("solid"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NagastoneVariant$$Original = $NagastoneVariant;}
declare module "twilightforest.enums.HollowLogVariants$Horizontal" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HollowLogVariants$Horizontal extends $Enum<($HollowLogVariants$Horizontal)> implements $StringRepresentable$$Interface {
static readonly "MOSS_AND_GRASS": $HollowLogVariants$Horizontal
static readonly "WATERLOGGED": $HollowLogVariants$Horizontal
static readonly "SNOW": $HollowLogVariants$Horizontal
static readonly "MOSS": $HollowLogVariants$Horizontal
static readonly "EMPTY": $HollowLogVariants$Horizontal

public static "values"(): ($HollowLogVariants$Horizontal)[]
public static "valueOf"(arg0: StringJS): $HollowLogVariants$Horizontal
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
export type $HollowLogVariants$Horizontal$$Type = (("empty") | ("moss") | ("moss_and_grass") | ("snow") | ("waterlogged"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HollowLogVariants$Horizontal$$Original = $HollowLogVariants$Horizontal;}
declare module "twilightforest.enums.BossVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BossVariant$TrophyType} from "twilightforest.enums.BossVariant$TrophyType"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$BossSpawnerBlockEntity} from "twilightforest.block.entity.spawner.BossSpawnerBlockEntity"

export class $BossVariant extends $Enum<($BossVariant)> implements $StringRepresentable$$Interface {
static readonly "LICH": $BossVariant
static readonly "HYDRA": $BossVariant
static readonly "SNOW_QUEEN": $BossVariant
static readonly "CODEC": $StringRepresentable$EnumCodec<($BossVariant)>
static readonly "KNIGHT_PHANTOM": $BossVariant
static readonly "FINAL_BOSS": $BossVariant
static readonly "UR_GHAST": $BossVariant
static readonly "ALPHA_YETI": $BossVariant
static readonly "QUEST_RAM": $BossVariant
static readonly "NAGA": $BossVariant
static readonly "MINOSHROOM": $BossVariant

public static "values"(): ($BossVariant)[]
public static "valueOf"(arg0: StringJS): $BossVariant
public "getType"(): $BlockEntityType<($BossSpawnerBlockEntity<(never)>)>
public "getSerializedName"(): StringJS
public "getTrophyType"(): $BossVariant$TrophyType
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "type"(): $BlockEntityType<($BossSpawnerBlockEntity<(never)>)>
get "serializedName"(): StringJS
get "trophyType"(): $BossVariant$TrophyType
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossVariant$$Type = (("naga") | ("lich") | ("hydra") | ("ur_ghast") | ("knight_phantom") | ("snow_queen") | ("minoshroom") | ("alpha_yeti") | ("quest_ram") | ("final_boss"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossVariant$$Original = $BossVariant;}
declare module "twilightforest.enums.FireJetVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FireJetVariant extends $Enum<($FireJetVariant)> implements $StringRepresentable$$Interface {
static readonly "IDLE": $FireJetVariant
static readonly "TIMEOUT": $FireJetVariant
static readonly "POPPING": $FireJetVariant
static readonly "FLAME": $FireJetVariant

public "toString"(): StringJS
public static "values"(): ($FireJetVariant)[]
public static "valueOf"(arg0: StringJS): $FireJetVariant
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
export type $FireJetVariant$$Type = (("idle") | ("popping") | ("flame") | ("timeout"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireJetVariant$$Original = $FireJetVariant;}
declare module "twilightforest.enums.HugeLilypadPiece" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HugeLilypadPiece extends $Enum<($HugeLilypadPiece)> implements $StringRepresentable$$Interface {
static readonly "SE": $HugeLilypadPiece
static readonly "SW": $HugeLilypadPiece
static readonly "NE": $HugeLilypadPiece
static readonly "NW": $HugeLilypadPiece

public static "values"(): ($HugeLilypadPiece)[]
public static "valueOf"(arg0: StringJS): $HugeLilypadPiece
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
export type $HugeLilypadPiece$$Type = (("nw") | ("ne") | ("se") | ("sw"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HugeLilypadPiece$$Original = $HugeLilypadPiece;}
declare module "twilightforest.enums.Diagonals" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Diagonals$Inversion} from "twilightforest.enums.Diagonals$Inversion"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $Diagonals extends $Enum<($Diagonals)> implements $StringRepresentable$$Interface {
static readonly "TOP_LEFT": $Diagonals
static readonly "BOTTOM_RIGHT": $Diagonals
static readonly "TOP_RIGHT": $Diagonals
static readonly "BOTTOM_LEFT": $Diagonals
readonly "operationY": $Diagonals$Inversion
readonly "operationX": $Diagonals$Inversion

public static "values"(): ($Diagonals)[]
public static "valueOf"(arg0: StringJS): $Diagonals
public static "rotate"(arg0: $Diagonals$$Type, arg1: $Rotation$$Type): $Diagonals
public static "mirror"(arg0: $Diagonals$$Type, arg1: $Mirror$$Type): $Diagonals
public static "mirrorOnZ"(arg0: $Diagonals$$Type, arg1: $Mirror$$Type): $Diagonals
public static "mirrorOnX"(arg0: $Diagonals$$Type, arg1: $Mirror$$Type): $Diagonals
public "getSerializedName"(): StringJS
public "isLeft"(): boolean
public "isTop"(): boolean
public static "mirrorOn"(arg0: $Direction$Axis$$Type, arg1: $Diagonals$$Type, arg2: $Mirror$$Type): $Diagonals
public static "getDiagonalFromUpDownLeftRight"(arg0: boolean, arg1: boolean): $Diagonals
public static "mirrorLeftRight"(arg0: $Diagonals$$Type): $Diagonals
public static "mirrorUpDown"(arg0: $Diagonals$$Type): $Diagonals
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "left"(): boolean
get "top"(): boolean
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Diagonals$$Type = (("top_right") | ("bottom_right") | ("bottom_left") | ("top_left"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Diagonals$$Original = $Diagonals;}
declare module "twilightforest.enums.HollowLogVariants$Climbable" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HollowLogVariants$Climbable extends $Enum<($HollowLogVariants$Climbable)> implements $StringRepresentable$$Interface {
static readonly "VINE": $HollowLogVariants$Climbable
static readonly "LADDER": $HollowLogVariants$Climbable
static readonly "LADDER_WATERLOGGED": $HollowLogVariants$Climbable

public static "values"(): ($HollowLogVariants$Climbable)[]
public static "valueOf"(arg0: StringJS): $HollowLogVariants$Climbable
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
export type $HollowLogVariants$Climbable$$Type = (("vine") | ("ladder") | ("ladder_waterlogged"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HollowLogVariants$Climbable$$Original = $HollowLogVariants$Climbable;}
declare module "twilightforest.enums.Diagonals$Inversion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Diagonals$Inversion$$Interface {

(arg0: integer, arg1: integer): integer
}

export class $Diagonals$Inversion implements $Diagonals$Inversion$$Interface {
 "convert"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Diagonals$Inversion$$Type = ((arg0: integer, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Diagonals$Inversion$$Original = $Diagonals$Inversion;}
declare module "twilightforest.enums.TowerDeviceVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $TowerDeviceVariant extends $Enum<($TowerDeviceVariant)> implements $StringRepresentable$$Interface {
static readonly "BUILDER_INACTIVE": $TowerDeviceVariant
static readonly "BUILDER_ACTIVE": $TowerDeviceVariant
static readonly "BUILDER_TIMEOUT": $TowerDeviceVariant

public static "values"(): ($TowerDeviceVariant)[]
public static "valueOf"(arg0: StringJS): $TowerDeviceVariant
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
export type $TowerDeviceVariant$$Type = (("builder_inactive") | ("builder_active") | ("builder_timeout"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TowerDeviceVariant$$Original = $TowerDeviceVariant;}
