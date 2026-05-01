declare module "dev.shadowsoffire.apothic_enchanting.api.EnchantableItem" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$List, $List$$Type} from "java.util.List"
import {$EnchantmentTableStats$$Type} from "dev.shadowsoffire.apothic_enchanting.table.EnchantmentTableStats"

export interface $EnchantableItem$$Interface {
}

export class $EnchantableItem implements $EnchantableItem$$Interface {
 "selectEnchantments"(arg0: $List$$Type<($EnchantmentInstance$$Type)>, arg1: $RandomSource$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: $EnchantmentTableStats$$Type): $List<($EnchantmentInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantableItem$$Type = ($EnchantableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantableItem$$Original = $EnchantableItem;}
declare module "dev.shadowsoffire.apothic_enchanting.api.EnchantmentStatBlock" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BubbleColumnDirection} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Enchantment} from "net.minecraft.world.item.enchantment.Enchantment"
import {$SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export interface $EnchantmentStatBlock$$Interface extends $IBlockExtension$$Interface {
}

export class $EnchantmentStatBlock implements $EnchantmentStatBlock$$Interface {
 "getTableParticle"(arg0: $BlockState$$Type): $ParticleOptions
 "getQuantaBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "allowsTreasure"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "getBonusClues"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): integer
 "providesStability"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "spawnTableParticle"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): void
 "getArcanaBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getBlacklistedEnchantments"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Set<($Holder<($Enchantment)>)>
 "getMaxEnchantingPower"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(never)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "ignitedByLava"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentStatBlock$$Type = ($EnchantmentStatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentStatBlock$$Original = $EnchantmentStatBlock;}
