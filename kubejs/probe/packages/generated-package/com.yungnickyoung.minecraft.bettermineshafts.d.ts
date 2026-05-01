declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration" {
import {$BetterMineshaftConfiguration$LegVariant, $BetterMineshaftConfiguration$LegVariant$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$LegVariant"
import {$BetterMineshaftConfiguration$MineshaftBlockStates, $BetterMineshaftConfiguration$MineshaftBlockStates$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockStates"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BetterMineshaftConfiguration$MineshaftDecorationChances, $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftDecorationChances"
import {$BetterMineshaftConfiguration$MineshaftBlockstateRandomizers, $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockstateRandomizers"

export class $BetterMineshaftConfiguration {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration)>
 "blockStateRandomizers": $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers
 "decorationChances": $BetterMineshaftConfiguration$MineshaftDecorationChances
 "blockStates": $BetterMineshaftConfiguration$MineshaftBlockStates
 "legVariant": $BetterMineshaftConfiguration$LegVariant
 "replacementRate": float

constructor(arg0: float, arg1: $BetterMineshaftConfiguration$LegVariant$$Type, arg2: $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type, arg3: $BetterMineshaftConfiguration$MineshaftBlockStates$$Type, arg4: $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$$Type = ($BetterMineshaftConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftConfiguration$$Original = $BetterMineshaftConfiguration;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.BetterMineshaftStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional} from "java.util.Optional"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BetterMineshaftConfiguration$$Type} from "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $BetterMineshaftStructure extends $Structure {
static readonly "CODEC": $MapCodec<($BetterMineshaftStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $BetterMineshaftConfiguration$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftStructure$$Type = ($BetterMineshaftStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftStructure$$Original = $BetterMineshaftStructure;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.mixin.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor$$Interface {
set "minX"(value: integer)
set "maxX"(value: integer)
set "minZ"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minY"(value: integer)
}

export class $BoundingBoxAccessor implements $BoundingBoxAccessor$$Interface {
 "setMinX"(arg0: integer): void
 "setMaxX"(arg0: integer): void
 "setMinZ"(arg0: integer): void
 "setMaxY"(arg0: integer): void
 "setMaxZ"(arg0: integer): void
 "setMinY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxAccessor$$Type = ($BoundingBoxAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoundingBoxAccessor$$Original = $BoundingBoxAccessor;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftDecorationChances" {
import {$Codec} from "com.mojang.serialization.Codec"

export class $BetterMineshaftConfiguration$MineshaftDecorationChances {
 "vineChance": float
 "mushroomChance": float
 "dripstoneDecorations": boolean
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftDecorationChances)>
 "cactusChance": float
 "gravelPileChance": float
 "deadBushChance": float
 "lushDecorations": boolean
 "snowChance": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftDecorationChances$$Type = ($BetterMineshaftConfiguration$MineshaftDecorationChances);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftConfiguration$MineshaftDecorationChances$$Original = $BetterMineshaftConfiguration$MineshaftDecorationChances;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockstateRandomizers" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockStateRandomizer, $BlockStateRandomizer$$Type} from "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer"

export class $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftBlockstateRandomizers)>
 "floorRandomizer": $BlockStateRandomizer
 "brickRandomizer": $BlockStateRandomizer
 "mainRandomizer": $BlockStateRandomizer
 "legRandomizer": $BlockStateRandomizer

constructor(arg0: $BlockStateRandomizer$$Type, arg1: $BlockStateRandomizer$$Type, arg2: $BlockStateRandomizer$$Type, arg3: $BlockStateRandomizer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Type = ($BetterMineshaftConfiguration$MineshaftBlockstateRandomizers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers$$Original = $BetterMineshaftConfiguration$MineshaftBlockstateRandomizers;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$MineshaftBlockStates" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BetterMineshaftConfiguration$MineshaftBlockStates {
 "mainBlockState": $BlockState
 "stoneWallBlockState": $BlockState
 "smallLegBlockState": $BlockState
 "slabBlockState": $BlockState
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$MineshaftBlockStates)>
 "trapdoorBlockState": $BlockState
 "gravelBlockState": $BlockState
 "supportBlockState": $BlockState
 "stoneSlabBlockState": $BlockState

constructor(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $BlockState$$Type, arg7: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockStates$$Type = ($BetterMineshaftConfiguration$MineshaftBlockStates);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftConfiguration$MineshaftBlockStates$$Original = $BetterMineshaftConfiguration$MineshaftBlockStates;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.mixin.BlockBehaviourAccessor" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccessor$$Interface {

(arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos): boolean
}

export class $BlockBehaviourAccessor implements $BlockBehaviourAccessor$$Interface {
 "callCanSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$$Type = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourAccessor$$Original = $BlockBehaviourAccessor;}
declare module "com.yungnickyoung.minecraft.bettermineshafts.world.config.BetterMineshaftConfiguration$LegVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BetterMineshaftConfiguration$LegVariant extends $Enum<($BetterMineshaftConfiguration$LegVariant)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($BetterMineshaftConfiguration$LegVariant)>
static readonly "EDGE": $BetterMineshaftConfiguration$LegVariant
static readonly "INNER": $BetterMineshaftConfiguration$LegVariant

public "getName"(): StringJS
public static "values"(): ($BetterMineshaftConfiguration$LegVariant)[]
public static "valueOf"(arg0: StringJS): $BetterMineshaftConfiguration$LegVariant
public "getSerializedName"(): StringJS
public static "byId"(arg0: integer): $BetterMineshaftConfiguration$LegVariant
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BetterMineshaftConfiguration$LegVariant$$Type = (("edge") | ("inner"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BetterMineshaftConfiguration$LegVariant$$Original = $BetterMineshaftConfiguration$LegVariant;}
