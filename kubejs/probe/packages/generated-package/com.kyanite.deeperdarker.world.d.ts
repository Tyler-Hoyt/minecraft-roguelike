declare module "com.kyanite.deeperdarker.world.features.OthersidePoolFeature" {
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

export class $OthersidePoolFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OthersidePoolFeature$$Type = ($OthersidePoolFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OthersidePoolFeature$$Original = $OthersidePoolFeature;}
declare module "com.kyanite.deeperdarker.world.features.BloomingStemFeature" {
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

export class $BloomingStemFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloomingStemFeature$$Type = ($BloomingStemFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BloomingStemFeature$$Original = $BloomingStemFeature;}
declare module "com.kyanite.deeperdarker.world.features.SculkGleamFeature" {
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

export class $SculkGleamFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SculkGleamFeature$$Type = ($SculkGleamFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SculkGleamFeature$$Original = $SculkGleamFeature;}
declare module "com.kyanite.deeperdarker.world.features.OthersideColumnFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$Direction$$Type} from "net.minecraft.core.Direction"
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
import {$WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration as $ColumnFeatureConfiguration$0} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "com.kyanite.deeperdarker.world.features.config.ColumnFeatureConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $OthersideColumnFeature extends $Feature<($ColumnFeatureConfiguration)> {
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
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration$0)>
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

constructor(arg0: $Codec$$Type<($ColumnFeatureConfiguration$$Type)>)

public static "checkUnevenBase"(arg0: $ColumnFeatureConfiguration$$Type, arg1: $WorldGenLevel$$Type, arg2: $BlockPos$MutableBlockPos$$Type, arg3: boolean, arg4: $Direction$$Type): boolean
public "place"(arg0: $FeaturePlaceContext$$Type<($ColumnFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OthersideColumnFeature$$Type = ($OthersideColumnFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OthersideColumnFeature$$Original = $OthersideColumnFeature;}
declare module "com.kyanite.deeperdarker.world.features.GlowingRootsFeature" {
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

export class $GlowingRootsFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlowingRootsFeature$$Type = ($GlowingRootsFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlowingRootsFeature$$Original = $GlowingRootsFeature;}
declare module "com.kyanite.deeperdarker.world.features.SculkTendrilsFeature" {
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

export class $SculkTendrilsFeature extends $Feature<($NoneFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SculkTendrilsFeature$$Type = ($SculkTendrilsFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SculkTendrilsFeature$$Original = $SculkTendrilsFeature;}
declare module "com.kyanite.deeperdarker.world.features.config.VineFeatureConfiguration" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VineFeatureConfiguration implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($VineFeatureConfiguration)>

constructor(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $TagKey$$Type<($Block)>, arg3: $IntProvider$$Type, arg4: float, arg5: float)

public "tag"(): $TagKey<($Block)>
public "plant"(): $BlockState
public "height"(): $IntProvider
public "reducedChance"(): float
public "doubleChance"(): float
public "vine"(): $BlockState
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VineFeatureConfiguration$$Type = ($VineFeatureConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VineFeatureConfiguration$$Original = $VineFeatureConfiguration;}
declare module "com.kyanite.deeperdarker.world.features.VineFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$VineFeatureConfiguration, $VineFeatureConfiguration$$Type} from "com.kyanite.deeperdarker.world.features.config.VineFeatureConfiguration"
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

export class $VineFeature extends $Feature<($VineFeatureConfiguration)> {
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

constructor(arg0: $Codec$$Type<($VineFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($VineFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VineFeature$$Type = ($VineFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VineFeature$$Original = $VineFeature;}
declare module "com.kyanite.deeperdarker.world.features.config.ColumnFeatureConfiguration" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ColumnFeatureConfiguration implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($ColumnFeatureConfiguration)>

constructor(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $TagKey$$Type<($Block)>, arg3: $TagKey$$Type<($Block)>, arg4: float)

public "block"(): $BlockState
public "middleBlock"(): $BlockState
public "baseReplaceable"(): $TagKey<($Block)>
public "incompleteChance"(): float
public "columnBase"(): $TagKey<($Block)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColumnFeatureConfiguration$$Type = ($ColumnFeatureConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColumnFeatureConfiguration$$Original = $ColumnFeatureConfiguration;}
