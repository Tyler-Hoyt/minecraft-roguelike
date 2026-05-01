declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Rotation} from "net.minecraft.world.level.block.Rotation"
import {$List} from "java.util.List"
import {$RandomState} from "net.minecraft.world.level.levelgen.RandomState"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$PieceEntry} from "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.PieceEntry"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$BiomeSource} from "net.minecraft.world.level.biome.BiomeSource"

export class $StructureContext {
public "depth"(): integer
public "pos"(): $BlockPos
public "random"(): $RandomSource
public "randomState"(): $RandomState
public "biomeSource"(): $BiomeSource
public "pieces"(): $List<($PieceEntry)>
public "rotation"(): $Rotation
public "pieceMinY"(): integer
public "pieceEntry"(): $PieceEntry
public "pieceMaxY"(): integer
public "structureTemplateManager"(): $StructureTemplateManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureContext$$Type = ($StructureContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureContext$$Original = $StructureContext;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReplaceAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($ReplaceAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor(arg0: $BlockState$$Type)

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplaceAquiferOverride$$Type = ($ReplaceAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReplaceAquiferOverride$$Original = $ReplaceAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.FeaturePoolElementAccessor" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FeaturePoolElementAccessor$$Interface {

(): $Holder$$Type<($PlacedFeature$$Type)>
get "feature"(): $Holder<($PlacedFeature)>
}

export class $FeaturePoolElementAccessor implements $FeaturePoolElementAccessor$$Interface {
 "getFeature"(): $Holder<($PlacedFeature)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeaturePoolElementAccessor$$Type = (() => $Holder$$Type<($PlacedFeature$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeaturePoolElementAccessor$$Original = $FeaturePoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$Padding" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $EnhancedTerrainAdaptation$Padding extends $Record {
static readonly "ZERO": $EnhancedTerrainAdaptation$Padding
static readonly "CODEC": $Codec<($EnhancedTerrainAdaptation$Padding)>

constructor(x: integer, top: integer, bottom: integer, z: integer)

public "bottom"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
public "top"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$Padding$$Type = ({"top"?: integer, "bottom"?: integer, "z"?: integer, "x"?: integer}) | ([top?: integer, bottom?: integer, z?: integer, x?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancedTerrainAdaptation$Padding$$Original = $EnhancedTerrainAdaptation$Padding;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMaskSupplier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AquiferOverrideMask, $AquiferOverrideMask$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask"

export interface $AquiferOverrideMaskSupplier$$Interface {

(arg0: $Supplier<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask$$Type
}

export class $AquiferOverrideMaskSupplier implements $AquiferOverrideMaskSupplier$$Interface {
 "getOrCreateAquiferOverrideMask"(arg0: $Supplier$$Type<($AquiferOverrideMask$$Type)>): $AquiferOverrideMask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMaskSupplier$$Type = ((arg0: $Supplier<($AquiferOverrideMask)>) => $AquiferOverrideMask$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideMaskSupplier$$Original = $AquiferOverrideMaskSupplier;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.ListPoolElementAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor$$Interface {

(): $List$$Type<($StructurePoolElement$$Type)>
get "elements"(): $List<($StructurePoolElement)>
}

export class $ListPoolElementAccessor implements $ListPoolElementAccessor$$Interface {
 "getElements"(): $List<($StructurePoolElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListPoolElementAccessor$$Type = (() => $List$$Type<($StructurePoolElement$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ListPoolElementAccessor$$Original = $ListPoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.SmallCarvedTopNoBeardAdaptation" {
import {$EnhancedTerrainAdaptationType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"

export class $SmallCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($SmallCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallCarvedTopNoBeardAdaptation$$Type = ($SmallCarvedTopNoBeardAdaptation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallCarvedTopNoBeardAdaptation$$Original = $SmallCarvedTopNoBeardAdaptation;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NoneAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($NoneAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneAquiferOverride$$Type = ($NoneAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoneAquiferOverride$$Original = $NoneAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.PieceEntry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$PoolElementStructurePiece, $PoolElementStructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece"
import {$JigsawJunction, $JigsawJunction$$Type} from "net.minecraft.world.level.levelgen.structure.pools.JigsawJunction"
import {$MutableObject, $MutableObject$$Type} from "org.apache.commons.lang3.mutable.MutableObject"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$PieceContext, $PieceContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.jigsaw.assembler.PieceContext"
import {$BoxOctree, $BoxOctree$$Type} from "com.yungnickyoung.minecraft.yungsapi.util.BoxOctree"

export class $PieceEntry {
constructor(arg0: $PoolElementStructurePiece$$Type, arg1: $MutableObject$$Type<($BoxOctree$$Type)>, arg2: $AABB$$Type, arg3: integer, arg4: $PieceEntry$$Type, arg5: $PieceContext$$Type, arg6: $JigsawJunction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getPieceAabb"(): $AABB
public "setDelayGeneration"(arg0: boolean): void
public "getDeadendPool"(): $Optional<($ResourceLocation)>
public "getBoxOctree"(): $MutableObject<($BoxOctree)>
public "hasChildren"(): boolean
public "getDepth"(): integer
public "getPiece"(): $PoolElementStructurePiece
public "getParentEntry"(): $PieceEntry
public "getParentJunction"(): $JigsawJunction
public "isDelayGeneration"(): boolean
public "addChildEntry"(arg0: $PieceEntry$$Type): void
public "setPiece"(arg0: $PoolElementStructurePiece$$Type): void
public "getSourcePieceContext"(): $PieceContext
get "pieceAabb"(): $AABB
set "delayGeneration"(value: boolean)
get "deadendPool"(): $Optional<($ResourceLocation)>
get "boxOctree"(): $MutableObject<($BoxOctree)>
get "depth"(): integer
get "piece"(): $PoolElementStructurePiece
get "parentEntry"(): $PieceEntry
get "parentJunction"(): $JigsawJunction
get "delayGeneration"(): boolean
set "piece"(value: $PoolElementStructurePiece$$Type)
get "sourcePieceContext"(): $PieceContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PieceEntry$$Type = ($PieceEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PieceEntry$$Original = $PieceEntry;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.NoneAdaptation" {
import {$EnhancedTerrainAdaptationType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"

export class $NoneAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($NoneAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(never)>
public "computeDensityFactor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoneAdaptation$$Type = ($NoneAdaptation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoneAdaptation$$Original = $NoneAdaptation;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType" {
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$NoneAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.NoneAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$SmallCarvedTopNoBeardAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.SmallCarvedTopNoBeardAdaptation"
import {$LargeCarvedTopNoBeardAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.LargeCarvedTopNoBeardAdaptation"
import {$CustomAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.CustomAdaptation"

export interface $EnhancedTerrainAdaptationType$$Interface<C extends $EnhancedTerrainAdaptation> {

(): $MapCodec$$Type<(C)>
}

export class $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> implements $EnhancedTerrainAdaptationType$$Interface {
static readonly "ADAPTATION_TYPE_CODEC": $Codec<($EnhancedTerrainAdaptationType<(never)>)>
static readonly "LARGE_CARVED_TOP_NO_BEARD": $EnhancedTerrainAdaptationType<($LargeCarvedTopNoBeardAdaptation)>
static readonly "ADAPTATION_TYPES_BY_NAME": $Map<($ResourceLocation), ($EnhancedTerrainAdaptationType<(never)>)>
static readonly "NAME_BY_ADAPTATION_TYPES": $Map<($EnhancedTerrainAdaptationType<(never)>), ($ResourceLocation)>
static readonly "CUSTOM": $EnhancedTerrainAdaptationType<($CustomAdaptation)>
static readonly "ADAPTATION_CODEC": $Codec<($EnhancedTerrainAdaptation)>
static readonly "SMALL_CARVED_TOP_NO_BEARD": $EnhancedTerrainAdaptationType<($SmallCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptationType<($NoneAdaptation)>

static "register"<C extends $EnhancedTerrainAdaptation>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $EnhancedTerrainAdaptationType<(C)>
 "codec"(): $MapCodec<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptationType$$Type<C> = (() => $MapCodec$$Type<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancedTerrainAdaptationType$$Original<C> = $EnhancedTerrainAdaptationType<(C)>;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.SinglePoolElementAccessor" {
import {$StructureTemplateManager, $StructureTemplateManager$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor$$Interface {

(arg0: $StructureTemplateManager): $StructureTemplate$$Type
}

export class $SinglePoolElementAccessor implements $SinglePoolElementAccessor$$Interface {
 "callGetTemplate"(arg0: $StructureTemplateManager$$Type): $StructureTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = ((arg0: $StructureTemplateManager) => $StructureTemplate$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SinglePoolElementAccessor$$Original = $SinglePoolElementAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer$Entry" {
import {$StructureCondition, $StructureCondition$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureCondition"
import {$StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateRandomizer$Entry {
 "blockState": $BlockState
 "condition": $Optional<($StructureCondition)>
static "CODEC": $Codec<($BlockStateRandomizer$Entry)>
 "probability": float

constructor(arg0: $BlockState$$Type, arg1: float)
constructor(arg0: $BlockState$$Type, arg1: float, arg2: ($StructureCondition$$Type)?)

public "equals"(arg0: any): boolean
public "passesCondition"(arg0: $StructureContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRandomizer$Entry$$Type = ($BlockStateRandomizer$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateRandomizer$Entry$$Original = $BlockStateRandomizer$Entry;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.CustomAdaptation" {
import {$EnhancedTerrainAdaptationType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"

export class $CustomAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($CustomAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

public "type"(): $EnhancedTerrainAdaptationType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomAdaptation$$Type = ($CustomAdaptation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomAdaptation$$Original = $CustomAdaptation;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$TerrainAction" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnhancedTerrainAdaptation$TerrainAction extends $Enum<($EnhancedTerrainAdaptation$TerrainAction)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($EnhancedTerrainAdaptation$TerrainAction)>
static readonly "BURY": $EnhancedTerrainAdaptation$TerrainAction
static readonly "NONE": $EnhancedTerrainAdaptation$TerrainAction
static readonly "CARVE": $EnhancedTerrainAdaptation$TerrainAction

public static "values"(): ($EnhancedTerrainAdaptation$TerrainAction)[]
public static "valueOf"(arg0: StringJS): $EnhancedTerrainAdaptation$TerrainAction
public "getDensityModifier"(): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "densityModifier"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$TerrainAction$$Type = (("carve") | ("bury") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancedTerrainAdaptation$TerrainAction$$Original = $EnhancedTerrainAdaptation$TerrainAction;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.LargeCarvedTopNoBeardAdaptation" {
import {$EnhancedTerrainAdaptationType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"

export class $LargeCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
static readonly "CODEC": $MapCodec<($LargeCarvedTopNoBeardAdaptation)>
static readonly "NONE": $EnhancedTerrainAdaptation

constructor()

public "type"(): $EnhancedTerrainAdaptationType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCarvedTopNoBeardAdaptation$$Type = ($LargeCarvedTopNoBeardAdaptation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeCarvedTopNoBeardAdaptation$$Original = $LargeCarvedTopNoBeardAdaptation;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.PotionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PotionAccessor$$Interface {
get "name"(): StringJS
set "name"(value: StringJS)
}

export class $PotionAccessor implements $PotionAccessor$$Interface {
 "getName"(): StringJS
 "setName"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionAccessor$$Type = ($PotionAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionAccessor$$Original = $PotionAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride" {
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverride {
static readonly "NONE": $AquiferOverride

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverride$$Type = ($AquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverride$$Original = $AquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureCondition" {
import {$StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$StructureConditionType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.condition.StructureConditionType"

export class $StructureCondition {
static readonly "ALWAYS_TRUE": $StructureCondition

constructor()

public "type"(): $StructureConditionType<(never)>
public "passes"(arg0: $StructureContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureCondition$$Type = ($StructureCondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureCondition$$Original = $StructureCondition;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation" {
import {$EnhancedTerrainAdaptation$Padding} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$Padding"
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$EnhancedTerrainAdaptation$TerrainAction} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation$TerrainAction"
import {$EnhancedTerrainAdaptationType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptationType"

export class $EnhancedTerrainAdaptation {
static readonly "NONE": $EnhancedTerrainAdaptation

public "type"(): $EnhancedTerrainAdaptationType<(never)>
public "getKernelDistance"(): integer
public "getKernelSize"(): integer
public "bottomAction"(): $EnhancedTerrainAdaptation$TerrainAction
public "getKernelRadius"(): integer
public "getBottomOffset"(): double
public "getAquiferOverride"(): $AquiferOverride
public "computeDensityFactor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): double
public "getKernel"(): (float)[]
public "topAction"(): $EnhancedTerrainAdaptation$TerrainAction
public "getPadding"(): $EnhancedTerrainAdaptation$Padding
get "kernelDistance"(): integer
get "kernelSize"(): integer
get "kernelRadius"(): integer
get "bottomOffset"(): double
get "aquiferOverride"(): $AquiferOverride
get "kernel"(): (float)[]
get "padding"(): $EnhancedTerrainAdaptation$Padding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancedTerrainAdaptation$$Type = ($EnhancedTerrainAdaptation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancedTerrainAdaptation$$Original = $EnhancedTerrainAdaptation;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.StructureTemplatePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor$$Interface {

(): $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}

export class $StructureTemplatePoolAccessor implements $StructureTemplatePoolAccessor$$Interface {
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$$Type = (() => $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTemplatePoolAccessor$$Original = $StructureTemplatePoolAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer" {
import {$BlockStateRandomizer$Entry, $BlockStateRandomizer$Entry$$Type} from "com.yungnickyoung.minecraft.yungsapi.api.world.randomize.BlockStateRandomizer$Entry"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$StructureContext$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.context.StructureContext"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Random$$Type} from "java.util.Random"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateRandomizer {
static readonly "CODEC": $Codec<($BlockStateRandomizer)>

constructor()
constructor(arg0: $List$$Type<($BlockStateRandomizer$Entry$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $Map$$Type<($BlockState$$Type), (float)>, arg1: $BlockState$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor(arg0: $BlockState$$Type)

public "get"(arg0: $Random$$Type): $BlockState
public "get"(arg0: $RandomSource$$Type): $BlockState
public "get"(arg0: $RandomSource$$Type, arg1: $StructureContext$$Type): $BlockState
public static "from"(...arg0: ($BlockState$$Type)[]): $BlockStateRandomizer
public "getEntries"(): $List<($BlockStateRandomizer$Entry)>
public "saveTag"(): $CompoundTag
public "setDefaultBlockState"(arg0: $BlockState$$Type): void
public "getDefaultBlockState"(): $BlockState
public "getEntriesAsMap"(): $Map<($BlockState), (float)>
public "addBlock"(arg0: $BlockState$$Type, arg1: float): $BlockStateRandomizer
get "entries"(): $List<($BlockStateRandomizer$Entry)>
set "defaultBlockState"(value: $BlockState$$Type)
get "defaultBlockState"(): $BlockState
get "entriesAsMap"(): $Map<($BlockState), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRandomizer$$Type = ($BlockStateRandomizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateRandomizer$$Original = $BlockStateRandomizer;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideMask" {
import {$AquiferOverride, $AquiferOverride$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AquiferOverrideMask {
constructor(arg0: integer, arg1: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer): boolean
public "set"(arg0: integer, arg1: integer, arg2: integer): void
public "getAquiferOverride"(): $AquiferOverride
public "getBlockStateForPos"(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$$Type): $BlockState
public "setAquiferOverride"(arg0: $AquiferOverride$$Type): void
get "aquiferOverride"(): $AquiferOverride
set "aquiferOverride"(value: $AquiferOverride$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideMask$$Type = ($AquiferOverrideMask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideMask$$Original = $AquiferOverrideMask;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.BoundingBoxAccessor" {
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
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride" {
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$AquiferOverrideType} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SolidifyAquiferOverride extends $AquiferOverride {
static readonly "CODEC": $MapCodec<($SolidifyAquiferOverride)>
static readonly "NONE": $AquiferOverride

constructor()

public "type"(): $AquiferOverrideType<(never)>
public "getBlockState"(arg0: $BlockState$$Type): $BlockState
public "setSolidBlockState"(arg0: $BlockState$$Type): void
set "solidBlockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidifyAquiferOverride$$Type = ($SolidifyAquiferOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidifyAquiferOverride$$Original = $SolidifyAquiferOverride;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.YungJigsawStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $YungJigsawStructure extends $Structure {
static readonly "CODEC": $MapCodec<($YungJigsawStructure)>
readonly "maxY": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "maxDepth": integer
readonly "zOffsetInChunk": $IntProvider
readonly "xOffsetInChunk": $IntProvider
readonly "useExpansionHack": boolean
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "minY": $Optional<(integer)>
readonly "enhancedTerrainAdaptation": $EnhancedTerrainAdaptation
static readonly "MAX_TOTAL_STRUCTURE_RADIUS": integer
readonly "maxDistanceFromCenter": integer

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: ($ResourceLocation$$Type)?, arg3: integer, arg4: $HeightProvider$$Type, arg5: $IntProvider$$Type, arg6: $IntProvider$$Type, arg7: boolean, arg8: ($Heightmap$Types$$Type)?, arg9: integer, arg10: (integer)?, arg11: (integer)?, arg12: $EnhancedTerrainAdaptation$$Type, arg13: $DimensionPadding$$Type, arg14: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "adjustBoundingBox"(arg0: $BoundingBox$$Type): $BoundingBox
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YungJigsawStructure$$Type = ($YungJigsawStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $YungJigsawStructure$$Original = $YungJigsawStructure;}
declare module "com.yungnickyoung.minecraft.yungsapi.mixin.accessor.NoiseChunkAccessor" {
import {$NoiseSettings, $NoiseSettings$$Type} from "net.minecraft.world.level.levelgen.NoiseSettings"

export interface $NoiseChunkAccessor$$Interface {

(): $NoiseSettings$$Type
get "noiseSettings"(): $NoiseSettings
}

export class $NoiseChunkAccessor implements $NoiseChunkAccessor$$Interface {
 "getNoiseSettings"(): $NoiseSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseChunkAccessor$$Type = (() => $NoiseSettings$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NoiseChunkAccessor$$Original = $NoiseChunkAccessor;}
declare module "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverrideType" {
import {$SolidifyAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.SolidifyAquiferOverride"
import {$AquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.AquiferOverride"
import {$Map} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$NoneAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.NoneAquiferOverride"
import {$ReplaceAquiferOverride} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.aquiferoverride.ReplaceAquiferOverride"

export interface $AquiferOverrideType$$Interface<C extends $AquiferOverride> {

(): $MapCodec$$Type<(C)>
}

export class $AquiferOverrideType<C extends $AquiferOverride> implements $AquiferOverrideType$$Interface {
static readonly "AQUIFER_OVERRIDE_NAME_BY_TYPE": $Map<($AquiferOverrideType<(never)>), ($ResourceLocation)>
static readonly "SOLIDIFY": $AquiferOverrideType<($SolidifyAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_BY_NAME": $Map<($ResourceLocation), ($AquiferOverrideType<(never)>)>
static readonly "AQUIFER_OVERRIDE_CODEC": $Codec<($AquiferOverride)>
static readonly "NONE": $AquiferOverrideType<($NoneAquiferOverride)>
static readonly "REPLACE": $AquiferOverrideType<($ReplaceAquiferOverride)>
static readonly "AQUIFER_OVERRIDE_TYPE_CODEC": $Codec<($AquiferOverrideType<(never)>)>

static "register"<C extends $AquiferOverride>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(C)>): $AquiferOverrideType<(C)>
 "codec"(): $MapCodec<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AquiferOverrideType$$Type<C> = (() => $MapCodec$$Type<(C)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AquiferOverrideType$$Original<C> = $AquiferOverrideType<(C)>;}
