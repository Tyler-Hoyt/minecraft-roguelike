declare module "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $GenericJigsawStructure$BURYING_TYPE extends $Enum<($GenericJigsawStructure$BURYING_TYPE)> implements $StringRepresentable$$Interface {
static readonly "LOWEST_CORNER": $GenericJigsawStructure$BURYING_TYPE
static readonly "AVERAGE_LAND": $GenericJigsawStructure$BURYING_TYPE
static readonly "LOWEST_SIDE": $GenericJigsawStructure$BURYING_TYPE

public static "values"(): ($GenericJigsawStructure$BURYING_TYPE)[]
public static "valueOf"(name: StringJS): $GenericJigsawStructure$BURYING_TYPE
public "getSerializedName"(): StringJS
public static "byName"(name: StringJS): $GenericJigsawStructure$BURYING_TYPE
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
export type $GenericJigsawStructure$BURYING_TYPE$$Type = (("lowest_corner") | ("average_land") | ("lowest_side"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericJigsawStructure$BURYING_TYPE$$Original = $GenericJigsawStructure$BURYING_TYPE;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureChorus" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureChorus extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureChorus$$Type = ($StructureChorus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureChorus$$Original = $StructureChorus;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.MansionStructure" {
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MansionStructure extends $Structure {
readonly "biomeRadius": $Optional<(integer)>
static readonly "CODEC": $MapCodec<($MansionStructure)>
readonly "pillarOnlyToLand": boolean
readonly "mansionType": StringJS
readonly "foundationBlock": $BlockState
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$$Type, mansionType: StringJS, foundationBlock: $BlockState$$Type, pillarOnlyToLand: boolean, biomeRadius: (integer)?, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "afterPlace"(level: $WorldGenLevel$$Type, structureManager: $StructureManager$$Type, chunkGenerator: $ChunkGenerator$$Type, random: $RandomSource$$Type, boundingBox: $BoundingBox$$Type, chunkPos: $ChunkPos$$Type, piecesContainer: $PiecesContainer$$Type): void
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MansionStructure$$Type = ($MansionStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MansionStructure$$Original = $MansionStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureChains" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureChains extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureChains$$Type = ($StructureChains);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureChains$$Original = $StructureChains;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoral" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$ConfigurableCoralConfig, $ConfigurableCoralConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.ConfigurableCoralConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ConfigurableCoral extends $Feature<($ConfigurableCoralConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(codec: $Codec$$Type<($ConfigurableCoralConfig$$Type)>)

public "place"(featurePlaceContext: $FeaturePlaceContext$$Type<($ConfigurableCoralConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableCoral$$Type = ($ConfigurableCoral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableCoral$$Original = $ConfigurableCoral;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureVineAndLeaves" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$StructureTargetAndLengthConfig, $StructureTargetAndLengthConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndLengthConfig"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureVineAndLeaves extends $Feature<($StructureTargetAndLengthConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndLengthConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndLengthConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureVineAndLeaves$$Type = ($StructureVineAndLeaves);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureVineAndLeaves$$Original = $StructureVineAndLeaves;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoralTree" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$ConfigurableCoralConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.ConfigurableCoralConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ConfigurableCoral} from "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoral"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ConfigurableCoralTree extends $ConfigurableCoral {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(codec: $Codec$$Type<($ConfigurableCoralConfig$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableCoralTree$$Type = ($ConfigurableCoralTree);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableCoralTree$$Original = $ConfigurableCoralTree;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureVineBreakage" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$StructureTargetAndLengthConfig, $StructureTargetAndLengthConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndLengthConfig"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureVineBreakage extends $Feature<($StructureTargetAndLengthConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndLengthConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndLengthConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureVineBreakage$$Type = ($StructureVineBreakage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureVineBreakage$$Original = $StructureVineBreakage;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.GenericMobConfig" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $GenericMobConfig implements $FeatureConfiguration$$Interface {
readonly "speedModifier": float
static readonly "CODEC": $Codec<($GenericMobConfig)>
readonly "chestplate": $Optional<($Item)>
readonly "heldItem": $Optional<($Item)>
readonly "helmet": $Optional<($Item)>
readonly "boots": $Optional<($Item)>
readonly "health": integer
readonly "leggings": $Optional<($Item)>

constructor(heldItem: ($Item$$Type)?, helmet: ($Item$$Type)?, chestplate: ($Item$$Type)?, leggings: ($Item$$Type)?, boots: ($Item$$Type)?, speedModifier: float, health: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericMobConfig$$Type = ($GenericMobConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericMobConfig$$Original = $GenericMobConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.ShulkerMob" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ShulkerMob extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerMob$$Type = ($ShulkerMob);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerMob$$Original = $ShulkerMob;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.MonumentStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $MonumentStructure extends $Structure {
readonly "biomeRadius": $Optional<(integer)>
static readonly "CODEC": $MapCodec<($MonumentStructure)>
readonly "monumentType": StringJS
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "fixedYSpawn": $Optional<(integer)>
readonly "centerTerrainHeightWeight": $Optional<(float)>

constructor(config: $Structure$StructureSettings$$Type, monumentType: StringJS, biomeRadius: (integer)?, fixedYSpawn: (integer)?, centerTerrainHeightWeight: (float)?, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonumentStructure$$Type = ($MonumentStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MonumentStructure$$Original = $MonumentStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.Skeletons" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$GenericMobConfig, $GenericMobConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.GenericMobConfig"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $Skeletons extends $Feature<($GenericMobConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($GenericMobConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skeletons$$Type = ($Skeletons);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Skeletons$$Original = $Skeletons;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.OceanTemperatureRandomSelector" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$OceanTemperatureRandomSelectorConfig, $OceanTemperatureRandomSelectorConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.OceanTemperatureRandomSelectorConfig"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $OceanTemperatureRandomSelector extends $Feature<($OceanTemperatureRandomSelectorConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(codec: $Codec$$Type<($OceanTemperatureRandomSelectorConfig$$Type)>)

public "place"(featurePlaceContext: $FeaturePlaceContext$$Type<($OceanTemperatureRandomSelectorConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OceanTemperatureRandomSelector$$Type = ($OceanTemperatureRandomSelector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OceanTemperatureRandomSelector$$Original = $OceanTemperatureRandomSelector;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureCrimsonPlants" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$StructureTargetAndLengthConfig, $StructureTargetAndLengthConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndLengthConfig"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureCrimsonPlants extends $Feature<($StructureTargetAndLengthConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndLengthConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndLengthConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureCrimsonPlants$$Type = ($StructureCrimsonPlants);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureCrimsonPlants$$Original = $StructureCrimsonPlants;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE, $GenericJigsawStructure$BURYING_TYPE$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $GenericJigsawStructure extends $Structure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($GenericJigsawStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, projectStartToHeightmap: ($Heightmap$Types$$Type)?, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: (integer)?, allowedTerrainHeightRange: (integer)?, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, buryingType: ($GenericJigsawStructure$BURYING_TYPE$$Type)?, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericJigsawStructure$$Type = ($GenericJigsawStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericJigsawStructure$$Original = $GenericJigsawStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.neoforge.biomemodifiers.AdditionsTemperatureModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$AdditionsTemperatureModifier$TEMPERATURE_RANGE, $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Type} from "com.telepathicgrunt.repurposedstructures.world.neoforge.biomemodifiers.AdditionsTemperatureModifier$TEMPERATURE_RANGE"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AdditionsTemperatureModifier extends $Record implements $BiomeModifier$$Interface {
static "CODEC": $MapCodec<($AdditionsTemperatureModifier)>

constructor(biomes: $HolderSet$$Type<($Biome)>, feature: $Holder$$Type<($PlacedFeature)>, step: $GenerationStep$Decoration$$Type, temperatureRange: $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "feature"(): $Holder<($PlacedFeature)>
public "step"(): $GenerationStep$Decoration
public "temperatureRange"(): $AdditionsTemperatureModifier$TEMPERATURE_RANGE
public "biomes"(): $HolderSet<($Biome)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(biome: $Holder$$Type<($Biome)>, phase: $BiomeModifier$Phase$$Type, builder: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionsTemperatureModifier$$Type = ({"feature"?: $Holder$$Type<($PlacedFeature)>, "step"?: $GenerationStep$Decoration$$Type, "biomes"?: $HolderSet$$Type<($Biome)>, "temperatureRange"?: $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Type}) | ([feature?: $Holder$$Type<($PlacedFeature)>, step?: $GenerationStep$Decoration$$Type, biomes?: $HolderSet$$Type<($Biome)>, temperatureRange?: $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionsTemperatureModifier$$Original = $AdditionsTemperatureModifier;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.MineshaftEndStructure" {
import {$Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $MineshaftEndStructure extends $Structure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
readonly "biomeRadius": $Optional<(integer)>
static readonly "CODEC": $MapCodec<($MineshaftEndStructure)>
readonly "size": integer
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "minIslandThickness": $Optional<(integer)>
readonly "liquidSettings": $LiquidSettings
readonly "maxDistanceFromCenter": $Optional<(integer)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, minIslandThickness: (integer)?, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineshaftEndStructure$$Type = ($MineshaftEndStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineshaftEndStructure$$Original = $MineshaftEndStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.UnderwaterBlockPileFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $UnderwaterBlockPileFeature extends $Feature<($BlockPileConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(blockPileConfigurationCodec: $Codec$$Type<($BlockPileConfiguration$$Type)>)

public "place"(placeContext: $FeaturePlaceContext$$Type<($BlockPileConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnderwaterBlockPileFeature$$Type = ($UnderwaterBlockPileFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnderwaterBlockPileFeature$$Original = $UnderwaterBlockPileFeature;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.OceanTemperatureRandomSelectorConfig" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $OceanTemperatureRandomSelectorConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($OceanTemperatureRandomSelectorConfig)>
readonly "warmFeatures": $HolderSet<($PlacedFeature)>
readonly "coldFeatures": $HolderSet<($PlacedFeature)>

constructor(warmFeatures: $HolderSet$$Type<($PlacedFeature)>, coldFeatures: $HolderSet$$Type<($PlacedFeature)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OceanTemperatureRandomSelectorConfig$$Type = ($OceanTemperatureRandomSelectorConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OceanTemperatureRandomSelectorConfig$$Original = $OceanTemperatureRandomSelectorConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetLengthRangeConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureTargetLengthRangeConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureTargetLengthRangeConfig)>
readonly "xzRange": integer
readonly "length": integer
readonly "heightRange": integer
readonly "attempts": integer

constructor(attempts: integer, length: integer, xzRange: integer)
constructor(attempts: integer, length: integer, xzRange: integer, heightRange: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTargetLengthRangeConfig$$Type = ($StructureTargetLengthRangeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTargetLengthRangeConfig$$Original = $StructureTargetLengthRangeConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.CityNetherStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GenericJigsawStructure} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE, $GenericJigsawStructure$BURYING_TYPE$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $CityNetherStructure extends $GenericJigsawStructure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($CityNetherStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, projectStartToHeightmap: ($Heightmap$Types$$Type)?, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: (integer)?, allowedTerrainHeightRange: (integer)?, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, buryingType: ($GenericJigsawStructure$BURYING_TYPE$$Type)?, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CityNetherStructure$$Type = ($CityNetherStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CityNetherStructure$$Original = $CityNetherStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.WitherSkeletonWithBow" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $WitherSkeletonWithBow extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherSkeletonWithBow$$Type = ($WitherSkeletonWithBow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitherSkeletonWithBow$$Original = $WitherSkeletonWithBow;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureEndRodChains" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureEndRodChains extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureEndRodChains$$Type = ($StructureEndRodChains);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureEndRodChains$$Original = $StructureEndRodChains;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.MinecartConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $MinecartConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($MinecartConfig)>
readonly "nbtPath": $ResourceLocation
readonly "waterBased": boolean

constructor(nbtPath: $ResourceLocation$$Type)
constructor(nbtPath: $ResourceLocation$$Type, waterBased: boolean)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartConfig$$Type = ($MinecartConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartConfig$$Original = $MinecartConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.ConfigurableCoralConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ConfigurableCoralConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($ConfigurableCoralConfig)>
readonly "wallBlocks": $HolderSet<($Block)>
readonly "floorBlocks": $HolderSet<($Block)>
readonly "mainBlocks": $HolderSet<($Block)>

constructor(mainBlocks: $HolderSet$$Type<($Block)>, wallBlocks: $HolderSet$$Type<($Block)>, floorBlocks: $HolderSet$$Type<($Block)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableCoralConfig$$Type = ($ConfigurableCoralConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableCoralConfig$$Original = $ConfigurableCoralConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.neoforge.biomemodifiers.AdditionsTemperatureModifier$TEMPERATURE_RANGE" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AdditionsTemperatureModifier$TEMPERATURE_RANGE extends $Enum<($AdditionsTemperatureModifier$TEMPERATURE_RANGE)> implements $StringRepresentable$$Interface {
static readonly "LUKEWARM": $AdditionsTemperatureModifier$TEMPERATURE_RANGE
static readonly "COLD": $AdditionsTemperatureModifier$TEMPERATURE_RANGE
static readonly "FROZEN": $AdditionsTemperatureModifier$TEMPERATURE_RANGE
static readonly "WARM": $AdditionsTemperatureModifier$TEMPERATURE_RANGE
static readonly "NEUTRAL": $AdditionsTemperatureModifier$TEMPERATURE_RANGE

public static "values"(): ($AdditionsTemperatureModifier$TEMPERATURE_RANGE)[]
public static "valueOf"(name: StringJS): $AdditionsTemperatureModifier$TEMPERATURE_RANGE
public "getSerializedName"(): StringJS
public static "byName"(name: StringJS): $AdditionsTemperatureModifier$TEMPERATURE_RANGE
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
export type $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Type = (("warm") | ("lukewarm") | ("neutral") | ("cold") | ("frozen"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionsTemperatureModifier$TEMPERATURE_RANGE$$Original = $AdditionsTemperatureModifier$TEMPERATURE_RANGE;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructurePowderSnow" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$StructureRangeConfig, $StructureRangeConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureRangeConfig"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructurePowderSnow extends $Feature<($StructureRangeConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureRangeConfig$$Type)>)

public "setSeed"(seed: long): void
public "place"(context: $FeaturePlaceContext$$Type<($StructureRangeConfig$$Type)>): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePowderSnow$$Type = ($StructurePowderSnow);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructurePowderSnow$$Original = $StructurePowderSnow;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.MinecartFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$MinecartConfig, $MinecartConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.MinecartConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MinecartFeature extends $Feature<($MinecartConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($MinecartConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($MinecartConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartFeature$$Type = ($MinecartFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartFeature$$Original = $MinecartFeature;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureTargetConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureTargetConfig)>
readonly "attempts": integer

constructor(attempts: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTargetConfig$$Type = ($StructureTargetConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTargetConfig$$Original = $StructureTargetConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.SimpleBlockWithFluidTick" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SimpleBlockWithFluidTick extends $Feature<($SimpleBlockConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($SimpleBlockConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($SimpleBlockConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBlockWithFluidTick$$Type = ($SimpleBlockWithFluidTick);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleBlockWithFluidTick$$Original = $SimpleBlockWithFluidTick;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureRangeConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureRangeConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureRangeConfig)>
readonly "range": integer

constructor(range: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRangeConfig$$Type = ($StructureRangeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureRangeConfig$$Original = $StructureRangeConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.NbtDungeon" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$NbtDungeonConfig, $NbtDungeonConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.NbtDungeonConfig"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $NbtDungeon extends $Feature<($NbtDungeonConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NbtDungeonConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NbtDungeonConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtDungeon$$Type = ($NbtDungeon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtDungeon$$Original = $NbtDungeon;}
declare module "com.telepathicgrunt.repurposedstructures.world.neoforge.biomemodifiers.RemovalsModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $RemovalsModifier extends $Record implements $BiomeModifier$$Interface {
static "CODEC": $MapCodec<($RemovalsModifier)>

constructor(biomes: $HolderSet$$Type<($Biome)>, feature: $Holder$$Type<($PlacedFeature)>, step: $GenerationStep$Decoration$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "feature"(): $Holder<($PlacedFeature)>
public "step"(): $GenerationStep$Decoration
public "biomes"(): $HolderSet<($Biome)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(biome: $Holder$$Type<($Biome)>, phase: $BiomeModifier$Phase$$Type, builder: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemovalsModifier$$Type = ({"step"?: $GenerationStep$Decoration$$Type, "feature"?: $Holder$$Type<($PlacedFeature)>, "biomes"?: $HolderSet$$Type<($Biome)>}) | ([step?: $GenerationStep$Decoration$$Type, feature?: $Holder$$Type<($PlacedFeature)>, biomes?: $HolderSet$$Type<($Biome)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemovalsModifier$$Original = $RemovalsModifier;}
declare module "com.telepathicgrunt.repurposedstructures.world.neoforge.biomemodifiers.AdditionsModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Interface} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $AdditionsModifier extends $Record implements $BiomeModifier$$Interface {
static "CODEC": $MapCodec<($AdditionsModifier)>

constructor(biomes: $HolderSet$$Type<($Biome)>, feature: $Holder$$Type<($PlacedFeature)>, step: $GenerationStep$Decoration$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "feature"(): $Holder<($PlacedFeature)>
public "step"(): $GenerationStep$Decoration
public "biomes"(): $HolderSet<($Biome)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(biome: $Holder$$Type<($Biome)>, phase: $BiomeModifier$Phase$$Type, builder: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionsModifier$$Type = ({"step"?: $GenerationStep$Decoration$$Type, "feature"?: $Holder$$Type<($PlacedFeature)>, "biomes"?: $HolderSet$$Type<($Biome)>}) | ([step?: $GenerationStep$Decoration$$Type, feature?: $Holder$$Type<($PlacedFeature)>, biomes?: $HolderSet$$Type<($Biome)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionsModifier$$Original = $AdditionsModifier;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureGrass" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"
import {$StructureTargetAndRangeConfig, $StructureTargetAndRangeConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndRangeConfig"

export class $StructureGrass extends $Feature<($StructureTargetAndRangeConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndRangeConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndRangeConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureGrass$$Type = ($StructureGrass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureGrass$$Original = $StructureGrass;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.NbtFeatureConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $NbtFeatureConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($NbtFeatureConfig)>
readonly "allowInWater": boolean
readonly "heightOffset": integer
readonly "processor": $ResourceLocation
readonly "nbtResourcelocationsAndWeights": $List<($Pair<($ResourceLocation), (integer)>)>

constructor(allowInWater: boolean, heightOffset: integer, nbtResourcelocationsAndWeights: $List$$Type<($Pair$$Type<($ResourceLocation$$Type), (integer)>)>, processor: $ResourceLocation$$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtFeatureConfig$$Type = ($NbtFeatureConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtFeatureConfig$$Original = $NbtFeatureConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureWarpedPlants" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$StructureTargetAndLengthConfig, $StructureTargetAndLengthConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndLengthConfig"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureWarpedPlants extends $Feature<($StructureTargetAndLengthConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndLengthConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndLengthConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureWarpedPlants$$Type = ($StructureWarpedPlants);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureWarpedPlants$$Original = $StructureWarpedPlants;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.DrownedWithArmor" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $DrownedWithArmor extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrownedWithArmor$$Type = ($DrownedWithArmor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrownedWithArmor$$Original = $DrownedWithArmor;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructurePostProcessConnectiveBlocks" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructurePostProcessConnectiveBlocks extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePostProcessConnectiveBlocks$$Type = ($StructurePostProcessConnectiveBlocks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructurePostProcessConnectiveBlocks$$Original = $StructurePostProcessConnectiveBlocks;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.MineshaftSupport" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$MineshaftSupportConfig, $MineshaftSupportConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.MineshaftSupportConfig"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MineshaftSupport extends $Feature<($MineshaftSupportConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($MineshaftSupportConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($MineshaftSupportConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineshaftSupport$$Type = ($MineshaftSupport);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineshaftSupport$$Original = $MineshaftSupport;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.MineshaftStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GenericJigsawStructure} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE, $GenericJigsawStructure$BURYING_TYPE$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $MineshaftStructure extends $GenericJigsawStructure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($MineshaftStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, projectStartToHeightmap: ($Heightmap$Types$$Type)?, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: (integer)?, allowedTerrainHeightRange: (integer)?, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, buryingType: ($GenericJigsawStructure$BURYING_TYPE$$Type)?, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineshaftStructure$$Type = ($MineshaftStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineshaftStructure$$Original = $MineshaftStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureNetherwart" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureNetherwart extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureNetherwart$$Type = ($StructureNetherwart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureNetherwart$$Original = $StructureNetherwart;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.NbtFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.NbtFeatureConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $NbtFeature extends $Feature<($NbtFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($NbtFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtFeature$$Type = ($NbtFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtFeature$$Original = $NbtFeature;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.StrongholdEndStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GenericJigsawStructure} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE, $GenericJigsawStructure$BURYING_TYPE$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $StrongholdEndStructure extends $GenericJigsawStructure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($StrongholdEndStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, projectStartToHeightmap: ($Heightmap$Types$$Type)?, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: (integer)?, allowedTerrainHeightRange: (integer)?, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, buryingType: ($GenericJigsawStructure$BURYING_TYPE$$Type)?, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrongholdEndStructure$$Type = ($StrongholdEndStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrongholdEndStructure$$Original = $StrongholdEndStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndRangeConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureTargetAndRangeConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureTargetAndRangeConfig)>
readonly "range": integer
readonly "attempts": integer

constructor(attempts: integer, range: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTargetAndRangeConfig$$Type = ($StructureTargetAndRangeConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTargetAndRangeConfig$$Original = $StructureTargetAndRangeConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureBreakage" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$StructureTargetChanceConfig, $StructureTargetChanceConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetChanceConfig"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureBreakage extends $Feature<($StructureTargetChanceConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetChanceConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetChanceConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBreakage$$Type = ($StructureBreakage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureBreakage$$Original = $StructureBreakage;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.MineshaftSupportConfig" {
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MineshaftSupportConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($MineshaftSupportConfig)>
readonly "archBlocks": $HashSet<($Block)>
readonly "archOnly": boolean
readonly "waterBased": boolean
readonly "fenceState": $BlockState
readonly "targetFloorState": $Block
readonly "pillarState": $BlockState

constructor(archBlocks: $HashSet$$Type<($Block$$Type)>, pillarState: $BlockState$$Type, fenceState: $BlockState$$Type, targetFloorState: $Block$$Type, waterBased: boolean, archOnly: boolean)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MineshaftSupportConfig$$Type = ($MineshaftSupportConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MineshaftSupportConfig$$Original = $MineshaftSupportConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureSeagrass" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureSeagrass extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSeagrass$$Type = ($StructureSeagrass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureSeagrass$$Original = $StructureSeagrass;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.GenericNetherJigsawStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GenericJigsawStructure} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION, $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $GenericNetherJigsawStructure extends $GenericJigsawStructure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($GenericNetherJigsawStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "ledgeOffsetY": $Optional<(integer)>
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>
readonly "searchDirection": $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, cannotSpawnInLiquid: boolean, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, ledgeOffsetY: (integer)?, searchDirection: $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION$$Type, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericNetherJigsawStructure$$Type = ($GenericNetherJigsawStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericNetherJigsawStructure$$Original = $GenericNetherJigsawStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetChanceConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureTargetChanceConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureTargetChanceConfig)>
readonly "chance": float

constructor(chance: float)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTargetChanceConfig$$Type = ($StructureTargetChanceConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTargetChanceConfig$$Original = $StructureTargetChanceConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureFlowers" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"
import {$StructureTargetAndRangeConfig, $StructureTargetAndRangeConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndRangeConfig"

export class $StructureFlowers extends $Feature<($StructureTargetAndRangeConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetAndRangeConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetAndRangeConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureFlowers$$Type = ($StructureFlowers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureFlowers$$Original = $StructureFlowers;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.NbtDungeonConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $NbtDungeonConfig implements $FeatureConfiguration$$Interface {
readonly "airRequirementIsNowWater": boolean
static readonly "CODEC": $Codec<($NbtDungeonConfig)>
readonly "processor": $ResourceLocation
readonly "structureYOffset": integer
readonly "nbtResourcelocationsAndWeights": $List<($Pair<($ResourceLocation), (integer)>)>
readonly "maxAirSpace": integer
readonly "rsSpawnerResourcelocation": $ResourceLocation
readonly "replaceAir": boolean
readonly "chanceOfSpawningLootBlockAtSpot": $Optional<(float)>
readonly "maxNumOfChests": integer
readonly "postProcessor": $ResourceLocation
readonly "chestResourcelocation": $ResourceLocation
readonly "minAirSpace": integer
readonly "lootBlock": $Block

constructor(replaceAir: boolean, minAirSpace: integer, maxAirSpace: integer, maxNumOfChests: integer, airRequirementIsNowWater: boolean, structureYOffset: integer, lootBlock: $Block$$Type, chestIdentifier: $ResourceLocation$$Type, rsSpawnerIdentifier: $ResourceLocation$$Type, processor: $ResourceLocation$$Type, postProcessor: $ResourceLocation$$Type, nbtIdentifiersAndWeights: $List$$Type<($Pair$$Type<($ResourceLocation$$Type), (integer)>)>, chanceOfSpawningLootBlockAtSpot: (float)?)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtDungeonConfig$$Type = ($NbtDungeonConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtDungeonConfig$$Original = $NbtDungeonConfig;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"

export class $YRangeAllowance {
static readonly "CODEC": $Codec<($YRangeAllowance)>
readonly "maxYAllowed": $Optional<(integer)>
readonly "minYAllowed": $Optional<(integer)>

constructor(minYAllowed: (integer)?, maxYAllowed: (integer)?)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YRangeAllowance$$Type = ($YRangeAllowance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $YRangeAllowance$$Original = $YRangeAllowance;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoralClaw" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$ConfigurableCoralConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.ConfigurableCoralConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ConfigurableCoral} from "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoral"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ConfigurableCoralClaw extends $ConfigurableCoral {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(codec: $Codec$$Type<($ConfigurableCoralConfig$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableCoralClaw$$Type = ($ConfigurableCoralClaw);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableCoralClaw$$Original = $ConfigurableCoralClaw;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoralMushroom" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$ConfigurableCoralConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.ConfigurableCoralConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ConfigurableCoral} from "com.telepathicgrunt.repurposedstructures.world.features.ConfigurableCoral"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ConfigurableCoralMushroom extends $ConfigurableCoral {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(codec: $Codec$$Type<($ConfigurableCoralConfig$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableCoralMushroom$$Type = ($ConfigurableCoralMushroom);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableCoralMushroom$$Original = $ConfigurableCoralMushroom;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.ShipwreckNetherStructure" {
import {$YRangeAllowance, $YRangeAllowance$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.codecs.YRangeAllowance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$GenericJigsawStructure} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$GenericJigsawStructure$BURYING_TYPE, $GenericJigsawStructure$BURYING_TYPE$$Type} from "com.telepathicgrunt.repurposedstructures.world.structures.GenericJigsawStructure$BURYING_TYPE"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $ShipwreckNetherStructure extends $GenericJigsawStructure {
readonly "poolsThatIgnoreBoundaries": $HashSet<($ResourceLocation)>
static readonly "CODEC": $MapCodec<($ShipwreckNetherStructure)>
readonly "allowedTerrainHeightRange": $Optional<(integer)>
readonly "yAllowance": $Optional<($YRangeAllowance)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "terrainHeightCheckRadius": $Optional<(integer)>
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "biomeRadius": $Optional<(integer)>
readonly "useBoundingBoxHack": boolean
readonly "size": integer
readonly "cannotSpawnInLiquid": boolean
readonly "buryingType": $Optional<($GenericJigsawStructure$BURYING_TYPE)>
readonly "maxDistanceFromCenter": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, size: integer, yAllowance: ($YRangeAllowance$$Type)?, startHeight: $HeightProvider$$Type, projectStartToHeightmap: ($Heightmap$Types$$Type)?, cannotSpawnInLiquid: boolean, terrainHeightCheckRadius: (integer)?, allowedTerrainHeightRange: (integer)?, biomeRadius: (integer)?, poolsThatIgnoreBoundaries: $HashSet$$Type<($ResourceLocation$$Type)>, maxDistanceFromCenter: (integer)?, buryingType: ($GenericJigsawStructure$BURYING_TYPE$$Type)?, useBoundingBoxHack: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipwreckNetherStructure$$Type = ($ShipwreckNetherStructure);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShipwreckNetherStructure$$Original = $ShipwreckNetherStructure;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.SkeletonHorseman" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$GenericMobConfig, $GenericMobConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.GenericMobConfig"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SkeletonHorseman extends $Feature<($GenericMobConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(context: $FeaturePlaceContext$$Type<($GenericMobConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkeletonHorseman$$Type = ($SkeletonHorseman);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkeletonHorseman$$Original = $SkeletonHorseman;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureFire" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$StructureTargetConfig, $StructureTargetConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetConfig"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureFire extends $Feature<($StructureTargetConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureFire$$Type = ($StructureFire);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureFire$$Original = $StructureFire;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.StructureVine" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$StructureTargetLengthRangeConfig, $StructureTargetLengthRangeConfig$$Type} from "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetLengthRangeConfig"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StructureVine extends $Feature<($StructureTargetLengthRangeConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(config: $Codec$$Type<($StructureTargetLengthRangeConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($StructureTargetLengthRangeConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureVine$$Type = ($StructureVine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureVine$$Original = $StructureVine;}
declare module "com.telepathicgrunt.repurposedstructures.world.structures.GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION extends $Enum<($GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION)> implements $StringRepresentable$$Interface {
static readonly "HIGHEST_LAND": $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION
static readonly "LOWEST_LAND": $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION

public static "values"(): ($GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION)[]
public static "valueOf"(name: StringJS): $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION
public "getSerializedName"(): StringJS
public static "byName"(name: StringJS): $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION
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
export type $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION$$Type = (("highest_land") | ("lowest_land"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION$$Original = $GenericNetherJigsawStructure$LAND_SEARCH_DIRECTION;}
declare module "com.telepathicgrunt.repurposedstructures.world.features.configs.StructureTargetAndLengthConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $StructureTargetAndLengthConfig implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($StructureTargetAndLengthConfig)>
readonly "length": integer
readonly "attempts": integer

constructor(attempts: integer, length: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTargetAndLengthConfig$$Type = ($StructureTargetAndLengthConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTargetAndLengthConfig$$Original = $StructureTargetAndLengthConfig;}
