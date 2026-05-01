declare module "com.stal111.forbidden_arcanus.common.item.enhancer.condition.EffectCondition" {
import {$EffectConditionType} from "com.stal111.forbidden_arcanus.common.item.enhancer.condition.EffectConditionType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $EffectCondition {
static readonly "DIRECT_CODEC": $Codec<($EffectCondition)>

constructor()

public "test"(arg0: $Level$$Type): boolean
public "getType"(): $EffectConditionType<($EffectCondition)>
get "type"(): $EffectConditionType<($EffectCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectCondition$$Type = ($EffectCondition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectCondition$$Original = $EffectCondition;}
declare module "com.stal111.forbidden_arcanus.common.world.feature.EdelwoodFeature" {
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

export class $EdelwoodFeature extends $Feature<($NoneFeatureConfiguration)> {
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
export type $EdelwoodFeature$$Type = ($EdelwoodFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdelwoodFeature$$Original = $EdelwoodFeature;}
declare module "com.stal111.forbidden_arcanus.common.world.feature.MegaFungyssFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$BigFungyssFeatureConfig, $BigFungyssFeatureConfig$$Type} from "com.stal111.forbidden_arcanus.common.world.feature.config.BigFungyssFeatureConfig"
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

export class $MegaFungyssFeature extends $Feature<($BigFungyssFeatureConfig)> {
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

constructor(arg0: $Codec$$Type<($BigFungyssFeatureConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($BigFungyssFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MegaFungyssFeature$$Type = ($MegaFungyssFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MegaFungyssFeature$$Original = $MegaFungyssFeature;}
declare module "com.stal111.forbidden_arcanus.common.item.SplashAurealBottleItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $SplashAurealBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashAurealBottleItem$$Type = ($SplashAurealBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashAurealBottleItem$$Original = $SplashAurealBottleItem;}
declare module "com.stal111.forbidden_arcanus.common.block.EdelwoodBranchBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EdelwoodBranchBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdelwoodBranchBlock$$Type = ($EdelwoodBranchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdelwoodBranchBlock$$Original = $EdelwoodBranchBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueChance" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ResidueType, $ResidueType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ResidueChance extends $Record {
static readonly "CODEC": $Codec<($ResidueChance)>

constructor(type: $Holder$$Type<($ResidueType)>, chance: double)

public "type"(): $Holder<($ResidueType)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "chance"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResidueChance$$Type = ({"type"?: $Holder$$Type<($ResidueType)>, "chance"?: double}) | ([type?: $Holder$$Type<($ResidueType)>, chance?: double]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResidueChance$$Original = $ResidueChance;}
declare module "com.stal111.forbidden_arcanus.common.item.DarkSoulItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $DarkSoulItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkSoulItem$$Type = ($DarkSoulItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DarkSoulItem$$Original = $DarkSoulItem;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.CapacityMilkBucketItem" {
import {$BucketFamily, $BucketFamily$$Type} from "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$MilkBucketItem} from "net.minecraft.world.item.MilkBucketItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CapacityBucket$$Type, $CapacityBucket$$Interface} from "com.stal111.forbidden_arcanus.common.item.bucket.CapacityBucket"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CapacityMilkBucketItem extends $MilkBucketItem implements $CapacityBucket$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BucketFamily$$Type, arg1: $Item$Properties$$Type)

public "getFamily"(): $BucketFamily
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "getMilkingSound"(arg0: $LivingEntity$$Type): $SoundEvent
public static "tryMilk"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $CapacityBucket$$Type): $InteractionResult
public "isFull"(arg0: $ItemStack$$Type): boolean
public "getFullness"(arg0: $ItemStack$$Type): integer
public "getEmptyBucket"(): $Item
public "getMilkBucket"(): $Item
public "setFullness"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "getFilledBucket"(arg0: $Fluid$$Type): $Item
public "getCapacity"(arg0: $ItemStack$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "family"(): $BucketFamily
get "emptyBucket"(): $Item
get "milkBucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityMilkBucketItem$$Type = ($CapacityMilkBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacityMilkBucketItem$$Original = $CapacityMilkBucketItem;}
declare module "com.stal111.forbidden_arcanus.common.item.EdelwoodOilItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $EdelwoodOilItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdelwoodOilItem$$Type = ($EdelwoodOilItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdelwoodOilItem$$Original = $EdelwoodOilItem;}
declare module "com.stal111.forbidden_arcanus.common.block.MysterywoodLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MysterywoodLogBlock extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysterywoodLogBlock$$Type = ($MysterywoodLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MysterywoodLogBlock$$Original = $MysterywoodLogBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.effect.PedestalEffect" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PedestalEffectTrigger$$Type} from "com.stal111.forbidden_arcanus.common.block.pedestal.effect.PedestalEffectTrigger"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PedestalEffect {
public "execute"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "shouldExecute"(arg0: $PedestalEffectTrigger$$Type): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusPedestalEffect
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusPedestalEffectTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalEffect$$Type = (Special.ForbiddenArcanusPedestalEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PedestalEffect$$Original = $PedestalEffect;}
declare module "com.stal111.forbidden_arcanus.common.item.crafting.ClibanoRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ClibanoRecipe} from "com.stal111.forbidden_arcanus.common.item.crafting.ClibanoRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ClibanoRecipe$Serializer implements $RecipeSerializer$$Interface<($ClibanoRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClibanoRecipe)>

constructor()

public "codec"(): $MapCodec<($ClibanoRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ClibanoRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoRecipe$Serializer$$Type = ($ClibanoRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoRecipe$Serializer$$Original = $ClibanoRecipe$Serializer;}
declare module "com.stal111.forbidden_arcanus.common.effect.SpectralEyeEffect" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$Holder} from "net.minecraft.core.Holder"
import {$MobEffect} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SpectralEyeEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectralEyeEffect$$Type = ($SpectralEyeEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectralEyeEffect$$Original = $SpectralEyeEffect;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.MagicCircle" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MagicCircleType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.circle.MagicCircleType"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MagicCircleModel$$Type} from "com.stal111.forbidden_arcanus.client.model.MagicCircleModel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $MagicCircle {
constructor(arg0: $MagicCircleType$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type)

public "tick"(): void
public "render"(arg0: $PoseStack$$Type, arg1: float, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: $MagicCircleModel$$Type, arg5: integer): void
public "easeSineOut"(arg0: double, arg1: double, arg2: double, arg3: double): float
public "setCounter"(arg0: integer): void
public "easeSineIn"(arg0: double, arg1: double, arg2: double, arg3: double): float
set "counter"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicCircle$$Type = ($MagicCircle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicCircle$$Original = $MagicCircle;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.ClibanoCenterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AbstractClibanoFrameBlock} from "com.stal111.forbidden_arcanus.common.block.clibano.AbstractClibanoFrameBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClibanoCenterBlock extends $AbstractClibanoFrameBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ClibanoCenterBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DYNAMIC_DROP_ID": $ResourceLocation
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getFacingProperty"(): $DirectionProperty
public "updateAppearance"(arg0: $BlockState$$Type, arg1: boolean, arg2: $ClibanoFireType$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "facingProperty"(): $DirectionProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoCenterBlock$$Type = ($ClibanoCenterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoCenterBlock$$Original = $ClibanoCenterBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualRequirements$Builder" {
import {$RitualRequirements} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualRequirements"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$TierPredicate$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.TierPredicate"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $RitualRequirements$Builder {
public "build"(): $RitualRequirements
public "tier"(arg0: $TierPredicate$$Type): $RitualRequirements$Builder
public "enhancer"(arg0: $Holder$$Type<($EnhancerDefinition)>): $RitualRequirements$Builder
public "enhancers"(arg0: $HolderSet$$Type<($EnhancerDefinition)>): $RitualRequirements$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRequirements$Builder$$Type = ($RitualRequirements$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualRequirements$Builder$$Original = $RitualRequirements$Builder;}
declare module "com.stal111.forbidden_arcanus.common.block.WhirlwindBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WhirlwindBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlwindBlock$$Type = ($WhirlwindBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhirlwindBlock$$Original = $WhirlwindBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.CapacityBucket" {
import {$BucketFamily, $BucketFamily$$Type} from "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Item} from "net.minecraft.world.item.Item"

export interface $CapacityBucket$$Interface {

(): $BucketFamily$$Type
get "family"(): $BucketFamily
get "emptyBucket"(): $Item
get "milkBucket"(): $Item
}

export class $CapacityBucket implements $CapacityBucket$$Interface {
 "getFamily"(): $BucketFamily
 "isFull"(arg0: $ItemStack$$Type): boolean
 "getFullness"(arg0: $ItemStack$$Type): integer
 "getEmptyBucket"(): $Item
 "getMilkBucket"(): $Item
 "setFullness"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
 "getFilledBucket"(arg0: $Fluid$$Type): $Item
 "getCapacity"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityBucket$$Type = (() => $BucketFamily$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacityBucket$$Original = $CapacityBucket;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.PedestalBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PedestalBlock extends $Block implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalBlock$$Type = ($PedestalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PedestalBlock$$Original = $PedestalBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.properties.PillarType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PillarType extends $Enum<($PillarType)> implements $StringRepresentable$$Interface {
static readonly "SINGLE": $PillarType
static readonly "TOP": $PillarType
static readonly "BOTTOM": $PillarType
static readonly "MIDDLE": $PillarType

public static "values"(): ($PillarType)[]
public static "valueOf"(arg0: StringJS): $PillarType
public "getOpposite"(): $PillarType
public static "getTypeForConnections"(arg0: boolean, arg1: boolean): $PillarType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "opposite"(): $PillarType
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarType$$Type = (("single") | ("top") | ("middle") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PillarType$$Original = $PillarType;}
declare module "com.stal111.forbidden_arcanus.common.block.MortarBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MortarBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MortarBlock$$Type = ($MortarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MortarBlock$$Original = $MortarBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.ClibanoMainPartBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClibanoMainPartBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "dismantle"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoMainPartBlock$$Type = ($ClibanoMainPartBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoMainPartBlock$$Original = $ClibanoMainPartBlock;}
declare module "com.stal111.forbidden_arcanus.common.entity.ModBoat$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$BoatItem} from "net.minecraft.world.item.BoatItem"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ModBoat$Type extends $Enum<($ModBoat$Type)> implements $StringRepresentable$$Interface {
static readonly "AURUM": $ModBoat$Type
static readonly "EDELWOOD": $ModBoat$Type

public static "values"(): ($ModBoat$Type)[]
public static "valueOf"(arg0: StringJS): $ModBoat$Type
public "getSerializedName"(): StringJS
public "getTexture"(arg0: boolean): $ResourceLocation
public "getChestModelLocation"(): StringJS
public static "byName"(arg0: StringJS): $ModBoat$Type
public static "byId"(arg0: integer): $ModBoat$Type
public "getChestBoatItem"(): $Supplier<($BoatItem)>
public "getBoatItem"(): $Supplier<($BoatItem)>
public "getModelLocation"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "chestModelLocation"(): StringJS
get "chestBoatItem"(): $Supplier<($BoatItem)>
get "boatItem"(): $Supplier<($BoatItem)>
get "modelLocation"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBoat$Type$$Type = (("aurum") | ("edelwood"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBoat$Type$$Original = $ModBoat$Type;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualRequirements" {
import {$EssencesDefinition, $EssencesDefinition$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesDefinition"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$EnhancerDefinition, $EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$TierPredicate, $TierPredicate$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.TierPredicate"
import {$RitualRequirements$Builder} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualRequirements$Builder"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $RitualRequirements extends $Record {
static readonly "CODEC": $MapCodec<($RitualRequirements)>
static readonly "NONE": $RitualRequirements

constructor(essences: $EssencesDefinition$$Type, tier: $TierPredicate$$Type, enhancers: $HolderSet$$Type<($EnhancerDefinition)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(arg0: $EssencesDefinition$$Type): $RitualRequirements$Builder
public "tier"(): $TierPredicate
public "checkRequirements"(arg0: integer, arg1: $HolderSet$$Type<($EnhancerDefinition)>): boolean
public "enhancers"(): $HolderSet<($EnhancerDefinition)>
public "essences"(): $EssencesDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRequirements$$Type = ({"tier"?: $TierPredicate$$Type, "enhancers"?: $HolderSet$$Type<($EnhancerDefinition)>, "essences"?: $EssencesDefinition$$Type}) | ([tier?: $TierPredicate$$Type, enhancers?: $HolderSet$$Type<($EnhancerDefinition)>, essences?: $EssencesDefinition$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualRequirements$$Original = $RitualRequirements;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesStorage" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EssencesDefinition, $EssencesDefinition$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesDefinition"
import {$List$$Type} from "java.util.List"
import {$EnumMap} from "java.util.EnumMap"
import {$EssenceType, $EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$EssenceModifier$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceModifier"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $EssencesStorage extends $EnumMap<($EssenceType), (integer)> {
static readonly "CODEC": $Codec<($EssencesStorage)>

constructor()
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "put"(arg0: any, arg1: any): any
public "put"(arg0: $Enum$$Type, arg1: any): any
public "put"(arg0: $EssenceType$$Type, arg1: integer): integer
public "reduce"(arg0: $EssencesDefinition$$Type): void
public "applyModifiers"(arg0: $List$$Type<($EssenceModifier$$Type)>): void
public "immutable"(): $EssencesDefinition
public "modify"(arg0: $EssenceType$$Type, arg1: $UnaryOperator$$Type<(integer)>): void
public "clone"(): any
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssencesStorage$$Type = ($EssencesStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssencesStorage$$Original = $EssencesStorage;}
declare module "com.stal111.forbidden_arcanus.common.item.AurealBottleItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $AurealBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AurealBottleItem$$Type = ($AurealBottleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AurealBottleItem$$Original = $AurealBottleItem;}
declare module "com.stal111.forbidden_arcanus.common.advancements.critereon.RitualCompletedTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $RitualCompletedTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
static readonly "CODEC": $Codec<($RitualCompletedTrigger$TriggerInstance)>

constructor(player: ($ContextAwarePredicate$$Type)?, ritualId: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public "ritualId"(): $ResourceLocation
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualCompletedTrigger$TriggerInstance$$Type = ({"ritualId"?: $ResourceLocation$$Type, "player"?: ($ContextAwarePredicate$$Type)?}) | ([ritualId?: $ResourceLocation$$Type, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualCompletedTrigger$TriggerInstance$$Original = $RitualCompletedTrigger$TriggerInstance;}
declare module "com.stal111.forbidden_arcanus.common.research.DisplayInfo" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$FrameType, $FrameType$$Type} from "com.stal111.forbidden_arcanus.common.research.FrameType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IconProvider, $IconProvider$$Type} from "com.stal111.forbidden_arcanus.common.research.icon.IconProvider"

export class $DisplayInfo {
static readonly "CODEC": $Codec<($DisplayInfo)>

constructor(arg0: $Component$$Type, arg1: $Component$$Type, arg2: $FrameType$$Type, arg3: $IconProvider$$Type, arg4: integer, arg5: integer)

public "getFrame"(): $FrameType
public "getTitle"(): $Component
public "getIcon"(): $IconProvider
public "getRelativeY"(): integer
public "getRelativeX"(): integer
public "getDescription"(): $Component
get "frame"(): $FrameType
get "title"(): $Component
get "icon"(): $IconProvider
get "relativeY"(): integer
get "relativeX"(): integer
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayInfo$$Type = ($DisplayInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DisplayInfo$$Original = $DisplayInfo;}
declare module "com.stal111.forbidden_arcanus.common.block.UtremJarBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $UtremJarBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDescriptionId"(): StringJS
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UtremJarBlock$$Type = ($UtremJarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UtremJarBlock$$Original = $UtremJarBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.EntityInteraction" {
import {$MundabiturInteraction$$Interface} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction"
import {$EntityInteraction$EntityInteractionContext, $EntityInteraction$EntityInteractionContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.EntityInteraction$EntityInteractionContext"

export class $EntityInteraction implements $MundabiturInteraction$$Interface<($EntityInteraction$EntityInteractionContext)> {
constructor()

public "interact"(arg0: $EntityInteraction$EntityInteractionContext$$Type): void
public "canInteract"(arg0: $EntityInteraction$EntityInteractionContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInteraction$$Type = ($EntityInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityInteraction$$Original = $EntityInteraction;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.CapacityBucketItem" {
import {$BucketFamily, $BucketFamily$$Type} from "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem} from "net.minecraft.world.item.BucketItem"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CapacityFluidBucket$$Interface} from "com.stal111.forbidden_arcanus.common.item.bucket.CapacityFluidBucket"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CapacityBucketItem extends $BucketItem implements $CapacityFluidBucket$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Fluid$$Type, arg1: $BucketFamily$$Type, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getFamily"(): $BucketFamily
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "getFluid"(): $Fluid
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isFull"(arg0: $ItemStack$$Type): boolean
public "getFullness"(arg0: $ItemStack$$Type): integer
public "getEmptyBucket"(): $Item
public "getMilkBucket"(): $Item
public "setFullness"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "getFilledBucket"(arg0: $Fluid$$Type): $Item
public "getCapacity"(arg0: $ItemStack$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "family"(): $BucketFamily
get "fluid"(): $Fluid
get "emptyBucket"(): $Item
get "milkBucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityBucketItem$$Type = ($CapacityBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacityBucketItem$$Original = $CapacityBucketItem;}
declare module "com.stal111.forbidden_arcanus.common.item.WhirlwindPrismItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $WhirlwindPrismItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhirlwindPrismItem$$Type = ($WhirlwindPrismItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WhirlwindPrismItem$$Original = $WhirlwindPrismItem;}
declare module "com.stal111.forbidden_arcanus.common.item.crafting.ClibanoRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$ClibanoFireType, $ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClibanoCookingTimes, $ClibanoCookingTimes$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoCookingTimes"
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ResidueChance, $ResidueChance$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueChance"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$EnhancerDefinition, $EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$ClibanoRecipeInput, $ClibanoRecipeInput$$Type} from "com.stal111.forbidden_arcanus.common.item.crafting.ClibanoRecipeInput"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record} from "java.lang.Record"

export class $ClibanoRecipe extends $Record implements $Recipe$$Interface<($ClibanoRecipeInput)> {
static readonly "DEFAULT_COOKING_TIMES": $ClibanoCookingTimes

constructor(group: StringJS, category: $CookingBookCategory$$Type, ingredients: $Either$$Type<($Ingredient$$Type), ($Pair$$Type<($Ingredient$$Type), ($Ingredient$$Type)>)>, result: $ItemStack$$Type, experience: float, cookingTimes: $ClibanoCookingTimes$$Type, residueChance: ($ResidueChance$$Type)?, requiredFireType: $ClibanoFireType$$Type, requiredEnhancer: ($Holder$$Type<($EnhancerDefinition$$Type)>)?)

public "group"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ClibanoRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ClibanoRecipeInput$$Type, arg1: $Level$$Type, arg2: $HolderSet$$Type<($EnhancerDefinition)>): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "getType"(): $RecipeType<(never)>
public "category"(): $CookingBookCategory
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ClibanoRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "experience"(): float
public "ingredients"(): $Either<($Ingredient), ($Pair<($Ingredient), ($Ingredient)>)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "getDefaultCookingTime"(): integer
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getExperience"(): float
public "residueChance"(): $Optional<($ResidueChance)>
public "requiredEnhancer"(): $Optional<($Holder<($EnhancerDefinition)>)>
public "requiredFireType"(): $ClibanoFireType
public "cookingTimes"(): $ClibanoCookingTimes
public "isDoubleRecipe"(): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $ClibanoRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(never)>
get "defaultCookingTime"(): integer
get "doubleRecipe"(): boolean
get "special"(): boolean
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoRecipe$$Type = ({"cookingTimes"?: $ClibanoCookingTimes$$Type, "group"?: StringJS, "requiredEnhancer"?: ($Holder$$Type<($EnhancerDefinition$$Type)>)?, "result"?: $ItemStack$$Type, "category"?: $CookingBookCategory$$Type, "residueChance"?: ($ResidueChance$$Type)?, "requiredFireType"?: $ClibanoFireType$$Type, "ingredients"?: $Either$$Type<($Ingredient$$Type), ($Pair$$Type<($Ingredient$$Type), ($Ingredient$$Type)>)>, "experience"?: float}) | ([cookingTimes?: $ClibanoCookingTimes$$Type, group?: StringJS, requiredEnhancer?: ($Holder$$Type<($EnhancerDefinition$$Type)>)?, result?: $ItemStack$$Type, category?: $CookingBookCategory$$Type, residueChance?: ($ResidueChance$$Type)?, requiredFireType?: $ClibanoFireType$$Type, ingredients?: $Either$$Type<($Ingredient$$Type), ($Pair$$Type<($Ingredient$$Type), ($Ingredient$$Type)>)>, experience?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoRecipe$$Original = $ClibanoRecipe;}
declare module "com.stal111.forbidden_arcanus.common.block.PillarBlock" {
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PillarType} from "com.stal111.forbidden_arcanus.common.block.properties.PillarType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PillarBlock extends $RotatedPillarBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($PillarType)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarBlock$$Type = ($PillarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PillarBlock$$Original = $PillarBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.effect.SummonEntityEffect" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PedestalEffect} from "com.stal111.forbidden_arcanus.common.block.pedestal.effect.PedestalEffect"
import {$LivingEntity} from "net.minecraft.world.entity.LivingEntity"
import {$RegistryEntry$$Type} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SummonEntityEffect<T extends $LivingEntity> extends $PedestalEffect {
constructor(arg0: $BiPredicate$$Type<($ServerLevel), ($ItemStack)>, arg1: $RegistryEntry$$Type<($EntityType$$Type<(never)>), ($EntityType$$Type<(T)>)>, arg2: integer, arg3: boolean)

public "execute"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonEntityEffect$$Type<T> = ($SummonEntityEffect<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SummonEntityEffect$$Original<T> = $SummonEntityEffect<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.essence.EssenceStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EssenceValue, $EssenceValue$$Type} from "com.stal111.forbidden_arcanus.common.essence.EssenceValue"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$TooltipProvider$$Interface} from "net.minecraft.world.item.component.TooltipProvider"
import {$Record} from "java.lang.Record"

export class $EssenceStorage extends $Record implements $TooltipProvider$$Interface {
static readonly "CODEC": $Codec<($EssenceStorage)>
static readonly "FULL_CODEC": $Codec<($EssenceStorage)>
static readonly "EMPTY": $EssenceStorage
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EssenceStorage)>

constructor(value: $EssenceValue$$Type, limit: integer, showInTooltip: boolean)

public "value"(): $EssenceValue
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "limit"(): integer
public static "createEmpty"(arg0: $EssenceType$$Type, arg1: integer): $EssenceStorage
public "isFull"(): boolean
public static "codec"(arg0: $EssenceType$$Type): $Codec<($EssenceStorage)>
public "showInTooltip"(): boolean
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "addEssence"(arg0: $ItemStack$$Type, arg1: integer): void
public "getFillPercentage"(): float
get "empty"(): boolean
get "full"(): boolean
get "fillPercentage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceStorage$$Type = ({"limit"?: integer, "value"?: $EssenceValue$$Type, "showInTooltip"?: boolean}) | ([limit?: integer, value?: $EssenceValue$$Type, showInTooltip?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceStorage$$Original = $EssenceStorage;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction" {
import {$TransformPatternInteraction$TransformPatternContext, $TransformPatternInteraction$TransformPatternContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction$TransformPatternContext"
import {$MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MundabiturInteraction$$Interface} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction"
import {$BlockPattern$$Type} from "net.minecraft.world.level.block.state.pattern.BlockPattern"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransformPatternInteraction implements $MundabiturInteraction$$Interface<($TransformPatternInteraction$TransformPatternContext)> {
constructor(arg0: $Predicate$$Type<($BlockState)>, arg1: $BlockPattern$$Type)

public "placeBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "canInteract"(arg0: $TransformPatternInteraction$TransformPatternContext$$Type): boolean
public "canInteract"(arg0: $MundabiturInteraction$Context$$Type): boolean
public "interact"(arg0: $TransformPatternInteraction$TransformPatternContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformPatternInteraction$$Type = ($TransformPatternInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformPatternInteraction$$Original = $TransformPatternInteraction;}
declare module "com.stal111.forbidden_arcanus.common.block.properties.ObeliskPart" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ObeliskPart extends $Enum<($ObeliskPart)> implements $StringRepresentable$$Interface {
static readonly "UPPER": $ObeliskPart
static readonly "LOWER": $ObeliskPart
static readonly "MIDDLE": $ObeliskPart

public static "values"(): ($ObeliskPart)[]
public static "valueOf"(arg0: StringJS): $ObeliskPart
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
export type $ObeliskPart$$Type = (("upper") | ("middle") | ("lower"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObeliskPart$$Original = $ObeliskPart;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.RitualResultType" {
import {$RitualResult} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.RitualResult"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $RitualResultType<T extends $RitualResult> extends $Record {
constructor(codec: $MapCodec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusRitualResult
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusRitualResultTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualResultType$$Type<T> = (Special.ForbiddenArcanusRitualResult) | ({"codec"?: $MapCodec$$Type<(T)>}) | ([codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualResultType$$Original<T> = $RitualResultType<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction" {
import {$MundabiturInteraction$Context, $MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"

export interface $MundabiturInteraction$$Interface<T extends $MundabiturInteraction$Context> {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusMundabiturInteraction
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusMundabiturInteractionTag
}

export class $MundabiturInteraction<T extends $MundabiturInteraction$Context> implements $MundabiturInteraction$$Interface {
 "interact"(arg0: T): void
 "canInteract"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MundabiturInteraction$$Type<T> = (Special.ForbiddenArcanusMundabiturInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MundabiturInteraction$$Original<T> = $MundabiturInteraction<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.block.QuantumInjectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $QuantumInjectorBlock extends $Block implements $EntityBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "ENABLED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInjectorBlock$$Type = ($QuantumInjectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantumInjectorBlock$$Original = $QuantumInjectorBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.input.EssenceDataInput" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EssenceValue} from "com.stal111.forbidden_arcanus.common.essence.EssenceValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$HephaestusForgeInput$$Interface} from "com.stal111.forbidden_arcanus.common.block.entity.forge.input.HephaestusForgeInput"

export class $EssenceDataInput implements $HephaestusForgeInput$$Interface {
constructor()

public "canInput"(arg0: $EssenceType$$Type, arg1: $ItemStack$$Type): boolean
public "getInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
public "finishInput"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "getMaxInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceDataInput$$Type = ($EssenceDataInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceDataInput$$Original = $EssenceDataInput;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ForgeDataCache$IngredientEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $ForgeDataCache$IngredientEntry extends $Record {
static readonly "CODEC": $Codec<($ForgeDataCache$IngredientEntry)>

constructor(pos: $BlockPos$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeDataCache$IngredientEntry$$Type = ({"pos"?: $BlockPos$$Type, "stack"?: $ItemStack$$Type}) | ([pos?: $BlockPos$$Type, stack?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForgeDataCache$IngredientEntry$$Original = $ForgeDataCache$IngredientEntry;}
declare module "com.stal111.forbidden_arcanus.common.item.MagicWandItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MagicWandItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getUseProgress"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): float
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicWandItem$$Type = ($MagicWandItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicWandItem$$Original = $MagicWandItem;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.CreateClibanoInteraction" {
import {$TransformPatternInteraction$TransformPatternContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction$TransformPatternContext"
import {$MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TransformPatternInteraction} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction"
import {$BlockPattern$$Type} from "net.minecraft.world.level.block.state.pattern.BlockPattern"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateClibanoInteraction extends $TransformPatternInteraction {
constructor(arg0: $Predicate$$Type<($BlockState)>, arg1: $BlockPattern$$Type)

public "interact"(arg0: $MundabiturInteraction$Context$$Type): void
public "interact"(arg0: $TransformPatternInteraction$TransformPatternContext$$Type): void
public "placeBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateClibanoInteraction$$Type = ($CreateClibanoInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateClibanoInteraction$$Original = $CreateClibanoInteraction;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.TierPredicate" {
import {$Component} from "net.minecraft.network.chat.Component"
import {$IntPredicate, $IntPredicate$$Type, $IntPredicate$$Interface} from "java.util.function.IntPredicate"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $TierPredicate extends $Record implements $IntPredicate$$Interface {
static readonly "CODEC": $MapCodec<($TierPredicate)>
static readonly "ANY": $TierPredicate

constructor(tier: integer, matchExact: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "min"(arg0: integer): $TierPredicate
public "test"(arg0: integer): boolean
public static "exact"(arg0: integer): $TierPredicate
public "tier"(): integer
public "matchExact"(): boolean
public "getDescription"(): $Component
public "or"(arg0: $IntPredicate$$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$$Type): $IntPredicate
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TierPredicate$$Type = ({"tier"?: integer, "matchExact"?: boolean}) | ([tier?: integer, matchExact?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TierPredicate$$Original = $TierPredicate;}
declare module "com.stal111.forbidden_arcanus.common.research.icon.IconProvider" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec} from "com.mojang.serialization.Codec"

export interface $IconProvider$$Interface {

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export class $IconProvider implements $IconProvider$$Interface {
static readonly "CODEC": $Codec<($IconProvider)>

 "renderIcon"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconProvider$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IconProvider$$Original = $IconProvider;}
declare module "com.stal111.forbidden_arcanus.common.entity.darktrader.DarkTraderVariant" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MappedRegistryHelper} from "net.valhelsia.valhelsia_core.api.common.registry.helper.MappedRegistryHelper"
import {$RegistryEntry} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry"
import {$RegistryClass$$Interface} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass"
import {$Record} from "java.lang.Record"

export class $DarkTraderVariant extends $Record implements $RegistryClass$$Interface {
static readonly "HELPER": $MappedRegistryHelper<($DarkTraderVariant)>
static readonly "BROOK": $RegistryEntry<($DarkTraderVariant), ($DarkTraderVariant)>
static readonly "HOHENHEIM": $RegistryEntry<($DarkTraderVariant), ($DarkTraderVariant)>
static readonly "IDRIL": $RegistryEntry<($DarkTraderVariant), ($DarkTraderVariant)>

constructor(texture: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "load"(): void
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusDarkTraderVariant
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusDarkTraderVariantTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkTraderVariant$$Type = (Special.ForbiddenArcanusDarkTraderVariant) | ({"texture"?: $ResourceLocation$$Type}) | ([texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DarkTraderVariant$$Original = $DarkTraderVariant;}
declare module "com.stal111.forbidden_arcanus.common.block.ForbiddenomiconBlock" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ForbiddenomiconBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ForbiddenomiconBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForbiddenomiconBlock$$Type = ($ForbiddenomiconBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForbiddenomiconBlock$$Original = $ForbiddenomiconBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.input.EssenceStorageInput" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EssenceValue} from "com.stal111.forbidden_arcanus.common.essence.EssenceValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$HephaestusForgeInput$$Interface} from "com.stal111.forbidden_arcanus.common.block.entity.forge.input.HephaestusForgeInput"

export class $EssenceStorageInput implements $HephaestusForgeInput$$Interface {
static readonly "EXTRACTION_SPEED": integer

constructor()

public "canInput"(arg0: $EssenceType$$Type, arg1: $ItemStack$$Type): boolean
public "getInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
public "getMaxInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
public "finishInput"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceStorageInput$$Type = ($EssenceStorageInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceStorageInput$$Original = $EssenceStorageInput;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.effect.PedestalEffectTrigger" {
import {$Enum} from "java.lang.Enum"

export class $PedestalEffectTrigger extends $Enum<($PedestalEffectTrigger)> {
static readonly "PLAYER_PLACE_ITEM": $PedestalEffectTrigger
static readonly "PLAYER_REMOVE_ITEM": $PedestalEffectTrigger
static readonly "LOAD": $PedestalEffectTrigger
static readonly "ENTITY_SUMMONED": $PedestalEffectTrigger
static readonly "RITUAL_FINISHED": $PedestalEffectTrigger
static readonly "MAGNETIZED_PICKUP": $PedestalEffectTrigger

public static "values"(): ($PedestalEffectTrigger)[]
public static "valueOf"(arg0: StringJS): $PedestalEffectTrigger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PedestalEffectTrigger$$Type = (("player_place_item") | ("player_remove_item") | ("ritual_finished") | ("magnetized_pickup") | ("entity_summoned") | ("load"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PedestalEffectTrigger$$Original = $PedestalEffectTrigger;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueType" {
import {$ResidueType$CombineInfo, $ResidueType$CombineInfo$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueType$CombineInfo"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ResidueType extends $Record {
static readonly "CODEC": $Codec<($Holder<($ResidueType)>)>
static readonly "DIRECT_CODEC": $Codec<($ResidueType)>

constructor(name: $Component$$Type, combineInfo: $ResidueType$CombineInfo$$Type)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "withDefaultKey"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): $ResidueType
public "combineInfo"(): $ResidueType$CombineInfo
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusResidueType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusResidueTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResidueType$$Type = (Special.ForbiddenArcanusResidueType) | ({"combineInfo"?: $ResidueType$CombineInfo$$Type, "name"?: $Component$$Type}) | ([combineInfo?: $ResidueType$CombineInfo$$Type, name?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResidueType$$Original = $ResidueType;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueType$CombineInfo" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $ResidueType$CombineInfo extends $Record {
static readonly "CODEC": $Codec<($ResidueType$CombineInfo)>

constructor(requiredAmount: integer, result: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "result"(): $ItemStack
public "requiredAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResidueType$CombineInfo$$Type = ({"result"?: $ItemStack$$Type, "requiredAmount"?: integer}) | ([result?: $ItemStack$$Type, requiredAmount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResidueType$CombineInfo$$Original = $ResidueType$CombineInfo;}
declare module "com.stal111.forbidden_arcanus.common.item.DarkMatterItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $DarkMatterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkMatterItem$$Type = ($DarkMatterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DarkMatterItem$$Original = $DarkMatterItem;}
declare module "com.stal111.forbidden_arcanus.common.item.modifier.ItemModifier$DisplaySettings" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ItemModifier$DisplaySettings extends $Record {
static readonly "CODEC": $Codec<($ItemModifier$DisplaySettings)>

constructor(name: $Component$$Type, texture: $ResourceLocation$$Type, tooltipColor: $Pair$$Type<(integer), (integer)>)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "texture"(): $ResourceLocation
public "tooltipColor"(): $Pair<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModifier$DisplaySettings$$Type = ({"tooltipColor"?: $Pair$$Type<(integer), (integer)>, "name"?: $Component$$Type, "texture"?: $ResourceLocation$$Type}) | ([tooltipColor?: $Pair$$Type<(integer), (integer)>, name?: $Component$$Type, texture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModifier$DisplaySettings$$Original = $ItemModifier$DisplaySettings;}
declare module "com.stal111.forbidden_arcanus.common.item.ArcaneBoneMealItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BoneMealItem} from "net.minecraft.world.item.BoneMealItem"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ArcaneBoneMealItem extends $BoneMealItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "GRASS_COUNT_MULTIPLIER": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "GRASS_SPREAD_HEIGHT": integer
static readonly "GRASS_SPREAD_WIDTH": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "applyBoneMeal"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneBoneMealItem$$Type = ($ArcaneBoneMealItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcaneBoneMealItem$$Original = $ArcaneBoneMealItem;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerTarget" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $EnhancerTarget extends $Enum<($EnhancerTarget)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($EnhancerTarget)>
static readonly "CLIBANO": $EnhancerTarget
static readonly "HEPHAESTUS_FORGE": $EnhancerTarget
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EnhancerTarget)>

public static "values"(): ($EnhancerTarget)[]
public static "valueOf"(arg0: StringJS): $EnhancerTarget
public "getSerializedName"(): StringJS
public "getTitle"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "title"(): $Component
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancerTarget$$Type = (("hephaestus_forge") | ("clibano"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancerTarget$$Original = $EnhancerTarget;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffect" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$EnhancerEffectType, $EnhancerEffectType$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffectType"
import {$ConditionalEnhancerEffect} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.ConditionalEnhancerEffect"

export interface $EnhancerEffect$$Interface {

(): $EnhancerEffectType$$Type<($EnhancerEffect$$Type)>
get "type"(): $EnhancerEffectType<($EnhancerEffect)>
}

export class $EnhancerEffect implements $EnhancerEffect$$Interface {
static readonly "DIRECT_CODEC": $Codec<($ConditionalEnhancerEffect<($EnhancerEffect)>)>

 "getType"(): $EnhancerEffectType<($EnhancerEffect)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancerEffect$$Type = (() => $EnhancerEffectType$$Type<($EnhancerEffect$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancerEffect$$Original = $EnhancerEffect;}
declare module "com.stal111.forbidden_arcanus.common.item.ObsidianSkullItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$ObsidianSkullType} from "com.stal111.forbidden_arcanus.common.block.skull.ObsidianSkullType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$StandingAndWallBlockItem} from "net.minecraft.world.item.StandingAndWallBlockItem"

export class $ObsidianSkullItem extends $StandingAndWallBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "NEXT_SKULL_STAGE": $Map<($ObsidianSkullType), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $Item$Properties$$Type)

public "getType"(arg0: $ItemStack$$Type): $ObsidianSkullType
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianSkullItem$$Type = ($ObsidianSkullItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObsidianSkullItem$$Original = $ObsidianSkullItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ClibanoFireType extends $Enum<($ClibanoFireType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($ClibanoFireType)>
static readonly "ENCHANTED_FIRE": $ClibanoFireType
static readonly "FIRE": $ClibanoFireType
static readonly "SOUL_FIRE": $ClibanoFireType

public static "values"(): ($ClibanoFireType)[]
public static "valueOf"(arg0: StringJS): $ClibanoFireType
public "getSerializedName"(): StringJS
public "getLightLevel"(): integer
public static "fromItem"(arg0: $ItemStack$$Type): $ClibanoFireType
public "getTagKey"(): $TagKey<($Item)>
public "getCookingSpeedMultiplier"(): double
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "lightLevel"(): integer
get "tagKey"(): $TagKey<($Item)>
get "cookingSpeedMultiplier"(): double
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoFireType$$Type = (("fire") | ("soul_fire") | ("enchanted_fire"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoFireType$$Original = $ClibanoFireType;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.MagnetizedPedestalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PedestalBlock} from "com.stal111.forbidden_arcanus.common.block.pedestal.PedestalBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MagnetizedPedestalBlock extends $PedestalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetizedPedestalBlock$$Type = ($MagnetizedPedestalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagnetizedPedestalBlock$$Original = $MagnetizedPedestalBlock;}
declare module "com.stal111.forbidden_arcanus.common.essence.EssenceValue" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$EssenceType, $EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EssenceValue extends $Record {
static readonly "CODEC": $Codec<($EssenceValue)>
static readonly "MAP_CODEC": $MapCodec<($EssenceValue)>
static readonly "EMPTY": $EssenceValue
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EssenceValue)>

constructor(type: $EssenceType$$Type, amount: integer)

public "type"(): $EssenceType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $EssenceType$$Type, arg1: integer): $EssenceValue
public "combine"(arg0: $EssenceValue$$Type): $EssenceValue
public static "createEmpty"(arg0: $EssenceType$$Type): $EssenceValue
public "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceValue$$Type = ({"type"?: $EssenceType$$Type, "amount"?: integer}) | ([type?: $EssenceType$$Type, amount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceValue$$Original = $EssenceValue;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffectType" {
import {$EnhancerTarget, $EnhancerTarget$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerTarget"
import {$EnhancerEffect} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffect"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConditionalEnhancerEffect, $ConditionalEnhancerEffect$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.ConditionalEnhancerEffect"
import {$Record} from "java.lang.Record"

export class $EnhancerEffectType<T extends $EnhancerEffect> extends $Record {
constructor(codec: $MapCodec$$Type<($ConditionalEnhancerEffect$$Type<(T)>)>, target: $EnhancerTarget$$Type)

public "equals"(arg0: any): boolean
public "target"(): $EnhancerTarget
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<($ConditionalEnhancerEffect<(T)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusEnhancerEffect
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusEnhancerEffectTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancerEffectType$$Type<T> = (Special.ForbiddenArcanusEnhancerEffect) | ({"codec"?: $MapCodec$$Type<($ConditionalEnhancerEffect$$Type<(T)>)>, "target"?: $EnhancerTarget$$Type}) | ([codec?: $MapCodec$$Type<($ConditionalEnhancerEffect$$Type<(T)>)>, target?: $EnhancerTarget$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancerEffectType$$Original<T> = $EnhancerEffectType<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.research.Constellation" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Knowledge, $Knowledge$$Type} from "com.stal111.forbidden_arcanus.common.research.Knowledge"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $Constellation extends $Record {
static readonly "CODEC": $Codec<($Constellation)>

constructor(name: StringJS, startX: integer, startY: integer, startKnowledge: $Holder$$Type<($Knowledge)>)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "startY"(): integer
public "startKnowledge"(): $Holder<($Knowledge)>
public "startX"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusResearchConstellation
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusResearchConstellationTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constellation$$Type = (Special.ForbiddenArcanusResearchConstellation) | ({"startX"?: integer, "startKnowledge"?: $Holder$$Type<($Knowledge)>, "name"?: StringJS, "startY"?: integer}) | ([startX?: integer, startKnowledge?: $Holder$$Type<($Knowledge)>, name?: StringJS, startY?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Constellation$$Original = $Constellation;}
declare module "com.stal111.forbidden_arcanus.common.block.EdelwoodLogBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Biome$Precipitation$$Type} from "net.minecraft.world.level.biome.Biome$Precipitation"

export class $EdelwoodLogBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "OILY": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "handlePrecipitation"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Biome$Precipitation$$Type): void
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EdelwoodLogBlock$$Type = ($EdelwoodLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EdelwoodLogBlock$$Original = $EdelwoodLogBlock;}
declare module "com.stal111.forbidden_arcanus.common.research.Knowledge" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$DisplayInfo, $DisplayInfo$$Type} from "com.stal111.forbidden_arcanus.common.research.DisplayInfo"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $Knowledge extends $Record {
static readonly "CODEC": $Codec<($Holder<($Knowledge)>)>
static readonly "DIRECT_CODEC": $Codec<($Knowledge)>

constructor(displayInfo: $DisplayInfo$$Type, parents: $List$$Type<($Holder$$Type<($Knowledge$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "parents"(): $List<($Holder<($Knowledge)>)>
public "displayInfo"(): $DisplayInfo
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusResearchKnowledge
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusResearchKnowledgeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Knowledge$$Type = (Special.ForbiddenArcanusResearchKnowledge) | ({"parents"?: $List$$Type<($Holder$$Type<($Knowledge$$Type)>)>, "displayInfo"?: $DisplayInfo$$Type}) | ([parents?: $List$$Type<($Holder$$Type<($Knowledge$$Type)>)>, displayInfo?: $DisplayInfo$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Knowledge$$Original = $Knowledge;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.CreateObeliskInteraction" {
import {$TransformPatternInteraction$TransformPatternContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction$TransformPatternContext"
import {$MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TransformPatternInteraction} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction"
import {$BlockPattern$$Type} from "net.minecraft.world.level.block.state.pattern.BlockPattern"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateObeliskInteraction extends $TransformPatternInteraction {
constructor(arg0: $Predicate$$Type<($BlockState)>, arg1: $BlockPattern$$Type)

public "interact"(arg0: $TransformPatternInteraction$TransformPatternContext$$Type): void
public "interact"(arg0: $MundabiturInteraction$Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateObeliskInteraction$$Type = ($CreateObeliskInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateObeliskInteraction$$Original = $CreateObeliskInteraction;}
declare module "com.stal111.forbidden_arcanus.common.block.StellaArcanumBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StellaArcanumBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StellaArcanumBlock$$Type = ($StellaArcanumBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StellaArcanumBlock$$Original = $StellaArcanumBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.MagicalFarmlandBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$FarmBlock} from "net.minecraft.world.level.block.FarmBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MagicalFarmlandBlock extends $FarmBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FarmBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "MAX_MOISTURE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "MOISTURE": $IntegerProperty
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicalFarmlandBlock$$Type = ($MagicalFarmlandBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicalFarmlandBlock$$Original = $MagicalFarmlandBlock;}
declare module "com.stal111.forbidden_arcanus.common.research.FrameType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FrameType extends $Enum<($FrameType)> implements $StringRepresentable$$Interface {
static readonly "MASTER": $FrameType
static readonly "CODEC": $Codec<($FrameType)>
static readonly "DEFAULT": $FrameType
static readonly "ADVANCED": $FrameType

public static "values"(): ($FrameType)[]
public static "valueOf"(arg0: StringJS): $FrameType
public "getSerializedName"(): StringJS
public "getFrameTexture"(arg0: boolean, arg1: boolean): $ResourceLocation
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
export type $FrameType$$Type = (("default") | ("advanced") | ("master"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameType$$Original = $FrameType;}
declare module "com.stal111.forbidden_arcanus.common.block.ResearchDeskBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DeskBlock} from "com.stal111.forbidden_arcanus.common.block.DeskBlock"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ResearchDeskBlock extends $DeskBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DeskBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResearchDeskBlock$$Type = ($ResearchDeskBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResearchDeskBlock$$Original = $ResearchDeskBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.FerrogneticMixtureItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Holder} from "net.minecraft.core.Holder"

export class $FerrogneticMixtureItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FerrogneticMixtureItem$$Type = ($FerrogneticMixtureItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FerrogneticMixtureItem$$Original = $FerrogneticMixtureItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ForgeDataCache" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$ForgeDataCache$IngredientEntry, $ForgeDataCache$IngredientEntry$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ForgeDataCache$IngredientEntry"
import {$EnhancerDefinition, $EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $ForgeDataCache extends $Record {
static readonly "CODEC": $Codec<($ForgeDataCache)>

constructor(cachedIngredients: $ArrayList$$Type<($ForgeDataCache$IngredientEntry$$Type)>, mainIngredient: $ItemStack$$Type, enhancers: $List$$Type<($Holder$$Type<($EnhancerDefinition$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setMainIngredient"(arg0: $ItemStack$$Type): $ForgeDataCache
public "setIngredient"(arg0: $BlockPos$$Type, arg1: $ItemStack$$Type): void
public "setEnhancers"(arg0: $List$$Type<($Holder$$Type<($EnhancerDefinition$$Type)>)>): $ForgeDataCache
public "getIngredients"(): $List<($ItemStack)>
public "getEnhancers"(): $HolderSet<($EnhancerDefinition)>
public "cachedIngredients"(): $ArrayList<($ForgeDataCache$IngredientEntry)>
public "enhancers"(): $List<($Holder<($EnhancerDefinition)>)>
public "mainIngredient"(): $ItemStack
get "ingredients"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeDataCache$$Type = ({"mainIngredient"?: $ItemStack$$Type, "cachedIngredients"?: $ArrayList$$Type<($ForgeDataCache$IngredientEntry$$Type)>, "enhancers"?: $List$$Type<($Holder$$Type<($EnhancerDefinition$$Type)>)>}) | ([mainIngredient?: $ItemStack$$Type, cachedIngredients?: $ArrayList$$Type<($ForgeDataCache$IngredientEntry$$Type)>, enhancers?: $List$$Type<($Holder$$Type<($EnhancerDefinition$$Type)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ForgeDataCache$$Original = $ForgeDataCache;}
declare module "com.stal111.forbidden_arcanus.common.block.ArcaneCrystalObeliskBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ObeliskPart} from "com.stal111.forbidden_arcanus.common.block.properties.ObeliskPart"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ArcaneCrystalObeliskBlock extends $Block implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PART": $EnumProperty<($ObeliskPart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public static "shouldActivate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneCrystalObeliskBlock$$Type = ($ArcaneCrystalObeliskBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcaneCrystalObeliskBlock$$Original = $ArcaneCrystalObeliskBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.EssenceUtremJarBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$EssenceType} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$UtremJarBlock} from "com.stal111.forbidden_arcanus.common.block.UtremJarBlock"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $EssenceUtremJarBlock extends $UtremJarBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "ESSENCE_TYPE": $EnumProperty<($EssenceType)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceUtremJarBlock$$Type = ($EssenceUtremJarBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceUtremJarBlock$$Original = $EssenceUtremJarBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.BlackHoleBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlackHoleBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleBlock$$Type = ($BlackHoleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackHoleBlock$$Original = $BlackHoleBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.BloodTestTubeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EssenceStorage} from "com.stal111.forbidden_arcanus.common.essence.EssenceStorage"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $BloodTestTubeItem extends $Item {
static readonly "DEFAULT_DATA": $EssenceStorage
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MAX_BLOOD": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodTestTubeItem$$Type = ($BloodTestTubeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BloodTestTubeItem$$Original = $BloodTestTubeItem;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.SolidCapacityBucketItem" {
import {$BucketFamily, $BucketFamily$$Type} from "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder} from "net.minecraft.core.Holder"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CapacityBucket$$Interface} from "com.stal111.forbidden_arcanus.common.item.bucket.CapacityBucket"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$SolidBucketItem} from "net.minecraft.world.item.SolidBucketItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SolidCapacityBucketItem extends $SolidBucketItem implements $CapacityBucket$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $SoundEvent$$Type, arg2: $BucketFamily$$Type, arg3: $Item$Properties$$Type)

public "getFamily"(): $BucketFamily
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFull"(arg0: $ItemStack$$Type): boolean
public "getFullness"(arg0: $ItemStack$$Type): integer
public "getEmptyBucket"(): $Item
public "getMilkBucket"(): $Item
public "setFullness"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "getFilledBucket"(arg0: $Fluid$$Type): $Item
public "getCapacity"(arg0: $ItemStack$$Type): integer
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$getClientAnimationExtension"(): any
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "family"(): $BucketFamily
get "emptyBucket"(): $Item
get "milkBucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidCapacityBucketItem$$Type = ($SolidCapacityBucketItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidCapacityBucketItem$$Original = $SolidCapacityBucketItem;}
declare module "com.stal111.forbidden_arcanus.common.item.crafting.ApplyModifierRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ApplyModifierRecipe} from "com.stal111.forbidden_arcanus.common.item.crafting.ApplyModifierRecipe"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ApplyModifierRecipe$Serializer implements $RecipeSerializer$$Interface<($ApplyModifierRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ApplyModifierRecipe)>

constructor()

public "codec"(): $MapCodec<($ApplyModifierRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ApplyModifierRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApplyModifierRecipe$Serializer$$Type = ($ApplyModifierRecipe$Serializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApplyModifierRecipe$Serializer$$Original = $ApplyModifierRecipe$Serializer;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualInput" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Record} from "java.lang.Record"

export class $RitualInput extends $Record {
static readonly "CODEC": $Codec<($RitualInput)>

constructor(ingredient: $Ingredient$$Type, amount: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "amount"(): integer
public "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualInput$$Type = ({"ingredient"?: $Ingredient$$Type, "amount"?: integer}) | ([ingredient?: $Ingredient$$Type, amount?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualInput$$Original = $RitualInput;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.ClibanoCoreBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ClibanoCoreBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ClibanoCoreBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoCoreBlock$$Type = ($ClibanoCoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoCoreBlock$$Original = $ClibanoCoreBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceModifier" {
import {$EssenceType, $EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"

export interface $EssenceModifier$$Interface {
get "essenceType"(): $EssenceType
}

export class $EssenceModifier implements $EssenceModifier$$Interface {
 "matches"(arg0: $EssenceType$$Type): boolean
 "getModifiedValue"(arg0: integer): integer
 "getEssenceType"(): $EssenceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceModifier$$Type = ($EssenceModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceModifier$$Original = $EssenceModifier;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record} from "java.lang.Record"

export class $BucketFamily extends $Record {
static readonly "EDELWOOD_BUCKET": $BucketFamily

constructor(fluidBuckets: $Map$$Type<($Fluid$$Type), ($Supplier$$Type<($Item$$Type)>)>, milkBucket: $Supplier$$Type<($Item$$Type)>, powderSnowBucket: $Supplier$$Type<($Item$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "powderSnowBucket"(): $Supplier<($Item)>
public "fluidBuckets"(): $Map<($Fluid), ($Supplier<($Item)>)>
public "milkBucket"(): $Supplier<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFamily$$Type = ({"powderSnowBucket"?: $Supplier$$Type<($Item$$Type)>, "fluidBuckets"?: $Map$$Type<($Fluid$$Type), ($Supplier$$Type<($Item$$Type)>)>, "milkBucket"?: $Supplier$$Type<($Item$$Type)>}) | ([powderSnowBucket?: $Supplier$$Type<($Item$$Type)>, fluidBuckets?: $Map$$Type<($Fluid$$Type), ($Supplier$$Type<($Item$$Type)>)>, milkBucket?: $Supplier$$Type<($Item$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BucketFamily$$Original = $BucketFamily;}
declare module "com.stal111.forbidden_arcanus.common.item.SmelterPrismItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $SmelterPrismItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmelterPrismItem$$Type = ($SmelterPrismItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmelterPrismItem$$Original = $SmelterPrismItem;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.ChargeCreeperInteraction" {
import {$MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$EntityInteraction} from "com.stal111.forbidden_arcanus.common.item.mundabitur.EntityInteraction"
import {$EntityInteraction$EntityInteractionContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.EntityInteraction$EntityInteractionContext"

export class $ChargeCreeperInteraction extends $EntityInteraction {
constructor()

public "interact"(arg0: $MundabiturInteraction$Context$$Type): void
public "interact"(arg0: $EntityInteraction$EntityInteractionContext$$Type): void
public "canInteract"(arg0: $MundabiturInteraction$Context$$Type): boolean
public "canInteract"(arg0: $EntityInteraction$EntityInteractionContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeCreeperInteraction$$Type = ($ChargeCreeperInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargeCreeperInteraction$$Original = $ChargeCreeperInteraction;}
declare module "com.stal111.forbidden_arcanus.common.block.FungyssBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FungyssBlock extends $BushBlock implements $BonemealableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FungyssBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FungyssBlock$$Type = ($FungyssBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FungyssBlock$$Original = $FungyssBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.CreateForgeInteraction" {
import {$TransformPatternInteraction$TransformPatternContext$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction$TransformPatternContext"
import {$MundabiturInteraction$Context$$Type} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$TransformPatternInteraction} from "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction"
import {$BlockPattern$$Type} from "net.minecraft.world.level.block.state.pattern.BlockPattern"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateForgeInteraction extends $TransformPatternInteraction {
constructor(arg0: $Predicate$$Type<($BlockState)>, arg1: $BlockPattern$$Type)

public "interact"(arg0: $TransformPatternInteraction$TransformPatternContext$$Type): void
public "interact"(arg0: $MundabiturInteraction$Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateForgeInteraction$$Type = ($CreateForgeInteraction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateForgeInteraction$$Original = $CreateForgeInteraction;}
declare module "com.stal111.forbidden_arcanus.common.item.bucket.CapacityFluidBucket" {
import {$CapacityBucket$$Interface} from "com.stal111.forbidden_arcanus.common.item.bucket.CapacityBucket"
import {$BucketFamily} from "com.stal111.forbidden_arcanus.common.item.bucket.BucketFamily"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Item} from "net.minecraft.world.item.Item"

export interface $CapacityFluidBucket$$Interface extends $CapacityBucket$$Interface {
get "fluid"(): $Fluid
get "family"(): $BucketFamily
get "emptyBucket"(): $Item
get "milkBucket"(): $Item
}

export class $CapacityFluidBucket implements $CapacityFluidBucket$$Interface {
 "getFluid"(): $Fluid
 "getFamily"(): $BucketFamily
 "isFull"(arg0: $ItemStack$$Type): boolean
 "getFullness"(arg0: $ItemStack$$Type): integer
 "getEmptyBucket"(): $Item
 "getMilkBucket"(): $Item
 "setFullness"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
 "getFilledBucket"(arg0: $Fluid$$Type): $Item
 "getCapacity"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityFluidBucket$$Type = ($CapacityFluidBucket);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacityFluidBucket$$Original = $CapacityFluidBucket;}
declare module "com.stal111.forbidden_arcanus.common.item.ModBoatItem" {
import {$BoatItem} from "net.minecraft.world.item.BoatItem"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ModBoat$Type$$Type} from "com.stal111.forbidden_arcanus.common.entity.ModBoat$Type"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $ModBoatItem extends $BoatItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $ModBoat$Type$$Type, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBoatItem$$Type = ($ModBoatItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModBoatItem$$Original = $ModBoatItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.HephaestusForgeLevel" {
import {$Enum} from "java.lang.Enum"
import {$HephaestusForgeBlock} from "com.stal111.forbidden_arcanus.common.block.HephaestusForgeBlock"
import {$EssencesDefinition} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesDefinition"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$IntSupplier$$Interface} from "java.util.function.IntSupplier"

export class $HephaestusForgeLevel extends $Enum<($HephaestusForgeLevel)> implements $IntSupplier$$Interface {
static readonly "FIVE": $HephaestusForgeLevel
static readonly "ONE": $HephaestusForgeLevel
static readonly "FOUR": $HephaestusForgeLevel
static readonly "TWO": $HephaestusForgeLevel
static readonly "THREE": $HephaestusForgeLevel

public static "values"(): ($HephaestusForgeLevel)[]
public static "valueOf"(arg0: StringJS): $HephaestusForgeLevel
public "getAsInt"(): integer
public "getMaxEssences"(): $EssencesDefinition
public "getBlock"(): $HephaestusForgeBlock
public static "getFromIndex"(arg0: integer): $HephaestusForgeLevel
public "getMaxSouls"(): integer
public "getMaxExperience"(): integer
public "getMaxBlood"(): integer
public "getMaxAureal"(): integer
public "getMaxAmount"(arg0: $EssenceType$$Type): integer
get "asInt"(): integer
get "maxEssences"(): $EssencesDefinition
get "block"(): $HephaestusForgeBlock
get "maxSouls"(): integer
get "maxExperience"(): integer
get "maxBlood"(): integer
get "maxAureal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HephaestusForgeLevel$$Type = (("one") | ("two") | ("three") | ("four") | ("five"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HephaestusForgeLevel$$Original = $HephaestusForgeLevel;}
declare module "com.stal111.forbidden_arcanus.common.block.skull.ObsidianWallSkullBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WallSkullBlock} from "net.minecraft.world.level.block.WallSkullBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SkullBlock$Type$$Type} from "net.minecraft.world.level.block.SkullBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ObsidianWallSkullBlock extends $WallSkullBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSkullBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $SkullBlock$Type$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianWallSkullBlock$$Type = ($ObsidianWallSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObsidianWallSkullBlock$$Original = $ObsidianWallSkullBlock;}
declare module "com.stal111.forbidden_arcanus.common.world.feature.RootFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
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

export class $RootFeature extends $Feature<($BlockStateConfiguration)> {
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

constructor(arg0: $Codec$$Type<($BlockStateConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($BlockStateConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootFeature$$Type = ($RootFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RootFeature$$Original = $RootFeature;}
declare module "com.stal111.forbidden_arcanus.common.world.feature.config.BigFungyssFeatureConfig" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $BigFungyssFeatureConfig implements $FeatureConfiguration$$Interface {
readonly "capProvider": $BlockStateProvider
static readonly "CODEC": $Codec<($BigFungyssFeatureConfig)>
readonly "stemProvider": $BlockStateProvider
readonly "hyphaeProvider": $BlockStateProvider
readonly "variant": integer

constructor(arg0: $BlockStateProvider$$Type, arg1: $BlockStateProvider$$Type, arg2: $BlockStateProvider$$Type, arg3: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFungyssFeatureConfig$$Type = ($BigFungyssFeatureConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigFungyssFeatureConfig$$Original = $BigFungyssFeatureConfig;}
declare module "com.stal111.forbidden_arcanus.common.item.crafting.ClibanoRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record} from "java.lang.Record"

export class $ClibanoRecipeInput extends $Record implements $RecipeInput$$Interface {
constructor(firstInput: $ItemStack$$Type, secondInput: $ItemStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "getInputs"(): $List<($ItemStack)>
public "secondInput"(): $ItemStack
public "firstInput"(): $ItemStack
public "isEmpty"(): boolean
public "find"(filter: $SlotFilter$$Type): $ItemStack
public "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "inputs"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoRecipeInput$$Type = ({"firstInput"?: $ItemStack$$Type, "secondInput"?: $ItemStack$$Type}) | ([firstInput?: $ItemStack$$Type, secondInput?: $ItemStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoRecipeInput$$Original = $ClibanoRecipeInput;}
declare module "com.stal111.forbidden_arcanus.common.item.XpetrifiedOrbItem" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$Holder} from "net.minecraft.core.Holder"

export class $XpetrifiedOrbItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpetrifiedOrbItem$$Type = ($XpetrifiedOrbItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XpetrifiedOrbItem$$Original = $XpetrifiedOrbItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoCookingTimes" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$Record} from "java.lang.Record"

export class $ClibanoCookingTimes extends $Record {
static readonly "CODEC": $Codec<($ClibanoCookingTimes)>

constructor(cookingTimes: $List$$Type<(integer)>)

public "get"(arg0: $ClibanoFireType$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer): $ClibanoCookingTimes
public "cookingTimes"(): $List<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoCookingTimes$$Type = ({"cookingTimes"?: $List$$Type<(integer)>}) | ([cookingTimes?: $List$$Type<(integer)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoCookingTimes$$Original = $ClibanoCookingTimes;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.effect.ConditionalEnhancerEffect" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EnhancerEffect, $EnhancerEffect$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffect"
import {$EffectCondition, $EffectCondition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.condition.EffectCondition"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $ConditionalEnhancerEffect<T extends $EnhancerEffect> extends $Record {
constructor(effect: T, conditions: ($List$$Type<($EffectCondition$$Type)>)?)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<T extends $EnhancerEffect>(arg0: T): $ConditionalEnhancerEffect<(T)>
public static "of"<T extends $EnhancerEffect>(arg0: T, arg1: $List$$Type<($EffectCondition$$Type)>): $ConditionalEnhancerEffect<(T)>
public "effect"(): T
public "conditions"(): $Optional<($List<($EffectCondition)>)>
public static "codec"<T extends $EnhancerEffect>(arg0: $MapCodec$$Type<(T)>): $MapCodec<($ConditionalEnhancerEffect<(T)>)>
public "checkConditions"(arg0: $Level$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalEnhancerEffect$$Type<T> = ({"effect"?: T, "conditions"?: ($List$$Type<($EffectCondition$$Type)>)?}) | ([effect?: T, conditions?: ($List$$Type<($EffectCondition$$Type)>)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConditionalEnhancerEffect$$Original<T> = $ConditionalEnhancerEffect<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesDefinition" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$List$$Type} from "java.util.List"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$EssenceModifier$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceModifier"
import {$EssencesStorage} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssencesStorage"
import {$Record} from "java.lang.Record"

export class $EssencesDefinition extends $Record {
static readonly "CODEC": $Codec<($EssencesDefinition)>
static readonly "EMPTY": $EssencesDefinition

constructor(aureal: integer, souls: integer, blood: integer, experience: integer)

public "get"(arg0: $EssenceType$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $EssencesDefinition
public "forEach"(arg0: $BiConsumer$$Type<($EssenceType), (integer)>): void
public "experience"(): integer
public "blood"(): integer
public "aureal"(): integer
public "souls"(): integer
public "applyModifiers"(arg0: $List$$Type<($EssenceModifier$$Type)>): $EssencesDefinition
public "mutable"(): $EssencesStorage
public "hasMoreThan"(arg0: $EssencesDefinition$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssencesDefinition$$Type = ({"aureal"?: integer, "blood"?: integer, "experience"?: integer, "souls"?: integer}) | ([aureal?: integer, blood?: integer, experience?: integer, souls?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssencesDefinition$$Original = $EssencesDefinition;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.EntityInteraction$EntityInteractionContext" {
import {$MundabiturInteraction$Context$$Interface} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $EntityInteraction$EntityInteractionContext extends $Record implements $MundabiturInteraction$Context$$Interface {
constructor(entity: $LivingEntity$$Type, hand: $InteractionHand$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): $EntityInteraction$EntityInteractionContext
public "hand"(): $InteractionHand
public "entity"(): $LivingEntity
public "getPos"(): $BlockPos
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInteraction$EntityInteractionContext$$Type = ({"hand"?: $InteractionHand$$Type, "entity"?: $LivingEntity$$Type}) | ([hand?: $InteractionHand$$Type, entity?: $LivingEntity$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityInteraction$EntityInteractionContext$$Original = $EntityInteraction$EntityInteractionContext;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.ClibanoCornerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AbstractClibanoFrameBlock} from "com.stal111.forbidden_arcanus.common.block.clibano.AbstractClibanoFrameBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ClibanoCornerBlock extends $AbstractClibanoFrameBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ClibanoCornerBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DYNAMIC_DROP_ID": $ResourceLocation
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getFacingProperty"(): $DirectionProperty
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "facingProperty"(): $DirectionProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoCornerBlock$$Type = ($ClibanoCornerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoCornerBlock$$Original = $ClibanoCornerBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $EssenceType extends $Enum<($EssenceType)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $StringRepresentable$EnumCodec<($EssenceType)>
static readonly "SOULS": $EssenceType
static readonly "EXPERIENCE": $EssenceType
static readonly "AUREAL": $EssenceType
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EssenceType)>
static readonly "BLOOD": $EssenceType

public static "values"(): ($EssenceType)[]
public static "valueOf"(arg0: StringJS): $EssenceType
public "getComponent"(): $Component
public "getSerializedName"(): StringJS
public "getSpriteLocation"(): $ResourceLocation
public "getLightEmission"(): integer
public "getParticleType"(): $ParticleType<(never)>
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "component"(): $Component
get "serializedName"(): StringJS
get "spriteLocation"(): $ResourceLocation
get "lightEmission"(): integer
get "particleType"(): $ParticleType<(never)>
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceType$$Type = (("aureal") | ("souls") | ("blood") | ("experience"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceType$$Original = $EssenceType;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.input.HephaestusForgeInput" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EssenceValue} from "com.stal111.forbidden_arcanus.common.essence.EssenceValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"

export interface $HephaestusForgeInput$$Interface {
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusHephaestusForgeInput
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusHephaestusForgeInputTag
}

export class $HephaestusForgeInput implements $HephaestusForgeInput$$Interface {
 "canInput"(arg0: $EssenceType$$Type, arg1: $ItemStack$$Type): boolean
 "getInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
 "getMaxInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
 "finishInput"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HephaestusForgeInput$$Type = (Special.ForbiddenArcanusHephaestusForgeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HephaestusForgeInput$$Original = $HephaestusForgeInput;}
declare module "com.stal111.forbidden_arcanus.common.block.ArcaneDragonEggBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$FallingBlock} from "net.minecraft.world.level.block.FallingBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArcaneDragonEggBlock extends $FallingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ArcaneDragonEggBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcaneDragonEggBlock$$Type = ($ArcaneDragonEggBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArcaneDragonEggBlock$$Original = $ArcaneDragonEggBlock;}
declare module "com.stal111.forbidden_arcanus.common.advancements.critereon.RitualCompletedTrigger" {
import {$SimpleCriterionTrigger} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RitualCompletedTrigger$TriggerInstance} from "com.stal111.forbidden_arcanus.common.advancements.critereon.RitualCompletedTrigger$TriggerInstance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $RitualCompletedTrigger extends $SimpleCriterionTrigger<($RitualCompletedTrigger$TriggerInstance)> {
constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public "codec"(): $Codec<($RitualCompletedTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualCompletedTrigger$$Type = ($RitualCompletedTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualCompletedTrigger$$Original = $RitualCompletedTrigger;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.RitualResult" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RitualResultType} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.RitualResultType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $RitualResult$$Interface {
get "type"(): $RitualResultType<($RitualResult)>
}

export class $RitualResult implements $RitualResult$$Interface {
static readonly "DIRECT_CODEC": $Codec<($RitualResult)>

 "getType"(): $RitualResultType<($RitualResult)>
 "executeLevelEffect"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getResultItem"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualResult$$Type = ($RitualResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RitualResult$$Original = $RitualResult;}
declare module "com.stal111.forbidden_arcanus.common.block.GrowingEdelwoodBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock} from "net.minecraft.world.level.block.BushBlock"
import {$BonemealableBlock$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GrowingEdelwoodBlock extends $BushBlock implements $BonemealableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($GrowingEdelwoodBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "growEdelwood"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $RandomSource$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowingEdelwoodBlock$$Type = ($GrowingEdelwoodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrowingEdelwoodBlock$$Original = $GrowingEdelwoodBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.CarvedEdelwoodLogBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$EdelwoodLogBlock} from "com.stal111.forbidden_arcanus.common.block.EdelwoodLogBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CarvedEdelwoodLogBlock extends $EdelwoodLogBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "OILY": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEAVES": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarvedEdelwoodLogBlock$$Type = ($CarvedEdelwoodLogBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarvedEdelwoodLogBlock$$Original = $CarvedEdelwoodLogBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.AbstractClibanoFrameBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List} from "java.util.List"
import {$ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractClibanoFrameBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DYNAMIC_DROP_ID": $ResourceLocation
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getFacingProperty"(): $DirectionProperty
public "updateAppearance"(arg0: $BlockState$$Type, arg1: boolean, arg2: $ClibanoFireType$$Type): $BlockState
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "facingProperty"(): $DirectionProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClibanoFrameBlock$$Type = ($AbstractClibanoFrameBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClibanoFrameBlock$$Original = $AbstractClibanoFrameBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.ModArrowItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ArrowItem} from "net.minecraft.world.item.ArrowItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AbstractArrow} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder} from "net.minecraft.core.Holder"

export class $ModArrowItem extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "createArrow"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): $AbstractArrow
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModArrowItem$$Type = ($ModArrowItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModArrowItem$$Original = $ModArrowItem;}
declare module "com.stal111.forbidden_arcanus.common.item.crafting.ApplyModifierRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingRecipe$$Interface} from "net.minecraft.world.item.crafting.SmithingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ItemModifier, $ItemModifier$$Type} from "com.stal111.forbidden_arcanus.common.item.modifier.ItemModifier"
import {$Record} from "java.lang.Record"

export class $ApplyModifierRecipe extends $Record implements $SmithingRecipe$$Interface {
constructor(template: $Ingredient$$Type, addition: $Ingredient$$Type, modifier: $Holder$$Type<($ItemModifier)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SmithingRecipeInput$$Type, arg1: $Level$$Type): boolean
public "modifier"(): $Holder<($ItemModifier)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "template"(): $Ingredient
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "addition"(): $Ingredient
public "getSerializer"(): $RecipeSerializer<(never)>
public "isTemplateIngredient"(arg0: $ItemStack$$Type): boolean
public "isAdditionIngredient"(arg0: $ItemStack$$Type): boolean
public "isBaseIngredient"(arg0: $ItemStack$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $SmithingRecipeInput$$Type): $NonNullList<($ItemStack)>
public "getGroup"(): StringJS
get "incomplete"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "type"(): $RecipeType<(never)>
get "toastSymbol"(): $ItemStack
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ApplyModifierRecipe$$Type = ({"template"?: $Ingredient$$Type, "addition"?: $Ingredient$$Type, "modifier"?: $Holder$$Type<($ItemModifier)>}) | ([template?: $Ingredient$$Type, addition?: $Ingredient$$Type, modifier?: $Holder$$Type<($ItemModifier)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ApplyModifierRecipe$$Original = $ApplyModifierRecipe;}
declare module "com.stal111.forbidden_arcanus.common.block.UpwindBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UpwindBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPWIND_HEIGHT": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "createUpwindAbove"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpwindBlock$$Type = ($UpwindBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpwindBlock$$Original = $UpwindBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.DeskBlock" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DeskBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DeskBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeskBlock$$Type = ($DeskBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeskBlock$$Original = $DeskBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.SpectralEyeAmuletItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SpectralEyeAmuletItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "isActive"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpectralEyeAmuletItem$$Type = ($SpectralEyeAmuletItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpectralEyeAmuletItem$$Original = $SpectralEyeAmuletItem;}
declare module "com.stal111.forbidden_arcanus.common.block.skull.ObsidianSkullType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$SkullBlock$Type$$Interface} from "net.minecraft.world.level.block.SkullBlock$Type"

export class $ObsidianSkullType extends $Enum<($ObsidianSkullType)> implements $SkullBlock$Type$$Interface, $StringRepresentable$$Interface {
static readonly "FRAGMENTED": $ObsidianSkullType
static readonly "CODEC": $Codec<($ObsidianSkullType)>
static readonly "AUREALIC": $ObsidianSkullType
static readonly "ETERNAL": $ObsidianSkullType
static readonly "CRACKED": $ObsidianSkullType
static readonly "DEFAULT": $ObsidianSkullType
static readonly "FADING": $ObsidianSkullType

public static "values"(): ($ObsidianSkullType)[]
public static "valueOf"(arg0: StringJS): $ObsidianSkullType
public "tick"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "getTextureLocation"(): $ResourceLocation
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "textureLocation"(): $ResourceLocation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianSkullType$$Type = (("obsidian_skull") | ("cracked_obsidian_skull") | ("fragmented_obsidian_skull") | ("fading_obsidian_skull") | ("aurealic_obsidian_skull") | ("eternal_obsidian_skull"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObsidianSkullType$$Original = $ObsidianSkullType;}
declare module "com.stal111.forbidden_arcanus.common.item.modifier.ItemModifier" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemModifier$DisplaySettings, $ItemModifier$DisplaySettings$$Type} from "com.stal111.forbidden_arcanus.common.item.modifier.ItemModifier$DisplaySettings"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Holder} from "net.minecraft.core.Holder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record} from "java.lang.Record"

export class $ItemModifier extends $Record {
static readonly "CODEC": $Codec<($Holder<($ItemModifier)>)>
static readonly "DIRECT_CODEC": $Codec<($ItemModifier)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($ItemModifier)>)>

constructor(predicate: $ItemPredicate$$Type, incompatibleItems: $HolderSet$$Type<($Item)>, incompatibleEnchantments: $HolderSet$$Type<($Enchantment)>, componentsToRemove: $HolderSet$$Type<($DataComponentType<(never)>)>, displaySettings: $ItemModifier$DisplaySettings$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "predicate"(): $ItemPredicate
public "isValidItem"(arg0: $ItemStack$$Type): boolean
public "displaySettings"(): $ItemModifier$DisplaySettings
public "incompatibleEnchantments"(): $HolderSet<($Enchantment)>
public "incompatibleItems"(): $HolderSet<($Item)>
public "componentsToRemove"(): $HolderSet<($DataComponentType<(never)>)>
public "onApplied"(arg0: $ItemStack$$Type): void
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusItemModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusItemModifierTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModifier$$Type = (Special.ForbiddenArcanusItemModifier) | ({"predicate"?: $ItemPredicate$$Type, "componentsToRemove"?: $HolderSet$$Type<($DataComponentType<(never)>)>, "incompatibleItems"?: $HolderSet$$Type<($Item)>, "displaySettings"?: $ItemModifier$DisplaySettings$$Type, "incompatibleEnchantments"?: $HolderSet$$Type<($Enchantment)>}) | ([predicate?: $ItemPredicate$$Type, componentsToRemove?: $HolderSet$$Type<($DataComponentType<(never)>)>, incompatibleItems?: $HolderSet$$Type<($Item)>, displaySettings?: $ItemModifier$DisplaySettings$$Type, incompatibleEnchantments?: $HolderSet$$Type<($Enchantment)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModifier$$Original = $ItemModifier;}
declare module "com.stal111.forbidden_arcanus.common.item.SoulExtractorItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SoulExtractorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulExtractorItem$$Type = ($SoulExtractorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoulExtractorItem$$Original = $SoulExtractorItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.Ritual" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RitualResult, $RitualResult$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.RitualResult"
import {$RitualInput, $RitualInput$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualInput"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RitualRequirements, $RitualRequirements$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualRequirements"
import {$ForgeDataCache$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ForgeDataCache"
import {$MagicCircleType, $MagicCircleType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.circle.MagicCircleType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $Ritual extends $Record {
static readonly "CODEC": $Codec<($Holder<($Ritual)>)>
static readonly "NETWORK_CODEC": $Codec<($Ritual)>
static readonly "DEFAULT_DURATION": integer
static readonly "DIRECT_CODEC": $Codec<($Ritual)>

constructor(inputs: $List$$Type<($RitualInput$$Type)>, mainIngredient: $Ingredient$$Type, result: $RitualResult$$Type, requirements: $RitualRequirements$$Type, magicCircleType: $Holder$$Type<($MagicCircleType)>, duration: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "result"(): $RitualResult
public "duration"(): integer
public "canStart"(arg0: $ForgeDataCache$$Type, arg1: integer): boolean
public "inputs"(): $List<($RitualInput)>
public "magicCircleType"(): $Holder<($MagicCircleType)>
public "checkIngredients"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $ItemStack$$Type): boolean
public "requirements"(): $RitualRequirements
public "mainIngredient"(): $Ingredient
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusHephaestusForgeRitual
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusHephaestusForgeRitualTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ritual$$Type = (Special.ForbiddenArcanusHephaestusForgeRitual) | ({"magicCircleType"?: $Holder$$Type<($MagicCircleType)>, "inputs"?: $List$$Type<($RitualInput$$Type)>, "requirements"?: $RitualRequirements$$Type, "result"?: $RitualResult$$Type, "duration"?: integer, "mainIngredient"?: $Ingredient$$Type}) | ([magicCircleType?: $Holder$$Type<($MagicCircleType)>, inputs?: $List$$Type<($RitualInput$$Type)>, requirements?: $RitualRequirements$$Type, result?: $RitualResult$$Type, duration?: integer, mainIngredient?: $Ingredient$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Ritual$$Original = $Ritual;}
declare module "com.stal111.forbidden_arcanus.common.block.SoullessSandBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SoulSandBlock} from "net.minecraft.world.level.block.SoulSandBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SoullessSandBlock extends $SoulSandBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SoulSandBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoullessSandBlock$$Type = ($SoullessSandBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoullessSandBlock$$Original = $SoullessSandBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EnhancerTarget, $EnhancerTarget$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerTarget"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$EnhancerEffect, $EnhancerEffect$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.EnhancerEffect"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Stream} from "java.util.stream.Stream"
import {$ConditionalEnhancerEffect, $ConditionalEnhancerEffect$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.effect.ConditionalEnhancerEffect"
import {$Record} from "java.lang.Record"

export class $EnhancerDefinition extends $Record {
static readonly "CODEC": $Codec<($EnhancerDefinition)>
static readonly "NETWORK_CODEC": $Codec<($EnhancerDefinition)>
static readonly "LIST_CODEC": $Codec<($HolderSet<($EnhancerDefinition)>)>
static readonly "REFERENCE_CODEC": $Codec<($Holder<($EnhancerDefinition)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($EnhancerDefinition)>)>

constructor(description: $Map$$Type<($EnhancerTarget$$Type), ($Component$$Type)>, displayItem: $Holder$$Type<($Item)>, effects: $List$$Type<($ConditionalEnhancerEffect$$Type<($EnhancerEffect$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $Map$$Type<($EnhancerTarget$$Type), ($Component$$Type)>, arg1: $Item$$Type, ...arg2: ($ConditionalEnhancerEffect$$Type<($EnhancerEffect$$Type)>)[]): $EnhancerDefinition
public "description"(): $Map<($EnhancerTarget), ($Component)>
public "effects"(): $List<($ConditionalEnhancerEffect<($EnhancerEffect)>)>
public "displayItem"(): $Holder<($Item)>
public "getEffects"(arg0: $EnhancerTarget$$Type): $Stream<($EnhancerEffect)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusEnhancerDefinition
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusEnhancerDefinitionTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnhancerDefinition$$Type = (Special.ForbiddenArcanusEnhancerDefinition) | ({"description"?: $Map$$Type<($EnhancerTarget$$Type), ($Component$$Type)>, "effects"?: $List$$Type<($ConditionalEnhancerEffect$$Type<($EnhancerEffect$$Type)>)>, "displayItem"?: $Holder$$Type<($Item)>}) | ([description?: $Map$$Type<($EnhancerTarget$$Type), ($Component$$Type)>, effects?: $List$$Type<($ConditionalEnhancerEffect$$Type<($EnhancerEffect$$Type)>)>, displayItem?: $Holder$$Type<($Item)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnhancerDefinition$$Original = $EnhancerDefinition;}
declare module "com.stal111.forbidden_arcanus.common.block.clibano.ClibanoSideBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AbstractClibanoFrameBlock} from "com.stal111.forbidden_arcanus.common.block.clibano.AbstractClibanoFrameBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClibanoSideBlock extends $AbstractClibanoFrameBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ClibanoSideBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "DYNAMIC_DROP_ID": $ResourceLocation
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getFacingProperty"(): $DirectionProperty
public "updateAppearance"(arg0: $BlockState$$Type, arg1: boolean, arg2: $ClibanoFireType$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "facingProperty"(): $DirectionProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoSideBlock$$Type = ($ClibanoSideBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClibanoSideBlock$$Original = $ClibanoSideBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.HephaestusForgeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HephaestusForgeLevel, $HephaestusForgeLevel$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.HephaestusForgeLevel"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HephaestusForgeBlock extends $Block implements $SimpleWaterloggedBlock$$Interface, $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "ACTIVATED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $HephaestusForgeLevel$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getLevel"(): $HephaestusForgeLevel
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "updateState"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "level"(): $HephaestusForgeLevel
get "descriptionId"(): StringJS
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HephaestusForgeBlock$$Type = ($HephaestusForgeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HephaestusForgeBlock$$Original = $HephaestusForgeBlock;}
declare module "com.stal111.forbidden_arcanus.common.block.skull.ObsidianSkullBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SkullBlock} from "net.minecraft.world.level.block.SkullBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SkullBlock$Type$$Type} from "net.minecraft.world.level.block.SkullBlock$Type"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Equipable} from "net.minecraft.world.item.Equipable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ObsidianSkullBlock extends $SkullBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SkullBlock)>
static readonly "MAX": integer
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $SkullBlock$Type$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianSkullBlock$$Type = ($ObsidianSkullBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ObsidianSkullBlock$$Original = $ObsidianSkullBlock;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturDustItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MundabiturDustItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MundabiturDustItem$$Type = ($MundabiturDustItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MundabiturDustItem$$Original = $MundabiturDustItem;}
declare module "com.stal111.forbidden_arcanus.common.item.AurealTankItem" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$EssenceStorage} from "com.stal111.forbidden_arcanus.common.essence.EssenceStorage"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $AurealTankItem extends $Item {
static readonly "DEFAULT_DATA": $EssenceStorage
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_CAPACITY": integer
static readonly "DEFAULT_CAPACITY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AurealTankItem$$Type = ($AurealTankItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AurealTankItem$$Original = $AurealTankItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.circle.MagicCircleType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MagicCircle} from "com.stal111.forbidden_arcanus.common.block.entity.forge.MagicCircle"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder} from "net.minecraft.core.Holder"
import {$Record} from "java.lang.Record"

export class $MagicCircleType extends $Record {
static readonly "CODEC": $Codec<($Holder<($MagicCircleType)>)>
static readonly "DIRECT_CODEC": $Codec<($MagicCircleType)>

constructor(innerTexture: $ResourceLocation$$Type, outerTexture: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $MagicCircle
public "innerTexture"(): $ResourceLocation
public "outerTexture"(): $ResourceLocation
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusMagicCircle
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusMagicCircleTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicCircleType$$Type = (Special.ForbiddenArcanusMagicCircle) | ({"innerTexture"?: $ResourceLocation$$Type, "outerTexture"?: $ResourceLocation$$Type}) | ([innerTexture?: $ResourceLocation$$Type, outerTexture?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MagicCircleType$$Original = $MagicCircleType;}
declare module "com.stal111.forbidden_arcanus.common.item.DracoArcanusScepterItem" {
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DracoArcanusScepterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DracoArcanusScepterItem$$Type = ($DracoArcanusScepterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DracoArcanusScepterItem$$Original = $DracoArcanusScepterItem;}
declare module "com.stal111.forbidden_arcanus.common.block.pedestal.effect.UpdateForgeIngredientsEffect" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PedestalEffect} from "com.stal111.forbidden_arcanus.common.block.pedestal.effect.PedestalEffect"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $UpdateForgeIngredientsEffect extends $PedestalEffect {
constructor()

public "execute"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateForgeIngredientsEffect$$Type = ($UpdateForgeIngredientsEffect);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpdateForgeIngredientsEffect$$Original = $UpdateForgeIngredientsEffect;}
declare module "com.stal111.forbidden_arcanus.common.world.feature.BigFungyssFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$BigFungyssFeatureConfig, $BigFungyssFeatureConfig$$Type} from "com.stal111.forbidden_arcanus.common.world.feature.config.BigFungyssFeatureConfig"
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

export class $BigFungyssFeature extends $Feature<($BigFungyssFeatureConfig)> {
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

constructor(arg0: $Codec$$Type<($BigFungyssFeatureConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($BigFungyssFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFungyssFeature$$Type = ($BigFungyssFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigFungyssFeature$$Original = $BigFungyssFeature;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $MundabiturInteraction$Context$$Interface {

(): $BlockPos$$Type
get "pos"(): $BlockPos
}

export class $MundabiturInteraction$Context implements $MundabiturInteraction$Context$$Interface {
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MundabiturInteraction$Context$$Type = (() => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MundabiturInteraction$Context$$Original = $MundabiturInteraction$Context;}
declare module "com.stal111.forbidden_arcanus.common.item.QuantumCatcherItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $QuantumCatcherItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TagKey$$Type<($EntityType<(never)>)>, arg1: $Item$Properties$$Type)

public "onEntityInteract"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type): $InteractionResult
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "calculateAurealCost"(arg0: $LivingEntity$$Type): integer
public "isValidEntity"(arg0: $LivingEntity$$Type): boolean
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCatcherItem$$Type = ($QuantumCatcherItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuantumCatcherItem$$Original = $QuantumCatcherItem;}
declare module "com.stal111.forbidden_arcanus.common.block.entity.forge.input.ExtractEnchantmentsInput" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$EssenceValue} from "com.stal111.forbidden_arcanus.common.essence.EssenceValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EssenceType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.essence.EssenceType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HephaestusForgeInput$$Interface} from "com.stal111.forbidden_arcanus.common.block.entity.forge.input.HephaestusForgeInput"

export class $ExtractEnchantmentsInput implements $HephaestusForgeInput$$Interface {
static readonly "CODEC": $MapCodec<($ExtractEnchantmentsInput)>

constructor()

public "canInput"(arg0: $EssenceType$$Type, arg1: $ItemStack$$Type): boolean
public "getInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
public "finishInput"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "getMaxInputValue"(arg0: $ItemStack$$Type, arg1: $RandomSource$$Type): $EssenceValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractEnchantmentsInput$$Type = ($ExtractEnchantmentsInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractEnchantmentsInput$$Original = $ExtractEnchantmentsInput;}
declare module "com.stal111.forbidden_arcanus.common.item.enhancer.condition.EffectConditionType" {
import {$EffectCondition} from "com.stal111.forbidden_arcanus.common.item.enhancer.condition.EffectCondition"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $EffectConditionType<T extends $EffectCondition> extends $Record {
constructor(codec: $MapCodec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ForbiddenArcanusEnhancerEffectCondition
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ForbiddenArcanusEnhancerEffectConditionTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectConditionType$$Type<T> = (Special.ForbiddenArcanusEnhancerEffectCondition) | ({"codec"?: $MapCodec$$Type<(T)>}) | ([codec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectConditionType$$Original<T> = $EffectConditionType<(T)>;}
declare module "com.stal111.forbidden_arcanus.common.item.mundabitur.TransformPatternInteraction$TransformPatternContext" {
import {$MundabiturInteraction$Context$$Interface} from "com.stal111.forbidden_arcanus.common.item.mundabitur.MundabiturInteraction$Context"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $TransformPatternInteraction$TransformPatternContext extends $Record implements $MundabiturInteraction$Context$$Interface {
constructor(level: $Level$$Type, pos: $BlockPos$$Type, hand: $InteractionHand$$Type, clickedFace: $Direction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $InteractionHand$$Type, arg3: $Direction$$Type): $TransformPatternInteraction$TransformPatternContext
public "pos"(): $BlockPos
public "level"(): $Level
public "hand"(): $InteractionHand
public "clickedFace"(): $Direction
public "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformPatternInteraction$TransformPatternContext$$Type = ({"clickedFace"?: $Direction$$Type, "pos"?: $BlockPos$$Type, "level"?: $Level$$Type, "hand"?: $InteractionHand$$Type}) | ([clickedFace?: $Direction$$Type, pos?: $BlockPos$$Type, level?: $Level$$Type, hand?: $InteractionHand$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformPatternInteraction$TransformPatternContext$$Original = $TransformPatternInteraction$TransformPatternContext;}
